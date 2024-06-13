import {useMemo} from "react";
import {calculatePrice, getDiscountDetails, TItemOptions} from "@/utils/calculate";
import {parsedOptions} from "@/utils/stock";

type TUseBasketDetails = {
    discountedPrice: number
    price: number
    detailedList: DiscountDetails[]
}
const useBasketDetails = ({list: productsList}: TList<TItemOptions>): TUseBasketDetails => {

    const discountedPrice = useMemo(() => calculatePrice(productsList, parsedOptions), [productsList])
    const price = useMemo(() => calculatePrice(productsList, parsedOptions, false), [productsList])
    const detailedList = useMemo(() => getDiscountDetails(productsList, parsedOptions), [productsList])

    return {
        discountedPrice,
        price,
        detailedList
    }
}
export default useBasketDetails