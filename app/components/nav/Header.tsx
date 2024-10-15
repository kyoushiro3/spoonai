import { Label } from "@/components/ui/label";

export default function Header() {
  return (
    <div className="bg-[#E3E5E8] py-1">
      <div className="mx-auto max-w-7xl px-10 sm:px-6 md:px-12 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-bold text-xl md:text-2xl">SpoonAI🥄</h1>
          <Label className="text-sm md:text-base">
            Let AI generate an organized grocery list for you.
          </Label>
        </div>
      </div>    
    </div>
  );
}
