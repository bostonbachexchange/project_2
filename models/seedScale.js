// //// this file runs on npm run seed

 const mongoose = require('./connection')
 const Scale = require('./scale')

// ///////////////
// // Seed Code
// /////////////////
// // save my db connection to a variable for easy reference later
 const db = mongoose.connection

// // this runs the call back function when the db connection is opened from this file
 db.on('open', () => {
    const startScales = [
        {   
            name: "C", 
            letterNames: "C D E F G A B C", 
            LHfingerings: "5 4 3 2 1 3 2 1", 
            RHfingerings: "1 2 3 1 2 3 4 5", 
            numberOfAccidentals: '0 sharps or flats', 
            keySignature: "Coming Soon", 
            keyboardImage: "Coming Soon", 
            steps: "whole, whole, half, whole, whole, whole, half"
        }, 
        { 
            name: "G", 
            letterNames: "G A B C D E F# G", 
            LHfingerings: "5 4 3 2 1 3 2 1", 
            RHfingerings: "1 2 3 1 2 3 4 5", 
            numberOfAccidentals: '1', 
            keySignature: "Coming Soon", 
            keyboardImage: "Coming Soon", 
            steps: "whole, whole, half, whole, whole, whole, half"
        }, 
        { 
            name: "F", 
            letterNames: "F G A Bb C D E F", 
            LHfingerings: "5 4 3 2 1 3 2 1", 
            RHfingerings: "1 2 3 4 1 2 3 4", 
            numberOfAccidentals: '1', 
            keySignature: "Coming Soon", 
            keyboardImage: "Coming Soon", 
            steps: "whole, whole, half, whole, whole, whole, half"
        }, 
        { 
            name: "D", 
            letterNames: "D E F# G A B C# D", 
            LHfingerings: "5 4 3 2 1 3 2 1", 
            RHfingerings: "1 2 3 1 2 3 4 5", 
            numberOfAccidentals: '2', 
            keySignature: "Coming Soon", 
            keyboardImage: "Coming Soon", 
            steps: "whole, whole, half, whole, whole, whole, half"
        }, 
        {   
            name: "Bb", 
            letterNames: "Bb C D Eb F G A Bb ", 
            LHfingerings: "3 2 1 4 3 2 1 3", 
            RHfingerings: "4(3) 1 2 3 1 2 3 4", 
            numberOfAccidentals: '2', 
            keySignature: "Coming Soon", 
            keyboardImage: "Coming Soon", 
            steps: "whole, whole, half, whole, whole, whole, half"
        }, 
        { 
            name: "A", 
            letterNames: "A B C# D E F# G# A", 
            LHfingerings: "5 4 3 2 1 3 2 1", 
            RHfingerings: "1 2 3 1 2 3 4 5", 
            numberOfAccidentals: '3', 
            keySignature: "Coming Soon", 
            keyboardImage: "Coming Soon", 
            steps: "whole, whole, half, whole, whole, whole, half"
        }, 
        { 
            name: "Eb", 
            letterNames: "Eb F G Ab Bb C D Eb", 
            LHfingerings: "3 2 1 4 3 2 1 3", 
            RHfingerings: "3 2 1 4 3 2 1 3", 
            numberOfAccidentals: '3', 
            keySignature: "Coming Soon", 
            keyboardImage: "Coming Soon", 
            steps: "whole, whole, half, whole, whole, whole, half"
        }, 
        {   name: "E", 
            letterNames: "E F# G# A B C# D# E", 
            LHfingerings: "5 4 3 2 1 3 2 1", 
            RHfingerings: "1 2 3 1 2 3 4 5", 
            numberOfAccidentals: '4', 
            keySignature: "Coming Soon", 
            keyboardImage: "Coming Soon", 
            steps: "whole, whole, half, whole, whole, whole, half"
        }, 
        { 
            name: "Ab", 
            letterNames: "Ab Bb C Db Eb F G Ab", 
            LHfingerings: "3 2 1 4 3 2 1 3", 
            RHfingerings: "3 4 1 2 3 1 2 3", 
            numberOfAccidentals: '4', 
            keySignature: "Coming Soon", 
            keyboardImage: "Coming Soon", 
            steps: "whole, whole, half, whole, whole, whole, half"
        }, 
        { 
            name: "B", 
            letterNames: "B C# D# E F# G# A# B", 
            LHfingerings: "4 3 2 1 4 3 2 1", 
            RHfingerings: "1 2 3 1 2 3 4 5", 
            numberOfAccidentals: '5', 
            keySignature: "Coming Soon", 
            keyboardImage: "Coming Soon", 
            steps: "whole, whole, half, whole, whole, whole, half"
        }, 
        { 
            name: "Db", 
            letterNames: "Db Eb F Gb Ab Bb C Db", 
            LHfingerings: "", 
            RHfingerings: "", 
            numberOfAccidentals: '5', 
            keySignature: "Coming Soon", 
            keyboardImage: "Coming Soon", 
            steps: "whole, whole, half, whole, whole, whole, half"
        }, 
        { 
            name: "F#", 
            letterNames: "F# G# A# B C# D# E# F#", 
            LHfingerings: "4 3 2 1 3 2 1 4", 
            RHfingerings: "2 3 4 1 2 3 1 2", 
            numberOfAccidentals: '6', 
            keySignature: "Coming Soon", 
            keyboardImage: "Coming Soon", 
            steps: "whole, whole, half, whole, whole, whole, half"
        }, 
        { 
            name: "Gb", 
            letterNames: "Gb Ab Bb Cb Db Eb F Gb", 
            LHfingerings: "4 3 2 1 3 2 1 4", 
            RHfingerings: "2 3 4 1 2 3 1 2", 
            numberOfAccidentals: '6', 
            keySignature: "Coming Soon", 
            keyboardImage: "Coming Soon", 
            steps: "whole, whole, half, whole, whole, whole, half"
        }, 
        { 
            name: "C#", 
            letterNames: "C# D# E# F# G# A# B# C#", 
            LHfingerings: "3 2 1 4 3 2 1 3", 
            RHfingerings: "2 3 1 2 3 4 1 2", 
            numberOfAccidentals: '7', 
            keySignature: "Coming Soon", 
            keyboardImage: "Coming Soon", 
            steps: "whole, whole, half, whole, whole, whole, half"
        }, 
        { 
            name: "Cb", 
            letterNames: "Cb Db Eb Fb Gb Ab Bb Cb", 
            LHfingerings: "4 3 2 1 4 3 2 1", 
            RHfingerings: "1 2 3 1 2 3 4 5", 
            numberOfAccidentals: '7', 
            keySignature: "Coming Soon", 
            keyboardImage: "Coming Soon", 
            steps: "whole, whole, half, whole, whole, whole, half"
        } 
    ]

      // when we seed data, we usually clear out the db first
      Scale.remove({})
      // then we create that data
        .then(deletedScales => {
            console.log('this is what remove returns', deletedScales)
            // now that our delete was successful, we can create our fruits
            Scale.create(startScales)
                .then(data => {
                    // res.json(data)
                    console.log('the new Scales', data)
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