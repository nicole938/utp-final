(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"BANNER_atlas_1", frames: [[0,0,1236,917],[1002,919,1000,750],[0,919,1000,1000],[1238,0,512,512]]},
		{name:"BANNER_atlas_2", frames: [[0,0,1178,1140]]},
		{name:"BANNER_atlas_3", frames: [[0,0,1200,1199]]},
		{name:"BANNER_atlas_4", frames: [[0,0,1470,1121]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.Coolpix = function() {
	this.initialize(ss["BANNER_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CÁMARA = function() {
	this.initialize(ss["BANNER_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.etiqueta = function() {
	this.initialize(ss["BANNER_atlas_4"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.FACEBOOK = function() {
	this.initialize(ss["BANNER_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.INSTAGRAM = function() {
	this.initialize(ss["BANNER_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.WHATSAPP = function() {
	this.initialize(ss["BANNER_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.YOTUE = function() {
	this.initialize(ss["BANNER_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.MARCA = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.text = new cjs.Text("MirreCom", "bold 50px 'Rockwell Extra Bold'", "#040506");
	this.text.textAlign = "center";
	this.text.lineHeight = 61;
	this.text.lineWidth = 332;
	this.text.parent = this;
	this.text.setTransform(0,-30.65);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-167.9,-32.6,335.9,65.30000000000001);


(lib.Interpolación4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.text = new cjs.Text("Lo mejor en foto y video", "bold 38px 'Rockwell Extra Bold'", "#040506");
	this.text.textAlign = "center";
	this.text.lineHeight = 47;
	this.text.lineWidth = 546;
	this.text.parent = this;
	this.text.setTransform(0,-24.95);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-274.9,-26.9,549.9,53.9);


(lib.Interpolación3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.Coolpix();
	this.instance.setTransform(-123.3,-91.5,0.1995,0.1995);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-123.3,-91.5,246.7,183);


(lib.Interpolación2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.CÁMARA();
	this.instance.setTransform(-107.05,-103.6,0.1818,0.1818);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-107,-103.6,214.1,207.3);


// stage content:
(lib.BANNER = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// REDES_SOCIALES
	this.instance = new lib.YOTUE();
	this.instance.setTransform(531,470,0.0647,0.0647);

	this.instance_1 = new lib.WHATSAPP();
	this.instance_1.setTransform(432,471,0.0311,0.0311);

	this.instance_2 = new lib.FACEBOOK();
	this.instance_2.setTransform(460,471,0.0388,0.0388);

	this.instance_3 = new lib.INSTAGRAM();
	this.instance_3.setTransform(498,472,0.0232,0.0232);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(48));

	// ETIQUETA
	this.instance_4 = new lib.etiqueta();
	this.instance_4.setTransform(110,52,0.0713,0.0713);

	this.instance_5 = new lib.etiqueta();
	this.instance_5.setTransform(812,52,0.0713,0.0713);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4}]}).wait(48));

	// MARCA
	this.instance_6 = new lib.MARCA("synched",0);
	this.instance_6.setTransform(500,49.55);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#48B5A0").ss(1,1,1).p("A6PlGMA0fAAAIAAKNMg0fAAAg");
	this.shape.setTransform(500.025,36.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_6}]}).wait(48));

	// LOGO
	this.instance_7 = new lib.Interpolación4("synched",0);
	this.instance_7.setTransform(314.95,447.15);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({x:322.8245},0).wait(1).to({x:330.6989},0).wait(1).to({x:338.5734},0).wait(1).to({x:346.4479},0).wait(1).to({x:354.3223},0).wait(1).to({x:362.1968},0).wait(1).to({x:370.0713},0).wait(1).to({x:377.9457},0).wait(1).to({x:385.8202},0).wait(1).to({x:393.6947},0).wait(1).to({x:401.5692},0).wait(1).to({x:409.4436},0).wait(1).to({x:417.3181},0).wait(1).to({x:425.1926},0).wait(1).to({x:433.067},0).wait(1).to({x:440.9415},0).wait(1).to({x:448.816},0).wait(1).to({x:456.6904},0).wait(1).to({x:464.5649},0).wait(1).to({x:472.4394},0).wait(1).to({x:480.3138},0).wait(1).to({x:488.1883},0).wait(1).to({x:496.0628},0).wait(1).to({x:503.9372},0).wait(1).to({x:511.8117},0).wait(1).to({x:519.6862},0).wait(1).to({x:527.5606},0).wait(1).to({x:535.4351},0).wait(1).to({x:543.3096},0).wait(1).to({x:551.184},0).wait(1).to({x:559.0585},0).wait(1).to({x:566.933},0).wait(1).to({x:574.8075},0).wait(1).to({x:582.6819},0).wait(1).to({x:590.5564},0).wait(1).to({x:598.4309},0).wait(1).to({x:606.3053},0).wait(1).to({x:614.1798},0).wait(1).to({x:622.0543},0).wait(1).to({x:629.9287},0).wait(1).to({x:637.8032},0).wait(1).to({x:645.6777},0).wait(1).to({x:653.5521},0).wait(1).to({x:661.4266},0).wait(1).to({x:669.3011},0).wait(1).to({x:677.1755},0).wait(1).to({x:685.05},0).wait(1));

	// DESCRIPCIÓN
	this.text = new cjs.Text("Nikon Coolpix\nS/. 4,999.00", "bold 38px 'Rockwell Extra Bold'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 47;
	this.text.lineWidth = 319;
	this.text.parent = this;
	this.text.setTransform(691.6183,329.6,0.8103,0.8103);

	this.text_1 = new cjs.Text("Nikon D 3100\nS/. 2,799.00", "bold 38px 'Rockwell Extra Bold'", "#FFFFFF");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 47;
	this.text_1.lineWidth = 315;
	this.text_1.parent = this;
	this.text_1.setTransform(302.25,329.6,0.8103,0.8103);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.text_1},{t:this.text}]},14).wait(34));

	// CÁMARA_2
	this.instance_8 = new lib.Interpolación3("synched",0);
	this.instance_8.setTransform(705.6,193.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({x:705.1957,y:194.3213},0).wait(1).to({x:704.7915,y:195.0426},0).wait(1).to({x:704.3872,y:195.7638},0).wait(1).to({x:703.983,y:196.4851},0).wait(1).to({x:703.5787,y:197.2064},0).wait(1).to({x:703.1745,y:197.9277},0).wait(1).to({x:702.7702,y:198.6489},0).wait(1).to({x:702.366,y:199.3702},0).wait(1).to({x:701.9617,y:200.0915},0).wait(1).to({x:701.5574,y:200.8128},0).wait(1).to({x:701.1532,y:201.534},0).wait(1).to({x:700.7489,y:202.2553},0).wait(1).to({x:700.3447,y:202.9766},0).wait(1).to({x:699.9404,y:203.6979},0).wait(1).to({x:699.5362,y:204.4191},0).wait(1).to({x:699.1319,y:205.1404},0).wait(1).to({x:698.7277,y:205.8617},0).wait(1).to({x:698.3234,y:206.583},0).wait(1).to({x:697.9191,y:207.3043},0).wait(1).to({x:697.5149,y:208.0255},0).wait(1).to({x:697.1106,y:208.7468},0).wait(1).to({x:696.7064,y:209.4681},0).wait(1).to({x:696.3021,y:210.1894},0).wait(1).to({x:695.8979,y:210.9106},0).wait(1).to({x:695.4936,y:211.6319},0).wait(1).to({x:695.0894,y:212.3532},0).wait(1).to({x:694.6851,y:213.0745},0).wait(1).to({x:694.2809,y:213.7957},0).wait(1).to({x:693.8766,y:214.517},0).wait(1).to({x:693.4723,y:215.2383},0).wait(1).to({x:693.0681,y:215.9596},0).wait(1).to({x:692.6638,y:216.6809},0).wait(1).to({x:692.2596,y:217.4021},0).wait(1).to({x:691.8553,y:218.1234},0).wait(1).to({x:691.4511,y:218.8447},0).wait(1).to({x:691.0468,y:219.566},0).wait(1).to({x:690.6426,y:220.2872},0).wait(1).to({x:690.2383,y:221.0085},0).wait(1).to({x:689.834,y:221.7298},0).wait(1).to({x:689.4298,y:222.4511},0).wait(1).to({x:689.0255,y:223.1723},0).wait(1).to({x:688.6213,y:223.8936},0).wait(1).to({x:688.217,y:224.6149},0).wait(1).to({x:687.8128,y:225.3362},0).wait(1).to({x:687.4085,y:226.0574},0).wait(1).to({x:687.0043,y:226.7787},0).wait(1).to({x:686.6,y:227.5},0).wait(1));

	// CÁMARA_1
	this.instance_9 = new lib.Interpolación2("synched",0);
	this.instance_9.setTransform(341.4,205.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({x:340.8819,y:206.1447},0).wait(1).to({x:340.3638,y:206.5894},0).wait(1).to({x:339.8457,y:207.034},0).wait(1).to({x:339.3277,y:207.4787},0).wait(1).to({x:338.8096,y:207.9234},0).wait(1).to({x:338.2915,y:208.3681},0).wait(1).to({x:337.7734,y:208.8128},0).wait(1).to({x:337.2553,y:209.2574},0).wait(1).to({x:336.7372,y:209.7021},0).wait(1).to({x:336.2191,y:210.1468},0).wait(1).to({x:335.7011,y:210.5915},0).wait(1).to({x:335.183,y:211.0362},0).wait(1).to({x:334.6649,y:211.4809},0).wait(1).to({x:334.1468,y:211.9255},0).wait(1).to({x:333.6287,y:212.3702},0).wait(1).to({x:333.1106,y:212.8149},0).wait(1).to({x:332.5926,y:213.2596},0).wait(1).to({x:332.0745,y:213.7043},0).wait(1).to({x:331.5564,y:214.1489},0).wait(1).to({x:331.0383,y:214.5936},0).wait(1).to({x:330.5202,y:215.0383},0).wait(1).to({x:330.0021,y:215.483},0).wait(1).to({x:329.484,y:215.9277},0).wait(1).to({x:328.966,y:216.3723},0).wait(1).to({x:328.4479,y:216.817},0).wait(1).to({x:327.9298,y:217.2617},0).wait(1).to({x:327.4117,y:217.7064},0).wait(1).to({x:326.8936,y:218.1511},0).wait(1).to({x:326.3755,y:218.5957},0).wait(1).to({x:325.8574,y:219.0404},0).wait(1).to({x:325.3394,y:219.4851},0).wait(1).to({x:324.8213,y:219.9298},0).wait(1).to({x:324.3032,y:220.3745},0).wait(1).to({x:323.7851,y:220.8191},0).wait(1).to({x:323.267,y:221.2638},0).wait(1).to({x:322.7489,y:221.7085},0).wait(1).to({x:322.2309,y:222.1532},0).wait(1).to({x:321.7128,y:222.5979},0).wait(1).to({x:321.1947,y:223.0426},0).wait(1).to({x:320.6766,y:223.4872},0).wait(1).to({x:320.1585,y:223.9319},0).wait(1).to({x:319.6404,y:224.3766},0).wait(1).to({x:319.1223,y:224.8213},0).wait(1).to({x:318.6043,y:225.266},0).wait(1).to({x:318.0862,y:225.7106},0).wait(1).to({x:317.5681,y:226.1553},0).wait(1).to({x:317.05,y:226.6},0).wait(1));

	// ESQUINAS
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C0FBE7").s().p("EBH4AnEIAAmQIGQAAIAAGQgEhOHAnEIAAmQIGQAAIAAGQgEBH4ggzIAAmQIGQAAIAAGQgEhOHggzIAAmQIGQAAIAAGQg");
	this.shape_1.setTransform(500,250);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(48));

	// FONDO
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#48B5A0").ss(1,1,1).p("EBH4gANIAAAbEhH3AAOIAAgb");
	this.shape_2.setTransform(500,461.425);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#040506").s().p("EhOHACVIAAkpMCcPAAAIAAEpg");
	this.shape_3.setTransform(500.05,485.125);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#48B5A0").s().p("AGpYyMAAAgxjMAv8AAAMAAAAxjgEg2kAYyMAAAgxjMAv8AAAMAAAAxjg");
	this.shape_4.setTransform(499.65,251.625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(48));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(500,250,500.1,253.2);
// library properties:
lib.properties = {
	id: '8E4C6806B102494DB9AE97CCA855C614',
	width: 1000,
	height: 500,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"img/BANNER_atlas_1.png", id:"BANNER_atlas_1"},
		{src:"img/BANNER_atlas_2.png", id:"BANNER_atlas_2"},
		{src:"img/BANNER_atlas_3.png", id:"BANNER_atlas_3"},
		{src:"img/BANNER_atlas_4.png", id:"BANNER_atlas_4"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['8E4C6806B102494DB9AE97CCA855C614'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;