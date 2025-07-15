import React from "react";
import { Menu, X } from "lucide-react";


interface NavigationProps {
    isMenuOpen: boolean;
    setIsMenuOpen: (isOpen: boolean) => void;
    activeSection: string;
    scrollToSection: (sectionId: string) => void;
}

export const Navigation: React.FC<NavigationProps> =
    ({
     isMenuOpen,
     setIsMenuOpen,
     activeSection,
     scrollToSection
      }) => {
        const menuItems = [
            { id: 'profile', label: 'Profil' },
            { id: 'experience', label: 'Expériences' },
            { id: 'skills', label: 'Compétences' },
            { id: 'projects', label: 'Projets' }
        ];

        return (
<nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                Portfolio
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                    {menuItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                                activeSection === item.id
                                    ? 'text-blue-400 bg-blue-400/10'
                                    : 'text-gray-300 hover:text-blue-400 hover:bg-blue-400/5'
                            }`}
                        >
                            {item.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>
        </div>
    </div>

    {/* Mobile Navigation */}
    {isMenuOpen && (
        <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-800">
                {menuItems.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors ${
                            activeSection === item.id
                                ? 'text-blue-400 bg-blue-400/10'
                                : 'text-gray-300 hover:text-blue-400 hover:bg-blue-400/5'
                        }`}
                    >
                        {item.label}
                    </button>
                ))}
            </div>
        </div>
    )}
</nav>
);
};
