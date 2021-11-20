/* eslint-disable prettier/prettier */
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import {Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';

import {useForm} from '../../hooks/useForms';
import {LoginInterface} from '../../interfaces/interfaces';
import { colors } from '../../theme/BaseTheme';

const image = require('../../assets/images/login.jpg');

interface Props extends NativeStackScreenProps<any, any> {}

const Component = (props: Props) => {
  const {navigation} = props;

  const {email, password, onChange} = useForm<LoginInterface>({
    email: '',
    password: '',
  });

  useEffect(() => {
    console.log('Iniciando');
  }, []);

  useEffect(() => {
    console.log(`Email => ', ${email}`);
    console.log(`Password => ', ${password}`);
  }, [email, password]);

  const Login = () => {
    if (!(email === '1' && password === '1')) {
      return;
    }

    navigation.navigate('Home');
  };

  return (
    <View style={styles.Container}>
      <Image source={image} style={styles.Image} />
      <Text style={styles.Title}>Breaking Bad</Text>
      <TextInput
        value ={email as string}
        placeholder="Your email"
        onChangeText={value => onChange('email', value)}
        maxLength={40}
        keyboardType="email-address"
        style={styles.Input}
        placeholderTextColor="#666"
      />
      <TextInput
        value={password as string}
        placeholder="Password"
        onChangeText={value => onChange('password', value)}
        maxLength={20}
        style={styles.Input}
        placeholderTextColor="#666"
        secureTextEntry={true}
      />
    <TouchableOpacity style={styles.Button} onPress={Login}>
      <Text style={styles.ButtonText}>Login</Text>
    </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    alignItems: 'center',
    backgroundColor: colors.primary,
    height: '100%',
    justifyContent: 'center',
  },
  Title: {
    marginTop: 35,
    marginBottom: 30,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: colors.white,
    letterSpacing: 12,
    color: colors.white,
    fontSize: 28,
  },
  Input: {
    borderColor: colors.white,
    borderRadius: 4,
    borderWidth: 0.5,
    fontFamily: 'monospace',
    fontSize: 16,
    color: colors.white,
    paddingHorizontal: 20,
    marginTop: 20,
    width: '85%',
  },
  Image: {
    width: 310,
    height: 220,
  },
  Button: {
    justifyContent: 'center',
    height: 50,
    width: '85%',
    marginTop: 20,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: colors.secondary,
  },
  ButtonText: {
    color: colors.white,
    fontSize: 18,
    textAlign: 'center',
  },
});
export default Component;
