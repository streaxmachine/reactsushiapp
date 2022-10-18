import { useFrame } from "@react-three/fiber";
import { Suspense, useRef, useState } from "react";
import { Environment, OrbitControls } from "@react-three/drei";
import { useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { PresentationControls } from "@react-three/drei";
import { DirectionalLight } from "three";

export function Sushi2(props) {
  const { nodes, materials } = useGLTF("/sushi2.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube002.geometry}
        material={materials["Material.001"]}
        position={[0.02, 0.24, -0.7]}
        scale={[0.57, 0.4, 0.4]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube003.geometry}
        material={materials["Material.001"]}
        position={[0.02, 0.24, 0.78]}
        scale={[0.57, 0.4, 0.4]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane001.geometry}
        material={materials["Material.007"]}
        position={[0.02, 0.29, -0.7]}
        scale={0.76}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane002.geometry}
        material={materials["Material.007"]}
        position={[0.02, 0.29, 0.78]}
        scale={0.76}
      />
    </group>
  );
}
export function Sushi1(props) {
  const { nodes, materials } = useGLTF("/sushi1.glb");
  return (
    <group {...props} dispose={null}>
      <group position={[-1.36, 0.38, 0.73]} scale={0.49}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_1.geometry}
          material={materials["Material.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_2.geometry}
          material={materials["Material.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_3.geometry}
          material={materials["Material.004"]}
        />
      </group>
    </group>
  );
}

export function SushiPlate(props) {
  const { nodes, materials } = useGLTF("/sushiPlate.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        material={materials["Material.005"]}
        position={[-0.01, -0.02, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={materials["Material.006"]}
        position={[-0.08, 0.4, 3.02]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001.geometry}
        material={materials["Material.006"]}
        position={[-0.08, 0.4, 3.37]}
      />
    </group>
  );
}

export function Sushi3(props) {
  const { nodes, materials } = useGLTF("/sushi3.glb");
  return (
    <group {...props} dispose={null}>
      <group position={[-1.36, 0.38, 0.95]} scale={0.49}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube003.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube003_1.geometry}
          material={materials["Material.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube003_2.geometry}
          material={materials["Material.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube003_3.geometry}
          material={materials["Material.004"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube003_4.geometry}
          material={materials["Material.008"]}
        />
      </group>
    </group>
  );
}

export const Scene = ({ cube }) => {
  return (
    <>
      <Canvas
        className="canvas"
        flat
        shadows
        dpr={[1, 2]}
        camera={{ fov: 25, position: [0, 8, 13] }}
      >
        <ambientLight intensity={0.1} />
        <spotLight
          position={[1, 6, 8.5]}
          angle={0.2}
          penumbra={1}
          intensity={1}
          castShadow
          shadow-mapSize={[256, 256]}
        />
        <Environment preset="forest" />
        <Suspense>
          <SushiPlate scale={[0.5, 0.5, 0.5]} />
          {cube === "Nigiri" && (
            <Sushi1 scale={[0.5, 0.5, 0.5]} position={[0, 0, 0]} />
          )}
          {cube === "Uramaki" && (
            <Sushi2 position={[0, 0, 0]} scale={[0.5, 0.5, 0.5]} />
          )}
          {cube === "Gunkan maki" && (
            <Sushi3 position={[0, -0.02, -0.1]} scale={[0.5, 0.5, 0.5]} />
          )}
        </Suspense>

        <OrbitControls
          autoRotate
          enableZoom={false}
          minPolarAngle={-Math.PI / 3}
          maxPolarAngle={Math.PI / 3}
        />
      </Canvas>
    </>
  );
};

// sunset: string;
// dawn: string;
// night: string;
// warehouse: string;
// forest: string;
// apartment: string;
// studio: string;
// city: string;
// park: string;
// lobby: string;

useGLTF.preload("/sushi2.glb");
useGLTF.preload("/sushi3.glb");
useGLTF.preload("/sushi1.glb");
useGLTF.preload("/sushiPlate.glb");
