import React from 'react';

export default function ArrowComponent({direction, clickFunction, glyph}) {
    return (
        <div
            className={ `slide-arrow ${direction}` }
            onClick={ clickFunction }>
            { glyph }
        </div>
    )
}

