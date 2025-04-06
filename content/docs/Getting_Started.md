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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BNL6QV6%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T110152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHyz56UC%2BvX2hsLv3E0IGEAG5Gcz9%2F8QRXaCVK2CHP9jAiEAiM2lJSDtwBBhjyXDHwElVGnkKrD3Cwuls%2BjPZOQZ%2BJQq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDL1Dk9218CB%2F5N87QyrcAz53U0hBUAII2GlyYwkeXIsN474j99RZJ1%2B%2FxPkKGBS1usRGuE3crBEeSaS8Xfm2TH9IkpDKube%2BPfqr5LMZdMENlqMMx9FlSXAziISwB6pBet6OKV5OkTFjK%2FUpgFolyWJ6OSxul8KHkP5SNzScRTuaAwfhbMxSzXSdldHiu4fYLyxa3lxO44vNCpsIOVpgUGd3p%2FF3dumfu9U3DoXNaTcndaLetM1v1vWRUk2oCEqImKPvdQ0YdJJbdZYcUqx2ZCjx7Ewhsl4BSMSG%2FSNCvF3llvCX24E3ukTikSFXJB2O0cccNAAJ3itorntLSgcjSKQ%2F83cljC9%2FHKRz0di83%2Ff5V1e2zstM29OrNtPdPUwq5MCk%2BFfitI7Z3KwPOoZUi8OyFDol05RWrk904ygePFODYjAPzQCupRaRdV4IJydULw4o7tCLMMS8w%2Fg7loels6GMqHLL90TjdJL%2Fd9Mpl9BRzwM2juhn7KZ16FDVRl29M8QQEoflMFcZrbQ0Ft89QM7ib%2BiGpfBhFpEUPfi9Lxnl1nb5aDnLlEhViojB%2FNcvuY3uNoCZaQZxKTkjcHsvGnrQ88IL29gzOWj7D8LPbDi%2BMms%2B679HNyLkxiopeLW0I2J2FULSTkyNRQY%2FMPD%2ByL8GOqUB7t50luHTfF1Yk7zMMvE%2FfIFumM2RVQXB33b2AYavNEzPyQNrig5k9uDp74wfY4qENXd%2F0XwkI6x6tYVHO08GH%2BLSCx%2FX2%2BaQ5%2BRf8sxGQkXMZQ%2FDaTIzBfthPv85adAbgal453TQ7fXKhOH1U%2BBvK4GUQ7dj6NcR4YK6tpCDe5ZwZjdYuQfDLnc%2FXQZKWHb4P2bPLIUbK4soCv7VUTznwL6TLMU2&X-Amz-Signature=0e072a76b57f8253eaa3b98f1bea4d7daed6d9836d1cea930fbe3a32a5dfe24e&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BNL6QV6%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T110152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHyz56UC%2BvX2hsLv3E0IGEAG5Gcz9%2F8QRXaCVK2CHP9jAiEAiM2lJSDtwBBhjyXDHwElVGnkKrD3Cwuls%2BjPZOQZ%2BJQq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDL1Dk9218CB%2F5N87QyrcAz53U0hBUAII2GlyYwkeXIsN474j99RZJ1%2B%2FxPkKGBS1usRGuE3crBEeSaS8Xfm2TH9IkpDKube%2BPfqr5LMZdMENlqMMx9FlSXAziISwB6pBet6OKV5OkTFjK%2FUpgFolyWJ6OSxul8KHkP5SNzScRTuaAwfhbMxSzXSdldHiu4fYLyxa3lxO44vNCpsIOVpgUGd3p%2FF3dumfu9U3DoXNaTcndaLetM1v1vWRUk2oCEqImKPvdQ0YdJJbdZYcUqx2ZCjx7Ewhsl4BSMSG%2FSNCvF3llvCX24E3ukTikSFXJB2O0cccNAAJ3itorntLSgcjSKQ%2F83cljC9%2FHKRz0di83%2Ff5V1e2zstM29OrNtPdPUwq5MCk%2BFfitI7Z3KwPOoZUi8OyFDol05RWrk904ygePFODYjAPzQCupRaRdV4IJydULw4o7tCLMMS8w%2Fg7loels6GMqHLL90TjdJL%2Fd9Mpl9BRzwM2juhn7KZ16FDVRl29M8QQEoflMFcZrbQ0Ft89QM7ib%2BiGpfBhFpEUPfi9Lxnl1nb5aDnLlEhViojB%2FNcvuY3uNoCZaQZxKTkjcHsvGnrQ88IL29gzOWj7D8LPbDi%2BMms%2B679HNyLkxiopeLW0I2J2FULSTkyNRQY%2FMPD%2ByL8GOqUB7t50luHTfF1Yk7zMMvE%2FfIFumM2RVQXB33b2AYavNEzPyQNrig5k9uDp74wfY4qENXd%2F0XwkI6x6tYVHO08GH%2BLSCx%2FX2%2BaQ5%2BRf8sxGQkXMZQ%2FDaTIzBfthPv85adAbgal453TQ7fXKhOH1U%2BBvK4GUQ7dj6NcR4YK6tpCDe5ZwZjdYuQfDLnc%2FXQZKWHb4P2bPLIUbK4soCv7VUTznwL6TLMU2&X-Amz-Signature=0073d40e0e5e3453c3a51aa385f3aa494044ffd037f7a159a5bb010721898fba&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZNQ2VSD%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T110154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHWYdVd0XF7Tg%2Bgp9uxy1pL0w7oHzljJX8EpFnDJUe9nAiB577FGD6QLMeWycYv%2FziCCDt4DLIwmA6Plk3pArOF7Lyr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMVDBF8oOLStgttx29KtwDrkVDr7DOtGfz4Zg8ctQnwWBVGloIUto6oXetn63i1MX2GFiN5VsBetrNwe3mxVxD3eclBhTDYO%2F6Ol9BpvrENeciUXpFnOdzjbavZgDkqzpzW9b3WaPukQvVgurpgyeRF%2F7D%2BMvuFmZK1h6ohNxOyxQ%2BaaFmxoky0rj%2F7qMrINNccSjpsFcxDDzzGbXnQ9CFcrQRMQcnyCcODfKGAMHewcvLaVNzVVPYq5M42U%2FSABybFMbigI2Wgabv8TGSC%2FFhVzFD8FOYIMdmPqmQa2iB9giXuxhJgXjbf4lUrHwAxghgbmm6XWr3tpa0%2FeRu0%2Fm5uTp1z%2FUQdgdfLXIswyi4BDG%2BP8j3qg8E2VV5qILQAHeiVeIzBywWtMQjcZIaF3Vw8rB1EW4ZY75DKptYcifOSqPKYzeFBfIpse87CfzZYmOpiu8p1hOVQL4YXzOri0tOYQoLyyYZw7l1ppvR6amzEnTkONwPXxDjYAzXYUozuB6Hobnk7xoVkVAtu5VMicJ%2BdrLLo3qQ%2BWpluPZdSsadKD%2FGQdNSnmf5BM53NCLGI4hpvjFLyecY%2FvIIxTBHSzfVeIZ9H5Bq3O5i72IykpOyzBq%2Ff02v0q73oC6NA4OFjIxwCeAmyLDv8SFErl4wt%2F7IvwY6pgFvPAlVUPdeKWKzI6oCl0tDSnVxQlDBQ5z4Lac6rxDJC538eV48545BxFmHqlK1k8nSADgQsm278Ka21SmKExi5DCqvUg%2F2VL8CSdGf%2FblKSkCOjvk2uSDzDrFJlrxvajwLam6oqAqjkNJ9mMUf2w7sQ8Q7AsezFPXRCAKs8Jf%2F9ibCQP5e0bNCtXkPP0vSdM%2FTMWr2Zb7J1b1srwa%2Bu8B2fgSE0TdD&X-Amz-Signature=c1e1d68b9ec7b0ac652d519dcb2f13498b8f9951dd0fb8a4a564c2208adcbd05&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMMMXSA5%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T110156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcAgBOzda%2B4lu0Kbq8ANQzgOao1%2FMsniL8W1sieE7IPgIgOZac2P0IZPGJIbiPkYi9hGowZdcu49mSxZcwfWaHRVwq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDAPi36Wr%2FEee2j5FLircA1SUDbV5szkngjGs1BkKSA7GC1HN7slCZ3abeTt42huXkBXJbwOPvpnScaWwiBlUefL1JWaK6dIZfbN3A7Mb5pH1mdcwoDjl7Rj2E%2FEx6CxK9dggzlNV4ace8574q2bMWPWPeQR2jtdH2Y9SGeiMM3tfvGBF%2FWYffDoW02HHlHkmOpVGdpd9eMGNx5wNxPaRVMQPUqwSN14SbrvlcsOM1hJjPcCxVaiMd6iEFnnjI5cd7O854il9e1wWZnk9GGF4SelMTg%2FHcZhd0%2F3rD%2BJU8pO8G1T1bv0XgOQEVc1JU6%2BxjCaAedfTYpx8dzXTsWCEUt5l3E0HB5tUkyK%2BGtNgArSt0sUeELgPHnZyEGVeMpzQ%2BD%2F6m7SgIx%2BTpojHUL%2FvfFFi4aqpokisGOs8c257mtAlc6a6GnuyMLDtih7knudjnDVbi6dTUqaODGrkjUP1qqqOv16dsUfzo9WvTOrLWkTRmSh%2FEOF5AtLyTLhxcQCEvK%2B7Z793hVOCfqUMjKE0vdETHEyAEhe5XRUlvDEPSHkguAH1K9q9ABm4vxrDZ7joOc%2FHAqXAQqRxH6iWPyiRsjb7%2FV1O5iMYQj7ceHDhJYgIJaJ828on5vF1uzXsymycAfx%2BzHpawSONilNPMOb%2FyL8GOqUBJNGs11Q%2BLifot28SUw7Al2d8dNdkQD%2F2ROAQgocekhr7q3kraWBSAKNHxuz0WxUNpEeoiF0wV6enREIX%2FEUcDMrww3rrzPxYK1iPBlbdFgT0zbYcFw8%2BzHDSKJyYAUcSiAj%2BVilsxrKzX1eVcVfMIPs0tCvdmYmAmDKmF1SY%2Be5Eh9MjcMUIKB1KJnRwIgATEpCcZa5RQxoWPPjtgnvfmOGTx%2FsS&X-Amz-Signature=94d91cfeda7f374a9a8bfd32ac4311124bac2dc2ea0f92bb6a583993d504fb6f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BNL6QV6%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T110152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHyz56UC%2BvX2hsLv3E0IGEAG5Gcz9%2F8QRXaCVK2CHP9jAiEAiM2lJSDtwBBhjyXDHwElVGnkKrD3Cwuls%2BjPZOQZ%2BJQq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDL1Dk9218CB%2F5N87QyrcAz53U0hBUAII2GlyYwkeXIsN474j99RZJ1%2B%2FxPkKGBS1usRGuE3crBEeSaS8Xfm2TH9IkpDKube%2BPfqr5LMZdMENlqMMx9FlSXAziISwB6pBet6OKV5OkTFjK%2FUpgFolyWJ6OSxul8KHkP5SNzScRTuaAwfhbMxSzXSdldHiu4fYLyxa3lxO44vNCpsIOVpgUGd3p%2FF3dumfu9U3DoXNaTcndaLetM1v1vWRUk2oCEqImKPvdQ0YdJJbdZYcUqx2ZCjx7Ewhsl4BSMSG%2FSNCvF3llvCX24E3ukTikSFXJB2O0cccNAAJ3itorntLSgcjSKQ%2F83cljC9%2FHKRz0di83%2Ff5V1e2zstM29OrNtPdPUwq5MCk%2BFfitI7Z3KwPOoZUi8OyFDol05RWrk904ygePFODYjAPzQCupRaRdV4IJydULw4o7tCLMMS8w%2Fg7loels6GMqHLL90TjdJL%2Fd9Mpl9BRzwM2juhn7KZ16FDVRl29M8QQEoflMFcZrbQ0Ft89QM7ib%2BiGpfBhFpEUPfi9Lxnl1nb5aDnLlEhViojB%2FNcvuY3uNoCZaQZxKTkjcHsvGnrQ88IL29gzOWj7D8LPbDi%2BMms%2B679HNyLkxiopeLW0I2J2FULSTkyNRQY%2FMPD%2ByL8GOqUB7t50luHTfF1Yk7zMMvE%2FfIFumM2RVQXB33b2AYavNEzPyQNrig5k9uDp74wfY4qENXd%2F0XwkI6x6tYVHO08GH%2BLSCx%2FX2%2BaQ5%2BRf8sxGQkXMZQ%2FDaTIzBfthPv85adAbgal453TQ7fXKhOH1U%2BBvK4GUQ7dj6NcR4YK6tpCDe5ZwZjdYuQfDLnc%2FXQZKWHb4P2bPLIUbK4soCv7VUTznwL6TLMU2&X-Amz-Signature=c0beba7bd5b5697815e353d27b1c888c5b80be7a4c75c892d6406065ab102942&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
