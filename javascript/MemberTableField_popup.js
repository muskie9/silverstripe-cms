MemberTableFieldPopupForm = Class.extend("ComplexTableFieldPopupForm");
MemberTableFieldPopupForm.prototype = {
	initialize: function() {
		this.ComplexTableFieldPopupForm.initialize();
		
		Behaviour.register({
			"div.MemberTableField_Popup .Actions input.action": {
				onclick: this.submitForm.bind(this)
			}
		});
	}
}

MemberTableFieldPopupForm.applyTo('div.MemberTableField_Popup .Actions');