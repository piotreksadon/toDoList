// class Maths {
//     asd: string = 'andrzej'
//     counter: number = 10
//     multiply = (param1: number, param2: number) => {
//         return param1*param2
//     }
    
// }
// const x = new Maths
// x.asd = 'janusz'
// console.log(x.asd) // janusz
// console.log(x.multiply(1, 3)) // 3

// const y = new Maths
// console.log(y.asd) // andrzej
// console.log(y.multiply(5, 66)) // 330


// const z = (weight: number, heigth: number) => {
//     return weight*heigth
// }
// const result = z(10, 5)
// console.log(result)

// const asd = 'string'


// const jo = {
//     asd: "kupa"
// }
// console.log(jo.asd)




// class Game {
//     counter: number=0
//     play = (hours: number) => {
//         this.counter+hours
//         console.log(this.counter)
//     }
// }

// const game = new Game()
// game.play(5) // 5
// game.play(5) // 10

// const game2 = new Game()
// game.play(3) // 3



// interface carModel {
//     brand: string;
//     model: string;
//     productionYear: number
//     howFastMyCarIs:(speed: number) => string;
// }

// const myCar: carModel = {
//     brand: 'volvo',
//     model: '850',
//     productionYear: 1996,
//     howFastMyCarIs: (speed) => {
//     if (speed<200)
//     {
//          return `Your ${myCar} is slow AF.`
//     }
//     else (speed>=200)
//     {
//         return `Your ${myCar} is rocket fast.`
//     }
// }
// }
// console.log(myCar.howFastMyCarIs(210))


export class Debt {
    userName: string;
    userSecName: string;
    userLastName: string;
    howMuchHeOwes:(amount: number) => string = (money) => {
        return ''
    }
}

const userFee: Debt = {
    userName: 'Jacek',
    userSecName: 'Złodziej',
    userLastName: 'Sasin',
    howMuchHeOwes: (amount) => {
        return `${userFee} owes ${amount} zł.`
    }
}

console.log(userFee.howMuchHeOwes(70000000))
