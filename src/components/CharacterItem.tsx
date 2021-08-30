import { ICharacter } from "../interfaces/ICharacter"

export const CharacterItem = (props: ICharacter) => {

    const { image, name, status } = props;

    return (
        <div className="character-item">
            <div className="image-item">
                <img src={image} alt={name} />
                <div className="status-item">
                    <div className={`circle ${status.toLowerCase()}`}></div>
                    <div className="status">{status}</div>
                </div>
            </div>
            <div className="name-item">
                {name}
            </div>
        </div>
    )
}
