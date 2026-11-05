import react from 'react';

export default function FoodieCard ({StudentName, FavoriteFood, FoodImage}) {
    return (
        <div id="FoodieCard">
            <img src={FoodImage} height="200" width="250"/>
            <h2>{FavoriteFood}</h2>
            <h1>{StudentName}</h1>
        </div>
    )
}