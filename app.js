const express = require('express');
const app = express();
const port = 3000;

const usersData = [ { id: 1, name: 'Alice', age: 28, specialty: 'marketing' }, 
{ id: 2, name: 'Bob', age: 35, specialty: 'developers' },
 { id: 3, name: 'Charlie', age: 30, specialty: 'developers' }, 
 { id: 4, name: 'David', age: 25, specialty: 'QAs' },
  { id: 5, name: 'Emma', age: 32, specialty: 'ventas' }, 
  { id: 6, name: 'Frank', age: 28, specialty: 'marketing' }, 
  { id: 7, name: 'Grace', age: 34, specialty: 'developers' }, 
  { id: 8, name: 'Hank', age: 27, specialty: 'QAs' }, 
  { id: 9, name: 'Ivy', age: 31, specialty: 'ventas' },
   { id: 10, name: 'Jack', age: 29, specialty: 'marketing' }, 
   { id: 11, name: 'Karen', age: 36, specialty: 'developers' }, 
   { id: 12, name: 'Leo', age: 26, specialty: 'QAs' }, 
   { id: 13, name: 'Mia', age: 33, specialty: 'ventas' },
    { id: 14, name: 'Nathan', age: 30, specialty: 'marketing' }, 
    { id: 15, name: 'Olivia', age: 37, specialty: 'developers' }, 
    { id: 16, name: 'Paul', age: 24, specialty: 'QAs' }, 
    { id: 17, name: 'Quinn', age: 32, specialty: 'ventas' },
     { id: 18, name: 'Ryan', age: 28, specialty: 'marketing' },
      { id: 19, name: 'Sara', age: 35, specialty: 'developers' }, 
      { id: 20, name: 'Tom', age: 29, specialty: 'QAs' },
       { id: 21, name: 'Uma', age: 30, specialty: 'ventas' }, 
       { id: 22, name: 'Victor', age: 27, specialty: 'marketing' },
        { id: 23, name: 'Wendy', age: 34, specialty: 'developers' }, 
        { id: 24, name: 'Xander', age: 31, specialty: 'QAs' }, 
        { id: 25, name: 'Yara', age: 33, specialty: 'ventas' }, 
        { id: 26, name: 'Zack', age: 28, specialty: 'marketing' }, 
        { id: 27, name: 'Ava', age: 36, specialty: 'developers' }, 
        { id: 28, name: 'Bryan', age: 26, specialty: 'QAs' },
         { id: 29, name: 'Cynthia', age: 32, specialty: 'ventas' }, 
         { id: 30, name: 'Derek', age: 30, specialty: 'marketing' }, ];


function filterUsersBySpecialty(specialty) {
  return usersData.filter(user => user.specialty === specialty);
}


function generateHTML(title, users) {
  const userList = users.map(user => `
    <li>
      <strong>Nombre:</strong> ${user.name}<br>
      <strong>Edad:</strong> ${user.age}<br>
      <strong>Especialidad:</strong> ${user.specialty}
    </li>
  `).join('');

  return `
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${title}</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; padding: 20px; }
        h1 { color: #333; }
        ul { list-style-type: none; padding: 0; }
        li { margin-bottom: 10px; border: 1px solid #ddd; padding: 10px; }
        nav { margin-bottom: 20px; }
        nav a { margin-right: 10px; }
      </style>
    </head>
    <body>
      <nav>
        <a href="/">Inicio</a>
        <a href="/marketing">Marketing</a>
        <a href="/developers">Developers</a>
        <a href="/QAs">QAs</a>
        <a href="/ventas">Ventas</a>
      </nav>
      <h1>${title}</h1>
      <p>Número de personas: ${users.length}</p>
      <ul>${userList}</ul>
    </body>
    </html>
  `;
}


app.get('/', (req, res) => {
  res.send(generateHTML('Bienvenido', []));
});


const specialties = ['marketing', 'developers', 'QAs', 'ventas'];

specialties.forEach(specialty => {
  app.get(`/${specialty}`, (req, res) => {
    const users = filterUsersBySpecialty(specialty);
    res.send(generateHTML(`Especialidad: ${specialty}`, users));
  });
});


app.use((req, res, next) => {
  res.status(404).send(generateHTML('Error 404 - Página no encontrada', []));
});


app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});