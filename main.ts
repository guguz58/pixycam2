let sync = 0
let checksum = 0
let signatureNum = 0
let X = 0
let Y = 0
let width = 0
let height = 0
basic.forever(function () {
    sync = pins.i2cReadNumber(84, NumberFormat.Int16LE, true)
    if (sync == -21931) {
        sync = pins.i2cReadNumber(84, NumberFormat.Int16LE, true)
        if (sync == -21931) {
            checksum = pins.i2cReadNumber(84, NumberFormat.Int16LE, true)
            signatureNum = pins.i2cReadNumber(84, NumberFormat.Int16LE, true)
            X = pins.i2cReadNumber(84, NumberFormat.Int16LE, true)
            Y = pins.i2cReadNumber(84, NumberFormat.Int16LE, true)
            width = pins.i2cReadNumber(84, NumberFormat.Int16LE, true)
            height = pins.i2cReadNumber(84, NumberFormat.Int16LE, true)
            if (checksum == signatureNum + (X + (Y + (width + height)))) {
                serial.writeLine("X = " + X + " / Y = " + Y + " / W = " + width + " / H = " + height)
            }
        }
    }
})
