console.log("FILE STARTED");
//3 PACKAGES
const express = require("express"); //import express
const cors = require('cors'); //import cors


const artistsRoutes = require('./routers/artists');
const albumsRoutes = require('./routers/albums');
const songsRoutes = require('./routers/songs');

const app = express(); //app = express

//MIDDLEWARE JSON AND CORS
app.use(cors()); //ALLOWS BACKEND TO GET STUFF FROM FRONTEND
app.use(express.json()); //CONVERTS JSON TO JS


app.get('/', (req, res) => { //DEFINES A ROUTE
    res.json({ message: "Server is running" });
});

app.use('/artists', artistsRoutes);
app.use('/albums', albumsRoutes);
app.use('/songs', songsRoutes);




app.listen(3000, () => {
    console.log("Server running on port 3000");
});