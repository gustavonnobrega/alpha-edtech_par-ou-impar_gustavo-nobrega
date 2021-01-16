input.onButtonPressed(Button.A, function () {
    if (user_par_impar == 0) {
        user_par_impar = 1
    } else {
        user_par_impar = 0
    }
    if (user_par_impar == 0) {
        basic.showLeds(`
            . # # # .
            . # . # .
            . # . # .
            . # . # .
            . # # # .
            `)
        basic.showString("par")
    } else {
        basic.showLeds(`
            . . # . .
            . # # . .
            . . # . .
            . . # . .
            . # # # .
            `)
        basic.showString("impar")
    }
})
input.onButtonPressed(Button.AB, function () {
    machine_choice = randint(1, 4)
    if (machine_choice == 1) {
        basic.showLeds(`
            . . # . .
            . # # . .
            . . # . .
            . . # . .
            . # # # .
            `)
    } else if (machine_choice == 2) {
        basic.showLeds(`
            . # # # .
            . . . # .
            . # # # .
            . # . . .
            . # # # .
            `)
    } else if (machine_choice == 3) {
        basic.showLeds(`
            . # # # .
            . . . # .
            . . # # .
            . . . # .
            . # # # .
            `)
    } else if (machine_choice == 4) {
        basic.showLeds(`
            . # . # .
            . # . # .
            . # # # .
            . . . # .
            . . . # .
            `)
        machine_choice = 0
    } else {
        basic.showLeds(`
            # # . . .
            # . . . .
            # # . # #
            # . . # .
            # # . # .
            `)
        machine_choice = 0
    }
    sum_choices = user_choice + machine_choice
    if (sum_choices % 2 == user_par_impar) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
    } else {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `)
    }
})
input.onButtonPressed(Button.B, function () {
    user_choice += 1
    if (user_choice == 1) {
        basic.showLeds(`
            . . # . .
            . # # . .
            . . # . .
            . . # . .
            . # # # .
            `)
    } else if (user_choice == 2) {
        basic.showLeds(`
            . # # # .
            . . . # .
            . # # # .
            . # . . .
            . # # # .
            `)
    } else if (user_choice == 3) {
        basic.showLeds(`
            . # # # .
            . . . # .
            . . # # .
            . . . # .
            . # # # .
            `)
    } else if (user_choice == 4) {
        basic.showLeds(`
            . # . # .
            . # . # .
            . # # # .
            . . . # .
            . . . # .
            `)
        user_choice = 0
    } else {
        basic.showLeds(`
            # # . . .
            # . . . .
            # # . # #
            # . . # .
            # # . # .
            `)
        user_choice = 0
    }
})
let sum_choices = 0
let machine_choice = 0
let user_par_impar = 0
let user_choice = 0
user_choice = 0
user_par_impar = 1
basic.forever(function () {
	
})
