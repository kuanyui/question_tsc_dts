
type inferPropType<T, K extends keyof T> = T[K]
const rtenv1: inferPropType<Window, '__RUNTIME_ENV__'> = {
  BROWSER: 'electron',
  NODE_ENV: process.env.NODE_ENV === 'development' ? 'development' : 'production',
  SERVER_IP: process.env.SERVER_IP || '',
  DEBUG: process.env.DEBUG || '',
  ENV_VAR: process.env,
}
const rtenv2: OurDefinedGlobalRuntimeEnv = rtenv1
window.__RUNTIME_ENV__ = rtenv1

console.log('---- renderer_preload.js loaded ----')