import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
    const dispatch = useDispatch();
    const handleAddItems =  (items) => {
        //Dispatch an action
        dispatch(addItem(items));
        
    }

    return (
        <div>
            {items.map((item) =>
                <div key={item.card.info.id} className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between">
                    <div className="w-9/12">
                        <div className="py-2">
                            <p className="font-bold">{item.card.info.name}</p>
                            <p className="font-semibold">₹{" "} {item.card.info.defaultPrice ? item.card.info.defaultPrice / 100 : item.card.info.price / 100}
                            </p>
                        </div>
                        <p className="text-xs">{item.card.info.description}</p>
                    </div>
                    <div className="p-4 w-3/12">
                        <div className="absolute">
                            <button className=" p-2 mx-16 shadow-lg rounded-md bg-white text-green-500 font-semibold w-[100px]"  onClick={()=>handleAddItems(item)}>ADD</button>
                        </div>
                        {item.card.info.imageId &&
                            <img src={CDN_URL + item.card.info.imageId} className="w-full" />
                        }
                    </div>
                </div>

            )}

        </div>
    )
}

export default ItemList;