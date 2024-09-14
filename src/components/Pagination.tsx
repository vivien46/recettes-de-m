import Link from "next/link";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages }) => {
  return (
    <div className="mt-8">
      <nav className="pagination flex justify-center space-x-2">
        {/* Bouton Précédent */}
        {currentPage > 1 && (
          <Link
            href={`/?page=${currentPage - 1}`}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Précédent
          </Link>
        )}

        {/* Numéros de page */}
        {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
          <Link
            key={page}
            href={`/?page=${page}`}
            className={`${
              page === currentPage
                ? "bg-blue-700 text-white"
                : "bg-blue-500 hover:bg-blue-700 text-white"
            } font-bold py-2 px-4 rounded`}
          >
            {page}
          </Link>
        ))}

        {/* Bouton Suivant */}
        {currentPage < totalPages && (
          <Link
            href={`/?page=${currentPage + 1}`}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Suivant
          </Link>
        )}
      </nav>
    </div>
  );
};

export default Pagination;