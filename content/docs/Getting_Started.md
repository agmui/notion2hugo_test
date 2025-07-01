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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAMH2NUE%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T140855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDXIpv2KFkfI6yIAfuvEfvU23FKNsagVHWNKZIi%2BHNLdAiBBT1%2F6yZn0E%2FdqATHacZDciW23LH8N4u5hfWQ4ckAVuyqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdQiRg4aKZ5h7LfcEKtwD7UxyJRUxsFZ4XqggOnQTCjKdLKkoQpU8u5wKjt7I2cDCcnS%2BIMThpebsDYmaLXLqd0hmAcCLPiMB7ms5uyRAdGmaWvk8kXso5UPUOs4jNPE1r9lqdlynUyLQeSPrXH7%2FbXxqOzxP3csSDqGa9Z5YF648dXpbc5Is%2BExdbxi8HxOo2Y0PS9DQPDm%2FOW5PocBWjtpx9rLGTQqjIUCaaTATZrbeQI2Xe7pyT%2FRMYtew2JJrXdJ71XhMqSZHGLs96l7x6iSKEaS41zflzCINOlJ2iZcDFgzvdWZQ1vWuUH82l1p9c7yhiNI2%2BJ11cTsP%2FXx7B4j%2BPsjv9aI22GH4MMe%2FiZptFI9Npm6bxfhbaLcGueURyYpTTyiJXey38J50hgrFvUiIV8RIxjGHhp%2Fn1HnPKvoJzE1qCbIAFgsbSWL6XrNfyE9pkPwg2ya54I2VoeX33TZgfxL3VxIJ0IWqgvyXmlstEiEm%2FUdJ9V31xgf4OUln8EK5X5iPFSPj%2B0jyiuc%2Bo%2F8j9qJo54HBDdorTzWFWI5Zxuojff38HQm8iFDjqXOcUDk1CI7Z04ko%2BoRCGiiod%2B6thlYBQX1qqwHvHdNc701q2izON1I0p6V5d7TI8fWF3RDL41pHBdlNc7EwsaWPwwY6pgFjRfNAe8Oae2qiV%2F1cXjG4uoLm20MCh9bEDSqeuQwklDW3amW9QAfDktCQYd3%2BheyNP%2FIHEuMxt16%2FjZNXFyiJ9HX%2BBdr6f7ozuupalUF1vNHfY%2FpZ4CTv6%2F9KAk8%2FWmJCthwNkC4c1Qmnenj%2BWLAKWY4diN5VHqAXhEqe8Epx8Fp99nLA8%2Fzx%2FoMItV8AGrdRxJw%2F8vsFDHQnWfV7Tl4KB1rGYbkJ&X-Amz-Signature=d215bfc35e4263a4491d6e207d18a02173fa22c819ac79489710dd928b6e0157&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAMH2NUE%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T140855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDXIpv2KFkfI6yIAfuvEfvU23FKNsagVHWNKZIi%2BHNLdAiBBT1%2F6yZn0E%2FdqATHacZDciW23LH8N4u5hfWQ4ckAVuyqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdQiRg4aKZ5h7LfcEKtwD7UxyJRUxsFZ4XqggOnQTCjKdLKkoQpU8u5wKjt7I2cDCcnS%2BIMThpebsDYmaLXLqd0hmAcCLPiMB7ms5uyRAdGmaWvk8kXso5UPUOs4jNPE1r9lqdlynUyLQeSPrXH7%2FbXxqOzxP3csSDqGa9Z5YF648dXpbc5Is%2BExdbxi8HxOo2Y0PS9DQPDm%2FOW5PocBWjtpx9rLGTQqjIUCaaTATZrbeQI2Xe7pyT%2FRMYtew2JJrXdJ71XhMqSZHGLs96l7x6iSKEaS41zflzCINOlJ2iZcDFgzvdWZQ1vWuUH82l1p9c7yhiNI2%2BJ11cTsP%2FXx7B4j%2BPsjv9aI22GH4MMe%2FiZptFI9Npm6bxfhbaLcGueURyYpTTyiJXey38J50hgrFvUiIV8RIxjGHhp%2Fn1HnPKvoJzE1qCbIAFgsbSWL6XrNfyE9pkPwg2ya54I2VoeX33TZgfxL3VxIJ0IWqgvyXmlstEiEm%2FUdJ9V31xgf4OUln8EK5X5iPFSPj%2B0jyiuc%2Bo%2F8j9qJo54HBDdorTzWFWI5Zxuojff38HQm8iFDjqXOcUDk1CI7Z04ko%2BoRCGiiod%2B6thlYBQX1qqwHvHdNc701q2izON1I0p6V5d7TI8fWF3RDL41pHBdlNc7EwsaWPwwY6pgFjRfNAe8Oae2qiV%2F1cXjG4uoLm20MCh9bEDSqeuQwklDW3amW9QAfDktCQYd3%2BheyNP%2FIHEuMxt16%2FjZNXFyiJ9HX%2BBdr6f7ozuupalUF1vNHfY%2FpZ4CTv6%2F9KAk8%2FWmJCthwNkC4c1Qmnenj%2BWLAKWY4diN5VHqAXhEqe8Epx8Fp99nLA8%2Fzx%2FoMItV8AGrdRxJw%2F8vsFDHQnWfV7Tl4KB1rGYbkJ&X-Amz-Signature=333715e904a7b53aef3b8658a52a86bc9ce14043a694288e2f85021790b97465&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAMH2NUE%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T140855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDXIpv2KFkfI6yIAfuvEfvU23FKNsagVHWNKZIi%2BHNLdAiBBT1%2F6yZn0E%2FdqATHacZDciW23LH8N4u5hfWQ4ckAVuyqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdQiRg4aKZ5h7LfcEKtwD7UxyJRUxsFZ4XqggOnQTCjKdLKkoQpU8u5wKjt7I2cDCcnS%2BIMThpebsDYmaLXLqd0hmAcCLPiMB7ms5uyRAdGmaWvk8kXso5UPUOs4jNPE1r9lqdlynUyLQeSPrXH7%2FbXxqOzxP3csSDqGa9Z5YF648dXpbc5Is%2BExdbxi8HxOo2Y0PS9DQPDm%2FOW5PocBWjtpx9rLGTQqjIUCaaTATZrbeQI2Xe7pyT%2FRMYtew2JJrXdJ71XhMqSZHGLs96l7x6iSKEaS41zflzCINOlJ2iZcDFgzvdWZQ1vWuUH82l1p9c7yhiNI2%2BJ11cTsP%2FXx7B4j%2BPsjv9aI22GH4MMe%2FiZptFI9Npm6bxfhbaLcGueURyYpTTyiJXey38J50hgrFvUiIV8RIxjGHhp%2Fn1HnPKvoJzE1qCbIAFgsbSWL6XrNfyE9pkPwg2ya54I2VoeX33TZgfxL3VxIJ0IWqgvyXmlstEiEm%2FUdJ9V31xgf4OUln8EK5X5iPFSPj%2B0jyiuc%2Bo%2F8j9qJo54HBDdorTzWFWI5Zxuojff38HQm8iFDjqXOcUDk1CI7Z04ko%2BoRCGiiod%2B6thlYBQX1qqwHvHdNc701q2izON1I0p6V5d7TI8fWF3RDL41pHBdlNc7EwsaWPwwY6pgFjRfNAe8Oae2qiV%2F1cXjG4uoLm20MCh9bEDSqeuQwklDW3amW9QAfDktCQYd3%2BheyNP%2FIHEuMxt16%2FjZNXFyiJ9HX%2BBdr6f7ozuupalUF1vNHfY%2FpZ4CTv6%2F9KAk8%2FWmJCthwNkC4c1Qmnenj%2BWLAKWY4diN5VHqAXhEqe8Epx8Fp99nLA8%2Fzx%2FoMItV8AGrdRxJw%2F8vsFDHQnWfV7Tl4KB1rGYbkJ&X-Amz-Signature=4094a1c6e9449964f5e0ed468e8c920fb5f2d73e38cfc136238cc7025196f537&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAZMZG64%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T140857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBMPhVt1ZdbOsFqj%2BkrlaCj1jcwOXykHcArSy1Qptq5CAiA3xiATg3Xin7Cy8u3bhKTxSAf0xDQ80gk1BDFB20zQwSqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmvWh0bW3mcWiemycKtwDXG9GotumCfPnNqnBcQAKPCCKeTWWmLOG2ASjpUyAW3ysOFGpPfphKECC6DpF8b7xnSws7BWGA%2BwkRTPdI%2BBzxmvYp7f9MiWvpkafAUHxyHSY7hz4ltcheiRXg5jr2Net8Ns0WJRd3CTqj1vOrXphuShlgFdvB%2BkwGfZa811s0mrEHGOWG42IGZhz%2BNixoD622Wnh8qv7swcZ3SqEG6RlmGRS9xg84Us6JWAO0wkQCU%2B8YZ%2BS7zqLjd1s2p%2FCVA7cWUgVYkDvLiSX8%2FNyqTPeOEu%2FLJIwNDfzNTACfT7X426jm1bJmbX4QoEy8ZGuQDzTTDVEfQrpZIa5AUAPB4IomFDJUxlokgRLIrVnvladyDqEpAkYiUPd3hnj47KM65e2%2FIrNRq1K1Hq%2FaZ42Id38IUA0LlLJuXIFgeAHIbCntBxZYzL6VxE1ROXPyt1X66Sy7YTxjPuP3egLz8ZFgKfyZj1PZgov4nUuOSOnhoeogDNEGNbj5m8darVOL0QjDmr2I%2B2TZTm%2Fs%2Fji7EzSKvINtqF8fx1yrFz2yi5OZWs6XCTh8kZqNLZwft1sbxMrXrJcvPFr5R2pqfSyGv4hOpBjLdZJyF9WBWbg1m003Tn2RYfbdCDTbxc286bNzB0w2aWPwwY6pgELxNrv0cJSGDzIdgY%2FI5OtPMkRKzPMz10r08b5aTs48i3yESLXAsYUtfpgCs0pAz2VY%2BWiD7uCIBUDNg9R7GZBnKltWt%2BkAbDEB3CG49gpwNHTiVrdn8lC6KZ5L27F%2FV3IBIE6SfBRWuOmJOprab868K0pwxkpDMJiWF70zMfa%2BkA2hz1EhL5Ligktq1Gqh%2Fut%2BaAg2HSD0HheG7JYk%2Fd4AuYMenuw&X-Amz-Signature=822fbfe32bf94b71b9b01ee1074d91e3c9437270356526fa13044895d8252d63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EQDMCTF%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T140857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFKTvmCHlYWRiJhH2y1hDL7AOAhT%2BhV%2FS4UCaWzax2K5AiEAmS91%2BocJ%2Bvwdoxq0G3zv%2BAxcSRZocAiWSw1qW%2BMRS44qiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO%2FTTtyxcG9RDTRP4CrcA1fZxYr%2B7FVl%2FFGV5O1iT5iPyrg0opV%2B60pGLFn3vIFsZwNHki0hYmRopisaOxxI1EYfam2oh0NoK%2FqL2F7o4OhcMIPhtNiV3FT7BVdW7EfYJprqnUz1PVRaxFpUMVUYlUJpf%2F4mNOxxYfDOOr4tuJgbu%2Fxff1RV42kiE1%2FytxT%2FmUqBEzhzRuoexa3kcX5UUkl%2FK%2FJTc8IguMaFvFZNdJ37AkW8Df9QrhyKqdJ2b6RJHUgiDachIj4yQ79WErpneG1jL6B3xjfNdMueQ6INsgmA%2B9jrBl5XiGe0qF6%2B8ClYfounXkOSvrMmSkf2y8MRXp5v5RfgXbomD7MqmMkRzvr1HSOiXeop42MO3r0wyp8QFfoWQ7p1wHjLAL9J%2F8ydoYDN51V1ntCx5Z%2BIrLxJATC5NlqN0BWgU3VBBcSsZnU16EDPm2DlLNeHcC9I0KgV0yl7Sh62%2FG0Ny%2BwEKMpuDz%2BEQplggs9Z%2BN1hY1%2FYZ5dMgPl9tp2I8aJKGxfdcWTTXC5dtjGejM7Y%2BVvVJZH8CIe7bn4H0xf4lI4m0Yxxq1FujLwRQ2fHGB%2BXDDw8jh2Z1xylIxeQgkDuI114liTQIA1MAP8JeAlUEAOMKa8F%2FA7Ec%2FIHac3wWC7uRqzUMM2lj8MGOqUBK3rZ1GD%2F4jkpn7qD6c5e1eY4hlBSHqHKUiFrs3H46SmRKJpWF9OxJtfvpi7E5yztRd8dv9tSvSuSLhediWmnMuuAuedzdh6UKZwjvJ8aeiVC7HidDBTLXFLKByFoVhKOhCsfLK%2BuA8U%2FzPxMs1c9oKXxIaLwn%2B52n9IxuKJHUL6qkyYo8R0QpuurMYepo1rVbFQL996vzkMlRVMsYaYNnTgQUPDA&X-Amz-Signature=7ede06e9e6228ebce43edd9f697afd5fdc8d984ae0d119e78acb1f5ee6ced9d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAMH2NUE%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T140855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDXIpv2KFkfI6yIAfuvEfvU23FKNsagVHWNKZIi%2BHNLdAiBBT1%2F6yZn0E%2FdqATHacZDciW23LH8N4u5hfWQ4ckAVuyqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdQiRg4aKZ5h7LfcEKtwD7UxyJRUxsFZ4XqggOnQTCjKdLKkoQpU8u5wKjt7I2cDCcnS%2BIMThpebsDYmaLXLqd0hmAcCLPiMB7ms5uyRAdGmaWvk8kXso5UPUOs4jNPE1r9lqdlynUyLQeSPrXH7%2FbXxqOzxP3csSDqGa9Z5YF648dXpbc5Is%2BExdbxi8HxOo2Y0PS9DQPDm%2FOW5PocBWjtpx9rLGTQqjIUCaaTATZrbeQI2Xe7pyT%2FRMYtew2JJrXdJ71XhMqSZHGLs96l7x6iSKEaS41zflzCINOlJ2iZcDFgzvdWZQ1vWuUH82l1p9c7yhiNI2%2BJ11cTsP%2FXx7B4j%2BPsjv9aI22GH4MMe%2FiZptFI9Npm6bxfhbaLcGueURyYpTTyiJXey38J50hgrFvUiIV8RIxjGHhp%2Fn1HnPKvoJzE1qCbIAFgsbSWL6XrNfyE9pkPwg2ya54I2VoeX33TZgfxL3VxIJ0IWqgvyXmlstEiEm%2FUdJ9V31xgf4OUln8EK5X5iPFSPj%2B0jyiuc%2Bo%2F8j9qJo54HBDdorTzWFWI5Zxuojff38HQm8iFDjqXOcUDk1CI7Z04ko%2BoRCGiiod%2B6thlYBQX1qqwHvHdNc701q2izON1I0p6V5d7TI8fWF3RDL41pHBdlNc7EwsaWPwwY6pgFjRfNAe8Oae2qiV%2F1cXjG4uoLm20MCh9bEDSqeuQwklDW3amW9QAfDktCQYd3%2BheyNP%2FIHEuMxt16%2FjZNXFyiJ9HX%2BBdr6f7ozuupalUF1vNHfY%2FpZ4CTv6%2F9KAk8%2FWmJCthwNkC4c1Qmnenj%2BWLAKWY4diN5VHqAXhEqe8Epx8Fp99nLA8%2Fzx%2FoMItV8AGrdRxJw%2F8vsFDHQnWfV7Tl4KB1rGYbkJ&X-Amz-Signature=85f40425f298950806381dd596af71fcd59b7e0974dc44b6a9758d288c971950&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
