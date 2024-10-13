import { Label } from "@/components/ui/label";

export default function Header(){
    return(
        <div className="bg-[#E3E5E8] py-1">
            <div className="max-w-3xl mx-auto ">
            <h1 className="font-bold text-2xl">SpoonAI🥄</h1>
            <Label>Let AI generate an organized grocery list for you.</Label>
            </div>
        </div>
    )
}