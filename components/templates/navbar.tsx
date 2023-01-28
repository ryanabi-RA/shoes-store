import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../assets/logo-nike.png";
import iconMenu from "../../assets/icon-menu-white.png";
import iconCloseMenu from "../../assets/icon-close-white.png";

function Menu() {
  const [show, setShow] = useState(false);

  if (show) {
    return (
      <div className="fixed top-0 right-0 z-10 m-0 h-screen w-full backdrop-blur-sm">
        {/* <p>Hi</p> */}
        <div className="absolute right-0 flex h-screen w-64 flex-col space-y-4 bg-zinc-800 p-10">
          <div
            className="flex w-full justify-end
          "
          >
            <button onClick={() => setShow(false)}>
              <Image
                src={iconCloseMenu}
                alt="Close menu"
                className="right-0 w-8"
              />
            </button>
          </div>
          <Link href="/" className="rounded-md p-2 hover:bg-gray-700">
            New
          </Link>
          <Link href="/shop" className="rounded-md p-2 hover:bg-gray-700">
            Shop
          </Link>
          <Link href="/cart" className="rounded-md p-2 hover:bg-gray-700">
            Cart
          </Link>
          <Link href="/shipping" className="rounded-md p-2 hover:bg-gray-700">
            Shipping
          </Link>
          <Link href="/account" className="rounded-md p-2 hover:bg-gray-700">
            Account
          </Link>
          <Link href="/about" className="rounded-md p-2 hover:bg-gray-700">
            About Us
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-12 space-x-16">
      <Link href="/">New</Link>
      <Link href="/shop">Shop</Link>
      <Link href="/cart">Cart</Link>
      <button onClick={() => setShow(true)}>
        <Image src={iconMenu} alt="iconMenu" className="w-10" />
      </button>
    </div>
  );
}

export default function Navbar() {
  const [menu, setMenu] = useState(false);

  return (
    <div className="absolute top-0 z-10 flex h-20 w-full items-center justify-between bg-zinc-900 text-xl text-white">
      <Link href="/" className="logo mx-10" id="logo">
        <Image src={Logo} alt="Logo" className="w-16" />
      </Link>

      <Menu />
    </div>
  );
}
