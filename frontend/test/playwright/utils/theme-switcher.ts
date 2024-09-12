import { Page } from "@playwright/test"

import { LanguageDirection, t } from "~~/test/playwright/utils/i18n"

type EffectiveColorMode = "dark" | "light"
const themeSelectLabel = (dir: LanguageDirection) => t("theme.theme", dir)
const themeOption = (colorMode: EffectiveColorMode, dir: LanguageDirection) =>
  t(`theme.choices.${colorMode}`, dir)

export const setThemeSwitcherVisibility = async (
  page: Page,
  visibility: "visible" | "hidden"
) => {
  await page.evaluate(
    ([visibility]) =>
      (
        document.querySelector("#storybook-theme-switcher") as HTMLElement
      )?.style.setProperty("visibility", visibility),
    [visibility]
  )
}

export const turnOnDarkMode = async (page: Page, dir: LanguageDirection) => {
  await setThemeSwitcherVisibility(page, "visible")
  await page
    .getByLabel(themeSelectLabel(dir))
    .selectOption(themeOption("dark", dir))
  await setThemeSwitcherVisibility(page, "hidden")
}
