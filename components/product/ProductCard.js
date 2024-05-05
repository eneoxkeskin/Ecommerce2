"use client"

import Image from "next/image";
import Link from "next/link";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import ProductRating from "@/components/product/ProductRating";
import AddToCart from "@/components/product/AddToCart";

dayjs.extend(relativeTime);

export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative h-72 overflow-hidden">
        <Image
          src={product?.images?.[0]?.secure_url || "/images/default.jpeg"}
          layout="fill"
          objectFit="cover"
          alt={product?.title}
        />
      </div>

      <div className="p-6">
        <Link href={`/product/${product?.slug}`}>
          <h3 className="text-xl font-semibold text-gray-800 mb-2 cursor-pointer hover:text-primary-500 transition duration-300">
            {product?.title}
          </h3>
        </Link>
        <p className="text-gray-600 mb-4" >{product?.description}</p>

        <div className="flex justify-between items-center mb-4">
          <div>
            {product?.previousPrice > product?.price && (
              <p className="text-sm text-gray-500 line-through">
                ${product?.previousPrice?.toFixed(2)}
              </p>
            )}
            <p className="text-xl font-semibold text-primary-500">
              ${product?.price?.toFixed(2)}
            </p>
          </div>
          <AddToCart product={product} />
        </div>

        <div className="flex items-center justify-between text-sm text-gray-500">
          <p>Category: {product?.category?.name}</p>
          <p>Brand: {product?.brand}</p>
        </div>

        <div className="flex items-center justify-between mt-2 text-sm text-gray-500">
          <p>Tags: {product?.tags?.map((tag) => tag.name).join(", ")}</p>
          <p>Posted {dayjs(product?.createdAt).fromNow()}</p>
        </div>

        <ProductRating product={product} leaveARating={false} />
      </div>
    </div>
  );
}

