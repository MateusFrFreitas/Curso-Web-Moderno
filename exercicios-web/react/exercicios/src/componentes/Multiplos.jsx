import React from 'react'

export const BoaTarde = props => <h1>Boa tarde {props.nome}!</h1> // pode ser sem o export

export const BoaNoite = props => <h1>Boa noite {props.nome}!</h1>

// export { BoaTarde, BoaNoite }
export default { BoaTarde, BoaNoite }