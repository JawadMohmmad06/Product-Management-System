using Microsoft.EntityFrameworkCore;
using WebApplication14.Models;

namespace WebApplication14.Service
{
    public interface IUserService
    {
        public List<User> getuse();
        public bool login(User user);
        public void AddUser(User user);
        public User GetUserById(int userId);
        public User GetUseUserNamePassword(string username,string email);
    }
}
