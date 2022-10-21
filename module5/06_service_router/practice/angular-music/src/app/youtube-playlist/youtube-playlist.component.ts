import {Component, OnInit} from '@angular/core';
import {SongService} from '../service/song.service';
import {Song} from '../model/song';
import {Routes} from '@angular/router';

@Component({
  selector: 'app-youtube-playlist',
  templateUrl: './youtube-playlist.component.html',
  styleUrls: ['./youtube-playlist.component.css']
})
export class YoutubePlaylistComponent implements OnInit {
  playlist: Song[] = [];
  const;
  routes: Routes = [
    {
      path: 'youtube',
      component: YoutubePlaylistComponent
    }
  ];

  constructor(private songService: SongService) {
  }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.playlist = this.songService.playlist;
  }

}
