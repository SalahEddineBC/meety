import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native'
import React, { Component } from 'react'
import { IndicatorViewPager, PagerDotIndicator } from 'rn-viewpager'
import { LinearGradient } from 'expo-linear-gradient'

const FirstScreen = () => (
	<View
		style={{
			alignItems: 'center',
			justifyContent: 'flex-start',
			marginTop: 40
		}}
	>
		<Image
			source={require('../../assets/images/main.png')}
			style={{ height: 400, width: 400 }}
			resizeMode="contain"
		/>
		<Text style={{ fontSize: 25, color: 'black' }}> Customer</Text>
		<Text style={{ fontSize: 20, marginTop: 11, textAlign: 'center' }}>
			Restez informés sur l'état de la route
		</Text>
	</View>
)
const SecondScreen = () => (
	<View
		style={{
			alignItems: 'center',
			justifyContent: 'flex-start',
			marginTop: 40
		}}
	>
		<Image
			source={require('../../assets/images/phone.png')}
			style={{ height: 400, width: 400 }}
			resizeMode="contain"
		/>
		<Text style={{ fontSize: 25, color: 'black' }}>
			Signalez un accident
		</Text>
		<Text style={{ fontSize: 20, marginTop: 11, textAlign: 'center' }}>
			Aidez les autres à choisir le meilleur itinéaire
		</Text>
	</View>
)
const ThirdScreen = () => (
	<View
		style={{
			alignItems: 'center',
			justifyContent: 'flex-start',
			marginTop: 40
		}}
	>
		<Image
			source={require('../../assets/images/notifs.png')}
			style={{ height: 400, width: 400 }}
			resizeMode="contain"
		/>
		<Text style={{ fontSize: 25, color: 'black' }}> Stay notified</Text>
		<Text
			style={{
				fontSize: 20,
				marginTop: 11,
				textAlign: 'center',
				marginHorizontal: 10
			}}
		>
			Scrum project validation responsive web design
		</Text>
	</View>
)
export default class ViewPagerPage extends Component {
	render() {
		return (
			<View style={{ flex: 1 }}>
				<IndicatorViewPager
					style={{ flex: 1 }}
					indicator={
						<PagerDotIndicator
							pageCount={3}
							dotStyle={{
								backgroundColor: 'rgba(255, 137, 0, 0.4)',
								width: 10,
								height: 10,
								borderRadius: 5
							}}
							selectedDotStyle={{
								backgroundColor: 'rgba(255, 137, 0, 1)',
								width: 10,
								height: 10,
								borderRadius: 5
							}}
						/>
					}
				>
					<View>
						<FirstScreen />
					</View>
					<View>
						<SecondScreen />
					</View>
					<View>
						<ThirdScreen />
					</View>
				</IndicatorViewPager>
				<View
					style={{
						position: 'absolute',
						height: 120,
						bottom: 60,
						right: 0,
						left: 0,
						zIndex: 5,
						marginHorizontal: 40,
						justifyContent: 'space-between'
					}}
				>
					<TouchableOpacity onPress={()=>this.props.navigation.navigate('login')}>
						<LinearGradient
							colors={['#FFD428', '#FF8900']}
							start={{ x: 0, y: 1 }}
							end={{ x: 1, y: 1 }}
							style={{
								alignItems: 'center',
								justifyContent: 'center',
								height: 50,
								backgroundColor: 'rgba(255, 137, 0, 1)',
								borderRadius: 22
							}}
						>
							<Text style={{ fontSize: 18, color: 'white' }}>
								Se connecter
							</Text>
						</LinearGradient>
					</TouchableOpacity>
					<TouchableOpacity
						style={{
							alignItems: 'center',
							justifyContent: 'center',
							height: 50,
							borderWidth: 1,
							borderColor: 'rgba(255, 212, 40, 1)',
							borderRadius: 22
						}}
					>
						<Text style={{ fontSize: 18 }}>Créer un compte</Text>
					</TouchableOpacity>
				</View>
			</View>
		)
	}

	_renderDotIndicator() {
		return
	}
}
