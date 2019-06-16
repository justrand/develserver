import express from "express";

export default class ReceiptPrinterController
{
    public static echoRequest(request: express.Request, response: express.Response) {
        response.send("Receipt: "+request.body);
    }
}