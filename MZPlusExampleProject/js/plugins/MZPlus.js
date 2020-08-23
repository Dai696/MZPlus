var MZPlus = MZPlus || {};
MZPlus.Core = MZPlus.Core || {};

//=============================================================================
// Anisoft Plugin - MZPlus
// MZPlus.js
// Based off QPlus https://github.com/quxios/QMV-Master-Demo/blob/master/js/plugins/QPlus.js
//=============================================================================
var Imported = Imported || {};
Imported.MZPlus = "0.0.1";

/*:
 * @plugindesc <MZPlus> Based off Quasi's amazing QPlus Core.
 * @author Anisoft || Version 0.0.1
 * @target MZ
 *
 * @help
 *
 * This plugin provides core api/calls for Anisoft plugins.
 *
 * @param Quick Test
 * @desc When true, game will skip title screen and start a new game
 * @type boolean
 * @default true
 */

//https://github.com/josephg/noisejs/blob/master/perlin.js


function MZPlus() {
    throw new Error('This is a static class');
}

($=> {
    !function(t){var o=t.noise={};function r(t,o,r){this.x=t,this.y=o,this.z=r}r.prototype.dot2=function(t,o){return this.x*t+this.y*o},r.prototype.dot3=function(t,o,r){return this.x*t+this.y*o+this.z*r};var n=[new r(1,1,0),new r(-1,1,0),new r(1,-1,0),new r(-1,-1,0),new r(1,0,1),new r(-1,0,1),new r(1,0,-1),new r(-1,0,-1),new r(0,1,1),new r(0,-1,1),new r(0,1,-1),new r(0,-1,-1)],e=[151,160,137,91,90,15,131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,190,6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,88,237,149,56,87,174,20,125,136,171,168,68,175,74,165,71,134,139,48,27,166,77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,102,143,54,65,25,63,161,1,216,80,73,209,76,132,187,208,89,18,169,200,196,135,130,116,188,159,86,164,100,109,198,173,186,3,64,52,217,226,250,124,123,5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,223,183,170,213,119,248,152,2,44,154,163,70,221,153,101,155,167,43,172,9,129,22,39,253,19,98,108,110,79,113,224,232,178,185,112,104,218,246,97,228,251,34,242,193,238,210,144,12,191,179,162,241,81,51,145,235,249,14,239,107,49,192,214,31,181,199,106,157,184,84,204,176,115,121,50,45,127,4,150,254,138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180],a=new Array(512),i=new Array(512);o.seed=function(t){t>0&&t<1&&(t*=65536),(t=Math.floor(t))<256&&(t|=t<<8);for(var o=0;o<256;o++){var r;r=1&o?e[o]^255&t:e[o]^t>>8&255,a[o]=a[o+256]=r,i[o]=i[o+256]=n[r%12]}},o.seed(0);var d=.5*(Math.sqrt(3)-1),f=(3-Math.sqrt(3))/6,h=1/6;function u(t){return t*t*t*(t*(6*t-15)+10)}function s(t,o,r){return(1-r)*t+r*o}o.simplex2=function(t,o){var r,n,e=(t+o)*d,h=Math.floor(t+e),u=Math.floor(o+e),s=(h+u)*f,l=t-h+s,w=o-u+s;l>w?(r=1,n=0):(r=0,n=1);var v=l-r+f,M=w-n+f,c=l-1+2*f,p=w-1+2*f,y=i[(h&=255)+a[u&=255]],x=i[h+r+a[u+n]],m=i[h+1+a[u+1]],q=.5-l*l-w*w,z=.5-v*v-M*M,A=.5-c*c-p*p;return 70*((q<0?0:(q*=q)*q*y.dot2(l,w))+(z<0?0:(z*=z)*z*x.dot2(v,M))+(A<0?0:(A*=A)*A*m.dot2(c,p)))},o.simplex3=function(t,o,r){var n,e,d,f,u,s,l=(t+o+r)*(1/3),w=Math.floor(t+l),v=Math.floor(o+l),M=Math.floor(r+l),c=(w+v+M)*h,p=t-w+c,y=o-v+c,x=r-M+c;p>=y?y>=x?(n=1,e=0,d=0,f=1,u=1,s=0):p>=x?(n=1,e=0,d=0,f=1,u=0,s=1):(n=0,e=0,d=1,f=1,u=0,s=1):y<x?(n=0,e=0,d=1,f=0,u=1,s=1):p<x?(n=0,e=1,d=0,f=0,u=1,s=1):(n=0,e=1,d=0,f=1,u=1,s=0);var m=p-n+h,q=y-e+h,z=x-d+h,A=p-f+2*h,b=y-u+2*h,g=x-s+2*h,j=p-1+.5,k=y-1+.5,B=x-1+.5,C=i[(w&=255)+a[(v&=255)+a[M&=255]]],D=i[w+n+a[v+e+a[M+d]]],E=i[w+f+a[v+u+a[M+s]]],F=i[w+1+a[v+1+a[M+1]]],G=.6-p*p-y*y-x*x,H=.6-m*m-q*q-z*z,I=.6-A*A-b*b-g*g,J=.6-j*j-k*k-B*B;return 32*((G<0?0:(G*=G)*G*C.dot3(p,y,x))+(H<0?0:(H*=H)*H*D.dot3(m,q,z))+(I<0?0:(I*=I)*I*E.dot3(A,b,g))+(J<0?0:(J*=J)*J*F.dot3(j,k,B)))},o.perlin2=function(t,o){var r=Math.floor(t),n=Math.floor(o);t-=r,o-=n;var e=i[(r&=255)+a[n&=255]].dot2(t,o),d=i[r+a[n+1]].dot2(t,o-1),f=i[r+1+a[n]].dot2(t-1,o),h=i[r+1+a[n+1]].dot2(t-1,o-1),l=u(t);return s(s(e,f,l),s(d,h,l),u(o))},o.perlin3=function(t,o,r){var n=Math.floor(t),e=Math.floor(o),d=Math.floor(r);t-=n,o-=e,r-=d;var f=i[(n&=255)+a[(e&=255)+a[d&=255]]].dot3(t,o,r),h=i[n+a[e+a[d+1]]].dot3(t,o,r-1),l=i[n+a[e+1+a[d]]].dot3(t,o-1,r),w=i[n+a[e+1+a[d+1]]].dot3(t,o-1,r-1),v=i[n+1+a[e+a[d]]].dot3(t-1,o,r),M=i[n+1+a[e+a[d+1]]].dot3(t-1,o,r-1),c=i[n+1+a[e+1+a[d]]].dot3(t-1,o-1,r),p=i[n+1+a[e+1+a[d+1]]].dot3(t-1,o-1,r-1),y=u(t),x=u(o),m=u(r);return s(s(s(f,v,y),s(h,M,y),m),s(s(l,c,y),s(w,p,y),m),x)}}(this);
    $.noise = noise;
})(MZPlus);

