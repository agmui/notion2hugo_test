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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UY3SW3H%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T061324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FlBbWBIaiVlejgyY6Iv2Ky16GEwdPb9gJMZTWTvaheQIhAOk%2F2wXGPfOTF5bzMK5oku0Z%2BWJ5xJ0uK7%2FNVKNO7hfJKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy8zzVhQtPM4P6wW%2Fcq3ANDyTbCrj96kvHS6KqNbnvDx4RyalPoTNrAehbwJjMSoVubIzQSIXjCrK3yIVanED67Vph0BIni%2BhTEuplM0riI6xWgIgSi2iDKdNGVTGYj0eK2D%2Fo5faDeVZr%2BCUSvniiAll4KcXMfVgKOWleACgA%2F%2FtJnC5anrMg28N6oFM5gLjWurupXBeiWvpMOXDZeesWHz4zwyskDoeZzRHpHQ0n6N%2FMiDA%2FyH9VYoQJOApp6CCNn5PSnF2OrQv8rW3jHw7gq2ggkPD0I7Bg%2Bbvz6FcEY5P2x4rXLWoNFK5gHfGzcVBx8MZs5ouhlSoFSCrY8wX2msMjYjQoujp9nBzxyaaS%2BE9w1CmHhZPAL%2Bu0gWmOTG3%2Fh1B0%2FFtsZKWVSj0J%2FX%2B1obGOe7rE%2BpfncHg1PSsQwCRjNymeh6VB2I5vs8sCAHoTq%2BXT0T%2BZXbfYYZ%2FqGWDMidt5WE6iqw8sC0Wgfzd9pZmm7H3v5UjoEDxf25FlOOWWJpdE0xkHHQ52IhQd%2FRHKZb4ZRiwlFyHV1TKUZ%2Bm532gxfgoK5DRtlwhMYbF0dJRahWtt5QRA%2FPP0K68D0Goh5IGi6s%2FOZgBy318%2BdZmGev9OREhGU0RkMdVTFUzBC%2FDN%2BSfmCIwHGp5EVJTDpo8nCBjqkAd8nHMtLf1wlRvIOipsL61cEBTM9MtANQgDAIAZlSHdpp356%2BXSkA2l7HvNqY28XpUDeo5YXUsX6hG2y3bKHMVvoSoTH9N%2BqfiGPi9Wh8dw3qt%2FylkE27hWX5w5XPuxB9GlvLnS0fAVYwvRKVODUrB%2FAdDCnYSEsaX2dAMrIOYM1KWVkpimiekfhQ%2FpUafT4YMg8qynL43Hv23x1W%2BX%2BaDxrb7Lh&X-Amz-Signature=f7841fa99cf8908768fcd505f622a5738ef047ab94b0dc4fc34ec5b5eb7daf24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UY3SW3H%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T061324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FlBbWBIaiVlejgyY6Iv2Ky16GEwdPb9gJMZTWTvaheQIhAOk%2F2wXGPfOTF5bzMK5oku0Z%2BWJ5xJ0uK7%2FNVKNO7hfJKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy8zzVhQtPM4P6wW%2Fcq3ANDyTbCrj96kvHS6KqNbnvDx4RyalPoTNrAehbwJjMSoVubIzQSIXjCrK3yIVanED67Vph0BIni%2BhTEuplM0riI6xWgIgSi2iDKdNGVTGYj0eK2D%2Fo5faDeVZr%2BCUSvniiAll4KcXMfVgKOWleACgA%2F%2FtJnC5anrMg28N6oFM5gLjWurupXBeiWvpMOXDZeesWHz4zwyskDoeZzRHpHQ0n6N%2FMiDA%2FyH9VYoQJOApp6CCNn5PSnF2OrQv8rW3jHw7gq2ggkPD0I7Bg%2Bbvz6FcEY5P2x4rXLWoNFK5gHfGzcVBx8MZs5ouhlSoFSCrY8wX2msMjYjQoujp9nBzxyaaS%2BE9w1CmHhZPAL%2Bu0gWmOTG3%2Fh1B0%2FFtsZKWVSj0J%2FX%2B1obGOe7rE%2BpfncHg1PSsQwCRjNymeh6VB2I5vs8sCAHoTq%2BXT0T%2BZXbfYYZ%2FqGWDMidt5WE6iqw8sC0Wgfzd9pZmm7H3v5UjoEDxf25FlOOWWJpdE0xkHHQ52IhQd%2FRHKZb4ZRiwlFyHV1TKUZ%2Bm532gxfgoK5DRtlwhMYbF0dJRahWtt5QRA%2FPP0K68D0Goh5IGi6s%2FOZgBy318%2BdZmGev9OREhGU0RkMdVTFUzBC%2FDN%2BSfmCIwHGp5EVJTDpo8nCBjqkAd8nHMtLf1wlRvIOipsL61cEBTM9MtANQgDAIAZlSHdpp356%2BXSkA2l7HvNqY28XpUDeo5YXUsX6hG2y3bKHMVvoSoTH9N%2BqfiGPi9Wh8dw3qt%2FylkE27hWX5w5XPuxB9GlvLnS0fAVYwvRKVODUrB%2FAdDCnYSEsaX2dAMrIOYM1KWVkpimiekfhQ%2FpUafT4YMg8qynL43Hv23x1W%2BX%2BaDxrb7Lh&X-Amz-Signature=44b23094706dd4e4ad7c21b85a78ef6f86d83339b9d50c2c270679c9c33d4532&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UY3SW3H%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T061324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FlBbWBIaiVlejgyY6Iv2Ky16GEwdPb9gJMZTWTvaheQIhAOk%2F2wXGPfOTF5bzMK5oku0Z%2BWJ5xJ0uK7%2FNVKNO7hfJKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy8zzVhQtPM4P6wW%2Fcq3ANDyTbCrj96kvHS6KqNbnvDx4RyalPoTNrAehbwJjMSoVubIzQSIXjCrK3yIVanED67Vph0BIni%2BhTEuplM0riI6xWgIgSi2iDKdNGVTGYj0eK2D%2Fo5faDeVZr%2BCUSvniiAll4KcXMfVgKOWleACgA%2F%2FtJnC5anrMg28N6oFM5gLjWurupXBeiWvpMOXDZeesWHz4zwyskDoeZzRHpHQ0n6N%2FMiDA%2FyH9VYoQJOApp6CCNn5PSnF2OrQv8rW3jHw7gq2ggkPD0I7Bg%2Bbvz6FcEY5P2x4rXLWoNFK5gHfGzcVBx8MZs5ouhlSoFSCrY8wX2msMjYjQoujp9nBzxyaaS%2BE9w1CmHhZPAL%2Bu0gWmOTG3%2Fh1B0%2FFtsZKWVSj0J%2FX%2B1obGOe7rE%2BpfncHg1PSsQwCRjNymeh6VB2I5vs8sCAHoTq%2BXT0T%2BZXbfYYZ%2FqGWDMidt5WE6iqw8sC0Wgfzd9pZmm7H3v5UjoEDxf25FlOOWWJpdE0xkHHQ52IhQd%2FRHKZb4ZRiwlFyHV1TKUZ%2Bm532gxfgoK5DRtlwhMYbF0dJRahWtt5QRA%2FPP0K68D0Goh5IGi6s%2FOZgBy318%2BdZmGev9OREhGU0RkMdVTFUzBC%2FDN%2BSfmCIwHGp5EVJTDpo8nCBjqkAd8nHMtLf1wlRvIOipsL61cEBTM9MtANQgDAIAZlSHdpp356%2BXSkA2l7HvNqY28XpUDeo5YXUsX6hG2y3bKHMVvoSoTH9N%2BqfiGPi9Wh8dw3qt%2FylkE27hWX5w5XPuxB9GlvLnS0fAVYwvRKVODUrB%2FAdDCnYSEsaX2dAMrIOYM1KWVkpimiekfhQ%2FpUafT4YMg8qynL43Hv23x1W%2BX%2BaDxrb7Lh&X-Amz-Signature=875f9420c7392d7d21131c4d283addc5025832a066bbf53d6f9cc52c97ecaf55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2TKXVE6%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T061327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH6YPkMLOf6kWZLlzd3Xx6%2FubThzzrlUvFKWonTAopTwAiEAzQGZO00V2TleYnyjqic4fv8%2B6F%2B9vpXu8jSYdGN9g5gqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDArhfmgKtJgqIoxAuSrcA2%2FLBgnukZmrnR1Zf5k7WvmnDR0wronCMB8QbCxFET3bzw2cONK1K71RA3wIIcef9UZ0PyrzWRuK2vJAbhHsPKY%2FxfBBfW13rNQE4lUBRYd%2FMBhOPlHNeqpnw6h%2BMSKPegNlROB8GlnpnAU03ywwVF9zzLjRWg%2BlV%2BcbO1O2LsRtUJnD3rlPEgeBifHy%2Fhz5zI2oA8%2BLwfb5Y147NZdZjx0WKT5JpAoUsBzJij4geRq8ZCLCrsqLhH%2Bv9iHRguHvoZFsM2hdr0NAIF2TuOHFy6Ucy1LcrLnfw%2Bq%2BQtLgDGYMIzXuvAr%2FaY3MMqJSJmi5q4DfcQ1ZWY7mBBdo%2BfpS26E1aKHYz%2F9cingIGdl1pQJFftSUNj0ZPaLWuIpBmDBekWL1v1QpwNp%2FlO2yiUus2PKF9xDaXN0%2F%2B%2Bi%2BsV1Bp6G4P0H2YoLotrkn0TRfR%2BgMibUyGKqdAtF2%2FjSgqPyBbakF98MK277hbILkRLLT5cbTRyEQLZLILInGtqjKp7r4iks5fAw2hQK13Up99m6y1V8nsX3WZjZYfegDCae8dt%2BGF5kXw0nlv9uHcIgRsRb2H%2BusgtBmm9%2F6QzcI8rXTAfPtxbuCyO9upjH5BUj6uIrIerzuSXlK%2B69gsLqyMJakycIGOqUBhWvvU%2BEJN2%2B7mYdtHTOpITlOsbXveq5iJHVWN89L2YmUT0rRWOREQ0c9ZTztcx7IT7%2BoN6zdEqUyJTQyawCAks9kbj2d%2FOWRD6lR%2FGVOivxh3%2F04ADVx%2BV72p8F%2FclCLlO9N6Ac88uu5L6Z5P2MhTXZYbLLd7V8d1y%2FpEE7T44Pf7KKHNIbYYSGTs5gi8qCMM0EEhi2Y57%2BGSJwZx3De%2Fc%2BpOBYR&X-Amz-Signature=f539cace8d3fdb4dd6446023b9435a84681394216619a7ea2b8d3508342f1f5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYTZNFV4%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T061328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8E3SB63N9j8pLjwnYf1aNv16E%2BrZ%2B8gtpezI%2Fbw%2Bj8wIhAMmf1Kp4SbnvaJkEwZCLM0gVrSjwMInoXcObKdLoMmNxKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxPO5oCJC%2FTbE0JG4oq3ANZVgRCDMH4Cx55Qye375PpZ%2F8yDovJa2FZyR4%2BIO2YP1RrysbcKdFxX8q%2FCEdz5rB5qla6cgBP2TFKSLW8kHMFfClk0XYQNciTg5nIm4KQBD2pej%2BcwVXqtWc3lMtQu6MHzd5JMazLzRnWXgzUiYlFf5eLDN782Ialcs6b1NkJ11l5zDk2CxBirbJIPKicz1A5S%2B2VkKs2K5vcgSyOxr6Ris9%2BcHLKiaoDJRLbcsyabE9WKmjyru6m4vhvVENgjTqo15U6zss%2B6JS4g8e1HOWu5Qx5dmgIMqXMe%2Fff0oqmL%2Fka0YnHMjEHZj3NsK0E59CANkt8JuNyoOaVStVpB%2F0hgw%2BXZFqxg3G5O77PstJ%2B0wOPKE3y0t58DSMfXKYIIz261fgKg9dIy0jI3sL6UQqL0aGU9DUfLYr%2BhWg9Sx5N8H%2FVirMRZ3Mhn%2BnhQHB%2BsSW4H2nTzSONmCz3BYyqs8tnLbE2hUV2dGw378IbUuNG8tJdr3Q6uD%2BqPtPvOkAGlaezESBZsfojCIFY0GghHFYI062mOCeGCqN07X79DU9uAUwIlaGi1IbX0b7%2FW%2FnD66QhZmAcfthMRgxkr6kf7dfN1MdB7VDaUB1a5yedEaznOMCU6Tay8H8eFaGeBTCCo8nCBjqkAR56sLPh4M8E%2BZ%2FTF0nFOz4jY7CmepI3wAYF4OuV2HcZgR2%2FgTdGeuY%2BmblHgyP7SkbmUFc8OAqVLWSF3l%2BFQqq10JpSkOi46I6UKkE%2BsN50w6Q6Jr9lg6CW40hPPn0WlqOwAJUhQYRe4g7zWNknB7I1bm2Us1cCRw4zWVicjU3snobFghNARG2BNTOh1XllqrEbXDU4XfVBG1X6dP1cMCzh%2FVZf&X-Amz-Signature=c5836cb7e26082c9fba42704b0b35c39f9f71c765ec922cdb8df04068ca5009f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UY3SW3H%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T061324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FlBbWBIaiVlejgyY6Iv2Ky16GEwdPb9gJMZTWTvaheQIhAOk%2F2wXGPfOTF5bzMK5oku0Z%2BWJ5xJ0uK7%2FNVKNO7hfJKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy8zzVhQtPM4P6wW%2Fcq3ANDyTbCrj96kvHS6KqNbnvDx4RyalPoTNrAehbwJjMSoVubIzQSIXjCrK3yIVanED67Vph0BIni%2BhTEuplM0riI6xWgIgSi2iDKdNGVTGYj0eK2D%2Fo5faDeVZr%2BCUSvniiAll4KcXMfVgKOWleACgA%2F%2FtJnC5anrMg28N6oFM5gLjWurupXBeiWvpMOXDZeesWHz4zwyskDoeZzRHpHQ0n6N%2FMiDA%2FyH9VYoQJOApp6CCNn5PSnF2OrQv8rW3jHw7gq2ggkPD0I7Bg%2Bbvz6FcEY5P2x4rXLWoNFK5gHfGzcVBx8MZs5ouhlSoFSCrY8wX2msMjYjQoujp9nBzxyaaS%2BE9w1CmHhZPAL%2Bu0gWmOTG3%2Fh1B0%2FFtsZKWVSj0J%2FX%2B1obGOe7rE%2BpfncHg1PSsQwCRjNymeh6VB2I5vs8sCAHoTq%2BXT0T%2BZXbfYYZ%2FqGWDMidt5WE6iqw8sC0Wgfzd9pZmm7H3v5UjoEDxf25FlOOWWJpdE0xkHHQ52IhQd%2FRHKZb4ZRiwlFyHV1TKUZ%2Bm532gxfgoK5DRtlwhMYbF0dJRahWtt5QRA%2FPP0K68D0Goh5IGi6s%2FOZgBy318%2BdZmGev9OREhGU0RkMdVTFUzBC%2FDN%2BSfmCIwHGp5EVJTDpo8nCBjqkAd8nHMtLf1wlRvIOipsL61cEBTM9MtANQgDAIAZlSHdpp356%2BXSkA2l7HvNqY28XpUDeo5YXUsX6hG2y3bKHMVvoSoTH9N%2BqfiGPi9Wh8dw3qt%2FylkE27hWX5w5XPuxB9GlvLnS0fAVYwvRKVODUrB%2FAdDCnYSEsaX2dAMrIOYM1KWVkpimiekfhQ%2FpUafT4YMg8qynL43Hv23x1W%2BX%2BaDxrb7Lh&X-Amz-Signature=24c20255c6e972f0f05e154d773f803b8164e4ef868a638e49ee5d420f349f72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
