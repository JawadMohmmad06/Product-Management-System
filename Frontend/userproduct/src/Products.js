import React from "react";
export default function Products()
{
    const[products,setProducts]=React.useState()
    const token = localStorage.getItem("Token");
  const userid = localStorage.getItem("Id");
    React.useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch("https://www.pqstec.com/InvoiceApps/values/GetProductListAll", {
              method: 'GET',
              headers: {
                'Content-type': 'application/json',
               
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
   

      console.log(products)

     
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
                <th>Add</th>
                
              </tr>
            </thead>
            <tbody>
              {products.map(each => (
                <tr key={each.Id}>
                  <td>{each.Id}</td>
                  <td>{each.CategoryId}</td>
                  <td>{each.CategoryName}</td>
                  <td>{each.UnitName}</td>
                  <td>{each.Name}</td>
                  <td>{each.Code}</td>
                  <td>{each.ParentCode}</td>
                  <td>{each.ProductBarcode}</td>
                  <td>{each.Description}</td>
                  <td>{each.BrandName}</td>
                  <td>{each.SizeName}</td>
                  <td>{each.ColorName}</td>
                  <td>{each.ModelName}</td>
                  <td>{each.VariantName}</td>
                  <td>{each.OldPrice}</td>
                  <td>{each.Price}</td>
                  <td>{each.CostPrice}</td>
                  <td>{each.Stock}</td>
                  <td>{each.TotalPurchase}</td>
                  <td>{each.LastPurchaseDate}</td>
                  <td>{each.LastPurchaseSupplier}</td>
                  <td>{each.TotalSales}</td>
                  <td>{each.LastSalesDate}</td>
                  <td>{each.LastSalesCustomer}</td>
                  <td>{each.ImagePath}</td>
                  <td>{each.Type}</td>
                  <td>{each.Status}</td>
                 
                  
                  <th><button onClick={()=>{
                       each.UserId=userid;
                       console.log(each)
            fetch("https://localhost:7049/api/addproduct",{
                method:'POST',
                headers:{
                    'Content-type':'application/json',
                    'Authorization':'Bearer '+token
                },
             
                body:JSON.stringify(each)
            })  
                  }}>AddProduct</button></th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
}