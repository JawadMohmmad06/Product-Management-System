using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebApplication14.DTO;
using WebApplication14.Models;
using WebApplication14.Service;

namespace WebApplication14.Controllers
{
    [EnableCors]
    [Route("api/")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly IProductService _ProductService;

        public ProductController(IProductService IProductService)
        {
            _ProductService = IProductService;
        }

        [HttpGet]
        [Authorize]
        [Route("getproduct")]
        public ActionResult<IEnumerable<Product>> GetProduct()
        {
            var produc = _ProductService.GetProduct();
            return Ok(produc);
        }

        [HttpGet]
        [Authorize]
        [Route("getproduct/{id}")]
        public IActionResult GetProductbyId(int id)
        {
            var product = _ProductService.GetProductById(id);

            if (product == null)
            {
               
                return NotFound();
            }

            return Ok(product); 
        }
        
        [HttpPost]
        [Route("addproduct")]
        [Authorize]
        public void AddProduct([FromBody] ProductDTO product)
        {
          

            _ProductService.AddProduct(product);

           
        }
        [HttpPost]
        [Route("updateproduct")]
        [Authorize]
        [EnableCors]
        public void updateProduct([FromBody] ProductDTO product)
        {


            _ProductService.UpdateProduct(product);


        }
        [HttpGet]
        [Authorize]
        [Route("deleteproduct/{id}")]
        public void deleteproduct(int id)
        {
           _ProductService.DeleteProduct(id);

            
        }
    }
}
