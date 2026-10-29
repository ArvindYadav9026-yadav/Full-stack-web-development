import React, { memo } from 'react'

// function ChildComponent() {
//     console.log("child component re-render");
//   return (
//     <div>
//       ChildComponent
//     </div>
//   )
// }

// export default ChildComponent
// import React from 'react'

const ChildComponent =memo(function({printHello}){
    console.log("child")
    return(
     <div>ChildComponent
         <button onClick={printHello}>print Hello in console</button>
         </div>
    )
})

export default ChildComponent;

