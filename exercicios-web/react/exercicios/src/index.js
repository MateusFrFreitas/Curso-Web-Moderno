import React from 'react'
import ReactDOM from 'react-dom'

import Pai from './componentes/Pai'
import Filho from './componentes/Filho'

ReactDOM.render(
	<div>
		<Pai nome="Paulo" sobrenome="Silva">
			{/* Como passo os componentes Filhos aqui? */}

			<Filho nome="Pedro" />
			<Filho nome="Paulo" />
			<Filho nome="Carla" />		
		</Pai>
	</div>
, document.getElementById('root'))

// import Saudacao from './componentes/Saudacao'

// ReactDOM.render(
// 	<div>
// 		<Saudacao tipo="Bom dia" nome="João" />
// 	</div>
// , document.getElementById('root'))

/*
// import BoaTarde, { BoaNoite } from './componentes/Multiplos' // não pode letra minúscula "BomDia"
// import Multi from './componentes/Multiplos' // não pode letra minúscula "BomDia"
// import { BoaTarde, BoaNoite } from './componentes/Multiplos' // não pode letra minúscula "BomDia"
import Multi, { BoaNoite } from './componentes/Multiplos' // não pode letra minúscula "BomDia"

ReactDOM.render(
	<div>
		<Multi.BoaTarde nome="Ana" />
		<BoaNoite nome="Bia" />
	</div>
	,document.getElementById('root'))
*/