function invertArr(arr: Array<Number>) {
	const invertedArr = [];

	for (let i = 0; i < arr.length; i++) {
		invertedArr[i] = arr[arr.length - i - 1];
	}
  return invertedArr;
}

const Two = () => {
	let result = invertArr([1, 2, 3, 4]);
	console.log("Exercicio 2:");
	console.log(result);

	return (
		<>
			<br />
			<strong>Retorno da tarefa 2: </strong>
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

export default Two;
