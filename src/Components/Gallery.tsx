import React from 'react'

export function  Profile(){
return (
    <div>
        <h1>i am profile component</h1>
    <img src="https://images.unsplash.com/photo-1611003228941-98852ba62227?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFieSUyMGRvZ3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" alt="" 
    style={{height:"300px",width:"300px"}}
    />
    </div>
)
}

export default function Gallery  ()  {
  return (
    <div>
        <h1>i am gallery component</h1>
        <Profile/>
    </div>
  )
}
