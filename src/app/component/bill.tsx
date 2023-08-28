import BillItem from "./bill-item";

export default function Bill() {
    return (
        <div className="h-full ">
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
            <div className="h-[45%]  overflow-y-auto">
                <BillItem />
                <BillItem />
                <BillItem />
                <BillItem />
            </div>

            {/* Total bill*/}
            <div className="h-[45%] py-8">
                <div className="w-full h-3/4 p-3 bg-gray-200 rounded-xl ">
                    <div className="grid grid-rows-3 h-2/3 mb-2">
                        <div className=" flex place-content-between items-center">
                            <p className="text-gray-700 ">Pure Cost</p>
                            <p className=" font-semibold">+$48.00</p>
                        </div>

                        <div className=" flex place-content-between items-center">
                            <p className="text-gray-700 ">Tax</p>
                            <p className=" font-semibold">+$3.00</p>
                        </div>

                        <div className=" flex place-content-between items-center">
                            <p className="text-gray-700 ">Voucher</p>
                            <p className=" font-semibold">-$8.00</p>
                        </div>
                    </div>


                    <div className="h-1/3 flex place-content-between items-center border-t border-gray-500">
                        <p className="text-gray-700  text-xl font-semibold">Total</p>
                        <p className=" font-semibold">$43.00</p>
                    </div>
                </div>
                <button className="w-full h-1/5 mt-8 bg-orange-600 text-white font-semibold text-base rounded-lg"> Pay Now </button>

            </div>
        </div>
    )
}

/*
    <div className="w-[35%] xl:w-[30%] inline-block bg-white px-4 fixed h-screen p-4">
        Bill title 
        <div className="h-[10%]  py-[9%] ">
          <p className="float-left inline-block font-bold text-xl">Current Order</p>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="inline-block float-right w-9 h-9 p-2 bg-gray-100">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </div>

        <div className="h-1/6 w-full flex justify-items-end">
          <div className="h-full w-[30%] p-2 inline-block">
            <img className="rounded-lg h-[80px] w-[80px]" src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg" alt="" />
          </div>

          <div className="h-full w-[70%] flex-col p-2  ">
            <div className="text-base font-semibold">
              Smoke chicken with great sauches
            </div>

            Other 
            <div className=" grow">
              <p className="">
                $10.01
              </p>

              <p className=" ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline-block">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="inline-block px-1">1</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline-block">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>

              </p>
            </div>
          </div>
        </div>



        Bill List 
        <div className="h-[45%] overflow-auto mt-2 ">
          <div className="h-1/3 grid grid-cols-3">
            Picture 
            <div className="h-full col-span-1 p-2 flex justify-center">
              <img className="h-full w-full rounded-lg inline-block" src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg" alt="" />
            </div>

            Content 
            <div className="col-span-2 grid grid-rows-2 p-2">
              Food title
              <div className="text-base font-semibold">
                Smoke chicken with great sauches
              </div>

              Other 
              <div className="relative">
                <p className="left-0 absolute bottom-0 text-orange-700">
                  $10.01
                </p>

                <p className="right-0 absolute bottom-0 ">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline-block">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="inline-block px-1">1</p>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline-block">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>

                </p>
              </div>
            </div>
          </div>

          <div className="h-1/3 grid grid-cols-3">
            Picture 
            <div className="h-full col-span-1 p-2 flex justify-center">
              <img className="h-full w-full rounded-lg" src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg" alt="" />
            </div>

            Content 
            <div className="col-span-2 grid grid-rows-2 p-2">
              Food title
              <div className="text-base font-semibold">
                Smoke chicken with great sauches
              </div>

              Other 
              <div className="relative">
                <p className="left-0 absolute bottom-0 text-orange-700">
                  $10.01
                </p>

                <p className="right-0 absolute bottom-0 ">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline-block">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="inline-block px-1">1</p>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline-block">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>

                </p>
              </div>
            </div>
          </div>


          <div className="h-1/3 grid grid-cols-3">
            Picture 
            <div className="h-full col-span-1 p-2 flex justify-center">
              <img className="rounded-lg h-full w-full" src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg" alt="" />
            </div>

            Content 
            <div className="col-span-2 grid grid-rows-2 p-2">
              Food title
              <div className="text-base font-semibold">
                Smoke chicken with great sauches
              </div>

              Other 
              <div className="relative">
                <p className="left-0 absolute bottom-0 text-orange-700">
                  $10.01
                </p>

                <p className="right-0 absolute bottom-0 ">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline-block">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="inline-block px-1">1</p>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline-block">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>

                </p>
              </div>
            </div>


          </div>


        </div>

        Bill total 
        <div className="h-[30%] left-4 right-4 bottom-12  absolute ">
          <div className="w-full h-3/4 bg-gray-200 rounded-xl relative">
            <div className="absolute  w-full h-[1/4] leading-8">
              <p className="text-gray-700 absolute left-2">Cost</p>
              <p className="absolute right-2 font-semibold">$45.00</p>
            </div>

            <div className="absolute top-[28%] w-full h-[1/4] leading-8">
              <p className="text-gray-700 absolute left-2">Cost</p>
              <p className="absolute right-2 font-semibold">$45.00</p>
            </div>

            <div className="absolute top-[53%] w-full h-[1/4] leading-8">
              <p className="text-gray-700 absolute left-2">Cost</p>
              <p className="absolute right-2 font-semibold">$45.00</p>
            </div>

            <div className="absolute top-[78%] w-full h-[1/4] border-t border-1 border-gray-500 leading-8">
              <p className="text-gray-700 absolute left-2 text-xl font-semibold">Total</p>
              <p className="absolute right-2 font-semibold">$48.00</p>
            </div>
          </div>
          <button className="w-full h-1/5 mt-8 bg-orange-600 text-white font-semibold text-base rounded-lg"> Pay Now </button>
        </div>
*/