var BrowserControl = BrowserControl || { };

BrowserControl.statichelper_getArguments = function (arg2) 
{

var result = '{';

for (var i = 0; i < arg2.length; ++i) 
{
     if (i > 0)
       result += ', ';

     var element = arg2[i];

     result += jetro.variant.format( element );
}

result += '}';

return result;
}
BrowserControl.Show = function ()
{
    return BrowserControl.Show_variadic(arguments);
}
BrowserControl.Show_variadic = function (arg)
{
    var formattedArg = BrowserControl.statichelper_getArguments(arg);

    window.external.notify( 'JetroCallFunction BrowserControl.Show_variadic'
        + ' ' + formattedArg
    );

    return jetro.returnValue;
}

