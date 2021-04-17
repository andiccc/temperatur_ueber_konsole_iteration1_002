def on_data_received():
    global vatemp
    while True:
        if serial.read_line() == "temp":
            vatemp = 1
        if vatemp == 1:
            serial.write_value("temperatur", input.temperature())
            basic.pause(2000)
serial.on_data_received(serial.delimiters(Delimiters.NEW_LINE), on_data_received)

vatemp = 0
vatemp = 0

def on_forever():
    if vatemp == 1:
        basic.show_number(input.temperature())
basic.forever(on_forever)
