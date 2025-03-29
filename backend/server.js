const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/college-attendance', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Routes
const adminRoutes = require('./routes/admin');
const studentRoutes = require('./routes/student');
const parentsRoutes = require('./routes/parents');
const staffRoutes = require('./routes/staff');

app.use('/admin', adminRoutes);
app.use('/student', studentRoutes);
app.use('/parents', parentsRoutes);
app.use('/staff', staffRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
