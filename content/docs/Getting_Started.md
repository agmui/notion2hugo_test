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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZCOZ7KV%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T230756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCICSnsYGYzu9v0oyqx%2B4OrA1Cp0nYjho4mvBbHlQeRURBAiEAvx%2BtRUNY9ytRMUr%2FDWdr2t8fsOTJ63YQaqMs0kJunh4qiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAB4qD5VFXukKeGnsircA8FegttHgSpQPOdEDHlHbpWgstd1fDxumBZqC6z98MbEDe0QyL4Zz5S%2BMaw6rDzUqBjJGLhG4GYkWNdGOGVgQ3Sko8X0S56saQI6Wyl%2B%2B5uVvMb%2FCR5AGOw7mzSG9K1DnTlPapJdaGY4RCgFD7Exn1IheAl0%2F7J1Y97YSoySZ%2BJh9DX%2FNAIEcDkxH%2BCR0K93jZnbNYsUmJkMn5AF%2F0fJgop%2BeRWMUsVhaK%2B3y2MvPkxLkomyjYncUtEzSqPlRNC3fn%2BQS8FjcSrhEfprJj4s0ML2HtaSTvDEeNnaBeq6%2B69acifvjTYnr1LA9QXhPEhdZGj2yGHMafzAkVwADkpVzKH2g2ed%2FK9r%2FjcYsj33RjY5aO6%2BWAq3A8PO2AM0s3mlfvbjCxnTjc30X%2BkD2WbD4HtPyIr8spuZ8XQfSQkHBwit4KU1FB0otiRhRbgM6d1BqFZrRF1L8XAuoGxkwQqLVzZvdlxQUXd3BESsWAsjYTQmR9nHPnfFGp4k%2B3p1L7pCmk%2FBwf0d8DdSWSAYDuCEdLSVUtKRLw1cAbItTnIX4UrMQdpkUyVEMY6scRr2p%2Bsky44%2BcQFI54X6QPnVdF4NBIPn6j31%2B2PZoCk%2BtPvELE73%2BZPYM8sGV8QMPfKOMKa85r8GOqUBnmv37RvNNM3nmwphhLcAxRvfU5wNlTiM8mZmRmLVRWivqaAXAGS7kjT%2BMBYWdb90UqQF6cNFAgswLdtVoQ%2B0Kf%2FvKtbhQeNof1HBZy%2BxQDgNzvy3vL1%2BGRXiqEznaBAY0Em6tO0giX2yYl4Vb7Lf1QpY2trJZcsugyRGCzUdp1PVgY6oLBRtT98i%2BwEMt5CyW2JSBtE%2FL4cyvuWCTzNjzXuUYIEy&X-Amz-Signature=bc84b40a918335db077b91fe5ec1f9f4f17549a46f55c52d818264552cb003ff&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZCOZ7KV%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T230756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCICSnsYGYzu9v0oyqx%2B4OrA1Cp0nYjho4mvBbHlQeRURBAiEAvx%2BtRUNY9ytRMUr%2FDWdr2t8fsOTJ63YQaqMs0kJunh4qiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAB4qD5VFXukKeGnsircA8FegttHgSpQPOdEDHlHbpWgstd1fDxumBZqC6z98MbEDe0QyL4Zz5S%2BMaw6rDzUqBjJGLhG4GYkWNdGOGVgQ3Sko8X0S56saQI6Wyl%2B%2B5uVvMb%2FCR5AGOw7mzSG9K1DnTlPapJdaGY4RCgFD7Exn1IheAl0%2F7J1Y97YSoySZ%2BJh9DX%2FNAIEcDkxH%2BCR0K93jZnbNYsUmJkMn5AF%2F0fJgop%2BeRWMUsVhaK%2B3y2MvPkxLkomyjYncUtEzSqPlRNC3fn%2BQS8FjcSrhEfprJj4s0ML2HtaSTvDEeNnaBeq6%2B69acifvjTYnr1LA9QXhPEhdZGj2yGHMafzAkVwADkpVzKH2g2ed%2FK9r%2FjcYsj33RjY5aO6%2BWAq3A8PO2AM0s3mlfvbjCxnTjc30X%2BkD2WbD4HtPyIr8spuZ8XQfSQkHBwit4KU1FB0otiRhRbgM6d1BqFZrRF1L8XAuoGxkwQqLVzZvdlxQUXd3BESsWAsjYTQmR9nHPnfFGp4k%2B3p1L7pCmk%2FBwf0d8DdSWSAYDuCEdLSVUtKRLw1cAbItTnIX4UrMQdpkUyVEMY6scRr2p%2Bsky44%2BcQFI54X6QPnVdF4NBIPn6j31%2B2PZoCk%2BtPvELE73%2BZPYM8sGV8QMPfKOMKa85r8GOqUBnmv37RvNNM3nmwphhLcAxRvfU5wNlTiM8mZmRmLVRWivqaAXAGS7kjT%2BMBYWdb90UqQF6cNFAgswLdtVoQ%2B0Kf%2FvKtbhQeNof1HBZy%2BxQDgNzvy3vL1%2BGRXiqEznaBAY0Em6tO0giX2yYl4Vb7Lf1QpY2trJZcsugyRGCzUdp1PVgY6oLBRtT98i%2BwEMt5CyW2JSBtE%2FL4cyvuWCTzNjzXuUYIEy&X-Amz-Signature=0617f2118e2c05557756c9c4bd9ad9a93c3f6f75c7e3153010992eb997682f77&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2TCTDFN%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T230801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIDgGKHzIzAInTocQFcHGhxx%2BVctf882tp0RZkWoEGZAYAiBsh5YLhaugrlbm095DsG8t9i5k2XkDL4StQhu0FA0DtSqIBAjI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMScnLZyvcTnmajf6%2FKtwDT13TVd3tYKRZto4l3vabJgQgYrzeflyz9juLWlvDi%2F3aQv5i68i2y5RSH13zK6yey7rYejT0IG8XY7TVVzo1N21vEJmI6Y4JtVxo2JOJmWlF3oRxZRWPxtSONTAgmXXtYRbsJn1hMZb80etwpbV7GkSUJKfZfMoP%2FImGD%2BrcWTWL2d%2F0Ae021YgoYrdNwAFVlprWEY48ePUVHvZqddTblFBORzpwi1TzfM1st73ts%2Bmdf97MHcjzgMwHzsz3qh4pcAm%2BwKrxM1JAH%2F0zxAnchxerkBvOqIWjdgrJ55p24iaZoYirawVxZPpNKrnrT2%2BlHAioXzBtCse24UmDb2oELQNaJJ09lCBEIX6%2BVSeHtYHk0TincZi%2FMRLEE%2BHfVxDdXa0FuvHoqLsAGOn52A8Qzsde9dXBL5ZpGQlfrr4rSc4chbQ3EYw4x9jByL142dSb7FVcCjT3SKuFExihJtjXgMMRhaH8p4UdrZ%2Fc6TD9l%2FGxDl5CUzne8q7rA%2B7UVCzem1q%2Bd8uCgICYrHFjcj7Tn8490Z%2FLlmMoK6ptbBjBQAVgFv%2FrSdcqcV4sxt0kSRh4zZWpa5mB1CXMcgB18fF%2FKuNs9qctTaYBGzWMX3NpMcOL5jNLC1IK8za9D4MwgrzmvwY6pgFMaBib4YBQ6gRqwknuZY5JH8u6GtqblE35HC3hS9R7EiSO2N4khN3d8%2FgMMwNEdN3%2B6Qo3AJ9cCOJWCkzSCdoZ5cbbHc64SCGOS2bzb999CnCZHRwRFslf8FneUThwItPPRa%2BtkBoFFh%2BjCOCAwrAaS3R12Mtc4G0mP1UD0bKasSiBzqMQBPU4JfC00r%2B0Xrkqm5x1VXkQJESSdmFknr%2B9IPpsxLxi&X-Amz-Signature=259bc88ded66656f9b239a9a1d4959b59b7b0ad684b832b92678cc6dbcc8a73f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZBGINHT%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T230801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQCege2ImW4flibBz8mZJJkLlS9mTjxqwjCJHPmu1DsZQQIhAJwptCirnLqyPOKH5P6Ex62GYBgvSiM7ES1%2Bs8jUT9ubKogECMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwRFjUciop27af2Fucq3AMxO4b2lgHSLn16Nwvy6NsXU48SkS%2B1TYMx%2ByMvjWSAYtNi9YMU2J5UbOXOTw4g9k1AvVkjWqT%2FMPPiMSHiJ4HKF%2FN8wYlqKtoFkeDoX%2Fwk%2FPECSbibt%2FaX%2FlCBfAg6L6%2FClgPys6B4HzsRGSe4r6nx3koAMobKx0tZ6qjpHnGuYFT1pH0sOXnkXbQatAeagy7h23MAfanAchg1emQT9j80jaMpDna4bM0wVtHu9uCBO6z13ZOi8pbrdemxfAUwWQC1TGmlvZ14CXCkGKGWGKAP%2FxfyhuMXsqWBokbn0LIZ26cDzJCCFq7LXmVDRuJ23MheNksM7NSbd%2BFQ%2BxQ04ea3YkIB1O5D4AB%2FvW8ZpkPTi1EuxLMX2Y%2FSILrQmKu5ZR1mm7Np2WgFBmsZQQbH81%2FP4xwjBnxfwBuqddv9OVMbvjwM%2FHe%2BcMntDCIaduErjb3IABNIushnYMnHjG2z9ZeTfBaQLtk360O54ddVl3DdKj6iiu%2FPrKBXsiNFECl%2FisyR3KclBnSqrDxzxu7f3O3ivBWkgpeexCXtgCLpxcOFOqT%2FJkeJBvIfuTCTR9qaEsA4Mwyhi%2BNG%2FAPPLTF4ygtUCRd1JPo8o%2FNjPbS0XpDZtwEJv30vNsdqukRByjCmvOa%2FBjqkAXqPrs8DJuqVehqOUp1sw6YjSIR8pjwfe1pl1QUyNpEVKJsAwKn3trbKBNcfx6XqJAwDJeJu%2FoZrNTLVEUmAfDnGTCWe3TyyHWddkwo2br2lEvvULZjSQsKJCzvjgjkqR4i2WhfXUhkR%2FLhK42vQg5TpA5u2VdNYUHj50zPjHf7%2BRA7HLHNJQPxFAeXstjYXs7d4AGNqJj1TjQIIzszCm34qjRQo&X-Amz-Signature=c2d1ae1d38eee3d7907df02c9ac2a05e0f3a3b4e383a91d5960b9d079846833c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZCOZ7KV%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T230756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCICSnsYGYzu9v0oyqx%2B4OrA1Cp0nYjho4mvBbHlQeRURBAiEAvx%2BtRUNY9ytRMUr%2FDWdr2t8fsOTJ63YQaqMs0kJunh4qiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAB4qD5VFXukKeGnsircA8FegttHgSpQPOdEDHlHbpWgstd1fDxumBZqC6z98MbEDe0QyL4Zz5S%2BMaw6rDzUqBjJGLhG4GYkWNdGOGVgQ3Sko8X0S56saQI6Wyl%2B%2B5uVvMb%2FCR5AGOw7mzSG9K1DnTlPapJdaGY4RCgFD7Exn1IheAl0%2F7J1Y97YSoySZ%2BJh9DX%2FNAIEcDkxH%2BCR0K93jZnbNYsUmJkMn5AF%2F0fJgop%2BeRWMUsVhaK%2B3y2MvPkxLkomyjYncUtEzSqPlRNC3fn%2BQS8FjcSrhEfprJj4s0ML2HtaSTvDEeNnaBeq6%2B69acifvjTYnr1LA9QXhPEhdZGj2yGHMafzAkVwADkpVzKH2g2ed%2FK9r%2FjcYsj33RjY5aO6%2BWAq3A8PO2AM0s3mlfvbjCxnTjc30X%2BkD2WbD4HtPyIr8spuZ8XQfSQkHBwit4KU1FB0otiRhRbgM6d1BqFZrRF1L8XAuoGxkwQqLVzZvdlxQUXd3BESsWAsjYTQmR9nHPnfFGp4k%2B3p1L7pCmk%2FBwf0d8DdSWSAYDuCEdLSVUtKRLw1cAbItTnIX4UrMQdpkUyVEMY6scRr2p%2Bsky44%2BcQFI54X6QPnVdF4NBIPn6j31%2B2PZoCk%2BtPvELE73%2BZPYM8sGV8QMPfKOMKa85r8GOqUBnmv37RvNNM3nmwphhLcAxRvfU5wNlTiM8mZmRmLVRWivqaAXAGS7kjT%2BMBYWdb90UqQF6cNFAgswLdtVoQ%2B0Kf%2FvKtbhQeNof1HBZy%2BxQDgNzvy3vL1%2BGRXiqEznaBAY0Em6tO0giX2yYl4Vb7Lf1QpY2trJZcsugyRGCzUdp1PVgY6oLBRtT98i%2BwEMt5CyW2JSBtE%2FL4cyvuWCTzNjzXuUYIEy&X-Amz-Signature=57613ca4f1106a7f4da930dc418334fafd8ef4c5b97b9f0cfb6640770eade676&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
