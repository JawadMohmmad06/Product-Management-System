using Microsoft.EntityFrameworkCore;
using WebApplication14.Models;

namespace WebApplication14.Repository
{
    public class ProductRepo : IProductRepo
    {
        private readonly APiDbContext _context;
        public ProductRepo(APiDbContext context)
        {
            _context = context;
        }
        public void AddProduct(Product product)
        {
            // Add the product to the database
            _context.Products.Add(product);
            _context.SaveChanges();
        }

        public List<Product> GetProduct()
        {
           
            return _context.Products.Include(p => p.User).ToList();
        }

        public Product GetProductById(int pId)
        {
        
            return _context.Products.Include(p => p.User).FirstOrDefault(p => p.PoductId == pId);
        }

        public List<Product> GetProductsByUserId(int userId)
        {
           
            return _context.Products.Include(p => p.User).Where(p => p.UserId == userId).ToList();
        }

        public void UpdateProduct(Product product)
        {
            
            _context.Products.Update(product);
            _context.SaveChanges();
        }
        public void DeleteProduct(int pId)
        {
           
            var product = _context.Products.FirstOrDefault(p => p.PoductId == pId);

            if (product != null)
            {
                
                _context.Products.Remove(product);
                _context.SaveChanges();
            }
        }
    }
}
