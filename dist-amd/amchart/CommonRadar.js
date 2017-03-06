!function(t,e){"function"==typeof define&&define.amd?define(["d3","../common/HTMLWidget","amcharts.radar","require","../api/ITooltip"],e):t.amchart_CommonRadar=e(t.d3,t.common_HTMLWidget,t.AmCharts,t.require,t.api_ITooltip)}(this,function(t,e,i,a,s){function l(){e.call(this),this._tag="div",this._chart={},this._selected=null,this._selections=[],this._dataUpdated=0,this._prevDataUpdated=-1,this._columnsUpdated=0,this._prevColumnsUpdated=-1}return l.prototype=Object.create(e.prototype),l.prototype.constructor=l,l.prototype._class+=" amchart_CommonRadar",l.prototype["implements"](s.prototype),l.prototype.publish("fontSize",11,"number","Font Size",null,{tags:["Basic","Shared"]}),l.prototype.publish("fontFamily","Verdana","string","Font Name",null,{tags:["Basic","Shared","Shared"]}),l.prototype.publish("fontColor","#000000","html-color","Font Color",null,{tags:["Basic","Shared"]}),l.prototype.publish("lineWidth",2,"number","Line Thickness",null,{min:0,max:10,step:1,inputType:"range",tags:["Basic","Shared"]}),l.prototype.publish("lineOpacity",1,"number","Line Opacity",null,{min:0,max:1,step:.001,inputType:"range",tags:["Basic","Shared"]}),l.prototype.publish("dashedLineStyle",0,"number","",null,{tags:["Advanced","Shared"]}),l.prototype.publish("yAxisBaselineColor",null,"html-color","Axis color",null,{tags:["Intermediate","Shared"]}),l.prototype.publish("axisFontSize",void 0,"number","Size of value labels text. Will use chart's fontSize if not set.",null,{tags:["Basic","Shared"]}),l.prototype.publish("yAxisFontColor",void 0,"string","Font Name",null,{tags:["Basic","Shared"]}),l.prototype.publish("yAxisTitle","","string","Y-Axis Title",null,{tags:["Basic","Shared"]}),l.prototype.publish("yAxisTitleFontColor",null,"html-color","Color of axis value labels. Will use chart's color if not set.",null,{tags:["Basic","Shared"]}),l.prototype.publish("yAxisTitleFontSize",null,"html-color","Font Size of axis value labels. Will use chart's color if not set.",null,{tags:["Basic","Shared"]}),l.prototype.publish("axisLineWidth",1,"number","Thickness of axis",null,{tags:["Basic","Shared"]}),l.prototype.publish("marginLeft",null,"number","Margin (Left)",null,{tags:["Intermediate"]}),l.prototype.publish("marginRight",null,"number","Margin (Right)",null,{tags:["Intermediate"]}),l.prototype.publish("marginTop",null,"number","Margin (Top)",null,{tags:["Intermediate"]}),l.prototype.publish("marginBottom",null,"number","Margin (Bottom)",null,{tags:["Intermediate"]}),l.prototype.publish("showScrollbar",!1,"boolean","Chart Scrollbar",null,{tags:["Intermediate"]}),l.prototype.publish("startDuration",.3,"number","Start Duration (sec)",null,{tags:["Private"]}),l.prototype.publish("yAxisAutoGridCount",!0,"boolean","Specifies whether number of gridCount is specified automatically, acoarding to the axis size",null,{tags:["Advanced"]}),l.prototype.publish("yAxisGridPosition","start","set","Specifies if a grid line is placed on the center of a cell or on the beginning of a cell",["start","middle"],{tags:["Advanced"]}),l.prototype.publish("yAxisMinimum",[],"array","",null,{tags:["Advanced"]}),l.prototype.publish("yAxisTitleOffset",[],"array","",null,{tags:["Advanced"]}),l.prototype.publish("yAxisDashLength",[],"array","Length of a dash. 0 means line is not dashed.",null,{tags:["Advanced"]}),l.prototype.publish("axisAlpha",1,"number","Axis opacity",null,{tags:["Intermediate"]}),l.prototype.publish("circularGrid",!1,"boolean","Circular Grid",null,{tags:["Intermediate"]}),l.prototype.publish("bulletSize",9,"number","Bullet Size",null,{tags:["Intermediate"]}),l.prototype.publish("bulletType","round","set","Bullet Type",["none","round","square","triangleUp","triangleDown","triangleLeft","triangleRight","bubble","diamond"],{tags:["Intermediate"]}),l.prototype.publish("fillOpacity",.3,"number","Shape Opacity",null,{min:0,max:1,step:.001,inputType:"range",tags:["Intermediate"]}),l.prototype.publish("useClonedPalette",!1,"boolean","Enable or disable using a cloned palette",null,{tags:["Intermediate","Shared"]}),l.prototype.publish("yAxisTickFormat",null,"string","Y-Axis Tick Format",null,{optional:!0}),l.prototype.publish("selectionColor","#f00","html-color","Font Color",null,{tags:["Basic"]}),l.prototype.publish("selectionMode","simple","set","Selection Mode",["simple","multi"],{tags:["Intermediate"]}),l.prototype.updateChartOptions=function(){var e=this;return this._chart.theme="none",this._chart.type="radar",this._chart.startDuration=this.startDuration(),this._chart.categoryField=this.columns()[0],this._valueField=this.columns().slice(1),this._chart.color=this.fontColor(),this._chart.fontSize=this.fontSize(),this._chart.fontFamily=this.fontFamily(),this.marginLeft()&&(this._chart.marginLeft=this.marginLeft()),this.marginRight()&&(this._chart.marginRight=this.marginRight()),this.marginTop()&&(this._chart.marginTop=this.marginTop()),this.marginBottom()&&(this._chart.marginBottom=this.marginBottom()),this.titles=[],(this._dataUpdated>this._prevDataUpdated||this._columnsUpdated>this._prevColumnsUpdated)&&(this._chart.dataProvider=this.formatData(this.data())),this._prevDataUpdated=this._dataUpdated,this._prevColumnsUpdated=this._columnsUpdated,this._chart.valueAxes[0].title=this.yAxisTitle(),this._chart.valueAxes[0].axisTitleOffset=this.yAxisTitleOffset(),this._chart.valueAxes[0].minimum=this.yAxisMinimum(),this._chart.valueAxes[0].axisAlpha=this.axisAlpha(),this._chart.valueAxes[0].dashLength=this.yAxisDashLength()||this.dashedLineStyle(),this._chart.valueAxes[0].axisColor=this.yAxisBaselineColor(),this._chart.valueAxes[0].axisThickness=this.axisLineWidth(),this._chart.valueAxes[0].titleColor=this.yAxisTitleFontColor(),this._chart.valueAxes[0].titleFontSize=this.yAxisTitleFontSize(),this._chart.valueAxes[0].fontSize=this.axisFontSize(),this._chart.valueAxes[0].color=this.yAxisFontColor(),this._chart.valueAxes[0].autoGridCount=this.yAxisAutoGridCount(),this._chart.valueAxes[0].gridPosition=this.yAxisGridPosition(),this._chart.valueAxes[0].labelFunction=function(i){return t.format(e.yAxisTickFormat())(i)},this._chart.colors=this.columns().filter(function(t,e){return e>0}).map(function(t){return this._palette(t)},this),this.circularGrid()&&this._chart.valueAxes.forEach(function(t,i){e._chart.valueAxes[i].gridType="circles"}),this.showScrollbar()?this._chart.chartScrollbar.enabled=!0:this._chart.chartScrollbar.enabled=!1,this._chart},l.prototype.buildGraphObj=function(t,e){var i=this,a={};return a.balloonFunction=function(t){var e=t.category+", "+i.columns()[t.graph.index+1]+": "+i.data()[t.index][t.graph.columnIndex+1];return e},a.fillAlphas=i.fillOpacity(),a.lineAlpha=i.lineOpacity(),a.lineThickness=i.lineWidth(),a.bullet=i.bulletType(),a.bulletSize=i.bulletSize(),a.dashLength=i.dashedLineStyle(),a.type=t,a.title="",a.colorField="selected"+e,a},l.prototype.formatData=function(t){var e=[],i=this;return t.forEach(function(t){var a={};i.columns().forEach(function(e,i){a[e]=t[i]}),e.push(a)}),e},l.prototype.enter=function(t,s){e.prototype.enter.apply(this,arguments);var l=this,o={type:"radar",addClassNames:!0,chartScrollbar:{}};"function"==typeof define&&define.amd&&(o.pathToImages=a.toUrl("amchartsImg")),this._chart=i.makeChart(t,o),this._chart.addListener("clickGraphItem",function(t){var e=t.graph,i=t.item.dataContext,a=e.colorField;null!==i[a]&&void 0!==i[a]?(delete i[a],"simple"===l.selectionMode()&&(null!==l._selected&&delete l._selected.data[l._selected.field],l._selected=null)):(i[a]=l.selectionColor(),"simple"===l.selectionMode()&&(null!==l._selected&&delete l._selected.data[l._selected.field],l._selected={field:a,data:i,cIdx:t.target.index,dIdx:t.index},l._selections.push(l._selected))),t.chart.validateData(),l.click(l.rowToObj(l.data()[t.index]),l.columns()[t.target.index+1],null!==l._selected)})},l.prototype.update=function(t,i){e.prototype.update.apply(this,arguments),t.style.width=this.size().width+"px",t.style.height=this.size().height+"px",this._palette=this._palette["switch"](this.paletteID()),this.useClonedPalette()&&(this._palette=this._palette.cloneNotExists(this.paletteID()+"_"+this.id()))},l.prototype.render=function(t){return e.prototype.render.apply(this,arguments)},l.prototype.data=function(t){return arguments.length&&this._dataUpdated++,e.prototype.data.apply(this,arguments)},l.prototype.columns=function(t){return arguments.length&&this._columnsUpdated++,e.prototype.columns.apply(this,arguments)},l});