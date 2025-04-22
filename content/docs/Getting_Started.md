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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVVV6PF6%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T150825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQD%2BIPzOp1hMZt9CFX391y6Vvsb5r7goOlX1mFgXFte%2BsQIgeLsPpAfCHj%2BKXX%2Fr6mm%2Fwy73k7R8aobDQNH4LA7kNu0qiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJLUHLINe6QemJw1OircA%2FTYyT5mpfE8SXesoX28gwOgbH8s4S7VsoO5Cihsg20nLR1%2BflOfnpJfijcXimhniaPoaOJxdGv0xYTOQs46AJsJv9vlEHQ9LOP3vnKbNuchvkhyX2ENtEsyWabZpmenPh0W900SYAOyt3nh48cnpFUPIeBVmIc90dSItjr9dinbdMArhuOpLAhb6kJt%2F5oJtb5NwzILNbP%2FGmLVablVrUgCieQQalkiUkFjAwtz9zim9voVU7cYbEAFHbLQ0l4kDQuy%2FSg8iklJ0hSkvATKEoo07bKYJwkaeSu%2BNfYqWPc0FJledbnw8o5nadLlRQ5x%2Bna4tWJhc%2F0wxjj%2BksI9PQTI9p4203lB%2FPglvYMjkjsvqsmp7d%2Fac5M3gmF7SnuI7LNdJveOZ9%2F%2BGiqQovxLY%2F5RFkozgQaRtjA8%2BvlDkfbeMDg6QHy2QEKpq0r7mfGOkXAqzSBH7Ztugprv2QP%2FqUBL7YwEg%2FevwBw%2BYzSThHZeyrq0pxYwRP7S2dwoQ1OYf2mIJAJRMFju4WVLsXnqDGow8nbOLzKwUohoB4uGsVWlUTT%2BE82nu1dCzEH1Rz3pQ10JBisUEGnfT9L5CLoV92lmP0iLU44OWf6jlIuIyrrom9l3jJ9e4kbMCQvEMOzfnsAGOqUB2t2tGdqW7CoYZavfOr%2F22OnFXY70EhB8Z8JR18URaCqg7JjpCa9kbHOnTXTsslLNCVm6zxQi9CdAkRERhWbi1fQoVIDa7tkG6I4oR4Igh%2FfKYs%2FoxnZkjPvuGUt%2BNj2PUSa5ngpfu%2F8bQ5CjSvXWJqxknfX6m3p%2BC0abghauHqe1rVGOxe55PETLF0YgWxMCaQRL12XQ0n%2BExTTgnBAxMolMxeN6&X-Amz-Signature=be560d0e0ef788f63223fc59373f854f1387e1c245d2758ff686adbfff67a3c6&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVVV6PF6%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T150825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQD%2BIPzOp1hMZt9CFX391y6Vvsb5r7goOlX1mFgXFte%2BsQIgeLsPpAfCHj%2BKXX%2Fr6mm%2Fwy73k7R8aobDQNH4LA7kNu0qiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJLUHLINe6QemJw1OircA%2FTYyT5mpfE8SXesoX28gwOgbH8s4S7VsoO5Cihsg20nLR1%2BflOfnpJfijcXimhniaPoaOJxdGv0xYTOQs46AJsJv9vlEHQ9LOP3vnKbNuchvkhyX2ENtEsyWabZpmenPh0W900SYAOyt3nh48cnpFUPIeBVmIc90dSItjr9dinbdMArhuOpLAhb6kJt%2F5oJtb5NwzILNbP%2FGmLVablVrUgCieQQalkiUkFjAwtz9zim9voVU7cYbEAFHbLQ0l4kDQuy%2FSg8iklJ0hSkvATKEoo07bKYJwkaeSu%2BNfYqWPc0FJledbnw8o5nadLlRQ5x%2Bna4tWJhc%2F0wxjj%2BksI9PQTI9p4203lB%2FPglvYMjkjsvqsmp7d%2Fac5M3gmF7SnuI7LNdJveOZ9%2F%2BGiqQovxLY%2F5RFkozgQaRtjA8%2BvlDkfbeMDg6QHy2QEKpq0r7mfGOkXAqzSBH7Ztugprv2QP%2FqUBL7YwEg%2FevwBw%2BYzSThHZeyrq0pxYwRP7S2dwoQ1OYf2mIJAJRMFju4WVLsXnqDGow8nbOLzKwUohoB4uGsVWlUTT%2BE82nu1dCzEH1Rz3pQ10JBisUEGnfT9L5CLoV92lmP0iLU44OWf6jlIuIyrrom9l3jJ9e4kbMCQvEMOzfnsAGOqUB2t2tGdqW7CoYZavfOr%2F22OnFXY70EhB8Z8JR18URaCqg7JjpCa9kbHOnTXTsslLNCVm6zxQi9CdAkRERhWbi1fQoVIDa7tkG6I4oR4Igh%2FfKYs%2FoxnZkjPvuGUt%2BNj2PUSa5ngpfu%2F8bQ5CjSvXWJqxknfX6m3p%2BC0abghauHqe1rVGOxe55PETLF0YgWxMCaQRL12XQ0n%2BExTTgnBAxMolMxeN6&X-Amz-Signature=078d5a0ea797c0067d91b9ac855528ac7ec7c257e074587eb9a6ee7cfe877556&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHAR2QJR%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T150829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQCKRoCInm2beKQgTujCxhoDvABZClPGFMIS67%2B1Max47AIgfnuyvBLaZGlw21e%2BAIeKUUd%2Fv6RErr6UjdISD%2Fq05oYqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLGwsYYE39rbYqF%2BDCrcA4RT4u2bgRfs1%2B3hUXDRI93spv5%2FC5yX8HojNVeEgibG7i4HUiTFvgW0Mni8we%2FqMWfXQjX0wVTnOYA84mZjpaMChHiuKkWnkOvWo2B6ofXTmh%2BOaSMKjhEE7m9oMam6E8hKCqNnJ%2BtCtnWmW3Yl%2FkRNqAVB0P6bl2wo2eSRbgtxWxSB83NBuES0OGGMoJMt2wdPqj9pfRCEuX664kgLKoQF074Ud22ZuLF6hrpKDHGoV13Qkp6Q5VLDx%2BWWhyPAKBKF2raAMU4NBWXSQfBJYveFkXsdVbroPTp2Hxijs10bAOp7XsbDIJEI72W0Jy0GNY7ed1L10ifSz3UImyNEzp5DFkMoRzDQ%2FZa8AantHqq%2F2U0FSAqpGDDhZjlR72SlkuCVME%2BNdxpI93CccN81J4MDgoMctlGH2%2B2KIwo0ykTgjSH1C6iCmGveDql8aNsPonBDCDNAMT9Y04PjBc%2B684m%2B4%2FkvfrF47bH2yRtPccrIFYrxNnMtG%2BjiCJHDp9%2BOVjMM0mVqElJV%2FOkR2iGkbMu8B1Vl6EaPqmWKt2YXZ9%2FnKlAvFS5Li4AqhkIZ7wGOdBHz1ZJKVl00oVz97bAj26k1yojnVer9VY7ytPrJ8re%2F9EbiTX6oHUJoTSvfMJTgnsAGOqUBspKhpplbdO3%2BE6B3uPpuSXz%2B5zNgEaBPEuhYUcQ4H2D81g%2BcLSq60ncRvdjgRrr1fgXCK092wZCKluhLVoDfiC09R3NkwVLrzcGQRefTUvLFcJlX0kALqu6GYLu4daoS1EIpVsyhbdLpbtrmeKgwU2jyijNcGm0iuSAdX1Vw6yvp4yOORtGeuInvSGlorQpXDn3coaSeo1Pp8PSTRZdD9KUcA8%2Bd&X-Amz-Signature=1d95f5e6a831ea8da660dee39715a9e9b175b713f5759b982ba98da1976422b6&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEICFZNC%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T150830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQD5m4kWKp1Zt8e474SzO0g2pjuZ3bkWnU2EBrwc3qnRpAIhAJj9vkHgY5AAPW3ykG1yYmExJsL0cjpNMzn3he%2BVyU33KogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxYyqNDz71quXOzFugq3AN%2BMleQ%2BR6CcuFikH8yfuHvGf%2BLepc4bm721g7y6QLLkdi49UjfEyqJQtbn4wjC67576VirqJOWazN%2BgpS6PVh2MKii6sENTnM5JSwbDtp8BWWqxeGSUJ0Wau2wfcimPRIvJusKKGS5KthRZXwgkpbbL7cVFSpmrLPjgzE%2B2lv11DI4R6NTOYYyqBGwaRU%2BdfN%2FkypUZDkEamH8IyRFeXa9zr3gMcbH631hwiciWhJQMX1oFfc43gz0ROjs9au3S3zZ6ydI%2FNGg489eJPJX6SIaCB35V282ybVXT9OyyAV%2FeJm5mXoezUn3RRBPE0CYkt%2FDK9Hcydhc7YozgXsHqmMSCVyRJUlnr97JUplM7CFSoHCrj3yWUw9jXTG6Y3nyaEKvOYndkITw%2FsYlu6f4lRRJUXNgcaaodyDo0j5bCwLtGRypDHxIyNt1saki4vxcPTRkT%2BmELRcFzAPy%2BLkvhKr7inKrouMhUBxb1byjaB%2F9H4kL7HOigGvGzZKCIsEIS%2Fx1f%2Fvb6M8%2BOmwiEMKFbt647PDCAFTlwnk1XpphY4HECPomouiPBZu1I7oUDD4DAi1sA8pW12tjO1HvPwZjg5wN0YeqWgj26RW2pQCwJEC4jiKLBxpBpsDddwIPdTDz4J7ABjqkAfSeDxeeRkxIrCwiwM272grHCtjr3iqCFj5hWN8%2FkzD2TdfJamxwwyXHlNyRgWy4U7V1K0vsRpF7bapev4Vk4%2FdI7mEg9ygyLonfJuLGa%2Fpv0RWYx39rrFUdbTYu4fTUJEcrNBn0JwIIckBkWpSLkiekRr%2BeCU0MCGZTdMMMqxngxfirtG2u2ldyf6yiv3K2sp5da%2F9kHjz%2FRIxulu6n62SoqH0E&X-Amz-Signature=0055432da1ffc9824937a7b16569181055c894ce0822bae8f073bc65a972f740&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVVV6PF6%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T150825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQD%2BIPzOp1hMZt9CFX391y6Vvsb5r7goOlX1mFgXFte%2BsQIgeLsPpAfCHj%2BKXX%2Fr6mm%2Fwy73k7R8aobDQNH4LA7kNu0qiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJLUHLINe6QemJw1OircA%2FTYyT5mpfE8SXesoX28gwOgbH8s4S7VsoO5Cihsg20nLR1%2BflOfnpJfijcXimhniaPoaOJxdGv0xYTOQs46AJsJv9vlEHQ9LOP3vnKbNuchvkhyX2ENtEsyWabZpmenPh0W900SYAOyt3nh48cnpFUPIeBVmIc90dSItjr9dinbdMArhuOpLAhb6kJt%2F5oJtb5NwzILNbP%2FGmLVablVrUgCieQQalkiUkFjAwtz9zim9voVU7cYbEAFHbLQ0l4kDQuy%2FSg8iklJ0hSkvATKEoo07bKYJwkaeSu%2BNfYqWPc0FJledbnw8o5nadLlRQ5x%2Bna4tWJhc%2F0wxjj%2BksI9PQTI9p4203lB%2FPglvYMjkjsvqsmp7d%2Fac5M3gmF7SnuI7LNdJveOZ9%2F%2BGiqQovxLY%2F5RFkozgQaRtjA8%2BvlDkfbeMDg6QHy2QEKpq0r7mfGOkXAqzSBH7Ztugprv2QP%2FqUBL7YwEg%2FevwBw%2BYzSThHZeyrq0pxYwRP7S2dwoQ1OYf2mIJAJRMFju4WVLsXnqDGow8nbOLzKwUohoB4uGsVWlUTT%2BE82nu1dCzEH1Rz3pQ10JBisUEGnfT9L5CLoV92lmP0iLU44OWf6jlIuIyrrom9l3jJ9e4kbMCQvEMOzfnsAGOqUB2t2tGdqW7CoYZavfOr%2F22OnFXY70EhB8Z8JR18URaCqg7JjpCa9kbHOnTXTsslLNCVm6zxQi9CdAkRERhWbi1fQoVIDa7tkG6I4oR4Igh%2FfKYs%2FoxnZkjPvuGUt%2BNj2PUSa5ngpfu%2F8bQ5CjSvXWJqxknfX6m3p%2BC0abghauHqe1rVGOxe55PETLF0YgWxMCaQRL12XQ0n%2BExTTgnBAxMolMxeN6&X-Amz-Signature=2032709c8360a26e95a5c6821d77cbec8f9a7732dee3585f618abc19336cd168&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
