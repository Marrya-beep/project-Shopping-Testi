//using Microsoft.AspNetCore.Mvc;
//using Shop.Data;

<<<<<<< HEAD
//namespace Shop.Controllers
//{
//    public class CategoryController : Controller
//    {
//        public IActionResult Category()
//        {
//            var categories = ItemsRepository.Items
//                .Where(x => !string.IsNullOrWhiteSpace(x.Category))
//                .Select(x => x.Category)
//                .Distinct()
//                .ToList();

//            return View(categories);
//        }
//        public IActionResult ProductsByCategory(string category)
//        {
//            if (string.IsNullOrEmpty(category))
//                return RedirectToAction("Category");

//            var products = ItemsRepository.Items
//                .Where(x => x.Category.Equals(category, StringComparison.OrdinalIgnoreCase))
//                .ToList();

//            ViewBag.CategoryName = category;
//            return View(products); 
//        }
//    }
//}
=======
namespace Shop.Controllers
{
    public class CategoryController : Controller
    {
        private readonly ShopDbContext _context;
        public CategoryController(ShopDbContext context)
        {
            _context = context;
        }
        public IActionResult Category()
        {
            var categories = _context.Categories
                .Select(c => c.Name)
                .ToList();

            return View(categories);
        }
        public IActionResult ProductsByCategory(string category)
        {
            if (string.IsNullOrWhiteSpace(category))
                return RedirectToAction("Category");

            var categoryEntity = _context.Categories
                .FirstOrDefault(c => c.Name == category);

            if (categoryEntity == null)
                return RedirectToAction("Index");

            var products = _context.ShopItems
                .Where(i => i.IdCategory == categoryEntity.Id)
                .ToList();

            ViewBag.CategoryName = category;
            return View(products);
        }
    }
}
>>>>>>> 9781d80847a2a6592d75ba29a30b1a5d34eb2559
