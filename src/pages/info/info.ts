import { Component } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import {
  IonicPage,
  LoadingController,
  NavController,
  NavParams,
} from "ionic-angular";
import { MoviesApiProvider } from "../../providers/movies-api/movies-api";

@IonicPage()
@Component({
  selector: "page-info",
  templateUrl: "info.html",
})
export class InfoPage {
  value: any;
  video: any;
  urlVideo: string;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private movieApi: MoviesApiProvider,
    public sanitizer: DomSanitizer,
    public loadingCtrl: LoadingController
  ) {
    this.value = navParams.get("m");
    console.log(this.value);
  }

  ngOnInit() {
    let loading = this.loadingCtrl.create({
      content: "Please wait...",
    });
    loading.present();
    setTimeout(() => {
      loading.dismiss();
    }, 1000);
    console.log("ionViewDidLoad InfoPage");
    this.movieApi.getVideo(this.value.id).subscribe((dados) => {
      setTimeout(() => {
        this.video = dados;
        this.urlVideo = `https://www.youtube.com/embed/${this.video.results[0].key}`;
        console.log(dados);
      }, 1000);
    });
  }

  ionViewDidLoad() {}
}
