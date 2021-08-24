import { ICharacter } from './interfaces/ICharacter';
import { useCharacters } from './hooks/useCharacters';

import './App.scss';
import { Header } from './components/Header';

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
    <>
      <Header />
      <table>
        <tbody>
          {
            characters.map(renderCharacter)
          }
        </tbody>
      </table>
    </>
  );
}

export default App;
