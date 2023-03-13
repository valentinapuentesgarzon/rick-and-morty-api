import { useEffect, useState } from "react"
import Character from "./Character"
function Characterlist() {
    const [character, setcharacter] = useState([])
    useEffect(()=>{
        async function fecthdata () {
            const response = await fetch("https://rickandmortyapi.com/api/character",)
            const data = await response.json();
            setcharacter(data.results)
        }
        fecthdata();
    },[])
  return(
    <div id="main-container">
        {
            character.map((character)=>{
                return(
                    <Character key={character.id} character={character}/>
                )
            })
        }
    </div>
  )  
}

export default Characterlist