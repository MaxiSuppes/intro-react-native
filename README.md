## Intro a React Native

### Bootstrapping del proyecto:
#### Pre-requisitos

- Es necesario tener instaladas las ultimas versiones LTS de **Node** y **npm**: https://nodejs.org/en/download/

- Instalar **yarn** globalmente según la siguiente guía: https://classic.yarnpkg.com/en/docs/install/

#### Clone
```git clone https://github.com/MaxiSuppes/intro-react-native.git```

#### Instalar expo-cli globalmente
```npm install -g expo-cli```

#### Instalar dependencias
Ejecutar el comando ```yarn install``` en el root del proyecto

#### Variables de entorno
Crear un archivo ```environments.js``` en el directorio root y copiarle el contenido del archivo ```environments.example.js```.

*apiUrl*: Estamos usando la API gratuita https://reqres.in/api

*usingFakeApi*: True si se quieren usar los mocks o vacío si se quiere usar la API antes mencionada.  

#### Run
```expo start```

Seguir las instrucciones que se muestran en la consola o en el navegador

### Contenido:
Cada una de las ramas contiene un ejemplo introductorio de algunas de las nociones principales de React.

```basic-version``` Contenido básico de una app creada con create-react-app

```navigation``` Ejemplo de navegación básica

```environment-variables``` Configuración de variables de entorno

```api-client``` Se usa un módulo para encapsular la comunicacion entre el cliente y la api. Los request se hacen a 
una [API pública]( https://reqres.in) usando [fetch API](https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Utilizando_Fetch)

```styling``` Grid con Flexbox con algún estilo específico para cada plataforma

```async-storage``` Se guardan datos editados por el usuario en el Local Storage 

```master``` Tiene el contenido total de todas las ramas anteriores 

### Que falta?
No se agregó ningún test!

### Otros links de utilidad

[React Native documentation](https://reactnative.dev/)

[Tests con Jest](https://jestjs.io/)

[Airbnb React conventions](https://github.com/airbnb/javascript/tree/master/react)
