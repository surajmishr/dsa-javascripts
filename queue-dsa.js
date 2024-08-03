//Queue with javascript 
//Queue   Array  is linear data structure//
// non liniear data structure  tree graph  none linear 
// front first in first out FIFO // Add and Remove 
// frunt se hamesha value add hota hai rear se value remove hota hai
let queue  = [];
let currentSize = queue.lenght;
let maxSize  = 5;
function enqueue(newval)
{
   if(currentSize >= maxSize)
   {
     alert("Queue is  already full";)
   }else
   {
       
  Queue[currentSize] = newval;
  currentSize++;
     
   }

  
}

function  display(){
  console.log(queue);
}
function dequeue()
{
  for(let i = 0; i<queue.lenght; i++)
  {
    
  }
}
