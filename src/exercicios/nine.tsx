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
			<br />
			<strong>Retorno da tarefa 9: </strong>
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

export default Nine;
