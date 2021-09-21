const express = require( "express" );
const app = express();
const path = require("path");
const port = 8080; // default port to listen


app.use(express.static('public'));
app.use('/js',express.static(__dirname+'public/js'));


// define a route handler for the default home page
app.get( "/archivos/index", ( request, response ) => {
    response.status(201).sendFile(path.join(__dirname,'../views/index.html'));
} );

app.get( "*", ( request, response ) => {
    response.status(404).sendFile(path.join(__dirname,'../views/notfound.html'));
} );

// start the Express server
app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );