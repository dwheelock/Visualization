!function(t,e){"function"==typeof define&&define.amd?define(["./Axis","d3"],e):t.amchart_SerialAxis=e(t.amchart_Axis,t.d3)}(this,function(t,e){function i(){t.call(this),this._parser=e.time.format("%Y-%m-%d").parse}i.prototype=Object.create(t.prototype),i.prototype.constructor=i,i.prototype._class+=" amchart_SerialAxis",i.prototype.publish("axisFontSize",null,"number","X/Y Axis Text Font Size",null,{tags:["Basic","Shared"]}),i.prototype.publish("axisBaselineColor","#000000","html-color","X Axis Baseline Color",null,{tags:["Basic","Shared"]}),i.prototype.publish("axisFontColor","#000000","html-color","Horizontal Axis Text Style (Color)",null,{tags:["Basic","Shared"]}),i.prototype.publish("axisTitle","","string","X-Axis Title",null,{tags:["Basic","Shared"]}),i.prototype.publish("axisTitleFontSize",null,"number","Vertical Axis Title Text Style (Font Size)",null,{tags:["Basic","Shared"]}),i.prototype.publish("axisTitleFontColor","#000000","html-color","Axis Title Text Style (Color)",null,{tags:["Basic","Shared"]}),i.prototype.publish("axisLabelRotation",0,"number","Axis Label Rotation",null,{min:0,max:90,step:.1,inputType:"range",tags:["Intermediate","Shared"]}),i.prototype.publish("axisLineWidth",1,"number","Axis Line Width",null,{tags:["Intermediate","Shared"]}),i.prototype.publish("axisAlpha",1,"number","Axis Alpha",null,{tags:["Intermediate"]}),i.prototype.publish("axisAutoGridCount",!0,"boolean","Specifies Whether Number of GridCount Is Specified Automatically, According To The Axis Size",null,{tags:["Advanced"]}),i.prototype.publish("axisGridPosition","start","set","Specifies If A Grid Line Is Placed On The Center of A Cell or On The Beginning of A Cell",["start","middle"],{tags:["Advanced"]}),i.prototype.publish("axisBoldPeriodBeginning",!0,"boolean","When parse dates is on for the category axis, the chart will try to highlight the beginning of the periods, like month, in bold.",null,{tags:["Intermediate"]}),i.prototype.publish("axisDashLength",0,"number","Length of a dash. 0 means line is not dashed.",null,{tags:["Advanced"]}),i.prototype.publish("axisFillAlpha",0,"number","Fill opacity. Every second space between grid lines can be filled with color. Set fillAlpha to a value greater than 0 to see the fills.",null,{tags:["Intermediate"]}),i.prototype.publish("axisFillColor",null,"html-color","Fill color. Every second space between grid lines can be filled with color. Set fillAlpha to a value greater than 0 to see the fills.",null,{tags:["Intermediate"]}),i.prototype.publish("axisGridAlpha",0,"number","Grid alpha.",null,{tags:["Intermediate"]}),i.prototype.publish("startOnAxis",!0,"boolean","Draw Chart Starting On Axis.",null,{tags:["Intermediate"]}),i.prototype.publish("axisTypeTimePattern","%Y-%m-%d","string","Time Series Pattern"),i.prototype.publish("axisType","ordinal","set","X-Axis Type",["ordinal","linear","time","pow","log","none"]),i.prototype.publish("axisTickFormat","","string","Y-Axis Tick Format"),i.prototype.publish("position",null,"set","Position of Axis",["top","bottom","left","right"]);var o=i.prototype.axisTypeTimePattern;return i.prototype.axisTypeTimePattern=function(t){var i=o.apply(this,arguments);return arguments.length&&(this._parser=e.time.format(t).parse),i},i});