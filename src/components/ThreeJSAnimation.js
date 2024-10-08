import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { AsciiEffect } from "three/examples/jsm/effects/AsciiEffect";
import { TrackballControls } from "three/examples/jsm/controls/TrackballControls";
import "../styles/ThreeJSAnimation.css";

const ThreeJSAnimation = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    let camera, controls, scene, renderer, effect;
    let sphere, plane;
    const start = Date.now();

    const init = () => {
      // Camera setup
      camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 1000);
      camera.position.y = 150;
      camera.position.z = 500;

      // Scene setup
      scene = new THREE.Scene();
      scene.background = null;

      // Lighting setup
      const pointLight1 = new THREE.PointLight(0xffffff, 3, 0, 0);
      pointLight1.position.set(500, 500, 500);
      scene.add(pointLight1);

      const pointLight2 = new THREE.PointLight(0xffffff, 1, 0, 0);
      pointLight2.position.set(-500, -500, -500);
      scene.add(pointLight2);

      // Sphere setup
      sphere = new THREE.Mesh(
        new THREE.SphereGeometry(200, 20, 10),
        new THREE.MeshPhongMaterial({ flatShading: true })
      );
      scene.add(sphere);

      // Plane setup
      plane = new THREE.Mesh(
        new THREE.PlaneGeometry(400, 400),
        new THREE.MeshBasicMaterial({ color: 0xe0e0e0 })
      );
      plane.position.y = -200;
      plane.rotation.x = -Math.PI / 2;
      scene.add(plane);

      // Renderer setup
      renderer = new THREE.WebGLRenderer({ alpha: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setAnimationLoop(animate);

      // AsciiEffect setup
      effect = new AsciiEffect(renderer, " .:-+*=%@#", { invert: true });
      effect.setSize(window.innerWidth, window.innerHeight);
      effect.domElement.style.color = "white";
      effect.domElement.style.backgroundColor = "transparent";

      // Append effect to the DOM
      if (mountRef.current) {
        mountRef.current.appendChild(effect.domElement);
      }

      // Controls setup
      controls = new TrackballControls(camera, effect.domElement);

      // Event listeners
      window.addEventListener("resize", onWindowResize);
    };

    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(window.innerWidth, window.innerHeight);
      effect.setSize(window.innerWidth, window.innerHeight);
    };

    const animate = () => {
      const timer = Date.now() - start;

      sphere.position.y = Math.abs(Math.sin(timer * 0.002)) * 150;
      sphere.rotation.x = timer * 0.0003;
      sphere.rotation.z = timer * 0.0002;

      controls.update();
      effect.render(scene, camera);
    };

    init();

    return () => {
      if (mountRef.current) {
        mountRef.current.removeChild(effect.domElement);
      }
      window.removeEventListener("resize", onWindowResize);
    };
  }, []);

  return <div ref={mountRef} className="threejs-container" />;
};

export default ThreeJSAnimation;
