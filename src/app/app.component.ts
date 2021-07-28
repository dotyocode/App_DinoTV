import { Component } from "@angular/core";
import { Platform } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";

import { HomePage } from "../pages/home/home";
@Component({
  templateUrl: "app.html",
})
export class MyApp {
  rootPage: any = HomePage;

  constructor(
    private platform: Platform,
    private statusBar: StatusBar,
    private splashScreen: SplashScreen
  ) {
    platform.ready().then(() => {
      statusBar.backgroundColorByName("black");
      statusBar.styleLightContent();
      splashScreen.hide();
    });
  }
}
