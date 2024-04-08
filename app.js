import express from "express"; // importa el modulo express
import cors from "cors"; // importa el middleware cors  (Cross-Origin Resource Sharing)
import dotenv from "dotenv"; // biblioteca que permite cargar variables desde un archivo .env
import { dbConnection } from "./database/dbConnection.js"; // importa la función de conexión con la base de datos
import { errorMiddleware } from "./error/error.js"; // importa la función de la carpeta error para el uso de errores predeterminados como respuestas http
import reservationRouter from "./routes/reservationRoute.js";

const app = express(); // crea la instancia de la aplicación app
dotenv.config({ path: "./config/config.env" }); // con el metodo config() carga las variables de entorno del archivo .env según la ruta especificada

app.use(
  cors({
    origin: [process.env.FRONTEND_URL], // establece el origen permitido para las solicitudes, en este caso usa la variable de entorno FRONTEND_URL
    methods: ["POST"], // Especifica el metodo HTTP permitido para la solicitud CORS
    credentials: [true], // Habilita el intercambio de de cookies(credenciales) entre el servidor y el cliente
  })
);

app.use(express.json()); // habilita el middleware para lectura en formato json (Lo convierte en un objeto de javascript) accesible en el objeto "req.body"
app.use(express.urlencoded({ extended: true })); // Middleware que permite que express pueda trabajar con datos enviados desde un formulario HTML
app.use("/api/v1/reservation", reservationRouter);

dbConnection(); // llamado a la función de conexión con el servidor

app.use(errorMiddleware); // llamado a la función de errores predeterminados creados en ./error/error.js

export default app;
