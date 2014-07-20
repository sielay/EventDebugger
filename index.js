var EventEmitter = require( "events" ).EventEmitter;

var defaultIgnore = {
	Socket : '*'
};

module.exports = function(ignore)
{
	var _ignore = ignore;
	if(!_ignore)
	{
		_ignore = defaultIgnore;
	}
	
	var original = EventEmitter.prototype.emit;
	
	EventEmitter.prototype.emit = function()
	{
		var source = this.constructor.name;
		var event = arguments[0];
		if(!_ignore[source] || _ignore[source] != '*' || _ignore[source].indexOf(event) > -1)
		{
			console.log('Event: ' + source + ": " + event);
		}
		return original.apply(this, arguments);
	};
};