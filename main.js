music1 = "music.mp3"
music2 = "music2.mp3"

function setup()
{
    canvas = createCanvas(500, 450);
canvas.position(200, 150);

video = createCapture(VIDEO);
video.hide();
}


song = "";

function preload()
{
    song = loadSound("music.mp3");
    song = loadSound("music2.mp3");

}




function draw()
{
    image(video, 0, 0, 600, 500);
}

function play()
{
    song.play()
}
