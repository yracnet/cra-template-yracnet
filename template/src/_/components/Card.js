import React from 'react'

export const Card = ({ children, header, footer }) => {
    return (
        <div className="card">
            {header && <div className="card-header">{header}</div>}
            {children && <div className="card-body">{children}</div>}
            {footer && <div className="card-footer">{footer}</div>}
        </div>
    )
}
