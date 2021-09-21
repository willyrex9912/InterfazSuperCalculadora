function operar(){
    let combo = document.getElementById("opr");
    let opcion = combo.options[combo.selectedIndex].value;
    if(opcion==1){
        alert("Sumando");
    }else if(opcion==2){
        alert("Restando");
    }else if(opcion==3){
        alert("Multiplicando");
    }else if(opcion==4){
        alert("Dividiendo");
    }else if(opcion==5){
        alert("Elevando a una potencia");
    }
}
