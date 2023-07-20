using WebApplication14.DTO;
using WebApplication14.Models;

namespace WebApplication14.Service
{
    public interface IProductService
    {
        public void AddProduct(ProductDTO product);


        public List<Product> GetProduct();
        public Product GetProductById(int pId);

        public List<Product> GetProductsByUserId(int userId);
        public void UpdateProduct(ProductDTO product);
        public void DeleteProduct(int pId);
    }
}
