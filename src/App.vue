<template>
  <!-- スマホ用ヘッダー -->
  <header class="top-bar-sp" id="header">
    <button class="menu-button" @click="toggleMenu">
      <i class="fa-solid fa-bars" v-if="!isOpen"></i>
      <i class="fa-solid fa-xmark" v-else></i>
    </button>
    <nav class="navmenu" v-show="isOpen">
      <ul>
        <li><a href="#about" @click="closeMenu">ABOUT</a></li>
        <li><a href="#price" @click="closeMenu">PRICE</a></li>
        <li><a href="#reserve" @click="closeMenu">RESERVE</a></li>
        <li><a href="#access" @click="closeMenu">ACCESS</a></li>
      </ul>
    </nav>
  </header>

  <!-- ヘッダー -->
  <nav class="top-bar" :style="{ borderBottom: '4px solid' + currentSlide.color }">
    <div class="bar-flex">
      <div class="bar-contents">
        <a href="#about">
          <span>ABOUT</span>
          <p :style="{ color: currentSlide.color }">お店について</p>
        </a>
      </div>
      <div class="bar-contents">
        <a href="#price">
          <span>PRICE</span>
          <p :style="{ color: currentSlide.color }">料金プラン</p>
        </a>
      </div>
      <div class="bar-contents">
        <a href="#reserve">
          <span>RESERVE</span>
          <p :style="{ color: currentSlide.color }">LINE予約</p>
        </a>
      </div>
      <div class="bar-contents">
        <a href="#access">
          <span>ACCESS</span>
          <p :style="{ color: currentSlide.color }">アクセス</p>
        </a>
      </div>
    </div>
  </nav>
  <!-- スライドショー -->
  <section :style="{ backgroundColor: currentSlide.color }" class="slideshow-wrapper">
    <div class="slide-content">
      <a href="#header"><img :src="currentSlide.img" alt="スタジオの外観" loading="lazy" /></a>
      <h1 class="consept">ポップな<br />写真が撮れる<br />撮影スタジオ</h1>
    </div>
  </section>

  <!-- テスト -->
  <main>
    <!-- 要素A（左から） -->
    <FadeInOnScroll direction="left">
      <section class="box box-a" id="about">
        <h2>ABOUT</h2>
        <p>
          コスプレイヤー専門コンカフェ「星狼」の運営チームが手がける、コスプレイヤーによる、コスプレイヤーのための撮影スタジオが誕生！<br />実際にコスプレを愛するスタッフが「本当に欲しかった」空間を形にしました。<br />背景・小道具・ライティングまで、すべてが“映える”仕様。<br />ポップで可愛い世界観から、非日常なシーンまで、あなたの「なりたい」が叶う場所です。<br />撮影初心者から上級者まで大歓迎。<br />あなたの表現がもっと自由になる、新しいスタジオ体験を。
        </p>
      </section>
    </FadeInOnScroll>

    <!-- 要素B（右から） -->
    <FadeInOnScroll direction="right">
      <section class="box box-b" id="price">
        <h2>PRICE</h2>
        <div class="table-wrapper">
          <section class="price-table">
            <h2>プレオープン料金表</h2>
            <table>
              <thead>
                <tr>
                  <th>時間</th>
                  <th>料金</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>3h</td>
                  <td>¥10,000</td>
                </tr>
                <tr>
                  <td>4h</td>
                  <td>¥13,000</td>
                </tr>
                <tr>
                  <td>5h</td>
                  <td>¥16,000</td>
                </tr>
                <tr>
                  <td>6h</td>
                  <td>¥19,000</td>
                </tr>
                <tr>
                  <td>7h</td>
                  <td>¥22,000</td>
                </tr>
                <tr>
                  <td>8h</td>
                  <td>¥25,000</td>
                </tr>
                <tr>
                  <td>9h</td>
                  <td>¥28,000</td>
                </tr>
                <tr>
                  <td>10h</td>
                  <td>¥31,000</td>
                </tr>
                <tr>
                  <td>11h</td>
                  <td>¥34,000</td>
                </tr>
                <tr>
                  <td>12h</td>
                  <td>¥37,000</td>
                </tr>
                <tr>
                  <td>深夜プラン（22:00〜翌8:00）</td>
                  <td>¥20,000</td>
                </tr>
              </tbody>
            </table>
            <p class="note">※ 商用利用は +¥3,000 / 1h<br />※ プレオープン価格で最大¥7,000オフ！</p>
          </section>
        </div>
      </section>
    </FadeInOnScroll>

    <!-- 要素C（左から） -->
    <FadeInOnScroll direction="left">
      <section class="box box-c" id="reserve">
        <h2>RESERVE</h2>
        <div class="reverve-flex">
          <div class="line-link">
            <a
              href="https://lin.ee/UblIDG8"
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
            </a>
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
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          alt="マップ"
        ></iframe>
        <p>
          〒５５６ー０００５ 大阪府大阪市浪速区日本橋３丁目１−１８ 菊乃好ビル ４階<br />なんば駅から徒歩11分・近鉄日本橋駅から徒歩6分<br />近隣にパーキングあり
        </p>
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
      alt="作品集"
      loading="lazy"
    />
  </FadeInOnScroll>

  <!-- フッダー -->
  <footer>
    <div class="footer-flex">
      <a href="#header"><img src="/logo.png" alt="ロゴ" loading="lazy" class="logo" /></a>
      <section class="sns-icons">
        <a href="https://lin.ee/UblIDG8" alt="LINE">
          <i class="fa-brands fa-line"></i>
        </a>
        <a
          href="https://www.instagram.com/studiowolf25?igsh=MXVrN2t1NHRoN2Y4Zw=="
          alt="インスタグラム"
        >
          <i class="fa-brands fa-instagram"></i>
        </a>
        <a href="" alt="X">
          <i class="fa-brands fa-x-twitter"></i>
        </a>
      </section>
    </div>
    <small>© 2025 ポップな写真が撮れる撮影スタジオ</small>
  </footer>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import FadeInOnScroll from './components/FadeInOnScroll.vue'

