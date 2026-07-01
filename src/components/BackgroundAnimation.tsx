import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { InstancedMesh, Object3D } from 'three';
import { Canvas } from '@react-three/fiber';

export function FallingParticles() {
  const count = 75;
  const mesh = useRef<InstancedMesh>(null);
  const dummy = useMemo(() => new Object3D(), []);
  
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      temp.push({
        x: (Math.random() - 0.5) * 40,
        y: (Math.random() - 0.5) * 40,
        z: (Math.random() - 0.5) * 20 - 5,
        speed: Math.random() * 0.02 + 0.005,
        rotSpeedX: (Math.random() - 0.5) * 0.02,
        rotSpeedY: (Math.random() - 0.5) * 0.02,
        scale: Math.random() * 0.4 + 0.1
      });
    }
    return temp;
  }, [count]);

  useFrame(() => {
    if (!mesh.current) return;
    
    particles.forEach((particle, i) => {
      // Move particle down
      particle.y -= particle.speed;
      
      // Reset if it goes below the visible area
      if (particle.y < -20) {
        particle.y = 20;
        particle.x = (Math.random() - 0.5) * 40;
      }
      
      dummy.position.set(particle.x, particle.y, particle.z);
      dummy.rotation.x += particle.rotSpeedX;
      dummy.rotation.y += particle.rotSpeedY;
      dummy.scale.setScalar(particle.scale);
      dummy.updateMatrix();
      
      mesh.current!.setMatrixAt(i, dummy.matrix);
    });
    mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
      <dodecahedronGeometry args={[0.2, 0]} />
      <meshStandardMaterial 
        color="#FF5A1F" 
        metalness={0.6} 
        roughness={0.4} 
        emissive="#FF5A1F" 
        emissiveIntensity={0.2}
        transparent
        opacity={0.3}
      />
    </instancedMesh>
  );
}

export function BackgroundAnimation() {
  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden">
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#FF5A1F" />
        <FallingParticles />
      </Canvas>
    </div>
  );
}
