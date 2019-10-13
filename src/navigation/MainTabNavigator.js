import React from 'react'
import { Platform, View, StyleSheet } from 'react-native'
import {
	createStackNavigator,
	createBottomTabNavigator,
	createSwitchNavigator
} from 'react-navigation'

import ProfileScreen from '../screens/ProfileScreen'
import HomeScreen from '../screens/HomeScreen'
import LinksScreen from '../screens/LinksScreen'
import SettingsScreen from '../screens/SettingsScreen'
import SplashScrenn from '../screens/IntroScreen'
import LoginScreen from '../screens/LoginScreen'

import HomeIcon from '../../assets/images/House'
import AddIcon from '../../assets/images/Add'
import ProfileIcon from '../../assets/images/User'
import NotificationIcon from '../../assets/images/Notification'
const config = Platform.select({
	web: { headerMode: 'screen' },
	default: {}
})

const HomeStack = createStackNavigator(
	{
		Home: HomeScreen
	},
	config
)

HomeStack.navigationOptions = {
	tabBarLabel: ' ',
	tabBarIcon: ({ focused }) => (
		<View style={focused ? iconStyle.on : iconStyle.off}>
			<HomeIcon color={focused ? '#fff' : '#FFD428'} />
		</View>
	)
}

HomeStack.path = ''

const LinksStack = createStackNavigator(
	{
		Links: LinksScreen
	},
	config
)

LinksStack.navigationOptions = {
	tabBarLabel: ' ',
	tabBarIcon: ({ focused }) => (
		<View style={focused ? iconStyle.on : iconStyle.off}>
			<NotificationIcon color={focused ? '#fff' : '#FFD428'} />
		</View>
	)
}

LinksStack.path = ''

const SettingsStack = createStackNavigator(
	{
		Settings: SettingsScreen
	},
	config
)

SettingsStack.navigationOptions = {
	tabBarLabel: ' ',
	tabBarIcon: ({ focused }) => (
		<View style={focused ? iconStyle.on : iconStyle.off}>
			<AddIcon color={focused ? '#fff' : '#FFD428'} />
		</View>
	)
}

SettingsStack.path = ''
const ProfileStack = createStackNavigator(
	{
		Profile: ProfileScreen
	},
	config
)

ProfileStack.navigationOptions = {
	tabBarLabel: ' ',
	tabBarIcon: ({ focused }) => (
		<View style={focused ? iconStyle.on : iconStyle.off}>
			<ProfileIcon color={focused ? '#fff' : '#FFD428'} />
		</View>
	)
}

ProfileStack.path = ''

const tabNavigator = createBottomTabNavigator(
	{
		HomeStack,
		LinksStack,
		SettingsStack,
		ProfileStack
	},
	{
		tabBarOptions: {
			showLabel: false
		}
	}
)
const main = createSwitchNavigator(
	{
		splash: { screen: SplashScrenn },
		tab: { screen: tabNavigator },
		login: { screen: LoginScreen }
	},
	{
		initialRouteName: 'splash'
	}
)
tabNavigator.path = ''

export default main
const iconStyle = StyleSheet.create({
	on: {
		width: 34,
		height: 34,
		borderRadius: 17,
		backgroundColor: '#FF8900',
		alignItems: 'center',
		justifyContent: 'center'
	},
	off: {}
})
