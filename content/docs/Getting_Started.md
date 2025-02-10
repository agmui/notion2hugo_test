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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRAAPCVL%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T070813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGyDu7jYbviaeWNdA8CANK7QFyolBIM7Hus0NpS7f7cDAiAmcxyGQmAOlVdHozIJZ9GzVT6EDwi9yTTT37eEJ4q%2FKSqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYh6xGR5QdtcZLxFmKtwDneT8178zfgGTUqZRTjfUgEGdtmDu5d1qoyiohpk3TeGx1bBRXRnubeBcNKSWqR4zKmmbjVyRbczAC9aNcEUeJspEMSP7HyqJMiXZpKD2O%2BLCY%2Bw55Ml%2F%2BTpJhNnfryqmiEOciAWR2vwTFn8KRSQgo3NsbXbLI6ISNb9ovKDJk6jtSV1yaj6jHedrcNfu3Sb%2BEGztjyS1lR71yC8i1%2Ft9k4ePaw9GzA2R3NwI4McXo9mrXzDNy5SzoLjKRkBYY3CqwDbEWoeTosJWbY0GHoytIO7164Q0OEfDGBWzbusoRz85tEx%2Ff2yLw7UnMxR%2B7CKrKn79%2B4%2FjVoiml3z%2B155Hl7TMUKfJ4ZWUrR8yb4gz3Sx1qF7TzXvTKWWcgieQ%2BcgUF9rnXfPgyVLRx18F6bXPVN3A8C%2BFQ%2F3uwxlX1dIWjx7otPgnSgshB9SSUVALbUZkiw5q%2BbITFp86BeRuVSZJipkh1oedP9VXgXHhN9QIxRA9rjMksLzxMHrAP9wBKaAGXKZMEoVyb04Gap0xBRcXwQa%2FKLt%2Fq0gXdDdS4ywe93fwmLA4WTR2gbTtUyIvT%2Bj6bXP3%2BIcN%2BRSZXUnFYQHGtg5cVySR%2FXQdB%2FkcnhdtQx26vNljmt%2BqAoviROcwzPmlvQY6pgHH%2BAiHhnVMQoYGbMZleyx1Se%2BTktyl6RFUBuRv7uub%2BsrhcVCwhYRXCPF%2FxsVgS3OR1%2Fxa0tRQjh%2BDZz91qH84g%2BEN3M7b03ai7uZI7H66DQzHDbUm1CVd%2FTi5vw9fMEzXZXrSQINmGVjGurmqZkpBzllSt%2FsN1SfkOFUzysW%2BM0QBfKLZZnIh9%2BrtdU%2BXGN1m%2BGV1awVNZglTGvgUv33qWERr3aam&X-Amz-Signature=abf98a5d9de461e72117cc1ff7fb53d5e7d58dcba896667c1ac8cb233e7f1355&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRAAPCVL%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T070813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGyDu7jYbviaeWNdA8CANK7QFyolBIM7Hus0NpS7f7cDAiAmcxyGQmAOlVdHozIJZ9GzVT6EDwi9yTTT37eEJ4q%2FKSqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYh6xGR5QdtcZLxFmKtwDneT8178zfgGTUqZRTjfUgEGdtmDu5d1qoyiohpk3TeGx1bBRXRnubeBcNKSWqR4zKmmbjVyRbczAC9aNcEUeJspEMSP7HyqJMiXZpKD2O%2BLCY%2Bw55Ml%2F%2BTpJhNnfryqmiEOciAWR2vwTFn8KRSQgo3NsbXbLI6ISNb9ovKDJk6jtSV1yaj6jHedrcNfu3Sb%2BEGztjyS1lR71yC8i1%2Ft9k4ePaw9GzA2R3NwI4McXo9mrXzDNy5SzoLjKRkBYY3CqwDbEWoeTosJWbY0GHoytIO7164Q0OEfDGBWzbusoRz85tEx%2Ff2yLw7UnMxR%2B7CKrKn79%2B4%2FjVoiml3z%2B155Hl7TMUKfJ4ZWUrR8yb4gz3Sx1qF7TzXvTKWWcgieQ%2BcgUF9rnXfPgyVLRx18F6bXPVN3A8C%2BFQ%2F3uwxlX1dIWjx7otPgnSgshB9SSUVALbUZkiw5q%2BbITFp86BeRuVSZJipkh1oedP9VXgXHhN9QIxRA9rjMksLzxMHrAP9wBKaAGXKZMEoVyb04Gap0xBRcXwQa%2FKLt%2Fq0gXdDdS4ywe93fwmLA4WTR2gbTtUyIvT%2Bj6bXP3%2BIcN%2BRSZXUnFYQHGtg5cVySR%2FXQdB%2FkcnhdtQx26vNljmt%2BqAoviROcwzPmlvQY6pgHH%2BAiHhnVMQoYGbMZleyx1Se%2BTktyl6RFUBuRv7uub%2BsrhcVCwhYRXCPF%2FxsVgS3OR1%2Fxa0tRQjh%2BDZz91qH84g%2BEN3M7b03ai7uZI7H66DQzHDbUm1CVd%2FTi5vw9fMEzXZXrSQINmGVjGurmqZkpBzllSt%2FsN1SfkOFUzysW%2BM0QBfKLZZnIh9%2BrtdU%2BXGN1m%2BGV1awVNZglTGvgUv33qWERr3aam&X-Amz-Signature=275c9645a5b0214f611982dfef10636ea41a1dead9879dc749bba5689658fcf2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VX3K6WWY%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T070814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8E78a%2FCVrkxUVAwehSDn1Z9a6cdALP5lniAqhNzSlVwIgZ5iL6IM6bYVv5pbSNp0yHQarCsj2RnxQsl5wtXmzyBEqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCJF2LH15M1O1IerGyrcA838vqb4LfjLPrTCmL9lHVldUUMNKizKx1Vvc5%2Fhi%2FkNHzXUv72Z5rap7bjPSEdX9rw%2BkV5wJZdK%2F3%2F6DGwYKKIUex2Z1ded%2FE3bXFUl4W6IzauR3SuUf3n53pSfxF1kd9TdQ3XmA58vpnJeCK%2F1qHbOf4UUWLDQdF0Tq5DzXnucgWYniQmOvnLANupbNLx25G3roiTnrH%2FSEgaunOc46zYGC2rMVOjujac6UxI%2F3Geoz9aJmgR%2Bt4bXpZq7KWc63KgFjQ4uCwPJkBVj%2B3GF4VFLat75RwvrC5Q%2F3GrCvSaJSka3439lHuQdYaI%2BDCC4xNtgRva9iDM6SeXpqrXnM5CGuS3256%2BP7VWK5a20rs6Aa0R%2F7W7QCLJf0IBP1Spixd9s2PA0QP0w8Jd5k1%2Bkyy7NCkeM9qNPGszO48Ff7U9OftbTFrDfm%2FCApLykQ90eXQziKwMsAiNEu%2BhCwF1HhutMll%2BNs%2BRV6bPYdb9OP8MECWJyWk5J%2FtIOGzIAqC7SU3wvnLMZdjIcuXvtaE3TZ4CYRaYQt5jG8xXUHduToMCYL1QnGU%2FfpJ%2BEmvTsbP8YdjBc0SQHWrcqWhGVaXM%2F%2FIugx3Jpq2%2BtrXGPzEki1wizc4Wsxk%2FZ0ojSAzI9MOz5pb0GOqUBnmOx1f4UTu%2F671Ycb51Ktnv0EkAduA6M7v8uICx6e%2Fm6XbM2Kvo0uCMQxWWeP0Y3bC5QwHCHJhlLllEOr1aIQM5sSO30Ap%2B8lUGCMH2cbd%2FsOFS3nsk2snjvPcoXMROUNhnygxlzT5mAPstMoLmsD4dv081cmrXdCB1idb70nbQ5WxPT5ZCdHCDHtM3TRzl9UCyIKzeRI13QT0AiFh6JBv5ZZ%2FPi&X-Amz-Signature=617ea0ebae1224435037903f6eccef434374ef168ad4e658cd9ad436d952079d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTTACMAU%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T070814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEmWNSvQ01D3PK9dlkRI8RP0UbbA11lZTbtNkksGNgAQAiEA0uR97NqD1y36jgD8MMiCi3lL7q3z9aVWKA1WQSeaUm4qiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGePdbN30kn8aJHFlSrcA%2FkeyWnjoHXskooylH0E3obeOMFaSzQxt0xCUGtlqIqRjq5FgQQK4fwCgWve3Exdn7a3in4AzI9tN0veOgYhqew%2BfVl19h1Z8uRdrPI8hNNyhs7rv94FvdV29w07%2FvrPFAtvtEyfWKc7Mw%2FLrI1aNXdi8ha4I6uP9zb3durqXJIX7vbMenK2uYFjPVnrOeDc0D8Gs%2FgYjro2zJX%2Fbu%2BP%2BbW%2Fs5MwCz8b%2FxJQhJo%2BA5Uy5mpWdN5OcQ3vHOoZx2%2BgA1iPSwx2kd5kM2GTE2TjjJiJ6%2F3YWsNQDH11HHhxThYViSbtsw9lyTBaxhiB%2BfFfHEbK232nHl03k1yHeoPWsG%2BAsaR3kQoWdMCfek7sqUdTMB2Glc1WwTctlykWNyS8J2NpDoRN1LbyqluNl2sm3911W1tkPrOe%2FXwo1CuBEYJ8RubHNzjQyYaHerBQZClA5X2PIkJouEuxNRQRWCT0%2BKnTmgmO8rQTTVEA3WUrdCQqxXUAD%2BzO1Z0DHspQfQmjoIdImg0khto4Z8zW6jOHDFWntw9PNrSXggbZmE%2F3P0%2FCDhFd9rRo1yLv99PZ590D7N1y8b7FLowayoBHfRiOuzK5yLzh42sbnHnSlM6qR01MAdXZIzvNkKz%2F%2B2csMPH5pb0GOqUBEqZu1hw0ZYfdEMTCPtpIcrQNEvupt9TGCvmtLPoQ3m%2FG3ZZpioiuuQUDOIAHZB3cbc48AQj%2BeiKCJrvXletpXyjyLU%2BUtDf4G6LW9CkuHp7Bc%2FP8qivqeFOvQhPnRdMuV3puk%2BdeM%2BWDX%2F%2FHxTnQzgaupQn5z68jZxUhiMJjiwhzvUfzoB67ZOVeui77jjRnPDkD0oQNNriLhR%2BY%2FG2bZrCVUjRq&X-Amz-Signature=99defe1c1197c3886bbc2d95338c7ec9da88104b99ea7101ea855f356cd3c23d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRAAPCVL%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T070813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGyDu7jYbviaeWNdA8CANK7QFyolBIM7Hus0NpS7f7cDAiAmcxyGQmAOlVdHozIJZ9GzVT6EDwi9yTTT37eEJ4q%2FKSqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYh6xGR5QdtcZLxFmKtwDneT8178zfgGTUqZRTjfUgEGdtmDu5d1qoyiohpk3TeGx1bBRXRnubeBcNKSWqR4zKmmbjVyRbczAC9aNcEUeJspEMSP7HyqJMiXZpKD2O%2BLCY%2Bw55Ml%2F%2BTpJhNnfryqmiEOciAWR2vwTFn8KRSQgo3NsbXbLI6ISNb9ovKDJk6jtSV1yaj6jHedrcNfu3Sb%2BEGztjyS1lR71yC8i1%2Ft9k4ePaw9GzA2R3NwI4McXo9mrXzDNy5SzoLjKRkBYY3CqwDbEWoeTosJWbY0GHoytIO7164Q0OEfDGBWzbusoRz85tEx%2Ff2yLw7UnMxR%2B7CKrKn79%2B4%2FjVoiml3z%2B155Hl7TMUKfJ4ZWUrR8yb4gz3Sx1qF7TzXvTKWWcgieQ%2BcgUF9rnXfPgyVLRx18F6bXPVN3A8C%2BFQ%2F3uwxlX1dIWjx7otPgnSgshB9SSUVALbUZkiw5q%2BbITFp86BeRuVSZJipkh1oedP9VXgXHhN9QIxRA9rjMksLzxMHrAP9wBKaAGXKZMEoVyb04Gap0xBRcXwQa%2FKLt%2Fq0gXdDdS4ywe93fwmLA4WTR2gbTtUyIvT%2Bj6bXP3%2BIcN%2BRSZXUnFYQHGtg5cVySR%2FXQdB%2FkcnhdtQx26vNljmt%2BqAoviROcwzPmlvQY6pgHH%2BAiHhnVMQoYGbMZleyx1Se%2BTktyl6RFUBuRv7uub%2BsrhcVCwhYRXCPF%2FxsVgS3OR1%2Fxa0tRQjh%2BDZz91qH84g%2BEN3M7b03ai7uZI7H66DQzHDbUm1CVd%2FTi5vw9fMEzXZXrSQINmGVjGurmqZkpBzllSt%2FsN1SfkOFUzysW%2BM0QBfKLZZnIh9%2BrtdU%2BXGN1m%2BGV1awVNZglTGvgUv33qWERr3aam&X-Amz-Signature=24709b8369728ad3152931e3f596c0211b5b2b2a80ebb622ef52e566d69eea2b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
