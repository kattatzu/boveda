- Cuándo el usuario suba un archivo de definición de API (swagger.json, openapi.json, websocket url, etc)
    - Se obtiene el MD5 del contenido del archivo
    - Se busca en la cahe por el MD5
        - Si existe, se retorna el valor guardado en la cache
        - Si no existe, se continúa
    - Se genera el resultado usando el LLM
    - Se guarda el resultado del LLM en la cache con el MD5 generado como key