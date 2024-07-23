import { Link, useParams } from "react-router-dom";
import { useGetProductsQuery } from "../redux/api/productApiSlice";
import Loader from "../components/Loader";
import Message from "../components/Message";
import Header from "../components/Header";
import Product from "./Products/Product";

const Home = () => {
  const { keyword } = useParams();
  const { data, isLoading, isError } = useGetProductsQuery({ keyword });

  const logos = [
    "../../uploads/pdm.webp",
    "../../uploads/tom-ford.webp",
    "../../uploads/Wild_Stone.webp",
    "../../uploads/xerjoff.webp",
    "../../uploads/creed.png",
    "../../uploads/victoria_secret.png",
    "../../uploads/JanPerfume_logo.PNG",
    "../../uploads/slp.jpeg",
  ];

  return (
    <div className="">
      {!keyword ? <Header /> : null}
      {isLoading ? (
        <Loader />
      ) : isError ? (
        <Message variant="danger">
          {isError?.data?.message || isError.error}
        </Message>
      ) : (
        <>
          {/* Logo Slider */}
          <div className="logo-slider-container mt-20">
            <div className="logo-slider">
              {logos.concat(logos).map((src, index) => (
                <img src={src} alt={`Brand ${index + 1}`} key={index} />
              ))}
            </div>
          </div>

          <div className="flex justify-between items-center">
            <h1 className="ml-5 md:ml-[12rem] mt-[10rem] text-[3rem]">
              Special Products
            </h1>

            <Link
              to="/shop"
              className="bg-pink-600 font-bold rounded-lg py-2 px-10 md:mr-[18rem] mr-5 mt-[10rem] neumorphism-black"
            >
              Shop
            </Link>
          </div>

          <div>
            <div className="flex justify-center flex-wrap mt-[2rem]">
              {data.products.map((product) => (
                <div className="transition duration-300 ease-in-out hover:scale-105" key={product._id}>
                  <Product product={product} />
                </div>
              ))}
            </div>
          </div>



        </>
      )}
    </div>
  );
};

export default Home;