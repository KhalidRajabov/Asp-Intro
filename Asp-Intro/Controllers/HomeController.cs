using Microsoft.AspNetCore.Mvc;

namespace Asp_Intro.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index(int id)
        {
            return  View();
                
                //Content("index is working");
        }
        public IActionResult About(int id)
        {
            return View();

            //Ok("okay"); 
            /*Json(new
        {
            name="xalid",
            age=27
        }) ;*/
            //Content($"about is working {id}");
        }
    }
}
