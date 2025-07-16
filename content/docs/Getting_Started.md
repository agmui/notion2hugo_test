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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEFXF2SQ%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T181255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIB0paKX1NiL2Bal5pX9yfTIDvQeva%2FIVQxr8hNlzf9BwAiA45f87BeWgYBqEiAdNf4d1Bj0jyitThkKcl%2BtbHQ5MtCr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMB0SA9nKO6Dwcb7gRKtwD7FynRn9tTxC%2FimwtmXRokJuvR%2BtiVoaNTatSolTCDUdLno%2BZT6AyOZ62lDrtR%2FuiRmU%2FNgctYC0uRAgE9kKS%2B%2B0StfuZtvoQ6p9N%2BobXX16MbPF1R%2FVGZOdde%2F74tNwqJuWXeIw%2BdUS%2BT6OY%2BE1L%2FmblsFab%2FZmJ2cPSbSZg5sPQ%2Bhsv7mmJzkbq%2FYetOW4uRt%2B%2Fo3CxEX1xZVLqBTfYuxX%2FabLypAVwkV%2FKkemb%2Bhq%2Fz7SEIK7PnI0OcjnDbcmAp48DVQ%2B86us%2BRpR1IG8PhyBAxJK0QlRy4GujbaAsyfLCevDq7QMf8BHJK521RX%2FAVjoT9EajtC6hCwT1O7B5SzVdj8%2FJCSYuUHhQChdumJ56UZ56n29Pe3FOSOfQlqhTpQiFV4TC2YreG5%2BTrUwHwmaw1wX%2FQHCxRLViUBq36yVBVxzeN9YglmmUgif0ZUBwkLeCBM7PmB5caAnkk4l5I%2FaFGSDdStZVwJHDtJM4ZbsxT3qOZ36BsfdMvNWc%2FfCd0TdSU3uvpgvIt9ukjlA80rPs9zowJ4g5jaRBx7F%2F8I0%2FS2xuaw9BA5Ke7Jvw3fjAbCEqQmLBsYBYMOlbkwNAnRo2Z5Ep3nvE0YUzZ24%2BWF%2F3aI57YPyTjg6We%2BIw7bTfwwY6pgH2Bdf7MVBwajuLR74gZvcXHTmdG0l3wrLCTRQ0cxK4p%2FPQgTcrVMjsUsYoD6wlDDOtentPYyxZpKtPBOfP0TJss5EDV5YgdV5u80ez9d5%2B3ZO6IOLnoO8qTFdKPd40llyVPt6K9A6EqckqDLZVw8haNWgYOGExsTM51OYGPmA5qs5ZR1TgjA9u3wTcZh74L%2BV8pnh%2F2RKNyigRS7%2FX8xFzGA5yUSG2&X-Amz-Signature=fdcdcdea814ef303679605778a84309b15089ba98617c9b812910b5fce93c5da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEFXF2SQ%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T181255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIB0paKX1NiL2Bal5pX9yfTIDvQeva%2FIVQxr8hNlzf9BwAiA45f87BeWgYBqEiAdNf4d1Bj0jyitThkKcl%2BtbHQ5MtCr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMB0SA9nKO6Dwcb7gRKtwD7FynRn9tTxC%2FimwtmXRokJuvR%2BtiVoaNTatSolTCDUdLno%2BZT6AyOZ62lDrtR%2FuiRmU%2FNgctYC0uRAgE9kKS%2B%2B0StfuZtvoQ6p9N%2BobXX16MbPF1R%2FVGZOdde%2F74tNwqJuWXeIw%2BdUS%2BT6OY%2BE1L%2FmblsFab%2FZmJ2cPSbSZg5sPQ%2Bhsv7mmJzkbq%2FYetOW4uRt%2B%2Fo3CxEX1xZVLqBTfYuxX%2FabLypAVwkV%2FKkemb%2Bhq%2Fz7SEIK7PnI0OcjnDbcmAp48DVQ%2B86us%2BRpR1IG8PhyBAxJK0QlRy4GujbaAsyfLCevDq7QMf8BHJK521RX%2FAVjoT9EajtC6hCwT1O7B5SzVdj8%2FJCSYuUHhQChdumJ56UZ56n29Pe3FOSOfQlqhTpQiFV4TC2YreG5%2BTrUwHwmaw1wX%2FQHCxRLViUBq36yVBVxzeN9YglmmUgif0ZUBwkLeCBM7PmB5caAnkk4l5I%2FaFGSDdStZVwJHDtJM4ZbsxT3qOZ36BsfdMvNWc%2FfCd0TdSU3uvpgvIt9ukjlA80rPs9zowJ4g5jaRBx7F%2F8I0%2FS2xuaw9BA5Ke7Jvw3fjAbCEqQmLBsYBYMOlbkwNAnRo2Z5Ep3nvE0YUzZ24%2BWF%2F3aI57YPyTjg6We%2BIw7bTfwwY6pgH2Bdf7MVBwajuLR74gZvcXHTmdG0l3wrLCTRQ0cxK4p%2FPQgTcrVMjsUsYoD6wlDDOtentPYyxZpKtPBOfP0TJss5EDV5YgdV5u80ez9d5%2B3ZO6IOLnoO8qTFdKPd40llyVPt6K9A6EqckqDLZVw8haNWgYOGExsTM51OYGPmA5qs5ZR1TgjA9u3wTcZh74L%2BV8pnh%2F2RKNyigRS7%2FX8xFzGA5yUSG2&X-Amz-Signature=3a4ea10fe26acd56c7340ae46eb1a0262c0572542fd74a05d2fb5e8e1975e083&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEFXF2SQ%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T181255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIB0paKX1NiL2Bal5pX9yfTIDvQeva%2FIVQxr8hNlzf9BwAiA45f87BeWgYBqEiAdNf4d1Bj0jyitThkKcl%2BtbHQ5MtCr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMB0SA9nKO6Dwcb7gRKtwD7FynRn9tTxC%2FimwtmXRokJuvR%2BtiVoaNTatSolTCDUdLno%2BZT6AyOZ62lDrtR%2FuiRmU%2FNgctYC0uRAgE9kKS%2B%2B0StfuZtvoQ6p9N%2BobXX16MbPF1R%2FVGZOdde%2F74tNwqJuWXeIw%2BdUS%2BT6OY%2BE1L%2FmblsFab%2FZmJ2cPSbSZg5sPQ%2Bhsv7mmJzkbq%2FYetOW4uRt%2B%2Fo3CxEX1xZVLqBTfYuxX%2FabLypAVwkV%2FKkemb%2Bhq%2Fz7SEIK7PnI0OcjnDbcmAp48DVQ%2B86us%2BRpR1IG8PhyBAxJK0QlRy4GujbaAsyfLCevDq7QMf8BHJK521RX%2FAVjoT9EajtC6hCwT1O7B5SzVdj8%2FJCSYuUHhQChdumJ56UZ56n29Pe3FOSOfQlqhTpQiFV4TC2YreG5%2BTrUwHwmaw1wX%2FQHCxRLViUBq36yVBVxzeN9YglmmUgif0ZUBwkLeCBM7PmB5caAnkk4l5I%2FaFGSDdStZVwJHDtJM4ZbsxT3qOZ36BsfdMvNWc%2FfCd0TdSU3uvpgvIt9ukjlA80rPs9zowJ4g5jaRBx7F%2F8I0%2FS2xuaw9BA5Ke7Jvw3fjAbCEqQmLBsYBYMOlbkwNAnRo2Z5Ep3nvE0YUzZ24%2BWF%2F3aI57YPyTjg6We%2BIw7bTfwwY6pgH2Bdf7MVBwajuLR74gZvcXHTmdG0l3wrLCTRQ0cxK4p%2FPQgTcrVMjsUsYoD6wlDDOtentPYyxZpKtPBOfP0TJss5EDV5YgdV5u80ez9d5%2B3ZO6IOLnoO8qTFdKPd40llyVPt6K9A6EqckqDLZVw8haNWgYOGExsTM51OYGPmA5qs5ZR1TgjA9u3wTcZh74L%2BV8pnh%2F2RKNyigRS7%2FX8xFzGA5yUSG2&X-Amz-Signature=3dd90418cd91e3536650ab438b00cc6011b4951bc923db35b8445571b31c2d07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFLA5ZUC%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T181257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIHsPTvtBrlmbrhCtuVT5NKeligcRmdCyq6cyukBRLRN%2BAiEAoExjQwICY4cinAcFexqXVTTNdKRCkF61DCtY0h9b5ssq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDIUMaOVwycwou5zp6CrcA0HQphKXsgAtVW41GuGBIZ%2BSZqZMS9rb7eABEAwXQdCvbBisu4NtBODvky9LFd9tIcsIxoj4Os1M9LtSxWvtBEFqiAPQPqQY808O9HQkh8xEpnkcDGB4aSS1YfNHCQ%2BdRDVJ%2F6yWYINItOqQD45eKaLQQKoR2U8epQedt%2FZrnNLl2y8LYg3gmpEfU%2FFQLcaknU%2FPn%2FL%2Foe25Q%2Bk7L8AaGX3TZg4DIn%2B36sF1V6esjvnDfkwFRvbySryhsNBfuE%2B%2FSANYV%2FwTtzb6agi92s4nHGAXP5ovoHEynnhBFDlihQo9kCbedUnItUBPkGhS1gs1uSZt%2BtwLpKC7cFOI74rqTtLvXz7ev2igVZFx4lywRo4zogGHWYrnjDYl2VklKtDmidnwLpfywymmWq%2F%2BPQyED2QsrLwvPyAKQdsL4%2BO3gKS09MVCtlJuu7YtEHx2Zg34pdpTuRU8aaAVV%2Fi7K1Zr%2B9AKBHob9gB8uYUv98JBdGM7cG%2B0N%2F28WQOwql1Bg8zxPRWJqj4OvOEEdlimUVMWoFDAC7bCcYyaM87bunITpfkuRtJKq0bfO5ComXuOzhSWrU5WtX9lIDerLwLWO7Mf1Yzxk9v0wtW1SfsDeObe7wgb7qmXX58wCYX%2F6Bx%2BMIS038MGOqUBFf1ovN%2Fq2Wz%2FbgVqf3AWRIDJr0ro%2FOshlOtRy3lR9mYhpDApQ9FgtUvDDBAY82LcXkqayHRThfAHnMt6JIOYMa7CqWJurjCMfkXtQmKR29V1uOFDLnvtZbRtmOPBJ26txjZdmiYXFUo7qNUAZeM2pTbF3LGPowIH7k%2FBcYfTAUPqVmXrhBsCnV0YGyeZsLKkqpFgINghi%2FlFduwy9m0Kf4M%2Fii0%2F&X-Amz-Signature=2d6455a05f920d95d863410866397f4b5ab50b51d5cfc3bc60694dc8d0b0071f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UONA6BJ4%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T181259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQC8LrVla51vwxfy4OxUeBEwhHPqByhgURA2hC3aEqhHiQIhAJZQywBhgSdN%2B2pVT6i4hFoWlZQ6hbMWc%2FlqKVQ4VhoyKv8DCGIQABoMNjM3NDIzMTgzODA1IgzW93%2FF8e36rPto228q3AOE3OEspnagx%2BIIHioNQqw%2BpZ3sskBckK46D5JvFYLZoDVXrHI%2BF8k06cIqe7rWcoCrRsPbpMv3lbvSMhryw5rLTn6vggyezkJKjj6fQIbe8rNvAb9FN19Kek%2FJSUC4c5OKRMF5CyY6LRWe9RZ9KgxhmC1c6cFVQ8uqJcoD8s2ovjlXNZkqx2NmaBvElgLs6IHGJ1T8X2yN%2Fz2Ny5u%2FnkEkh7GZye11MLbzUTjkHhUPxpZGTK%2BTMLCWibH7ZkFBvcQkpplPzPk3SCObM0pLwbrAoOgQxlRlodO2mcOgkokXmSeYlw0CYzZodCjXTDGwRfMxXaybL%2FVbeCWdZRFxqSdaHQHm3VFDUzsC26h0YeFLwhNYYirwHqwU1f2bP8VcubTJ6JfGT93tUsfhJ%2BXk9WT12jFk76Q1hSoAld7POFh%2F7t14jvKafS6oSiTFTEW1BDRPtlpX%2BlfHbGSuENYXVOBIWe173lpEtZ8RSLbdsrb%2BlTtjOQ5sJF3RdpU1qzAHIxoCt6Vem0epq2j26OuMRZGKH2DQw9NBXN%2BPaV7ZWpR3CSh3dIIXdlG2s3%2Blo5QDGpz9Yj4wc%2ByDFjx5F5oijZ%2B4RqFw3rxSdyOPUBuWBIJz9JabPAbDUpHnIjV8UjCztN%2FDBjqkAQAfkdGdt1w2OtoT8Pzq3kppJgmNXTaNoeYzk%2BsEkLhTsxBAssXulKCTzgDfYG68fW2QPaEZNSrGEwka3U2yfvMRnqXpqO2yTaPJNiiBCq%2FcbaBTtCkpAX0pFy2i6aQzO8cKZf0H3HQ%2FSPGUE6qs3%2Fa9g2WqhQ5IMi%2FRTEe2TNsmYfesK5fM0vUmKY%2FjjE6lc%2BiQYbnXy0rQ2bJU9QoF04mLZwWW&X-Amz-Signature=4aa5aaade9a052964649bcbc7128eb2423595140d6e00dda4c834bfd6bbf0afa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEFXF2SQ%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T181255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIB0paKX1NiL2Bal5pX9yfTIDvQeva%2FIVQxr8hNlzf9BwAiA45f87BeWgYBqEiAdNf4d1Bj0jyitThkKcl%2BtbHQ5MtCr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMB0SA9nKO6Dwcb7gRKtwD7FynRn9tTxC%2FimwtmXRokJuvR%2BtiVoaNTatSolTCDUdLno%2BZT6AyOZ62lDrtR%2FuiRmU%2FNgctYC0uRAgE9kKS%2B%2B0StfuZtvoQ6p9N%2BobXX16MbPF1R%2FVGZOdde%2F74tNwqJuWXeIw%2BdUS%2BT6OY%2BE1L%2FmblsFab%2FZmJ2cPSbSZg5sPQ%2Bhsv7mmJzkbq%2FYetOW4uRt%2B%2Fo3CxEX1xZVLqBTfYuxX%2FabLypAVwkV%2FKkemb%2Bhq%2Fz7SEIK7PnI0OcjnDbcmAp48DVQ%2B86us%2BRpR1IG8PhyBAxJK0QlRy4GujbaAsyfLCevDq7QMf8BHJK521RX%2FAVjoT9EajtC6hCwT1O7B5SzVdj8%2FJCSYuUHhQChdumJ56UZ56n29Pe3FOSOfQlqhTpQiFV4TC2YreG5%2BTrUwHwmaw1wX%2FQHCxRLViUBq36yVBVxzeN9YglmmUgif0ZUBwkLeCBM7PmB5caAnkk4l5I%2FaFGSDdStZVwJHDtJM4ZbsxT3qOZ36BsfdMvNWc%2FfCd0TdSU3uvpgvIt9ukjlA80rPs9zowJ4g5jaRBx7F%2F8I0%2FS2xuaw9BA5Ke7Jvw3fjAbCEqQmLBsYBYMOlbkwNAnRo2Z5Ep3nvE0YUzZ24%2BWF%2F3aI57YPyTjg6We%2BIw7bTfwwY6pgH2Bdf7MVBwajuLR74gZvcXHTmdG0l3wrLCTRQ0cxK4p%2FPQgTcrVMjsUsYoD6wlDDOtentPYyxZpKtPBOfP0TJss5EDV5YgdV5u80ez9d5%2B3ZO6IOLnoO8qTFdKPd40llyVPt6K9A6EqckqDLZVw8haNWgYOGExsTM51OYGPmA5qs5ZR1TgjA9u3wTcZh74L%2BV8pnh%2F2RKNyigRS7%2FX8xFzGA5yUSG2&X-Amz-Signature=98f5ee8f54a455ba8ca4ec97f141e75c7718cf0647c4c54c4fd899f1748285a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
