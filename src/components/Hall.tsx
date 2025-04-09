import { useLoader } from "@react-three/fiber";
import { TextureLoader, RepeatWrapping, SRGBColorSpace } from "three";
import Roof from "./Roof";

const Hall = () => {
  const wallColorTexture = useLoader(
    TextureLoader,
    "textures/wall/painted_plaster_wall_1k/painted_plaster_wall_arm_1k.png"
  );

  wallColorTexture.wrapS = RepeatWrapping;
  wallColorTexture.wrapT = RepeatWrapping;
  wallColorTexture.colorSpace = SRGBColorSpace;

  const wallARMTexture = useLoader(
    TextureLoader,
    "textures/wall/painted_plaster_wall_1k/painted_plaster_wall_arm_1k.png"
  );

  wallARMTexture.wrapS = RepeatWrapping;
  wallARMTexture.wrapT = RepeatWrapping;
  wallARMTexture.colorSpace = SRGBColorSpace;

  const wallNormalTexture = useLoader(
    TextureLoader,
    "textures/wall/painted_plaster_wall_1k/painted_plaster_wall_nor_gl_1k.png"
  );

  wallNormalTexture.wrapS = RepeatWrapping;
  wallNormalTexture.wrapT = RepeatWrapping;
  wallNormalTexture.colorSpace = SRGBColorSpace;

  return (
    <group>
      <mesh position={[0, 2.5, -3]}>
        <Roof height={2.5} width={15} depth={3.4} />
      </mesh>
      <mesh position={[0, 1.25, -3]}>
        <boxGeometry args={[15, 2.5, 3]} />
        <meshStandardMaterial
          map={wallColorTexture}
          normalMap={wallNormalTexture}
          aoMap={wallARMTexture}
          metalnessMap={wallARMTexture}
          roughnessMap={wallARMTexture}
        />
      </mesh>
    </group>
  );
};

export default Hall;
