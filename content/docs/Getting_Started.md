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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VIT6WLQ%2F20250722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250722T004509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsOA7smjzJ%2BPytT8%2BCzSMv%2FqBSv7pGV6uSdaROm8DyagIhAMMjBQOQ%2BF80fgasqAxsBjeQY%2BDjhygWmOiJCM4DJMseKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxTnHLqiGQXcMmMkIAq3AOdVZO8HkAc3nM2Vimu%2F%2BdF9v5oyJEbsizmPb3PjDMmOMRvWCECM3yq2wRr8j7PH%2Bk9TOlbSWzpQKh%2FylJKIetRHxvJBm06p8GEV2v6Ffi1gl7Rwz6lGfz6lVSjmzHg8MBhgazVpZilMzoO%2ByPv%2B%2F7DMZgaULoGbnfHcpEfNrU0p88zG6gSUGG5snhJCxBioixu08gdFc67f2vPIzo9ixEqQ0N%2BxbHwfsPj321hQjz3fQowvINxJbCgCZsFpkpopLFiSMQKBr83%2FJ3AlYXLHK1A8%2BNYp1eDZUptkpstMGW9iVWoJts8RH1v3MJeSI0FVkXur7qElISbyeX9aq7O7I95JALOGHIcObas2bxUi%2B2Y2OhoH7uDZVXUW55Qr0GDkQsImdQopDmd%2F0aPmV2GTtyeZTCrcSKDAik79j7eWAv2kdMxPPr1AQcJnYby2PnfMzKU%2Fs7cUwhjJmoxJZhnI2CoKfFKC4qgM3%2BHVYYs0M2fKJNj4le6imIhfx%2FnNgDUkO27vFAnlTo0hMz8638%2BREche8P5oVJSspzqmqMFT%2BJaXljRKobHiOawljkSx8hikludfMR9MygpDUttRdi%2BEvOhLtmDpqt99Lt5PSgpuMiclmfro6H%2FM6oUe4D1STDtn%2FvDBjqkAUnhjtzYu%2F3Uqb1J7TMJ%2FvPdMSc79gESNjJrDW4ps9tLoJeYoSEiGGlWSsWCAoG8qVathIfPMrGwQl4ERV7qyLjm60XI7yZ33ca0e0cfJaPi3tg9RJGO7qn59f7lZDVKZiRtPQQ5nbDYFodogz%2FQgzRNpGpSCJFBVtupgdOQdSiEA45ezuz%2Fy2o8YTlQiS3648s3e%2FpMFu83NT%2BxN9fpxcsT9os1&X-Amz-Signature=b0f6395c95770f9f0a557203753056515e166dcb38b9d3217a0db6bfbbe00c27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VIT6WLQ%2F20250722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250722T004509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsOA7smjzJ%2BPytT8%2BCzSMv%2FqBSv7pGV6uSdaROm8DyagIhAMMjBQOQ%2BF80fgasqAxsBjeQY%2BDjhygWmOiJCM4DJMseKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxTnHLqiGQXcMmMkIAq3AOdVZO8HkAc3nM2Vimu%2F%2BdF9v5oyJEbsizmPb3PjDMmOMRvWCECM3yq2wRr8j7PH%2Bk9TOlbSWzpQKh%2FylJKIetRHxvJBm06p8GEV2v6Ffi1gl7Rwz6lGfz6lVSjmzHg8MBhgazVpZilMzoO%2ByPv%2B%2F7DMZgaULoGbnfHcpEfNrU0p88zG6gSUGG5snhJCxBioixu08gdFc67f2vPIzo9ixEqQ0N%2BxbHwfsPj321hQjz3fQowvINxJbCgCZsFpkpopLFiSMQKBr83%2FJ3AlYXLHK1A8%2BNYp1eDZUptkpstMGW9iVWoJts8RH1v3MJeSI0FVkXur7qElISbyeX9aq7O7I95JALOGHIcObas2bxUi%2B2Y2OhoH7uDZVXUW55Qr0GDkQsImdQopDmd%2F0aPmV2GTtyeZTCrcSKDAik79j7eWAv2kdMxPPr1AQcJnYby2PnfMzKU%2Fs7cUwhjJmoxJZhnI2CoKfFKC4qgM3%2BHVYYs0M2fKJNj4le6imIhfx%2FnNgDUkO27vFAnlTo0hMz8638%2BREche8P5oVJSspzqmqMFT%2BJaXljRKobHiOawljkSx8hikludfMR9MygpDUttRdi%2BEvOhLtmDpqt99Lt5PSgpuMiclmfro6H%2FM6oUe4D1STDtn%2FvDBjqkAUnhjtzYu%2F3Uqb1J7TMJ%2FvPdMSc79gESNjJrDW4ps9tLoJeYoSEiGGlWSsWCAoG8qVathIfPMrGwQl4ERV7qyLjm60XI7yZ33ca0e0cfJaPi3tg9RJGO7qn59f7lZDVKZiRtPQQ5nbDYFodogz%2FQgzRNpGpSCJFBVtupgdOQdSiEA45ezuz%2Fy2o8YTlQiS3648s3e%2FpMFu83NT%2BxN9fpxcsT9os1&X-Amz-Signature=1b2585a39d32320281464c61eced3d006673472bfbc17833f9b1732e0834bdf6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VIT6WLQ%2F20250722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250722T004509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsOA7smjzJ%2BPytT8%2BCzSMv%2FqBSv7pGV6uSdaROm8DyagIhAMMjBQOQ%2BF80fgasqAxsBjeQY%2BDjhygWmOiJCM4DJMseKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxTnHLqiGQXcMmMkIAq3AOdVZO8HkAc3nM2Vimu%2F%2BdF9v5oyJEbsizmPb3PjDMmOMRvWCECM3yq2wRr8j7PH%2Bk9TOlbSWzpQKh%2FylJKIetRHxvJBm06p8GEV2v6Ffi1gl7Rwz6lGfz6lVSjmzHg8MBhgazVpZilMzoO%2ByPv%2B%2F7DMZgaULoGbnfHcpEfNrU0p88zG6gSUGG5snhJCxBioixu08gdFc67f2vPIzo9ixEqQ0N%2BxbHwfsPj321hQjz3fQowvINxJbCgCZsFpkpopLFiSMQKBr83%2FJ3AlYXLHK1A8%2BNYp1eDZUptkpstMGW9iVWoJts8RH1v3MJeSI0FVkXur7qElISbyeX9aq7O7I95JALOGHIcObas2bxUi%2B2Y2OhoH7uDZVXUW55Qr0GDkQsImdQopDmd%2F0aPmV2GTtyeZTCrcSKDAik79j7eWAv2kdMxPPr1AQcJnYby2PnfMzKU%2Fs7cUwhjJmoxJZhnI2CoKfFKC4qgM3%2BHVYYs0M2fKJNj4le6imIhfx%2FnNgDUkO27vFAnlTo0hMz8638%2BREche8P5oVJSspzqmqMFT%2BJaXljRKobHiOawljkSx8hikludfMR9MygpDUttRdi%2BEvOhLtmDpqt99Lt5PSgpuMiclmfro6H%2FM6oUe4D1STDtn%2FvDBjqkAUnhjtzYu%2F3Uqb1J7TMJ%2FvPdMSc79gESNjJrDW4ps9tLoJeYoSEiGGlWSsWCAoG8qVathIfPMrGwQl4ERV7qyLjm60XI7yZ33ca0e0cfJaPi3tg9RJGO7qn59f7lZDVKZiRtPQQ5nbDYFodogz%2FQgzRNpGpSCJFBVtupgdOQdSiEA45ezuz%2Fy2o8YTlQiS3648s3e%2FpMFu83NT%2BxN9fpxcsT9os1&X-Amz-Signature=eff22d7437e54ab22c56a62942e800ced7ab27e6ac3a3141c8751152775a78bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQZP2WCO%2F20250722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250722T004515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDu24Vx2BEsKPBYA%2BmStlLFWZZvyBSbORlpEc7MNjr50QIgV1cqFgWevcMM%2FS66DjwdJ5%2FB6W%2F9LqCiDkVVVU%2BBA1QqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNDttwPtz4%2BnD1ObByrcA6B88doTd8L6rCyB42SummdM9nd%2FwiEP7lx74K%2F2onBOwmr6OM5IAxBMI4HSo5aWmci8%2FENzADyt%2F99By6N2xXSE%2BTpcdrZkZx9qBhJj2g3va3D0aqpQsFBlYfvLIjpHlrNE3Ru0j95Ayq45cu9azhHpNfVVC0Mpocne9PEpdYpz0IlfXCaoIUh8E7u%2B8zF9J4Pxsxt7hEciOACLc7ENCBaVaGKwMivw1fWkhNLzveb%2FaVn1JCGc5njPaMt%2BkZmFBetQ%2Ft2ljwXrUEy3Z9x9XiBr5X05DQ0M9yfHgGdqGVI%2FVwc9T4cKGwyoNBZSkirGcWcH0PbLuQM9sfEj6%2FKhz0OOS7iuU1TXGuHhDBlRI0Z%2FJBhAHcew0yRjaHhSwvbNgGmisIJuL6MxtkKe34jn%2FofivGdtPOOvgQ05J2sNpsDLiASJvQ8Ei%2FclU3RD2Q6H9%2BNv7NukFxIxz9%2BgtjtF2nHlBPV3SLT1%2F4%2B1ZJTMoUMquZ7nrG%2BwyMtx1EviTS1ACGQE4hMGqDqXuR2P9G14ekvKIa6uRN8BJfg8L6I5WAp4SoFUGu0G%2BulF1ZcLFGHYAljXQoZhpL47m1BorzxnpSYXEEFVrGI%2F33ZtnzGuVZYERPzZypRjuKAbuQaRMMef%2B8MGOqUB%2FurH04iopL8%2Fx3L0VClK2Wq2Rh2tFaBnEIdEapBeiuFZxkPKtQaDIrTBF1HwTuwW5OFs4%2FnzsG1UoJwjaFcv67Onj4ceAygTmuXNkxr2HtPPbWO2epvaCDKTXH7fDMV2w2XZSV2%2FsojrLAPQSI9Y7HVALYnqvgI7DNN4yVEanpRs3Bc0rHuCaZScp3l%2BEFpuRQWmSV1%2FHUhimLdevjq55Hx9Emi2&X-Amz-Signature=d55cabf831f58253d7268d507f6b8e2ff289d8929597c09c474f24023926e2d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662S23JT6X%2F20250722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250722T004515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNTtf0pzXtxKbjbN7Qq2g1m4U3dawIYU%2BliKukPXYHlgIgUdhjQwf4TsUL6SoyQuFpwXGy%2B0e1XqMfavaOJHxGfqAqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGCsL0W1g29yoqqOASrcA0KRUPD1OiZ%2FMb%2FSqctI7yIEWGHWUJ43xJhTwLI0IZCCtpS0pivcaExaTnB1LRIYqdNsH9Zi0OrDdIn9RvjE4ct8qTXJdofRXw%2FiJ9mdYbHs%2FxZgLsAmZTktEO78jhS%2Bb%2BOqpv5F4gq72FwYc1RQD1l4TMSCstT%2FD2icN2axdIbUS9BoXKO65ti3hGkjEVNeNkoYbYV%2FFsZR9J148m2N69iholf%2Fx%2B%2Fze2P35XrtN9QWYWBxKXGcXgfAG9s41x1CuxPWGvvGiPkTxC4UlH5Ed0%2BEtz00I22ECj2U5y071mV94iwf65oJkfq0N0NhKIphIoR9Kf61%2FGfv8oL6NGECQLUKyipSkhXpdInIASnpOXUN8xQX3lqpGoQ57wL4lvKJ%2BZr99U82nsqrJpsStc2tsLWqeQhEXnoikRZU32urdkGlq4%2Fi3ElnJWE02oNkDRAkeucovfPnAg%2BC2p2RG4mqlTfwqf06dCnfMDN%2BtwLLsTz0CtZ8rr5QfYnZiTzWRFUk1w1%2Fmn3APSqVYRR59dwiwRE1rzjkyWN1OsIBc0io3PSuUy5vr%2BDrjVZRlkaodyd0nCqrOyi5%2Fsz70I6dhXGEFCVz9VpuyO4q2HVzYhj7rGfX%2Blg%2FPhzcIuzhwsIJMK2f%2B8MGOqUBltJwfG7sfWdVXLXj77CD5Kdvn1Oxg%2BWO4BuaFoU2l3AnnCxprR35UxBmX6J8b4zFNj1GSs66OI2C3vInZ6lBDhyYUxEkJLEsTj4fXFrVR42NOa1ApjtzNs6PljFtADWSXrezOCnIsGf5e7N9jsGgQvCSz%2FwANoqyVOep65nSkkoRYW3kzeYFvlPsqLmZFOXJkLwSWpLVYghQ2DDriK1YDLuFoB9W&X-Amz-Signature=618a772f6b4571b18db2dba0051db4d069001697b75e4e35c4c97c6c38b18b50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VIT6WLQ%2F20250722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250722T004509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsOA7smjzJ%2BPytT8%2BCzSMv%2FqBSv7pGV6uSdaROm8DyagIhAMMjBQOQ%2BF80fgasqAxsBjeQY%2BDjhygWmOiJCM4DJMseKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxTnHLqiGQXcMmMkIAq3AOdVZO8HkAc3nM2Vimu%2F%2BdF9v5oyJEbsizmPb3PjDMmOMRvWCECM3yq2wRr8j7PH%2Bk9TOlbSWzpQKh%2FylJKIetRHxvJBm06p8GEV2v6Ffi1gl7Rwz6lGfz6lVSjmzHg8MBhgazVpZilMzoO%2ByPv%2B%2F7DMZgaULoGbnfHcpEfNrU0p88zG6gSUGG5snhJCxBioixu08gdFc67f2vPIzo9ixEqQ0N%2BxbHwfsPj321hQjz3fQowvINxJbCgCZsFpkpopLFiSMQKBr83%2FJ3AlYXLHK1A8%2BNYp1eDZUptkpstMGW9iVWoJts8RH1v3MJeSI0FVkXur7qElISbyeX9aq7O7I95JALOGHIcObas2bxUi%2B2Y2OhoH7uDZVXUW55Qr0GDkQsImdQopDmd%2F0aPmV2GTtyeZTCrcSKDAik79j7eWAv2kdMxPPr1AQcJnYby2PnfMzKU%2Fs7cUwhjJmoxJZhnI2CoKfFKC4qgM3%2BHVYYs0M2fKJNj4le6imIhfx%2FnNgDUkO27vFAnlTo0hMz8638%2BREche8P5oVJSspzqmqMFT%2BJaXljRKobHiOawljkSx8hikludfMR9MygpDUttRdi%2BEvOhLtmDpqt99Lt5PSgpuMiclmfro6H%2FM6oUe4D1STDtn%2FvDBjqkAUnhjtzYu%2F3Uqb1J7TMJ%2FvPdMSc79gESNjJrDW4ps9tLoJeYoSEiGGlWSsWCAoG8qVathIfPMrGwQl4ERV7qyLjm60XI7yZ33ca0e0cfJaPi3tg9RJGO7qn59f7lZDVKZiRtPQQ5nbDYFodogz%2FQgzRNpGpSCJFBVtupgdOQdSiEA45ezuz%2Fy2o8YTlQiS3648s3e%2FpMFu83NT%2BxN9fpxcsT9os1&X-Amz-Signature=b69cf9bc946301b818f8f85bcd8c5be531981715cd7d8a366c097790c356938c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
