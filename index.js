let elem = ''; 
let operation = "";
const insert = (sym) => {
    elem = document.getElementsByClassName('input-field')[0];
    if (!isFinite(sym) && sym !== '.') {
        if(!operation){
            operation = ` ${sym} `;
            elem.value +=  ` ${sym} `;
        }
    } else {
         elem.value += sym;
    }
    

}
const clean = () => {
    elem.value = "";
}
const back = () => {
    elem.value = elem.value.slice(0, -1);
}

const equal = (param) => {
    let finish = '';
    if (operation){
        finish = elem.value.split(operation);
    }
    if (param){
        if(finish[1] && finish[1] > 0){
            finish[1] = `-${finish[1]}`;
            elem.value = `${finish[0]}${operation}${finish[1]}`;
        }else if (elem.value > 0){
            elem.value = `-${elem.value}`;
        }
    }else{
    switch(operation){
        case ' + ':
            elem.value = parseFloat(finish[0]) + parseFloat(finish[1]);
            break;
        case ' - ':
            elem.value = parseFloat(finish[0]) - parseFloat(finish[1]);
            break;
        case ' * ':
            elem.value = parseFloat(finish[0]) * parseFloat(finish[1]);
            break;
        case ' / ':
            elem.value = parseFloat(finish[0]) / parseFloat(finish[1]);
            break;
        case ' % ':
            elem.value = parseFloat(finish[0]) / 100 * parseFloat(finish[1]);
            break;
        case ' % ':
            elem.value = parseFloat(finish[0]) / 100 * parseFloat(finish[1]);
            break;
        default:
            elem.value = " ";
            break;
        }
        operation = "";
    }
    }
