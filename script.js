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

for (let i = 0; i < scores2.length; i++) {
   let student = scores2[i]
    console.log(`${student.name} scored ${student.grade}`)
}
