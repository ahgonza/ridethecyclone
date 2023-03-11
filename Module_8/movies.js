var tvShow = {
    name: "Doctor Who",
    genre: "Science Fiction",
    year: 2005,
    actor: "Christopher Eccelston",
    synopsis: "The Doctor, a Time Lord from the race whose home planet is Gallifrey, travels through time and space in their ship the TARDIS (an acronym for Time and Relative Dimension In Space) with numerous companions. From time to time, the Doctor regenerates into a new form.",
    creator: "Sydney Newman",
    imdbRating: "8.6/10",
    episodeNumber: 203,
    seasons: 14,
    origin: "the United Kingdom"
};

document.write("<b><font size = 8>");
document.write("The TV show name is " + tvShow.name);
document.write("</b></font size>");
document.write("<br><font size = 5>");
document.write("The genre is " + tvShow.genre);
document.write("<br>"); 
document.write("The lead actor is " + tvShow.actor);
document.write("<br>"); 
document.write("The release year was " + tvShow.year); 
document.write("<br>");
document.write("The leading actor is " + tvShow.actor);
document.write("<br>");
document.write("Summary: " + tvShow.synopsis);
document.write("<br>");
document.write("The show was created by " + tvShow.creator);
document.write("<br>");
document.write("IMDB rates this show " + tvShow.imdbRating);
document.write("<br>");
document.write("This show has " + tvShow.episodeNumber + " episodes");
document.write("<br>");
document.write("This show has " + tvShow.seasons + " seasons");
document.write("<br>");
document.write("This show is filmed in " + tvShow.origin);
