exports.process = function(msg, cfg){
    var that = this;
    var data = msg;

    that.emit('data', {items: [1,2,3,4,5,6]});
    that.emit('end');
};
