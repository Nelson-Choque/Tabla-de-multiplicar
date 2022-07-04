
const tablaMultiplicar= require('./moduls/tabla-multiplicar')

// require('colors');

const yargs= require('yargs');
const { boolean } = require('yargs');

const yarg1 = yargs
                .option('b',{
                    alias: 'base',
                    type: "number",
                    demandOption: true
                    })
                .option('l',{
                    alias: 'limite',
                    type: "number",
                    demandOption: true
                    })
                .option('li',{
                    alias: '--listar',
                    type: "boolean",
                    default: false,
                    demandOption: false
                    })
                .argv


tablaMultiplicar.tablaMultiplicar(yarg1.b,yarg1.l,yarg1.li)
    .then(archivo=> console.info(archivo + " creado."))
    .catch( error => console.error(`error : ${error}`))
    


// console.log("hola");
// console.info("hola".green);
// console.error("hola".red);

