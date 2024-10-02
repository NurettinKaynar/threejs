import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    ArmChair_01: THREE.Mesh;
  };
  materials: {
    Armchair_01: THREE.MeshStandardMaterial;
  };
};

type ModelProps = JSX.IntrinsicElements['group'] & {
  selectedMaterial: THREE.MeshPhysicalMaterial;
};

export function Chair2({ selectedMaterial, ...props }: ModelProps) {
  const { nodes,materials } = useGLTF('/chair.gltf') as GLTFResult;

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.ArmChair_01.geometry}
        material={selectedMaterial} // Kullanıcının seçtiği materyal burada uygulanıyor
        userData={{ name: 'ArmChair_01' }}
      />
    </group>
  );
}

useGLTF.preload('/chair.gltf');