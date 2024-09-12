import { test } from "@playwright/test"

import breakpoints from "~~/test/playwright/utils/breakpoints"
import { dirParam } from "~~/test/storybook/utils/args"

test.describe.configure({ mode: "parallel" })

test.describe("VCollectionHeader", () => {
  breakpoints.describeEvery(({ expectSnapshot }) => {
    for (const dir of ["ltr", "rtl"] as const) {
      test(`All headers ${dir}`, async ({ page }) => {
        await page.goto(
          `/iframe.html?id=components-vcollectionheader--all-collections${dirParam(dir)}`
        )
        await expectSnapshot(
          `VCollectionHeaders-${dir}`,
          page.locator(".wrapper")
        )
      })
    }
  })
})
