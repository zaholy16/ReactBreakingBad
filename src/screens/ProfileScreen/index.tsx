/* eslint-disable prettier/prettier */
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import {Text, View} from 'react-native';
import { MainParams } from '../../navigators/MainNavigator';

interface Props
  extends NativeStackScreenProps<MainParams, 'CharacterProfile'>{}

const Component = (props: Props) => {

  const {
    route: {params: character},
  } = props;

  const {name} = character;

  return (
    <View>
      <Text>{name}</Text>
    </View>
  );
};

export default Component;
