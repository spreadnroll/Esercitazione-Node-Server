import dbPromise from "./database.mjs";

async function population() {
  const db = await dbPromise;
  
  await db.run(`INSERT INTO friend (character_id, friend_id, friend_name, status, species, gender, friend_url)
    VALUES (195, 1, 'Rick Sanchez', 'Alive', 'Human', 'Male', 'https://rickandmortyapi.com/api/character/1'),
           (195, 2, 'Morty Smith', 'Alive', 'Human', 'Male', 'https://rickandmortyapi.com/api/character/2');`);
  }

population()
