import { ICharacter } from "./ICharacter";

export interface IInfoResponse {
    count: number,
    pages: number,
    next: string,
    prev: null
}

export interface ICharacterResponse {
    info: IInfoResponse,
    results: ICharacter[]
}