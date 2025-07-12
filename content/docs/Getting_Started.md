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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DNGYLUZ%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T210705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICPly7F3BrvjTPebtxlh7UzlP1vMG1tWVESf%2FK%2BQv2%2FVAiEA4Xs%2BA%2Fk4erc1gCByl1TPjYHaG9ZDT%2Bl17%2FgxIgg8mYwqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLAnH%2FdDOuYrWweNHCrcA5%2Fr%2F%2Fnyv%2FYIa2kbjKJrdyKyrz34nrxey5dwaLHgdQe7CRFBLoEeg8tW3VL7l9cuVajnQelfbsCJwVY%2FBmWgrk1iVl1aoDSchBRqUdRxNdS8QQPo6Cz8aV56dcf1zWyHlONzU3FInEe59KL1yo1mJuyNb0sRFf6bR5PZ%2BB%2BAPJf1LCF64RRRvNFVRIZKmZvKRSpJDyfxLUeC%2Fs16pCa9iT1036tVS7NU6NgW%2FuULObYIiS0TYfX0jdmiZqRsru2pcWnHbcCbEjHmZe7jUcmAzSXS0JRcvD6Iar9nz%2FMT%2BjNYmD7moF9%2FCa0%2FvZJeXxydIIRzdCPwKeghwm%2B0UXjbylhi02bAGyiTszxy5Ic%2Fi2Uioi%2FylYthDdCDF9G9pv7DhZJrPNe1F9scTSBuSe4iO8vBh7vt%2BcHngaIhVwEExsTx%2BqPHA3RXJyd1SydEi%2FGh%2Fx6O0qh47ePtSKoBIQGWXdp1OtVDDNXxXOKheUIHmRNlFdI9lFMbyIYE%2BRGlSto6N5%2F9L9%2F2ShnViCvBy6oZVY9hR3SRVeBGk429y%2F8jUXausrwErDyNNugtBwi5mKKt9D8AkeR8FRWi%2Fg%2B7OoITHpQDAKLq6OBNJuVoblDdlPpf38XHYdgNiRlvU449MPWEy8MGOqUBoqxM0KRmXE1pIAlqeBn8LjW8Qz5ox6ldB67ruKOEJazuCICTTkD1Ffiqu7pae%2Ft5RlfDfFtyinUvH%2FRj2l73sLLpnjN0GqB1onl7cZ7UZCHlL6sxpxDzgZapyCo70V0BvxCSnSzpK5VRjjsc3zgIGQN%2BNBchrqMVBoVWFDYuc0kwc5drvzI6NB0guo1Wtgz8ek57%2Fist7PKH%2F4HRSbPd7B7b1OmD&X-Amz-Signature=a77e5fc9be7c96be379028aa0c02cd53e96e67c0e5e2e09bcc4ce87a432cdfe7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DNGYLUZ%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T210705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICPly7F3BrvjTPebtxlh7UzlP1vMG1tWVESf%2FK%2BQv2%2FVAiEA4Xs%2BA%2Fk4erc1gCByl1TPjYHaG9ZDT%2Bl17%2FgxIgg8mYwqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLAnH%2FdDOuYrWweNHCrcA5%2Fr%2F%2Fnyv%2FYIa2kbjKJrdyKyrz34nrxey5dwaLHgdQe7CRFBLoEeg8tW3VL7l9cuVajnQelfbsCJwVY%2FBmWgrk1iVl1aoDSchBRqUdRxNdS8QQPo6Cz8aV56dcf1zWyHlONzU3FInEe59KL1yo1mJuyNb0sRFf6bR5PZ%2BB%2BAPJf1LCF64RRRvNFVRIZKmZvKRSpJDyfxLUeC%2Fs16pCa9iT1036tVS7NU6NgW%2FuULObYIiS0TYfX0jdmiZqRsru2pcWnHbcCbEjHmZe7jUcmAzSXS0JRcvD6Iar9nz%2FMT%2BjNYmD7moF9%2FCa0%2FvZJeXxydIIRzdCPwKeghwm%2B0UXjbylhi02bAGyiTszxy5Ic%2Fi2Uioi%2FylYthDdCDF9G9pv7DhZJrPNe1F9scTSBuSe4iO8vBh7vt%2BcHngaIhVwEExsTx%2BqPHA3RXJyd1SydEi%2FGh%2Fx6O0qh47ePtSKoBIQGWXdp1OtVDDNXxXOKheUIHmRNlFdI9lFMbyIYE%2BRGlSto6N5%2F9L9%2F2ShnViCvBy6oZVY9hR3SRVeBGk429y%2F8jUXausrwErDyNNugtBwi5mKKt9D8AkeR8FRWi%2Fg%2B7OoITHpQDAKLq6OBNJuVoblDdlPpf38XHYdgNiRlvU449MPWEy8MGOqUBoqxM0KRmXE1pIAlqeBn8LjW8Qz5ox6ldB67ruKOEJazuCICTTkD1Ffiqu7pae%2Ft5RlfDfFtyinUvH%2FRj2l73sLLpnjN0GqB1onl7cZ7UZCHlL6sxpxDzgZapyCo70V0BvxCSnSzpK5VRjjsc3zgIGQN%2BNBchrqMVBoVWFDYuc0kwc5drvzI6NB0guo1Wtgz8ek57%2Fist7PKH%2F4HRSbPd7B7b1OmD&X-Amz-Signature=e7b6c4db4ac9fa83a8ba4f95a89aeddb7822596af4d8dbbcf26245e83069771e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DNGYLUZ%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T210705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICPly7F3BrvjTPebtxlh7UzlP1vMG1tWVESf%2FK%2BQv2%2FVAiEA4Xs%2BA%2Fk4erc1gCByl1TPjYHaG9ZDT%2Bl17%2FgxIgg8mYwqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLAnH%2FdDOuYrWweNHCrcA5%2Fr%2F%2Fnyv%2FYIa2kbjKJrdyKyrz34nrxey5dwaLHgdQe7CRFBLoEeg8tW3VL7l9cuVajnQelfbsCJwVY%2FBmWgrk1iVl1aoDSchBRqUdRxNdS8QQPo6Cz8aV56dcf1zWyHlONzU3FInEe59KL1yo1mJuyNb0sRFf6bR5PZ%2BB%2BAPJf1LCF64RRRvNFVRIZKmZvKRSpJDyfxLUeC%2Fs16pCa9iT1036tVS7NU6NgW%2FuULObYIiS0TYfX0jdmiZqRsru2pcWnHbcCbEjHmZe7jUcmAzSXS0JRcvD6Iar9nz%2FMT%2BjNYmD7moF9%2FCa0%2FvZJeXxydIIRzdCPwKeghwm%2B0UXjbylhi02bAGyiTszxy5Ic%2Fi2Uioi%2FylYthDdCDF9G9pv7DhZJrPNe1F9scTSBuSe4iO8vBh7vt%2BcHngaIhVwEExsTx%2BqPHA3RXJyd1SydEi%2FGh%2Fx6O0qh47ePtSKoBIQGWXdp1OtVDDNXxXOKheUIHmRNlFdI9lFMbyIYE%2BRGlSto6N5%2F9L9%2F2ShnViCvBy6oZVY9hR3SRVeBGk429y%2F8jUXausrwErDyNNugtBwi5mKKt9D8AkeR8FRWi%2Fg%2B7OoITHpQDAKLq6OBNJuVoblDdlPpf38XHYdgNiRlvU449MPWEy8MGOqUBoqxM0KRmXE1pIAlqeBn8LjW8Qz5ox6ldB67ruKOEJazuCICTTkD1Ffiqu7pae%2Ft5RlfDfFtyinUvH%2FRj2l73sLLpnjN0GqB1onl7cZ7UZCHlL6sxpxDzgZapyCo70V0BvxCSnSzpK5VRjjsc3zgIGQN%2BNBchrqMVBoVWFDYuc0kwc5drvzI6NB0guo1Wtgz8ek57%2Fist7PKH%2F4HRSbPd7B7b1OmD&X-Amz-Signature=fc3392bcb21cdcff6895e3ddf04164f1edc202b821ee929dd2069afa7818c0ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TGA4MYN%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T210707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9r%2Bcm3Cqi1JjssjjcO0cGCm0JhIR3NKv2RdEzRsc7vAIgL3LHwoSI6FaweCTZkox6aNf6IHxPKgC%2FO62iS1tSQwkqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKHLcg1zCi7xSGGjuSrcA9IbSnZvFByDC5AZhUVLazy%2FidlrAVCYJ6V83lufBg1emoc%2FdaUbQwHpwlSRAcg72dOSgbi%2B9Ybzfu3v5JxsFFlUeEd0G0Dt3sLQPID8UgBQt71NIgiR7qYNAm14lySmj8j6MtSmJ%2Bb2YfcJg5xsOkCaYH0hStETOo%2FW70tWNxYiCRGS4FQU4TsVdLSEGufxhCE382mGhVujMGKSbIPwH4YvmztxQHE2QnkZzSAtgUF4eLIRvpJUGLsw4RyfzUgwVuQgc%2B9fVaxcvqhwa0H2W7zBQOgb1rl5e92cOFuF1qTPAVZrJuT2xud%2BqpHpGybVn7QAUSTkBiVj8uPMXn5k%2Bz4ZIb2J06hxmbCPi%2BqaKR2FWDRyMVkIgshgQW8pAMpFst%2Bf4P6O%2FJefVj6fnlaOqkH4oO34cHoDRKvav2ALqmIDGeMDIvVJBvOyM5eAA9KdYzW6pQMuZg2s8noZlA5DmomZDEUuz5EwhnnT99LaKXXv32VtHacVsURTPanE%2BXHQYCU5eliCzkSh2UdFNHaPrqRFPxbmcU2GOpJ3DxYsuJJzYRzV83LPN1e9rs3cBv5PYC58HvWvqLHrC8ACTrj6%2BxfeL2LiyoEVEyL90ZCRTAteKJJuQOQGPMwHhtazMO%2BEy8MGOqUBpvmrtqc2ObnsonWIThvlZY3iXcVmHw4bfTEMxtIpMaGWgUeGOj4sWOUOSRJfvnANT%2Fm%2BjFVgqy665VbeXVEbW8gi8ro917nu2K7ZlF92I%2BJvk%2BryXvlEn%2Bzbb5F7qR63C01E6NGRHXErog2qbJ0euADlXeUCmBcjZkgeqQEIdOehNapV%2FtKYLKI8pK4Ec3V3Y4xmB%2Bc%2FU9s9zvfmH8HfDzwI1LcI&X-Amz-Signature=36d03e991fe970dee80fb1dd54482fb4405e913fddc1b102e6d5a4b84e1edd04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNKKYJBQ%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T210707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkloiXEhDIwNSAu8hy2fyQvx2fBquQsh1Qco6znhUjBQIgKV4Gbx5I1ml1%2FVW8YmsSQMHWp5uUBVYuo%2FCqB%2FVqUf8qiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPAaEmpAnJy5OESj3yrcA6BjWpoxddvrmfTXjrYuA441Q0jxeVfHxXzpSDV6jp2CfAoXUbi%2FESOtKuzbgJeMC2d2AIT%2FgW12pgnK9D41uXy9q0%2B4gCy%2Bh8h%2FGc%2BqXXv7MEwvwG0ODrK1mFy6pUbh7JPElbzQUAX6DjK5BP97rXwfzJ%2BZ0j44hQh88fuzprWRPoy1tyn6B44gsdZc1wzu0%2B7IT0HCgILxC9JKKoP%2Fu4iGZRwmClhkxPPSDoLZ9NyoqG65EHomn7Io5TyizL2XGwW6MEvat3e7tittRQfqxThb%2BF2qehcWa7ZeMqrG7OWcCcnpfzbJa5eUAFMdhgrThNjxKYeuSg3o75tpVg2AvJ3v9Vf2Frt7dMPIMl3z8zGIl1IQqU48j0D6I19p%2FJN1YV3FEdj2e9zq1p4rLiUJ0VMGmhAzT5J834geT9BiS3f%2BDJVIEmNBsKpfb2A3jMVITGuxG1zaW310FYzddkKK%2FTleXJ2BVeNtZWSVKJPudWMnSTRt2Pr7AXr71jrOg6DJdppYCLYQ5YLeg6CW36PO%2Br%2FgjwOd%2BSlc9mwuVAENDh7MdQeSJ4GlT%2BikRm27UEUHM%2BM5HrvFWRQ7y%2BTnQbJ3sxqPtxs4BiorAwlmcoXUYEo1o99PM95xTYz2TbctML%2BEy8MGOqUBYzMHulhjw0IzBBn%2BMHjOoCrO%2Fs5Qhk9duIjnW8VQePpFKlIB42E%2FTBfezpFVp5PP1MmJc7TjTaAgXHjf9Hm0lVp6q1PvYYVys7RoN2HclOQy6xgBShSNaU3kvhGzNRyJIg4q9ycdgrBKj1K1cvdEc6ZcqJueVAMDMOzi8TjPFwfU5xT0aFgu95VbLZW2aKwsYIJylPG4whHaZKq7IBFEn7NQr%2FzK&X-Amz-Signature=2dbefa738a2e622b9d60547197bef0e16edd4850c858795d6f8f547ba2715725&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DNGYLUZ%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T210705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICPly7F3BrvjTPebtxlh7UzlP1vMG1tWVESf%2FK%2BQv2%2FVAiEA4Xs%2BA%2Fk4erc1gCByl1TPjYHaG9ZDT%2Bl17%2FgxIgg8mYwqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLAnH%2FdDOuYrWweNHCrcA5%2Fr%2F%2Fnyv%2FYIa2kbjKJrdyKyrz34nrxey5dwaLHgdQe7CRFBLoEeg8tW3VL7l9cuVajnQelfbsCJwVY%2FBmWgrk1iVl1aoDSchBRqUdRxNdS8QQPo6Cz8aV56dcf1zWyHlONzU3FInEe59KL1yo1mJuyNb0sRFf6bR5PZ%2BB%2BAPJf1LCF64RRRvNFVRIZKmZvKRSpJDyfxLUeC%2Fs16pCa9iT1036tVS7NU6NgW%2FuULObYIiS0TYfX0jdmiZqRsru2pcWnHbcCbEjHmZe7jUcmAzSXS0JRcvD6Iar9nz%2FMT%2BjNYmD7moF9%2FCa0%2FvZJeXxydIIRzdCPwKeghwm%2B0UXjbylhi02bAGyiTszxy5Ic%2Fi2Uioi%2FylYthDdCDF9G9pv7DhZJrPNe1F9scTSBuSe4iO8vBh7vt%2BcHngaIhVwEExsTx%2BqPHA3RXJyd1SydEi%2FGh%2Fx6O0qh47ePtSKoBIQGWXdp1OtVDDNXxXOKheUIHmRNlFdI9lFMbyIYE%2BRGlSto6N5%2F9L9%2F2ShnViCvBy6oZVY9hR3SRVeBGk429y%2F8jUXausrwErDyNNugtBwi5mKKt9D8AkeR8FRWi%2Fg%2B7OoITHpQDAKLq6OBNJuVoblDdlPpf38XHYdgNiRlvU449MPWEy8MGOqUBoqxM0KRmXE1pIAlqeBn8LjW8Qz5ox6ldB67ruKOEJazuCICTTkD1Ffiqu7pae%2Ft5RlfDfFtyinUvH%2FRj2l73sLLpnjN0GqB1onl7cZ7UZCHlL6sxpxDzgZapyCo70V0BvxCSnSzpK5VRjjsc3zgIGQN%2BNBchrqMVBoVWFDYuc0kwc5drvzI6NB0guo1Wtgz8ek57%2Fist7PKH%2F4HRSbPd7B7b1OmD&X-Amz-Signature=e07f5ec64e99303bfcb6319aa9011e1f10361e33798f5eba7137c6a532dfd65b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
