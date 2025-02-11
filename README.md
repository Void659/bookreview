# BookReview
🚀 Tecnologías Utilizadas  

    Frontend:  
        React Native  - Framework para desarrollo móvil multiplataforma.
        Expo  - Herramienta para facilitar el desarrollo y pruebas de aplicaciones React Native.
         

    Backend:  
        Node.js  - Entorno de ejecución para JavaScript del lado del servidor.
         

    Base de Datos y Autenticación:  
        Firebase Console  - Plataforma para autenticación, almacenamiento de datos y notificaciones push.
         

    Entorno de Desarrollo:  
        Emulador de Android o dispositivo físico.

📦 Requisitos Previos  

Antes de comenzar, asegúrate de tener instalado lo siguiente: 

    Node.js  (v14 o superior): Descargar Node.js  

    Expo CLI : Instálalo globalmente usando npm: 
    npm install -g expo-cli
Android Studio  (para usar el emulador de Android): 

    Descarga e instala Android Studio .
    Configura un dispositivo virtual desde AVD Manager.
     

Dispositivo Físico  (opcional): 

    Asegúrate de tener habilitado el modo desarrollador y la depuración USB en tu dispositivo Android.
    Conéctalo a tu computadora mediante USB.
     

Cuenta de Firebase : 

    Crea un proyecto en Firebase Console .
    Configura la autenticación y las reglas de Firestore.

profile

 
📱 Nombre de la Aplicación  

Descripción breve:  Una aplicación móvil desarrollada con React Native y Expo, que utiliza Node.js como backend y Firebase para la gestión de datos. La aplicación puede ejecutarse tanto en un emulador de Android como en un dispositivo físico. 
🚀 Tecnologías Utilizadas  

    Frontend:  
        React Native  - Framework para desarrollo móvil multiplataforma.
        Expo  - Herramienta para facilitar el desarrollo y pruebas de aplicaciones React Native.
         

    Backend:  
        Node.js  - Entorno de ejecución para JavaScript del lado del servidor.
         

    Base de Datos y Autenticación:  
        Firebase Console  - Plataforma para autenticación, almacenamiento de datos y notificaciones push.
         

    Entorno de Desarrollo:  
        Emulador de Android o dispositivo físico.
         
     

📦 Requisitos Previos  

Antes de comenzar, asegúrate de tener instalado lo siguiente: 

    Node.js  (v14 o superior): Descargar Node.js  

    Expo CLI : Instálalo globalmente usando npm: 
    bash
     

     
    1
    npm install -g expo-cli
     
     

    Android Studio  (para usar el emulador de Android): 
        Descarga e instala Android Studio .
        Configura un dispositivo virtual desde AVD Manager.
         

    Dispositivo Físico  (opcional): 
        Asegúrate de tener habilitado el modo desarrollador y la depuración USB en tu dispositivo Android.
        Conéctalo a tu computadora mediante USB.
         

    Cuenta de Firebase : 
        Crea un proyecto en Firebase Console .
        Configura la autenticación y las reglas de Firestore o Realtime Database según sea necesario.
         
     

🛠️ Instalación  
1. Clonar el Repositorio 

Primero, clona este repositorio en tu máquina local: 
git clone https://github.com/Void659/bookreview.git
cd bookreview

2. Instalar Dependencias 

Una vez dentro del directorio del proyecto, instala las dependencias necesarias: 
npm install
3. Configurar Firebase 

    Ve a tu proyecto en Firebase Console .
    En la sección de "Configuración del proyecto", busca la configuración de Firebase SDK.
    Copia las credenciales y péguelas en el archivo firebaseConfig.js (o donde tengas configurado Firebase en tu proyecto):
```
   // firebaseConfig.js
const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "TU_AUTH_DOMAIN",
  projectId: "TU_PROJECT_ID",
  storageBucket: "TU_STORAGE_BUCKET",
  messagingSenderId: "TU_MESSAGING_SENDER_ID",
  appId: "TU_APP_ID"
};

export default firebaseConfig;
```
4. Ejecutar la Aplicación 

Para ejecutar la aplicación en un emulador o dispositivo físico, usa el siguiente comando: 
expo start 
luego presionar "a" para elegir android
     
