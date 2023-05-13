import { component$ } from '@builder.io/qwik'
import styles from './footer.module.css'
import { useServerTimeLoader } from '~/routes/layout'

export default component$(() => {
  const serverTime = useServerTimeLoader()

  return (
    <footer>
      <div class="container">
        <div class={styles.wrapper}>
          <ul class={styles.linkList}>
            <li>
              <a class="hover:opacity-60" target="_blank" href="mailto:felixljungqvist@icloud.com">
                Email
              </a>
            </li>
            |
            <li>
              <a class="hover:opacity-60" target="_blank" href="https://twitter.com/LjungqvistFelix">
                Twitter
              </a>
            </li>
            |
            <li>
              <a class="hover:opacity-60" target="_blank" href="https://www.linkedin.com/in/felix-ljungqvist-422119181/">
                LinkedIn
              </a>
            </li>
          </ul>

          <p class={styles.copyright}>
            © <span>{serverTime.value.year}</span>
          </p>
        </div>
      </div>
    </footer>
  )
})
