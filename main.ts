function line () {
    length = tempo
    p = randint(0, 10)
    led.plotBrightness(2, 3, 10)
    led.plotBrightness(3, 4, 10)
    led.plotBrightness(1, 4, 10)
    if (p == 5) {
        led.plotBrightness(1, 4, 255)
        led.plotBrightness(3, 4, 255)
        basic.pause(500)
        led.plotBrightness(3, 4, 10)
        led.plotBrightness(1, 4, 10)
    }
    return length
}
function play () {
    myImage.scrollImage(1, 100)
    line()
    return p
}
music.onEvent(MusicEvent.MelodyNotePlayed, function () {
    tempo = music.tempo()
})
let p = 0
let length = 0
let myImage: Image = null
let tempo = 0
tempo = music.tempo()
myImage = images.createBigImage(`
    . # # # # . . . . .
    # # # # # # . . # .
    # # . . # # # # # .
    # # # # # # . . . .
    . # # # # . . . . .
    `)
basic.showString("Guitar star")
basic.forever(function () {
    play()
})
control.inBackground(function () {
    while (game.isGameOver() == false) {
        music.playMelody("C D C D C D E C ", randint(40, 500))
        music.playMelody("C E C E C D C D ", randint(40, 500))
        music.playMelody("C5 C E G C5 D E B ", randint(40, 500))
    }
})
