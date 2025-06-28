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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAN4DSFF%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T081029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNFa%2BAKDaORwMad7coIXXRCfHm8rEqjUnEHLs%2FuSv0iAIgEfs9g7hXqntK4W%2FltnHGxZ7uMavX%2FsI%2Bs1fcxXHAvU8qiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOXc0C6D4ePmTqBrfSrcA%2BI1pAQ%2FqCsLrW9ByBi5PVbjr5O0UL5x5XrnCt4vLauA9lEpC5AJlhgvL7y8PW%2Fs8Ddmbuy9i%2BwA8FyolpZQRJQDQI9XOsdsUAGa1dAVFzuwgFKC9CbVe4Z43fv%2Fo8D3f5uLKXMziUl4lTmZ%2B3JMbHByIGFoVitU1nvds47y%2BUmgsZNJJeoiiIqkaUxBh0D0QLzIza3g%2FqGxodUYbDEc3Hnz7ILdHWdt5C%2B1N6QSYntZQQ%2FN5pgXq1EA1K16kDOUQzcofyBDEWAf3ws5%2FwS3UzP%2B2wlvlLusFunKiSNh8aqVag836uJ3x3Eq2lsyWTFQ0tRBNTdY1FShZnQAycvZjVkKjOuMeWp2q32vyuTN37Auawdp1kC242GuHZ1AsQPiO%2F8miCtij7hNK9Gjf7gyjvcQtssUCQgtAeSWZmLpu2dbkTqQHu1tktSmyL4jbo%2FJK5rL6GUxoJ%2Bv8FWofSpb4Ib5XV3U8C3dWdl5qVUpL9%2BLLOfaIlHzDnHZ94R7iIb7N%2BA5GsQQn6rEwZ6CiTVZDJfDIRFDNGoq6jXUS25eh%2BbpOnzICNqi009PHyckBBm55x9G0%2Fisenn7eBrTaiw02Lq%2BFWHSTnALSzBMvfPO4Ea296W1Dvk%2Fy%2BShLSmOMIWi%2FsIGOqUB0EpAvuSKTi0wgTbes3OIpqmafELr6dtJ5iMO46rEmHndjesxdCWeGMGQiHyFZi7P42rg%2BZ3yvw%2BXVTU2z9GYhPweFBCILm9X4JLRlgXBv4Wruvfj75flO0js2FqmPfi9jp34hPhc%2BvY6OtQTlA2DpSuI%2BvpFs20u8X%2FvWSEPEjdivCk2mEbVnFxj2Wt08c6gdBLPkwFZzJMRQmDYk8QnmGb%2FQS04&X-Amz-Signature=30f12ac884b49d8f1bdf710e1f4fb2ed63fd3c12275dc4400c0d751358717a9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAN4DSFF%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T081029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNFa%2BAKDaORwMad7coIXXRCfHm8rEqjUnEHLs%2FuSv0iAIgEfs9g7hXqntK4W%2FltnHGxZ7uMavX%2FsI%2Bs1fcxXHAvU8qiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOXc0C6D4ePmTqBrfSrcA%2BI1pAQ%2FqCsLrW9ByBi5PVbjr5O0UL5x5XrnCt4vLauA9lEpC5AJlhgvL7y8PW%2Fs8Ddmbuy9i%2BwA8FyolpZQRJQDQI9XOsdsUAGa1dAVFzuwgFKC9CbVe4Z43fv%2Fo8D3f5uLKXMziUl4lTmZ%2B3JMbHByIGFoVitU1nvds47y%2BUmgsZNJJeoiiIqkaUxBh0D0QLzIza3g%2FqGxodUYbDEc3Hnz7ILdHWdt5C%2B1N6QSYntZQQ%2FN5pgXq1EA1K16kDOUQzcofyBDEWAf3ws5%2FwS3UzP%2B2wlvlLusFunKiSNh8aqVag836uJ3x3Eq2lsyWTFQ0tRBNTdY1FShZnQAycvZjVkKjOuMeWp2q32vyuTN37Auawdp1kC242GuHZ1AsQPiO%2F8miCtij7hNK9Gjf7gyjvcQtssUCQgtAeSWZmLpu2dbkTqQHu1tktSmyL4jbo%2FJK5rL6GUxoJ%2Bv8FWofSpb4Ib5XV3U8C3dWdl5qVUpL9%2BLLOfaIlHzDnHZ94R7iIb7N%2BA5GsQQn6rEwZ6CiTVZDJfDIRFDNGoq6jXUS25eh%2BbpOnzICNqi009PHyckBBm55x9G0%2Fisenn7eBrTaiw02Lq%2BFWHSTnALSzBMvfPO4Ea296W1Dvk%2Fy%2BShLSmOMIWi%2FsIGOqUB0EpAvuSKTi0wgTbes3OIpqmafELr6dtJ5iMO46rEmHndjesxdCWeGMGQiHyFZi7P42rg%2BZ3yvw%2BXVTU2z9GYhPweFBCILm9X4JLRlgXBv4Wruvfj75flO0js2FqmPfi9jp34hPhc%2BvY6OtQTlA2DpSuI%2BvpFs20u8X%2FvWSEPEjdivCk2mEbVnFxj2Wt08c6gdBLPkwFZzJMRQmDYk8QnmGb%2FQS04&X-Amz-Signature=d861039a071a43a7651f4f2f0caaa8d973e7d92e08b31518ad737c573c5c24a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAN4DSFF%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T081029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNFa%2BAKDaORwMad7coIXXRCfHm8rEqjUnEHLs%2FuSv0iAIgEfs9g7hXqntK4W%2FltnHGxZ7uMavX%2FsI%2Bs1fcxXHAvU8qiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOXc0C6D4ePmTqBrfSrcA%2BI1pAQ%2FqCsLrW9ByBi5PVbjr5O0UL5x5XrnCt4vLauA9lEpC5AJlhgvL7y8PW%2Fs8Ddmbuy9i%2BwA8FyolpZQRJQDQI9XOsdsUAGa1dAVFzuwgFKC9CbVe4Z43fv%2Fo8D3f5uLKXMziUl4lTmZ%2B3JMbHByIGFoVitU1nvds47y%2BUmgsZNJJeoiiIqkaUxBh0D0QLzIza3g%2FqGxodUYbDEc3Hnz7ILdHWdt5C%2B1N6QSYntZQQ%2FN5pgXq1EA1K16kDOUQzcofyBDEWAf3ws5%2FwS3UzP%2B2wlvlLusFunKiSNh8aqVag836uJ3x3Eq2lsyWTFQ0tRBNTdY1FShZnQAycvZjVkKjOuMeWp2q32vyuTN37Auawdp1kC242GuHZ1AsQPiO%2F8miCtij7hNK9Gjf7gyjvcQtssUCQgtAeSWZmLpu2dbkTqQHu1tktSmyL4jbo%2FJK5rL6GUxoJ%2Bv8FWofSpb4Ib5XV3U8C3dWdl5qVUpL9%2BLLOfaIlHzDnHZ94R7iIb7N%2BA5GsQQn6rEwZ6CiTVZDJfDIRFDNGoq6jXUS25eh%2BbpOnzICNqi009PHyckBBm55x9G0%2Fisenn7eBrTaiw02Lq%2BFWHSTnALSzBMvfPO4Ea296W1Dvk%2Fy%2BShLSmOMIWi%2FsIGOqUB0EpAvuSKTi0wgTbes3OIpqmafELr6dtJ5iMO46rEmHndjesxdCWeGMGQiHyFZi7P42rg%2BZ3yvw%2BXVTU2z9GYhPweFBCILm9X4JLRlgXBv4Wruvfj75flO0js2FqmPfi9jp34hPhc%2BvY6OtQTlA2DpSuI%2BvpFs20u8X%2FvWSEPEjdivCk2mEbVnFxj2Wt08c6gdBLPkwFZzJMRQmDYk8QnmGb%2FQS04&X-Amz-Signature=1e631622bbf63b980acc5b2ec53250fd340b8781d4de1b35c19d93fc2fa546ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQLFWBGP%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T081031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0ymbh3FG9WsgNqS9HqfhpGrnkGnioldaaT7hieBxAbAIgDkIC%2B8STDGbuKTBOakSgmHZ4XcR2hLC7Dc8Xhd2C1WIqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMjJ%2B3tG2HhOTuO2QyrcAzuKteqDuhdzSJLVszA2Y8Lko3GEO%2BLIIBpbeMjvvgr1TI4vFsv%2BIALuKrGHFknKFwthDzoMVLzMNiFr5sYcAqCu0PKauE3Ya6TGLlZ5ifEpRwGeD1S9MusNzKfc1nUUSfrvZQj499t8fpRv8okvnVGOInC0uphv6w3n7UtYrhlB1A1FSZCCOmzgZoYUlZ6ODLtVD0moal40JkLfODHuMfkl15Qnj2lABcfnN4qqui4UMDFVhL13q8Jfy%2FHpwAqeuOKxlnuQl%2FZwULsUek2eKH5fN8xb5DYgdagKyWEjHQENUgmY5oHTqWFJaI53vE61zBWi1mbOmEMTzgt2DT8MoFvdoNQut3tyidiJ0mIbaybg%2FUAsZ5KTYMbSpwD%2B9j3YXkqZiJz8N%2FlYQ%2B6fe9zJcU1hnkIwX6fmQeNCgQ3A49Zexj0%2FxDm8XZtp8mWwi7WP6uQ6d39EmJVJz%2BU7RkBwiz060kly9ja0hwarcSdfFQW2d4P3PDujs1hU5N5FCWJlLp8lc9O9uCy9XvyueTUnYeSEYGENSkI2mkwSm13FyoMMnVsRHHxmcJGGyd0moYFX2WifEeOn3WmDXL%2Fl9QvrLEux2B9abllYHgitp%2BrfpJVb9ivHjZhM4iswXJXgMIOi%2FsIGOqUBfmKD4ddlvIh8iEpHsCYLcv9RJ1zO72tmknpbA7LECkTK1Yjq8%2B2E2gKqjvMHg8szQWizK6LIGDzxEkia85M8uCQIeutPcdNwupJdSBz0cUuXl6Y4kcNvdJ7Jv2iOomHXwPbWfhAdILNpgvjzHdd%2FuFAFoWuhZD6lcj9BDK5Bv%2BxtiZmo2DwOsEHyDM26%2Bdezfjj8t%2FeRDhRG3dVlitEgpJKMEh3t&X-Amz-Signature=efbc13dec970ea7eedc4cbca72a5bdf83476c6b97da1a30fe02be5c6971a6ee2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SQMN6QX%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T081031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID47InyStS9ZsPxDS%2Fs%2BMh3l90e33Y%2FxO27s7CzX3QdDAiBLZlyDPljqDn%2Fbn9%2FgAaljfzOR%2BuWsiS2aSrS%2FTlA8%2FSqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKDxd%2FXR47HpvHlrvKtwDRZx40ckWlJZcfRTELnPB1ocJBBMVTd2OoDJy7vcZ%2BIpfn32nossPTFMOOR3J0n2NgZopdtR3b070b%2BdXIB%2BpTkBvtl0A1MZaRDCpgmWMd8Z8TCbCXJlgAAm9dmqJiRtDshQSFyycZNnlqkOddHWNWeRCbeHTVpJ4JEQetFq7wANrFQvO0OdP5TA2RZMcvS9%2FsW2patRvP87V0y2QLDxXLKLOKWUSGzMdc6CgtIzAk7NWaNnuwGXAcU01CpcqBmAge7I1hPdXThB5ivsL9dN%2BSSZSYaOUYU6wSsism9tcXDpuH%2FOrZBpaUliPmW2MfIpwBT3XvfhOqIdYW3E8N4zFYXRTCjKzNTknvpI10qI8I8NjXJvwgasoKHRR2IePYjyrXNfwg6j%2B%2BhwyRnXbwTbYf1kkAp3j0cRzEiRVz7VRhTML5JB2qV0TzpPRPdJj9hrlcU1G3tt6dG71UdgwMRQKQGT0NfNlFYsRLGDkdtFB2o8EZ7o1nv7QdgpIbpawW5nmdWlTv%2Fq%2BldsK4UNAJOVgo%2BZY7Wjats8T7FMUAbZ7SoUaYd8TDIZNq%2FKhHLj2eNNo%2FwMIt%2BFIyz6FXZXKyvbYywXufzwYWrag07FM7mkyvlpcMKHkhwdUu11Esr8w2aD%2BwgY6pgHLfodCibPSEiVDVI%2FMrfqUuEkDStcnBwmr%2Bjy1noPKEp1jEtcuqmz0bDCe5Zm4exr%2BEmMnRfu1luFc8hFEdJNZBBG4RcfEq%2FMAAbwUIe%2BQdkifj4o%2FGjSbBOH1i6MglegK11Jw1i2SbpOtk6vX4ZcTK7MzZsn%2BHNybRrR6jhbAB4WonoUYsmNXPyI5HnXFRh1FN%2FvwsHH7o%2F1lWmZ4IxB7gN6wUpoA&X-Amz-Signature=c3092fb3b0ae6acaa40d4e6fdfddeb333007da5da23752a3ccd0aaba2736eb41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAN4DSFF%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T081029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNFa%2BAKDaORwMad7coIXXRCfHm8rEqjUnEHLs%2FuSv0iAIgEfs9g7hXqntK4W%2FltnHGxZ7uMavX%2FsI%2Bs1fcxXHAvU8qiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOXc0C6D4ePmTqBrfSrcA%2BI1pAQ%2FqCsLrW9ByBi5PVbjr5O0UL5x5XrnCt4vLauA9lEpC5AJlhgvL7y8PW%2Fs8Ddmbuy9i%2BwA8FyolpZQRJQDQI9XOsdsUAGa1dAVFzuwgFKC9CbVe4Z43fv%2Fo8D3f5uLKXMziUl4lTmZ%2B3JMbHByIGFoVitU1nvds47y%2BUmgsZNJJeoiiIqkaUxBh0D0QLzIza3g%2FqGxodUYbDEc3Hnz7ILdHWdt5C%2B1N6QSYntZQQ%2FN5pgXq1EA1K16kDOUQzcofyBDEWAf3ws5%2FwS3UzP%2B2wlvlLusFunKiSNh8aqVag836uJ3x3Eq2lsyWTFQ0tRBNTdY1FShZnQAycvZjVkKjOuMeWp2q32vyuTN37Auawdp1kC242GuHZ1AsQPiO%2F8miCtij7hNK9Gjf7gyjvcQtssUCQgtAeSWZmLpu2dbkTqQHu1tktSmyL4jbo%2FJK5rL6GUxoJ%2Bv8FWofSpb4Ib5XV3U8C3dWdl5qVUpL9%2BLLOfaIlHzDnHZ94R7iIb7N%2BA5GsQQn6rEwZ6CiTVZDJfDIRFDNGoq6jXUS25eh%2BbpOnzICNqi009PHyckBBm55x9G0%2Fisenn7eBrTaiw02Lq%2BFWHSTnALSzBMvfPO4Ea296W1Dvk%2Fy%2BShLSmOMIWi%2FsIGOqUB0EpAvuSKTi0wgTbes3OIpqmafELr6dtJ5iMO46rEmHndjesxdCWeGMGQiHyFZi7P42rg%2BZ3yvw%2BXVTU2z9GYhPweFBCILm9X4JLRlgXBv4Wruvfj75flO0js2FqmPfi9jp34hPhc%2BvY6OtQTlA2DpSuI%2BvpFs20u8X%2FvWSEPEjdivCk2mEbVnFxj2Wt08c6gdBLPkwFZzJMRQmDYk8QnmGb%2FQS04&X-Amz-Signature=f289a652ca70db3391f7d6ff1446a5b1f35f440f8f0bb220783e923bb8db19cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
