import { useEffect, useRef } from 'react';
import { scrollToSection } from '../utils/scrollUtils';

const DropdownMenu = ({ isOpen, onClose }) => {
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  const handleMenuItemClick = (sectionId) => {
    scrollToSection(sectionId);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div 
      ref={dropdownRef}
      className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-200"
    >
      <button
        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-indigo-100 transition-colors"
        onClick={() => handleMenuItemClick('about')}
      >
        About Event
      </button>
      <button
        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-indigo-100 transition-colors"
        onClick={() => handleMenuItemClick('schedule')}
      >
        Format & Schedule
      </button>
    </div>
  );
};

export default DropdownMenu;