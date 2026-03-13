import { Search, HelpCircle, User, Command } from 'lucide-react';

export default function Header() {
  return (
    <header className="h-14 bg-white border-b border-illumio-border-default flex items-center justify-between px-6">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm">
        <span className="text-illumio-text-secondary">Home</span>
        <span className="text-illumio-text-muted">/</span>
        <span className="text-illumio-text-secondary">Insights</span>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-3">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-illumio-text-muted" />
          <input
            type="text"
            placeholder="Search"
            className="w-64 bg-illumio-bg-light border border-illumio-border-default rounded-lg pl-9 pr-12 py-2 text-sm text-illumio-text-primary placeholder:text-illumio-text-muted focus:outline-none focus:border-illumio-border-focus focus:ring-1 focus:ring-illumio-border-focus"
          />
          <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-0.5 text-illumio-text-muted">
            <Command className="w-3 h-3" />
            <span className="text-xs">K</span>
          </div>
        </div>

        {/* Help */}
        <button className="p-2 text-illumio-text-secondary hover:text-illumio-text-primary hover:bg-illumio-bg-elevated rounded-full transition-colors">
          <HelpCircle className="w-5 h-5" />
        </button>

        {/* User Avatar */}
        <button className="w-9 h-9 rounded-full overflow-hidden border-2 border-illumio-border-default hover:border-illumio-primary transition-colors">
          <div className="w-full h-full bg-gradient-to-br from-illumio-orange to-illumio-coral flex items-center justify-center">
            <User className="w-5 h-5 text-white" />
          </div>
        </button>

        {/* AI Assistant */}
        <button className="w-9 h-9 rounded-full bg-illumio-primary flex items-center justify-center hover:bg-illumio-primary-dark transition-colors">
          <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm0 18a8 8 0 118-8 8 8 0 01-8 8z" />
            <path d="M12 6a1 1 0 00-1 1v4.59l-2.29-2.3a1 1 0 00-1.42 1.42l4 4a1 1 0 001.42 0l4-4a1 1 0 00-1.42-1.42L14 11.59V7a1 1 0 00-1-1z" />
          </svg>
        </button>
      </div>
    </header>
  );
}
