import React, { useState } from 'react'

function useLoading() {
  const[loading,setLoading]= useState(true);

  const startLoading=()=>setLoading(true);
  const stopLoding=()=>setLoading(false);

  return {
    loading,
    startLoading,
    stopLoding,
  }
}


export default useLoading
