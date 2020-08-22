/*
($=> {

    const Alias_initialize = $.initialize;
    $.initialize = function() {
        Alias_initialize.call(this);
        this._zoom = new PIXI.Point(1,1);
        this._zoomPrev = this._zoom.x;
        this._zoomTarget = 0
        this._zoomDuration = 0
        this._zoomTime = 0;
    };

    const Alias_setup= $.setup;
    $.setup = function() {
        Alias_setup.call(this, ...arguments);
    };

    $.screenTileX = function() {
        return Graphics.width / this.tileWidth() / this.zoom.x;
    };

    $.screenTileY = function() {
        return Graphics.height / this.tileHeight() / this.zoom.y;
    };

    $.canvasToMapX = function(x) {
        const tileWidth = this.tileWidth() * this.zoom.x;
        const originX = this.displayX() * tileWidth;
        const  mapX = Math.floor((originX + x) / tileWidth);
        return this.roundX(mapX);
    };

    $.canvasToMapY = function(y) {
        const tileHeight = this.tileHeight() * this.zoom.y;
        const originY = this.displayY() * tileHeight;
        const mapY = Math.floor((originY + y) / tileHeight);
        return this.roundY(mapY);
    };

    const Alias_update = $.update;
    $.update = function () {
        Alias_update.apply(this, arguments);
        if (this._zoomTime < this._zoomDuration) {
            const amount = Math.lerp(this._zoomPrev, this._zoomTarget, this._zoomTime/this._zoomDuration)
            this.updateZoom(amount)
            this._zoomTime+= 1
        }
    };


    $.setZoom = function(x, duration) {
        if (duration) {
            this._zoomTime = 0;
            this._zoomDuration = duration
            this._zoomPrev = this._zoom.x;
            this._zoomTarget = x;
        } else {
            this.updateZoom(x);
        }
    };

    $.updateZoom = function(x) {
        this.zoom.set(x);
        $gamePlayer.center($gamePlayer._realX, $gamePlayer._realY)
    };

    Object.defineProperties($,{
        zoom: {
            get: function () {
                return this._zoom
            }
        }
    })

})(Game_Map.prototype);


($=> {
    const Alias_centerX = $.centerX;
    $.centerX = function() {
        return Alias_centerX.call(this) / $gameMap.zoom.x
    };
    const Alias_centerY = $.centerY;

    $.centerY = function() {
        return Alias_centerY.call(this) / $gameMap.zoom.y
    };

    $.center = function (x, y) {
        return $gameMap.setDisplayPos(x - this.centerX(), y - this.centerY());
    };



})(Game_Player.prototype);


($=> {

    $.updatePosition = function() {
        const screen = $gameScreen;
        const scale = $gameMap.zoom;
        this.scale.x = scale;
        this.scale.y = scale;
        this.x = Math.round(-scale.x * (scale.x - 1));
        this.y = Math.round(-scale.y * (scale.y - 1));
        this.x += Math.round(screen.shake());
        this.scale.copyFrom($gameMap.zoom)
    };

})(Spriteset_Map.prototype);*/
