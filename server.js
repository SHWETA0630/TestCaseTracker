const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const testCaseRoutes = require('./routes/testCases');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use('/api/testcases', testCaseRoutes);

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.log(err));

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
