import type { NextApiRequest, NextApiResponse } from 'next';
import formidable, { File } from 'formidable';
import { query } from '@/lib/db';
import path from 'path';
import fs from 'fs';

export const config = {
  api: {
    bodyParser: false, // Désactive le body parser intégré de Next.js
  },
};

// Définir le répertoire où les fichiers seront uploadés (le répertoire "public/uploads" à la racine)
const uploadDir = path.join(process.cwd(), 'public/images/recipies');

export default async function createRecipe(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const form = formidable({
      uploadDir: uploadDir,
      keepExtensions: true,
      maxFileSize: 5 * 1024 * 1024, // Limite à 5MB
    });

    // Créer le répertoire 'public/uploads' s'il n'existe pas
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    form.parse(req, async (err, fields, files) => {
        if (err) {
          console.error('Erreur lors de la gestion du formulaire :', err);
          return res.status(500).json({ error: 'Erreur lors du traitement du fichier' });
        }
      
        console.log('Champs du formulaire reçus :', fields);
        console.log('Fichiers du formulaire reçus :', files);
      
        // Extraction des valeurs des tableaux
        const title = Array.isArray(fields.title) ? fields.title[0] : fields.title;
        const description = Array.isArray(fields.description) ? fields.description[0] : fields.description;
        const instructions = Array.isArray(fields.instructions) ? fields.instructions[0] : fields.instructions;
      
        console.log('Titre:', title, 'Description:', description, 'Instructions:', instructions);
      
        const file = Array.isArray(files.image) ? files.image[0] : files.image;
        const imageUrl = file ? file.newFilename || file.originalFilename : '';
      
        try {
          console.log('Insertion dans la base de données...');
          const result = await query(
            'INSERT INTO "Recipes" (title, description, instructions, "createdAt", "imageUrl") VALUES ($1, $2, $3, NOW(), $4) RETURNING *',
            [title, description, instructions, imageUrl]
          );
          console.log('Insertion réussie :', result);
      
          // S'assurer que la réponse est bien envoyée
          res.status(201).json(result.rows[0]);
        } catch (e) {
          console.error('Erreur lors de la création de la recette :', e);
          res.status(500).json({ error: 'Erreur lors de la création de la recette' });
        }
      });
      
      
  } else {
    res.status(405).json({ error: 'Méthode non autorisée' });
  }
}