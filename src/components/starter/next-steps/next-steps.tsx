import { component$ } from '@builder.io/qwik'
import styles from './next-steps.module.css'

export default component$(() => {
  return (
    <div class="container container-purple container-center">
      <h2>
        See whats possible with
        <br />
        <span class="highlight">qwik</span>!
      </h2>
      <div class={styles.gettingstarted}>
        <div class={styles.intro}>
          <span class={styles.highlight}>Qwik</span> ships <span class={styles.highlight}>zero</span> javascript by default to the browser, enabling blazingly fast websites but with modern tooling.
        </div>
        <div class={styles.intro}>
          Due to the performance benefits and its importance to me, <span class={styles.highlight}>Qwik</span> became an evident framework for Front end development.
        </div>
      </div>
    </div>
  )
})
