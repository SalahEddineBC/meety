import { StyleSheet } from 'react-native'
export default StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff'
	},
	mapView: {
		flex: 1
	},
	button: {
		position: 'absolute',
		bottom: 10,
		right: 10,
		borderRadius: 20,
		width: 40,
		height: 40,
		backgroundColor: '#FFD428',
        zIndex: 200,
        justifyContent:"center",
        alignItems:"center"
	}
})
