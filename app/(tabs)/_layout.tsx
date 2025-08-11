import { Image, ImageBackground, Text, View, } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { icons } from '@/constants/icons'

const TabIcons = ({focused,icon,title}:any) => {
    if(focused){
    return (
        <ImageBackground className='flex gap-1 bg-purple-400 flex-row overflow-hidden rounded-full  flex-1 justify-center items-center w-full min-w-[10vh] min-h-12  mt-4'>
            <Image source={icon} className='size-4' />
            <Text className=' capitalize'>{title}</Text>
        </ImageBackground>
    )}
    return(
        <View className='size-full justify-center items-center mt-4 rouded-full'>
            <Image source={icon} tintColor='#FAF7F3' className='size-5'/>
        </View>
    )
}
const _layout = () => {
    return (
        <Tabs
        screenOptions={{tabBarShowLabel:false,
            tabBarItemStyle:{
                width:'100%',
                height:'100%',
                justifyContent:'center',
                alignItems:'center',
            },
            tabBarStyle:{
                backgroundColor:'#280A3E',    
            }
        }}
        >
            <Tabs.Screen name='index' options={{
                title: 'home', headerShown: false,
                tabBarIcon: ({ focused }) => (
                    <TabIcons focused={focused} icon={icons.home} title="home" />
                )
            }} />
            <Tabs.Screen name='search' options={{
                title: 'Search', headerShown: false,
                tabBarIcon: ({ focused }) => (
                    <TabIcons focused={focused} icon={icons.search} title="Search" />
                )
            }} />
            <Tabs.Screen name='saved' options={{
                title: 'Saved', headerShown: false,
                tabBarIcon: ({ focused }) => (
                    <TabIcons focused={focused} icon={icons.save} title="Saved" />
                )
            }} />
            <Tabs.Screen name='profile' options={{
                title: 'Profile', headerShown: false,
                tabBarIcon: ({ focused }) => (
                    <TabIcons focused={focused} icon={icons.person} title="Profile" />
                )
            }} /> 
        </Tabs>
    )
}

export default _layout

