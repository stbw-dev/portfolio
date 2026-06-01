import { useState } from "react";
import './AccordionItem.css'

function AccordionItem({ title, children }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="accordion-item">
            <button 
                className="accordion-button"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span>{title}</span>
                <span>{isOpen ? "-" : "+"}</span>
            </button>

            {isOpen && (
                <div className="accordion-content">
                    {children}
                </div>
            )}
        </div>
    );
}

export default AccordionItem;