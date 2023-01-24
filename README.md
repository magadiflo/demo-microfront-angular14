# DemoMicrofrontAngular14

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.10.

## ¿Cómo se creó el espacio de trabajo?
Creamos un espacio de trabajo con el siguiente comando:
```
ng new demo-microfront-angular14 --create-application=false
```
NOTA:
**--create-application=false**, para que no cree carpetas del src, assets, sin archivos karma.config.js, .editorconfig, etc..., es decir,
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