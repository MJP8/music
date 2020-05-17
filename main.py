function play_guitar (varible: number) {
    myImage.scrollImage(1, 100)
}
music.onEvent(MusicEvent.MelodyNotePlayed, function () {
	
})
let myImage: Image = null
let tempo = music.tempo()
myImage = images.createBigImage(`
    . # # # # . . . . .
    # # # # # # . . . #
    # # . . # # # # # #
    # # # # # # . . . .
    . # # # # . . . . .
    `)
basic.showString("Guitar star")
