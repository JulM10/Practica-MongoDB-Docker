db = db.getSiblingDB('tienda');

// Crear la colección 'productos' e insertar los datos
db.productos.insertMany([
  {
    "nombre": "Helado de Chocolate",
    "descripcion": "Helado de chocolate belga con trozos de cacao",
    "precio": 150.50,
    "categoria": "Helado",
    "disponibilidad": true,
    "imagen": "chocolate.jpg"
  },
  {
    "nombre": "Helado de Vainilla",
    "descripcion": "Helado de vainilla con extracto natural de vainilla bourbon",
    "precio": 140.00,
    "categoria": "Helado",
    "disponibilidad": true,
    "imagen": "vainilla.jpg"
  },
  {
    "nombre": "Helado de Fresa",
    "descripcion": "Helado de fresa hecho con fresas frescas de temporada",
    "precio": 135.75,
    "categoria": "Helado",
    "disponibilidad": true,
    "imagen": "fresa.jpg"
  },
  {
    "nombre": "Helado de Menta con Chocolate",
    "descripcion": "Helado de menta con trozos de chocolate negro",
    "precio": 160.00,
    "categoria": "Helado",
    "disponibilidad": true,
    "imagen": "menta_chocolate.jpg"
  },
  {
    "nombre": "Sundae de Caramelo",
    "descripcion": "Sundae con salsa de caramelo y crema batida",
    "precio": 180.00,
    "categoria": "Sundae",
    "disponibilidad": true,
    "imagen": "sundae_caramelo.jpg"
  },
  {
    "nombre": "Batido de Fresa",
    "descripcion": "Batido de fresa con leche entera y fresas naturales",
    "precio": 120.50,
    "categoria": "Bebida",
    "disponibilidad": true,
    "imagen": "batido_fresa.jpg"
  },
  {
    "nombre": "Batido de Chocolate",
    "descripcion": "Batido cremoso de chocolate con leche",
    "precio": 125.00,
    "categoria": "Bebida",
    "disponibilidad": true,
    "imagen": "batido_chocolate.jpg"
  },
  {
    "nombre": "Topping de Oreo",
    "descripcion": "Galletas Oreo trituradas para añadir a cualquier postre",
    "precio": 25.00,
    "categoria": "Topping",
    "disponibilidad": true,
    "imagen": "topping_oreo.jpg"
  },
  {
    "nombre": "Topping de Frutas",
    "descripcion": "Mezcla de frutas frescas (fresas, arándanos, plátano)",
    "precio": 30.00,
    "categoria": "Topping",
    "disponibilidad": true,
    "imagen": "topping_frutas.jpg"
  },
  {
    "nombre": "Helado de Café",
    "descripcion": "Helado cremoso de café intenso con granos de café tostados",
    "precio": 155.50,
    "categoria": "Helado",
    "disponibilidad": true,
    "imagen": "cafe.jpg"
  }
]);
