import {TItemOptions} from "@/utils/calculate";
import useBasketDetails from "@/hooks/useBasketDetails";


const List = ({list: productsList}: TList<TItemOptions>) => {

    const {discountedPrice, price, detailedList} = useBasketDetails({list: productsList})


    return (
        <div>
            <h1>Stock Resources [DATA] </h1>
            <ul aria-label="Stock Resources">
                {detailedList.map(({name, discountedPrice, discountApplied, itemsNeededForDiscount}, index) => (
                    <li key={index} aria-label={`Item ${name}`}>
                        Name: {name} | Discounted Price: {discountedPrice}
                        {discountApplied && ` | Discount after: ${itemsNeededForDiscount} items`}
                    </li>
                ))}
            </ul>
            <h2 className="mt-2">Your shopping list</h2>
            <ul aria-label="Your shopping list" className="flex row gap-2">
                {productsList.map((item, index) => (
                    <li key={index} aria-label={`Item ${item}`}>
                        {item}
                    </li>
                ))}
            </ul>
            <div className="flex row gap-2 mt-2">
                <h2 className="font-bold" id="current-price">Current Price ( with discount):</h2>
                <p aria-labelledby="current-price">${discountedPrice}</p>
            </div>
            <div className="flex row gap-2">
                <h2 className="font-bold" id="current-price">Current Price ( without discount):</h2>
                <p aria-labelledby="current-price">${price}</p>
            </div>

        </div>
    );
}
export default List