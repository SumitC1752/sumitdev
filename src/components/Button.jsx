import React from 'react'

const Button = ({ className = "", size = "default", children, type = "button", disabled = false }) => {
    const baseClasses =
        "relative overflow-hidden rounded-full font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 shadow-md shadow-primary/25 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300";

    const sizeClasses = {
        sm: "px-4 py-2 text-sm",
        default: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg",
    };

    const classes = `${baseClasses} ${sizeClasses[size] || sizeClasses.default} ${className}`;

    return (
        <button className={classes} type={type} disabled={disabled}>
            <span className="flex items-center justify-center gap-2">
                {children}
            </span>
        </button>
    );
};

export default Button;
