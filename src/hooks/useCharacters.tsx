import { useEffect, useState } from "react"
import { rickAndMortyApi } from "../api/rickAndMorty"
import { ICharacter } from "../interfaces/ICharacter"
import { ICharacterResponse, IInfoResponse } from "../interfaces/ICharacterResponse"

const initialStateResponse: IInfoResponse = {
    count: 0,
    pages: 0,
    next: '',
    prev: null
}

export const useCharacters = () => {
    const [characters, setCharacters] = useState<ICharacter[]>([])
    const [infoResponse, setInfoResponse] = useState<IInfoResponse>(initialStateResponse)
    const [errorResponse, setErrorResponse] = useState(false)
    const [loading, setLoading] = useState(true)

    const loadCharacters = async (page: string | null = null) =>{
        try {
            const filterPage = page !== null ? `?page=${page}` : ''
            const response = await rickAndMortyApi.get<ICharacterResponse>(`/character${filterPage}`)
            setCharacters(response.data.results)
            setInfoResponse(response.data.info)
            setLoading(false)
        } catch (error) {
            setErrorResponse(error.message)
        }
        
    }

    const goPage = (url: string | null) => {
        const page = url !== null ? url.split('?')[1].substr(-1) : null
        loadCharacters(page)
    }
  
    useEffect(() => {
      loadCharacters()
    }, [])

    return {
        characters,
        infoResponse,
        errorResponse,
        loading,
        goPage
    }
}
