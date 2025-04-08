import Roof from "./Roof";

const Garage = () => {
  return (
    <group>
      <mesh position={[-5, 2.8, 0.2]}>
        <Roof height={1.2} width={5.3} depth={3.4} />
      </mesh>
      <mesh position={[-5, 1.4, 0]}>
        <boxGeometry args={[5, 2.8, 3]} />
        <meshNormalMaterial />
      </mesh>
    </group>
  );
};

export default Garage;
