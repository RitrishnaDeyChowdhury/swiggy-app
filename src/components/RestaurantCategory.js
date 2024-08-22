import { useState } from "react";
import ItemList from "./ItemList";
const RestaurantCategory = ({data,showItems,setShowIndex}) => {
    // console.log(data);
    const handleClick = () =>{
        setShowIndex();
    }

    return (
        <div>
            <div className="w-6/12 bg-gray-50 mx-auto my-4 shadow-lg p-4">
                {/* Accordion Header */}
                <div className='flex justify-between cursor-pointer' onClick={handleClick}>
                    <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
                    <span>🔽</span>
                </div>

                {/* Accordion Body */}
                {showItems && <ItemList items={data.itemCards}/>}
            </div>
        </div>
    )
}

export default RestaurantCategory;