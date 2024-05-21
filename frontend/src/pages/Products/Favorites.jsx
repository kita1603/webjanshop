import { useSelector } from "react-redux";
import { selectFavoriteProduct } from "../../redux/features/favorites/favoriteSlice";
import Product from "./Product";
import { Link } from "react-router-dom";

const Favorites = () => {
  const favorites = useSelector(selectFavoriteProduct);

  return (
    <div className="flex flex-col justify-center">
      <div className="">
        <Link
          to="/shop"
          className="sm:hidden block text-white font-semibold hover:underline ml-[10rem]"
        >
          Go Back
        </Link>
      </div>

      <h1 className="text-lg font-bold ml-[8rem] mt-[3rem] justify-center">
        FAVORITE PRODUCTS
      </h1>

      <div className="flex flex-wrap justify-center">
        {favorites.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Favorites;