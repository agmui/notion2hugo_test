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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QC7P5QVO%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T150812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIH6Wt351L8eGaKZfmpQCnqjmfMqtJBasSjAXgkf%2Bg%2FE0AiA%2BW9u%2FZRJo9uohlN9qEawNOc8%2BuccuKpiKom76UmXapSqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMy8Y42o2YJuvHEPsYKtwDaJIbDsrKFLR%2BPGgFMUW7OyzfZ%2BgqnPJMuA0BMLOkVGX9ArAcG3nBH2uqF2b9TPpUlrFW%2BOOkdzRNxrCcwzkvsHTjzOnvWO917MewYhdCxWLkekW9fHhc%2F1o46quLYgFepDgw8fT4Hza3860j6FkOPM%2FnVlnq8ACcbDi3GJGCLvcwESMTqZeN1Qx8TEJxwT7fAde3XX%2B3aO5TM1aqhLv49ALzmxCRcBFe7XG%2FywmlsucI7O1BeYN0sObvk2U0LJ81Vpi3H7kW%2B5IyXfzTWltRFdhaDmo8HuMbY5Mz3HY4dAVqC86bqsOAIprAWle97YRzWkd3ZSenAwSoOT6N4WF8%2FR%2BZgg2oOfSrAJ8YmLHa0B7oRL8aO76wG4uaE2zkgqXHCY7TXWEnkbpjDVT3%2BH0bb3%2BK7Gl2Pg1bzmvgQ%2FkamP8MIr4aVhIV%2Fl2Xwg3KxdKcxRfEhvIxSCCKCf74zSQwrfzbYb%2BGLoWVF89cbEf2VQiHJMJbNQyWxdf0tw82%2BoyaTnYpWmHpcdquCHwymuEI5ZEHVfsabZnvagIaN9Tprd%2FnnR4tqmUccVwHigV8VJgCDGpIrTcVSLNc414lxzAWB4eOdQ6R%2FiwLOYQVEZioZnPjm3DMwFxBmIddBogw1fv1vgY6pgEX0GcabgudbqiTDNZxce2bldi6gOO24NGzNbRdFxMWQlRJc96SzzmTxErNtt9T6%2FEzIvadystjy8HuOctmrEacD3onEYMCPQRE9nKKn3bT1fMHpJRx0CKaDPGyEc7mzd5AtYpWF3HFOQgiKXYZjxQtkrPvMCZ%2FPGg5rd0Z3tiUdZ7iWEYILROZGBeQf1e8O9CgdcvAM76DTjNjO090BO3JvZfYrMso&X-Amz-Signature=23322b4dbbb52217036652a486832b77b276a877eb8784a248c5ac608dc34b92&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QC7P5QVO%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T150812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIH6Wt351L8eGaKZfmpQCnqjmfMqtJBasSjAXgkf%2Bg%2FE0AiA%2BW9u%2FZRJo9uohlN9qEawNOc8%2BuccuKpiKom76UmXapSqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMy8Y42o2YJuvHEPsYKtwDaJIbDsrKFLR%2BPGgFMUW7OyzfZ%2BgqnPJMuA0BMLOkVGX9ArAcG3nBH2uqF2b9TPpUlrFW%2BOOkdzRNxrCcwzkvsHTjzOnvWO917MewYhdCxWLkekW9fHhc%2F1o46quLYgFepDgw8fT4Hza3860j6FkOPM%2FnVlnq8ACcbDi3GJGCLvcwESMTqZeN1Qx8TEJxwT7fAde3XX%2B3aO5TM1aqhLv49ALzmxCRcBFe7XG%2FywmlsucI7O1BeYN0sObvk2U0LJ81Vpi3H7kW%2B5IyXfzTWltRFdhaDmo8HuMbY5Mz3HY4dAVqC86bqsOAIprAWle97YRzWkd3ZSenAwSoOT6N4WF8%2FR%2BZgg2oOfSrAJ8YmLHa0B7oRL8aO76wG4uaE2zkgqXHCY7TXWEnkbpjDVT3%2BH0bb3%2BK7Gl2Pg1bzmvgQ%2FkamP8MIr4aVhIV%2Fl2Xwg3KxdKcxRfEhvIxSCCKCf74zSQwrfzbYb%2BGLoWVF89cbEf2VQiHJMJbNQyWxdf0tw82%2BoyaTnYpWmHpcdquCHwymuEI5ZEHVfsabZnvagIaN9Tprd%2FnnR4tqmUccVwHigV8VJgCDGpIrTcVSLNc414lxzAWB4eOdQ6R%2FiwLOYQVEZioZnPjm3DMwFxBmIddBogw1fv1vgY6pgEX0GcabgudbqiTDNZxce2bldi6gOO24NGzNbRdFxMWQlRJc96SzzmTxErNtt9T6%2FEzIvadystjy8HuOctmrEacD3onEYMCPQRE9nKKn3bT1fMHpJRx0CKaDPGyEc7mzd5AtYpWF3HFOQgiKXYZjxQtkrPvMCZ%2FPGg5rd0Z3tiUdZ7iWEYILROZGBeQf1e8O9CgdcvAM76DTjNjO090BO3JvZfYrMso&X-Amz-Signature=4d50acdc854011a8c2ba16e10d857c137f85871da15a0de46a4a6e94d5f03689&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFM6LE2J%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T150815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCICkwQDnn1w8K6I%2Fvlj0g5OB9MXvJYGUWbXG0cL12heRRAiEAuqrtR5Smm7hy8B4dIjMZ2LwhGuq6fhUmprUrl6E8ME4qiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGBCRfbetLBRuim6jyrcA5cWu2qaw%2BfZrszjlcPPSiOaFXuylZdVG2kDAHgZwJ40D1mN87eUv4Nc%2F%2BqU4qpvR8kH7%2BtUUHODy%2Brt5R4fBVf9VhJhH5j8FP%2BJMFa7uQ2RGD%2BHJy35K%2Fv34TsuU5I45GeFnUIdTdu8TWXEkNPDV5y8IBj8pShEVIoxh37qx0BBrfpgyyc7Rt9OzemQBG2d9vVgF5wb3yqgrzCppEEBS4jau7WqKpSwuSCU9gXXMq2ArTab3DtKK4e%2F9VQqm46hxtxTWf2L20oV3luvAlz3BVI16NMU%2F2cu8UeVN3KqSJQoQIArcjw8nUYxif9ldsLP6GmvlUjHeD%2FcgMRJ%2FgACPojqhsHKqUxqwfBYhXW%2FkCoIr%2FLJGyMxDdqjrl8IE1wSdzDvIiuiShTKbkH4ob5UrviuJyT7tS%2FeulS3y6T6SkJfLfhYHoW8D5zqRJriQdhAcjbNYWW8D1G%2Fj%2BJD8ZlDSAgSvabI%2BXg24D0f7iuswaEOkIGAqohTgI7oz9Gmc95rh%2Bf8QHdcdJ3WSouZlrs6DRSqEeWkZFIQRXNskS67mdgDWgqtCA8Sw5AA62LFevgZE36QNWpiJG6FmQYp%2B9Im3AjMs0ziXDNrcMV%2BZ%2Ffz%2BtoY4ZLC1iXzZ8SbvvJNMLz79b4GOqUBlLUUnX5IXN0r2I8cBrLYt3vT7YPP%2FD2t54u463tMbGFQHqHdjwI0PA5aezYXLXwZGNAhvStVnRZneew4tc4fs0GGLrSFpRuqLppLhT7aX3lV%2FZ0gjxw9CPbhKD%2BxWWmCZfI5sLmt9PaCT12kM168dPIjfIR3InDilALWx80GkYvHxogAMs0xK5MtS%2BWY5tc874yrgk9EaGUwKv4KbHt8PwFvREgu&X-Amz-Signature=52a9d3a46a614e8e56f6ecc2fc1ea164e1e9217ffa615c002edd9c802f252b9f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DL3J4PS%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T150815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIHrIM0qJCvVbrF%2BUFUBByI6JKGkp%2BWKS%2FkKuffgrbdxWAiEA7oLBQY0M2KWLq5dp5JcHFolR0VhPR7Ze0oiCYw6KWKEqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDxbBnXhUoSMbu0hSyrcA%2FmUMEolj8jpSYwQ64uVNNuut36y0XfHD60GcaYb%2BkhicfhBCFrogQEdLDRswsKY8UyugPPNeDh3d9FxwJWqg8WVDVF4Ns%2F%2FadVOosb1uVsqRyLtyHPiz28Ny8Bt7icpp3Fs9UHdRxYkMPzXsPurpTiiWcmAAHZCqjBZJ790K9ynM4t6Yin4cXRt131qpcWUhed59TpYCdVZTij31VcB7drfPl6h7dtQHB4bEZZpY6GbN01%2BRtZe9OjA7lYb0%2F1T4bv20rrd8W94wU56k8S2qce6%2B4PGsD%2B8mJayucSNBOl6qKT4ZL8%2F39LuPZK7l82Ricr1%2FGL3mBIkAM4frAhJuamoaAy%2F3feA4kVlhAifLH5BnkZ15cqfA8ClgaWXkGeTq8t9t5m5Y6Z7h63tpnCivo4HIaLOmYtvhz2V8ZIvQXqTfztKFPYMYuyvkdjVCd180iuOAz7z5bOjSsrPv9puUmqKBiHDeahg5UpVlyNyIcBA5YRZEaVcAg3InoAig2wL4970%2BfnAWymQFp83fMe2GZXgrZNVPZh4gP6TIEKMRucCR7Ml8didAA7bg5LsjrDyn328ijlVYI3Hft%2FsRzDB4m51hsZn3JGLaMLAu0hAtTHk5GY1OV6VBUAc8ctAMMn79b4GOqUBr3NJ5rJxI4%2B8BRT7ZADw5jv9FK7tc2f4g%2BbbO4BnTz6Pfj0ecpW8p3GFpwC7uZ2e31pi3lTm0mEePx95G6J7yIhDZeEj20g1l%2FBt9iEkqe3DEywv%2Fw%2BGM0YyXxeOyBI1%2BpuZjvyG2YYcPwt%2BAxNOF0IdkP2VPXtliBrYO%2Fh73fWiOV1BEBtZdJlQJ%2F5XQQ8zu%2FwMTtjcaHlEuuXxY5f9d7nF8Bjo&X-Amz-Signature=01c6002d0364bcc0351dfa879b814891f298910e3970f25021a1a7835ceb5442&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QC7P5QVO%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T150812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIH6Wt351L8eGaKZfmpQCnqjmfMqtJBasSjAXgkf%2Bg%2FE0AiA%2BW9u%2FZRJo9uohlN9qEawNOc8%2BuccuKpiKom76UmXapSqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMy8Y42o2YJuvHEPsYKtwDaJIbDsrKFLR%2BPGgFMUW7OyzfZ%2BgqnPJMuA0BMLOkVGX9ArAcG3nBH2uqF2b9TPpUlrFW%2BOOkdzRNxrCcwzkvsHTjzOnvWO917MewYhdCxWLkekW9fHhc%2F1o46quLYgFepDgw8fT4Hza3860j6FkOPM%2FnVlnq8ACcbDi3GJGCLvcwESMTqZeN1Qx8TEJxwT7fAde3XX%2B3aO5TM1aqhLv49ALzmxCRcBFe7XG%2FywmlsucI7O1BeYN0sObvk2U0LJ81Vpi3H7kW%2B5IyXfzTWltRFdhaDmo8HuMbY5Mz3HY4dAVqC86bqsOAIprAWle97YRzWkd3ZSenAwSoOT6N4WF8%2FR%2BZgg2oOfSrAJ8YmLHa0B7oRL8aO76wG4uaE2zkgqXHCY7TXWEnkbpjDVT3%2BH0bb3%2BK7Gl2Pg1bzmvgQ%2FkamP8MIr4aVhIV%2Fl2Xwg3KxdKcxRfEhvIxSCCKCf74zSQwrfzbYb%2BGLoWVF89cbEf2VQiHJMJbNQyWxdf0tw82%2BoyaTnYpWmHpcdquCHwymuEI5ZEHVfsabZnvagIaN9Tprd%2FnnR4tqmUccVwHigV8VJgCDGpIrTcVSLNc414lxzAWB4eOdQ6R%2FiwLOYQVEZioZnPjm3DMwFxBmIddBogw1fv1vgY6pgEX0GcabgudbqiTDNZxce2bldi6gOO24NGzNbRdFxMWQlRJc96SzzmTxErNtt9T6%2FEzIvadystjy8HuOctmrEacD3onEYMCPQRE9nKKn3bT1fMHpJRx0CKaDPGyEc7mzd5AtYpWF3HFOQgiKXYZjxQtkrPvMCZ%2FPGg5rd0Z3tiUdZ7iWEYILROZGBeQf1e8O9CgdcvAM76DTjNjO090BO3JvZfYrMso&X-Amz-Signature=f82c52d740bc47ec2921752e0ef07f7036687df9d5cc73fd93ffe559b31ae86e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
