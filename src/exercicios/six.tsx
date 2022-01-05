const Six = () => {
	const original = [1, 2, 3, 3, 2, 4, 5, 4, 7, 3];
    let temp = new Set(original);
    let result = Array.from(temp)
    console.log(result);
  
	return (
		<>
			<h2>Retorno da tarefa 6: </h2>
			<p>{result}</p>
		</>
	);
};

export default Six;
