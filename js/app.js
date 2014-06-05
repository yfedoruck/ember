function l(x){ console.log(x); }
//$(document).ready(function(){
App = Ember.Application.create();
    /*App.Person = Ember.Object.extend({
        id : 0,
        name : ""
    });
    var person = App.Person.create();
        person.name = "Duncan";
        person.id = 0;
    App.userController = Ember.Object.create({
        content: person,
        changeModel : function(){
            this.content.set('name','Joe');
        }
    });
    App.UserView = Ember.View.extend({
        nameBinding: 'App.userController.content.name'
    });
    function test(){
        App.userController.changeModel();
    }*/
App.Router.map( function(){
    this.route( 'about', {path: '/abt'} );
    this.route("favorites", { path: "/favs" });
    this.resource('user' , {path: '/user/:uid'}, function(){
	    this.route('phone', {path: '/phs/:phone_id' } );
	    this.resource('info', function() {
		this.route('name', {path: '/nm' } );
	    });
        });
} );
App.AboutRoute = Ember.Route.extend({
	renderTemplate: function(){
	    this.render('about2');
	},
        model: function() {
            l('about???');
	}
});
App.FavoritesRoute = Ember.Route.extend({
    model: function(){
        l('favs!!');
    }
});

App.UserRoute = Ember.Route.extend({
    model:function(){
	l('UserRoute');
    }
});
App.UserPhoneRoute = Ember.Route.extend({
    model:function(x){
	l('UserPhoneRoute');  
	l(x.phone_id);
    }
});
App.UserInfoRoute = Ember.Route.extend({
    model:function(x){
	l('UserInfoRoute');  
	l(x.iid);
    }
});
App.InfoRoute = Ember.Route.extend({
    model: function() {
	l('InfoRoute');
    }
});
App.InfoNameRoute = Ember.Route.extend({
    model: function() {
	l('InfoNameRoute');
    }
});
//});
