# Grupopersistencia - TP GRUPAL 1

Este proyecto implementa una API REST desarollada con Express.js y SQLite. Permite gestionar las operaciones CRUD sobre los recursos Producto, Fabricante y Componente, utilizando el ORM (Object-relational mapping) Sequelize.
Las funcionalidades desarrolladas en el proyecto permiten automatizar y gestionar de manera integrada los datos.

## Tecnologías utilizadas

- Node.js
- Express.js
- SQLite
- Nodemon

## Instalación y ejecución de la API

### Requisitos previos

- Node.js
- npm (Node Package Manager)

### Pasos para la instalación

Ejecuta los siguientes comandos para correr la API en la máquina local.

- Clonar el repositorio

  `git clone https://github.com/MaxiGomez5431/api-sqlite-productos`

- Instalar dependecias dentro del directorio del proyecto

  `npm i`

- Inicializar el servidor

  `npm start`

- Para entornos de desarrollo (como nodemon) inicializar con el comando

  `npm run dev`

## Modelo Relacional

El proyecto presenta el siguiente diagrama de entidad-relacion (DER).
![DER](DER.png)
