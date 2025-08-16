import Searchbar from "@/components/SearchBarr";
import { icons } from "@/constants/icons";
import {
  ActivityIndicator,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useRouter } from "expo-router";
import useFetch from "@/services/useFetch";
import { fetchMovies } from "@/services/api";
import MovieCard from "@/components/MovieCard";

export default function Index() {
  const router = useRouter();
  const { data: movies, loading: moviesloading, error: moviesError } =
    useFetch(() => fetchMovies({ query: "For" }));

  return (
    <View className="flex-1 bg-[#340a52] px-5">
      <Image source={icons.logo} className="w-12 h-10 mt-20 mb-5 mx-auto" />

      {moviesloading ? (
        <ActivityIndicator
          size="large"
          color="#0000ff"
          className="mt-10 self-center"
        />
      ) : moviesError ? (
        <Text className="text-white">Error: {moviesError?.message}</Text>
      ) : (
        <View className="flex-1 mt-5">
          <Searchbar
            onPress={() => router.push("/search")}
            placeholder="Search for your movie"
          />
          <Text className="text-lg text-white font-bold mt-5 mb-3">
            Latest Movies
          </Text>

          <FlatList
            data={movies}
            keyExtractor={(item, index) => item.imdbID || index.toString()}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            persistentScrollbar={false} // Android specific
            overScrollMode="never"
            columnWrapperStyle={{ justifyContent: "space-between" }}
            renderItem={({ item }) => (
              <MovieCard movie={item}/>
            )}
          />
        </View>
      )}
    </View>
  );
}
