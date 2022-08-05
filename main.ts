let RANDOM_ACTIVITI = 0
input.onButtonPressed(Button.A, function () {
    RANDOM_ACTIVITI = randint(0, 6)
    if (RANDOM_ACTIVITI == 0) {
        basic.showString("Jugar Videojuegos")
        for (let index = 0; index < 4; index++) {
            basic.showLeds(`
                . . . . .
                # # # # #
                # . # . #
                # # # # #
                # # . # #
                `)
            basic.showLeds(`
                # # # # #
                # . # . #
                # # # # #
                # # . # #
                . . . . .
                `)
        }
    } else if (RANDOM_ACTIVITI == 1) {
        basic.showString("Estudiar ")
        for (let index = 0; index < 4; index++) {
            basic.showLeds(`
                # # # # #
                # . # . #
                # . # . #
                # . # . #
                # # # # #
                `)
            basic.showLeds(`
                . # # # .
                . # # # .
                . # # # .
                . # # # .
                . # # # .
                `)
        }
    } else if (RANDOM_ACTIVITI == 2) {
        basic.showString("Hacer Tareas")
        for (let index = 0; index < 4; index++) {
            basic.showLeds(`
                . . . # #
                . . # # #
                . . # # .
                . . . . .
                . . . . .
                `)
            basic.showLeds(`
                . . . # #
                . . # # #
                . # # # .
                . # # . .
                . . . . .
                `)
            basic.showLeds(`
                . . . # #
                . . # # #
                . # # # .
                # # # . .
                # # . . .
                `)
        }
    } else if (RANDOM_ACTIVITI == 3) {
        basic.showString("Sacar los perros")
        for (let index = 0; index < 4; index++) {
            basic.showLeds(`
                . # . # .
                . # # # .
                # . # . #
                . # # # .
                . . # . .
                `)
            basic.showLeds(`
                . # . # .
                . # # # .
                # # # # #
                . # # # .
                . . # . .
                `)
        }
    } else if (RANDOM_ACTIVITI == 4) {
        basic.showString("Mirar Television")
        for (let index = 0; index < 4; index++) {
            basic.showLeds(`
                # # # # #
                # . . . #
                # # # # #
                . . # . .
                . # # # .
                `)
            basic.showLeds(`
                # # # # #
                # # # # #
                # # # # #
                . . # . .
                . # # # .
                `)
        }
    } else if (RANDOM_ACTIVITI == 5) {
        basic.showString("Salir a caminar")
        for (let index = 0; index < 4; index++) {
            basic.showLeds(`
                . . . . .
                # # # . .
                . . # # #
                . . . . #
                # # # # #
                `)
            basic.showLeds(`
                # # # . .
                . . # # #
                . . . . #
                # # # # #
                . . . . .
                `)
            basic.showLeds(`
                . # # # .
                . # . . #
                . # . . .
                . # # # #
                . . . . .
                `)
            basic.showLeds(`
                . . . . .
                . . # # #
                . . # . .
                . . # . .
                . . # # #
                `)
        }
    } else if (RANDOM_ACTIVITI == 6) {
        basic.showString("Nadar")
        for (let index = 0; index < 4; index++) {
            basic.showLeds(`
                . . # . .
                . # # # .
                # # # # #
                . # # # .
                . . . . .
                `)
            basic.showLeds(`
                . . . . .
                . . # . .
                . # # # .
                # # # # #
                . # # # .
                `)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . # . .
                . # # # .
                # # # # #
                `)
            basic.showLeds(`
                . . . # .
                # . . . .
                . . . . #
                . # . # .
                # # # # #
                `)
        }
    }
})
