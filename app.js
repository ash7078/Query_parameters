const express = require('express');

//const router = express.Router();

const app = express();

const port = 3000;

// app.listen((port) => {

//     console.log(`server running on port ${3000}`)
// })


let people = {
    'ashok' : {'name' : 'ashok', 'age' : 26 , 'gender' : 'male'},
    'hari' : {'name' : 'hari', 'age' : 27 , 'gender' : 'male'},
    'harsha' : {'name' : 'harsha', 'age' : 28 , 'gender' : 'male'},
    'haritha' : {'name' : 'haritha', 'age' : 29 , 'gender' : 'male'}
}

app.get('/', (req, res)=>{
    res.send('Hello Ashok')
})

app.get('/profile', (req, res)=>{
    let profile = req.params.name

    if(people[name]){
        res.json(people[name])
    }else{
        res.json( notfound)
    }
})

// app.get('/parameter/:name',(req, res)=>{

//     res.send(`Hey My Name is : ${req.params.name}`)
      
//     //   let name = req.params.name
//     //   if (people[name]) {
//     //       res.json(people[name])
//     //   }else{
//     //       res.json(notfound)
//     //   }
// })

app.listen(port,() => {

    console.log(`server running on port ${3000}`)
})


