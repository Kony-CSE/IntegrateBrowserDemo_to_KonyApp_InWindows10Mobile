function addWidgetsForm0158daff840b948() {
    Form0158daff840b948.setDefaultUnit(kony.flex.DP);
    var Button0693a61839ed847 = new kony.ui.Button({
        "enableCache": false,
        "focusSkin": "slButtonGlossRed",
        "height": "50dp",
        "id": "Button0693a61839ed847",
        "isVisible": true,
        "left": "62dp",
        "onClick": AS_Button_1286177eaf5848f78898419f953f0ead,
        "skin": "slButtonGlossBlue",
        "text": "Button",
        "top": "177dp",
        "width": "260dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    Form0158daff840b948.add(Button0693a61839ed847);
};

function Form0158daff840b948Globals() {
    Form0158daff840b948 = new kony.ui.Form2({
        "addWidgets": addWidgetsForm0158daff840b948,
        "enableCache": false,
        "enabledForIdleTimeout": false,
        "id": "Form0158daff840b948",
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
        "directChildrenIDs": ["Button0693a61839ed847"],
        "retainScrollPosition": false,
        "titleBar": true
    });
    Form0158daff840b948.info = {
        "kuid": "23eafa6410f94f1092d172dd97732cc8"
    };
};