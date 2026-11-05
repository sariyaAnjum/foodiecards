import './App.css'
import FoodieCard from "./component/FoodieCard.jsx";

function App() {

  return (
    <div>
      <FoodieCard FoodImage="https://www.cubesnjuliennes.com/wp-content/uploads/2020/07/Chicken-Biryani-Recipe.jpg" FavoriteFood="Biryani" StudentName="Sariya"/>
      <FoodieCard FoodImage="https://static.vecteezy.com/system/resources/previews/027/679/809/large_2x/side-anglegraphy-of-delicious-noodles-in-white-background-photo.jpg" FavoriteFood="Noodles" StudentName="Priya"/>
      <FoodieCard FoodImage="https://images.alphacoders.com/130/thumb-1920-1308370.jpg" FavoriteFood="Pasta" StudentName="Vicky"/>
      <FoodieCard FoodImage="https://tse4.mm.bing.net/th/id/OIP.WX_mwHKUYX5ddH1b447VzwHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3.jpg" FavoriteFood="sushi" StudentName="Muzzu"/>
      <FoodieCard FoodImage="https://img-mm.manoramaonline.com/content/dam/mm/mo/pachakam/readers-recipe/images/2021/2/9/chicken-alfaham.jpg" FavoriteFood="Alfaham" StudentName="Tahir"/>
      <FoodieCard FoodImage="https://img.freepik.com/premium-photo/free-photo-ice-cream_643934-3223.jpg" FavoriteFood="Icecream" StudentName="Sayeeda"/>

          </div>
  );
}

export default App;
