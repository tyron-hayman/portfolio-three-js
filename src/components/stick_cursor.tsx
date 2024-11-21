import { useEffect } from "react";
import { useSpring, useMotionValue, motion } from "framer-motion";



export default function StickCursor() {

    const cursorSize = 40;
    const mouse = {
        x: useMotionValue(0),
        y: useMotionValue(0)
    }

    const smoothOptions = {damping: 20, stiffness: 300, mass: 0.5}
    const smoothMouse = {
        x: useSpring(mouse.x, smoothOptions),
        y: useSpring(mouse.y, smoothOptions)
    }

    const manageMouseMove = ( e : any ) => {
        const { clientX, clientY } = e;
        mouse.x.set(clientX - cursorSize / 2);
        mouse.y.set(clientY - cursorSize / 2);
    }

    useEffect( () => {
        window.addEventListener("mousemove", manageMouseMove);
        return () => {
        window.removeEventListener("mousemove", manageMouseMove)
        }
    }, [])

    return (
        <motion.div 
            style={{
                left: smoothMouse.x, 
                top: smoothMouse.y,
            }} 
            className="fixed w-[40px] h-[40px] bg-white/30 backdrop-invert block z-[100] pointer-events-none rounded-full">
        </motion.div>
    );
}