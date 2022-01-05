function checkIfEquals(a: Array<Number>, b: Array<Number>) {
  return JSON.stringify(a)===JSON.stringify(b) ? true : false
}

const Seven = () => {

	let result = checkIfEquals([1, 2, 3, 4], [1, 2, 3, 4]);
  let renderResult = result === true ?
    'true' : 'false';

	console.log('Exercicio 7:');
	console.log(result);

	return (
		<>
			<br />
			<strong>Retorno da tarefa 7: </strong>
			<span>{renderResult}</span>
			<br />
			<br />
			<strong>
				Para ver a Array estruturada, verifique nos logs do console.
			</strong>
			<br />
		</>
	);
};

export default Seven;
