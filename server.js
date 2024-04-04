import app from "./app.js"; // importa la aplicación app

app.listen(process.env.PORT, () => {
    console.log(`Server Running On Port ${process.env.PORT}`)  //Inicia el servidor y lo pone a la escucha de solicitudes entrantes del puerto especificado en las variables de entorno 
})