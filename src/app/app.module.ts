import { BrowserModule } from "@angular/platform-browser";
import {
  ErrorHandler,
  NgModule,
  CUSTOM_ELEMENTS_SCHEMA,
  NO_ERRORS_SCHEMA,
} from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";

import { MyApp } from "./app.component";
import { HomePage } from "../pages/home/home";
import { MoviesApiProvider } from "../providers/movies-api/movies-api";
import { HttpClientModule } from "@angular/common/http";
import { ImgsSlideComponent } from "../components/imgs-slide/imgs-slide";
import { InfoPage } from "../pages/info/info";

@NgModule({
  declarations: [MyApp, HomePage, ImgsSlideComponent, InfoPage],
  imports: [BrowserModule, IonicModule.forRoot(MyApp), HttpClientModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  bootstrap: [IonicApp],
  entryComponents: [MyApp, HomePage, ImgsSlideComponent, InfoPage],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    MoviesApiProvider,
  ],
})
export class AppModule {}
