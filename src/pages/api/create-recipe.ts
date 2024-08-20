import type { NextApiRequest, NextApiResponse } from "next";
import { query } from "../../../lib/db";

export default async function createRecipe(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "POST") {
        const { title, description, instructions, imageUrl } = req.body;
        console.log('Requête POST reçue avec les données:', { title, description, instructions });
        try {
            const results = await query(
                'INSERT INTO "Recipes" (title, description, instructions, "createdAt", "imageUrl") VALUES ($1, $2, $3, NOW(),$5) RETURNING *',
                [title, description, instructions, imageUrl]
            );
            console.log('Résultat de la requête SQL:', results);
            res.status(201).json(results.rows[0]);
        } catch (e) {
            console.error('erreur lors de la création de la recette:', e);
            res.status(500).json({ error: 'Erreur lors de la création de la recette' });
        }
    } else {
        res.status(405).json({ error: 'Méthode non autorisée' });
    }
}