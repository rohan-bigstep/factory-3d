import { useState, Suspense } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Ground } from './rtf-components/Ground';
//import { Model } from './components/Aster_Luxury_Armchair'
//import { Model } from './components/MyChair'
import { Model } from './rtf-components/ALCB';
import { Configurator } from './components/Configurator';
import { Loader } from './rtf-components/Loader';

function ProductConfigurator() {
	return (
		<>
			<OrbitControls target={[0, 0.35, 0]} maxPolarAngle={1.45} />
			<PerspectiveCamera makeDefault fov={50} position={[3, 2, 5]} />
			<color args={[0, 0, 0]} attach="background" />
			{/* <ambientLight intensity={0.5} /> */}
			<spotLight
				//
				color={[0.8, 0.8, 0.8]}
				intensity={1.5}
				angle={0.6}
				penumbra={0.5}
				position={[5, 5, 0]}
				castShadow
				shadow-bias={-0.0001}
			/>
			<spotLight
				//
				color={[0.8, 0.8, 0.8]}
				intensity={2}
				angle={0.6}
				penumbra={0.5}
				position={[-5, 4, 0]}
				castShadow
				shadow-bias={-0.0001}
			/>
			<Suspense fallback={<Loader />}>
				<Model />
			</Suspense>
			{/* <mesh position-y={0.5} castShadow receiveShadow>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={'red'} />
    </mesh> */}
			<Ground />
		</>
	);
}

function App() {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<Configurator />
			<Canvas shadows>
				<ProductConfigurator />
			</Canvas>
		</Suspense>
	);
}

export default App;

/*
function ProductConfigurator() {
  console.log('lol')
  return <>
    <OrbitControls target={[0, 0.35, 0]} maxPolarAngle={1.45} />
    <PerspectiveCamera makeDefault fov={50} position={[3, 2, 5]} />
    <color args={[0, 0, 0]} attach='background' />
    <spotLight
      color={[1, 0.25, 0.7]}
      intensity={1.5}
      angle={0.6}
      penumbra={0.5}
      position={[5, 5, 0]}
      castShadow
      shadow-bias={-0.0001}
    />
    <spotLight
      color={[0.14, 0.5, 1]}
      intensity={2}
      angle={0.6}
      penumbra={0.5}
      position={[-5, 5, 0]}
      castShadow
      shadow-bias={-0.0001}
    />
    <mesh position-y={0.5} castShadow receiveShadow>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={'red'} />
    </mesh>
    <Ground />

  </>
}
*/
