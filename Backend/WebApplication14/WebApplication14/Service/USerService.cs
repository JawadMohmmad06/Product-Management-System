using Microsoft.EntityFrameworkCore;
using WebApplication14.Models;
using WebApplication14.Repository;

namespace WebApplication14.Service
{
    public class USerService:IUserService
    {
        private readonly IUserRepo _UserRepo;

        public USerService(IUserRepo UserRepo)
        {
            _UserRepo = UserRepo;
        }
        public  List<User> getuse()
        {
            return _UserRepo.getuse();
        }
      public void AddUser(User user)
        {
            _UserRepo.AddUser(user);
        }
        /*    public void UpdateUser(User user)
          {
              _context.Users.Update(user);
              _context.SaveChanges();
          }
          public void DeleteUser(int userId)
          {
              var user = _context.Users.Find(userId);
              if (user != null)
              {
                  _context.Users.Remove(user);
                  _context.SaveChanges();
              }
          } */
        public User GetUserById(int userId)
          {
              return _UserRepo.GetUserById(userId);
          }
      
        public bool login(User user)
        {
           return _UserRepo.login(user);
        }

        public User GetUseUserNamePassword(string username, string email)
        {
           return _UserRepo.GetUseUserNamePassword(username, email);
        }
    }
}
