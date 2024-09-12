import { expect, test } from "@playwright/test"

import breakpoints from "~~/test/playwright/utils/breakpoints"

import {
  type LanguageDirection,
  languageDirections,
} from "~~/test/playwright/utils/i18n"

import { dirParam } from "~~/test/storybook/utils/args"

const footerKinds = ["internal", "content"] as const

const storyUrl = (
  footerKind: (typeof footerKinds)[number],
  dir: LanguageDirection
) => `/iframe.html?id=components-vfooter--${footerKind}${dirParam(dir)}`

test.describe.configure({ mode: "parallel" })

test.describe("VFooter", () => {
  for (const dir of languageDirections) {
    for (const footerKind of footerKinds) {
      breakpoints.describeEvery(({ expectSnapshot }) => {
        test(`footer-${footerKind}-${dir}`, async ({ page }) => {
          await page.goto(storyUrl(footerKind, dir))

          // Ensure the component is hydrated by checking that language or theme select is enabled
          await expect(page.getByRole("combobox").nth(0)).toBeEnabled()

          await expectSnapshot(
            page,
            `footer-${footerKind}`,
            page.locator("footer"),
            { dir }
          )
        })
      })
    }
  }
})
