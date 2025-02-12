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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAGHNOIM%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T070748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAPzZeK%2FPQUjWHF3uRoiCYg7MO9eoG%2BXfZtnGlIQkHzCAiEA%2FGVBaBSXvO1lzwyVbxo5UH59B8xazVPjQU3uGBPQhw8qiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOl40kbLBzAQqlmzmSrcA5C7Phz%2FDYk7s53sxPHGvOSxoX3WsxBnBFyDswOxWVys1AI1TbNiLs6s5GHeW57rEnjjRBl2EfbcGaLuirPxfiN8M9Xw49eTwFH69uFKxbfD%2FXFcuZ8XAD%2F4sXno6rIHaHktNJaMzeUrRUnVZQCg59YoGKNxV%2FwI4iiCtqaAfRxsOnzyG9Q5Z5oqltv46hh2hY0EppOW8%2BUbqDbEGpFiThTZWdz%2BIZvhIFvIsUin0bTcOXVXiYUBGzYVxIKXWlNEVGcbtzaLMRz317xxCDEQdsWcGtNbuFNDtR0j1MYcpzdFI6c5Xo1DHOtqJH0GAC2wH9PtSeRruWOK2aH0me7Ip3dg1bKS9XoWtRHRXf2QyjhgrLgxDgKva5%2F9%2BDoknxrdw%2BHkrv6LoUgfTZffpnLZ%2Bl6Ma64UPldHBr8g%2BbIucmqzPEB79Aeeg7vM0xaA7M4OXQiKrBirdcwvINa%2F1Oiy2OnXue52oK9HjeZrNkRKwXcVbcz28MLVMMKIMBpsSLiJh92%2FwJhqL%2FYGamutAgEf%2BO3VShe2FbaEKQQ%2BEqOKM09gT%2FTykpmQcbqcV2loVEko0FNeFRNFH1YXqCBFV6hiskU0a6MqGtr3%2Bz7uENssiWG0iZi4mAs9oC%2Fzk0oMMJPrr70GOqUBN1vEtF3NTyZOpnja%2FgEXtLZMTaOqig9BYxqh70OMAudsgMa3OygzNTai7vXK470DgirOReTRgbKg4Ucbw%2FsauJezFhbRQ93%2BUG7N5SuiNT6FHPvqsyZXkCPCwSjUbyDL%2FHXiRW%2BAVW6K9TxVQXuyLeWaGT%2FBtgTwcOrPXF%2FxaOC%2FbeJXOv0SPAJcbW7ms%2BXuyhJkRGQBMO4tpbe6D2JufdZcA8UC&X-Amz-Signature=cd5f80838aac4584469cad4ebf11085dbbdfbf3bd3b4f39754374157caec271f&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAGHNOIM%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T070748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAPzZeK%2FPQUjWHF3uRoiCYg7MO9eoG%2BXfZtnGlIQkHzCAiEA%2FGVBaBSXvO1lzwyVbxo5UH59B8xazVPjQU3uGBPQhw8qiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOl40kbLBzAQqlmzmSrcA5C7Phz%2FDYk7s53sxPHGvOSxoX3WsxBnBFyDswOxWVys1AI1TbNiLs6s5GHeW57rEnjjRBl2EfbcGaLuirPxfiN8M9Xw49eTwFH69uFKxbfD%2FXFcuZ8XAD%2F4sXno6rIHaHktNJaMzeUrRUnVZQCg59YoGKNxV%2FwI4iiCtqaAfRxsOnzyG9Q5Z5oqltv46hh2hY0EppOW8%2BUbqDbEGpFiThTZWdz%2BIZvhIFvIsUin0bTcOXVXiYUBGzYVxIKXWlNEVGcbtzaLMRz317xxCDEQdsWcGtNbuFNDtR0j1MYcpzdFI6c5Xo1DHOtqJH0GAC2wH9PtSeRruWOK2aH0me7Ip3dg1bKS9XoWtRHRXf2QyjhgrLgxDgKva5%2F9%2BDoknxrdw%2BHkrv6LoUgfTZffpnLZ%2Bl6Ma64UPldHBr8g%2BbIucmqzPEB79Aeeg7vM0xaA7M4OXQiKrBirdcwvINa%2F1Oiy2OnXue52oK9HjeZrNkRKwXcVbcz28MLVMMKIMBpsSLiJh92%2FwJhqL%2FYGamutAgEf%2BO3VShe2FbaEKQQ%2BEqOKM09gT%2FTykpmQcbqcV2loVEko0FNeFRNFH1YXqCBFV6hiskU0a6MqGtr3%2Bz7uENssiWG0iZi4mAs9oC%2Fzk0oMMJPrr70GOqUBN1vEtF3NTyZOpnja%2FgEXtLZMTaOqig9BYxqh70OMAudsgMa3OygzNTai7vXK470DgirOReTRgbKg4Ucbw%2FsauJezFhbRQ93%2BUG7N5SuiNT6FHPvqsyZXkCPCwSjUbyDL%2FHXiRW%2BAVW6K9TxVQXuyLeWaGT%2FBtgTwcOrPXF%2FxaOC%2FbeJXOv0SPAJcbW7ms%2BXuyhJkRGQBMO4tpbe6D2JufdZcA8UC&X-Amz-Signature=66eb5aefe082d27ae1df6f6c6a6f8b1b9835a7413ca50b300343a45279907553&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YUJTTP5%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T070750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwwzFbEm3I%2FxwugH49RNOq0p%2FeyWiN9%2ByIAJLNBNIkzgIgV7PSwgLCxABahT70CLuDy9xYInD8%2BN5r0Y4uGGUR948qiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPFHOVD5lHE2t%2FCiMSrcAyDQUcWDn5Wt49bIAEx9cSiNNQNpYtWNVPb880av2E0Z%2By6dXzJ7Luhbgbzl96HJ2eAc8x8aq7wsS4MlnOvXn862G6xtXmKPlifzM25LbgUeDC0HAf2B69mu%2FInM%2BKvFIkil0SYMF9orQPwECg3Vf%2BN5T2jXxBJJL1cC73qovQm5waobMyYFraX5CDIkvO8JSqUTEAFtpuEPdcvrZfeBOE0JXOpTaWJJ0ecldTUCui8ouL%2FTuGzqDHruW19z0uiTWhTKRO0iOtHTxEJOuyKjTqobaRcwVyZDfvYuuHvA6kIxWkGjf%2FtEQHbwn9nKJjZ5C5BP09tXXbLp2Wr5A2hXvV24gHbbFBOfnl86gZ0LCKYuyPNA8sd9L1uSAXhQRZPYZcE2lyPaqQMh88YqnsjIpcS4zMs3Jk8Qbq9LGYPji4QKR05tDQdoby%2FmCUAai8TxKJVSp4mfBwfyrbFDur71ZWy7KwDX6EV6mtkV1%2F5lemidF6Pbkrbsa%2F%2BSVMzkUXMcxGABBOBczCZIOguBJ39CXerGK31ZJi6IJSniYSR8CFN1HdAgzJSvGYREbVlf9AVMklN2aFiyzkyX6UhwxvNvd2lsCDwTgvO1cqaM%2BxEdCdqNUOVk2U9jyJzWofABMJqGsb0GOqUBcWOaXpIEM5WYAswwX9Yd667WO8%2BHp9bkT5aKKGSwxkE5PYh1OjcknIa5DBEL%2FUvQPd2KTpyktguN0o9i6sFaD2Al%2FFDFzyqJzlN4Er5OIbG6BYj2DNd0kqNuocS2RRNjI2vmzj1VdgOnakAiyG3P9IxtMERd1sMvtkRERNDw0NMwrseI9qVq9rfDPrmQsY8eyB8U7q1IuohfyKm2mJxcdc3sPTj2&X-Amz-Signature=384e715ec6347f248571df9d3558460e7e3dd151992db582b137c81e34762dee&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4HEUWXH%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T070751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHr%2FY9Ks5J9eLji0Rsh%2B3fdGBKBxDCt1EIncM9q%2FH%2FARAiBPbIdZ1KL0G0AKrcvCbddmNwFhP0W2jN3G13KxPxQUxSqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMo69L0Bf%2B2DpqhyQxKtwDS5Xmg74zvftJ4FD%2BxQfBKbsTd3yYT7por6Mexb%2FMHZTb%2FORB1ANdeexl2ZCv%2B4%2BTNVIBjMLALljEfOI9iV9JlSS51o9qoJvogU2CQrSdg%2BfX80Kjx1qyTEvGOplDhmJKZPCjjtpMVSvt0CECuXv3t8LNPXOdr9eL%2FXgJSESzfAE1Trr9fCiH%2B7E0JCXNreXdnVgDK1lLGqT4Do%2FG9bArfPk6kKZpERIpw%2FOGZuVU%2F9uuXXYIKTRJcfPmM6H1XrbG37dc2PohByyKnrdvuRMNxZ8YpicbChThI2VsYahYS3jtRzXYZFRBEGy%2F4O0K37Bj5Ao23u%2FQGww%2Blc8TtqGlS%2F2yaslm1lUAQ0veLZP4Vzt8bzPuOHpGVD7eIjLUjsSWPVRF4dXz%2B%2BYqz76CSq%2BnyKnDTGwrnexefNk6Ymrl7qF0RYz2J2noWjKhOIWmNwh3r6GkK5U3DSute5pgJkW23l7ZynODqjJawmrXN%2FWjXlwZyc7WvCP8zs4T8nV0976qoJpU8l9cSYGfHsHM7vfL7%2FoagOrBMN3RrgTBfMq4GVErOM%2BYqVSkxM5sLSoIZ8rdUUgG7Q1S2Lk9sh7Pm7K2%2FUY9UfJsWvYWvuYTJXHOUJo%2Ba%2FJTVmTTu0AQTZkwpI2xvQY6pgGGuyGRWUBYpO65AiBLnAnhyGcEctXXOapoUYU4%2BO%2BO3n3F0vGmy2TvlJsAMPcgIDCPCIQ5iB2%2FJRZMsmHj2Rtw92YU7CqLHh2nxYR%2BGwbJzoJbBwYfxSFFmSnmWD40g78g6vGzi6LjifD16WuQzmKgSg2y6XUHbLkjMG2HEMH6ljxXNg6OsfikewlCKoJ7KzKHkth2vf7aSG8imMZPQUuKuEa5O9Zf&X-Amz-Signature=a4783d29a0123f88df819906ec7c4b85478aa61c266b9eaf2cdbcb2057ddab86&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAGHNOIM%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T070748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAPzZeK%2FPQUjWHF3uRoiCYg7MO9eoG%2BXfZtnGlIQkHzCAiEA%2FGVBaBSXvO1lzwyVbxo5UH59B8xazVPjQU3uGBPQhw8qiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOl40kbLBzAQqlmzmSrcA5C7Phz%2FDYk7s53sxPHGvOSxoX3WsxBnBFyDswOxWVys1AI1TbNiLs6s5GHeW57rEnjjRBl2EfbcGaLuirPxfiN8M9Xw49eTwFH69uFKxbfD%2FXFcuZ8XAD%2F4sXno6rIHaHktNJaMzeUrRUnVZQCg59YoGKNxV%2FwI4iiCtqaAfRxsOnzyG9Q5Z5oqltv46hh2hY0EppOW8%2BUbqDbEGpFiThTZWdz%2BIZvhIFvIsUin0bTcOXVXiYUBGzYVxIKXWlNEVGcbtzaLMRz317xxCDEQdsWcGtNbuFNDtR0j1MYcpzdFI6c5Xo1DHOtqJH0GAC2wH9PtSeRruWOK2aH0me7Ip3dg1bKS9XoWtRHRXf2QyjhgrLgxDgKva5%2F9%2BDoknxrdw%2BHkrv6LoUgfTZffpnLZ%2Bl6Ma64UPldHBr8g%2BbIucmqzPEB79Aeeg7vM0xaA7M4OXQiKrBirdcwvINa%2F1Oiy2OnXue52oK9HjeZrNkRKwXcVbcz28MLVMMKIMBpsSLiJh92%2FwJhqL%2FYGamutAgEf%2BO3VShe2FbaEKQQ%2BEqOKM09gT%2FTykpmQcbqcV2loVEko0FNeFRNFH1YXqCBFV6hiskU0a6MqGtr3%2Bz7uENssiWG0iZi4mAs9oC%2Fzk0oMMJPrr70GOqUBN1vEtF3NTyZOpnja%2FgEXtLZMTaOqig9BYxqh70OMAudsgMa3OygzNTai7vXK470DgirOReTRgbKg4Ucbw%2FsauJezFhbRQ93%2BUG7N5SuiNT6FHPvqsyZXkCPCwSjUbyDL%2FHXiRW%2BAVW6K9TxVQXuyLeWaGT%2FBtgTwcOrPXF%2FxaOC%2FbeJXOv0SPAJcbW7ms%2BXuyhJkRGQBMO4tpbe6D2JufdZcA8UC&X-Amz-Signature=cff43b96c37a77274471fbeb2f2d67d6627f0f03a5973e250fd6ca99b41f8c3a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
