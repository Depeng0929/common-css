import 'virtual:windi.css'
import 'virtual:windi-base.css'
import 'virtual:windi-components.css'
import 'virtual:windi-utilities.css'
import 'virtual:windi-devtools'

import setupMain from './setup/main'

import './styles/index.scss'


setupMain()

const app = document.querySelector<HTMLDivElement>('#app')!



app.innerHTML = `<article class="prose ml-2">
<h1 class="ml-4">Styled heading!</h1>
<blockquote>Very useful for styling markdown content!</blockquote>
<button class="button">点我</button>
<p>Hello world</p>
</article>
`
