require('dotenv').config()

const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;
const key = process.env.MONBOOSE_PWD;
const path = require('path');
//const indexRouter = require('/routes/index');

mongoose.connect(`mongodb+srv://${process.env.MONBOOSE_USERNAME}:${process.env.MONBOOSE_PWD}@cluster0.9olz6al.mongodb.net/?retryWrites=true&w=majority`, {
    useNewUrlParser: true
}).then(() => {
    console.log("Connected to database ok")
})
    .catch((err) => {
            console.log("Cannot connect to database", err)
        }
    )

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


const cors = require('cors');
app.use(cors());

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


const pkmRouter = require('./router/pkmRouter');
app.use('/pkm', pkmRouter);

const userRouter = require('./router/userRooter');
app.use('/user', userRouter);

const authRouter = require('./functions/auth');
app.use('/', authRouter);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

