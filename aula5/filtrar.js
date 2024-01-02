const clientes = require("./clientes.json");

function filtApt(lista){
    return lista.filter((cliente) => {
        return (
            cliente.endereco.apartamento === true &&
            !cliente.endereco.hasOwnProperty("complemento")
            );
    });
};

console.log(filtApt(clientes));