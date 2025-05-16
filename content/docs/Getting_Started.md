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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMCUKGZR%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T190107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZR%2B82ygZScnVYg%2BIGA1LKRRHksGcDBpsX7u2soR%2FgugIhAOwgZ%2B8MW5MtKfsvX60lGEnogAccrNmaOcj9q6x0hw95Kv8DCEwQABoMNjM3NDIzMTgzODA1Igyj34pn%2Ffy4E0BTA1kq3APi98GMmw3TtVdSlbwaVcJIzFxhU7JnGBs8fUwDNEhL2C5hGf1c%2FLE04C%2FoW3ssJ%2FUXEX6wDUgHhpb8itdGN%2BCcJJ0TYfWxbclkI%2BT2oQfv45EsGiQOiOZjJhNAPG%2B6be7T1LrDZULBG3PL1lorRJIwMp1iTbyQ%2B4EgJp5zY%2B9o4lys3ZsZRZXUJYNcG0hFpzOxK0GsO1es7jjoRgkN%2Fw7tVZo48vASMEidppcWHVyoEJsxoWXNztLmS%2BHQsLzMo9CheQHz3SjWiy726YqqlhnYRKkKkVZjq9pMnrX8UTviMIN%2FXXXtqTgYuflpj3jy%2BPdsxh3VQzhCV2AajBjUOjGvEfi9nl9RA10xSYAdgOrOe3OHLBqm3Jix8ULQ6S1G7FHkNZtjBuC00Cq537K7e6vbYcPox0HztcNHcSPM6PRRAaIwb17BeucWIDjOWXOAmzqkUqEZNtnYhjDgp34op4B2pH0tORJUSfXrNjYCwaCMTyJBVWzkr47wTtjAM%2BfaSIbLmhiB69rPaweMhzKcYastlK4xJjnF6jL09fATPd7ZfYvGLbHmqOxXw5TtZBm6hqEAh9SWtI%2Bx%2B3qRN8%2BOBHNXBL%2BCFFbqURPE7GimGXBfvdb6ra8RGE%2FudLphjjD7j57BBjqkAbbBKJgRQJJiOcieEMYawhJKgPbl%2BKgL%2BOC5YEf9%2F%2FD9IqWGrpKniK78b9IcXPVt%2FMpXsv9tnxuRLVp3c73KDzHOTyJUrV3LQ7b%2B3yx%2FE84HP5GBukA%2FphgtFh2v8f6auwStXL%2F9i%2FB8s8tpyKzw41Gwm%2Fyt%2B2xqGbfc42RWYalL7uGDdwaNj8L2LeCG%2BSCXBsYeRFZ%2BjY5FsMqkkjvkf0HoQGIP&X-Amz-Signature=c1473d803f2b1b34e99cc5321128334a4ddfc226a69b3e821bf7dfae4ec11fd5&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMCUKGZR%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T190107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZR%2B82ygZScnVYg%2BIGA1LKRRHksGcDBpsX7u2soR%2FgugIhAOwgZ%2B8MW5MtKfsvX60lGEnogAccrNmaOcj9q6x0hw95Kv8DCEwQABoMNjM3NDIzMTgzODA1Igyj34pn%2Ffy4E0BTA1kq3APi98GMmw3TtVdSlbwaVcJIzFxhU7JnGBs8fUwDNEhL2C5hGf1c%2FLE04C%2FoW3ssJ%2FUXEX6wDUgHhpb8itdGN%2BCcJJ0TYfWxbclkI%2BT2oQfv45EsGiQOiOZjJhNAPG%2B6be7T1LrDZULBG3PL1lorRJIwMp1iTbyQ%2B4EgJp5zY%2B9o4lys3ZsZRZXUJYNcG0hFpzOxK0GsO1es7jjoRgkN%2Fw7tVZo48vASMEidppcWHVyoEJsxoWXNztLmS%2BHQsLzMo9CheQHz3SjWiy726YqqlhnYRKkKkVZjq9pMnrX8UTviMIN%2FXXXtqTgYuflpj3jy%2BPdsxh3VQzhCV2AajBjUOjGvEfi9nl9RA10xSYAdgOrOe3OHLBqm3Jix8ULQ6S1G7FHkNZtjBuC00Cq537K7e6vbYcPox0HztcNHcSPM6PRRAaIwb17BeucWIDjOWXOAmzqkUqEZNtnYhjDgp34op4B2pH0tORJUSfXrNjYCwaCMTyJBVWzkr47wTtjAM%2BfaSIbLmhiB69rPaweMhzKcYastlK4xJjnF6jL09fATPd7ZfYvGLbHmqOxXw5TtZBm6hqEAh9SWtI%2Bx%2B3qRN8%2BOBHNXBL%2BCFFbqURPE7GimGXBfvdb6ra8RGE%2FudLphjjD7j57BBjqkAbbBKJgRQJJiOcieEMYawhJKgPbl%2BKgL%2BOC5YEf9%2F%2FD9IqWGrpKniK78b9IcXPVt%2FMpXsv9tnxuRLVp3c73KDzHOTyJUrV3LQ7b%2B3yx%2FE84HP5GBukA%2FphgtFh2v8f6auwStXL%2F9i%2FB8s8tpyKzw41Gwm%2Fyt%2B2xqGbfc42RWYalL7uGDdwaNj8L2LeCG%2BSCXBsYeRFZ%2BjY5FsMqkkjvkf0HoQGIP&X-Amz-Signature=5d3492776f12acf712b5486b8fa3e52bc1fc4bd44a52e78de9c9743064142176&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMCUKGZR%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T190107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZR%2B82ygZScnVYg%2BIGA1LKRRHksGcDBpsX7u2soR%2FgugIhAOwgZ%2B8MW5MtKfsvX60lGEnogAccrNmaOcj9q6x0hw95Kv8DCEwQABoMNjM3NDIzMTgzODA1Igyj34pn%2Ffy4E0BTA1kq3APi98GMmw3TtVdSlbwaVcJIzFxhU7JnGBs8fUwDNEhL2C5hGf1c%2FLE04C%2FoW3ssJ%2FUXEX6wDUgHhpb8itdGN%2BCcJJ0TYfWxbclkI%2BT2oQfv45EsGiQOiOZjJhNAPG%2B6be7T1LrDZULBG3PL1lorRJIwMp1iTbyQ%2B4EgJp5zY%2B9o4lys3ZsZRZXUJYNcG0hFpzOxK0GsO1es7jjoRgkN%2Fw7tVZo48vASMEidppcWHVyoEJsxoWXNztLmS%2BHQsLzMo9CheQHz3SjWiy726YqqlhnYRKkKkVZjq9pMnrX8UTviMIN%2FXXXtqTgYuflpj3jy%2BPdsxh3VQzhCV2AajBjUOjGvEfi9nl9RA10xSYAdgOrOe3OHLBqm3Jix8ULQ6S1G7FHkNZtjBuC00Cq537K7e6vbYcPox0HztcNHcSPM6PRRAaIwb17BeucWIDjOWXOAmzqkUqEZNtnYhjDgp34op4B2pH0tORJUSfXrNjYCwaCMTyJBVWzkr47wTtjAM%2BfaSIbLmhiB69rPaweMhzKcYastlK4xJjnF6jL09fATPd7ZfYvGLbHmqOxXw5TtZBm6hqEAh9SWtI%2Bx%2B3qRN8%2BOBHNXBL%2BCFFbqURPE7GimGXBfvdb6ra8RGE%2FudLphjjD7j57BBjqkAbbBKJgRQJJiOcieEMYawhJKgPbl%2BKgL%2BOC5YEf9%2F%2FD9IqWGrpKniK78b9IcXPVt%2FMpXsv9tnxuRLVp3c73KDzHOTyJUrV3LQ7b%2B3yx%2FE84HP5GBukA%2FphgtFh2v8f6auwStXL%2F9i%2FB8s8tpyKzw41Gwm%2Fyt%2B2xqGbfc42RWYalL7uGDdwaNj8L2LeCG%2BSCXBsYeRFZ%2BjY5FsMqkkjvkf0HoQGIP&X-Amz-Signature=0e9f4025c1f7f615076a359fc1452802d5c5d99ca7a4ee1ae36b0879fd6f5ca5&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MG7QUAP%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T190113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2FRd4lajTEmrb%2FPIzghve4iUp%2BZHiNEvmiFX9y%2F6xlvAiBRx2kVMeIEQpVT0I63PEmYYY9cKVFjiLHLRZljQ0Dc8Cr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIM5WGAln630YqC8J7mKtwDbSSiI4RLiguXyGK7w4rcDKNbRhoi2j6y8JzFbhph9TyvO7wJUAZjhRkrW9oB3pF%2F33kC2CRnLRHKamTjt4aWQW2uzqkcgMNe7f%2FGYljxNLqMinqR5aP5XGlebH4ptuQrA0ipIr4WI7JlaaDfJxBLfjJO5W12Evi2tDNb%2BIRpFEBYhR77EOd10azHTAF0%2FJjB%2BfkNJk8zlt5nKvliE%2BnI%2BnHYfxQ%2FDvfBbAQKUburQOns8Pk%2F4yXXg%2F2kzGlgbfCVbsga1hx8%2Fp1aAy2iTZ28qqiBsfqpxtdX%2FZnXYCLnGCxzUsPtv%2BQyQJxM6OFC7iG6KDnJHtA12xzlQkOHCaTaeRdJ9%2FCmxs9gM5BYINv7iWA8oK%2B3zqO9DcZFETTsJNnm%2BCLpRCwF7hVyNii2OWLrpWZTE11lluLDh8%2B1vBWEwCNKDalUL1uD0EB%2FT2Y6%2FngZwHNT5rsAzSzbytMFhnP27MsDtxqkn2B0DwT%2BGrK%2BL%2BbLlPHr26eaOzBInEGt8FNYeHS0wK4I8IgBI9Z5jLZzYAST1FViycceRDIp7%2FK8kiQQ1vzwBTlj31YoJzLld3n87MDV%2Fz9VEeOe8d1lGfTylOpUnDNXTafKePQl%2FCFl3AwAreVnCQT2dROG6tgwlJCewQY6pgH3cYzmHCEbviQRbhFPaC7U9Hzm7lmgG9CeHAHAOzAKqNHYk0DWTPTAbTWagiuceNnF7wpVhgIzhDYoWXDIDonbVGuuqEiUS2B1bnroYajS%2Fw%2F7Y3s7%2Be1QCD5S0pKUtoAlIOAiZc038Kt4sRyOoR4SzWJAFImBU9Xj2gKpt3cxDrKF6GnFzzFHS%2BZwNY5VRwTItWsBG%2BbExh0M2MUoyw6aCI6xL5Jv&X-Amz-Signature=00fe3205dfabaad116941f7e8273085c1949b6eb4403e94dc84809952c05db63&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBPDGWWY%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T190113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHA2rJeA5cSBWCNIRbM64bEFMJsB9HXLxk2VE5aOF08gIhAIOFq9GCm1a%2FS1ig0nDKTKaO5HIRc7CFJHHo7msD6LbHKv8DCEwQABoMNjM3NDIzMTgzODA1Igx1pOyfCSRL4S5G5ukq3AMUEH3s0BbScBwiHc0grYYaYF%2FI22h941eilRGrsT552ImrV87ZxG%2F1z5UenxiH%2Bfkx6w54OTu16M6ITQTfbswuT3ShVNx5Mg9533eFg0xw0pN7cNKmUm1r979BSdzXA8SC9QKeCiOZwKqXiA9%2FXQhSRZor%2BAtjNMbOVJA3ifADDXn8nUhvhc8t%2FwRTnivieDH6ducn3XOWtifSTkzTdVEhNE9GbhGQSuBTyxAC9jnIhfSOeP5T7Mnm2x6nyIMMFMxTM6%2BonNW2yE105%2FVDVpDVWL9%2F8Efl8DS5QX4nWpznWz1aq4MfdZzmNR3g2xuHybTcxecliGEYviR1MWKbdEltP0lbgcRrpH0NXUIZjHjhotyAEBjxuc0jlcW76MF0rb1Rdm8z0sweudJPi51mRa5dJ8dvb2SYB3XRVJzw4HUWaCcPzPldRm1fHHm3fyRZHxqGDWmSGLtljE2Ytv85tk5nCJhFdOwVL5mw1DjDwxd%2FyMTQlwSrCX3kH012mukoriQ%2BKFgeTCmIgNePCZIW4Fb%2FLTajfb07FXUf3EThC1uctDv%2B%2F5Qje2sbTK4hekbZgvBEWrm8Y3iFIQOnD1Yn4SI%2B7pFWmQt4%2BjAh%2F%2BdSx49Q0Jot0CGarTObeKFMWTCikZ7BBjqkAVDIBcEDShXChr05XEoVvbEawu3qSmO%2FwvjtQxe3amg2p8%2FEb%2BoraZzgdjK%2FlEukIg1DVDRELtLT%2B80Ba24f8CxuvjP4LwW%2BnD0JufFq6vGHKhPlMGaGlp%2B5jmSwO1wfNYpgAWErVxTnP%2FmOGLCON%2FU4qb2gqamkNjbLfzMrJTGh06d0BxBl674qa9w6RUPp%2FuHTBIlizkEqaXkpZzfgiH6YnBdx&X-Amz-Signature=c3ee9092a310055420df255208f3a04ade0d2fe8d83150ca2a9de7ca7dda8303&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMCUKGZR%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T190107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZR%2B82ygZScnVYg%2BIGA1LKRRHksGcDBpsX7u2soR%2FgugIhAOwgZ%2B8MW5MtKfsvX60lGEnogAccrNmaOcj9q6x0hw95Kv8DCEwQABoMNjM3NDIzMTgzODA1Igyj34pn%2Ffy4E0BTA1kq3APi98GMmw3TtVdSlbwaVcJIzFxhU7JnGBs8fUwDNEhL2C5hGf1c%2FLE04C%2FoW3ssJ%2FUXEX6wDUgHhpb8itdGN%2BCcJJ0TYfWxbclkI%2BT2oQfv45EsGiQOiOZjJhNAPG%2B6be7T1LrDZULBG3PL1lorRJIwMp1iTbyQ%2B4EgJp5zY%2B9o4lys3ZsZRZXUJYNcG0hFpzOxK0GsO1es7jjoRgkN%2Fw7tVZo48vASMEidppcWHVyoEJsxoWXNztLmS%2BHQsLzMo9CheQHz3SjWiy726YqqlhnYRKkKkVZjq9pMnrX8UTviMIN%2FXXXtqTgYuflpj3jy%2BPdsxh3VQzhCV2AajBjUOjGvEfi9nl9RA10xSYAdgOrOe3OHLBqm3Jix8ULQ6S1G7FHkNZtjBuC00Cq537K7e6vbYcPox0HztcNHcSPM6PRRAaIwb17BeucWIDjOWXOAmzqkUqEZNtnYhjDgp34op4B2pH0tORJUSfXrNjYCwaCMTyJBVWzkr47wTtjAM%2BfaSIbLmhiB69rPaweMhzKcYastlK4xJjnF6jL09fATPd7ZfYvGLbHmqOxXw5TtZBm6hqEAh9SWtI%2Bx%2B3qRN8%2BOBHNXBL%2BCFFbqURPE7GimGXBfvdb6ra8RGE%2FudLphjjD7j57BBjqkAbbBKJgRQJJiOcieEMYawhJKgPbl%2BKgL%2BOC5YEf9%2F%2FD9IqWGrpKniK78b9IcXPVt%2FMpXsv9tnxuRLVp3c73KDzHOTyJUrV3LQ7b%2B3yx%2FE84HP5GBukA%2FphgtFh2v8f6auwStXL%2F9i%2FB8s8tpyKzw41Gwm%2Fyt%2B2xqGbfc42RWYalL7uGDdwaNj8L2LeCG%2BSCXBsYeRFZ%2BjY5FsMqkkjvkf0HoQGIP&X-Amz-Signature=1f142345b652b0ef51bb1399dde6ae2cc430e0fab79cd13a95b4e810495f03cc&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
