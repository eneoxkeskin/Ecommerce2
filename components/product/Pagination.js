import Link from "next/link";

export default function Pagination({ currentPage, totalPages, pathname }) {
  return (
    <nav className="flex justify-center mt-4">
      <ul className="inline-flex items-center -space-x-px">
        {Array.from({ length: totalPages }, (_, index) => {
          const page = index + 1;
          return (
            <li key={page}>
              <Link
                href={`${pathname}?page=${page}`}
                as={`${pathname}?page=${page}`}
                className={`px-3 py-2 rounded-md hover:bg-gray-200 ${
                  currentPage === page ? "bg-gray-700 text-white" : "text-gray-500"
                }`}
              >
                {page}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
