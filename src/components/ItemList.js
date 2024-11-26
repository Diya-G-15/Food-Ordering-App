import { useDispatch ,useSelector } from "react-redux";
import { useContext  } from "react";
import { addItem, addRest,itemCount,totalPrice,items, handleItemCount ,totalPriceMinus, removeItem} from "../utils/cartSlice.js";
import { CDN_URL } from "../utils/constants.js";
import UserContext from "../utils/UserContext.js";
import  { ToastContainer, toast } from "react-toastify";
-toast
export const ItemList = (props) => {
  const{setValVegBtn,vegBtn,nonVegBtn} = useContext(UserContext);
  const list = props.data;
  const {resCart}=props;
  
 
  const dispatch = useDispatch();
  const {res,items,price}=useSelector((store)=>{
    return store.cart;
})
  const handleAdd = (item) => {
    if(items.includes(item)){
      console.log("item already there in cart")
      toast.message("Item already  in cart")
      return;
    }
    dispatch(addItem(item));
    dispatch(addRest(resCart));
    dispatch(totalPrice(item.card.info.price?item.card.info.price/100:item.card.info.defaultPrice));
    toast.success("Item added in Cart")
    
    console.log("handleaddcalled")
    
  };



  return list.map((item) => {
    return (
      <div
  className="border-b-2 border-gray p-4 pb-8 m-4 flex flex-col sm:flex-row justify-around gap-4 sm:gap-12 lg:gap-48"
  key={item.card.info.name}
>
  <div className="w-full sm:w-2/3 lg:w-11/12">
    {item.card.info.isVeg == 1 ? (
      <div className="my-2 w-4 h-4 border-2 border-[#0f8a65] flex items-center justify-center">
        <div className="rounded-full w-2 h-2 bg-[#0f8a65]"></div>
      </div>
    ) : (
      <div className="my-2 w-4 h-4 border-2 border-[#C21807] flex items-center justify-center">
        <div className="rounded-full w-2 h-2 bg-[#8a170f]"></div>
      </div>
    )}
    <div>{item.card.info.name}</div>
    <div className="mt-2">
      <i className="fa text-sm px-1">&#xf156;</i>
      {item.card.info.price
        ? item.card.info.price / 100 + " "
        : item.card.info.defaultPrice / 100 + " "}
    </div>
    <div className="text-light-text-rgba mt-3 mb-6">{item.card.info.description}</div>
  </div>

  {/* Right Part - Image */}
  {item.card.info.imageId ? (
    <div className="h-28 sm:h-[140px] w-full sm:w-48 relative mt-4 sm:mt-0">
      <button
        onClick={() => { handleAdd(item); }}
        className="w-3/4 font-semibold text-lg bg-white border-black shadow-lg shadow-[#e9e9eb] p-2 absolute rounded-md text-[#60b246] left-1/2 transform -translate-x-1/2 -bottom-4"
      >
        Add+
      </button>
      <img
        className="h-full w-full rounded-[6px] object-cover"
        src={CDN_URL + item.card.info.imageId}
        alt="Restaurant item"
      />
    </div>
  ) : (
    <div className="flex justify-center items-center mt-4 sm:mt-0">
      <button
        className="w-28 h-14 font-semibold text-lg bg-white border-[#d4d5d9] border-2 shadow-xl shadow-[#e9e9eb] p-2 rounded-md text-center text-[#60b246]"
        onClick={() => { handleAdd(item); }}
      >
        Add+
      </button>
    </div>
  )}
</div>

    );
  });
};

