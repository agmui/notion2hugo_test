---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2024-09-15T21:40:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2024-09-15T21:40:00.000Z"
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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QS3DKX4B%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T030858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEcDK1Jip%2BalCScEW61pI3VXJ9IlcQAVHXx0kMjFhM%2BwIgK5YTVuIhzbIALCvjcI1KFYInP%2B1dPi2DiNpv9XLpkM8qiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIJrHoMbHx2ZUZRMuCrcA5869AlG7wUJmSDZI5DM0%2FXJJQBMfF8RC5fwdNSY8ph%2Bx5N8cLism4Ixx2fBKTUJipzlgSD9RgcScrOaOYr4fnwmY%2BrYwM7Mf9hbgocl2vXNq1cebnexGEOMIhneHkBppj6gw1trgO3hLq%2BDSPKAzzUbFm8IMU5xSOxc%2FPX9oe6IJylWE6k9Zys5L4jY8oAvSoayADyI9HNRIiTim73tXY2CwgTIYlPJHk0oIiRYq32E%2BYgWdiS74XCH%2B%2FZbGEwueKp9GXHeeYf7tu7trHBuvAFaUaTrQ9dabaGWwXT51%2BbzEQ98d3gAzP5okaMyukEIHfoqSz%2Fh59sUkZQn%2FtV43v3VIc%2FMoA3BR3g%2BOY6PnWXnkhAxJTHZN2SwAmPx4NF4AWilyvpJ%2BCI%2FD0kQOiwDEqrsZUGgvLV6r7xRT7hfTGOBH81BeNb5TRV9oRhkNSZ9LT0L5EifqFAP1phScHBgLbF8vm4Df49Dl3yK4fUxEETS2vVaq4BEIlr0il5yV%2BQdUS3hHrXOEQ6OIrHNcZ7bXD3Njl1LNDh%2FQUQCoBlg0OG%2FPWTGTVcZAwjEBvp2dKmkaDmjdgOMRe7RVgb3IA%2BayIPrEQBCKf8dy3UDPaLYMuVXh8j35mK9EBCX%2BjnXMKvR8LwGOqUBIqxWBwTb92N1kr87wI9NP3v1VjvkaiIGqqCe4HwZS%2FZQgxpJDyH68%2BII5PUrYs%2FFTCpVfhYUFA1jUphaD%2F%2B5Hko1%2FhqENTYX%2Bw3%2Fip8AVMi3ZJvXgBI4IxU7ulb0U%2BLtRpxoRpiQ%2Fw0wqerOed1%2Fy12bu%2FggetjkwiEODWlOMD6BMqCYY7j7X9dOBhgRYEjWadkLfBQ75BgPyIHP6J5lUZeUcTR3&X-Amz-Signature=bae2303d71cbfc61a8553923cb0261fe4e2af698e3cd8aacd86594347d0f2b01&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QS3DKX4B%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T030858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEcDK1Jip%2BalCScEW61pI3VXJ9IlcQAVHXx0kMjFhM%2BwIgK5YTVuIhzbIALCvjcI1KFYInP%2B1dPi2DiNpv9XLpkM8qiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIJrHoMbHx2ZUZRMuCrcA5869AlG7wUJmSDZI5DM0%2FXJJQBMfF8RC5fwdNSY8ph%2Bx5N8cLism4Ixx2fBKTUJipzlgSD9RgcScrOaOYr4fnwmY%2BrYwM7Mf9hbgocl2vXNq1cebnexGEOMIhneHkBppj6gw1trgO3hLq%2BDSPKAzzUbFm8IMU5xSOxc%2FPX9oe6IJylWE6k9Zys5L4jY8oAvSoayADyI9HNRIiTim73tXY2CwgTIYlPJHk0oIiRYq32E%2BYgWdiS74XCH%2B%2FZbGEwueKp9GXHeeYf7tu7trHBuvAFaUaTrQ9dabaGWwXT51%2BbzEQ98d3gAzP5okaMyukEIHfoqSz%2Fh59sUkZQn%2FtV43v3VIc%2FMoA3BR3g%2BOY6PnWXnkhAxJTHZN2SwAmPx4NF4AWilyvpJ%2BCI%2FD0kQOiwDEqrsZUGgvLV6r7xRT7hfTGOBH81BeNb5TRV9oRhkNSZ9LT0L5EifqFAP1phScHBgLbF8vm4Df49Dl3yK4fUxEETS2vVaq4BEIlr0il5yV%2BQdUS3hHrXOEQ6OIrHNcZ7bXD3Njl1LNDh%2FQUQCoBlg0OG%2FPWTGTVcZAwjEBvp2dKmkaDmjdgOMRe7RVgb3IA%2BayIPrEQBCKf8dy3UDPaLYMuVXh8j35mK9EBCX%2BjnXMKvR8LwGOqUBIqxWBwTb92N1kr87wI9NP3v1VjvkaiIGqqCe4HwZS%2FZQgxpJDyH68%2BII5PUrYs%2FFTCpVfhYUFA1jUphaD%2F%2B5Hko1%2FhqENTYX%2Bw3%2Fip8AVMi3ZJvXgBI4IxU7ulb0U%2BLtRpxoRpiQ%2Fw0wqerOed1%2Fy12bu%2FggetjkwiEODWlOMD6BMqCYY7j7X9dOBhgRYEjWadkLfBQ75BgPyIHP6J5lUZeUcTR3&X-Amz-Signature=7f79662f62e71a0475025ee7ab25aea62f02efe073aefc1b15205b9afde5abf3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFYN6XGB%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T030901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2BdhsYceak06NIybyZCfDqZx5ZP8POVl67mmsoJi1tPAiEA7jvjuD90SXSXyvnUuk%2BnHikXrNmHOFVSDyUUveJQ%2BvkqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI0Uk63mZ6eSQGlVPircA9dupa69eR6i8oqsEq4mTLIgHpuVdshLVPxFq1jr50gdKIH7PuLliy20616k0%2BPJqw287sh7mmTABYxB8uUvzKKtfEQNR3gZkgNTBUt15aFig69MySqnxfMg%2Fy2QGrfkUc%2FemKvlgsdOZxZbj7u1ZWxzJu4jU8QTXjvQyoD9gO02guQcwkJjZSxlq0P6lkokDUv36%2FcyVv54RDpwzhmFyKBvmSCdVaMrHKagoyeXlzmkmf8ZOv9Jo%2BR3NVEX%2F29%2FAs8yp9ejk75mxeEmyzY2tBdEMk6dzaQ2rZero06WPCwPgDmV5G8L9kf0wf%2FikOfMG92caam3rJaBs%2F4x4JXneNMHzlWR4swiN1zxB3mM10v1hJIR0IfMx37T5wkWF%2FWLbQlTrx0i%2BHpVyrieSo975%2BjQktH4r6NgWzqlreSHW6xJ7H%2Br7Uzuv9efIvhd8PG6bwHxejB24%2FwRoYQvRucGxAiFn946PHJMWW27lfUaL3EF%2FDL6zW8%2B9E%2FKthKkvn%2FkeT6h%2F0oG8NLp4L6Aq%2BYzPoErjWFzbgF5bcMgn8rEMnDqbCeWZz8TrFb3aXuZap8xuWSVFpXfJkVvZ2SVQqOCn2L%2Fqhx6pRfdojEnYTtWBY3AS3xEGQFPZ9xUB122MNrR8LwGOqUBBMhGGyVSq1CbF%2F8PZbifXCkMPQiMg%2FLpqZw8%2BO6Uhnax5c5ZW3RK2gfoBm0uNa8YJ6d763Z8%2FlZf5LHEO%2BeqgkTJJus0xKGofo%2BS4DUtgBLxygEdBeJOyj2%2Bv3jTuWbY6ogzm53Q4gAvy0aYQHk3gy8uoNzbvE%2BueluRMSbHoJv1rNFV11MEVZWtmlKUWITUTflMc0pf9uY0Ouf99Rj6YMTnTcRC&X-Amz-Signature=3703c3fe6d9c1bd1a36aaaafbc092efd6cad687b8a441f4cf57905c82a7f4e99&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCHD3LET%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T030901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID11NVFkzNxmho4m8pPZhG%2BxsduIEc10b58TNGJSug7qAiEAqmnRtcoLx66%2Ba0iAxhrlQHhPlxPSW5oopcBcuI4cJ%2BwqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL6DVlzEUgojVkEOIyrcA9danV57Z00kTQXwWbJGIeSew3%2BcbAXY0sXjWmFftHgIFEHy6jELtpcZIGRvrQn9GIzmojA2ht4hVpISr8bgK%2BrI%2FPWHXgy5VUK7CEBWSpcN%2FGMsC6EdxNE8dr%2BNgJ1z9rnEH11et%2BY%2BrMizd7gOgIBw5%2Bct0xTuLl%2BOSfe8OTt6SURW78VdyaL8h4puTEeOHzy0GILGWXW4W2f%2B%2BwCLBYVt%2B%2BcrfM2jckN%2FE3GTyzfUxS1wAf1ideMm99c3Mru2upquDEBA7JBx62N%2B99%2F%2FyjDsE4e7A%2BZtgd9DMgDoNw6Uazxkpb9hbM2UBCI0XuwdQ73e6mZkLWgEKSlyZchjuVa5tBXUoJKKPWd0hTMd2pkZaAbeWO1zGbwJbR7CN2Qq6%2F1ooAoq9c%2FCmt9SNCbq4c%2Bg6PAETymOI8CWOJvUMDJelRYT%2Fn3qP34moss%2FvRCGF0J075dh34iTBm4Mjp6FrEN%2FDNeKthwy7d8R1uRFXILJhfv8zPLdq1TDzIa0ZEm9vG4PqyogQaDTsV6s0D3AlJBtPfoHujmMwRDkEaG1dXs0Kap0g3dFNj2bsb5z4n2f3aNM87wUSemyyjr91pfSDZd5I0RRqpaoCv7UcCK55BwilHfkSKki9Y%2FYhM1SMIXT8LwGOqUB81iwpQzjVHE%2BC4i4UwP8WAulqzoEzAB0%2BAcJ7R%2BrU80Fm%2FcPDy66cQzdmE0GluAd%2F1UnkfioGxvsgVATPyR9WdBEjbYc%2BuaTaFhW2IhauNU6SAwoaPBN28od46T13xeI5h%2BmK9RjHdOVbeiY5b0ybAwcOcKLUrGs443oQ88v6POx9HjnW01G76vAYr0RF2I5j%2Fp9%2BVMKYbr%2Bhxpab5UK%2BXJJJyuI&X-Amz-Signature=c6fe09e7a2aff61a2e62e7945d4ffaa81382cf8447225671ade78f1d30a2e701&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QS3DKX4B%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T030858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEcDK1Jip%2BalCScEW61pI3VXJ9IlcQAVHXx0kMjFhM%2BwIgK5YTVuIhzbIALCvjcI1KFYInP%2B1dPi2DiNpv9XLpkM8qiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIJrHoMbHx2ZUZRMuCrcA5869AlG7wUJmSDZI5DM0%2FXJJQBMfF8RC5fwdNSY8ph%2Bx5N8cLism4Ixx2fBKTUJipzlgSD9RgcScrOaOYr4fnwmY%2BrYwM7Mf9hbgocl2vXNq1cebnexGEOMIhneHkBppj6gw1trgO3hLq%2BDSPKAzzUbFm8IMU5xSOxc%2FPX9oe6IJylWE6k9Zys5L4jY8oAvSoayADyI9HNRIiTim73tXY2CwgTIYlPJHk0oIiRYq32E%2BYgWdiS74XCH%2B%2FZbGEwueKp9GXHeeYf7tu7trHBuvAFaUaTrQ9dabaGWwXT51%2BbzEQ98d3gAzP5okaMyukEIHfoqSz%2Fh59sUkZQn%2FtV43v3VIc%2FMoA3BR3g%2BOY6PnWXnkhAxJTHZN2SwAmPx4NF4AWilyvpJ%2BCI%2FD0kQOiwDEqrsZUGgvLV6r7xRT7hfTGOBH81BeNb5TRV9oRhkNSZ9LT0L5EifqFAP1phScHBgLbF8vm4Df49Dl3yK4fUxEETS2vVaq4BEIlr0il5yV%2BQdUS3hHrXOEQ6OIrHNcZ7bXD3Njl1LNDh%2FQUQCoBlg0OG%2FPWTGTVcZAwjEBvp2dKmkaDmjdgOMRe7RVgb3IA%2BayIPrEQBCKf8dy3UDPaLYMuVXh8j35mK9EBCX%2BjnXMKvR8LwGOqUBIqxWBwTb92N1kr87wI9NP3v1VjvkaiIGqqCe4HwZS%2FZQgxpJDyH68%2BII5PUrYs%2FFTCpVfhYUFA1jUphaD%2F%2B5Hko1%2FhqENTYX%2Bw3%2Fip8AVMi3ZJvXgBI4IxU7ulb0U%2BLtRpxoRpiQ%2Fw0wqerOed1%2Fy12bu%2FggetjkwiEODWlOMD6BMqCYY7j7X9dOBhgRYEjWadkLfBQ75BgPyIHP6J5lUZeUcTR3&X-Amz-Signature=be9dfebe3f2a0ca80488052613ea331b865f903178e777d13de549c21dcc7acc&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
