'use client'
import { useEffect, useState } from "react";
import Bill from "./component/bill";
import Category from "./component/category";
import Product from "./component/product";

interface product {
  title: string;
  description: string;
  cost: number;
  category: string;
  img: string;
}

const products: product[] = [
  {
    title: "Bò beefsteak trong dai ngoài giòn Bò beefsteak trong dai ngoài giòn",
    description: "Được tạo bởi đầu bếp 5 sao michellin Được tạo bởi đầu bếp 5 sao michellin",
    cost: 300,
    category: "Cow",
    img: "https://i.pinimg.com/564x/19/92/dc/1992dcc3b43374db19bf841a8abc6af3.jpg"
  },
  

  {
    title: "Bò xào lúc lắc",
    description: "Được tạo bởi đầu bếp 5 sao michellin",
    cost: 200,
    category: "Cow",
    img: "https://i.pinimg.com/564x/19/92/dc/1992dcc3b43374db19bf841a8abc6af3.jpg"
  },

  {
    title: "Gà chiên tỏi ớt",
    description: "Được tạo bởi đầu bếp 5 sao michellin",
    cost: 250,
    category: "Chicken",
    img: "https://i.pinimg.com/564x/19/92/dc/1992dcc3b43374db19bf841a8abc6af3.jpg"
  },

  {
    title: "Gà xào mắm",
    description: "Được tạo bởi đầu bếp 5 sao michellin",
    cost: 190,
    category: "Chicken",
    img: "https://i.pinimg.com/564x/19/92/dc/1992dcc3b43374db19bf841a8abc6af3.jpg"
  },

  {
    title: "Bò sốt tiêu xanh",
    description: "Được tạo bởi đầu bếp 5 sao michellin",
    cost: 230,
    category: "Cow",
    img: "https://i.pinimg.com/564x/19/92/dc/1992dcc3b43374db19bf841a8abc6af3.jpg"
  },

  {
    title: "Bia tươi",
    description: "Được tạo bởi đầu bếp 5 sao michellin",
    cost: 100,
    category: "Drink",
    img: "https://i.pinimg.com/564x/19/92/dc/1992dcc3b43374db19bf841a8abc6af3.jpg"
  },

  {
    title: "Bò sốt vang",
    description: "Được tạo bởi đầu bếp 5 sao michellin",
    cost: 300,
    category: "Cow",
    img: "https://i.pinimg.com/564x/19/92/dc/1992dcc3b43374db19bf841a8abc6af3.jpg"
  },

  {
    title: "Coca Cola",
    description: "Được tạo bởi đầu bếp 5 sao michellin",
    cost: 50,
    category: "Drink",
    img: "https://i.pinimg.com/564x/19/92/dc/1992dcc3b43374db19bf841a8abc6af3.jpg"
  },

  {
    title: "Gà rang cháy cạnh",
    description: "Được tạo bởi đầu bếp 5 sao michellin",
    cost: 200,
    category: "Chicken",
    img: "https://i.pinimg.com/564x/19/92/dc/1992dcc3b43374db19bf841a8abc6af3.jpg"
  },

  {
    title: "Bánh dâu tây",
    description: "Được tạo bởi đầu bếp 5 sao michellin",
    cost: 200,
    category: "Cake",
    img: "https://i.pinimg.com/564x/19/92/dc/1992dcc3b43374db19bf841a8abc6af3.jpg"
  },

  {
    title: "Bò beefsteak original",
    description: "Được tạo bởi đầu bếp 5 sao michellin",
    cost: 700,
    category: "Cow",
    img: "https://i.pinimg.com/564x/19/92/dc/1992dcc3b43374db19bf841a8abc6af3.jpg"
  },

  {
    title: "Bánh bông lan trứng muối",
    description: "Được tạo bởi đầu bếp 5 sao michellin",
    cost: 150,
    category: "Cake",
    img: "https://i.pinimg.com/564x/19/92/dc/1992dcc3b43374db19bf841a8abc6af3.jpg"
  },

  {
    title: "Gà đi bộ",
    description: "Được tạo bởi đầu bếp 5 sao michellin",
    cost: 200,
    category: "Special",
    img: "https://i.pinimg.com/564x/19/92/dc/1992dcc3b43374db19bf841a8abc6af3.jpg"
  },
]

export default function CarouselDefault() {
  const [foodList, setFoodList] = useState<product[]>(products);

  const categoryList: string[] = [];
  products.forEach(product => {
    if (!categoryList.includes(product.category)) {
      categoryList.push(product.category);
    }
  });


  // 2 useState phục vụ cho hành động scroll bar -------------------------------------
  const [isScrolled, setScrolled] = useState(false);
  const [isReduce, setReduce] = useState(window.scrollY);

  const handleScroll = () => {
    const demo = window.scrollY - isReduce;
    if (window.scrollY > 300) {
      if (isReduce > window.scrollY) {
        setScrolled(false);
      } else if (isReduce < window.scrollY) {
        setScrolled(true);
      }
      setReduce(window.scrollY);
    } else {
      setScrolled(false);
    }
  }

  useEffect(() => {
    setReduce(window.scrollY);
  }, []);

  useEffect(() => {
    // Adding the scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      // Removing listener
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isReduce]);
  //-------------------------------------------------------------



  return (
    <div className="font-mono">
      {/* Menu */}
      <div className="inline-block w-[68%] xl:w-[70%] 2xl:w-[75%] min-h-screen bg-gray-100 px-8 ">
        {/* Menu header */}
        <div className={`sticky top-0 bg-gray-100 left-0 right-[32%] xl:right-[30%] 2xl:right-[25%] ${isScrolled && "2xl:p-3 xl:p-4"} p-4 2xl:p-8`}>
          <div className={`flex place-content-between pt-8 pb-8 mb-2 2xl:mb-4 ${isScrolled && "absolute opacity-0 -z-10"}`}>
            <div className="">
              <h1 className="font-bold text-2xl 2xl:text-3xl">Menu Super Sunday</h1>
              <p className="text-xs text-gray-500 2xl:text-sm">Thực đơn đặc biệt với giá ưu đãi vào ngày chủ nhật</p>
            </div>

            <div className="flex justify-end grow">
              <form>
                <div className="relative w-full ">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                  </div>
                  <input
                    type="search"
                    id="default-search"
                    className="w-52 xl:w-72 2xl:w-96 p-3 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search Mockups, Logos..."
                  />
                </div>
              </form>
            </div>
          </div>


          <ul className="w-full h-full overflow-x-scroll  whitespace-nowrap scroll-smooth" >
            {
              categoryList.map((cate: string) => <Category categoryName={cate} />)
            }
          </ul>

        </div>

        {/* Product list */}
        <div className="p-4 pt-0 2xl:p-8 2xl:pt-0 2xl:mt-[0px] mt-[8px]">
            {categoryList.map((cate) => (
              <div key={cate} >
                <h1 id={cate} className="p-2 pt-8 tracking-widest text-xl font-semibold text-gray-800 col-span-3 2xl:col-span-4">{cate}</h1>
                <div className="grid grid-cols-3 2xl:grid-cols-4 gap-4 mt-1">
                {foodList.map((food) => {
                  if(food.category == cate){
                    return <Product productItem={food}/>
                  }
                  return null;
                })}
                </div>
              </div> 
            ))} 
        </div>
      </div>


      {/* Bill */}
      <div className="inline-block w-[32%] xl:w-[30%] 2xl:w-[25%] h-screen bg-white px-4 fixed p-4">
        <Bill />
      </div>
    </div>
  );
}

