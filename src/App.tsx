import { Suspense, useState } from 'react';
import './App.css';
import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Chair from '../public/chair/Chair';

function App() {
  const materials: Record<string, THREE.MeshPhysicalMaterial> = {
    black: new THREE.MeshPhysicalMaterial({
      map: new THREE.TextureLoader().load('/chair/textures/black/Armchair_01_diff_1k.jpg',(texture) => {
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(1,2)}),
      normalMap: new THREE.TextureLoader().load('/chair/textures/black/Armchair_01_arm_1k.jpg'),
      roughnessMap: new THREE.TextureLoader().load('/chair/textures/black/Armchair_01_nor_gl_1k.jpg'),
      roughness: 0.5,
    }),
    leather: new THREE.MeshPhysicalMaterial({
      map: new THREE.TextureLoader().load('/chair/textures/fabric_leather/fabric_leather_01_diff_1k.jpg'),
      normalMap: new THREE.TextureLoader().load('/chair/textures/fabric_leather/fabric_leather_01_nor_gl_1k.jpg'),
      roughnessMap: new THREE.TextureLoader().load('/chair/textures/fabric_leather/fabric_leather_01_rough_1k.jpg'),
      roughness: 5,
    }),
    carpet: new THREE.MeshPhysicalMaterial({
      map: new THREE.TextureLoader().load('/chair/textures/carpet/dirty_carpet_diff_1k.jpg'),
      normalMap: new THREE.TextureLoader().load('/chair/textures/carpet/dirty_carpet_nor_gl_1k.jpg'),
      roughnessMap: new THREE.TextureLoader().load('/chair/textures/carpet/dirty_carpet_arm_1k.jpg'),
      roughness: 5,
    }),
    coat: new THREE.MeshPhysicalMaterial({
      map: new THREE.TextureLoader().load('/chair/textures/fabric_denmin/denmin_fabric_02_diff_1k.jpg'),
      normalMap: new THREE.TextureLoader().load('/chair/textures/fabric_denmin/denmin_fabric_02_nor_gl_1k.jpg'),
      roughnessMap: new THREE.TextureLoader().load('/chair/textures/fabric_denmin/denmin_fabric_02_rough_1k.jpg'),
      roughness: 5,
    }),
  };

  const [materialType, setMaterialType] = useState<THREE.MeshPhysicalMaterial>(materials.black);

  return (
    <div style={{ width: '70vw', height: '70vh' }}>
      <Canvas style={{ width: '100%', height: '100%' }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Suspense fallback={null}>
          <Chair selectedMaterial={materialType} />
        </Suspense>
        <OrbitControls />
      </Canvas>
      <div className="buttonContainer">
        {/* <button type="button" onClick={() => setMaterialType(materials.black)} className="button">
          <span>Siyah Deri</span>
        </button> */}
        <button type="button" onClick={() => setMaterialType(materials.leather)} className="button">
          <span>Deri</span>
        </button>
        <button type="button" onClick={() => setMaterialType(materials.carpet)} className="button">
          <span>Halı</span>
        </button>
        <button type="button" onClick={() => setMaterialType(materials.coat)} className="button">
          <span>Kot</span>
        </button>
      </div>
    </div>
  );
}

export default App;
