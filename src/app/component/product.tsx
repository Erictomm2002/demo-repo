import { useEffect } from "react";

interface product {
    id: string;
    title: string;
    description: string;
    cost: number;
    category: string;
    img: string;
}


export default function Product({ productItem, bill, setBill, setTotalCost }: { productItem: product, bill: product[], setBill: React.Dispatch<React.SetStateAction<product[]>>, setTotalCost: React.Dispatch<React.SetStateAction<number>>; }) {
    function addProductBill(newProduct: product) {
        setBill((prevBill) => {
            const newBill = [...prevBill]; // Tạo một bản sao của mảng hiện tại
            newBill.unshift(newProduct);    // Thêm phần tử mới vào đầu mảng
            setTotalCost(() => {
                let totalCost = 0;
                newBill.forEach((billProduct) => {
                    totalCost += billProduct.cost;
                });

                return totalCost;
            })
            return newBill;                // Trả về mảng mới đã thêm phần tử
        });
    }





    return (
        <div className="max-w-2xl mx-auto ">
            <div className="bg-white shadow-md rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700 h-[450px] w-[19vw] xl:w-[20vw] 2xl:w-[16vw]">
                <img
                    className="rounded-t-lg p-3 w-full h-2/3"
                    src={productItem.img}
                    alt="product image"
                />


                <div className="px-5 pb-4 flex flex-col justify-center h-1/3">
                    <a href="#">
                        <h3 className="w-full text-gray-900 font-semibold text-sm 2xl:text-base tracking-tight dark:text-white line-clamp-2 h-10 2xl:h-12 ">
                            {productItem.title}
                        </h3>
                    </a>

                    <div className=" mt-2 mb-2 grow flex content-center">
                        <p className="italic text-gray-500 text-xs h-8 line-clamp-2">{productItem.description}</p>
                    </div>

                    <div className="flex items-bottom items-end justify-between">
                        <span className="text-xl font-bold text-gray-900 dark:text-white">
                            ${productItem.cost}
                        </span>
                        <button
                            onClick={() => {
                                addProductBill(productItem)
                            }}
                            className="text-white bg-orange-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center dark:bg-blue-600 dark:hover:bg-orange-700 dark:focus:ring-blue-800"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                            </svg>

                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}