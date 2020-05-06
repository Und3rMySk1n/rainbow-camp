const CLASS_VIDEO_WRAPPER = 'video_wrapper';
const CLASS_TOP_BLOCK_VIDEO = 'top_block_video';
const CLASS_CUSTOM_PLAY_BUTTON = 'custom_play_button';
const CLASS_VIDEO_POSTER = 'video_poster';
const CLASS_VIDEO_FRAME = 'video_frame';

const VIDEOS = [
    {
        sectionClassName: 'main_info_section',
        poster: 'images/video/sport.jpg'
    },
    {
        sectionClassName: 'dancing_section',
        poster: 'images/video/dancing-group.jpg'
    }
];

const videos = VIDEOS
    .map( video => ({
        ...video, domElement: document.querySelector(`.${video.sectionClassName} .${CLASS_VIDEO_WRAPPER}.${CLASS_TOP_BLOCK_VIDEO}`)
    }) )
    .filter( ({ domElement }) => domElement );


for (const { poster, domElement } of videos) {
    domElement.addEventListener('click', () => {
        if (domElement.classList.contains(CLASS_CUSTOM_PLAY_BUTTON)) {
            domElement.classList.remove(CLASS_CUSTOM_PLAY_BUTTON);
            domElement.querySelector(`.${CLASS_VIDEO_FRAME}`).src += '&autoplay=1';
        }
    });

    domElement.querySelector(`.${CLASS_VIDEO_POSTER}`).src = poster;
    domElement.classList.add(CLASS_CUSTOM_PLAY_BUTTON);
}
