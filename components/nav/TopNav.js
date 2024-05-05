"use client";
import { BsSearch } from "react-icons/bs";
import React, { useState } from "react";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { BsFillCartCheckFill } from "react-icons/bs";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { Button } from "@/components/ui/button";
import { useProduct } from "@/context/product";
import { useCart } from "@/context/cart";

export default function TopNav() {
  const { data: sessionData, status: sessionStatus } = useSession();
  const { cartItems } = useCart();
  const { productSearchQuery, setProductSearchQuery, fetchProductSearchResults } = useProduct();

  const [showStatusBar, setShowStatusBar] = useState(true);
  const [showActivityBar, setShowActivityBar] = useState(false);
  const [showPanel, setShowPanel] = useState(false);

  return (
    <nav className="navbar navbar-dark bg-black p-3 justify-content-between shadow-lg">
      <div className="d-flex w-100 align-items-center">
        <Link href="/" className="text-white text-2xl ml-8 font-bold">
          Enes Keskin
        </Link>
        <Link href="/shop" className="text-white ml-10 text-xl mr-8 text-decoration-none ">
          SHOP
        </Link>

        <form className="d-flex flex-grow-1 ms-auto me-3" onSubmit={fetchProductSearchResults}>
          <input
            type="search"
            className="form-control me-2 bg-white border-slate-500 px-3 py-2 rounded-md focus:outline-none focus:ring-primary-500 focus:ring-1 text-black"
            placeholder="Search products"
            aria-label="Search"
            value={productSearchQuery}
            onChange={(e) => setProductSearchQuery(e.target.value)}
            style={{ color: "black", "::placeholder": { color: "black" } }}
          />
          <button className="bg-white text-white px-3 py-2 rounded" type="submit">
          <BsSearch className="text-black" />
          </button>
        </form>

        <div className="d-flex align-items-center">
      
          <Link href="/cart" className="text-white">
            <div className="flex flex-row gap-2">
            <BsFillCartCheckFill size={30} /> {cartItems?.length}
            </div>
          </Link>
          {sessionStatus === "authenticated" ? (
            <>
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger className="nav-link text-white me-3">
              {sessionData?.user?.name}
            </MenubarTrigger>
            <MenubarContent>
              <MenubarItem>Products</MenubarItem>
              <MenubarItem>Orders</MenubarItem>
              <MenubarItem>Customers</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
              <a className="nav-link  text-white cursor-pointer" onClick={() => signOut({ callbackUrl: "/login" })}>
                Logout
              </a>
            </>
          ) : sessionStatus === "loading" ? (
            <span className="text-white">Loading</span>
          ) : (
            <>
              <Link href="/login" className="nav-link me-3">
                Login
              </Link>
              <Link href="/register" className="nav-link me-3">
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
