import { useState, useEffect } from "react";
import AdminMenu from "./AdminMenu";
import { useNavigate, useParams } from "react-router-dom";
import {
  useUpdateProductMutation,
  useDeleteProductMutation,
  useGetProductByIdQuery,
  useUploadProductImageMutation,
} from "../../redux/api/productApiSlice";
import { useFetchCategoriesQuery } from "../../redux/api/categoryApiSlice";
import { toast } from "react-toastify";
// import { useLocation } from "react-router-dom";

const AdminProductUpdate = () => {
  let {id} = useParams();
  const productId = id;

  // const productId = "661963d9d1b83e875edd1c3c";

  // const location = useLocation();
  // const path = location.pathname; // Lấy đường dẫn URL hiện tại
  // const productId = path.substring(path.lastIndexOf('/') + 1); // Lấy ID từ đường dẫn

  const { data: productData } = useGetProductByIdQuery(productId);


  console.log(productData);

  const [image, setImage] = useState(productData?.image || "");
  const [name, setName] = useState(productData?.name || "");
  const [description, setDescription] = useState(productData?.description || "");
  const [price, setPrice] = useState(productData?.price || "");
  const [category, setCategory] = useState(productData?.category || "");
  const [quantity, setQuantity] = useState(productData?.quantity || "");
  const [brand, setBrand] = useState(productData?.brand || "");
  const [stock, setStock] = useState(productData?.countInStock);

  // hook
  const navigate = useNavigate();

  // Fetch categories using RTK Query
  const { data: categories = [] } = useFetchCategoriesQuery();

  const [uploadProductImage] = useUploadProductImageMutation();

  // Define the update product mutation
  const [updateProduct] = useUpdateProductMutation();

  // Define the delete product mutation
  const [deleteProduct] = useDeleteProductMutation();

  useEffect(() => {
    if (productData && productData._id) {
      setName(productData.name);
      setDescription(productData.description);
      setPrice(productData.price);
      setCategory(productData.category?._id);
      setQuantity(productData.quantity);
      setBrand(productData.brand);
      setImage(productData.image);
    }
  }, [productData]);

  const uploadFileHandler = async (e) => {
    const formData = new FormData();
    formData.append("image", e.target.files[0]);
    try {
      const res = await uploadProductImage(formData).unwrap();
      toast.success("Item added successfully");
      setImage(res.image);
    } catch (err) {
      toast.success("Item added successfully");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("image", image);
      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("category", category);
      formData.append("quantity", quantity);
      formData.append("brand", brand);
      formData.append("countInStock", stock);

      // Update product using the RTK Query mutation
      const data = await updateProduct({ productId: productId, formData });

      if (data.error) {
        toast.error("Product update failed");
      } else {
        toast.success(`Product successfully updated`);
        navigate("/admin/allproductslist");
      }
    } catch (err) {
      console.log(err);
      toast.error("Product update failed. Try again.");
    }
    window.location.reload();
  };

  const handleDelete = async () => {
    try {
      let answer = window.confirm(
        "Are you sure you want to delete this product?"
      );
      if (!answer) return;
      
      const { data } = await deleteProduct(productId);
      toast.success(`"${data.name}" is deleted`);
      navigate("/admin/allproductslist");
    } catch (err) {
      console.log(err);
      toast.error("Delete failed. Try again.");
    }
    window.location.reload();
  };

  return (
    <>
        <div className="container  xl:mx-[9rem] sm:mx-[0]">
            <div className="flex flex-col md:flex-row">
              <AdminMenu />
                <div className="md:w-3/4 p-3">
                    <div className="h-12">Update / Delete Product</div>

                    {image && (
                        <div className="text-center">
                            <img
                                src={image}
                                alt="product"
                                className="block mx-auto w-20 h-[40%]"
                            />
                        </div>
                    )}

                    <div className="mb-3">
                        <label className="border text-white  py-2 px-4 block w-full text-center rounded-lg cursor-pointer font-bold py-11">
                            {image ? image.name : "Upload image"}
                            <input
                                type="file"
                                name="image"
                                accept="image/*"
                                onChange={uploadFileHandler}
                                className="text-white"
                            />
                        </label>
                    </div>

                    <div className="p-3">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                            <div>
                                <label htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    className="p-4 mb-3 w-full border rounded-lg bg-[#101011] text-white mr-[5rem]"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>

                            <div>
                                <label htmlFor="price">Price</label>
                                <input
                                    type="number"
                                    className="p-4 mb-3 w-full border rounded-lg bg-[#101011] text-white "
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                            <div>
                                <label htmlFor="quantity">Quantity</label>
                                <input
                                    type="number"
                                    min="1"
                                    className="p-4 mb-3 w-full border rounded-lg bg-[#101011] text-white mr-[5rem]"
                                    value={quantity}
                                    onChange={(e) => setQuantity(e.target.value)}
                                />
                            </div>
                            <div>
                                <label htmlFor="brand">Brand</label>
                                <input
                                    type="text"
                                    className="p-4 mb-3 w-full border rounded-lg bg-[#101011] text-white "
                                    value={brand}
                                    onChange={(e) => setBrand(e.target.value)}
                                />
                            </div>
                        </div>

                        <label htmlFor="description" className="my-5">
                            Description
                        </label>
                        <textarea
                            type="text"
                            className="p-2 mb-3 bg-[#101011]  border rounded-lg w-[100%] text-white"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                            <div>
                                <label htmlFor="name block">Count In Stock</label>
                                <input
                                    type="text"
                                    className="p-4 mb-3 w-full border rounded-lg bg-[#101011] text-white "
                                    value={stock}
                                    onChange={(e) => setStock(e.target.value)}
                                />
                            </div>

                            <div>
                                <label htmlFor="">Category</label>
                                <select
                                    placeholder="Choose Category"
                                    className="p-4 mb-3 w-full border rounded-lg bg-[#101011] text-white mr-[5rem]"
                                    onChange={(e) => setCategory(e.target.value)}
                                >
                                    {categories?.map((c) => (
                                        <option key={c._id} value={c._id}>
                                            {c.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div className="flex">
                            <button
                                onClick={handleSubmit}
                                className="neumorphism-black py-4 px-10 mt-5 rounded-lg text-lg font-bold  bg-green-600 mr-6"
                            >
                                Update
                            </button>
                            <button
                                onClick={handleDelete}
                                className="neumorphism-black py-4 px-10 mt-5 rounded-lg text-lg font-bold"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
);
};

export default AdminProductUpdate;