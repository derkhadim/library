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

      const newMessage = this.store.createRecord('contact', {
        email: email,
        message: message
      });

      newMessage.save().then((response) => {
        this.set('responseMessage', `You message was sended: ${response.get('id')}`),
        this.set('email', ''),
        this.set('message', '')
      });

    }
  }
});
