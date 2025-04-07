import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import TriangleGeometry from "./geometry/Triangle";
import { DoubleSide } from "three";

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
        <group>
          // garage
          <mesh position={[-5, 2.65, 0.2]}>
            <TriangleGeometry height={1.2} width={5.3} depth={3.4} />
            <meshNormalMaterial side={DoubleSide} />
          </mesh>
          <mesh position={[-5, 1.25, 0]}>
            <boxGeometry args={[5, 2.8, 3]} />
            <meshNormalMaterial />
          </mesh>
          // hall
          <mesh position={[0, 2.5, -3]}>
            <TriangleGeometry height={2.5} width={15} depth={3.4} />
            <meshNormalMaterial side={DoubleSide} />
          </mesh>
          <mesh position={[0, 1.25, -3]}>
            <boxGeometry args={[15, 2.5, 3]} />
            <meshNormalMaterial />
          </mesh>
          // entrance
          <group>
            <mesh>
              <boxGeometry args={[1, 5, 1]} />
              <meshNormalMaterial />
            </mesh>
            <mesh position={[-3, 0, 0]}>
              <boxGeometry args={[1, 7, 1]} />
              <meshNormalMaterial />
            </mesh>
          </group>
          // room
          <mesh position={[5, 3, 0.2]}>
            <TriangleGeometry height={1.2} width={5.3} depth={3.4} />
            <meshNormalMaterial side={DoubleSide} />
          </mesh>
          <mesh position={[5, 1.5, 0]}>
            <boxGeometry args={[5, 3, 3]} />
            <meshNormalMaterial />
          </mesh>
          // floor
          <mesh rotation-x={-Math.PI * 0.5}>
            <planeGeometry args={[50, 50, 50, 50]} />
            <meshNormalMaterial />
          </mesh>
        </group>
        <OrbitControls makeDefault />
      </Canvas>
    </div>
  );
};

export default CanvasWrapper;
