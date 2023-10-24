const { Song, Anthem, Album } = require("./src/index");

const song1 = new Song("Champions", 237);
const song2 = new Song("Heroes", 514);
const song3 = new Song("Teenage Dream", 125);
const anthem1 = new Anthem("National Anthem", 125, "England");

console.log(anthem1);

const a1 = new Album("Warriors");
a1.addSong(song1);
a1.addSong(song2);
a1.addSong(song3);
a1.addSong(anthem1);

console.log(a1);