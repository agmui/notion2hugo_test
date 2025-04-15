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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2L4KISM%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T041041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA8CAEhpEDoLm8b2k1NXbMyqsUYTo7R57TNdTfwQSbecAiAVY5Ppa6vY1mJKUekdcg0tVJPMoNItC6V8Z2%2B%2FAARRFyr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMp7o8os5QnklALRlrKtwDmb%2Bsi19nbss4IIkoeSlpIcgFcujoUSRerRltoYyM5Q1aa1xsPFL1xwrL%2BTCknxeWaz8XyMfdFCZGvPhMHdXOgi8ssERCM0Z6YpuGc4KZpjlrtejxU%2BEPwPwSXAJN0zYhN0Q2E%2FBRfAy61s4UMTzf0629uDcmrHpRZTTVcbQSby3Apboe%2BF8Th0FBEWkWu%2FR%2BPZBAPoW%2BOqLDWpUG3OLrUERngo0xUZcmSO9skjA5K0ppMi8TdStp5amZwhTh0UfamsonKfpVkNhO9hnyKWBnoOekuC8lMAD1GZaggr7wIJZNA%2BMF81v6cY%2Fvanw39H1Vcew8Uoaa01P9SAC8t6Pd5LlCbpPGNVll5JI9fDqpLw7XDWF0YGOp7ORlJeBFv3dExWd%2FDl9pKg79yICLisD3cWc0ziu61c6gqSoW8UsqC6g%2B17XZ9myX8Ql63y1YvqA5RhyDVeptcpwI7gs%2FT9idnV3TP6afsZirP9ph7O1J%2BSdj%2FPKrFOo98A%2BosDAmm5%2F1LdN%2BXZxuzFp9nl8%2FLpJvQIuu%2BHNaZ%2FMfVXTlOD3M9g2dPsQ9o4I4U4wZAenY9MVS6VlYF20%2BsO4suMRWLpFxZdFJNBKRFUkfjU28hgeqrFEuwACVSTSsNW9cd8Uw6Z33vwY6pgH00Amifv96gwRFgftDUqWvdeJoz25nBTkBsIQ8JSHEsqR4D5pU6O45oT9vA%2FDvgpFO7mlivxDL0LcN%2B8sEAX4qXSqLq%2FlK0oiwSly6ycaq2gKqPtgCLIBbJODfzJn2kG9NRTP9dzjvHrMr4U8FVIh9xqzyNVxVY8yyn%2F6vud7nqi778SU%2FYhFU%2FFx%2Fm8Nj5wwWr397bHgTe66tM3mciFQOF%2BKQe0Bt&X-Amz-Signature=59926f0c844ae07c3c663889a34f2bb9cb4da0910f4eceab5bf80526ce5dac0e&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2L4KISM%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T041041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA8CAEhpEDoLm8b2k1NXbMyqsUYTo7R57TNdTfwQSbecAiAVY5Ppa6vY1mJKUekdcg0tVJPMoNItC6V8Z2%2B%2FAARRFyr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMp7o8os5QnklALRlrKtwDmb%2Bsi19nbss4IIkoeSlpIcgFcujoUSRerRltoYyM5Q1aa1xsPFL1xwrL%2BTCknxeWaz8XyMfdFCZGvPhMHdXOgi8ssERCM0Z6YpuGc4KZpjlrtejxU%2BEPwPwSXAJN0zYhN0Q2E%2FBRfAy61s4UMTzf0629uDcmrHpRZTTVcbQSby3Apboe%2BF8Th0FBEWkWu%2FR%2BPZBAPoW%2BOqLDWpUG3OLrUERngo0xUZcmSO9skjA5K0ppMi8TdStp5amZwhTh0UfamsonKfpVkNhO9hnyKWBnoOekuC8lMAD1GZaggr7wIJZNA%2BMF81v6cY%2Fvanw39H1Vcew8Uoaa01P9SAC8t6Pd5LlCbpPGNVll5JI9fDqpLw7XDWF0YGOp7ORlJeBFv3dExWd%2FDl9pKg79yICLisD3cWc0ziu61c6gqSoW8UsqC6g%2B17XZ9myX8Ql63y1YvqA5RhyDVeptcpwI7gs%2FT9idnV3TP6afsZirP9ph7O1J%2BSdj%2FPKrFOo98A%2BosDAmm5%2F1LdN%2BXZxuzFp9nl8%2FLpJvQIuu%2BHNaZ%2FMfVXTlOD3M9g2dPsQ9o4I4U4wZAenY9MVS6VlYF20%2BsO4suMRWLpFxZdFJNBKRFUkfjU28hgeqrFEuwACVSTSsNW9cd8Uw6Z33vwY6pgH00Amifv96gwRFgftDUqWvdeJoz25nBTkBsIQ8JSHEsqR4D5pU6O45oT9vA%2FDvgpFO7mlivxDL0LcN%2B8sEAX4qXSqLq%2FlK0oiwSly6ycaq2gKqPtgCLIBbJODfzJn2kG9NRTP9dzjvHrMr4U8FVIh9xqzyNVxVY8yyn%2F6vud7nqi778SU%2FYhFU%2FFx%2Fm8Nj5wwWr397bHgTe66tM3mciFQOF%2BKQe0Bt&X-Amz-Signature=9c122c1f94644bdb3754f0fdb335bfd0895e8cdeadfed85369a94e8beb3457b9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZNVFHWW%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T041043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCn2SWAmOLlDDenTmhlIpgVvzkabgXxfzcRxFjR3C4shgIgc%2BUYLR7qPHFqWSo7BLQVkwnCgCYpi512D8x7cBy65iYq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDMH3lA48dW4CzPBGkSrcA3qf65rXMDnEthZZMyed0Dfb6OqU0eZ8Vn5F8O9rneT0Z0xgzrqwoF7RIv75LXLgtz68xTp%2F%2Bfi2QOnwJFcabzNqai1Zv2F%2BSbDZ1YWLesx64feyhDYucpi6n%2BGQmgCjVyqE3Y9iCorFt0VGOUfQgjFtm3BLnDfw4ndRwsRlW76ouNqHaw1194P05qkJUqh0CU0GOIWWOilBDUNdlGB8khCxggYwXiZu3w0eUXaDbStS2CTf7LuD40Jfz72HYzUivXHlSI%2B%2BoQ%2FsnolOWYps2chmRuetlOqeDVQV39LaSQili7mFCHQpHNUfNww9qdEuKMy4T6Znetr5zKUjHZZ0DgAIdvsfyQIhWf7TKBvUZ7gfHnoPiV2gDUvxABRJ7Z7NXZiNG9BN4cMGS4fhhxUz%2Bk7r1qrByE1uYHqKJTUyjFmFaEdu4fjlVwat%2FJrqlvmWTDCjXjmTmfKr1CA%2FTczwVWFfLRpK8bndzvbpyzfH6rdIe1Yj7Q%2BXPkUYqEIHyPjlxKZ0eNNBiSjS1oT6ahvra26%2Bqo9l%2B5WIh32u5rXXsZCq9%2Fmh0mLZfilVXSeDX4GtyJbPQSGKcFf8T7Nv3Mi3D97zkhRUx%2FT14%2FwUkkWsp68IUFjM57we4L3ntAiFMMOf978GOqUBMM4IWu0Lxoq5dVhflAk2H4kmdvLE%2BBtCp8EJsrcpf808xnw35%2BkNHZYzEpQcz%2BGaG285apC6adnbfA4ftKzL72vLznUL%2FcYxw2cTFg%2B6S2ZZ3GyeSRrrFpO1YQtwQF%2BmH7bcpHsU6hXkG3DaHAu0GEdWF%2FaqcafF5YN717csqI%2BnLO4zwkhlT5gfV%2BZE%2FBSrlYFeJSZz32jHvmjjs%2FJTDh4jp3hu&X-Amz-Signature=00d153023a92312acc1429926a4a17acbc8119bcbe22e6c411510dae901f45fd&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAZPGX6I%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T041043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGmkt6BzYAVMNJBRMXAnix6B2IGzJw0NykyYonsaFMuLAiBA6lE%2BTo0CzQ7Fo1KbQJl5SdsOO5fQ8FSoMPpaUui0VCr%2FAwglEAAaDDYzNzQyMzE4MzgwNSIMCX%2FmalMC6I70LD%2FYKtwD7RkahkRzRLvKhzjBBTOK7BOyAeAhglyiJ%2BoFWyiyJe9rkwkQtfdCBiGwasz1Rsq2tXWmqkggKzlL5%2BPJy%2B9dIq%2FApWeKrbwytVBao9Jpz9mafvszYRVEcKtrH9y3cM5W6XFm0CKeTPcZSpXb7pREZt3zqaVffVxTUobQUcLQAx8VniTBO8OBlni7NP%2BkU%2Bs2iL%2Fk7L9%2F9bCp8ZD8tnMZNVKd2PyizaQQzvzJNm2brapkcyOwb3feSCSDUBtnSRR6fsXu%2FfmI64ScpfwYfT7YDSbt51cPRTDEvmTPk1wB5M%2BuVEctN%2B72VJBckDi6%2BhrkTxRt1ZpWVqIUZNduPrVLrDjPU0fvl1%2BEXAwwXrVNnJpi0EgRGr5eIXjStPv5KoMRAP5DJ6Zwecl4%2FZpDYzAIJTqBjPxQeN5iCknCVlhZTBOaj9ngs8G%2BkR%2BPM%2Fjh72VPaABb2GISCxza7B%2F2Bx8muugEUjdBPe4pmqqBRKfi4EYWpBhdAFloiOXf5uVrtxXuSdM72J4e7%2BNwZld9VLChB7CrLB6wbxJ6iWjQVpYqKtYudXpHfMdVGUC0MM2W8q1BUUBeqohMiWR0FcNdrslh1bVoDBR6Ia3cNkcMU7yp6zjkSCdbvX7ExXX%2FT00w%2BLf3vwY6pgHi3H857yF1bypyn8L36WEnI3ukupQ4gHChqVxn5ldhsdXa%2BMc6C%2F8nKvDDzfD%2Fepxx4G0b0ryBr3gPTxIm33ptbQ1L4tXb7os%2B9Ogcjv%2Bkn9vDiw1LAjrNx3bz4Z2FGoJz2buzZ2l6p91Dn9zVzeBEB2cZ6TTk47puBmMRSBKocYCo3OG7lAbI4ctUrndLINfikerMhIKum0buMab26wbODQ2Kh9v0&X-Amz-Signature=8aa90916dec549c86a48cda69bfe1aeb3e803cf8ef964c87bc5c420be808ebbb&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2L4KISM%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T041041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA8CAEhpEDoLm8b2k1NXbMyqsUYTo7R57TNdTfwQSbecAiAVY5Ppa6vY1mJKUekdcg0tVJPMoNItC6V8Z2%2B%2FAARRFyr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMp7o8os5QnklALRlrKtwDmb%2Bsi19nbss4IIkoeSlpIcgFcujoUSRerRltoYyM5Q1aa1xsPFL1xwrL%2BTCknxeWaz8XyMfdFCZGvPhMHdXOgi8ssERCM0Z6YpuGc4KZpjlrtejxU%2BEPwPwSXAJN0zYhN0Q2E%2FBRfAy61s4UMTzf0629uDcmrHpRZTTVcbQSby3Apboe%2BF8Th0FBEWkWu%2FR%2BPZBAPoW%2BOqLDWpUG3OLrUERngo0xUZcmSO9skjA5K0ppMi8TdStp5amZwhTh0UfamsonKfpVkNhO9hnyKWBnoOekuC8lMAD1GZaggr7wIJZNA%2BMF81v6cY%2Fvanw39H1Vcew8Uoaa01P9SAC8t6Pd5LlCbpPGNVll5JI9fDqpLw7XDWF0YGOp7ORlJeBFv3dExWd%2FDl9pKg79yICLisD3cWc0ziu61c6gqSoW8UsqC6g%2B17XZ9myX8Ql63y1YvqA5RhyDVeptcpwI7gs%2FT9idnV3TP6afsZirP9ph7O1J%2BSdj%2FPKrFOo98A%2BosDAmm5%2F1LdN%2BXZxuzFp9nl8%2FLpJvQIuu%2BHNaZ%2FMfVXTlOD3M9g2dPsQ9o4I4U4wZAenY9MVS6VlYF20%2BsO4suMRWLpFxZdFJNBKRFUkfjU28hgeqrFEuwACVSTSsNW9cd8Uw6Z33vwY6pgH00Amifv96gwRFgftDUqWvdeJoz25nBTkBsIQ8JSHEsqR4D5pU6O45oT9vA%2FDvgpFO7mlivxDL0LcN%2B8sEAX4qXSqLq%2FlK0oiwSly6ycaq2gKqPtgCLIBbJODfzJn2kG9NRTP9dzjvHrMr4U8FVIh9xqzyNVxVY8yyn%2F6vud7nqi778SU%2FYhFU%2FFx%2Fm8Nj5wwWr397bHgTe66tM3mciFQOF%2BKQe0Bt&X-Amz-Signature=fca652eb7c02eca0c3f1d1c7d0477853d3bfaa0381778661d1eb26edbecffcc1&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
