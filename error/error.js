// Esta clase se usa para crear instancias  de errores  personalizados que pueden incluir  un mensaje  y un código http

class ErrorHandler extends Error {
  // la clase ErrorHandler hereda todas las propiedades y métodos de la clase Error
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

export const errorMiddleware = (err, req, res, next) => {
  err.message = err.message || "Internal Server Error!";
  err.statusCode = err.statusCode || 500;

  return res.status(err.statusCode).json({
    success: false,
    message: err.message,
  });
};

export default ErrorHandler;
