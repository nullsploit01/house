import { useLoader } from '@react-three/fiber';
import { RepeatWrapping, SRGBColorSpace, TextureLoader } from 'three';

const Floor = () => {
  const floorAlphaTexture = useLoader(TextureLoader, 'textures/floor/alpha.webp');

  const floorColorTexture = useLoader(
    TextureLoader,
    'textures/floor/leafy_grass_1k/leafy_grass_diff_1k.png',
  );

  floorColorTexture.repeat.set(10, 10);
  floorColorTexture.wrapS = RepeatWrapping;
  floorColorTexture.wrapT = RepeatWrapping;
  floorColorTexture.colorSpace = SRGBColorSpace;

  const floorARMTexture = useLoader(
    TextureLoader,
    'textures/floor/leafy_grass_1k/leafy_grass_arm_1k.png',
  );

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

  const garagePathColorTexture = useLoader(
    TextureLoader,
    'textures/floor/herringbone_brick_02_1k/herringbone_brick_02_diff_1k.png',
  );

  garagePathColorTexture.repeat.set(2, 2);
  garagePathColorTexture.wrapS = RepeatWrapping;
  garagePathColorTexture.wrapT = RepeatWrapping;
  garagePathColorTexture.colorSpace = SRGBColorSpace;

  const garagePathARMTexture = useLoader(
    TextureLoader,
    'textures/floor/herringbone_brick_02_1k/herringbone_brick_02_arm_1k.png',
  );

  garagePathARMTexture.wrapS = RepeatWrapping;
  garagePathARMTexture.wrapT = RepeatWrapping;
  garagePathARMTexture.colorSpace = SRGBColorSpace;

  const garagePathNormalTexture = useLoader(
    TextureLoader,
    'textures/floor/herringbone_brick_02_1k/herringbone_brick_02_nor_gl_1k.png',
  );

  garagePathNormalTexture.wrapS = RepeatWrapping;
  garagePathNormalTexture.wrapT = RepeatWrapping;
  garagePathNormalTexture.colorSpace = SRGBColorSpace;

  const garagePathDisplacementMap = useLoader(
    TextureLoader,
    'textures/floor/herringbone_brick_02_1k/herringbone_brick_02_disp_1k.png',
  );

  return (
    <group>
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
      <mesh position={[-5, 0.001, 10]} rotation-x={-Math.PI * 0.5}>
        <planeGeometry args={[5, 20]} />
        <meshStandardMaterial
          map={garagePathColorTexture}
          aoMap={garagePathARMTexture}
          metalnessMap={garagePathARMTexture}
          roughnessMap={garagePathARMTexture}
          normalMap={garagePathNormalTexture}
          displacementMap={garagePathDisplacementMap}
          displacementBias={-0.01}
          displacementScale={0.1}
        />
      </mesh>
    </group>
  );
};

export default Floor;
