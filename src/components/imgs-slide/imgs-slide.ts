import { Component } from "@angular/core";
import { MoviesApiProvider } from "../../providers/movies-api/movies-api";

@Component({
  selector: "imgs-slide",
  templateUrl: "imgs-slide.html",
})
export class ImgsSlideComponent {
  text: string;
  movies2: Array<any>;

  constructor(private movieApi: MoviesApiProvider) {}

  ngOnInit() {
    this.listar();
  }

  listar() {
    this.movieApi.getMovies().subscribe((dados) => {
      console.log(dados);
      this.movies2 = dados;
    });
  }
}
