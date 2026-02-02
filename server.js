const jsonServer = require('json-server');
const server = jsonServer.create();
const path = require('path');

// Asegúrate de que esta ruta sea exacta. 
// Si db.json está en la raíz, quita 'api/'
const router = jsonServer.router(path.join(__dirname, 'db.json')); 

const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);

// Configuración manual de CORS (Más robusta para Codespaces)
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,PATCH,DELETE,OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  
  // Manejar el pre-flight de CORS (peticiones OPTIONS)
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});

server.use(router);

const PORT = 3001;
server.listen(PORT, () => {
  console.log(`✅ JSON Server is running on port ${PORT}`);
  console.log(`📂 Resources: http://localhost:${PORT}/characters`);
});