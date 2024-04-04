import mongoose from "mongoose"; // importa la biblioteca de modelado de objetos de MongoDB 

// Esta función establece la conexión con la base de datos
export const dbConnection = () => {
    mongoose.connect(process.env.MONGO_URI, { // Utiliza la URI para la conexión con la variable de entorno MONGO_URI ya definida en el archivo .env
        dbName: "RESTAURANTONE"
    }).then(() => {
        console.log("Connected to database successfully!") // Imprime en consola el mensaje si conecto exitosamente a la base de datos 
    }).catch((err)=>{
        console.log(`Some error occurred while connecting to database! ${err}`) // Imprime en consola el mensaje dado caso que no conecte con la base de datos 
    })
}