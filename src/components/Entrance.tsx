import { useLoader } from "@react-three/fiber";
import { TextureLoader, RepeatWrapping, SRGBColorSpace } from "three";
import Roof from "./Roof";

const Entrance = () => {
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
      <mesh position={[0, 1.75, -0.75]}>
        <boxGeometry args={[1, 3.5, 1.5]} />
        <meshStandardMaterial
          map={wallColorTexture}
          normalMap={wallNormalTexture}
          aoMap={wallARMTexture}
          metalnessMap={wallARMTexture}
          roughnessMap={wallARMTexture}
        />
      </mesh>
      <mesh position={[-3.001, 1.75, -0.75]}>
        <boxGeometry args={[1, 3.5, 1.5]} />
        <meshStandardMaterial
          map={wallColorTexture}
          normalMap={wallNormalTexture}
          aoMap={wallARMTexture}
          metalnessMap={wallARMTexture}
          roughnessMap={wallARMTexture}
        />
      </mesh>
      <mesh position={[-1.5, 3.3, -0.75]} rotation-y={Math.PI * 0.5}>
        <boxGeometry args={[1.5, 0.4, 2]} />
        <meshStandardMaterial
          map={wallColorTexture}
          normalMap={wallNormalTexture}
          aoMap={wallARMTexture}
          metalnessMap={wallARMTexture}
          roughnessMap={wallARMTexture}
        />
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
