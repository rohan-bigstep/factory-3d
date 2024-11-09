import { MeshReflectorMaterial, Reflector } from '@react-three/drei';
import { useTexture } from '@react-three/drei';
import {
	BufferAttribute,
	LinearEncoding,
	Mesh,
	PointLight,
	PointLightHelper,
	RepeatWrapping,
	Vector2,
  } from "three";
  import { useProductStore } from '../store';
  import { useControls } from "leva";

 

function GroundMaterial() {
	const groundTexture = useTexture({
		normalMap: '/ground/rocky_trail_02_nor_gl_4k.png',
		displacementMap: '/ground/rocky_trail_02_disp_4k.png',
		roughnessMap: '/ground/rocky_trail_02_rough_4k.png',
		map: '/ground/rocky_trail_02_diff_4k.png',
		aoMap: '/ground/rocky_trail_02_ao_4k.png',
		metalnessMap: '/ground/rocky_trail_02_arm_4k.png',
	});
	// Setting texture wrapping and repeat for large ground planes
	Object.values(groundTexture).forEach((texture) => {
		texture.wrapS = RepeatWrapping;
		texture.wrapT = RepeatWrapping;
		texture.repeat.set(10, 10);
	});

	return (
		<meshStandardMaterial
			{...groundTexture}
			normalMap-encoding={LinearEncoding}
			transparent
			displacementScale={1}
			aoMapIntensity={1}
			roughness={1}
			metalness={0}
			metalnessMap={null}
			normalScale={new Vector2(1, 1)}
		/>
	);
}
export function Ground() {
	const mainMaterial = useProductStore((select) => select.mainMaterial);
	const frameMaterial = useProductStore((select) => select.frameMaterial);

	return (
		<mesh rotation-x={-Math.PI * 0.5} receiveShadow>
			<planeGeometry args={[300, 200, 30, 30]} />
			<GroundMaterial />
		</mesh>
	);
}
