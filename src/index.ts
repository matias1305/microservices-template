import Server from "./class/server";
import bodyParser from 'body-parser';
import cors from 'cors';
import router from "./routes/test";

const server = Server.instance;
const version = 'v1';
const path = `/api/${version}`;

// BodyParser
server.app.use(bodyParser.urlencoded({ extended:true }));
server.app.use(bodyParser.json());

// CORS
server.app.use(cors({ origin:true, credentials:true }));

// Routes
server.app.use(path, router);

// Start server
server.start( () => {
  console.log(`Server online in port: ${ server.port }`);
  console.log(`endpoint avaible: 'http://localhost:${server.port}${path}`);
});
