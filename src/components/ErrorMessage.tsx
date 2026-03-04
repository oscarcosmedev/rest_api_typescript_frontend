import type { PropsWithChildren } from "react";

export default function ErrorMessage({ children }: PropsWithChildren) {
    return (
        <div className="bg-red-600 my-10 text-white text-center p-3 font-bold uppercase">{children}</div>
    )
}
