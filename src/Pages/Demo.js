import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame, useLoader } from 'react-three-fiber';
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls, softShadows } from 'drei';
import Cup from '../images/demo.glb';

import '../App.css';


softShadows();
const Spaceship = () => {
  const mesh = useRef();
  useFrame(() => {
    mesh.current.position.y = -.9;
    mesh.current.rotation.y += 0
    mesh.current.rotation.x += 0
  })
  const { nodes, materials } = useLoader(GLTFLoader, Cup);
  console.log(nodes);
  console.log(materials);
  const entries = Object.entries(materials)
  console.log(entries)
  for (var x of entries) {
    console.log(x[1])

    x[1].roughness = 0.3;
    x[1].transparent = true;
    x[1].wireframe = false;
    x[1].transmission = .9;

    x[1].reflectivity = .8;
    console.log(x[1].opacity);
  }
  materials.tmh.wireframe = false;
  materials.tmh.transmission = 0;

  materials.tmh.reflectivity = 0;

  materials['Material.005'].color.r = .8;
  materials['Material.005'].color.g = 1;
  materials['Material.005'].color.b = 0;
  materials['Material.004'].color.r = .6;
  materials['Material.004'].color.g = .2;
  materials['Material.004'].color.b = 0;
  materials['Material.006'].color.r = 1;
  materials['Material.006'].color.g = 1;
  materials['Material.006'].color.b = 0;
  materials['Material.007'].color.r = 1;
  materials['Material.007'].color.g = 1;
  materials['Material.007'].color.b = 0;
  materials['Material.003'].reflectivity = 0;
  materials['Material.003'].transmission = 0;
  materials['Material.002'].transmission = 0;
  materials['Material.002'].reflectivity = 0;



  console.log(materials.tmh.color)
  return (
    <group ref={mesh} dispose={null}>
      <mesh
        material={materials['Material.004']}
        geometry={nodes.Plane.geometry}
        position={[1.49, -0.16, 0.23]}
        scale={[1.29, 1.65, 1.29]}
      />
      <mesh
        material={materials['Material.007']}
        geometry={nodes.Torus.geometry}
        position={[0, 0.63, 0.23]}
        scale={[0.39, 0.19, 0.39]}
      />
      <mesh
        material={materials['Material.006']}
        geometry={nodes.Icosphere.geometry}
        position={[0, 1.02, 0.23]}
        scale={[-0.54, -0.54, -0.54]}
      />
      <mesh
        material={materials['Material.005']}
        geometry={nodes.Cone.geometry}
        position={[-0.01, 1.4, 0.21]}
        rotation={[0.66, 0.04, 3.12]}
        scale={[1.56, 1.43, 1.47]}
      />
      <mesh
        material={materials['Material.003']}
        geometry={nodes.Text.geometry}
        position={[0.02, 0.41, 0.72]}
        rotation={[1.33, 0, 0]}
        scale={[0.22, 0.22, 0.22]}
      />
      <mesh
        material={materials['Material.002']}
        geometry={nodes.Text001.geometry}
        position={[0.01, 1.98, 0.53]}
        rotation={[0.65, 0.02, -0.02]}
        scale={[0.26, 0.26, 0.26]}
      />
      <mesh
        material={materials.tmh}
        geometry={nodes.tmh.geometry}
        position={[0.01, 0.14, 0.78]}
        rotation={[1.33, 0, 0]}
        scale={[0.21, 0.21, 0.21]}
      />
    </group>
  )

}
function Loading() {
  return (
    <mesh onClick={(e) => console.log('click')}>
      <ambientLight />
      <spotLight position={[0, 5, 10]} penumbra={1} castShadow />
      <fog attach='fog' args={['white', 10, 20]} />
      <boxBufferGeometry attach='geometry' args={[1, 1, 1]} />
      <meshPhysicalMaterial attach='material' color='grey' transparent />
    </mesh >
  )
}

export default function Dev() {

  return (
    <>
      <div style={{ height: '20vh', background: `#2C5684` }}></div>
      <Canvas style={{ outline: 'transparent solid 0px', height: '50vh', width: '30vw', background: `#2C5684`, }} colorManagement shadowMap camera={{ position: [0, 2, 2] }}>
        <ambientLight />
        <spotLight position={[0, 5, 10]} penumbra={1} castShadow />
        <directionalLight
          castShadow
          position={[0, 10, 0]}
          intensity={1.5}
          penumbra={1}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        <OrbitControls />
        <Suspense fallback={<Loading />}>
          <Spaceship position />
        </Suspense>

      </Canvas>

    </>
  )
}