# CerveStore 🍺

Aplicación tipo SPA desarrollada en React para gestionar un catálogo de cervezas, con autenticación simulada, manejo de roles y un backend simulado con `json-server`.

---

## ✅ Funcionalidades

- Login con autenticación simulada (sin backend real)
- ABM de cervezas (alta, baja, listado)
- Roles de usuario:
  - 👑 **Admin**: puede agregar y eliminar cervezas
  - 👤 **Usuario**: solo puede visualizar el listado
- Rutas protegidas y control de acceso
- React Hook Form para formularios y validaciones
- Context API + custom hook para gestionar sesión
- Estilos aplicados con React Bootstrap

---

## 👤 Usuarios de prueba

> Estos usuarios están definidos en el archivo `db.json`.

### 👑 Admin
- **Usuario:** `admin`
- **Contraseña:** `admin123`

### 👤 Usuario común
- **Usuario:** `user`
- **Contraseña:** `user123`

---

## 🚀 Instalación y ejecución

1. **Cloná el proyecto** o descargá el ZIP.
2. **Instalá las dependencias**


npm install

---

### Levantar (las dos terminales en simultaneo)


1. **Levantar el backend simulado (json-server)**

npx json-server --watch db.json --port 3000

Podés verificar accediendo a:

http://localhost:3000/users

 2. **Levantar el frontend (React)**

 npm run dev

Esto abrirá automáticamente la aplicación en:

http://localhost:5173

```bash