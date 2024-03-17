import React from 'react';
import { TextInput } from 'react-native';
import styles from './styles';

interface BatTextProps {
  pass: string
}

export default function BatTextInput(props: BatTextProps) {

	return (
      <TextInput style={styles.batTextInput} placeholder='Password' value={props.pass} />
	)
};