
const fs = require('fs');


const tablaMultiplicar= (base,limite,listar)=>{

    return new Promise(  (resolve,reject) =>{

        let resultado = "";

        for(let i=1; i<=limite;i++){
    
            resultado += `${base} x ${i} = ${base * i} \n`;
    
        }
        
        (listar===true)?console.log(resultado):undefined

        let nombreArchivo = `tabla_del_${base}.txt`;
        fs.writeFileSync(`./txt/${nombreArchivo}`,(""+resultado));
    
        resolve(nombreArchivo) 
        
    } )
}


module.exports = {

    tablaMultiplicar,
}
















