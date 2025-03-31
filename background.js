// background.js
document.addEventListener("DOMContentLoaded", () => {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    2000
  );
  const renderer = new THREE.WebGLRenderer({
    canvas: document.getElementById("bg-canvas"),
    alpha: true,
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);

  // Create a circular texture for particles
  const createParticleTexture = () => {
    const size = 32; // Texture size (32x32 pixels)
    const canvas = document.createElement("canvas");
    canvas.width = size;
    canvas.height = size;
    const context = canvas.getContext("2d");

    // Draw a soft circular gradient
    const gradient = context.createRadialGradient(
      size / 2,
      size / 2,
      0,
      size / 2,
      size / 2,
      size / 2
    );
    gradient.addColorStop(0, "rgba(255, 255, 255, 1)"); // Bright center
    gradient.addColorStop(1, "rgba(255, 255, 255, 0)"); // Fade to transparent

    context.fillStyle = gradient;
    context.fillRect(0, 0, size, size);

    return new THREE.CanvasTexture(canvas);
  };

  // Particle system
  const particleCount = 1500;
  const particles = new THREE.BufferGeometry();
  const positions = new Float32Array(particleCount * 3);
  const velocities = new Float32Array(particleCount * 3);

  for (let i = 0; i < particleCount * 3; i += 3) {
    positions[i] = (Math.random() - 0.5) * 1500;
    positions[i + 1] = (Math.random() - 0.5) * 1500;
    positions[i + 2] = (Math.random() - 0.5) * 1500;

    velocities[i] = (Math.random() - 0.5) * 0.1;
    velocities[i + 1] = (Math.random() - 0.5) * 0.1;
    velocities[i + 2] = (Math.random() - 0.5) * 0.1;
  }

  particles.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  const material = new THREE.PointsMaterial({
    color: 0xfce443, // Yellow
    size: 6, // Slightly larger for visibility
    sizeAttenuation: true,
    map: createParticleTexture(), // Use circular texture
    transparent: true,
    opacity: 0.9, // Softer glow
    blending: THREE.AdditiveBlending, // Glow effect
    depthWrite: false, // Prevent depth conflicts
  });
  const particleSystem = new THREE.Points(particles, material);
  scene.add(particleSystem);

  camera.position.z = 800;

  // Animation loop
  function animate() {
    requestAnimationFrame(animate);

    const positions = particleSystem.geometry.attributes.position.array;
    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] += velocities[i];
      positions[i + 1] += velocities[i + 1];
      positions[i + 2] += velocities[i + 2];

      if (positions[i] > 750) positions[i] = -750;
      if (positions[i] < -750) positions[i] = 750;
      if (positions[i + 1] > 750) positions[i + 1] = -750;
      if (positions[i + 1] < -750) positions[i + 1] = 750;
      if (positions[i + 2] > 750) positions[i + 2] = -750;
      if (positions[i + 2] < -750) positions[i + 2] = 750;
    }
    particleSystem.geometry.attributes.position.needsUpdate = true;

    particleSystem.rotation.y += 0.0005;
    particleSystem.rotation.x += 0.0002;

    renderer.render(scene, camera);
  }
  animate();

  // Resize handler
  window.addEventListener("resize", () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
  });
});
