const express = require("express");
const bodyParser = require("body-parser");

const {PORT} = require('./config/ServerConfig');
const ApiRoutes = require('./routes/index');

const db = require('./models/index');
//const { Airplane } = require('./models/index');



const SetupAndStartServer = async () => {

    // create the express object

    const app = express();


    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.use('/api', ApiRoutes);

    
    app.listen(PORT, () => {
        console.log(`Server Started at ${PORT}`);

        if(process.env.SYNC_DB) {
            db.sequelize.sync({alert: true});
        }
                
    });
}


SetupAndStartServer();