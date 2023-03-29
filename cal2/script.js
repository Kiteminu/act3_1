var op="no"

function setValue(calc, s) {
	op=s;
			 calc.display.value+=s
			 }	
function replaceValue(calc, s) {
   		op=s;
		calc.display.value=s
		 }	
	function calcular(calc) {
		if (calc.display.value.includes("(") && !calc.display.value.includes(")")){
			calc.display.value+=')';
		}
			 if (op=="no" || syst!="deci") {
				calc.display.value="NO OPERACIONES";
				}
			 else if(calc.display.value.includes("!")) {
		
				size = calc.display.value.length;
				n = Number(calc.display.value.substring(0, size-1));
				f = 1;
				
				for(i = 2; i <= n; i++)
					f = f*i;
				calc.display.value = f;
				op="no";
			}
			
			else if(calc.display.value.includes("%")) {
				
				size = calc.display.value.length;
				n = Number(calc.display.value.substring(0, size-1));
				calc.display.value = n/100; op="no";
			}
		
			else
				calc.display.value = eval(calc.display.value); op="no";
		}
	function backspace(calc) {											
			size = calc.display.value.length;
			calc.display.value = calc.display.value.substring(0, size-1);
			}
	function limpiar(calc) {
			 calc.display.value = '';
			 op="no";
			 syst="deci";
			 }
function binary(calc){
	if (parseInt(calc.display.value)<=0 || parseInt(calc.display.value)>=0){
		
      let decimal = parseInt(calc.display.value);
      let binary = "";
      while (decimal > 0) {
         if (decimal % 2 == 1) {
            binary = "1" + binary;
         } else {
            binary = "0" + binary;
         }
         
         decimal = Math.floor(decimal / 2);
      }
      calc.display.value = binary;
	} else {
		calc.display.value = "NO ES NUMERO"
	}
}

function octal(calc){
	if (parseInt(calc.display.value)<=0 || parseInt(calc.display.value)>=0){
		var memenumber=parseInt(calc.display.value);
		var GFG_Var2 = memenumber.toString(8);
		calc.display.value = GFG_Var2;
	  } else {
		  calc.display.value = "NO ES NUMERO"
	  }
}

function hex(calc){
	if (parseInt(calc.display.value)<=0 || parseInt(calc.display.value)>=0){
		var memenumber=parseInt(calc.display.value);
		var GFG_Var2 = memenumber.toString(16);
		calc.display.value = GFG_Var2;
	  } else {
		  calc.display.value = "NO ES NUMERO"
	  }
}