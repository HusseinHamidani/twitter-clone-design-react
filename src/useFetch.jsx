import { useEffect, useState } from "react"

const useFetch = (trendsUrl , tweetsUrl)=>{
    const [trendsdata , setTrendsdata] = useState(null)
    const [loading , setLoading] = useState(true)
    const [error , setError] = useState(true)
    const [tweetsData , setTweetsData ] = useState(null)
    const [tweetloading , setTweetLoading ] = useState(true)
    const [tweetError , setTweetError ] = useState(true)
    useEffect(()=>{
      fetch(trendsUrl)
      .then((res) =>{
          if(!res.ok){
              throw Error("there is something wroing with fetching data")
          }else{
              return res.json()
          }
      }) 
      .then((data) =>{
          setLoading(false)
          setTrendsdata(data)
      })
      .catch((err)=>{
          setLoading(false)
          setError("there is something woring with fetching data")
      })
      fetch(tweetsUrl)
      .then((res) =>{
          if(!res.ok){
              throw Error("there is something woring with fetching tweets data")
          }else{
              return res.json()
          }
      })
      .then((data) =>{
          setTweetsData(data)
          setTweetLoading(false)
      })
      .catch((tweetErr)=>{
          setLoading(false)
          setError("there is something wroing with fetch data")
      })

    },[trendsUrl , tweetsUrl ])
    return {trendsdata , loading , error , tweetsData , tweetloading , tweetError}
}
export default useFetch