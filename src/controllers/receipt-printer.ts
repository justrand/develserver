import express from "express";
import RootController from "./root";

export default class ReceiptPrinterController extends RootController
{
    constructor() {
        super();
        this.path = '/receipt';
        console.log("built class receipt printer for path "+this.path);
    }

    public initializeRoutes() {
        this.router.get(this.path, (request: express.Request, response: express.Response) => {
            response.send(request.body);
        });
    }

}