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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FIASFJX%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T070921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQDY32Y28SMeAja2413tHHabTxtFo5OjXXsSJW75Vr5jYAIgQaKne4NRoQG5rPDHM3q%2FHbiGls%2FoEYNcEo10GA96ZrYq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDNoY%2FCehCpZaytjp9CrcA24Mp0rEvXMx4qTyzCo1D5KAOj%2FJD7IaA6yaTWRdMZWzHwtt2NE9ppngKSQ3wMfHeVAkjiEhjoLkDd9dMRVfjSMUIUv2SSzKGHRZFhLvBLb%2BYdMnjEODj4lvwh8d8rvYkB2MVX%2BxwUVzev25H8LLC5NIM%2Fd65S1j0yB%2F8cSrYw8F3%2B0DOc7h%2BOO8xxP4zt%2BNpGayhO3hKmqNUCs29dLDAfZ3R%2Fq1a%2F9xtrTexGMzwLOSem2N4LoitOatTnj1nYv2tUg12u1%2BjCfANoednZ8DzuSQ9Ty8QdTch7TRNpw6M8SM3Pd4E1WiJmn7w64jb67pcz7Euus9X2jkznE6rdhmOxtNNkPlGYCf1x0tQtnMcYT2U6Uo3yWyi7Uw7%2Bv9QH3ppAGXiIto3bHqA0Z7fGShGYZZgCLwlXF079jujbVRRQnz55sXn9KrnbIS7h96TIXSQShlHz4KKjJbCgWFMzE5I23bKcT1KiFJFA8fVGobaEikEtRk%2BAttXl3o4eVLBLgRYVhn2DD7SuiBqWa3tpAXAPaCTrYumjnG9%2BK2WiOJKy1x68vRaTsWEGNlURw%2F1%2FCOKM286LwtViKcEu6CyFyBu5U7gzwcpMTGSJZUY9bgLzVvru4oeMRdq26fOP2nMPK0p8AGOqUBkeX5jnjBXuoFWgM7dDfRKI81D37JTb2yuiqNhIOnt4qkkDQGDW9vC3%2BYblXqe0kX0x66VkqFFOhIZZLDyCJfs2Rra%2BDxsCPqKZvqiVQsmFpWUcgaZiBE2R%2BQgWHlZQliagABfsqXFrmUDnSQouhrSh%2BKq%2FhhhWn7QGTHntWCY%2FpVEPbWfFMTw6TYtdRv7iU1AU177t6ReLojtU1bg24uwQMHc2%2FC&X-Amz-Signature=6c40efe8555ce059a13ec56f16809a0af7635299a160845fc036233a9ed3dcd7&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FIASFJX%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T070921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQDY32Y28SMeAja2413tHHabTxtFo5OjXXsSJW75Vr5jYAIgQaKne4NRoQG5rPDHM3q%2FHbiGls%2FoEYNcEo10GA96ZrYq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDNoY%2FCehCpZaytjp9CrcA24Mp0rEvXMx4qTyzCo1D5KAOj%2FJD7IaA6yaTWRdMZWzHwtt2NE9ppngKSQ3wMfHeVAkjiEhjoLkDd9dMRVfjSMUIUv2SSzKGHRZFhLvBLb%2BYdMnjEODj4lvwh8d8rvYkB2MVX%2BxwUVzev25H8LLC5NIM%2Fd65S1j0yB%2F8cSrYw8F3%2B0DOc7h%2BOO8xxP4zt%2BNpGayhO3hKmqNUCs29dLDAfZ3R%2Fq1a%2F9xtrTexGMzwLOSem2N4LoitOatTnj1nYv2tUg12u1%2BjCfANoednZ8DzuSQ9Ty8QdTch7TRNpw6M8SM3Pd4E1WiJmn7w64jb67pcz7Euus9X2jkznE6rdhmOxtNNkPlGYCf1x0tQtnMcYT2U6Uo3yWyi7Uw7%2Bv9QH3ppAGXiIto3bHqA0Z7fGShGYZZgCLwlXF079jujbVRRQnz55sXn9KrnbIS7h96TIXSQShlHz4KKjJbCgWFMzE5I23bKcT1KiFJFA8fVGobaEikEtRk%2BAttXl3o4eVLBLgRYVhn2DD7SuiBqWa3tpAXAPaCTrYumjnG9%2BK2WiOJKy1x68vRaTsWEGNlURw%2F1%2FCOKM286LwtViKcEu6CyFyBu5U7gzwcpMTGSJZUY9bgLzVvru4oeMRdq26fOP2nMPK0p8AGOqUBkeX5jnjBXuoFWgM7dDfRKI81D37JTb2yuiqNhIOnt4qkkDQGDW9vC3%2BYblXqe0kX0x66VkqFFOhIZZLDyCJfs2Rra%2BDxsCPqKZvqiVQsmFpWUcgaZiBE2R%2BQgWHlZQliagABfsqXFrmUDnSQouhrSh%2BKq%2FhhhWn7QGTHntWCY%2FpVEPbWfFMTw6TYtdRv7iU1AU177t6ReLojtU1bg24uwQMHc2%2FC&X-Amz-Signature=59b6d2dfabb11c3ec937fa514ad7791ada107f636207510f7904b7b2906ac523&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5HD6Q4P%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T070923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQCYpulYm%2BBknntZXDMDGm3xTXrvlOuB5ZR%2F5BxEXN8rwAIhALqXIwVmFxRH13F049le1kCPcBWg34KXeIc0ClddPr%2FEKv8DCBAQABoMNjM3NDIzMTgzODA1IgwyYk62UUyAy2OIyjoq3ANEH9FuGlogi6PW%2F%2BEWpXeFrdueuPw4zNSP5fy0fV7xAzH1YNx1GX7KQiKc4nUxLqhRFJ%2BuyAkUbUJhH%2BGpe1yv6Jl4vFvcMQZSrC6XjZjcYT68iwMSD72lUmmhC8t27pyQFRuDUSKyBtT4I23nrgMRi1Ve1FT%2FcSJGqbflw4LDhnsDnGGop4avIu6bKUx5VSzpByWbhoR74QhL0niW65q2eU6L0pu5S0sPB7vFOoCA2bMFGaNlYdO4wiKYLtr8dPJtttZf3kSYgXhkaBw%2FeGw0Dgc2WlaLWcL7dzQsbB8yOWFOhSPzFVKa003mpvXR7TF6TnMQpLbxs5YUMvqK3rwE2mDWnKgg5EZp7g81rSNwjKa6C%2FSZLEAEw%2FGrldxZeniNbQ2EioMtEUIPXtFjTEVScxvLQ%2FaNnJYEncyY88rpsmOXVBK6pt3AH4VNKqU9ONIWvpDd9XfMzE%2FHAnxkEJ%2FHsA6RTEkSpQ1G6MfkU68cUsQs4p1LSjCaAO989KzDPO3zetCu%2Ba1sty7xVJyHgHfa%2B0iBFnD49T6WQDpnGJW6Xssy2RZ2mKG8hMTWFC6PAthna44EkvrUtkCHv1Svs44wobX%2B7%2BKP2A3ELocL9qCVhG%2B3dDRi8SfNphUhzTCPtafABjqkAXz7wzWdzjblr%2FW1b6L1fIHzlWaVwLttW12zw8hw10uYNBCP%2FEJDNVj79tathJtASqMSpQvADHfl7Ds3QQ4C13g5mHEs4f5W1Cnv3H38agP6alXEn4twpjN6I4EktxE9GqU709nKnKs4RZMqAkCelFEYPfNCqotyx6NFtZfvcV8pvi4U%2Fp%2BAzo%2BVMqO5pQiGrtVs%2Bcnb7ZVsJOetsFBrLrtbAJtH&X-Amz-Signature=b805b0c3c32791a74af6a47cea358a14f6275566458987a9596c78fc3f1aa352&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTE54J3Z%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T070923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCID5YA9xUi4U61MD9aiklefD1nfTv54L7iDIsbpzdOwJoAiEA9sRU9t7xd6OKU%2BF5WjrM2ZHCOS6Rbbx4i7HGwUsNPBkq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDMqfH7EQC3pLYAPbcyrcA7M%2FN3MYZdFqGjX9Ms%2FmkrP8BNOUzWImah4zp5VOFlO41dH6h4%2BL0JwvHgGgVu5QlwLfTK4bAdzOEPDCu952loN7rGC%2FyimmfRddFgO%2F6RAV8JV9DY80aT4PR5Rs0xdDRCZjTXjT7A00Zg3l9yGEu5pHMt3ahey2UvOCisPWAqzNrvG7WeFcsIthadXI9RGvzxA6rhmav0H1x4qgm4O%2BX6JJrm1CT5iVJdsUBEkDZs9l66Qh%2BXpuIlEwUMCRCYTwVuo6f7odKZXs62SlNe8NDAWYlC3whEnjVZfqtb1Y1CMpKBK7w5zhjZWbkn5d%2FXfO8OEBU1DpbZRQsIHP2WSprUjCe0ff81rGSVsfdfQI8FjCbeeS8ziqQv4z%2BCrYbe1i5vTq1rfCy4NN8hDQd%2BZVdl%2FARCoXdaKJoWemrwYWcjYslYZF9VzWDvXXGw6ndKXp%2BIPRuu5zZtXYB%2BOnxi8YOFntR9R9hXXldT6gAx1kzcWANuMUQYvlHuf39rvuOtqChj5kVKL5qTbqNq7CqSU1cdm%2BIaju%2FM4SIoaAv60q8d5apXyXg4cRHib9ZdF22voZ8Uod%2FtbDKWTwUTeK8IHrkVyXUrZCSbjbNnyPAEma4%2Fx%2B2xtYIfGNNKLNZIMLMNi0p8AGOqUBJXC3pZxXIbECZx23bE%2BoMbX9rhLKZ92azG%2FVVVOulD%2F5gx%2Fm0YZUDjbBGdXesG9MnlHiTm9YKOV0aYlFLArMPWsB%2B3mv89kWL2ignQCiGN3RkA%2F6xukivoM3aOm7tpKHhMcI5tHwFyleqKFyFh8UxsAiBGBT8JJp9Ic113p2j4eoeOqKkPVlprcnGpG0yLZ%2BJW9YDzbcjBaAuBsR8jQbvFzbPUBU&X-Amz-Signature=51c0251442f68134cdd54939f911269cf8be028eb8fa583011ba8e33e903a699&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FIASFJX%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T070921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQDY32Y28SMeAja2413tHHabTxtFo5OjXXsSJW75Vr5jYAIgQaKne4NRoQG5rPDHM3q%2FHbiGls%2FoEYNcEo10GA96ZrYq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDNoY%2FCehCpZaytjp9CrcA24Mp0rEvXMx4qTyzCo1D5KAOj%2FJD7IaA6yaTWRdMZWzHwtt2NE9ppngKSQ3wMfHeVAkjiEhjoLkDd9dMRVfjSMUIUv2SSzKGHRZFhLvBLb%2BYdMnjEODj4lvwh8d8rvYkB2MVX%2BxwUVzev25H8LLC5NIM%2Fd65S1j0yB%2F8cSrYw8F3%2B0DOc7h%2BOO8xxP4zt%2BNpGayhO3hKmqNUCs29dLDAfZ3R%2Fq1a%2F9xtrTexGMzwLOSem2N4LoitOatTnj1nYv2tUg12u1%2BjCfANoednZ8DzuSQ9Ty8QdTch7TRNpw6M8SM3Pd4E1WiJmn7w64jb67pcz7Euus9X2jkznE6rdhmOxtNNkPlGYCf1x0tQtnMcYT2U6Uo3yWyi7Uw7%2Bv9QH3ppAGXiIto3bHqA0Z7fGShGYZZgCLwlXF079jujbVRRQnz55sXn9KrnbIS7h96TIXSQShlHz4KKjJbCgWFMzE5I23bKcT1KiFJFA8fVGobaEikEtRk%2BAttXl3o4eVLBLgRYVhn2DD7SuiBqWa3tpAXAPaCTrYumjnG9%2BK2WiOJKy1x68vRaTsWEGNlURw%2F1%2FCOKM286LwtViKcEu6CyFyBu5U7gzwcpMTGSJZUY9bgLzVvru4oeMRdq26fOP2nMPK0p8AGOqUBkeX5jnjBXuoFWgM7dDfRKI81D37JTb2yuiqNhIOnt4qkkDQGDW9vC3%2BYblXqe0kX0x66VkqFFOhIZZLDyCJfs2Rra%2BDxsCPqKZvqiVQsmFpWUcgaZiBE2R%2BQgWHlZQliagABfsqXFrmUDnSQouhrSh%2BKq%2FhhhWn7QGTHntWCY%2FpVEPbWfFMTw6TYtdRv7iU1AU177t6ReLojtU1bg24uwQMHc2%2FC&X-Amz-Signature=a6aaa43b921c686e3ee321b216fde351cf15b0ee67f23db59640e5df678127d6&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
