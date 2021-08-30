import { ICharacter } from "../interfaces/ICharacter"
import { CharacterItem } from "./CharacterItem";


export const CharacterList = (props: { items: ICharacter[] }) => {

    const { items } = props;

    return (
        <div className="container character-list">
            {
                items.map(characterItem => <CharacterItem key={characterItem.id.toString()} {...characterItem} />)
            }
        </div>
    )
}
