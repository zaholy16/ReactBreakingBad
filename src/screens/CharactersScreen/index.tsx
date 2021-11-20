/* eslint-disable prettier/prettier */
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import {ScrollView} from 'react-native';
import breakingBadApi from '../../api/BreakingBadApi';
import CharacterCard from '../../components/CharacterCard';
import {CharacterInterface} from '../../interfaces/interfaces';

interface Props extends NativeStackScreenProps<any, any>{}

const Component = (props: Props) => {
  const {navigation} = props;
  const [characters, setCharacters] = useState<[CharacterInterface] | null>(
    null,
  );

  const getCharacters = async () => {
    const {data} = await breakingBadApi
      .get<[CharacterInterface]>('/characters');

    setCharacters(data);
  };

  useEffect(() => {
    getCharacters();
  }, []);

  const onSelectCharacter = (character: CharacterInterface) => {
    navigation.navigate('CharacterProfile', character);
  };

 const renderCharacters = characters?.map((character, index) => {
   return (
    <CharacterCard
      key={`character-${index}`}
      character={character}
      onClick={onSelectCharacter} />
    );
 });

  return (
    <ScrollView>
      {renderCharacters}
    </ScrollView>
  );
};

export default Component;
