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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWMN6AX6%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T003555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDk%2FhesLPGniBnO2bLXapSn5DXlYBkhnUzeHRznr9yXyAIhAME0H0PDRfbfvEHOk%2F73syEkWsTTL%2FSepmAp0TzXvAYnKv8DCCEQABoMNjM3NDIzMTgzODA1Igx6UN%2B88%2Bu1YDVCR3oq3APdrlGO%2BSBSHYxx3GnsthhFV9eQCp0jbsSRVI3ivCJBsMKP7TEHNfEcV37NNBQS1lzGoqz%2BcupLz79hZCrJfCdR1aIPU9v7HHOqaELW1nnK1i7eTo65euccBqqNv7fB%2B5y6QiQ7i%2FnHOirINHZfF9A%2BVKZ3WYIaDwdd2G3U5iJ7gnBxH4pbZNG%2Baaz7uvPebab7j%2BbWtAZxsxO27UHPdBHtBmjJ89HSUNccXY7zpNFadGyrsDwq6OUv5%2BKbfW4gFuqrVtV65rcJLDJB11DkIzC7WQknhj7jsVxbX%2Bx2gHzxddOcwNx3JIsO8Xuxx1EpCotIUHi2gdiW5%2BdSGDPq08buSxUpSHJy0tu97Ghl68Hfsc6f7XnhziH6izUMAW4yVTxM0xlaDn71Antb8Jbh2eJa4Rx72iepk2ks%2B4B7jnC5DUwG8wcIwSIt1DkQz2usaROSu4fqfOJrlpTz3PTA5%2FLwONuv5fHcGvAHeUS8EkWkXDue1nI%2BkMYzxD7I%2BcLk3kIvJxMbJpvNojUbw8E8VpvMcoYLJPzySgA%2BW17aT8%2Bkp8ArqJ5kQXMRYO6%2BYEXVf%2BNHMK47BS75FMrVg8STXc11XE2xdyrz6OY490FAvDNX0MsrMeQx1yCIsk2q4TDNg7q9BjqkAZ2xx54sMYZ%2BogxeN5bq3r6NHW%2BNqjFFBL7dVzdzp50F%2BXkP9Uya9%2B5FQA%2BvVtnvVE0zJOWlwcrQQYXWuI0SygsPyCI0YZsxGeRbJPERMtS1jbiAkWgZ6lykW7z%2FkHeMCNm87BJdi1GTiGAzBQ1f0ErNaLwRC6jJcOQNGMYKDWRMk5aH8ejpO%2BWsvTbIpJlOsAOpMhMvx2Yfp1tkx4BfR1dG3cYm&X-Amz-Signature=cc0ca861877646bfa56ebf6d4a1c33754e9e7145559dc02561a705cc2b369076&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWMN6AX6%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T003555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDk%2FhesLPGniBnO2bLXapSn5DXlYBkhnUzeHRznr9yXyAIhAME0H0PDRfbfvEHOk%2F73syEkWsTTL%2FSepmAp0TzXvAYnKv8DCCEQABoMNjM3NDIzMTgzODA1Igx6UN%2B88%2Bu1YDVCR3oq3APdrlGO%2BSBSHYxx3GnsthhFV9eQCp0jbsSRVI3ivCJBsMKP7TEHNfEcV37NNBQS1lzGoqz%2BcupLz79hZCrJfCdR1aIPU9v7HHOqaELW1nnK1i7eTo65euccBqqNv7fB%2B5y6QiQ7i%2FnHOirINHZfF9A%2BVKZ3WYIaDwdd2G3U5iJ7gnBxH4pbZNG%2Baaz7uvPebab7j%2BbWtAZxsxO27UHPdBHtBmjJ89HSUNccXY7zpNFadGyrsDwq6OUv5%2BKbfW4gFuqrVtV65rcJLDJB11DkIzC7WQknhj7jsVxbX%2Bx2gHzxddOcwNx3JIsO8Xuxx1EpCotIUHi2gdiW5%2BdSGDPq08buSxUpSHJy0tu97Ghl68Hfsc6f7XnhziH6izUMAW4yVTxM0xlaDn71Antb8Jbh2eJa4Rx72iepk2ks%2B4B7jnC5DUwG8wcIwSIt1DkQz2usaROSu4fqfOJrlpTz3PTA5%2FLwONuv5fHcGvAHeUS8EkWkXDue1nI%2BkMYzxD7I%2BcLk3kIvJxMbJpvNojUbw8E8VpvMcoYLJPzySgA%2BW17aT8%2Bkp8ArqJ5kQXMRYO6%2BYEXVf%2BNHMK47BS75FMrVg8STXc11XE2xdyrz6OY490FAvDNX0MsrMeQx1yCIsk2q4TDNg7q9BjqkAZ2xx54sMYZ%2BogxeN5bq3r6NHW%2BNqjFFBL7dVzdzp50F%2BXkP9Uya9%2B5FQA%2BvVtnvVE0zJOWlwcrQQYXWuI0SygsPyCI0YZsxGeRbJPERMtS1jbiAkWgZ6lykW7z%2FkHeMCNm87BJdi1GTiGAzBQ1f0ErNaLwRC6jJcOQNGMYKDWRMk5aH8ejpO%2BWsvTbIpJlOsAOpMhMvx2Yfp1tkx4BfR1dG3cYm&X-Amz-Signature=6ee3498f3e9d949150af4e65299958e3babf99e37edaef06f24d966c47c3adda&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDIQQJ25%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T003556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHvepVPCDAEGt04e5Syt2rRPqrM%2B3hxhcsvouvXfoF6QIhALuvCG%2Fp1%2BBUrAR4qrPp2p1tnqlrSknu5x5DjYWEnqGfKv8DCCEQABoMNjM3NDIzMTgzODA1Igzu8MC3%2Fwwtn4%2FGOB4q3ANnitEllsUFPIZi9aBbAVJGpDY1%2Bsdx8c2eLRRRczUQBknXI9cm0vMSB2zNcgrIOZj0s5RJ%2FaD%2Bsx5HvJCdFzf3OOvoBU8u4BsTSrcLbZsuM7sGk5LKPDNDEGAV6jfkyGp6TRhKcyIzzmW7jsgMSE9xB6N2p0Ad7cWlOO0hsdQ%2FSrK9ef2sFwg7cagovddOqRLKfbv%2FyfZ0CC8XdwaNroNdhgsdwHje5T7yVtgEMV%2BZKIOmS%2BGDYXDLSsj5WAgRbBYOLuS3TUP7snF02briqhpAiTNoAMdEWjc8%2FHQAFMFt0Dag69Uw40b%2B2SN1GWly3CaEWWaEFN4X8n9wJ%2FS5A8k5xSzIXOFtXcn0Hp24OBdu0AF1NmcZwDbwT3t4YGn%2FrXG3S%2FMGN1cLcS2GfbC%2FUQ5Pxqu7XVCP2f5rIpHYKMI7MSwrGuOuh17WZg4KeZCkmc9NTjp2YPCaXmdTSV8PBVdsZxSoZWss973%2F%2Fsx5isCFbS%2BNZWPwlyENPJGLylyN1uNN7eeBZtMZI0yJRtIMcWL%2BGsca6qMGXp1o0F7mt0LpYCz8Ef6l68wcO%2BOg5jJBMNkbN%2FGD137ClKDTM7oayPKMBu5xhKtDyLbi6ab65%2FqCitz41hGFXWuctpwN6zCbhLq9BjqkAZk3HJS6vZ1ev2uxSQ8r%2BWmhqRAJ8TQGBbI2Z4wYOoE6SDkyjYrqpMlv6Zml3Sl6KFZ9iOYsiLeSkhEkkPH3PQ9lqL4WL5UAzbgeQQP58iiEVWEkGqAy4G5u1%2FkP59bkQ7CTutAvc%2BXlopZluhOAV6bxq%2B%2Fg%2B8ReFddzUyEYYw7acJndF7%2Fu5k%2BUCQlF6KPwX1VeLVc8N5FqKb4SyGOw41lM9OZA&X-Amz-Signature=0f7cf8347c84e1983738e6710bebb58a53c93e027657bb5c48fcaad412fe3c9a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWSKCZAW%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T003556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGJFU2nvt7f5pBiAgRBklCRPgZJt%2BfCogkF7xGpzYTERAiEAqkrXDa2ORIeYmD3NX4cbVg4lfNN5fti9ykMAFvm0pYEq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDDncQb9V1PBmxM2GfircA41Wu%2B%2FCj4vG5xH4bT%2FDFohxOlUE4PIB1vc0g8GxbpJtflMytb%2FbrC84ri9BwbbKmdhvcsEvSd75EilF90ue6JfDlJ5e1eKZ%2BF18LHtkZHD13LtZ3ibBZuNr0YxoktOzkC%2FsmFPA89mP7R7QUDHGYS5u1BsWUhypVkv7hbOKCYdx0zTx6NvdmPPJFQMoD3N0YXTdJbU1K9KOglCKnjp0XwYFt%2BG50UJ2Q0ZtVFZHglzmJru6JRtabkK4jdO%2FQN5LwZiNZ1B0QBfbSwUp8I%2BvKTNxoFdc2KTOcuoDQ%2BGGbmOII2vMO%2BiwJpT0WT3WMV%2Fij0PANzPuXB%2BqhtVAdRFePQv3z4bT7K19YQwWGX2HosP4jcZdCyWX5%2BYTK8b0R%2FtDB9ETAcaVfVMumdIcmgMpFVgzpbx5i07Pf2BIzqB5evsVBsgBvJZBUUjpQMj8ec86KAxK0Ph%2F6ik4fIwU41J3p4oLP1MHWvigdXkWyB%2F9ViSFBBvoZBTm852A2S0XwGTasDDpU4nHqiNKlPH9foNGizIq9YyI1zstP7O07JL3EVFAIQH30u7a83bfnukwqgoHEP%2BvExNhEJyQM63bFTPnyX2z1bWUT5Fn4C9ltiAZK680TzSZwJP%2Fd2%2Bc6%2FZXMKaDur0GOqUBxgpI6ruOBESofAjIhiW8ojJoHoDr7FEXUo%2Br72%2FfvDcGEnPBrSTPaUUIcKRCZu4iYO8%2FyET680zwEn%2BmeYavqi8D%2B35rNmSSxWIfKbtRzq1poezYEjyuSi5ps3wZVXvrNZ%2BgRzcw1xmwVslGKFLEne9GsCt2ytRCfpEj3OAk8UdR1k1zcxMLFC8bZsgoejMaBpDhNW9mqOaQ5cBSjK%2Fq0%2FgcvTJr&X-Amz-Signature=0fd0c24a2759949c85b0555e6468072353844aa359da7f5941e682974992f413&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWMN6AX6%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T003555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDk%2FhesLPGniBnO2bLXapSn5DXlYBkhnUzeHRznr9yXyAIhAME0H0PDRfbfvEHOk%2F73syEkWsTTL%2FSepmAp0TzXvAYnKv8DCCEQABoMNjM3NDIzMTgzODA1Igx6UN%2B88%2Bu1YDVCR3oq3APdrlGO%2BSBSHYxx3GnsthhFV9eQCp0jbsSRVI3ivCJBsMKP7TEHNfEcV37NNBQS1lzGoqz%2BcupLz79hZCrJfCdR1aIPU9v7HHOqaELW1nnK1i7eTo65euccBqqNv7fB%2B5y6QiQ7i%2FnHOirINHZfF9A%2BVKZ3WYIaDwdd2G3U5iJ7gnBxH4pbZNG%2Baaz7uvPebab7j%2BbWtAZxsxO27UHPdBHtBmjJ89HSUNccXY7zpNFadGyrsDwq6OUv5%2BKbfW4gFuqrVtV65rcJLDJB11DkIzC7WQknhj7jsVxbX%2Bx2gHzxddOcwNx3JIsO8Xuxx1EpCotIUHi2gdiW5%2BdSGDPq08buSxUpSHJy0tu97Ghl68Hfsc6f7XnhziH6izUMAW4yVTxM0xlaDn71Antb8Jbh2eJa4Rx72iepk2ks%2B4B7jnC5DUwG8wcIwSIt1DkQz2usaROSu4fqfOJrlpTz3PTA5%2FLwONuv5fHcGvAHeUS8EkWkXDue1nI%2BkMYzxD7I%2BcLk3kIvJxMbJpvNojUbw8E8VpvMcoYLJPzySgA%2BW17aT8%2Bkp8ArqJ5kQXMRYO6%2BYEXVf%2BNHMK47BS75FMrVg8STXc11XE2xdyrz6OY490FAvDNX0MsrMeQx1yCIsk2q4TDNg7q9BjqkAZ2xx54sMYZ%2BogxeN5bq3r6NHW%2BNqjFFBL7dVzdzp50F%2BXkP9Uya9%2B5FQA%2BvVtnvVE0zJOWlwcrQQYXWuI0SygsPyCI0YZsxGeRbJPERMtS1jbiAkWgZ6lykW7z%2FkHeMCNm87BJdi1GTiGAzBQ1f0ErNaLwRC6jJcOQNGMYKDWRMk5aH8ejpO%2BWsvTbIpJlOsAOpMhMvx2Yfp1tkx4BfR1dG3cYm&X-Amz-Signature=67ad354886dcf156f9200bb921006469dfc587c2d62f079d0ea9c8ddc5e5002f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
