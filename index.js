const express = require('express');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const { userRoute } = require('./routes/userRoute.js');
const { propertiesRoute } = require('./routes/propertiesRoute.js');

dotenv.config()

const app = express();
const PORT = process.env.PORT || 8000;
app.use(express.json())
app.use(cookieParser())
app.use(cors())

app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`)
})

app.use('/api/user', userRoute)
app.use('/api/properties', propertiesRoute)
