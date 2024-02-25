import React, { useEffect, useState } from "react";
import { RiStarSFill } from "react-icons/ri";
import useRating from "../hooks/useRating";
import { Link } from "react-router-dom";
import {
  TiStarHalfOutline,
  TiStarFullOutline,
  TiStarOutline,
} from "react-icons/ti";
import Products from "./Products";
import DealOfTheDay from "./DealOfTheDay";
import Footer from "./Footer";
import { CiDeliveryTruck, CiDiscount1, CiHeadphones } from "react-icons/ci";
import { PiKeyReturn, PiShare } from "react-icons/pi";

const ProductView = () => {
  const [images, setImages] = useState({
    img1: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/3396ee3c-08cc-4ada-baa9-655af12e3120/scarpa-da-running-su-strada-invincible-3-xk5gLh.png",
    img2: "https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/e44d151a-e27a-4f7b-8650-68bc2e8cd37e/scarpa-da-running-su-strada-invincible-3-xk5gLh.png",
    img3: "https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/44fc74b6-0553-4eef-a0cc-db4f815c9450/scarpa-da-running-su-strada-invincible-3-xk5gLh.png",
    img4: "https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/d3eb254d-0901-4158-956a-4610180545e5/scarpa-da-running-su-strada-invincible-3-xk5gLh.png",
  });

  const colors = ["blue", "black", "orange", "pink", "red"];
  const sizes = ["s", "m", "l", "xl", "xxl", "3xl"];
  const addDetails = [
    { title: "Nike Invincible 3" },
    { price: "$ 500" },
    { brand: "Puma" },
    { material: "Jojo" },
    { stock: "Available" },
    { sizes: "S,  M,  XL" },
  ];
  const rating = 4.5;
  const rate = useRating(rating, "24px");
  const totalReviews = 20;
  const [activeImg, setActiveImage] = useState(images.img1);
  const [amount, setAmount] = useState(1);
  const [showDesc, setShowDesc] = useState(true);
  const [showDetails, setShowDetails] = useState(false);
  const [showReviews, setShowReviews] = useState(false);
  const reviews = [
    {
      img: "https://ui-avatars.com/api/?name=rajan+Doe",
      user: "John Doe",
      review:
        "Lot of space ; look -wise good; lot of pockets to accomodate several things; on the whole liked the product",
      rating: useRating(4.2),
      createdAt: new Date(),
    },
    {
      img: "https://ui-avatars.com/api/?name=pelu+ram",
      user: "Pelu Ram",
      review: "So beautiful, So elegant, Just looking like a WOW!",
      rating: useRating(2.6),
      createdAt: new Date(),
    },

    {
      img: "https://ui-avatars.com/api/?name=pelu+ram",
      user: "Pelu Ram",
      review: "So beautiful, So elegant, Just looking like a WOW!",
      rating: useRating(2.6),
      createdAt: new Date(),
    },

    {
      img: "https://ui-avatars.com/api/?name=pelu+ram",
      user: "Pelu Ram",
      review: "So beautiful, So elegant, Just looking like a WOW!",
      rating: useRating(2.6),
      createdAt: new Date(),
    },
  ];

  return (
    <div>
      {/* Product top */}
      <div className="flex flex-col justify-between mb-24 lg:flex-row gap-16 lg:items-start ">
        <div className="flex flex-col gap-6 md:mt-0 mt-4 lg:w-2/4">
          <img
            src={activeImg}
            alt=""
            className="w-[90%] md:[70%] mx-auto h-full aspect-square object-cover rounded-xl"
          />
          <div className="flex flex-row md:w-[80%] w-[90%] mx-auto justify-between md:flex-nowrap flex-wrap gap-2 h-24">
            <img
              src={images.img1}
              alt=""
              className="md:w-32 flex-[1] md:flex-0 h-full md:h-32  rounded-md cursor-pointer"
              onClick={() => setActiveImage(images.img1)}
            />
            <img
              src={images.img2}
              alt=""
              className="md:w-32 flex-[1] md:flex-0 h-full md:h-32  rounded-md cursor-pointer"
              onClick={() => setActiveImage(images.img2)}
            />
            <img
              src={images.img3}
              alt=""
              className="md:w-32 flex-[1] md:flex-0 h-full md:h-32  rounded-md cursor-pointer"
              onClick={() => setActiveImage(images.img3)}
            />
            <img
              src={images.img4}
              alt=""
              className="md:w-32 flex-[1] md:flex-0 h-full md:h-32  rounded-md cursor-pointer"
              onClick={() => setActiveImage(images.img4)}
            />
          </div>
        </div>
        {/* ABOUT */}
        <div className="flex flex-col md:mt-16 mt-0 w-[90%] md:pl-0 pl-6  gap-4 lg:w-2/4">
          <div>
            <span className=" text-color_dark_pink font-semibold">
              Special Sneaker
            </span>
            <h1 className="text-3xl font-bold">Nike Invincible 3</h1>
          </div>
          <div className="flex">
            <div className="flex items-center">
              {rate.map((r, index) => {
                let key = index;
                return r;
              })}
            </div>

            <span className="ml-2">| {totalReviews} Customer reviews</span>
          </div>
          <p className="text-gray-700">
            Con un'ammortizzazione incredibile per sostenerti in tutti i tuoi
            chilometri, Invincible 3 offre un livello di comfort elevatissimo
            sotto il piede per aiutarti a dare il massimo oggi, domani e oltre.
          </p>
          <div className="flex items-center gap-6">
            <h6 className="text-3xl font-semibold">$ 199.00</h6>
            <h6 className="text-2xl opacity-80 text-color_dark_pink line-through">
              $ 253.00
            </h6>
          </div>

          {/* Colors */}
          <div className="flex items-start flex-col my-2 gap-2">
            <span className=" text-gray-400 text-base font-bold">Color :</span>
            <div className="flex items-center flex-wrap gap-2">
              {colors.map((col, index) => {
                const color = col;

                return (
                  <div
                    key={index}
                    style={{ backgroundColor: col }}
                    className="md:h-8 md:w-8 h-12 w-12 p-2 hover:opacity-50  rounded-full border-[1px] border-gray cursor-pointer"
                  ></div>
                );
              })}
            </div>
          </div>
          {/* Size */}
          <div className="flex items-start flex-col my-2 gap-2">
            <span className=" text-gray-400 text-base font-bold">Size :</span>
            <div className="flex items-center md:flex-nowrap flex-wrap gap-2">
              {sizes.map((size, index) => {
                return (
                  <div
                    key={index}
                    className="md:h-12 md:w-12 md:mr-0 mr-1 h-16 w-16 flex hover:bg-gray-100 items-center justify-center p-2 transition  rounded-full border-[1px] border-gray cursor-pointer"
                  >
                    {size.toUpperCase()}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex md:flex-row flex-col items-start md:items-end gap-12">
            <div className="flex flex-col items-start gap-2">
              <span className=" text-gray-400 text-base font-bold">
                Quantity :
              </span>
              <div className="flex flex-row items-center">
                <button
                  className="bg-gray-200 py-2 px-5 rounded-lg text-3xl"
                  onClick={() =>
                    setAmount((prev) => (amount > 1 ? prev - 1 : 1))
                  }
                >
                  -
                </button>
                <span className="py-4 px-6 w-16 rounded-lg">{amount}</span>
                <button
                  className="bg-gray-200 py-2 px-4 rounded-lg  text-3xl"
                  onClick={() => setAmount((prev) => prev + 1)}
                >
                  +
                </button>
              </div>
            </div>
           <div className="w-full">
           <button className=" bg-color_dark_pink text-white hover:bg-color_pink transition font-semibold md:py-3 py-6 whitespace-nowrap text-center w-full md:w-[40%] md:px-16 rounded-lg h-full">
              Add to Cart
            </button>
           </div>
          </div>
        </div>
      </div>

      {/* Product Mid */}
      <div className=" bg-gray-50 ">
        <div className="flex items-center justify-center border-b-[1px] md:gap-0 gap-4 md:py-2 py-4">
          <Link
            className="md:mx-24 mx-0 text-gray-500 text-sm border-b-[2px] font-bold py-4"
            onClick={() => {
              setShowDesc(true);
              setShowDetails(false);
              setShowReviews(false);
            }}
          >
            Description
          </Link>
          <Link
            className="md:mx-24 mx-0 text-gray-500 text-sm border-b-[2px] font-bold py-4"
            onClick={() => {
              setShowDetails(true);
              setShowDesc(false);
              setShowReviews(false);
            }}
          >
            Additional Details
          </Link>
          <Link
            className="md:mx-24 mx-0 text-gray-500 text-sm border-b-[2px] font-bold py-4"
            onClick={() => {
              setShowReviews(true);
              setShowDesc(false);
              setShowDetails(false);
            }}
          >
            Reviews ({totalReviews})
          </Link>
        </div>

        <div className="flex max-w-[320px] md:max-w-[1080px]  mx-auto  my-4 gap-8">
          {/* Show Desc */}

          {showDesc === true && (
            <div className="flex flex-col w-full">
              <p className="my-4 text-sm md:text-lg text-justify">
                Con un'ammortizzazione incredibile per sostenerti in tutti i
                tuoi chilometri, Invincible 3 offre un livello di comfort
                elevatissimo sotto il piede per aiutarti a dare il massimo oggi,
                domani e oltre. Questo modello incredibilmente elastico e
                sostenitivo, è pensato per dare il massimo lungo il tuo percorso
                preferito e fare ritorno a casa carico di energia, in attesa
                della prossima corsa.
              </p>
              <p className="my-4 text-sm md:text-lg text-justify">
                Con un'ammortizzazione incredibile per sostenerti in tutti i
                tuoi chilometri, Invincible 3 offre un livello di comfort
                elevatissimo sotto il piede per aiutarti a dare il massimo oggi,
                domani e oltre. Questo modello incredibilmente elastico e
                sostenitivo, è pensato per dare il massimo lungo il tuo percorso
                preferito e fare ritorno a casa carico di energia, in attesa
                della prossima corsa.
              </p>
              <div className="flex md:justify-evenly md:gap-0 gap-4 md:flex-row flex-col my-8 w-full items-center">
                <img
                  className=" h-42 w-[90%] md:w-[40%]"
                  src={images.img1}
                  alt=""
                />
                <img
                  className=" h-42 w-[90%] md:w-[40%]"
                  src={images.img4}
                  alt=""
                />
              </div>
            </div>
          )}

          {/* Show Details */}
          {showDetails === true && (
            <div className="my-12 max-w-[1080px] mx-auto ">
              <table
                cellPadding="20px"
                cellSpacing="16px"
                className="md:w-[80%] w-[90%] mx-auto table-fixed border-collapse border-[1px]"
              >
                <thead>
                  <tr className="bg-gray-200">
                    <th className="border text-start border-slate-600">Name</th>
                    <th className="border text-start border-slate-600">
                      Value
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {addDetails.map((det, index) =>
                    Object.entries(det).map(([key, value]) => (
                      <tr key={index}>
                        <td className="border text-start text-lg border-slate-600">
                          {key.toUpperCase()}
                        </td>
                        <td className="border text-start text-lg border-slate-600">
                          {value.toUpperCase()}
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          )}


          {/* Show Reviews */}
          {showReviews === true && (
            <div className="my-8 md:max-w-[1080px] max-w-[360px] py-8 mx-auto">
              <h1 className="md:text-3xl text-2xl text-center mb-12 font-bold">
                Rating & Reviews
              </h1>
              {/* Average Rating */}
              <div className="flex my-4 md:w-full w-[90%] md:px-8 items-center md:flex-row gap-2 flex-col rounded-xl bg-gray-200 py-8  justify-center">
                <div className="flex flex-col items-center md:mr-20 gap-1">
                  <div className="flex items-center gap-2 text-7xl">
                    <span>{rating}</span>{" "}
                  </div>
                  <div className="flex items-center">
                    {rate.map((r, index) => {
                      let key = index;
                      return r;
                    })}
                  </div>
                  <div>{totalReviews} Reviews</div>
                </div>

                <div className="flex flex-col w-full  gap-2">
                  {/* 1 */}
                  <div className="flex items-center md:px-0 px-4 gap-2">
                    <div className="flex items-center w-8 text-xl">
                      <span>5</span>{" "}
                      <TiStarFullOutline
                        className="ml-1 text-2xl"
                        color="red"
                      />
                    </div>
                    <div className="md:w-96 w-[70%] h-4 rounded-md bg-gray-300">
                      <div className=" h-full w-[65%] rounded-md bg-red-500"></div>
                    </div>
                    <span>65%</span>
                  </div>
                  {/* 1 */}
                  <div className="flex items-center md:px-0 px-4  gap-2 ">
                    <div className="flex items-center w-8 text-xl">
                      <span>4</span>{" "}
                      <TiStarFullOutline
                        className="ml-1 text-2xl"
                        color="red"
                      />
                    </div>
                    <div className="md:w-96 w-[70%] h-4 rounded-md bg-gray-300">
                      <div className=" h-full w-[15%] rounded-md bg-red-500"></div>
                    </div>
                    <span>15%</span>
                  </div>
                  {/* 1 */}
                  <div className="flex items-center md:px-0 px-4  gap-2 ">
                    <div className="flex items-center w-8 text-xl">
                      <span>3</span>{" "}
                      <TiStarFullOutline
                        className="ml-1 text-2xl"
                        color="red"
                      />
                    </div>
                    <div className="md:w-96 w-[70%] h-4 rounded-md bg-gray-300">
                      <div className=" h-full w-[5%] rounded-md bg-red-500"></div>
                    </div>
                    <span>5%</span>
                  </div>
                  {/* 1 */}
                  <div className="flex items-center md:px-0 px-4  gap-2 ">
                    <div className="flex items-center w-8 text-xl">
                      <span>2</span>{" "}
                      <TiStarFullOutline
                        className="ml-1 text-2xl"
                        color="red"
                      />
                    </div>
                    <div className="md:w-96 w-[70%] h-4 rounded-md bg-gray-300">
                      <div className=" h-full w-[10%] rounded-md bg-red-500"></div>
                    </div>
                    <span>10%</span>
                  </div>
                  {/* 1 */}
                  <div className="flex items-center md:px-0 px-4  gap-2 ">
                    <div className="flex items-center w-8 text-xl">
                      <span>1</span>{" "}
                      <TiStarFullOutline
                        className="ml-1 text-2xl"
                        color="red"
                      />
                    </div>
                    <div className="md:w-96 w-[70%] h-4 rounded-md bg-gray-300">
                      <div className=" h-full w-[5%] rounded-md bg-red-500"></div>
                    </div>
                    <span>5%</span>
                  </div>
                </div>
              </div>

              {/* Selection  */}
              <div className="md:w-full w-[90%] h-16 rounded-xl bg-gray-200 flex justify-between my-4 px-4 items-center ">
                <div className="flex items-center gap-4 mx-4">
                  <span className="text-lg font-[500]">Sort : </span>
                  <select>
                    <option value="mostRecent">Most Recent</option>
                    <option value="mostRecent">Newest</option>
                    <option value="mostRecent">Oldest</option>
                  </select>
                </div>
                <div>
                  <button className="py-1 px-4 rounded-sm bg-color_dark_pink transition hover:bg-color_pink text-white">
                    Submit review
                  </button>
                </div>
              </div>

              {/* Reviews  */}
              <div className="md:w-full w-[90%] pb-24 py-4 px-4 rounded-xl bg-gray-300">
                {reviews.map((rev) => {
                  return (
                    <div className="flex w-full rounded-xl bg-gray-100 py-4 h-auto gap-1 pl-4 my-4 items-start">
                      <div className="h-16 w-16">
                        <img
                          className="rounded-full h-12"
                          src={rev.img}
                          alt=""
                        />
                      </div>
                      <div className="flex flex-col gap-2 items-start">
                        <div className="flex gap-2 items-center">
                          <span className="text-xl font-bold">{rev.user}</span>
                          <span className="text-sm">{`${rev.createdAt.getDay()}-${rev.createdAt.getMonth()}-${rev.createdAt.getFullYear()}`}</span>
                        </div>
                        <div className="flex items-center">
                          {rev.rating.map((star) => {
                            return star;
                          })}
                        </div>
                        <p className=" pr-60">{rev.review}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Product Bottom */}
      <div className="max-w-[1080px] mx-auto">
        <h1 className="text-center my-6 font-bold text-4xl">
          Related Products
        </h1>
        <div className="my-16">
          <Products limit={8} />
        </div>
        <div className="mb-16">
          <DealOfTheDay />
        </div>
      </div>
    </div>
  );
};

export default ProductView;
