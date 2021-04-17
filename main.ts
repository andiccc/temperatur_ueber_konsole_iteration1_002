serial.onDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    if (serial.readLine() == "temp") {
        schalter = 1
    }
    if (serial.readLine() == "licht") {
        schalter = 2
    }
})
let schalter = 0
schalter = 0
basic.forever(function () {
    if (schalter == 1) {
        basic.showIcon(IconNames.Yes)
        serial.writeValue("temperatur", input.temperature())
        basic.pause(2000)
    }
    if (schalter == 2) {
        basic.showIcon(IconNames.Happy)
        serial.writeValue("Lichtstaerke", input.lightLevel())
        basic.pause(2000)
    }
})
