const Eight = () => {
	const input = [1, 2, [3], [4, 5]];

  const result = input.flat();

	console.log('Exercicio 8:');
	console.log(result);

	return (
		<>
			<br />
			<strong>Retorno da tarefa 8: </strong>
			<span>{result}</span>
			<br />
			<br />
			<strong>
				Para ver a Array estruturada, verifique nos logs do console.
			</strong>
			<br />
		</>
	);
};

export default Eight;
