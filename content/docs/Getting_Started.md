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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UH6H5NAG%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T070730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE0fJ1JM1JD95w5Qg6KCkHyJcslzmA5LvzGDB8Rowz%2BUAiA1OdUSbMpRf197384HUJCn%2B9dNwHKSAVz75a3h0EHmUCr%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIMpO9X2NaQ4RxcPB6oKtwDQC33rWi028b0zCmwnJklc4oT4C9vFO2XpfVld0qKaVYd9JeTP3dAvMd0BuZFjX8BgWXf8RbwC1zOwTtG0GpNPXsevn%2BWpVQNt4zFsAcPehPkfsJilp8jTbXAg2QYo8nmA3oRsA1Yd8al%2BUWHbDmvKmZMdyeJxrkP0Sz2V9kwBDm9vbOdnT9HIkh2rMb187tnMazi7iG41G7aNijaUw2DDQS%2BaGve%2BeckiA0CWew8lcNlcmSpse5sU%2Bsdyg2GkX4BxkbY4UO99Y4H8CpXk3ux8wJ%2FxsEMVt8wJ%2FGhBrWGyNw57%2ByZL%2FxqIQXWPVdA%2FbV2wOX93u1U5O0dSkujAYH3by0OH5xOldFUOezDMs4%2BMH9x%2FNTEBNija7fVOMzakOV8awKRJkQru49bmXw6TyqUwODDZU1fut5oYxh4zqWnAXOke1IM9tecT4HvDbJlZ3u3wUXq8SkgvzwRFa8f9M0RbB1UmXcegicEynPSsd7M%2F7DxTBKrZmR6hAgxxWFbHmQVzCOTu3YDVznabkkuidPoG8B%2FLsbWWIkFdG1upzKnFkkIBeO%2BV4xLLed11enlS1MOVvTbLo5rNgn2qMWxQqKxX9qPX0F7fcNnP7VbGk5IXxo2kTBPXsQnYHpCGRAw1aHDvwY6pgGtIsFPukwUJv8bJ4Hl7wAJVkn%2FXvwRZSfla1TXLfVKbkrleuabSyGfZe4nGwK2Fe0xmCPpOiPTCK1GXoklnld0fPikfoJ%2BfzswH5KhpitcIT%2FKj3hn%2BD172GjDm8qdALqc7Y9DK1Fmr487Qb3g2LhOShP83KAM4%2F%2BOjesu0PBAw1%2FQ%2Fya5JXWDOdRFMcig%2BBerj56GgvDTcLwFOeWmkw6V9mqVM40e&X-Amz-Signature=38c6d2596a41e1b5af57d31ae3e44553bd15f182cb89396abdf89cd47a51c253&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UH6H5NAG%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T070730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE0fJ1JM1JD95w5Qg6KCkHyJcslzmA5LvzGDB8Rowz%2BUAiA1OdUSbMpRf197384HUJCn%2B9dNwHKSAVz75a3h0EHmUCr%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIMpO9X2NaQ4RxcPB6oKtwDQC33rWi028b0zCmwnJklc4oT4C9vFO2XpfVld0qKaVYd9JeTP3dAvMd0BuZFjX8BgWXf8RbwC1zOwTtG0GpNPXsevn%2BWpVQNt4zFsAcPehPkfsJilp8jTbXAg2QYo8nmA3oRsA1Yd8al%2BUWHbDmvKmZMdyeJxrkP0Sz2V9kwBDm9vbOdnT9HIkh2rMb187tnMazi7iG41G7aNijaUw2DDQS%2BaGve%2BeckiA0CWew8lcNlcmSpse5sU%2Bsdyg2GkX4BxkbY4UO99Y4H8CpXk3ux8wJ%2FxsEMVt8wJ%2FGhBrWGyNw57%2ByZL%2FxqIQXWPVdA%2FbV2wOX93u1U5O0dSkujAYH3by0OH5xOldFUOezDMs4%2BMH9x%2FNTEBNija7fVOMzakOV8awKRJkQru49bmXw6TyqUwODDZU1fut5oYxh4zqWnAXOke1IM9tecT4HvDbJlZ3u3wUXq8SkgvzwRFa8f9M0RbB1UmXcegicEynPSsd7M%2F7DxTBKrZmR6hAgxxWFbHmQVzCOTu3YDVznabkkuidPoG8B%2FLsbWWIkFdG1upzKnFkkIBeO%2BV4xLLed11enlS1MOVvTbLo5rNgn2qMWxQqKxX9qPX0F7fcNnP7VbGk5IXxo2kTBPXsQnYHpCGRAw1aHDvwY6pgGtIsFPukwUJv8bJ4Hl7wAJVkn%2FXvwRZSfla1TXLfVKbkrleuabSyGfZe4nGwK2Fe0xmCPpOiPTCK1GXoklnld0fPikfoJ%2BfzswH5KhpitcIT%2FKj3hn%2BD172GjDm8qdALqc7Y9DK1Fmr487Qb3g2LhOShP83KAM4%2F%2BOjesu0PBAw1%2FQ%2Fya5JXWDOdRFMcig%2BBerj56GgvDTcLwFOeWmkw6V9mqVM40e&X-Amz-Signature=0df15d10d40e884fd26688a90257c910e906f7d0f9626dde4b636780c2f4f082&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637NYTVYK%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T070734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFSsWAV59puEt7XDwU0QRFtLq7HAPY4kbBCdb%2FN%2F3CEJAiANyO%2BEwE5tR2rAuwyiIdoSBKD8W0BeoLLWR3CAKn3dPSr%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIM7SJh5O0QVJRb6OaLKtwDNnzy6RjF8ty5Ob3sWWUoxH5U4G9o2n75XiHi8Yz1NjpZJ9mshd0u%2BedAVgjK3seFV1pnT8YlL3%2BMiW9dYHZIeZPR%2BHVWtqrBPAvDLRO3ZDHvqu%2FGeftg%2Fp%2FuHXYYvKulRf89YT4caUOQ24AVXNYf1FznlFX9KLyqMwplqAlTT6sZbZ%2BMSfzYKwrIs4Y2X%2Bw1Q9cAdLvlHe1WY6pwDn7ilG4L6dflWvLXupFTuO%2BoENfUqfyLXUJAkQGkGQaiTEgmlcWXhuLK%2Bi2slvjZNe3R6673cGhs52mq7JfGH4NU24QiQ%2BaCGmam1NOxAYeFyVCNZiUKBJdT1uhSl6g4O6PLjG2p9b3W6vXZWOnqY%2FY6MMJpcOy0tGvTqeaakePBEubLF56YPWl3%2BMc1Bv3xwWOJBCTr8RX%2BNoo%2BSS5liqyfjrT1fu8TRaKElfOz5hENnrUE8uK%2BIGb5njrsCIJlUyBDzqKZSV9kGRtTr2YiXnzLrqfPr8eOgUJjjEPAdbrd9bsIUtmnrwZHxNUhmUWzAM4ge8O4jwYB6lrgv7iBihDSK%2FmmYyuZ03akpqYP0btMeSkPef0Jmz1%2FMUct%2FL8A7Z75R6RlO0W9Nf7OvDHlJtZX08sLrqTCMKEpzwXvt4Aw7KHDvwY6pgGyWIePPX2dF%2F03gWJleOCK07CKnmeIHR4U5tFQ4AI%2BVxUhEezVoh0by7n4qcLBoRZQDKqafddIwLRG4MBMOQTo5ob6hEc8HOcHUApHkofUQQ%2FKkUxia7%2BJct7sUkK%2FxyhuzGz8Vc58UwtuJwhsD69fzlXa9RreLqfmdCQQF7%2BlKt9EsZC8CZ3WqESDiyk5Zj5PJWAwYPMsy%2FfNUPuaSY33pQyPfbTB&X-Amz-Signature=5d6e8eb2ec57098531570cec41cce39f023cb3a6f56cdeee06bb4898844dc917&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIQHXSHF%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T070734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRyGXWATP75OFJCqNdWE640TSYkYLXBzIeULcMf%2Bv6BwIhAJAlKQVyxtFIrgZkltIssnZCpg9XtvVBrPU6UsJHAm%2FoKv8DCCgQABoMNjM3NDIzMTgzODA1IgzgCUx7BV2zGmw3hGgq3ANy719xtvclNJ%2BSGISAvYgC9Rj0s3AphGvCLWZ7ZW%2BSs4nsR1TgdmNq%2FBACo9KsDBDfMImRs26Lkmd4b5DqzWWISRePXL%2F00ZytqD0nuMLYnit6YSmrICA1Xmq2NVAyPcgG3svNlq8FtqsWr0mtkdb5zAKTvF3YxLJBLWLhIHwjL5quSrn5naYs4CLfpO6LwG%2Fr8s%2BM0C37Z%2Bq74Ddl6sbniR%2Bu00VLSxRKMMgXLQj%2BSp6fUgk6p7rD8fbfUp0Uzs1JwjRoinMHOespwZmUjISw6sf39waorLAIdt9cqHW7ngiUWVXr6vlqpBz7x908Cxi%2BrCAUUqN6IuUj897Hw3Vvpawy2jee7WMDAUupRTmZg%2FbMp4ec5yidIOo1kIN9ZyNTHjd21%2FlQ31DookUrVw2ckEJzcqcVQCWmVMaGmueNivYX47IaNqfKBkcNToXTgsfNVD%2BWERol5l3ib3C484a7rRD2nLs6g8xepBMQnZ0xVIFrrDgkontnq1kp2uj%2Bz%2FtxNLr4S2W24iy6ecQ9L2QpE0X4u6%2BYZZp7LU8DrKDOjzn9RsSbwbLsI2zDM65F2rW38wsye%2BCR5AqP8ktMN6cB0KDmcmGxXACs0qesW0mMitRhWpE0jv%2F3tlzWETDQosO%2FBjqkAVUdSz3mZbdYTUQM%2FMRFiMwGzCtqhBhIK%2Bigj6XJr5uJwznFqAKeIhMfm3aQy13l7An8vaF0qzQtDOsVwzOzYONUcp%2BN84HX0YMdskLUYWPBylsWP2RbbPOoKo4v3tRycAXV2GGHpj3VOiuy8Ue9hEoQZLPR2ooV69MATxOCz2sG0Dzu7U2aDcoVsq5yaRrFVXcpD2W86s%2BjTx1uUxwiVkoHNT2v&X-Amz-Signature=d5c29e53179407095efe0f6c7152b34c1848a2d8b721db707530c32f9a0b0f63&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UH6H5NAG%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T070730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE0fJ1JM1JD95w5Qg6KCkHyJcslzmA5LvzGDB8Rowz%2BUAiA1OdUSbMpRf197384HUJCn%2B9dNwHKSAVz75a3h0EHmUCr%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIMpO9X2NaQ4RxcPB6oKtwDQC33rWi028b0zCmwnJklc4oT4C9vFO2XpfVld0qKaVYd9JeTP3dAvMd0BuZFjX8BgWXf8RbwC1zOwTtG0GpNPXsevn%2BWpVQNt4zFsAcPehPkfsJilp8jTbXAg2QYo8nmA3oRsA1Yd8al%2BUWHbDmvKmZMdyeJxrkP0Sz2V9kwBDm9vbOdnT9HIkh2rMb187tnMazi7iG41G7aNijaUw2DDQS%2BaGve%2BeckiA0CWew8lcNlcmSpse5sU%2Bsdyg2GkX4BxkbY4UO99Y4H8CpXk3ux8wJ%2FxsEMVt8wJ%2FGhBrWGyNw57%2ByZL%2FxqIQXWPVdA%2FbV2wOX93u1U5O0dSkujAYH3by0OH5xOldFUOezDMs4%2BMH9x%2FNTEBNija7fVOMzakOV8awKRJkQru49bmXw6TyqUwODDZU1fut5oYxh4zqWnAXOke1IM9tecT4HvDbJlZ3u3wUXq8SkgvzwRFa8f9M0RbB1UmXcegicEynPSsd7M%2F7DxTBKrZmR6hAgxxWFbHmQVzCOTu3YDVznabkkuidPoG8B%2FLsbWWIkFdG1upzKnFkkIBeO%2BV4xLLed11enlS1MOVvTbLo5rNgn2qMWxQqKxX9qPX0F7fcNnP7VbGk5IXxo2kTBPXsQnYHpCGRAw1aHDvwY6pgGtIsFPukwUJv8bJ4Hl7wAJVkn%2FXvwRZSfla1TXLfVKbkrleuabSyGfZe4nGwK2Fe0xmCPpOiPTCK1GXoklnld0fPikfoJ%2BfzswH5KhpitcIT%2FKj3hn%2BD172GjDm8qdALqc7Y9DK1Fmr487Qb3g2LhOShP83KAM4%2F%2BOjesu0PBAw1%2FQ%2Fya5JXWDOdRFMcig%2BBerj56GgvDTcLwFOeWmkw6V9mqVM40e&X-Amz-Signature=aea5f4291188bbaab8efc0ee84d4c99b2776c10b11d5a47aaaf451a002c981ad&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
