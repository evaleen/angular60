import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

const BASE_URL = 'https://freemusicarchive.org/api/get/';
const API_KEY = '86AKKRXITNRI3HTI';

@Injectable()
export class MusicService {
    constructor(private http: Http){
        console.log('MusicService Initialized...');
    }

    getGenres(pageNumber: number){
      return this.http.get(`${this.generateUrl('genres')}&page=${pageNumber}`)
        .map(res => res.json());
    }

    getTracksInGenre(genreId: number) {
      return this.http.get(`${this.generateUrl('tracks')}&genre_id=${genreId}`)
        .map(res => res.json());
    }

    generateUrl(dataset: string) {
      return `${BASE_URL}${dataset}.json?api_key=${API_KEY}&limit=50`
    }
}
