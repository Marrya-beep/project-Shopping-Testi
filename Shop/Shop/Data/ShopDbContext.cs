using Microsoft.EntityFrameworkCore;
using Shop.Models;

namespace Shop.Data
{
    public class ShopDbContext : DbContext
    {
        public ShopDbContext(DbContextOptions<ShopDbContext> options)
            : base(options) { }

        public DbSet<ShopItem> ShopItems { get; set; }
        public DbSet<Category> Categories { get; set; }
<<<<<<< HEAD
=======
        public DbSet<ContactMessage> Message { get; set; }
>>>>>>> 9781d80847a2a6592d75ba29a30b1a5d34eb2559
    }
}
