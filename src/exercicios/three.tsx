const Three = () => {

  const arr = [1, 2, '', undefined];
  const filtered = arr.filter((item) => {
    if(item !== '' || undefined || null || 0 || false){
      return item;
    }
  });
	
	console.log('Exercicio 3:');
	console.log(filtered);

	return (
		<>
			<br />
			<strong>Retorno da tarefa 3: </strong>
			<span>{filtered}</span>
			<br />
			<br />
			<strong>
				Para ver a Array estruturada, verifique nos logs do console.
			</strong>
			<br />
		</>
	);
};

export default Three;
