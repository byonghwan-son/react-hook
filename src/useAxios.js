import defaultAxios from 'axios';
import {useEffect, useState} from "react";

export const useAxios = (opts, axiosInstance = defaultAxios) => {
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: null
  })
  const [trigger, setTrigger] = useState(0)
  const refetch = () => {
    setState({
      ...state,
      loading: true
    })
    setTrigger(Date.now());
  }
  useEffect(() => {
    if(!opts.url) return;
    axiosInstance(opts).then(response => {
      setState({
        ...state,
        loading: false,
        data: response.data
      })
    })
      .catch(error => {
        setState({
          ...state,
          loading: false,
          error
        })
      })
  }, [trigger]);
  return {...state, refetch};
}