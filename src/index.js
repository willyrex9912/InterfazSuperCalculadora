const express = require( "express" );
const bodyparser = require("body-parser");
const app = express();
const path = require("path");
const port = 9090; // default port to listen


app.use(express.static('public'));
app.use('/js',express.static(__dirname+'public/js'));
app.use(bodyparser.json());

// define a route handler for the default home page
app.get( "/archivos/index", ( request, response ) => {
    response.status(201).sendFile(path.join(__dirname,'../views/index.html'));
} );

app.get( "*", ( request, response ) => {
    response.status(404).sendFile(path.join(__dirname,'../views/notfound.html'));
} );

app.post("/calc",(request,response)=>{
    console.log("Api works");
    console.log(request.body);
    response.send("Api works");
});

// start the Express server
app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );