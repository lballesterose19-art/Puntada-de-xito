# Plan de Lanzamiento

## Objetivo

Lanzar una primera version real de Puntada de Exito para captar clientes, recibir solicitudes de cotizacion y validar demanda de productos textiles premium y servicios de costura.

## Version 1 Publicable

La primera version debe incluir:

- Landing web con propuesta de valor clara.
- Catalogo inicial: delantales, totebags, piezas a medida y series especiales.
- Servicios: costura industrial, patronaje, muestras y acabados.
- Formulario de cotizacion.
- Contacto por correo y WhatsApp.
- Dominio propio.
- Analitica basica.

## Datos Reales Por Definir

Antes de publicar, reemplazar:

- Correo real de contacto.
- Numero real de WhatsApp.
- Ciudad o zona de operacion.
- Fotos reales de productos, si ya existen.
- Rangos de precios o mensaje de "cotizacion segun pedido".
- Tiempos de entrega estimados.
- Politicas de pago, anticipo y cambios.

## Stack Recomendado

Para una primera version seria y mantenible:

- Frontend: React + Vite.
- Hosting: Vercel.
- Backend ligero: Supabase.
- Base de datos: PostgreSQL en Supabase.
- Formularios: Supabase o Formspree al inicio.
- Pagos: Wompi, Mercado Pago o link de pago manual segun pais.

## Fases

### Fase 1: Landing Lanzable

- Publicar la web estatica.
- Activar formulario real.
- Conectar WhatsApp.
- Medir visitas y solicitudes.

### Fase 2: Catalogo Administrable

- Crear base de datos de productos.
- Mostrar productos desde Supabase.
- Agregar estados: disponible, bajo pedido, cotizar.

### Fase 3: Cotizaciones

- Guardar solicitudes.
- Enviar notificacion por correo.
- Crear panel interno simple.

### Fase 4: App

- Convertir el prototipo en una PWA.
- Permitir a clientes revisar pedidos, solicitar servicios y repetir compras.

## Checklist De Publicacion

- [ ] Correo real configurado.
- [ ] WhatsApp real configurado.
- [ ] Dominio comprado.
- [ ] Sitio publicado en Vercel.
- [ ] Formulario conectado.
- [ ] Fotos reales cargadas.
- [ ] Textos revisados sin placeholders.
- [ ] Politica de privacidad agregada.
- [ ] Analitica instalada.
- [ ] Prueba desde celular.
- [ ] Prueba de formulario completa.

## Riesgos A Cuidar

- Prometer entregas sin capacidad productiva definida.
- Publicar precios sin margen claro.
- Aceptar pedidos personalizados sin anticipo.
- No registrar medidas, materiales y aprobaciones por escrito.
- Mezclar tienda de producto terminado y servicio personalizado sin explicar el proceso.
