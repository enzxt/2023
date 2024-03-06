### Enzo Tinard
#### CST 391 Act 3
#### 3/6/2024

## Part 1
## Screenshots

 #### Large
 ![image](/src/assets/images/first%20(1).png)
 ##### Description:
 Bootstrap table interactive on multiple device types (large).

 ### Small
 ![image](/src/assets/images/second%20(1).png)
 #### Description:
 Bootstrap table interactive on multiple device types (small).

 ### No Name
 ![image](/src/assets/images/unnamed%20(2).png)
 #### Description:
 This screenshot was taken after submitting the form with no name submitted.

 ### With Name
 ![image](/src/assets/images/unnamed%20(1).png)
 #### Description:
 This screenshot was taken after submitting the form with a name submitted.

 ### Dev Tools
 ![image](/src/assets/images/unnamed%20(3).png)
 #### Description:
 This screenshot was taken with dev tools open after submitting some different buy orders.

## Part 1 Research:
 1. Describe @Input decorator used in info.component.ts
 - The @Input decorator is used to define an input property called name for the class. By using this, we are allowing values to be passed from its parent component.
 2. Describe [value] used in info.component.html
 - Using [value] here allows us to associate the value of each option with it's corresponding product.
 3. Describe [(ngModel)] also used in info.component.html
 - This is establishing a connection between the template and the component class, ensuring changes are synchronized.

## Part 2
## Screenshots

 #### Initial Application Page
 ![image](/src/assets/images/unnamed%20(4).png)
 #### Description:
 Screenshot taken of the initial application page for part 2.

 #### GCU Homepage
 ![image](/src/assets/images/unnamed%20(5).png)
 #### Description:
 Screenshot of the GCU homepage from the application.


 #### Create Album Page
 ![image](/src/assets/images/unnamed%20(6).png)
 #### Description:
 Screenshot of the create an album page.

 #### Artist List Page
 ![image](/src/assets/images/unnamed%20(7).png)
 #### Description:
 Screenshot of the Artist List page.

 #### About Box
 ![image](/src/assets/images/unnamed%20(8).png)
 #### Description:
 Screenshot of the About Box page.

 ## Part 2 Research:
 1. Add complete comments to music-service.service.ts. Include this commented code in a Microsoft Word document or a text document. Make sure your submission reads like a code file.
 ```typescript
 
@Injectable({ providedIn: 'root' })
export class MusicServiceService {
	private readonly artists: Artist[] = []; // Array to hold artists
	private readonly albums: Album[] = []; // Array to hold albums

	constructor() {
		// When the service is created, call these functions to initialize data
		this.createArtists();
		this.createAlbums();
	}

	private createArtists(): void {
		// Function to create artists
		this.artists.push(new Artist(0, 'The Beatles')); // Pushing a new Artist object to the artists array
	}

	private createAlbums(): void {
		// Function to create albums
		exampledata.forEach((data: any) => {
			// Looping through each item in the example data
			if (data.artist === 'The Beatles') {
				// Checking if the artist is The Beatles
				const tracks = data.tracks.map((trackData: any) => new Track(trackData.id, trackData.number, trackData.title, trackData.lyrics, trackData.video));
				// Mapping each track in the data to a new Track object and storing in the tracks array
				const album = new Album(data.id, data.title, data.artist, data.description, data.year, data.image, tracks);
				// Creating a new Album object with the data and tracks, and storing in the albums array
				this.albums.push(album);
				// Pushing the newly created album to the albums array
			}
		});
	}

	public getArtists(): Artist[] {
		// Function to get all artists
		return this.artists; // Returning the artists array
	}

	public getAlbums(artist: string): Album[] {
		// Function to get albums by artist
		return this.albums; // Returning the albums array
	}

	public getAlbum(artist: string, id: number): Album | undefined {
		// Function to get a specific album by artist and ID
		const album = this.albums.find((a) => a.Artist === artist && a.Id === id);
		// Finding the album in the albums array based on artist and ID

		if (album) {
			// If album is found
			const tracks = album.Tracks.map((track) => new Track(track.Id, track.Number, track.Title, track.Lyrics, track.Video));
			// Mapping each track in the album to a new Track object
			return new Album(album.Id, album.Title, album.Artist, album.Description, album.Year, album.Image, tracks);
			// Returning a new Album object with the updated tracks
		}

		return undefined; // If album is not found, return undefined
	}

	public createAlbum(album: Album): void {
		// Function to create a new album
		this.albums.push(album); // Pushing the new album to the albums array
	}

	public updateAlbum(album: Album): void {
		// Function to update an existing album
		const index = this.albums.findIndex((a) => a.Id === album.Id);
		// Finding the index of the album to be updated

		if (index !== -1) {
			// If album is found
			this.albums.splice(index, 1, album);
			// Replacing the album at the found index with the updated album
		}
	}

	public deleteAlbum(id: number, artist: string): void {
		// Function to delete an album
		const index = this.albums.findIndex((a) => a.Id === id);
		// Finding the index of the album to be deleted

		if (index !== -1) {
			// If album is found
			this.albums.splice(index, 1);
			// Removing the album from the albums array
		}
	}
}

 ```

### Links
 Github : https://github.com/enzxt/2023
 
### References
none.