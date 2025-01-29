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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662H7IXGFM%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T150734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEzqANJbIYBKlCvCv4l%2BsGnB3EKfRhLQNRs4eZNSnaJHAiAbFoWWdXybtkAMoyhFEf4rhdFTgMzcSMGWmoFwBjnjxCqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIME4SSHStlafO12hADKtwDwHbLxObxzTgS%2BFQ52GQtjQ7CI4Nq9rnXMZmD5E0oiUpYG1EB5p9HkawoQx%2B29hbFgIVjs9IFKT%2FKUpo6y6tLpnswhGAkZN6CsT2xgbBBjTaSACc%2BRYDD4H5HScAj%2FK%2B3CPEmtLbb6dUgMMB3RC7ng45NsEAomK1768nfP6SVXSRMbDvkrZUPEPobnlBTwvg4e5D9z1gw0y7gY50RUrr4JSu58pdzM7zj7szyuuctYNDy9dqnD41vwmZyxP3HM5AxO79pbVrOFePAqhd8xez80EB2Tcsmonr0HUQ%2Bigg5Oj%2FOBZqtx0RQTricL5h2FO5gP83vkJh2tgcMS4sb%2Bj8L7L%2FukFYyA%2BWMvFy%2B0gF5CORBjfWZDsQs3B6Yiy9NDow2vvjlkc5MFToNF15GIBl%2BO4%2F1zFijBgUj5SLSVkZ1v4C5HxEPt4E43A8KcWOMTnIwoVcDQRmOcN%2F9irqTimw%2BjjE1ljAg%2Bov6snV%2FqG3DfxOxjVjKfD25Ltwp7of5onOH6J5h3MtZl%2FzSLgw86iuBw0nlqS4jUaWXkLq563jdpKtWrmpdOz4c7u6LHs%2BR2aXusVu6iTyZLd0f44Q%2FfAjCO%2B3e2gpmReYp6tgGD1AvmTkizpCxfrk1U2xGBXow0oXpvAY6pgEvTLfgiKBnYL1uRomEyRStXpCMiVRCA0B2TZbp1qLXIJcNg85SQYL1TFcLQ3%2F6ykrgmJIX1eeRZjW%2FbW8feyaETR4Etwn23mYFlM99%2FojE5URCrUOILx60IQawvJ2iT3if1Ps8COg5Bw%2BHTeG89Nd6t%2BxV5QYVg%2Fvm7JwMuDqIrAo4jaz4gGUKxky%2FMWN22QThn9uT3%2BY%2Bzd5BpCG%2Fi9OCNUj8HUFE&X-Amz-Signature=7e13532273adfc6739ce71cfbc3bc6327f1c6476c1f60037e0a00d46c9f10601&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662H7IXGFM%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T150734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEzqANJbIYBKlCvCv4l%2BsGnB3EKfRhLQNRs4eZNSnaJHAiAbFoWWdXybtkAMoyhFEf4rhdFTgMzcSMGWmoFwBjnjxCqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIME4SSHStlafO12hADKtwDwHbLxObxzTgS%2BFQ52GQtjQ7CI4Nq9rnXMZmD5E0oiUpYG1EB5p9HkawoQx%2B29hbFgIVjs9IFKT%2FKUpo6y6tLpnswhGAkZN6CsT2xgbBBjTaSACc%2BRYDD4H5HScAj%2FK%2B3CPEmtLbb6dUgMMB3RC7ng45NsEAomK1768nfP6SVXSRMbDvkrZUPEPobnlBTwvg4e5D9z1gw0y7gY50RUrr4JSu58pdzM7zj7szyuuctYNDy9dqnD41vwmZyxP3HM5AxO79pbVrOFePAqhd8xez80EB2Tcsmonr0HUQ%2Bigg5Oj%2FOBZqtx0RQTricL5h2FO5gP83vkJh2tgcMS4sb%2Bj8L7L%2FukFYyA%2BWMvFy%2B0gF5CORBjfWZDsQs3B6Yiy9NDow2vvjlkc5MFToNF15GIBl%2BO4%2F1zFijBgUj5SLSVkZ1v4C5HxEPt4E43A8KcWOMTnIwoVcDQRmOcN%2F9irqTimw%2BjjE1ljAg%2Bov6snV%2FqG3DfxOxjVjKfD25Ltwp7of5onOH6J5h3MtZl%2FzSLgw86iuBw0nlqS4jUaWXkLq563jdpKtWrmpdOz4c7u6LHs%2BR2aXusVu6iTyZLd0f44Q%2FfAjCO%2B3e2gpmReYp6tgGD1AvmTkizpCxfrk1U2xGBXow0oXpvAY6pgEvTLfgiKBnYL1uRomEyRStXpCMiVRCA0B2TZbp1qLXIJcNg85SQYL1TFcLQ3%2F6ykrgmJIX1eeRZjW%2FbW8feyaETR4Etwn23mYFlM99%2FojE5URCrUOILx60IQawvJ2iT3if1Ps8COg5Bw%2BHTeG89Nd6t%2BxV5QYVg%2Fvm7JwMuDqIrAo4jaz4gGUKxky%2FMWN22QThn9uT3%2BY%2Bzd5BpCG%2Fi9OCNUj8HUFE&X-Amz-Signature=62ebd00471ec1fe6c7ca09dac5f186724a01d55b18ef6168c716e158960555a1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KPMJWS4%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T150736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDHn1tLpVnkINGC%2BbT4gm90O99EBzUlR7nXw%2BttbR4ZZgIgf9qFFTUf0hNiqN8Q9ywAGbLul9zy6N0Jjvrj4ElldloqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ%2FObRvMB%2FDnQnDHhyrcAwPcraVXGvxHMGUR3Vk4Kv9b%2BRUwD%2BjMPOCfN36X1xyPzN7f612bR9HId4WWe3mrnnkyidLmGJ2AA58knSSdqCBuUggnE2Alsob%2FOWhnofxQRz4TxmfebXN2cwlmGluEcSeq%2ByZpdJ1eExTot3JedIju0xnKRgn5loFiq%2B5JBlscjIW6SK06%2F8C7F4V%2FIshKfyvRXnX0pFejoYwiBFJneDsY%2BZ2mNW18Hu1P5Q7%2BRVqrJ4%2BBcTqy21j3idjKVCAMW4uuRFmGTSOteyS0jzbRNwvOfEw5pG29%2F4DwzYlAR15KQD1DNqXH%2F5RE8fu1HWK%2BSlMPXIPnGxt5EVoRiMvYjd%2FhWZC7Um0CAkelJk0YKDhdggy6L8BHgWX6oxQ7DORuk046blcdsnXmwGik%2BeDYZGZEZWj7Di0TsmMRxG4zH6peBNC9tetBEV6O%2Bd0vGQbyyLQA%2FEo2Xc44Y3zTWiwIL69z6zaEpBccklvA5QspK7GJjecsWvPiWYZeMh52aDkXqdXW9xVsoN4m44VzrywDu4kd7PPp5tEPSodSBeBPIkbWkeqYzU8e3bf2xQOIO8QyL8l1RvvB8Sqh%2FZX6hbFOLhGQmAqjM9bpNbEXu02tZ0aIXXEjv44ot3RIq9kDMNKF6bwGOqUBdwH8qjeXYm8ngR4YpRvgJQfbQzp7%2FGeSOTgeHIN%2BvAzoH9yF2KX2Te8nHbF%2Bks0CDP2s1RB7Ft59Zv4oGlS9sW0b1g7O3YxcycwJaaR35sE5dO%2FpaPnz%2FrP%2B2p%2BLdu2g%2FJvfy2xkCffJrTLIVaMT4wZcF3%2FU128%2BznNqq1VPVsgJRpB3wJ4dZEHn%2BNfhEGpR3%2BT4qdG0zEDWHopXVEU0WeBsuI0S&X-Amz-Signature=fdd9357a8cae63fca05a703e2d8321dafc6f45d7302d38c37209a752c0d5de3a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWEFO234%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T150736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCie%2FAj74xpIFs1aGcKCAOXpZJnVTKxpLpkeoMFlyAPuwIgO2B7aQuRXg5r70uxqqF5HJbIXDQIAeWNabOSawWHVDsqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJZwo%2FR8WWle6SStzyrcA5k4Qf48MuLMV%2BkdAi7AnOXc0MzZkfv16IN2PMVJ5Ij1xM%2BeDIfbccy%2BhJ2V6EZ9LRsH2UB0kxTyje9yzPpHC9r5XZ2ItA%2FNN7B33YMAv6Y2nZPjLlSeOOAre0montHhXk8Fir%2BXc4BIpWHrHYnwFTv9CGsXCaNVTeLVVfPoV%2FgJnrRGYlhc8IZUnhAWYe8WSV2gI%2FGmj6I%2BtoQkCPrmenxY2AQRjBYmT8VC6M%2FndDgPBZQ6Z9ZGxZZxT9D8lJi9rf6%2FDoEFsil7e%2Bkw0YWKi9HcuupIv%2BDbcXik%2B4IWheNA3Yos6zUqa79RvJMnm7%2FnrOrgNe1ye3zRVE9R0zb%2F1xQObR%2Bu%2B%2FFGzCdrwh5O9hH1fJiItPfUYCGPzJCvB7y565LXWt0AlsofwyM%2BpTzEWS3xaxud8dOpLHYPOWicfR1LSh%2BPT9i3K0UJ0bamO1Befyen4Pw6V7x3CzLpF7wX9piqXQQtys6N80YThavcNBSplJGYImxiqUtGg5Lbc2DOg6Jsok945AN9NBgeih4uzlompGtpUcOF4WHcf9dzsLedduzxWauofr8DtI0FP%2Fc2jbiPWe0nKtBGSiWDfsQrg6T4oX8bDgl57M0TOI%2F%2BoDJsUP25rA1H%2BGv2fsdCMJ6F6bwGOqUBDsRng99V11Bb%2FnYr6cF3eJ95enmGcd8nW12m%2FlyNGRjGD775KMd%2FF97YknUsm6OAwzaKkz71gnJCvF0kf%2BakvcyBc%2F2fRzKEfZrVk6G9wI6GD5F5jCIIBfZjGtXcGuhOLLmLnjGFZ5uOKSvIhtJ%2Fa7acC%2F2XXSuewoQoZ8OA53O1Nl9BoyvZUOzk7cmjMAZMVka5ARptKcr8HRrS03q%2Bhd5DObfA&X-Amz-Signature=9ce60c61d17393fc4552f20e9c4908bb690a8de019309b46f5446135dd830c90&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662H7IXGFM%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T150734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEzqANJbIYBKlCvCv4l%2BsGnB3EKfRhLQNRs4eZNSnaJHAiAbFoWWdXybtkAMoyhFEf4rhdFTgMzcSMGWmoFwBjnjxCqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIME4SSHStlafO12hADKtwDwHbLxObxzTgS%2BFQ52GQtjQ7CI4Nq9rnXMZmD5E0oiUpYG1EB5p9HkawoQx%2B29hbFgIVjs9IFKT%2FKUpo6y6tLpnswhGAkZN6CsT2xgbBBjTaSACc%2BRYDD4H5HScAj%2FK%2B3CPEmtLbb6dUgMMB3RC7ng45NsEAomK1768nfP6SVXSRMbDvkrZUPEPobnlBTwvg4e5D9z1gw0y7gY50RUrr4JSu58pdzM7zj7szyuuctYNDy9dqnD41vwmZyxP3HM5AxO79pbVrOFePAqhd8xez80EB2Tcsmonr0HUQ%2Bigg5Oj%2FOBZqtx0RQTricL5h2FO5gP83vkJh2tgcMS4sb%2Bj8L7L%2FukFYyA%2BWMvFy%2B0gF5CORBjfWZDsQs3B6Yiy9NDow2vvjlkc5MFToNF15GIBl%2BO4%2F1zFijBgUj5SLSVkZ1v4C5HxEPt4E43A8KcWOMTnIwoVcDQRmOcN%2F9irqTimw%2BjjE1ljAg%2Bov6snV%2FqG3DfxOxjVjKfD25Ltwp7of5onOH6J5h3MtZl%2FzSLgw86iuBw0nlqS4jUaWXkLq563jdpKtWrmpdOz4c7u6LHs%2BR2aXusVu6iTyZLd0f44Q%2FfAjCO%2B3e2gpmReYp6tgGD1AvmTkizpCxfrk1U2xGBXow0oXpvAY6pgEvTLfgiKBnYL1uRomEyRStXpCMiVRCA0B2TZbp1qLXIJcNg85SQYL1TFcLQ3%2F6ykrgmJIX1eeRZjW%2FbW8feyaETR4Etwn23mYFlM99%2FojE5URCrUOILx60IQawvJ2iT3if1Ps8COg5Bw%2BHTeG89Nd6t%2BxV5QYVg%2Fvm7JwMuDqIrAo4jaz4gGUKxky%2FMWN22QThn9uT3%2BY%2Bzd5BpCG%2Fi9OCNUj8HUFE&X-Amz-Signature=7a2721fd247d9998ed1e44a8a2ab495256fa3414c0c5d64d7cfb49653546239a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
