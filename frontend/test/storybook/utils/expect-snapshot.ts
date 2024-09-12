import {
  Expect,
  expect,
  Locator,
  LocatorScreenshotOptions,
  Page,
  PageScreenshotOptions,
} from "@playwright/test"

import type { LanguageDirection } from "~~/test/playwright/utils/i18n"
import {
  setThemeSwitcherVisibility,
  turnOnDarkMode,
} from "~~/test/playwright/utils/theme-switcher"

export type ExpectSnapshotOptions = {
  screenshotOptions?: LocatorScreenshotOptions | PageScreenshotOptions
  snapshotOptions?: Parameters<ReturnType<Expect>["toMatchSnapshot"]>[0]
  dir?: LanguageDirection
}

export const expectSnapshot = async (
  page: Page,
  name: string,
  locator: Locator | Page,
  options?: ExpectSnapshotOptions
) => {
  await setThemeSwitcherVisibility(page, "hidden")
  const snapshotName = `${name}-light.png`
  expect
    .soft(await locator.screenshot(options?.screenshotOptions))
    .toMatchSnapshot(snapshotName, options?.snapshotOptions)

  await turnOnDarkMode(page, options?.dir ?? "ltr")

  return expect(
    await locator.screenshot(options?.screenshotOptions)
  ).toMatchSnapshot(`${name}-dark.png`, options?.snapshotOptions)
}

export const expectScreenshotAreaSnapshot = async (
  page: Page,
  name: string,
  options?: ExpectSnapshotOptions
) => {
  return expectSnapshot(page, name, page.locator(".screenshot-area"), options)
}
