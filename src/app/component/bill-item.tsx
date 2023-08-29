interface product {
    id: string;
    title: string;
    description: string;
    cost: number;
    category: string;
    img: string;
}

export default function BillItem({ billProduct, bill, setBill }: { billProduct: product, bill: product[], setBill: React.Dispatch<React.SetStateAction<product[]>> }) {
    function removeProductBill(removeProductId: string) {
        setBill((prevBill) => {
            return prevBill.filter((product) => product.id !== removeProductId);
        });
    }
    return (
        <div className="bg-white h-1/3 flex">
            {/* Bill item's picture */}
            <div className="p-2">
                <div className="w-20 h-20 xl:w-24 xl:h-24 2xl:w-26 2xl:h-26 bg-red-500 object-fill object-center rounded-md">
                    <img src={billProduct.img} className=" object-fill w-full h-full rounded-md" />
                </div>
            </div>

            {/* Bill item content*/}
            <div className=" grow p-2 h-20 xl:h-24 2xl:h-26">
                {/* Bill item title*/}
                <div className="line-clamp-2 font-semibold text-base  h-12">
                    {billProduct.title}
                </div>

                {/* Bill item cost - không chỉnh mb cho từng thằng được*/}
                <div className="h-1/2 flex items-end">
                    <p className="text-orange-700 text-lg   ">
                        ${billProduct.cost}
                    </p>

                    <p className="grow flex justify-end  ">
                        <button onClick={() => removeProductBill(billProduct.id)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline-block">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </button>

                        <p className="inline-block px-1">1</p>

                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline-block">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </button>

                    </p>
                </div>
            </div>
        </div>
    );
}