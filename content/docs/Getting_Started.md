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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EWX5HFO%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T061008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQCE01FZp42clknnzald1mo7SF119hbCANYDKAGovRU6lAIgNPeCDf9ukNRla1CHV4vN6eTBJIWBDmaeUb7e8KnytvMqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ80UAaurqjBcMxNyircA34tMiNnaoYCHUPTLlcjF2O9qUEhSfbOu5xoeGibn4xapGGztY2UTUChQesA6yUjVVilMw01VFg4XEM9OiNzYjoFGa9J3pG0u2y53UWGdAoyYva7ONncsH1BfDJCSt0pYZfVFivHYExhJ%2FdTQCM47A49MtEGX8gJrMbwLsYz0e%2B22l%2B2Yyp2RexAPKADTIwaLOzs8X3g16vFUXj%2FLK3IzjtJs6Qd5rI%2BUGaNXEwjXH4Pu9bwl11hM45O3gSXTgTrKqzYiGFQVPZZ9GbYDFLu9CNzZyrSr4O6re3OzLY1kKYLSM858V4%2BHIBoOJtpVbRbXf4bN4bs4Kmqlmj75YWNcoiODqpc1lwmVRMRlMHGqSBwmQ7rkvAxa6%2BqOzyENMCnvg4nsVYFFWZlOrTcTFWoS%2FgiBvPOw1mfqlwPqFJSJa5LdfPZWcde9PZgJSM2s1rOTRMccMMfEkmOWm5KfE8v2OmAK7zje2wWMDL%2FoGEiIg%2BUCylGUpbC5IgIt51SFbAuEL10VMmv6nUccRAsLRnV%2BmbQ%2FI2VHHIYGHBjX2TWGrfvILtk2kaFbvU%2Fv%2BIdquGtociQp6CvmNZ%2FDkcpwXG1zsnPJiF71Er1SLMTFu47sJnwRCcYbO5WzYA%2FcJU1MIfj%2Fb4GOqUBXw7Fp4UWdYrquzvOM2SXlc0QgzqgGfNkQn2Zn0yl3JdgGwKeK4P5y%2FUUGmF40kHUUQztCCzOkdNRagYl%2Btwy%2Fh4O%2F2qRDO3wBvJu1kVGGc1zZh0T3GWRPdyQUAkL%2FsdskLWQOczq83djpBKyL1bR6KQ79cgVq5JK0zHWWm9AVgPkq6qBPb2S1N8gj9bBgUIlCtYr2E%2BAJMIOo20ZfpYAMntYqz1j&X-Amz-Signature=a614d6eb3afecf79b3ff03c80b82f956f04bc8ad3a9c95a7e07e77426001849f&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EWX5HFO%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T061008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQCE01FZp42clknnzald1mo7SF119hbCANYDKAGovRU6lAIgNPeCDf9ukNRla1CHV4vN6eTBJIWBDmaeUb7e8KnytvMqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ80UAaurqjBcMxNyircA34tMiNnaoYCHUPTLlcjF2O9qUEhSfbOu5xoeGibn4xapGGztY2UTUChQesA6yUjVVilMw01VFg4XEM9OiNzYjoFGa9J3pG0u2y53UWGdAoyYva7ONncsH1BfDJCSt0pYZfVFivHYExhJ%2FdTQCM47A49MtEGX8gJrMbwLsYz0e%2B22l%2B2Yyp2RexAPKADTIwaLOzs8X3g16vFUXj%2FLK3IzjtJs6Qd5rI%2BUGaNXEwjXH4Pu9bwl11hM45O3gSXTgTrKqzYiGFQVPZZ9GbYDFLu9CNzZyrSr4O6re3OzLY1kKYLSM858V4%2BHIBoOJtpVbRbXf4bN4bs4Kmqlmj75YWNcoiODqpc1lwmVRMRlMHGqSBwmQ7rkvAxa6%2BqOzyENMCnvg4nsVYFFWZlOrTcTFWoS%2FgiBvPOw1mfqlwPqFJSJa5LdfPZWcde9PZgJSM2s1rOTRMccMMfEkmOWm5KfE8v2OmAK7zje2wWMDL%2FoGEiIg%2BUCylGUpbC5IgIt51SFbAuEL10VMmv6nUccRAsLRnV%2BmbQ%2FI2VHHIYGHBjX2TWGrfvILtk2kaFbvU%2Fv%2BIdquGtociQp6CvmNZ%2FDkcpwXG1zsnPJiF71Er1SLMTFu47sJnwRCcYbO5WzYA%2FcJU1MIfj%2Fb4GOqUBXw7Fp4UWdYrquzvOM2SXlc0QgzqgGfNkQn2Zn0yl3JdgGwKeK4P5y%2FUUGmF40kHUUQztCCzOkdNRagYl%2Btwy%2Fh4O%2F2qRDO3wBvJu1kVGGc1zZh0T3GWRPdyQUAkL%2FsdskLWQOczq83djpBKyL1bR6KQ79cgVq5JK0zHWWm9AVgPkq6qBPb2S1N8gj9bBgUIlCtYr2E%2BAJMIOo20ZfpYAMntYqz1j&X-Amz-Signature=4b084d9e216ef5fd7115e26b01c566b630a09c544ccd91c5cc48fb94b09febf7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSCBEXPX%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T061014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIEv3cs%2BKFCCBxGBEThNvpIfL9ixSFH6sXkp524PfYznzAiBquaxFLOl1QWSy9KOfig0dXpFUjipVAM%2BlFQccypQLrCqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgoEpnr8D2AE48gr%2FKtwDcp804dmZPrUhPlWIeDnNEDQkfdMjz%2FAB3oBj2tgrkM9ANnjHVvOAza%2FsSj73wle%2FyPpmiRcQ022JK2h4469Odvp8jh2iMkD0Xzw3OEElVRndII4F6JRVACwk%2BMyIofJTzeZGr8PAHhXG%2FcEWHtnXoi4lYaeQQWaVy%2FMfRZAfqGfVrBWgCIgochvwL3D8TicEG%2BZqB6G6nZsPjkTpXDshEAcoaCx5qfO1GQI0CozIQDxP79X%2FrDEy0%2B8klC%2B9qpRShcPTbp%2F5xq78bn6t1o526tALx6loEqY7XXPKxXR0WPQn1Yf4q4cNh%2FL4dT%2F62s1eoziqRCkJEqrHAay1CvR9Jy82o9I5bDQtUw8ubzQDrhyAMtEdal18IJJcnfVt%2FgCv%2BxvbgVtq7zsVcgQIDGB5QijRV37DhQ9ZZjgXfMrGYyE1nvaKcys43GJc6%2BC1ta71q3E5MsfLg9%2BLZxxP5faCAICHMAkA4HJP9YO%2Fz8ucXhx33HdzR%2Btxd1tywjnTjkBTbR%2BcKic9icnfLgHbIwT2TglGBGENJVRdePh5dowpSCWCHWP9dId8z2D%2F%2B0B4yFWeCHEQubHPYwQmlbFN%2BW4AYZPLWpUIFuEiS0XnWtP4TF0FB3LVDEmlA7o%2FH78wh%2BP9vgY6pgGdUtJx%2B90NJk8bocMiGGmj53GKRWYEosnVRmpCRVW4OAbPs6l4UnqtE1erhOowvLi466DeAbGzyw9fCZlIH1L64EJ2hYQQnT%2BZ9izhjnedSsOKg3%2FJ5QIG3Hv4hBwCB%2FZhDMcW50mA1LXs5HyvpZGBr4%2BBqbJOY%2Biy9Dr9NJep8%2F%2BJ9Z0VamZlgQ0cGXy%2FNHnuuymFtVYtzkLvlzRUZMRg2uz%2Bfmv7&X-Amz-Signature=a44aacacc94817390ee3443956002980084eef5f13b50e4cd0a6ba229d14366b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNHE4545%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T061014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQCKTdOnUfocc6bI4B2zIn5ezgWts8k9Xz7QDmqHdQ%2BZqgIhAM81mczEfJrOowVAMZr%2Bct2FpaoKlbUO3eUivTMK6Q1VKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxSrUhReaks%2BRmG96cq3AMnbmPZKsMGarVPm9EMMIJGsghaDJJEaEtTWy9%2F28SiEN0r4K0OomqCpeIQqfDaC3rHdkfFcn2IpLB5XawZd1MBa533b4myhX%2Bq1wcAkcaiPDUq28ZKkfncDh6kdNahH2CbsRPEddj6GMmov%2BQAVoTKdKUiV3BYQr51riAXtxvh6Gr0AEIpkttLfJTwHAX%2BwG7QogA7CQc1UpuaBX9tlLWa0tcw1XXSp8FYlrnqXX35HGJf5Q%2Bm4oGJCByqb0G%2Fw2oI18Qz8yvvtiTqssaTuQwEaUsiDUbyNlYhIUzgPdOt6i1Rdh1OsbffMPFA9PF7qkD309nxL08HFOOt1jlI7dY%2FIfXMR%2F9swUPPKmqipN652sj5SG91%2FpKPcArAzrIsYtjSOPm1R954VFCqbJr3lRhgihsUwPv4rHTU7ZHI61G3W%2BkPqYJwF0ERCkjhGv6EW5AQdhb7QzMUt1sGF30bn0XMuzXU4n%2FE2Z7vb8ZcFJWcbXV%2BatLtDkaQwMbLNrJUmyFkVwpV9dG%2B%2FHQIoBstcL%2FZWE5I5%2FsdQYsoy7wUgLJknbrvBYcpLFzpGpU9ZPrWreVdgXiTV41NnuvWRIyVtWFPaSkktWqNtng5zHMP7BQKPshpWD6MXYR2zryEsDCT4%2F2%2BBjqkARIV%2FiM%2BcvGu3zSVdCh4bq6DjQX5xPUTlH6QDORCTpx5knU0h%2FLMnnQbmoUHmY4PtMtLm8owqVdmm4urqW1v2%2B3szCvFMubVoLHGE14ui8o7yHFtJVJapQeS7GULIlpOP7cSXsM0zZutHJtEJs1aCNYxJPLU9KvHrb20y5b%2Bn%2BAaVr2J1KfeWarBCNMN1vQFWsyXpCUJ90tFNR8XE6TDki08HDQ8&X-Amz-Signature=74b6c1944c0bb2d73973ad596076d3600c4afdf3c6a392d04cd024545950dac8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EWX5HFO%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T061008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQCE01FZp42clknnzald1mo7SF119hbCANYDKAGovRU6lAIgNPeCDf9ukNRla1CHV4vN6eTBJIWBDmaeUb7e8KnytvMqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ80UAaurqjBcMxNyircA34tMiNnaoYCHUPTLlcjF2O9qUEhSfbOu5xoeGibn4xapGGztY2UTUChQesA6yUjVVilMw01VFg4XEM9OiNzYjoFGa9J3pG0u2y53UWGdAoyYva7ONncsH1BfDJCSt0pYZfVFivHYExhJ%2FdTQCM47A49MtEGX8gJrMbwLsYz0e%2B22l%2B2Yyp2RexAPKADTIwaLOzs8X3g16vFUXj%2FLK3IzjtJs6Qd5rI%2BUGaNXEwjXH4Pu9bwl11hM45O3gSXTgTrKqzYiGFQVPZZ9GbYDFLu9CNzZyrSr4O6re3OzLY1kKYLSM858V4%2BHIBoOJtpVbRbXf4bN4bs4Kmqlmj75YWNcoiODqpc1lwmVRMRlMHGqSBwmQ7rkvAxa6%2BqOzyENMCnvg4nsVYFFWZlOrTcTFWoS%2FgiBvPOw1mfqlwPqFJSJa5LdfPZWcde9PZgJSM2s1rOTRMccMMfEkmOWm5KfE8v2OmAK7zje2wWMDL%2FoGEiIg%2BUCylGUpbC5IgIt51SFbAuEL10VMmv6nUccRAsLRnV%2BmbQ%2FI2VHHIYGHBjX2TWGrfvILtk2kaFbvU%2Fv%2BIdquGtociQp6CvmNZ%2FDkcpwXG1zsnPJiF71Er1SLMTFu47sJnwRCcYbO5WzYA%2FcJU1MIfj%2Fb4GOqUBXw7Fp4UWdYrquzvOM2SXlc0QgzqgGfNkQn2Zn0yl3JdgGwKeK4P5y%2FUUGmF40kHUUQztCCzOkdNRagYl%2Btwy%2Fh4O%2F2qRDO3wBvJu1kVGGc1zZh0T3GWRPdyQUAkL%2FsdskLWQOczq83djpBKyL1bR6KQ79cgVq5JK0zHWWm9AVgPkq6qBPb2S1N8gj9bBgUIlCtYr2E%2BAJMIOo20ZfpYAMntYqz1j&X-Amz-Signature=9c3831e99d37defce7d0a0c4eed7b4707f7b3666b2a98224fe4927760faaf118&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
