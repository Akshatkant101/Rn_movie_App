import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { icons } from '@/constants/icons'
interface Props{
  placeholder:string;
  onPress?:()=>void;
}
const Searchbar = ({placeholder,onPress}:Props) => {
  return (
    <View className='flex-row items-center rounded-full px-5 py-4'>
      <Image source={icons.search} className='size-5' resizeMode='contain' tintColor='#f9f7fa'/>
      <TextInput  onPress={onPress} placeholder={placeholder} value="" onChangeText={()=>{}} placeholderTextColor="#f9f7fa"
        className='flex-1 ml-2 text-white'
        />
    </View>
  )
}

export default Searchbar

const styles = StyleSheet.create({})