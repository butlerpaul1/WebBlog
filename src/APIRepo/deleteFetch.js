//delete a blog
const useDeleteFetch = (url, blog) => {
  const abortCont = new AbortController();

  setTimeout(() => {
    fetch(url, {
      method: 'DELETE',
      signal: abortCont.signal
    })
      .then(res => { //get the result from the api
        if (!res.ok) { // error coming back from server
          throw Error('could not create the blogs for that resource');
        }
      }, 1000);

    // abort the fetch
    return () => abortCont.abort();

  })
}
export default useDeleteFetch;