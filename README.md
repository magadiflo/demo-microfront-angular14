# DemoMicrofrontAngular14

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.10.

## ¿Cómo se creó el espacio de trabajo?
Creamos un espacio de trabajo con el siguiente comando:
```
ng new demo-microfront-angular14 --create-application=false
```
NOTA:
**--create-application=false**, para que no cree carpetas del src, assets, sin archivos karma.config.js, etc..., es decir,
únicamente queremos que nos cree un espacio de trabajo.

## Crendo micro frontends
Ubicados dentro de espacio de trabajo, creamos los siguientes proyectos de Angular:

**1ER MICRO FRONTEND**
```
ng g application mf-shell --style=scss --routing=true
```

NOTA:
En todo proyecto se necesida de un proyecto que se encargue de orquestar los demás
micro frontend, en este caso, ese proyecto será mf-shell


**2DO MICRO FRONTEND**
```
ng g application mf-payment --style=scss
```

**3ER MICRO FRONTEND**
```
ng g application mf-shopping --style=scss --routing=true
```
**4TO PROYECTO DE TIPO LIBRERÍA**  
En todo el proyecto habrá elementos comunes, para eso creamos un proyecto de tipo librería. 
Lo que haremos será compartir un service para que se puedan comunicar cada uno de los micro frontend.
También se puede crear un proyecto de tipo librería para agregar todos los componentes que serán usados
por cada uno de los micro frontend.
```
ng g library commons-lib
```

## Instalando librería @angular-architects
Esta librería nos dará la opción de poder trabajar con webpack
```
npm i -D @angular-architects/module-federation
```

## Agregando librería @angular-architects en cada micro frontend
Agregamos la librería al proyecto **mf-shell** indicándole que estará en el 
puerto 4200 y que será un proyecto del **tipo host**. Que sea del **tipo host**
nos indica que será un proyecto que se encargará de la orquestación de los microfrontends,
de poder intergrarlos.
```
ng add @angular-architects/module-federation --project mf-shell --port 4200 --type host
```
Agregamos la librería al proyecto **mf-shopping** y será del **tipo remote**
```
ng add @angular-architects/module-federation --project mf-shopping --port 4201 --type remote
```
Agregamos la librería al proyecto **mf-payment** y será del **tipo remote**
```
ng add @angular-architects/module-federation --project mf-payment --port 4202 --type remote
```

## Desplegando un microfrontend
Desplegamos el microfrontend **mf-shopping** que según la configuración estará en el 
puerto 4201
```
 ng s mf-shopping
```
```
 ng s mf-payment
```
```
 ng s mf-shell
```
## Agregando librería par ejecutar todos los proyectos en paralelo
```
npm i -D npm-run-all
```
Se configuró el script en el package.json para que se ejecute todo en paralelo
con el siguiente comando: **npm run all**
```
"scripts": {
    ......
    "mf-shell": "ng s mf-shell",
    "mf-shopping": "ng s mf-shopping",
    "mf-payment": "ng s mf-payment",
    "all": "npm-run-all --parallel mf-shell mf-shopping mf-payment",
    .....
  },
```

