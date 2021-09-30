const jsonServer = require("json-server");
const json = require("./json");
const server = jsonServer.create();
const router = jsonServer.router(json);
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;
server.use(middlewares);
server.use(router);

server.listen(port);
