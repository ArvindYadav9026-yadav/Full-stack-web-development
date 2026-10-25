import React from 'react'

function withAuth(component) {
  return  function(props){
    let isLoggedIn=false;
    if(isLoggedIn){
    return <component {...props}/>
}
return <p>Please login to acees the dashboaed</p>;
  };
}

export default withAuth
