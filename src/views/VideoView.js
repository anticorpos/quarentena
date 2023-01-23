const VideoView = {
  data() {
    return {
      video: videosData.find((e) => e.url == this.$route.params.id),
    }
  },
  computed: {
    videoLink() {
      return "./src/videos/" + this.video.url + ".mp4"
    }
  },
  template: `
  <div class="video-view">
    <div class="post-video">
      <div class="post-video-container">
        <video width="480" height="480" autoplay="autoplay" controls>
          <source :src="videoLink" type="video/mp4" />
        </video>
      </div>
    </div>
    <div class="post-text">
      <h4>{{ video.title }}</h4>
      <p>{{ video.description }}</p>
    </div>
  </div>
  `
}