//Required abilities of a calculator:
//1. accept user inputs of number, operator, another number
//2. should accept decimal numbers
//3. store inputs
//4. recognize inputs and perform calculations
//5. return a result

//Optional features:
//6. should accept longer arithmetic operations
//7. display all inputs as it is being entered
//8. store previous total as start of next operation
//9. clear button should clear all enteries
//10. should prevent invalid inputs (operators next to each other, two decimal points)

const keys = document.querySelector(".calculator-buttons");
	keys.addEventListener("click", event => {
		const {target} = event; 
		const {value} = target;
		if(!target.matches("button")){
			return;
		}else{
			calculator.parseInput(value)
		}
	});

	const calculator = {
		displayText: "0",
		prevTotal: null,

		parseInput(value){
			switch(value){
			case "=": 
				this.calcAnswer(this.displayText)
				break;
			case "DEL": 
				this.deleteOne()
				break;
			case "AC": 
				this.clearAll()
				break;
			case ".":
				if(this.displayText === 0){
					this.addText("0.")
				}
				else{
					this.addText(value)
				}
				break;
			default:
				this.addText(value)
				break;
			}
		},

		addText(value){
			if(this.displayText === "0"){
				this.displayText = ""
			}else if(this.prevTotal !== null){
				this.displayText = this.prevTotal
				this.prevTotal = null 
			}
			if(isNaN(+(value)) && isNaN(+(this.displayText))){
				if(isNaN(this.displayText.slice(-1))){
					return;
				}

			}
			this.displayText += value
			this.outputText(this.displayText)
		},

		outputText(text){
			document.querySelector(".calculator-screen").value = text 
		},

		calcAnswer(equation){
			let result = Function("return " + equation)()
			this.outputText(result)
		},

		clearAll(){
			this.displayText = '0',
			this.prevTotal = null,
			this.outputText(this.displayText)
		}

		// deleteOne(){
		// 	this.displayText = this.outputText.slice(0,-1),
		// 	// this.prevTotal = null,
		// 	// this.outputText = this.outputText.slice(0, -1)
		// }


	}

	