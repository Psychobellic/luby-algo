const Ten = () => {
	// [6, 8], [8, 9]
	function findMatch(a: Array<Number>, b: Array<Number>) {
    const intersection = a.filter(element => b.includes(element));
    return intersection;
  }

  const result = findMatch([6, 8], [8, 9]);

	
	console.log('Exercicio 10:');
	console.log(result);

	return (
		<>
			<br />
			<strong>Retorno da tarefa 10: </strong>
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

export default Ten;
