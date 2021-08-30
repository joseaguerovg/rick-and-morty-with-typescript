import { IInfoResponse } from "../interfaces/ICharacterResponse"

export const Pagination = (props: {info: IInfoResponse, goPage: any}) => {

    const prevDisabled = props.info.prev !== null ? false : true
    const nextDisabled = props.info.next !== null ? false : true

    const handleClick = (link: string | null) => {
        props.goPage(link)
    }

    return (
        <div className="container pagination">
            <button 
                type="button" 
                className="btn btn-prev" 
                disabled={prevDisabled}
                onClick={() => handleClick(props.info.prev)}>
                    Anterior</button>
            <button 
                type="button" 
                className="btn btn-next" 
                disabled={nextDisabled}
                onClick={() => handleClick(props.info.next)}>Siguiente</button>
        </div>
    )
}
