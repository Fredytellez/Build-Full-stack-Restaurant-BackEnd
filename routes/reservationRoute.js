import express from "express"; // importa el modulo express
import {sendReservation} from "../controller/reservation.js"

const router = express.Router(); // crea un nuevo enrutador de express. que se utilizan para organizar las rutas y manejar las solicitudes entrantes a diferentes rutas de la aplicación.

router.post("/send", sendReservation); // solicitud http para enviar la reservación a la base de datos de mongodb

export default router; 