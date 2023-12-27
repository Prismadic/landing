"use client";
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const vertexShader = `
    void main() {
        gl_Position = vec4( position, 1.0 );
    }
`;

const fragmentShader = `
    #define TWO_PI 6.2831853072
    #define PI 3.14159265359

    precision highp float;
    uniform vec2 resolution;
    uniform float time;

    float random (in float x) {
        return fract(sin(x)*1e4);
    }
    float random (vec2 st) {
        return fract(sin(dot(st.xy,vec2(12.9898,78.233)))*43758.5453123);
    }
    // 2D Noise based on Morgan McGuire @morgan3d
    // https://www.shadertoy.com/view/4dS3Wd
    float noise (in vec2 st) {
    vec2 i = floor(st);
    vec2 f = fract(st);

    // Four corners in 2D of a tile
    float a = random(i);
    float b = random(i + vec2(1.0, 0.0));
    float c = random(i + vec2(0.0, 1.0));
    float d = random(i + vec2(1.0, 1.0));

    // Smooth Interpolation

    // Cubic Hermine Curve.  Same as SmoothStep()
    vec2 u = f*f*(3.0-2.0*f);
    // u = smoothstep(0.,1.,f);

    // Mix 4 coorners percentages
    return mix(a, b, u.x) +
            (c - a)* u.y * (1.0 - u.x) +
            (d - b) * u.x * u.y;
    }


    varying vec2 vUv;

    void main(void) {
        vec2 uv = (gl_FragCoord.xy * 2.0 - resolution.xy) / min(resolution.x, resolution.y);



        float r = random(uv);
        float t = time*0.05;
        float lineWidth = 0.015;

        vec3 color = vec3(0.0);
        for(int j = 0; j < 4; j++){
            for(int i=0; i < 10; i++){
                color[j] += lineWidth / abs(fract(t - 0.01*float(j)+float(i)*noise(abs(uv*0.123)))*1.67 - length(uv-random(uv)*0.02));      
            }
        }
        color[0] *= random(color[0]);
        color[1] *= random(color[1]);
        color[2] *= random(color[2]);

        gl_FragColor = vec4(color[2]*0.3,color[1]*0.2,color[0]*0.5,1.0);
    }
`;
const PrismadicLens = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        let container, camera: any, scene: any, renderer: any, uniforms: any;

        const init = () => {
            container = document.getElementById('lens-container');
            camera = new THREE.Camera();
            camera.position.z = 1;

            scene = new THREE.Scene();

            const geometry = new THREE.PlaneGeometry(2, 2);

            uniforms = {
                time: { type: 'f', value: 1.0 },
                resolution: { type: 'v2', value: new THREE.Vector2() },
            };

            const material = new THREE.ShaderMaterial({
                uniforms: uniforms,
                vertexShader: vertexShader,
                fragmentShader: fragmentShader,
            });

            const mesh = new THREE.Mesh(geometry, material);
            scene.add(mesh);

            renderer = new THREE.WebGLRenderer();
            renderer.setPixelRatio(window.devicePixelRatio);
            if (container) {
                container.appendChild(renderer.domElement)
            }
            onWindowResize();
            window.addEventListener('resize', onWindowResize, false);
        };

        const onWindowResize = () => {
            renderer.setSize(window.innerWidth, window.innerHeight);
            uniforms.resolution.value.x = renderer.domElement.width;
            uniforms.resolution.value.y = renderer.domElement.height;
        };

        const animate = () => {
            requestAnimationFrame(animate);
            render();
        };

        const render = () => {
            uniforms.time.value += 0.05;
            renderer.render(scene, camera);
        };

        // Initialize the component
        init();
        animate();

        // Clean up event listener on unmount
        return () => {
            window.removeEventListener('resize', onWindowResize);
        };
    }, []);

    return <div id="lens-container" style={{zIndex: -100, position:"fixed"}} />;
};

export default PrismadicLens;
