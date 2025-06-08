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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ION7WSR%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T131811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCoJ6CYUhtzJitrQWcZr%2BjtghYDkFMho4CmupiJZrChqQIgdQefkMTAVFRDdBGTGUD9gqAc9rieUZJhEtr55mSkA1sqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAh80FYfO5coqa2NRCrcA%2FvpRcCmr%2BSMjgPbXdhHQXRWqTbFCHOgr7EkW0az3Yo4NqvnG2m0jpZg0bjc1Zjv2aRcsB00zYUke02ioenmBa%2F1yqu6Ok%2F6KvPaQWObcXRye%2Bu%2BX%2F3cNtmhMuOJoNGwBeBzRnaFvtXMm8HN5VyinpIHwo%2BjL%2BDyoG%2FlFfE%2FE%2BCoq%2Ft3cfWnWl873lx%2FVcBLUv3QB3Tyud1Qf0zH81wymV4hy7cFeMtGlspNyhC%2F2k2hTPySEpeNXR6xiVb4aCG0itYferuhAGC3Un8Ozp8VIHDcLma80WDc3R73Ujgu7ZorGBi3WFrVCOQfKyAj3791cpr5nRPcqkP9KgzYVjZhlh9kScvorwmzASv%2FDcyyIBxYPphZT2k5rflUI2plz787O9n3D5n2VYmVuw1gh%2FBCdqJZNj%2F0RZYC%2FSFV459bPAdfm3KEKWB1ecoeMC2MuH5lCSkP61Jfyu%2FCsudX%2FGU9XPFLaZpNLwoaW24I71IDhcV8GM2Mdls5aM1ynWxk80oE0zbBmka7%2BaJlt2Nb2oQE7t0aeFGTHbwxt4XbY5asEJgxwePEQijoY3%2BYBXAR1njn1Rk2QvD1t7f0rTYEjvSM7bucX0EX9GEsZibQyLyjhOXAoxwFISt09y0cFf9RMKOnlcIGOqUB7v3t%2FO0Y9x964i4XmViTWP9Dq8Ve%2F21KSQte3GUmPyXrYzPVOGbgyxJM23IUeZtRrDbPCqve%2FE%2F%2BB3Xoq5KuPiImgrejGDyvpBeuAyd8RRGLxGyZbGkzln9iDka1oQkxXE5xHANA%2BEMkPd3rVwKsKKb7HfeR%2BOHg4FvgUqDfQhzKbx7fE%2FiVu0KI1XnyiPd3JXXk6lPje5Df55kcgSO2z3AW%2BeP2&X-Amz-Signature=13d5d9daaec753e2c7a73f341f2429783d2604e8e9c15a6029d7ec07e1184df0&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ION7WSR%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T131811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCoJ6CYUhtzJitrQWcZr%2BjtghYDkFMho4CmupiJZrChqQIgdQefkMTAVFRDdBGTGUD9gqAc9rieUZJhEtr55mSkA1sqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAh80FYfO5coqa2NRCrcA%2FvpRcCmr%2BSMjgPbXdhHQXRWqTbFCHOgr7EkW0az3Yo4NqvnG2m0jpZg0bjc1Zjv2aRcsB00zYUke02ioenmBa%2F1yqu6Ok%2F6KvPaQWObcXRye%2Bu%2BX%2F3cNtmhMuOJoNGwBeBzRnaFvtXMm8HN5VyinpIHwo%2BjL%2BDyoG%2FlFfE%2FE%2BCoq%2Ft3cfWnWl873lx%2FVcBLUv3QB3Tyud1Qf0zH81wymV4hy7cFeMtGlspNyhC%2F2k2hTPySEpeNXR6xiVb4aCG0itYferuhAGC3Un8Ozp8VIHDcLma80WDc3R73Ujgu7ZorGBi3WFrVCOQfKyAj3791cpr5nRPcqkP9KgzYVjZhlh9kScvorwmzASv%2FDcyyIBxYPphZT2k5rflUI2plz787O9n3D5n2VYmVuw1gh%2FBCdqJZNj%2F0RZYC%2FSFV459bPAdfm3KEKWB1ecoeMC2MuH5lCSkP61Jfyu%2FCsudX%2FGU9XPFLaZpNLwoaW24I71IDhcV8GM2Mdls5aM1ynWxk80oE0zbBmka7%2BaJlt2Nb2oQE7t0aeFGTHbwxt4XbY5asEJgxwePEQijoY3%2BYBXAR1njn1Rk2QvD1t7f0rTYEjvSM7bucX0EX9GEsZibQyLyjhOXAoxwFISt09y0cFf9RMKOnlcIGOqUB7v3t%2FO0Y9x964i4XmViTWP9Dq8Ve%2F21KSQte3GUmPyXrYzPVOGbgyxJM23IUeZtRrDbPCqve%2FE%2F%2BB3Xoq5KuPiImgrejGDyvpBeuAyd8RRGLxGyZbGkzln9iDka1oQkxXE5xHANA%2BEMkPd3rVwKsKKb7HfeR%2BOHg4FvgUqDfQhzKbx7fE%2FiVu0KI1XnyiPd3JXXk6lPje5Df55kcgSO2z3AW%2BeP2&X-Amz-Signature=20bde92c8922d91d1a78fe7113744e1d007f8fd978dbec81bc5ed5cfedf34348&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ION7WSR%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T131811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCoJ6CYUhtzJitrQWcZr%2BjtghYDkFMho4CmupiJZrChqQIgdQefkMTAVFRDdBGTGUD9gqAc9rieUZJhEtr55mSkA1sqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAh80FYfO5coqa2NRCrcA%2FvpRcCmr%2BSMjgPbXdhHQXRWqTbFCHOgr7EkW0az3Yo4NqvnG2m0jpZg0bjc1Zjv2aRcsB00zYUke02ioenmBa%2F1yqu6Ok%2F6KvPaQWObcXRye%2Bu%2BX%2F3cNtmhMuOJoNGwBeBzRnaFvtXMm8HN5VyinpIHwo%2BjL%2BDyoG%2FlFfE%2FE%2BCoq%2Ft3cfWnWl873lx%2FVcBLUv3QB3Tyud1Qf0zH81wymV4hy7cFeMtGlspNyhC%2F2k2hTPySEpeNXR6xiVb4aCG0itYferuhAGC3Un8Ozp8VIHDcLma80WDc3R73Ujgu7ZorGBi3WFrVCOQfKyAj3791cpr5nRPcqkP9KgzYVjZhlh9kScvorwmzASv%2FDcyyIBxYPphZT2k5rflUI2plz787O9n3D5n2VYmVuw1gh%2FBCdqJZNj%2F0RZYC%2FSFV459bPAdfm3KEKWB1ecoeMC2MuH5lCSkP61Jfyu%2FCsudX%2FGU9XPFLaZpNLwoaW24I71IDhcV8GM2Mdls5aM1ynWxk80oE0zbBmka7%2BaJlt2Nb2oQE7t0aeFGTHbwxt4XbY5asEJgxwePEQijoY3%2BYBXAR1njn1Rk2QvD1t7f0rTYEjvSM7bucX0EX9GEsZibQyLyjhOXAoxwFISt09y0cFf9RMKOnlcIGOqUB7v3t%2FO0Y9x964i4XmViTWP9Dq8Ve%2F21KSQte3GUmPyXrYzPVOGbgyxJM23IUeZtRrDbPCqve%2FE%2F%2BB3Xoq5KuPiImgrejGDyvpBeuAyd8RRGLxGyZbGkzln9iDka1oQkxXE5xHANA%2BEMkPd3rVwKsKKb7HfeR%2BOHg4FvgUqDfQhzKbx7fE%2FiVu0KI1XnyiPd3JXXk6lPje5Df55kcgSO2z3AW%2BeP2&X-Amz-Signature=bee55181c8cb1bb7b61951ff57c52ba205fd7aa517133a1b7c2af6f0a51546ea&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBSGJTLP%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T131815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHoVsb1oDZSl0DxxKLeOpQKXhyMYLjiJ1yVzkB2KBoapAiAlaDmo%2F1zRybYo4q0EpsP%2BgNdCAqiWhMCrse7aN9c%2BVyqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMG%2BLPXhXP9jtEv9BiKtwDo6hKyHuxHCy7RTeN9QPRygxfOVIyyS2zFunc1gWUojdgV6bC0dIsnguIpg4gnINQt%2Bu19WpH2CUfHSXEbskQOUgc3GgXkf1p1ECa5NFCw6aR%2FIZPowk7hW6bC2jXRFjt6JrA%2Bv5Ugro5yJmZ%2FLD1oSrDF5WQAAarNbH%2BGanx2%2Fr6xWkXXGeVc85vyRZz31iw2CfIMii0mjWWO5OTajMW1S8XHAKLDOZ5qGQZPilkCYEoWCDNGiFsrbVI%2BUXCfCR3az88T9JHP%2BAPQnILSsSe9%2FttFP3tT13phC8pPulYw5nR%2FM59BkFulJpNLS25nysMeMW%2B5rKgP4b4yRuFt7MOF7BuuEU3z6FMKSQFhFELgYUMQ08Q2bbYL4l3gS%2F6RHb54YKCks2DTI%2FQrvlbAij%2BhAensJjKAjMuPSUazt1shVb%2BKc5MGvp704GaTaiz%2BKsXMelLqsZdRu61s3RTuNLFKQ%2BU9YSzshyAppLZ1CUWEO3xD0iviqfHnE98QVBqQRDfLM%2FBpK08uvqGRW4sQA44kdb5qepL0XPIjws37Zhm1QPw80EpMgS%2FZfl0Wp5NqM1W1wDyaRKlmallo2RzzhPkBCG70o0xnuhKXstkccbesoWD9srjXR9UuxHCbhAwtKaVwgY6pgFVYFwhpuAEhhJqLFa5757BZs7EU%2BPO5e5sIzfMBJmdFIuzC2fl%2FAtNR4MQ2oNLL265JjfYNTiHdrYeMS4rKOkTMgFhDnOWB4aIqjcxsvWLYSxMImoFduHmI5PAko8DJU3%2FlOksnU9N0OrcIubWISm6shmfgrrJ%2F4ZhA8XpFSGOtVSb1%2F4FS5e0kYwWVpXqcfTaQGlBZnj1Zbax%2Fq5%2Fp2yNVP%2FU8vPL&X-Amz-Signature=96c2f9b5f2144730b97c8f4d624a348feda15bee195213c5ea1dfa0999a47e3a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WVSSWKQ%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T131815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFaqFNt1QShx93WUtDWAWU80%2BeJ8HG8coHyKf22e%2BWYVAiEA0kHXCg6dIKEaSRrBnLO8JjkDBPjwUeCoiIxyFmme5bYqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLGMr6hIqJSn0qmgTircA%2By3RN5EyqIQn2wtuG%2FC2ZwQXG2e1MJO7kqF0oOA9prNFQUfOLaPCvvr01X%2B6koclDh0wP6xQGgKY7YCfx5rJy6yeqH%2Buv3FP7kBKLIzJLk9jFa7Kkh0ycFP0RFXnm1FOSQ3pr8NUCTmEzFCwlNchFwIwk5Hl9i5DPrT4YAyN80Z5C9UVN52T7IqptlxDAhAxomB18MSSY8qIQBpFLxF4OSW2R1S5782qvDdnUcOFgQ5IOA9YIqxUPfDjvnJ4Tng6GCFRXKD1MYBDfz4HUAb4FabWxz1N98dp9c1Jtb4LxMuH4TDSsMDcEAR4T0Ft8mephedjWopaD%2FXVQaEq%2BGKrrUHyqHqK4iVprc0SP%2FueI4mLfNC%2FY4GZT1jFI05O0v%2FdBj9WeW4E3ILSFQ0BUVcokK5mtshwui2VnThwqQVt%2FUjQXdcw8jN2oLULZUfPaY6a5K8w7xc%2Fxkg3hBX0uE5hRf3KooR428ntRzJ1D59vXKmkBW2UXO0im%2BrZaoOMNDKgKFqIToygVjdu%2BE%2FpxaCHpQ55QlENcwjy3JPpCy8wZlafXtt5dUske%2B4x3z%2BwTIy58ThZSPQ%2FI%2FOV6HWDrY%2BlZKYOIQLOKSwe81A%2BiTBGpzdwRZ8rHm4pt8DYrA%2BMNymlcIGOqUBBd3%2FIoHxGG85EGcTSS%2FtrFVWOSDQXRENSJ%2Bd22oE8hCXFyQeQ4ypCGjScOExQEcDZtW2lm7pkyN9bxJwAyRAsGpD9zCSV8kDyMsbpp9FotLls8H1GBhnhu8Ld%2Fxp0LDIG2ZfZwOYtwjaU3c33vYj5ppr1thevUPYghOKj%2F1G5dbcwm2oJu%2BnoIQaUAIyHNT6D99c8YVolaaufrDq3aNkf0wGcP8h&X-Amz-Signature=59c5a7f2e623c287de5c03f47beff71526a975ae4f5b3034f0076e92a37adb48&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ION7WSR%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T131811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCoJ6CYUhtzJitrQWcZr%2BjtghYDkFMho4CmupiJZrChqQIgdQefkMTAVFRDdBGTGUD9gqAc9rieUZJhEtr55mSkA1sqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAh80FYfO5coqa2NRCrcA%2FvpRcCmr%2BSMjgPbXdhHQXRWqTbFCHOgr7EkW0az3Yo4NqvnG2m0jpZg0bjc1Zjv2aRcsB00zYUke02ioenmBa%2F1yqu6Ok%2F6KvPaQWObcXRye%2Bu%2BX%2F3cNtmhMuOJoNGwBeBzRnaFvtXMm8HN5VyinpIHwo%2BjL%2BDyoG%2FlFfE%2FE%2BCoq%2Ft3cfWnWl873lx%2FVcBLUv3QB3Tyud1Qf0zH81wymV4hy7cFeMtGlspNyhC%2F2k2hTPySEpeNXR6xiVb4aCG0itYferuhAGC3Un8Ozp8VIHDcLma80WDc3R73Ujgu7ZorGBi3WFrVCOQfKyAj3791cpr5nRPcqkP9KgzYVjZhlh9kScvorwmzASv%2FDcyyIBxYPphZT2k5rflUI2plz787O9n3D5n2VYmVuw1gh%2FBCdqJZNj%2F0RZYC%2FSFV459bPAdfm3KEKWB1ecoeMC2MuH5lCSkP61Jfyu%2FCsudX%2FGU9XPFLaZpNLwoaW24I71IDhcV8GM2Mdls5aM1ynWxk80oE0zbBmka7%2BaJlt2Nb2oQE7t0aeFGTHbwxt4XbY5asEJgxwePEQijoY3%2BYBXAR1njn1Rk2QvD1t7f0rTYEjvSM7bucX0EX9GEsZibQyLyjhOXAoxwFISt09y0cFf9RMKOnlcIGOqUB7v3t%2FO0Y9x964i4XmViTWP9Dq8Ve%2F21KSQte3GUmPyXrYzPVOGbgyxJM23IUeZtRrDbPCqve%2FE%2F%2BB3Xoq5KuPiImgrejGDyvpBeuAyd8RRGLxGyZbGkzln9iDka1oQkxXE5xHANA%2BEMkPd3rVwKsKKb7HfeR%2BOHg4FvgUqDfQhzKbx7fE%2FiVu0KI1XnyiPd3JXXk6lPje5Df55kcgSO2z3AW%2BeP2&X-Amz-Signature=23914f8b025c4d908eded8a31243423f5c40feb09f9b57ebadbb27e2f9fac52f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
