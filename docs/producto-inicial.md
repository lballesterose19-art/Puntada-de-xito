# Producto Inicial

## Vision

Puntada de Exito vende productos textiles de alta costura utilitaria y ofrece servicios de costura industrial, patronaje y diseno personalizado para personas independientes, marcas pequenas y negocios.

## Publicos

- Personas independientes que quieren piezas personalizadas.
- Restaurantes, cafes y equipos que necesitan delantales premium.
- Marcas o emprendedores que necesitan totebags y series pequenas.
- Negocios que requieren costura industrial o desarrollo de muestras.

## Web

La web debe presentar la marca, mostrar productos, explicar servicios y capturar solicitudes de cotizacion.

Secciones iniciales:

- Inicio con propuesta de valor.
- Catalogo: delantales, totebags y piezas personalizadas.
- Servicios: costura industrial, patronaje, muestras y produccion.
- Contacto para cotizar.

## App

La app debe concentrarse en compra y seguimiento:

- Catalogo de productos.
- Solicitud de servicios.
- Carrito o cotizacion.
- Seguimiento de pedidos.
- Perfil de cliente.

## MVP sugerido

1. Formulario de cotizacion desde la web.
2. Catalogo de delantales y totebags.
3. Solicitud de servicios de costura industrial y diseno.
4. Estado basico de pedidos.
5. Perfil de cliente.

## Decisiones pendientes

- Ciudad inicial de operacion.
- Si habra pagos desde la primera version.
- Si el catalogo tendra precios fijos o cotizacion por pedido.
- Nombre exacto con tilde en marca publica: Puntada de Exito o Puntada de Exito.

## Modelo Inicial De Datos

- `products`: nombre, categoria, descripcion, estado, precio base opcional.
- `services`: nombre, descripcion, requisitos, tiempo estimado.
- `quote_requests`: nombre, correo, telefono, interes, mensaje, fecha, estado.
- `orders`: cliente, resumen, estado, fecha estimada, notas internas.
- `customers`: nombre, correo, telefono, historial.
