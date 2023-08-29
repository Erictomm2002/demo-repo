'use client'
import { useEffect, useState } from "react";
import Category from "./component/category";
import Product from "./component/product";
import BillItem from "./component/bill-item";

interface product {
  id: string;
  title: string;
  description: string;
  cost: number;
  category: string;
  img: string;
}

const products: product[] = [
  {
    id: "A1",
    title: "Bò beefsteak trong dai ngoài giòn Bò beefsteak trong dai ngoài giòn",
    description: "Được tạo bởi đầu bếp 5 sao michellin Được tạo bởi đầu bếp 5 sao michellin",
    cost: 300,
    category: "Cow",
    img: "https://i.pinimg.com/564x/19/92/dc/1992dcc3b43374db19bf841a8abc6af3.jpg"
  },


  {
    id: "A2",
    title: "Bò xào lúc lắc",
    description: "Được tạo bởi đầu bếp 5 sao michellin",
    cost: 200,
    category: "Cow",
    img: "https://i.pinimg.com/564x/19/92/dc/1992dcc3b43374db19bf841a8abc6af3.jpg"
  },

  {
    id: "A3",
    title: "Gà chiên tỏi ớt",
    description: "Được tạo bởi đầu bếp 5 sao michellin",
    cost: 250,
    category: "Chicken",
    img: "https://i.pinimg.com/564x/19/92/dc/1992dcc3b43374db19bf841a8abc6af3.jpg"
  },

  {
    id: "A4",
    title: "Gà xào mắm",
    description: "Được tạo bởi đầu bếp 5 sao michellin",
    cost: 190,
    category: "Chicken",
    img: "https://i.pinimg.com/564x/19/92/dc/1992dcc3b43374db19bf841a8abc6af3.jpg"
  },

  {
    id: "A5",
    title: "Bò sốt tiêu xanh",
    description: "Được tạo bởi đầu bếp 5 sao michellin",
    cost: 230,
    category: "Cow",
    img: "https://i.pinimg.com/564x/19/92/dc/1992dcc3b43374db19bf841a8abc6af3.jpg"
  },

  {

    id: "A6",
    title: "Bia tươi",
    description: "Được tạo bởi đầu bếp 5 sao michellin",
    cost: 100,
    category: "Drink",
    img: "https://i.pinimg.com/564x/19/92/dc/1992dcc3b43374db19bf841a8abc6af3.jpg"
  },

  {
    id: "A7",
    title: "Bò sốt vang",
    description: "Được tạo bởi đầu bếp 5 sao michellin",
    cost: 300,
    category: "Cow",
    img: "https://i.pinimg.com/564x/19/92/dc/1992dcc3b43374db19bf841a8abc6af3.jpg"
  },

  {
    id: "A8",
    title: "Coca Cola",
    description: "Được tạo bởi đầu bếp 5 sao michellin",
    cost: 50,
    category: "Drink",
    img: "https://i.pinimg.com/564x/19/92/dc/1992dcc3b43374db19bf841a8abc6af3.jpg"
  },

  {
    id: "A9",
    title: "Gà rang cháy cạnh",
    description: "Được tạo bởi đầu bếp 5 sao michellin",
    cost: 200,
    category: "Chicken",
    img: "https://i.pinimg.com/564x/19/92/dc/1992dcc3b43374db19bf841a8abc6af3.jpg"
  },

  {
    id: "A10",
    title: "Bánh dâu tây",
    description: "Được tạo bởi đầu bếp 5 sao michellin",
    cost: 200,
    category: "Cake",
    img: "https://i.pinimg.com/564x/19/92/dc/1992dcc3b43374db19bf841a8abc6af3.jpg"
  },

  {
    id: "A11",
    title: "Bò beefsteak original",
    description: "Được tạo bởi đầu bếp 5 sao michellin",
    cost: 700,
    category: "Cow",
    img: "https://i.pinimg.com/564x/19/92/dc/1992dcc3b43374db19bf841a8abc6af3.jpg"
  },

  {
    id: "A12",
    title: "Bánh bông lan trứng muối",
    description: "Được tạo bởi đầu bếp 5 sao michellin",
    cost: 150,
    category: "Cake",
    img: "https://i.pinimg.com/564x/19/92/dc/1992dcc3b43374db19bf841a8abc6af3.jpg"
  },

  {
    id: "A13",
    title: "Gà đi bộ",
    description: "Được tạo bởi đầu bếp 5 sao michellin",
    cost: 200,
    category: "Special",
    img: "https://i.pinimg.com/564x/19/92/dc/1992dcc3b43374db19bf841a8abc6af3.jpg"
  },
]

export default function Page() {
  const [foodList, setFoodList] = useState<product[]>(products);
  const [isScrolled, setScrolled] = useState(false);
  const [isReduce, setReduce] = useState(window.scrollY);
  const [bill, setBill] = useState<product[]>([]);
  const [totalCost, setTotalCost] = useState<number>(0);
  const categoryList: string[] = [];

  // 144 - 149: Tạo list category từ list product ban đầu
  products.forEach(product => {
    if (!categoryList.includes(product.category)) {
      categoryList.push(product.category);
    }
  });


  // 152 - 177: Xử lý thu nhỏ và phóng to thanh navbar khi scroll trang
  const handleScroll = () => {
    const demo = window.scrollY - isReduce;
    if (window.scrollY > 200) {
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
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isReduce]);


  return (
    <div className="font-mono">
      {/* MENU */}
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
                  if (food.category == cate) {
                    return <Product productItem={food} bill={bill} setBill={setBill} setTotalCost={setTotalCost}/>
                  }
                  return null;
                })}
              </div>
            </div>
          ))}
        </div>
      </div>


      {/* BILL */}
      <div className="inline-block w-[32%] xl:w-[30%] 2xl:w-[25%] h-screen bg-white px-4 fixed p-4 ">
        {/* Bill title */}
        <div className="h-[10%]  flex items-end pb-2">
          <div className="text-xl font-semibold 2xl:text-2xl">Current Order</div>
          <div className="grow flex justify-end">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" w-9 h-9 p-2 bg-gray-100">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
        </div>

        {/* Bill list */}
        <div className="relative h-[45%] overflow-y-auto">
          <p className="italic text-gray-500 -z-50 absolute text-sm w-full mt-2">Chưa có món nào được chọn</p>
          {
            bill.map((billProduct) => <BillItem billProduct={billProduct} bill={bill} setBill={setBill} />)
          }
        </div>

        {/* Total bill*/}
        <div className="h-[45%] py-8">
          <div className="w-full h-3/4 p-3 bg-gray-200 rounded-xl ">
            <div className="grid grid-rows-3 h-2/3 mb-2">
              <div className=" flex place-content-between items-center">
                <p className="text-gray-700 ">Pure Cost</p>
                <p className=" font-semibold">+{totalCost}</p>
              </div>

              <div className=" flex place-content-between items-center">
                <p className="text-gray-700 ">Tax</p>
                <p className=" font-semibold">+$0.00</p>
              </div>

              <div className=" flex place-content-between items-center">
                <p className="text-gray-700 ">Voucher</p>
                <p className=" font-semibold">-$0.00</p>
              </div>
            </div>

            <div className="h-1/3 flex place-content-between items-center border-t border-gray-500">
              <p className="text-gray-700  text-xl font-semibold">Total</p>
              <p className=" font-semibold">{totalCost}</p>
            </div>
          </div>
          <button className="w-full h-1/5 mt-8 bg-orange-600 text-white font-semibold text-base rounded-lg"> Pay Now </button>
        </div>
      </div>
    </div>

  );
}

