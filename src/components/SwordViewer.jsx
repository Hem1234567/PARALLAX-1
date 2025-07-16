import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Suspense } from "react";

function SwordModel() {
  const { scene } = useGLTF("/sword.glb"); // Ensure the path is correct

  // Rotate the sword to show its right side (adjust angle if needed)
  return (
    <group rotation={[0, Math.PI / 2, 0]}>
      <primitive object={scene} scale={0.2} position={[0, 0, 0]} />
    </group>
  );
}

export default function SwordViewer() {
  return (
    <div className="h-screen w-screen bg-white flex items-center justify-center">
      <Canvas
        camera={{
          position: [2, 1, 2], // Better viewing angle
          fov: 45,
        }}
      >
        <Suspense fallback={null}>
          {/* Ambient light for general illumination */}
          <ambientLight intensity={0.5} />

          {/* Directional lights for better highlights */}
          <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
          <directionalLight position={[-5, 5, -5]} intensity={0.5} />

          {/* Sword model */}
          <SwordModel />

          {/* Controls with smooth damping */}
          <OrbitControls
            enableZoom={true}
            enablePan={true}
            enableRotate={true}
            autoRotate={false}
            rotateSpeed={1}
            dampingFactor={0.1}
            minDistance={1}
            maxDistance={5}
            target={[0, 0, 0]}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
