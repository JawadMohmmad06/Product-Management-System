import React from "react";
import { useParams } from "react-router-dom";

export default function UpdateProduct() {
    const token = localStorage.getItem("Token");
  const userid = localStorage.getItem("Id");
  const [form, setForm] = React.useState({});
  const { id } = useParams();
  const [products, setProducts] = React.useState();

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://localhost:7049/api/getproduct/" + id,
          {
            method: "GET",
            headers: {
              "Content-type": "application/json",
              Authorization:
                "Bearer "+token,
            },
          }
        );
        const data = await response.json();
        setProducts(data);

        // Move the setForm here, so it's only called when the data is fetched
        setForm({
        PoductId: data.poductId,
        Id:data.id,
          CategoryId: data.categoryId,
          CategoryName: data.categoryName,
          UnitName: data.unitName,
          Name:data.name,
          Code:data.code,
          ParentCode:data.parentCode,
          ProductBarcode:data.productBarcode,
          BrandName:data.brandName,
          SizeName:data.sizeName,
          ColorName:data.colorName,
          ModelName:data.modelName,
          VariantName:data.variantName,
          OldPrice:data.oldPrice,
          Price:data.price,
          CostPrice:data.costPrice,
          WarehouseListJson:data.warehouseListJson,
          Stock:(data.stock==null)?0:data.stock,
          TotalPurchase:data.totalPurchase,
          LastPurchaseDate:data.lastPurchaseDate,
          LastPurchaseSupplier:data.lastPurchaseSupplier,
          TotalSales:data.totalSales,
          LastSalesDate:data.lastSalesDate,
          LastSalesCustomer:data.lastSalesCustomer,
          ImagePath:data.imagePath,
          Type:data.type,
          Status:data.status,
        UserId:userid

          
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]); // Include 'id' in the dependency array to refetch data when the 'id' changes

  if (products == null) {
    return <div>Loading...</div>;
  }

  function Change(event) {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }
  console.log(form)

  return (
    <div>
     <label htmlFor="Id">Id</label>
      <input
        type="number"
        name="Id"
        onChange={Change}
        value={form.Id}
      ></input>
      <br />
      <br />
      <label htmlFor="CategoryId">CategoryId</label>
      <input
        type="text"
        name="CategoryId"
        onChange={Change}
        value={form.CategoryId}
      ></input>
      <br />
      <br />
      <label htmlFor="CategoryName">CategoryName</label>
      <input
        type="text"
        name="CategoryName"
        onChange={Change}
        value={form.CategoryName}
      ></input>
      <br />
      <br />
      <label htmlFor="UnitName">UnitName</label>
      <input
        type="text"
        name="UnitName"
        onChange={Change}
        value={form.UnitName}
      ></input>
      <br />
      <br />






      <label htmlFor="Name">Name</label>
      <input
        type="text"
        name="Name"
        onChange={Change}
        value={form.Name}
      ></input>
      <br />
      <br />
      <label htmlFor="Code">Code</label>
      <input
        type="text"
        name="Code"
        onChange={Change}
        value={form.Code}
      ></input>
      <br />
      <br />
      <label htmlFor="ParentCode">ParentCode</label>
      <input
        type="text"
        name="ParentCode"
        onChange={Change}
        value={form.ParentCode}
      ></input>
      <br />
      <br />
      <label htmlFor="ProductBarcode">ProductBarcode</label>
      <input
        type="text"
        name="ProductBarcode"
        onChange={Change}
        value={form.ProductBarcode}
      ></input>
      <br />
      <br />
      <label htmlFor="BrandName">BrandName</label>
      <input
        type="text"
        name="BrandName"
        onChange={Change}
        value={form.BrandName}
      ></input>
      <br />
      <br />
      <label htmlFor="SizeName">SizeName</label>
      <input
        type="text"
        name="SizeName"
        onChange={Change}
        value={form.SizeName}
      ></input>
      <br />
      <br />
      <label htmlFor="ColorName">ColorName</label>
      <input
        type="text"
        name="ColorName"
        onChange={Change}
        value={form.ColorName}
      ></input>
      <br />
      <br />
      <label htmlFor="ModelName">ModelName</label>
      <input
        type="text"
        name="ModelName"
        onChange={Change}
        value={form.ModelName}
      ></input>
      <br />
      <br />
      <label htmlFor="VariantName">VariantName</label>
      <input
        type="text"
        name="VariantName"
        onChange={Change}
        value={form.VariantName}
      ></input>
      <br />
      <br />
      <label htmlFor="OldPrice">OldPrice</label>
      <input
        type="number"
        name="OldPrice"
        onChange={Change}
        value={form.OldPrice}
      ></input>
      <br />
      <br />
      <label htmlFor="Price">Price</label>
      <input
        type="number"
        name="Price"
        onChange={Change}
        value={form.Price}
      ></input>
      <br />
      <br />
      <label htmlFor="CostPrice">CostPrice</label>
      <input
        type="number"
        name="CostPrice"
        onChange={Change}
        value={form.CostPrice}
      ></input>
      <br />
      <br />
      <label htmlFor="WarehouseListJson">WarehouseListJson</label>
      <input
        type="text"
        name="WarehouseListJson"
        onChange={Change}
        value={form.WarehouseListJson}
      ></input>
      <br />
      <br />
      <label htmlFor="Stock">Stock</label>
      <input
        type="number"
        name="Stock"
       
        onChange={Change}
        value={form.Stock==null?0:form.Stock}
      ></input>
      <br />
      <br />
      <label htmlFor=" TotalPurchase"> TotalPurchase</label>
      <input
        type="number"
        name=" TotalPurchase"
        onChange={Change}
        value={form. TotalPurchase}
      ></input>
      <br />
      <br />
      <label htmlFor="LastPurchaseDate">LastPurchaseDate</label>
      <input
        type="text"
        name="LastPurchaseDate"
        onChange={Change}
        value={form.LastPurchaseDate}
      ></input>
      <br />
      <br />
      <label htmlFor="TotalSales">TotalSales</label>
      <input
        type="number"
        name="TotalSales"
        onChange={Change}
        value={form.TotalSales}
      ></input>
      <br />
      <br />
      <label htmlFor="LastPurchaseSupplier">LastPurchaseSupplier</label>
      <input
        type="text"
        name="LastPurchaseSupplier"
        onChange={Change}
        value={form.LastPurchaseSupplier}
      ></input>
      <br />
      <br />
      <label htmlFor="LastSalesDate">LastSalesDate</label>
      <input
        type="text"
        name="LastSalesDate"
        onChange={Change}
        value={form.LastSalesDate}
      ></input>
      <br />
      <br />
      <label htmlFor="LastSalesCustomer">LastSalesCustomer</label>
      <input
        type="text"
        name="LastSalesCustomer"
        onChange={Change}
        value={form.LastSalesCustomer}
      ></input>
      <br />
      <br />
      <label htmlFor="ImagePath">ImagePath</label>
      <input
        type="text"
        name="ImagePath"
        onChange={Change}
        value={form.ImagePath}
      ></input>
      <br />
      <br />
      <label htmlFor="Type">Type</label>
      <input
        type="text"
        name="Type"
        onChange={Change}
        value={form.Type}
      ></input>
      <br />
      <br />
      <label htmlFor="Status">Status</label>
      <input
        type="text"
        
        name="Status"
        onChange={Change}
        value={form.Status}
      ></input>
      <br />
      <br />

<button onClick={()=>{
fetch("https://localhost:7049/api/updateproduct",{
    method:'POST',
    headers:{
        'Content-type':'application/json',
        'Authorization':'Bearer '+token,
    },
    body:JSON.stringify(form)
    
})

   
 
window.location.reload()     }}>Update</button>
    </div>
  );
}
