//DOES NOT WORK, subscribe individually, Meteor.subscribe('theBlogPosts', 'theAdPosts');
Meteor.subscribe('theAdPosts');
Meteor.subscribe('theBlogPosts');
Meteor.subscribe("theRatings");
Meteor.subscribe("theAverageRatings");
Meteor.subscribe("theSomeCollection");


Template.hello.helpers({

    posts: function () {
        return  BlogPosts.find(); // Returns all that publish will offer
    },
    ads: function () {
        return  AdPosts.find(); // Returns all that publish will offer for theAdPosts
    }
//    ratings: function () {
//        return Ratings.find();
//    }
});

Template.ratings.helpers({
    ratings: function () {
        return Ratings.find();
    }
});
