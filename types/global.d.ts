declare global {


    type TOptions = {
        name: string
        value: number
        discount?: boolean
        count?: number
        discountValue?: number
    }

    type TList<T> = {
        list: T[]
    }

    type DiscountDetails = {
        name: string;
        discountApplied: boolean;
        itemsNeededForDiscount: number;
        discountedPrice: number;
    };


}

export {}