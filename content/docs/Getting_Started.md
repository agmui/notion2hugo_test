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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y53JKKNO%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T121643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDccqy1lRfpJuI2WyPHWEWoWYbcHEkYgVgg0hTcWNFVnAIhALebDtA9mczf6diTUOQo%2F89M29ZatQcemESsGvMUk3R9KogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzDTxNwGJ1uo6byuXoq3AMjXsMLQRC427nIXBrcmbPPuKvMT4rFmDcOp5zdJXzwwEDttrGlH6%2FJA1KiAiYPT2afJy7gG2ei81e5slc6MgJpniaqfzq%2FsbtDkP%2Fz4YgqHl599WluXIWGIcHp85EM0hVyOz6OE0IR8LQ8LGfOGEeH9KarbT1G%2BAuL5nIP3Uouovwgvsh2YzlTld3%2FOVEzpfWOGUieUFRdrErK4PGpEjT6wP5ps16BzPiltnOfY5KqXspQ9TTQxZUaIKFI1YU0BKdcF0MUNHsT6ipOnfpInxpQ0YrRTn4fXdaMEob8XzG66ar1EQyHEzB1VujLix5%2FiD7%2Flv2%2FicYosETvedVEXJnAyQvRcnTfY0tuDVVSBLnTVGiZTDLThPyZHZbeG%2BQvFkxdUcDhFa2mv2nW9nMK4ycPNI9iDVquYtKl7raZr9S6%2F94MJFp1fa26AzLUZWEx4wSlX6x4DPZMKanVCtpdLOwYm3ie7Ldap9IgfPyElfdCsGzpN4HekPL2hDjESv2viyHe1JpRCOocWoGrHDIjHm9Pz5C04zW5ZCsSOTO9gjlUVaVhSIwyJQxTsU989j2%2BGRVJ6ynkF0CRojBYG4IKctWf%2FLHCxA2GMLCHgRJtzE9A7pwFPwBK5DDDTOSxCjDV%2FbPDBjqkAbseQfZIItZMJNIbQvmChR1ewR4c7u1%2FYbV9i8DHlBFxT0EIUOhXZjALmSd8eIPmdghOpipaxywYUBKTGjAi%2Bm2UbIQrU%2FoG3OTXtI0Ff1NC2iXplSBXQU4MBpUW928EST7F1trvJyTRfDS6cvpWlRMXWBJcguJWl5Qb4%2FKT%2FDt%2FjrgbKJEMtWQvsdZHC6PhHf%2FDLeA%2FTxRVdc6Rp3yrkQMlooo2&X-Amz-Signature=2e8aa2d375806a99b5c1534236633512f7e7fc7e5ce981228fcd0607230ca7d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y53JKKNO%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T121643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDccqy1lRfpJuI2WyPHWEWoWYbcHEkYgVgg0hTcWNFVnAIhALebDtA9mczf6diTUOQo%2F89M29ZatQcemESsGvMUk3R9KogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzDTxNwGJ1uo6byuXoq3AMjXsMLQRC427nIXBrcmbPPuKvMT4rFmDcOp5zdJXzwwEDttrGlH6%2FJA1KiAiYPT2afJy7gG2ei81e5slc6MgJpniaqfzq%2FsbtDkP%2Fz4YgqHl599WluXIWGIcHp85EM0hVyOz6OE0IR8LQ8LGfOGEeH9KarbT1G%2BAuL5nIP3Uouovwgvsh2YzlTld3%2FOVEzpfWOGUieUFRdrErK4PGpEjT6wP5ps16BzPiltnOfY5KqXspQ9TTQxZUaIKFI1YU0BKdcF0MUNHsT6ipOnfpInxpQ0YrRTn4fXdaMEob8XzG66ar1EQyHEzB1VujLix5%2FiD7%2Flv2%2FicYosETvedVEXJnAyQvRcnTfY0tuDVVSBLnTVGiZTDLThPyZHZbeG%2BQvFkxdUcDhFa2mv2nW9nMK4ycPNI9iDVquYtKl7raZr9S6%2F94MJFp1fa26AzLUZWEx4wSlX6x4DPZMKanVCtpdLOwYm3ie7Ldap9IgfPyElfdCsGzpN4HekPL2hDjESv2viyHe1JpRCOocWoGrHDIjHm9Pz5C04zW5ZCsSOTO9gjlUVaVhSIwyJQxTsU989j2%2BGRVJ6ynkF0CRojBYG4IKctWf%2FLHCxA2GMLCHgRJtzE9A7pwFPwBK5DDDTOSxCjDV%2FbPDBjqkAbseQfZIItZMJNIbQvmChR1ewR4c7u1%2FYbV9i8DHlBFxT0EIUOhXZjALmSd8eIPmdghOpipaxywYUBKTGjAi%2Bm2UbIQrU%2FoG3OTXtI0Ff1NC2iXplSBXQU4MBpUW928EST7F1trvJyTRfDS6cvpWlRMXWBJcguJWl5Qb4%2FKT%2FDt%2FjrgbKJEMtWQvsdZHC6PhHf%2FDLeA%2FTxRVdc6Rp3yrkQMlooo2&X-Amz-Signature=cc29e4abc54f6fa0b6d5addb39ea19a9b92d1900babf4a5422693a1f0a944927&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y53JKKNO%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T121643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDccqy1lRfpJuI2WyPHWEWoWYbcHEkYgVgg0hTcWNFVnAIhALebDtA9mczf6diTUOQo%2F89M29ZatQcemESsGvMUk3R9KogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzDTxNwGJ1uo6byuXoq3AMjXsMLQRC427nIXBrcmbPPuKvMT4rFmDcOp5zdJXzwwEDttrGlH6%2FJA1KiAiYPT2afJy7gG2ei81e5slc6MgJpniaqfzq%2FsbtDkP%2Fz4YgqHl599WluXIWGIcHp85EM0hVyOz6OE0IR8LQ8LGfOGEeH9KarbT1G%2BAuL5nIP3Uouovwgvsh2YzlTld3%2FOVEzpfWOGUieUFRdrErK4PGpEjT6wP5ps16BzPiltnOfY5KqXspQ9TTQxZUaIKFI1YU0BKdcF0MUNHsT6ipOnfpInxpQ0YrRTn4fXdaMEob8XzG66ar1EQyHEzB1VujLix5%2FiD7%2Flv2%2FicYosETvedVEXJnAyQvRcnTfY0tuDVVSBLnTVGiZTDLThPyZHZbeG%2BQvFkxdUcDhFa2mv2nW9nMK4ycPNI9iDVquYtKl7raZr9S6%2F94MJFp1fa26AzLUZWEx4wSlX6x4DPZMKanVCtpdLOwYm3ie7Ldap9IgfPyElfdCsGzpN4HekPL2hDjESv2viyHe1JpRCOocWoGrHDIjHm9Pz5C04zW5ZCsSOTO9gjlUVaVhSIwyJQxTsU989j2%2BGRVJ6ynkF0CRojBYG4IKctWf%2FLHCxA2GMLCHgRJtzE9A7pwFPwBK5DDDTOSxCjDV%2FbPDBjqkAbseQfZIItZMJNIbQvmChR1ewR4c7u1%2FYbV9i8DHlBFxT0EIUOhXZjALmSd8eIPmdghOpipaxywYUBKTGjAi%2Bm2UbIQrU%2FoG3OTXtI0Ff1NC2iXplSBXQU4MBpUW928EST7F1trvJyTRfDS6cvpWlRMXWBJcguJWl5Qb4%2FKT%2FDt%2FjrgbKJEMtWQvsdZHC6PhHf%2FDLeA%2FTxRVdc6Rp3yrkQMlooo2&X-Amz-Signature=c5c63dd1644be5d548016f11420bd2acb78f81a41696f4cb1a59ad82154e0b44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VICEXNZW%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T121645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPq%2FzVetc0bDyu2W7ttUuUqTEanmv22E7%2B60tAbNMjTwIgTP0FjCElVuhIVuPSsG%2FHmEvBbummGJr1PY6YH%2Fewex8qiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC3PeDukiN3R9YyNSSrcAyVFe88Gpz1nZiXnfYw9KKMH9OVSYIL2b53ivaSsS0xxL30af%2FS6zhw67oeeawqFcdN8C4WdNzU%2FPsfum3CjiapKgY71NZ7jsbzdjp%2FZQMNuk20FpDjdEOn9%2Blfd059FnuO2x4la%2BhTyCwshyCxikV4v%2BFhpCCRPxRlmkHFVaqrW8QdbuJrkqG4Ma6OsNn%2FgRDBBOzsDRJjoYZS%2BXiAH%2FTfSz7TcQ2pXQPLjX4IenVocznY%2Bt%2BPvukMMz3Qnf7dh7P0bOdc12lfxPhc7Y%2FY%2B0XUMOQ%2BHov4jXl2lKIc6NQN%2BDutehYtisPZf0JSErqAmbViehphF%2BC6qqO2wIC5pVqsonM5SQXbOWfhF86z90YG8unFzyKEFD34Fkrb5%2FqOjSEnmuy48DkubpoclRB1w1AjplOgCgEF0Xwwa7RtPUMFCh8EZxoiAYx1D4L%2BNrQzIFxDFdOsA5WphkS%2BI6opNp0Zkjqgvf6RKBb1monBNHZHoPA2ZpmmjrnzOFmrOZ%2FdB1%2B0WAbT1qZQa93BEQhLB%2FLFQgne3ilbzNw9HH%2FascmiaoY5bYq9Z%2BhoeeZMmhsK39ciWVycweIfmD0jKTPrlA5mh%2FhFD0Gf01%2Buxplep9ta3wXnMpYL%2FlqlPBJHKMNP9s8MGOqUBI7RQp6VFQZeTFbiFspVPHznoe8hyn6fOG8hIx1KlO0g4h4v12%2BdzLiWcXWDsUsJFD5S30fyPVCeWolttg1zO7EDlegSmQRmbPDIJ1zBJPbpltcl%2FBAdmV6cYoerbOIizdpMgBf6jvXq3qWndMnbuUBjyDr4dxf68PpTn2Zyj0RAt%2BsaAYL7XcoB%2BpnT4qKSSu2N8ShUHS%2FAagjNfpCVG%2FQ5ykUEE&X-Amz-Signature=9c611a951fc7ef51b8ef48dc4aea884cc13427ac7c96e1b5ed4fb0b6014bf4c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QW3RLXTG%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T121646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIElUTZPH%2FUCPEjakKgEE7Gk5FoBR%2FkN74SlpS97%2F42RRAiBXMI0jqoSB7yIyv2ItKqD%2BLgWPxAtDkGM68LwNsuFQ%2FSqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKQiVNYkD18rd6WrOKtwDIixlHlkEBUf%2Fgcs2%2FKBbU745ugZyjp2pSsbWZaekyjgWbR3gJe32rKHRbn8b4ORmEAWdjSmlV5D63B2cIcH12oIuZrTnREf0uCAkYmc2ZwntHPOSNAuvot6B6b4zQZE6eixoq%2BOUepS2wgdeYfGQeAbRY3cL9n99C605h8umnDQodeGeqA%2FPpZiJ4OlmNCPbB9SvRIfvZ4Umv0xO1SS%2FIoex4%2BSeqiQ239XCMixzwpkUIOqvLCqsXCte87v%2FIy5FwbM8S%2BX1vOr9pMdAZVBRf2%2BVniz%2BqjjbJdTb0kELY0WK4ajY%2BIZbkvI0ylWcH4jeCgjVpI2WPi0gK0MU6McwS3%2Bu80hkR7aox64weJB7MUS0bDaiGGj2ezm%2FbV3RPpUsyj7BxyYX%2FMBmeog87lZur13RUO8adpxdGTS%2F0RctYUyLYPaUN1WaTP59704YL37GN2uPzpFcR4G1Xe8LpbvELmnXD2yzoOsxBZRo0uIYpRPsVzM6fJIJ0hjCQIbchpdIxLk7ux3bLUAz40nxOvBr3BbhDeBZbtvNgJMxs%2FzyROqc4vAUWBV3zuNkABqNPAx6OzBsf%2BAvkE7FaekK2Sz4CuwKRMpa4Pftv4kx5CiktbVrTO053dVs04Guyg8wn%2F2zwwY6pgFN%2FSNL2Eka3dnRR6pGNJvgyCU99H9n2e7REBahiufeJ2DoimXlPiuaKgexoxlAX%2FvT%2FdSl4e%2FEZLcxb2mU2VBTAdZ%2FgeGwjsYQygIQVOC6Ip0ut8kENo4Ceh58oQimeD21M2ro29U2aWRkrG9fgfPoAyrWIkAbxGRgjHUT%2FdenrHSWQ9vbIsKVjdDH133ViN7kT4QVk%2FA5LoYAsoMUThd5cvNKU9Wi&X-Amz-Signature=9d928c251ddfacde3b18d067706ccc9ba57440a2f84aaf1e286f33054cb452be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y53JKKNO%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T121643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDccqy1lRfpJuI2WyPHWEWoWYbcHEkYgVgg0hTcWNFVnAIhALebDtA9mczf6diTUOQo%2F89M29ZatQcemESsGvMUk3R9KogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzDTxNwGJ1uo6byuXoq3AMjXsMLQRC427nIXBrcmbPPuKvMT4rFmDcOp5zdJXzwwEDttrGlH6%2FJA1KiAiYPT2afJy7gG2ei81e5slc6MgJpniaqfzq%2FsbtDkP%2Fz4YgqHl599WluXIWGIcHp85EM0hVyOz6OE0IR8LQ8LGfOGEeH9KarbT1G%2BAuL5nIP3Uouovwgvsh2YzlTld3%2FOVEzpfWOGUieUFRdrErK4PGpEjT6wP5ps16BzPiltnOfY5KqXspQ9TTQxZUaIKFI1YU0BKdcF0MUNHsT6ipOnfpInxpQ0YrRTn4fXdaMEob8XzG66ar1EQyHEzB1VujLix5%2FiD7%2Flv2%2FicYosETvedVEXJnAyQvRcnTfY0tuDVVSBLnTVGiZTDLThPyZHZbeG%2BQvFkxdUcDhFa2mv2nW9nMK4ycPNI9iDVquYtKl7raZr9S6%2F94MJFp1fa26AzLUZWEx4wSlX6x4DPZMKanVCtpdLOwYm3ie7Ldap9IgfPyElfdCsGzpN4HekPL2hDjESv2viyHe1JpRCOocWoGrHDIjHm9Pz5C04zW5ZCsSOTO9gjlUVaVhSIwyJQxTsU989j2%2BGRVJ6ynkF0CRojBYG4IKctWf%2FLHCxA2GMLCHgRJtzE9A7pwFPwBK5DDDTOSxCjDV%2FbPDBjqkAbseQfZIItZMJNIbQvmChR1ewR4c7u1%2FYbV9i8DHlBFxT0EIUOhXZjALmSd8eIPmdghOpipaxywYUBKTGjAi%2Bm2UbIQrU%2FoG3OTXtI0Ff1NC2iXplSBXQU4MBpUW928EST7F1trvJyTRfDS6cvpWlRMXWBJcguJWl5Qb4%2FKT%2FDt%2FjrgbKJEMtWQvsdZHC6PhHf%2FDLeA%2FTxRVdc6Rp3yrkQMlooo2&X-Amz-Signature=38021215a932d188bbf610527237d35448720ec7ad0bd84d0e3e18c56d5d6489&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
