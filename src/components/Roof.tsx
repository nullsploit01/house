import {
  DoubleSide,
  RepeatWrapping,
  SRGBColorSpace,
  TextureLoader,
} from "three";
import TriangleGeometry from "./geometry/Triangle";
import { useLoader } from "@react-three/fiber";

const Roof = ({
  width = 2, // width of base (X)
  height = 1, // height of triangle (Y)
  depth = 3, // depth of roof (Z)
  position = [0, 0, 0],
}: {
  width?: number;
  height?: number;
  depth?: number;
  color?: string;
  position?: [number, number, number];
}) => {
  const roofColorTexture = useLoader(
    TextureLoader,
    "textures/roof/ceramic_roof_01_1k/ceramic_roof_01_diff_1k.png"
  );

  roofColorTexture.colorSpace = SRGBColorSpace;
  roofColorTexture.repeat.set(3, 1);
  roofColorTexture.wrapS = RepeatWrapping;
  roofColorTexture.wrapT = RepeatWrapping;

  const roofARMTexture = useLoader(
    TextureLoader,
    "textures/roof/ceramic_roof_01_1k/ceramic_roof_01_arm_1k.png"
  );

  roofARMTexture.repeat.set(3, 1);
  roofARMTexture.wrapS = RepeatWrapping;
  roofARMTexture.wrapT = RepeatWrapping;

  const roofNormalTexture = useLoader(
    TextureLoader,
    "textures/roof/ceramic_roof_01_1k/ceramic_roof_01_nor_gl_1k.png"
  );

  roofNormalTexture.repeat.set(3, 1);
  roofNormalTexture.wrapS = RepeatWrapping;
  roofNormalTexture.wrapT = RepeatWrapping;

  const roofDisplacementTexture = useLoader(
    TextureLoader,
    "textures/roof/ceramic_roof_01_1k/ceramic_roof_01_disp_1k.png"
  );

  roofDisplacementTexture.repeat.set(3, 1);
  roofDisplacementTexture.wrapS = RepeatWrapping;
  roofDisplacementTexture.wrapT = RepeatWrapping;

  return (
    <TriangleGeometry
      height={height}
      width={width}
      depth={depth}
      position={position}
    >
      <meshStandardMaterial
        side={DoubleSide}
        map={roofColorTexture}
        aoMap={roofARMTexture}
        metalnessMap={roofARMTexture}
        normalMap={roofNormalTexture}
        roughnessMap={roofARMTexture}
      />
    </TriangleGeometry>
  );
};

export default Roof;
