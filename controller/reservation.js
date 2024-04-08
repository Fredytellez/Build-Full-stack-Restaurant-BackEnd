// Creación y envío del esquema

import ErrorHandler from "../error/error.js";
import { Reservation } from "../models/reservationSchema.js"; // importa el modelo Reservation de reservationSchema

export const sendReservation = async (req, res, next) => {
  //  tres argumentos: req (la solicitud), res (la respuesta) y next (la función de middleware siguiente en la cadena).
  const { firstName, lastName, email, phone, date, time } = req.body; // datos necesarios para el cuerpo de la solicitud
  if (!firstName || !lastName || !email || !phone || !date || !time) {
    // Si alguno de los campos está ausente, devuelve un objeto de error utilizando el objeto
    return next(new ErrorHandler("Please fill full reservation form!"));
  }
  try {
    await Reservation.create({firstName, lastName, email, phone, date, time}); //  Este método crea una instancia y espera que se le pase un objeto con los campos de la reserva como propiedades.
    res.status(200).json({
      success: true,
      message: "Reservation Sent Successfully",
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      // usara el ErrorHandler para notificar error
      const validationErrors = Object.values(error.errors).map(
        (err) => err.message
      );
      return next(new ErrorHandler(validationErrors.join(", "), 400));
    }
    return next(error);
  }
};
