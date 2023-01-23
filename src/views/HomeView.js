const HomeView = {
  data() {
    return {
      videos: videosData
    }
  },
  methods: {
    importImageURL(url) {
      return `./src/thumbs/${url}.webp`;
    }
  },
  template: `
  <div class="home">
    <div class="container">
      <div class="videos">
        <router-link
          v-for="video in videos"
          :key="video.url"
          :to="{ name: 'video', params: { id: video.url } }"
        >
          <div
            class="post"
            :style="{
              backgroundImage: 'url(' + importImageURL(video.url) + ')',
            }"
          ></div>
        </router-link>
      </div>
    </div>
  </div>
  `
}