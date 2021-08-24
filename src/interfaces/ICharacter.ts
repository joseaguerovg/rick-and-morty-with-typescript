interface ILocationCharacter {
    name: string,
    url: string
}

enum Gender {
    Female = "Female",
    Male = "Male",
    Genderless = "Genderless",
    Unknown = "unknown",
}

enum Status {
    Alive = "Alive",
    Dead = "Dead",
    Unknown = "unknown",
}

export interface ICharacter {
    id: number,
    name: string,
    status: Status,
    species: string,
    type: string,
    gender: Gender,
    origin: ILocationCharacter,
    location: ILocationCharacter,
    image: string,
    episode: string[],
    url: string,
    created: string
}