/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare interface task {
  text: string,
  isdone: boolean
}

declare interface Section {
  id: number,
  name: string,
  content: string,
  childrent: Array<Section>
}