import React from 'react';
import { Image } from 'react-native';
import image from '../../../assets/logo.png';
import styles from './styles';

export default function Logo() {
	return (
			<Image source={image} style={styles.logo}/>
	)
};