/* tslint:disable */
/* eslint-disable */
/**
* Compile the content of a string.
*
* Returns a promise to a compiled component which can be run with ".run()"
* @param {string} source
* @param {string} base_url
* @param {ImportCallbackFunction | undefined} [optional_import_callback]
* @returns {Promise<CompilationResult>}
*/
export function compile_from_string(source: string, base_url: string, optional_import_callback?: ImportCallbackFunction): Promise<CompilationResult>;
/**
* Same as [`compile_from_string`], but also takes a style parameter
* @param {string} source
* @param {string} base_url
* @param {string} style
* @param {ImportCallbackFunction | undefined} [optional_import_callback]
* @returns {Promise<CompilationResult>}
*/
export function compile_from_string_with_style(source: string, base_url: string, style: string, optional_import_callback?: ImportCallbackFunction): Promise<CompilationResult>;
/**
* Register DOM event handlers on all instance and set up the event loop for that.
* You can call this function only once. It will throw an exception but that is safe
* to ignore.
*/
export function run_event_loop(): void;

type ImportCallbackFunction = (url: string) => Promise<string>;
type CurrentElementInformationCallbackFunction = (url: string, start_line: number, start_column: number, end_line: number, end_column: number) => void;


/**
*/
export class CompilationResult {
  free(): void;
/**
*/
  readonly component: WrappedCompiledComp | undefined;
/**
*/
  readonly diagnostics: Array<any>;
/**
*/
  readonly error_string: string;
}
/**
*/
export class WrappedCompiledComp {
  free(): void;
/**
* Run this compiled component in a canvas.
* The HTML must contains a <canvas> element with the given `canvas_id`
* where the result is gonna be rendered
* @param {string} canvas_id
*/
  run(canvas_id: string): void;
/**
* Creates this compiled component in a canvas, wrapped in a promise.
* The HTML must contains a <canvas> element with the given `canvas_id`
* where the result is gonna be rendered.
* You need to call `show()` on the returned instance for rendering.
*
* Note that the promise will only be resolved after calling `slint.run_event_loop()`.
* @param {string} canvas_id
* @returns {Promise<WrappedInstance>}
*/
  create(canvas_id: string): Promise<WrappedInstance>;
/**
* Creates this compiled component in the canvas of the provided instance, wrapped in a promise.
* For this to work, the provided instance needs to be visible (show() must've been
* called) and the event loop must be running (`slint.run_event_loop()`). After this
* call the provided instance is not rendered anymore and can be discarded.
*
* Note that the promise will only be resolved after calling `slint.run_event_loop()`.
* @param {WrappedInstance} instance
* @returns {Promise<WrappedInstance>}
*/
  create_with_existing_window(instance: WrappedInstance): Promise<WrappedInstance>;
}
/**
*/
export class WrappedInstance {
  free(): void;
/**
* Marks this instance for rendering and input handling.
*
* Note that the promise will only be resolved after calling `slint.run_event_loop()`.
* @returns {Promise<any>}
*/
  show(): Promise<any>;
/**
* Hides this instance and prevents further updates of the canvas element.
*
* Note that the promise will only be resolved after calling `slint.run_event_loop()`.
* @returns {Promise<any>}
*/
  hide(): Promise<any>;
}

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly slint_mock_elapsed_time: (a: number) => void;
  readonly slint_get_mocked_time: () => number;
  readonly slint_send_mouse_click: (a: number, b: number, c: number) => void;
  readonly slint_send_keyboard_char: (a: number, b: number, c: number) => void;
  readonly send_keyboard_string_sequence: (a: number, b: number) => void;
  readonly __wbg_compilationresult_free: (a: number, b: number) => void;
  readonly compilationresult_component: (a: number) => number;
  readonly compilationresult_diagnostics: (a: number) => number;
  readonly compilationresult_error_string: (a: number, b: number) => void;
  readonly compile_from_string: (a: number, b: number, c: number, d: number, e: number) => number;
  readonly compile_from_string_with_style: (a: number, b: number, c: number, d: number, e: number, f: number, g: number) => number;
  readonly __wbg_wrappedcompiledcomp_free: (a: number, b: number) => void;
  readonly wrappedcompiledcomp_run: (a: number, b: number, c: number) => void;
  readonly wrappedcompiledcomp_create: (a: number, b: number, c: number, d: number) => void;
  readonly wrappedcompiledcomp_create_with_existing_window: (a: number, b: number, c: number) => void;
  readonly __wbg_wrappedinstance_free: (a: number, b: number) => void;
  readonly wrappedinstance_show: (a: number, b: number) => void;
  readonly wrappedinstance_hide: (a: number, b: number) => void;
  readonly run_event_loop: (a: number) => void;
  readonly __wbindgen_malloc: (a: number, b: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number, d: number) => number;
  readonly __wbindgen_export_2: WebAssembly.Table;
  readonly _dyn_core__ops__function__Fn__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h184c5caf00cdb59e: (a: number, b: number, c: number) => void;
  readonly _dyn_core__ops__function__FnMut_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h4d75500b93d11214: (a: number, b: number) => void;
  readonly _dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h000ca7aabf02b323: (a: number, b: number, c: number) => void;
  readonly _dyn_core__ops__function__FnMut__A_B___Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h58c9f705aaa6eaaf: (a: number, b: number, c: number, d: number) => void;
  readonly __wbindgen_free: (a: number, b: number, c: number) => void;
  readonly __wbindgen_exn_store: (a: number) => void;
  readonly __wbindgen_add_to_stack_pointer: (a: number) => number;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;
/**
* Instantiates the given `module`, which can either be bytes or
* a precompiled `WebAssembly.Module`.
*
* @param {{ module: SyncInitInput }} module - Passing `SyncInitInput` directly is deprecated.
*
* @returns {InitOutput}
*/
export function initSync(module: { module: SyncInitInput } | SyncInitInput): InitOutput;

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {{ module_or_path: InitInput | Promise<InitInput> }} module_or_path - Passing `InitInput` directly is deprecated.
*
* @returns {Promise<InitOutput>}
*/
export default function __wbg_init (module_or_path?: { module_or_path: InitInput | Promise<InitInput> } | InitInput | Promise<InitInput>): Promise<InitOutput>;