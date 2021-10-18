// console.log('100 days')

// for (let i = 0; i <= 10; i++) {
    
//     console.log(i)
// }

// const scores = [0, 10, 20, 30, 40, 50, 60]
// for (let i = 0; i < scores.length; i++) {
//     console.log (i, scores[i])
    
// }

const scores2 = [
    {
        name: 'Pablo',
        grade: 10
    },

    {
        name: 'Zeus',
        grade: 20
    },

    {
        name: 'Pandora',
        grade: 30
    },

    {
        name: 'Lili',
        grade: 40
    }
]

// for (let i = 0; i < scores2.length; i++) {
//    let student = scores2[i]
//     console.log(`${student.name} scored ${student.grade}`)
// }

// const world = 'gnimroW labolG'
// let reverseWord = ''

// for (let i = world.length -1; i >= 0; i--) {
    
//     reverseWord += world[i]
//     console.log(reverseWord)
// }


// let total = 0
// for (let i = 0; i < scores2.length; i++) {
//    let score = scores2[i]
//   total += score.grade 
    
// }
// console.log(total/scores2.length)

// for (let i = 1; i <= 10; i++) {
//     console.log('Outer loop:', i)

//     for (let j = 10; j >= 0; j-=2) {
//         console.log('      Inner loop:', j)
        
        
//     }
    
// }

const gameBoard = [
    [4, 32, 16, 4],
    [8, 16, 64, 8],
    [8, 32, 16, 4],
    [2, 8, 64, 8]
]
let totalScore = 0
for (let i = 0; i < gameBoard.length; i++) {
    let row = gameBoard[i]
    // console.log(row)

    for (let j = 0; j < row.length; j++) {
        totalScore += row[j]
        
        // console.log(row[j])
    }
}
console.log(totalScore)


