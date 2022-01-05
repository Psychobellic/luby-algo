const Four = () => {

  let input = [
		['c', 2],
		['d', 4],
	];

  let result = Object.fromEntries(input);
  console.log(result)
	return (
		<>
			<br />
			<strong>Retorno da tarefa 4: </strong>
			<span>{JSON.stringify(result)}</span>
			<br />
			<br />
			<strong>
				Para ver a Array estruturada, verifique nos logs do console.
			</strong>
			<br />
		</>
	);
};

export default Four;
