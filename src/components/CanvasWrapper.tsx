import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import Floor from "./Floor";
import Garage from "./Garage";
import Hall from "./Hall";
import Entrance from "./Entrance";
import Room from "./Room";

const CanvasWrapper = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleDblClick = () => {
      const container = containerRef.current;
      if (!container) return;

      const fullscreenElement =
        document.fullscreenElement || (document as any).webkitFullscreenElement;

      if (!fullscreenElement) {
        container.requestFullscreen?.() ||
          (container as any).webkitRequestFullscreen?.();
      } else {
        document.exitFullscreen?.() ||
          (document as any).webkitExitFullscreen?.();
      }
    };

    const resizeCanvas = () => {
      setTimeout(() => {
        window.dispatchEvent(new Event("resize"));
      }, 100);
    };

    window.addEventListener("dblclick", handleDblClick);
    document.addEventListener("fullscreenchange", resizeCanvas);
    document.addEventListener("webkitfullscreenchange", resizeCanvas);

    return () => {
      window.removeEventListener("dblclick", handleDblClick);
      document.removeEventListener("fullscreenchange", resizeCanvas);
      document.removeEventListener("webkitfullscreenchange", resizeCanvas);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <Canvas
        style={{ width: "100%", height: "100%" }}
        dpr={Math.min(window.devicePixelRatio, 2)}
        className="webgl"
        camera={{
          fov: 75,
          near: 0.1,
          far: 100,
          position: [4, 2, 5],
          aspect: window.innerWidth / window.innerHeight,
        }}
      >
        <ambientLight intensity={0.275} />
        <directionalLight position={[3, 7, 0]} intensity={1} />
        <group>
          // garage
          <Garage />
          // hall
          <Hall />
          // entrance
          <Entrance />
          // room
          <Room />
          // floor
          <Floor />
        </group>
        <OrbitControls makeDefault />
      </Canvas>
    </div>
  );
};

export default CanvasWrapper;
