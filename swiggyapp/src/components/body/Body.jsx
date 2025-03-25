import React from "react";
import useProductData from "../../hooks/useProductData";
import { IMAGE_URL } from "../../assets/api";
import { Link } from "react-router-dom";
const Body = () => {
  const { resList, error, loading } = useProductData();
  console.log(resList);

  if (loading) return <div className="text-3xl font-bold">Loading</div>;
  if (error) return <div>{error}|| Something went wrong</div>;
  return (
    <>
      <h2 className="text-center text-2xl font-bold">
        {" "}
        Top Rated Restaurant in Allahabad{" "}
      </h2>
      <div className="flex flex-wrap justify-center">
        {resList.map((item) => {
          return (
            <div
              key={item.info.id}
              className="border border-black w-3/12  m-2 p-4 flex-col flex item-center justify-center "
            >
              <Link to={`/products/${item.info.id}`}>
                <img
                  src={IMAGE_URL + `${item.info.cloudinaryImageId}`}
                  alt=" product-image"
                  className="w-[90%] h-[200px]"
                />
                <h2 className="text-2xl font-bold">{item.info.name}</h2>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Body;
