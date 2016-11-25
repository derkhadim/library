import Ember from 'ember';

export default Ember.Controller.extend({
  emailAddress: '',
  message: '',

  emailValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
  messageValid: Ember.computed.gte('message.length', 5),
  isValid: Ember.computed.and('emailValid', 'messageValid'),

  actions: {
    sendMessage: function() {
      var email = this.get('emailAddress');
      var message = this.get('message');

      alert('Your message was sended');

      var responseMessage = 'to: ' + email + 'Message: ' + message ;

      this.set('responseMessage', responseMessage);
      this.set('emailAddress', '');
      this.set('message', '');
    },
    closeAlert: function() {
      this.set(responseMessage, '');
    }
  }
});
