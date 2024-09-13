import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "../components/Layout";

const inter = Inter({ subsets: ["latin"] });

const recipe = {
  title: "Recette de cuisine",
  description: "Description de la recette",
  image: "/assets/images sample/food.jpg",
};

export default function Home() {
  return (
    <Layout>
      <div className="text-center">
        <h1 className="text-4xl font-bold">Bienvenue sur le site de cuisine</h1>
        <p className="mt-4 text-lg">
          Découvrez des recettes délicieuses et faciles à réaliser.
        </p>

        <div className="flex flex-wrap flex-col border border-red-600">
        <Image
          src={recipe.image}
          alt="Des plats de cuisine"
          width={200}
          height={200}
          className="m-8"
        />
        <p>{recipe.title}</p>
        <p>{recipe.description}</p>
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
