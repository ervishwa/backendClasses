const products = [
    { title: 'Cabbage', isFruit: false, id: 1 },
    { title: 'Garlic', isFruit: false, id: 2 },
    { title: 'Apple', isFruit: true, id: 3 },
    { title: 'banana', isFruit: true, id: 4 },
    { title: 'potato', isFruit: false, id: 5 },
    { title: 'grapes', isFruit: true, id: 6 },
    { title: 'lemon', isFruit: false, id: 7 },
  ];
export function List(){

  const list = products.filter((product)=>{
        if(!product.isFruit){
         return (<li key={product.id} 
         >{product.title}</li>)
        }
    }        
  )

   console.log(list);

 
    return (
     <>
     <ul>     
       {
        list.map((product)=>{       
                return <li>{product.title}</li>           
      
        })
         
    }  
      </ul>

      {/* <ul>
        {list}
      </ul> */}

      {/* <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul> */}
     </>
    )
}