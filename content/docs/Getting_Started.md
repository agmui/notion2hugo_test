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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7GB562A%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T230920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQCpFc6h1ZKm%2B0eelUqEqGH8iLP31VVNVWRDwmy7c8K%2F1AIgfOka5cO5P1inkIbUYRYEGfERGOlH%2BleMo1JGCKMw5Y8q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDK%2BUVDgeqREAmmZlJCrcA%2B7dJTHGzp80IyeT8goyoWsvg5OdnMQhEBi3L%2B0hEqRpmPU8px7KHyurvP0Me7bfoXHG430g5Nt3D8Z320ugBGWUh%2FuWYkMCykdVdP7rOLW7i%2BYUfKNZHd2%2FgcO6Vi76zEUBX5pfQndh5rXKCUrgkRcLdy%2B1tJwrdrJbse7vquDzBz4eXO7lK6tmDfnOnp33jBxzdIuXPKswI41%2Fls0zFBSCU0lJKtfBKFGiKmnRyfgf0tvDIgH6aocJ1BaQYdlmSfoFqz7LwzQERgbE%2FYGlhiI44v0sfbXqq6Dbhge2OzEHxCJse8CQbnuiSi%2BgIUvpstH1%2FkVAvCGS7Otr3TgiaknN3tSQbIerMotUNf3wzXg%2Be0HoV1lsThodUVJPT%2BnOkjkvLBewtM0fwuTOoH3upTgP0w6XIcfVM1Z9dl2EZDoniAhL1ZdTxGDoxsRoyYb%2FvHa3%2BuJYF7i7IW67fCedqQvk3OTsO8El1Pu%2Fu%2F8zyT6a1BB8cOlrpso9XPPBTxuCHvcFHZe8MrqRkbbkj0GvkQ6r2SJz3g5RYSP9QiSsroM8R%2B5WFrBx%2BbCqheKhndTDkHIU5HMA0JJNs8WGYwQj2F%2B%2F8zAlzO%2BxmFEt07mSWIovdSNmWOs%2FRsgwb5mxMLnYh8IGOqUBLrNkQxCXb2OCnQo6M0u%2FFpsmF8RV7nd9t%2FDgzN7nAh7O1hOTxOmTOSpka3lyxx4h6q664ikj%2FSEIjtEw0UqgtYcqHLQAQpFaWPIkOqVNlLycvSWBlQsqXdF5XzWVZHIDjJvcu5omwyXS4VaiGQOQYAj7JT628pypkL%2BOISEK12TVN9b3lGw82EHiCG096ZCGzPbvfgqkrq6gxcHzJEZH4qOxfsCH&X-Amz-Signature=94d92f708c33c2b5a12db3c41b6c0b0361c1f7ed825868f9ef677568c14a8819&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7GB562A%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T230920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQCpFc6h1ZKm%2B0eelUqEqGH8iLP31VVNVWRDwmy7c8K%2F1AIgfOka5cO5P1inkIbUYRYEGfERGOlH%2BleMo1JGCKMw5Y8q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDK%2BUVDgeqREAmmZlJCrcA%2B7dJTHGzp80IyeT8goyoWsvg5OdnMQhEBi3L%2B0hEqRpmPU8px7KHyurvP0Me7bfoXHG430g5Nt3D8Z320ugBGWUh%2FuWYkMCykdVdP7rOLW7i%2BYUfKNZHd2%2FgcO6Vi76zEUBX5pfQndh5rXKCUrgkRcLdy%2B1tJwrdrJbse7vquDzBz4eXO7lK6tmDfnOnp33jBxzdIuXPKswI41%2Fls0zFBSCU0lJKtfBKFGiKmnRyfgf0tvDIgH6aocJ1BaQYdlmSfoFqz7LwzQERgbE%2FYGlhiI44v0sfbXqq6Dbhge2OzEHxCJse8CQbnuiSi%2BgIUvpstH1%2FkVAvCGS7Otr3TgiaknN3tSQbIerMotUNf3wzXg%2Be0HoV1lsThodUVJPT%2BnOkjkvLBewtM0fwuTOoH3upTgP0w6XIcfVM1Z9dl2EZDoniAhL1ZdTxGDoxsRoyYb%2FvHa3%2BuJYF7i7IW67fCedqQvk3OTsO8El1Pu%2Fu%2F8zyT6a1BB8cOlrpso9XPPBTxuCHvcFHZe8MrqRkbbkj0GvkQ6r2SJz3g5RYSP9QiSsroM8R%2B5WFrBx%2BbCqheKhndTDkHIU5HMA0JJNs8WGYwQj2F%2B%2F8zAlzO%2BxmFEt07mSWIovdSNmWOs%2FRsgwb5mxMLnYh8IGOqUBLrNkQxCXb2OCnQo6M0u%2FFpsmF8RV7nd9t%2FDgzN7nAh7O1hOTxOmTOSpka3lyxx4h6q664ikj%2FSEIjtEw0UqgtYcqHLQAQpFaWPIkOqVNlLycvSWBlQsqXdF5XzWVZHIDjJvcu5omwyXS4VaiGQOQYAj7JT628pypkL%2BOISEK12TVN9b3lGw82EHiCG096ZCGzPbvfgqkrq6gxcHzJEZH4qOxfsCH&X-Amz-Signature=46b470232e39b981885c7c34f562583b29104de0078cb440b94a870ee0b5df8d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7GB562A%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T230920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQCpFc6h1ZKm%2B0eelUqEqGH8iLP31VVNVWRDwmy7c8K%2F1AIgfOka5cO5P1inkIbUYRYEGfERGOlH%2BleMo1JGCKMw5Y8q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDK%2BUVDgeqREAmmZlJCrcA%2B7dJTHGzp80IyeT8goyoWsvg5OdnMQhEBi3L%2B0hEqRpmPU8px7KHyurvP0Me7bfoXHG430g5Nt3D8Z320ugBGWUh%2FuWYkMCykdVdP7rOLW7i%2BYUfKNZHd2%2FgcO6Vi76zEUBX5pfQndh5rXKCUrgkRcLdy%2B1tJwrdrJbse7vquDzBz4eXO7lK6tmDfnOnp33jBxzdIuXPKswI41%2Fls0zFBSCU0lJKtfBKFGiKmnRyfgf0tvDIgH6aocJ1BaQYdlmSfoFqz7LwzQERgbE%2FYGlhiI44v0sfbXqq6Dbhge2OzEHxCJse8CQbnuiSi%2BgIUvpstH1%2FkVAvCGS7Otr3TgiaknN3tSQbIerMotUNf3wzXg%2Be0HoV1lsThodUVJPT%2BnOkjkvLBewtM0fwuTOoH3upTgP0w6XIcfVM1Z9dl2EZDoniAhL1ZdTxGDoxsRoyYb%2FvHa3%2BuJYF7i7IW67fCedqQvk3OTsO8El1Pu%2Fu%2F8zyT6a1BB8cOlrpso9XPPBTxuCHvcFHZe8MrqRkbbkj0GvkQ6r2SJz3g5RYSP9QiSsroM8R%2B5WFrBx%2BbCqheKhndTDkHIU5HMA0JJNs8WGYwQj2F%2B%2F8zAlzO%2BxmFEt07mSWIovdSNmWOs%2FRsgwb5mxMLnYh8IGOqUBLrNkQxCXb2OCnQo6M0u%2FFpsmF8RV7nd9t%2FDgzN7nAh7O1hOTxOmTOSpka3lyxx4h6q664ikj%2FSEIjtEw0UqgtYcqHLQAQpFaWPIkOqVNlLycvSWBlQsqXdF5XzWVZHIDjJvcu5omwyXS4VaiGQOQYAj7JT628pypkL%2BOISEK12TVN9b3lGw82EHiCG096ZCGzPbvfgqkrq6gxcHzJEZH4qOxfsCH&X-Amz-Signature=daf8324db5fbdcf5cc0f8c25e22b2f2bd23d4683c7e6f7976990b1becc34e26b&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBKEVVBO%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T230925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIAPX7LJ5lKLA3qaZ2XfY2jKToh45nq3jwuiM%2BvexQYqlAiA2CpxALSwsYellAwfdxz12LPSpBjYMP41eEwUzYEmWvyr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMb9APTQRC0eeeXVc8KtwDaM3WOgA4mJv%2Brg79SRRZuMa%2BwzobNMwHqG%2FJHDCqe%2BKb8XJA5epYvjfX%2Bd1FKT7n5V7Ti1JWwNez5%2BKR7AmZhnzqupHyx%2BAcfkNOHr9S50TT7T37lYyhslKWHSsHJeFVhVeB1EDNKPjDDliTcIN%2Fs%2Blczrfr05Ec5X%2FCw6PpIJFv52qrws6WTHfoF8bwSoZh%2Bwko8EopwMnq56irXyCyPNFFAEr3mjn6cQtGL%2BygJ8fZJDKf%2FDzREHW4ph5eOpv4pqocf5nR7Wntq%2Bmud1Jt2Q6MOeFVJsD2PMQbJDy83nDHxzHaWPipWb%2B7ycwtEsEcD6Dewm65G3Tvpo2Atq7pX028hlqGLFIxxnXvqAzTQSCCPT2g%2FmAnI9yjU%2BwNkzr8txMDaWVmjdjyq6OacoEsydKQLIjBp0%2F2fNL2J26V7iyfDUdP0aSjXOqAgXUazx5cKPHDiQgwb3mPqc2wAcbBTVFcVIb51V0Of2yjBZaT8dxtmhzRZlmnpkaO6BdX%2FbGlLSRm7OdjBGyDIKRNfWu9o9G7hJo8Ln6FMVer0zrU9brMNxfMfz5NszBqtVAYWc8AmMWrdQcBs1o8SvIXhIA8QrG4BocnJ411jo9v7JQuFcpgerf9Zb%2FdKphMMOMwwtiHwgY6pgGIj%2F2Y4DPvoCQDB5thfawDYk7bQkVp87CCckASl8BEuQT4l6k3pr9GQltAkAgtVKwrsXkU%2F50ZC%2BbRgGg1wyO61FCF83ZIeYMYA2L0n%2FAZmS9I0lcyzz%2BGNel%2BV%2BQOPwmrPx6ROx4mblngzFKwe6%2FortlmBfSPD5PxliB8eLhkMu7%2FwFoJHv%2FRtMgzJa063vbqDxCgSpuXpD35JPWkpdrH1mZJJtdE&X-Amz-Signature=0c12dcf242cfdd2320173d4f2774de826659483a3dffd0bd248133b311773f3b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6FPGUID%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T230925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQCifHNG%2FVTQXDJ3xGtGFzziXFIjSJKAnl37L8fxnJ56RQIgHEUZ8Qt6HVV8b445%2BMLq4RWru18Ebo%2F4aVoar6lhScMq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDPfAffOW3HzAe1L%2BTyrcAyk2RXBnIAtNfo%2FlJWYbFE4mMD7YhFTAVE%2BCNYbAudfJOVScrPY9D0DfYkhRnyQ%2Fh%2FhhESOPZ6mJZkpHGpHUl%2BBgRGb0d3vd%2BJmA38lJ0%2FBCN11kVr9IrKDLENz2FGFl1hTxb9hC%2BPJsBMQ1W0MFYgEN2L6UTr%2BrDkC4hUyDnSOoqp0snn6vHlyJ8ZnXVug3%2Bkcvjx86iW%2FSvrDuFpEiqwaf1CIDYx7dqVJGgRfZwuIWivUihCxlu3aVy5nXYpOb7nheUYiChMaXrM6KNLDqYh7Iy4e9gW52KvOI69yLUEzUfWpRByOh3c432H6eURnMw%2FyuLkxZvaeBatXdtsBm2cuZQzOnXfGKIxn9yDOlVUL%2B%2F0cVhr6yAjX2PXTpR650gvQY1fLM3Li2PIYEC9imARPsTn%2Fy%2BV2AXgR6u3vsAyC5J2e5%2B10gZUSuyqQDhqBpFk%2BHzlCYHuHKIaIrMQj1Y6vpRSyF%2BfLmPQSzKDWDC7Qk4vIEszazf3WLWiBbXRu7iShwyiobCO9e%2B2xYgqvzhcR7G6dKQWO3LfYS2SdFj0Xk9CJx0puOKjiHVSjkllkxfGsPweG7omanR9zdAi65jnV2UBn0g5KxvRdctzKQVYqedThU%2B8V5qdUVnHI5MIXYh8IGOqUBROCUrAHuFiZ68aignBfn%2FZswtJFM2lVhWUibmlIDU58lnv5dy9l6vIybVRvrKULglxBp9xEB%2F0U72CgA3UB6vuh31Wj9D%2B%2FuZSnd%2F4kNMMguPtTDLdgrHNog6cflO274JrNWlXj9JDxTb%2BorzISjNcbRpIhDBr5C1FeHP1pGsbWuMVe%2FbRcom6Z0Cnwc8NL1nkhtamAPuRecW1CWJvAb2bZeTzOv&X-Amz-Signature=4ba87060010b31705ea9d5d8b80f194dcf29ff72dda6fec6ad471e53ade475e0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7GB562A%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T230920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQCpFc6h1ZKm%2B0eelUqEqGH8iLP31VVNVWRDwmy7c8K%2F1AIgfOka5cO5P1inkIbUYRYEGfERGOlH%2BleMo1JGCKMw5Y8q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDK%2BUVDgeqREAmmZlJCrcA%2B7dJTHGzp80IyeT8goyoWsvg5OdnMQhEBi3L%2B0hEqRpmPU8px7KHyurvP0Me7bfoXHG430g5Nt3D8Z320ugBGWUh%2FuWYkMCykdVdP7rOLW7i%2BYUfKNZHd2%2FgcO6Vi76zEUBX5pfQndh5rXKCUrgkRcLdy%2B1tJwrdrJbse7vquDzBz4eXO7lK6tmDfnOnp33jBxzdIuXPKswI41%2Fls0zFBSCU0lJKtfBKFGiKmnRyfgf0tvDIgH6aocJ1BaQYdlmSfoFqz7LwzQERgbE%2FYGlhiI44v0sfbXqq6Dbhge2OzEHxCJse8CQbnuiSi%2BgIUvpstH1%2FkVAvCGS7Otr3TgiaknN3tSQbIerMotUNf3wzXg%2Be0HoV1lsThodUVJPT%2BnOkjkvLBewtM0fwuTOoH3upTgP0w6XIcfVM1Z9dl2EZDoniAhL1ZdTxGDoxsRoyYb%2FvHa3%2BuJYF7i7IW67fCedqQvk3OTsO8El1Pu%2Fu%2F8zyT6a1BB8cOlrpso9XPPBTxuCHvcFHZe8MrqRkbbkj0GvkQ6r2SJz3g5RYSP9QiSsroM8R%2B5WFrBx%2BbCqheKhndTDkHIU5HMA0JJNs8WGYwQj2F%2B%2F8zAlzO%2BxmFEt07mSWIovdSNmWOs%2FRsgwb5mxMLnYh8IGOqUBLrNkQxCXb2OCnQo6M0u%2FFpsmF8RV7nd9t%2FDgzN7nAh7O1hOTxOmTOSpka3lyxx4h6q664ikj%2FSEIjtEw0UqgtYcqHLQAQpFaWPIkOqVNlLycvSWBlQsqXdF5XzWVZHIDjJvcu5omwyXS4VaiGQOQYAj7JT628pypkL%2BOISEK12TVN9b3lGw82EHiCG096ZCGzPbvfgqkrq6gxcHzJEZH4qOxfsCH&X-Amz-Signature=625d836278d12ad19f8dbfbf5c91dcd03f218bab61dc3570fba5052141502306&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
