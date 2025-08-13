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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VZEQ5DG%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T170123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRIBeA9xsgBlJBn4bMboZ%2FXMHhKwy6szfacrCiHCOqigIgOqbp6PHUdP4sRvQAMH%2BEJrninor9DZ%2B8ZL13%2Bc%2Bbi9sq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDIkEstpnR32W7oAZ5SrcA%2BuQXhB4oerb9x1i5QR6%2B9kBBmMghRlQRlVaxWeHSAoCuwYhV9taSq8D97rXYeABSwi%2BPGEuMTnXjbuutE%2BO4CQ9Dw9VIxIsqjjPTgRvfN%2Bg2hJT8sPBjxIqxg76%2BTnou4ipUivaEpVxuLbtHlh0z%2F48L9fkD8uerYHD4WUq7EARMdC0yowUCm%2FpiKeBvRMNlpKHnJNyyM90IPVavl9u%2F9%2BUL4ehaCwOfViP0TyqCXg3gsGGT57ynrDuVw%2BrutKvOlau3eyOvyXQ62GKNb4pJ4IdMF%2BQdtgvfkXG%2Fd%2BOQn%2BrK%2FNSZJaDDZI7Lq2GntMLZ9Kbrf3%2Fdp2L1owZTTbP1OckhCdiZiLbO9pbdeus5brara8GxNocjmbLj6nwfLdReVmCzzCFgFpETSTgueAh59FZW89VzD8cTK%2BctVvQp0YKBQbDuh%2FGrw9fj%2Fef%2FQsDm%2F5OHKaOjtX1GlRPqYYi8KOrk8Mke7Bjcba1QR2x1zP%2BacW7CB3JhOLsUjYawkMEeaIzQgJNEpV2AsbTqVM%2B6QRGZDmzKljYH86ZUIwyKFD4ZH326Wny5GE3tB7ai2qCP16VcoW9hkPvXDCrfAXdDG%2FVdFmnnBvnmpRL8RTzXLIiUjUegEiOp5IYZeuwMI778sQGOqUB5cV6lXqJKPIwNUdgah6A1O8WWPZVoR6z8MiKOSa%2BRUv25G39OAjkgCBv8gfbaQZ%2Fuy%2F4UYB2TRxLmBiryc6C%2BK4gRSAARbC9KN8WIMH2cgte8xgJsc8BRVb4W7wPV8zbRnTrpIBri%2F0Z2qioNq8xbyDxqdN0lnanbhInHGUioA8LJkVh29JBaHWhIrVcwQ83%2BqEocFgAIEmHD47jfToar7huTton&X-Amz-Signature=d99d5ec699b7ecfe40fdd3b974b7770787aba3bb2e1bae001a3954bd8fc107c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VZEQ5DG%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T170123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRIBeA9xsgBlJBn4bMboZ%2FXMHhKwy6szfacrCiHCOqigIgOqbp6PHUdP4sRvQAMH%2BEJrninor9DZ%2B8ZL13%2Bc%2Bbi9sq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDIkEstpnR32W7oAZ5SrcA%2BuQXhB4oerb9x1i5QR6%2B9kBBmMghRlQRlVaxWeHSAoCuwYhV9taSq8D97rXYeABSwi%2BPGEuMTnXjbuutE%2BO4CQ9Dw9VIxIsqjjPTgRvfN%2Bg2hJT8sPBjxIqxg76%2BTnou4ipUivaEpVxuLbtHlh0z%2F48L9fkD8uerYHD4WUq7EARMdC0yowUCm%2FpiKeBvRMNlpKHnJNyyM90IPVavl9u%2F9%2BUL4ehaCwOfViP0TyqCXg3gsGGT57ynrDuVw%2BrutKvOlau3eyOvyXQ62GKNb4pJ4IdMF%2BQdtgvfkXG%2Fd%2BOQn%2BrK%2FNSZJaDDZI7Lq2GntMLZ9Kbrf3%2Fdp2L1owZTTbP1OckhCdiZiLbO9pbdeus5brara8GxNocjmbLj6nwfLdReVmCzzCFgFpETSTgueAh59FZW89VzD8cTK%2BctVvQp0YKBQbDuh%2FGrw9fj%2Fef%2FQsDm%2F5OHKaOjtX1GlRPqYYi8KOrk8Mke7Bjcba1QR2x1zP%2BacW7CB3JhOLsUjYawkMEeaIzQgJNEpV2AsbTqVM%2B6QRGZDmzKljYH86ZUIwyKFD4ZH326Wny5GE3tB7ai2qCP16VcoW9hkPvXDCrfAXdDG%2FVdFmnnBvnmpRL8RTzXLIiUjUegEiOp5IYZeuwMI778sQGOqUB5cV6lXqJKPIwNUdgah6A1O8WWPZVoR6z8MiKOSa%2BRUv25G39OAjkgCBv8gfbaQZ%2Fuy%2F4UYB2TRxLmBiryc6C%2BK4gRSAARbC9KN8WIMH2cgte8xgJsc8BRVb4W7wPV8zbRnTrpIBri%2F0Z2qioNq8xbyDxqdN0lnanbhInHGUioA8LJkVh29JBaHWhIrVcwQ83%2BqEocFgAIEmHD47jfToar7huTton&X-Amz-Signature=7033c2cf77d6321f0e2fb379ee86ed8344ded09621b994e333a1bcf5e39a180c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VZEQ5DG%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T170123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRIBeA9xsgBlJBn4bMboZ%2FXMHhKwy6szfacrCiHCOqigIgOqbp6PHUdP4sRvQAMH%2BEJrninor9DZ%2B8ZL13%2Bc%2Bbi9sq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDIkEstpnR32W7oAZ5SrcA%2BuQXhB4oerb9x1i5QR6%2B9kBBmMghRlQRlVaxWeHSAoCuwYhV9taSq8D97rXYeABSwi%2BPGEuMTnXjbuutE%2BO4CQ9Dw9VIxIsqjjPTgRvfN%2Bg2hJT8sPBjxIqxg76%2BTnou4ipUivaEpVxuLbtHlh0z%2F48L9fkD8uerYHD4WUq7EARMdC0yowUCm%2FpiKeBvRMNlpKHnJNyyM90IPVavl9u%2F9%2BUL4ehaCwOfViP0TyqCXg3gsGGT57ynrDuVw%2BrutKvOlau3eyOvyXQ62GKNb4pJ4IdMF%2BQdtgvfkXG%2Fd%2BOQn%2BrK%2FNSZJaDDZI7Lq2GntMLZ9Kbrf3%2Fdp2L1owZTTbP1OckhCdiZiLbO9pbdeus5brara8GxNocjmbLj6nwfLdReVmCzzCFgFpETSTgueAh59FZW89VzD8cTK%2BctVvQp0YKBQbDuh%2FGrw9fj%2Fef%2FQsDm%2F5OHKaOjtX1GlRPqYYi8KOrk8Mke7Bjcba1QR2x1zP%2BacW7CB3JhOLsUjYawkMEeaIzQgJNEpV2AsbTqVM%2B6QRGZDmzKljYH86ZUIwyKFD4ZH326Wny5GE3tB7ai2qCP16VcoW9hkPvXDCrfAXdDG%2FVdFmnnBvnmpRL8RTzXLIiUjUegEiOp5IYZeuwMI778sQGOqUB5cV6lXqJKPIwNUdgah6A1O8WWPZVoR6z8MiKOSa%2BRUv25G39OAjkgCBv8gfbaQZ%2Fuy%2F4UYB2TRxLmBiryc6C%2BK4gRSAARbC9KN8WIMH2cgte8xgJsc8BRVb4W7wPV8zbRnTrpIBri%2F0Z2qioNq8xbyDxqdN0lnanbhInHGUioA8LJkVh29JBaHWhIrVcwQ83%2BqEocFgAIEmHD47jfToar7huTton&X-Amz-Signature=4b5dc8744e0da25932aa5863ff03414c2dc136dbac4c6f55ad3a38945f97545f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Z6WTJIT%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T170134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFqY6%2FtIS9qnv2Uu7uzs3M%2Bz%2Fq%2BE806SjIl%2FFpiqQ3cQIgKM5kvG9vTJFFiClygl17WrkmgDcUiTwl7TPcX1vTYXIq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDNNRSbDuFN5zvQoT%2ByrcA70LF3Rq7RmnCasb8SGbgVwiJW73H%2BA%2BdZ3IMeVNoKU07F3vXho4rO3gziPl7imogH9n8EX1%2B3HKAs%2F0sy6%2FsPkcrBx4XFQBQJ0%2BaOQAbIEWqgpQXd7U57dhINj%2FrpXbpsd4HZ55n2MHTyoZcYFdjLyQzwB1QXrzcioQcLCywxcnXVFuTG%2BlVOaLz2ddfWRD6IhVbuwzqFuu0zU9MVwuu5xqp7G80IeGMaDYRcz25uvf1fK66AM9AZRi5qvdXxOEIadhh3VEHczmewfc%2BRdyD%2BqlrBTIKLD65YlZLeKFIOHD4I2KiPSYo0yG%2FEk6ZnzKp0E3xdPnZ92IIlYJdJZ32rmRE2I1MaM2GyHRllcTyrygiLCciNbbc3qD9v1UdjVyzBwAO%2FLXhbjMi8qwsqdP%2BWkxFOVgcXA9byMlc6d%2FCCF3Oo8OElzq%2FOKZwgNg61tHsRoM5u4bcPUAF1je8sNouePfG62CDSy9GJdwlSQllzPLYQj66nZFMKSkVNACxxQI8y0Nh0H%2FjArKXEbM0VqsFK2wSxwH7xzFTOeCgq0baaSp5F%2F0Mk8ii%2FCVotCFUiMhdxOKlaNLlvsqbiMag03MM4iGUuCtG4YNGMZrMzdCUcv6ZWjGxYEyEYbnDE8lMJb88sQGOqUBkB5PvWdwZ11zLBKc9ycPqBnGuIxfhmJG1mY2WkRzwlQ3%2BNEId3ruH2Uvmi5COJTp1Z1cRS4M9kfhMltIThD%2F%2FxMdQbU3tc%2Fulys%2FFsyyi9GUl5VM3apYIkvXFR5rPD3zbGQq9Paj6WJU9%2Fd42PY5QcxWeseOlXWPK18zWJ9tTrgrzh3iQoaxu09CxPki1ILwNT%2FZHCwpHBAVjOx8D3TdTsgrZjkw&X-Amz-Signature=39380dfb3e1626d2525a58e5f01c89fcbfa8dd20ae978c41f8d5752219fef9c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZYSHGY2%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T170134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAHNGJTJytmJF9hfZy8WXGksJyuSGLsYye3CCeWfXd19AiEAzmUaQS0k3e6lyI8WBzyXpljqfzaHUKOzeCb9A8OL%2BGUq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDKULeC4g6BuvzFC%2FwSrcA80S8bCg51pv4J43KjIuc5Z3M0UR4kDJtAja8GP4edz0aqULHt0lRo4Kmcu3b5OYN%2BCU90yyIRbRBvoFdFFZuNOxdHvOh5DdoneWNoUbCgjvjEBHM8rMlgRnXvpXDWjy2VRiLfuE8KGegnGlKNRajw2cDtPWHCa7SkD1YojB3rB6930M8zCUYEmYGVmrOq5kj7Qf1b2RMxKB7t0uyfBXZYqvBmg9spTdki0mqhWjtbFzt7oi%2FGCZhwrAG9zxX5XDFFpfrLgvGw0ji%2FxLI98teo%2BwjFfbHrEzLRMuEIto9Che4j4BGM9iX2EBWZ5FK%2F%2F2edH3eg%2FA1caR7sAcbk81X909yLxmpcpH7%2FJFOEI%2FUsrIo9TOXzDhMPLbxLMMtfkDa3t6IHuVXpcafCW3nHgtCxxRP92snm68OZvt%2FoK%2BxpQ7Kzszh2S1FUKJ5KpVHd5yqCCYYd%2BbEFv%2BckKdw7Sc2nw98eOS5WjYVCZ%2Fs4C7meHpkoS1ah3tOQrwisC77byBUgYCSKz1DCZbuqjo6CZW5qHM3mylnOGL9Quib8w2tyMPj0tGvPPBC1prtTPD5myR8UfX1w6m1BKUh%2FMfsvzpQUbrKd%2FhtqaQW3bO6tN7%2FHOivP9o6OUDPyX7u6BnMJb78sQGOqUBAMkXZD78%2BoP0Np%2FYD6jpKZcYa9JEltaLVhHqW8gIWlDdyJcTZVvdh3zy%2BvZrlvcxdnym7AlPW4Ze4df6O5zeRljdgH5mmeLfcFqN2tLcPaaQuH%2FhnBVDMjgUJ343xMXu5q7PZ%2FmgA%2FmXCr4sBnVfXKKsbyH9JYQkDdi7ZItixd7ddzNmVDIbP%2BCr4Oik5lnm1zvygBPmAU3iN%2F8NRjAVRFM8lIm%2B&X-Amz-Signature=711df1e01e4193b1de077372ddcadd08bbc09239fbf85bdbdcc90ac7c9ebebc9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VZEQ5DG%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T170123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRIBeA9xsgBlJBn4bMboZ%2FXMHhKwy6szfacrCiHCOqigIgOqbp6PHUdP4sRvQAMH%2BEJrninor9DZ%2B8ZL13%2Bc%2Bbi9sq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDIkEstpnR32W7oAZ5SrcA%2BuQXhB4oerb9x1i5QR6%2B9kBBmMghRlQRlVaxWeHSAoCuwYhV9taSq8D97rXYeABSwi%2BPGEuMTnXjbuutE%2BO4CQ9Dw9VIxIsqjjPTgRvfN%2Bg2hJT8sPBjxIqxg76%2BTnou4ipUivaEpVxuLbtHlh0z%2F48L9fkD8uerYHD4WUq7EARMdC0yowUCm%2FpiKeBvRMNlpKHnJNyyM90IPVavl9u%2F9%2BUL4ehaCwOfViP0TyqCXg3gsGGT57ynrDuVw%2BrutKvOlau3eyOvyXQ62GKNb4pJ4IdMF%2BQdtgvfkXG%2Fd%2BOQn%2BrK%2FNSZJaDDZI7Lq2GntMLZ9Kbrf3%2Fdp2L1owZTTbP1OckhCdiZiLbO9pbdeus5brara8GxNocjmbLj6nwfLdReVmCzzCFgFpETSTgueAh59FZW89VzD8cTK%2BctVvQp0YKBQbDuh%2FGrw9fj%2Fef%2FQsDm%2F5OHKaOjtX1GlRPqYYi8KOrk8Mke7Bjcba1QR2x1zP%2BacW7CB3JhOLsUjYawkMEeaIzQgJNEpV2AsbTqVM%2B6QRGZDmzKljYH86ZUIwyKFD4ZH326Wny5GE3tB7ai2qCP16VcoW9hkPvXDCrfAXdDG%2FVdFmnnBvnmpRL8RTzXLIiUjUegEiOp5IYZeuwMI778sQGOqUB5cV6lXqJKPIwNUdgah6A1O8WWPZVoR6z8MiKOSa%2BRUv25G39OAjkgCBv8gfbaQZ%2Fuy%2F4UYB2TRxLmBiryc6C%2BK4gRSAARbC9KN8WIMH2cgte8xgJsc8BRVb4W7wPV8zbRnTrpIBri%2F0Z2qioNq8xbyDxqdN0lnanbhInHGUioA8LJkVh29JBaHWhIrVcwQ83%2BqEocFgAIEmHD47jfToar7huTton&X-Amz-Signature=de306a01006580305720087b8fddd1e042f01c70da4d7ba948ffbce32145f9d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
