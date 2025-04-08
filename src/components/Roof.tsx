import { DoubleSide } from "three";
import TriangleGeometry from "./geometry/Triangle";

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
  return (
    <TriangleGeometry
      height={height}
      width={width}
      depth={depth}
      position={position}
    >
      <meshNormalMaterial side={DoubleSide} />
    </TriangleGeometry>
  );
};

export default Roof;
