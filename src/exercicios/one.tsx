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
			<h2>Retorno da tarefa 1: </h2>
			<p>{result}</p>
		</>
	);
}

export default One;   


