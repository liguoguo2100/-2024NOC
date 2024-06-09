bluetooth.onUartDataReceived(serial.delimiters(Delimiters.Dollar), function () {
    蓝牙命令字符 = bluetooth.uartReadUntil(serial.delimiters(Delimiters.Dollar))
    命令类型 = startbit.startbit_analyzeBluetoothCmd(蓝牙命令字符)
    if (命令类型 == 1) {
        行进命令类型 = startbit.startbit_getArgs(蓝牙命令字符, 1)
    }
    if (起了如 == 1) {
        if (行进命令类型 == 0) {
            小车速度 = 165
            动了如 = 1
        } else if (行进命令类型 == 1) {
            小车速度 = 165
            动了如 = 1
        } else if (行进命令类型 == 2) {
            小车速度 = 165
            动了如 = 1
        } else if (行进命令类型 == 3) {
            小车速度 = 165
            动了如 = 1
        } else {
            小车速度 = 165
            动了如 = 1
        }
    }
})
function 原地右转 (速度: number) {
    let buf222 = pins.createBuffer(5);
buf222[0] = MAOTAI
    buf222[1] = 速度
    buf222[2] = 0
    buf222[3] = 0
    buf222[4] = 速度
    pins.i2cWriteBuffer(PWM_ADD, buf222);
}
function 原地左转 (速度: number) {
    let buf223 = pins.createBuffer(5);
buf223[0] = MAOTAI
    buf223[1] = 0
    buf223[2] = 速度
    buf223[3] = 速度
    buf223[4] = 0
    pins.i2cWriteBuffer(PWM_ADD, buf223);
}
bluetooth.onBluetoothConnected(function () {
    basic.pause(200)
    开坤()
    basic.showLeds(`
        . . . . .
        # # . # #
        . . . . .
        . # # # .
        . . . . .
        `)
})
bluetooth.onBluetoothDisconnected(function () {
    basic.pause(7000)
    起了如 = 1
    basic.showLeds(`
        # # # # .
        # . . # .
        # # # # .
        # . . # .
        # # # # .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        # . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        # . # . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        # . # . #
        . . . . .
        `)
})
function 小车后退 (左轮速度: number, 右轮速度: number) {
    let buf2 = pins.createBuffer(5);
buf2[0] = MAOTAI
    buf2[1] = 0
    buf2[2] = 左轮速度
    buf2[3] = 0
    buf2[4] = 右轮速度
    pins.i2cWriteBuffer(PWM_ADD, buf2);
}
function 小车停止 () {
    let buf = pins.createBuffer(5);
buf[0] = MAOTAI
    buf[1] = 0
    buf[2] = 0
    buf[3] = 0
    buf[4] = 0
    pins.i2cWriteBuffer(PWM_ADD, buf);
}
function cgq (left_right: number, whilte_black: number) {
    temp = 0
    pins.setPull(DigitalPin.P13, PinPullMode.PullNone)
    pins.setPull(DigitalPin.P14, PinPullMode.PullNone)
    switch (left_right) {
        case 0: {
            if (pins.digitalReadPin(DigitalPin.P13) == whilte_black) {
                temp = 1;
            }
            else {
                temp = 0;
            }
            break;
        }

        case 1: {
            if (pins.digitalReadPin(DigitalPin.P14) == whilte_black) {
                temp = 1;
            }
            else {
                temp = 0;
            }
            break;
        }
    }
return temp
}
function 小车前进 (左轮速度: number, 右轮速度: number) {
    let buf23 = pins.createBuffer(5);
buf23[0] = MAOTAI
    buf23[1] = 左轮速度
    buf23[2] = 0
    buf23[3] = 右轮速度
    buf23[4] = 0
    pins.i2cWriteBuffer(PWM_ADD, buf23);
}
function 循迹 (速度: number) {
    if (cgq(0, 0) == 1 && cgq(1, 0) == 1) {
        小车前进(速度, 速度)
    } else if (cgq(0, 0) == 1 && cgq(1, 1) == 1) {
        原地右转(75)
    } else if (cgq(0, 1) == 1 && cgq(1, 0) == 1) {
        原地左转(75)
    } else if (cgq(0, 1) == 1 && cgq(1, 1) == 1) {
        动了如 = 0
        起了如 = 0
    } else {
        小车停止()
    }
}
function 开坤 () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . # . . .
        . . . . .
        . . # . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        . . # . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        # # . # .
        . . . . .
        . . # . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        # # . # #
        . . . . .
        . . # . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        # # . # #
        . . . . .
        . # # # .
        . . . . .
        `)
}
let 行进命令类型 = 0
let 命令类型 = 0
let 蓝牙命令字符 = ""
let MAOTAI = 0
let temp = 0
let 小车速度 = 0
let 动了如 = 0
let 起了如 = 0
起了如 = 1
动了如 = 0
小车速度 = 120
temp = 0
MAOTAI = 2
let PWM_ADD = 1
let 车辆行进命令 = 1
let 前进速度1 = 1
let 前进速度2 = 2
let 前进速度3 = 3
let 前进速度4 = 4
let auto_break = 0
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    . # . # .
    . . . . .
    `)
basic.showLeds(`
    # . . . #
    . . . . .
    . . . . .
    . . . . .
    # . . . #
    `)
basic.showLeds(`
    # . . . #
    . # . # .
    . . . . .
    . # . # .
    # . . . #
    `)
basic.forever(function () {
    if (动了如 == 1) {
        循迹(小车速度)
    } else {
        小车停止()
    }
})
