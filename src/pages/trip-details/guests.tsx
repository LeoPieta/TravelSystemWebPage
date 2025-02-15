import { CircleDashed, UserCog } from "lucide-react";
import { Button } from "../../components/button";

export function Guests() {
    return (
        <div className="space-y-6">
            <h2 className="font-semibold text-xl">Convidados</h2>
            <div className="space-y-5">
                <div className="flex items-center justify-between gap-4">
                <div className="space-y-1.5 flex-1">
                    <span className="block font-medium text-zinc-100">Leonardo</span>
                    <span className="block text-sm text-zinc-400 truncate">leo@leo.com</span>
                </div>
                <CircleDashed className="size-5 text-zinc-400"/>
                </div>
                <div className="flex items-center justify-between gap-4">
                <div className="space-y-1.5 flex-1">
                    <span className="block font-medium text-zinc-100">Leozinho</span>
                    <span className="block text-sm text-zinc-400 truncate">teste@teste.com</span>
                </div>
                <CircleDashed className="size-5 text-zinc-400"/>
                </div>
            </div>
            <Button size="full" variant="secondary">
                <UserCog className='size-5'/>
                Gerenciar Convidados
            </Button>
        </div>
    )
}