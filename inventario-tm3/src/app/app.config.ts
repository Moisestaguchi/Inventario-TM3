import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

// Cole o seu objeto de configuração do Firebase aqui
const firebaseConfig = {
  apiKey: "AIzaSyBlv4jqiGPoO-_QOg6H78sL15-PQZ-12kU",
  authDomain: "controle-estoque-e19eb.firebaseapp.com",
  projectId: "controle-estoque-e19eb",
  storageBucket: "controle-estoque-e19eb.firebasestorage.app",
  messagingSenderId: "15987425649",
  appId: "1:15987425649:web:6ffb3874e0dc9a63e876d0"
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())
  ]
};
