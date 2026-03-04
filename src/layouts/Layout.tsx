import { Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <>
            <header className="bg-slate-800 text-4xl py-8 text-white font-bold">
                <div className="w-full max-w-6xl mx-auto">
                    Administrador de Productos
                </div>
            </header>
            <main className="mt-10 mx-auto max-w-6xl p-10 bg-white shadow">
                <Outlet />
            </main>
        </>
    )
}
