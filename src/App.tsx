import { useCharacters } from './hooks/useCharacters';

import './App.scss';
import { Header } from './components/Header';
import { CharacterList } from './components/CharacterList';
import { Pagination } from './components/Pagination';
import { useEffect, useState } from 'react';
import { ICharacter } from './interfaces/ICharacter';
import { ICharacterResponse, IInfoResponse } from './interfaces/ICharacterResponse';
import { rickAndMortyApi } from './api/rickAndMorty';

function App() {

  const { characters, infoResponse, goPage } = useCharacters();

  return (
    <>
      <Header />
      <Pagination info={infoResponse} goPage={goPage} />
      <CharacterList items={characters} />
      <Pagination info={infoResponse} goPage={goPage} />
    </>
  );
}

export default App;
