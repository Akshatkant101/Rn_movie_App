export const OMDB_CONFIG={
  BASE_URL: "http://www.omdbapi.com",
  API_KEY: process.env.EXPO_PUBLIC_MOVIE_API_KEY,
  header:{
    accept: "application/json",
    authorization: `Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_KEY}`
  }
} 
export const fetchMovies =async({query}:{query:string})=>{
    const endpoint=query?`${OMDB_CONFIG.BASE_URL}/search/movie?query=${encodeURIComponent(query)}&api_key=${OMDB_CONFIG.API_KEY}`:`${OMDB_CONFIG.BASE_URL}/discover/movie?sort_by=popularity.desc&api_key=${OMDB_CONFIG.API_KEY}`
    const response=await fetch(endpoint,{
        method: 'GET',
        headers:OMDB_CONFIG.header
    })
    if(!response.ok){
        throw new Error(`Failed to fetch movies: ${response.statusText}`)
    }
    const data=await response.json()
    return data.results
}