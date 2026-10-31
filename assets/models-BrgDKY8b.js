import{E as e,Un as t,a as n,p as r,s as i,t as a,wt as o}from"./night-DtwMBjVY.js";import{t as s}from"./index-CgJvGlwc.js";import{a as c,i as l,n as u,o as d,r as f,t as p}from"./horde3d-DDQLQLWF.js";var m=12,h=.012,g=new e(.78,.92,1),_=class{base;night;scene;manifest=null;palette=null;hex=new Map;gltf=new Map;figures=new Map;loader=new c;rim;ghost;constructor(e,n,r){this.base=e,this.night=n,this.scene=r,this.rim=new t({side:1,uniforms:{...n,uColor:{value:l(854804)},uWidth:{value:h}},vertexShader:`
        uniform float uWidth;
        varying float vDepth;
        void main() {
          vec4 mv = modelViewMatrix * vec4(position + normal * uWidth, 1.0);
          vDepth = -mv.z;
          gl_Position = projectionMatrix * mv;
        }`,fragmentShader:`
        ${a}
        uniform vec3 uColor;
        varying float vDepth;
        void main() { gl_FragColor = vec4(mix(uColor, uFogColor, fogFactor(vDepth)), 1.0); }`}),this.ghost=new t({depthFunc:6,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-8,uniforms:{uColor:{value:g}},vertexShader:`void main() { gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`uniform vec3 uColor; void main() { if (mod(floor(gl_FragCoord.x) + floor(gl_FragCoord.y), 2.0) > 0.5) discard; gl_FragColor = vec4(uColor, 1.0); }`}),this.start()}async start(){try{let[e,t]=await Promise.all([n(this.base+`models/models.json`),n(this.base+`sprites/palette.json`)]);this.palette=t;for(let e of this.palette.colors)this.hex.set(e.name,l(e.hex));this.manifest=e}catch{}}get(e){let t=this.gltf.get(e);return t===void 0&&this.manifest?.models.includes(e)&&(this.gltf.set(e,`loading`),i(()=>this.loader.loadAsync(`${this.base}models/${e}.glb`)).then(t=>this.gltf.set(e,t),()=>this.gltf.set(e,`failed`))),t&&t!==`loading`&&t!==`failed`?t:null}parse(e){let t=this.manifest;if(!t)return null;let n=/^look_(.+)_([a-z]+)$/.exec(e);if(n&&t.models.includes(`look_${n[1]}`)){let e=n[2];return{model:`look_${n[1]}`,weapon:e,prefix:`${t.holds[e]??`pistol`}.`}}return t.models.includes(e)?{model:e,weapon:``,prefix:``}:null}material(n,r){let i=this.palette,o=r.get(n)?.map(e=>l(e))??(i.ramps[n]??[`outline`,`outline`,`outline`]).map(t=>this.hex.get(t)??new e(1,0,1));return new t({uniforms:{...this.night,uDark:{value:o[0]},uMid:{value:o[1]},uLight:{value:o[2]},uLightDir:{value:f},uBands:{value:u},uFlat:{value:+!!i.emissive.includes(n)},uFlash:{value:0},uTint:{value:new e(1,1,1)}},vertexShader:`
        varying vec3 vN;
        varying vec3 vWorld;
        varying float vDepth;
        void main() {
          vN = normalize(normalMatrix * normal); // in the camera's space, as the sprites are lit
          vec4 w = modelMatrix * vec4(position, 1.0);
          vWorld = w.xyz;
          vec4 mv = viewMatrix * w;
          vDepth = -mv.z;
          gl_Position = projectionMatrix * mv;
        }`,fragmentShader:`
        ${a}
        uniform vec3 uDark, uMid, uLight, uLightDir, uTint;
        uniform vec2 uBands;
        uniform vec3 uSpriteAmbient;
        uniform float uMinLight, uFlat, uFlash;
        varying vec3 vN;
        varying vec3 vWorld;
        varying float vDepth;
        void main() {
          float l = dot(normalize(vN), uLightDir);
          vec3 c = uFlat > 0.5 ? uMid : l > uBands.y ? uLight : l > uBands.x ? uMid : uDark;
          vec3 light = uFlat > 0.5 ? vec3(1.0) : clamp(uSpriteAmbient + sampleLightMap(vWorld.xz), vec3(uMinLight), vec3(1.6));
          vec3 col = sightShade(c * uTint * light, vWorld.xz);
          col = mix(col, vec3(1.0), uFlash);
          gl_FragColor = vec4(mix(col, uFogColor, fogFactor(vDepth)), 1.0);
        }`})}make(e,t,n){let i=d(t.scene),a=s(n),o=[],c=new Map,l=[],u=[];i.traverse(e=>{e.isMesh&&u.push(e)});for(let e of u)this.dress(e,a,c,o,l);this.scene.add(i);let f=new r(i);return{model:e,root:i,mixer:f,clips:new Map(t.animations.map(e=>[e.name,f.clipAction(e)])),playing:null,weapon:``,gun:[],colours:n,mats:o,xray:l,seen:!0}}dress(e,t,n,r,i){let a=e.material.name,s=n.get(a);s||(s=this.material(a,t),n.set(a,s),r.push(s)),e.material=s,e.renderOrder=2,e.frustumCulled=!1;let c=new o(e.geometry,this.rim);c.renderOrder=2,c.frustumCulled=!1;let l=new o(e.geometry,this.ghost);l.renderOrder=.5,l.frustumCulled=!1,e.add(c,l),i.push(l)}arm(e,t){for(let t of e.gun)t.removeFromParent();if(e.gun=[],e.weapon=t,!t)return!0;let n=this.get(`survivor_${t}`);if(!n)return e.weapon=``,!1;let r=`acc${t}`,i=[];n.scene.traverse(e=>{e.name.startsWith(r)&&!e.parent?.name.startsWith(r)&&i.push(e)});let a=new Map,o=s(e.colours);for(let t of i){let n=e.root.getObjectByName(t.parent?.name??``);if(!n)continue;let r=t.clone(!0),i=[];r.traverse(e=>{e.isMesh&&i.push(e)});for(let t of i)this.dress(t,o,a,e.mats,e.xray);n.add(r),e.gun.push(r)}return!0}pose(e,t,n,r,i,a,o,s,c,l,u,d){let f=this.parse(t),p=f&&this.get(f.model);if(!f||!p)return!1;let h=this.figures.get(e);h&&(h.model!==f.model||h.colours!==u)&&(this.drop(e),h=void 0),h||(h=this.make(f.model,p,u),this.figures.set(e,h)),h.weapon!==f.weapon&&this.arm(h,f.weapon);let g=h.clips.get(f.prefix+n)??h.clips.get(f.prefix+`idle`)??h.clips.get(n);g&&g!==h.playing&&(h.playing?.stop(),g.play(),g.paused=!0,h.playing=g),g&&(g.time=Math.min(g.getClip().duration,Math.max(0,r)/m)),h.mixer.update(0),h.root.position.set(i,a,o),h.root.rotation.y=s,h.root.visible=!0;for(let e of h.mats)e.uniforms.uFlash.value=c,e.uniforms.uTint.value.setRGB(l[0]/255,l[1]/255,l[2]/255);for(let e of h.xray)e.visible=d;return h.seen=!0,!0}endFrame(){for(let e of this.figures.values())e.seen||(e.root.visible=!1),e.seen=!1}drop(e){let t=this.figures.get(e);if(t){t.root.removeFromParent();for(let e of t.mats)e.dispose();this.figures.delete(e)}}clear(){for(let e of[...this.figures.keys()])this.drop(e)}};export{p as HordeModels,_ as ModelCast};