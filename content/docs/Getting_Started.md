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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WCUYJ2F%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T044014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH0X7Wrte69VnulIAJG7cgJnjNJfddHi7qO870CG00xTAiEA%2FqPIPbmx12lMf%2FRZAVMf2zgZAgS9D%2BiCqKt2c3eMaNkqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCgInuDVlPGnaoeIAyrcA%2FvtICYI4Q65PWIOO5vijZYo3Hse2lHIT61BMhs%2F5QZmTaCA5PeEvinFH935d3QTMqXGbEFiC7uIED0sGGOKMtc3uH4o0a0QIdOjHqeZvrlKrU%2BXWKY3LkzVc4hn2bDpxlK7IhWLaVe46SoNh1fKPUEdconY7qiphIsNeJMEoGfBirnywCImEX9%2FSRF8QJOXZw6rPvH%2Bhwb6iP1WneObOGRmQKyBcdyy7XqFNprLKlABa9gThAun%2BvbuXI2UFyhz0K1yxsGM%2B%2BHHE4CfD8LhnZs7bx6H8IX5tFJ0il8HDd1PtQaJhhGf5PFndMRPXlgCce1mvJknPO3SlRmhr%2F4teBhP8xfQO7vQgbYsm2aCRPGsBOTlakg%2BLqxtdgM164sNjtumgd%2B3vZIlG3WOWsKL47S8WVBBjnKP174TjqrgZLSgGxhV%2Fy7V7BzL5163ALk409xZsGxvAYSWrnuaqYaFdhLtPouJ3oLDD3I1pU0XP36TGKJQeAMEgbeEyR%2FmO15z4C5ID1%2FoylxhGfN7asueKHB%2FQJhxXxXi9mvCi6ICWyV2bODG4tGT76LOdXkuNblbrge0TlG5%2F5K3U7F%2BtzY3CgJ0sJVzaw6L0us9fEZ72fz2MgIkl1ltHMDS5KhqMPyd5cQGOqUBUULkA7dkrMmSvPB32e1HYGc5BWErcBeB6MK8lUk54dsQEobPTV0vqfsPTmzXS5Cq5NwV%2Fp%2BaWo%2BPkyVihDz6OUilIXufoJMMraGdNNQDf21FvxJ%2BgjgGwQT%2BHxWl2Ls8Eq59Db8iyHkV1gBa%2BlU0FYw2vPi4GaWb3HJ09pRGVAxnhspPfLpL6Lbyxs6TUv0gzKFUBRjpHLbP5bO1AOIOB%2B73z3wx&X-Amz-Signature=9a68b3a349a54a51cacd3f7bca72c91ed1c72d1348f6b44be05b52b668e4740e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WCUYJ2F%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T044014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH0X7Wrte69VnulIAJG7cgJnjNJfddHi7qO870CG00xTAiEA%2FqPIPbmx12lMf%2FRZAVMf2zgZAgS9D%2BiCqKt2c3eMaNkqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCgInuDVlPGnaoeIAyrcA%2FvtICYI4Q65PWIOO5vijZYo3Hse2lHIT61BMhs%2F5QZmTaCA5PeEvinFH935d3QTMqXGbEFiC7uIED0sGGOKMtc3uH4o0a0QIdOjHqeZvrlKrU%2BXWKY3LkzVc4hn2bDpxlK7IhWLaVe46SoNh1fKPUEdconY7qiphIsNeJMEoGfBirnywCImEX9%2FSRF8QJOXZw6rPvH%2Bhwb6iP1WneObOGRmQKyBcdyy7XqFNprLKlABa9gThAun%2BvbuXI2UFyhz0K1yxsGM%2B%2BHHE4CfD8LhnZs7bx6H8IX5tFJ0il8HDd1PtQaJhhGf5PFndMRPXlgCce1mvJknPO3SlRmhr%2F4teBhP8xfQO7vQgbYsm2aCRPGsBOTlakg%2BLqxtdgM164sNjtumgd%2B3vZIlG3WOWsKL47S8WVBBjnKP174TjqrgZLSgGxhV%2Fy7V7BzL5163ALk409xZsGxvAYSWrnuaqYaFdhLtPouJ3oLDD3I1pU0XP36TGKJQeAMEgbeEyR%2FmO15z4C5ID1%2FoylxhGfN7asueKHB%2FQJhxXxXi9mvCi6ICWyV2bODG4tGT76LOdXkuNblbrge0TlG5%2F5K3U7F%2BtzY3CgJ0sJVzaw6L0us9fEZ72fz2MgIkl1ltHMDS5KhqMPyd5cQGOqUBUULkA7dkrMmSvPB32e1HYGc5BWErcBeB6MK8lUk54dsQEobPTV0vqfsPTmzXS5Cq5NwV%2Fp%2BaWo%2BPkyVihDz6OUilIXufoJMMraGdNNQDf21FvxJ%2BgjgGwQT%2BHxWl2Ls8Eq59Db8iyHkV1gBa%2BlU0FYw2vPi4GaWb3HJ09pRGVAxnhspPfLpL6Lbyxs6TUv0gzKFUBRjpHLbP5bO1AOIOB%2B73z3wx&X-Amz-Signature=e703bbfd5d59be736ac1357661dd5be2f732d9e89b3b2bae839cd6170eaa02dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WCUYJ2F%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T044014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH0X7Wrte69VnulIAJG7cgJnjNJfddHi7qO870CG00xTAiEA%2FqPIPbmx12lMf%2FRZAVMf2zgZAgS9D%2BiCqKt2c3eMaNkqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCgInuDVlPGnaoeIAyrcA%2FvtICYI4Q65PWIOO5vijZYo3Hse2lHIT61BMhs%2F5QZmTaCA5PeEvinFH935d3QTMqXGbEFiC7uIED0sGGOKMtc3uH4o0a0QIdOjHqeZvrlKrU%2BXWKY3LkzVc4hn2bDpxlK7IhWLaVe46SoNh1fKPUEdconY7qiphIsNeJMEoGfBirnywCImEX9%2FSRF8QJOXZw6rPvH%2Bhwb6iP1WneObOGRmQKyBcdyy7XqFNprLKlABa9gThAun%2BvbuXI2UFyhz0K1yxsGM%2B%2BHHE4CfD8LhnZs7bx6H8IX5tFJ0il8HDd1PtQaJhhGf5PFndMRPXlgCce1mvJknPO3SlRmhr%2F4teBhP8xfQO7vQgbYsm2aCRPGsBOTlakg%2BLqxtdgM164sNjtumgd%2B3vZIlG3WOWsKL47S8WVBBjnKP174TjqrgZLSgGxhV%2Fy7V7BzL5163ALk409xZsGxvAYSWrnuaqYaFdhLtPouJ3oLDD3I1pU0XP36TGKJQeAMEgbeEyR%2FmO15z4C5ID1%2FoylxhGfN7asueKHB%2FQJhxXxXi9mvCi6ICWyV2bODG4tGT76LOdXkuNblbrge0TlG5%2F5K3U7F%2BtzY3CgJ0sJVzaw6L0us9fEZ72fz2MgIkl1ltHMDS5KhqMPyd5cQGOqUBUULkA7dkrMmSvPB32e1HYGc5BWErcBeB6MK8lUk54dsQEobPTV0vqfsPTmzXS5Cq5NwV%2Fp%2BaWo%2BPkyVihDz6OUilIXufoJMMraGdNNQDf21FvxJ%2BgjgGwQT%2BHxWl2Ls8Eq59Db8iyHkV1gBa%2BlU0FYw2vPi4GaWb3HJ09pRGVAxnhspPfLpL6Lbyxs6TUv0gzKFUBRjpHLbP5bO1AOIOB%2B73z3wx&X-Amz-Signature=03ec0e8d638b946faf20cdd447dc8fcf6769b5502cc07c31a550f7dcadb0e2c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6GOIELC%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T044016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE0B5bVztQvBf7XnT2thYOskqfe5fZFvzO24pcOxGuHiAiEAweaalF6UexdSdkn%2Bi5GEcMpyP4jcb8n3u9zZN5Z15iwqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOCMYOl%2Fr4ZZF7QPzircA%2BknR%2FbOIhz0%2FP8hxy7nz6n2i7it6rH%2F5y%2BDnQzE6aqQxqeGFL%2B4ncTBW5ZSMNKTm5yNksxk8CBehURtx%2FoVv5cudECy7gI3tDgLFfnDf2enxSWtOWV4sxaWtKzcWPau7X3dsV0UNKxlJhz4xxVOL4%2BbmTbyYrwBp%2BWfcWC1gWf8kXu5ho27wTB4j5O9LcZ8FZsLlL6cXC80w7tlrpEERYQb7qC3b9mhhiBgQRDLWQHUcZ8OKdJa7Y%2BRcrv9dm4hsWJpWPxv3DOI9dmkOjDrOsnt9iJMeoVvLYPjL9wgfrr%2B72Qu8ugpacFwpVj%2Felprex1%2FpcOc54SOWvsk6SEUdN9uD9DlVnmM%2BTM72HvJMdn%2Fg8VZ4262M%2FuisdHTw0fWZQX0AY4NAUX9a5JLkFMDkN7wO6JTrLod0HU1e2%2BS2u%2FfdNCiQXtli2g3pBcEosCaExlS6n5ci%2BlRl%2FyNhYobMe%2F%2Bm903UkX%2FVAhWzgsA9YARW8W6mtEw0FWFebq8yExD7rSiPS%2BHSfmT8H%2F%2FONzQlvqHTbtP%2BXbP28pNqXgfZ2tGgdg3JJqT%2BW1gvCcnSgmfEbBE7S%2FFMvYDlHkT1ov9Gv4%2Fe4821PsAonHwcza50OoNTGp%2FxCZHwC2efUcFMIed5cQGOqUBzagDqEQYx6OzIXi1C1zMfSSdFfpC00Toju49m0tk7Ejemave%2FswOY%2F3%2FdT6SsRVUTDeXfEHrq2NXVjUJ4oIvH78XjLAtl7RptmXwyljNJzgWH0k0CnbUOiAA2tr7%2Fktr7SF2rs3PKMxDFN9p2jzTB9NsGNKuB5I2aZplFsrzYqgfBkWBcl2I2RdLiqoTSF67W%2F0JSNJp0PM9EywupRqk%2FREiMnb1&X-Amz-Signature=099a90a0cdb2340059edc9b4b4b464c111fc20d20f02e12284856531bcea2908&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMC4UI7T%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T044016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCiLWFZAvv39XLs%2Bhnj%2FOyKdLmxRE3%2Bv3DTCHKSsGRt3wIgRZlgCl1E355VEOg0N6p%2FUw%2FNM%2B8cN8GmyYUK3fOljxIqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDETIBt7Si1gHfC7pXSrcA1arhSimmL%2FqL%2B3oOHaRSlkE0Rx6DQjsKUGUFJnLXGW%2FblYquNHD%2FFxrFBySs1P1elZJuWTgsRxG8WZRRUPi%2FH3DkR1eVluvdZJZ4W5%2FdmLe%2Fbc1USLsQP5sqc%2F9KCWR2RHyDZww92NTjZBzJRcD2dkUhKi6N2TFgZowJU21WIAxTTLi16IUzJ5Euc6cJFRe28WBWuhQIK2AqrCUHDQEi%2FsvQED%2BJznK3hup%2FKpd%2FnOFLug1KHTXbczqkdmx5H93S4782FRgYNchb29WaAFfH%2BmYLXxD8ofH1EVTtVrzFBgVgt2X%2BynimeRvgfB8etAdrJEdfod1uDgS4R4AW6DWjAQ3X%2BwKWBVwL8yFqpocnn8latdldSQMNgJAwMaRBt9X5rDwHxaRa5wgw7Jphllcn1YcNU040fjoK7soQcr7nzid9tZ0%2FBGIc4SF6svb9JVQ5A0KRZOeVLSQbUEXa9ZbUz7TGNWQQV2tU6xP3lZgiw8IdkzKbMZegVNQzFWyyFz2TIBGaijTky8uJPZdP3rfgMSA1sS1g9IqiXtHl84y2KfmmOSBCkyARH8ttQ1XReUd47oR%2BvRPugUznsaV9xVPwh6pbTB9O8eoyUoFzwRU48nt%2BVfPTr4AKb%2Bn8cXkMJmd5cQGOqUB26x5R5luj5zt3pHqo2oDRnIe4UXcRBgTkzoRdiU1wk%2BDYVKRoUe5w9p%2B8mb2YoT8pSaJOW8%2FvMhfGOWmRZ%2B2P82xLPvm%2FtTsxIXJB%2FgxgpjUXeCM1gcML3I8DuMAhrixY2UhFXLn8QcU%2FOWMOulgrV43uWhviXJkOvmvK4Msocd0DBK5gbnF9YDbd6RZm2dUAJwc8TlhRt%2BYsGGL6eetHq3D%2BDjY&X-Amz-Signature=e42240c23e5eecd8bb0cbfb278bdf1f6c6ce40e88817147e6653a2307d51b9a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WCUYJ2F%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T044014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH0X7Wrte69VnulIAJG7cgJnjNJfddHi7qO870CG00xTAiEA%2FqPIPbmx12lMf%2FRZAVMf2zgZAgS9D%2BiCqKt2c3eMaNkqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCgInuDVlPGnaoeIAyrcA%2FvtICYI4Q65PWIOO5vijZYo3Hse2lHIT61BMhs%2F5QZmTaCA5PeEvinFH935d3QTMqXGbEFiC7uIED0sGGOKMtc3uH4o0a0QIdOjHqeZvrlKrU%2BXWKY3LkzVc4hn2bDpxlK7IhWLaVe46SoNh1fKPUEdconY7qiphIsNeJMEoGfBirnywCImEX9%2FSRF8QJOXZw6rPvH%2Bhwb6iP1WneObOGRmQKyBcdyy7XqFNprLKlABa9gThAun%2BvbuXI2UFyhz0K1yxsGM%2B%2BHHE4CfD8LhnZs7bx6H8IX5tFJ0il8HDd1PtQaJhhGf5PFndMRPXlgCce1mvJknPO3SlRmhr%2F4teBhP8xfQO7vQgbYsm2aCRPGsBOTlakg%2BLqxtdgM164sNjtumgd%2B3vZIlG3WOWsKL47S8WVBBjnKP174TjqrgZLSgGxhV%2Fy7V7BzL5163ALk409xZsGxvAYSWrnuaqYaFdhLtPouJ3oLDD3I1pU0XP36TGKJQeAMEgbeEyR%2FmO15z4C5ID1%2FoylxhGfN7asueKHB%2FQJhxXxXi9mvCi6ICWyV2bODG4tGT76LOdXkuNblbrge0TlG5%2F5K3U7F%2BtzY3CgJ0sJVzaw6L0us9fEZ72fz2MgIkl1ltHMDS5KhqMPyd5cQGOqUBUULkA7dkrMmSvPB32e1HYGc5BWErcBeB6MK8lUk54dsQEobPTV0vqfsPTmzXS5Cq5NwV%2Fp%2BaWo%2BPkyVihDz6OUilIXufoJMMraGdNNQDf21FvxJ%2BgjgGwQT%2BHxWl2Ls8Eq59Db8iyHkV1gBa%2BlU0FYw2vPi4GaWb3HJ09pRGVAxnhspPfLpL6Lbyxs6TUv0gzKFUBRjpHLbP5bO1AOIOB%2B73z3wx&X-Amz-Signature=3178d5815030c3a0a79243dd1bfd537cd85f5fcefe70e6605402f685907b8d54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