// スマホ用ヘッダー
const isOpen = ref(false)
const toggleMenu = () => {
  isOpen.value = !isOpen.value
}
const closeMenu = () => {
  isOpen.value = false
}

// スライドショー
const slides = [
  { img: '/intro-img1.jpg', color: '#FF3399' },
  { img: '/intro-img2.jpg', color: '#0033FF' },
  { img: '/intro-img3.jpg', color: '#FF9900' },
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
* {
  margin: 0;
  padding: 0;
}

/* スマホ用ヘッダー */
.top-bar-sp {
  text-align: right;
  position: relative;
  z-index: 1;
  height: 10%;
}
.menu-button {
  position: relative;
  font-size: 2rem;
  background: none;
  border: none;
  z-index: 2;
  /* cursor: pointer; */
}

.navmenu {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
  background: rgba(255, 255, 255, 0.8);
  height: 20vh;
  transition: all 0.6s ease;
}

.navmenu > ul {
  list-style: none;
  margin: 30px;
}

.navmenu > ul > li > a {
  display: block;
  text-decoration: none;
  color: black;
  margin: 16px;
}

/* ヘッダー */
.top-bar {
  display: none;
}

.bar-flex {
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

.bar-contents > a > p {
  margin: 10px auto;
  font-size: 16px;
  font-weight: bold;
}

/* スライドショー */
.slideshow-wrapper {
  transition: background-color 0.5s ease;
  margin-top: 10px;
  padding: 8px;
  /* min-height: 300px; */
  color: #333;
}

.slide-content {
  height: 35%;
  position: relative;
}

img {
  height: 40vh;
  width: 100%;
  object-fit: cover;
}

.consept {
  margin: 0;
  padding: 0;
  color: white;
  font-size: 52px;
  opacity: 0.8;
  font-weight: bold;
  position: absolute;
  top: 130px;
  left: 16px;
  font-family: 'Hiragino Sans W7';
  z-index: 1;
}

.box {
  margin: 24px 0;
  padding: 16px;
  font-size: 20px;
  width: 80%;
}

.box > h2 {
  font-size: 40px;
  margin: 0;
  padding: 0;
  color: white;
  font-family: Impact;
}

.box > p {
  font-size: 16px;
  margin: 0;
  padding: 20px;
  color: white;
  text-align: left;
  font-family: 'Hiragino Sans W7';
}

.box-a {
  background: #0033ff;
  background-size: 40px 40px;
  text-align: center;
  margin-right: auto;
}

.box-a > h2 {
  text-align: left;
}

.box-b {
  background: #ff3399;
  text-align: center;
  margin-left: auto;
}

.box-b > h2 {
  text-align: right;
}

.table-wrapper {
  overflow-x: auto;
  width: 100%;
}

.price-table {
  min-width: 400px;
  margin: 16px auto;
  padding: 2em;
  background: #fff0f5;
  border: 2px solid #ccc;
  font-family: 'Hiragino Kaku Gothic ProN', sans-serif;
  color: #333;
}

.price-table h2 {
  font-size: 1.5em;
  text-align: center;
  margin-bottom: 1em;
  color: #ff3399;
  font-family: 'Hiragino Sans W7';
}

.price-table table {
  width: 100%;
  border-collapse: collapse;
}

.price-table th,
.price-table td {
  padding: 0.8em;
  border: 1px solid #ccc;
  text-align: center;
}

.price-table .note {
  margin-top: 1em;
  font-size: 1em;
  font-weight: bold;
  color: #ff3399;
  font-family: 'Hiragino Sans W7';
}

.line-link {
  /* min-width: 30px;
  min-height: 30px; */
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.reverve-flex {
  display: flex;
  justify-content: space-around;
  padding: 16px;
}

.reserve-contents > p {
  color: white;
  text-align: center;
  margin-left: 24px;
  font-family: 'Hiragino Sans W7';
}

.line-icon {
  width: 100px;
  height: 100px;
  object-fit: cover;
}

.box-c {
  background: #ff9900;
  text-align: center;
  margin-right: auto;
  font-family: 'Hiragino Sans W7';
}

.box-c > h2 {
  text-align: left;
}

.box-d {
  background: #00cc33;
  text-align: center;
  margin-left: auto;
}

.box-d > h2 {
  text-align: right;
}

iframe {
  margin: 30px auto;
  width: 100%;
  height: 300px;
}

/* グリッド */
.grid {
  display: flex;
  flex-wrap: wrap;
  margin: 32px 0;
}

.grid-img {
  width: 40%;
  margin: 2% 5%;
  height: 40%;
}

/* フッダー */
footer {
  background: #ff9900;
  height: 150px;
  padding: 30px;
}

.footer-flex {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto 100px;
}

.logo {
  display: block;
  width: 80px;
  height: 80px;
}

.sns-icons {
  display: flex;
  justify-content: space-around;
}

.sns-icons > a {
  display: block;
  text-decoration: none;
  color: white;
}

.sns-icons > a > i {
  display: block;
  margin: 0 0 0 16px;
  font-size: 60px;
  line-height: 80px;
  text-align: center;
}

small {
  display: block;
  color: white;
  font-size: 10px;
  text-align: center;
  margin: 16px auto;
}

@media (min-width: 768px) {
  /* ヘッダー */
  .top-bar-sp {
    display: none;
  }

  .top-bar {
    display: block;
    margin-bottom: 16px;
    width: 100%;
    height: var(--header-height);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 3;
    background-color: rgba(255, 255, 255, 0.8);
  }

  .bar-flex {
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

  .bar-contents > a > p {
    margin: 10px auto;
    font-size: 16px;
    font-weight: bold;
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
    text-align: center;
    margin-right: auto;
  }

  .box-a > h2 {
    text-align: left;
  }

  .box-b {
    background: #ff3399;
    text-align: center;
    margin-left: auto;
  }

  .box-b > h2 {
    text-align: right;
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
    text-align: center;
    margin-right: auto;
  }

  .box-c > h2 {
    text-align: left;
  }

  .box-d {
    background: #00cc33;
    text-align: center;
    margin-left: auto;
  }

  .box-d > h2 {
    text-align: right;
  }

  iframe {
    margin: 30px auto;
    width: 100%;
    height: 50vh;
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
    height: 180px;
    padding: 30px;
  }

  .footer-flex {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }

  .logo {
    width: 150px;
    height: 150px;
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
    line-height: 150px;
    text-align: center;
  }

  small {
    display: block;
    color: white;
    font-size: 20px;
    text-align: center;
    margin: 16px auto;
  }
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
