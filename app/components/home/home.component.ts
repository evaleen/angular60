import { Component } from '@angular/core';

import { MusicService } from '../../services/music/music.service';

@Component({
  moduleId: module.id,
  selector: 'home',
  templateUrl: 'home.component.html',
  providers: [MusicService]
})
export class HomeComponent  {
    headerTitle: string;
    genres: genre[];
    tracks: track[];
    showTracks: boolean;
    loading: boolean;

    constructor(private musicService: MusicService){
      this.headerTitle = "Music Genre Search";
      this.musicService.getGenres().subscribe(genres => {
          this.genres = genres.dataset;
      });
    }

    getTracks(genreId: number) {
      this.loading = true;
      this.musicService.getTracksInGenre(genreId).subscribe(tracks => {
          this.tracks = tracks.dataset;
          this.showTracks = true;
          this.loading = false;
      });
    }
 }

interface genre {
  genre_id: number;
  genre_parent_id: number;
  genre_title: string;
  genre_handle: string;
  genre_color: string;
}

interface track {
  track_id: number;
  track_title: string;
  track_url: string;
  track_image_file: string;
  artist_id: number;
  artist_name: string;
  artist_url: string;
  artist_website: string;
  album_id: number;
  album_title: string;
  album_url: string;
  license_title: string;
  license_url: string;
  track_language_code: string;
  track_duration: string;
  track_number: string;
  track_disc_number: string;
  track_explicit: string;
  track_explicit_notes: string;
  track_copyright_c: string;
  track_copyright_p: string;
  track_composer: string;
  track_lyricist: string;
  track_publisher: string;
  track_instrumental: string;
  track_information: string;
  track_date_recorded: string;
  track_comments: string;
  track_favorites: string;
  track_listens: string;
  track_interest: string;
  track_bit_rate: string;
  track_date_created: string;
  track_file: string;
  license_image_file: string;
  license_image_file_large: string;
  license_parent_id: number;
}
