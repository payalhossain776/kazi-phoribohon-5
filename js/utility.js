
function setToInnerText(elemnetId, value){
    const element=document.getElementById(elemnetId).innerText=value;
    const PricebyElement2 =parseInt(element);
    return PricebyElement2; 
}
               //grand-total 
function ubdateGrandTotal(catagory){
   const totalcostelementByid= getelementByidFOAdd('total-cost-seat-boking');
 if(catagory === undefined){
   const totalcostelementByid= getelementByidFOAdd('total-cost-seat-boking');

   document.getElementById('grand-cost-seat-boking').innerText =totalcostelementByid;
 }
 else{
   const coponCodeElement =document.getElementById('copon-code').value;
   if(coponCodeElement === 'copon-code'){
     const discount = totalcostelementByid*0.2;
     document.getElementById('grand-cost-seat-boking').innerText =totalcostelementByid - discount;
   }
   else{
      alert("hay")
   }
 }
   
}

            //   total
function totalCostSeatBoking(value){
    const totalcostelementByid= getelementByidFOAdd('total-cost-seat-boking');
    const priceTotal =totalcostelementByid + parseInt(value);
    document.getElementById('total-cost-seat-boking').innerText=priceTotal;
 }
                  // innerText
 function getelementByidFOAdd( elementId){
    const element =document.getElementById(elementId).innerText;
   const PricebyElement =parseInt(element);
   return PricebyElement;
}