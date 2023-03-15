import { useEffect, useState } from "react"

// return data of any function
const useData = (initialState, fn) => {
  const [data, setData] = useState([initialState])

  const getData = async () => {
    const APIdata = await fn()
    setData(APIdata)
  }

  useEffect(() => {
    getData()
  }, [])

  return { data }
}

export default useData
