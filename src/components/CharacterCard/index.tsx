/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import {Image, StyleSheet, Text, TouchableHighlight, View} from 'react-native';

import {Icon} from 'react-native-elements';
import {CharacterInterface} from '../../interfaces/interfaces';
import {colors} from '../../theme/BaseTheme';

interface Props{
  character: CharacterInterface;
  onClick: (character: CharacterInterface) => void;
}

const Component = (props: Props) => {
    const {character, onClick} = props;
    const {name, nickname, img, status} = character;
    const [nameIcon, setNameIcon] = useState('');
    const [colorIcon, setColorIcon] = useState('');

    useEffect(() => {
      switch (status) {
        case 'Alive':
          setNameIcon('cards-heart');
          setColorIcon(colors.red);
        break;

        case 'Deceased':
         setNameIcon('coffin');
         setColorIcon(colors.blue);
        break;

        default:
          setNameIcon('help-rhombus');
          setColorIcon(colors.green);
        break;
     }
    }, []);

    return (
      <TouchableHighlight
      onPress={() => onClick(character)}>
        <>
          <View style={styles.Container}>
          <Image source={{uri: img}} style={styles.Image} />
          <View style={styles.ContainerTwo}>
            <Text style={styles.Name}>{name}</Text>
            <Text style={styles.NickName}>{nickname}</Text>
          </View>

          <View style={styles.Icon}>
            <Icon
              type="material-community"
              name={nameIcon}
              size={30}
              color={colorIcon} />
          </View>
        </View>
        </>
      </TouchableHighlight>
    );
};

const styles = StyleSheet.create({
  Container: {
    backgroundColor: colors.primary,
    borderColor: colors.secondary,
    borderWidth: 0.5,
    flexDirection: 'row',
    height: 100,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  ContainerTwo: {
   flexDirection: 'column',
   width: 230,
  },
  Image: {
    borderRadius: 400,
    borderWidth: 0.5,
    borderColor: colors.white,
    height: 80,
    width: 80,
    alignSelf: 'center',
  },
  Name: {
    color: colors.blue,
    fontWeight: 'bold',
    paddingLeft: 18,
    fontSize: 21,
    letterSpacing: 2,
  },
  NickName: {
    color: colors.white,
    fontFamily: 'monospace',
    paddingLeft: 18,
    marginTop: 2,
    fontSize: 18,
  },
  Icon: {
    marginStart: 30,
    alignSelf: 'center',
  },
});

export default Component;

