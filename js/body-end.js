const CLASS_CUSTOM_PLAY_BUTTON = 'custom_play_button';
const CLASS_VIDEO_POSTER = 'video_poster';
const CLASS_VIDEO_FRAME = 'video_frame';

const VIDEOS = [
    {
        className: 'top_block_video',
        poster: 'images/video/sport.jpg'
    }
];

const videos = VIDEOS
    .map( video => ({
        ...video, domElement: document.querySelector(`.${video.className}`)
    }) )
    .filter( ({ domElement }) => domElement );


for (const { className, poster, domElement } of videos) {
    domElement.addEventListener('click', () => {
        if (domElement.classList.contains(CLASS_CUSTOM_PLAY_BUTTON)) {
            domElement.classList.remove(CLASS_CUSTOM_PLAY_BUTTON);
            domElement.querySelector(`.${CLASS_VIDEO_FRAME}`).src += '&autoplay=1';
        }
    });

    domElement.querySelector(`.${CLASS_VIDEO_POSTER}`).src = poster;
    domElement.classList.add(CLASS_CUSTOM_PLAY_BUTTON);
}
