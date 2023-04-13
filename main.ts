input.onButtonPressed(Button.A, function () {
    if (a == 1) {
        music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Forever)
    } else if (a == 2) {
        music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Forever)
    } else if (a == 3) {
        music.startMelody(music.builtInMelody(Melodies.Prelude), MelodyOptions.Forever)
    } else if (a == 4) {
        music.startMelody(music.builtInMelody(Melodies.Ode), MelodyOptions.Forever)
    } else if (a == 5) {
        music.startMelody(music.builtInMelody(Melodies.Nyan), MelodyOptions.Forever)
    } else if (a == 6) {
        music.startMelody(music.builtInMelody(Melodies.Ringtone), MelodyOptions.Forever)
    } else if (a == 7) {
        music.startMelody(music.builtInMelody(Melodies.Funk), MelodyOptions.Forever)
    } else if (a == 8) {
        music.startMelody(music.builtInMelody(Melodies.Blues), MelodyOptions.Forever)
    } else if (a == 9) {
        music.startMelody(music.builtInMelody(Melodies.Birthday), MelodyOptions.Forever)
    } else if (a == 10) {
        music.startMelody(music.builtInMelody(Melodies.Wedding), MelodyOptions.Forever)
    } else if (a == 11) {
        music.startMelody(music.builtInMelody(Melodies.Funeral), MelodyOptions.Forever)
    } else if (a == 12) {
        music.startMelody(music.builtInMelody(Melodies.Punchline), MelodyOptions.Forever)
    } else if (a == 13) {
        music.startMelody(music.builtInMelody(Melodies.Baddy), MelodyOptions.Forever)
    } else if (a == 14) {
        music.startMelody(music.builtInMelody(Melodies.Chase), MelodyOptions.Forever)
    } else if (a == 15) {
        music.startMelody(music.builtInMelody(Melodies.BaDing), MelodyOptions.Forever)
    } else if (a == 16) {
        music.startMelody(music.builtInMelody(Melodies.Wawawawaa), MelodyOptions.Forever)
    } else if (a == 17) {
        music.startMelody(music.builtInMelody(Melodies.JumpUp), MelodyOptions.Forever)
    } else if (a == 18) {
        music.startMelody(music.builtInMelody(Melodies.JumpDown), MelodyOptions.Forever)
    } else if (a == 19) {
        music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Forever)
    } else if (a == 20) {
        music.startMelody(music.builtInMelody(Melodies.PowerDown), MelodyOptions.Forever)
    }
})
input.onGesture(Gesture.Shake, function () {
    step += 1
    basic.showNumber(step)
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("" + 25 * step + "cm")
    basic.showNumber(input.temperature())
})
input.onButtonPressed(Button.B, function () {
    a += 1
})
let a = 0
let step = 0
step = 0
a = 0
basic.forever(function () {
    if (step == 100) {
        basic.showIcon(IconNames.Heart)
        music.playSoundEffect(music.builtinSoundEffect(soundExpression.hello), SoundExpressionPlayMode.UntilDone)
    } else if (step == 1000) {
        basic.showIcon(IconNames.Surprised)
        music.playSoundEffect(music.builtinSoundEffect(soundExpression.happy), SoundExpressionPlayMode.UntilDone)
    } else if (step == 5000) {
        basic.showIcon(IconNames.Happy)
        music.playSoundEffect(music.builtinSoundEffect(soundExpression.spring), SoundExpressionPlayMode.UntilDone)
    } else if (input.temperature() > 35) {
        basic.showString("hot")
        music.playSoundEffect(music.builtinSoundEffect(soundExpression.slide), SoundExpressionPlayMode.UntilDone)
    }
})
