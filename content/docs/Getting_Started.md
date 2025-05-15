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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBUX3XKY%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T140855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQCAWG5iEy6MJGlFKl1Iag82y80tJrdA3YuGhaOy8UDSwgIhAPRMZpujOz1XUDwJXw9HV25NXEaHV2%2FsaBOrTwruyoRFKv8DCC4QABoMNjM3NDIzMTgzODA1IgzeZzZ4%2BiIIDYPBvQwq3AONNUuVrDP5OaxK6WAi1YDHY44QtlcCi%2FzTnKcQlgFUXbP7lhii2fPPoPSFV9DTPavAFL%2BAw0s9Zwnv5cSzsPvtjZ2Z6jb%2Fh4FzjuHDinzH8nBRA4V4xc6rjeDLffVV8S4XSsykYWLCxQKo6sN6NKdXtl6%2FEwyMsYsOkUSQes01dGHwKJWp00PDJ2zf%2FVaS3EY42NnWdntGonkWNJeORrULXq%2B6h0l489DnVP7H86tpmxHBQqG1k7V5hb3Zc9n1IuFp1ucjfua%2FBexkWGiidPGIx1FwtUSl1VxIA8OQjOSpMH4uir8w2GO6IPFcqStcDRoOsMV%2B7VLkK5ut07L1VMkEFRNFndElBbf9hZ75FeQSLNFDt56DcvB89uKu7N%2F2HWMDCZNAEqrHEynqlP%2F2tCGGW502lQBz6rm6A4AxLo4w37mDa2MskcRku4dtDJyfNvllRdA8P7nPNAOghNaO59Zwuv4nijQnYG35V4lcfe4v1rPPuJyIVvrBIyrUzQBsvN4nXExRU1RzuLHJFkA1IzKvG7%2Bh9mx0tmbFekdyrJ%2B5am2UuBwFyhHQPkE55EKyc8Bq6rUfJvgDqj5vXT%2BclMPjEf4%2F0ci2oRzqpdRcPxAowjyTzhI4CIvI8xit9DCq1ZfBBjqkAf%2Fpv4WoZatswC4Hwjlqf32GUtG4ufKmSSwivRR6AX1W%2BadFydb3MTEGfnBu9L3CYvUL%2FUdqOM%2BL%2FNzG7cOVvWKbqWCG9%2Bnc3YcNK8HQagFOLW5XnGZ1Kx8ORTf6738NenjhkSRFbfMk78yxRTGvQ90NdQrscQsLuQaF1s6srTRpNEgFOOYwHsWp%2BaMuibM2%2FhcHZDWYW0LfvKcUiFNDVxc4Yz5n&X-Amz-Signature=501b859d43cfcc9f6cba2cc1b577a7fa36b397c60659ebaf04e300c089cbe2a2&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBUX3XKY%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T140855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQCAWG5iEy6MJGlFKl1Iag82y80tJrdA3YuGhaOy8UDSwgIhAPRMZpujOz1XUDwJXw9HV25NXEaHV2%2FsaBOrTwruyoRFKv8DCC4QABoMNjM3NDIzMTgzODA1IgzeZzZ4%2BiIIDYPBvQwq3AONNUuVrDP5OaxK6WAi1YDHY44QtlcCi%2FzTnKcQlgFUXbP7lhii2fPPoPSFV9DTPavAFL%2BAw0s9Zwnv5cSzsPvtjZ2Z6jb%2Fh4FzjuHDinzH8nBRA4V4xc6rjeDLffVV8S4XSsykYWLCxQKo6sN6NKdXtl6%2FEwyMsYsOkUSQes01dGHwKJWp00PDJ2zf%2FVaS3EY42NnWdntGonkWNJeORrULXq%2B6h0l489DnVP7H86tpmxHBQqG1k7V5hb3Zc9n1IuFp1ucjfua%2FBexkWGiidPGIx1FwtUSl1VxIA8OQjOSpMH4uir8w2GO6IPFcqStcDRoOsMV%2B7VLkK5ut07L1VMkEFRNFndElBbf9hZ75FeQSLNFDt56DcvB89uKu7N%2F2HWMDCZNAEqrHEynqlP%2F2tCGGW502lQBz6rm6A4AxLo4w37mDa2MskcRku4dtDJyfNvllRdA8P7nPNAOghNaO59Zwuv4nijQnYG35V4lcfe4v1rPPuJyIVvrBIyrUzQBsvN4nXExRU1RzuLHJFkA1IzKvG7%2Bh9mx0tmbFekdyrJ%2B5am2UuBwFyhHQPkE55EKyc8Bq6rUfJvgDqj5vXT%2BclMPjEf4%2F0ci2oRzqpdRcPxAowjyTzhI4CIvI8xit9DCq1ZfBBjqkAf%2Fpv4WoZatswC4Hwjlqf32GUtG4ufKmSSwivRR6AX1W%2BadFydb3MTEGfnBu9L3CYvUL%2FUdqOM%2BL%2FNzG7cOVvWKbqWCG9%2Bnc3YcNK8HQagFOLW5XnGZ1Kx8ORTf6738NenjhkSRFbfMk78yxRTGvQ90NdQrscQsLuQaF1s6srTRpNEgFOOYwHsWp%2BaMuibM2%2FhcHZDWYW0LfvKcUiFNDVxc4Yz5n&X-Amz-Signature=fa6c9cea091962575b6ed015cf34953e3eca1ef725439a6ffd6e70b1bf53ba3d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBUX3XKY%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T140855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQCAWG5iEy6MJGlFKl1Iag82y80tJrdA3YuGhaOy8UDSwgIhAPRMZpujOz1XUDwJXw9HV25NXEaHV2%2FsaBOrTwruyoRFKv8DCC4QABoMNjM3NDIzMTgzODA1IgzeZzZ4%2BiIIDYPBvQwq3AONNUuVrDP5OaxK6WAi1YDHY44QtlcCi%2FzTnKcQlgFUXbP7lhii2fPPoPSFV9DTPavAFL%2BAw0s9Zwnv5cSzsPvtjZ2Z6jb%2Fh4FzjuHDinzH8nBRA4V4xc6rjeDLffVV8S4XSsykYWLCxQKo6sN6NKdXtl6%2FEwyMsYsOkUSQes01dGHwKJWp00PDJ2zf%2FVaS3EY42NnWdntGonkWNJeORrULXq%2B6h0l489DnVP7H86tpmxHBQqG1k7V5hb3Zc9n1IuFp1ucjfua%2FBexkWGiidPGIx1FwtUSl1VxIA8OQjOSpMH4uir8w2GO6IPFcqStcDRoOsMV%2B7VLkK5ut07L1VMkEFRNFndElBbf9hZ75FeQSLNFDt56DcvB89uKu7N%2F2HWMDCZNAEqrHEynqlP%2F2tCGGW502lQBz6rm6A4AxLo4w37mDa2MskcRku4dtDJyfNvllRdA8P7nPNAOghNaO59Zwuv4nijQnYG35V4lcfe4v1rPPuJyIVvrBIyrUzQBsvN4nXExRU1RzuLHJFkA1IzKvG7%2Bh9mx0tmbFekdyrJ%2B5am2UuBwFyhHQPkE55EKyc8Bq6rUfJvgDqj5vXT%2BclMPjEf4%2F0ci2oRzqpdRcPxAowjyTzhI4CIvI8xit9DCq1ZfBBjqkAf%2Fpv4WoZatswC4Hwjlqf32GUtG4ufKmSSwivRR6AX1W%2BadFydb3MTEGfnBu9L3CYvUL%2FUdqOM%2BL%2FNzG7cOVvWKbqWCG9%2Bnc3YcNK8HQagFOLW5XnGZ1Kx8ORTf6738NenjhkSRFbfMk78yxRTGvQ90NdQrscQsLuQaF1s6srTRpNEgFOOYwHsWp%2BaMuibM2%2FhcHZDWYW0LfvKcUiFNDVxc4Yz5n&X-Amz-Signature=220a59cb0f7d43b983354ea1ac81d8eb27e55c8d29afff13c59c2a65f60bbd9a&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWQ2OVBF%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T140900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIH%2FGticROPf6niK09S0thIQ4ezNbjXgX4%2BjSKcvp33pbAiEAmTt2J9PwuJgvL8dFEPH2Xdkpy82lobwPVFM5JXC5VXIq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDIpgEJZIUNHhcQevMyrcA7NJkxJtUrcdDfdY%2BqxPe7oQ%2FRbBhp4dSWRD93r9TAir3KtZMLdGmnbmfW2%2FeD7OSaVF6dqNfcuLl%2FE0BjPnOryqiv25VdTlzM8dg1SNmsZ%2BbBIs8WLuHg6jYPvUAIHgDJbuSwk6uL8r%2FZWRkj42x8mPOXsjuHjWVKV%2FHYyxnReRT3Td9xAfIBXnunTYH0RGhlMyCLBKhRyr4Wmle52qcQ7tL9ifcdOvCiWKtr4nTIUjzd3OOheCDUUod0sAuK4S7p1Gf2baAaZwfqvUERrwCSoSuoh4ftou8h1pQWnZ1YVANXqE8daEfVcfomU7%2BSE95iiHTycbdv9iCpmW4f0Y9Dxg9rptRxCxOr0w3yk1R3Tuhr9er5mfgR1FmwlxA48Chz%2Bpm%2F9HMV8ljeiTjs%2BYYOSYYxPpYiLAWJdbZJVvvGBZL2fTUzbA0CUJIfVl7JahnEVilzt%2FTdnm%2B569Kzp1gk5dxPfqp%2Bt5fSrn7F9UofUoIL7JS7ThrZcgRIDWm6owcxFeEcrE3LflZxCubpwOsnMuYtE2aI5Hl0317AYQ4Mith2PYhhLqdqO34r9Dl4M13H3h1JAhJVvMI25rbeQ043oEEnclwPf2UWxTN1a7aXCZFf5XS2MLndNQHJZkMIXVl8EGOqUBpdqNVEjtJL0srn7UB13%2B6Wc%2B4%2BpcAixOHqzeJc1%2BiU2C2dhjrWUMoJFIGAJU3SvKLjIl634PNTKJWKbpoZFjNE5Y2OuDZZAoFGktuhd2XY5AzJCcFbRdVUtD44mwg7kvhKD5MmJUiCpJg8IVJLDnxbX8fzMaxzFv5vudP3Czg8N04teVef7GZI2NDDxcbaDThHmsI8H0ImcSgQtzpo%2FGQlcFr1Qv&X-Amz-Signature=8901200ff0d1ac6e8769bd89ec5cf28691f1489a34b34b8af468dc55a0bfb0c1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEJ63XRZ%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T140900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQDooFPz3a%2BKNzXxyx0QkqUAPCDi6gxHZkgxDTtkNHx%2BtwIhANJfUoaYmsC7oS8oEEnnihLQW2ZCOuE8pT3Sp0DCL5c3Kv8DCC4QABoMNjM3NDIzMTgzODA1Igz76VSgBXTRTm0GRDMq3AObK4IUcYAk6dz5X9ENYZZrqZhwpvt9Im50X5tJj0bUvShXgY7%2BqJrTVlZRh8A4ApxAnvtaUHLSuQKYl16%2B2y9URJl%2F2Ojk8whmpRYlFj%2FGW6lxujgfRMoeUaTO7iegz%2FZ10Tg1aV%2BNvTt1ZE7UysM7dACa0YGWVFprR25vXjwinkXzRbHNzpbOg2mnCKKbG23Y0b37rJE6he25EXYtgIQ6j8e1NAiUcuX%2B3gCPaNRtMN7uBknOd0T5HmwrIHIbBJIw7p6UG1wQK1gdbubvoCmRuG7jGCUjrrPvQwxcJLoAl%2FElpykK9TdLeT3Y4Xnm6EyGWSrUPd7qVDrRhMW2NX7HlxB300i%2Brwh8qQoNcNmpSw%2F5q6ABNyri7txZlrQTzuIkKCHt%2B1z5KXo8pc0lbR%2BBwvS9oOW7dsVWEsgKxOLkh5KQWzc0WMagy1doRK8c%2Bm922%2Fq4TGt5%2FXcSCAhdH3lCL7l0S2J9rTJKc8Bn3fMIfgqYSke%2FyA0xs4REpF3LqcsefbBdt4HPhYUHgBj940JATR%2FtBobNX9U%2FPW%2BS0q%2F1xlMzxsZw%2FGYkIWGgrBYCbtIqObRtbzOUzjiyHGf%2F70Hr6mmDmhr1D%2Fyf7vcBie%2BASNPATwG9ba3UopFlOTCr1ZfBBjqkATCrs3vjlf%2BPwNPViR90sb9w8n8671HVF2Y02nf3crqmDk6BX0qUuc7UVgBBPNsx9EKbYr3fdETz2au6pCQzubpC%2BfcHuANvP1qN%2B8MzPLHG6D6dnsihekaiB%2BACfrpJCeZLfBBOfjj06p1enqfBieS9UU%2BdGZsiIoKkRk%2Bjy9aGeh%2Byeg3SVvt04nNRsWfIlusIj963d%2BNM1KKc0SluuWMlJ2q9&X-Amz-Signature=1284fb5d55435a0175f5bcb83f2fd71910995ffd39bd895dfde569e21866c996&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBUX3XKY%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T140855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQCAWG5iEy6MJGlFKl1Iag82y80tJrdA3YuGhaOy8UDSwgIhAPRMZpujOz1XUDwJXw9HV25NXEaHV2%2FsaBOrTwruyoRFKv8DCC4QABoMNjM3NDIzMTgzODA1IgzeZzZ4%2BiIIDYPBvQwq3AONNUuVrDP5OaxK6WAi1YDHY44QtlcCi%2FzTnKcQlgFUXbP7lhii2fPPoPSFV9DTPavAFL%2BAw0s9Zwnv5cSzsPvtjZ2Z6jb%2Fh4FzjuHDinzH8nBRA4V4xc6rjeDLffVV8S4XSsykYWLCxQKo6sN6NKdXtl6%2FEwyMsYsOkUSQes01dGHwKJWp00PDJ2zf%2FVaS3EY42NnWdntGonkWNJeORrULXq%2B6h0l489DnVP7H86tpmxHBQqG1k7V5hb3Zc9n1IuFp1ucjfua%2FBexkWGiidPGIx1FwtUSl1VxIA8OQjOSpMH4uir8w2GO6IPFcqStcDRoOsMV%2B7VLkK5ut07L1VMkEFRNFndElBbf9hZ75FeQSLNFDt56DcvB89uKu7N%2F2HWMDCZNAEqrHEynqlP%2F2tCGGW502lQBz6rm6A4AxLo4w37mDa2MskcRku4dtDJyfNvllRdA8P7nPNAOghNaO59Zwuv4nijQnYG35V4lcfe4v1rPPuJyIVvrBIyrUzQBsvN4nXExRU1RzuLHJFkA1IzKvG7%2Bh9mx0tmbFekdyrJ%2B5am2UuBwFyhHQPkE55EKyc8Bq6rUfJvgDqj5vXT%2BclMPjEf4%2F0ci2oRzqpdRcPxAowjyTzhI4CIvI8xit9DCq1ZfBBjqkAf%2Fpv4WoZatswC4Hwjlqf32GUtG4ufKmSSwivRR6AX1W%2BadFydb3MTEGfnBu9L3CYvUL%2FUdqOM%2BL%2FNzG7cOVvWKbqWCG9%2Bnc3YcNK8HQagFOLW5XnGZ1Kx8ORTf6738NenjhkSRFbfMk78yxRTGvQ90NdQrscQsLuQaF1s6srTRpNEgFOOYwHsWp%2BaMuibM2%2FhcHZDWYW0LfvKcUiFNDVxc4Yz5n&X-Amz-Signature=6bbbd4d1f545c9bd3babb4c7baf6d3778c88bfc857f9c4e82654e71f4a2238e9&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
