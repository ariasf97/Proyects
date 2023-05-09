class Reproductor {
    songs = ['ryan castro - gheto', 'bad bunny - hoy cobre', 'J balvin - morado', 'Nanpa basico - rultea', 'slipknot - snuff', 'Marc houle - where is kiting'];
    queue = [];
    play(k) {
        if (this.queue.length >= k) {
            let primero = this.queue.shift();
            this.songs.push(primero);
        }
        let indiceRadmon = Math.floor(Math.random() * this.songs.length);
        let song = this.songs.splice(indiceRadmon,1)[0];
        this.queue.push(song);
        return song;
    }
}
let playSongs = new Reproductor();
console.log(playSongs.play(4), playSongs.queue);
console.log(playSongs.play(4), playSongs.queue);
console.log(playSongs.play(4), playSongs.queue);
console.log(playSongs.play(4), playSongs.queue);
console.log(playSongs.play(4), playSongs.queue);
console.log(playSongs.play(4), playSongs.queue);
console.log(playSongs.play(4), playSongs.queue);
console.log(playSongs.play(4), playSongs.queue);