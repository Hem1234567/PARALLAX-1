import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function SwordModel() {
  const { scene } = useGLTF("/sword.glb"); // Ensure the path is correct
  return <primitive object={scene} scale={0.2} position={[0, 0, 0]} />;
}

export default function SwordViewer() {
  return (
    <div className="h-screen bg-transparent flex items-center justify-center ">
      <Canvas camera={{ position: [0, 0, 2], fov: 50 }}>
        <ambientLight intensity={1} />
        <directionalLight position={[5, 5, 5]} intensity={1.5} />
        <SwordModel />
        <OrbitControls
          enableZoom={false} 
          autoRotate={false} 
          rotateSpeed={1} 
        />
      </Canvas>
    </div>
  );
}
