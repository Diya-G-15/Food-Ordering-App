import { useEffect, useState } from "react";
import { CAT_SEARCH_API } from "../utils/constants";
import Restcard from "./RestCard";
import { WithDiscount } from "./RestCard";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Error from "./Error";


const CategorySearch = () => {
  const part = "&tags=layout_BAU_Contextual&sortBy=&filters=&type=rcv2";
   const [cards,setCards]= useState([]);
   const RestCardDiscount = WithDiscount(Restcard);
   const {entityId}= useParams();
   console.log("para",entityId);
 
  useEffect(() => {

    const fetchData = async () => {
      try {
          const response = await fetch(CAT_SEARCH_API + entityId + part);
          if (!response.ok) {
              throw new Error("Network response was not ok");
          }
          const json = await response.json();
          setCards(json.data.cards);
      } catch (error) {
          toast.error("Some error occurred. Please use a CORS extension.");
          console.error("Fetch error:", error); // Log the error for debugging
      }
  };
  fetchData();

  }, []);

  if(cards.length==0){
    return <Error/>
  }
  const resList=cards.filter((item)=>{
 return item?.card?.card["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.Restaurant";
  })
 console.log("cards",cards);
 console.log("reslist",resList);
  return (
    <div className="w-10/12 m-auto mt-6">
     <div className="text-[#282c3f] font-semibold text-4xl">{cards[0]?.card?.card?.title}</div>
     <div className=" text-lg text-light-text-rgba mt-2">{cards[0]?.card?.card?.description}</div>
     <div>
        <div className=" mt-5 font-bold text-2xl">{cards[2]?.card?.card?.gridElements?.infoWithStyle?.text}</div>

     </div>

     <div className="flex flex-wrap gap-8 mt-8 mb-8 ml-8 mr-8 ">
        
        {resList.map((restaurant) => {
          {/* console.log(restaurant) */}
          return (
            <Link
              to={"/collections/83637/restaurants/" + restaurant?.card?.card?.info?.id}
              key={restaurant?.card?.card?.info?.id}
            >
              {/* if disocunt is there show the deal  .discount label*/}
              {
                restaurant?.card?.card?.info?.aggregatedDiscountInfoV3 ? <RestCardDiscount resData={restaurant?.card?.card?.info} /> : <Restcard resData={restaurant?.card?.card?.info} />
              }
            </Link>
          );
        })}
        
      </div>
    </div>
  );
};
export default CategorySearch;
