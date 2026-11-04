
const express = require("express");

const app = express();

// Import routes and middleware
const studentRoutes = require("./routes/studentRoutes");
const errorMiddleware = require("./middleware/errorMiddleware");

// Parse JSON request bodies
app.use(express.json());

// Welcome route
app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Custom Error Handling API is running"
    });
});

// Student routes
app.use("/students", studentRoutes);

// Handle unknown routes
app.use((req, res, next) => {
    next(new (require("./errors/AppError"))("Route not found", 404));
});

// Global error middleware (must be registered last)
app.use(errorMiddleware);

module.exports = app;
