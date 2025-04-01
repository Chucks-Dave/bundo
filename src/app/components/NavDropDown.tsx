import React, { useState } from "react";
import Image from "next/image";
interface DropdownProps {
  label: string;
  items: string[];
  onItemSelect?: (item: string) => void;
  className?: string;
}

const NavbarDropDown: React.FC<DropdownProps> = ({
  label,
  items,
  onItemSelect,
  className = "",
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item: string) => {
    if (onItemSelect) {
      onItemSelect(item);
    }
    setIsOpen(false);
  };

  return (
    <div className={`relative ${className}`}>
      <button
        onClick={toggleDropdown}
        className="flex items-center justify-between w-full "
      >
        <span className="text-[#11381C] font-bold text-[18px]">{label}</span>
        {isOpen ? (
          <Image src="/up.png" height={16} width={16} alt="bundo" />
        ) : (
          <Image src="/down.png" height={16} width={16} alt="bundo" />
        )}
      </button>

      {isOpen && (
        <div className="absolute  mt-5 ">
          <ul className="py-5">
            {items.map((item, index) => (
              <li key={index} className="space-y-1">
                <button
                  onClick={() => handleItemClick(item)}
                  className="block px-4 py-1 "
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavbarDropDown;
