import { NextApiRequest, NextApiResponse } from "next";
import { query } from "@/lib/db";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    
      const { page = 1, limit = 10 } = req.query;
      const offset = (parseInt(page as string, 10) - 1) * parseInt(limit as string, 10);
      
      try {
        const totalCountResult = await query('SELECT COUNT(*) FROM "Recipes"');
        const totalCount = parseInt(totalCountResult.rows[0].count, 10);
        
        const result = await query('SELECT * FROM "Recipes" ORDER BY "id" ASC LIMIT $1 OFFSET $2', [limit, offset]);

      const recipes = result.rows.map((recipe) => ({
        ...recipe,
        createdAt: new Date(recipe.createdAt).toISOString(),
        updatedAt: recipe.updatedAt ? new Date(recipe.updatedAt).toISOString() : null,
      }));

      res.status(200).json({recipes, totalCount});
    } catch (error) {
      console.error("Error fetching recipes:", error);
      res.status(500).json({ message: "Error fetching recipes" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}