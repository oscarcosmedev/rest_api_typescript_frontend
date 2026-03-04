import { object, string, number, boolean, type InferOutput, type InferInput, array } from "valibot"

export const DraftProductSchema = object({
    name: string(),
    price: number()
})

export const ProductSchema = object({
    id: number(),
    name: string(),
    price: number(),
    availability: boolean()
})

export const ProductsSchema = array(ProductSchema)

export type Product = InferOutput<typeof ProductSchema>
export type DraftProduct = InferInput<typeof DraftProductSchema>