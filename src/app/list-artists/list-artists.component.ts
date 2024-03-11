import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MusicServiceService } from '../service/music-service.service';

import { Artist } from '../models/Artist';

@Component({
	selector: 'app-list-artists',
	templateUrl: './list-artists.component.html',
	styleUrls: ['./list-artists.component.css']
})
export class ListArtistsComponent implements OnInit {
	artists: Artist[] = [];
	selectedArtist: Artist | null = null;

	constructor(private route: ActivatedRoute, private service: MusicServiceService) { }

	ngOnInit(){
		this.service.getArtists((artists: Artist[])=>{
		  this.artists = artists;
		  console.log("this.artists", this.artists);
		});
	  }

	public onSelectArtist(artist: Artist) {
		console.log("Selected Artist of " + artist.Name);
		this.selectedArtist = artist;
	}
}
