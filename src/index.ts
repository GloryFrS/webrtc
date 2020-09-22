import { Server } from './app';

const server = new Server();

server.listen((port) => {
  console.log(`Server is listening on http://localhost:${port}`);
});
