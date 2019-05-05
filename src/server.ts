// lib
import bodyParser from 'body-parser';
import cors from 'cors';

// local
import Server from "./class/server";
import router from "./routes/router";

// env
import { SERVER_PATH } from "./global/environment";

// instances
const server = Server.instance;

// BodyParser
server.app.use(bodyParser.urlencoded({ extended:true }));
server.app.use(bodyParser.json());

// CORS
server.app.use(cors({ origin:true, credentials:true }));

// Routes
server.app.use(SERVER_PATH, router);

// Start server
server.start( () => {
  console.log(`Server online in port: ${ server.port }`);
  console.log(`endpoint avaible: 'http://localhost:${server.port}${SERVER_PATH}`);
});
