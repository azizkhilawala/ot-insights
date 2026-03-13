import { useState, useRef, useEffect } from 'react';
import { ChevronDown, Check } from 'lucide-react';

interface DropdownProps {
  options: string[];
  value: string;
  onChange: (value: string) => void;
  label?: string;
}

export default function Dropdown({ options, value, onChange, label }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      {label && (
        <span className="text-xs text-illumio-text-muted mr-2">{label}</span>
      )}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white border border-illumio-border-default rounded-md text-sm text-illumio-primary font-medium hover:bg-illumio-bg-light transition-colors"
      >
        <span>{value}</span>
        <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-1 min-w-[160px] bg-white border border-illumio-border-default rounded-lg shadow-lg z-50 py-1">
          {options.map((option) => (
            <button
              key={option}
              onClick={() => {
                onChange(option);
                setIsOpen(false);
              }}
              className={`w-full flex items-center justify-between px-3 py-2 text-sm transition-colors ${
                option === value
                  ? 'bg-illumio-primary/5 text-illumio-primary font-medium'
                  : 'text-illumio-text-primary hover:bg-illumio-bg-light'
              }`}
            >
              <span>{option}</span>
              {option === value && <Check className="w-4 h-4" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
