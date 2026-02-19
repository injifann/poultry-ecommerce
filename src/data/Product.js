import CookedChicken1 from '../assets/images/meat/CookedChicken1.png'
import CookedChicken2 from '../assets/images/meat/CookedChicken2.png'
import CookedChicken3 from '../assets/images/meat/CookedChicken3.png'
import CookedChicken4 from '../assets/images/meat/CookedChicken4.png'
import FreshChickenMeat1 from '../assets/images/meat/FreshChickenMeat1.png'
import FreshChickenMeat2 from '../assets/images/meat/FreshChickenMeat2.png'
import FreshChickenMeat3 from '../assets/images/meat/FreshChickenMeat3.png'
import FreshChickenMeat4 from '../assets/images/meat/FreshChickenMeat4.png'
import LiveChicken1 from '../assets/images/meat/LiveChicken1.png'
import LiveChicken2 from '../assets/images/meat/LiveChicken2.png'
import LiveChicken3 from '../assets/images/meat/LiveChicken3.png'
import LiveChicken4 from '../assets/images/meat/LiveChicken4.png'
import Eggproduct1 from '../assets/images/eggs/Eggproduct1.png'
import Eggproduct2 from '../assets/images/eggs/Eggproduct2.png'
import Eggproduct3 from '../assets/images/eggs/Eggproduct3.png'
import Eggproduct4 from '../assets/images/eggs/Eggproduct4.png'
import Freshegg1 from '../assets/images/eggs/Freshegg1.png'
import Freshegg2 from '../assets/images/eggs/Freshegg2.png'
import Freshegg3 from '../assets/images/eggs/Freshegg3.png'
import Freshegg4 from '../assets/images/eggs/Freshegg4.png'
import Breadingtool from '../assets/images/tools/Breadingtool.png'
import Breadingtool2 from '../assets/images/tools/Breadingtool2.png'
import Feedingtool1 from '../assets/images/tools/Feedingtool1.png'
import Feedingtool2 from '../assets/images/tools/Feedingtool2.png'
import Feedingtool3 from '../assets/images/tools/Feedingtool3.png'
import Feedingtool4 from '../assets/images/tools/Feedingtool4.png'
import Wateringtool1 from '../assets/images/tools/Wateringtool1.png'
import Wateringtool2 from '../assets/images/tools/Wateringtool2.png'
import Wateringtool3 from '../assets/images/tools/Wateringtool3.png'
import Wateringtool4 from '../assets/images/tools/Wateringtool4.png'


