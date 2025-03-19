Identificación OpenAPI
---
## OpenAPI JSON 
Te pasaré el archivo JSON de OpenAPI para que identifiques: secciones métodos parámetros y respuestas.
Con esa información debes generar los modelos, secciones, servicios y otros archivos del SDK. 

## Pasos 

* Lee el archivo JSON de OpenAPI 
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
        "responseType": "",
        "responseCode": 201 // ejemplo
    }], 
    "models": [{ 
        name: "", 
        attributes: [{
            "type": "string ¡ int ¡ double ¡ char ¡ boolean ¡ date ¡ datetime | any[] | unknown",
            "name": "",
            "description": ""
        }], 
        included: false
    }] 
} 
```

Solo debes responder con un JSON válido, no escribas nada más, ni comentarios ni explicaciones, solo el JSON.