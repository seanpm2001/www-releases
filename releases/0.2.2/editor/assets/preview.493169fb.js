import"./modulepreload-polyfill.b7f2da20.js";import*as x from"../../wasm-interpreter/slint_wasm_interpreter.js";import v from"../../wasm-interpreter/slint_wasm_interpreter.js";(async function(){await v();var l="",c=new Map;let i=`
import { SpinBox, Button, CheckBox, Slider, GroupBox } from "std-widgets.slint";
export Demo := Window {
    width:  300px;   // Width in logical pixels. All 'px' units are automatically scaled with screen resolution.
    height: 300px;
    t:= Text {
        text: "Hello World";
        font-size: 24px;
    }
    Image {
        y: 50px;
        source: @image-url("https://slint-ui.com/logo/slint-logo-full-light.svg");
    }
}
`;function f(){let n=document.getElementById("preview");setTimeout(function(){_(i,l,n)},1)}async function _(n,w,a){let p="canvas_"+Math.random().toString(36).substr(2,9),o=document.createElement("canvas");o.width=800,o.height=600,o.id=p,a.innerHTML="",a.appendChild(o);let{component:m,error_string:u}=await x.compile_from_string_with_style(n,w,h,async e=>{let t=c.get(e);if(t===void 0){let g=await(await fetch(e)).text();return c.set(e,g),g}return t});if(u!=""){let e=document.createTextNode(u),t=document.createElement("pre");t.appendChild(e),a.innerHTML="<pre style='color: red; background-color:#fee; margin:0'>"+t.innerHTML+"</pre>"}else document.getElementById("spinner").remove();m!==void 0&&m.run(p)}const r=new URLSearchParams(window.location.search),d=r.get("snippet"),s=r.get("load_url"),h=r.get("style")||"";d?i=d:s&&(l=s,i=await(await fetch(s)).text()),f()})();