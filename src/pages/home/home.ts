import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { MoviesApiProvider } from "../../providers/movies-api/movies-api";
import { InfoPage } from "../info/info";

@Component({
  selector: "page-home",
  templateUrl: "home.html",
})
export class HomePage {
  movies: Array<any>;
  destaques: Array<any>;
  alta: Array<any>;

  option = {
    slidesPerView: 1.5,
  };

  constructor(
    public navCtrl: NavController,
    private movieApi: MoviesApiProvider,
    public navParams: NavParams
  ) {}

  ngOnInit() {
    this.listar();
    this.listaDestaque();
    this.listaAlta();
  }

  listar() {
    this.movieApi.getMovies().subscribe((dados) => {
      //console.log(dados);
      this.movies = dados.results.slice(8, 30);
    });
  }

  listaDestaque() {
    this.movieApi.getDestaque().subscribe((data) => {
      console.log(data);
      this.destaques = data.results.slice(0, 20);
    });
  }

  listaAlta() {
    this.movieApi.getAlta().subscribe((alta) => {
      console.log(alta);
      this.alta = alta.results.slice(0, 20);
    });
  }

  //Enviar para pagina de informações
  sendPage(event, m) {
    //, {id: id_comodo}
    this.navCtrl.push(InfoPage, {
      m: m,
    });
  }
}
