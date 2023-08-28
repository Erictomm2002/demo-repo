export default function Category({ categoryName }: { categoryName: string }){
    const hrefWithoutSpace = "#" + categoryName.replace(/\s+/g, '');
    return(
        <li className="inline-block py-1.5 xl:py-2 2xl:py-3 px-4 xl:px-6 2xl:px-8 text-center w-60 bg-white hover:bg-orange-700 font-semibold text-black hover:text-white rounded-lg mr-4">
            <a href={hrefWithoutSpace} className="">{categoryName}</a>
        </li>
            
    )
}