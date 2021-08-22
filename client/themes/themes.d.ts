import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme extends ThemeBase {
    colors: {
      dark: {
        one: string;
      };
    };
    boxShadow: string;
  }
}
