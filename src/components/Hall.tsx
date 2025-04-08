import Roof from "./Roof";

const Hall = () => {
  return (
    <group>
      <mesh position={[0, 2.5, -3]}>
        <Roof height={2.5} width={15} depth={3.4} />
      </mesh>
      <mesh position={[0, 1.25, -3]}>
        <boxGeometry args={[15, 2.5, 3]} />
        <meshNormalMaterial />
      </mesh>
    </group>
  );
};

export default Hall;
