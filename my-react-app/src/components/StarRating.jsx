import React, { useState } from 'react';
import './StarRating.scss'

const StarRating = ({ rating = 0, reviewCount = 0, onRate }) => {
    const [hovered, setHovered] = useState(0);
    const [selected, setSelected] = useState(rating);

    const handleClick = (value) => {
        setSelected(value);
        if (onRate) {
            onRate(value);
        }
    };

    return (
        <div className="star-rating">
            {[1, 2, 3, 4, 5].map((value) => (
                <span
                    key={value}
                    className={`star ${(hovered || selected) >= value ? 'filled' : ''}`}
                    onMouseEnter={() => setHovered(value)}
                    onMouseLeave={() => setHovered(0)}
                    onClick={() => handleClick(value)}
                >
                    ★
                </span>
            ))}
            <span className="review-count">({reviewCount})</span>
        </div>
    );
};

export default StarRating;
