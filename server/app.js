const express = require('express');
const cors = require('cors');
const signupRoute = require('./routes/AdminRoutes');
const loginRoute = require('./routes/AdminRoutes');
const userSignupRoute=require('./routes/UserRoutes');
const userLoginRoute = require('./routes/UserRoutes');
const passwordRoute=require('./routes/UserRoutes');
const resetpassword=require('./routes/Resetroutes');
const connectDB=require('./db')
const path = require('path');


const app = express();

// Enable CORS for all routes
connectDB();
app.use(cors());

// Middleware to parse JSON bodies
app.use(express.json());

// Routes
app.use('/api', signupRoute);
app.use('/api',loginRoute);
app.use('/api',userSignupRoute);
app.use('/api',userLoginRoute);
app.use('/api',passwordRoute);
app.use('/api',resetpassword);
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
