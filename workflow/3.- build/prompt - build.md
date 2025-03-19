Generación de Recursos
---
Esta es la estructura de mi proyecto Typescript:

```md
- src/config/auth.config.ts             // configuración del proceso de autenticación (ej. método de cifrado)
- src/config/brand.config.ts            // configuración del proyecto base (ej: cambiar el baseUrl)
- src/models/                           // definiciones de los modelos identificados
- src/models/person.model.ts
- src/models/employee.model.ts
- src/models/address.model.ts
- src/models/dataset.model.ts
- src/models/byname-dataset.model.ts
- src/models/person-identification.model.ts
- src/models/query-by-name-dataset.model.ts
- src/sections/                         // secciones del API (ej. users, orders, billing, etc.)
- src/apis/                             // definiciones retrofit (equivalente a las secciones del API)
- src/services/brand.http-client.ts     // cliente rest con todas las secciones (getters)
- src/brand.client.ts                   // cliente del SDK con la autenticación
- package.json 
```

## Información del proyecto 
- El proyecto esta desarrollado con Typescript 
- Utiliza Retrofit para generar la conexión al API 

## Objetivo
Genera el contenido del archivo: **src/services/soap-demo.service.ts**

## Formato
Te pasaré un archivo Markdown de formato para la generación de recursos (clases, interfaces, etc.)

## API Definition JSON
Te pasaré un archivo JSON de definiciones de un API para que búsques la que corresponde al archivo a generar siguiendo el formato definido.

Solo debes responder con el código del archivo solicitado, no escribas nada más, ni comentarios ni explicaciones, solo el JSON.