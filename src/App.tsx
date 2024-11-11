import { useState, Suspense } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import { Canvas, useThree } from '@react-three/fiber';
import { FlyControls, MapControls, OrbitControls, PerspectiveCamera, Sky } from '@react-three/drei';
import { Ground } from './rtf-components/Ground';
//import { Model } from './components/Aster_Luxury_Armchair'
//import { Model } from './components/MyChair'
import { Model } from './rtf-components/ALCB';
import { Configurator } from './components/Configurator';
// import { Loader } from './components/loader/Loader';
import { useControls } from 'leva';
import { Loader3d } from './rtf-components/Loader3d';
import Loader from './components/loader/Loader';

function ProductConfigurator() {

	return (
		<>
			{/* <FlyControls autoForward={false} dragToLook={false} movementSpeed={10} rollSpeed={0.005} makeDefault /> */}
			<OrbitControls
				target={[0, 0.5, 0]} // Centered based on the model's bounding box
				maxPolarAngle={Math.PI / 2}
				makeDefault
				minDistance={2} // Minimum zoom-in distance
				maxDistance={50} // Maximum zoom-out distance
				enablePan={false} // Disable panning if only zoom and rotation are needed
			/>
			<ambientLight intensity={0.5} />
			<directionalLight visible={true} position={[1.0, 1.0, -7.0]} castShadow={true} />
			<Sky distance={450000} sunPosition={[5, 1, 8]} inclination={0} azimuth={0.25} />
			<Suspense fallback={<Loader3d />}>
				<Model />
			</Suspense>
			<Ground />
		</>
	);
}

function App() {
	return (
		<Suspense fallback={<Loader/>}>
			<Canvas camera={{ position: [20, 120, -235] }} shadows>
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
