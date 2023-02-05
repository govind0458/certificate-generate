import mongoose from 'mongoose'

export async function Configure () {
  
    try {
        
    await       mongoose.connect(process.env.URI)
    console.log('connect is database connection');

    } catch (error) {
        console.log('connect is not  database connection');
    }
}
