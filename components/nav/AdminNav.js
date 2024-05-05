import Link from "next/link";

export default function AdminNav() {
  return (
    <nav className="nav justify-content-center mb-3">
      <Link href="/dashboard/admin" className=" text-gray-800 mr-3 mt-2">
        Admin
      </Link>
      <Link href="/dashboard/admin/category" className=" text-black mr-3 mt-2">
        Categories
      </Link>
      <Link href="/dashboard/admin/tag" className=" text-black mr-3 mt-2">
        Tags
      </Link>
      <Link href="/dashboard/admin/product" className=" text-black mr-3 mt-2">
        Add Product
      </Link>
      <Link href="/dashboard/admin/products" className=" text-black mr-3 mt-2">
        Products
      </Link>
      <Link href="/dashboard/admin/orders" className=" text-black mr-3 mt-2">
        Orders
      </Link>
    </nav>
  );
}
