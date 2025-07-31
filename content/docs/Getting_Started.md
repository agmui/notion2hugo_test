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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TO2VVPUR%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T043532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3VJRGBF0pPnFI2mtzF6Z91koEoH2XhMklA8aOIsP2gwIhAII7tVK0muefo2Z%2FiVfBAbNKS28gfvFgwZ6%2BKyGkyCZWKogECM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyAmUuDlSIP7nAvIfIq3AMbsXbt2z7tRBpdga1FVWX16a1wrvujKPvF7J4mFfYWw2KmF18d7mUQSZ%2F94hz5koO2XnyiNa12GtnURsc4SYwI7b4ArIUFV4TDCCUCHK9UHXkdgy6hYKpI2nJF0dwODBSu%2FfneLo%2BNo6xibebZPbbCRTa0sW95U583NARfhIhNdBmHV%2B2zn5pA5EXG7JzVvePRLOAbQSnb8upSFn%2Bkak7p3bzgecC3Ai8682RUW%2FS%2B4HKleabdjlmoeSYJmaDDnpTJiB4nFTWVflWLhpsl0vNqtSctYu7e5BPUY6Md3msvppKOjtYnSpDESXBotFTwa26NSHMehIkVvonOKVAzPZy2sk15ZkTy%2FHN6p3Rs0X7dz94KmA0cW7epYGgIhvfXbpoUT%2FBBuvYPV0ureJlr856JULMjPL0DsG%2FfPxwbWyKwEztZ4E4ezEWbPT1joEHnW2rqkeR3clloPn5QuC2TK10wajhL0R5sNyiJ9EQje540YUX8c7ewv9UhIrKIZb3pKzVvMcO%2Fur8FQj7MIvFJk4EIyPug75k3kKjZ4Gpkaftw0EXOF%2FvTu2XNgQwVKK3NqV%2BwNiinUbYn%2BCmKLXgU9RlkSffZtxOzatwYfbRjdpHb3XPZdXNbp4OSlfb6ozC9y6vEBjqkAaUKxqe1pXOso6AKCC4ZI1M11LR4V9TfdYfrw252ohWiDLgfI7xPqzfCWkTU1Cp6KGw8jDtZzjIpMMI7af%2ByahI7RnnM6lChc7VTc3kCpK1zjPSS7kB7BLKY10MTHP2dvMAF3C3nKJqKvLdDf5FE7fSyFlrj1BwTkY4iIGWGEyj8%2B18OybKL0wKVr3lj%2B5NTFjF1%2BFxCiZgm%2FS9eIxYQ%2BTBtBR4E&X-Amz-Signature=c49d34996b638a4189f4e6bf7fb1ee7162638733b0bbb61f43be0a7e6f1fcff8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TO2VVPUR%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T043532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3VJRGBF0pPnFI2mtzF6Z91koEoH2XhMklA8aOIsP2gwIhAII7tVK0muefo2Z%2FiVfBAbNKS28gfvFgwZ6%2BKyGkyCZWKogECM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyAmUuDlSIP7nAvIfIq3AMbsXbt2z7tRBpdga1FVWX16a1wrvujKPvF7J4mFfYWw2KmF18d7mUQSZ%2F94hz5koO2XnyiNa12GtnURsc4SYwI7b4ArIUFV4TDCCUCHK9UHXkdgy6hYKpI2nJF0dwODBSu%2FfneLo%2BNo6xibebZPbbCRTa0sW95U583NARfhIhNdBmHV%2B2zn5pA5EXG7JzVvePRLOAbQSnb8upSFn%2Bkak7p3bzgecC3Ai8682RUW%2FS%2B4HKleabdjlmoeSYJmaDDnpTJiB4nFTWVflWLhpsl0vNqtSctYu7e5BPUY6Md3msvppKOjtYnSpDESXBotFTwa26NSHMehIkVvonOKVAzPZy2sk15ZkTy%2FHN6p3Rs0X7dz94KmA0cW7epYGgIhvfXbpoUT%2FBBuvYPV0ureJlr856JULMjPL0DsG%2FfPxwbWyKwEztZ4E4ezEWbPT1joEHnW2rqkeR3clloPn5QuC2TK10wajhL0R5sNyiJ9EQje540YUX8c7ewv9UhIrKIZb3pKzVvMcO%2Fur8FQj7MIvFJk4EIyPug75k3kKjZ4Gpkaftw0EXOF%2FvTu2XNgQwVKK3NqV%2BwNiinUbYn%2BCmKLXgU9RlkSffZtxOzatwYfbRjdpHb3XPZdXNbp4OSlfb6ozC9y6vEBjqkAaUKxqe1pXOso6AKCC4ZI1M11LR4V9TfdYfrw252ohWiDLgfI7xPqzfCWkTU1Cp6KGw8jDtZzjIpMMI7af%2ByahI7RnnM6lChc7VTc3kCpK1zjPSS7kB7BLKY10MTHP2dvMAF3C3nKJqKvLdDf5FE7fSyFlrj1BwTkY4iIGWGEyj8%2B18OybKL0wKVr3lj%2B5NTFjF1%2BFxCiZgm%2FS9eIxYQ%2BTBtBR4E&X-Amz-Signature=b7ea22694a86444f628e01e283f1b5b5a9908dc5814642efab921d601e1cb004&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TO2VVPUR%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T043532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3VJRGBF0pPnFI2mtzF6Z91koEoH2XhMklA8aOIsP2gwIhAII7tVK0muefo2Z%2FiVfBAbNKS28gfvFgwZ6%2BKyGkyCZWKogECM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyAmUuDlSIP7nAvIfIq3AMbsXbt2z7tRBpdga1FVWX16a1wrvujKPvF7J4mFfYWw2KmF18d7mUQSZ%2F94hz5koO2XnyiNa12GtnURsc4SYwI7b4ArIUFV4TDCCUCHK9UHXkdgy6hYKpI2nJF0dwODBSu%2FfneLo%2BNo6xibebZPbbCRTa0sW95U583NARfhIhNdBmHV%2B2zn5pA5EXG7JzVvePRLOAbQSnb8upSFn%2Bkak7p3bzgecC3Ai8682RUW%2FS%2B4HKleabdjlmoeSYJmaDDnpTJiB4nFTWVflWLhpsl0vNqtSctYu7e5BPUY6Md3msvppKOjtYnSpDESXBotFTwa26NSHMehIkVvonOKVAzPZy2sk15ZkTy%2FHN6p3Rs0X7dz94KmA0cW7epYGgIhvfXbpoUT%2FBBuvYPV0ureJlr856JULMjPL0DsG%2FfPxwbWyKwEztZ4E4ezEWbPT1joEHnW2rqkeR3clloPn5QuC2TK10wajhL0R5sNyiJ9EQje540YUX8c7ewv9UhIrKIZb3pKzVvMcO%2Fur8FQj7MIvFJk4EIyPug75k3kKjZ4Gpkaftw0EXOF%2FvTu2XNgQwVKK3NqV%2BwNiinUbYn%2BCmKLXgU9RlkSffZtxOzatwYfbRjdpHb3XPZdXNbp4OSlfb6ozC9y6vEBjqkAaUKxqe1pXOso6AKCC4ZI1M11LR4V9TfdYfrw252ohWiDLgfI7xPqzfCWkTU1Cp6KGw8jDtZzjIpMMI7af%2ByahI7RnnM6lChc7VTc3kCpK1zjPSS7kB7BLKY10MTHP2dvMAF3C3nKJqKvLdDf5FE7fSyFlrj1BwTkY4iIGWGEyj8%2B18OybKL0wKVr3lj%2B5NTFjF1%2BFxCiZgm%2FS9eIxYQ%2BTBtBR4E&X-Amz-Signature=85fffba246ff4897e164f4a8ce6b98a599b8e27c478e271c6335c0b2585f96be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZQSFISF%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T043535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG9jb%2Bk57QrVd4xbp7bOf%2FBNRonFqJkDznLhogPziohSAiB24Sc6%2FDuHd6gPra1gFa%2B7%2BxKlIivaJrTdgs3I7AJR3yqIBAjN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmwAnAlVyPyotLYP5KtwDiHXKXbu8lyfFx4R3dNiXJXT%2F7zrHfytc9YMfpu%2BeUxYq30HJgp76z8BdKPSnbVU1alYqMN8VKQzJi1%2Fza4oeE5yZXHsF2FQuv4W9Nd1v%2B00um2rsNChzoWuXgfk4LUmqaoTZJcoRjjNqmVRs0ihrLuS93FvfwyibYrt0W2SK7GeRLF%2FpbWNJwf6DxqHVDVHB5AK4itjCacNtCTX0m2wofuvt8re9vP93aC0LdvZlG2O9sTBxVscMPK8Jif95WPSQ9JGkkN%2FThRorJ2OpaJEOKbGNuQqNQ7NEEjfa7PX2Tsg6UN4E9j3toii%2F6ZtVbmSzEBZ6s9lPwF54Sg08rP5izBoAldm%2FashdkGoBGBWBGnD7Zh5rnHIA0RU7Q%2FuIA71Pr6TYEU40fdIw%2FBGeS6vDLZyTip%2ByqSKQuEsg0TSvsU%2BVn2%2F0tMpF8%2BfeA0LofHngh8oykMgaDIYjz8PX0h3%2B3G4PthRkAIqvIZvKETZbKcEvA6Agea3nx5aTuNbWLi8Ut%2FkMPgKMySic2%2FGpCwxkdIgfofeECkntKOIbirIFsa6NMcqsuz0EIekN65LXBYnzL3JKIFYzQpetnBpHui8mQSpnwN2P4GTbvHLxyNOpNfMiKPsNa%2BbOzGmjYtQw6smrxAY6pgF%2BQd3tND1A8LKJS9NKxs2nE%2FGzZZLhiLAjGD8AZd%2BLUEhLq6BdE58Fyl5bmenxiqfS2Ee1YtHmd6wqWYYy1IJPnRHglfQ%2Fr%2Bv7ADjpDiu7i3pQLVeShbvcqfzdmlCNO1n%2Fh15tNdrULhPboBr2XG2BQgn68NZygCuRkn3WQxfiIIWlCysS%2F9YQtMV3Yh2oKrh%2FGd%2BXStR9yMifqKt0ebBYk9jddBn1&X-Amz-Signature=b7d39137e83ef5607eb7b6be05999b9e26cfbee473d4e8c2ba8bcb4a3c2f0086&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXTKHIFU%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T043538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAN5ZAcDRoAJg1xOUnqDgZkS1MEmUFNGPezvuty7LN6fAiA07kQSaanY0gU3peRvbMtGn0WZAUkHoeawyOo4oIpalSqIBAjN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuPqswGav4ZVxsQuMKtwDb5AP0d77iZByaG1ZEN%2BiOjTmzip6oRClmaMKqdlfca3nZ8Nc6lPDitz9b35%2Byw3o8zi7YLVdK7OHBmaXK2saIONLJzYGKDQ9sh0kv1LfvgzECqa%2BPcrN4w9VPGI8Iq%2BzaSnRLx5JSlcCA7HqaYT%2FH9Wd%2By25XJC927G6qyOzB9XzQv62mhXyFLRIa5tpEQ05UEL6%2BlbERIK%2FlFMMrhkbI0PkDfp0%2BA0%2F0fXYv7pQ4DiLiqAhYmQCAPYHRZhqx4DtL5PYT7GBWkMcvAg%2FTMJb0OkQiNUhUPExWmIwN9tsCeOboDk%2BH4B00zcn639jxlhmGHKMUXJqRnvyusv1TZulDbuoheLlJOU8IGgFuXi%2Bnl5wSq%2F211C3SU%2BR%2FKsDGMsvqwIxRC44mO%2BaCgSbxtZ%2FOeSLVZKxtwj4MPUBpIc9r0JEj1tMAUKTTjDVB8Keqb%2BUfVIXQLX%2BiKTZQN867GZY065lEwxQGFHC5CAnJabqfHdhAZZdebn6vkjW3ZeZ1GUud2S6lKVw8rSPQJmjr5lPVrbQfzagdhyDH2QxoFtjlj92DYXIbYROCvl5cIThkNOb1y8q4ymYE2Krmswv%2FiDx3MQnliEWZQSp69kOuRo5a9fBZ95EvNamzgWqtwww7sqrxAY6pgFnZQvGjAjfQ6ni0qrRlLEfLglqDqHxAUP%2FgCEVRBeszns1nbWyY3FbM3%2B07tPwfFZtHRj40typwfxOccYf9s1c4%2FJkaF45kQtCylfqcaQjFDFYC3MmP9ZSTN5xiV1kRy7FQuPAqHwtZu7FsiMXr5sb0qRpxBgqkcFWGAy42hajYHi2GVnKlgl%2BYcaT7jhwx54zjwC2aQJHuwlOy8eglrEBZQAX3CYM&X-Amz-Signature=920401c89fe25ee0a420f6dec5580a104449754a299e5e8ef3e60fb2b7d51305&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TO2VVPUR%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T043532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3VJRGBF0pPnFI2mtzF6Z91koEoH2XhMklA8aOIsP2gwIhAII7tVK0muefo2Z%2FiVfBAbNKS28gfvFgwZ6%2BKyGkyCZWKogECM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyAmUuDlSIP7nAvIfIq3AMbsXbt2z7tRBpdga1FVWX16a1wrvujKPvF7J4mFfYWw2KmF18d7mUQSZ%2F94hz5koO2XnyiNa12GtnURsc4SYwI7b4ArIUFV4TDCCUCHK9UHXkdgy6hYKpI2nJF0dwODBSu%2FfneLo%2BNo6xibebZPbbCRTa0sW95U583NARfhIhNdBmHV%2B2zn5pA5EXG7JzVvePRLOAbQSnb8upSFn%2Bkak7p3bzgecC3Ai8682RUW%2FS%2B4HKleabdjlmoeSYJmaDDnpTJiB4nFTWVflWLhpsl0vNqtSctYu7e5BPUY6Md3msvppKOjtYnSpDESXBotFTwa26NSHMehIkVvonOKVAzPZy2sk15ZkTy%2FHN6p3Rs0X7dz94KmA0cW7epYGgIhvfXbpoUT%2FBBuvYPV0ureJlr856JULMjPL0DsG%2FfPxwbWyKwEztZ4E4ezEWbPT1joEHnW2rqkeR3clloPn5QuC2TK10wajhL0R5sNyiJ9EQje540YUX8c7ewv9UhIrKIZb3pKzVvMcO%2Fur8FQj7MIvFJk4EIyPug75k3kKjZ4Gpkaftw0EXOF%2FvTu2XNgQwVKK3NqV%2BwNiinUbYn%2BCmKLXgU9RlkSffZtxOzatwYfbRjdpHb3XPZdXNbp4OSlfb6ozC9y6vEBjqkAaUKxqe1pXOso6AKCC4ZI1M11LR4V9TfdYfrw252ohWiDLgfI7xPqzfCWkTU1Cp6KGw8jDtZzjIpMMI7af%2ByahI7RnnM6lChc7VTc3kCpK1zjPSS7kB7BLKY10MTHP2dvMAF3C3nKJqKvLdDf5FE7fSyFlrj1BwTkY4iIGWGEyj8%2B18OybKL0wKVr3lj%2B5NTFjF1%2BFxCiZgm%2FS9eIxYQ%2BTBtBR4E&X-Amz-Signature=496ed9c87f1f5587e497f8ce80c0a3751899e13f8d2d58e86e334951d25d0c1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
