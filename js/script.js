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
       count +=1;
                               //  price550
       const ticketPrice =e.target.parentNode.parentNode.parentNode.parentNode.parentNode.childNodes[5].childNodes[3].childNodes[3].childNodes[0].innerText;
       const ticketPriceSell =parseInt(ticketPrice);
                               //  40seat
       const seat40bokingSell =e.target.parentNode.parentNode.parentNode.parentNode.parentNode.childNodes[5].childNodes[1].childNodes[1].childNodes[5].childNodes[3].childNodes[0].innerText
     
                              //   price boking
       const oneSeatPrice =document.getElementById('price-one').innerText;
       const seatPerPrice =parseInt(oneSeatPrice);
       document.getElementById('price-one').innerText = ticketPriceSell;
      
                              //  total
       const oneSeatPrice5 =document.getElementById('total-cost-seat boking').innerText;
       const seatPerPrice5 =parseInt(oneSeatPrice5);
       document.getElementById('total-cost-seat boking').innerText = seatPerPrice5 + ticketPriceSell;

                                 // seat count start
       if(parseInt(seat40bokingSell)-1 < 0){
        return;
     }
     document.getElementById('seatBokingTO').innerText = parseInt(seat40bokingSell)-1;
     setToInnerText('set-seat', count)
                                //   seat countend
    })
}


