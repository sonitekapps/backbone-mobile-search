PhotoList = Backbone.View.extend({
    el: $("#photoviewholder"), 
	
	initialize: function(){
    },
    
    renderList: function( collection ){
    
    console.log(collection.models);
    
        var compiled_template = _.template( $("#photoviewul").html() );

		mobileSearch.utils.loadPrompt("Loading photo...");
				
        collection.photolist.el.html( compiled_template( { results: collection.models } ) );
            
        setTimeout(function(){
        	$('#photo').find('ul').listview("refresh");
        	/*note this needs to be written better otherwise multiple calls will
        	be made.*/
        }, 0);
        

    }
});

