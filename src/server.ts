//3rd party libraries
import express from "express";
import * as bodyParser from 'body-parser';
import helmet from "helmet";
import cors from "cors";
import { createConnection } from "typeorm";

//Own
import routes from './routes';

export class DevelServer {
    public app: express.Application;
    public port: Number;

    constructor(port: Number) {
        this.app = express();
        this.port = port
    }

    public initialize() {
        createConnection().then(async connection => {
            this.initializeMiddlewares();
            this.app.use("/", routes);
        }).catch(error => console.log(error));
        this.listen();
    }

    private initializeMiddlewares() {
        this.app.use(cors());
        this.app.use(helmet());
        this.app.use(bodyParser.json());
    }

    private listen(){
        this.app.listen(this.port, () => {
            console.log('Server listening on port '+this.port);
        });
    }

}