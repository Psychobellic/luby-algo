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
			<h2>Retorno da tarefa 10: </h2>
			<p>{result}</p>
		</>
	);
};

export default Ten;
