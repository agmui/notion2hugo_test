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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OSSLC4T%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T210741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQCMEkmjqocZNgd6CKrh2huwKF545r%2FtLayzpeaAree%2F%2BQIgO6UQO1zACCqv8SwWd4t0so1EznvevZulFCmzPZ7ENckqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC41KADEOnfc7LHirCrcAwaazjmy7QdK1SpwgsFJX4UlKzZRxHAQk8A8N9dhVZn1%2B1WJ4eWbEurQxpnZGSe4ZcpQ4ZXS3bzDa3m5oXDRMJN0sAvEfUchsH4VsEViR6U2PzOQwZOHTCPRUsEVQuyac3L1sbLOOvMP5GFuQOY%2B4nbK77oYpZSAuEj5Q4YTQo%2Bl%2FTaIiEsSh62kar1LnAOkzMUslQWruOCj%2FPro3IoSHoV3XlxQBJ2QLsQX6bUin8snAGYDc%2Fn33zc%2F2xY1hWxeI3zhFTFk0aozLE7KjA0mx8AKmH4b5TI%2Fgzc7jVUwr7qW0vURzyomBB70hG6%2BB2NM9A356%2BYfrzHBo%2BCS6u8DX6RJYfnO6xKiTiz8G306OJjZuNX8frZ1oD2whzoj4r28tntl%2BCDGnCwZARehX%2BNk%2BV1M1SjtByLMofGhfxZ4KkpW%2BErL%2F337V%2BQR7aepHzSaMwYdkFBjl%2F68mHGFA1wkPIuweXTAFg%2Fikix644%2Fn9Rc4gDnSf1cFp8pLDYYgby%2F7nmp9tWyafNdvagdvAxoN00t0P%2F9fRNKBuZNbSlxHLnTJ5OeOMaV5m3%2Fv6EDO%2BmgjTYyG6uM3y%2FiokrBip3bHqIzAGIQgGjY6ZrXkrx4CgkOTAlRg3mhE7o%2BRrPuuMKrTmsAGOqUBaNCuoSF3YpVpWba%2FN9WU4meuMZPsQ11ausdl8ON74EPO%2BlKJW5UDrioVWe4Ks2CTOwkiKpo%2FnS%2BN9Ow7VdHFiPyaWUPKx5Fc2dOjdc9njCIjNE2sEwFkjOv%2FlNwEbLGcLGEwvhMmpHeJ8CVsWtgFkOrnUeakGNizDrNmRVOmC7L8QfLDhulTjU%2BWa9w1DGqgeiY%2Bd9vqdTRoQbeNYqo76SsclSxc&X-Amz-Signature=a3b449647cbcfcd14f2986e2ff8328cda99fe93aca5aea977e401cedffd94dd1&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OSSLC4T%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T210741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQCMEkmjqocZNgd6CKrh2huwKF545r%2FtLayzpeaAree%2F%2BQIgO6UQO1zACCqv8SwWd4t0so1EznvevZulFCmzPZ7ENckqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC41KADEOnfc7LHirCrcAwaazjmy7QdK1SpwgsFJX4UlKzZRxHAQk8A8N9dhVZn1%2B1WJ4eWbEurQxpnZGSe4ZcpQ4ZXS3bzDa3m5oXDRMJN0sAvEfUchsH4VsEViR6U2PzOQwZOHTCPRUsEVQuyac3L1sbLOOvMP5GFuQOY%2B4nbK77oYpZSAuEj5Q4YTQo%2Bl%2FTaIiEsSh62kar1LnAOkzMUslQWruOCj%2FPro3IoSHoV3XlxQBJ2QLsQX6bUin8snAGYDc%2Fn33zc%2F2xY1hWxeI3zhFTFk0aozLE7KjA0mx8AKmH4b5TI%2Fgzc7jVUwr7qW0vURzyomBB70hG6%2BB2NM9A356%2BYfrzHBo%2BCS6u8DX6RJYfnO6xKiTiz8G306OJjZuNX8frZ1oD2whzoj4r28tntl%2BCDGnCwZARehX%2BNk%2BV1M1SjtByLMofGhfxZ4KkpW%2BErL%2F337V%2BQR7aepHzSaMwYdkFBjl%2F68mHGFA1wkPIuweXTAFg%2Fikix644%2Fn9Rc4gDnSf1cFp8pLDYYgby%2F7nmp9tWyafNdvagdvAxoN00t0P%2F9fRNKBuZNbSlxHLnTJ5OeOMaV5m3%2Fv6EDO%2BmgjTYyG6uM3y%2FiokrBip3bHqIzAGIQgGjY6ZrXkrx4CgkOTAlRg3mhE7o%2BRrPuuMKrTmsAGOqUBaNCuoSF3YpVpWba%2FN9WU4meuMZPsQ11ausdl8ON74EPO%2BlKJW5UDrioVWe4Ks2CTOwkiKpo%2FnS%2BN9Ow7VdHFiPyaWUPKx5Fc2dOjdc9njCIjNE2sEwFkjOv%2FlNwEbLGcLGEwvhMmpHeJ8CVsWtgFkOrnUeakGNizDrNmRVOmC7L8QfLDhulTjU%2BWa9w1DGqgeiY%2Bd9vqdTRoQbeNYqo76SsclSxc&X-Amz-Signature=da34b0a0ac2c37d1b2a401cb0b241bb6565c6669801ffcc42a4b45e371350a9d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZT2PAFZ2%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T210743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIBRhmjNG3qyB%2FgKLi9cjM25q0KeRzQ%2BGvcuMKz0M3jPPAiEAqXFWMjVjPDmLkwDHvtMReGo496dt00FkzFiBMFcKVDYqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFfnmUWhXVSKKgUOXyrcAxzFWTPZFjzcybhURTwCDansk3RWjdRvTrM39sgNPL4ajxUTJcrbSbfu8gGDRDfNpczMIJeE%2Bn%2FoyKErL%2FZYGqozIPXu5kgHI15YrBClTX3fTv6yMgQPBOqa%2BPOIU%2BuAA2x91MeXS7XZ4Q6zjxvNDq7WuTymitnuP%2FiPuA%2FKs4TU7nEe81CP0%2Bk2dRY0l2DvzQWkemX7Z%2FpMCirDXPh%2Bye%2Bvt1vx51Pp8648p2%2BCEZSKWfUpUqfAhAjS%2BVksINIOA9DYPsG5Di2%2FcK8XUjOhs1O406XErkZNpLD2dmkPIwucw043ui6bREIAk9uZrCwR00BJO02p%2F3dQ4OKWk%2BWKOw2Yl9hDhztgRUhm%2F21tsAgyu4edS9WuMOpNRkGIJ6dbuJoSUmZ6zKBetalKVz2o4tp3ERYq%2BEgAq5IaepA%2BrYdsan%2Bu1InPCul8GyUr%2FoS6CkKa9BW1xuP%2F8AKPMlQgix2n%2B85Hbyl33WM1vdY3UjRyV2%2FE9MhDDbu0KI9jgqz0EhP6iYLO%2FhjD%2FKoz6N6PjxQCiigM9s%2F3EHKlBJOi7RunraP9A7hU3tRSa7NZkyJnnUPFCtAFdzIiwPQxjsttIVEbrgxHKE7iMLn%2BQr9u89Ze%2FBGGzWDEH%2BxwQQpgMI%2FTmsAGOqUBxNa3F4gFoVSOE%2BL1sAm0Of3HFPuTpzBgfqYLmcuC3cQHHZu6RzdqdMnJnO24MW50J3Yuh23wex9qkkrdzcdfrRFgB220sDaO37xlWqJGnADipokl91gQsq4iMNt%2FMzx4Mv2J%2F%2BfpZFIhSjNXKeKNbSm4i3AVxvl%2F9swn6pMUnMgRuMcoURlViIEuTJsirmOOTo5fMBaPr0NhN4M0Dt9hE8LDZdGQ&X-Amz-Signature=0cd292dd4e73504f35eda4aff0df4dbca7913cc3f5c0f8c9d98f63f7e5711d18&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVZ2UYHI%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T210743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQDfEbbNQctiq2PCibgprnF2fK1Cv4W%2BWhY%2FSR6iCqqCvgIhAOD5jb2IE3ch3NQRS%2BFJWCeTpH1gZ4%2B8ZK1NuvGv1tJgKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxg%2FlZhvXQQ7IclWCQq3APt0AGHvsYda%2FSe3G%2B6dgESy%2FnI%2FsitVP6FQPfcxNyQ%2FV4ZR3FDIcnWQmrVALpk8w9ClOy8J4%2BZAxK812Z6zq1PLT6HIHklw9T7s2jU5W6UyMWvEOcEWI6THPwIsLdedptw%2FF34VIIsT28Voca2vp6dcvEUcMIBccmISZN3X8%2FbDXbR17gXJNpERLiIZMm3PZ4aRVhDKgwOU0MrWg2QAN5snv21IEsbEHrTrNv0klBPtoR9SAups2wj7dUJ7W0BueOz8WK82Yukhpe8rKUPvW4dpFCyqqMKSg2NjgnXElokAaGJvx6FaHeqajMEi1Y3lvezW0WWE0RqwC52Qk1oqcXjzXFKpP%2FzrbjOCj%2BYdva3AZu0aCBOd7ew%2FzP46tk%2B%2FsakYCb2tTRtJ5QMtF7PT78%2FbRFYcuUhVb6%2B3w6v0nhNBdGrvB0FRyNMd3yKRsI3RoKxIqlihVneeskLHAZzmEOly1ifzBTuNsYUMxjaCNRFVppoNQ%2FPnNXrxxtxxFlYtrxep7KxU6rCimmBnSqV0GrUGjc7bpkemSvTHUOzDDMCpdfqpsYySx3THd2weN0V1wQsPIyhAqE7aQ5GA%2FSLYl0mQ6Ym5pVTwhIYQLJGOEmE8yxXV11d309gQlgOJjCr05rABjqkAQnSnJOTbK8OokEqId%2FRZucpxXv%2Bk9LAL%2BdIDSKOlEG%2Bg2zC%2FzFAMcDbypejh0OOl3IaCNaaDxoHe3UJ9AUB%2BoVJ916%2F88uPp79vxiXF4nchSJIOle1LUa29B%2FiIET7hCrCCcHfGVe6RRrhJZV8SLc57jAEdca484vscs1ntPxvMTZ9ErO3KPQGrX8VAkYA64V8Nfs5OMmuZcRNKxG68YTU1Wcvv&X-Amz-Signature=eedda7addddf1da92a9c47fa14f5291f35998a4d7a4a0f839cc7968f6a792a1a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OSSLC4T%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T210741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQCMEkmjqocZNgd6CKrh2huwKF545r%2FtLayzpeaAree%2F%2BQIgO6UQO1zACCqv8SwWd4t0so1EznvevZulFCmzPZ7ENckqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC41KADEOnfc7LHirCrcAwaazjmy7QdK1SpwgsFJX4UlKzZRxHAQk8A8N9dhVZn1%2B1WJ4eWbEurQxpnZGSe4ZcpQ4ZXS3bzDa3m5oXDRMJN0sAvEfUchsH4VsEViR6U2PzOQwZOHTCPRUsEVQuyac3L1sbLOOvMP5GFuQOY%2B4nbK77oYpZSAuEj5Q4YTQo%2Bl%2FTaIiEsSh62kar1LnAOkzMUslQWruOCj%2FPro3IoSHoV3XlxQBJ2QLsQX6bUin8snAGYDc%2Fn33zc%2F2xY1hWxeI3zhFTFk0aozLE7KjA0mx8AKmH4b5TI%2Fgzc7jVUwr7qW0vURzyomBB70hG6%2BB2NM9A356%2BYfrzHBo%2BCS6u8DX6RJYfnO6xKiTiz8G306OJjZuNX8frZ1oD2whzoj4r28tntl%2BCDGnCwZARehX%2BNk%2BV1M1SjtByLMofGhfxZ4KkpW%2BErL%2F337V%2BQR7aepHzSaMwYdkFBjl%2F68mHGFA1wkPIuweXTAFg%2Fikix644%2Fn9Rc4gDnSf1cFp8pLDYYgby%2F7nmp9tWyafNdvagdvAxoN00t0P%2F9fRNKBuZNbSlxHLnTJ5OeOMaV5m3%2Fv6EDO%2BmgjTYyG6uM3y%2FiokrBip3bHqIzAGIQgGjY6ZrXkrx4CgkOTAlRg3mhE7o%2BRrPuuMKrTmsAGOqUBaNCuoSF3YpVpWba%2FN9WU4meuMZPsQ11ausdl8ON74EPO%2BlKJW5UDrioVWe4Ks2CTOwkiKpo%2FnS%2BN9Ow7VdHFiPyaWUPKx5Fc2dOjdc9njCIjNE2sEwFkjOv%2FlNwEbLGcLGEwvhMmpHeJ8CVsWtgFkOrnUeakGNizDrNmRVOmC7L8QfLDhulTjU%2BWa9w1DGqgeiY%2Bd9vqdTRoQbeNYqo76SsclSxc&X-Amz-Signature=39285c07e373b0f8d5f39619cf8a3681acd73fe9d04bbff0813f8a8bca3b5ae4&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
