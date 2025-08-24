import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { icons } from '@/constants/icons'

interface Props {
  placeholder: string;
  onPress?: () => void;
  value:string;
  onChangeText:(text:string)=>void;
}

const Searchbar = ({ placeholder, onPress,value,onChangeText }: Props) => {
  return (
    <View className='flex-row items-center rounded-3xl px-2 bg-white/10 border border-white/20'>
      <Image 
        source={icons.search} 
        className='size-5' 
        resizeMode='contain' 
        tintColor='#f9f7fa'
      />
      <TextInput 
        onPress={onPress} 
        placeholder={placeholder} 
        value={value}
        onChangeText={onChangeText} 
        placeholderTextColor="#f9f7fa"
        className='flex-1 ml-2 text-white'
      />
    </View>
  )
}

export default Searchbar

const styles = StyleSheet.create({})