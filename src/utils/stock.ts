import {BasketItems} from "@/utils/calculate";
import {z} from 'zod';

const options: TOptions[] = [
    {
        name: BasketItems.Coffee,
        value: 1
    },
    {
        name: BasketItems.Orange,
        value: 2,
        discount: true,
        discountValue: 3,
        count: 2
    },
    {
        name: BasketItems.Bread,
        value: 3
    }
] as const;

const TOptionsSchema = z.object({
    name: z.enum([BasketItems.Coffee, BasketItems.Orange, BasketItems.Bread]),
    value: z.number(),
    discount: z.boolean().optional(),
    discountValue: z.number().optional(),
    count: z.number().optional(),
});


const OptionsArraySchema = z.array(TOptionsSchema);

export const parsedOptions = OptionsArraySchema.parse(options);

