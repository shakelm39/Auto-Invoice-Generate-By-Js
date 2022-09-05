let btn = document.getElementById('productBtn');
let productTable = document.getElementById('productTable');
let items = document.getElementById("items");
let price = document.getElementById("price");
let qty = document.getElementById("qty");
	

btn.addEventListener('click', function(){
	
	//Total Tk
	let total = parseFloat(price.value) * parseFloat(qty.value);
	//New Row Create
 	let newRow = document.createElement('tr');
	//Table Row count for serial
 	let table =document.getElementById('productTable'), sumVal = 0;;
	let totalRowCount = table.rows.length+1;
 	//Items Serial Create
 	let newSl = document.createElement('td');
 		newSl.innerHTML=totalRowCount;
 		newRow.appendChild(newSl);
 	//Items Name Create
 	let newItems = document.createElement('td');
 		newItems.innerHTML=items.value;
 		newRow.appendChild(newItems);
 	//Price Create
 	let newPrice = document.createElement('td');
		newPrice.innerHTML=price.value;
 		newRow.appendChild(newPrice);
 	//Quantity Create
 	let newQty = document.createElement('td');
		newQty.innerHTML=qty.value;
 		newRow.appendChild(newQty);
	// Total Amount create
 	let newTotal = document.createElement('td');
		newTotal.innerHTML=total;
 		newRow.appendChild(newTotal);
 		productTable.appendChild(newRow);

 		//Total amount calculation
 		for (var i=0; i<totalRowCount; i++){
 			sumVal = sumVal+parseFloat(table.rows[i].cells[4].innerHTML);
 		}
		document.getElementById('subTotal').innerHTML = sumVal;
		//Discount Calcualtion
		var discount = document.getElementById("dis").value;
		var discounts =document.getElementById('discount');
		
		var totalDiscount = parseFloat(discount) + parseFloat(discounts.innerHTML);
		document.getElementById('discount').innerHTML = totalDiscount;
		//Total after Discount
		let totalSavings = sumVal-totalDiscount;
		document.getElementById('total').innerHTML = totalSavings;
		//Vat Calculation

		let vat = totalSavings *(5/100);
		document.getElementById('vat').innerHTML = vat;
		//grand total amount
		let grandTotal = totalSavings+vat;
		document.getElementById('granTotal').innerHTML =grandTotal;
		document.getElementById('savings').innerHTML =totalDiscount;
});

//Random invoice
function random(){
	let x = Math.floor((Math.random() * 1000) + 100055);
	document.getElementById("invc").value = x;
}

//print 


$(document).ready(function(){
	$("#printBtn").click(function(){
		$('.input-group').hide();
		$(this).hide();
		window.print();
	});
});

