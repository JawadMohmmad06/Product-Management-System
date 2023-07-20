using Microsoft.EntityFrameworkCore;

namespace WebApplication14.Models
{
    public class APiDbContext : DbContext
    {
        public APiDbContext(DbContextOptions<APiDbContext> options) : base(options)
        {

        }

        public DbSet<User> Users { get; set; }
        public DbSet<Product> Products { get; set; }
        
    }
}
