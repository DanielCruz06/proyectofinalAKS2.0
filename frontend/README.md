# Despliegue del docker frontend
docker build -t dcruz06/frontend:v1

# Correr el contenedor
docker run -d -p 4200:4200 dcruz06/frontend:latest