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
			<h2>Retorno da tarefa 7: </h2>
			<p>{renderResult}</p>
		</>
	);
};

export default Seven;
