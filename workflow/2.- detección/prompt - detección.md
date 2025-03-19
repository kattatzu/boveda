Identificación de Recursos a generar
---
Esta es la estructura de mi proyecto Typescript:

```md
- src/config/auth.config.ts             // configuración del proceso de autenticación (ej. método de cifrado)
- src/config/brand.config.ts            // configuración del proyecto base (ej: cambiar el baseUrl)
- src/models/                           // definiciones de los modelos identificados
- src/sections/                         // secciones del API (ej. users, orders, billing, etc.)
- src/apis/                             // definiciones retrofit (equivalente a las secciones del API)
- src/services/brand.http-client.ts     // cliente rest con todas las secciones (getters)
- src/brand.client.ts                   // cliente del SDK con la autenticación
- package.json 
```

## Información del proyecto 
- El proyecto esta desarrollado con Typescript 
- Utiliza Retrofit para generar la conexión al API 

## API Definition JSON
Te pasaré un archivo JSON de definiciones de un API para que generes una lista de archivos que debes generar y una lista de archivos que debes modificar. Responde en formato JSON siguiendo la siguiente estructura:

```json
{ 
    "edit": ["src/models/order.model.ts"],
    "create": ["src/services/orders.service.ts", "src/apis/orders.api.ts"],
}
```

Solo debes responder con un JSON válido, no escribas nada más, ni comentarios ni explicaciones, solo el JSON.