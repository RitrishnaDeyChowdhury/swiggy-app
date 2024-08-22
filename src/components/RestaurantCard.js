import {CDN_URL} from '../utils/constants';
import userContext from '../utils/UserContext';

const RestaurantCard = (props) => {
    const {resData} = props;

    const {cloudinaryImageId,name,avgRating,cuisines,costForTwo,sla } = resData?.info;
    return(
        <div className="m-4 p-4 w-[240px] rounded-lg bg-gray-100 hover:bg-gray-200 h-[450px] res-card" >
            <img src={CDN_URL+cloudinaryImageId} alt="res-logo" className="rounded-lg h-[180px] w-[200px]"/>
            <h3 className="font-bold py-4 text-xl">{name}</h3>
            <p>{avgRating} Star</p>
            <p>{sla.deliveryTime} minutes</p>
            <h4>{cuisines.join(', ')}</h4>
            <h4>{costForTwo}</h4>
        </div>
    )
}

export default RestaurantCard;