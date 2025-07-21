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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SI3NVGXO%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T081539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIARGD%2BJxkniqjv69B%2FYfRZPVAhkINoepRTwWz9ml66DhAiEAqPRw%2FSvIvdKRz1%2FZvr%2FFBoEgusoXpFV6H1TATlIN3z0qiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDACWUwx%2FWdjB8u%2FDyircA5MV5%2FDaHBR37HhT83yq9ccDRfKN7WjYQUqnv61OEMWi%2BidU%2BNZ%2F2MvOdeS50gkZSodkBdNpJVT9T7S4w4MuZp0oMEfys1yO6%2FrDuyfac%2BNYcFDamlFMyHXq0vKoNrfNgEJTVwiVHgTztFmMNGbvMjSy7Y%2FX4rzzeaTPzFOiFwvKVw3SeL7iSsm4BXTtn6EbzMGbAXIFHLLaEKlQIjrBdpEC6McycxSxWG2jS%2FJ1AcwkJFLAiA%2BCg9kka2ut3NcIACRObM6y1tBUg%2BGqovWRxn0HBEl0rPYrwVZuTyIPRIehvd2bW949bVZ1QHY5FUxU0jQzQ94vth9j7d1dDy0FFrqM9MRatb5afrligRyCVgBc%2BXAQDSckw43IFDHE03rsPlAIMIMKtppTSmhocdanXjYu0U0easnlfh944AH6kdfNatJQ09Yyae0KTsgdI7e01rg8iUssx96wiWHJg3AtohrNk5hJfTCluD1q6uOHd3AmsWMOpALbmLfcyylDhFAkqLuxosUUlvtqG%2FslFDFmbk66InxPsn4yNjO143piyywgX%2BT69fO0KzBo%2Fy%2B0wJXz5yyGGKAA7u2oS5KgVBAVx2b0WjrCRuz0YTkze4UK%2BucSWvX4yZ8%2BkPz1zr2fMKiT98MGOqUBeXVXW4w%2FqeKu3G2XSAt7zNUicBHq%2BIyrHK2CijwWQzjK7nhcM8Vvq2jdwC9kqvGyTjNxeRE8nvdPQUmXCCK0NckJfxFg4YKbMv3Z4DCu8NPOdSqweR9g7S4RR%2Bqcyp9d3A6%2BC6YrTSCDElGMFdbwZCZ8vIqO9RW8sQxOeF47bkI4sbU1K9Pc%2Bj6uyhglWJMnPS1rcfxPE1hw16fQhY40THGIsq6h&X-Amz-Signature=95c1fa28e18352aada36f3f305641f548aec1bccce5c14e711beadbd6dd01c66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SI3NVGXO%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T081539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIARGD%2BJxkniqjv69B%2FYfRZPVAhkINoepRTwWz9ml66DhAiEAqPRw%2FSvIvdKRz1%2FZvr%2FFBoEgusoXpFV6H1TATlIN3z0qiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDACWUwx%2FWdjB8u%2FDyircA5MV5%2FDaHBR37HhT83yq9ccDRfKN7WjYQUqnv61OEMWi%2BidU%2BNZ%2F2MvOdeS50gkZSodkBdNpJVT9T7S4w4MuZp0oMEfys1yO6%2FrDuyfac%2BNYcFDamlFMyHXq0vKoNrfNgEJTVwiVHgTztFmMNGbvMjSy7Y%2FX4rzzeaTPzFOiFwvKVw3SeL7iSsm4BXTtn6EbzMGbAXIFHLLaEKlQIjrBdpEC6McycxSxWG2jS%2FJ1AcwkJFLAiA%2BCg9kka2ut3NcIACRObM6y1tBUg%2BGqovWRxn0HBEl0rPYrwVZuTyIPRIehvd2bW949bVZ1QHY5FUxU0jQzQ94vth9j7d1dDy0FFrqM9MRatb5afrligRyCVgBc%2BXAQDSckw43IFDHE03rsPlAIMIMKtppTSmhocdanXjYu0U0easnlfh944AH6kdfNatJQ09Yyae0KTsgdI7e01rg8iUssx96wiWHJg3AtohrNk5hJfTCluD1q6uOHd3AmsWMOpALbmLfcyylDhFAkqLuxosUUlvtqG%2FslFDFmbk66InxPsn4yNjO143piyywgX%2BT69fO0KzBo%2Fy%2B0wJXz5yyGGKAA7u2oS5KgVBAVx2b0WjrCRuz0YTkze4UK%2BucSWvX4yZ8%2BkPz1zr2fMKiT98MGOqUBeXVXW4w%2FqeKu3G2XSAt7zNUicBHq%2BIyrHK2CijwWQzjK7nhcM8Vvq2jdwC9kqvGyTjNxeRE8nvdPQUmXCCK0NckJfxFg4YKbMv3Z4DCu8NPOdSqweR9g7S4RR%2Bqcyp9d3A6%2BC6YrTSCDElGMFdbwZCZ8vIqO9RW8sQxOeF47bkI4sbU1K9Pc%2Bj6uyhglWJMnPS1rcfxPE1hw16fQhY40THGIsq6h&X-Amz-Signature=a0fc04767a585f75b1d74da45c775fbd231f591e9fbeb759feda55445c07ba65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SI3NVGXO%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T081539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIARGD%2BJxkniqjv69B%2FYfRZPVAhkINoepRTwWz9ml66DhAiEAqPRw%2FSvIvdKRz1%2FZvr%2FFBoEgusoXpFV6H1TATlIN3z0qiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDACWUwx%2FWdjB8u%2FDyircA5MV5%2FDaHBR37HhT83yq9ccDRfKN7WjYQUqnv61OEMWi%2BidU%2BNZ%2F2MvOdeS50gkZSodkBdNpJVT9T7S4w4MuZp0oMEfys1yO6%2FrDuyfac%2BNYcFDamlFMyHXq0vKoNrfNgEJTVwiVHgTztFmMNGbvMjSy7Y%2FX4rzzeaTPzFOiFwvKVw3SeL7iSsm4BXTtn6EbzMGbAXIFHLLaEKlQIjrBdpEC6McycxSxWG2jS%2FJ1AcwkJFLAiA%2BCg9kka2ut3NcIACRObM6y1tBUg%2BGqovWRxn0HBEl0rPYrwVZuTyIPRIehvd2bW949bVZ1QHY5FUxU0jQzQ94vth9j7d1dDy0FFrqM9MRatb5afrligRyCVgBc%2BXAQDSckw43IFDHE03rsPlAIMIMKtppTSmhocdanXjYu0U0easnlfh944AH6kdfNatJQ09Yyae0KTsgdI7e01rg8iUssx96wiWHJg3AtohrNk5hJfTCluD1q6uOHd3AmsWMOpALbmLfcyylDhFAkqLuxosUUlvtqG%2FslFDFmbk66InxPsn4yNjO143piyywgX%2BT69fO0KzBo%2Fy%2B0wJXz5yyGGKAA7u2oS5KgVBAVx2b0WjrCRuz0YTkze4UK%2BucSWvX4yZ8%2BkPz1zr2fMKiT98MGOqUBeXVXW4w%2FqeKu3G2XSAt7zNUicBHq%2BIyrHK2CijwWQzjK7nhcM8Vvq2jdwC9kqvGyTjNxeRE8nvdPQUmXCCK0NckJfxFg4YKbMv3Z4DCu8NPOdSqweR9g7S4RR%2Bqcyp9d3A6%2BC6YrTSCDElGMFdbwZCZ8vIqO9RW8sQxOeF47bkI4sbU1K9Pc%2Bj6uyhglWJMnPS1rcfxPE1hw16fQhY40THGIsq6h&X-Amz-Signature=2557e1d213dd1c27fdaea830f0353e90a677b1bdf71442f016094a2d3cb4227b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UM3KDGC%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T081540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBcdfWzICYllsBYdPSqrCcC6rh4bN3pObBD8NZsznsGOAiAJfEg1wkK6GWViVV4aix0EWFO5%2FGS7%2B%2F%2BYPGdIaCCCByqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqOqPSDd1gcAunIBdKtwDu48hO1v0ZwjvMb4PUFaD8zw22s%2BcEYnjLKTcijv9nYElTgas5VSPU1ur4GoNyAldVq%2Fnwd853gq%2Bgk70zQ5RSY%2BXriZKEl23TM%2FRy6a%2FGuO52f%2B4Xu%2BgyxKEeCa4Ekukqd9EM9ef0K%2BP%2BFD4WnZ8imSHWYeJWcmDE2tvLtIrsBe%2BaB6gNOdmjAAzJ3q1jQQM1Y6P0eysTF68CuUfSraqq0vxXWS9M89bXh%2B5cKtmzZfB%2Fd3NddXaImt2R7kqlVUZh8Aecs9Q%2BYtDXBYjautlPIhIOfjZ9R8GcIb%2BUoewCo6rGGswsW5%2BAd9j0ACQquOCIipNWkZHgPtWgs%2Bkb9hvcg9rhF6L0vbLgXShQrFwv5LWcX6vk8fUtBn3LTbh3XcPmTq5OfqMDMcAWPI487wLT4HM%2BDq3%2Fza5A8%2BWsg%2FJS%2FTG%2FIadA4C8kxKcOzxJ5E5NPqpmgjBrOv%2BtIy%2BQ9NTYY24xhvVr9Wk25rTxQFx0QZFI8djZm%2BuNYQTU8kRqD1yq5fbVvqyTgotPUFCk1pBhCxzNmIXelBEQzn7BBEcqgf6ggBTXfrYt%2BfFsvpaHGWBwlnMfdvxKp3yKsmY55%2Ba5Z8moorPznRNK2GafYp7tasmPVXQit9j1vvdkoiow9pL3wwY6pgF4WSrcBTIoZ9MlpJCuYf238%2ByefMuvmF0SlsN%2FKqCExpNl98nnN8%2BmQHafGS%2B%2BhUHyumopzouhR54gEp322nNSvDUO9K8RJ%2FDLumfhfdINUcw0kvTq%2FA8Brk%2BWF3QZa7X33%2BPDBpVszPDxgx0a0uSrflqa3U4Hf2U8eq%2FsM6KRO11fVA5SjeqnGDEYGQHGLgg8kL3%2FlzCYhvpwgN3dxe%2F4e6%2FwaYgl&X-Amz-Signature=c5b7ae7176434f9f65e46fc8dcadab2db05834c2e5043b788841c84de9348c58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KY3BE4K%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T081541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD64UCmasMJcxxnjl62L7HfHGZ%2B3aIxXlO3Ya4GKfuLUAIhAM1nVJkdN6KnZGzw1TPo8oZUAxrbf6UsYR%2Fk8p%2F1zclCKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyBfCjFImRBvanT38oq3AN%2B0gxAUnR%2FpvM56nfOJTRICh8t0RNJl5b2I%2BoLucOKcuAwP3v5fBVjSI4NMmuVYcbJaPfU1t8rH1AZO5vTNLQ0dZmlyy2zch%2F1dmOiv7J07yxZFhS6p6IJG8%2FC9MPUvAZuWsY15mPTKSUdJUZgXhSv0osHqj003lv2bYU1NBARq5xS1U8%2Be3pRjzCR2uceXHTWOdEQ25ocLmZeSoDIm0Ng6Qpa25XaxGNMzr9RZClnDq0adqhc0p%2Biiw%2FgRk2H54JgQLar4vKUrEGm%2B51ZQcNZV7UKz%2FS9OwVDPQ909U6SILRR4irYATimHFHpXV%2Btdo5mq9c2b4Rcrv0d6vSh3QHeDRXZKPLPoEcWCr9PJiYRv43s1NjElc%2F9%2F4ICowjJ4b3TSt1Q24dOaTWYDPu%2FneKfFzuGmTLD%2FyI6aXE7ZyLejAMRR8Wfzu%2FEvWTYhFDxkHu1fGNNVyNjjeRiySBiB8c5wJ38mPXTS%2B44PT9Sh%2Ba7ucLzfzJf7H7zW757M9JxxkvmAqiLjPCDMWe6%2FzUb07hhyUsx22ypKx%2BBRRjPgGtTPfZeHRqTtfl%2FWqS8SRayY%2B%2BqguvCbthlB2KhqktozogkGIyFex6gvgslOx1xb65uSUcXf5koaoPHzEItuDC0k%2FfDBjqkATvv%2FDW7EyzJAdT3mFnmUwt%2BnmHER9oznSelLnI%2FGEAq41Zwp4MLv8vVn6y%2F41y3kHHJ5Qh%2FzsIdI9vEdyn4gnYwcyQRrFOlopdS7Z1%2Bg73qm7VG90i9vdD5RKTxiub12aXVRtrqb8%2F1ZwObMgIpxKoPH5tntft%2FZscy7r2TSZFzmS3CjfLb32PAnpZZhD6WaT%2FMO%2Bxx8f%2BHCC8uIzoFo02lvihQ&X-Amz-Signature=6c28f60cb54ac9c12f401da70403e1206fa832de5ae648da61dea4fd2a6b1975&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SI3NVGXO%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T081539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIARGD%2BJxkniqjv69B%2FYfRZPVAhkINoepRTwWz9ml66DhAiEAqPRw%2FSvIvdKRz1%2FZvr%2FFBoEgusoXpFV6H1TATlIN3z0qiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDACWUwx%2FWdjB8u%2FDyircA5MV5%2FDaHBR37HhT83yq9ccDRfKN7WjYQUqnv61OEMWi%2BidU%2BNZ%2F2MvOdeS50gkZSodkBdNpJVT9T7S4w4MuZp0oMEfys1yO6%2FrDuyfac%2BNYcFDamlFMyHXq0vKoNrfNgEJTVwiVHgTztFmMNGbvMjSy7Y%2FX4rzzeaTPzFOiFwvKVw3SeL7iSsm4BXTtn6EbzMGbAXIFHLLaEKlQIjrBdpEC6McycxSxWG2jS%2FJ1AcwkJFLAiA%2BCg9kka2ut3NcIACRObM6y1tBUg%2BGqovWRxn0HBEl0rPYrwVZuTyIPRIehvd2bW949bVZ1QHY5FUxU0jQzQ94vth9j7d1dDy0FFrqM9MRatb5afrligRyCVgBc%2BXAQDSckw43IFDHE03rsPlAIMIMKtppTSmhocdanXjYu0U0easnlfh944AH6kdfNatJQ09Yyae0KTsgdI7e01rg8iUssx96wiWHJg3AtohrNk5hJfTCluD1q6uOHd3AmsWMOpALbmLfcyylDhFAkqLuxosUUlvtqG%2FslFDFmbk66InxPsn4yNjO143piyywgX%2BT69fO0KzBo%2Fy%2B0wJXz5yyGGKAA7u2oS5KgVBAVx2b0WjrCRuz0YTkze4UK%2BucSWvX4yZ8%2BkPz1zr2fMKiT98MGOqUBeXVXW4w%2FqeKu3G2XSAt7zNUicBHq%2BIyrHK2CijwWQzjK7nhcM8Vvq2jdwC9kqvGyTjNxeRE8nvdPQUmXCCK0NckJfxFg4YKbMv3Z4DCu8NPOdSqweR9g7S4RR%2Bqcyp9d3A6%2BC6YrTSCDElGMFdbwZCZ8vIqO9RW8sQxOeF47bkI4sbU1K9Pc%2Bj6uyhglWJMnPS1rcfxPE1hw16fQhY40THGIsq6h&X-Amz-Signature=65b87bbdbc1df4c81f1157cc211201aaa0f702969ccbaec29b474dc61fd33d16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
