import { Component, OnInit } from '@angular/core';
import { Album } from '../models/Album';
import { Track } from '../models/Track';
import { MusicServiceService } from '../service/music-service.service';

@Component({
	selector: 'app-create-album',
	templateUrl: './create-album.component.html',
	styleUrls: ['./create-album.component.css'],
})
export class CreateAlbumComponent implements OnInit {
	album: Album = new Album(Math.floor(Math.random() * 1000000), '', '', '', 0, '', []);
	tracksRaw: string = '';
	wasSubmitted: boolean = false;

	constructor(private service: MusicServiceService) { }

	ngOnInit() { }

	public onSubmit() {
    const tracks: Track[] = this.parseTracks(this.tracksRaw);
    this.album.Tracks = tracks;
    this.service.createAlbum(this.album, () => {
        console.log('Album created successfully.');
        this.wasSubmitted = true;
    });
}

	private parseTracks(rawTracks: string): Track[] {
		const tracks: Track[] = [];
		const lines = rawTracks.split('\n');

		lines.forEach((line, index) => {
			const [title, lyrics, video] = line.split(':');
			tracks.push(new Track(Math.floor(Math.random() * 1000000), index + 1, title, lyrics || '', video || ''));
		});

		return tracks;
	}
}
