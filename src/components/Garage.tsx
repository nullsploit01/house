import TriangleGeometry from "./geometry/Triangle";
import { DoubleSide } from "three";

const Garage = () => {
  return (
    <group>
      <mesh position={[-5, 2.8, 0.2]}>
        <TriangleGeometry height={1.2} width={5.3} depth={3.4} />
        <meshNormalMaterial side={DoubleSide} />
      </mesh>
      <mesh position={[-5, 1.4, 0]}>
        <boxGeometry args={[5, 2.8, 3]} />
        <meshNormalMaterial />
      </mesh>
    </group>
  );
};

export default Garage;
