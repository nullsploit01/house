import { useLoader } from '@react-three/fiber';
import { RepeatWrapping, SRGBColorSpace, TextureLoader } from 'three';

const Floor = () => {
  const floorAlphaTexture = useLoader(TextureLoader, 'textures/floor/alpha.webp');

  const floorColorTexture = useLoader(
    TextureLoader,
    'textures/floor/leafy_grass_1k/leafy_grass_diff_1k.png',
  );

  floorColorTexture.wrapS = RepeatWrapping;
  floorColorTexture.wrapT = RepeatWrapping;
  floorColorTexture.colorSpace = SRGBColorSpace;

  const floorARMTexture = useLoader(
    TextureLoader,
    'textures/floor/leafy_grass_1k/leafy_grass_arm_1k.png',
  );

  floorARMTexture.repeat.set(8, 8);
  floorARMTexture.wrapS = RepeatWrapping;
  floorARMTexture.wrapT = RepeatWrapping;

  const floorNormalTexture = useLoader(
    TextureLoader,
    'textures/floor/leafy_grass_1k/leafy_grass_nor_gl_1k.png',
  );

  floorNormalTexture.repeat.set(8, 8);
  floorNormalTexture.wrapS = RepeatWrapping;
  floorNormalTexture.wrapT = RepeatWrapping;

  const floorDisplacementMap = useLoader(
    TextureLoader,
    'textures/floor/leafy_grass_1k/leafy_grass_disp_1k.png',
  );

  floorDisplacementMap.repeat.set(8, 8);
  floorDisplacementMap.wrapS = RepeatWrapping;
  floorDisplacementMap.wrapT = RepeatWrapping;

  return (
    <mesh rotation-x={-Math.PI * 0.5}>
      <planeGeometry args={[50, 50, 200, 200]} />
      <meshStandardMaterial
        map={floorColorTexture}
        aoMap={floorARMTexture}
        metalnessMap={floorARMTexture}
        roughnessMap={floorARMTexture}
        normalMap={floorNormalTexture}
        displacementMap={floorDisplacementMap}
        displacementScale={0.3}
        displacementBias={-0.2}
        alphaMap={floorAlphaTexture}
        transparent
      />
    </mesh>
  );
};

export default Floor;
