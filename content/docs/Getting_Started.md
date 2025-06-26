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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AZ6RHEP%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T220803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQC4D4tc1Dm2WY8SZgRxs6oayujZW8StmVuE66UBuml4hwIgdL0mSqQ9rjQMkazRqh4asVVagMCopU0GxZI0YSroDc0q%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDLyMsdLOCD%2FVsVBZzSrcA6PcWlH59g%2Bw2Czr4F76MBZoQvab9OqQ%2B66PC9pygYaz9eSbEeme6gF3mc7LCxkTgvp2JGy2pt3IvW38misenPz0JfO4Z3Zq8GTjbpP1hiNq503r2l0qdKppbLSK%2Bs3qEVS%2FHXO2cJEWHhy4rPIjcH8UxJZrdYCX049G3coDoIoWXeL2wwU8Ha31OtukjEXC6ZFS6OLT0%2BUrVOOsFi6rYsYYUl8gsEIFrPBGPyqLU9wgJ8oioh1KX7K%2Bg3IZ2EMFTb0UR152W7wf04toH09%2FtmXEswUI0IWojVp4eVxHXixzjqFAya2yfCHWAAcbMhUNS%2FNoZ1a2n1sViXZ3%2BpPRoF6gtMcXoRreaUjxacGRJtfHAQvS9G2MfWPaUMNwWCe%2BX5swvquR52TQNMZ8FrlXc5DvwNzcv%2BYpdpxqqzZ2hr0UvRERq7yVNGeFhFUMDIAsT2rLG1fNGQDvZtNlmF3sXX8RXJuwFX3sL44fvckEzqqU98Caj%2BmezYz5m1MPEfXjmGJVGgEq394wSZY%2F42HqUyG6ifqh4aYWUa7Tb4QsmPHcPa4nBvYRpkPuSb6xApRS%2FOgv8LLPwkGeWYET7y88bcI2nE%2BuCXW5MFc9zjk0eJDL5VGpChqZ0ZCmUmioMIj19sIGOqUBe5jYLQ%2BXB9lCRZmDpNIOSbuumrvPkKHMkmTDgV3waDHdygL1JZTNIj6ZEg4K%2Br%2BHwoAZuCyKFUN7pukqjaGa6Xlb04Y6TlW6O4%2B68GC4o3yf0mATeodPKhxRY3T5glruYX5pxwMvrWzsHE%2BI0HmYJQVmMdACDtyFMzHiEuPVSERKzfqrWETlVAvGGBgkiqZR60SyetIQNE0nuCYKQ%2BPFfxePmoBS&X-Amz-Signature=4b979bc2474eadef34323b2fb3f060cdcd22c60441b9db01c3ce2d81401b2003&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AZ6RHEP%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T220803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQC4D4tc1Dm2WY8SZgRxs6oayujZW8StmVuE66UBuml4hwIgdL0mSqQ9rjQMkazRqh4asVVagMCopU0GxZI0YSroDc0q%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDLyMsdLOCD%2FVsVBZzSrcA6PcWlH59g%2Bw2Czr4F76MBZoQvab9OqQ%2B66PC9pygYaz9eSbEeme6gF3mc7LCxkTgvp2JGy2pt3IvW38misenPz0JfO4Z3Zq8GTjbpP1hiNq503r2l0qdKppbLSK%2Bs3qEVS%2FHXO2cJEWHhy4rPIjcH8UxJZrdYCX049G3coDoIoWXeL2wwU8Ha31OtukjEXC6ZFS6OLT0%2BUrVOOsFi6rYsYYUl8gsEIFrPBGPyqLU9wgJ8oioh1KX7K%2Bg3IZ2EMFTb0UR152W7wf04toH09%2FtmXEswUI0IWojVp4eVxHXixzjqFAya2yfCHWAAcbMhUNS%2FNoZ1a2n1sViXZ3%2BpPRoF6gtMcXoRreaUjxacGRJtfHAQvS9G2MfWPaUMNwWCe%2BX5swvquR52TQNMZ8FrlXc5DvwNzcv%2BYpdpxqqzZ2hr0UvRERq7yVNGeFhFUMDIAsT2rLG1fNGQDvZtNlmF3sXX8RXJuwFX3sL44fvckEzqqU98Caj%2BmezYz5m1MPEfXjmGJVGgEq394wSZY%2F42HqUyG6ifqh4aYWUa7Tb4QsmPHcPa4nBvYRpkPuSb6xApRS%2FOgv8LLPwkGeWYET7y88bcI2nE%2BuCXW5MFc9zjk0eJDL5VGpChqZ0ZCmUmioMIj19sIGOqUBe5jYLQ%2BXB9lCRZmDpNIOSbuumrvPkKHMkmTDgV3waDHdygL1JZTNIj6ZEg4K%2Br%2BHwoAZuCyKFUN7pukqjaGa6Xlb04Y6TlW6O4%2B68GC4o3yf0mATeodPKhxRY3T5glruYX5pxwMvrWzsHE%2BI0HmYJQVmMdACDtyFMzHiEuPVSERKzfqrWETlVAvGGBgkiqZR60SyetIQNE0nuCYKQ%2BPFfxePmoBS&X-Amz-Signature=d413bd27e58f2f7fa27632015f5eed077c29327172f729416e2506f4f163a384&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AZ6RHEP%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T220803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQC4D4tc1Dm2WY8SZgRxs6oayujZW8StmVuE66UBuml4hwIgdL0mSqQ9rjQMkazRqh4asVVagMCopU0GxZI0YSroDc0q%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDLyMsdLOCD%2FVsVBZzSrcA6PcWlH59g%2Bw2Czr4F76MBZoQvab9OqQ%2B66PC9pygYaz9eSbEeme6gF3mc7LCxkTgvp2JGy2pt3IvW38misenPz0JfO4Z3Zq8GTjbpP1hiNq503r2l0qdKppbLSK%2Bs3qEVS%2FHXO2cJEWHhy4rPIjcH8UxJZrdYCX049G3coDoIoWXeL2wwU8Ha31OtukjEXC6ZFS6OLT0%2BUrVOOsFi6rYsYYUl8gsEIFrPBGPyqLU9wgJ8oioh1KX7K%2Bg3IZ2EMFTb0UR152W7wf04toH09%2FtmXEswUI0IWojVp4eVxHXixzjqFAya2yfCHWAAcbMhUNS%2FNoZ1a2n1sViXZ3%2BpPRoF6gtMcXoRreaUjxacGRJtfHAQvS9G2MfWPaUMNwWCe%2BX5swvquR52TQNMZ8FrlXc5DvwNzcv%2BYpdpxqqzZ2hr0UvRERq7yVNGeFhFUMDIAsT2rLG1fNGQDvZtNlmF3sXX8RXJuwFX3sL44fvckEzqqU98Caj%2BmezYz5m1MPEfXjmGJVGgEq394wSZY%2F42HqUyG6ifqh4aYWUa7Tb4QsmPHcPa4nBvYRpkPuSb6xApRS%2FOgv8LLPwkGeWYET7y88bcI2nE%2BuCXW5MFc9zjk0eJDL5VGpChqZ0ZCmUmioMIj19sIGOqUBe5jYLQ%2BXB9lCRZmDpNIOSbuumrvPkKHMkmTDgV3waDHdygL1JZTNIj6ZEg4K%2Br%2BHwoAZuCyKFUN7pukqjaGa6Xlb04Y6TlW6O4%2B68GC4o3yf0mATeodPKhxRY3T5glruYX5pxwMvrWzsHE%2BI0HmYJQVmMdACDtyFMzHiEuPVSERKzfqrWETlVAvGGBgkiqZR60SyetIQNE0nuCYKQ%2BPFfxePmoBS&X-Amz-Signature=be7b557503a4f9d957a3749edf7a7c6c878b2a09ad7f15ae9be6fe340df91c6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YANFKWJ3%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T220804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIAxkNynSRXcFvsrfOxm%2FzpiIrRdO%2Bq%2BpQHvE5FqgAkilAiEA1c%2FimHttVX4%2BPIgKIa5J0LRj5U0qXIs69TS0a9OsDa4q%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDGaVsft488vb4NPL%2FCrcA0JdVxE2tTy%2FC4JuXJ8UcKjquMR4ZrmAQyv3%2FelgY2PMDnFDShLlioiYXnsH7Mg87CFUg0sHwn9%2Ftx5msYeLIXAAEMEOBfbTpdTQtR26oJV1TmgP2vFq6KjQy7Q9LlSMAkpZBDg%2F24UQCEy%2FzXhP4lTn5NpmzQUDSRlyLqOOH7XPzJHliZH6n%2Fx5QCjAckPQ4jdWG9oEAIKpa9UIk%2FrnzpZz7EfFb%2FUJDw6DpaWYkoeEngrJDIDGxdU8CiJ1dtGeCt4ysUlgpYajUM4bBzIPKG1J3GVDY4MXh57stWfXgM7%2BOnNDhKcXaKUX%2FRSXc1LxQcGxIBIC%2BMhXtREOb4lJNVdb5zt0vUBnheo7MgHSTpFnKRWKhAyJti96qAyga41%2FfWs375qLkkZRSx5BCirRP8qQS1xyl8j66Uuoj7xgNsltzK5TVsMgFc%2BAmOwygrfWJhvq5qh8j06d%2FoyZBZ0whotGhJdVj4kb40YqDAEMWyO5Ka1YJmI8YNV4QtnYbmVIpGH%2BNAKlU1EwC%2F5BMftlvqb8rHT2SH99%2BnZdqn%2FShzaeqKM8D63vp3I1TlczsdH4iTAilj%2B7LTHnENcNPfkAgSI%2F3aFZESFAoHWHp1f4PJU1aVo%2B9TJcmTlgi71YMKT19sIGOqUBD7iTjzsDIgsHFsn3iCOZYzmBbGy93XVqwoEiJWnLXh%2BJoCkYoeWbmQPF7jiSXiSnYG2%2F1iEdwl6Lxpul5bFIgaJL67HIwrYLdARStZf67uN5bwh4NfZ%2FE%2F4Xdq7ve1WWoxVbaS0faJU3yDud18sQz32Y1i9KbTaIQ3unMrmhIuOcB0v6oHyAxVXGzPkOzAf%2BYEAzELDeSuUs0GfBTfm0f887HRaM&X-Amz-Signature=90c2183950abd4556e6e354f01e5e2c27ed24cb11f17e7c71a215c0262b17f14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RI5G7BRU%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T220804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIHhZbedGKLvsTeXAT0kcPJZV0BI75phjfZaa0gnE4PyoAiEA4jV%2F%2FMffJXCnHcXCe7tNBrGPpKWr%2FZjxzcZf6SxTu2kq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDNuDWK7rwmdoQcRjKCrcA2N6nZePwqI0YHwM9IY8puxEAsyFczzA4eIihfQ%2B3%2BI%2BMPLoCzDIY%2B8o5Jhp%2BvJe6CqXNmwJuWrR%2FJov188FK2xeedDURLwvGMP6ueqyQG8PRsS%2FCy43yH6JsZhtMn09YZgxSlmDEy85FjIllpgkBmzXX63pEf8dmASxtCo9z0Ueqe2iCUisrGf%2B5n858%2Fvr7fY60kuZH%2F7g%2Bipfb7dLV4oLYLaxLZY%2F0VIUARQf8n3QQu3YqZTMrpKeJAuBafRqlP9XziMHOlD%2F%2BnCgflHoJ2P6%2FLhrEa%2BbUnF49uVL58Py4zK2FtPL5NUrW%2B1wXkwvqZCIf3%2BkIgHO6V1Slwh4WD6hTsySYJSR4Igs%2FXkhhloc778iPsNMlIsAEQ7U0jrTasuY10G9onarQGOttlkelLxS3rB4UeVRKP%2BeCO%2B8Tz4kkeO2yfsG64c9UzQi80YvAiz8iBpf5GA01U1GQhGV1BznzyjwWcUEEFr3L%2BD3BrgopQ%2FSXCBBFxXusKkm2KTZrelgh8qxBSt7OdPx1Jia3mpL0vSV5N9k4c4UVJDajiGCeAhCO3xt91KEL2%2BOS2KRobUEjt3Y9LiJe9Xlt77SROmrM0%2FsP5hwSI%2BGpJ0TOEv3nCMfIOS1tPVtp6ccMO319sIGOqUBCuEdeFnfKsJcVgLw%2FGmxv2Htxb%2BGUjO4HVMoNn0U2rEtWEnnRa7%2FRA2r5P6KDQ9fT%2FB2EFwC6NSj3%2Bw0tfEHeI1oUjqDX4lZVpTSy6EaGMhHzEE3ozvWQ9d6CkFLGVg6Q5gmyh%2BzTvpuNa77q8JSRknxPRdjLy%2FTZsA0quKzyF3yHsBKlQnnWiRHEplxGveG9g6eL3M4QXYskx4ipfDjdKjqAELq&X-Amz-Signature=5060835e5bf4dd4b5d6b78f15b55461dc713cfba3dff8cdcc5920455dbd23b27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AZ6RHEP%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T220803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQC4D4tc1Dm2WY8SZgRxs6oayujZW8StmVuE66UBuml4hwIgdL0mSqQ9rjQMkazRqh4asVVagMCopU0GxZI0YSroDc0q%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDLyMsdLOCD%2FVsVBZzSrcA6PcWlH59g%2Bw2Czr4F76MBZoQvab9OqQ%2B66PC9pygYaz9eSbEeme6gF3mc7LCxkTgvp2JGy2pt3IvW38misenPz0JfO4Z3Zq8GTjbpP1hiNq503r2l0qdKppbLSK%2Bs3qEVS%2FHXO2cJEWHhy4rPIjcH8UxJZrdYCX049G3coDoIoWXeL2wwU8Ha31OtukjEXC6ZFS6OLT0%2BUrVOOsFi6rYsYYUl8gsEIFrPBGPyqLU9wgJ8oioh1KX7K%2Bg3IZ2EMFTb0UR152W7wf04toH09%2FtmXEswUI0IWojVp4eVxHXixzjqFAya2yfCHWAAcbMhUNS%2FNoZ1a2n1sViXZ3%2BpPRoF6gtMcXoRreaUjxacGRJtfHAQvS9G2MfWPaUMNwWCe%2BX5swvquR52TQNMZ8FrlXc5DvwNzcv%2BYpdpxqqzZ2hr0UvRERq7yVNGeFhFUMDIAsT2rLG1fNGQDvZtNlmF3sXX8RXJuwFX3sL44fvckEzqqU98Caj%2BmezYz5m1MPEfXjmGJVGgEq394wSZY%2F42HqUyG6ifqh4aYWUa7Tb4QsmPHcPa4nBvYRpkPuSb6xApRS%2FOgv8LLPwkGeWYET7y88bcI2nE%2BuCXW5MFc9zjk0eJDL5VGpChqZ0ZCmUmioMIj19sIGOqUBe5jYLQ%2BXB9lCRZmDpNIOSbuumrvPkKHMkmTDgV3waDHdygL1JZTNIj6ZEg4K%2Br%2BHwoAZuCyKFUN7pukqjaGa6Xlb04Y6TlW6O4%2B68GC4o3yf0mATeodPKhxRY3T5glruYX5pxwMvrWzsHE%2BI0HmYJQVmMdACDtyFMzHiEuPVSERKzfqrWETlVAvGGBgkiqZR60SyetIQNE0nuCYKQ%2BPFfxePmoBS&X-Amz-Signature=5d08fa7c9f7958a02cbf722afbdb94daf0588897c38d1e896808ab3dd2d0544c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
