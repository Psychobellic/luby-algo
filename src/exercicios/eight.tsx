const Eight = () => {
	const input = [1, 2, [3], [4, 5]];

  const result = input.flat();

	console.log('Exercicio 8:');
	console.log(result);

	return (
		<>
			<h2>Retorno da tarefa 8: </h2>
			<p>{result}</p>
		</>
	);
};

export default Eight;
