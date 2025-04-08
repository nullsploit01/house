import { useMemo } from "react";
import * as THREE from "three";

export default function TriangleGeometry({
  width = 2, // width of base (X)
  height = 1, // height of triangle (Y)
  depth = 3, // depth of roof (Z)
  position = [0, 0, 0],
  children,
}: {
  width?: number;
  height?: number;
  depth?: number;
  color?: string;
  position?: [number, number, number];
  children?: React.ReactNode;
}) {
  const geometry = useMemo(() => {
    const geom = new THREE.BufferGeometry();

    const halfWidth = width / 2;
    const halfDepth = depth / 2;

    const vertices = new Float32Array([
      // Front triangle (z = +halfDepth)
      0,
      height,
      halfDepth, // top
      -halfWidth,
      0,
      halfDepth, // bottom left
      halfWidth,
      0,
      halfDepth, // bottom right

      // Back triangle (z = -halfDepth)
      0,
      height,
      -halfDepth, // top
      -halfWidth,
      0,
      -halfDepth, // bottom left
      halfWidth,
      0,
      -halfDepth, // bottom right
    ]);

    const indices = [
      // Front face
      0, 1, 2,
      // Back face
      5, 4, 3,
      // Left side
      1, 4, 5, 1, 5, 2,
      // Right side
      0, 3, 4, 0, 4, 1,
      // Base
      2, 5, 3, 2, 3, 0,
    ];

    geom.setIndex(indices);
    geom.setAttribute("position", new THREE.BufferAttribute(vertices, 3));
    geom.computeVertexNormals();

    return geom;
  }, [width, height, depth]);

  return (
    <mesh geometry={geometry} position={position}>
      {children ? children : <meshNormalMaterial />}
    </mesh>
  );
}
