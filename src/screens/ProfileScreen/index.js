import React, { Component } from 'react'
import { Text, View, TextInput, Image } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import PhoneIcon from '../../../assets/images/Smartphone'
import MessageIcon from '../../../assets/images/Email'
import DateIcon from '../../../assets/images/Icon'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Constants from 'expo-constants';
export default class Profile extends Component {
	render() {
		return (
			<View style={{ flex: 1 }}>
				<LinearGradient
					colors={['#FFD428', '#FF8900']}
					start={{ x: 0, y: 1 }}
					end={{ x: 1, y: 1 }}
					style={{
                        paddingTop:Constants.statusBarHeight+20,
                        paddingLeft:20,
						alignItems: 'flex-start',
						justifyContent: 'flex-start',
						flex: 0.4
					}}
				>
					<Text style={{fontSize:30,color:"#fff"}}> Profile </Text>
				</LinearGradient>
				<View style={{ flex: 0.6 }}></View>
				<View
					style={{
						position: 'absolute',
						top: 200,
						left: 35,
						right: 35,
						backgroundColor: 'white',
						zIndex: 3,
						borderRadius: 37,
						bottom: 75,
						alignItems: 'flex-start',
						justifyContent: 'flex-start',
						elevation: 5,
						paddingHorizontal: 16,
						paddingTop: 80
					}}
				>
					<View
						style={{
							width: '100%',
							alignItems: 'center',
							justifyContent: 'center'
						}}
					>
						<Text style={{ fontSize: 25, color: '#222324' }}>
							Meriem Retiel
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
							height: 40,
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
						Adresse e-mail
					</Text>
					<View
						style={{
							paddingHorizontal: 10,
							height: 40,
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
							<MessageIcon />
						</LinearGradient>
						<TextInput
							style={{ fontSize: 15, marginLeft: 15 }}
							value="retiel@gmail.com"
						/>
					</View>
					<Text
						style={{
							color: '#FFD428',
							marginVertical: 10,
							fontSize: 10
						}}
					>
						Date de naissance{' '}
					</Text>
					<View
						style={{
							paddingHorizontal: 10,
							height: 40,
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
							<DateIcon />
						</LinearGradient>
						<TextInput
							style={{ fontSize: 15, marginLeft: 15 }}
							value="12/11/1980"
						/>
					</View>
					<TouchableOpacity
						style={{
							marginVertical: 10,
							paddingHorizontal: 10,
							height: 45,
							alignItems: 'center',
							justifyContent: 'center',
							width: 250
						}}
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
							<Text style={{ fontSize: 18, color: '#F1F2F6' }}>
								Sauvgarder
							</Text>
						</LinearGradient>
					</TouchableOpacity>
					<View
						style={{
							position: 'absolute',
							top: -75,
							left: 0,
							right: 0,
							alignItems: 'center'
						}}
					>
						<View
							style={{
								height: 150,
								width: 150,
								borderRadius: 75,
								borderWidth: 2,
								borderColor: 'white'
							}}
						>
							<Image
								source={{
									uri:
										'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/768px-Circle-icons-profile.svg.png'
								}}
                                style={{height:145,width:145}}
							></Image>
						</View>
					</View>
				</View>
			</View>
		)
	}
}
Profile.navigationOptions = {
	header: null
}
