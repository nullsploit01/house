import { RepeatWrapping, SRGBColorSpace, TextureLoader } from "three";
import Roof from "./Roof";
import { useLoader } from "@react-three/fiber";

const Garage = () => {
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
      <mesh position={[-5, 2.8, 0.2]}>
        <Roof height={1.2} width={5.3} depth={3.4} />
      </mesh>
      <mesh position={[-5, 1.4, 0]}>
        <boxGeometry args={[5, 2.8, 3]} />
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

export default Garage;
