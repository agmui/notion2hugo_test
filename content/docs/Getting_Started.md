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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NK3474M%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T100859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGDNoea8bVabI%2F3YDYZXpvHPR3OqfLoBnxtl%2FZaJ5yzCAiEAlx3qy2KhmOSSvT%2BPSAdB6fqYT4EDV1SBu0CfA%2FbnyBQqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDBQto3Qsv3h85TM%2FircA5SWy%2B3ggWqD0hSfK9ThiByyjY6AIzUYL4vo5SpkFUd3cBR6Rcl3lSoVaqKTytbkUv2J%2FZACwREsF80AlLZ6UALvaZYdjYozvqX%2FduFwdHibRE0G0rU1vewaqCnJpoCrMnc%2BlBk09RFrf68hT29GOgKNI6M6P94JS37jVix4t3iXPcWkBLKNpjhZhFFMl8mRpZE0ooHppZ0uZpyDYpnkG%2BpUlsZBdo2Mc3tkX0EClfnnHgsATqW4iW8qYBWMH4jEGkYvrwS33jhAuuJ3nN45LrD%2Bfjo9OhJ1btc0%2F1rzYc3xZA0i0G%2Bn11S1Urf5Pq%2Fdql5Xp09Sv3%2BA%2FDzIE9amtxbQxQFGvVx1S11p9UCQbaXUl9PioVB2b23Lk8BU35bCkjAgD7CJrc%2FxNGbH02D8WO%2FPg5gzVrDSBiUSPmHM1zsYXbR55XqxCF2hC8ND2%2B4CT%2BpVgYCCci2hl7DPyT%2B8UXp2ARYRSUOJiFNYCzRzW8t1AiP6jQPgyS8K0i0ITcs4oXGR7wByVYuS3uC4kvmFrLxUlLrpNjYGBsUVdgZdnEHCFo65tfkqFwpzTbOF8lNzNDgWXMjccXmhOWQFt%2BVmZr22tn%2FUfenRj18sUtJjSdu%2BYS2S1nvrlRL%2BOcIwMILCyr4GOqUBP5tvdhOGG26RjAMiQbVyNgYa%2BUIZTp2Mj%2F8b8zHTM2sulUish%2FK8pmLm%2BuRrxF9njIogTf9Vf7cfCoRezAQOkAmkFqpo1TA%2FZ82ZlYB6arUkuV1kTrk54SwM4snZ%2BYE1Evaljz%2F6TveZCM1Lkv7%2Fy%2F4ZVeQ9%2FWDNEgxMmfBV2KskVEjha78Wh2Fc%2FCUixnbtiBTZjtLM5mEIDSqqb9LSBo9kVKlW&X-Amz-Signature=201ae36366a2941af9c55e9929b932e0b2d580d63580650f9e553abaa6ac69fa&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NK3474M%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T100859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGDNoea8bVabI%2F3YDYZXpvHPR3OqfLoBnxtl%2FZaJ5yzCAiEAlx3qy2KhmOSSvT%2BPSAdB6fqYT4EDV1SBu0CfA%2FbnyBQqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDBQto3Qsv3h85TM%2FircA5SWy%2B3ggWqD0hSfK9ThiByyjY6AIzUYL4vo5SpkFUd3cBR6Rcl3lSoVaqKTytbkUv2J%2FZACwREsF80AlLZ6UALvaZYdjYozvqX%2FduFwdHibRE0G0rU1vewaqCnJpoCrMnc%2BlBk09RFrf68hT29GOgKNI6M6P94JS37jVix4t3iXPcWkBLKNpjhZhFFMl8mRpZE0ooHppZ0uZpyDYpnkG%2BpUlsZBdo2Mc3tkX0EClfnnHgsATqW4iW8qYBWMH4jEGkYvrwS33jhAuuJ3nN45LrD%2Bfjo9OhJ1btc0%2F1rzYc3xZA0i0G%2Bn11S1Urf5Pq%2Fdql5Xp09Sv3%2BA%2FDzIE9amtxbQxQFGvVx1S11p9UCQbaXUl9PioVB2b23Lk8BU35bCkjAgD7CJrc%2FxNGbH02D8WO%2FPg5gzVrDSBiUSPmHM1zsYXbR55XqxCF2hC8ND2%2B4CT%2BpVgYCCci2hl7DPyT%2B8UXp2ARYRSUOJiFNYCzRzW8t1AiP6jQPgyS8K0i0ITcs4oXGR7wByVYuS3uC4kvmFrLxUlLrpNjYGBsUVdgZdnEHCFo65tfkqFwpzTbOF8lNzNDgWXMjccXmhOWQFt%2BVmZr22tn%2FUfenRj18sUtJjSdu%2BYS2S1nvrlRL%2BOcIwMILCyr4GOqUBP5tvdhOGG26RjAMiQbVyNgYa%2BUIZTp2Mj%2F8b8zHTM2sulUish%2FK8pmLm%2BuRrxF9njIogTf9Vf7cfCoRezAQOkAmkFqpo1TA%2FZ82ZlYB6arUkuV1kTrk54SwM4snZ%2BYE1Evaljz%2F6TveZCM1Lkv7%2Fy%2F4ZVeQ9%2FWDNEgxMmfBV2KskVEjha78Wh2Fc%2FCUixnbtiBTZjtLM5mEIDSqqb9LSBo9kVKlW&X-Amz-Signature=2aa46f267e5f0cbe5e8040be631604f2e3afb12e21de5109eb3814bf2e2eb4f4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WM6PVXK%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T100901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7uO2kzbUj8wmpjptu2KCDPpEgCuSDvRLFJD5UNgYbywIgfkvjUB7dW4M4Uu3UTvs85KVweDV2ZL7IB2QA1B2EiW4qiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGESDxudhXES8DIgFCrcA2SPjY1Wzw3XO3U7MGa7G34Q20TUW1OZ2AFnO4dkeWhgmIPZ2s9gIjLe4EpXUVSrE3WxehDhhFefSYncWw%2BgR3jjX6%2FAPD8s8EwPhiBAUQA6LxlTtJ9n4AKd3Shu5262Gh9V0u3CS2xIKiyvLeu%2BeSpB%2FRBEf94LsItwoqONTf%2BoF7PywnYUUDHE%2Fj5lwHWDAicd%2FKM%2BnThZlRSN0sLU3OGLkHC3c1KAzUQjE8scgNZmbFpR7EP3%2BNEuuAnCDqROnvgtlr%2FCNZ0NjQHrDclBwOY58uViuvwEwHTRcFYuDmupAUoILalDf%2BYrjh4pbWlPvwX7NWjcXheY4sQz%2BcDQVTbmaYH5rx9QLJrdPp7LbMfCGGgr3ggl68bypofMM6IItHwDREvrbjvuRVImvZMzdlUEBTQhWZ0Kwnmeg%2FheGnRcndEuW6SYVcDOz4dkbJ0zRlCljGvvZvNggnQOvQ0%2FP%2Bvi24EuMaXAaOG%2Bc%2FAhEFj1fr3SZBEf2O7CPJWt1xqFaYajw0%2FpDA8G3g4XalNXdmcjZtquAJAvoq%2FyhBJsO0bdrJMQBn3eoUj3unZ6Xoh78cJdVvwhcE0DnL3xLvMPSl0hCoX6Y3kVPxreciv%2B%2FegJMls4eIpqL68WacwGMObByr4GOqUBM7CdF0KcQmJGtVflPF6agW%2BEn7nFCaN4XMkwidfYRAyGnek15N3VUJbm3fUoBDpRW%2B1cQljiierffLq05qamTxi%2B%2BKsrM2uI6peiJuhXEz6Q2%2FEweZOC%2FwHgjIROm%2FN36jP01Zagc7e2LtDGeffH%2BCEItrBEmnKE7DFGvP39pWtW%2BeovTYu3OZUGgHq%2FLdlEefsJpZawxzerkCwSWA4lKc1U8rSK&X-Amz-Signature=4d3d7069e46fe08510ab5a4478776eecf6a1fcb5a4f4238931821af254a7ebd1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GNCHY3Z%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T100901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLHfygTmOPdhj0NhKatgxqv5WpFUylCPx2ojU0hWFLNAIgS6ZUdgsXsRoPQMtCbGmbixsj2z3V3r9vh74GV8lQQDEqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEkzhMsqB%2FOJNwnRNSrcA48UFMEQkyThPOEZxZ3pe0LUzjqSZ88nIwrSQXd2azfiLW17BTOJLXBTgf1QUC5R2eBeBt819p0agr6%2FW8ebG1QfH4ty9jilYljpz319O0Kaq1HsIB4NCIKbwQV7whUW0E36aV%2BPnEQHzyzgxd6HaaDgMaDsbnV%2BOPQRgUiEjQpKlDBMipjD%2BaHDy6QXWalit798Q5gNL5xYwhLZrrhPyi7BScFUSI0jd20VkOgVs985PvEPvzoNfsOJZPe8BkHdirNJ7tvxJeD1%2BW5MeawsQw5GHhT1FvTWAlvlyBybIKVHyfphmtx4gI3MK9fgeCnNdIj8nr0ONLFArDogIsNoORHxh%2BULDSDCK%2Bh5kQ8ZoEqCYd0DHoVCzFx6xHI6I%2B6YPE3H04GmBWy3W2huNsQd9nym5Mu9vkDgoTeWdCY3OkhXRZyftozWq9s7%2BSkekYzZjMmbfj36dzKik2TmCE6pOwN1Dp9ZXj%2B%2FfgpeOFtfMmrRteOfR%2FY5eQCpeL0fTufiBLBImShwXcZy6LQoXhIbcgj0NTgfVyBAS72nurRrOzx2iCmw1ujWedkMeacaCPsG1dlV2WgQyz%2BPBTJphS9bv9WqeS9FzXZR2olQUQfmv61L%2F%2B%2BQkytSFu1AgDlBMJDByr4GOqUBZwu%2Fn4MXm5AvFHSl454NJ3VjX5x8AZ0vCV1js0VwB4yKqxYbhuiJPuM6KPhA09WsyHi66dbN9%2FuNaI9PwfVVJgR8gZiI0bDjeaADlseegvQiDnRe67gLJd2%2FJS2qL2aw%2F7PxoxSyBILyMf6%2Ff7y62%2FN0YgfoK%2FdLYtJhKo48tbs%2F2%2FKHoQov9PSvFh7x3zpOhJn5a3tbdmVBURwuGz4oHdC6JKts&X-Amz-Signature=e45be11a590516f552de0f1ffb9546f7699e9c345862a9a7b8a09b10fbd0f231&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NK3474M%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T100859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGDNoea8bVabI%2F3YDYZXpvHPR3OqfLoBnxtl%2FZaJ5yzCAiEAlx3qy2KhmOSSvT%2BPSAdB6fqYT4EDV1SBu0CfA%2FbnyBQqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDBQto3Qsv3h85TM%2FircA5SWy%2B3ggWqD0hSfK9ThiByyjY6AIzUYL4vo5SpkFUd3cBR6Rcl3lSoVaqKTytbkUv2J%2FZACwREsF80AlLZ6UALvaZYdjYozvqX%2FduFwdHibRE0G0rU1vewaqCnJpoCrMnc%2BlBk09RFrf68hT29GOgKNI6M6P94JS37jVix4t3iXPcWkBLKNpjhZhFFMl8mRpZE0ooHppZ0uZpyDYpnkG%2BpUlsZBdo2Mc3tkX0EClfnnHgsATqW4iW8qYBWMH4jEGkYvrwS33jhAuuJ3nN45LrD%2Bfjo9OhJ1btc0%2F1rzYc3xZA0i0G%2Bn11S1Urf5Pq%2Fdql5Xp09Sv3%2BA%2FDzIE9amtxbQxQFGvVx1S11p9UCQbaXUl9PioVB2b23Lk8BU35bCkjAgD7CJrc%2FxNGbH02D8WO%2FPg5gzVrDSBiUSPmHM1zsYXbR55XqxCF2hC8ND2%2B4CT%2BpVgYCCci2hl7DPyT%2B8UXp2ARYRSUOJiFNYCzRzW8t1AiP6jQPgyS8K0i0ITcs4oXGR7wByVYuS3uC4kvmFrLxUlLrpNjYGBsUVdgZdnEHCFo65tfkqFwpzTbOF8lNzNDgWXMjccXmhOWQFt%2BVmZr22tn%2FUfenRj18sUtJjSdu%2BYS2S1nvrlRL%2BOcIwMILCyr4GOqUBP5tvdhOGG26RjAMiQbVyNgYa%2BUIZTp2Mj%2F8b8zHTM2sulUish%2FK8pmLm%2BuRrxF9njIogTf9Vf7cfCoRezAQOkAmkFqpo1TA%2FZ82ZlYB6arUkuV1kTrk54SwM4snZ%2BYE1Evaljz%2F6TveZCM1Lkv7%2Fy%2F4ZVeQ9%2FWDNEgxMmfBV2KskVEjha78Wh2Fc%2FCUixnbtiBTZjtLM5mEIDSqqb9LSBo9kVKlW&X-Amz-Signature=a7e2e0375c9cdb039e1310111d0cc56cfe658caeb9c862fe48449a206cbda988&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
