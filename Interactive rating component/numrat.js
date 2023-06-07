

    
const elements= document.getElementsByClassName("rouded_button");
function checkrating(){
    var values;
    var x;
    if(elements[0].style.backgroundColor == 'red'){
         values= elements[0].value;
         x=localStorage.setItem('value',values);
         
    }else if(elements[1].style.backgroundColor=='rgb(255, 145, 0)'){
        values=elements[1].value; 
        x=localStorage.setItem('value',values);  
       
    }else if(elements[2].style.backgroundColor=='red'){
        values=elements[2].value;
        
        x=localStorage.setItem('value',values);

     } else if(elements[3].style.backgroundColor=='red'){
            values=elements[3].value;
            
            x=localStorage.setItem('value',values);
        
    }else if(elements[4].style.backgroundColor=='red'){
        values=elements[4].value;
        x=localStorage.setItem('value',values);
    }
    return x;
}

function valueselected(){

    value=localStorage.getItem('value');
    document.getElementById("rating").innerHTML= "you selected"+ " "+value+ " "+"out of 5" ;
    
}
