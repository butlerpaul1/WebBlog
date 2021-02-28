import { useState, useEffect } from 'react';

//fetch the data from the server
const useFetch = (url) => {
  //function
  const [blogs, setBlogs] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  //run when on re-render
  useEffect(() => {
    const abortCont = new AbortController();

    setTimeout(() => {
      fetch(url, { signal: abortCont.signal })
        .then(res => { //get the result from the api
          if (!res.ok) { // error coming back from server
            throw Error('could not fetch the blogs for that resource');
          }
          return res.json();
        })
        .then(blogs => { // get the data from the result
          setBlogs(blogs);
          //once we have the data remove the loading message
          setIsLoading(false);
          setError(null);
        })
        .catch(err => {
          if (err.name === 'AbortError') {
            console.log('fetch aborted')
          } else {
            // auto catches network / connection error
            setIsLoading(false);
            setError(err.message);
          }
        })
    }, 1000);

    // abort the fetch
    return () => abortCont.abort();
  }, [url])

  return { blogs, isLoading, error };
}

export default useFetch;