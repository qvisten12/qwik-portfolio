import { component$ } from '@builder.io/qwik'
import { QwikLogo } from '../icons/qwik'
import { FLogo } from '../icons/flogo'
import styles from './header.module.css'

export default component$(() => {
  return (
    <header class={styles.header}>
      <div class={['container', styles.wrapper]}>
        <div class={styles.logo}>
          <a href="/" title="qwik">
            <QwikLogo height={40} width={50} />
            <FLogo height={40} width={80} />
          </a>
        </div>
        <ul>
          <li>
            <a href="https://qwik.builder.io/docs/components/overview/" target="_blank">
              Work
            </a>
          </li>
          <li>
            <a href="https://qwik.builder.io/examples/introduction/hello-world/" target="_blank">
              About
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
})
