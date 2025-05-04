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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4Z4ZT4E%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T081014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQCCZe36QaNjLCDFHt8rueLP62O4E1Dmr%2B%2B9cjZFQ6EzjgIgWyvHnevi%2F5EYhGwSK%2FB0WnCnpZ56UnhI%2BdYtgmlaL3wqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCwWJzZkiZevSWkX4CrcAwxJ%2FL6WXkajLWtHOIml%2BBL%2FWxGNVcK0jTXaxi%2B4QndDKjG%2BVAcW70C8P1%2FjVnSF47%2BuVEen49BvqAl5GGgtABFxmfxYjipGFmWs7vpS4%2FIjcp2MeTHQPQS8KSBAnoxtK6qADOGBtlBr5RngaxxN44nKl4kOhuV5DG7QNLMR9f3CFr%2FY1If4lCLgmQg1wmtg%2F%2BG2I%2FxkXDV1u8%2Fbq78ikI4GT6P9X1QB39bshB01%2BOkRPNBNXidQo%2BSHyEeIZR5GHtglu%2FoMr65fSjZC7uqGTDRsW9HVz2FVfUXaUmN0uM1%2Fo7vnzXVJgYIAKGEntKZKnucKqCVe97rpseKZNAoijWCd3EK%2FXF8NK2uBMasMrDaRtCHfWvieoJpG%2FdPv2GSRt%2BhF%2FS3spsbTIkgLyaw5JxnBoyWL2Sn4m1azWcRhzzqFJy%2FJo6uOpcL1BeGxymOFT%2BqcHB3CUMKqmJl9pCYT353SQTtdDOOQ9YHYOJfdi5bT0WFw83c02rjW3V0PhxKTeecVZ6rt5W02BlhvfCcv6hjxfRJQTkrddJTKnuudhCb9kgLQS5anVjFUOSXX7cenLpChwCiSx61OMNHksSsrzmcZUA4nUfR%2B4WbOGMLM%2F0lk2S%2FB0qIwqAR%2B38aJMLDr28AGOqUBSwbYfJdHnme3uI%2B3%2BapRmpT5pAlRTKBRuNvIB0ts3jkcOkaPDpojL4TbkOZIywb1HFKB2WlC%2BgFo5NAjJUeOAgJjAtBYOARnrEd7aTz8Bq6HOdm06IZav2b0cj%2FBeDO2t4uS1GC5Yd%2FzYSYyjxs%2F78p7%2FgtTh0YXDHBDGcQwcJ9mYp1dbOy6tV68Fe%2FptmYZKkOKLCUsLkd50v73VdRPiKSpf5yl&X-Amz-Signature=822a80eebf0d9260f7febfcd4320420d8516d848bf8030f223922dfda8e736af&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4Z4ZT4E%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T081014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQCCZe36QaNjLCDFHt8rueLP62O4E1Dmr%2B%2B9cjZFQ6EzjgIgWyvHnevi%2F5EYhGwSK%2FB0WnCnpZ56UnhI%2BdYtgmlaL3wqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCwWJzZkiZevSWkX4CrcAwxJ%2FL6WXkajLWtHOIml%2BBL%2FWxGNVcK0jTXaxi%2B4QndDKjG%2BVAcW70C8P1%2FjVnSF47%2BuVEen49BvqAl5GGgtABFxmfxYjipGFmWs7vpS4%2FIjcp2MeTHQPQS8KSBAnoxtK6qADOGBtlBr5RngaxxN44nKl4kOhuV5DG7QNLMR9f3CFr%2FY1If4lCLgmQg1wmtg%2F%2BG2I%2FxkXDV1u8%2Fbq78ikI4GT6P9X1QB39bshB01%2BOkRPNBNXidQo%2BSHyEeIZR5GHtglu%2FoMr65fSjZC7uqGTDRsW9HVz2FVfUXaUmN0uM1%2Fo7vnzXVJgYIAKGEntKZKnucKqCVe97rpseKZNAoijWCd3EK%2FXF8NK2uBMasMrDaRtCHfWvieoJpG%2FdPv2GSRt%2BhF%2FS3spsbTIkgLyaw5JxnBoyWL2Sn4m1azWcRhzzqFJy%2FJo6uOpcL1BeGxymOFT%2BqcHB3CUMKqmJl9pCYT353SQTtdDOOQ9YHYOJfdi5bT0WFw83c02rjW3V0PhxKTeecVZ6rt5W02BlhvfCcv6hjxfRJQTkrddJTKnuudhCb9kgLQS5anVjFUOSXX7cenLpChwCiSx61OMNHksSsrzmcZUA4nUfR%2B4WbOGMLM%2F0lk2S%2FB0qIwqAR%2B38aJMLDr28AGOqUBSwbYfJdHnme3uI%2B3%2BapRmpT5pAlRTKBRuNvIB0ts3jkcOkaPDpojL4TbkOZIywb1HFKB2WlC%2BgFo5NAjJUeOAgJjAtBYOARnrEd7aTz8Bq6HOdm06IZav2b0cj%2FBeDO2t4uS1GC5Yd%2FzYSYyjxs%2F78p7%2FgtTh0YXDHBDGcQwcJ9mYp1dbOy6tV68Fe%2FptmYZKkOKLCUsLkd50v73VdRPiKSpf5yl&X-Amz-Signature=ddaaaebea1441ac96211b06c60b4ec06384a3615189d26f304fccc8b978604c1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4Z4ZT4E%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T081014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQCCZe36QaNjLCDFHt8rueLP62O4E1Dmr%2B%2B9cjZFQ6EzjgIgWyvHnevi%2F5EYhGwSK%2FB0WnCnpZ56UnhI%2BdYtgmlaL3wqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCwWJzZkiZevSWkX4CrcAwxJ%2FL6WXkajLWtHOIml%2BBL%2FWxGNVcK0jTXaxi%2B4QndDKjG%2BVAcW70C8P1%2FjVnSF47%2BuVEen49BvqAl5GGgtABFxmfxYjipGFmWs7vpS4%2FIjcp2MeTHQPQS8KSBAnoxtK6qADOGBtlBr5RngaxxN44nKl4kOhuV5DG7QNLMR9f3CFr%2FY1If4lCLgmQg1wmtg%2F%2BG2I%2FxkXDV1u8%2Fbq78ikI4GT6P9X1QB39bshB01%2BOkRPNBNXidQo%2BSHyEeIZR5GHtglu%2FoMr65fSjZC7uqGTDRsW9HVz2FVfUXaUmN0uM1%2Fo7vnzXVJgYIAKGEntKZKnucKqCVe97rpseKZNAoijWCd3EK%2FXF8NK2uBMasMrDaRtCHfWvieoJpG%2FdPv2GSRt%2BhF%2FS3spsbTIkgLyaw5JxnBoyWL2Sn4m1azWcRhzzqFJy%2FJo6uOpcL1BeGxymOFT%2BqcHB3CUMKqmJl9pCYT353SQTtdDOOQ9YHYOJfdi5bT0WFw83c02rjW3V0PhxKTeecVZ6rt5W02BlhvfCcv6hjxfRJQTkrddJTKnuudhCb9kgLQS5anVjFUOSXX7cenLpChwCiSx61OMNHksSsrzmcZUA4nUfR%2B4WbOGMLM%2F0lk2S%2FB0qIwqAR%2B38aJMLDr28AGOqUBSwbYfJdHnme3uI%2B3%2BapRmpT5pAlRTKBRuNvIB0ts3jkcOkaPDpojL4TbkOZIywb1HFKB2WlC%2BgFo5NAjJUeOAgJjAtBYOARnrEd7aTz8Bq6HOdm06IZav2b0cj%2FBeDO2t4uS1GC5Yd%2FzYSYyjxs%2F78p7%2FgtTh0YXDHBDGcQwcJ9mYp1dbOy6tV68Fe%2FptmYZKkOKLCUsLkd50v73VdRPiKSpf5yl&X-Amz-Signature=710999f519dad15fe455081aaf2c8d5420582b8994c19873467cb97c35ede261&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IDOVFUS%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T081021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQDT%2BEvY%2BNzLZFHzGFVdWASpRDpF9UBdqwbdADF9E0r5rAIgPFqUzMxEvXcsti%2BRg3K4geXUKGmuYWatwSnkWCzP8GYqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEGXAG6tATu0acc87yrcA6amE5MTLwcxv7Vj6%2Bl8EK%2FOB0PTMNvWwWehOvMjs0VOIQ71FXkM4wSeAqu5M0YfUqdbea%2B5C7RMwdG4ZFqXeUqpoKn%2BDI%2F%2B%2Bcb3lH%2BjeiyBT%2BAvD0xx39p6tpBpILTKOateotNVkd3Vh3XbyErjxGcFgYJ0m4VFqcXKg2ly8v1Wm0TnHFczUJJfGkk8U0f0thH1f%2FqUdN9TPxmNqQP1ETcY0EtwQ%2Bm04Gl0Ogtn4A75XdznDpmrHK2RJzrWbIxUdJW2bzeala3jfxdRbu265Hg9e3aepewaeYWTE8JWh1SeUVbEr0d2GmK3jCNtn1Nvoh9ynXDrqw7dXcpwxzcErN%2BpcjoS9xl1V%2BJhtnc6k7%2Fy7clB6khe6IuknhBLl2Sfmfws%2BAn%2FUc2QE1obTsfmOwxQzE4uo9Z421zbMkJPQVNU0m4pzLEjF2hDVeMNAYWfj61BhuCsbMeMFF8A%2Fcuriu%2B8iCGR1OMUZzSsYtjuAJa3%2F4pLjivwjmToeWCbFkujOOTtf%2FOlcPdIp3yqTk6cbuCQH2aArUzDARIpGETdnxg4LtE2sxn3QrW%2FRE7OAVVwC%2FQXHUxeIK8pisMRvLy7CXEJns7WR7mKNl25H4QtPWZUrF1zJ6EABQp%2Fmda8MNjr28AGOqUBIAkevkI6VGvu9fR2fiXOIG7wigosqCLv02LZB0aodT6c0dGRmlhhc10s2320Ch%2FCWQuWjwFrJhmn3Zz6xMVwU10GeMB6w%2FONy7AovHPthTXljBcFjeyQdnuL2%2FGKWyK0UsbQOL0zA%2FryMSV2RkvSO%2FkjL%2B0nwxRkJlX77qY%2BaIK41TIECtFUWUU1fq5D%2F2vkMVFOjYSVfn%2FCje39LcxQUxkoqjh%2B&X-Amz-Signature=dbc2679ffb152c5512607db9260b5efeefe49cad0605b96b0edf787ff9ff24bc&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665F2SGLY5%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T081023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQC9BvnT4aGsH5A9UnD7eO%2FscViVbr%2FjwbhVcy0gkGUlvwIhAOGFlDAUOiFKUA9s7wqGOeuI8qe%2B0XrFj5SJphF%2FrH4OKogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyjbcEsEEBEY1nAJ7oq3AOi4IvPhuWtuJe03S7X36zMh3XC5ncExEqrNdoOilW1PdMN0WmKMektKVm5Kq5iShr7A0dB5p8hymtGYJD3mlWrLKoBtAtWuC9FRA44C90%2BeRY8RzcozEH9z6F8znkoIuyvwFvT80H3hLeaCPzBw%2B6tRlTjU%2B%2F2iCvyDVJlkJP%2BYqmFyIlXiBIq%2BMrZItjnP63j0GVAPfuyjA92I%2Fd7QU69QMUjGMDMN1slzSqENJlf1jwvYscrW9KBQst4PbTmvER7moGR5hO5HIaSc4IMbT8z5Sxi8JjVxdGBm67Y0tI77TakXXYBLb%2B5zrelRHhx4l7lSVykYR90DJarjQLM935zBKBZsNjyvUny3Nsns9669xp2inAXeHAwjnki9YlvGVEaddpKz84zVRe71XqxfAmwyT27XSHobM%2BC2LUt2J4ZVW3bPOCxdGULGP5%2B1KdSiT9KxmwZBa%2B9pF9ZtA%2FGjDBKr9SzbkR2tNy4RT7WnJttL24IIkPgaBWRqdm5VGWCL5zWgknSoqGd2l1xFBRGY3h4sj4nPsinl3WPlKGbVBAfq2U81LugEl1%2BCIy6W7Z0y5MOQ14cqVGG0mjlpQPxT0TDQspAVHNjM6ttkPurwBaPH%2BcfZE%2FSaDCI9238jDCGkdzABjqkAaUOYXN%2Fbv4PFjONEQVF%2Fo030F6oj82D6Kb1EFAFUEzFVI7n%2FnCdTRYD%2BvQOL%2FJkPkAb0yGEI41CpnDnk24zAn4bywQU3DpOlDvn5XbTRWB%2BB4o0VlaZ8uvEHkucaSWA9GrAPI14ibciUf59GMENo2Ot%2F16rHaYfBS3uDKHhQ%2FrEUoIjPRmEtSGb75Fpkg6H5k9i5voOwxJuPG6pk%2F52vpNgbCO%2B&X-Amz-Signature=9d4643bc04c2aaccc187a258993a1740cd80a706013dadf9dfae50d009aef0d7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4Z4ZT4E%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T081014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQCCZe36QaNjLCDFHt8rueLP62O4E1Dmr%2B%2B9cjZFQ6EzjgIgWyvHnevi%2F5EYhGwSK%2FB0WnCnpZ56UnhI%2BdYtgmlaL3wqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCwWJzZkiZevSWkX4CrcAwxJ%2FL6WXkajLWtHOIml%2BBL%2FWxGNVcK0jTXaxi%2B4QndDKjG%2BVAcW70C8P1%2FjVnSF47%2BuVEen49BvqAl5GGgtABFxmfxYjipGFmWs7vpS4%2FIjcp2MeTHQPQS8KSBAnoxtK6qADOGBtlBr5RngaxxN44nKl4kOhuV5DG7QNLMR9f3CFr%2FY1If4lCLgmQg1wmtg%2F%2BG2I%2FxkXDV1u8%2Fbq78ikI4GT6P9X1QB39bshB01%2BOkRPNBNXidQo%2BSHyEeIZR5GHtglu%2FoMr65fSjZC7uqGTDRsW9HVz2FVfUXaUmN0uM1%2Fo7vnzXVJgYIAKGEntKZKnucKqCVe97rpseKZNAoijWCd3EK%2FXF8NK2uBMasMrDaRtCHfWvieoJpG%2FdPv2GSRt%2BhF%2FS3spsbTIkgLyaw5JxnBoyWL2Sn4m1azWcRhzzqFJy%2FJo6uOpcL1BeGxymOFT%2BqcHB3CUMKqmJl9pCYT353SQTtdDOOQ9YHYOJfdi5bT0WFw83c02rjW3V0PhxKTeecVZ6rt5W02BlhvfCcv6hjxfRJQTkrddJTKnuudhCb9kgLQS5anVjFUOSXX7cenLpChwCiSx61OMNHksSsrzmcZUA4nUfR%2B4WbOGMLM%2F0lk2S%2FB0qIwqAR%2B38aJMLDr28AGOqUBSwbYfJdHnme3uI%2B3%2BapRmpT5pAlRTKBRuNvIB0ts3jkcOkaPDpojL4TbkOZIywb1HFKB2WlC%2BgFo5NAjJUeOAgJjAtBYOARnrEd7aTz8Bq6HOdm06IZav2b0cj%2FBeDO2t4uS1GC5Yd%2FzYSYyjxs%2F78p7%2FgtTh0YXDHBDGcQwcJ9mYp1dbOy6tV68Fe%2FptmYZKkOKLCUsLkd50v73VdRPiKSpf5yl&X-Amz-Signature=1f77a6cbdc298c8d5a30a94ac237827c9f57175a8867da76c73c27f673cf373a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
