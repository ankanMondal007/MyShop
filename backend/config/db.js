import mongoose from 'mongoose';

const connectDB = async () => {
    try{
        const conn = await mongoose.connect("mongodb+srv://ankan123:ankan123@cluster0.kqdbk.mongodb.net/proshop?retryWrites=true&w=majority",{
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true,
        })

        console.log(`MongoDB Connected: ${conn.connection.host}`)
    }
    catch(error){
        console.log(`Error: ${error.message}`)
        process.exit(1)
    }
}

export default connectDB