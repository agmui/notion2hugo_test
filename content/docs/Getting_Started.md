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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672DH3Z5F%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T100924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIEEofPIkOGbpAttTiih%2Ft%2BBDOemOv0m8eoJNebVFPYNaAiA01s2hEYgLuAKk7GQxETWGxz%2B0O3MswXZzUu7LZnRQOir%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMdX8cQRRqDNOnhF7BKtwDbN5e5J9Q0K7INaQfIUzfOlEbiiFATxdeY1Rs6L200SvdQOYBF4wVyUUL3wX3ifY5a6Db0aeBHpNtFXqp5H9%2FbXSOwFTgsNiy1PzgiFPbPiCqtgASwFEzzENubPyHaI9AKx3sD6%2FHmqMG5HaT9zjKvNDkGwkwHihPdxQhK9KbQau%2BLy2SylsHq8cg%2Bd1J0LXEvD36LpQXqx1mjuJPOgQTasnbS0Ax3WISKRoIhQdNoVmUyLPr4vl87KDInpwVIcU5gD2sy%2Bi5h9ok5Odr97CIwJ6A10F1OjeTRh%2ByAm0u%2FYdDVQPgZGwyiXPGf7rwqGy9%2BqSUiJGwvsbJkMiCGBiQxXMIJwmy3wZmlbaOvzagRem3ms%2BvmtrEXn5sYemFA4JIprD7w5SWH4kTX6JenzVVh%2Ft7M1OFlB9bS0xuQDioF8HMRLbEDuz5QcV%2Fnayk%2BX1iNC1%2FlXQFUizH5q7BaxKvUUNM4q5XyXRvb9w5DmcUdeRM%2BnNtqu9o8MrcdwCBS%2B2fsvIOFtjdMBNeoTwYmm1Ij%2B1gYv%2BTshDiDcw%2BMPWwYhGhewSyU7pezf9KyiRJCfbDiORkNV9hZBNP86hzWSIpwSrmYXGWwvKY%2Fbz8hCXpfyMN6vD%2Fyo1MByu%2BxDQwhJb0wgY6pgEmwGGTOGS1AvF5ykig8UeCdU%2B8vMZSRHOovWmpY8pk8FaDa5W02wuJVaSHBb%2FVuvVa1IsYjcWXoarWtCmGUekak%2BwLZbSaMXIkGxTucH5el4X4bVajZyzUGOYxBwLbqADYCk5pjff7XhIzNf7qPZQZKRZ7cXR40liFNsKbo7IhW2VseolKbrxgduvxyjdiNeaVc5ho61cQHfMFrMXEPwHrvCjPv%2FN%2F&X-Amz-Signature=e3b7f696b87b329e7850685773fadddcea9bab62e2982df2f15f78ce2fe0a66a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672DH3Z5F%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T100924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIEEofPIkOGbpAttTiih%2Ft%2BBDOemOv0m8eoJNebVFPYNaAiA01s2hEYgLuAKk7GQxETWGxz%2B0O3MswXZzUu7LZnRQOir%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMdX8cQRRqDNOnhF7BKtwDbN5e5J9Q0K7INaQfIUzfOlEbiiFATxdeY1Rs6L200SvdQOYBF4wVyUUL3wX3ifY5a6Db0aeBHpNtFXqp5H9%2FbXSOwFTgsNiy1PzgiFPbPiCqtgASwFEzzENubPyHaI9AKx3sD6%2FHmqMG5HaT9zjKvNDkGwkwHihPdxQhK9KbQau%2BLy2SylsHq8cg%2Bd1J0LXEvD36LpQXqx1mjuJPOgQTasnbS0Ax3WISKRoIhQdNoVmUyLPr4vl87KDInpwVIcU5gD2sy%2Bi5h9ok5Odr97CIwJ6A10F1OjeTRh%2ByAm0u%2FYdDVQPgZGwyiXPGf7rwqGy9%2BqSUiJGwvsbJkMiCGBiQxXMIJwmy3wZmlbaOvzagRem3ms%2BvmtrEXn5sYemFA4JIprD7w5SWH4kTX6JenzVVh%2Ft7M1OFlB9bS0xuQDioF8HMRLbEDuz5QcV%2Fnayk%2BX1iNC1%2FlXQFUizH5q7BaxKvUUNM4q5XyXRvb9w5DmcUdeRM%2BnNtqu9o8MrcdwCBS%2B2fsvIOFtjdMBNeoTwYmm1Ij%2B1gYv%2BTshDiDcw%2BMPWwYhGhewSyU7pezf9KyiRJCfbDiORkNV9hZBNP86hzWSIpwSrmYXGWwvKY%2Fbz8hCXpfyMN6vD%2Fyo1MByu%2BxDQwhJb0wgY6pgEmwGGTOGS1AvF5ykig8UeCdU%2B8vMZSRHOovWmpY8pk8FaDa5W02wuJVaSHBb%2FVuvVa1IsYjcWXoarWtCmGUekak%2BwLZbSaMXIkGxTucH5el4X4bVajZyzUGOYxBwLbqADYCk5pjff7XhIzNf7qPZQZKRZ7cXR40liFNsKbo7IhW2VseolKbrxgduvxyjdiNeaVc5ho61cQHfMFrMXEPwHrvCjPv%2FN%2F&X-Amz-Signature=cb958321bfc7db4e83fb291684ea160ba642ff0de1dbb868f0e2c920fb249112&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672DH3Z5F%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T100924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIEEofPIkOGbpAttTiih%2Ft%2BBDOemOv0m8eoJNebVFPYNaAiA01s2hEYgLuAKk7GQxETWGxz%2B0O3MswXZzUu7LZnRQOir%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMdX8cQRRqDNOnhF7BKtwDbN5e5J9Q0K7INaQfIUzfOlEbiiFATxdeY1Rs6L200SvdQOYBF4wVyUUL3wX3ifY5a6Db0aeBHpNtFXqp5H9%2FbXSOwFTgsNiy1PzgiFPbPiCqtgASwFEzzENubPyHaI9AKx3sD6%2FHmqMG5HaT9zjKvNDkGwkwHihPdxQhK9KbQau%2BLy2SylsHq8cg%2Bd1J0LXEvD36LpQXqx1mjuJPOgQTasnbS0Ax3WISKRoIhQdNoVmUyLPr4vl87KDInpwVIcU5gD2sy%2Bi5h9ok5Odr97CIwJ6A10F1OjeTRh%2ByAm0u%2FYdDVQPgZGwyiXPGf7rwqGy9%2BqSUiJGwvsbJkMiCGBiQxXMIJwmy3wZmlbaOvzagRem3ms%2BvmtrEXn5sYemFA4JIprD7w5SWH4kTX6JenzVVh%2Ft7M1OFlB9bS0xuQDioF8HMRLbEDuz5QcV%2Fnayk%2BX1iNC1%2FlXQFUizH5q7BaxKvUUNM4q5XyXRvb9w5DmcUdeRM%2BnNtqu9o8MrcdwCBS%2B2fsvIOFtjdMBNeoTwYmm1Ij%2B1gYv%2BTshDiDcw%2BMPWwYhGhewSyU7pezf9KyiRJCfbDiORkNV9hZBNP86hzWSIpwSrmYXGWwvKY%2Fbz8hCXpfyMN6vD%2Fyo1MByu%2BxDQwhJb0wgY6pgEmwGGTOGS1AvF5ykig8UeCdU%2B8vMZSRHOovWmpY8pk8FaDa5W02wuJVaSHBb%2FVuvVa1IsYjcWXoarWtCmGUekak%2BwLZbSaMXIkGxTucH5el4X4bVajZyzUGOYxBwLbqADYCk5pjff7XhIzNf7qPZQZKRZ7cXR40liFNsKbo7IhW2VseolKbrxgduvxyjdiNeaVc5ho61cQHfMFrMXEPwHrvCjPv%2FN%2F&X-Amz-Signature=8fb80c142ca6470542d50b7d7ac82200c400aee04a4d6061d5434b3bc96062a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DOEVGXZ%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T100925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQC1fs6p20XB%2BmflJtl7rbCaUL%2BNvxyUXc9WKABxeVwYuAIgIb4O6iMzzjcK57FHLfwj4AAdGduM3b3dfQkUjRplS%2Bsq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDLzl4AUPU2PGmOKSWyrcAyANVviEwAPgrYTmHAYOTUumOA0aO3ISQeXqcpjnHzayjYsXeR1tqSkzMzpT9CJ6D2UugysE2xkO8BEZjXOESS%2FK1EuTFyg0jvQRo9HKPfIhDJi6EFZ%2B%2BNffwd0UoqGMikmU9wq6ZQJ6gvJ7YSS9GXG8487mvSeP0YKneDhjNl0oJVymEZQIcg47h%2BF1Mcqgu3uHnF3TgCCPyZeajAW1lm5L8PgS3Uxiv7ETYnu%2FQJmpdwueNmTJGYfkCUuRdYyeKsPW50lwOR%2BRYkUIESySv%2B%2ByIkxbnEqcyttBY9dWkJdP4YVlc0jFEMfeXFBSSMEE3zxRzu7CZ0ewseoZlVUiVrMWyUTm4VGXgqk06P87kdRQK%2FaluQ44mHHmIQoFKjWRH%2FJlQj08xLT8EklPzWKLGsAxdQ%2BIcYsz2ZK9AB5mM5BgbHZvpczO0f355M2HWZhOetYKESpsNpwk2RxedPLR5vrnNdYIt1wIQelbpR7qRAEqn3c3UOjTpssdXmtpijNWtku5gpanGOOGqFBenxOspk41HU1R2%2F4AudQGxHwqbyaKT7f0Jt4Y6WiCQNGHYxx%2F2Y7WRvhOUMq9y%2B9YcfpjMl%2ByAGlw5KOHO9PQuAC%2BN%2F4NcKU7dcMEdXUfxVPcMKiW9MIGOqUBdUGrL3W0%2FUsFDSpegljBJ7ocIYfmzk7fRUrtktWpAHXETHpsPiL8ZwEI0pzWtxPV9aNRmLMT10fZmUEQswgC%2F%2BGRXCFxvQyJu%2FVb4qbznce8O6eyudIFKk6Dop1eu%2B6WlOejOcHjBfQ8f8m6LTogKe55qNS7YC%2Fl4gzdz4sYQQbtTh1LLOEWS1IAkb2LU%2BKJtioz6vOPgj4ko%2FZVbrwfXtNjHAzR&X-Amz-Signature=94c52e9b63ae54cf2532552409e16910c6e73632e65d5a7751352b3aa96be317&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEFBEQP7%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T100925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCICc0iDHP1A4Y%2BmMK4UP8O8BkFuUk1Oft44WG6iTexSB4AiBZXCvUoyVAg66I0DY67pw%2Bj%2FUXj0U8nVlo49UrugKJ2ir%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMNR%2FHnuRcjriBy1l6KtwDB%2F%2FsCx1ezC%2BSxyNU97MK2TR9a0sA7FbJ6gH24tJwlZV9ToZkfW83Sct%2B9hpbuG0OK2uP8ixrskZ1T2ojBpIafqMQgxPeAxV4tyMZCso9NPmmJFRZl30VVLk4Uk5KMeA3aTDBJz7meSMao0l%2FR4oeKg4h4PxM7a2LP%2FbU1f6Ut7vUN4D9OKIBEJegGU71flTUudWWz%2BODs78zPBKGVaBeUxMrpbZB%2FtGprA6mSRwgYH5E6Ixfit5Nc7Oah88rvhbfa6Ru8xHzG%2B1VUwJgIy3kgUPMxyITpMEeQ7dCo5g3kIqiucFx3%2BIPJuF5FG5byRP95nCtXi8B2175Q%2FI1wWCYd9EpEwulUsoBXNgbhLn4QxzadUm992nrU%2F3cToiSrxXW%2F%2Bj82P9oN2gRzUEqu8huYPLNYzT9bi%2FgkO82p9Edl0YiNyalzidl0060m6Wajqth2gQFT9rbAI%2Bke9JgRR%2FnUNZHMWZwKnQpDhE25hsfGzO%2BEHAQY7Du0d%2BuSotfb0bwJssm0pgwZAPvMHRtsaP7btsRnTrs0oMfkynixQ%2BGD8sos5K34wqtrkAhgA1qMKbB1AZAf7nreBrM3sVaYmf7Ah%2Bgq2n0LxucAd%2BL0YtCALsN5Y%2F%2FhAADFwkapSww45b0wgY6pgGw0v%2BwuWMCurIBDMUtCugOhuuBekxJyocMPsqxfp7Lou3bq7eUyJWZyPGxi7%2BtWYfvyltacA8ft6iEJdQQDkEIaw9Z2jfqFW%2F7aU%2B8yBK8IsvXlBYVOFRQLrdt4IAd9O6WwimJyAyICcPxuehd6BtyDg6uFN3VGQNG2OWKSEAfl26lMfbEYsYbzTJsWySMrRzUZ8hDklwDtqm8n8bM2vfr3Qa1capn&X-Amz-Signature=62171adaded89e977f2a1ee24f45fb54710753e44839a225581d3e28a124ea8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672DH3Z5F%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T100924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIEEofPIkOGbpAttTiih%2Ft%2BBDOemOv0m8eoJNebVFPYNaAiA01s2hEYgLuAKk7GQxETWGxz%2B0O3MswXZzUu7LZnRQOir%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMdX8cQRRqDNOnhF7BKtwDbN5e5J9Q0K7INaQfIUzfOlEbiiFATxdeY1Rs6L200SvdQOYBF4wVyUUL3wX3ifY5a6Db0aeBHpNtFXqp5H9%2FbXSOwFTgsNiy1PzgiFPbPiCqtgASwFEzzENubPyHaI9AKx3sD6%2FHmqMG5HaT9zjKvNDkGwkwHihPdxQhK9KbQau%2BLy2SylsHq8cg%2Bd1J0LXEvD36LpQXqx1mjuJPOgQTasnbS0Ax3WISKRoIhQdNoVmUyLPr4vl87KDInpwVIcU5gD2sy%2Bi5h9ok5Odr97CIwJ6A10F1OjeTRh%2ByAm0u%2FYdDVQPgZGwyiXPGf7rwqGy9%2BqSUiJGwvsbJkMiCGBiQxXMIJwmy3wZmlbaOvzagRem3ms%2BvmtrEXn5sYemFA4JIprD7w5SWH4kTX6JenzVVh%2Ft7M1OFlB9bS0xuQDioF8HMRLbEDuz5QcV%2Fnayk%2BX1iNC1%2FlXQFUizH5q7BaxKvUUNM4q5XyXRvb9w5DmcUdeRM%2BnNtqu9o8MrcdwCBS%2B2fsvIOFtjdMBNeoTwYmm1Ij%2B1gYv%2BTshDiDcw%2BMPWwYhGhewSyU7pezf9KyiRJCfbDiORkNV9hZBNP86hzWSIpwSrmYXGWwvKY%2Fbz8hCXpfyMN6vD%2Fyo1MByu%2BxDQwhJb0wgY6pgEmwGGTOGS1AvF5ykig8UeCdU%2B8vMZSRHOovWmpY8pk8FaDa5W02wuJVaSHBb%2FVuvVa1IsYjcWXoarWtCmGUekak%2BwLZbSaMXIkGxTucH5el4X4bVajZyzUGOYxBwLbqADYCk5pjff7XhIzNf7qPZQZKRZ7cXR40liFNsKbo7IhW2VseolKbrxgduvxyjdiNeaVc5ho61cQHfMFrMXEPwHrvCjPv%2FN%2F&X-Amz-Signature=d32cdee299872b29299fa14ba7f6afb109bec928c386038661f809825021afae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
