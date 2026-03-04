import type { Product } from "../types"
import { formatCurrency } from "../helpers"
import { useNavigate, Form, type ActionFunctionArgs, redirect, useFetcher } from "react-router-dom"
import { deleteProduct } from "../services/ProductServices"
import { sileo } from "sileo"

type ProductDetailsProps = {
    product: Product
}

export async function action({ params }: ActionFunctionArgs) {

    if (params.id !== undefined) {
        const response = await deleteProduct(+params.id)
        if (response) {
            sileo.success({ title: response })

            return redirect('/')
        }
    }
}

export default function ProductDetails({ product }: ProductDetailsProps) {

    const navigate = useNavigate()
    const fetcher = useFetcher()
    const isAvailable = product.availability

    return (
        <>
            <tr className="border-b ">
                <td className="p-3 text-lg text-gray-800">
                    {product.name}
                </td>
                <td className="p-3 text-lg text-gray-800">
                    {formatCurrency(product.price)}
                </td>
                <td className="p-3 text-lg text-gray-800">
                    <fetcher.Form method="POST">
                        <button
                            type="submit"
                            name="id"
                            value={product.id}
                            className={`w-full border border-gray-300 rounded-lg p-2 text-sm font-bold cursor-pointer ${isAvailable ? 'text-black' : 'text-red-400'}`}
                        >
                            {isAvailable ? 'Disponible' : 'No disponible'}
                        </button>
                    </fetcher.Form>
                </td>
                <td className="p-3 text-lg text-gray-800 ">
                    <div className="flex justify-center items-center gap-2">
                        <button
                            onClick={() => navigate(`/productos/${product.id}/editar`)}
                            className="w-full rounded-lg bg-indigo-600 p-3 text-sm font-bold text-white shadow-sm hover:bg-indigo-500 cursor-pointer"
                        >
                            Editar
                        </button>
                        <Form
                            className="w-full"
                            method="POST"
                            action={`/productos/${product.id}/eliminar`}
                            onSubmit={(e) => {
                                if (!confirm('¿Estás seguro de eliminar el producto?')) {
                                    e.preventDefault()
                                }
                                sileo.success({ title: 'Producto eliminado correctamente' })
                            }}
                        >
                            <input
                                type="submit"
                                value="Eliminar"
                                className="w-full rounded-lg bg-red-600 p-3 text-sm font-bold text-white shadow-sm hover:bg-red-500 cursor-pointer"
                            />
                        </Form>
                    </div>
                </td>
            </tr>
        </>
    )
}
