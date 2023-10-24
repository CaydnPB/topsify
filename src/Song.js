class Song {
    static catalogue = []
    static addSong (title) {
        Song.catalogue.push (title)
    }

    constructor(title, duration) {
        this.title = title;
        this.duration = duration;
        Song.addSong (title)
    }

    logDetails() {
        console.log(`The song ${this.title} is ${this.duration} seconds long.`)
    }

    displayDuration() {
        let seconds = this.duration;
        let minutes = 0;
        while (seconds > 60) {
            seconds -= 60;
            minutes++;
        }
        minutes = (minutes < 10 ? "0" : "") + minutes;
        seconds = (seconds < 10 ? "0" : "") + seconds;
        return minutes + ":" + seconds;
    }
}

class Anthem extends Song {
    constructor(title, duration, affiliation) {
        super(title, duration);
        this.affiliation = affiliation;
    }
}

module.exports = {
    Song,
    Anthem
}