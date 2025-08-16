import { FlatList, Image, Text, View } from 'react-native'
import React from 'react'
import MovieCard from '@/components/MovieCard'
import { useRouter } from 'expo-router';
import useFetch from '@/services/useFetch';
import { fetchMovies } from '@/services/api';
import { icons } from '@/constants/icons';
import Searchbar from '@/components/SearchBarr';

const search = () => {
  const router = useRouter();
  const { data: movies, loading: moviesloading, error: moviesError } =
    useFetch(() => fetchMovies({ query: "For" }));

  return (
    <View className="flex-1 bg-[#340a52] px-5">
      <FlatList 
        data={movies}
        renderItem={({ item }) => <MovieCard movie={item} />}
        keyExtractor={(item) => item.imdbID.toString()}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingVertical: 10 }}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        ListHeaderComponent={
          <>
          <View className='w-full flex-row mt-20 justify-center items-center'><Image source={icons.logo} className='w-12 h-10'/></View>
          <View className='my-5'><Searchbar placeholder="Search for your movie"/></View>
          </>
        }
      />
    </View>
  )
}

export default search