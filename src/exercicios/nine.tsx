const Nine = () => {

  function splitArr(array: Array<Number>, interval: number){
    let newArr = [];

    for (let i = 0; i < array.length; i++){
      const splitted = array.slice(i, i + interval);
      newArr.push(splitted);
    }

    return newArr;

  }

	const result = splitArr([1, 2, 3, 4, 5], 2);
	console.log('Exercicio 9:');
	console.log(result);

	return (
		<>
			<h2>Retorno da tarefa 9: </h2>
			<p>{result}</p>

		</>
	);
};

export default Nine;
