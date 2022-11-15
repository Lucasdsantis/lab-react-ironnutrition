import { useState, useEffect } from 'react';

export function Search(props) {
 
 function handleFilter(e) {
    props.filtredFunction((prevState) => {
        
        
         if(prevState.length === 0){
            return props.allFoods.filter((currentElement) => {
                return currentElement.name.toLowerCase().includes(e.target.value.toLowerCase()); 
            });
            } else {
            return prevState.filter((currentElement) => {
                return currentElement.name.toLowerCase().includes(e.target.value.toLowerCase());
        });
        }
        
     
    })
        
        
        if (e.target.value ===""){
        props.filtredFunction(props.allFoods);
        return;
    }    

    return(
    <div>
        <input type="text" onChange={handleFilter}/>
      
    </div>
 )}; 

}

