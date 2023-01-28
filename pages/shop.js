import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// type Data = {
//   limit: number;
//   products: any;
//   skip: number;
//   total: number;
// };

// type Product = {
//   id: number;
//   title: string;
//   description: string;
//   price: number;
//   discountPercentage: number;
//   rating: number;
//   stock: number;
//   brand: string;
//   category: string;
//   thumbnail: string;
//   images: [];
// };

export async function getServerSideProps() {
  const res = await fetch("https://dummyjson.com/products/");
  const result = await res.json();

  if (!result) {
    return {
      notFound: true,
    };
  }

  return {
    props: { result }, // will be passed to the page component as props
  };
}

export default function Shop({ result }) {
  const { limit, products, skip, total } = result;
  return (
    <div className="flex h-auto w-full justify-center bg-zinc-900 px-6 pt-20 pb-12 text-white">
      <div className="flex h-auto w-full rounded-lg ">
        <Sidebar />
        <Product products={products} />
      </div>
    </div>
  );
}

export function Sidebar() {
  // const { products, total, skip, limit } = result;

  return (
    <div
      className="h-full w-56 rounded-lg border border-blue-500 p-2"
      id="sidebar"
    >
      <Category title="Gender" />
      <Category title="Type" />
      <Category title="Size" />
    </div>
  );
}

export function Category({ title }) {
  const [open, setOpen] = useState(false);

  function toggle() {
    setOpen(!open);
  }

  return (
    <div className="my-2 w-full rounded-lg border border-blue-500 p-1 px-4">
      <div
        className="flex justify-between"
        style={{ color: open ? "blue" : "white" }}
      >
        <h3>{title}</h3>
        <button onClick={toggle} className="">
          +
        </button>
      </div>
      <div
        style={{
          display: open ? "block" : "none",
        }}
        className="p-2"
      >
        <div className="space-x-2">
          <input type="checkbox" name="" id="" />
          <span>Lorem</span>
        </div>
        <div className="space-x-2">
          <input type="checkbox" name="" id="" />
          <span>Lorem</span>
        </div>
        <div className="space-x-2">
          <input type="checkbox" name="" id="" />
          <span>Lorem</span>
        </div>
      </div>
    </div>
  );
}

export function Product({ products }) {
  return (
    <>
      <div
        className="mx-2 grid h-full w-full grid-cols-6 gap-2 overflow-hidden"
        // style={{ gridTemplateRows: "minmax(min-content, max-content)" }}
      >
        {products.map((product) => (
          <div
            key={product.id}
            className="flex flex-col justify-between overflow-hidden rounded-md bg-white p-2 text-sm text-black"
          >
            <div className="my-2 flex w-full items-center justify-center">
              <Image
                src={product.images[0]}
                alt="Picture of the author"
                width={200}
                height={200}
                className="max-h-32 w-auto rounded-md"
              />
            </div>
            <div className="m-0 flex w-full flex-col overflow-hidden ">
              <h1 className="text-sm font-bold">{product.title}</h1>
              <p className="overflow-hidden text-ellipsis whitespace-nowrap font-light text-gray-500">
                {product.description}
              </p>

              <button className="mt-2 w-full rounded bg-blue-400 p-1">
                Buy
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
