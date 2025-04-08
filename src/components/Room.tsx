import Roof from "./Roof";

const Room = () => {
  return (
    <group>
      <mesh position={[5, 3, 0.2]}>
        <Roof height={1.2} width={5.3} depth={3.4} />
      </mesh>
      <mesh position={[5, 1.5, 0]}>
        <boxGeometry args={[5, 3, 3]} />
        <meshNormalMaterial />
      </mesh>
    </group>
  );
};

export default Room;