export const Product = [
  // ================= MEAT PRODUCTS =================
  { id: 1, name: "Cooked Meet beef", image: CookedChicken1, price: 320, originalPrice: 380, weight: "1 kg", badge: "Fresh", subcategory: "Cooked meat", category: "Meat" },
  { id: 2, name: "Cooked meat isolated on white", image: CookedChicken2, price: 250, weight: "2 kg live weight", badge: "Organic", subcategory: "Cooked meat", category: "Meat" },
  { id: 3, name: "Cooked meat", image: CookedChicken3, price: 180, originalPrice: 220, weight: "500g", subcategory: "Cooked meat", category: "Meat" },
  { id: 4, name: "Cooked meat on plate", image: CookedChicken4, price: 450, weight: "1 kg", badge: "Premium", subcategory: "Cooked meat", category: "Meat" },

  { id: 5, name: "Cooked Meet beef", image: LiveChicken1, price: 320, originalPrice: 380, weight: "1 kg", badge: "Fresh", subcategory: "Live chicken", category: "Meat" },
  { id: 6, name: "Cooked meat isolated on white", image: LiveChicken2, price: 250, weight: "2 kg live weight", badge: "Organic", subcategory: "Live chicken", category: "Meat" },
  { id: 7, name: "Cooked meat", image: LiveChicken3, price: 180, originalPrice: 220, weight: "500g", subcategory: "Live chicken", category: "Meat" },
  { id: 8, name: "Cooked meat on plate", image: LiveChicken4, price: 450, weight: "1 kg", badge: "Premium", subcategory: "Live chicken", category: "Meat" },

  { id: 9, name: "Cooked Meet beef", image: FreshChickenMeat1, price: 320, originalPrice: 380, weight: "1 kg", badge: "Fresh", subcategory: "Fresh meat", category: "Meat" },
  { id: 10, name: "Cooked meat isolated on white", image: FreshChickenMeat2, price: 250, weight: "2 kg live weight", badge: "Organic", subcategory: "Fresh meat", category: "Meat" },
  { id: 11, name: "Cooked meat", image: FreshChickenMeat3, price: 180, originalPrice: 220, weight: "500g", subcategory: "Fresh meat", category: "Meat" },
  { id: 12, name: "Cooked meat on plate", image: FreshChickenMeat4, price: 450, weight: "1 kg", badge: "Premium", subcategory: "Fresh meat", category: "Meat" },

  // ================= EGG PRODUCTS =================
  { id: 13, name: "Grade A Large Eggs", image: Eggproduct1, price: 180, weight: "Tray of 30", badge: "Fresh", subcategory: "Product of Egg", category: "Egg" },
  { id: 14, name: "Organic Free-Range Eggs", image: Eggproduct2, price: 250, originalPrice: 280, weight: "Tray of 30", badge: "Organic", subcategory: "Product of Egg", category: "Egg" },
  { id: 15, name: "Fertilized Hatching Eggs", image: Eggproduct3, price: 300, weight: "Dozen", subcategory: "Product of Egg", category: "Egg" },
  { id: 16, name: "Brown Country Eggs", image: Eggproduct4, price: 200, weight: "Tray of 30", badge: "Local Farm", subcategory: "Product of Egg", category: "Egg" },

  { id: 17, name: "Grade A Large Eggs", image: Freshegg1, price: 180, weight: "Tray of 30", badge: "Fresh", subcategory: "Fresh Eggs", category: "Egg" },
  { id: 18, name: "Organic Free-Range Eggs", image: Freshegg2, price: 250, originalPrice: 280, weight: "Tray of 30", badge: "Organic", subcategory: "Fresh Eggs", category: "Egg" },
  { id: 19, name: "Fertilized Hatching Eggs", image: Freshegg3, price: 300, weight: "Dozen", subcategory: "Product of Egg", category: "Egg" },
  { id: 20, name: "Brown Country Eggs", image: Freshegg4, price: 200, weight: "Tray of 30", badge: "Local Farm", subcategory: "Fresh Eggs", category: "Egg" },

  // ================= TOOL PRODUCTS =================
  { id: 21, name: "Automatic Chicken Feeder", image: Feedingtool1, price: 450, weight: "5 kg", badge: "Durable", subcategory: "Feeding tools", category: "Tool" },
  { id: 22, name: "Poultry Water Dispenser", image: Feedingtool2, price: 300, originalPrice: 350, weight: "2 kg", badge: "Easy Clean", subcategory: "Feeding tools", category: "Tool" },
  { id: 23, name: "Egg Incubator (24 eggs)", image: Feedingtool3, price: 1200, weight: "10 kg", subcategory: "Feeding tools", category: "Tool" },
  { id: 24, name: "Feed Scoop Set", image: Feedingtool4, price: 150, weight: "1 kg", badge: "Stainless Steel", subcategory: "Feeding tools", category: "Tool" },
  { id: 25, name: "Automatic Chicken Feeder", image: Wateringtool1, price: 450, weight: "5 kg", badge: "Durable", subcategory: "Feeding tools", category: "Tool" },
  { id: 26, name: "Poultry Water Dispenser", image: Wateringtool2, price: 300, originalPrice: 350, weight: "2 kg", badge: "Easy Clean", subcategory: "Wateringtool", category: "Tool" },
  { id: 27, name: "Egg Incubator (24 eggs)", image: Wateringtool3, price: 1200, weight: "10 kg", subcategory: "Wateringtool", category: "Tool" },
  { id: 28, name: "Feed Scoop Set", image: Wateringtool4, price: 150, weight: "1 kg", badge: "Stainless Steel", subcategory: "Wateringtool", category: "Tool" },
  { id: 29, name: "Automatic Chicken Feeder", image: Feedingtool1, price: 450, weight: "5 kg", badge: "Durable", subcategory: "Feeding tools", category: "Tool" },
  { id: 30, name: "Poultry Water Dispenser", image: Feedingtool2, price: 300, originalPrice: 350, weight: "2 kg", badge: "Easy Clean", subcategory: "Watering tools", category: "Tool" },
];
