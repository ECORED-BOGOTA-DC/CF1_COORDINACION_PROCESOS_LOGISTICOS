export default {
  global: {
    componenteFormativo: 'Planear cadena de suministros',
    descripcionCurso:
      'La logística se ha convertido en una ventaja competitiva en el entorno actual, repleta de avances tecnológicos, alta competencia y mayor exigencia de parte del cliente. Esto obliga a las empresas a ser más eficientes y productivas en los diferentes procesos de la cadena de abastecimientos y poder competir a nivel local e internacional.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/banner-principal-bg.svg'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Cadena de suministros',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Planeación estratégica de logística',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Conceptos generales',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Importancia de la cadena de suministros',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Funciones de la cadena de suministros',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Responsabilidades en la cadena de suministros',
            hash: 't_1_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.6',
            titulo: 'Clasificación de macroprocesos',
            hash: 't_1_6',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.7',
            titulo:
              'Clasificación de los subprocesos de la cadena de abastecimiento',
            hash: 't_1_7',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.8',
            titulo: 'Modelos de gestión de la cadena de abastecimiento',
            hash: 't_1_8',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Gestión de la cadena de suministros',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Cadena de valor',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Redes logísticas',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Clasificación de macroprocesos como actores de la cadena',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo:
              'Clasificación de los subprocesos de la cadena de abastecimiento',
            hash: 't_2_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo: 'Logística inversa o de reversa',
            hash: 't_2_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.6',
            titulo: 'E-logisticis',
            hash: 't_2_6',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.7',
            titulo:
              'CPFR o la planificación, pronosticación y reabastecimiento colaborativos',
            hash: 't_2_7',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Integración de la cadena de suministros',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Normatividad aplicada a los procesos logísticos',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Alianzas entre clientes y proveedores',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Requerimientos de manejo ambiental',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-play-circle',
            numero: '3.4',
            titulo: 'Trazabilidad en los procesos logísticos',
            hash: 't_3_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.5',
            titulo: 'Sistemas de gestión de calidad',
            hash: 't_3_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.6',
            titulo: 'Sistemas seguridad y salud en el trabajo OSHAS 18000',
            hash: 't_3_6',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Evaluación de la cadena de suministros',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-play-circle',
            numero: '4.1',
            titulo: 'Benchmarking qué es, cómo funciona, utilidad',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Valor agregado',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo: 'Mejoramiento de procesos',
            hash: 't_4_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.4',
            titulo: 'Medición del desempeño logística de aprovisionamiento',
            hash: 't_4_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.5',
            titulo: 'Medición del desempeño logística interna',
            hash: 't_4_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.6',
            titulo: 'Medición del desempeño logística salida',
            hash: 't_4_6',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.7',
            titulo: 'Sistemas de recolección de información',
            hash: 't_4_7',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Anaya, J. J. (2015). Logística integral: la gestión operativa de la empresa. ESIC Editorial.',
    },
    {
      referencia:
        'Ballou, R. (2004). Logística. Administración de la cadena de suministro. Pearson Educación.',
    },
    {
      referencia:
        'Bautista S., H., Martínez F., J. L., y Fernández L., G. (2015). Modelo de integración de cadenas de suministro colaborativas. Dyna, 82,(193), 145 - 154.',
    },
    {
      referencia:
        'Castellanos, A. (2015). Logística comercial internacional. Ecoe Ediciones.',
    },
    {
      referencia:
        'Council of Supply Chain Management Professionals (CSCMP). (s.f.). CSCMP Supply Chain Management Definitions and Glossary.',
      link:
        'https://cscmp.org/CSCMP/Academia/SCM_Definitions_and_Glossary_of_Terms/CSCMP/Educate/SCM_Definitions_and_Glossary_of_Terms.aspx?hkey=60879588-f65f-4ab5-8c4b-6878815ef921',
    },
    {
      referencia:
        'David, F. (2013). Conceptos de administración estratégica. Pearson Educación.',
      link:
        'https://laurabatres.files.wordpress.com/2018/06/conceptos-de-administracion-estrategica-14edi-david.pdf',
    },
    {
      referencia: 'Diario del Exportador. (2020). Diario del Exportador.',
      link:
        'https://www.diariodelexportador.com/2016/01/benchmarking-punto-clave-en-el-plan-de.html',
    },
    {
      referencia:
        'Granillo M., R., Hernández L., L., y Santana R. F. (2013). Integración S&OP-CPFR. Congreso Internacional de Logística y Cadena de Suministro. Sanfandila, Querétaro.',
    },
    {
      referencia: 'ISO. (2020). Standards.',
      link: 'https://www.iso.org/standards.html',
    },
    {
      referencia:
        "Mecalux. (2019). ¿Qué es la 'supply chain' o cadena de suministro? Definición y diferencias con la logística. Mecalux.",
    },
    {
      referencia:
        'Mecalux. (2019). La importancia de los sistemas de trazabilidad en logística. Mecalux.',
    },
    {
      referencia:
        'Mora, L. A. (2008). Indicadores de la gestión logística - KPI. Ecoe Ediciones.',
    },
    {
      referencia:
        'Mora, L. A. (2010). Gestión logística integral: Las mejores prácticas en la cadena de abastecimientos. Ecoe Ediciones.',
    },
    {
      referencia:
        'Núñez C., A., y López P., J. (2015). La logística en la empresa: un área estratégica para alcanzar ventajas competitivas. Ediciones Pirámide.',
    },
    {
      referencia:
        'Ocampo V., P. (2009). Gerencia logística y global. Revista Escuela de Administración de Negocios, (66), 113 - 136.',
    },
    {
      referencia:
        'Porter, M. (1991). Ventaja competitiva. Creación y sostenimiento de un desempeño superior. Rei Argentina S.A.',
    },
    {
      referencia:
        'Quintero, J., y Sánchez, J. (2006). La cadena de valor: Una herramienta del pensamiento estratégico. Revista de Estudios Interdisciplinarios en Ciencias Sociales. Telos, 8(3), 377 - 389.',
    },
    {
      referencia:
        'Revista de Logística Legis. (2016). Creación y valor agregado a partir de la gestión de la cadena de suministro.',
    },
    {
      referencia:
        'Revista de Logística Legis. (2016). La logística después de la logística.',
    },
    {
      referencia: 'Riveros P., G. (2015). Marketing logístico. Ecoe Ediciones.',
    },
    {
      referencia:
        'Robusté, F., y Galván, D. (2005). e-Logistics. Edicions UPC.',
    },
    {
      referencia:
        'Rojas L., M., Guisao G., E., y Cano A., J. (2011). Logística integral. Una propuesta práctica para su negocio. Ediciones de la U.',
    },
    {
      referencia:
        'Universidad Tecnológica de Chile. (2017). Logística y distribución. Santiago de Chile.',
    },
  ],
  glosario: [
    {
      termino: 'Almacén',
      significado:
        'Lugar o espacio físico para el almacenaje de bienes dentro de la cadena de suministro. Los almacenes son una infraestructura imprescindible para la actividad de todo tipo de agentes económicos (agricultores, ganaderos, mineros, industriales, transportistas, importadores, exportadores, comerciantes, intermediarios, consumidores finales, etc.)',
    },
    {
      termino: 'Apiladores',
      significado:
        'Herramienta de ayuda en cualquier empresa, que es muy eficaz para elevar, bajar y transportar cargas.',
    },
    {
      termino: 'Aprovisionamiento',
      significado:
        'Función que depende de la gestión del departamento de compras y que es responsable del flujo óptimo de las mercancías. ',
    },
    {
      termino: 'Canal de distribución',
      significado:
        'Conducto que define la compañía por el cual se movilizan los productos desde el lugar donde se producen hasta los consumidores finales.',
    },
    {
      termino: 'Diamante del peligro',
      significado:
        'Creado por la NFPA (National Fire Protection Association), es una entidad internacional voluntaria que fue creada con el fin de promover activamente la protección y prevención contra el fuego, dicha entidad es ampliamente conocida por sus estándares (National Fire Codes), a través de los cuales recomienda prácticas seguras desarrolladas por personal especializado y experto en el control de incendios y se utiliza para comunicar los peligros de los materiales peligrosos.',
    },
    {
      termino: 'Distribución',
      significado:
        'En logística se define este proceso como la acción de poner a disposición los productos para su consumo, en la cantidad demandada, el momento en que lo necesite y en el lugar acordado.',
    },
    {
      termino: 'Ergonomía',
      significado:
        'Es la disciplina tecnológica que trata del diseño de lugares de trabajo, herramientas y tareas que coinciden con las características fisiológicas, anatómicas, psicológicas y las capacidades del trabajador. Busca la optimización de los tres elementos del sistema (humano-máquina-ambiente), para lo cual elabora métodos de estudio de la persona, de la técnica y de la organización.',
    },
    {
      termino: 'Etiquetado',
      significado:
        'El etiquetado garantiza a los consumidores la información completa sobre el contenido y la composición de un producto, a fin de proteger su salud y sus intereses. La etiqueta puede contener también información relativa a una característica determinada, como el origen del producto o el método de producción. Algunos alimentos son, además, objeto de una normativa específica, como los organismos modificados genéticamente, los alimentos alergénicos, los alimentos para bebés o determinadas bebidas.',
    },
    {
      termino: 'Gestión logística',
      significado:
        'Es el proceso de planificación, implementación y control del flujo y almacenamiento eficiente y económico de la materia prima, productos semiterminados y acabados, así como la información asociada.',
    },
    {
      termino: 'Inventario',
      significado:
        'Es la lista organizada y codificada de los bienes que le pertenecen a la organización.',
    },
    {
      termino: 'KPI',
      significado:
        'Conocido también como indicador clave o medidor de desempeño o indicador clave de rendimiento, es una medida del nivel del rendimiento de un proceso. El valor del indicador está directamente relacionado con un objetivo fijado previamente y normalmente se expresa en valores porcentuales.',
    },
    {
      termino: 'Logística',
      significado:
        'Proceso de planificar, ejecutar y controlar de manera efectiva y eficiente el flujo de materias primas, inventario en curso y producto terminado y el flujo de información desde el punto de origen hasta el punto de entrega y consumo.',
    },
    {
      termino: 'Packing',
      significado:
        'Proceso de alistamiento y preparación de la carga referente a empaque y embalaje necesario para la expedición.',
    },
    {
      termino: 'Picking',
      significado:
        'Proceso de recogida de material extrayendo unidades o conjuntos empaquetados de una unidad de empaquetado superior que contiene más unidades que las extraídas.',
    },
    {
      termino: 'Supply Chain Mangement (SCM)',
      significado:
        'Conocida como Gestión de la Cadena de Suministro: involucra acciones de la gerencia de planeación, organización y control de las actividades de la cadena de suministro.',
    },
  ],
  complementario: [
    {
      tema: 'E-logisticis',
      referencia:
        'Robusté, F., y Galván, D. (2005). e-logistics. BEdicions UPC. ',
      tipo: 'Lectura en línea',
      link:
        'https://books.google.com.co/books?hl=es&lr=&id=lkBpBgAAQBAJ&oi=fnd&pg=PP5&dq=E-Logistics&ots=7oQt1gVo44&sig=vGN0NQxATFGYV8ixC7Q_8sSAuoE&redir_esc=y#v=onepage&q=E-Logistics&f=false',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizábal Gutiérrez',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Liliana Victoria Morales Gualdrón',
          cargo: 'Responsable de línea de producción',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Rafael Rodríguez Cuéllar',
          cargo: 'Instructor, Experto temático',
          centro:
            'Regional Huila - Centro de la Industria, la Empresa y los Servicios',
        },
        {
          nombre: 'Luis Fernando Botero Mendoza',
          cargo: 'Diseñador Instruccional',
          centro:
            'Regional Distrito Capital - Centro para la Industria de la Comunicación Gráfica',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Revisor Metodológico y Pedagógico',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Jhon Jairo Rodríguez Pérez',
          cargo: 'Diseñador y evaluador instruccional',
          centro:
            'Regional Distrito Capital - Centro para la Industria de la Comunicación Gráfica',
        },
        {
          nombre: 'Gloria Lida Alzate Suarez',
          cargo: 'Adecuador Instruccional - 2023',
          centro:
            'Regional Distrito Capital - Centro de gestión de mercados, Logística y Tecnologías de la información',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yuly Andrea Rey Quiñonez',
          cargo: 'Diseño web',
          centro: 'Centro Industrial del Diseño y la Manufactura',
          regional: 'Regional Santander',
        },
        {
          nombre: 'Diego Fernando Velasco Güiza',
          cargo: 'Desarrollo Fullstack',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Zuleidy Maria Ruiz Torres',
          cargo: 'Producción audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: [
            'Wilson Andres Arenales Caceres',
            'Gilberto Junior Rodriguez Rodriguez',
            'Maria Carolina Tamayo',
            'Nelson Vera Briceño',
            'Ricardo Vasquez Arrovaye',
            'Carlos Eduardo Garavito',
          ],
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Evaluación de contenidos inclusivos y accesibles',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Leyson Fabian Castaño Pérez',
          cargo: 'Validación de recursos educativos digitales',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
