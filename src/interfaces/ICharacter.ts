interface IOriginCharacter{
    name: string,
    url: string
}

interface ILocationCharacter{
    name: string,
    url: string
}

export interface ICharacter {
    id: number,
    name: string,
    status: string,
    species: string,
    type: string,
    gender: string,
    origin: IOriginCharacter,
    location: ILocationCharacter,
    image: string,
    episode: string[],
    url: string,
    created: string
}