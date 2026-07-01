import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Group } from 'three';
import { OrbitControls, Environment, PerspectiveCamera, ContactShadows } from '@react-three/drei';

export function DumbbellModel() {
  const group = useRef<Group>(null);

  useFrame((state) => {
    if (group.current) {
      // Upside to downside animation (bouncing/floating)
      group.current.position.y = Math.sin(state.clock.elapsedTime * 2) * 0.5 + 0.5;
      
      // Also slightly rotate it for better visual effect
      group.current.rotation.y = state.clock.elapsedTime * 0.5;
      group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
    }
  });

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 2, 8]} fov={50} />
      <OrbitControls enableZoom={false} enablePan={false} autoRotate={false} />
      
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
      
      <group ref={group} dispose={null}>
        {/* Handle */}
        <mesh position={[0, 0, 0]} rotation={[0, 0, Math.PI / 2]} castShadow>
          <cylinderGeometry args={[0.15, 0.15, 3, 32]} />
          <meshStandardMaterial color="#B8B4AC" metalness={0.8} roughness={0.2} />
        </mesh>
        
        {/* Left Weights */}
        <mesh position={[-1.6, 0, 0]} rotation={[0, 0, Math.PI / 2]} castShadow>
          <cylinderGeometry args={[0.8, 0.8, 0.4, 32]} />
          <meshStandardMaterial color="#232323" metalness={0.2} roughness={0.8} />
        </mesh>
        <mesh position={[-1.2, 0, 0]} rotation={[0, 0, Math.PI / 2]} castShadow>
          <cylinderGeometry args={[0.6, 0.6, 0.3, 32]} />
          <meshStandardMaterial color="#232323" metalness={0.2} roughness={0.8} />
        </mesh>

        {/* Right Weights */}
        <mesh position={[1.6, 0, 0]} rotation={[0, 0, Math.PI / 2]} castShadow>
          <cylinderGeometry args={[0.8, 0.8, 0.4, 32]} />
          <meshStandardMaterial color="#232323" metalness={0.2} roughness={0.8} />
        </mesh>
        <mesh position={[1.2, 0, 0]} rotation={[0, 0, Math.PI / 2]} castShadow>
          <cylinderGeometry args={[0.6, 0.6, 0.3, 32]} />
          <meshStandardMaterial color="#232323" metalness={0.2} roughness={0.8} />
        </mesh>
        
        {/* Flame Accents */}
        <mesh position={[-1.81, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.3, 0.3, 0.05, 32]} />
          <meshStandardMaterial color="#FF5A1F" metalness={0.1} roughness={0.4} emissive="#FF5A1F" emissiveIntensity={0.2} />
        </mesh>
        <mesh position={[1.81, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.3, 0.3, 0.05, 32]} />
          <meshStandardMaterial color="#FF5A1F" metalness={0.1} roughness={0.4} emissive="#FF5A1F" emissiveIntensity={0.2} />
        </mesh>
      </group>

      <ContactShadows resolution={1024} scale={10} blur={2} opacity={0.5} far={10} color="#000000" position={[0, -1, 0]} />
      <Environment preset="city" />
    </>
  );
}
