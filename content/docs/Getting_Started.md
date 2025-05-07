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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CNGVQFB%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T210742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICHObnqn%2BJPrkBa6%2FI9bViRaMhY1ZOcGYphuHmc3RloGAiAnpIHOH6hluRBb62ios3whOXZPtG5aI9sJmoULEKj%2FVCr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMgyd3HG%2BsV8Mbilm6KtwDkTgiJ2xplTixK6BVT%2FtzxobqJCwkbOlD2MDobYG%2BMNV%2BB7HwzeyRTAcomX%2BverBjoHzoYJNutuyX%2BrGzipUeUbC1bkc3OoPHaolv0UkaqzSHhhd6WfdLStKdY6Rcqy315hOjwAMJSudRMezZwS6XpGRxvXsy7rqEQS0mmUn%2BMBIE46yrvbk0UNZGgeTMGssTZj2lDmXENy6yBnFz9guotv%2B7vnELXu4DhCr0sSuLZ7vOGhse26JJuK%2B5HoNDI%2F7LoOgD6CKIerSHmPMxk3lRTmXFft9mYNK23cSaMcaYI8ska9IFaWrLqH%2BBOuddRzZ6cbufiVhJOPzLhvX2Uq2lxeVNeypq6F1XZepqj6p3A03A8YyEuEzvU8HTNcPnBkdYGdGAAU1%2BoJ1ARzNDtfIATgt7yoptYhxncDdLBgTNgSKFLFbIBt%2BHF9r3fd%2BK6OBSdS5f6b31lOkz3%2FdB8wwdUBzRYx7jdSAqKYPGkV%2Bc%2FRCZIpwohRtcnOzMj7j%2BjBL8tFsf2opDy3CzAy09lE9BY%2FL8aLHZ4ci55eG4sSgBTweOp%2FKET2DKdIk3Vql9SyEybg5TpZV2ZKzNBBUp0LJVe85%2BXjd%2FwAeg1XQDLhHv6eXqJhTUOv8bUEUOtgUwlo7vwAY6pgES%2BlCL5cpP608sT0xzAoj5PgV%2B8%2F4Bn0KRLC0sPAbVeH55G%2B2LZsMLA%2Bsmgp7lr96evvHRUB1GE990JAFMvPjcK1mHW6AMtCWQkHVVTvwCu%2FPjwr%2FaP4MEjW0vff8XlhRJBB%2F0weAwNel096KDrui2dvpsGZMtiBtXTXHCjCGx8YaBT7fG9jIOGwsfZ2hbXJveoFx1iLRc3UVnys1win%2F3CIj37Lxp&X-Amz-Signature=e7c60e8a98045ca3054cc6a7d58833ce9dcd6aec8612eada5d11747e3a81affa&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CNGVQFB%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T210742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICHObnqn%2BJPrkBa6%2FI9bViRaMhY1ZOcGYphuHmc3RloGAiAnpIHOH6hluRBb62ios3whOXZPtG5aI9sJmoULEKj%2FVCr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMgyd3HG%2BsV8Mbilm6KtwDkTgiJ2xplTixK6BVT%2FtzxobqJCwkbOlD2MDobYG%2BMNV%2BB7HwzeyRTAcomX%2BverBjoHzoYJNutuyX%2BrGzipUeUbC1bkc3OoPHaolv0UkaqzSHhhd6WfdLStKdY6Rcqy315hOjwAMJSudRMezZwS6XpGRxvXsy7rqEQS0mmUn%2BMBIE46yrvbk0UNZGgeTMGssTZj2lDmXENy6yBnFz9guotv%2B7vnELXu4DhCr0sSuLZ7vOGhse26JJuK%2B5HoNDI%2F7LoOgD6CKIerSHmPMxk3lRTmXFft9mYNK23cSaMcaYI8ska9IFaWrLqH%2BBOuddRzZ6cbufiVhJOPzLhvX2Uq2lxeVNeypq6F1XZepqj6p3A03A8YyEuEzvU8HTNcPnBkdYGdGAAU1%2BoJ1ARzNDtfIATgt7yoptYhxncDdLBgTNgSKFLFbIBt%2BHF9r3fd%2BK6OBSdS5f6b31lOkz3%2FdB8wwdUBzRYx7jdSAqKYPGkV%2Bc%2FRCZIpwohRtcnOzMj7j%2BjBL8tFsf2opDy3CzAy09lE9BY%2FL8aLHZ4ci55eG4sSgBTweOp%2FKET2DKdIk3Vql9SyEybg5TpZV2ZKzNBBUp0LJVe85%2BXjd%2FwAeg1XQDLhHv6eXqJhTUOv8bUEUOtgUwlo7vwAY6pgES%2BlCL5cpP608sT0xzAoj5PgV%2B8%2F4Bn0KRLC0sPAbVeH55G%2B2LZsMLA%2Bsmgp7lr96evvHRUB1GE990JAFMvPjcK1mHW6AMtCWQkHVVTvwCu%2FPjwr%2FaP4MEjW0vff8XlhRJBB%2F0weAwNel096KDrui2dvpsGZMtiBtXTXHCjCGx8YaBT7fG9jIOGwsfZ2hbXJveoFx1iLRc3UVnys1win%2F3CIj37Lxp&X-Amz-Signature=83d6ec83d1835bafa5f14b29775158f8de80396b44562b92f11ddcfc09a377c6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CNGVQFB%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T210742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICHObnqn%2BJPrkBa6%2FI9bViRaMhY1ZOcGYphuHmc3RloGAiAnpIHOH6hluRBb62ios3whOXZPtG5aI9sJmoULEKj%2FVCr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMgyd3HG%2BsV8Mbilm6KtwDkTgiJ2xplTixK6BVT%2FtzxobqJCwkbOlD2MDobYG%2BMNV%2BB7HwzeyRTAcomX%2BverBjoHzoYJNutuyX%2BrGzipUeUbC1bkc3OoPHaolv0UkaqzSHhhd6WfdLStKdY6Rcqy315hOjwAMJSudRMezZwS6XpGRxvXsy7rqEQS0mmUn%2BMBIE46yrvbk0UNZGgeTMGssTZj2lDmXENy6yBnFz9guotv%2B7vnELXu4DhCr0sSuLZ7vOGhse26JJuK%2B5HoNDI%2F7LoOgD6CKIerSHmPMxk3lRTmXFft9mYNK23cSaMcaYI8ska9IFaWrLqH%2BBOuddRzZ6cbufiVhJOPzLhvX2Uq2lxeVNeypq6F1XZepqj6p3A03A8YyEuEzvU8HTNcPnBkdYGdGAAU1%2BoJ1ARzNDtfIATgt7yoptYhxncDdLBgTNgSKFLFbIBt%2BHF9r3fd%2BK6OBSdS5f6b31lOkz3%2FdB8wwdUBzRYx7jdSAqKYPGkV%2Bc%2FRCZIpwohRtcnOzMj7j%2BjBL8tFsf2opDy3CzAy09lE9BY%2FL8aLHZ4ci55eG4sSgBTweOp%2FKET2DKdIk3Vql9SyEybg5TpZV2ZKzNBBUp0LJVe85%2BXjd%2FwAeg1XQDLhHv6eXqJhTUOv8bUEUOtgUwlo7vwAY6pgES%2BlCL5cpP608sT0xzAoj5PgV%2B8%2F4Bn0KRLC0sPAbVeH55G%2B2LZsMLA%2Bsmgp7lr96evvHRUB1GE990JAFMvPjcK1mHW6AMtCWQkHVVTvwCu%2FPjwr%2FaP4MEjW0vff8XlhRJBB%2F0weAwNel096KDrui2dvpsGZMtiBtXTXHCjCGx8YaBT7fG9jIOGwsfZ2hbXJveoFx1iLRc3UVnys1win%2F3CIj37Lxp&X-Amz-Signature=11b71c2a2f465abf7fd9d87a22627a484f76c3851bcabae9d54801043152e511&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GVEX4HX%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T210744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHV0jleQfk64WZYxS8g2M2bdFT9O29EEt1mzSDAEnqBiAiBYxgTyVB5kpig0y%2FDJm0cbwyaW1jE01UYD6xVmu8FOfir%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMl960%2F9trbRn%2F9tQ3KtwDmfhLyom49SMQzI4jqt%2BNciLRCHyMPFrF%2FcjlooVMpPlKSi6cJknVFqhD%2FWWl%2BcZtk9%2BV86i7DmMmzlDSuSsWfZ6jGtw9hybGM9LU5hET5XUhevt3szsiQmKyPIvL1Msyo3LyNfvefG3A%2FndET1l13CfGQOQb6cOkk0ZEQeeUrFCRb7Z2NXapcSfrlfNrvw9fusYGRyxHI49%2BSzRJwe9uO3aQDVvo%2Fkyg07zsZaD%2FRWLVEzlooogprE9hN7c%2FY%2BjhGhfmN1hh%2Bt%2FW90E8tsaVTlUUgmA4vEJgXjhrQvjCXTNtDczi8njcw9RB6w6FbF9GKlciQUjUwpeaIDJ4rDaLS73FqkZLpnRPYyjNCPsdUUikn68f4Gt58p2vgT6oXtz1ST2CM5cHNjauCo2D77dGOnM%2BgpEwZxF8w5yiny7EmfIKil3qWQP3rdyV9HhyUWSIplyoM850po3qNGRZ34Eot7XR6IBGb7VrqTj4bUC%2FWFIdHma4aW7qzopWZRmHm5MgReN61FQEfeJxon98uOvSvdwCWl93Ugp4d1M1X93FIBuU1HMB4wC%2BclOl8dm8roeYyG97Yv%2BSyp2d6dhtaqd9BEv%2BdTD2zG6PN9%2BKkCdm4gdatZ8lXrpVDWY09oYwoY3vwAY6pgGMEkcwpXvkhXkGZs8AKC60HauBVXORy8fdnwOUv%2FV3Ps5q0y%2BbZ3cVgnX%2FSBBo8VRoxlRNnz0mjXxJ5q%2FeiFn9iNF0V8RkvzqAL1ouZHAj75bOFJJiqj9QmUE83784%2BIAXH1M5tc%2F%2Fd6rr4mqfc2g%2B67eS%2FGEAnFgqoIoDeVHxKGyMA0hLOtL4%2FSkgUjhpmfuDh3n4LVyjgYwOznn3I%2Bkc%2Fo%2Bbwggx&X-Amz-Signature=1657013ba094da848f2f6f15171475a2357aaa0e8691593bd9a5db208eb792d1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUIH7GP6%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T210744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDSM5giqze%2F1S7Mmw8shETuGj46xPb71x7C897Io0P8EAiBbeL7DZeYM5naY5j8HILfXM%2BzsJCl%2FyAw%2FYAYHjndFNir%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMGbIJDO%2BQQCYRJozVKtwDu%2B4PmhgWjUMJFlZGxCyQC9KNiozc80Dvn7TCUrqLW1DGBnJ8sbKV8K%2BIoiYnEYoXfWTYl9fJ33YwJsEUDID7fNPayaZSEDenJNqATh%2FBdTrfNDOV1%2FvIIF7L9DyWPrijuOe1i3Ce5qf1NNKpXMDEJk1zhniIc6sftcw2sbe%2FpzlayVhf5P3Xd%2Fye2zd9qtRDtiAkbk78U%2BCVdyybb1oJIuyDlH46teJ9%2BCeNTNRHZjVDe0Jy7cPa%2F5SknPoP2GC92t3z5LNFjAi7CnC1GuMkDlDqoSfb%2BDSIcO8jEiyT1C249hp8X0ddwzCNHIS4XIb1lrafk8ZrPKX6VERvUSZJY9dv0iJ7S9yLHAQgpQ7E1oMwGiZdavN%2FMvwcCmi7zyguulGUlRblPahNjuiA%2BpfJ7fbB66noL4NXCfiWdrsDpnwLXYd0G4q9GB%2FfHcmJKIzBnDtskk67PfncGFkLRiGPu%2FNCNK4MC0uaBMZlvXmGr4l18sO5G0e1VigDPeScjfPnnfSzb0Tcvj4EBY23f%2FebcSbtDp7ywy34k7zk8AzABOCZ4BbvKlEiIn%2Fcz%2FhCW8iHSzFac9A9W5EOWGA2imNPDnDBKNfubhKslYWBzGSep2Zg%2BN6d2rPA2A0R5R0w243vwAY6pgHcKf1y3Z%2BV%2Bkx15hUx54LuM5V58Wr3E4Y%2FAlyGkgM7CKB9IOWTT9cgYXBNAAYgSmqOJFV4OZ6XEnv1H72wdSsNZeOaj%2FRKLd3FMxGA8oPJk%2Fy6FJxGkLTh1W%2BW1RdGiDIb4KB1Q06%2BrpKuLhIBUvAEs2rWiHUdztmITEnBMUya9m6CFHHL%2F2yl9DobQGmNI0aQX1SXsYul6A%2FGsagvy6yC5%2Bf7pN9%2B&X-Amz-Signature=31e82c9d24563283b66da8d15e695c91aa3fe0509abd4cbfade9ffd75d1e9241&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CNGVQFB%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T210742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICHObnqn%2BJPrkBa6%2FI9bViRaMhY1ZOcGYphuHmc3RloGAiAnpIHOH6hluRBb62ios3whOXZPtG5aI9sJmoULEKj%2FVCr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMgyd3HG%2BsV8Mbilm6KtwDkTgiJ2xplTixK6BVT%2FtzxobqJCwkbOlD2MDobYG%2BMNV%2BB7HwzeyRTAcomX%2BverBjoHzoYJNutuyX%2BrGzipUeUbC1bkc3OoPHaolv0UkaqzSHhhd6WfdLStKdY6Rcqy315hOjwAMJSudRMezZwS6XpGRxvXsy7rqEQS0mmUn%2BMBIE46yrvbk0UNZGgeTMGssTZj2lDmXENy6yBnFz9guotv%2B7vnELXu4DhCr0sSuLZ7vOGhse26JJuK%2B5HoNDI%2F7LoOgD6CKIerSHmPMxk3lRTmXFft9mYNK23cSaMcaYI8ska9IFaWrLqH%2BBOuddRzZ6cbufiVhJOPzLhvX2Uq2lxeVNeypq6F1XZepqj6p3A03A8YyEuEzvU8HTNcPnBkdYGdGAAU1%2BoJ1ARzNDtfIATgt7yoptYhxncDdLBgTNgSKFLFbIBt%2BHF9r3fd%2BK6OBSdS5f6b31lOkz3%2FdB8wwdUBzRYx7jdSAqKYPGkV%2Bc%2FRCZIpwohRtcnOzMj7j%2BjBL8tFsf2opDy3CzAy09lE9BY%2FL8aLHZ4ci55eG4sSgBTweOp%2FKET2DKdIk3Vql9SyEybg5TpZV2ZKzNBBUp0LJVe85%2BXjd%2FwAeg1XQDLhHv6eXqJhTUOv8bUEUOtgUwlo7vwAY6pgES%2BlCL5cpP608sT0xzAoj5PgV%2B8%2F4Bn0KRLC0sPAbVeH55G%2B2LZsMLA%2Bsmgp7lr96evvHRUB1GE990JAFMvPjcK1mHW6AMtCWQkHVVTvwCu%2FPjwr%2FaP4MEjW0vff8XlhRJBB%2F0weAwNel096KDrui2dvpsGZMtiBtXTXHCjCGx8YaBT7fG9jIOGwsfZ2hbXJveoFx1iLRc3UVnys1win%2F3CIj37Lxp&X-Amz-Signature=40147266891f5fe460f5571bb424939a1b8e6b1d233c525522b87a0c575f5a7c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
