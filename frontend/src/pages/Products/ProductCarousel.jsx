import { useGetTopProductsQuery } from "../../redux/api/productApiSlice";
import Message from "../../components/Message";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import moment from "moment";
import {
  FaBox,
  FaClock,
  FaShoppingCart,
  FaStar,
  FaStore,
} from "react-icons/fa";

const ProductCarousel = () => {
  const { data: products, isLoading, error } = useGetTopProductsQuery();

  const settings = {
    dots: false,
    infinite: true,
    speed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div className="mb-4 mt-3 w-full max-w-[50rem] sm:max-w-[30rem] lg:max-w-[50rem] xl:max-w-[50rem]">
      {isLoading ? null : error ? (
        <Message variant="danger">
          {error?.data?.message || error.error}
        </Message>
      ) : (
        <Slider {...settings}>
          {products.map(
            ({
              image,
              _id,
              name,
              price,
              description,
              brand,
              createdAt,
              numReviews,
              rating,
              quantity,
              countInStock,
            }) => (
              <div key={_id} className="p-4">
                <img
                  src={image}
                  alt={name}
                  className="w-full rounded-lg object-cover h-[20rem] sm:h-[15rem] md:h-[20rem] lg:h-[25rem] xl:h-[30rem]"
                />

                <div className="mt-4 flex flex-col sm:flex-row justify-between">
                  <div className="flex-1 mb-4 sm:mb-0 sm:mr-4 ">
                    <h2 className="text-xl font-bold">{name}</h2>
                    <p className="text-lg text-white"> $ {price}</p>
                    <p className="w-full max-w-xs mt-2 text-sm text-white">
                      {description.substring(0, 170)} ...
                    </p>
                  </div>

                  <div className="flex justify-between w-[20rem]">
                    <div className="one">
                      <h1 className="flex items-center mb-2 text-sm text-white">
                        <FaStore className="mr-2 text-white" /> Brand: {brand}
                      </h1>
                      <h1 className="flex items-center mb-2 text-sm text-white">
                        <FaClock className="mr-2 text-white" /> Added:{" "}
                        {moment(createdAt).fromNow()}
                      </h1>
                      <h1 className="flex items-center mb-2 text-sm text-white">
                        <FaStar className="mr-2 text-white" /> Reviews:
                        {numReviews}
                      </h1>
                    </div>

                    <div className="two">
                      <h1 className="flex items-center mb-2 text-sm text-white">
                        <FaStar className="mr-2 text-white" /> Ratings:{" "}
{Math.round(rating)}
                      </h1>
                      <h1 className="flex items-center mb-2 text-sm text-white">
                        <FaShoppingCart className="mr-2 text-white" /> Quantity:{" "}
                        {quantity}
                      </h1>
                      <h1 className="flex items-center mb-2 text-sm text-white">
                        <FaBox className="mr-2 text-white" /> In Stock:{" "}
                        {countInStock}
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            )
          )}
        </Slider>
      )}
    </div>
  );
};

export default ProductCarousel;