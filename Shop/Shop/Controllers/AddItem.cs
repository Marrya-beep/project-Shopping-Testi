using Microsoft.AspNetCore.Mvc;
using Shop.Models;
using Shop.Data;

namespace Shop.Controllers
{
    public class AddItem : Controller
    {
        public IActionResult NewItem()
        {
            return View();
        }

        [HttpPost]
        public IActionResult NewItem(ShopItem item)
        {
            if (ModelState.IsValid)
            {
                ItemsRepository.Items.Add(item);
                TempData["SuccessMessage"] = "محصول با موفقیت سیو شد!";
                return RedirectToAction("NewItem");
            }
            return View(item);
        }

    }
}
