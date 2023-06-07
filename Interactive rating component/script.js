const element= document.getElementsByClassName("rouded_button");


function first(){
    const element= document.getElementsByClassName("rouded_button");
    element[0].style.backgroundColor = 'red';
    let y = element[0].value;
    if((element[1].style.backgroundColor='rgb(255, 145, 0)')|| (element[2].style.backgroundColor='red')||(element[3].style.backgroundColor='red')||(element[4].style.backgroundColor='red')){
        element[1].style.backgroundColor = '#3f466b';
        element[2].style.backgroundColor = '#3f466b';
        element[3].style.backgroundColor = '#3f466b';
        element[4].style.backgroundColor = '#3f466b';
    }
    
}
function second(){
    const element= document.getElementsByClassName("rouded_button");
    element[1].style.backgroundColor = 'rgb(255, 145, 0)';
    let y = element[1].value;
    if((element[0].style.backgroundColor='red')|| (element[2].style.backgroundColor='red')||(element[3].style.backgroundColor='red')||(element[4].style.backgroundColor='red')){
        element[0].style.backgroundColor = '#3f466b';
        element[2].style.backgroundColor = '#3f466b';
        element[3].style.backgroundColor = '#3f466b';
        element[4].style.backgroundColor = '#3f466b';
    }
    
}
function third(){
    const element= document.getElementsByClassName("rouded_button");
    element[2].style.backgroundColor = 'red';
    let y = element[2].value;
    if((element[1].style.backgroundColor='rgb(255, 145, 0)')|| (element[2].style.backgroundColor='red')||(element[3].style.backgroundColor='red')||(element[4].style.backgroundColor='red')){
        element[0].style.backgroundColor = '#3f466b';
        element[1].style.backgroundColor = '#3f466b';
        element[3].style.backgroundColor = '#3f466b';
        element[4].style.backgroundColor = '#3f466b';
    }
    
}
function fourth(){
    const element= document.getElementsByClassName("rouded_button");
    element[3].style.backgroundColor = 'red';
    let y = element[3].value;
    if((element[1].style.backgroundColor='rgb(255, 145, 0)')|| (element[2].style.backgroundColor='red')||(element[0].style.backgroundColor='red')||(element[4].style.backgroundColor='red')){
        element[0].style.backgroundColor = '#3f466b';
        element[1].style.backgroundColor = '#3f466b';
        element[2].style.backgroundColor = '#3f466b';
        element[4].style.backgroundColor = '#3f466b';
    }

    
}
function fifth(){
    const element= document.getElementsByClassName("rouded_button");
    element[4].style.backgroundColor = 'red';
    let y = element[4].value;
    if((element[1].style.backgroundColor='rgb(255, 145, 0)')|| (element[2].style.backgroundColor='red')||(element[0].style.backgroundColor='red')||(element[3].style.backgroundColor='red')){
        element[0].style.backgroundColor = '#3f466b';
        element[1].style.backgroundColor = '#3f466b';
        element[2].style.backgroundColor = '#3f466b';
        element[3].style.backgroundColor = '#3f466b';
    }

    
}
