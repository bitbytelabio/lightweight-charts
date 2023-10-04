var _=Object.defineProperty;var f=(i,t,s)=>t in i?_(i,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):i[t]=s;var u=(i,t,s)=>(f(i,typeof t!="symbol"?t+"":t,s),s);import{T as B,C as v}from"./lightweight-charts.production-bc132b1a.js";import{a as b,p as w}from"./positions-0a54307c.js";import{m as x}from"./sample-data-c7d89ab8.js";import{C as S}from"./highlight-bar-crosshair-b35b313f.js";const C={...B,colors:["#2962FF","#E1575A","#F28E2C","rgb(164, 89, 209)","rgb(27, 156, 133)"]};class P{constructor(){u(this,"_data",null);u(this,"_options",null)}draw(t,s){t.useBitmapCoordinateSpace(n=>this._drawImpl(n,s))}update(t,s){this._data=t,this._options=s}_drawImpl(t,s){if(this._data===null||this._data.bars.length===0||this._data.visibleRange===null||this._options===null)return;const n=this._options,p=this._data.barSpacing,g=this._data.bars.map(o=>{const l=o.originalData.values.length,a=p/(l+1),h=a/2+o.x-p/2+a/2;return{singleBarWidth:a,singleBars:o.originalData.values.map((e,r)=>({y:s(e)??0,color:n.colors[r%n.colors.length],x:h+r*a}))}}),m=s(0)??0;for(let o=this._data.visibleRange.from;o<this._data.visibleRange.to;o++){const l=g[o];let a;l.singleBars.forEach(c=>{const h=b(m,c.y,t.verticalPixelRatio),e=w(c.x,t.horizontalPixelRatio,l.singleBarWidth);t.context.beginPath(),t.context.fillStyle=c.color;const r=a?e.position-a:0;t.context.fillRect(e.position-r,h.position,e.length+r,h.length),a=e.position+e.length})}}}class R{constructor(){u(this,"_renderer");this._renderer=new P}priceValueBuilder(t){return[0,...t.values]}isWhitespace(t){var s;return!((s=t.values)!=null&&s.length)}renderer(){return this._renderer}update(t,s){this._renderer.update(t,s)}defaultOptions(){return C}}const y=window.chart=v("chart",{autoSize:!0,timeScale:{barSpacing:16,minBarSpacing:8}}),D=new R,d=y.addCustomSeries(D,{color:"black"}),W=x(3,200,20);d.setData(W);d.attachPrimitive(new S({color:"rgba(0, 100, 200, 0.2)"}));
