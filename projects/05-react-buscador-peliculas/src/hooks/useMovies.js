import { searchMovies } from '../services/movies'
import { useRef, useState, useCallback } from 'react'

export function useMovies ({ search, sort }) {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const previusSearch = useRef(search)  

  const getMovies = useCallback (async ({ search }) => {
      if (search === previusSearch.current) return
      
      try {
        setLoading(true)
        setError(null)
        previusSearch.current = search
        const newMovies = await searchMovies({ search })
        setMovies(newMovies)
      } catch (e) { 
        setError(e.message)
      } finally {
        setLoading(false)
      }
  }, [])

  const sortedMovies = sort
    ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
    : movies 

    console.log('render', sortedMovies)

   return { movies: sortedMovies, getMovies, loading }
}