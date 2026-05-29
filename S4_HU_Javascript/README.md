# Gestión de Productos - Historia de Usuario M3S4
# Sistema de Productos con JSON Server

Este proyecto es un sistema básico CRUD de productos desarrollado con HTML, CSS y JavaScript utilizando JSON Server como base de datos falsa.

Permite:

* Crear productos
* Editar productos
* Eliminar productos
* Mostrar productos
* Guardar información en `db.json`
* Guardar información en `localStorage`

---

# Tecnologías utilizadas

* HTML5
* CSS3
* JavaScript
* JSON Server

---

# Estructura del proyecto

```bash
proyecto/
│
├── index.html
├── style.css
├── app.js
└── bd.json
```

---

# Instalación

## 1. Clonar o descargar el proyecto

```bash
git clone URL_DEL_PROYECTO
```

o descargar manualmente los archivos.

---

## 2. Instalar JSON Server

Abrir la terminal y ejecutar:

```bash
npm install -g json-server
```

---

# Ejecutar el proyecto

## 1. Iniciar JSON Server

En la terminal ejecutar:

```bash
json-server --watch bd.json
```

El servidor iniciará en:

```bash
http://localhost:3000
```

---

## 2. Abrir el proyecto

Abrir el archivo `index.html` con:

* Live Server
* Navegador web

---

# Funcionalidades

## Crear productos

Permite agregar un producto con:

* Nombre
* Precio

---

## Editar productos

Permite actualizar la información de un producto existente.

---

## Eliminar productos

Permite eliminar productos del sistema.

---

## LocalStorage

Los productos también se almacenan en el navegador utilizando:

```javascript
localStorage
```

---

# API utilizada

JSON Server crea automáticamente la siguiente ruta:

```bash
GET    /productos
POST   /productos
PUT    /productos/:id
DELETE /productos/:id
```

---

# Autor
Jafet