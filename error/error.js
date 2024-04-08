

// Esta clase se usa para crear instancias  de errores  personalizados que pueden incluir  un mensaje  y un código http
class ErrorHandler extends Error {
  // la clase ErrorHandler hereda todas las propiedades y métodos de la clase Error
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

export const errorMiddleware = (err, req, res, next) => { // Se ejecutara cuando se produzca un error durante el proceso de solicitud en la aplicación
  err.message = err.message || "Internal Server Error!"; // Se asigna el mensaje de error predeterminado 
  err.statusCode = err.statusCode || 500; // Se asigna el código de estado predeterminado
 
  return res.status(err.statusCode).json({  // Devuelve una respuesta JSON con el código de estado HTTP y el mensaje de error  
    success: false, // Indica que la solicitud no tuvo éxito 
    message: err.message, // Contiene el mensaje de error 
  });
};

export default ErrorHandler;
