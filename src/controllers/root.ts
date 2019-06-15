import express from "express";

export default class RootController
{
    public router = express.Router();
    public path = '/';

    constructor() {
        this.initializeRoutes();
    }

    public initializeRoutes() {
        this.router.get(this.path, this.handleMainRequest);
    }

    protected handleMainRequest(request: express.Request, response: express.Response) {
        response.send('Working! This is the root controller');
    }
}