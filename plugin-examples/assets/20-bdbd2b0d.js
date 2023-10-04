var w=Object.defineProperty;var f=(a,e,t)=>e in a?w(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var s=(a,e,t)=>(f(a,typeof e!="symbol"?e+"":e,t),t);import{C as m,L as x,a as b}from"./lightweight-charts.production-bc132b1a.js";import{a as S}from"./sample-data-c7d89ab8.js";import{P as D}from"./plugin-base-c80b73a8.js";class C{constructor(e){s(this,"_viewData");this._viewData=e}draw(e){const t=this._viewData.data;e.useBitmapCoordinateSpace(i=>{const o=i.context,l=0,u=i.bitmapSize.height,r=i.horizontalPixelRatio*this._viewData.barWidth/2,g=-1*(r+1),_=i.bitmapSize.width;t.forEach(h=>{const n=h.x*i.horizontalPixelRatio;if(n<g)return;o.fillStyle=h.color||"rgba(0, 0, 0, 0)";const c=Math.max(0,Math.round(n-r)),p=Math.min(_,Math.round(n+r));o.fillRect(c,l,p-c,u)})})}}class V{constructor(e){s(this,"_source");s(this,"_data");this._source=e,this._data={data:[],barWidth:6,options:this._source._options}}update(){const e=this._source.chart.timeScale();this._data.data=this._source._backgroundColors.map(t=>({x:e.timeToCoordinate(t.time)??-100,color:t.color})),this._data.data.length>1?this._data.barWidth=this._data.data[1].x-this._data.data[0].x:this._data.barWidth=6}renderer(){return new C(this._data)}zOrder(){return"bottom"}}const v={};class y extends D{constructor(t,i={}){super();s(this,"_paneViews");s(this,"_seriesData",[]);s(this,"_backgroundColors",[]);s(this,"_options");s(this,"_highlighter");this._highlighter=t,this._options={...v,...i},this._paneViews=[new V(this)]}updateAllViews(){this._paneViews.forEach(t=>t.update())}paneViews(){return this._paneViews}attached(t){super.attached(t),this.dataUpdated("full")}dataUpdated(t){this._backgroundColors=this.series.data().map(i=>({time:i.time,color:this._highlighter(i.time)})),this.requestUpdate()}}const z=window.chart=m("chart",{autoSize:!0}),d=z.addCandlestickSeries(),P=S();d.setData(P);function W(a){return x(a)?new Date(a*1e3):b(a)?new Date(a.year,a.month,a.day):new Date(a)}const k=a=>{const t=W(a).getDay();return t===0||t===6?"rgba(255, 152, 1, 0.08)":"rgba(41, 98, 255, 0.08)"},H=new y(k);d.attachPrimitive(H);
