input.onButtonPressed(Button.A, function () {
    while (true) {
        basic.showIcon(IconNames.Happy)
        basic.pause(1000)
        basic.showString("Hello!")
    }
})
input.onButtonPressed(Button.B, function () {
    while (true) {
        basic.showString("13")
        basic.pause(500)
        basic.showArrow(ArrowNames.South)
    }
})
