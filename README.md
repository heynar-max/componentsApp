Este es un nuevo proyecto [**React Native**](https://reactnative.dev), iniciado utilizando[`@react-native-community/cli`](https://github.com/react-native-community/cli).
```sh
# Using npm
npx @react-native-community/cli init nombredelproyecto

```

# Empezando

> **Note**: asegúrese de haber completado la guía [Set Up Your Environment](https://reactnative.dev/docs/set-up-your-environment)  antes de continuar.

## Step 1: iniciacion de este Proyecto

Primero, necesitarás ejecutar Metro , la herramienta de compilación de JavaScript para React Native.

Para iniciar el servidor de desarrollo Metro, ejecute el siguiente comando desde la raíz de su proyecto React Native:

```sh
# Using npm
npm start android

```

## Step 2: Instalación de los fundamento de react-navigation
-- [**React Navigation**](https://reactnavigation.org/) --

```sh
npm install @react-navigation/native
npm install react-native-screens react-native-safe-area-context
```

en la carpeta MainActivity.kt se copia estas lineas
```sh
override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(null)
    }
```
debe importar este paquete
```sh
import android.os.Bundle;
```

## Paso 3: Stack navigator

se instala el stack
```sh
npm install @react-navigation/stack
npm install react-native-gesture-handler
npm install @react-native-masked-view/masked-view
```
se importan en el punto mas alto de aplicación app
 ```sh
import 'react-native-gesture-handler';
```
se pone en la parte mas alta de la aplicación app
```sh
<NavigationContainer>
```
se crea archivo creat navigator..

## Paso 4: instalar los iconos vector

-- [**Iconos Vector**](https://github.com/oblador/react-native-vector-icons) --
```sh
npm install react-native-vector-icons
```
en la carpeta android/app/build.gladle,  pone esta linea
 ```sh
project.ext.vectoricons = [
    iconFontNames: [ 'Ionicons.ttf' ] // Specify font files
]

apply from: file("../../node_modules/react-native-vector-icons/fonts.gradle");
```

## Paso 5 : instalar Una biblioteca polyfill para Alert.
> **Note**: Se usa esta biblioteca que ya en android no viene en su estado Nativo, esta biblioteca hace varios años no la actualizan. 
-- [**Prompt Android**](https://www.npmjs.com/package/react-native-prompt-android) --

```sh
npm i react-native-prompt-android
```
