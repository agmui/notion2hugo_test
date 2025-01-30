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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664A2RPWOJ%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T110108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEJeWBTCXvBrRbH%2BT2VMUtr3pqhirebr6uOg9x78TmQ%2BAiEAlHLVjBWvejsgSfNFwoYaNJRQHKPvlbAzQiih19BnskcqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGt7bU1fDtv2qPhSpircAz3g7x%2FvghedEU0YX8Hrl7ny7ilXNuMlBcce1uv42mA3bXZRTmvSWnwaYTUI43GutQ6ApkZyUUIgR5g3gM1MQUn2Ud1TmZ94elCxOnxhrOimoyPdj4ZWi6NFBgNbo2jWj%2BemLCZF%2FR%2BFbu2bYUO52%2FN2NTM2AojzghifMVBGTdpYakI%2Fi7ohe5abkuNj1Gu7MLtLg7bwgQhSjkxNtA2sbO71jq28z1V%2BLTClyxI3wdSiMBvyW9pN1%2B5udgWWJgysCuS2tznMFZpyK54wQ6NX5pgdYwe1C7hi0UIq4mlgn1oUGCU0OSA1uufKLOIi6t0KoMfSdV0wrBOcuCfOJRHCiW76h1aqfrYFXku34E5TjI1ZLsI1K8cOzbB6W48a%2BUN%2FF0e1%2FGPuayU79CYAa4DjSknWCQRKXJK3ducd5jbkkh4CbO4DeSA80P8hslX%2F5Bbu1IfUGhzQLKW%2Fj6iop3rk69hhK78HerSBHQ2luGfvdjPUhRgKY%2Fs1BZSUjyeAYhk448W3pGFPcQuVOqhYWGCx9KFuU1DGq1d5QLDhvuIsikMFsV%2Fd0SLgGtKkfy3Wvb2nGWw3CRGtbda%2BhRuV7bEKMJi4T9C%2FNonjvwKQHZ%2Buveu0gvNFnkingc6ofGGbMLOq7bwGOqUBSl8AVRqzZKJT3SaZdgJveZhaJeIe6n%2Bktd1AbReOQfm%2B8%2FOo%2Ft9o%2BHqxYY4%2FnusZQIid969uOHMQbRoUQBBzhN7uc4Lj58cNjsXv50kS5SJnYc46TSXAdDVT7cT3d5HeDu0%2Fm0SVbBoiYz1e0oztlbDc%2FTQP%2Bxmw9sTHrWUSipMt%2BqCo1ikgm0I3AjIp23jtlrFw8zevicCbc4OV2PelMJQD%2Bnmr&X-Amz-Signature=781095f4aed4fcff6a173d29ff06699858db6e071bd95c0664ff48261c23e64d&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664A2RPWOJ%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T110108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEJeWBTCXvBrRbH%2BT2VMUtr3pqhirebr6uOg9x78TmQ%2BAiEAlHLVjBWvejsgSfNFwoYaNJRQHKPvlbAzQiih19BnskcqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGt7bU1fDtv2qPhSpircAz3g7x%2FvghedEU0YX8Hrl7ny7ilXNuMlBcce1uv42mA3bXZRTmvSWnwaYTUI43GutQ6ApkZyUUIgR5g3gM1MQUn2Ud1TmZ94elCxOnxhrOimoyPdj4ZWi6NFBgNbo2jWj%2BemLCZF%2FR%2BFbu2bYUO52%2FN2NTM2AojzghifMVBGTdpYakI%2Fi7ohe5abkuNj1Gu7MLtLg7bwgQhSjkxNtA2sbO71jq28z1V%2BLTClyxI3wdSiMBvyW9pN1%2B5udgWWJgysCuS2tznMFZpyK54wQ6NX5pgdYwe1C7hi0UIq4mlgn1oUGCU0OSA1uufKLOIi6t0KoMfSdV0wrBOcuCfOJRHCiW76h1aqfrYFXku34E5TjI1ZLsI1K8cOzbB6W48a%2BUN%2FF0e1%2FGPuayU79CYAa4DjSknWCQRKXJK3ducd5jbkkh4CbO4DeSA80P8hslX%2F5Bbu1IfUGhzQLKW%2Fj6iop3rk69hhK78HerSBHQ2luGfvdjPUhRgKY%2Fs1BZSUjyeAYhk448W3pGFPcQuVOqhYWGCx9KFuU1DGq1d5QLDhvuIsikMFsV%2Fd0SLgGtKkfy3Wvb2nGWw3CRGtbda%2BhRuV7bEKMJi4T9C%2FNonjvwKQHZ%2Buveu0gvNFnkingc6ofGGbMLOq7bwGOqUBSl8AVRqzZKJT3SaZdgJveZhaJeIe6n%2Bktd1AbReOQfm%2B8%2FOo%2Ft9o%2BHqxYY4%2FnusZQIid969uOHMQbRoUQBBzhN7uc4Lj58cNjsXv50kS5SJnYc46TSXAdDVT7cT3d5HeDu0%2Fm0SVbBoiYz1e0oztlbDc%2FTQP%2Bxmw9sTHrWUSipMt%2BqCo1ikgm0I3AjIp23jtlrFw8zevicCbc4OV2PelMJQD%2Bnmr&X-Amz-Signature=5ad4f4dd7d180ce39b30d0e709fdf69b2d9c221d851c935b989373938bec6c1e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGNSGL7G%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T110111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKqnJnfXajFevp2aO0SR1sshcv2CT8JnNlnoYgoGb2ywIhAJgCxDH8iZbXU9bDc8egEZqVe2RxPlJZtKCbf%2BGzeqU4KogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxD47JNqi5uqv0peUUq3AO6WRi0Wmz6a6w0%2B5z1bHsKtnDhwxorN6n6Lb5If9PREvz1Jn23fMJ3LWhPOIxmwd8oT7D9SPkJ%2Fl97QibkzMNpcyt2hkD9RcXliWdq8cm%2FmtKB61RD4pUX7o8bcJQFHL8JhSV0RwEE%2FwcA%2FU8COWYkiFA%2BCWdIJC4LKHMQYRdbE8NIBP3VEjU9JwAPjQDybxjm3j9%2F12oN183GbN4VVKw9ZXPIPKV%2Baq8iD6s7DC5dJ93AQ%2Fq6DfZlLwTM5%2BPI0Bn0EBf%2FKPpLjhEx2TqU2RN93lapzMh6z3uabhm6LH%2FvXiYMgproWzqwztLflcmEu%2FPrLn2iEiowYpA15K%2FeAmVrMZomxghBtpTmxpwgkm26nbtthwqhnqoYi8jS1v23veIyeoRuWo6SIJRnikaETSGiHeLneY0JYyYUmQ0sswGParq26nxeoSOeDC0e86AIX8u9%2BbvicsO7O%2Be%2BsnanTHg3pcKmzc%2BokvJ%2FJUjeWFEcIHBn8bla3%2FpQu2XbaioB8l0WxYwyNm39N0zYlMsMZs4Etm8YVwmt1%2BFJYO%2FoLVsarW8Ayhkl2EEWiC9%2BheE3LCMAHvU1IDDEy9%2ByeRBbMBMY0ZvktFWmRxRBD0x0k7yuz3Sxp6234RuG0zmW%2BTDhq%2B28BjqkAQVXtlJ5SgI4J3Xpwm4w27V6bF43ODKhbLWq4YmL0macrMl3hlyPSTU4hF3gM9kJRWrTMI5JqzsWj%2BjEOSi%2FeGM5FFerGdBKzWmf6%2BU%2BtyGyS20LarngOYm351Bhimaxk8ulPLOGWygW8y%2FBwZ5h812rZN9vJmwazFHfukb%2BAwAN12%2FKPjbhSepOvG189vsnXsCKHxwVCpf3bBiHzUYmD4%2FBzuf2&X-Amz-Signature=aa3199b9ac4d4190518ea43920bd4c868840abf751ae7513b0ee90c949426d3d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKIISQD2%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T110111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB4MhEXfI1D2K%2BtA8CLnGk%2BXgpnn%2ByBvCvdHMqwXLLKZAiEA0tSA7lLbJf%2FRUWfzHnPLUdEUgKZFImm4mlYp9M8E170qiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB6BW55Q%2Fn0TCFB6jSrcA62g5nj4e6yJa7UGDSKFYZ4Uh5Kq15KXNxBwvZUVG%2FVT03EumaKsyhHfCRRkLFbzonCN7HVmhV0TgR%2F2QgrPWGztaLk3sh9%2BBlBISCnkAmh%2BrOT%2FX79WOPaLosnWWh2oNDBkXddttNMYsZ%2B3hqCAaNfkiFOOFd0ZrmhG8VVOJtNvRTT3Eq1Yh2XDOE3LXc%2FQ9heLC3AT2FHOuGvrmO%2F6sHeFSx2RcsUiTgmHxIjoyOFHPoBlGvZL0KbaWlUq2bNGCClYjFeeX64dXmFKwE6als7yKgrnvkkGi5WmDqY9R0k%2BAyyte4gt7J%2BQoQWFSSOqHm%2FORPCLsRIuFrMxW59%2FbZyRRlvMLBV%2FiA6r8nus1OA42rRfvD%2BI8eYA3rKyA7v7w2ckil2UiEkZBYbjd%2BzKBXNpXenDOTbWie3YwbmHiHLbBIfcfZJ5kSQy%2FPmOD99ZgMbwqOsu2u60GbpnQywPV6bTAjonv7ERvOHQzAXckEAxsTzEHOXpB2j0KdPZRj6yCIgTnVLUprFE%2F412%2FWV%2F1BbmIfao0theMG5UCmxO4XvjNuw4CQ6MvHRaiURNfuhXt6xczLMPwORL4ortt8eqZdj3%2Bh%2FdTaHFU%2BfQBF%2BBURdSmvdZ64KaybY5u33%2BMLOq7bwGOqUBjmDCR91pMSjJeIRu%2BrnTWg8t4unxc0wf862InnwaV3pYPT2AIg%2Fe%2BI7stT3wpBzuSy6zcxS9fvX3YiUFHIqbAvt9u2RXNrQ49cpl1AaQ7SHqLdpwv3LIRvuBPic%2FiRzw9ifZq0aFWxkm%2FNZQgZFYEUYVBQzem0ETumBrRfgEhJR8%2FFE%2BIMbsfURR2LnZJRtQ3yapqmj2dildGyKbZXTFKunsRtDg&X-Amz-Signature=0ffcfb3693b4b59ed930216ddfdef92443f5f445597bcfe438e29d2c274afba7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664A2RPWOJ%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T110108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEJeWBTCXvBrRbH%2BT2VMUtr3pqhirebr6uOg9x78TmQ%2BAiEAlHLVjBWvejsgSfNFwoYaNJRQHKPvlbAzQiih19BnskcqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGt7bU1fDtv2qPhSpircAz3g7x%2FvghedEU0YX8Hrl7ny7ilXNuMlBcce1uv42mA3bXZRTmvSWnwaYTUI43GutQ6ApkZyUUIgR5g3gM1MQUn2Ud1TmZ94elCxOnxhrOimoyPdj4ZWi6NFBgNbo2jWj%2BemLCZF%2FR%2BFbu2bYUO52%2FN2NTM2AojzghifMVBGTdpYakI%2Fi7ohe5abkuNj1Gu7MLtLg7bwgQhSjkxNtA2sbO71jq28z1V%2BLTClyxI3wdSiMBvyW9pN1%2B5udgWWJgysCuS2tznMFZpyK54wQ6NX5pgdYwe1C7hi0UIq4mlgn1oUGCU0OSA1uufKLOIi6t0KoMfSdV0wrBOcuCfOJRHCiW76h1aqfrYFXku34E5TjI1ZLsI1K8cOzbB6W48a%2BUN%2FF0e1%2FGPuayU79CYAa4DjSknWCQRKXJK3ducd5jbkkh4CbO4DeSA80P8hslX%2F5Bbu1IfUGhzQLKW%2Fj6iop3rk69hhK78HerSBHQ2luGfvdjPUhRgKY%2Fs1BZSUjyeAYhk448W3pGFPcQuVOqhYWGCx9KFuU1DGq1d5QLDhvuIsikMFsV%2Fd0SLgGtKkfy3Wvb2nGWw3CRGtbda%2BhRuV7bEKMJi4T9C%2FNonjvwKQHZ%2Buveu0gvNFnkingc6ofGGbMLOq7bwGOqUBSl8AVRqzZKJT3SaZdgJveZhaJeIe6n%2Bktd1AbReOQfm%2B8%2FOo%2Ft9o%2BHqxYY4%2FnusZQIid969uOHMQbRoUQBBzhN7uc4Lj58cNjsXv50kS5SJnYc46TSXAdDVT7cT3d5HeDu0%2Fm0SVbBoiYz1e0oztlbDc%2FTQP%2Bxmw9sTHrWUSipMt%2BqCo1ikgm0I3AjIp23jtlrFw8zevicCbc4OV2PelMJQD%2Bnmr&X-Amz-Signature=f1216f7d640a9047cc146e420d57dcb69c890f500a574e793ebb9824b80dd654&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
