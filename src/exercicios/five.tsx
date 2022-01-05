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
			<h2>Retorno da tarefa 5: </h2>
			<p>{result}</p>
		</>
	);
}

export default Five;