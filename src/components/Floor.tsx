const Floor = () => {
  return (
    <mesh rotation-x={-Math.PI * 0.5}>
      <planeGeometry args={[50, 50, 50, 50]} />
      <meshNormalMaterial />
    </mesh>
  );
};

export default Floor;
