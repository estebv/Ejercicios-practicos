const calcular = () => {
const sBruto = parseFloat(document.getElementById('bruto').value);
const pSalud = parseFloat(document.getElementById('salud').value);
const pPension = parseFloat (document.getElementById('pension').value);
const horas = parseFloat (document.getElementById('horas').value);
const tarifa = parseFloat (document.getElementById('tarifa').value);

/*const dsalud = ((pSalud/100)*sBruto);
const dPension = ((pPension/100)*sBruto);

const sNeto = (sBruto - dPension - dsalud);*/

    if(horas > 40){
        const saldoHoras = ((horas - 40) * tarifa);
        const salario = sBruto + saldoHoras;
         document.getElementById('salario').innerHTML = salario.toFixed(2);
        }else { 
            document.getElementById('salario').innerHTML = sBruto.toFixed(2);

        }
    
    
/*ocument.getElementById('pSalud').innerHTML = dsalud.toFixed(2);
document.getElementById('pPension').innerHTML = dPension.toFixed(2);*/
    }
