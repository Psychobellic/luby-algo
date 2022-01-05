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
			<h2>Retorno da tarefa 3: </h2>
			<p>{filtered}</p>
		</>
	);
};

export default Three;
