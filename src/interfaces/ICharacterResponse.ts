import { ICharacter } from "./ICharacter";

export interface IInfoResponse {
    count: number,
    pages: number,
    next: string | null,
    prev: string | null
}

export interface ICharacterResponse {
    info: IInfoResponse,
    results: ICharacter[]
}