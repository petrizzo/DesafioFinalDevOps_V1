### CHALLENGE FINAL Bootcamp DevOps V1

La empresa ZERO Technology, solicita al Equipo de DevOps Trainer, la contenerizacion de su aplicacion "Products DevOps" en la que incluye:

- Frontend
- Backend: products & shopping-cart

#### Frontend
Aplicacion realizada en express y se expone en el puerto 3000

### Backend products
Aplicacion realizada en express y se expone en el puerto 3001

### Backend shopping-cart
Aplicacion realizada en express y se expone en el puerto 3002

### Arquitectura

![](docs/k8s_architecture.png)

#### Build Docker 
- Para construir ejecutamos lo siguiente:
```
    docker build -t ms-frontend:1.0 frontend
    docker build -t ms-products:1.0 products
    docker build -t ms-shopping-cart:1.0 shopping-cart
```
#### Prueba Local
    cd micro-service-name 
    npm install
    npm run
    

#### Iniciar los contenedores 
    docker run -d -p 3000:3000 \
    -e PRODUCTS_SERVICE=host.docker.internal \
    -e SHOPPING_CART_SERVICE=host.docker.internal \
    ms-frontend:1.0

    //usuarios de Linux
    docker run -d -p 3000:3000 -e PRODUCTS_SERVICE=localhost:3001 -e SHOPPING_CART_SERVICE=localhost:3002 ms-frontend:1.0

    //agregar el contenedor a la misma network
    docker run -d -p 3000:3000 -e PRODUCTS_SERVICE=localhost:3001 -e SHOPPING_CART_SERVICE=localhost:3002 --network my-network ms-frontend:1.0


    docker run -d -p 3001:3001 ms-products:1.0
    docker run -d -p 3002:3002 ms-shopping-cart:1.0

#### Los contenedores deben compartir la misma network para evitar el problema del fetch:
docker run --name frontend --network=my-network -p 3000:3000 -d ms-frontend:1.0
docker run --name products --network=my-network -p 3001:3001 -d ms-products:1.0
docker run --name shopping --network=my-network -p 3002:3002 -d ms-shopping-cart:1.0

#### Crear una network:
docker network create my-network

#### Borrar una network:
docker network rm my-network

#### En listar los contenedores conectados a una network:
docker network inspect my-network --format='{{range .Containers}}{{.Name}} {{end}}'

docker network inspect final-bootcampdevops-ninja-v1_my-network --format='{{range .Containers}}{{.Name}} {{end}}'

#### Si deseas ver los logs en tiempo real, puedes agregar la opción -f al comando, de esta manera:
docker logs -f my-container

#### Ver el contenedor:
docker exec -it 'nombre-del-contenedor' sh
docker exec -it frontend sh
docker exec -it products sh

#### Para obtener la IP del contenedor:
docker inspect -f '{{range.NetworkSettings.Networks}}{{.IPAddress}}{{end}}' nombre-del-contenedor

docker inspect -f '{{range.NetworkSettings.Networks}}{{.IPAddress}}{{end}}' products
docker inspect -f '{{range.NetworkSettings.Networks}}{{.IPAddress}}{{end}}' shopping-cart

#### Para eliminar cualquier objeto no utilizado, incluyendo imágenes, contenedores, redes y volúmenes no utilizados:
docker system prune

#### Borrar todas las imagenes en un solo script:
docker rmi -f $(docker images -q)

#### Borrar todos los contenederos:
docker rm -f $(docker ps -a -q)

#### Estar dentro de un contenedor:
 docker exec -it nombre-del-contenedor  sh o bash
 docker exec -it frontend  sh





### Adicional 
- Crear Documentación
- Buenas practicas

## Resultado

![](docs/1.png)
![](docs/2.png)
![](docs/3.png)
