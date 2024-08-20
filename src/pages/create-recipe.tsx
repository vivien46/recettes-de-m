import { useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '@/components/Layout';

const CreateRecipe = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [instructions, setInstructions] = useState('');
    const [image, setImage] = useState<File | null>(null);
    const [message, setMessage] = useState('');
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('instructions', instructions);
        if (image) {
            formData.append('image', image);
        }

        try {
            const res = await fetch('http://localhost:3000/api/create-recipe', {
                method: 'POST',
                body: formData,
            });

            if (res.ok) {
                setMessage('Recette créée avec succès');
                setTimeout(() => {
                
                    router.push('/recipes'); // Redirige vers la page des recettes après la création

                }, 5000);
                    
            } else {
                console.error('Erreur lors de la création de la recette');
            }
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <Layout>
            <div className="flex justify-center items-center h-screen">
                <div>
                    <h1 className="text-4xl font-bold">Créer une recette</h1>
                    <form onSubmit={handleSubmit} className="mt-4">
                        <div className="mb-4">
                            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                                Titre
                            </label>
                            <input
                                type="text"
                                id="title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                className="mt-1 p-2 border border-gray-300 rounded w-full"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                                Description
                            </label>
                            <textarea
                                id="description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                className="mt-1 p-2 border border-gray-300 rounded w-full"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="instructions" className="block text-sm font-medium text-gray-700">
                                Instructions
                            </label>
                            <textarea
                                id="instructions"
                                value={instructions}
                                onChange={(e) => setInstructions(e.target.value)}
                                className="mt-1 p-2 border border-gray-300 rounded w-full"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="image" className="block text-sm font-medium text-gray-700">
                                Image de la recette
                            </label>
                            <input
                                type="file"
                                id="image"
                                accept='image/*'
                                onChange={(e) => setImage(e.target.files ? e.target.files[0] : null)}
                                className="mt-1 p-2 border border-gray-300 rounded w-full"
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        >
                            Créer
                        </button>
                    </form>
                    {message && <p className="mt-4 text-green-500">{message}</p>}
                </div>
            </div>
        </Layout>
    );
};

export default CreateRecipe;