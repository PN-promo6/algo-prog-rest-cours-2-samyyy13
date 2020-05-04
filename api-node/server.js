const users = [
  {
    "id": "5eaecda0cba960e77fc9f205",
    "age": 29,
    "name": "Lesa Clark",
    "gender": "female",
    "company": "VINCH",
    "email": "lesaclark@trollery.com",
    "phone": "+1 (945) 413-2529",
    "latitude": -15.421613,
    "longitude": 101.274002
  },
  {
    "id": "5eaecda01070c34da892e9e5",
    "age": 34,
    "name": "Marsha Hansen",
    "gender": "female",
    "company": "VINCH",
    "email": "marshahansen@singavera.com",
    "phone": "+1 (909) 508-3857",
    "latitude": -44.617836,
    "longitude": 2.408834
  },
  {
    "id": "5eaecda01865876300aada64",
    "age": 28,
    "name": "Peck Johnson",
    "gender": "male",
    "company": "VINCH",
    "email": "peckjohnson@talkola.com",
    "phone": "+1 (964) 454-3417",
    "latitude": -75.566328,
    "longitude": 33.309041
  },
  {
    "id": "5eaecda0d132e8d506850631",
    "age": 30,
    "name": "Myrna Case",
    "gender": "female",
    "company": "VINCH",
    "email": "myrnacase@vinch.com",
    "phone": "+1 (915) 517-3973",
    "latitude": 20.926118,
    "longitude": 3.366088
  },
  {
    "id": "5eaecda010a868687280ce28",
    "age": 24,
    "name": "Kelli Alston",
    "gender": "female",
    "company": "FURNIGEER",
    "email": "kellialston@applidec.com",
    "phone": "+1 (957) 410-2377",
    "latitude": -50.476537,
    "longitude": -175.994997
  },
  {
    "id": "5eaecda0b40f4682d97117fb",
    "age": 31,
    "name": "Bates Johnston",
    "gender": "male",
    "company": "FURNIGEER",
    "email": "batesjohnston@earwax.com",
    "phone": "+1 (917) 583-3341",
    "latitude": -78.69636,
    "longitude": -0.632594
  },
  {
    "id": "5eaecda099f2a9c328ec3603",
    "age": 25,
    "name": "Mariana Monroe",
    "gender": "female",
    "company": "FURNIGEER",
    "email": "marianamonroe@furnigeer.com",
    "phone": "+1 (975) 514-2722",
    "latitude": 15.230689,
    "longitude": 131.753915
  },
  {
    "id": "5eaecda0fd696b8f0e33a6db",
    "age": 29,
    "name": "Letitia Andrews",
    "gender": "female",
    "company": "ISOLOGICA",
    "email": "letitiaandrews@parcoe.com",
    "phone": "+1 (858) 565-3095",
    "latitude": -86.176034,
    "longitude": -153.088186
  },
  {
    "id": "5eaecda0d01513c7cbbcffa4",
    "age": 37,
    "name": "Dina Buchanan",
    "gender": "female",
    "company": "ISOLOGICA",
    "email": "dinabuchanan@uniworld.com",
    "phone": "+1 (930) 542-2668",
    "latitude": -22.313357,
    "longitude": 149.910409
  },
  {
    "id": "5eaecda0ba6003ab1113ceac",
    "age": 30,
    "name": "Lottie Walters",
    "gender": "female",
    "company": "ISOLOGICA",
    "email": "lottiewalters@isologica.com",
    "phone": "+1 (956) 488-3898",
    "latitude": 23.420905,
    "longitude": -143.389375
  }
];

const express = require('express');
const cors = require('cors');
const app = express();

let corsOptions ={
  origin:"*"
}
 app.use(cors(corsOptions));

app.listen(3000);

app.get("/users",function(req,res) {
  res.send(users)
})

app.get('/users/:id', function(req, res) {
  let id = req.params.id; //On récupère le paramètre passé en bout de route (l'id)

  //On cherche un joueur ayant cet id
  for (let i = 0; i < users.length; i++) {
    let currentUsers = users[i];
    if(currentUsers.id == users){ //Si on a trouvé un joueur ayant l'id demandé
             res.send(currentUsers); //On répond à la requête en retournant le joueur (et le code de status 200 envoyé par défaut)
    break; //On quitte la fonction
         }
  }

  //Si on n'a pas trouvé de joueur avec l'id demandé :
  res.statusMessage = "Users not found"; //On prépare un message d'erreur
  res.status(404).end(); //On répond avec une erreur 404 et le message d'erreur
});
