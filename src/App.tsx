import './App.css';
import { ICharacter } from './interfaces/ICharacter';
import { useCharacters } from './hooks/useCharacters';

function App() {

  const { characters } = useCharacters();
 
  const renderCharacter = (character: ICharacter) => {
    return (
      <tr key={character.id.toString()}>
        <th>{character.name}</th>
        <th>{character.gender}</th>
      </tr>
    )
  }

  return (
    <div>
      <table>
        <tbody>
          {
            characters.map(renderCharacter)
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;
