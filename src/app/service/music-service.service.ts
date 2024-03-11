import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import exampledata from '../../data/sample-music-data.json';

import { Album } from '../models/Album';
import { Artist } from '../models/Artist';
import { Track } from '../models/Track';

@Injectable({ providedIn: 'root' })
export class MusicServiceService {
	albums: Album[] = exampledata; // Array to hold albums
	private host = "http://localhost:5000";

	constructor(private http: HttpClient) {
	}

	public getArtists(callback: (artists: Artist[])=> void): void {
    this.http.get<Artist[]>(this.host + "/artists").
      subscribe((artists: Artist[]) =>{
        callback(artists);
      });
  }

  public getAlbums(callback: (alums: Album[])=> void): void  {
    this.http.get<Album[]>(this.host + "/albums").
      subscribe((albums: Album[]) =>{
        callback(albums);
      });
  }

  public getAlbumsOfArtist(callback: (albums: Album[])=> void, artistName: String): void {
    this.http.get<Album[]>(this.host + "/albums/" + artistName).
    subscribe((albums: Album[]) =>{
      callback(albums);
    });
  }

  public createAlbum(album: Album, callback: ()=> void): void {
    this.http.post<Album[]>(this.host + "/albums/", album).
    subscribe((data) =>{
      callback();
    });
  }

  public updateAlbum(album: Album, callback: ()=> void): void {
    this.http.put<Album[]>(this.host + "/albums/", album).
    subscribe((data) =>{
      callback();
    });
  }

  public deleteAlbum(id: number, callback: ()=> void): void {
    this.http.delete(this.host + "/albums/" + id).
    subscribe((data) =>{
      callback();
    });
  }

  public getAlbumById(id: number, callback: (albums: Album[])=>void){
    this.http.get<Album[]>(this.host + "/albums?albumId=" + id).
    subscribe((albums: Album[])=>{
      callback(albums);
    });
  }
  
}

