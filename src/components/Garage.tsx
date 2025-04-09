import Roof from './Roof';
import { useLoader } from '@react-three/fiber';
import { RepeatWrapping, SRGBColorSpace, TextureLoader } from 'three';

const Garage = () => {
  const wallColorTexture = useLoader(
    TextureLoader,
    'textures/wall/painted_plaster_wall_1k/painted_plaster_wall_arm_1k.png',
  );

  wallColorTexture.wrapS = RepeatWrapping;
  wallColorTexture.wrapT = RepeatWrapping;
  wallColorTexture.colorSpace = SRGBColorSpace;

  const wallARMTexture = useLoader(
    TextureLoader,
    'textures/wall/painted_plaster_wall_1k/painted_plaster_wall_arm_1k.png',
  );

  wallARMTexture.wrapS = RepeatWrapping;
  wallARMTexture.wrapT = RepeatWrapping;
  wallARMTexture.colorSpace = SRGBColorSpace;

  const wallNormalTexture = useLoader(
    TextureLoader,
    'textures/wall/painted_plaster_wall_1k/painted_plaster_wall_nor_gl_1k.png',
  );

  wallNormalTexture.wrapS = RepeatWrapping;
  wallNormalTexture.wrapT = RepeatWrapping;
  wallNormalTexture.colorSpace = SRGBColorSpace;

  const doorColorTexture = useLoader(
    TextureLoader,
    'textures/door/wooden_garage_door_1k/wooden_garage_door_arm_1k.png',
  );

  doorColorTexture.wrapS = RepeatWrapping;
  doorColorTexture.wrapT = RepeatWrapping;
  doorColorTexture.colorSpace = SRGBColorSpace;

  const doorARMTexture = useLoader(
    TextureLoader,
    'textures/door/wooden_garage_door_1k/wooden_garage_door_arm_1k.png',
  );

  doorARMTexture.wrapS = RepeatWrapping;
  doorARMTexture.wrapT = RepeatWrapping;
  doorARMTexture.colorSpace = SRGBColorSpace;

  const doorNormalTexture = useLoader(
    TextureLoader,
    'textures/door/wooden_garage_door_1k/wooden_garage_door_nor_gl_1k.png',
  );

  doorNormalTexture.wrapS = RepeatWrapping;
  doorNormalTexture.wrapT = RepeatWrapping;
  doorNormalTexture.colorSpace = SRGBColorSpace;

  const doorDisplacementTexture = useLoader(
    TextureLoader,
    'textures/door/wooden_garage_door_1k/wooden_garage_door_disp_1k.png',
  );

  doorDisplacementTexture.wrapS = RepeatWrapping;
  doorDisplacementTexture.wrapT = RepeatWrapping;
  doorDisplacementTexture.colorSpace = SRGBColorSpace;

  return (
    <group>
      <mesh position={[-5, 2.8, 0.2]}>
        <Roof height={1.2} width={5.3} depth={3.4} />
      </mesh>
      // garage
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
      // garage door
      <mesh position={[-5, 1, 1.501]}>
        <planeGeometry args={[3, 2]} />
        <meshStandardMaterial
          map={doorColorTexture}
          aoMap={doorARMTexture}
          metalnessMap={doorARMTexture}
          roughnessMap={doorARMTexture}
          normalMap={doorNormalTexture}
          displacementMap={doorDisplacementTexture}
          displacementBias={-0.1}
        />
      </mesh>
    </group>
  );
};

export default Garage;
