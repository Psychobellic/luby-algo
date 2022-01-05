const addAmountFromQuantity = (x: Number, y: String) => {
	var arr = [];
	for (let i = 0; i < x; i++) {
		arr[i] = y;
	}
	return arr;
};

const One = () => {
	let result = addAmountFromQuantity(3, 'a');
  console.log("Exercicio 1:");
  console.log(result);
  return (
		<>
			<br />
			<strong>Retorno da tarefa 1: </strong>
			<span>{result}</span>
			<br />
			<br />
			<strong>
				Para ver a Array estruturada, verifique nos logs do console.
			</strong>
			<br />
		</>
	);
}

export default One;   


