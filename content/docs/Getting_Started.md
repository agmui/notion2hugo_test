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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CRGXXOA%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T220822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIHetx7fnObR8EOoXARxr%2BQ6%2BUsRcM8GJrG35gJnymOsUAiEArORNdj5uNYkohtz1X4yIPlBdgO%2F8nZOxD%2BwUrfFWB2oqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGndb0cPBZvNY7jnUyrcA58VpaPPsIlDYzXX1UbLh3faBaqA6gU6WE2RhFYX9pvx66nVWXiuL%2BB0LD7aNVXKPp4SMka2%2FDxWWTrWT%2FnWoAgNSJflbC6w8GIbiZxe7TTGU3VUV8pIIpjzNcsz%2BsBSVX6bY0XtIhwBVz6U3%2FSucngsOiwNclNIfPASjxXuF9vWbaM7EpS9amOySq%2BbV2TO%2FSO5kCSNXIcLfR9I%2Fv9vrmLid4tTyGfrsrgV%2Frj8cMrk4LpikqRRs3wrfhTDGHJf%2B0mhRkChx3gxdgpRbxMNRRiAFGOu%2FsAfKGNUec%2BT%2FPxMleNupeywfasT%2B0VRW4dHWsn8%2BwAaZU1Q6BJk6%2FHBprLlYLSP8hkzCIKZFGeXPoTjjzodfoVFHD6VpnQS%2BRGJTu0vi1iECRuLecgEhUOYGbDGqHmFo5O80KQ7K%2F%2FKqct2sKydOTdjRJzSROUwovZoNt9s4VSncEckGz%2F32xTFnFEDc9d31cMWzwl%2FPKZKy%2BEEJt4yDDnBWnOLEX0ND0GsTbEAgCgcxi6RJ2oc4uCCBuVyg8zI%2FI04EMv6CQ5tBA2L27Nc0nkp9fI2ZWnHg94uPZlax2qEbNbh1nERaval%2FOCkiDOCzrYIU%2FLYk8Z25lYyXMkpKDRoy%2F6Om5YvMK2qvsEGOqUBhSscXcte4Boo8kEWfJ18sdTdvQP1WJogW4Lptm1K8x3hRJZwUZ0cpsvL0PvWnlM%2FcamPGktTWWEXRcxhtyC2TroZihZw2TXWdZT%2Bs7u2WL7Meqbjpzx2BrFw%2BL9L0JIVIhzBtRX7ltqoeTb2VDls6MsBxr1jG6AApByGVRuHTN60hhitob071r2ilWjtToiZ0khHG87iFMRjZr%2BUQKPzyNFEyUpS&X-Amz-Signature=b0d08c612e806adffa7a4675b2ce1188955c6233163fbf603d2ff0d42694b236&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CRGXXOA%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T220822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIHetx7fnObR8EOoXARxr%2BQ6%2BUsRcM8GJrG35gJnymOsUAiEArORNdj5uNYkohtz1X4yIPlBdgO%2F8nZOxD%2BwUrfFWB2oqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGndb0cPBZvNY7jnUyrcA58VpaPPsIlDYzXX1UbLh3faBaqA6gU6WE2RhFYX9pvx66nVWXiuL%2BB0LD7aNVXKPp4SMka2%2FDxWWTrWT%2FnWoAgNSJflbC6w8GIbiZxe7TTGU3VUV8pIIpjzNcsz%2BsBSVX6bY0XtIhwBVz6U3%2FSucngsOiwNclNIfPASjxXuF9vWbaM7EpS9amOySq%2BbV2TO%2FSO5kCSNXIcLfR9I%2Fv9vrmLid4tTyGfrsrgV%2Frj8cMrk4LpikqRRs3wrfhTDGHJf%2B0mhRkChx3gxdgpRbxMNRRiAFGOu%2FsAfKGNUec%2BT%2FPxMleNupeywfasT%2B0VRW4dHWsn8%2BwAaZU1Q6BJk6%2FHBprLlYLSP8hkzCIKZFGeXPoTjjzodfoVFHD6VpnQS%2BRGJTu0vi1iECRuLecgEhUOYGbDGqHmFo5O80KQ7K%2F%2FKqct2sKydOTdjRJzSROUwovZoNt9s4VSncEckGz%2F32xTFnFEDc9d31cMWzwl%2FPKZKy%2BEEJt4yDDnBWnOLEX0ND0GsTbEAgCgcxi6RJ2oc4uCCBuVyg8zI%2FI04EMv6CQ5tBA2L27Nc0nkp9fI2ZWnHg94uPZlax2qEbNbh1nERaval%2FOCkiDOCzrYIU%2FLYk8Z25lYyXMkpKDRoy%2F6Om5YvMK2qvsEGOqUBhSscXcte4Boo8kEWfJ18sdTdvQP1WJogW4Lptm1K8x3hRJZwUZ0cpsvL0PvWnlM%2FcamPGktTWWEXRcxhtyC2TroZihZw2TXWdZT%2Bs7u2WL7Meqbjpzx2BrFw%2BL9L0JIVIhzBtRX7ltqoeTb2VDls6MsBxr1jG6AApByGVRuHTN60hhitob071r2ilWjtToiZ0khHG87iFMRjZr%2BUQKPzyNFEyUpS&X-Amz-Signature=da676b565902cea7c20822ba88f68165b24c96d4ec4d084feedea9d1a8343c79&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CRGXXOA%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T220822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIHetx7fnObR8EOoXARxr%2BQ6%2BUsRcM8GJrG35gJnymOsUAiEArORNdj5uNYkohtz1X4yIPlBdgO%2F8nZOxD%2BwUrfFWB2oqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGndb0cPBZvNY7jnUyrcA58VpaPPsIlDYzXX1UbLh3faBaqA6gU6WE2RhFYX9pvx66nVWXiuL%2BB0LD7aNVXKPp4SMka2%2FDxWWTrWT%2FnWoAgNSJflbC6w8GIbiZxe7TTGU3VUV8pIIpjzNcsz%2BsBSVX6bY0XtIhwBVz6U3%2FSucngsOiwNclNIfPASjxXuF9vWbaM7EpS9amOySq%2BbV2TO%2FSO5kCSNXIcLfR9I%2Fv9vrmLid4tTyGfrsrgV%2Frj8cMrk4LpikqRRs3wrfhTDGHJf%2B0mhRkChx3gxdgpRbxMNRRiAFGOu%2FsAfKGNUec%2BT%2FPxMleNupeywfasT%2B0VRW4dHWsn8%2BwAaZU1Q6BJk6%2FHBprLlYLSP8hkzCIKZFGeXPoTjjzodfoVFHD6VpnQS%2BRGJTu0vi1iECRuLecgEhUOYGbDGqHmFo5O80KQ7K%2F%2FKqct2sKydOTdjRJzSROUwovZoNt9s4VSncEckGz%2F32xTFnFEDc9d31cMWzwl%2FPKZKy%2BEEJt4yDDnBWnOLEX0ND0GsTbEAgCgcxi6RJ2oc4uCCBuVyg8zI%2FI04EMv6CQ5tBA2L27Nc0nkp9fI2ZWnHg94uPZlax2qEbNbh1nERaval%2FOCkiDOCzrYIU%2FLYk8Z25lYyXMkpKDRoy%2F6Om5YvMK2qvsEGOqUBhSscXcte4Boo8kEWfJ18sdTdvQP1WJogW4Lptm1K8x3hRJZwUZ0cpsvL0PvWnlM%2FcamPGktTWWEXRcxhtyC2TroZihZw2TXWdZT%2Bs7u2WL7Meqbjpzx2BrFw%2BL9L0JIVIhzBtRX7ltqoeTb2VDls6MsBxr1jG6AApByGVRuHTN60hhitob071r2ilWjtToiZ0khHG87iFMRjZr%2BUQKPzyNFEyUpS&X-Amz-Signature=909b821052dd1acde36b2def02e66d43d67e0778f701f2ed63c5772370857cca&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKDBWIWX%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T220826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIB%2F%2FZ0LVyXU%2FakbkYQp%2BSGrgyYf6ZxZGX6suOoR4nmAUAiEA5aP2isKQCKEPsbdbUXyX20sKuyU0b1nYIl4PSRw3DYQqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCpqrSYyRmryA6smqyrcAxGDGU2sfj08nx8rY27ubbzF39b3AjRzaWI%2B5YkrlM3XnVBsxzYxU2iis6ELcrbJ4J7rB9Qpwz0g%2BoOcTfrBeGvFZXHTkkO2Wa4389VX6JtLfwOeg9oI%2B7ActNagcVB9no7SeEaK5iOvyP5DAK2%2BCqIYXUbCiaL5WqEQ7pClcR6oRKRmRMXJgnPP%2FBlxHP6m3NwkRGLn70WMQz2v7DHjQ65S0JY8ONxE4xGMNmRaClAnWzdZKJ6AHWl9J6UTK85Qj%2B8gWs3W%2B5qJHLjyrrO5kg1GTqgk5zm3%2FEM%2Fqa1WyCAqtC9gbzM9fQIyVirdi3YK6BzdKdzd9Ss7wlQohhfYY7s7qMNDk0IVTffgNqT%2BMncbdAzlGT0U%2BI%2F0pIha7sU0bnlDgH7e5hgqRKrbEyhpcZjphu4thpVf2WN92MDt6lbh9sPB3e2dkQuUb01Cqvsmy9K0HOyjkLbZLalXbIu9nRxutK5HyQqqZ6l%2FvgVKKu3W%2BRiLyDTgsuqaOyAXWI2eHlXWmKUroIaaG0l8oK2EjZua6W%2Bpar%2BY9s9OhtHn53bxcWNCQgpHt3QTbb%2FmNuUP%2BwWwM2Y9V9f7QFCFGcDwOIdN4ox4NfN41PyxK%2FinkYBIgz5I4LmzRM2Ms8Q6MIuqvsEGOqUBy74pO6amISRYD7bOLG1alyqlfwwHpSHZcUqfE%2F36RmfCGS%2BzWDQbNm9%2F1NpO7JgxtIvwUPVQb5fTMrz10mG24EafARRK3NQ%2FRRvgXPX%2FSORquCaD%2FAm2S77JdaOduL1peWu%2Ft1tJZFI4eFP9TwTM3Bw249IRagNh5M%2BOQoenBy%2BRUz%2Bhm%2FH03uUKqXMD2GWmq75ctATWZlC5chuhoABVgtqNA1y6&X-Amz-Signature=92bafd018e2022cb91426fcbf49d7514906d0dd2837fdae6819a5885ebdd2ab3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AEJZCTU%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T220826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIDXORQpiwBr8%2Biy71L15QXwr5wFVRIEyNpBTGNg2LqAwAiEA9fpdAblrT%2Bh36DymuBbkthsp1vTT1PcSi%2Fzrbtphd9gqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOCU24fUOhuNdI4SPSrcA1pGQRduvNYI3GtFkKayeMOsiVnDjO7Atm8Rt2Zeb7sVaKK3tsnkPlGBSs25CEkfuhYwGrpZGN6GvTgyX63yr4ywCNNO9dPcIAY4lAO3gfEV9TRpaD04TbUyM6laqUJpwuMiZjpqbTYJ%2Bkl%2BNw%2FiDAXWztCw%2B97XmytV5eluiV%2F2ZfsJi%2FMxAEhVEU8iO4QMG8rC%2FqjCdcABZlqBcuMLh2pg8yXm6A9Zg38y1JoTGx%2BA3QN1u36FzU07NSwjoBk6ERP2xhCCtwza2qLIvI6ne0MRFEfFLhjsvA2ypvCza0e%2FfMlkyBJFxTqCuvOZVCVduPqYjaJ43w9siZF564IsDnbZtqDhofhlJVEPl5gG4%2BmOQUrqsaUied7tEk05Bv93qXACRPPllKioEFHVVBujJkmkreSg8RHYV4gpLFI6nQ4QwKQaD%2FBtsxnbYapMdC4ox05ybYA1pfESgnfP%2BfyCMGAvzTbaMBd%2FyxgWCxhw44sg5La9IqhGFpr7XM3ArxFEd44opYfWq1XPhK5LVw%2BlodCmiu%2B1zMWiQYXhNhjFMZrVhJCudK4VW2g57IXandXsbBCMWYWjjzG3AfdFpaEgqDnbjof3VsWQgBzoLneqLjlRsV8LHXRMFNeTpCNoMPmpvsEGOqUByWqwqdRD4dPTFuUtenhquOgrSXPVawcHfs%2FqBdNGlJt%2BH4jsfhtK%2F60QBwTEuJnxFK4dJKfxfWA6DmFHBIyHyXHKogvdqAz5IGsLgmOtKMzsIeJeH5bbiXJuFp%2F8JN2zl%2FfJh9Bt8UszfkvaTVNfWJEJonXyBiKBmiBlxvA4SpMvyCe2I%2F%2FYNF4NEpZ8TGgq%2BySdP3Id6QEA95fkTtjXOCny8FPE&X-Amz-Signature=4688f73377630d894c5f55a538f2b5df65d53ea118f9db9a0dd161dea98ca1f8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CRGXXOA%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T220822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIHetx7fnObR8EOoXARxr%2BQ6%2BUsRcM8GJrG35gJnymOsUAiEArORNdj5uNYkohtz1X4yIPlBdgO%2F8nZOxD%2BwUrfFWB2oqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGndb0cPBZvNY7jnUyrcA58VpaPPsIlDYzXX1UbLh3faBaqA6gU6WE2RhFYX9pvx66nVWXiuL%2BB0LD7aNVXKPp4SMka2%2FDxWWTrWT%2FnWoAgNSJflbC6w8GIbiZxe7TTGU3VUV8pIIpjzNcsz%2BsBSVX6bY0XtIhwBVz6U3%2FSucngsOiwNclNIfPASjxXuF9vWbaM7EpS9amOySq%2BbV2TO%2FSO5kCSNXIcLfR9I%2Fv9vrmLid4tTyGfrsrgV%2Frj8cMrk4LpikqRRs3wrfhTDGHJf%2B0mhRkChx3gxdgpRbxMNRRiAFGOu%2FsAfKGNUec%2BT%2FPxMleNupeywfasT%2B0VRW4dHWsn8%2BwAaZU1Q6BJk6%2FHBprLlYLSP8hkzCIKZFGeXPoTjjzodfoVFHD6VpnQS%2BRGJTu0vi1iECRuLecgEhUOYGbDGqHmFo5O80KQ7K%2F%2FKqct2sKydOTdjRJzSROUwovZoNt9s4VSncEckGz%2F32xTFnFEDc9d31cMWzwl%2FPKZKy%2BEEJt4yDDnBWnOLEX0ND0GsTbEAgCgcxi6RJ2oc4uCCBuVyg8zI%2FI04EMv6CQ5tBA2L27Nc0nkp9fI2ZWnHg94uPZlax2qEbNbh1nERaval%2FOCkiDOCzrYIU%2FLYk8Z25lYyXMkpKDRoy%2F6Om5YvMK2qvsEGOqUBhSscXcte4Boo8kEWfJ18sdTdvQP1WJogW4Lptm1K8x3hRJZwUZ0cpsvL0PvWnlM%2FcamPGktTWWEXRcxhtyC2TroZihZw2TXWdZT%2Bs7u2WL7Meqbjpzx2BrFw%2BL9L0JIVIhzBtRX7ltqoeTb2VDls6MsBxr1jG6AApByGVRuHTN60hhitob071r2ilWjtToiZ0khHG87iFMRjZr%2BUQKPzyNFEyUpS&X-Amz-Signature=026c4432f709d64e04d400c97a28dd35f6f94b42312dadf0b6ed26b59f239869&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
