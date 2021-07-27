const express = require('express');
const app = express();

 //setup template engine
app.set('view engine', 'ejs');
app.use(express.static("Public"));
app.use(express.static("css"));
app.use(express.static("main"));
app.use(express.static("media"));
app.use(express.static("images"));
app.use(express.static("videos"));



const port = 4545;

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});

app.get('/', (req, res) => {
        res.render('home');
});


