import { ActivityIndicator, FlatList, Image, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import MovieCard from '@/components/MovieCard'
import { useRouter } from 'expo-router';
import useFetch from '@/services/useFetch';
import { fetchMovies } from '@/services/api';
import { icons } from '@/constants/icons';
import Searchbar from '@/components/SearchBarr';

const search = () => {

  const [searchQuery, setSearchQuery] = useState('')


  const { data: movies, loading, error, refetch: loadMovies, reset } =
    useFetch(() => fetchMovies({ query: searchQuery || "For" }), false);


  useEffect(() => {
    const timeOut = setTimeout(
      async () => {
        if (searchQuery.trim()) {
          await loadMovies()
        } else {
          reset()
        }
      },500)
      return()=>clearTimeout(timeOut)
  }, [searchQuery])

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
            <View className='w-full flex-row mt-20 justify-center items-center'>
              <Image source={icons.logo} className='w-12 h-10' />
            </View>
            <View className='my-5'>
              <Searchbar placeholder="Search for your movie"
                value={searchQuery}
                onChangeText={(text: string) => setSearchQuery(text)} />
            </View>

            {loading && (<ActivityIndicator size="large" color="#0000ff" className='my-3' />)}

            {error && (<Text className='text-red-500 px-5 my-3'>Error:{error.message}</Text>)}

            {!loading && !error && searchQuery.trim() && movies?.length > 0 && (
              <Text className='text-lg capitalize text-white font-bold mb-3'>
                Search results for:{' '}
                <Text className='text-purple-500'>{searchQuery}</Text>
              </Text>
            )}
          </>
        }
        ListEmptyComponent={
          !loading && !error?(
            <View className='mt-10 px-5'>
              <Text className='text-center text-gray-500'>{searchQuery.trim()?'No movies found from this name':'search for a movie'}</Text>
            </View>
          ):null
        }
      />
    </View>
  )
}

export default search