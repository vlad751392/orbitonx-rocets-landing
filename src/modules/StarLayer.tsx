import { useEffect } from 'react';
import '@/stats.css'

export const StarLayer = () => {
    useEffect(() => {
        const createStars = (layer : any) => {
            let limit = 30;
            while (limit) {
                const star = document.createElement('span');
                star.className = 'star';
                star.innerHTML = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M10.744,5.372C7.777,5.372,5.372,2.967,5.372,0c0,2.967-2.405,5.372-5.372,5.372c2.967,0,5.372,2.405,5.372,5.372 C5.372,7.777,7.777,5.372,10.744,5.372z"/></svg>';
                star.style.left = randomInt(1, 100) + '%';
                star.style.top = randomInt(1, 100) + '%';
                star.style.transform = 'scale(' + randomNum(0, 1) + ')';
                star.style.opacity = randomNum(0.6, 1);
                layer.appendChild(star);
                limit--;
            }
        };

        document.querySelectorAll('.layer').forEach(createStars);

        return () => {
            // Clean-up function
            document.querySelectorAll('.layer .star').forEach(star => star.remove());
        };
    }, []);

    const randomInt = (min : number, max : number) => {
        return Math.floor((Math.random() * max) + min);
    };

    const randomNum = (min : number, max : number) => {
        return Math.max((Math.random() * max), min).toFixed(1);
    };

    return (
        <div id="layers">
            <div className="layer layer-1"></div>
            <div className="layer layer-2"></div>
            <div className="layer layer-3"></div>
            <div className="layer layer-4"></div>
            <div className="layer layer-5"></div>
        </div>
    );
};
