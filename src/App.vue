<template>
  <!-- ヘッダー -->
  <nav class="top-bar" :style="{ borderBottom: '4px solid' + currentSlide.color }">
    <div class="bar-fix">
      <div class="bar-contents">
        <a href="#about">
          <span>ABOUT</span>
        </a>
        <h4 :style="{ color: currentSlide.color }">お店について</h4>
      </div>
      <div class="bar-contents">
        <a href="#price">
          <span>PRICE</span>
        </a>
        <h4 :style="{ color: currentSlide.color }">料金プラン</h4>
      </div>
      <div class="bar-contents">
        <a href="#reserve">
          <span>RESERVE</span>
        </a>
        <h4 :style="{ color: currentSlide.color }">LINE予約</h4>
      </div>
      <div class="bar-contents">
        <a href="#access">
          <span>ACCESS</span>
        </a>
        <h4 :style="{ color: currentSlide.color }">アクセス</h4>
      </div>
      <!-- <div class="bar-contents">
        <h1>MENU</h1>
        <h4 :style="{ color: currentSlide.color }">メニュー</h4>
      </div> -->
    </div>
  </nav>
  <!-- スライドショー -->
  <section :style="{ backgroundColor: currentSlide.color }" class="slideshow-wrapper">
    <div class="slide-content">
      <img :src="currentSlide.img" alt="スタジオの外観" loading="lazy" />
      <h1 class="consept">ポップな<br />写真が撮れる<br />撮影スタジオ</h1>
    </div>
    <!-- <button @click="nextSlide">NEXT</button> -->
  </section>

  <!-- テスト -->
  <main>
    <!-- 要素A（左から） -->
    <FadeInOnScroll direction="left">
      <section class="box box-a" id="about">
        <h2>ABOUT</h2>
        <p>--------------</p>
      </section>
    </FadeInOnScroll>

    <!-- 要素B（右から） -->
    <FadeInOnScroll direction="right">
      <section class="box box-b" id="price">
        <h2>PRICE</h2>
        <p>--------------</p>
      </section>
    </FadeInOnScroll>

    <!-- 要素C（左から） -->
    <FadeInOnScroll direction="left">
      <section class="box box-c" id="reserve">
        <h2>RESERVE</h2>
        <div class="reverve-flex">
          <div class="line-link">
            <a
              href="https://lin.ee/abc123"
              class="line-button"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LINEで予約"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/4/41/LINE_logo.svg"
                alt="LINE"
                class="line-icon"
                loading="lazy"
              />
              <!-- <span>LINEで問い合わせはこちらから！</span> -->
            </a>
            <!-- <a href="https://lin.ee/abc123" target="_blank" rel="noopener noreferrer">
          <img
            class="line-banar"
            src="https://scdn.line-apps.com/n/line_add_friends/btn/ja.png"
            alt="LINEで友だち追加"
          />
        </a> -->
          </div>
          <div class="reserve-contents">
            <p>簡単1STEP！<br />公式LINEを追加して簡単予約！</p>
          </div>
        </div>
      </section>
    </FadeInOnScroll>

    <!-- 要素D（右から） -->
    <FadeInOnScroll direction="right">
      <section class="box box-d" id="access">
        <h2>ACCESS</h2>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6563.509613604946!2d135.50314355!3d34.6608947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000e742446b2055%3A0x4a890021a83a6e86!2z6I-K5LmL5aW977yI5qCq77yJ!5e0!3m2!1sja!2sjp!4v1747811546241!5m2!1sja!2sjp"
          width="600"
          height="450"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        <p>--------------</p>
      </section>
    </FadeInOnScroll>
  </main>
  <!-- テスト -->

  <!-- グリッド -->
  <FadeInOnScroll class="grid" direction="up">
    <img
      class="grid-img"
      v-for="image in images"
      :key="index"
      :src="image"
      alt="スタジオの外観"
      loading="lazy"
    />
  </FadeInOnScroll>

  <!-- フッダー -->
  <footer>
    <div class="footer-flex">
      <div>
        <img class="logo-img" src="/logo.jpeg" alt="ロゴ" loading="lazy" />
      </div>
      <section class="sns-icons">
        <a href="">
          <i class="fa-brands fa-line"></i>
        </a>
        <a href="">
          <i class="fa-brands fa-instagram"></i>
        </a>
        <a href="">
          <i class="fa-brands fa-x-twitter"></i>
        </a>
      </section>
    </div>
    <small>© 2025 ポップな写真が撮れる撮影スタジオ</small>
  </footer>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
//  テスト
import FadeInOnScroll from './components/FadeInOnScroll.vue'
//  テスト

// スライドショー
const slides = [
  { img: '/images001.png', color: '#FF3399' },
  { img: '/images002.jpeg', color: '#0033FF' },
  { img: '/images003.jpeg', color: '#FF9900' },
]

const currentIndex = ref(0)
const currentSlide = computed(() => slides[currentIndex.value])
const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % slides.length
}

const intervalID = ref(null)
onMounted(() => {
  intervalID.value = setInterval(() => {
    nextSlide()
  }, 3000)
})
onUnmounted(() => {
  clearInterval(intervalID.value)
})

