export const db = {
  Proyectos: [
    {
      Nombre: "Urbania",
      Descripcion: [
        "En este proyecto colaboré con un equipo de desarrolladores para crear una plataforma web moderna y funcional para Urbania. Nos encargamos de todo el ciclo de desarrollo, desde el diseño de la experiencia de usuario (UX) hasta la implementación del backend y frontend.",

        "Implementé un sistema de autenticación y autorización basado en roles, desarrollé un servidor API para gestionar operaciones CRUD y la lógica de negocio, e integré una librería de visualización de datos para crear dashboards interactivos. Además, creé un módulo de administración de usuarios que facilita la gestión de permisos y roles dentro del sistema.",
        "La aplicación está desplegada en Vercel, garantizando alta disponibilidad y rendimiento óptimo. Esta solución permitió a Urbania centralizar la gestión de sus proyectos de construcción, mejorando significativamente la visibilidad y el control sobre sus operaciones.",
      ],
      Descripcion_corta:
        "Aplicación en React para una empresa constructora, desarrollada en equipo para ofrecer una solución escalable, eficiente y adaptada a las necesidades del cliente.",
      Imagen: "https://shethink.in/wp-content/uploads/2021/07/react.js-img.png",
      Repo: "https://github.com/Deadcriss86/proyect_time",
      Tecnologias: ["React", "Javascript", "GitHub", "Tailwind", "Vercel"],
      Despliegue: "https://proyect-time.vercel.app/",
      AppSS: [
        "/urbania_home.jpeg",
        "/urbania_bars.jpeg",
        "/urbania_dashboard.jpeg",
      ],
    },
    {
      Nombre: "Urbania server",
      Descripcion: [
        "En el desarrollo del backend para la aplicación de Urbania, implementé una arquitectura robusta basada en Node.js y Express, creando una API RESTful que maneja eficientemente todas las operaciones críticas del sistema. Diseñé un modelo de datos en MongoDB que permite gestionar la información de obras, usuarios y permisos de manera estructurada y escalable.",
        "Implementé un sistema de autenticación y autorización utilizando JWT (JSON Web Tokens) para garantizar la seguridad de las rutas y gestionar los diferentes niveles de acceso de usuarios. El sistema incluye middleware personalizado para la validación de roles y permisos, asegurando que cada usuario solo pueda acceder a la información autorizada según su nivel de acceso.",
        "La API cuenta con endpoints optimizados para la gestión de obras, incluyendo funcionalidades como el seguimiento de avances, gestión de recursos y generación de reportes. Implementé validaciones robustas de datos y manejo de errores para garantizar la integridad de la información y proporcionar respuestas claras al cliente. Además, incorporé funcionalidades para el procesamiento y agregación de datos necesarios para alimentar las visualizaciones y dashboards del frontend.",
      ],
      Descripcion_corta:
        "Servidor backend desarrollado con Node.js, Express y MongoDB, diseñado para manejar solicitudes de manera eficiente y escalable.",
      Imagen:
        "https://miro.medium.com/v2/resize:fit:800/1*bc9pmTiyKR0WNPka2w3e0Q.png",
      Repo: "https://github.com/curcomil/urbaniaserver",
      Tecnologias: ["Node", "Express", "MongoDB", "JTW"],
    },
    {
      Nombre: "Motoapp",
      Descripcion: [
        "Desarrollé un ecommerce completo especializado en accesorios para motocicletas, creando una solución integral que combina una experiencia de usuario fluida con un robusto sistema de gestión de productos y pagos. La aplicación fue construida utilizando tecnologías modernas tanto en el frontend como en el backend.",
        "En el frontend, implementé una interfaz de usuario dinámica y responsiva utilizando React, diseñada para ofrecer una experiencia de compra intuitiva. El diseño fue optimizado con Tailwind CSS, permitiendo una navegación fluida a través del catálogo de productos y un proceso de compra simplificado. Desarrollé características clave como filtrado de productos por categorías, búsqueda avanzada, carrito de compras en tiempo real y una pasarela de pagos segura integrada con Stripe.",
        "En la capa de backend, construí una API RESTful utilizando Node.js y Express que gestiona eficientemente todas las operaciones del ecommerce. Implementé un sistema robusto de gestión de inventario, autenticación de usuarios, procesamiento de órdenes y seguimiento de envíos. La integración con Stripe permite procesar pagos de manera segura, incluyendo manejo de transacciones, reembolsos y notificaciones automáticas de estado de pedidos.",
        "La aplicación incluye un panel de administración que permite gestionar productos, inventario, órdenes y métricas de ventas, proporcionando una visión completa del negocio para la toma de decisiones.",
      ],
      Descripcion_corta:
        "Ecommerce desarrollado en React con integración de pasarela de pago, diseñado para una tienda en línea de accesorios para motos.",
      Imagen: "https://shethink.in/wp-content/uploads/2021/07/react.js-img.png",
      Repo: "https://github.com/curcomil/motoapiv3",
      Tecnologias: ["React", "Tailwind", "Node", "Express", "Stripe"],
    },
  ],
};
