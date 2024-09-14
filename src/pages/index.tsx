import Image from "next/image";
import { Inter } from "next/font/google";
import { query } from "@/lib/db";
import Layout from "../components/Layout";
import { GetServerSideProps } from "next";

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

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/recipesList`);
    
    if (!res.ok) {
      throw new Error(`Failed to fetch: ${res.status}`);
    }

    const recipes = await res.json(); // S'assure que le JSON est bien parsé


    return {
      props: {
        recipes,
      },
    };
  } catch (error) {
    console.error("Error fetching recipes:", error);
    return {
      props: {
        recipes: [], // Si une erreur se produit, on renvoie un tableau vide
      },
    };
  }
};

export default function Home({ recipes }: { recipes: Recipe[] }) {
  return (
    <Layout>
      <div className="text-center px-4">
        <h1 className="text-4xl font-bold">Bienvenue sur le site de cuisine</h1>
        <p className="mt-4 text-lg">
          Découvrez des recettes délicieuses et faciles à réaliser.
        </p>

        {/* Liste des cartes de recettes */}
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          {recipes.map((recipe: Recipe, index: number) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden w-full sm:w-1/2 lg:w-1/3 xl:w-1/4"
            >
              <Image
                src={recipe.imageUrl ? `/images/recipies/${recipe.imageUrl}` : ""}
                alt={recipe.title}
                width={500}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold">{recipe.title}</h2>
                <p className="mt-2 text-gray-600">{recipe.description}</p>
                <p className="mt-4">
                  <span className="text-gray-500 font-bold">Créé le :</span>{" "}
                  <span className="text-blue-600 font-semibold">{new Date(recipe.createdAt).toLocaleDateString("fr-FR")}</span>
                  {recipe.updatedAt && <span>, <span className="text-gray-500 font-bold">Mis à jour le :</span>{" "}
                  <span className="text-blue-600 font-semibold">{new Date(recipe.updatedAt).toLocaleDateString("fr-FR")}</span>
                  </span>}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8">
          <a
            href="/recipes"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Voir les recettes
          </a>
        </p>
      </div>
    </Layout>
  );
}
