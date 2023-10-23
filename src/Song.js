class Song {
    constructor(title, duration) {
        this.title = title;
        this.duration = duration;
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

module.exports = Song;