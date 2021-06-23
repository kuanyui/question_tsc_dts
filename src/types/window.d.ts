export { }
declare global {
  interface OurDefinedGlobalRuntimeEnv {
    /** Runtime value (Defined in preload.js)
    *   - `web`: Ordinary web browser.
    *   - `electron`: Electron renderer window.
    */
    BROWSER: 'electron' | 'web' | undefined
    /** For debug. */
    ENV_VAR: { [key: string]: string | undefined }
    /** Runtime environment variable. If specified, UI will not startup built-in
    * server, and try to connect to this specified server IP instead.
    * @example
    * ```bash
    * # bash
    * export SERVER_IP=192.168.1.123
    * ```
    **/
    SERVER_IP: string
    /** Runtime environment variable.
    * Set to non-empty to open devtools
    * @example
    * ```bash
    * # bash
    * export DEBUG=true
    * ```
    **/
    DEBUG: string
    NODE_ENV: node_env_t,
  }
  type node_env_t = 'production' | 'development'
  interface Window {
    __RUNTIME_ENV__: OurDefinedGlobalRuntimeEnv
  }
}
