import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
// Make sure the file exists at './services/auth.interceptor.ts'.
// If the file is in a different location, update the import path accordingly.
// Example if the file is in './interceptors/auth.interceptor.ts':
// import { AuthInterceptor } from './interceptors/auth.interceptor';
// Update the path below to the correct location of your auth.interceptor file.
// For example, if it's in 'src/app/interceptors/auth.interceptor.ts', use:
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { AuthService } from "./services/auth.service";
// ... other imports

@NgModule({
  // ... other properties
  providers: [
    AuthService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  // ... other properties
})
export class AppModule { }