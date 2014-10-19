BlogPosts = new Meteor.Collection('blog_posts');
AdPosts = new Meteor.Collection('ad_posts');

Ratings = new Meteor.Collection('ratings');
AverageRatings = new Meteor.Collection('average_ratings');
SomeCollection = new Meteor.Collection('some_collection');


/* After insecure is removed, have to have this */
BlogPosts.allow({
    'insert': function (userId, doc) {
      /* user and doc checks ,
      return true to allow insert */
      return true;
    },
    'remove': function (userID, doc){
        return true;
    }
});

/*
BlogPosts.insert({title: "How To Make the Default Meteor Application", draft: true});
BlogPosts.insert({title: "How To Make the Default Meteor Application2", draft: true});
BlogPosts.insert({title: "How To Make the Default Meteor Application3", draft: false});
BlogPosts.insert({title: "How To Make the Default Meteor Application4", draft: false});

BlogPosts.find()

AdPosts.insert({title: "Get Something for free now!", draft: false});
AdPosts.insert({title: "Get Something for free now2!", draft: false});
AdPosts.insert({title: "Best $hit ever!", draft: true});
AdPosts.insert({title: "Best $hit ever!", draft: true});

AdPosts.find()
 */
