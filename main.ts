let RANDOM_ACTIVITI = 0
input.onButtonPressed(Button.A, function () {
    RANDOM_ACTIVITI = randint(0, 4)
    if (RANDOM_ACTIVITI == 0) {
        basic.showString("JUGAR")
    } else if (RANDOM_ACTIVITI == 1) {
        basic.showString("ESTUDIAR")
    } else if (RANDOM_ACTIVITI == 2) {
        basic.showString("BAILAR")
    } else if (RANDOM_ACTIVITI == 3) {
        basic.showString("CANTAR")
    } else if (RANDOM_ACTIVITI == 4) {
        basic.showString("MIRAR TV")
    } else {
    	
    }
})
