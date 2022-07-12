Models: user, profile, assignments

userSchema
    username: string
    password: {type: password}

assignmentsSchema
    Teacher: string
    Date: date
    Technique: string
    Sight Reading: string
    Book: string
    Notes/comments: string

profileSchema  
    name: string
    email: string
    phone: number(phone number)
    age: number
    DOB: number
    instrument: string
    intrest/hobbies: string




