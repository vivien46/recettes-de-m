import Image from "next/image";
import { Inter } from "next/font/google";
import { query } from "@/lib/db";
import Layout from "../components/Layout";
import { GetServerSideProps } from "next";
import Link from "next/link";
import Pagination from "../components/Pagination";

const inter = Inter({ subsets: ["latin"] });

interface Recipe {
  id: number;
  title: string;
  description: string;
  instructions: string;
  createdAt: string;
  updatedAt: string | null;
  imageUrl: string;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { page = 1, limit = 10 } = context.query;
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/recipesList?page=${page}&limit=${limit}`); // Appel de l'API
    
    if (!res.ok) {
      throw new Error(`Failed to fetch: ${res.status}`);
    }

    const data = await res.json();
    const recipes = data?.recipes ?? [];
    const totalCount = data?.totalCount ?? 0;


    return {
      props: {
        recipes,
        totalCount,
        currentPage: parseInt(page as string, 10),
        totalPages: Math.ceil(totalCount / parseInt(limit as string, 10)),
      },
    };
  } catch (error) {
    console.error("Error fetching recipes:", error);
    return {
      props: {
        recipes: [],
        totalCount: 0,
        currentPage: 1,
        totalPages: 1,
      },
    };
  }
};

export default function Home({ recipes, totalCount, currentPage, totalPages }: { recipes: Recipe[]; totalCount: number; currentPage: number; totalPages: number }) {
  return (
    <Layout>
      <div className="text-center px-4">
        <h1 className="text-4xl font-bold">Bienvenue sur le site de cuisine</h1>
        <p className="mt-4 text-lg">
          Découvrez des recettes délicieuses et faciles à réaliser.
        </p>

        <Pagination currentPage={currentPage} totalPages={totalPages} />
        
        {/* Liste des cartes de recettes */}
        <div className="flex flex-wrap justify-center gap-4 mt-8">
  {recipes.map((recipe: Recipe, index: number) => (
    <div
      key={index}
      className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 mb-8"
    >
      {recipe.imageUrl ? (
        <Image
          src={`/images/recipies/${recipe.imageUrl}`}
          alt={recipe.title}
          width={500}
          height={300}
          className="w-full h-48 object-cover"
        />
      ) : (
        <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
          <span>Image non disponible</span>
        </div>
      )}

      <div className="p-4">
        <h2 className="text-xl font-semibold">{recipe.title}</h2>
        <p className="mt-2 text-gray-600">{recipe.description}</p>
        <p className="mt-4">
          <span className="text-gray-500 font-bold">Créé le :</span>{" "}
          <span className="text-blue-600 font-semibold">
            {recipe.createdAt
              ? new Date(recipe.createdAt).toLocaleDateString("fr-FR")
              : "Date inconnue"}
          </span>
          {recipe.updatedAt && (
            <span>
              , <span className="text-gray-500 font-bold">Mis à jour le :</span>{" "}
              <span className="text-blue-600 font-semibold">
                {new Date(recipe.updatedAt).toLocaleDateString("fr-FR")}
              </span>
            </span>
          )}
        </p>
      </div>
    </div>
  ))}
</div>

{/* Pagination */}
<Pagination currentPage={currentPage} totalPages={totalPages} />

      </div>
    </Layout>
  );
}