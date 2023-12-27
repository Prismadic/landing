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

    varying vec2 vUv;

    void main(void) {
        vec2 uv = (gl_FragCoord.xy * 2.0 - resolution.xy) / min(resolution.x, resolution.y);

        vec2 fMosaicScal = vec2(4.0, 2.0);
        vec2 vScreenSize = vec2(256,256);
        uv.x = floor(uv.x * vScreenSize.x / fMosaicScal.x) / (vScreenSize.x / fMosaicScal.x);
        uv.y = floor(uv.y * vScreenSize.y / fMosaicScal.y) / (vScreenSize.y / fMosaicScal.y);       

        float t = time*0.06+random(uv.x)*0.4;
        float lineWidth = 0.0008;

        vec3 color = vec3(0.0);
        for(int j = 0; j < 3; j++){
            for(int i=0; i < 5; i++){
                color[j] += lineWidth*float(i*i) / abs(fract(t - 0.01*float(j)+float(i)*0.01)*1.0 - length(uv));        
            }
        }

        gl_FragColor = vec4(color[2],color[1],color[0],1.0);
    }
`;

const PrismadicRefraction: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        var camera: any, scene: any, renderer: any, uniforms: any;
        const init = () => {
            let container = document.getElementById('refraction-container');
            camera = new THREE.Camera();
            camera.position.z = 1;

            scene = new THREE.Scene();

            const geometry = new THREE.PlaneGeometry(2, 2);

            uniforms = {
                time: { type: "f", value: 1.0 },
                resolution: { type: "v2", value: new THREE.Vector2() }
            };

            const material = new THREE.ShaderMaterial({
                uniforms: uniforms,
                vertexShader: vertexShader,
                fragmentShader: fragmentShader
            });

            const mesh = new THREE.Mesh(geometry, material);
            scene.add(mesh);

            renderer = new THREE.WebGLRenderer();
            renderer.setPixelRatio(window.devicePixelRatio);
            if (container) {
                container.appendChild(renderer.domElement);
            }
            onWindowResize();
            window.addEventListener('resize', onWindowResize, false);
        }
        const onWindowResize = () => {
            renderer.setSize(window.innerWidth, window.innerHeight);
            uniforms.resolution.value.x = renderer.domElement.width;
            uniforms.resolution.value.y = renderer.domElement.height;
        };
        const animate = () => {
            requestAnimationFrame(animate);
            render();
        }
        
        const render = () => {
            uniforms.time.value += 0.05;
            renderer.render(scene, camera);
        }
        init();
        animate();
        return () => {
            window.removeEventListener('resize', onWindowResize);
        };
    }, []);

    return <div id="refraction-container" style={{ width: '100%', height: '100%', margin: 0, padding: 0,zIndex: -100, position:"fixed" }} />;
};

export default PrismadicRefraction;
