const express = require("express");
const bodyParser = require("body-parser");

const {PORT} = require('./config/ServerConfig');



const SetupAndStartServer = async () => {

    // create the express object

    const app = express();


    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    
    app.listen(PORT, () => {
        console.log(`Server Started at ${PORT}`);
                
    });
}


SetupAndStartServer();