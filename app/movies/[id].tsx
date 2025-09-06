import { Image, ScrollView, Text, View } from 'react-native'
import React from 'react'
import { router, useLocalSearchParams } from 'expo-router'
import useFetch from '@/services/useFetch';
import { fetchMoviesDetails } from '@/services/api';
import { icons } from '@/constants/icons';



const Deatils = () => { 
const {id}=useLocalSearchParams();
const{data:movie,loading}=useFetch(()=>fetchMoviesDetails(id as string));

  return (
    <View className='bg-[#340a52] flex-1'>
      <ScrollView contentContainerStyle={{paddingBottom:80}}>
        <View>
           <Image 
             source={{uri: movie?.Poster && movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300x450?text=No+Image'}}
             className='w-full h-[400px]' resizeMode='stretch'/>
        </View>
        <View className='flex-col items-start justify-center mt-5 px-5'>
          <Text className='text-white font-bold text-xl'>
            {movie?.Title}
          </Text>
          <View className='flex-row items-center bg-purple-100/10 px-2 py-1 rounded-3xl gap-x-1 mt-2'>
              <Image source={icons.star} className='size-4'/>
              <Text className='text-white font-bold text-sm'>
                  {(movie?.imdbRating)}/10
              </Text>
          </View>
          <View className='flex-row items-center gap-x-1 mt-2'>
              <Text className='text-purple-300 text-sm'>{movie?.Year}</Text>
              <Text className='text-purple-300 text-sm'>{movie?.Genre}</Text>
          </View>
          <View className='flex-row items-center gap-x-1 mt-2'>
              <Text className='text-purple-300 text-sm'>{movie?.Language}</Text>
          </View>
          <View className='flex-row items-center gap-x-1 mt-2'>
              <Text className='text-purple-300 text-sm'>{movie?.Plot}</Text>
          </View>
          <View className='bg-purple-200 p-4 w-full items-center justify-center mt-12 rounded-3xl'>
            <Text className='text-purple-500 text-3xl'
            onPress={router.back}
            >
              ⬅️   Go back
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default Deatils

