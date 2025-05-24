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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466756TPXCB%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T110103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIGG44gk73IWzOTgRlo1LMRPKTdv8%2Bn%2BPy%2B7jwggkmeGHAiEAhWSfO%2BwiqV3kblsj2ukSuQOUffoW0RG3ZCuMKbEHfTIq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDOIUiMHHL5RNt8jP%2BircAwaEt%2F6I653b%2BN2TVxGF6tLGnyNJZ5Ufy%2Fp6WztKQxju%2FpvFVGNLBt523%2FO6BrdYve8s4mflFScITE4ooX9l%2FarudYjvFxivQUNVkDRdV89xy5HZnC8phk8dkSr5keU7xedXils4FhHfYT%2B97LglJ3u4X4QzB4Pl6Wn4EloAwI%2FAjmoFfSoRcEGsEGXyMvdOJ0na10GscifhA26%2BacLi0mYQugHTZGk3L%2BkI7n%2Bag%2BcUmhLudJ1RrWFJz10qTzB6FLxCrYbA2i7lGXwsYprulNmsvdmhouwC1USwC%2FkduzHO4vnI%2FhD3u5S5tWZYajcQYXDqcdPqfPRiLRj0XS0O36c24SeQGSC9oBJcmrPkPMx71VGIVYf1DPYp%2BemX8CqPy%2FNKYrFY1U%2BASWXzUiOH2IGKjYid6XUGfOQipL7K%2B1MshCIaMpejSjlmHHt85QA746z3D8lpMnCtdHI%2ByQZ8oUmEQWyvu1i53bMSj4bKHDVD7WnXr%2FsbbiNXKmG1%2B870%2FKJ1dCzO1IRLz5nS7QzlGFulB9k531zIxkUGAExJ9ks2MDcW1XCWtVNpN1Uz8FuCdpn%2F1qobuOkAWislNpebrXOzo3pQFcNWIiTu6ynlVGZpdJqLuUk5bYWSEAqtMOmAxsEGOqUBfkm4zov4ESM7HwtAr%2Bp6vQFvLFNeDAW%2Fa%2BgIX6JqU%2BC1ytroGj0r0AYxLP734WFhtxM0%2Bjfe%2F4e8oQAyZUkhogLTPS3YcyaF6oJ1V8NAOBy%2BX3EpXwvHEwebtQbQqdVuv8odMcKWNqafZRMZpVEo1DYXh4ATNaGq%2BhGv%2BbT7q3PzuHG0z7iJw6gAP05AVFNh6Vx2P36eu2gCchssEk3oQX0rn%2BRt&X-Amz-Signature=7deb83bb2c9555a560154f47218635116ba6f2ef25e124a185815417e4724d3e&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466756TPXCB%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T110103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIGG44gk73IWzOTgRlo1LMRPKTdv8%2Bn%2BPy%2B7jwggkmeGHAiEAhWSfO%2BwiqV3kblsj2ukSuQOUffoW0RG3ZCuMKbEHfTIq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDOIUiMHHL5RNt8jP%2BircAwaEt%2F6I653b%2BN2TVxGF6tLGnyNJZ5Ufy%2Fp6WztKQxju%2FpvFVGNLBt523%2FO6BrdYve8s4mflFScITE4ooX9l%2FarudYjvFxivQUNVkDRdV89xy5HZnC8phk8dkSr5keU7xedXils4FhHfYT%2B97LglJ3u4X4QzB4Pl6Wn4EloAwI%2FAjmoFfSoRcEGsEGXyMvdOJ0na10GscifhA26%2BacLi0mYQugHTZGk3L%2BkI7n%2Bag%2BcUmhLudJ1RrWFJz10qTzB6FLxCrYbA2i7lGXwsYprulNmsvdmhouwC1USwC%2FkduzHO4vnI%2FhD3u5S5tWZYajcQYXDqcdPqfPRiLRj0XS0O36c24SeQGSC9oBJcmrPkPMx71VGIVYf1DPYp%2BemX8CqPy%2FNKYrFY1U%2BASWXzUiOH2IGKjYid6XUGfOQipL7K%2B1MshCIaMpejSjlmHHt85QA746z3D8lpMnCtdHI%2ByQZ8oUmEQWyvu1i53bMSj4bKHDVD7WnXr%2FsbbiNXKmG1%2B870%2FKJ1dCzO1IRLz5nS7QzlGFulB9k531zIxkUGAExJ9ks2MDcW1XCWtVNpN1Uz8FuCdpn%2F1qobuOkAWislNpebrXOzo3pQFcNWIiTu6ynlVGZpdJqLuUk5bYWSEAqtMOmAxsEGOqUBfkm4zov4ESM7HwtAr%2Bp6vQFvLFNeDAW%2Fa%2BgIX6JqU%2BC1ytroGj0r0AYxLP734WFhtxM0%2Bjfe%2F4e8oQAyZUkhogLTPS3YcyaF6oJ1V8NAOBy%2BX3EpXwvHEwebtQbQqdVuv8odMcKWNqafZRMZpVEo1DYXh4ATNaGq%2BhGv%2BbT7q3PzuHG0z7iJw6gAP05AVFNh6Vx2P36eu2gCchssEk3oQX0rn%2BRt&X-Amz-Signature=bbd0a001b050018c928ba44340ff23d4447debb777b514351b45082c95c324f8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466756TPXCB%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T110103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIGG44gk73IWzOTgRlo1LMRPKTdv8%2Bn%2BPy%2B7jwggkmeGHAiEAhWSfO%2BwiqV3kblsj2ukSuQOUffoW0RG3ZCuMKbEHfTIq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDOIUiMHHL5RNt8jP%2BircAwaEt%2F6I653b%2BN2TVxGF6tLGnyNJZ5Ufy%2Fp6WztKQxju%2FpvFVGNLBt523%2FO6BrdYve8s4mflFScITE4ooX9l%2FarudYjvFxivQUNVkDRdV89xy5HZnC8phk8dkSr5keU7xedXils4FhHfYT%2B97LglJ3u4X4QzB4Pl6Wn4EloAwI%2FAjmoFfSoRcEGsEGXyMvdOJ0na10GscifhA26%2BacLi0mYQugHTZGk3L%2BkI7n%2Bag%2BcUmhLudJ1RrWFJz10qTzB6FLxCrYbA2i7lGXwsYprulNmsvdmhouwC1USwC%2FkduzHO4vnI%2FhD3u5S5tWZYajcQYXDqcdPqfPRiLRj0XS0O36c24SeQGSC9oBJcmrPkPMx71VGIVYf1DPYp%2BemX8CqPy%2FNKYrFY1U%2BASWXzUiOH2IGKjYid6XUGfOQipL7K%2B1MshCIaMpejSjlmHHt85QA746z3D8lpMnCtdHI%2ByQZ8oUmEQWyvu1i53bMSj4bKHDVD7WnXr%2FsbbiNXKmG1%2B870%2FKJ1dCzO1IRLz5nS7QzlGFulB9k531zIxkUGAExJ9ks2MDcW1XCWtVNpN1Uz8FuCdpn%2F1qobuOkAWislNpebrXOzo3pQFcNWIiTu6ynlVGZpdJqLuUk5bYWSEAqtMOmAxsEGOqUBfkm4zov4ESM7HwtAr%2Bp6vQFvLFNeDAW%2Fa%2BgIX6JqU%2BC1ytroGj0r0AYxLP734WFhtxM0%2Bjfe%2F4e8oQAyZUkhogLTPS3YcyaF6oJ1V8NAOBy%2BX3EpXwvHEwebtQbQqdVuv8odMcKWNqafZRMZpVEo1DYXh4ATNaGq%2BhGv%2BbT7q3PzuHG0z7iJw6gAP05AVFNh6Vx2P36eu2gCchssEk3oQX0rn%2BRt&X-Amz-Signature=5d1d656a366de3f871e516eb70a6c90a7a1ab733868fd6631f440b557514d73c&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VOH4W2T%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T110107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCICp%2F67GRw0OOR9EPZPcZ1PMjO%2FzFPKFf4e4QDQUzbiEoAiEAhBCo0LzWVM%2BtjMCqiOikWW7OEwvFhPL8HXY6bYP5RFUq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDPjSdZ2C4caQIDAFzSrcA9fDB4KSB5zJMyKMRFdrKC715JP88eHNahHBI9Ey4K2QN%2BHIUqFAEw%2Fs3j1fKCATpyj0tNg75zu8KIF6FZkLRuzn8xCvrhd%2F0zKWvYrxPvkbMPiAp6pDK%2BIU4CE3GAVocNI6toNTM2Uz9nW6iugGJad7Pqf%2BlsMXMRAtBVM9tjQr%2FZzY9Qlh4JEhQSHvrLILSwDB6%2Fed7uUmG47JstINOFobUPWr6yzRf84%2FwmV7qLc7pqYq322W4PC23LzKRqXFBZGDoKRvv9s%2F8tcp6AnczAvPvRUIVqfpaT2vqrlZunsn2V8aRra%2FkY%2FXEg12ETS27771n0on57EOlUQKcDoyNl17yjgFrMS2hhzZza4%2FqIihabI9eYqjtb03vXso3fGK222u%2F81%2BRTxgVlr3%2FXHcfB6PX8zCk8SUxg7yQ3wDS9JLyc9U0qBdWtr30d7uAw8zqc96yOYG2m9mVMB4zULVWEefQ8LFX6a1ewnDjLCLZzNUGEXtZp%2BQ1qQRsJsStIhRi8JyMqhCK0AKr3iaPf%2FI9iVwZX9MrImnVMO4LPRZNMhpZbB%2F%2BdCH3IiBAGr4YoMCdqlvUVo66Q3xlugeTbTa1vEQN2K7ibXwJs8Uk87YClTj0gUXbx0tJTylSNrMMIOBxsEGOqUBowm4K8S7UIYagM68w3gfpTknst4I0IOTPUZDmOJvy2GcaC%2FLxDP78JuogDP2%2FxgtmLMcbJ%2FVFN9NeufwjJzS7vp7uSfvreOFXaIRF5b0VH8Oyf2N%2FqFfAo7p7hV62fi5VioAMpdakjrw437GDZjYpyIFZOf03tmg%2BMquLIchePoJ9nLOS9MBdECEf8hMLVqLiOuOQhTEct4hQAhx%2BoRv1FAOiYrh&X-Amz-Signature=197c2d1f4935737c3de7fb1f7d9d7f23b3fcbdbccea8200ba21891287d9abbe9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZBVDKV4%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T110107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQDA8Y1Va8Xj5ZdCYtLU5RYXG3V8OayaOFAQMT8Ok7TGAgIgYcWb7vUkGk%2FRBYB%2B6LGs3LIl629kQjYTC4wtbjyk27kq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDBSbh%2BPyaaHhv7Qp%2ByrcA6iFzyT0KvUR9bhW3lqdqaVXPG%2Fljb%2Bq32%2FUSh03hgdCgZfVu4%2Bk%2F9srkS7UNUdY%2F%2BcPPSQL6TmnHcTHIvYBVRqfaznO9y0i2e5GnL5lTD%2BVBYJfMuxygEKaBOzThRw%2F1Wla%2Bqc3GFMys6Qb0U6t9TPzpzweK59GBGPFxAHmPmKe%2FPvOABK7cqtq1FzkZfdEFw93s5Dc%2FcEfNaQcG%2BaiqQ61jzA8ba8D8OuM5VUDLd%2Bb2%2Bp3iJUuoyethvEKD%2FhaAiXJsyQAvb%2B9SDusuIeJ0Vw703lXYMoXvXYLXcqzzIsaDC0r28MOf1cAPVB1t8p4I%2F3qTXe20q0n1x5Fkqc%2BpAUDhLAfJgaUcLXxIsrvb9sfTwelOJL1jZhtPRDF4VaEomHspGH4%2BlZ9wQtpmHWz31Rt3YXDlV1cuTsfWh8eHrBQlDHSEm%2BTicsI3Z%2FZ14irkv1hjTZQcLOGZhdM4rZctPtWxQnc2CvbF9r7bbjYW54lFfdDUnyhsOtbHaLO4k2V5AcXty%2FCvEEC7W607aMaeg8H%2BHlUHrTBigG9GLDPgftqPWZ8amV4vsWaLuAl9hyB5fG3Lqxf%2FwnjXeMQZc0KrJeUiBna3m1ZpxzcjJNAMZj3QJ40xxxHS930H%2FrsMOKdxsEGOqUBLDwIhJis4dH1E78wLsjdkoGuJpdYcjl1EzsIrqMuq0iWycdDFZW7AOAWeqpbr90WoVl7qMVzyQe4VxSrBYdSsQsb087edpOuE7XrpJAih73wzqDS0edu23ob8fCa2HngWNaigVBZoywaYxn7UQnMf8GYCGk%2BlNMrIfekNmT4f0e%2FtOztw8mZgGrcxWsrkdX%2BKFV4kz3zOvbhCJl3TP26SD6pASHW&X-Amz-Signature=4f8c59c2024596e66e2565a5b9146fe81454877b66b8ef4e44b738e0396ce332&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466756TPXCB%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T110103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIGG44gk73IWzOTgRlo1LMRPKTdv8%2Bn%2BPy%2B7jwggkmeGHAiEAhWSfO%2BwiqV3kblsj2ukSuQOUffoW0RG3ZCuMKbEHfTIq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDOIUiMHHL5RNt8jP%2BircAwaEt%2F6I653b%2BN2TVxGF6tLGnyNJZ5Ufy%2Fp6WztKQxju%2FpvFVGNLBt523%2FO6BrdYve8s4mflFScITE4ooX9l%2FarudYjvFxivQUNVkDRdV89xy5HZnC8phk8dkSr5keU7xedXils4FhHfYT%2B97LglJ3u4X4QzB4Pl6Wn4EloAwI%2FAjmoFfSoRcEGsEGXyMvdOJ0na10GscifhA26%2BacLi0mYQugHTZGk3L%2BkI7n%2Bag%2BcUmhLudJ1RrWFJz10qTzB6FLxCrYbA2i7lGXwsYprulNmsvdmhouwC1USwC%2FkduzHO4vnI%2FhD3u5S5tWZYajcQYXDqcdPqfPRiLRj0XS0O36c24SeQGSC9oBJcmrPkPMx71VGIVYf1DPYp%2BemX8CqPy%2FNKYrFY1U%2BASWXzUiOH2IGKjYid6XUGfOQipL7K%2B1MshCIaMpejSjlmHHt85QA746z3D8lpMnCtdHI%2ByQZ8oUmEQWyvu1i53bMSj4bKHDVD7WnXr%2FsbbiNXKmG1%2B870%2FKJ1dCzO1IRLz5nS7QzlGFulB9k531zIxkUGAExJ9ks2MDcW1XCWtVNpN1Uz8FuCdpn%2F1qobuOkAWislNpebrXOzo3pQFcNWIiTu6ynlVGZpdJqLuUk5bYWSEAqtMOmAxsEGOqUBfkm4zov4ESM7HwtAr%2Bp6vQFvLFNeDAW%2Fa%2BgIX6JqU%2BC1ytroGj0r0AYxLP734WFhtxM0%2Bjfe%2F4e8oQAyZUkhogLTPS3YcyaF6oJ1V8NAOBy%2BX3EpXwvHEwebtQbQqdVuv8odMcKWNqafZRMZpVEo1DYXh4ATNaGq%2BhGv%2BbT7q3PzuHG0z7iJw6gAP05AVFNh6Vx2P36eu2gCchssEk3oQX0rn%2BRt&X-Amz-Signature=6a69c922729a3afdf431d7f85993775bf1b1359ea439518b6001612cadd9df97&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
