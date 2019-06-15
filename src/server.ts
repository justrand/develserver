
import express from "express";
import * as bodyParser from 'body-parser';

import RootController from './controllers/root';

export class DevelServer {
    public app: express.Application;
    public port: Number;

    constructor(controllers: RootController[], port: Number) {
        this.app = express();
        this.port = port
        this.initializeMiddlewares();
        this.initializeControllers(controllers);
    }

    private initializeMiddlewares() {
        this.app.use(bodyParser.json());
    }

    private initializeControllers(controllers: RootController[]) {
        controllers.forEach((controller) => {
          this.app.use(controller.path, controller.router);
        });
    }
     

    public listen(){
        this.app.listen(this.port, () => {
            console.log('Server listening on port '+this.port);
        });
    }

}