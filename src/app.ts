import { ServerSettings } from './settings';
import ReceiptPrinterController from './controllers/receipt-printer';
import { DevelServer } from './server';
import RootController from './controllers/root';
 
const app = new DevelServer(
  [
    new RootController(),
    new ReceiptPrinterController()
  ],
  ServerSettings.listen,
);
 
app.listen();