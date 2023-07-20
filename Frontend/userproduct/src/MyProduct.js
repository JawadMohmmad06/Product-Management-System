import React from "react";
 export default function MyProduct(){
    
    const token = localStorage.getItem("Token");
  const userid = localStorage.getItem("Id");
    const[products,setProducts]=React.useState()
    React.useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch("https://localhost:7049/api/getuser/"+userid, {
              method: 'GET',
              headers: {
                'Content-type': 'application/json',
                'Authorization':'Bearer '+token

              },
            });
            const data = await response.json();
            setProducts(data);
          } catch (error) {
            console.error('Error fetching data:', error);
          
          }
        };
      
        fetchData();
      }, []);
      if(products==null)
      {
          return(
              <div>Loading...</div>
          )
      }
console.log(products.products.$values[0])


return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>CategoryId</th>
            <th>CategoryName</th>
            <th>UnitName</th>
            <th>Name</th>
            <th>Code</th>
            <th>parentCode</th>
            <th>productBarcode</th>
            <th>description</th>
            <th>brandName</th>
            <th>sizeName</th>
            <th>colorName</th>
            <th>modelName</th>
            <th>variantName</th>
            <th>oldPrice</th>
            <th>price</th>
            <th>costPrice</th>
            <th>stock</th>
            <th>totalPurchase</th>
            <th>lastPurchaseDate</th>
            <th>lastPurchaseSupplier</th>
            <th>totalSales</th>
            <th>lastSalesDate</th>
            <th>lastSalesCustomer</th>
            <th>imagePath</th>
            <th>Type</th>
            <th>status</th>
            <th>Update</th>
            <th>Delete</th>
            
          </tr>
        </thead>
        <tbody>
          {products.products.$values.map(each => (
            <tr key={each.Id}>
              <td>{each.id}</td>
              <td>{each.categoryId}</td>
              <td>{each.categoryName}</td>
              <td>{each.unitName}</td>
              <td>{each.name}</td>
              <td>{each.code}</td>
              <td>{each.parentCode}</td>
              <td>{each.productBarcode}</td>
              <td>{each.description}</td>
              <td>{each.brandName}</td>
              <td>{each.sizeName}</td>
              <td>{each.colorName}</td>
              <td>{each.modelName}</td>
              <td>{each.variantName}</td>
              <td>{each.oldPrice}</td>
              <td>{each.price}</td>
              <td>{each.costPrice}</td>
              <td>{each.stock}</td>
              <td>{each.totalPurchase}</td>
              <td>{each.lastPurchaseDate}</td>
              <td>{each.lastPurchaseSupplier}</td>
              <td>{each.totalSales}</td>
              <td>{each.lastSalesDate}</td>
              <td>{each.lastSalesCustomer}</td>
              <td>{each.imagePath}</td>
              <td>{each.type}</td>
              <td>{each.status}</td>
              <td><button onClick={()=>{window.location.href = '/updateproduct/'+each.poductId}}>Update</button></td>
             
              
              <td><button onClick={()=>{
                   each.UserId=5;
                   console.log(each)
        fetch("https://localhost:7049/api/deleteproduct/"+each.poductId,{
            method:'GET',
            headers:{
                'Content-type':'application/json',
                'Authorization':'Bearer '+token
            },
         
         
        })  
        window.location.reload()            }}>DELETE</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );


   
 }