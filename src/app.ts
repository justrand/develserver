import ServerSettings from './settings';
import { DevelServer } from './server';

 
const app = new DevelServer(ServerSettings.listen);
 
app.initialize();