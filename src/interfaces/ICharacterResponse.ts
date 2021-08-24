import { ICharacter } from "./ICharacter";

interface IInfoResponse {
    count: number,
    pages: number,
    next: string,
    prev: string | null
}

export interface ICharacterResponse {
    info: IInfoResponse,
    results: ICharacter[]
}