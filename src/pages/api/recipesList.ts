import { NextApiRequest, NextApiResponse } from "next";
import { query } from "@/lib/db";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    try {
      const result = await query('SELECT * FROM "Recipes" ORDER BY "id" ASC');
      const recipes = result.rows.map((recipe) => ({
        ...recipe,
        createdAt: new Date(recipe.createdAt).toISOString(),
        updatedAt: recipe.updatedAt ? new Date(recipe.updatedAt).toISOString() : null,
      }));

      res.status(200).json(recipes);
    } catch (error) {
      console.error("Error fetching recipes:", error);
      res.status(500).json({ message: "Error fetching recipes" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}