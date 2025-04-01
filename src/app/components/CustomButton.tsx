import type React from "react";

interface BundoButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "sm" | "lg";
}

export function CustomButton({
  children,
  className = "",
  variant = "default",
  size = "default",
  ...props
}: BundoButtonProps) {
  let buttonClasses =
    "inline-flex items-center justify-center rounded-md text-[14px] font-bold  transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

  if (variant === "default") {
    buttonClasses +=
      " bg-[#0B3B22] text-white lg:w-[150px] max-md:w-full whitespace-nowrap cursor-pointer text-[12px] font-normal ";
  } else if (variant === "outline") {
    buttonClasses +=
      " border border-[##34A853] text-[#34A853] text-[14px] font-normal lg:w-[150px] max-md:w-full whitespace-nowrap cursor-pointer";
  } else if (variant === "ghost") {
    buttonClasses += " text-[#0B3B22] hover:bg-[#0B3B22]/10 ";
  }

  if (size === "default") {
    buttonClasses += " h-10 px-4 py-2 ";
  } else if (size === "sm") {
    buttonClasses += " h-9 px-3";
  } else if (size === "lg") {
    buttonClasses += " h-11 px-8";
  }

  if (className) {
    buttonClasses += " " + className;
  }

  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  );
}

// export default function CustomButton() {
//   return (
//     <div className="flex flex-col items-center gap-4 p-8">
//       <BundoButton>Sell on Bundo</BundoButton>
//       <BundoButton size="lg">Sell on Bundo</BundoButton>
//       <BundoButton variant="outline">Sell on Bundo</BundoButton>
//       <BundoButton variant="ghost">Sell on Bundo</BundoButton>
//     </div>
//   );
// }
