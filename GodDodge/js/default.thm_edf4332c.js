window.skins=window.skins||{};
                var __extends = this && this.__extends|| function (d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                        function __() {
                            this.constructor = d;
                        }
                    __.prototype = b.prototype;
                    d.prototype = new __();
                };
                window.generateEUI = window.generateEUI||{};
                generateEUI.paths = generateEUI.paths||{};
                generateEUI.styles = undefined;
                generateEUI.skins = {};generateEUI.paths['resource/game_skins/SceneStartSkin.exml'] = window.skins.SceneStartSkin = (function (_super) {
	__extends(SceneStartSkin, _super);
	function SceneStartSkin() {
		_super.call(this);
		this.skinParts = ["starRain","playerShadow","player","meteorArea","btn","score"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Image1_i(),this.starRain_i(),this.playerShadow_i(),this.player_i(),this.meteorArea_i(),this.btn_i(),this.score_i()];
		this._BitmapLabel1_i();
		
		this.states = [
			new eui.State ("start",
				[
					new eui.AddItems("_BitmapLabel1","",2,"score"),
					new eui.SetProperty("starRain","visible",false),
					new eui.SetProperty("playerShadow","visible",false),
					new eui.SetProperty("player","scaleX",15),
					new eui.SetProperty("player","scaleY",15),
					new eui.SetProperty("player","y",568),
					new eui.SetProperty("meteorArea","visible",false),
					new eui.SetProperty("btn","source","btn_start_png"),
					new eui.SetProperty("btn","horizontalCenter",0),
					new eui.SetProperty("btn","verticalCenter",258),
					new eui.SetProperty("score","visible",false)
				])
			,
			new eui.State ("game",
				[
					new eui.SetProperty("score","scaleX",.8),
					new eui.SetProperty("score","scaleY",.8),
					new eui.SetProperty("score","right",10),
					new eui.SetProperty("score","top",5)
				])
			,
			new eui.State ("end",
				[
					new eui.SetProperty("btn","source","btn_retry_png"),
					new eui.SetProperty("btn","anchorOffsetX",58),
					new eui.SetProperty("btn","anchorOffsetY",21),
					new eui.SetProperty("btn","verticalCenter",136),
					new eui.SetProperty("score","scaleX",1.5),
					new eui.SetProperty("score","scaleY",1.5),
					new eui.SetProperty("score","horizontalCenter",1),
					new eui.SetProperty("score","verticalCenter",-95)
				])
		];
	}
	var _proto = SceneStartSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 1136;
		t.smoothing = false;
		t.source = "space_png";
		t.width = 640;
		return t;
	};
	_proto.starRain_i = function () {
		var t = new eui.Group();
		this.starRain = t;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.playerShadow_i = function () {
		var t = new eui.Group();
		this.playerShadow = t;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.player_i = function () {
		var t = new eui.Image();
		this.player = t;
		t.anchorOffsetX = 9;
		t.anchorOffsetY = 9.5;
		t.height = 19;
		t.smoothing = false;
		t.source = "player_png";
		t.width = 18;
		t.x = 320;
		return t;
	};
	_proto.meteorArea_i = function () {
		var t = new eui.Group();
		this.meteorArea = t;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.btn_i = function () {
		var t = new eui.Image();
		this.btn = t;
		t.horizontalCenter = 0;
		t.scaleX = 2;
		t.scaleY = 2;
		t.verticalCenter = 0;
		return t;
	};
	_proto._BitmapLabel1_i = function () {
		var t = new eui.BitmapLabel();
		this._BitmapLabel1 = t;
		t.font = "game_font_fnt";
		t.horizontalCenter = 0;
		t.scaleX = 2;
		t.scaleY = 2;
		t.text = "GodDodge";
		t.verticalCenter = -316;
		return t;
	};
	_proto.score_i = function () {
		var t = new eui.BitmapLabel();
		this.score = t;
		t.font = "game_font_fnt";
		t.text = "99999km";
		return t;
	};
	return SceneStartSkin;
})(eui.Skin);