import { useGetTopProductsQuery } from "../redux/api/productApiSlice";
import Loader from "./Loader";
import SmallProduct from "../pages/Products/SmallProduct";
import ProductCarousel from "../pages/Products/ProductCarousel";

const Header = () => {
  const { data, isLoading, error } = useGetTopProductsQuery();

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <h1>ERROR</h1>;
  }

  return (
    <>
      <div className="flex justify-around flex-row">
        <div className="hidden sm:block">
          <div className="grid grid-cols-2">
            {data.map((product) => (
              <div className="max-w-xs transition duration-300 ease-in-out hover:scale-105" key={product._id}>
                <SmallProduct product={product} />
              </div>
            ))}
          </div>
        </div>
          <ProductCarousel />
      </div>
    </>
  );
};

export default Header;