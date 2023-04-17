let minhumidité = 0
datalogger.mirrorToSerial(true)
datalogger.setColumnTitles("data")
basic.forever(function () {
	
})
basic.forever(function () {
    minhumidité = pins.analogReadPin(AnalogPin.P0)
    datalogger.log(datalogger.createCV("data", pins.analogReadPin(AnalogPin.P0)))
    if (cakLandSoil.ifMoisture(cakLandSoil.SoilPin.P0, cakLandSoil.Mlevel.VERY_WET)) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Heart)
        cakLandPump.startDuration(cakLand.BoardSide.LEFT, 61, 5)
    }
})
