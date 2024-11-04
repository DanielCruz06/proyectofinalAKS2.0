# Aplicación de productos
Se realiza una aplicación de productos sencilla para la demostración cercana de una app en producción.

# Despliegue de la app

# Despliegue de images y contenedores

1. Opción uno, desplegar por Docker CLI
    1. Descargar el árbol de todas las carpetas, debes tener la siguiente estructura:
    
        ![alt text](image.png)

    2. **Desplegar contenedores:** Dentro de las carpetas **Frontend**, **Backend** y **db** se encuentran dos archivos llamados ```Dockerfile``` y ```requirements.txt``` los cuales permitiran la construcción y el despliegue de los microservicios
    
        ![alt text](image-2.png)

        * **Desplegar usando Docker**: ```docker build -t nombreUsuario/nombreImagen:versionName .``` o sin usuario ```docker build -t nombreImagen .```
        * **Correr:** ```docker run -d -p port:port nombreUsuario/nombreImagen:versionName```

        Ejemplo de despliegue: ```docker run -d -p 4200:4200 dcruz06/frontend:latest```

        Nota: Los puertos asignados para este proyecto fueron: [
             **Frontend:** 4200,
             **Backend:**  5001,
             **Databases:** 5432
        ]
        
        ![alt text](image-3.png)
        
        Si deseo ver el log de lo que esta pasando con el contenedor puedo hacer uso del comando ```docker logs <NOMBRE_CONTENEDOR_O_ID_CONTENEDOR>```

        ![alt text](image-4.png)

    3. **Desplegar demás microservicios:**
        Debes seguir cada uno de los pasos anteriores con cada carpeta **Frontend**, **Backend** y **db** al final debe quedarte similar a la siguiente imagen:
        
        **Images:**

        ![alt text](image-6.png)

        **Containers:**

        ![alt text](image-5.png)

        **Nota:** Recuerda exponer adecuadamente cada puerto

2. **Desplegar por dashboard de escritorio:**
    1. Debes ingresar al aplicativo de escritorio y desde la pestaña de Images desplegar el terminal:
    
        ![alt text](image-7.png)    

    2. Escribir en la terminal los siguientes comandos para descargar las imagenes de un repositorio en DockerHub:

        * ```docker pull dcruz06/frontend:latest```
        * ```docker pull dcruz06/backend:latest```
        * ```docker pull dcruz06/db:latest```

        ![alt text](image-8.png)

        Se permitiran visualizar las imagenes y contenedores que tiene el ordenador:
        
        ![alt text](image-9.png)

# Despliegue en Kubernetes