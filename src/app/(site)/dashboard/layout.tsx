import { title } from "process";
import { InternHeader } from "@/components/internHeader";
import { Children } from "react";

export const metadata = {
    title: 'painel do site',
    description: 'todos os dashboards do site'
}

export default function DashLayout({
    children,

}:{children:React.ReactNode}) {
    return (
        <div>

            <h3>Header do Dashboard</h3>
            <InternHeader/>
             {children}
            <br />
            
        </div>
    )
}