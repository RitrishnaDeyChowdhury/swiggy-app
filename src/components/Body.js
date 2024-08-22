import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
	// Local state variable - super powerful variable	
	const [ListOfRestaurants,setListOfRestaurants] = useState([]);
	const [FilterRestaurant,setFilterRestaurant] = useState([]);
	const [SearchText,setSearchText] = useState("");

	useEffect(()=>{
		fetchData();
	},[]);

	const fetchData = async () => {
		const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.57667528302465&lng=88.43104854241207&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

		const json = await data.json();

		// Optional chaining
		setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
		setFilterRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
	};

	const onlineStatus = useOnlineStatus();
	if(onlineStatus == false) return <h1>Looks like you're offline!!!</h1>

	// Conditional Rendering
	return ListOfRestaurants.length==0 ? (<Shimmer/>) : (
	<div className="body">
		<div className="filter flex">
			<div className="search m-4 p-4">
				<input type="text" className="border border-solid border-black" value={SearchText} onChange={(e)=>{setSearchText(e.target.value);}}/>
				<button className="px-4 m-4 py-2 bg-pink-100 rounded-lg" onClick={()=>{
					// console.log(SearchText);

					const filter = ListOfRestaurants.filter((res) =>
						res.info.name.toLowerCase().includes(SearchText.toLowerCase()),
					);
					
					setFilterRestaurant(filter);
				}}>Search
				</button>
			</div>
			
			<div className="search m-4 p-4 flex items-center">
				<button className="px-4 py-2 bg-gray-200 rounded-lg" onClick={() =>{
					filteredList = ListOfRestaurants.filter(
						(res)=>res.info.avgRating>4
					)
					// console.log(filteredList);
					setListOfRestaurants(filteredList);
					}
				}>Top Rated Restaurants</button>
			</div>
		</div>
		<div className="flex flex-wrap px-2 ml-3">
			{FilterRestaurant.map((restaurant)=>(
			<Link to={"/restaurant/"+restaurant.info.id} key={restaurant.info.id}><RestaurantCard  resData={restaurant}/></Link>
		))}
		</div>
	</div> 
	)}

export default Body;
  