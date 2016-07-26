'use strict';

var videos = [
    {'id' : 1, 'name' : 'film', 'description' : 'hiuhfuih'},
    {'id' : 2, 'name' : 'video', 'description' : 'fdsffs'}
];

app.service('videoProvider', function(){
   this.getVideos = function(){
       return videos;
   }
    this.create = function(video){
        videos.push(video);
        return videos;    }
});