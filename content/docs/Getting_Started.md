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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664M52EXUS%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T061159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQDJyhb27zS%2FEWWhRgZvtDEU0IzDgfKTpx5QunIQblzcwQIgQtJ2ABiEpTRwidn%2FaktpMlo%2BvdjoAH6wVBeLO4xMXvQqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMmgpnFMQmTQKM5pNSrcA1tQPG9ARehTQE3TtUOjtY4cwWoUvd8BT5qjRVhkRapb2hWWO0SESud%2Fn%2FlVeZ%2BQGEI3LzFsY0N91iQilsaKLSTArnOPhpxnTAlt2Qad98RpztOP9FD%2Fi%2FeW0n46vV4l5ppbxT%2FENxppvURjpELcA4l73Lu4m%2FBQ%2FlDHDHjdOQiPVZAoccgprMM3VawVcFb2%2B2yxIJ7kLvW3b2OglFFhqpA04jOp36NO0nnC56SzXQhsQwrDRRbTVDMKBi3pjPJpwxV%2F0wmZCyXKpgWwW6ky0i3Fa77EBCFz3f5VdEVjjgaltOsi7uip4cCYMwRWlr4s1M%2FGEVMrHC%2BhA93nRYGuidevD%2Bh2J6K6ymG7vx3nQ%2Bv0JfJruqGNhweg3yDsWDDp3NugPZgOzOD41XsE63roXpyZXVS8VxGLVu3dYDWfLeNG7nudyKbFHGl8qO2DEzcx9ZjEhi1KhKIzx4CaaBFfox2AnHeipJtaioJAjMDDIFCHQF2h3K1gcc5olZX5UWMuaZETyqXxNQ%2Bu5EDhY5dxaWUFlFmQe%2Bsu%2BZCyog5RS%2FP2TJfmNB4MFl0qkatM94hq99%2BFGM7SVfc80yKXlshHQjEioo9rMrG%2FMPO%2Fa5Kv8MoHYXfDlD7qjQjL9%2F%2FuMLGf78EGOqUBpJQUyV0ygiXSy6XHm2pPP7ouCrtqyKsEw%2BH%2F%2FkynI8YvBteVwReZSxV0TWzTEEmTZfHtS88GuCaedma1Ik6imFYqiWNpbhVfa45GYP2aozonuLAFB2xrIxV5OX5IEdV59f9nSeAyfP%2FpxoyvCDqew2sGtjVRcQoMapH%2FkbrwpUMDoKq61nCFwLUoCg01QRZbxYsoGK529st8EILTiaskydlSzXdm&X-Amz-Signature=ae786e2610107fc40da57d5d341356a011e05d27d2c08a0e5bfbd258aa5bf368&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664M52EXUS%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T061159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQDJyhb27zS%2FEWWhRgZvtDEU0IzDgfKTpx5QunIQblzcwQIgQtJ2ABiEpTRwidn%2FaktpMlo%2BvdjoAH6wVBeLO4xMXvQqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMmgpnFMQmTQKM5pNSrcA1tQPG9ARehTQE3TtUOjtY4cwWoUvd8BT5qjRVhkRapb2hWWO0SESud%2Fn%2FlVeZ%2BQGEI3LzFsY0N91iQilsaKLSTArnOPhpxnTAlt2Qad98RpztOP9FD%2Fi%2FeW0n46vV4l5ppbxT%2FENxppvURjpELcA4l73Lu4m%2FBQ%2FlDHDHjdOQiPVZAoccgprMM3VawVcFb2%2B2yxIJ7kLvW3b2OglFFhqpA04jOp36NO0nnC56SzXQhsQwrDRRbTVDMKBi3pjPJpwxV%2F0wmZCyXKpgWwW6ky0i3Fa77EBCFz3f5VdEVjjgaltOsi7uip4cCYMwRWlr4s1M%2FGEVMrHC%2BhA93nRYGuidevD%2Bh2J6K6ymG7vx3nQ%2Bv0JfJruqGNhweg3yDsWDDp3NugPZgOzOD41XsE63roXpyZXVS8VxGLVu3dYDWfLeNG7nudyKbFHGl8qO2DEzcx9ZjEhi1KhKIzx4CaaBFfox2AnHeipJtaioJAjMDDIFCHQF2h3K1gcc5olZX5UWMuaZETyqXxNQ%2Bu5EDhY5dxaWUFlFmQe%2Bsu%2BZCyog5RS%2FP2TJfmNB4MFl0qkatM94hq99%2BFGM7SVfc80yKXlshHQjEioo9rMrG%2FMPO%2Fa5Kv8MoHYXfDlD7qjQjL9%2F%2FuMLGf78EGOqUBpJQUyV0ygiXSy6XHm2pPP7ouCrtqyKsEw%2BH%2F%2FkynI8YvBteVwReZSxV0TWzTEEmTZfHtS88GuCaedma1Ik6imFYqiWNpbhVfa45GYP2aozonuLAFB2xrIxV5OX5IEdV59f9nSeAyfP%2FpxoyvCDqew2sGtjVRcQoMapH%2FkbrwpUMDoKq61nCFwLUoCg01QRZbxYsoGK529st8EILTiaskydlSzXdm&X-Amz-Signature=51077fdefca08659598e450a7fc51ea8b3efbf600de8c5840d4ddc73938f6d1f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664M52EXUS%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T061159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQDJyhb27zS%2FEWWhRgZvtDEU0IzDgfKTpx5QunIQblzcwQIgQtJ2ABiEpTRwidn%2FaktpMlo%2BvdjoAH6wVBeLO4xMXvQqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMmgpnFMQmTQKM5pNSrcA1tQPG9ARehTQE3TtUOjtY4cwWoUvd8BT5qjRVhkRapb2hWWO0SESud%2Fn%2FlVeZ%2BQGEI3LzFsY0N91iQilsaKLSTArnOPhpxnTAlt2Qad98RpztOP9FD%2Fi%2FeW0n46vV4l5ppbxT%2FENxppvURjpELcA4l73Lu4m%2FBQ%2FlDHDHjdOQiPVZAoccgprMM3VawVcFb2%2B2yxIJ7kLvW3b2OglFFhqpA04jOp36NO0nnC56SzXQhsQwrDRRbTVDMKBi3pjPJpwxV%2F0wmZCyXKpgWwW6ky0i3Fa77EBCFz3f5VdEVjjgaltOsi7uip4cCYMwRWlr4s1M%2FGEVMrHC%2BhA93nRYGuidevD%2Bh2J6K6ymG7vx3nQ%2Bv0JfJruqGNhweg3yDsWDDp3NugPZgOzOD41XsE63roXpyZXVS8VxGLVu3dYDWfLeNG7nudyKbFHGl8qO2DEzcx9ZjEhi1KhKIzx4CaaBFfox2AnHeipJtaioJAjMDDIFCHQF2h3K1gcc5olZX5UWMuaZETyqXxNQ%2Bu5EDhY5dxaWUFlFmQe%2Bsu%2BZCyog5RS%2FP2TJfmNB4MFl0qkatM94hq99%2BFGM7SVfc80yKXlshHQjEioo9rMrG%2FMPO%2Fa5Kv8MoHYXfDlD7qjQjL9%2F%2FuMLGf78EGOqUBpJQUyV0ygiXSy6XHm2pPP7ouCrtqyKsEw%2BH%2F%2FkynI8YvBteVwReZSxV0TWzTEEmTZfHtS88GuCaedma1Ik6imFYqiWNpbhVfa45GYP2aozonuLAFB2xrIxV5OX5IEdV59f9nSeAyfP%2FpxoyvCDqew2sGtjVRcQoMapH%2FkbrwpUMDoKq61nCFwLUoCg01QRZbxYsoGK529st8EILTiaskydlSzXdm&X-Amz-Signature=ae30401411b7f0f35056ee7e173610edd7cea0e384cec516ed4a3e6272b87add&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T326IOGJ%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T061204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIDJ5IRC1K%2FU6ubQSy3MZI9EGbGmNvJstY4wvH5m3nakCAiEA5y40i5UM3gTKw4PShMH9R8T31UTPAgd1io%2FJs91xZgAqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIVY7XLuwratcpmgrircA3hOWwSdXyaFePn8FZl44UAC2o6EWIg3nxk%2BAwTSLn2l9M%2BpBLoxh29uikMO3fikNFC%2BaAjGlR2xDUJMetOv4YSxGuQDdyNYB8aX8aInywnE%2BYvfYsMhei13wWpddFd8HsSedJafaOeqymR6R87C0ZNCL3T81ffRHpCEv61myVhULvpNzMy8CjXjntBz7QgdMpgvYwEL2tEdt5NpKWZ8%2BWWukLfgWlusst2IkCL5SvjRnXbmMZ7RVX4MD1u51kqu7J5R9w66VLgdNOCVzb5fnwP8sg2Wmp5adcNHSwGxPHf3%2BeLw1UbsPu%2BfasCWkzOyF9z7NKGa1GcXtuwhalCe%2FLIwjLtbVaxi8ryQJUSziQq1CaHsUqc9FLt6820X8p02sqImE6W%2FgnFt%2Ft5T0qKERXpMF%2F8di4ZoDzBfLgR9d5QnIubtaq%2FXdA%2F%2ByM4GBsB28bBJ3jwhs7VAB3lfXVgEqa6QWcZ6PwlMOTqixPJadoFKmyjryiJLLC5rn8jaQm5NR%2F7XoJ7%2FbgP1T16WxdfapmkK%2Fi25XLffl70MBPS4GXvahi%2BEU44lo8I%2BvV6j5n939OSyWZwBK%2Bveihw7n026NdExb54QJ3TADywRTk6Lu5ZyuzRG%2FhGA6A79ICVMMIfK78EGOqUBshPBfp%2FCWAAvekYsXkZY9QoZBaU2R43Tql3NabSkOU4hnJUodJ8Uzjbg5nWnC3PTTU3J90jrUf7kdRcpgkWmmPwMQesfwgcv4%2BTDuiqCgJqX%2FTT40wN%2BWS9w6IhPQifhbEVOISAq8LADUd2fDytiNt6wJE%2BasfRBxJd7YDUaird3r4ruOtrg4Ry%2FqoIZpsc353nh%2FT5yRhKJFpzljXGalc83Spwx&X-Amz-Signature=2270a763129454a2e8466094452edd10bc0b46dac8c90e256c9785ec95cf8575&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QGHSAZA%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T061204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQCyIMTv8baJ5eITraQO1gRqGWE%2BqAHcXZkD8Y2xW5xnRgIhALYMW%2BPQ7q%2BGjZEc1jm4tL%2FQRsQP6wmUvz1FJq7UCzxJKogECM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxa%2FfBRmvrq0v%2B5KMsq3APfPBy9qnaCCcMBnM3F8zw3N4zY93HVSglHJM6PocZYljtaPxfXdwsvKZchvmbVH1j0MLVfzA7DM7y0phR2LZPvKajQ2GHS5Pd6%2BrlzZLT8N7XMhZzhkUWLNZqhfMl8V30%2F9vUqG97UQ5a3mcAh5lHl2cdzDO2VUKKQSFviXtbDbv6X%2FRIJooL3f3szWCF3455hUYyXUVvZKWx0DPgJHIzYhl2kE1EmEgXOZRGwLIiL3wGu9TyPbMaqVjYdEw0UYT%2BTsfLo0O3I46p2tWm1oASUEcSvlw3j3mjuUYAcExw%2FpukAw8GrDxkQ7GBqdUOw5CilMMvEEPQZjoqTTT46Rt9NRkIGVsY5U3L4BM3HnDCMP%2BhpzOxJ%2FoBZYRJtDtwcTgf8M98qjDAKIT%2ByPC8CVdMoi%2F0iZ1VAFJi9GfdSlcV%2F5iEwQAWusgx1pn%2FORnjvjnzWMK5Fzq7elXKuynGILgCzKtTU6TP4j8vxqqcBoeo5RZOYA1vSz%2FAjmmsoLIj2gaF8g0LR3UqwKhMrDTCXpINg3%2BF05zJpZtFqoUVkmeOqMTwMmayjDBiOPiVSdpDaCn67dVMLfgjQjAizhORDjQ90GKQIa9GpvuusP2Y2KhPT84dYEIoQK%2FoYrTf%2FMDCTqu%2FBBjqkAUARW3YXBPDvM9WicUPHQfV7P3ku94CBruEfZ6%2FZfF6dfUHO1mu6tgniE1mMkI1opybyxwH%2BiHSC%2F5KMnXiB15fL%2BerueZ753N4OZrRxXdvuZpxX1kX5Lobh3vkhZfBElBb9Dxmim5GimSdG1FKewCxoZSInW9G5qgCk6uhZUM2lgowZCpYsYwoh7%2FCGE5tSM7H%2FBcf74D5RDPw3UkfKgt1YW9gp&X-Amz-Signature=ba196f8b96929caf6ef5a4a0f135d68b5ffa672ce7de8cf6eede1b6eba16256e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664M52EXUS%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T061159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQDJyhb27zS%2FEWWhRgZvtDEU0IzDgfKTpx5QunIQblzcwQIgQtJ2ABiEpTRwidn%2FaktpMlo%2BvdjoAH6wVBeLO4xMXvQqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMmgpnFMQmTQKM5pNSrcA1tQPG9ARehTQE3TtUOjtY4cwWoUvd8BT5qjRVhkRapb2hWWO0SESud%2Fn%2FlVeZ%2BQGEI3LzFsY0N91iQilsaKLSTArnOPhpxnTAlt2Qad98RpztOP9FD%2Fi%2FeW0n46vV4l5ppbxT%2FENxppvURjpELcA4l73Lu4m%2FBQ%2FlDHDHjdOQiPVZAoccgprMM3VawVcFb2%2B2yxIJ7kLvW3b2OglFFhqpA04jOp36NO0nnC56SzXQhsQwrDRRbTVDMKBi3pjPJpwxV%2F0wmZCyXKpgWwW6ky0i3Fa77EBCFz3f5VdEVjjgaltOsi7uip4cCYMwRWlr4s1M%2FGEVMrHC%2BhA93nRYGuidevD%2Bh2J6K6ymG7vx3nQ%2Bv0JfJruqGNhweg3yDsWDDp3NugPZgOzOD41XsE63roXpyZXVS8VxGLVu3dYDWfLeNG7nudyKbFHGl8qO2DEzcx9ZjEhi1KhKIzx4CaaBFfox2AnHeipJtaioJAjMDDIFCHQF2h3K1gcc5olZX5UWMuaZETyqXxNQ%2Bu5EDhY5dxaWUFlFmQe%2Bsu%2BZCyog5RS%2FP2TJfmNB4MFl0qkatM94hq99%2BFGM7SVfc80yKXlshHQjEioo9rMrG%2FMPO%2Fa5Kv8MoHYXfDlD7qjQjL9%2F%2FuMLGf78EGOqUBpJQUyV0ygiXSy6XHm2pPP7ouCrtqyKsEw%2BH%2F%2FkynI8YvBteVwReZSxV0TWzTEEmTZfHtS88GuCaedma1Ik6imFYqiWNpbhVfa45GYP2aozonuLAFB2xrIxV5OX5IEdV59f9nSeAyfP%2FpxoyvCDqew2sGtjVRcQoMapH%2FkbrwpUMDoKq61nCFwLUoCg01QRZbxYsoGK529st8EILTiaskydlSzXdm&X-Amz-Signature=ecdc64fd8b37abcd7226118b2da0443e984fc362dbdcbe5dd427c3d04c89d6f3&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
