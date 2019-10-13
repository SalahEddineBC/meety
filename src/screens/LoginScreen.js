import React, { Component } from 'react'
import { Text, View, TextInput, TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import PhoneIcon from '../../assets/images/Smartphone'

import Constants from 'expo-constants'
export default class Login extends Component {
	render() {
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
						flex: 0.4
					}}
				></LinearGradient>
				<View style={{ flex: 0.6 }}></View>
				<View
					style={{
						position: 'absolute',
						top: 120,
						left: 35,
						right: 35,
						backgroundColor: 'white',
						zIndex: 3,
						borderRadius: 37,
						bottom: 175,
						alignItems: 'flex-start',
						justifyContent: 'flex-start',
						elevation: 5,
						paddingHorizontal: 16,
						paddingTop: 20
					}}
				>
					<View
						style={{
							width: '100%',
							justifyContent: 'center',
							alignItems: 'center'
						}}
					>
						<Text style={{ fontSize: 28, textAlign: 'center',marginBottom:50,marginTop:40 }}>
							Login
						</Text>
					</View>
					<Text
						style={{
							color: '#FFD428',
							marginVertical: 10,
							fontSize: 10
						}}
					>
						Numéro de téléphone
					</Text>
					<View
						style={{
							paddingHorizontal: 10,
							height: 50,
							borderRadius: 22,
							borderColor: '#FFD428',
							width: '100%',
							borderWidth: 1,
							alignItems: 'center',
							justifyContent: 'flex-start',
							flexDirection: 'row'
						}}
					>
						<LinearGradient
							colors={['#FFD428', '#FF8900']}
							start={{ x: 0, y: 1 }}
							end={{ x: 1, y: 1 }}
							style={{
								width: 25,
								height: 25,
								borderRadius: 12.5,
								alignItems: 'center',
								justifyContent: 'center'
							}}
						>
							<PhoneIcon />
						</LinearGradient>
						<TextInput
							style={{ fontSize: 15, marginLeft: 15 }}
							value="+21366772255"
						></TextInput>
					</View>
					<Text
						style={{
							color: '#FFD428',
							marginVertical: 10,
							fontSize: 10
						}}
					>
						Mot de passe
					</Text>
					<View
						style={{
							paddingHorizontal: 10,
							height: 50,
							borderRadius: 22,
							borderColor: '#FFD428',
							width: '100%',
							borderWidth: 1,
							alignItems: 'center',
							justifyContent: 'flex-start',
							flexDirection: 'row'
						}}
					>
						<LinearGradient
							colors={['#FFD428', '#FF8900']}
							start={{ x: 0, y: 1 }}
							end={{ x: 1, y: 1 }}
							style={{
								width: 25,
								height: 25,
								borderRadius: 12.5,
								alignItems: 'center',
								justifyContent: 'center'
							}}
						>
							<PhoneIcon />
						</LinearGradient>
						<TextInput
							style={{ fontSize: 15, marginLeft: 15 }}
							value="+21366772255"
						></TextInput>
					</View>
					<TouchableOpacity
						style={{
                            marginTop:20,
							marginVertical: 10,
							paddingHorizontal: 10,
							height: 45,
							alignItems: 'center',
							justifyContent: 'center',
							width: 250
						}}
                        onPress={()=>this.props.navigation.navigate('tab    ')}
					>
						<LinearGradient
							colors={['#FFD428', '#FF8900']}
							start={{ x: 0, y: 1 }}
							end={{ x: 1, y: 1 }}
							style={{
								alignItems: 'center',
								justifyContent: 'center',
								height: 45,
								borderRadius: 22,
								width: '100%'
							}}
						>
							<Text style={{ fontSize: 18, color: '#ffffff' }}>
								Connecter
							</Text>
						</LinearGradient>
					</TouchableOpacity>
				</View>
			</View>
		)
	}
}
