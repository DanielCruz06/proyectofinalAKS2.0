# Instalación de imagen y contenedor backend
# Desplegar docker images
docker build -t dcruz06/backend:v1 .

# Ejecutar  
--sudo docker run -d -p 5001:5001 dcruz06/backend:v1 

# Subir docker hub
sudo docker push  dcruz06/appnotas:v4