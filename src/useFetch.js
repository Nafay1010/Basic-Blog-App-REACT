import { useState, useEffect } from "react";


const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(true)


    useEffect(()=>{
        setTimeout(()=>{
            fetch(url)
            .then(res=>{
                if(!res.ok){
                    throw Error('Resource NOT found!')
                }
                return res.json()
            })
            .then(data=>{
                setIsPending(false)
                setError(null)
                setData(data)
            })
            .catch(err=>{
                setIsPending(false)
                setData(null)
                setError(err.message)
            })  

        }, 1000)
    }, [url])
    return {data, error, isPending}
}
 
export default useFetch;