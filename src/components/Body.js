import Restcard, { WithDiscount } from "./RestCard";
import Shimmer from "./Shimmer";
import { useEffect, useState,useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useResList from "../useResList";
import UserContext from "../utils/UserContext";
// import Carousel from "./Carousel";
import { CiSearch } from "react-icons/ci";
import { lazy,Suspense } from "react";


const Body = () => {
  const Carousel =lazy(() => import('./Carousel'));
  const [listOfRestaurants, setlistOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const onlineStatus = useOnlineStatus();
  const resList = useResList();
  
  const {loggedInUser,setUserName}=useContext(UserContext);

 

  //higher order component ka instance bnana pdea to use it in differnet module
  const RestCardDiscount = WithDiscount(Restcard);
  useEffect(() => {
    setFilteredRestaurants(resList);
    setlistOfRestaurants(resList);
  }, [resList]);
  // console.log(listOfRestaurants)
  const handleSearch=()=>{
    
              const filteredRestaurantList = listOfRestaurants.filter(
                (restaurant) => {
                  return restaurant.info.name
                    .toLowerCase()
                    .includes(searchText.toLowerCase());
                }
              );
              setFilteredRestaurants(filteredRestaurantList);
            
  }


  if (listOfRestaurants.length===0) {

    return (
    <div className="w-10/12 m-auto no-underline">
      <Shimmer />
      </div>);
  }
  if (onlineStatus === false) {
    return <h1>Check Your Internet Connection</h1>;
  }
  // console.log("listres", listOfRestaurants);
  const handleTopRated = () => {
    const filteredList = listOfRestaurants.filter((restaurant) => restaurant.info.avgRating > 4)
    setFilteredRestaurants(filteredList)
  }


  return (
    <div className="w-10/12 m-auto no-underline">
    <Suspense fallback={<div>Loading...</div>}>
        <Carousel />
      </Suspense>
      {/* <Carousel/> */}
      <div className="max-w-4xl mx-auto p-3">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <button
          onClick={handleTopRated}
          className="w-full sm:w-auto px-6 py-3 text-lg font-semibold text-primary bg-white border-2 border-primary rounded-full transition-all hover:bg-primary hover:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        >
          Top Rated Restaurants ★
        </button>
        <div className="w-full sm:w-2/3 relative">
  <input
    type="text"
    placeholder="Search for restaurants"
    onChange={(e) => setSearchText(e.target.value)}
    className="w-full py-3 px-4 pr-12 text-lg border-2 border-primary rounded-full focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
  />
  <button
    onClick={handleSearch}
    className="absolute right-3 top-1/2 transform -translate-y-1/2 p-2 text-primary hover:text-primary-dark focus:outline-none"
  >
    <CiSearch className="h-6 w-6 text-primary" />
  </button>
</div>


        </div>
        </div>
      

      
      {/* <div className="flex flex-wrap gap-8 mt-8 mb-8 ml-8 mr-8 "> */}
      <div className=" grid grid-cols-2 md:grid-cols-4 gap-8 mt-8 mb-8 mr-8 justify-center">
        
        {filteredRestaurant.map((restaurant) => {
          {/* console.log(restaurant) */}
          return (
            <Link
              to={"restaurants/" + restaurant.info.id}
              key={restaurant.info.id}
            >
              {/* if disocunt is there show the deal  .discount label*/}
              {
                restaurant.info.aggregatedDiscountInfoV3 ? <RestCardDiscount resData={restaurant.info} /> : <Restcard resData={restaurant.info} />
              }
            </Link>
          );
        })}
        
      </div>
    </div>
  );
};
export default Body;
