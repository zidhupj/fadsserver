const express = require('express');
const mongoose = require('mongoose');

// Import routes
const authRoutes = require('./routes/auth');
const notificationsRoutes = require('./routes/notification');
const packageRoutes = require('./routes/package');
const cartRoute = require('./routes/cart');

// Create Express app
const app = express();

// Set up middleware
app.use(express.json());

// Set up routes
app.use('/auth', authRoutes);
app.use('/notification', notificationsRoutes);
app.use('/package', packageRoutes);
app.use('/cart', cartRoute);

const port = process.env.PORT || 3000;
const uri = "mongodb+srv://sidhu:q1w2e3@realmcluster.or2gk.mongodb.net/fads?retryWrites=true&w=majority";

// Connect to MongoDB server using Mongoose
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}, () => {
    // Start server
    app.listen(port, () => {
        console.log(`Server started on port ${port}`);
    })
});
