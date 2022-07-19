// //// this file runs on npm run seed

 const mongoose = require('./connection')
 const Assignment = require('./assignment')

// ///////////////
// // Seed Code
// /////////////////
// // save my db connection to a variable for easy reference later
 const db = mongoose.connection

// // this runs the call back function when the db connection is opened from this file
 db.on('open', () => {
    // array of starter fruits
    const startAssignments = [
        { teacher: "Beethoven", date: "07/1/2022", technique: "C Major Scale", notes: 'memorize, one octave, hands separate', instrument: "🎹" },
        { teacher: "Beethoven", date: "07/2/2022", technique: "G, C Major Scales", notes: 'memorize, one octave, hands separate', instrument: "🎹" },
        { teacher: "Beethoven", date: "07/3/2022", technique: "D, G, C Major Scales", notes: 'memorize, one octave, hands separate', instrument: "🎹" },
        { teacher: "Beethoven", date: "07/4/2022", technique: "A, D, G, C Major Scales", notes: 'memorize, one octave, hands separate', instrument: "🎹" },
        { teacher: "Beethoven", date: "07/5/2022", technique: "E, A, D, G, C Major Scales", notes: 'memorize, one octave, hands separate', instrument: "🎹" },
        { teacher: "Beethoven", date: "07/6/2022", technique: "B, E, A, D, G, C Major Scales", notes: 'memorize, one octave, hands separate', instrument: "🎹" },
        { teacher: "Beethoven", date: "07/7/2022", technique: "F, B, E, A, D, G, C Major Scales", notes: 'memorize, one octave, hands separate', instrument: "🎹" },
        { teacher: "Beethoven", date: "07/8/2022", technique: "C#, F, B, E, A, D, G, C Major Scales", notes: 'memorize, one octave, hands separate', instrument: "🎹" },
        { teacher: "Beethoven", date: "07/9/2022", technique: "Eb, C#, F, B, E, A, D, G, C Major Scales", notes: 'memorize, one octave, hands separate', instrument: "🎹" },
        { teacher: "Beethoven", date: "07/10/2022", technique: "Bb, Eb, C#, F, B, E, A, D, G, C Major Scales", notes: 'memorize, one octave, hands separate', instrument: "🎹" },
        { teacher: "Beethoven", date: "07/11/2022", technique: "Ab, Eb, C#, F, B, E, A, D, G, C Major Scales", notes: 'memorize, one octave, hands separate', instrument: "🎹" },
    
      ]

      // when we seed data, we usually clear out the db first
      Assignment.remove({})
      // then we create that data
        .then(deletedAssignments => {
            console.log('this is what remove returns', deletedAssignments)

            // now that our delete was successful, we can create our fruits
            Assignment.create(startAssignments)
                .then(data => {
                    // res.json(data)
                    console.log('the new Assignments', data)
                    db.close()
                })
                .catch(error => {
                    console.log('error:', error)
                    db.close()
                })
        })
        .catch(error => {
            console.log('error:', error)
            db.close()
        })
      // whether it's successful or not, we want to close our db connection
})