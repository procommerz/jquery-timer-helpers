jQuery.extend({
    timersCache: {},
    intervalsCache: {},

    setTimeout: function(block, delay, id) {
        this.timersCache[id] = setTimeout(block, delay);
    },

    clearTimeout: function(id) {
        clearTimeout(this.timersCache[id]);
    },

    setInterval: function(block, interval, id) {
        this.intervalsCache[id] = setInterval(block, interval);
    },

    clearInterval: function(id) {
        return clearInterval(this.intervalsCache[id]);
    },

    stopAllTimersAndIntervals: function() {
        for(var id in this.timersCache) {
            clearTimeout(this.timersCache[id]);
        }

        for(var id in this.intervalsCache) {
            clearInterval(this.intervalsCache[id]);
        }
    }
});
