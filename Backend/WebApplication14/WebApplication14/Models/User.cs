using System.ComponentModel.DataAnnotations;

namespace WebApplication14.Models
{

    public class User
    {
        [Key]

        public int Id { get; set; }
        public string? Name { get; set; }
        public string? Email { get; set; }
        public ICollection<Product> Products { get; set; }
        public User()
        {
            Products = new List<Product>();
        }
    }
    
}
