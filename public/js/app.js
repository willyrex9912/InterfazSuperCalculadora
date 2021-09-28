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

function enviarPeticionAPI(opr1,opr2,opr){
    let val1 = document.getElementById(opr1).value;
    let val2 = document.getElementById(opr2).value;
    var request = new XMLHttpRequest();
    request.open('POST','/calc');
    request.setRequestHeader('Content-Type','application/json');
    request.send(JSON.stringify({opr:opr,opr1:val1,opr2:val2}));
    request.addEventListener('load',()=>{
        alert('Peticion realizada.');
    });
    request.addEventListener('error',()=>{
        alert('Error al realizar peticion.');
    });
}
