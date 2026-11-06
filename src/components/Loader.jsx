import { useProgress } from "@react-three/drei";

const Loader = () => {
  useProgress();
  return (
    <mesh>
      <sphereGeometry args={[0.15, 16, 16]} />
      <meshStandardMaterial color="#ffffff" emissive="#ffffff" />
    </mesh>
  );
};

export default Loader;
