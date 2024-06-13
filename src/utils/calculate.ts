export const defaultBasket: TItemOptions[] = ["coffee", "coffee", "orange", "orange", "orange", "bread"] as const;

export type TItemOptions = keyof typeof BasketItems;

const createEnumFromBasket = (basket: string[]): Record<string, string> => {
    const uniqueItems = [...new Set(basket)];
    return uniqueItems.reduce((acc, item) => {
        const key = item.charAt(0).toUpperCase() + item.slice(1);
        acc[key] = item;
        return acc;
    }, {} as Record<string, string>);
};

export const BasketItems = createEnumFromBasket(defaultBasket);
export const calculatePrice = (items: TItemOptions[], options: TOptions[], applyDiscount: boolean = true): number => {

    const itemCounts: Record<TItemOptions, number> = items.reduce((acc, item) => {
        acc[item] = (acc[item] || 0) + 1;
        return acc;
    }, {} as Record<TItemOptions, number>);

    return options.reduce((total, {name, value, discount, discountValue, count}) => {

        const itemCount = itemCounts[name as TItemOptions] || 0;
        const isDiscount = applyDiscount && discount && count && discountValue

        if (isDiscount) {
            const discountedSets = Math.floor(itemCount / count);
            const remainingItems = itemCount % count;
            total += discountedSets * discountValue + remainingItems * value
        } else {
            total += itemCount * value
        }
        return total;
    }, 0);
};


export const getDiscountDetails = (items: TItemOptions[], options: TOptions[]): DiscountDetails[] => {
    const itemCounts = items.reduce<Record<TItemOptions, number>>((acc, item) => {
        acc[item] = (acc[item] || 0) + 1;
        return acc;
    }, {});

    return options.map(({name, value, discount, discountValue, count}) => {
        const itemCount = itemCounts[name] || 0
        let discountedPrice = itemCount * value
        let itemsNeededForDiscount = 0

        if (discount && count && discountValue) {
            const discountedSets = Math.floor(itemCount / count)
            const remainingItems = itemCount % count
            discountedPrice = discountedSets * discountValue + remainingItems * value
            itemsNeededForDiscount = count
        }
        return {
            name,
            discountApplied: discount || false,
            itemsNeededForDiscount,
            discountedPrice
        };
    });
};