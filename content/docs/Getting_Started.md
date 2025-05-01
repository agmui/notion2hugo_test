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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZV55C3CW%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T140804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQCxJRuc7YYCI05bk8L4p1uO50VvsI5I9SAYTlDqKKGexAIhAPJauERxuLfxqVfTtbmA0IpICszHle%2BGNdq9rVSjNB6UKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwNrxAVDAZJnM1KRwoq3AOipHxgO0SueTaAeR6cOrEZ9p0%2Fnm3DyQ%2FMVWXDnqKmG0EWh2lsWQjeDGeH7fMXDgL1wJ%2FwTNqif9QIdYElApucJ6SqAIZf52OiP0%2Fa6HCUu4EPxMA518S2Be9XScT3q%2BG02mnAFWV4UYKyj2%2Ftnu3f5DmVmxFPs5R2%2FzS%2BbUnRZNX2aY4S2FCE%2B7eXPhaglC%2Fc7zag6NC1DLCHpCWglJV1b0zVpZ9J1Msm6935NMdXs2l2e8j5ufECxZpu3c9pe4Y1uJvc20UsW%2FaVAptlg8HcrcHhoOLdIX0oAuhNXSqXlsMlMvI3Osy65ms3djj06gveqxtyc4npQMHBLL3jutyOgcxYUv3kiZMOH8dK%2FFofOVSRbR%2BbCeeVMqEZKQ3CNE6ZmdL5XkXk3V83j%2F5wTtn%2F2idTkTfhwXpRcrSzyxcif9qneJKOUzYIxXwU%2FfeWZ3AgLBtXvjmm%2BIJrjyEMN85q780ygGPKKAnbCp0CPQ9EAxqBu2o2jSbxTrVBaa60br7SWBEFvpajo5C20N2dsBG3SBFxV1yFQs8ycVEN4dUFIt3V8TgVrIAt%2F3CfArtETDjSvQu365kKjLVxrUkIxlfjAxhXB3WYZef5ZCQPpIWS7Ew%2BnKjKvbVJgVUu%2FTDVyM3ABjqkAbjKL6o0FV2Tz8WZET%2F2x68pdOWTJk9ecF155S5OPO2%2By%2FigqCdDbauFmXSc4kBSZYvWW42Fq9cOLHnt3b0qtgELXcGeZ9Fe10dkTNuUkefhVyDXFzxarttAIj6U8al9uDQ4rGrYFGIC7tfBigN5ROiLiMBS5PdIXDTa9RBWbYE%2F5tP7o8oQ0q8%2FhHLlwmlU7FYwZQl9OWSuTRNP3%2F56L3vK%2FQdn&X-Amz-Signature=f11aef0a71fee4104f3f686a6f87b45ae35b376e568d1286edf00c6a4a59eb77&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZV55C3CW%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T140804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQCxJRuc7YYCI05bk8L4p1uO50VvsI5I9SAYTlDqKKGexAIhAPJauERxuLfxqVfTtbmA0IpICszHle%2BGNdq9rVSjNB6UKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwNrxAVDAZJnM1KRwoq3AOipHxgO0SueTaAeR6cOrEZ9p0%2Fnm3DyQ%2FMVWXDnqKmG0EWh2lsWQjeDGeH7fMXDgL1wJ%2FwTNqif9QIdYElApucJ6SqAIZf52OiP0%2Fa6HCUu4EPxMA518S2Be9XScT3q%2BG02mnAFWV4UYKyj2%2Ftnu3f5DmVmxFPs5R2%2FzS%2BbUnRZNX2aY4S2FCE%2B7eXPhaglC%2Fc7zag6NC1DLCHpCWglJV1b0zVpZ9J1Msm6935NMdXs2l2e8j5ufECxZpu3c9pe4Y1uJvc20UsW%2FaVAptlg8HcrcHhoOLdIX0oAuhNXSqXlsMlMvI3Osy65ms3djj06gveqxtyc4npQMHBLL3jutyOgcxYUv3kiZMOH8dK%2FFofOVSRbR%2BbCeeVMqEZKQ3CNE6ZmdL5XkXk3V83j%2F5wTtn%2F2idTkTfhwXpRcrSzyxcif9qneJKOUzYIxXwU%2FfeWZ3AgLBtXvjmm%2BIJrjyEMN85q780ygGPKKAnbCp0CPQ9EAxqBu2o2jSbxTrVBaa60br7SWBEFvpajo5C20N2dsBG3SBFxV1yFQs8ycVEN4dUFIt3V8TgVrIAt%2F3CfArtETDjSvQu365kKjLVxrUkIxlfjAxhXB3WYZef5ZCQPpIWS7Ew%2BnKjKvbVJgVUu%2FTDVyM3ABjqkAbjKL6o0FV2Tz8WZET%2F2x68pdOWTJk9ecF155S5OPO2%2By%2FigqCdDbauFmXSc4kBSZYvWW42Fq9cOLHnt3b0qtgELXcGeZ9Fe10dkTNuUkefhVyDXFzxarttAIj6U8al9uDQ4rGrYFGIC7tfBigN5ROiLiMBS5PdIXDTa9RBWbYE%2F5tP7o8oQ0q8%2FhHLlwmlU7FYwZQl9OWSuTRNP3%2F56L3vK%2FQdn&X-Amz-Signature=4cdc8add1009f59fc49361cab6be55f481a856273f3e4fe22b8ac8c7688e8495&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZV55C3CW%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T140804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQCxJRuc7YYCI05bk8L4p1uO50VvsI5I9SAYTlDqKKGexAIhAPJauERxuLfxqVfTtbmA0IpICszHle%2BGNdq9rVSjNB6UKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwNrxAVDAZJnM1KRwoq3AOipHxgO0SueTaAeR6cOrEZ9p0%2Fnm3DyQ%2FMVWXDnqKmG0EWh2lsWQjeDGeH7fMXDgL1wJ%2FwTNqif9QIdYElApucJ6SqAIZf52OiP0%2Fa6HCUu4EPxMA518S2Be9XScT3q%2BG02mnAFWV4UYKyj2%2Ftnu3f5DmVmxFPs5R2%2FzS%2BbUnRZNX2aY4S2FCE%2B7eXPhaglC%2Fc7zag6NC1DLCHpCWglJV1b0zVpZ9J1Msm6935NMdXs2l2e8j5ufECxZpu3c9pe4Y1uJvc20UsW%2FaVAptlg8HcrcHhoOLdIX0oAuhNXSqXlsMlMvI3Osy65ms3djj06gveqxtyc4npQMHBLL3jutyOgcxYUv3kiZMOH8dK%2FFofOVSRbR%2BbCeeVMqEZKQ3CNE6ZmdL5XkXk3V83j%2F5wTtn%2F2idTkTfhwXpRcrSzyxcif9qneJKOUzYIxXwU%2FfeWZ3AgLBtXvjmm%2BIJrjyEMN85q780ygGPKKAnbCp0CPQ9EAxqBu2o2jSbxTrVBaa60br7SWBEFvpajo5C20N2dsBG3SBFxV1yFQs8ycVEN4dUFIt3V8TgVrIAt%2F3CfArtETDjSvQu365kKjLVxrUkIxlfjAxhXB3WYZef5ZCQPpIWS7Ew%2BnKjKvbVJgVUu%2FTDVyM3ABjqkAbjKL6o0FV2Tz8WZET%2F2x68pdOWTJk9ecF155S5OPO2%2By%2FigqCdDbauFmXSc4kBSZYvWW42Fq9cOLHnt3b0qtgELXcGeZ9Fe10dkTNuUkefhVyDXFzxarttAIj6U8al9uDQ4rGrYFGIC7tfBigN5ROiLiMBS5PdIXDTa9RBWbYE%2F5tP7o8oQ0q8%2FhHLlwmlU7FYwZQl9OWSuTRNP3%2F56L3vK%2FQdn&X-Amz-Signature=5189ea992ac267202293ada62c4a644a8abaea124bc1ed35b4d5282e5f9b564e&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHLHYQKH%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T140810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIDEaBWQmtemJuDyo11MHACL2%2FZd6H%2BkGFKRTZjfEfF2BAiEAtlg7fRfpXfoMQeUyvkd0hFCwgh6UIsOIp%2FsyQiBrdMUqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPjyHDcuExumY%2FTJIyrcA51whNkPOgJWjQYgilC5aQ9A%2FlBgs3%2BpD0aix3lPGPqwkYMwsp2Q6M5GJHkIdK9jCeObsx6JVjijNh0%2FE97VaYASts7wFi1EiSvFLpvagQsujzsB8yD4SHkfAx3qy78JSWdTUkoscy%2FnANbAGiLHfMLACCQyBbhRA6n%2B82%2F%2BHysX8hGDb8u7Lj8RvI6qNtlnIjfHieDAbzqC82zoE2dNG77QHp%2Bu8h37M9SMAv7WgPCCF%2BHXfN1RSmrZvFL8%2FIBMfjzM8lfF%2Bxc5Br5wL7bvJCBVuTpYLGz%2BlzUm7kJevfccu6fdVahT6y%2BKu5h97JZsprYeYMdaJ59oFZ0enM2Pno9EHCytShAcLkG1vD%2BG6K%2BrY138iZF1%2ByiL4e4UgX%2BEhw09KUKtmJLKkCq%2Fqgpdti8tiJuL%2BCHInXBS5FEzCAhJbzh3BHyteB02jjSOrq6wl2EUgSOVVg%2B4Tt0SqWgCqTEgMsxjFbHnnafZdPq8e5JNupggUSYpfUQcrvetOsILNyVV0xMi6eEVM8Qa2%2Ftv7FPT2aDc1d1EUVJzY50ot9nYruxoU2mijjaP0ZMAXyPWh1RtSKk3zfLlgbqiRS61usIbPDnQuVejx0BOOvjtj8K7rHOacJ%2B9EnzLfR9FMJnJzcAGOqUBNb8lH9zLXUR5ajysWU5YWHhiifxqHo6pgfyt%2FOwPs0wf7eBdeKBP4dEkDhCpzhQzbjiFYq5cCLZ%2BemwSs1b1GGM1l5G2LFVG5h5sr65NyKYtDICSjPZXNSAX6dfxKLWFuuonn0VgZ7N7C6zLCppL8ily0kPXSenmi2tK1EtUneHoWc8WdlfU1o7iMDki4ct4fbHsk9eRvyVa0Bp5UMWIopGs6Lrc&X-Amz-Signature=5c2b11e908659d1c996e853a401cc8e75ad9a568ec40ecddfd6660dbd9d4423f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLIL7LXW%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T140811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQC1d55ZC8s301McSzyivik87gpgbYdvEpNVD1PEYr6c6wIhAKLowSMU8Z1kx7dmJufJ4DUrzldA6GCWAUTrcsar%2Fau1KogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyOE4leq27zjRJgvo4q3AMk7u55hQtNPIA9nuhTPmNBNQWC9NmtLYxFxI75Xz9J54FaX16XfAPdOhrTAxJVU2YL20AohcOrOYF%2Fd4q1E0TwpA%2FLXBKxeXV%2FNKdP%2F0JpBZr%2BmGWDYzBSJwYz2Et6bP7iMA5ApCXo1g4G%2BgxLeC16AIPfjPPD76TGdNue9DrNfGnsr%2FyYN%2B4xpMZswZNTu1QIFGlywGLTIPV%2B4UiEgWFOdxs6DaZgR6PXtp9u1M07Mf9zJwVSWHc9jiw0quZ8BGiAV%2Fd4mHRpraG1WQTkKD17pUAkU7Nq%2FQGimR5vLnOKa2zWyW29HnQ2tThNzPM%2FLoV9KGVCXBOiY0ByXEgby%2BUXg0dXxhfP4GBlYv9%2B7lRxPCBLp4HL%2BrWRgVrAugEf4pblDAoyTG2cyhJ8El4J3Ssev2ZU8zT9NjFeYgxC2qxgKNB6fesI0N0U6hmG5kHZAu26vcq4knD35mo%2BvsYZrSrVqpzM7LH581TfAsvV%2FVL5aBfMD5Uup%2BGLRMClb4rVu%2BP1tJW%2F8makUTbP1YyNvJNbSke228ThCRQGxY9dP0J6l0C3Bhsb7K1O9CHIPDulSF0kgrQFLPpsN7c1sfO%2F5qJIxra83ryDFdx3AIjMC1bbB2sfsO2a%2FvtHw%2BCavjCJyc3ABjqkAY7n0QQ3RiJxACjkc%2Bamy2KBXPKOWcfwKRtvNZt6Vcn0Nz4i75zT5ylQY0eVTcBk5df0a1diRt0uyQ2IoyafC3pELG%2BPZVdR33dfVwLVuQipQ5Eg7G664xZd6EdbHNyy26HhDjVZRyFpvsK2AiJmnCaZbIIHfMEJPgKHV20keGjEaLZNJus%2B51d54MMqMQuYOo5E5aC215GC3nnpicsUm6Rmf2jA&X-Amz-Signature=43fa02b73783b5dcb37479e54dd546cda8927c7f135e10f09e2936e5fd716b8c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZV55C3CW%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T140804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQCxJRuc7YYCI05bk8L4p1uO50VvsI5I9SAYTlDqKKGexAIhAPJauERxuLfxqVfTtbmA0IpICszHle%2BGNdq9rVSjNB6UKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwNrxAVDAZJnM1KRwoq3AOipHxgO0SueTaAeR6cOrEZ9p0%2Fnm3DyQ%2FMVWXDnqKmG0EWh2lsWQjeDGeH7fMXDgL1wJ%2FwTNqif9QIdYElApucJ6SqAIZf52OiP0%2Fa6HCUu4EPxMA518S2Be9XScT3q%2BG02mnAFWV4UYKyj2%2Ftnu3f5DmVmxFPs5R2%2FzS%2BbUnRZNX2aY4S2FCE%2B7eXPhaglC%2Fc7zag6NC1DLCHpCWglJV1b0zVpZ9J1Msm6935NMdXs2l2e8j5ufECxZpu3c9pe4Y1uJvc20UsW%2FaVAptlg8HcrcHhoOLdIX0oAuhNXSqXlsMlMvI3Osy65ms3djj06gveqxtyc4npQMHBLL3jutyOgcxYUv3kiZMOH8dK%2FFofOVSRbR%2BbCeeVMqEZKQ3CNE6ZmdL5XkXk3V83j%2F5wTtn%2F2idTkTfhwXpRcrSzyxcif9qneJKOUzYIxXwU%2FfeWZ3AgLBtXvjmm%2BIJrjyEMN85q780ygGPKKAnbCp0CPQ9EAxqBu2o2jSbxTrVBaa60br7SWBEFvpajo5C20N2dsBG3SBFxV1yFQs8ycVEN4dUFIt3V8TgVrIAt%2F3CfArtETDjSvQu365kKjLVxrUkIxlfjAxhXB3WYZef5ZCQPpIWS7Ew%2BnKjKvbVJgVUu%2FTDVyM3ABjqkAbjKL6o0FV2Tz8WZET%2F2x68pdOWTJk9ecF155S5OPO2%2By%2FigqCdDbauFmXSc4kBSZYvWW42Fq9cOLHnt3b0qtgELXcGeZ9Fe10dkTNuUkefhVyDXFzxarttAIj6U8al9uDQ4rGrYFGIC7tfBigN5ROiLiMBS5PdIXDTa9RBWbYE%2F5tP7o8oQ0q8%2FhHLlwmlU7FYwZQl9OWSuTRNP3%2F56L3vK%2FQdn&X-Amz-Signature=b603c4993f7d9811bf48092cfce77dd88230c8ce9d126e181039ea4d1b6d486a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
