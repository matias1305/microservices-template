import express from 'express';
import http from 'http';

// Enviroment
import { SERVER_PORT } from '../global/environment';


export default class Server {

  private static _instance:Server;
  public app: express.Application;
  public port: number;
  private httpServer: http.Server;

  private constructor() {
    this.app        = express();
    this.port       = SERVER_PORT;
    this.httpServer = new http.Server(this.app);
  }

  // Aplicando patron singleton
  public static get instance() {
    return this._instance || ( this._instance = new this() );
  }

  // Levanta el servidor de express con http
  public start(callback:any) {
    this.httpServer.listen(this.port, callback);
  }
}