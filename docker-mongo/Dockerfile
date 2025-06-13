# Docker Hub -> https://hub.docker.com/r/mongodb/mongodb-community-server

# Usa la imagen oficial de MongoDB Community Server
FROM mongodb/mongodb-community-server:latest

# directorio de trabajo
# WORKDIR /data

# script de inicialización a la imagen
COPY iniciar-mongo.js /docker-entrypoint-initdb.d/

# Documenta el puerto por defecto de MongoDB
EXPOSE 27017

# Comando para ejecutar MongoDB
#CMD ["mongod"]