import React from 'react'
import {
	ScrollView,
	StyleSheet,
	FlatList,
	Text,
	View,
	Image
} from 'react-native'
import { ExpoLinksView } from '@expo/samples'
import Jam from '../../assets/images/jam2.jpg'
import Layout from '../constants/Layout'
import { LinearGradient } from 'expo-linear-gradient'
import Constants from 'expo-constants'
import AccidentIcon from '../../assets/images/Accident'
import CraneIcon from '../../assets/images/Crane'
import ProtestIcon from '../../assets/images/Protest'
import BuildingIcon from '../../assets/images/Building'
const icons = [
	() => <BuildingIcon />,
	() => <AccidentIcon />,
	() => <CraneIcon />,
	() => <ProtestIcon />
]
const randomIcon = () => {
	return icons[Math.floor(Math.random() * 4)]()
}
const Accident = [
	{
		lieu: "Alger, Sidi M'Hamed",
		message: 'Chemin Ould Aoudia vers Ben Aknoun chargé'
	},
	{
		lieu: 'Médéa',
		message:
			"attention brouillard épais sur l'axe autoroutier El Barouaghia, soyez prudents ⚠️"
	},
	{
		lieu: 'Alger Ctre',
		message:
			"Garidi vers Hussein dey circulation classée rouge pour cause d'accident à la descente de Drid Hocine, soyez prudents.	"
	},
	{ lieu: 'Tizi Ouzou',message:"Accident au niveau du grand virage Bouaye Simmons. l'entrée de la sortie ➡️ Alger." },
	{ lieu: 'Tizi Ouzou',message:"Accident au niveau du grand virage Bouaye Simmons. l'entrée de la sortie ➡️ Alger." },
	{ lieu: 'Tizi Ouzou',message:"Accident au niveau du grand virage Bouaye Simmons. l'entrée de la sortie ➡️ Alger." },
	{ lieu: 'Tizi Ouzou',message:"Accident au niveau du grand virage Bouaye Simmons. l'entrée de la sortie ➡️ Alger." }
]

const renderRow = ({ item }) => (
	<View
		key={1}
		style={{
			width: Layout.window.width * 0.8,
			height: 90,
			borderColor: 'rgba(34, 35, 36, 0.2)',
			backgroundColor: 'white',
			borderRadius: 19,
			borderWidth: 4,
			flexDirection: 'row',
			marginVertical: 10
		}}
	>
		<View
			style={{
				flex: 0.2,
				width: 70,
				height: 70,
				alignItems: 'center',
				justifyContent: 'center'
			}}
		>
			{randomIcon()}
		</View>
		<View
			style={{
				height: 60,
				width: 2,
				backgroundColor: '#FFD428',
				alignSelf: 'center'
			}}
		></View>

		<View
			style={{
				flex: 0.8,
				alignItems: 'flex-start',
				justifyContent: 'center'
			}}
		>
			<Text style={{ fontSize: 16, paddingLeft: 5 }}>{item.lieu}</Text>
			<Text style={{ fontSize: 12, paddingLeft: 5 }}>{item.message}</Text>
		</View>
	</View>
)
export default function LinksScreen() {
	return (
		<View style={{ flex: 1 }}>
			<LinearGradient
				colors={['#FFD428', '#FF8900']}
				start={{ x: 0, y: 1 }}
				end={{ x: 1, y: 1 }}
				style={{
					paddingTop: Constants.statusBarHeight + 20,
					paddingLeft: 20,
					alignItems: 'flex-start',
					justifyContent: 'flex-start',
					flex: 0.2
				}}
			>
				<Text style={{ fontSize: 30, color: '#fff' }}>
					{' '}
					Notifications{' '}
				</Text>
			</LinearGradient>
			<View style={{ flex: 0.8 }}></View>
			<View
				style={{
					position: 'absolute',
					top: 80,
					left: 35,
					right: 35,
					zIndex: 3,
					width: '100%',
					borderRadius: 37,
					bottom: 75,
					alignItems: 'flex-start',
					justifyContent: 'flex-start'
				}}
			>
				<FlatList data={Accident} renderItem={renderRow} />
			</View>
			{/**
			 * Go ahead and delete ExpoLinksView and replace it with your content;
			 * we just wanted to provide you with some helpful links.
			 */}
		</View>
	)
}

LinksScreen.navigationOptions = {
	header: null
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 15,
		backgroundColor: '#fff'
	}
})
