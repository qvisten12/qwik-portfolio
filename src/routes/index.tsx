import { component$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'

import Hero from '~/components/starter/hero/hero'
import Starter from '~/components/starter/next-steps/next-steps'

export default component$(() => {
  return (
    <>
      <Hero />
      <Starter />
    </>
  )
})

export const head: DocumentHead = {
  title: 'Felix Ljungqvist Portfolio',
  meta: [
    {
      name: 'description',
      content: 'Felix Ljungqvist personal portfolio ',
    },
  ],
}
