precision highp float;

attribute float progressIndex;
attribute vec3 position;
attribute vec3 normal;
attribute vec2 uv;

uniform mat4 projectionMatrix;
uniform mat4 modelViewMatrix;

varying float vProgressIndex;
varying vec3 vPosition;
varying vec3 vNormal;
varying vec2 vUv;


void main () {
  vProgressIndex = progressIndex;
  vPosition = position;
  vNormal = normal;
  vUv = uv;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
