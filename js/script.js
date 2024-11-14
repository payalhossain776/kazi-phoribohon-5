window.addEventListener('scroll', function(){

    const scrollBYPageAble =document.documentElement.scrollHeight -window.innerHeight;

   const scrollBYPage =window.scrollY;
   if(scrollBYPageAble === scrollBYPage){
   const scrolledBy = document.getElementById('first-scroll')
//    console.log('helll',scrolledBy);
   }  
})

// poribhon section
const allSeatBtn =document.getElementsByClassName('hello');
let count =0;

for(const allBtn of allSeatBtn){
    allBtn.addEventListener('click',function(e){
     

                               //  price550
       const ticketPrice =e.target.parentNode.parentNode.parentNode.parentNode.parentNode.childNodes[5].childNodes[3].childNodes[3].childNodes[0].innerText;
       const ticketPriceSell =parseInt(ticketPrice);
                               //  seat
                               const firstCount =getelementByidFOAdd('set-seat');
                               if(firstCount + 1 > 40){
                                  return;
                               }
     
                              //   price boking
       const oneSeatPrice =document.getElementsByClassName('price-one').innerText;
       const seatPerPrice =parseInt(oneSeatPrice);
       document.getElementById('price-one').innerText = ticketPriceSell;
                          
  
    const seatSeal =getelementByidFOAdd('set-seat');
      document.getElementById('set-seat').innerText=seatSeal + 1;

      const seatBooking =getelementByidFOAdd('seatBokingTO');
      document.getElementById('seatBokingTO').innerText= seatBooking - 1;
  
                                            //  total
                   totalCostSeatBoking(ticketPriceSell);
                   // grand-total-cost
        ubdateGrandTotal()
    })
}



