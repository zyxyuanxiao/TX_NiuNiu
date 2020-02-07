cc.Class({
    extends: cc.Component,

    properties: {
        labelNode: cc.Node
    },

    onLoad () {
        this.node.on("show-text", (text)=>{
            this.labelNode.getComponent(cc.Label).string = text;
        });
       setTimeout(() => {
            this.node.destroy();
       }, 1500);
    },

    start () {

    },

    // update (dt) {},
});
