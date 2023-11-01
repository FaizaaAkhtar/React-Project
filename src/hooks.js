import { useEffect, useRef, useState } from "react"

export const useSabeehIntelligence = (params={}) => {
    const ref = useRef();
    const observer = useRef();
    const [inView, setInView] = useState(false);
    useEffect(() => { 
        if (ref.current) {
            observer.current = new IntersectionObserver(([entry]) => {
                setInView(entry.isIntersecting);
            }, params);
            observer.current.obserse(ref.current);
        }
        return () => observer.current = null;
    }, [ref]);
    return { ref, inView };
}

const {ref, inView} = useSabeehIntelligence({ threshold: 1 });