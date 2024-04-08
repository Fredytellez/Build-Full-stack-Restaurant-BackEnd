// Definir un esquema de Mongoose
import mongoose from "mongoose"; // para definir el esquema de mongoose
import validator from "validator"; // importa validador de campos del esquema


const reservationSchema = new mongoose.Schema({
  // Define el  esquema de Mongoose

  firstName: {
    // definición de la estructura y validación de campos
    type: String,
    required: true,
    minLength: [3, "First name must contain at least 3 characters"],
    maxLength: [30, "First name cannot exceed 3 characters"],
  },
  lastName: {
    type: String,
    required: true,
    minLength: [3, "First name must contain at least 3 characters"],
    maxLength: [30, "First name cannot exceed 3 characters"],
  },
  email: {
    type: String,
    required: true,
    validate: [validator.isEmail, "Provide a valid email"],
  },
  phone: {
    type: String,
    required: true,
    minLength: [10, "Phone number must contain only 10 digits"],
    maxLength: [10, "Phone number must contain only 10 digits"],
  },
  time: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
});

export const Reservation = mongoose.model("Reservation", reservationSchema); // Exporta el modelo Reservation, mongoose.model() se utiliza para compilar el esquema reservationSchema
