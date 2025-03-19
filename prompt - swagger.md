Identificación Swagger
---
Esta es la estructura de mi proyecto Typescript:

```
src/config/auth.config.ts 
src/config/brand.config.ts 
src/models/[ej. order.model.ts] 
src/sections/[ej. orders.section.ts] 
src/services/brand.http-client.ts 
src/brand.client.ts 
package.json 
```

## Información del proyecto 
- El proyecto esta desarrollado con Typescript 
- Utiliza Retrofit para generar la conexión al API 

## Swagger JSON 
Te pasaré el archivo JSON de Swagger para que identifiques: secciones métodos parámetros y respuestas.
Con esa información debes generar los modelos, secciones, servicios y otros archivos del SDK. 

## Pasos 

* Lee el archivo JSON de Swagger 
* Identifica si está la url del servidor
* Identifica las secciones que agrupan endpoints 
* Identifica las sub-secciones y los endpoints dentro de cada sección 
* Identifica los modelos existentes en el documento 
* Identifica los modelos que no están en el documento (como las respuestas sin tipo definido) 

Cuando tengas toda la información requerida responde en formato JSON siguiendo la siguiente 

```
{ 
    "baseUrl": "", 
    "sections": [{ 
        "path": "", 
        "name": "" 
    }], 
    "endpoints": [{ 
        "method": "GET | POST | PUT | PATCH", 
        "path": "", 
        "headers": {}, 
        "query": {}, 
        "body": {}, 
    }], 
    "models": [{ 
        name: "", 
        attributes: [], 
        included: false
    }] 
} 
```

Solo debes responder con un JSON válido, no escribas nada más, ni comentarios ni explicaciones, solo el JSON.