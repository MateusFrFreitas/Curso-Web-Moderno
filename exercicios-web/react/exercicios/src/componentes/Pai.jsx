import React from 'react'
// import Filho from './Filho'
import { childrenWithProps } from '../utils/utils'

export default props =>
	<div>
		<h1>{props.nome} {props.sobrenome}</h1>
		<h2>Filhos</h2>
		<ul>
			{ childrenWithProps(props) }

			{/* {props.children} */}
			{/* <Filho nome="Pedro" sobrenome={props.sobrenome} />
			<Filho {...props} />
			<Filho nome="Carla" {...props} /> 
			<Filho {...props} nome="Carla" /> */}
		</ul>
	</div>