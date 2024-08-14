import { useState } from "react"


function SingleBot({Data,setArmy,army,canBeRemoved,index}) {
	const [isClicked,setIsClicked]=useState(false)
		function addToArmy(newData) {
			setArmy((prevData)=>[...prevData,newData])
			setIsClicked(true)
		}
		function removeFromArmy(index){
			const theArmy=[...army]
			theArmy.splice(index,1)
			setArmy(theArmy)
				
		
		}
  return (
	<div>
		<img src={Data.avatar_url}/>
		<h2>{Data.name}</h2>
		{canBeRemoved?<button onClick={()=>removeFromArmy(index)}>REMOVE</button>:isClicked?"":<button onClick={()=>addToArmy(Data)}>Enlist</button>}

	</div>
  )
}

export default SingleBot