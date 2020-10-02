import { ADD_CONTATO } from "./contatos-actions";
import ContatoModelo from '../modelo/ContatoModelo'

const estadoInicial = {
    contatos: []
}

export default (estado = estadoInicial, action) => {

    switch (action.type) {
        case ADD_CONTATO:
            const contato = new ContatoModelo(new Date().getUTCMilliseconds(), action.dadosContato.nomeContato, action.dadosContato.numeroContato, action.dadosContato.imagemURI)
            return {
                contatos: estado.contatos.concat(contato)
            }

        default:
            return estado;
    }
}