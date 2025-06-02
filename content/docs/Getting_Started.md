---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2025-04-30T00:36:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2025-04-30T00:36:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 1
toc: false
icon: "rocket_launch"
---

## Computer Vision guide:

[link_to_page](86d45bc0-388b-4d26-8848-44f255f73d0e)

## ROS guide:

[link_to_page](3c76c1de-ec8f-46d6-8b0a-294005edc2d5)

## Controls guide:

## Install

{{< tabs tabTotal="4">}}
{{% tab tabName="Windows" %}}

Download and run _**AS ADMINISTRATOR**_: [taproot installer](https://github.com/Thornbots/TeachingFreshies/releases/tag/1.0)

It automatically installs all the tools and vscode.

{{% /tab %}}
{{% tab tabName="WSL" %}}

Follow the linux guide but currently some methods do not work (also ur kinda on ur own hehe)

TODO: make separate guide for vscode section

{{% /tab %}}
{{% tab tabName="MacOS" %}}

TODO: for now just read the [linux_init.sh](https://github.com/agmui/sample_rm_pico_app/blob/main/linux_init.sh)

<details>
<summary>might not work lol</summary>

`brew install libusb pkg-config`

Next install: [vscode](https://code.visualstudio.com/Download)

</details>

{{% /tab %}}
{{% tab tabName="Linux (ubuntu)" %}}

{{% alert context="danger" %}}
**Warning** do not update recursively
<details>
<summary>why tho?</summary>
There are some submodules that may go on for a while (like tinyusb) and I highly
recommend you don't need to get them.
If you want to see what submodules I update just look in `linux_init.sh`
</details>
{{% /alert %}}

```shell
git clone <https://github.com/agmui/sample_rm_pico_app.git>
cd sample_rm_pico_app
./linux_init.sh && source ~/.bashrc
```

## Install VScode

[vscode](https://code.visualstudio.com/Download)

{{% /tab %}}
{{< /tabs >}}

## VScode extensions

Have vscode open this repo
When first opining vscode should ask you to install the plugins

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666U7H7TF3%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T081326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQDtfP2pIQiE9Qaz9AGCnpd4aDqk%2FhRS%2F%2BRzFQXloPZMhgIgFvzR%2BQEI0WtzPtewmfdaretyuppFEvITK9rRG%2BUXCtsqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGa30eq0lh%2BYqyMpLCrcA4LgVlP7m7dfiGwa2pANHQYBVJ9d6v6yUsn3euWqHMBy08YUQRkHrzf3x82sgTX%2BZiFEZzRW1eA4hXSi4yDVxT%2FUqVPv%2Bmf4y7wfFa8HYLtgVA21HoNgIvPguztEyrBUVhz3Dli3r2RwminHKXRVbVYljvkp3f41KNpD8sW1C3dAnxijJuqKOv6MsmFyq4NlHB0lnIDCJt3ScdQvRfxr5n8kWSfHPVelySH67MK3bSJte3gYepCtcHQsKEB9IrZDKHbwt%2Ben46YVpvz4h0%2BRcskwn7nUSOuhtrN013OV7eWUjdA1axaVzgIMFoal%2FH6bVfmojbosigISDlNk5Awt91rFskUMsD9XwjlVcImOx2vo1lSifE8uRds58Dkbk5W5WxHP1jgpBDhXPDkxMx1k4WnMi3pOAfBEINKs4YbNmX1b3ChbeSOZ516SKCrEsK%2FJi0FAy5PyYiqVPAOP93ec3ySSTFxPcoPrxyS9wCyueJ%2BKng%2Fu3b%2F2wl4q%2FB0ieVZqebABkwaVnSwJwbzC24UeWq2VrLRqCw%2FtX0VV0Np8osmVbLhxLNx4cRvyJNEPHWIwtF4rRgaXepveHaB2UWa%2Fc0mF1Lsr1bVjeEHzdLz2JfXplrmGiuYJyF8GbG53MIqR9cEGOqUB55xADNn%2B9%2F%2F8YArB7f6k1dgQVUYyC5hOJhuHAjDgmbvy1DqnjsyGaT1Q1dLdvAj%2BRl0nOweR3Fu6itnj%2B1ZdRI3DpYpyldqhKNuh0j9AnVO9K%2Fqtj4Qsl9MO%2FPUMvnLGpKayYjw610wHPLvcWl9lPtQsRQ1V2irV3hey8q37BPW9EuojuOScKSkFlpKLIPaNpGWZKGSNuoflPCbRps2Iedi3Verd&X-Amz-Signature=470bb637b9dc7e07a32e0dee66192a0f6b68a17cc80a4c0619c751324673118c&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666U7H7TF3%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T081326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQDtfP2pIQiE9Qaz9AGCnpd4aDqk%2FhRS%2F%2BRzFQXloPZMhgIgFvzR%2BQEI0WtzPtewmfdaretyuppFEvITK9rRG%2BUXCtsqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGa30eq0lh%2BYqyMpLCrcA4LgVlP7m7dfiGwa2pANHQYBVJ9d6v6yUsn3euWqHMBy08YUQRkHrzf3x82sgTX%2BZiFEZzRW1eA4hXSi4yDVxT%2FUqVPv%2Bmf4y7wfFa8HYLtgVA21HoNgIvPguztEyrBUVhz3Dli3r2RwminHKXRVbVYljvkp3f41KNpD8sW1C3dAnxijJuqKOv6MsmFyq4NlHB0lnIDCJt3ScdQvRfxr5n8kWSfHPVelySH67MK3bSJte3gYepCtcHQsKEB9IrZDKHbwt%2Ben46YVpvz4h0%2BRcskwn7nUSOuhtrN013OV7eWUjdA1axaVzgIMFoal%2FH6bVfmojbosigISDlNk5Awt91rFskUMsD9XwjlVcImOx2vo1lSifE8uRds58Dkbk5W5WxHP1jgpBDhXPDkxMx1k4WnMi3pOAfBEINKs4YbNmX1b3ChbeSOZ516SKCrEsK%2FJi0FAy5PyYiqVPAOP93ec3ySSTFxPcoPrxyS9wCyueJ%2BKng%2Fu3b%2F2wl4q%2FB0ieVZqebABkwaVnSwJwbzC24UeWq2VrLRqCw%2FtX0VV0Np8osmVbLhxLNx4cRvyJNEPHWIwtF4rRgaXepveHaB2UWa%2Fc0mF1Lsr1bVjeEHzdLz2JfXplrmGiuYJyF8GbG53MIqR9cEGOqUB55xADNn%2B9%2F%2F8YArB7f6k1dgQVUYyC5hOJhuHAjDgmbvy1DqnjsyGaT1Q1dLdvAj%2BRl0nOweR3Fu6itnj%2B1ZdRI3DpYpyldqhKNuh0j9AnVO9K%2Fqtj4Qsl9MO%2FPUMvnLGpKayYjw610wHPLvcWl9lPtQsRQ1V2irV3hey8q37BPW9EuojuOScKSkFlpKLIPaNpGWZKGSNuoflPCbRps2Iedi3Verd&X-Amz-Signature=0e38e39fb2c771041fc9d07e999643b07bb7c9cae2ed093affe48ffe3c35bee3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666U7H7TF3%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T081326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQDtfP2pIQiE9Qaz9AGCnpd4aDqk%2FhRS%2F%2BRzFQXloPZMhgIgFvzR%2BQEI0WtzPtewmfdaretyuppFEvITK9rRG%2BUXCtsqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGa30eq0lh%2BYqyMpLCrcA4LgVlP7m7dfiGwa2pANHQYBVJ9d6v6yUsn3euWqHMBy08YUQRkHrzf3x82sgTX%2BZiFEZzRW1eA4hXSi4yDVxT%2FUqVPv%2Bmf4y7wfFa8HYLtgVA21HoNgIvPguztEyrBUVhz3Dli3r2RwminHKXRVbVYljvkp3f41KNpD8sW1C3dAnxijJuqKOv6MsmFyq4NlHB0lnIDCJt3ScdQvRfxr5n8kWSfHPVelySH67MK3bSJte3gYepCtcHQsKEB9IrZDKHbwt%2Ben46YVpvz4h0%2BRcskwn7nUSOuhtrN013OV7eWUjdA1axaVzgIMFoal%2FH6bVfmojbosigISDlNk5Awt91rFskUMsD9XwjlVcImOx2vo1lSifE8uRds58Dkbk5W5WxHP1jgpBDhXPDkxMx1k4WnMi3pOAfBEINKs4YbNmX1b3ChbeSOZ516SKCrEsK%2FJi0FAy5PyYiqVPAOP93ec3ySSTFxPcoPrxyS9wCyueJ%2BKng%2Fu3b%2F2wl4q%2FB0ieVZqebABkwaVnSwJwbzC24UeWq2VrLRqCw%2FtX0VV0Np8osmVbLhxLNx4cRvyJNEPHWIwtF4rRgaXepveHaB2UWa%2Fc0mF1Lsr1bVjeEHzdLz2JfXplrmGiuYJyF8GbG53MIqR9cEGOqUB55xADNn%2B9%2F%2F8YArB7f6k1dgQVUYyC5hOJhuHAjDgmbvy1DqnjsyGaT1Q1dLdvAj%2BRl0nOweR3Fu6itnj%2B1ZdRI3DpYpyldqhKNuh0j9AnVO9K%2Fqtj4Qsl9MO%2FPUMvnLGpKayYjw610wHPLvcWl9lPtQsRQ1V2irV3hey8q37BPW9EuojuOScKSkFlpKLIPaNpGWZKGSNuoflPCbRps2Iedi3Verd&X-Amz-Signature=3b19a1c4ea8cad6d9b176c2da569ef0d2e682914b216a7bfade5326f2433c22e&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663G3CXQPN%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T081327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIFiR7rbGGXDBsGetE4NPzv%2FXr2v2TPgbI6aaO4r0nt%2B%2BAiAdskfi3JCj9CrN7Ngkxw%2B%2BzvWEgAa9AAo8ZlollWGhQCqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxjhJx29Lbpg30pwAKtwDh%2BIHdyM%2FwxZdM6PbBbWODM4jB%2BjW23pxbX9j0GbnGRSuwbgax2Iz7pkAmefrX36cHTkYKOfDXE0WfnQw9RxvGHtwTJCV%2Bd6JBBT1M2wGl%2FgEb0GBRR6DixezUyP5GZShImf%2F4BAmccKodOW2ay%2BciiEFKtRVRre4oRga1vxblowpYYmdSsMxzDdTzamKORMq5BPaL1RkgqzXU0sZQwOcnRXJqg9ErJFY%2BO6X92rDoQ8ryFZSVgJvrjBiGYpIsG6Vw%2ByAbmIEohdVSMmti3CpVcnasUAmdSlL7%2F0Dvn9gBsIle5MDd6t%2BOPw%2B6t88h3cCQ1qC2QTr18tWPHeMzmMSLqgpRqp2ftWosUSp4nFkil9odUHWx6WtfRSugsMLBOGRkA5uPLPu7%2FeEOHicGX9MPDmfMIDG7%2B0iBE2K%2BSlNYM4c2z5LU%2FSjfUGgmYLsHaxTwEejL08Ic3Kv20hVx8GmN6jlQK76PWSGdT1tqdmHG6KcZwgkurTrQHBOmOb%2BTyP%2BMgU8UVXBtC00pgPYHwAaxivkVIxO%2FeiGBpy0qDrTR1GuVBf5fWf60ugwudal8IlqLUabpXh2YxHdXQ1WjZuOtxtHmdYIMH%2BhXfkC5tNShG365xZz%2BPKr8JyTmTow%2FZD1wQY6pgHSrZGMJl1wAR0j1%2BcWUgAzaWRKyYAIj%2Fg6UlnC72XKbODuZWluCTvfCV4e46AkrSsJdyppZnT0LJ2y%2FU8wHlKXBFLLA5shImrcAnXMHPzLOfklvZQdoxamoDcwFMhR9jjbbm8T9%2B5QGg%2FoyQHzE8Yhdut4uju6M3QdgbMGFI1DbdChUwgEbm0I9H%2FPGVKZAxfL4SPpzSfSiEL564JbMt4bYYpi2aRO&X-Amz-Signature=84e8bcef68d0de6ea28ecd98fb4771c38c2821e586cd9c0beb22c6b8678ba62f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFRMOS2K%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T081331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQDyY1KoUDAyNc%2FwXUas3ZhaTPY1rX4cQlSNpL8WFcY91wIgCCwKsEUGWhXnWZAfNGszUqByn6XVE7XH7s5d8cFEYsUqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKkdVPbNxpUEuazB2yrcA80N6xywqgvdZFqziRE6J7HtNNORdKNirnXNhHQuk%2Bx1k%2FA8OxDfNumSDFMAf6V7OxEOdOBurQJ%2B%2FtQ9lB6gJlJ6tPmKnKQSsSGgnO3xHM5CSN9f4Iv0FYSaHJot4FlGb%2BTfl7SntIuC%2FO4%2BePMFqyC9y7Pq3d3K822i%2FkKCljT4NK9OJpniobkKCVY7FwXP8QynobpJIR97tJEm7zqqa0s7Iyvsv6ChwHHtuB0oDvhaI1vrTHyLMzkFuYe0xQvv%2BlFlouTxv%2Bcp0aCBxpK42tNjA1CwEKRlF%2Bra2e4oSAFpvufm1OnalFJQtRMgJMTrFp0iqzWEelZVHqoJ0OBPjspY2krDF2oBHWHXSY6AuQHu1xtje3ZXk3p09IOY9V%2FCew0chAA%2B5Q43rPWz5hj2AgfzoTh9w1M0PkWQ6LW63l4cO32oM1%2BlX6akThDzqpglShB%2FST6eNsbiZvxTnUeLCZZJDZenZh5VQzrRS6FyGLAY6jivPuMiV0K4IAa4RjPXWYCPDLAaV%2FKFzojjdQOxQItDzIOMlEUyejPffZPBc1iPejtBgBTk%2FI%2F92nC%2F8PSxUtPpj4fd6npaXYzUhgS3PeC%2FUuv63MUlkTxNFjghV1PLwYS3R2gVOEs6L6V1MOaQ9cEGOqUBpIGmpxB77nFQFqJ%2BTVwXFeNASJTOv9ZX1lBgg2fURfAbJGEotuO5o9fudx5x6O72ikT5836r2vM%2BdaYG2NfM%2F1LzpSeLD9U593%2BhlwOxvulplpxzCBGuBxRLjksxoltwKki%2FD5fwNVKkcwNhb834bEo7OMMcnTb2OAjMMkf1IazzQstqcPXCfEXHUPKUqglgmJbVL4Up1MtGJXJTEnDlZP0CxYaP&X-Amz-Signature=0767e19ff469a20eaed8adf4957f56cd78b88a76445b2952c08dcc9b58aea60a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666U7H7TF3%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T081326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQDtfP2pIQiE9Qaz9AGCnpd4aDqk%2FhRS%2F%2BRzFQXloPZMhgIgFvzR%2BQEI0WtzPtewmfdaretyuppFEvITK9rRG%2BUXCtsqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGa30eq0lh%2BYqyMpLCrcA4LgVlP7m7dfiGwa2pANHQYBVJ9d6v6yUsn3euWqHMBy08YUQRkHrzf3x82sgTX%2BZiFEZzRW1eA4hXSi4yDVxT%2FUqVPv%2Bmf4y7wfFa8HYLtgVA21HoNgIvPguztEyrBUVhz3Dli3r2RwminHKXRVbVYljvkp3f41KNpD8sW1C3dAnxijJuqKOv6MsmFyq4NlHB0lnIDCJt3ScdQvRfxr5n8kWSfHPVelySH67MK3bSJte3gYepCtcHQsKEB9IrZDKHbwt%2Ben46YVpvz4h0%2BRcskwn7nUSOuhtrN013OV7eWUjdA1axaVzgIMFoal%2FH6bVfmojbosigISDlNk5Awt91rFskUMsD9XwjlVcImOx2vo1lSifE8uRds58Dkbk5W5WxHP1jgpBDhXPDkxMx1k4WnMi3pOAfBEINKs4YbNmX1b3ChbeSOZ516SKCrEsK%2FJi0FAy5PyYiqVPAOP93ec3ySSTFxPcoPrxyS9wCyueJ%2BKng%2Fu3b%2F2wl4q%2FB0ieVZqebABkwaVnSwJwbzC24UeWq2VrLRqCw%2FtX0VV0Np8osmVbLhxLNx4cRvyJNEPHWIwtF4rRgaXepveHaB2UWa%2Fc0mF1Lsr1bVjeEHzdLz2JfXplrmGiuYJyF8GbG53MIqR9cEGOqUB55xADNn%2B9%2F%2F8YArB7f6k1dgQVUYyC5hOJhuHAjDgmbvy1DqnjsyGaT1Q1dLdvAj%2BRl0nOweR3Fu6itnj%2B1ZdRI3DpYpyldqhKNuh0j9AnVO9K%2Fqtj4Qsl9MO%2FPUMvnLGpKayYjw610wHPLvcWl9lPtQsRQ1V2irV3hey8q37BPW9EuojuOScKSkFlpKLIPaNpGWZKGSNuoflPCbRps2Iedi3Verd&X-Amz-Signature=1a44bce09d21af9a44dfc893a6604442e0ac12088ecc0c59ebc6e52d1df53c13&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
