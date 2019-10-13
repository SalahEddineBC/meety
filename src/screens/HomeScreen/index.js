import * as WebBrowser from 'expo-web-browser'
import React, { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import mapStyle from './mapStyle'
import styles from './styles'
import Carousel from 'react-native-snap-carousel'
import Layout from '../../constants/Layout'
import AddIcon from '../../../assets/images/Add'
import AccidentIcon from '../../../assets/images/Accident'
import CraneIcon from '../../../assets/images/Crane'
import ProtestIcon from '../../../assets/images/Protest'
import BuildingIcon from '../../../assets/images/Building'
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
	{
		lieu: 'Tizi Ouzou',
		message:
			"Accident au niveau du grand virage Bouaye Simmons. l'entrée de la sortie ➡️ Alger."
	},
	{
		lieu: 'Tizi Ouzou',
		message:
			"Accident au niveau du grand virage Bouaye Simmons. l'entrée de la sortie ➡️ Alger."
	},
	{
		lieu: 'Tizi Ouzou',
		message:
			"Accident au niveau du grand virage Bouaye Simmons. l'entrée de la sortie ➡️ Alger."
	},
	{
		lieu: 'Tizi Ouzou',
		message:
			"Accident au niveau du grand virage Bouaye Simmons. l'entrée de la sortie ➡️ Alger."
	}
]

const renderRow = ({ item }) => (
	<View
		key={1}
		style={{
			height:"90%",
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
				alignItems: 'center',
				justifyContent: 'center'
			}}
		>
			{randomIcon()}
		</View>
		<View
			style={{
				height: "90%",
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
const CarouselContainer = ({ close }) => {
	const _renderItem = ({ item, index }) => {
		return (
			<View
				style={{
					borderColor: 'black',
					borderWidth: 1,
					height: '100%',
					justifyContent: 'center',
					alignItems: 'center'
				}}
			>
				<Text style={styles.title}>Emboutilliage</Text>
				<TouchableOpacity
					style={{
						borderRadius: 10,
						borderColor: 'black',
						borderWidth: 1,
						height: 50,
						width: 100
					}}
					onPress={() => setSelect(!selected)}
				/>
			</View>
		)
	}
	let [selected, setSelect] = useState(false)
	return (
		<View
			style={{
				flex: 0,
				top: Layout.window.statusBar,
				zIndex: 201,
				bottom: 0,
				position: 'absolute'
			}}
		>
			<TouchableOpacity
				style={{ flex: selected ? 0 : 0.7 }}
				onPress={close}
			/>
			<View
				style={{ backgroundColor: 'white', flex: selected ? 1 : 0.3 }}
			>
				<Carousel
					ref={c => {
						this._carousel = c
					}}
					data={Accident}
					renderItem={renderRow}
					sliderWidth={Layout.window.width}
					itemWidth={Layout.window.width - 30}
				/>
			</View>
		</View>
	)
}
export default function HomeScreen() {
	const [isOpen, setOpen] = useState(false)
	return (
		<View style={styles.container}>
			<MapView
				style={styles.mapView}
				initialRegion={{
					latitude: 36.7731347,
					longitude: 3.0573809,
					latitudeDelta: 0.35,
					longitudeDelta: 0.35
				}}
				customMapStyle={mapStyle}
				showsTraffic={true}
			>
				<Marker
					coordinate={{ latitude: 36.7731347, longitude: 3.0573809 }}
					title="jam"
					onPress={() => setOpen(true)}
				/>
			</MapView>
			<TouchableOpacity style={styles.button}>
				<AddIcon color="#fff" />
			</TouchableOpacity>
			{isOpen && <CarouselContainer close={() => setOpen(false)} />}
		</View>
	)
}

HomeScreen.navigationOptions = {
	header: null
}
