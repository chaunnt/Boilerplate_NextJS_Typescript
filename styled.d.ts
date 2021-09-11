import 'styled-components'
import { Theme } from './src/theme/themes'

declare module 'styled-components' {
  export interface DefaultTheme extends Theme { }
}
