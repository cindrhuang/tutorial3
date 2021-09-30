// const sum = (num1, num2) => {
//     return num1 + num2;
// }

// const result = sum(2,3);

// console.log(result);


/* CREATING NEW FILE 
const fs = require ('fs');

const generateFile = () => {
    try {
        fs.writeFileSync('data.txt', "Hi, this file was made with Node");
    } catch (err) {
        console.log(err);
    }
}

generateFile();
*/

/* RUNNING A LOCAL SERVER
const http = require ('http');

http.createServer(function (req, res) {
    res.write('Server started. Hi!!!');
    res.end();
}).listen(8080);
KILL SERVER WITH CTRL + C */


// const myModule = require('./my-module');
// const date = myModule();

// console.log(date);


//requiring express
const express = require('express');
//initialize express app
const app = express();

//usually REACT runs on port 3000!
const port = 9000;

//API / urls
app.get('/', (req, res) => {
    res.send ("Hello from the express server!");
});

app.get('/api/cats', (req, res) => {
    //call to DB

    //return dummy data
    const cats = ["British Shorthair", "Ragdoll", "Russian Blue"];
    //sending a response should be in JSON
    res.send(JSON.stringify(cats));
});

app.get('/api/dogs', (req, res) => {
    //call to DB

    //return dummy data
    const dogs = ["Husky", "German Shephard", "Corgi", "Shiba Inu"];
    //sending a response should be in JSON
    res.send(JSON.stringify(dogs));
});

//running express http server on the port
app.listen(port, () => {
    console.log("Listening on port", port)
});

