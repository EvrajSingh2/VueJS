export enum SortType {
    NameAZ = "NameAZ",
    NameZA = "NameZA",
    AgeInc = "AgeInc",
    AgeDec = "AgeDec",
    SubjectsInc = "SubjectsInc",
    SubjectsDec = "SubjectsDec"
}

export enum Gender {
    Male = "Male",
    Female = "Female",
    Other = "Other"
}

export enum Subjects {
    Cplus = "C++",
    Java = "Java",
    Python = "Python",
    SQL = "SQL"
}

export enum Centers {
    Delhi = "Delhi",
    Mumbai = "Mumbai",
    Kolkata = "Kolkata"
}

export interface User {
    id: number
    firstname: string
    lastname: string
    dob: string
    age: number
    email: string
    phone: string
    gender: string
    examcenter: string
    subjects: string[]
}