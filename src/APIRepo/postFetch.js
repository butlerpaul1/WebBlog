//fetch the data from the server
const postFetch = (url, blog) => {
  const abortCont = new AbortController();

  setTimeout(() => {
    fetch(url, {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
      signal: abortCont.signal
    })
      .then(res => { //get the result from the api
        if (!res.ok) { // error coming back from server
          throw Error('could not create the blogs for that resource');
        }
        //return false to enable the add blog button
        return false
      }, 1000);

    // abort the fetch
    return () => abortCont.abort();

  })
}
export default postFetch;