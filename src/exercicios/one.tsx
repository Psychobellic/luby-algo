const addAmountFromQuantity = (x: Number, y: String) => {
	var arr = [];
	for (let i = 0; i < x; i++) {
		arr[i] = y;
	}
	return arr;
};

const One = () =>{
  console.log("Exercicio 1:");
  console.log(addAmountFromQuantity(3, 'a'));
  return (
		<>
			<h1>Check console for results</h1>
		</>
    
	);
  
}

export default One;   


