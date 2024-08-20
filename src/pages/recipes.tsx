import { GetServerSideProps } from "next";
import Layout from "@/components/Layout";
import Link from "next/link";
import { query } from "../../lib/db";
import { readFile } from "fs";

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

    const res = await query('SELECT * FROM "Recipes"');
    const recipes = res.rows.map((recipe: Recipe) => ({
    ...recipe,
    createdAt: new Date(recipe.createdAt).toISOString(),
    updatedAt: recipe.updatedAt ? new Date(recipe.updatedAt).toISOString() : null,
    }));

    return {
        props: {
            recipes,
        },
    };
};

const Recipes = ({ recipes }: { recipes: Recipe[] }) => {

    return (
        <Layout>
            <div className="p-4">
                <div className="flex justify-between items-center mb-4">
                    <h1 className="text-3xl font-bold">Nos Recettes</h1>
                    <Link href="/create-recipe" className="px-4 py-2 bg-green-500 text-white rounded">
                        Ajouter une recette
                    </Link>
                </div>
                <ul className="space-y-4">
                    {recipes.map((recipe) => (
                        <li key={recipe.id} className="border p-4 rounded-lg shadow-sm">
                            <h2 className="text-2xl font-semibold">{recipe.title}</h2>
                            <div>
                                <img src={recipe.imageUrl} alt={recipe.title} className="w-48 h-48 object-cover mt-4" />
                            </div>
                            <p className="text-gray-600">{recipe.description}</p>
                            <p>{recipe.instructions}</p>
                            <p>Créé le : {new Date(recipe.createdAt).toLocaleDateString()} à {new Date(recipe.createdAt).toLocaleTimeString()}</p>
              {recipe.updatedAt && <p>Mis à jour le : {new Date(recipe.updatedAt).toLocaleDateString()}</p>}
                        </li>
                    ))}
                </ul>
            </div>
        </Layout>
    );
}

export default Recipes;