import { Email } from 'meteor/email'

Meteor.methods({
    sendEmail: function (value) {
  
        // Let other method calls from the same client start running,
        // without waiting for the email sending to complete.
        this.unblock();
    console.log(value);
        Email.send({
          to: 'issaaf.kattan@lau.edu',
       from: 'fromzeina2019@gmail.com',
            subject: 'Her answer! URGENT',
            text: value,
        });      
  
    },
  
  });
  

Meteor.startup(() => {
    console.log("started and sent");
    smtp = {
      username: 'fromzeina2019',   // eg: server@gentlenode.com
      password: 'usef2018',   // eg: 3eeP1gtizk5eziohfervU
      server:   'smtp.gmail.com',  // eg: mail.gandi.net
      port: 25
    }
  
    process.env.MAIL_URL = 'smtp://' + encodeURIComponent(smtp.username) + ':' + encodeURIComponent(smtp.password) + '@' + encodeURIComponent(smtp.server) + ':' + smtp.port;
    Email.send({
        to: 'issaaf.kattan@lau.edu',
     from: 'fromzeina2019@gmail.com',
          subject: 'Her answer!',
          text: 'hello',
      });     


});
  