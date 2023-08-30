<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Cadena de suministros
    
    .bloque-texto-a.bloque-bicolor-ac.p-4.p-md-5.mb-5 
      .row.m-0.align-items-center.justify-content-between
        .col-lg-4.mb-4.mb-lg-0
          img(src='@/assets/curso/tema1/f1.svg', alt='Imagen decorativa' data-aos="fade-right")
        .col-lg-8(data-aos="fade-left")
          .bloque-texto-a__texto.p-4
            p.mb-0 La cadena de suministro o supply chain es el proceso que se genera desde que el cliente realiza un pedido hasta que el producto o servicio ha sido entregado y cobrado. Por tanto, la supply chain comprende la planificación, ejecución y control de todas las actividades relacionadas con el flujo de materiales y de información, desde la compra de materias primas hasta la entrega final del producto al cliente, pasando por su transformación intermedia (Castellanos, 2015).
    
    p.mb-5 En consecuencia, se puede definir la cadena de suministro como el conjunto de pasos y redes que se tejen desde el origen del producto hasta el cliente final. Esta cadena está compuesta por distintos proveedores y empresas que van abasteciendo en cada uno de los siguientes eslabones.
    
    .row.justify-content-center.mb-5
      .col-lg-10.mx-auto.tarjeta.fondo-purpura-clarito.p-4
        .titulo-sexto.color-acento-botones.mb-4(data-aos="fade-right")
          h5 Figura 1.
          span Diferentes etapas de la cadena de suministro
        figure(data-aos="zoom-in")
          img.mb-2(src='@/assets/curso/tema1/f2.svg', alt='Imagen decorativa')
          figcaption Nota. <span style="font-weight: 400">Tomada de Mecalux (2019)</span>
    
    p La cadena de suministro hace referencia al flujo completo que sigue un producto hasta su venta; en cambio, la logística forma parte de la cadena de suministro y se trata de una disciplina centrada en el almacenamiento de productos, en su transporte y su distribución.
    p.mb-5 De esta forma, la logística es el área empresarial responsable de hacer llegar el producto correcto, al destino indicado en el tiempo establecido, en las cantidades precisas, con el coste y la calidad requeridas, siempre en consonancia con las condiciones que han sido previamente acordadas con el cliente.
    
    .titulo-sexto.color-acento-botones(data-aos="fade-right")
      h5 Tabla 1.
      span Diferencias entre la cadena de suministro y la logística
    .tabla-a.color-acento-botones.mb-5(data-aos="zoom-in")
      table
        caption Nota. <span style="font-weight: 400">Tomada de Mecalux (2019)</span>
        thead
          tr
            th.tfilathin
            th(style="font-size:1.1rem") Gestión de la cadena de suministro
            th(style="font-size:1.1rem") Gestión logística
        tbody
          tr
            th Definición
            td Se trata del proceso global de suministro de un producto. Hace referencia a la colaboración entre fabricantes, proveedores, distribuidores, socios comerciales y consumidores.
            td Es un apartado de la cadena de suministro y abarca la gestión del almacén y de los flujos de transporte internos y externos desde el aprovisionamiento hasta la entrega final.
          tr
            th Objetivos
            td Conseguir la máxima competitividad en el mercado y optimizar los beneficios.
            td Lograr la satisfacción del cliente por medio de una perfecta gestión del pedido.
          tr
            th Empresas involucradas
            td Generalmente, son varias organizaciones las que participan en una misma cadena de suministro.
            td Puede ser gestionada íntegramente desde la misma empresa.
          tr
            th Relación entre ambas
            td La cadena de suministro hace referencia al ecosistema completo, es decir al conjunto de procesos que resultan en un producto.
            td La logística ocupa una parcela de operaciones que forma parte de la cadena de suministro.
          tr
            th Áreas empresariales implicadas
            td Incluye más áreas como: desarrollo de productos, control de calidad, servicio al cliente, actividades logísticas…, entre otras.
            td Principalmente, almacenamiento, transporte y gestión del #[em stock].
    
    #t_1_1.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 1.1. Planeación estratégica de logística
      
    p.mb-5 Al igual que cualquier actividad empresarial, el objetivo clave de la logística es lograr una tasa de retorno de la inversión más elevada y mejorar la rentabilidad, para conseguirlo, se debe efectuar una planeación dentro de la empresa, la cual puede cubrir los siguientes niveles: #[strong planeación estratégica; planeación táctica; planeación operativa.]
    
    .row.justify-content-center.mb-5
      .col-lg-8.mx-auto(data-aos="flip-up")
        .cajon.color-acento-botones.fondo-rojizo-clarito.p-4
          .h3 …El objetivo clave de la logística es lograr una tasa de retorno de la inversión más elevada y mejorar la rentabilidad…
       
    .row.justify-content-center.mb-5
      .col-lg-8
        .titulo-sexto.color-acento-botones.mb-4(data-aos="fade-right")
          h5 Figura 2.
          span  La cadena logística y sus niveles estratégicos
      .col-lg-8.mx-auto.tarjeta.fondo-purpura-clarito.py-4(data-aos="zoom-in")
        img.mb-4(src='@/assets/curso/tema1/f3.svg', alt='Imagen decorativa')
        figcaption Nota. <span style="font-weight: 400">Tomada de Castellanos (2015)</span>
    
    ul.lista-ul--color
      li(style="margin-bottom: 2px" data-aos="fade-right")
        i.fas.fa-check-circle(style="color: #FE7062;")
        p.mb-0 #[strong Planeación estratégica:] se busca analizar tanto el entorno en el que se desarrolla la empresa como los aspectos al interior de la misma.
      li(style="margin-bottom: 2px" data-aos="fade-right")
        i.fas.fa-check-circle(style="color: #FE7062;")
        p.mb-0 #[strong Planeación táctica:] se basa en la toma de decisiones en concordancia con los objetivos de la compañía.
      li(style="margin-bottom: 2px" data-aos="fade-right")
        i.fas.fa-check-circle(style="color: #FE7062;")
        p.mb-0 #[strong Planeación operacional:] se establece la demanda y los procesos productivos para la distribución del producto.
    
    p.mb-5 Fortaleciendo este proceso de formación, es necesario leer el siguiente documento que relaciona los conceptos de la administración estratégica enfocado a la planeación.
    
    .row.g1.tarjeta.align-items-center.justify-content.between.p-4(data-aos="flip-up")
      .col-lg-2.col-3
        img(src='@/assets/curso/tema1/f4.svg', alt='Imagen decorativa')._93px.mx-auto.my-4
      .col
        .row.justify-content-between.align-items-center
          .col.mb-3.mb-sm-0
            p.texto-blanco #[strong Libro:] Conceptos de administración estratégica<br>#[strong Autor:] David (2013)<br>#[strong Capítulo:] 1 al 6
            p.texto-blanco <span style="font-size:.8rem">Estimado aprendiz, debe recordar que para ingresar a las bases de datos del Sena se ingresa con el número del documento de identidad sin puntos en el campo de usuario y contraseña.</span>
          .col-sm-auto
            a.boton.color-acento-botones(href="https://laurabatres.files.wordpress.com/2018/06/conceptos-de-administracion-estrategica-14edi-david.pdf" target="_blank")
              span Ir al sitio
              i.fas.fa-link
    
    separador
    #t_1_2.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 1.2. Conceptos generales
    
    p.mb-5 No se tiene un concepto general de la logística y cadena de suministros debido a que la literatura actual es extensa en relación con las definiciones sobre este término, algunas muy simples y otras más complejas que apuntan a un concepto integrador, sistémico y racionalizador que, fundamentalmente, se orientan a la satisfacción del cliente con los costos mínimos, con la calidad requerida, en el tiempo convenido y en la cantidad y lugar especificados por este. A continuación, se relacionan varios autores con el fin de ilustrar la gran variedad literaria con la que se cuenta:
    
    TabsA.color-acento-contenido.mb-5(data-aos="zoom-in")
      .tarjeta.fondo-azul-clarito.p-5(titulo="Según Ballou (2004)")
        h4 Ballou (2004) en su extensa obra sobre la logística, la define así
        p.mb-0 Las actividades que se dirigen para conformar la logística de los negocios (proceso de la cadena de suministros) varían de una empresa a otra, dependiendo de la estructura organizacional de cada una, de las honestas diferencias de opinión, de la administración respecto de lo que constituye la cadena de suministros para su negocio y de la importancia de las actividades individuales para sus operaciones (s.p.).
      .tarjeta.fondo-azul-clarito.p-5(titulo="Según el CSCMP")
        h4 La definición promulgada por el Council of Supply Chain Management Professionals CSCMP (s.f.) (Consejo de Profesionales de la Gestión de la Cadena de Suministro CSCMP, por sus siglas en inglés), que desde 1963 ha brindado oportunidades de desarrollo profesional y educación a la comunidad de gestión de la cadena de suministro y logística, manifiesta:
        p.mb-0 La logística es el proceso de planear, implementar y controlar el flujo y almacenamiento eficiente y a un costo efectivo de las materias primas, inventarios en proceso, de producto terminado e información relacionada, desde los puntos de origen hasta los de consumo; con el propósito de satisfacer las necesidades de los clientes.
      .tarjeta.fondo-azul-clarito.p-5(titulo="Según Mora (2010)")
        h4 Según Mora (2010):
        p.mb-0 La logística es un conjunto de actividades que son repetidas muchas veces a lo largo de la cadena de abastecimiento, desde que las materias primas son convertidas en productos terminados y se agrega valor para los consumidores. Debido a que las fuentes de materias primas, fábricas y puntos de venta no están típicamente localizadas en los mismos lugares y el canal representa una secuencia de pasos de manufactura, las actividades logísticas ocurren muchas veces antes que un producto llegue al mercado. Aún luego, las acciones logísticas se repiten también cuando los bienes son usados y reciclados en el canal logístico”.
    
    .row.justify-content-center.mb-4
      .col-lg-10.mx-auto(data-aos="flip-up")
        .cajon.color-acento-botones.fondo-rojizo-clarito.p-4
          p.mb-0 Visto en otro contexto, la logística es la parte de la cadena de suministros que planifica, implementa y controla el flujo efectivo y eficiente, así como el almacenamiento de artículos y servicios y la información relacionada desde un punto de origen hasta  un punto de destino con el objetivo de satisfacer a los clientes. Por esta razón, la logística se convierte en uno de los factores más importantes de la competitividad, ya que puede definir el éxito o el fracaso de la comercialización de un producto.
    
    separador
    #t_1_3.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 1.3. Importancia de la cadena de suministros

    p La importancia de la logística radica en la necesidad de mejorar el servicio a un cliente, optimizando la fase de mercadeo y transporte al menor costo posible:
    p.mb-5 A continuación, se relacionan algunas actividades que pueden derivarse de la gerencia logística:

    .row.justify-content-center.mb-5
      .col-lg-6.col-sm-10.mb-4(data-aos="fade-right")
        .tarjeta-avatar-b.hg-01
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema1/f5.svg', alt='Imagen decorativa')
          .tarjeta.fondo-cyan
            .p-4
              .h3 Aumento en las líneas de producción
              p.mb-0 Incrementar la competitividad y mejorar la rentabilidad de las empresas para acometer al reto de la globalización.     
      .col-lg-6.col-sm-10.mb-4(data-aos="fade-left")
        .tarjeta-avatar-b.hg-01
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema1/f6.svg', alt='Imagen decorativa')
          .tarjeta.fondo-cyan
            .p-4
              .h3 La eficiencia en producción para alcanzar niveles altos
              p.mb-0 Coordinación óptima de todos los factores que influyen en el proceso de planificación interna y externa: Calidad, protección, empaque, etc.   
      .col-lg-6.col-sm-10.mb-lg-0.mb-4(data-aos="fade-right")
        .tarjeta-avatar-b.hg-01
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema1/f7.svg', alt='Imagen decorativa')
          .tarjeta.fondo-cyan
            .p-4
              .h3 La cadena de distribución debe contener cada vez menos inventarios
              p.mb-0 El producto adquiere su valor cuando el cliente lo recibe en el tiempo y en la forma adecuada, al menor costo posible.     
      .col-lg-6.col-sm-10(data-aos="fade-left")
        .tarjeta-avatar-b.hg-01
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema1/f8.svg', alt='Imagen decorativa')
          .tarjeta.fondo-cyan
            .p-4
              .h3 Desarrollo de sistemas de información TIC
              p.mb-0 Facilitar la información en tiempo real gracias a la utilización de software que permitan la comunicación entre las diferentes áreas.
    
    separador
    #t_1_4.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 1.4.	Funciones de la cadena de suministros

    p Las funciones de la logística se basan, principalmente, en la administración de los flujos físicos (materias primas, productos terminados, etc.), teniendo en cuenta los recursos (humanos, consumibles, etc.), los bienes necesarios (almacenes, bodegas, herramientas, sistemas informáticos, camiones, etc.), y los servicios (transporte o almacenes subcontratados).
    
    separador
    #t_1_5.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 1.5.	Responsabilidades en la cadena de suministros

    p.mb-5 Como se anotó anteriormente, la necesidad de las organizaciones de ser eficientes en la cadena de abastecimiento y competitivas en el mercado actual, ha ayudado a desarrollar el esquema logístico a nivel interno y con un acelerado crecimiento a nivel mundial. Entre las responsabilidades más importantes que motivan a las compañías a tecnificarse y a desarrollar intensamente su cadena logística se destacan:
    
    .row.justify-content-center.mb-5
      .col-lg-7.mx-auto(data-aos="fade-right")
        h4.text-center.mb-5 Responsabilidades de la empresa en función a la operación logística
        img(src='@/assets/curso/tema1/f9.svg', alt='Imagen decorativa').mb-5
    
    separador
    #t_1_6.titulo-segundo.color-acento-botones
      h2 1.6.	Clasificación de macroprocesos
    
    p.mb-5 La logística de una empresa la componen las funciones y procesos de apoyo, por lo tanto, puede entenderse como el conjunto de tres procesos empresariales que no hacen parte constitutiva de la empresa, pero que sí aseguran la consecución del objetivo fundamental de la misma, estos procesos son esquematizados en la siguiente figura:

    .row.align-items-center.mb-4    
      .col-lg-10.mx-auto
        .titulo-sexto.color-acento-botones.mb-4(data-aos="fade-right")
          h5 Figura 3.
          span Esquema del proceso logístico
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/tema1/f10.svg', alt='Imagen decorativa').mb-4
          figcaption Nota. <span style="font-weight: 400">Tomada de Universidad Tecnológica de Chile (2017)</span>

    separador
    #t_1_7.titulo-segundo.color-acento-botones
      h2 1.7.	Clasificación de los subprocesos de la cadena de abastecimiento

    p Los elementos que conforman la logística a saber son tres (3) como se presentan a continuación:
    
    .row.align-items-center.justify-content-center.mb-4
      .col-lg-5.col-sm-8.col-10.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema1/f11.svg', alt='Imagen decorativa')
      .col-lg-5(data-aos="fade-left")
        .tarjeta.fondo-purpura-clarito.p-4
          h5 Abastecimiento
          p.mb-0 #[strong La gestión de materiales:] es la administración del suministro y recepción de materias primas y productos semielaborados para un uso posterior.

    .row.align-items-center.justify-content-center.mb-4 
      .col-lg-5.order-lg-1.order-2(data-aos="fade-right")
        .tarjeta.fondo-purpura-clarito.p-4
          h5 Producción
          p.mb-0 #[strong El sistema de flujo de materiales:] consiste en la habilidad de planificar la fabricación de productos terminados, para que estén disponibles con el fin de atender las solicitudes de los clientes.
      .col-lg-5.col-sm-8.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema1/f12.svg', alt='Imagen decorativa')

    .row.align-items-center.justify-content-center.mb-4
      .col-lg-5.col-sm-8.col-10.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema1/f13.svg', alt='Imagen decorativa')
      .col-lg-5(data-aos="fade-left")
        .tarjeta.fondo-purpura-clarito.p-4
          h5 Distribución
          p.mb-0 #[strong Distribución física:] es la entr  ega de los productos terminados a los diferentes clientes.
    
    separador
    #t_1_8.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 1.8.	Modelos de gestión de la cadena de abastecimiento

    p.mb-5 La importancia de tecnólogos o profesionales en el sector es cada vez mejor vista y más importante tal como lo dice Mora (2010):
    
    .row.justify-content-center.mb-4
      .col-lg-10.mx-auto(data-aos="flip-up")
        .bloque-texto-b.fondo-purpura-medio.p-4
          .bloque-texto-b__texto
            i.fas.fa-quote-left(style="font-size: 2em")
            span.h4.mb-0 El papel del profesional cobra una mayor preponderancia en las empresas modernas, en la medida que se convierte en un agente integrador de todas las áreas funcionales de la compañía; en especial de aquéllas que interactúan directamente con los distintos actores de su cadena de abastecimiento, desde proveedores hasta los clientes, pasando por competidores, socios comerciales, usuarios internos, entidades gubernamentales y asociativas (s.p.).
            i.fas.fa-quote-right(style="font-size: 2em")

    p.mb-5 Lo anterior, deja entrever la necesidad de formar en un renacimiento empresarial constante personal en esta área que sea consciente de su importancia y la asuma con la responsabilidad necesaria en cada momento.
    
    .row.justify-content-center.mb-4
      .col-lg-10.mx-auto(data-aos="flip-up")
        .cajon.color-acento-botones.fondo-rojizo-clarito.p-4
          p.mb-0 El nuevo perfil del gerente de logística para el siglo XXI, corresponde a una persona integral y con una serie de competencias laborales que sirven de base para	una labor más integral y enfocada en la integración de las actividades empresariales; en función de la optimización de los recursos financieros puestos a disposición de las operaciones de la compañía, de la proyección hacia nuevos mercados y la expansión de los actuales; así como en el fortalecimiento y paulatino aumento de la capacidad de respuesta de la industria en los mercados globales.


</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    mostrarIndicador: true,
  }),
}
</script>

<style lang="sass" scoped></style>
