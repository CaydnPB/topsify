const { Song, Album } = require("./src/index");

const s1 = new Song("Champions", 237);
const s2 = new Song("Heroes", 514);

const a1 = new Album("Warriors");
a1.addSong(s1);
a1.addSong(s2);

console.log(a1);