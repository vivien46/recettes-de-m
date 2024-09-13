import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "../components/Layout";

const inter = Inter({ subsets: ["latin"] });

const recipes = [
  {
    title: "Recette de Cuisine",
    description: "Description de la recette",
    image: "/assets/images/sample/food.jpg",
    allergens: ["Gluten", "Lait"], // Ajoute des allergènes si nécessaires
  },
  // Ajoute d'autres recettes ici
];

export default function Home() {
  return (
    <Layout>
      <div className="text-center px-4">
        <h1 className="text-4xl font-bold">Bienvenue sur le site de cuisine</h1>
        <p className="mt-4 text-lg">
          Découvrez des recettes délicieuses et faciles à réaliser.
        </p>

        {/* Liste des cartes de recettes */}
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          {recipes.map((recipe, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden w-full sm:w-1/2 lg:w-1/3 xl:w-1/4"
            >
              <Image
                src={recipe.image}
                alt={recipe.title}
                width={500}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold">{recipe.title}</h2>
                <p className="mt-2 text-gray-600">{recipe.description}</p>
                <div className="mt-4">
                  <h3 className="font-semibold">Allergènes:</h3>
                  <ul className="list-disc list-inside mt-1 text-gray-600">
                    {recipe.allergens.map((allergen, index) => (
                      <li key={index}>{allergen}</li>
                    ))}
                  </ul>
                </div>
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
