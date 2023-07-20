using Microsoft.EntityFrameworkCore;
using WebApplication14.Models;

namespace WebApplication14.Repository
{
    public interface IProductRepo
    {
        public void AddProduct(Product product);


        public List<Product> GetProduct();
 

        public Product GetProductById(int pId);

        public List<Product> GetProductsByUserId(int userId);


        public void UpdateProduct(Product product);
        public void DeleteProduct(int pId);
        
    }
}
