<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Gestión de la cadena de suministros

    p(data-aos="fade-right") La cadena de suministro es una red de proveedores, fábricas, almacenes, centros de distribución y ventas al por menor; a través de los cuales se adquieren y se transforman las materias primas, para entregar al cliente productos o servicios.
    
    .row.align-items-center.mb-4
      .col-lg-6.order-lg-1.order-2(data-aos="fade-right")
        p.mb-0 Con base en Bautista, Martínez y Fernández (2015) se debe entender que la cadena de suministros se ocupa de cuestiones estratégicas, tales como la integración de los procesos de negocio internos y externos, el desarrollo de vínculos estrechos entre los socios del canal, y la gestión de los productos y la información a medida que avanzan a través de fronteras organizativas y empresariales; en otro nivel, puede ser una herramienta táctica y operativa aplicada a la gestión de las actividades operacionales en curso. Estas actividades pueden incluir: el servicio al cliente, el control de los flujos de entrada y salida de materiales e información, la eliminación de las ineficiencias de los canales y los costos, que se extienden desde la adquisición de materias primas hasta la fabricación, distribución, consumo y el retorno final a través del canal por medio de reciclaje o eliminación. 
      .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema2/f1.svg', alt='Imagen decorativa')

    separador
    #t_2_1.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 2.1 Cadena de valor

    p(data-aos="fade-right") Este término acuñado por Porter (1991) identifica, entonces, “las principales actividades que crean un valor para los clientes y las actividades de apoyo relacionadas”. La cadena permite también identificar los distintos costos en los que incurre una organización a través de las distintas actividades que conforman su proceso productivo, por lo que constituye un elemento indispensable para determinar la estructura de costos de una compañía. 
    
    .row.justify-content-center.mb-5
      .col-lg-10.mx-auto(data-aos="flip-up")
        .bloque-texto-b.fondo-purpura-medio.p-4
          .bloque-texto-b__texto
            i.fas.fa-quote-left(style="font-size: 2em")
            p.mb-0 Desde el punto de vista estratégico “la cadena de valor de una compañía y la forma en la cual desempeña cada actividad refleja la evolución de su propio negocio y de sus operaciones internas”; la estrategia, los enfoques que utiliza en su ejecución y la economía fundamental de las actividades mismas también son relacionadas por los autores fortaleciendo el concepto.
            i.fas.fa-quote-right(style="font-size: 2em")
          .bloque-texto-d__autor
            .h5.text-end.mb-0 Según Quintero y Sánchez (2006)

    p.mb-5(data-aos="fade-right") Es indispensable en el proceso formativo que relaciona estos conceptos de manera directa, por eso debe leer el documento “Cadena de valor y cadena logística versus cadena de suministros” de Núñez y López (2015).

    .row.g1.tarjeta.align-items-center.justify-content.between.p-4(data-aos="flip-up")
      .col-lg-2.col-3
        img(src='@/assets/curso/tema1/f4.svg', alt='Imagen decorativa')._93px.mx-auto.my-4
      .col
        .row.justify-content-between.align-items-center
          .col.mb-3.mb-sm-0
            p.texto-blanco #[strong Base de Datos:] biblioteca SENA<br>#[strong Recursos:] e-libro<br>#[strong Libro: ]<i>La logística en la empresa: un área estratégica para alcanzar ventajas competitivas</i><br>Autor: Núñez y López (2015)<br>#[strong Página:] 61 al 64
            p.texto-blanco.mb-0 <span style="font-size:.8rem">Estimado aprendiz, debe recordar que para ingresar a las bases de datos del Sena se ingresa con el número del documento de identidad sin puntos en el campo de usuario y contraseña.</span>
          .col-sm-auto
            a.boton.color-acento-botones(href="https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/48968?page=62" target="_blank")
              span Ir al sitio
              i.fas.fa-link

    separador
    #t_2_2.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 2.2 Redes logísticas
    
    p.mb-5(data-aos="fade-right") La cadena logística es la vía imaginaria mediante la cual se realiza el movimiento de mercancías desde su origen hasta el consumidor final, esta movilización se lleva a cabo a través del servicio, la manipulación, transformación, desplazamiento y almacenamiento que sufren los productos desde que son materia prima hasta su elaboración como mercancía final. Estas cadenas se diseñan para que puedan cubrir los diferentes modos de transporte a saber: marítimo, terrestre (férreo y carretera), aéreo, y en su construcción participan diferentes actores.
    
    .row.justify-content-center.mb-4
      .col-lg-8.mx-auto.py-4
        .titulo-sexto.color-acento-botones.mb-4(data-aos="fade-right")
          h5 Figura 4.
          span Medios de transporte
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/tema2/f3.svg', alt='Imagen decorativa').mb-4
        p.text-center La gestión de estos procesos nos ayuda a direccionar las tres grandes logísticas de la empresa: aprovisionamiento, producción y distribución.
      .col-lg-8.mx-auto.py-4
        .titulo-sexto.color-acento-botones.mb-4(data-aos="fade-right")
          h5 Figura 5.
          span Tres grandes logísticas de la empresa
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/tema2/f4.svg', alt='describe las tres grandes logísticas de la empresa que son:<br>Aprovisionamiento<br>Producción<br>Distribución')

    separador
    #t_2_3.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 2.3	Clasificación de macroprocesos como actores de la cadena
    
    p.mb-5(data-aos="fade-right") Cumplirle al cliente tiene una serie de novedades que no se pueden enumerar en algunos casos, pues “son muchos los puntos críticos que se manejan durante la gestión de la cadena, y para su administración y cumplimiento debemos contar con elementos de apoyo imprescindibles para gestionarla correctamente” (Rojas, Guisao y Cano, 2001). Al gestionar estas logísticas se logra identificar y establecer la movilización entre las diferentes unidades, a diseñar diferentes pasos o caminos para lograr su fin principal: cumplirle al cliente.    

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-10.fondo-purpura-medio.p-5
        .row.align-items-center
          .col-lg-5.p-4
            img(src='@/assets/curso/tema3/f10.svg', alt='Imagen decorativa', style="max-width:296px").mx-auto
          .col-lg-7
            h3 Actores de la cadena
            p Mediante este recurso infográfico el aprendiz podrá conocer cada uno de los macroprocesos como actores de la cadena.
            a.boton.color-acento-botones(:href="obtenerLink('/downloads/Actores_de_la_cadena.pdf')" target="_blank" type="application/pdf")
              span Descargar
              i.fas.fa-file-download
    
    .row.justify-content-center.mb-5
      .col-lg-8.mx-auto.py-4
        .titulo-sexto.color-acento-botones.mb-4(data-aos="fade-right")
          h5 Figura 6.
          span Divisiones de la logística
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/tema2/f5.svg', alt='Imagen que muestra el ciclo de abastecimiento que es:<br>01. Determinar las necesidades<br>02. Determinar la fuente de adquisición<br>03. Seleccionar el proveedor<br>04. Gestión de pedido y orden de compra.<br>05. Supervisión del pedido<br>06. Entrada de mercancías y gestión de stock<br>07. Control de facturas<br>08. Gestión de pagos<br>').mb-4
          figcaption Nota. <span style="font-weight: 400">Tomada de Rojas, Guisao y Cano (2011)</span>

    .row.justify-content-center.mb-4
      .col-lg-8.mx-auto(data-aos="flip-up")
        .cajon.color-acento-botones.fondo-rojizo-clarito.p-4
          p.mb-0 <span style="font-size:1.2rem">Al gestionar estas tres logísticas, se busca convertir la cadena de suministro de la empresa en un proceso eficiente para la satisfacción del cliente, es decir, #[strong la efectividad de toda la cadena debe ser más importante que la efectividad de cada una por separado], a través de sus diferentes funciones.</span>
    
    separador
    #t_2_4.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 2.4	Clasificación de los subprocesos de la cadena de abastecimiento

    p.mb-5(data-aos="fade-right") Es fundamental contar con el apoyo de los demás integrantes de la cadena de abastecimiento, los cuales se relacionan a continuación.
    .h4.mb-5 <i class="fas fa-crosshairs fa-spin" style="color: #57DBD8; margin-left: 8px; font-size: larger" data-aos="fade-right"></i>  Logística de aprovisionamiento
    p(data-aos="fade-right") Es la gestión de asegurar el abastecimiento de las mercancías necesarias para la producción, con el fin de evitar faltantes a los clientes. El aprovisionamiento contempla todos procesos y actividades destinadas a controlar el suministro que realizan los diferentes proveedores con los que cuenta la empresa en el desarrollo de sus operaciones. 
    
    .row.justify-content-center.mb-5
      .col-lg-10.mx-auto(data-aos="flip-up")
        .bloque-texto-b.fondo-purpura-medio.p-4
          .bloque-texto-b__texto
            i.fas.fa-quote-left(style="font-size: 2em")
            p.mb-0 Aprovisionar es una función destinada a poner a disposición de la empresa todos aquellos productos y servicios del exterior que le son necesarios para su funcionamiento, mientras que las compras constituyen una función más restringida, que tiene por objeto adquirir aquellos bienes y servicios que la empresa necesita, garantizando el abastecimiento de las cantidades requeridas en términos de tiempo, calidad y precio. En otras palabras, se debe definir con claridad cuánto, cuándo y dónde comprar, qué productos hay que reponer, cuánto producto hay que comprar, cuándo hay que realizar el pedido y dónde hay que situar el producto.
            i.fas.fa-quote-right(style="font-size: 2em")
          .bloque-texto-d__autor
            .h5.text-end.mb-0 Según Anaya (2015)

    .row.justify-content-center.mb-5
      .col-lg-7.mx-auto.py-4
        .titulo-sexto.color-acento-botones.mb-4(data-aos="fade-right")
          h5 Figura 7.
          span Ciclo del abastecimiento
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/tema2/f6.svg', alt='Imagen que muestra a través de un esquema las actividades de almacenamiento, esto es:<br>Los pedidos, inventarios y recepción tiene que ver con el almacenaje, la consolidación o desconsolidación y el cross docking todo esto finaliza con el despacho.').mb-4.p-4
          figcaption Nota. <span style="font-weight: 400">Tomada de Universidad Tecnológica de Chile (2017)</span>
    
    p.mb-5(data-aos="fade-right") En consecuencia, en toda actividad de aprovisionamiento se implican unas actividades y acciones a nivel operativo y administrativo a saber:
    
    AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta fondo-casi-blanco" data-aos="flip-up")
      .row(titulo="Decisión")
        p Se debe tener en cuenta la planeación de la compra, la selección, evaluación y calificación de los proveedores y el desarrollo de los mismos.
        ul.lista-ul--color
          li(style="margin-bottom: 2px")
            i.fas.fa-check-circle(style="color: #FE7062;")
            p.mb-0 La función más importante de la gestión de compras es buscar al proveedor adecuado antes de realizar el requerimiento.
          li(style="margin-bottom: 2px")
            i.fas.fa-check-circle(style="color: #FE7062;")
            p.mb-0 Se debe realizar un proceso de búsqueda y selección de proveedores de bienes y servicios más adecuados a sus necesidades.
          li(style="margin-bottom: 2px")
            i.fas.fa-check-circle(style="color: #FE7062;")
            p.mb-0 El propósito es establecer una lista de las empresas que fabrican los productos que se requieren para solicitar la información y luego seleccionar la más adecuada a las necesidades de la empresa.
          li(style="margin-bottom: 2px")
            i.fas.fa-check-circle(style="color: #FE7062;")
            p.mb-0 No es muy recomendable tener a un solo proveedor y hacerle todo el pedido que necesitamos.
        .col-lg-6
          .titulo-sexto.color-acento-botones.mb-4
            h5 Figura 8.
            span Aspectos clave para la selección de proveedores
          figure
            img(src='@/assets/curso/tema2/f7.svg', alt='Imagen que describe la gestión de coordinación de procesos, esta se describe luego de la imagen.').p-4
            figcaption Nota. <span style="font-weight: 400">Tomada de Castellanos (2015)</span>
      div(titulo="Compra")
        p Debe tener en cuenta la evaluación de las ofertas, los documentos de la compra, el envío la recepción de los pedidos, la calidad y el precio.
        ul.lista-ul--color
          li(style="margin-bottom: 2px")
            i.fas.fa-check-circle(style="color: #FE7062;")
            p.mb-0 #[strong Preparación de la negociación:] recolección de la información, fijación de los objetivos e identificación de las oportunidades
          li(style="margin-bottom: 2px")
            i.fas.fa-check-circle(style="color: #FE7062;")
            p.mb-0 #[strong Desarrollo de la negociación:] la organización material de la negociación y búsqueda de información complementaria.
          li(style="margin-bottom: 2px")
            i.fas.fa-check-circle(style="color: #FE7062;")
            p.mb-0 #[strong Concreción del resultado:] firma y cierre del acuerdo.
      div(titulo="Postcompra")
        p Se enmarca el manejo de mercancía, el tipo de carga, el almacenamiento, inventario y la estantería.
        ul.lista-ul--color
          li(style="margin-bottom: 2px")
            i.fas.fa-check-circle(style="color: #FE7062;")
            p.mb-0 #[strong Almacenamiento:] dar ubicación específica a cualquier material (materias primas, productos semielaborados terminados), con el fin de ubicarlos oportunamente cuando sea requerido y optimizar los espacios.<br><br>La función principal de la gestión del almacén o bodega consiste en optimizar los flujos físicos, además de definir los criterios para seleccionar los materiales que saldrán a atender una petición.<br><br>En el proceso de almacenamiento se interrelacionan actividades, tales como pedidos, inventarios, etc., los cuales se resumen en el siguiente esquema:
        .titulo-sexto.color-acento-botones.mb-4
          h5 Figura 9.
          span Actividades de la gestión de almacenamiento
        figure
          img(src='@/assets/curso/tema2/f8.svg', alt='Imagen que expone las actividades correspondientes a la logística inversa que se detallan posterior a la imagen.').p-4
          figcaption Nota. <span style="font-weight: 400">Tomada de Castellanos (2015)</span>
      div(titulo="Servicio")
        p.mb-0 De acuerdo con lo establecido en la negociación, se encuentra el mantenimiento y el servicio al cliente.
    
    .h4.mb-5 <i class="fas fa-crosshairs fa-spin" style="color: #57DBD8; margin-left: 8px; font-size: larger" data-aos="fade-right"></i> Logística de producción
    
    p(data-aos="fade-right") Es la parte donde se gestionan los flujos físicos y administrativos de la transformación de los materiales, el ensamble de las piezas y elementos y el almacenamiento de productos terminados, con el fin de disponerlos para su distribución.
    p.mb-5(data-aos="fade-right") La logística de producción conlleva una serie de actividades que se inician cuando el productor o fabricante de un bien, adquiere elementos para que el producto que se elabore llegue a buen término y coordine la entrega hacia el consumidor final, a través de la gestión de #[em stock], compras, almacenaje, y distribución.
  
    .row.justify-content-center.mb-5
      .col-lg-6.mx-auto
        .titulo-sexto.color-acento-botones.mb-4(data-aos="fade-right")
          h5 Figura 10.
          span Gestión de coordinación de procesos de producción
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/tema2/f9.svg', alt='Imagen decorativa').p-4
          figcaption Nota. <span style="font-weight: 400">Tomada de Castellanos (2015)</span>

    .h4.mb-5 <i class="fas fa-crosshairs fa-spin" style="color: #57DBD8; margin-left: 8px; font-size: larger" data-aos="fade-right"></i>  Logística de distribución
    
    p.mb-5(data-aos="fade-right") Una vez los productos han sido elaborados, terminados y almacenados, el siguiente paso consiste en organizar la distribución y transporte de los productos, a fin de cubrir la demanda del mercado y llevarlos hasta su destino final.
    
    .row.justify-content-center.mb-5
      .col-lg-8.mx-auto(data-aos="flip-up")
        .cajon.color-acento-botones.fondo-rojizo-clarito.p-5
          p.mb-0 <span style="font-size:1.2rem">La gestión de distribución es la más crítica en las empresas, ya que supone el contacto con el cliente. Además, porque aquí se desarrollan todas aquellas actividades que ayudan a completar las órdenes de pedido con el fin de asegurar el servicio al cliente.</span>
    
    .titulo-sexto.color-acento-botones.mb-4(data-aos="fade-right")
      h5 Figura 11.
      span Gestión de coordinación de procesos
    figure(data-aos="zoom-in")
      img(src='@/assets/curso/tema2/f10.svg', alt='Imagen decorativa').p-4
      figcaption Nota. <span style="font-weight: 400">Tomada de Castellanos (2015)</span>

    separador
    #t_2_5.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 2.5	Logística inversa o de reversa

    p.mb-5(data-aos="fade-right") La definición dada por el Consejo Ejecutivo de Logística Inversa de Estados Unidos, según la cual la retrologística es:
    
    .row.justify-content-center.mb-5
      .col-lg-10.mx-auto(data-aos="flip-up")
        .bloque-texto-b.fondo-purpura-medio.p-4
          .bloque-texto-b__texto
            i.fas.fa-quote-left(style="font-size: 2em")
            p.mb-0 El proceso de planificación, implantación y control eficiente del flujo efectivo de costes y almacenaje de materiales, inventarios en curso y productos terminados, así como de la información relacionada, desde el punto de consumo al punto de origen, con el fin de recuperar valor o asegurar su correcta eliminación.
            i.fas.fa-quote-right(style="font-size: 2em")
          .bloque-texto-d__autor
            .h5.text-end.mb-0 Revista de Logística Legis, 2016
    
    p(data-aos="fade-right") Es decir, que la logística inversa es la parte de la logística que mayor atención presta a las mercancías, puesto que gestiona su regreso dentro de la cadena de suministros, buscando que se lleve a cabo de la forma más efectiva y adecuada posible de este fenómeno convirtiéndolo en una oportunidad de mejora en la reducción de costos de las empresas.
    p.mb-5(data-aos="fade-right") Las causas que motivan este proceso se encuentran enmarcadas en devoluciones y/o inconformidades que presenta el producto terminado, puesto que acarrea la #[strong recogida] de los productos en las instalaciones de los clientes; y, una #[strong puesta de conformidad], enmarcado en el proceso de garantía por reparación, producto defectuoso, daño por obsolescencia, etc.
    h4.text-center.mb-5(data-aos="fade-left") Actividades de logística inversa

    .row.justify-content-center.mb-4 
      .col-lg-10.mx-auto.tarjeta.fondo-purpura-clarito.py-4.mb-5
        .titulo-sexto.color-acento-botones.mb-4(data-aos="fade-right")
          h5 Figura 12.
          span Gestión de coordinación de procesos de producción
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/tema2/f11.svg', alt='Imagen decorativa').mb-4
          figcaption Nota. <span style="font-weight: 400">Tomada de Castellanos (2015)</span>

      .col-lg-8.mx-auto(data-aos="flip-up")
        .cajon.color-acento-botones.fondo-rojizo-clarito.p-4
          p.mb-0 Para la implementación de una política de devoluciones, se debe tener claridad del proceso y establecer los plazos, estado del producto, documentación necesaria, etc.
    
    separador
    #t_2_6.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 2.6 <i>E-logisticis</i>

    p(data-aos="fade-right") El #[em e-commerce] o comercio electrónico abarca los términos de compra, venta, distribución y desarrollo de todas las herramientas, así como el aprovisionamiento de información al consumidor acerca de un producto o servicio a través de internet. 
    p.mb-5(data-aos="fade-right") Dentro de este servicio, se encuentra la logística del comercio electrónico o <i>e-logistics</i>, que ha revolucionado el proceso de consumo, puesto que el consumidor está a un clic de distancia de acceder a diversidad de productos y compañías. Este escenario tiene su foco puesto en la logística, con lo cual este aspecto se vuelve un tema central. El tiempo y forma en que cada producto llegará a su comprador, construirá la experiencia de compra de ese consumidor y obliga a las empresas a revisar la cadena de abastecimiento y a replantear su estructura logística para satisfacer las necesidades.
    
    .row.justify-content-center.mb-5
      .col-lg-10.mx-auto(data-aos="flip-up")
        .cajon.color-acento-botones.fondo-rojizo-clarito.p-4
          p.mb-0 Las empresas DotCom (.com) o empresas que realiza la mayor parte de sus actividades #[em online], implementan los procesos de logística, almacenamiento, manejo de inventarios, control de #[em stocks], empaquetado, y, en algunos casos, cobro contra entrega, reembolso de los productos, y distribución, necesarios para llevar los productos que ofrecen hasta las manos de los consumidores y así adaptar su actual estructura a las exigencias del mercado.
    
    p(data-aos="fade-right") Como la logística del #[em e-commerce] no sigue los patrones de la logística tradicional, la solución está en los canales de distribución #[em online], que cuenta con las siguientes ventajas:
    
    .row.justify-content-center.mb-5
      .col-lg-10.mx-auto.mb-4
        .titulo-sexto.color-acento-botones(data-aos="fade-right")
          h5 Tabla 2.
          span Comparativos de beneficios e-logistics entre empresa y clientes
        .tabla-a.color-acento-contenido.mb-5.tablaAzul( alt="Se muestran la comparación de los beneficios logísticos que se dan entre empresa y cliente")
          table._4060
            caption Nota. <span style="font-weight: 400">Tomada de Riveros (2015)</span>
            thead
              tr(data-aos="fade-right")
                th Beneficios para la empresa
                th Beneficios para los clientes
            tbody
              tr(data-aos="fade-right")
                td Aumento sustancial de la demanda.
                td Tiene accesibilidad a la tienda virtual las 24 horas del día.
              tr(data-aos="fade-right")
                td Acceso a nuevos mercados.
                td Frente a la oferta tradicional, la oferta #[em online] puede brindar precios menores a los clientes.
              tr(data-aos="fade-right")
                td Globalización de la empresa.
                td Eliminación de los costos para adquirir el producto.
              tr(data-aos="fade-right")
                td Costo de inversión reducido.
                td Mayor variedad de elección.
              tr(data-aos="fade-right")
                td Ventas de productos con un inventario reducido o sin inventario, atendiendo la demanda de forma personalizada.
                td Agilidad en la respuesta de reclamos.
              tr(data-aos="fade-right")
                td Menor inversión publicitaria.
                td La oferta de productos a través de internet genera una oferta y demanda global, lo que expande el público objetivo y demanda.
              tr(data-aos="fade-right")
                td Canal directo que agiliza el proceso logístico.
                td Mayor relación y comunicación entre la empresa y el consumidor, lo que mejora el servicio al cliente y la imagen de la empresa.
    
    separador
    #t_2_7.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 2.7	CPFR o la planificación, pronosticación y reabastecimiento colaborativos

    .row.justify-content-center.mb-5
      .col-lg-10.mx-auto(data-aos="flip-up")
        .bloque-texto-b.fondo-purpura-medio.p-4
          .bloque-texto-b__texto
            i.fas.fa-quote-left(style="font-size: 2em")
            p.mb-0 “El CPFR, acrónimo de Planificación Colaborativa, Pronóstico y Reabastecimiento, es un proceso de colaboración por el que los socios comerciales de la cadena de suministro pueden planificar conjuntamente las actividades clave de la cadena de suministro”, se debe tener en cuenta desde la producción y el suministro de materias primas a la producción hasta la entrega de productos finales a los clientes finales. La colaboración abarca la planificación empresarial, la previsión de ventas, y todas las operaciones necesarias para reponer las materias primas y productos terminados.
            i.fas.fa-quote-right(style="font-size: 2em")
          .bloque-texto-d__autor
            .h5.text-end.mb-0 Según Granillo, Hernández y Santana (2013)

    p(data-aos="fade-right") El objetivo de CPFR es mejorar la integración de la cadena de suministro convirtiéndola de un aislado, ineficaz e ineficiente sistema “#[em push]” o de forma coordinada, a un sistema “#[em pull]” basado en la demanda del cliente final.
    p(data-aos="fade-right") La CPFR es una práctica de negocios que establece una planeación, reabastecimiento y pronósticos compartidos a través de toda la cadena de suministro fundamentado en una visibilidad total de la información de entrada en toda la cadena. Crea necesidad de sistemas integrados de comunicación con el fin de identificar patrones de conducta del cliente que contribuya al mejoramiento del pronóstico de ventas, creación de programas de gestión de inventarios y estándares de empaque; esta dinámica proporciona a la empresa una plataforma clara para llevar a cabo el reabastecimiento, de una manera planeada y en consenso.
    h5.text-center.mb-0(data-aos="fade-left") Proceso CPFR

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-10.mx-auto.py-4
        img(src='@/assets/curso/tema2/f12.svg', alt='Esta imagen expone el proceso completo de CPFR y que se describe posterior a la imagen.').mb-4
        .col-lg-3.mx-auto
          a.anexo.mb-4(:href="obtenerLink('downloads/Proceso_CPFR.pdf')" target="_blank")
            .anexo__icono
              img(src="@/assets/template/icono-pdf.svg")
            .anexo__texto
              p Proceso CPFR

    p.mb-5(data-aos="fade-right") Las mejores prácticas en las cadenas de abastecimiento garantizan mejoras en todos los procesos de la empresa, por eso, se hace obligatorio conocer cómo trabajan los operadores logísticos que se convierten en articulaciones de las empresas y para eso es un requisito que haga la siguiente lectura:

    .row.g1.tarjeta.align-items-center.justify-content.between.p-4(data-aos="flip-up")
      .col-lg-2.col-3
        img(src='@/assets/curso/tema1/f4.svg', alt='Imagen decorativa')._93px.mx-auto.my-4
      .col
        .row.justify-content-between.align-items-center
          .col.mb-3.mb-sm-0
            p.texto-blanco #[strong Base de Datos:] biblioteca SENA<br>#[strong Recursos:] e-libro<br>#[strong Libro: ]<i>Gestión logística integral. Las mejores prácticas en la cadena de abastecimiento</i><br>Autor: (Mora, L. A., 2010)<br>#[strong Página:] 249 al 254 del libro, el tema es “4.2.3. Operadores logísticos de mercancía”
            p.texto-blanco <span style="font-size:.8rem">Estimado aprendiz, debe recordar que para ingresar a las bases de datos del Sena se ingresa con el número del documento de identidad sin puntos en el campo de usuario y contraseña.</span>
          .col-sm-auto
            a.boton.color-acento-botones(href="https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/96908?page=275" target="_blank")
              span Ir al sitio
              i.fas.fa-link

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    mostrarIndicador: true,
  }),
}
</script>

<style lang="sass" scoped></style>
