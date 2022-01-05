const Four = () => {

  let input = [
		['c', 2],
		['d', 4],
	];

  let result = Object.fromEntries(input);
	console.log('Exercicio 4:');
  console.log(result)
	return (
		<>
			<h2>Retorno da tarefa 4: </h2>
			<p>{JSON.stringify(result)}</p>
		</>
	);
};

export default Four;
