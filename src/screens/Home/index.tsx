import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ImageBackground } from 'react-native';
import styles from './styles';
import Title from '../../components/title';
import Logo from '../../components/logo';
import Btns from '../../components/btns';
import BatBg from '../../../assets/bg.webp'


export default function Home() {
	return (
		<ImageBackground style={styles.image} source={BatBg}>
			<Title />
			<Logo />
			<Btns />
			<StatusBar style="auto" />
		</ImageBackground>
	)
};