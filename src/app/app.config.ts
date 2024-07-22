import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimationsAsync(), provideAnimationsAsync(), provideFirebaseApp(() => initializeApp({"projectId":"simple-crm-7af4d","appId":"1:548587006916:web:2ea5ca415a92f066629291","storageBucket":"simple-crm-7af4d.appspot.com","apiKey":"AIzaSyCOrCUgKFqRmqK39IV8CQE21OK9VmWKDQY","authDomain":"simple-crm-7af4d.firebaseapp.com","messagingSenderId":"548587006916"})), provideFirestore(() => getFirestore()), provideDatabase(() => getDatabase())]
};
