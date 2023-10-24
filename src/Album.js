class Album {
    constructor(title, songs) {
        this.title = title;
        this.songs = [];
    }

    addSong(newSong) {
        this.songs.push(newSong); 
    }
}

module.exports = {
    Album
}