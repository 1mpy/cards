export function Easy(appEl) {
  const appHtml = `<section class="gamebox">
    <div class="gamebox__timer">Таймер      
    </div>
    <button class="gamebox__restart-button">Начать заново</button>
    <div class="gamebox__field"> Поле для карт</div>  
  </section>`;

  appEl.innerHTML = appHtml;
}
