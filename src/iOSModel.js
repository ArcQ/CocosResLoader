//LoadSceneCtrl serves as a replacement of the default preloader function (CCLoaderScene.js)
//Scenes are used as controllers because running scenes have access to methods that the controller needs, this contradicts with MVC slightly
var iOSModel = function(){
    this.percentResLoaded = 0;
    this.delayedCb = 0;
}

iOSModel.prototype.load = function(ctrl,resources){
    for(int i = 0; i < resources.length; i++){
        uiImage = this.create(ctrl,resources[i]);
        cc.textureCache.addUIImage(uiImage, resources[i]);
        this.arcBg = cc.CreateSpriteUIImage.create("test");
    }
};

iOSModel.prototype.create = function(ctrl,resource){
    return jsb.reflection.callStaticMethod(CGLoad, createUIImage, resource);
}

module.exports = iOSModel;








