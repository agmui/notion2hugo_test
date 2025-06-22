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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZU55WJ4Z%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T061227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGMY7TBUomepkdN4yClQ2whdgtHik%2FaxAtTvASLpaTV2AiEAn1Wtub%2Bu5Sql8vdkK5whqVrex4ScEf3Ymq%2BepYQ7V%2FMqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOQ%2BnqjN8ZXMsZHbpyrcA2G11rpEkQREHjpycHrA5DSll7YBNYH5W5oOwnEH%2FD9%2FupyR2TB0iEcsSHZcv3UVfBL4duwfhB9dZv%2FwRPiYti80x2SU11a6kckbKWEJl92QA%2FxFtmWfVF%2FWYGV1OgjbDKxMTf9u4l9tTGh%2F9leoBGrq1nMfy%2FNMXpSCkB1WmzL07kq%2FedR2ywSHgTDZFlC7PeILiT76Rm3jMcMxcemrNkmD%2BqAlNIsTAt%2FvHBJkMDH4JW7hrHJJuwVIcfVrQPyzpyfD0%2FtMIvqlAvZ7G4gDnWg0gCGgISvOxBvqKFCB2NZPLxmq6Tu6hyB%2F3Vprrj%2F13NAYdiVGtVepBHYxiVddxf8qKmKgGp%2Fr%2B76BlLU9hrQQHmCf1m4aaVkHZJa660fdw7zajncopPWCDSuCCv6fE05XDXgWuPIPeSD6BwuiSUdLdzLWdvX3xUiTlnKYBpNmrFzfiMetPl72Gw5bzn29fmJg9LdtpR%2FDt2Ji0GaS8VWzzuxTUol%2B0HxAsllfU%2BsF9QT8kpIPQoMke0iRySSnnqFS0Ut2n050RoXFb9tcIK2IayjnSXD%2FWmh8%2B%2BHgUwD4%2Fp7TnqT9vgT4%2FE6TQQDat5qwUBcdR%2BT9fQqnXKYC3hagPbijPIbiUGvebqKEMJ3y3cIGOqUBQESmeF3p8EABTWcojP%2B4Ntrqc0CjiZBCeKAZRDlvOoFe6YLLP%2Bg1ztYLcrIE37z16WiMCNyHh98r8bv50Zc%2FfVLhLolhNR6tmUOrxTt9A1Tb4p%2BjeiRnteNEf3PB7MTXtql78uyYNg1M3gv01oqRbEzcZUGzCSRLRbmRf9pWGG%2FoOsC9cMcFpmU6ZSmgCp4uC8Q7%2Fx9z7iUz5jrDbsxn38BZbNhf&X-Amz-Signature=5b1e358732be47218349f226f9ee739261db8b8b862d369116d838303b25974f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZU55WJ4Z%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T061227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGMY7TBUomepkdN4yClQ2whdgtHik%2FaxAtTvASLpaTV2AiEAn1Wtub%2Bu5Sql8vdkK5whqVrex4ScEf3Ymq%2BepYQ7V%2FMqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOQ%2BnqjN8ZXMsZHbpyrcA2G11rpEkQREHjpycHrA5DSll7YBNYH5W5oOwnEH%2FD9%2FupyR2TB0iEcsSHZcv3UVfBL4duwfhB9dZv%2FwRPiYti80x2SU11a6kckbKWEJl92QA%2FxFtmWfVF%2FWYGV1OgjbDKxMTf9u4l9tTGh%2F9leoBGrq1nMfy%2FNMXpSCkB1WmzL07kq%2FedR2ywSHgTDZFlC7PeILiT76Rm3jMcMxcemrNkmD%2BqAlNIsTAt%2FvHBJkMDH4JW7hrHJJuwVIcfVrQPyzpyfD0%2FtMIvqlAvZ7G4gDnWg0gCGgISvOxBvqKFCB2NZPLxmq6Tu6hyB%2F3Vprrj%2F13NAYdiVGtVepBHYxiVddxf8qKmKgGp%2Fr%2B76BlLU9hrQQHmCf1m4aaVkHZJa660fdw7zajncopPWCDSuCCv6fE05XDXgWuPIPeSD6BwuiSUdLdzLWdvX3xUiTlnKYBpNmrFzfiMetPl72Gw5bzn29fmJg9LdtpR%2FDt2Ji0GaS8VWzzuxTUol%2B0HxAsllfU%2BsF9QT8kpIPQoMke0iRySSnnqFS0Ut2n050RoXFb9tcIK2IayjnSXD%2FWmh8%2B%2BHgUwD4%2Fp7TnqT9vgT4%2FE6TQQDat5qwUBcdR%2BT9fQqnXKYC3hagPbijPIbiUGvebqKEMJ3y3cIGOqUBQESmeF3p8EABTWcojP%2B4Ntrqc0CjiZBCeKAZRDlvOoFe6YLLP%2Bg1ztYLcrIE37z16WiMCNyHh98r8bv50Zc%2FfVLhLolhNR6tmUOrxTt9A1Tb4p%2BjeiRnteNEf3PB7MTXtql78uyYNg1M3gv01oqRbEzcZUGzCSRLRbmRf9pWGG%2FoOsC9cMcFpmU6ZSmgCp4uC8Q7%2Fx9z7iUz5jrDbsxn38BZbNhf&X-Amz-Signature=d9a489db3780b0b7874759f2616881c7cb706acb4e78f55c45a8498112420fdd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZU55WJ4Z%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T061227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGMY7TBUomepkdN4yClQ2whdgtHik%2FaxAtTvASLpaTV2AiEAn1Wtub%2Bu5Sql8vdkK5whqVrex4ScEf3Ymq%2BepYQ7V%2FMqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOQ%2BnqjN8ZXMsZHbpyrcA2G11rpEkQREHjpycHrA5DSll7YBNYH5W5oOwnEH%2FD9%2FupyR2TB0iEcsSHZcv3UVfBL4duwfhB9dZv%2FwRPiYti80x2SU11a6kckbKWEJl92QA%2FxFtmWfVF%2FWYGV1OgjbDKxMTf9u4l9tTGh%2F9leoBGrq1nMfy%2FNMXpSCkB1WmzL07kq%2FedR2ywSHgTDZFlC7PeILiT76Rm3jMcMxcemrNkmD%2BqAlNIsTAt%2FvHBJkMDH4JW7hrHJJuwVIcfVrQPyzpyfD0%2FtMIvqlAvZ7G4gDnWg0gCGgISvOxBvqKFCB2NZPLxmq6Tu6hyB%2F3Vprrj%2F13NAYdiVGtVepBHYxiVddxf8qKmKgGp%2Fr%2B76BlLU9hrQQHmCf1m4aaVkHZJa660fdw7zajncopPWCDSuCCv6fE05XDXgWuPIPeSD6BwuiSUdLdzLWdvX3xUiTlnKYBpNmrFzfiMetPl72Gw5bzn29fmJg9LdtpR%2FDt2Ji0GaS8VWzzuxTUol%2B0HxAsllfU%2BsF9QT8kpIPQoMke0iRySSnnqFS0Ut2n050RoXFb9tcIK2IayjnSXD%2FWmh8%2B%2BHgUwD4%2Fp7TnqT9vgT4%2FE6TQQDat5qwUBcdR%2BT9fQqnXKYC3hagPbijPIbiUGvebqKEMJ3y3cIGOqUBQESmeF3p8EABTWcojP%2B4Ntrqc0CjiZBCeKAZRDlvOoFe6YLLP%2Bg1ztYLcrIE37z16WiMCNyHh98r8bv50Zc%2FfVLhLolhNR6tmUOrxTt9A1Tb4p%2BjeiRnteNEf3PB7MTXtql78uyYNg1M3gv01oqRbEzcZUGzCSRLRbmRf9pWGG%2FoOsC9cMcFpmU6ZSmgCp4uC8Q7%2Fx9z7iUz5jrDbsxn38BZbNhf&X-Amz-Signature=2f4f3262118d94313740f90e61c4d15567bd634d72bd4176dfd5cc3a0f62ed3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YDTVJ6A%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T061233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDsBp8xLRuMvk580I4WUQ%2Fs%2FyQNm%2FgSJBS0LFTR1155WAIhAL8sXeOJ3pxH1aOU%2BWa7mt4CyF9wKHAiw10C2mEVRrq%2BKogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxNpJXR7OIiNPLc6Xsq3ANQ37JltZKvv9LIpcRKm4zNKkT%2BcrTuV8d1MFRNAyo4VTsBgwTRcb9y3uRm7WI7mt3HV42EWQb7j04xqRqLJjhF5h4W%2Bd2t%2F4gQV%2B%2FOXq6ETXty1VIo2WJndx6YPv65qLLHpqAT1%2Bn0NI4DXKGERTAZGoxibx5YhBuaMBmsb4LPFDNE90yP3hrkLy87iD%2FXKNVBPAvVcvgTk2Hsjx29OnLm9tDPJEZMY9bSnVPawBLKLQ3DQNXUsj0S5DK55x4%2Bvly7rBDYux8fxvlQtUrDuE%2FHP4ZcvpzNGsQVGWU8YWPxnO3vDhee261srb6AYKRk6EA8gaF58pD2NSCUR%2FXJNlM4IUzOf9r32%2BjBIZgCh8TsB8G7N%2BNaT4fv7IbfuHg66FThoPtcCyHj59pFAVE%2FlQ9m%2FXyNIIoAyi7Dur%2BEK48wxJKGwS3hpGl5YDJmqSh53Wh9UigiM1Z1%2B7HQqdQ6LeFroUpcZU9h5cS7fDJXpzrOx3Qf5MLjnRWzjJgnyV%2FS9wFOExoU7%2FN%2B68XwmjkNbwCWppKQKhzVa4UcL2C%2BIbvf1IW1V7fwu90aNjhZaNqY9ySClcTUBmdeyVK6BiJqr5c%2B56xRxImS2I91wVRM5GfYYMWxZpW4AndLSDuH3DC%2Bp97CBjqkAe8usGT7FZBH0075e4VhylbagcYSBEDEQL%2FOb22%2B3CByePjvwyBp2lpH0wJApicI%2FJ2jKoLqGWJHRmrxnVMgdJ5qkGOrC3mV0PxLw4Uh7sF3woeQHsRGrnYtkvLBNBQZJuPhhkGBBSciQ05V6pWK4EwL7FtJqaAKtbcspYP1XbDhL2%2BBPXx%2B8iMM3SY9kCPS63Z3uc8ac9ds1nRQMJP%2Fv7ULFFSB&X-Amz-Signature=d978497b1e32ee093de7a4a5a996fa1f1f482ccf2bc448ad9558b9802a6702ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EFWNQSU%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T061233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICWFrHezRxtSKBSVMOcTuO1CSFJkDSuYYdtGNAJlIjgSAiAWkMu0dRPKRdiruk%2BYB0LVNadOFPKxAY2iKHYT%2BJH7piqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtIbqGbsVEa0TCwxRKtwD0whBPzgw4COvk%2BvA%2BGwQoxXgmGRO%2FrAMMDYHrgUnNQeh9OTfyAPtqw5sTKtb78WCqk6PPKSzqOph%2BP84WxJx4COWbgoYa%2FxRB6UJnmF0fLSxhiFsK15EROvVhKuu38XqvtNGHB4pKzH%2FmGnh2Dra7OlivFP%2FDKhOGx8S8NlKCqpCLpwpoLvBYFhsyIZ8zgudRloXi5gbr7lMw8fAH%2BPi%2B24NbnCSeklK%2FUNvtl5TbnAOrFk8td%2F0SYRwX7BSCD3rcDicNdCKFG9VYrgwiE1V928SfF5qyJ%2BJR6JoYMbDiaCK84eE286n2V4yafOAbrV0GG9hGQTUu4VJ32u%2FyEh6H0pLCGjWQP2NCK0S7dClwFUtGSW6CM8XQLNSA2EGcuGqedTG2kPultETH%2FsOAzgzly%2FsV%2BjfEckBf%2BlzQesex2uoqmtixigEXFO8f2bVtvSEP%2BjN8YBIRxKp4lMfCE7Js3h1Fi9AMQwdLFMfOZS3SpPAwTlv8KPLLlrgcFhd7jMjcXwEZmoot2aLDDQnKIRIGEOk53d1%2BpaV3y99sGgJKcjLSn%2BFwrNewATVXJk0IcYCWjc%2BCHDitlz5kRWgFSuU%2BqXZUSPSjOpghRnkXoz6GvzYcFZPcdOgoxSmWY0w47DewgY6pgFaZhcWqETG10R3KB8gcwV1U%2FjBvCzS2COLhiDE%2BaGO7Rz0coK4KkJR32zeA5D72QXf%2Fzz32ooZq5irQ6dWX6R8ayJER8YeCmiaVnNc%2BgMDNIBXe%2BUt6J0un1fHb%2FW2iWPp%2BXK8ZYcoCK8KCYeD0Fgx5pMGS3hhwlek%2FrX8q9cymf7SHJSNi1yLRvpL1qfapdGxsusWT5yYL4Gg3PeoGwpXNZkrCxhE&X-Amz-Signature=4c1fa341196ed326b2e680415d0b9dbbe0a8abedae531d8414cdf2ac4c59c011&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZU55WJ4Z%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T061227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGMY7TBUomepkdN4yClQ2whdgtHik%2FaxAtTvASLpaTV2AiEAn1Wtub%2Bu5Sql8vdkK5whqVrex4ScEf3Ymq%2BepYQ7V%2FMqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOQ%2BnqjN8ZXMsZHbpyrcA2G11rpEkQREHjpycHrA5DSll7YBNYH5W5oOwnEH%2FD9%2FupyR2TB0iEcsSHZcv3UVfBL4duwfhB9dZv%2FwRPiYti80x2SU11a6kckbKWEJl92QA%2FxFtmWfVF%2FWYGV1OgjbDKxMTf9u4l9tTGh%2F9leoBGrq1nMfy%2FNMXpSCkB1WmzL07kq%2FedR2ywSHgTDZFlC7PeILiT76Rm3jMcMxcemrNkmD%2BqAlNIsTAt%2FvHBJkMDH4JW7hrHJJuwVIcfVrQPyzpyfD0%2FtMIvqlAvZ7G4gDnWg0gCGgISvOxBvqKFCB2NZPLxmq6Tu6hyB%2F3Vprrj%2F13NAYdiVGtVepBHYxiVddxf8qKmKgGp%2Fr%2B76BlLU9hrQQHmCf1m4aaVkHZJa660fdw7zajncopPWCDSuCCv6fE05XDXgWuPIPeSD6BwuiSUdLdzLWdvX3xUiTlnKYBpNmrFzfiMetPl72Gw5bzn29fmJg9LdtpR%2FDt2Ji0GaS8VWzzuxTUol%2B0HxAsllfU%2BsF9QT8kpIPQoMke0iRySSnnqFS0Ut2n050RoXFb9tcIK2IayjnSXD%2FWmh8%2B%2BHgUwD4%2Fp7TnqT9vgT4%2FE6TQQDat5qwUBcdR%2BT9fQqnXKYC3hagPbijPIbiUGvebqKEMJ3y3cIGOqUBQESmeF3p8EABTWcojP%2B4Ntrqc0CjiZBCeKAZRDlvOoFe6YLLP%2Bg1ztYLcrIE37z16WiMCNyHh98r8bv50Zc%2FfVLhLolhNR6tmUOrxTt9A1Tb4p%2BjeiRnteNEf3PB7MTXtql78uyYNg1M3gv01oqRbEzcZUGzCSRLRbmRf9pWGG%2FoOsC9cMcFpmU6ZSmgCp4uC8Q7%2Fx9z7iUz5jrDbsxn38BZbNhf&X-Amz-Signature=30d6f8aea7ac9c50131127c5a69e1aa0f68475abcf2a043407f20b35d185ff50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
