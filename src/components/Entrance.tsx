import Roof from "./Roof";

const Entrance = () => {
  return (
    <group>
      <mesh position={[0, 1.75, -0.75]}>
        <boxGeometry args={[1, 3.5, 1.5]} />
        <meshNormalMaterial />
      </mesh>
      <mesh position={[-3, 1.75, -0.75]}>
        <boxGeometry args={[1, 3.5, 1.5]} />
        <meshNormalMaterial />
      </mesh>
      <mesh position={[-1.5, 3.3, -0.75]} rotation-y={Math.PI * 0.5}>
        <boxGeometry args={[1.5, 0.4, 2]} />
        <meshBasicMaterial color="red" />
      </mesh>
      <mesh position={[-1.5, 2.9, -0.75]} rotation-y={Math.PI * 0.5}>
        <boxGeometry args={[1.5, 0.4, 2]} />
        <meshBasicMaterial color="black" />
      </mesh>
      <mesh position={[-1.5, 3.5, -0.75]}>
        <Roof depth={1.5} width={4.5} />
      </mesh>
    </group>
  );
};

export default Entrance;
