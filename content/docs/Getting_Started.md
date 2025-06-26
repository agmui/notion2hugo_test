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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIGZ42DY%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T181200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQD5FY2n%2FUFi3BozL3agZzN9Z%2FF1UuB7KtEQSKtV6SYvNwIgFNi7eN1ub1Qgksa5H0YlDRhspP%2BBNY2ineO9NYQOVgEq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDOV9QbpCBFnK2E3XbyrcA1WF1aeLkjp6zAwNgX5OZoQsVp7T8ydRkkqAXWB8oVo1ur4BO2nu4BDvV0HForjfk72pICdnJGKmn5C26v1kyn91D%2FicxQQV6%2BbPFKwP3j5%2Bfg38%2BtKZnxYM6j3q0t7OV1TjCaXq5iw5ojAoV06Q%2BRzinGn1gr0J1TWFARJsNw9jIqJpq%2B0IKVz36%2B7jhpRph8v3m6aNXP0JfRdZM1UsqZf8Dh6RxADVBnMsqbo0pgyJou38BPpfhamawHPiIpicYc1j421kIsCAFK2Dmzsm2DOeQ3BBfiY1MutgD0Y%2F%2F9G8T1g6Wcryml79xNNeV1wP2Lupp5RAzhlzH7k1iTYEU1f483o6lP1E7RxEow06rAQmShOCMLbJDEye0M9qOfXAqkq0zivEjygJm6Ggqb3s6gKDdnYF6542ws4awOLb4iH4AYpotu3dWGe7zySbp%2BLmcSupMCHOhTwRpdzEESwiI6qrkkFWw7foNnzehA%2Fp%2FQMh1vyDQ7mMkRYIXUdCGc68Xk%2B5M1LnVMQLoZMzi%2BGr8kekEswDEj5ydYFKO4UaSUYbIQvSLDgDgnbdpuDLt1zr5GT2ejPA4xD4WKs0s6k%2FFUZ6yK9%2BooHh48nhNT6cH6w5z6xbuVhwBlLSNqT5MN6D9sIGOqUBOTBxfV9FeCjiN3WPEPQuxXgvEXg7o5O8GRVLtG12rQU64fo5dRdxBgqe4aHgNuCKhs%2FLByzERANK0%2B1jTHCpr8RkmDdAtbOT7D0P3PgkVsw7mmGKQLMWxBMK87iXwfeMunp7s14nyouQVcArTj74S2LqREdQtOX%2Bw4ML3Q%2BKitsg57EjiQwfUZ9CHXqOmhhiXh76EbCh0NK48An1jxP%2F0jLPf0vu&X-Amz-Signature=7156cc9a1c7a02abd06fea3b7a4c0046b0dc29e327bf1d668ee6875950a89688&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIGZ42DY%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T181200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQD5FY2n%2FUFi3BozL3agZzN9Z%2FF1UuB7KtEQSKtV6SYvNwIgFNi7eN1ub1Qgksa5H0YlDRhspP%2BBNY2ineO9NYQOVgEq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDOV9QbpCBFnK2E3XbyrcA1WF1aeLkjp6zAwNgX5OZoQsVp7T8ydRkkqAXWB8oVo1ur4BO2nu4BDvV0HForjfk72pICdnJGKmn5C26v1kyn91D%2FicxQQV6%2BbPFKwP3j5%2Bfg38%2BtKZnxYM6j3q0t7OV1TjCaXq5iw5ojAoV06Q%2BRzinGn1gr0J1TWFARJsNw9jIqJpq%2B0IKVz36%2B7jhpRph8v3m6aNXP0JfRdZM1UsqZf8Dh6RxADVBnMsqbo0pgyJou38BPpfhamawHPiIpicYc1j421kIsCAFK2Dmzsm2DOeQ3BBfiY1MutgD0Y%2F%2F9G8T1g6Wcryml79xNNeV1wP2Lupp5RAzhlzH7k1iTYEU1f483o6lP1E7RxEow06rAQmShOCMLbJDEye0M9qOfXAqkq0zivEjygJm6Ggqb3s6gKDdnYF6542ws4awOLb4iH4AYpotu3dWGe7zySbp%2BLmcSupMCHOhTwRpdzEESwiI6qrkkFWw7foNnzehA%2Fp%2FQMh1vyDQ7mMkRYIXUdCGc68Xk%2B5M1LnVMQLoZMzi%2BGr8kekEswDEj5ydYFKO4UaSUYbIQvSLDgDgnbdpuDLt1zr5GT2ejPA4xD4WKs0s6k%2FFUZ6yK9%2BooHh48nhNT6cH6w5z6xbuVhwBlLSNqT5MN6D9sIGOqUBOTBxfV9FeCjiN3WPEPQuxXgvEXg7o5O8GRVLtG12rQU64fo5dRdxBgqe4aHgNuCKhs%2FLByzERANK0%2B1jTHCpr8RkmDdAtbOT7D0P3PgkVsw7mmGKQLMWxBMK87iXwfeMunp7s14nyouQVcArTj74S2LqREdQtOX%2Bw4ML3Q%2BKitsg57EjiQwfUZ9CHXqOmhhiXh76EbCh0NK48An1jxP%2F0jLPf0vu&X-Amz-Signature=2aa6a052228e4d9e0cbbff1c3d28aab026bc288cb2480911a55213f3d46b2f3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIGZ42DY%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T181200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQD5FY2n%2FUFi3BozL3agZzN9Z%2FF1UuB7KtEQSKtV6SYvNwIgFNi7eN1ub1Qgksa5H0YlDRhspP%2BBNY2ineO9NYQOVgEq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDOV9QbpCBFnK2E3XbyrcA1WF1aeLkjp6zAwNgX5OZoQsVp7T8ydRkkqAXWB8oVo1ur4BO2nu4BDvV0HForjfk72pICdnJGKmn5C26v1kyn91D%2FicxQQV6%2BbPFKwP3j5%2Bfg38%2BtKZnxYM6j3q0t7OV1TjCaXq5iw5ojAoV06Q%2BRzinGn1gr0J1TWFARJsNw9jIqJpq%2B0IKVz36%2B7jhpRph8v3m6aNXP0JfRdZM1UsqZf8Dh6RxADVBnMsqbo0pgyJou38BPpfhamawHPiIpicYc1j421kIsCAFK2Dmzsm2DOeQ3BBfiY1MutgD0Y%2F%2F9G8T1g6Wcryml79xNNeV1wP2Lupp5RAzhlzH7k1iTYEU1f483o6lP1E7RxEow06rAQmShOCMLbJDEye0M9qOfXAqkq0zivEjygJm6Ggqb3s6gKDdnYF6542ws4awOLb4iH4AYpotu3dWGe7zySbp%2BLmcSupMCHOhTwRpdzEESwiI6qrkkFWw7foNnzehA%2Fp%2FQMh1vyDQ7mMkRYIXUdCGc68Xk%2B5M1LnVMQLoZMzi%2BGr8kekEswDEj5ydYFKO4UaSUYbIQvSLDgDgnbdpuDLt1zr5GT2ejPA4xD4WKs0s6k%2FFUZ6yK9%2BooHh48nhNT6cH6w5z6xbuVhwBlLSNqT5MN6D9sIGOqUBOTBxfV9FeCjiN3WPEPQuxXgvEXg7o5O8GRVLtG12rQU64fo5dRdxBgqe4aHgNuCKhs%2FLByzERANK0%2B1jTHCpr8RkmDdAtbOT7D0P3PgkVsw7mmGKQLMWxBMK87iXwfeMunp7s14nyouQVcArTj74S2LqREdQtOX%2Bw4ML3Q%2BKitsg57EjiQwfUZ9CHXqOmhhiXh76EbCh0NK48An1jxP%2F0jLPf0vu&X-Amz-Signature=1ba16414d8308294b83ea3fafff22a0f9d1a0441844a8f920f50ab18896bac74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JLMRXV2%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T181202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIE44JLpSgzTBSO1UEZq7vP3dUDfk%2FFXeA7Kf%2BT4V3DLpAiA8LgSCFyg2PSGTsOBp5qgL1ls5byz%2FrmQa81k4jGXeuCr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMJ0%2BqSfRA3ipNUa40KtwDCurTwDoDazTUlyEyTMhrpoh6Ekx6n8QSCE26e%2BWbu37UjSHJjwT5qgG4AKQAQ0Yrldp%2BqTKVPpu37MZYYOmUZ51mEikDleHB1A8gPjt5a0UCWS0zkJfzhSISCSlYPZawpEeLcsCeKDASRDoJ1NY3XTValQz4VdHqvMty%2FOoQUpND6ayukrVmEqwHESl%2FScvhx4Bt3dj54VKyK5zq5D68I1rgtRXd8uZcUHgzkT8FjcnKkgklujD1a%2BN3JmUWhBd2zM79wc3V02DE31nzhl%2BEScWkppcxC4IoPobxL%2BXhqw5ydeyvBgEwZ%2Bv7Idc9UOtN0Jqw%2BUAuaBATZe5Gtg0xfkzeKGPyDiUtBOPhr3DdEdRsxH5BflYms9cZcBsC%2FnrhDLyJtvxib%2FWEFbdmfnVlFg%2FP9QaGi6H7zPBYIu0714nOFBOcYToO0rPfXvZ4TMPkLkAra%2B4dlvrJlYWRtCeoekjh0rQrzIE5w8MVcXVITHmCzryrprLYeO1s%2BXuWyj440BwF5Wi9ctGbfjO2dJjDrtNXbrfu%2F83ZWLVOveUV43b3aT0%2B2SRzkkMADhnWCpDgU2PTreDhglrXwlTnsaZdZgMPLuKn%2BEb7jgEWrQkUpIW7PmV0pHbaUhFoWRMwqIT2wgY6pgGzvclcTDqw%2BHa0DMFxMW44YWcNiJnbKO8FnoHYi8uKFQK6W5pbXsfaQFbximmQcVSoTyY140ZR3h%2FQquDjxLn4tGHXJ4M5tRpv%2F5kOF90u5FJ0EfvpWMp8E0NCkn9zGm3%2BRMXfy7FqQ%2BajXopPdeuvsgFzFJ3wOZule3agTw5X8uF4gFHk%2F%2BygsS2xyDSBx5y0Cs%2Fwrb%2B9JaAR%2BXzXpEhDy570h89k&X-Amz-Signature=23c6b666ef97e56fd45678c7915cb725e4019dc3fdc994edeedbcb54ae044466&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643PL4CFL%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T181202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIBuF6Gmt8fwWv7w7Pp350OGRAT81MB%2F8eSFDogWJiORzAiAgu8TswuBPIcvzB9utyJnsN4w9A5F%2FKbjWN9Dg0gdFxir%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMFNKG5AxTl7Z9YIGoKtwDxeoJf0Nk7Lt68fD4Bbh3VE0Yd2bqGKaF0ahJHLyaKsln%2BlK3gkS7a2SkhJe79GTVyXy721Um26tV%2BrLw1AsdZmAhocqaekdiQBmCKTEIIqzrJku2Lbd921I93Yv7LkR0%2BWcDt60ZlNyQkMGcyRnxWhHoIWcu6H9Pgnva7bGqktjldS7DolR8r4GbJm2z8Eh5cVHSKqxwo%2FMrhAoI2BnFsTeJn2NXg1OxN9dKBOey6FFdvQS0Ov8kr5ayTivBjE0zhuGTwcuZz7cmNlIWeF9fXMovLO%2BuLZatX89IZjix0fzCPnGE49%2BEjymLNjxBMPRSk%2FOYOo2Si5rD74OoAx%2BPNtdGR4xp3RwtNehkIXHHPm7jAkuUlZrODhyEVkeyY1cPazp8KOa%2FXUSfjaaIkI1yldgBASCTnM7MJFVEHwoq6CJRT5yk3VZXSPXD82jOSn%2B9oV6zzRSZw%2BD%2FI%2FspOsx8IE4qViXNxRSWPO%2FYkr6SjMS%2FvHRWemX788KHdaoxpELJbnIc8luoMx96soAvtxo%2BG%2FC7zA%2FedBzI31m4I4lb4bz9V69rHGCLfE36%2F1VSLss5yTPbkknV%2FFoRLmrvIyYFAakIWuXnsungK1pwq9NyBMIAxO4xecfLRgjjlMgw5YT2wgY6pgF%2Bo9Htaj4TwJcju9tAn%2BwXVxOXcOqtyCcun8%2FBFW1SnNEySw4ouhx%2BqRfe%2FJqzbAYSFPvsBlVTo6Z3XvnigLrjsvKpgtN84OJN3%2Bc%2FUmD29vbKxLV5EcTIUc6LKxUpQV1OQma%2BObFL1iIg2788Q9vWnKble3w%2B1%2FafSsip5EHENbXsuaqr0RCJ0CgJf4%2BiL4xA%2F8t2k03nLSdtqcZOSJHtHV%2BKBMVC&X-Amz-Signature=71559fad8c8a462b79ffc5445589bba6abf0d91003d03fe0c4d9fc3bc74b7cbc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIGZ42DY%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T181200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQD5FY2n%2FUFi3BozL3agZzN9Z%2FF1UuB7KtEQSKtV6SYvNwIgFNi7eN1ub1Qgksa5H0YlDRhspP%2BBNY2ineO9NYQOVgEq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDOV9QbpCBFnK2E3XbyrcA1WF1aeLkjp6zAwNgX5OZoQsVp7T8ydRkkqAXWB8oVo1ur4BO2nu4BDvV0HForjfk72pICdnJGKmn5C26v1kyn91D%2FicxQQV6%2BbPFKwP3j5%2Bfg38%2BtKZnxYM6j3q0t7OV1TjCaXq5iw5ojAoV06Q%2BRzinGn1gr0J1TWFARJsNw9jIqJpq%2B0IKVz36%2B7jhpRph8v3m6aNXP0JfRdZM1UsqZf8Dh6RxADVBnMsqbo0pgyJou38BPpfhamawHPiIpicYc1j421kIsCAFK2Dmzsm2DOeQ3BBfiY1MutgD0Y%2F%2F9G8T1g6Wcryml79xNNeV1wP2Lupp5RAzhlzH7k1iTYEU1f483o6lP1E7RxEow06rAQmShOCMLbJDEye0M9qOfXAqkq0zivEjygJm6Ggqb3s6gKDdnYF6542ws4awOLb4iH4AYpotu3dWGe7zySbp%2BLmcSupMCHOhTwRpdzEESwiI6qrkkFWw7foNnzehA%2Fp%2FQMh1vyDQ7mMkRYIXUdCGc68Xk%2B5M1LnVMQLoZMzi%2BGr8kekEswDEj5ydYFKO4UaSUYbIQvSLDgDgnbdpuDLt1zr5GT2ejPA4xD4WKs0s6k%2FFUZ6yK9%2BooHh48nhNT6cH6w5z6xbuVhwBlLSNqT5MN6D9sIGOqUBOTBxfV9FeCjiN3WPEPQuxXgvEXg7o5O8GRVLtG12rQU64fo5dRdxBgqe4aHgNuCKhs%2FLByzERANK0%2B1jTHCpr8RkmDdAtbOT7D0P3PgkVsw7mmGKQLMWxBMK87iXwfeMunp7s14nyouQVcArTj74S2LqREdQtOX%2Bw4ML3Q%2BKitsg57EjiQwfUZ9CHXqOmhhiXh76EbCh0NK48An1jxP%2F0jLPf0vu&X-Amz-Signature=5f1f42550ff3cdfee9633d02a723e5d00186c394d208a68dd2d1ca9cfca166bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
