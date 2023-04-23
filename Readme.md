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
    docker build -t ms-shopping:1.0 shopping-cart
```
#### Prueba Local
    cd micro-service-name 
    npm install
    npm run
    

#### Iniciar los contenedores    
    docker run --name frontend -d -p 3000:3000 -e PRODUCTS_SERVICE=products -e SHOPPING_CART_SERVICE=shopping --network my-network ms-frontend:1.0

    //usuarios de Linux
    docker run -d -p 3000:3000 -e PRODUCTS_SERVICE=localhost:3001 -e SHOPPING_CART_SERVICE=localhost:3002 ms-frontend:1.0

    //agregar el contenedor a la misma network
    docker run --name frontend -d -p 3000:3000 -e PRODUCTS_SERVICE=localhost:3001 -e SHOPPING_CART_SERVICE=localhost:3002 --network my-network ms-frontend:1.0

    docker run --name products -d -p 3001:3001 --network my-network ms-products:1.0
    docker run --name shopping -d -p 3002:3002 --network my-network ms-shopping-cart:1.0
    

### Adicional 
- Crear Documentación
- Buenas practicas

## Resultado

![](docs/1.png)
![](docs/2.png)
![](docs/3.png)
