import axios from 'axios';

// https://api.themoviedb.org/4/list/1?page=1
const AUTH_TOKEN =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ODdlOGVmMjE4OTg3MzBkZDJlNGE4NmMzYjQzMWE2MiIsInN1YiI6IjVmNjNkN2I4ODQ0NDhlMDAzOTY0ZTlhMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Wtu2oJrBrUWOKcOQzhNpp9As-LldDARUkaot28I9o9Y';

export default axios.create({
  baseURL: 'https://api.themoviedb.org/4/list/',
  headers: {Authorization: `Bearer ${AUTH_TOKEN}`},
});
