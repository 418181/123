let position = 0
input.onGesture(Gesture.Shake, function () {
    if (position < 10 || position > 350) {
        basic.showNumber(1)
    } else if (position < 100 && position > 80) {
        basic.showNumber(2)
    } else if (position < 190 && position > 170) {
        basic.showNumber(3)
    } else if (position < 280 && position > 260) {
        basic.showNumber(4)
    } else {
        basic.showNumber(randint(5, 6))
    }
})
basic.forever(function () {
    position = input.compassHeading()
})
