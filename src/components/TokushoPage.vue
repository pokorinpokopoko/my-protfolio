<template>
  <!-- 特商法について -->
  <section class="tokusho-page">
    <div>
      <h3>特定商取引法に基づく表記</h3>
    </div>
    <section class="innner-page">
      <div class="item">
        <h4>販売事業者</h4>
        <p>合同会社データロー</p>
      </div>

      <div class="item">
        <h4>所在地</h4>
        <p>東京都新宿区西新宿7-5-9 ファーストリアルタワー新宿2901</p>
      </div>

      <div class="item">
        <h4>販売責任者</h4>
        <p>（必要に応じて追記）</p>
      </div>

      <div class="item">
        <h4>お問い合わせ</h4>
        <p>（メールアドレスやお問い合わせフォームURLなど）</p>
      </div>

      <div class="item">
        <h4>販売価格</h4>
        <p>料金ページに記載</p>
      </div>

      <!-- <div class="item">
      <h2>商品代金以外の必要料金</h2>
      <p>消費税、送料（必要に応じて）</p>
    </div> -->

      <div class="item">
        <h4>お支払い方法</h4>
        <p>クレジットカード決済・銀行振込（※実際に使っている方法に応じて変更）</p>
      </div>

      <!-- <div class="item">
      <h2>商品引渡時期</h2>
      <p>決済完了後、直ちにご利用可能です</p>
    </div> -->

      <div class="item">
        <h4>キャンセル</h4>
        <p>購入後のキャンセル・返金はできません</p>
      </div>
    </section>
  </section>
</template>

<style>
/* 特商法について */
.tokusho-page {
  margin: 2rem auto;
  padding: 1rem;
  font-family: sans-serif;
  line-height: 1.6;
  border: 1px solid #ccc;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.tokusho-page h3 {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  display: block;
  display: flex;
  justify-content: center;
}

.innner-page {
  padding: 0;
  width: fit-content;
  margin: 0.5rem auto;
}

.tokusho-page .item {
  margin-bottom: 0.5rem;
  text-align: left;
  padding: 0;
}
.tokusho-page h4 {
  font-size: 1rem;
  /* margin-bottom: 0.5rem; */
  color: #333;
}
</style>
