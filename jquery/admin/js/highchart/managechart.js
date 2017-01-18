//取随机数 只是做例子数据
    var randomd = function(){ return Math.round(Math.random()*1000000)};

/*
创建曲线图
*/
function createLineChart(setting){
   $(setting.targetId).highcharts({
   		chart:{type:"area",height:setting.heightset},
        credits:{
           enabled:false     //去掉版本信息
        },
        exporting:{
           enabled:false //去掉打印
        },
        title: {
            text: ' ',
            x: -20 //center
        },
        subtitle: {
            text: '',
            x: -20
        },
        plotOptions:{
        	series:{
        		marker:{
        			enabled:false
        		}
        	},
        	area:{
        		lineColor:"#3DAEF9",
        		fillColor:{
                linearGradient:{x1:0,y1:0,x2:0,y2:1},
                stops:[
                    [0,Highcharts.getOptions().colors[0]],
                    [1,Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get("rgba")]                
                ]
            }
        	}
        },
        xAxis: {
           type: 'datetime'//,
           //  categories: setting.labelarray,
           //  tickLength:1,
           //  tickPosition:"inside"
        },
        yAxis: {
            title: {
                text: ''
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {  
        	 backgroundColor:"#65BFF3",     
             headerFormat: '',
             pointFormat: '<span style="font-size:12px;color:#fff">{point.y}</span><br/>'
        },
        legend: {
            enabled:false
        },//setting.dataarray 
        series:[{
            name: 'Temperature',
            data: setting.averagesarray,
            zIndex: 1,
            marker: {
                fillColor: 'white',
                lineWidth: 2,
                lineColor: Highcharts.getOptions().colors[0]
            }
        }, {
            name: 'Range',
            data: setting.rangesarray,
            type: 'arearange',
            lineWidth: 0,
            linkedTo: ':previous',
            color: Highcharts.getOptions().colors[0],
            fillOpacity: 0.3,
            zIndex: 0
        }]
    });
}

function createarearyange_line(setting){
  var ranges = [
          [1246406400000, 14.3, 27.7],
          [1246492800000, 14.5, 27.8],
          [1246579200000, 15.5, 29.6],
          [1246665600000, 16.7, 30.7],
          [1246752000000, 16.5, 25.0],
          [1246838400000, 17.8, 25.7],
          [1246924800000, 13.5, 24.8],
          [1247011200000, 10.5, 21.4],
          [1247097600000, 9.2, 23.8],
          [1247184000000, 11.6, 21.8],
          [1247270400000, 10.7, 23.7],
          [1247356800000, 11.0, 23.3],
          [1247443200000, 11.6, 23.7],
          [1247529600000, 11.8, 20.7],
          [1247616000000, 12.6, 22.4],
          [1247702400000, 13.6, 19.6],
          [1247788800000, 11.4, 22.6],
          [1247875200000, 13.2, 25.0],
          [1247961600000, 14.2, 21.6],
          [1248048000000, 13.1, 17.1],
          [1248134400000, 12.2, 15.5],
          [1248220800000, 12.0, 20.8],
          [1248307200000, 12.0, 17.1],
          [1248393600000, 12.7, 18.3],
          [1248480000000, 12.4, 19.4],
          [1248566400000, 12.6, 19.9],
          [1248652800000, 11.9, 20.2],
          [1248739200000, 11.0, 19.3],
          [1248825600000, 10.8, 17.8],
          [1248912000000, 11.8, 18.5],
          [1248998400000, 10.8, 16.1]
      ],
      averages = [
          [1246406400000, 21.5],
          [1246492800000, 22.1],
          [1246579200000, 23],
          [1246665600000, 23.8],
          [1246752000000, 21.4],
          [1246838400000, 21.3],
          [1246924800000, 18.3],
          [1247011200000, 15.4],
          [1247097600000, 16.4],
          [1247184000000, 17.7],
          [1247270400000, 17.5],
          [1247356800000, 17.6],
          [1247443200000, 17.7],
          [1247529600000, 16.8],
          [1247616000000, 17.7],
          [1247702400000, 16.3],
          [1247788800000, 17.8],
          [1247875200000, 18.1],
          [1247961600000, 17.2],
          [1248048000000, 14.4],
          [1248134400000, 13.7],
          [1248220800000, 15.7],
          [1248307200000, 14.6],
          [1248393600000, 15.3],
          [1248480000000, 15.3],
          [1248566400000, 15.8],
          [1248652800000, 15.2],
          [1248739200000, 14.8],
          [1248825600000, 14.4],
          [1248912000000, 15],
          [1248998400000, 13.6]
      ];

  $(setting.targetId).highcharts({
     credits:{
         enabled:false     //去掉版本信息
      },
      exporting:{
         enabled:false//去掉打印
      },
      title: {
          text: ''
      },

      xAxis: {
          type: 'linnear',
          // categories: setting.labelarray
      },

      yAxis: {
          title: {
              text: null
          }
      },

      tooltip: {
          crosshairs: true,
          shared: true,
          valueSuffix: '°C'
      },

      legend: {
        enabled:false
      },

      series: [{
          name: 'Temperature',
          data: averages,
          zIndex: 1,
          marker: {
              fillColor: 'white',
              lineWidth: 2,
              lineColor: Highcharts.getOptions().colors[0]
          }
      }, {
          name: 'Range',
          data: ranges,
          type: 'arearange',
          lineWidth: 0,
          linkedTo: ':previous',
          color: Highcharts.getOptions().colors[0],
          fillOpacity: 0.3,
          zIndex: 0
      }]
  }); 
}

/*
创建柱形图
*/
function createBarChart(setting){
 $(setting.targetId).highcharts({
        credits:{ enabled:false},
        exporting:{enabled:false},
        chart: {
              type: 'column',
              height:setting.heightset,
              spacingTop:10
        }, 
        colors:["#BC90E3","#1BBFF0"],
         title: {
              text: null
          },        
          xAxis: {
              type: 'category',
              tickLength:1,
              tickPosition:"inside"   
          },
          yAxis: {
              title: {
                  text: ''
              }
          },
          legend: {
              align:"right",
              symbolHeight:8,
              symbolWidth:8,
              itemStyle:{
              	color:"#555",
              	fontWeight:"normal",
	            fontFamily:"Microsoft YaHei" 

          	}
          },
          plotOptions: {
              series: {
                  borderWidth: 0,
                  dataLabels: {
                      enabled: false,
                      format: '{point.y:.1f}%'
                  }
              }
          },
          tooltip: {
              headerFormat: '<span style="font-size:11px;color:#555">{series.name}</span><br>',
              pointFormat: '<span style="color:{point.color}">{point.name}<b>{point.y}</b></span> <br/>'
          },
          series: setting.dataarray
      });
}

/*
创建圆环图
*/
function createdoughnutChart(setting){
  var _align ="center",vAlign="bottom";
  var l = setting.labelarray, 
      v = setting.dataarray,
      otherrate = v[5]/(v[0]+v[1]+v[2]+v[3]+v[4]+v[5]);
  if(setting.layoutsel=="right"){
      _align ="right";
      vAlign ="top";
  } 
  var defaultConfig ={
          chart: {
              plotBackgroundColor: null,
              plotBorderWidth: null,
              plotShadow: false,
              type: 'pie',  
              height:setting.heightset,
              className:setting.layoutsel,
              inverted:true
          },
          credits:{
            enabled:false
          },
          // colors:["#1EACEF","#56C85B","#F3CE47","#EF697D","#9778D7","#C7C5C5"],
          colors:["#1EACEF","#E6E6E6"],
          title: {
              text: ''
          },
          tooltip: {
              enabled:false,
              pointFormat: '<b>{point.percentage:.2f}%</b>'
          },
          plotOptions: {
              pie: {
                  allowPointSelect: true,
                  cursor: 'pointer',
                  dataLabels: {
                      enabled: false,
                      format: '{point.percentage:.1f} %',
                      style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                      }
                  },
                  showInLegend: true,
                  distance:10
              },
              series: {
                stacking: 'normal'
              }
          },
        xAxis: {
            categories: setting.labelarray,
            tickLength:1,
            tickPosition:"inside",
            labels:{
              enabled:false
            }
        },
        yAxis: {
            title: {
                text: ''
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
         legend: {
              enabled:false,
              layout: "vertical",
              align: _align,
              verticalAlign: vAlign,
              borderWidth: 0,
              floating:false,
              itemMarginTop:20,
               itemStyle:{
                  color:"#555",
                  fontWeight:"normal",
                  fontFamily:"Microsoft YaHei" 
              },
              labelFormatter:function(){
                  return "<div class='legendbox' style='width:200px;'><span class='name'>"+this.name+"</span></div>"; 
              },
              useHTML:true,
              symbolHeight:10,
              symbolWidth:10,
              symbolPadding:5,
              padding:5
          },
          series: [{
              name: "pie",
              colorByPoint: true,
              innerSize: '85%',
              data: [    
                {name:setting.labelarray[0], y:setting.dataarray[0]},
                {name:setting.labelarray[1], y:setting.dataarray[1]}
              ]
          }]
      };
   if(otherrate>1.7){ //其他>70% 即前五家企业<=30%
      defaultConfig.chart.type= "column";
      defaultConfig.chart.className ="bottom-column";
      defaultConfig.series = [{
        name:setting.labelarray[0],
        data:[    
              {name:setting.labelarray[0], color:"#1EACEF", y:setting.dataarray[0]},
              {name:setting.labelarray[1], color:"#56C85B", y:setting.dataarray[1]},
              {name:setting.labelarray[2], color:"#F3CE47", y:setting.dataarray[2]},
              {name:setting.labelarray[3], color:"#EF697D", y:setting.dataarray[3]},
              {name:setting.labelarray[4], color:"#9778D7", y:setting.dataarray[4]}
            ]
      },{
        name:setting.labelarray[1],//空数据只是为了显示图例-公司名称
        data:[]  
      },{
        name:setting.labelarray[2],//空数据只是为了显示图例-公司名称
        data:[]
      },{
        name:setting.labelarray[3],//空数据只是为了显示图例-公司名称
        data:[]
      },{
        name:setting.labelarray[4],//空数据只是为了显示图例-公司名称
        data:[]
      }
      ];
      defaultConfig.tooltip.pointFormat= '<b>{point.y}</b>'; 
      defaultConfig.legend.labelFormatter =function(){//正常柱形图只有一条总的图例-公司名，为了显示多条图例而修改后，柱形图显示不出数值
         return "<div class='legendbox' style='width:200px;'><span class='name' title='"+this.name +"'>"+this.name+"</span></div>"; 
      }
   }else if(setting.layoutsel!="right"){
      defaultConfig.legend.labelFormatter =function(){//
          var p = this.percentage.toFixed(1);
          return "<div class='legendbox' style='width:200px;'><span class='name' title='"+this.name +"'>"+this.name+"</span><span class='data'>"+this.y+"("+p+"%)</span></div>";                       
      }
    }

	$(setting.targetId).eq(setting.indexsel).highcharts(defaultConfig);
}