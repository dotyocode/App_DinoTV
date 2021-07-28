import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class MoviesApiProvider {
  private url: string = "https://api.themoviedb.org/3/";
  private apiKey: string = "30c46337c54d57bf648ae73d983eb961";

  constructor(public http: HttpClient) {
    console.log("Hello MoviesApiProvider Provider");
  }

  getMovies() {
    return this.http.get<any>(
      `${this.url}discover/movie?with_genres=28&language=pt-BR&api_key=${this.apiKey}`
    );
  }

  getDestaque() {
    return this.http.get<any>(
      `${this.url}trending/all/week?&language=pt-BR&api_key=${this.apiKey}`
    );
  }

  getAlta() {
    return this.http.get<any>(
      `${this.url}movie/upcoming?&language=pt-BR&api_key=${this.apiKey}`
    );
  }

  getVideo(id: any) {
    return this.http.get<any>(
      `${this.url}movie/${id}/videos?&language=pt-BR&api_key=${this.apiKey}`
    );
  }
}
