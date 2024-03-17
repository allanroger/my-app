import React, { useState } from 'react';
import { Pressable, Text } from 'react-native';
import styles from './styles';
import generatePassword from '../../services/generatePassword';
import BatTextInput from '../input';
import * as Clipboard from 'expo-clipboard';
import { AntDesign } from '@expo/vector-icons';
export default function Btns() {

  const [pass, setPass] = useState('');

  const handleGenerateButton = () => {
    let generateToken = generatePassword();
    setPass(generateToken);
  }

  const handleCopyButton = async () => {
    await Clipboard.setStringAsync(pass);
  }

	return (
		<>
      <BatTextInput pass={pass} />

      <Pressable style={styles.button} onPress={handleGenerateButton}>
        <Text style={styles.text}>
          New Password
        </Text>
      </Pressable>

      <Pressable style={styles.button} onPress={handleCopyButton}>
        <Text style={styles.text}>
        <AntDesign name="copy1" size={16} color="#e5bf3c" /> Copy
        </Text>
      </Pressable>
		</>
	)
};