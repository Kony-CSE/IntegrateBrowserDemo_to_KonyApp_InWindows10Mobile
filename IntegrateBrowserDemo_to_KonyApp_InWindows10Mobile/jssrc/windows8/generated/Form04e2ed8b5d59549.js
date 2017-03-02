function addWidgetsForm04e2ed8b5d59549() {
    Form04e2ed8b5d59549.setDefaultUnit(kony.flex.DP);
    var Button032a31965cdcd48 = new kony.ui.Button({
        "focusSkin": "slButtonGlossRed",
        "height": "50dp",
        "id": "Button032a31965cdcd48",
        "isVisible": true,
        "left": "405dp",
        "onClick": AS_Button_729c477098cf4abb9dac2b0b99f5c321,
        "skin": "slButtonGlossBlue",
        "text": "Button",
        "top": "174dp",
        "width": "260dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    Form04e2ed8b5d59549.add(Button032a31965cdcd48);
};

function Form04e2ed8b5d59549Globals() {
    Form04e2ed8b5d59549 = new kony.ui.Form2({
        "addWidgets": addWidgetsForm04e2ed8b5d59549,
        "enabledForIdleTimeout": false,
        "id": "Form04e2ed8b5d59549",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": true,
        "skin": "slForm"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": kony.flex.FREE_FORM,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "animateHeaderFooter": false,
        "directChildrenIDs": ["Button032a31965cdcd48"],
        "retainScrollPosition": false,
        "titleBar": true,
        "titleBarSkin": "slTitleBar"
    });
    Form04e2ed8b5d59549.info = {
        "kuid": "f7c6226cb461486589928e4a8fd87c8a"
    };
};