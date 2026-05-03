/**
 * Datos del blog (mismo contenido que blog.json).
 * Formato .js para que funcione al abrir blog.html con file:// sin servidor.
 * Al editar artículos: actualiza este archivo y blog.json (GitHub Pages sigue sirviendo el .json por si acaso).
 */
window.REDAGRARIA_BLOG_DATA = [
  {
    "id": "001",
    "slug": "como-leer-precio-lonja-ganado",
    "titulo": "Cómo leer el precio de la lonja y no perder dinero en la venta",
    "categoria": "Mercados",
    "fecha": "2025-04-21",
    "resumen": "El precio de lonja es una referencia, no el precio final. Te explicamos qué factores lo mueven cada semana y cómo usarlo a tu favor antes de vender.",
    "contenido": [
      "El precio de la lonja es el termómetro del mercado ganadero, pero muchos ganaderos cometen el error de tomarlo como el precio al que van a cobrar. La realidad es más compleja, y entenderla puede marcar la diferencia entre una venta buena y una mala.",
      "La lonja publica precios de referencia basados en las transacciones reales de esa semana en una plaza concreta. En el caso de RedAgraria, trabajamos con la Lonja de Salamanca, una de las referencias más importantes para el ganado vacuno, porcino y ovino en España.",
      "¿Qué factores mueven el precio cada lunes? Principalmente la oferta disponible (cuántos animales hay para vender), la demanda de los mataderos y el precio de los piensos, que afecta directamente a la rentabilidad de los cebaderos. En épocas de calor, la demanda de carne cae y los precios suelen bajar. En Navidad, sube.",
      "El consejo práctico es sencillo: no vendas a ciegas. Configura una alerta de precio en RedAgraria para tu categoría de ganado, define el umbral mínimo al que estás dispuesto a vender, y deja que el bot te avise cuando el mercado llegue a ese punto. Así tomas la decisión con datos, no con intuición."
    ],
    "imagen_emoji": "📈",
    "destacado": true
  },
  {
    "id": "002",
    "slug": "actualiza-lonja-salamanca-lunes",
    "titulo": "¿Cuándo y cómo actualiza RedAgraria los precios de la lonja?",
    "categoria": "Plataforma",
    "fecha": "2025-04-14",
    "resumen": "Cada lunes publicamos los precios actualizados de la Lonja de Salamanca. Te contamos cómo funciona el proceso y por qué es fiable.",
    "contenido": [
      "Uno de los valores de RedAgraria es que los precios que consultas son reales y actualizados. Pero ¿cómo funciona el proceso exactamente?",
      "Cada lunes, nuestro sistema descarga automáticamente los datos oficiales de la Lonja de Salamanca publicados por el Ministerio de Agricultura a través de su plataforma de datos abiertos. Esos datos se procesan y se suben a nuestra base de datos en cuestión de minutos.",
      "Una vez actualizados, todos los usuarios que tienen activadas alertas semanales reciben automáticamente un mensaje de WhatsApp con el precio de sus productos. No hace falta entrar a consultar: el bot te avisa directamente.",
      "Si un lunes concreto la lonja no publica datos (festivos, incidencias técnicas), el sistema lo detecta y notifica al administrador. En esos casos, los precios de la semana anterior siguen visibles con una indicación de que aún no hay datos nuevos.",
      "¿Quieres recibir el precio de tu ganado cada lunes sin hacer nada? Escríbenos por WhatsApp y configura tu alerta en menos de un minuto."
    ],
    "imagen_emoji": "🔄",
    "destacado": false
  },
  {
    "id": "003",
    "slug": "calculo-beneficio-ganado-peso-rendimiento",
    "titulo": "Peso, rendimiento y precio de lonja: cómo calcular lo que vas a cobrar",
    "categoria": "Ganadería",
    "fecha": "2025-04-07",
    "resumen": "El cálculo de beneficio no es solo multiplicar kilos por precio. El rendimiento de la canal marca la diferencia. Te lo explicamos con un ejemplo real.",
    "contenido": [
      "Cuando vas a vender un lote de animales, el precio final no es simplemente el peso vivo multiplicado por el precio de la lonja. Hay un factor clave en medio: el rendimiento de la canal.",
      "El rendimiento es el porcentaje del peso vivo que se convierte en canal (la parte que realmente se paga). En vacuno, ronda el 55-60%. En porcino, el 78-82%. En ovino, el 45-50%. Este porcentaje varía según la raza, la edad y el estado de engorde del animal.",
      "El cálculo es el siguiente: si tienes un ternero de 300 kg con un rendimiento del 57% y el precio de lonja está a 4,80 €/kg de canal, el beneficio estimado sería: 300 × 0,57 × 4,80 = 820,80 €.",
      "RedAgraria hace este cálculo automáticamente. Solo tienes que decirle al bot el peso de tu lote y el tipo de ganado, y él aplica el rendimiento medio de esa categoría con el precio de lonja actualizado.",
      "Importante: el resultado es siempre una estimación. El precio final puede variar por los intermediarios, el transporte, la calificación de la canal en el matadero y otros factores. El bot siempre lo avisa para que tomes la cifra como referencia, no como precio garantizado."
    ],
    "imagen_emoji": "⚖️",
    "destacado": false
  }
];
