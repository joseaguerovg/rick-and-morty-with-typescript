import { useEffect, useState } from "react"
import { rickAndMortyApi } from "../api/rickAndMorty"
import { ICharacter } from "../interfaces/ICharacter"
import { ICharacterResponse, IInfoResponse } from "../interfaces/ICharacterResponse"

export const useCharacters = () => {
    const [characters, setCharacters] = useState<ICharacter[]>([])
    const [infoResponse, setInfoResponse] = useState<IInfoResponse>()
    const [errorResponse, setErrorResponse] = useState(false)
    const [loading, setLoading] = useState(true)

    const loadCharacters = async () =>{
        try {
            const response = await rickAndMortyApi.get<ICharacterResponse>('/character')
            setCharacters(response.data.results)
            setInfoResponse(response.data.info)
            setLoading(false)
        } catch (error) {
            setErrorResponse(error.message)
        }
        
    }
  
    useEffect(() => {
      loadCharacters()
    }, [])

    return {
        characters,
        infoResponse,
        errorResponse,
        loading
    }
}
