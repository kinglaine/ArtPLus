import { pool } from './database.js'
import './dotenv.js'
import galleryData from '../data/gallery.js';

async function createArtsTable(){
    const createTableQuery = `
        DROP TABLE IF EXISTS Arts;

        CREATE TABLE IF NOT EXISTS Arts (
            id SERIAL PRIMARY KEY,
            title TEXT,
            description TEXT,
            text TEXT,
            image_url TEXT NOT NULL,
            date_created TEXT
        )
    `

    try {
        const res = await pool.query(createTableQuery);
       
        console.log('🎉 arts table created successfully')
    } catch (error) {
        console.error('⚠️ error creating arts table', error)
    }
}

const seedArtsTable = async () => {
    await createArtsTable()

    galleryData.forEach((art) => {
        const insertQuery = {
          text: 'INSERT INTO Arts (id, title, description, text, image_url, date_created) VALUES ($1, $2, $3, $4, $5, $6)'
        }
        const values = [
            art.id,
            art.title,
            art.description,
            art.text,
            art.image_url,
            art.date_created
        ]
        pool.query(insertQuery, values, (err, res) => {
            if (err) {
                console.error('⚠️ error inserting art', err)
                return
            }
        
            console.log(`✅ ${art.name} added successfully`)
        })
    })
   
}
seedArtsTable();