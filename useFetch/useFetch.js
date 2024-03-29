import { useEffect, useRef, useState } from "react"


export const useFetch = (url) => {

    const isMounted = useRef(true);
   const [state, setstate] = useState({data: null, loading: true, error: null})

   useEffect(() => {
     return () => {
      isMounted.current = false;
     }
   }, [])


   useEffect(() => {
    setstate( { 
              
        loading: true,
        error: null,
        data: null

    })

      fetch(url)
      .then(resp => resp.json())
      .then(data => {
        if(isMounted.current){
          setstate( { 
              
            loading: false,
            error: null,
            data

        })
        } else{console.log('no se llamo al componente')}
       
      })
   }, [url])


   return state;
}
