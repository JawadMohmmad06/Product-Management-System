using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using WebApplication14.Models;
using WebApplication14.Service;

namespace WebApplication14.Controllers
{
    [Route("api/")]
    [ApiController]
    public class IndentityController : ControllerBase
    {
        private readonly IUserService _userService;
        private readonly IConfiguration _configuration;

        public IndentityController(IUserService userService, IConfiguration configuration)
        {
            _userService = userService;
            _configuration = configuration;
        }
        [HttpPost]
        [Route("login")]
        public IActionResult Login(User user)
        {
            var userr=_userService.login(user);
            if (userr == false)
            {
                return Unauthorized(); // Invalid username or email
            }
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(_configuration["JwtSettings:Key"]);

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[]
                {
        new Claim(ClaimTypes.Name, user.Name),
        new Claim(ClaimTypes.Email, user.Email),
                    // Add any other claims as needed
                }),
                Expires = DateTime.UtcNow.AddDays(1), // Token expiration time
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature),

                // Set the Issuer and Audience here
                Issuer = _configuration["JwtSettings:Issur"],
                Audience = _configuration["JwtSettings:Audience"]
            };

            var token = tokenHandler.CreateToken(tokenDescriptor);
            var tokenString = tokenHandler.WriteToken(token);
            var userrtogetid = _userService.GetUseUserNamePassword(user.Name, user.Email);
            return Ok(new { Token = tokenString,Id= userrtogetid.Id });

        }
    }
}
