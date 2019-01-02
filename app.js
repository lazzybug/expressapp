const express   = require('express');
const app       = express();
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json());

app.use(express.static('public'))

let users = [];

app.get('/', (req, res)=>{
    res.render('index');
});

app.post('/addUser', (req, res)=>{
    users.push(req.body);
    res.send(req.body);
    console.log(users);
    // res.redirect(/allUsers)
});

app.get('/allUsers', (req, res)=>{
    res.render('allUsers', {users: users});
})

app.listen(3000, ()=>{
    console.log('Server started at port 3000')
});