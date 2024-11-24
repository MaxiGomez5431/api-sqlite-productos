const { Productos, Fabricantes, Componentes } = require('../models/')
const db = require('../models');

async function seed() {
    try {
        // Sincronizar la base de datos (recrear las tablas si no existen)
        await db.sequelize.sync({ force: true });
        console.log("Base de datos sincronizada");
  
        // ------------------------
        // Fabricantes
        // ------------------------
  
        const Fabricantes1 = await Fabricantes.create({
            nombre: "Intel",
            direccion: "Santa Clara, California, USA",
            numeroContacto: "408-765-8080",
            descripcion: "Fabricante líder en la producción de procesadores de alto rendimiento y soluciones tecnológicas avanzadas.",
            pathImg: "images/Fabricantes/intel.jpg",
        });
  
        const Fabricantes2 = await Fabricantes.create({
            nombre: "AMD",
            direccion: "Santa Clara, California, USA",
            numeroContacto: "408-749-4000",
            descripcion: "Reconocido fabricante de procesadores y tarjetas gráficas, especializado en productos para gamers y profesionales.",
            pathImg: "images/Fabricantes/amd.jpg",
        });
  
        const Fabricantes3 = await Fabricantes.create({
            nombre: "NVIDIA",
            direccion: "Santa Clara, California, USA",
            numeroContacto: "408-486-2000",
            descripcion: "Líder en el desarrollo de unidades de procesamiento gráfico (GPU) para gaming, inteligencia artificial y diseño profesional.",
            pathImg: "images/Fabricantes/nvidia.jpg",
        });
  
        const Fabricantes4 = await Fabricantes.create({
            nombre: "ASUS",
            direccion: "Taipei, Taiwán",
            numeroContacto: "886-2-2894-3447",
            descripcion: "Empresa global de hardware que ofrece placas base, laptops, monitores y componentes de alta calidad.",
            pathImg: "images/Fabricantes/asus.jpg",
        });
  
        // ------------------------
        // Componentes
        // ------------------------
  
        const Componentes1 = await Componentes.create({
            nombre: "Intel Core i9-13900K",
            descripcion: "Procesador de 24 núcleos y 32 hilos con tecnología Intel Turbo Boost.",
            pathImg: "images/Componentes/core_i9_13900k.jpg",
        });
  
        const Componentes2 = await Componentes.create({
            nombre: "AMD Ryzen 9 7950X",
            descripcion: "Procesador de 16 núcleos con arquitectura Zen 4 y soporte para PCIe 5.0.",
            pathImg: "images/Componentes/ryzen_9_7950x.jpg",
        });
  
        const Componentes3 = await Componentes.create({
            nombre: "NVIDIA GeForce RTX 4090",
            descripcion: "Tarjeta gráfica de alto rendimiento para gaming y diseño profesional.",
            pathImg: "images/Componentes/rtx_4090.jpg",
        });
  
        const Componentes4 = await Componentes.create({
            nombre: "ASUS ROG Strix Z790-E Gaming",
            descripcion: "Placa base de gama alta con soporte para procesadores Intel Core de 13ª generación.",
            pathImg: "images/Componentes/rog_strix_z790.jpg",
        });
  
        const Componentes5 = await Componentes.create({
            nombre: "Samsung 990 PRO NVMe SSD",
            descripcion: "Almacenamiento SSD de alto rendimiento con velocidades de lectura de hasta 7450 MB/s.",
            pathImg: "images/Componentes/samsung_990_pro.jpg",
        });
  
        const Componentes6 = await Componentes.create({
            nombre: "Corsair RM1000x",
            descripcion: "Fuente de poder modular de 1000W con certificación 80+ Gold.",
            pathImg: "images/Componentes/rm1000x.jpg",
        });
  
        // ------------------------
        // Productos
        // ------------------------
  
        const Productos1 = await Productos.create({
            nombre: "PC Gamer ASUS ROG Strix",
            descripcion: "PC de alto rendimiento equipada con la tarjeta gráfica RTX 4090 y procesador Intel Core i9.",
            precio: 4500.0,
            pathImg: "images/Productos/pc_gamer_asus.jpg",
        });
  
        const Productos2 = await Productos.create({
            nombre: "Estación de trabajo AMD Ryzen PRO",
            descripcion: "Workstation diseñada para creadores de contenido y simulaciones industriales.",
            precio: 5200.0,
            pathImg: "images/Productos/workstation_amd.jpg",
        });
  
        const Productos3 = await Productos.create({
            nombre: "Servidor de datos empresarial",
            descripcion: "Servidor compacto con procesador Intel Xeon y SSD Samsung 990 PRO.",
            precio: 7000.0,
            pathImg: "images/Productos/servidor_datos.jpg",
        });
  
        const Productos4 = await Productos.create({
            nombre: "PC para diseño gráfico NVIDIA Studio",
            descripcion: "PC optimizada para diseño gráfico y edición de video con RTX 4090.",
            precio: 4800.0,
            pathImg: "images/Productos/pc_diseno_grafico.jpg",
        });
  
        const Productos5 = await Productos.create({
            nombre: "PC Compacta para Gaming",
            descripcion: "Sistema compacto con procesador AMD Ryzen 7 y gráfica RTX 4060.",
            precio: 3200.0,
            pathImg: "images/Productos/pc_compacta_gaming.jpg",
        });
  
        // ------------------------
        // Asociaciones
        // ------------------------
  
        // Asociar Fabricantes a Productos
        await Productos1.addFabricantes([Fabricantes1, Fabricantes3, Fabricantes4]);
        await Productos2.addFabricantes([Fabricantes2, Fabricantes4]);
        await Productos3.addFabricantes([Fabricantes1, Fabricantes4]);
        await Productos4.addFabricantes([Fabricantes3, Fabricantes4]);
        await Productos5.addFabricantes([Fabricantes2, Fabricantes3]);
  
        // Asociar Componentes a Productos
        await Productos1.addComponentes([Componentes1, Componentes3, Componentes5]);
        await Productos2.addComponentes([Componentes2, Componentes4, Componentes5]);
        await Productos3.addComponentes([Componentes1, Componentes4, Componentes6]);
        await Productos4.addComponentes([Componentes3, Componentes5, Componentes6]);
        await Productos5.addComponentes([Componentes2, Componentes5]);
  
        console.log("Base de datos poblada con datos actualizados");
    } catch (error) {
        console.error("Error al poblar la base de datos:", error);
    }
  }
  
  

module.exports = seed