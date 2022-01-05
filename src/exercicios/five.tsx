const Five = () => {
 
  const removeFromArr = (arr: Array<Number>, item1: Number, item2: Number) => {
    for ( let i = 0; i < arr.length; i++){
      if (arr[i] === 5){
        arr.splice(i,1);
      } else if (arr[i] === 3){
        arr.splice(i,1);
      }
    }
    return arr;
  }

  let result = removeFromArr([5, 4, 3, 2, 5], 5, 3);
  console.log(result);

  return (
		<>
			<br />
			<strong>Retorno da tarefa 5: </strong>
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

export default Five;