using Microsoft.EntityFrameworkCore;
using WebApplication14.DTO;
using WebApplication14.Models;
using WebApplication14.Repository;

namespace WebApplication14.Service
{
    public class ProductService:IProductService
    {
        private readonly IProductRepo _productRepo;

        public ProductService(IProductRepo productRepo)
        {
            _productRepo = productRepo;
        }
        public void AddProduct(ProductDTO productdto)
        {
           
            var product=dtoToModel(productdto);
            _productRepo.AddProduct(product);
        }

        public List<Product> GetProduct()
        {

            return _productRepo.GetProduct();
        }

        public Product GetProductById(int pId)
        {

            return _productRepo.GetProductById(pId);
        }

        public List<Product> GetProductsByUserId(int userId)
        {

            return _productRepo.GetProductsByUserId(userId);
        }

        public void UpdateProduct(ProductDTO productdto)
        {
            
            var product = dtoToModel(productdto);

            _productRepo.UpdateProduct(product);
        }
        public void DeleteProduct(int pId)
        {

            _productRepo.DeleteProduct(pId);
        }
        public Product dtoToModel(ProductDTO productdto)
        {
             var product = new Product();
            product.PoductId = productdto.PoductId;
            product.Id = productdto.Id;
            product.CategoryId = productdto.CategoryId;
            product.CategoryName = productdto.CategoryName;
            product.UnitName = productdto.UnitName;
            product.Name = productdto.Name;
            product.Code = productdto.Code;
            product.ParentCode = productdto.ParentCode;
            product.ProductBarcode = productdto.ProductBarcode;
            product.Description = productdto.Description;
            product.BrandName = productdto.BrandName;
            product.SizeName = productdto.SizeName;
            product.ColorName = productdto.ColorName;
            product.ModelName = productdto.ModelName;
            product.ModelName= productdto.ModelName;
            product.VariantName = productdto.VariantName;
            product.OldPrice = productdto.OldPrice;
            product.Price = productdto.Price;
            product.CostPrice = productdto.CostPrice;
            product.WarehouseListJson = productdto.WarehouseListJson;
            product.stock= productdto.stock;
            product.TotalPurchase = productdto.TotalPurchase;
            product.LastPurchaseDate = productdto.LastPurchaseDate;
            product.LastPurchaseSupplier = productdto.LastPurchaseSupplier;
            product.TotalSales = productdto.TotalSales;
            product.LastSalesDate = productdto.LastSalesDate;
            product.LastSalesCustomer = productdto.LastSalesCustomer;
            product.ImagePath = productdto.ImagePath;
            product.Type = productdto.Type;
            product.Status = productdto.Status;






            product.UserId= productdto.UserId;
            return product;
        }
    }
}
