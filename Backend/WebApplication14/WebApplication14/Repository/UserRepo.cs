using Microsoft.EntityFrameworkCore;
using WebApplication14.Models;

namespace WebApplication14.Repository
{
    public class UserRepo : IUserRepo
    {
        private readonly APiDbContext _context;
        public UserRepo(APiDbContext context)
        {
            _context = context;
        }
        public List<User> getuse()
        {
            return _context.Users.Include(u => u.Products).ToList();
        }

        public bool login(User user)
        {
            var uyser = getuse();
            var auth = (from i in uyser
                        where i.Name == user.Name
                        && i.Email == user.Email
                        select i).SingleOrDefault();
            if (auth != null) return true;
            return false;
        }
        public void AddUser(User user)
        {
            _context.Users.Add(user);
            _context.SaveChanges();
        }

        public User GetUserById(int userId)
        {
            return _context.Users
                .Include(u => u.Products) // Include the related Products
                .FirstOrDefault(u => u.Id == userId);
        }

        public User GetUseUserNamePassword(string username, string email)
        {
            var users=getuse().ToList();
            var oneuser=(from u in  users
                         where u.Name.Equals(username) &&
                         u.Email.Equals(email) select u).SingleOrDefault();
            return oneuser;
        }
    }
}
