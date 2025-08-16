import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

interface Movie {
  Title: string;
  Year: string;
  Poster: string;
  imdbID: string;

}

interface MovieCardProps {
  movie: Movie;
}

    const MovieCard: React.FC<MovieCardProps> = ({ movie}) => {
  return (
    <Link href={`/movies/${movie.imdbID}`} asChild>
      <TouchableOpacity className=" flex-1 mb-5 w-[48%]">
        <Image
          source={{ uri: movie.Poster }}
          className="w-52 h-60 rounded-lg"
          resizeMode="cover"
        />
        <Text
          className="text-white  mt-2 text-sm font-semibold"
          numberOfLines={1}
        >
          {movie.Title}
        </Text>
        <Text className="text-gray-300 text-xs">{movie.Year}</Text>
      </TouchableOpacity>
    </Link>
  );
};

export default MovieCard;

const styles = StyleSheet.create({});
