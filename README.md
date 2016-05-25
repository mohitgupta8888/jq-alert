# jqAlert

jQuery plugin for creating common Alert and Confirm dialogs.

**Important:**
*Uses jquery dialog under the hood, check the jquery dialog for more information.*
This plugin assumes that you already have jQuery and jQuery UI included on your page.

## Simplest Usage without any options (using default options)
```js
$.jqAlert.showAlert({
    html: 'This is a <strong>sample</strong> alert box.'
});
`or`
$.jqAlert.showConfirm({
    html: 'This is a <strong>sample</strong> confirm box.'
});
```

## Override default options using init()
```js
$.jqAlert.init({
    alertBox: {
        title: 'Alert Box',
        height: 'auto',
        width: 300,
        modal: true,
        buttons: {
            Ok: {
                text: 'Close'
            }
        }
    },
    confirmBox: {
        title: 'Alert Box',
        height: 'auto',
        width: 300,
        modal: true,
        buttons: {
            Ok: {
                text: 'Confirm'
            },
            Cancel: {
            	text: 'Close'
        	}
        }
    }
});
```

`Once you have called the init(), then simply call the showAlert() and showConfirm() as shown in **Simplest Usage:**`

## Customized Usage (custom options for every Alert or Confirm box)

***Alert***
```js
$.jqAlert.showAlert({
	html: 'This is a <strong>sample</strong> alert box.',
	title: 'Message',
    height: 'auto',
    width: 300,
    modal: true,
    buttons: {
        Ok: {
            text: 'Close'
        }
    },
    onClose: function() {
    	// write some code here which you want to execute after dialog close
	}    
});
```

***Confirm***
```js
$.jqAlert.showConfirm({
	html: 'This is a <strong>sample</strong> alert box.',
	title: 'Message',
    height: 'auto',
    width: 300,
    modal: true,
    buttons: {
        Ok: {
            text: 'Confirm'
        },
        Cancel: {
            text: 'Not Confirm'
        }
    },
    onConfirm: function() {
    	// write some code here which you want to execute
    	// after confirmation
	},
	onCancel: function() {
    	// write some code here which you want to execute
    	// if user does not confirms
	}    
});

```

## Common Props
* `title`: title of the dialog 
* `height`: height of the dialog  
* `width`: width of the dialog  
* `modal`: `true` or `false`, creates an overlay below the dialog
* `buttons`: to specify the button text  

## Callbacks

***Alert:***
* `onClose`: called after dialog is closed

***Confirm:***
* `onConfirm`: called on successful confirmation
* `onCancel`: called on Cancel

## License
MIT 