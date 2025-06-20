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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DSSKIQT%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T170739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHNITbugusYty1Lj0WeVqIP6KYEd3e2rlwv%2BiDpTdxFPAiAPO%2FxL5WoCsMlhJJGlimqaycBm7Tk7e6ke4XqyNFm1qyqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYlKgCvcbiv73i2oFKtwDsdkb5n9IPX7SSBhMbhe51DqkQ2TeHC%2FLYhu6raD%2FsywVXmwO5cp5lYaDcCLSSdvIMey8cr0HCZAjigtGoQjaVtaPI8ba5tb5icn1Kh8I6anEieLbUNZSn%2BtqFxGTTLP7FV95KxOi3wwoW%2BuWsboRRVS0O%2FXZ7%2FY8PbR3W7PUdHmUxKg1YyfGdvMUfwUema3cLw7iPtJiOZeb4Zr5%2F3VIRW30oOHFalnWCBqIBKtMX%2FU1%2B6SEeHbQ6q169TCmp2bWYDrZRXlwAO0vPZ7F1AvdtJX9iXU%2BhoAkLee5SmejmJQyMfp0ATLQFZVVdRsh2JT%2FC%2FInh41SvdUExTrZeJUkmXlLctiD97xGTJdWMblDFTsSebEN3xcDH0vtGJiXJsPxQ5QleVzowXOznXfRlR9u18o7lpq2VUAR8r57dVCKQ%2FfMD7YDiJyUkhngzAEUn0%2B1pjLP8O29LEeU3TO7MNC3wx5yFOAogpqMG77KtQjPfPleQCdUI27YN8UKYiq98FpqVyuxxO%2FV%2Ft9kAHR5plN0ai%2BQ6Us9fw%2BvkCvM%2F7LqMuTCEGJQAgx8ModM2rwfh7Ir1DixC0bicMqw74lrS29GLOaZrYbbHAFwDZUiYq158gC5PGpzA6tRU7FgxyYwiqTVwgY6pgGIddUBx2SG75AIawEexA1m%2B7xV27CYnZQyi3uzAojWMsP3fxvyuZUuDetrTNCmtZya1ILJuwDYUws2JslRkInUss%2FRbGMo6GF9EhCbAYxjvkH3LH16wgOegS3TXn17kaggmcfM5qUUMlwgWzF6%2BGW9fJOH85p7rKIZTH8ZmhiewrkT1XFkY4GMwSnADiUt4rUQxGlb1IXPFhAE6jbIMTeoBQd58NKo&X-Amz-Signature=cfdc3580e77a25939f4d5a77ce610b02f4f2e6df504a8696e07d49244c4395a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DSSKIQT%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T170739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHNITbugusYty1Lj0WeVqIP6KYEd3e2rlwv%2BiDpTdxFPAiAPO%2FxL5WoCsMlhJJGlimqaycBm7Tk7e6ke4XqyNFm1qyqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYlKgCvcbiv73i2oFKtwDsdkb5n9IPX7SSBhMbhe51DqkQ2TeHC%2FLYhu6raD%2FsywVXmwO5cp5lYaDcCLSSdvIMey8cr0HCZAjigtGoQjaVtaPI8ba5tb5icn1Kh8I6anEieLbUNZSn%2BtqFxGTTLP7FV95KxOi3wwoW%2BuWsboRRVS0O%2FXZ7%2FY8PbR3W7PUdHmUxKg1YyfGdvMUfwUema3cLw7iPtJiOZeb4Zr5%2F3VIRW30oOHFalnWCBqIBKtMX%2FU1%2B6SEeHbQ6q169TCmp2bWYDrZRXlwAO0vPZ7F1AvdtJX9iXU%2BhoAkLee5SmejmJQyMfp0ATLQFZVVdRsh2JT%2FC%2FInh41SvdUExTrZeJUkmXlLctiD97xGTJdWMblDFTsSebEN3xcDH0vtGJiXJsPxQ5QleVzowXOznXfRlR9u18o7lpq2VUAR8r57dVCKQ%2FfMD7YDiJyUkhngzAEUn0%2B1pjLP8O29LEeU3TO7MNC3wx5yFOAogpqMG77KtQjPfPleQCdUI27YN8UKYiq98FpqVyuxxO%2FV%2Ft9kAHR5plN0ai%2BQ6Us9fw%2BvkCvM%2F7LqMuTCEGJQAgx8ModM2rwfh7Ir1DixC0bicMqw74lrS29GLOaZrYbbHAFwDZUiYq158gC5PGpzA6tRU7FgxyYwiqTVwgY6pgGIddUBx2SG75AIawEexA1m%2B7xV27CYnZQyi3uzAojWMsP3fxvyuZUuDetrTNCmtZya1ILJuwDYUws2JslRkInUss%2FRbGMo6GF9EhCbAYxjvkH3LH16wgOegS3TXn17kaggmcfM5qUUMlwgWzF6%2BGW9fJOH85p7rKIZTH8ZmhiewrkT1XFkY4GMwSnADiUt4rUQxGlb1IXPFhAE6jbIMTeoBQd58NKo&X-Amz-Signature=d55a61b6b824e58a38b8ecb1fc64873ed3b165a91838874b3d15216644f99dc7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DSSKIQT%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T170739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHNITbugusYty1Lj0WeVqIP6KYEd3e2rlwv%2BiDpTdxFPAiAPO%2FxL5WoCsMlhJJGlimqaycBm7Tk7e6ke4XqyNFm1qyqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYlKgCvcbiv73i2oFKtwDsdkb5n9IPX7SSBhMbhe51DqkQ2TeHC%2FLYhu6raD%2FsywVXmwO5cp5lYaDcCLSSdvIMey8cr0HCZAjigtGoQjaVtaPI8ba5tb5icn1Kh8I6anEieLbUNZSn%2BtqFxGTTLP7FV95KxOi3wwoW%2BuWsboRRVS0O%2FXZ7%2FY8PbR3W7PUdHmUxKg1YyfGdvMUfwUema3cLw7iPtJiOZeb4Zr5%2F3VIRW30oOHFalnWCBqIBKtMX%2FU1%2B6SEeHbQ6q169TCmp2bWYDrZRXlwAO0vPZ7F1AvdtJX9iXU%2BhoAkLee5SmejmJQyMfp0ATLQFZVVdRsh2JT%2FC%2FInh41SvdUExTrZeJUkmXlLctiD97xGTJdWMblDFTsSebEN3xcDH0vtGJiXJsPxQ5QleVzowXOznXfRlR9u18o7lpq2VUAR8r57dVCKQ%2FfMD7YDiJyUkhngzAEUn0%2B1pjLP8O29LEeU3TO7MNC3wx5yFOAogpqMG77KtQjPfPleQCdUI27YN8UKYiq98FpqVyuxxO%2FV%2Ft9kAHR5plN0ai%2BQ6Us9fw%2BvkCvM%2F7LqMuTCEGJQAgx8ModM2rwfh7Ir1DixC0bicMqw74lrS29GLOaZrYbbHAFwDZUiYq158gC5PGpzA6tRU7FgxyYwiqTVwgY6pgGIddUBx2SG75AIawEexA1m%2B7xV27CYnZQyi3uzAojWMsP3fxvyuZUuDetrTNCmtZya1ILJuwDYUws2JslRkInUss%2FRbGMo6GF9EhCbAYxjvkH3LH16wgOegS3TXn17kaggmcfM5qUUMlwgWzF6%2BGW9fJOH85p7rKIZTH8ZmhiewrkT1XFkY4GMwSnADiUt4rUQxGlb1IXPFhAE6jbIMTeoBQd58NKo&X-Amz-Signature=f7cf4ecafe3bf74fc1c2e1a630c2f04e10bbc62f507d4d6c915a2e20adb41265&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UJIX3QN%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T170742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBF%2FJcNgccKdRrL%2BcWxacyOgORkugS7rAy1bwRYWRg0LAiBcslZQYNDkvPYTaEkeAxDt%2BpzkeV2aeZcOVnMOTxfzlyqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8YKlc6upuZhx8eEVKtwDfxNJi1azzNGHR1sr50yu%2B8ybh%2BFijZOHHZs0OafFrVuZlsxRaA5BBbJbnHUxC0V91ZSC9g6XoqhlgvLFrr%2FBAUXAcXzq3Rb%2B42VuE09vkWPaD2a6O33ciAwkKyq%2FF%2F5zh3HeIMrsCqmnL9lERpicwnU2J17MVCWjn1yL16Q4DNlnKSZwktLclXScHX6sOiRiV5tQblPPv45Ni5xF40HUMIVNinlmoM%2Fhs%2BxUgd53WQcJsjY7Gk4DNMMUIvPQdPQvczEWEhQ%2BiX981mhyEzG%2BNqwsSzkjVgy7rbkbKQfKxmygtF3ZWRMPDEQdUhCSy%2Fem3HgE2le5ebCRfdix39UxyvkMDnIuI8tvN51EZ76uJokbrrPdSvqWo6x91TCE1Wy5MFMRAOVdwUv8ArpKzfR%2FSUgJ0P00QQCZGR4%2F8r2XYcN5leVmjJL1L5kI6ys%2BEN%2FG%2Boh%2FuPJ8RrQPcPA68BhyK8MfTXfMJe9aF4xL8Qe%2BDub2a7SKD%2BtK%2Bc%2BvHFUXIGi6gIlUYT0qsgcBL3T8iunG5R9d0X6sVzgua7bc2C14PSU6vgZ2ZJ%2BV3sZ4YyVJnDoIwuYjO9SLUq6c5R7IBkOVmlEkzbKSOm3oTeXYRAe8mMoad80L5CIqrE1ABvkwnaXVwgY6pgGxRRRtwW2W7XIwnzvQhRJLic2ipUmQnFb%2FDjzDCiBWYn1fAc3oc58x5hSNTYCHLQvRxSm74yf4cI3mBragfA3RJlv6R%2FcWCkZF8TV7Khi321268Wad6oOmE0NWe%2FKLgFZa4uNkk7Zx8iHBHfPb%2Bb2kqKDIzOpznCLRXTWMIHIGA9Phsi5kHtZ%2Fu%2Fdeb46wUqgXG7Y%2Fg2G%2FD1QMX88KhRUH5tl0bwZw&X-Amz-Signature=70116a8b4948aaf7509ab7cb3cea7e6f8fedbaa4c32e3ec5a41a58806e4b9637&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJI32PHR%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T170743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2b6ZZ1zzpj0tjVXTBbxmRFowrsEnhrknpGz%2BW4V0%2FJgIhAJyc2PWb3V64XRPDIUsGsDDcB%2Bhqcn1y%2BEgXxTkqhrmjKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxyh2Wk0r%2F%2FJ%2Fer3CQq3ANo%2BouAgHUGwikUvCzYBwC%2FD68aH%2BJQbJnaD%2BXKh6cIwO4Ze2%2F%2BMyIZWcriZtI6dPYdvXUd7G2luedGzs1A%2BLuLMBaQRyLfYwmrP9nGOwhB6i9R4ObA3w9P%2BKobx1CHcVc0aUBtKembAoLAjt7CIgf53r8y1TBZiRwWAh5R0O979SdNont87hYJvsIpJ1uix31yaGNLK1Et5s3SQg3%2B4mVbSrPi%2BgtInDCydBasIH2vETdJ3MxaYjTz1OzPyh9vQURDnYTxwIhIIXrUjK36Xr2ySvUXmVELCDEXuF5XO7AVJjXLJD%2FCr9Jmoz6Vplqu0X3AR%2FWFsVqHFZbdrgFSurp%2BRV%2FDugIIYPtMl3quk0cwEDbgtWTEj%2FidAG4gO%2FasqvdDWbEeFAJis2b3LrqlukJ6uYuLoNCZmEJr6pdO9oRSxHmv6H3c9bCxT6FOKb2HmS1umW0VqwayuldupOaNjEWDyM1UFbXvig7LPZ0pbDwLEg5fdvklDdXCcRK%2F5egjnKMBd0BnBsQMUN88LSTpiDWGdujDMHvPr7eq779My3B8%2F%2B2JgWRX7SJJP6JdJHQ8cEVtt5%2FXyMNw1se42zdLNhOVLW2g2ckWDnhpe71WZbjVWfklJczoreOtG7iPsTDzpNXCBjqkAdZOzVmRWuUHp38GK%2FKMcG1F79N8XzLd5XwPfQ%2FAEEnDZ9lqgCMlB1w%2BdE9G4mqT6FiEhXRbdPl06ptZI10ainUilexkFBE2quPYR%2F3Ua2EHcSp27ZMLast0Igqyqifq6u1MlPiVPnn0BKCDVAEK0M3OyzFpDXR52QxpezYe7IPjEBr2kCMGVjCwZZNCZfOGNk%2FxFnS5JgLP0hQFuGFDpZbLH48E&X-Amz-Signature=a2c1797a38f6a6a317296132ff980d4b21e3ca535950d17aa70ae2ca43e48074&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DSSKIQT%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T170739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHNITbugusYty1Lj0WeVqIP6KYEd3e2rlwv%2BiDpTdxFPAiAPO%2FxL5WoCsMlhJJGlimqaycBm7Tk7e6ke4XqyNFm1qyqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYlKgCvcbiv73i2oFKtwDsdkb5n9IPX7SSBhMbhe51DqkQ2TeHC%2FLYhu6raD%2FsywVXmwO5cp5lYaDcCLSSdvIMey8cr0HCZAjigtGoQjaVtaPI8ba5tb5icn1Kh8I6anEieLbUNZSn%2BtqFxGTTLP7FV95KxOi3wwoW%2BuWsboRRVS0O%2FXZ7%2FY8PbR3W7PUdHmUxKg1YyfGdvMUfwUema3cLw7iPtJiOZeb4Zr5%2F3VIRW30oOHFalnWCBqIBKtMX%2FU1%2B6SEeHbQ6q169TCmp2bWYDrZRXlwAO0vPZ7F1AvdtJX9iXU%2BhoAkLee5SmejmJQyMfp0ATLQFZVVdRsh2JT%2FC%2FInh41SvdUExTrZeJUkmXlLctiD97xGTJdWMblDFTsSebEN3xcDH0vtGJiXJsPxQ5QleVzowXOznXfRlR9u18o7lpq2VUAR8r57dVCKQ%2FfMD7YDiJyUkhngzAEUn0%2B1pjLP8O29LEeU3TO7MNC3wx5yFOAogpqMG77KtQjPfPleQCdUI27YN8UKYiq98FpqVyuxxO%2FV%2Ft9kAHR5plN0ai%2BQ6Us9fw%2BvkCvM%2F7LqMuTCEGJQAgx8ModM2rwfh7Ir1DixC0bicMqw74lrS29GLOaZrYbbHAFwDZUiYq158gC5PGpzA6tRU7FgxyYwiqTVwgY6pgGIddUBx2SG75AIawEexA1m%2B7xV27CYnZQyi3uzAojWMsP3fxvyuZUuDetrTNCmtZya1ILJuwDYUws2JslRkInUss%2FRbGMo6GF9EhCbAYxjvkH3LH16wgOegS3TXn17kaggmcfM5qUUMlwgWzF6%2BGW9fJOH85p7rKIZTH8ZmhiewrkT1XFkY4GMwSnADiUt4rUQxGlb1IXPFhAE6jbIMTeoBQd58NKo&X-Amz-Signature=c6a54260fbb07c681e9a3f922821925d88c662553ee5ad9958b9b35a1463db09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
