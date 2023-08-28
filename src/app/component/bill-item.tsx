export default function BillItem() {
    return (
        <div className="h-1/3 flex">
            {/* Bill item's picture */}
            <div className=" p-2 ">
                <div className="w-20 h-20 xl:w-24 xl:h-24 bg-red-500 object-fill object-center rounded-md">
                    <img src="https://fujifoods.vn/wp-content/uploads/2020/12/beef-steak-bo-toi-cover.jpg"  className=" object-fill w-full h-full rounded-md" />
                </div>

            </div>

            {/* Bill item content*/}
            <div className="h-full grow  p-2">
                {/* Bill item title*/}
                <div className="h-1/2 line-clamp-2 font-semibold">
                    Lorem ipsum dolor sit, amet consectetur
                </div>

                {/* Bill item cost*/}
                <div className="h-1/2 flex items-end ">
                    <p className="mb-3 xl:mb-2 2xl:mb-5 text-orange-700 text-lg">
                        $10.01
                    </p>

                    <p className="grow mb-3 xl:mb-2 2xl:mb-5 flex justify-end">
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
    );
}