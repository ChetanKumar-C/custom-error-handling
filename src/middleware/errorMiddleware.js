
const errorMiddleware = (err, req, res, next) => {

    // Determine status code
    const statusCode = err.statusCode || 500;

    // Determine error message
    const message = err.isOperational
        ? err.message
        : "Internal Server Error";

    // Log error for debugging
    console.error("ERROR:", err.message);

    // Send consistent response
    res.status(statusCode).json({
        success: false,
        status: statusCode,
        message: message
    });
};

module.exports = errorMiddleware;
