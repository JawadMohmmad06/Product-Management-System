using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApplication14.Models;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Net;
using WebApplication14.Service;
using Microsoft.AspNetCore.Authorization;
using WebApplication14.DTO;
using Microsoft.AspNetCore.Cors;

namespace WebApplication14.Controllers
{
    
    [Route("api/")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserService _userService;

        public UserController(IUserService userService)
        {
            _userService = userService;
        }

        [HttpGet]
        [Authorize]
        [Route("getuser")]
        public ActionResult<IEnumerable<User>> GetUser()
        {
            var users = _userService.getuse();
            return Ok(users);
        }
        [HttpGet]
        [Route("getuser/{id}")]
        public IActionResult GetUserById(int id)
        {
            var user = _userService.GetUserById(id);

            if (user == null)
            {
                // If the user is not found, return a 404 Not Found response.
                return NotFound();
            }

            return Ok(user); // Assuming _userService.GetUserById(id) returns the user object.

        }
        [EnableCors]
        [HttpPost]
        [Route("adduser")]
      
        public void adduser([FromBody] User user)
        {


           _userService.AddUser(user);


        }

    }
}
