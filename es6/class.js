var Language = (function () {
    function Language(name) {
        this.name = name;
    }
    Language.prototype.summary = function () {
        return this.name;
    };
    return Language;
}());