// グリッド
const images = ['/images001.png', '/images002.jpeg', '/images003.jpeg', '/images004.jpeg']
</script>

<style>
:root {
  --header-height: 90px;
}
</style>

<!-- グリッド -->

<style scoped>
/* ヘッダー */
.top-bar {
  margin-bottom: 16px;
  width: 100%;
  height: var(--header-height);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
  background-color: rgba(255, 255, 255, 0.8);
}

.bar-fix {
  display: flex;
  justify-content: flex-end;
  padding: 16px;
}

.bar-contents {
  text-align: center;
  width: 130px;
  min-width: 48px;
  min-height: 48px;
  /* display: inline-flex; */
  align-items: center;
  justify-content: center;
}

.bar-contents > a {
  text-decoration: none;
  margin: 0;
  padding: 0;
  color: black;
}

.bar-contents > a > span {
  margin: 0;
  font-weight: bold;
}

.bar-contents > h4 {
  margin: 0;
}

/* スライドショー */
.slideshow-wrapper {
  transition: background-color 0.5s ease;
  margin-top: 100px;
  padding: 8px;
  /* min-height: 300px; */
  color: #333;
}

.slide-content {
  height: 35%;
  position: relative;
}

img {
  height: 500px;
  width: 100%;
  object-fit: cover;
}

/* button {
  padding: 0.5rem 1rem;
  margin-top: 16px;
  font-size: 1rem;
  border: none;
  border-radius: 50%;
  background: white;
  color: rgba(0, 0, 0);
} */

.consept {
  margin: 0;
  padding: 0;
  color: white;
  font-size: 80px;
  opacity: 0.8;
  font-weight: bold;
  position: absolute;
  top: 80px;
  left: 16px;
  font-family: 'Hiragino Sans W7';
  z-index: 1;
}

/* テスト */
/* main {
  padding: 100px;
} */

.box {
  margin: 80px 0;
  padding: 16px 40px;
  /* border-radius: 8px; */
  font-size: 1.5rem;
  width: 80%;
  /* text-align: center; */
}

.box > h2 {
  font-size: 80px;
  margin: 0;
  padding: 0;
  color: white;
  font-family: Impact;
}

.box-a {
  background: #0033ff;
  /* background-image: radial-gradient(rgba(255, 255, 255, 0.5) 8px, transparent 5px); */
  background-size: 40px 40px;
  text-align: left;
  margin-right: auto;
}

.box-b {
  background: #ff3399;
  text-align: right;
  margin-left: auto;
}

.line-link {
  min-width: 48px;
  min-height: 48px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.reverve-flex {
  display: flex;
  padding: 16px;
  justify-content: space-around;
}

.reserve-contents > p {
  color: white;
  text-align: left;
  margin: auto 50px;
}

.line-icon {
  width: 150px;
  height: 150px;
  object-fit: cover;
}

.box-c {
  background: #ff9900;
  text-align: left;
  margin-right: auto;
}

.box-d {
  background: #00cc33;
  text-align: right;
  margin-left: auto;
}

iframe {
  margin-top: 30px;
}

/* グリッド */
.grid {
  display: flex;
  padding: 40px;
  /* flex-direction: row; */
  flex-wrap: wrap;
}

.grid-img {
  width: 40%;
  margin: 2% 5%;
  height: 350px;
}

/* フッダー */
footer {
  background: #ff9900;
  height: 150px;
  padding: 30px;
}

.footer-flex {
  display: flex;
  justify-content: space-around;
}

.logo-img {
  width: 100px;
  height: 100px;
}

.sns-icons {
  height: 100px;
  width: 400px;
  display: flex;
  justify-content: space-around;
  min-width: 48px;
  min-height: 48px;
}

.sns-icons > a {
  display: block;
  width: 100px;
  text-decoration: none;
  color: white;
  font-size: 100px;
}

.sns-icons > a > i {
  display: block;
  width: 100%;
  height: 100%;
  font-size: 100px;
  text-align: center;
}

small {
  display: block;
  color: white;
  font-size: 20px;
  text-align: center;
  margin: 16px auto;
}

@media (min-width: 768px) {
}

@media (min-width: 1024px) {
  .slideshow-wrapper {
    height: 90vh;
  }

  .slide-content {
    height: 100%;
  }

  img {
    height: 100%;
  }

  .consept {
    margin: 100px 0 0 100px;
    font-size: 150px;
    line-height: 250px;
    top: 80px;
    left: 16px;
  }

  .box > h1 {
    font-size: 100px;
  }

  /* .reserve-contents  {
    justify-content: space-between;
  } */

  .reserve-contents > p {
    font-size: 50px;
  }

  .line-icon {
    width: 250px;
    height: 250px;
    object-fit: cover;
  }

  .grid {
    display: flex;
    padding: 40px;
    /* flex-direction: row; */
    flex-wrap: wrap;
    justify-content: space-around;
  }

  .grid-img {
    margin: 30px;
    height: 350px;
    width: 350px;
  }
}
</style>