($ => {
    $._regex = {
        isBoolean: /^(true|false)$/i,
        isString: /^"(.*?)"$/,
        isNumber: /^-?\d+$/,
        isFloat: /^-?\d+\.?\d*$/,
        isPoint: /^\((-?\d+\.?\d*),\s*(-?\d+\.?\d*)\)$/,
        isArray: /^\[(.*?)\]$/,
        isObj: /^\{(.*?)\}$/,
        isHexString: /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/i,
        isHexNumber: /^0X([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/i,
    };


    $.getParams = function (id, convert) {
        const plugin = $plugins.filter(function (p) {
            return p.description.contains(id) && p.status
        });
        const hasDefaults = typeof convert === 'object';
        if (!plugin[0]) {
            return hasDefaults ? convert : {};
        }
        const params = Object.assign(
            hasDefaults ? convert : {},
            plugin[0].parameters
        );
        if (convert) {
            for (let param in params) {
                params[param] = this.stringToType(String(params[param]));
                if (hasDefaults && convert[param] !== undefined) {
                    if (convert[param].constructor !== params[param].constructor) {
                        let err = 'Plugin Parameter value error. ' + id + ', Parameter: ' + param;
                        err += '\nDefault value will be used.';
                        console.warn(err);
                        params[param] = convert[param];
                    }
                }
            }
        }
        return params;
    };


    $.stringToObj = function (string) {
        const lines = string.split('\n');
        const obj = {};
        lines.forEach(function (value) {
            const match = /^(.*):(.*)/.exec(value);
            if (match) {
                let key, newKey = match[1].trim();
                if (obj.hasOwnProperty(key)) {
                    var i = 1;
                    while (obj.hasOwnProperty(newKey)) {
                        newKey = key + String(i);
                        i++;
                    }
                }
                let arr = $.stringToAry(match[2].trim());
                if (arr.length === 1) arr = arr[0];
                obj[newKey] = arr || '';
            }
        });
        return obj;
    };

    $.stringToAry = function (string) {
        // couldn't get this to work with split so went with regex
        const regex = /\s*(\(.*?\))|([^,]+)/g;
        const arr = [];
        while (true) {
            const match = regex.exec(string);
            if (match) {
                arr.push(match[0]);
            } else {
                break;
            }
        }
        return arr.map(this.stringToType);
    };

    $.argsToData = function (args) {
        const data = {};
        for (const k in args) {
            data[k] = MZPlus.stringToType(args[k])
        }
        return data;
    };

    $.stringToType = function (string) {
        if (typeof string !== 'string') return string
        string = string.trim();
        const rx = MZPlus._regex;
        if (rx.isString.test(string)) {
            string = string.slice(1, -1);
        }
        if (rx.isBoolean.test(string)) {
            return string.toLowerCase() === 'true';
        }
        if (rx.isFloat.test(string)) {
            return Number(string);
        }

        if (rx.isHexNumber.test(string)) {
            return Number(string);
        }

        if (rx.isHexString.test(string)) {
            return $.string2hex(string);
        }
        const isPoint = rx.isPoint.exec(string);
        if (isPoint) {
            return new Point(Number(isPoint[1]), Number(isPoint[2]));
        }
        if (rx.isArray.test(string)) {
            try {
                return JSON.parse(string).map($.stringToType);
            } catch (e) {
                return string;
            }
        }
        if (rx.isObj.test(string)) {
            try {
                const obj = JSON.parse(string);
                for (let key in obj) {
                    obj[key] = $.stringToType(obj[key]);
                }
                return obj;
            } catch (e) {
                return string;
            }
        }
        return string;
    };

    $.string2hex = function (string) {
        if (typeof string === 'string' && string[0] === '#') {
            string = string.substr(1);
        }
        return parseInt(string, 16);
    };

    $.isDataLoaded = function () {
        return DataManager.isJSONLoaded() && ImageManager.isSpritesheetsLoaded();
    }

})(MZPlus);


MZPlus.Core = MZPlus.getParams('<MZPlus>', {
    'Quick Test': false,
    'Default Enabled Switches': [],
    'Ignore Mouse when inactive': false
});


//-----------------------------------------------------------------------------
// Aliases
//-----------------------------------------------------------------------------
($=> {
    $.renderClearColor = function(displayObject, renderTexture, clear, transform, skipUpdateTransform) {
        // can be handy to know!
        this.renderingToScreen = !renderTexture;

        this.runners.prerender.run();
        this.emit('prerender');

        // apply a transform at a GPU level
        this.projection.transform = transform;

        // no point rendering if our context has been blown up!
        if (this.context.isLost)
        {
            return;
        }

        if (!renderTexture)
        {
            this._lastObjectRendered = displayObject;
        }

        if (!skipUpdateTransform)
        {
            // update the scene graph
            var cacheParent = displayObject.parent;

            displayObject.parent = this._tempDisplayObjectParent;
            displayObject.updateTransform();
            displayObject.parent = cacheParent;
            // displayObject.hitArea = //TODO add a temp hit area
        }

        this.renderTexture.bind(renderTexture);
        this.batch.currentRenderer.start();

        if (clear !== undefined ? clear : this.clearBeforeRender)
        {
            if ( Array.isArray(clear))
                this.renderTexture.clear(clear);
        }

        displayObject.render(this);

        // apply transform..
        this.batch.currentRenderer.flush();

        if (renderTexture)
        {
            renderTexture.baseTexture.update();
        }

        this.runners.postrender.run();

        // reset transform after render
        this.projection.transform = null;

        this.emit('postrender');
    }

})(PIXI.Renderer.prototype);



//-----------------------------------------------------------------------------
// Math
//-----------------------------------------------------------------------------

($ => {
    $.randomIntBetween = function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    $.randomBetween = function (min, max) {
        return Math.random() * (max - min) + min;
    };


    $.lerp = function(a, b, amount) {
        return a*(1-amount)+b*amount
    }
})(Math);

//-----------------------------------------------------------------------------
// Managers
//-----------------------------------------------------------------------------


//-----------------------------------------------------------------------------
// DataManager

(($) => {
    $._loadedJsonFiles = {};


    let reading = null;
    const Alias_onLoad = $.onLoad;
    $.onLoad = function (object) {
        reading = object;
        Alias_onLoad.call(this, object);
        reading = null;
    };

    $.isJSONLoaded = function () {
        const jsons = Object.values(this._loadedJsonFiles);
        for (let i = 0; i < jsons.length; ++i) {
            if (jsons[i] === null) {
                return false;
            }
        }
        return true;
    };

    $.loadJSONFileTextures = function (folder, name, cb) {
        if (this._loadedJsonFiles[name]) return cb.call(this, this._loadedJsonFiles[name]);
        const xhr = new XMLHttpRequest();
        const url = folder + name + ".json";
        xhr.open('GET', url);
        xhr.overrideMimeType('application/json');
        xhr.onload = () => {
            if (xhr.status < 400) {
                this._loadedJsonFiles[name] = JSON.parse(xhr.responseText);
                cb.call(this, this._loadedJsonFiles[name]);
            }
        };
        xhr.onerror = function () {
        };
        this._loadedJsonFiles[name] = null;

        xhr.send();
    };


    const Alias_extractMetadata = $.extractMetadata;
    $.extractMetadata = function (data) {
        Alias_extractMetadata.call(this, data);
        const blockRegex = /<([^<>:\/]+)>([\s\S]*?)<\/\1>/g;
        data.qmeta = Object.assign({}, data.meta);
        while (true) {
            const match = blockRegex.exec(data.note);
            if (match) {
                data.qmeta[match[1]] = match[2];
            } else {
                break;
            }
        }
        this.extractAData(data, reading);
    };


    $.extractAData = function (data, object) {
        // to be aliased by plugins
    };
})(DataManager);


//-----------------------------------------------------------------------------
// ImageManager
($ => {
    $._spritesheets = {};
    $._textures = {};

    $.addTextures = function (name, texture) {
        this._textures[name] = texture
    };

    $.textures = function () {
        return this._textures;
    };

    $.getTexture = function (name) {
        return this._textures[name]
    };


    $.isSpritesheetsLoaded = function () {
        const spritesheets = Object.values(this._spritesheets);
        for (let i = 0; i < spritesheets.length; ++i) {
            if (spritesheets[i] === null || !spritesheets[i].isReady()) {
                return false;
            }
        }
        return true;
    };

    $.loadSpritesheet = function (folder, name) {
        const sheets = $._spritesheets;
        const ext = $.getExt(name);
        name = $.removeExt(name);
        // if (sheets[name] || sheets[name] === null) return sheets[name];
        sheets[name] = null;

        if (ext === "png") {
            const bitmap = sheets[name] = ImageManager.loadBitmap(folder, name);
            bitmap.addLoadListener(() => {
                ImageManager.addTextures(name, new PIXI.Texture(bitmap._baseTexture));
            });
            return;
        }
        DataManager.loadJSONFileTextures(folder, name, data => {
            const bitmap = sheets[name] = this.loadBitmap(folder, name.replace(/\.[^/.]+$/, ""));
            bitmap.addLoadListener(() => {
                const sheet = new PIXI.Spritesheet(new PIXI.BaseTexture(bitmap._baseTexture.resource.url), data);
                sheet.parse(() => {
                    const textures = sheet.textures;
                    Object.entries(textures).forEach((t) => {
                        ImageManager.addTextures(t[0], t[1]);
                    });
                })

            });
        });
        return sheets[name];
    };


    $.getExt = function (url) {
        return url.slice((url.lastIndexOf(".") - 1 >>> 0) + 2);
    };

    $.removeExt = function (name) {
        return name.replace(/\.[^/.]+$/, "")

    };
})(ImageManager);
//-----------------------------------------------------------------------------
// Scenes
//-----------------------------------------------------------------------------

//-----------------------------------------------------------------------------
// Scene_Base
($ => {
    const Alias_create = $.create;
    $.create = function () {
        Alias_create.call(this);
        this.loadData();
    };

    $.loadData = function () {
        //To be aliased by plugins
    };

    const Alias_isReady = $.isReady;
    $.isReady = function () {
        if (this.constructor === Scene_Map || MZPlus.isDataLoaded()) {
            return Alias_isReady.call(this);
        }
    };


})(Scene_Base.prototype);

//-----------------------------------------------------------------------------
// Scene_Boot
($ => {
    const Alias_start = $.start;
    $.start = function () {
        if (MZPlus.Core["Quick Test"] && Utils.isOptionValid("test")) {
            this.checkPlayerLocation();
            DataManager.setupNewGame();
            SceneManager.goto(Scene_Map);
            this.resizeScreen();
            this.updateDocumentTitle();
        } else {
            Alias_start.call(this);
        }

    };


})(Scene_Boot.prototype);

//-----------------------------------------------------------------------------
// Scene_Map
($ => {
    const Alias_isReady = $.isReady;
    $.isReady = function () {
        if (MZPlus.isDataLoaded()) {
            return Alias_isReady.call(this);
        }
    };
})(Scene_Map.prototype);

//-----------------------------------------------------------------------------
// Game_Objects
//-----------------------------------------------------------------------------

//-----------------------------------------------------------------------------
// Game_Event
($ => {

    var Alias_Game_Event_initMembers = $.initMembers;
    $.initMembers = function () {
        Alias_Game_Event_initMembers.call(this);
        this._comments = null;
        this._prevDir = null;
    };

    $.charaId = function () {
        return this.eventId();
    };

    $.notes = function (withComments) {
        var notes = this.event() ? this.event().note : '';
        return notes + (withComments ? this.comments() : '');
    };
    $.setupPluginCommands = function () {
        const list = this.list();
        if (this.page() && list) {
            list.forEach(e => {
                if ((e.code === 357 || e.code === 657)) {
                    const params = e.parameters;
                    if (params) {
                        if (params[3] && params[3].triggerType === 'Page') {
                            this.callCommandInitMZPlus(params);
                        }
                    }
                }
            })
        }
    };

    $.callCommandInitMZPlus = function (params) {
        PluginManager.callCommand(this, params[0],params[1], params[3], true);
    };


    $.comments = function (withNotes) {
        var notes = '';
        if (this.event()) {
            notes = this.event().note;
        }
        return this._comments + (withNotes ? notes : '');
    };

    $.setupComments = function () {
        this._comments = '';
        if (this.page() && this.list()) {
            this._comments = this.list().filter(function (list) {
                return list.code === 108 || list.code === 408;
            }).map(function (list) {
                return list.parameters;
            }).join('\n')
        }
    };


    const Alias_setupPage = $.setupPage;
    $.setupPage = function () {
        const firstTime = this._prevDir === null;
        this._prevDir = this.direction();
        Alias_setupPage.call(this);
        const retainDir = /<retainDir>/i.test(this.comments(true));
        if (!firstTime && retainDir) {
            this.setDirection(this._prevDir);
        }
    };

    MZPlus.Core.Game_Event_clearPageSettings = $.clearPageSettings;
    $.clearPageSettings = function () {
        MZPlus.Core.Game_Event_clearPageSettings.call(this);
        this._comments = '';
    };


    MZPlus.Core.Game_Event_setupPageSettings = $.setupPageSettings;
    $.setupPageSettings = function () {
        MZPlus.Core.Game_Event_setupPageSettings.call(this);
        this.setupComments();
        this.setupPluginCommands();
    };
})(Game_Event.prototype);

//-----------------------------------------------------------------------------
// PluginManager
($ => {
    $.callCommand = function (self, pluginName, commandName, args, pageRun) {
        const key = pluginName + ":" + commandName;
        const func = this._commands[key];
        if (typeof func === "function") {
            func.call(self, args, pageRun);
        }
    };

})(PluginManager);

