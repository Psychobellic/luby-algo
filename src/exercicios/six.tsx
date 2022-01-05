const Six = () => {
	const original = [1, 2, 3, 3, 2, 4, 5, 4, 7, 3];
    let temp = new Set(original);
    let result = Array.from(temp)
    console.log(result);
  
	return (
		<>
			<br />
			<strong>Retorno da tarefa 6: </strong>
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

export default Six;
