(function ($) {

    if ($.jqAlert) {
        return;
    }

    var _defaultOptions = {
        alertBox: {
            title: 'Message',
            height: 'auto',
            width: 300,
            modal: true,
            buttons: {
                Ok: {
                    text: 'Ok'
                }
            },
            onClose: null
        },
        confirmBox: {
            title: 'Confirm',
            height: 'auto',
            width: 'auto',
            modal: true,
            buttons: {
                Ok: {
                    text: 'Ok'
                },
                Cancel: {
                    text: 'Cancel',
                    onClick: null
                }
            },
            onConfirm: null,
            onCancel: null
        }
    };

    var _getCommonDialogOptions = function(options) {
        var commonOptions = {
            title: options.title,
            height: options.height,
            width: options.width,
            modal: options.modal,
            buttons: {}
        };
        return commonOptions;
    }

    var _getAlertDialogOptions = function(options) {
        var alertOptions = _getCommonDialogOptions(options);
        alertOptions.buttons[options.buttons.Ok.text] = function() {
            $(this).dialog("close");
        }
        return alertOptions;
    }

    var _getConfirmDialogOptions = function(options) {
        var confirmBoxOptions = _getCommonDialogOptions(options);
        confirmBoxOptions.buttons[options.buttons.Ok.text] = function() {
            $(this).dialog("destroy");
            options.onConfirm.call({});
        };
        confirmBoxOptions.buttons[options.buttons.Cancel.text] = function() {
            $(this).dialog("close");
        };
        return confirmBoxOptions;
    }

    var _getRandomDivId = function() {
        var randomNumber = Math.floor((Math.random() * 10000000) + 1);
        return "dialog-div-" + randomNumber.toString();
    }

    $.jqAlert = {};

    $.jqAlert.init = function (customOptions) {
        _defaultOptions = $.extend({}, _defaultOptions, customOptions);
    }

    $.jqAlert.showAlert = function (alertOptions) {
        var alertOptions = $.extend({}, _defaultOptions.alertBox, alertOptions);
        var finalDialogOptions = _getAlertDialogOptions(alertOptions);

        finalDialogOptions.close = function() {
            if(typeof alertOptions.onClose === "function") {
                alertOptions.onClose.call({});
            }
            $(this).dialog("destroy");
        }
        $("<div>").attr({id: _getRandomDivId()}).html(alertOptions.html).dialog(finalDialogOptions);
    }

    $.jqAlert.showConfirm = function (confirmOptions) {
        var confirmOptions = $.extend({}, _defaultOptions.confirmBox, confirmOptions);
        var finalDialogOptions = _getConfirmDialogOptions(confirmOptions);

        finalDialogOptions.close = function() {
            if(typeof confirmOptions.onCancel === "function") {
                confirmOptions.onCancel.call({});
            }
            $(this).dialog("destroy");
        }
        $("<div>").attr({id: _getRandomDivId()}).html(confirmOptions.html).dialog(finalDialogOptions);   
    }

    return $.jqAlert;
}(jQuery));