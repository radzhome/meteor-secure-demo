Meteor.publish('theBlogPosts', function () {
    return BlogPosts.find({ draft: false });
});

Meteor.publish('theAdPosts', function () {
    return AdPosts.find({ draft: false });
});

Meteor.publish("theRatings", function(){
    return Ratings.find();
});

Meteor.publish("theAverageRatings", function(){
    return AverageRatings.find();
});

Meteor.publish("theSomeCollection", function(){
    return SomeCollection.find();
});


Meteor.startup(function () { // code to run on server at startup
        //Ratings.remove({}); // remove all ratings on reload
        return Meteor.methods({

            removeAllRatings: function () {
                console.log("Removing all Ratings.");
                return Ratings.remove({});

            },
            removeAllAverageRatings: function () {
                //console.log("Removing all Average Ratings.");
                return AverageRatings.remove({});

            }
        });
});

