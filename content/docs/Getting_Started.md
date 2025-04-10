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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TET5BBUI%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T200917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJGMEQCIAdpgkS6SmmKKoKLyLiJzNq4CrQ6Hab%2FvUZC777QjqHrAiA52RHAh2MGiUUM7krCpzBMImMI6IFGbVzbWZ1j78zBBiqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbeKMrxIleVE7lZk0KtwDuKqUUPZeK1nC3%2BruFpmbzaBS5rhrTlf%2FBsE0n25a9JQ1GsdjGgOshFIyxC6hlC7aQWBYlR7uvECpvd%2B8YKLsvDF3WJOX%2BSpeJImANQwRJUI3mZ2mWDlbdZySU60iT3HyZaWC4RDOzIPx8caHo0ZGe3UFO%2BBzxW4BDrTYBuxYQKfKAwzfD5Bd7%2Bccafz2nyObbMKDShKho2cWt0tmp6yaJFdc2%2BOO3ZsN0Hz4%2Bg7Z4GfAktMbIQBFLahR70biwWaetTtloDTXuwy8Z2DT3q3K80XaKMicCMs22JaD3DBcgxptCg7l1pvhkbxB7zQHxGuCOn5Edu25gBtff9vRCMSHrObh9r2rMExDyBztmXrEvdkzduEU2ep9SOnCmY%2FIV78dMxeLZeDeCy8zUPqAmKITx5WRcc3JAmuXKzre3nw3OnMr2dzM9EyJma8FMn1LJCAzQTpsrmRULAa4Tz0ppb%2FjpblFAkg62C%2F5DT7MA7us0EuNG1JbWs4r3ZO%2F0BOmKPsW6iu6V38evVsjCH7wo6HojWY3d%2B%2BPFlnt9gELk1APo91yPpmSg68wA7hWkSvr2TM9lNbt8RxJipswnNR6sBlI04NU%2BxsjKq%2BOpXjumk5dU0F7t05Rx1en8GVekdkwgLLgvwY6pgEgFdk4RSD%2F4JFL29sNvQUu06gJkB1kKFZGQh94MJA4OQmc7cWgJzzwjoVw%2F4uEM7MB%2Ba0%2FZMzSRoRsl36TVKkLwprg5TcInqGKWhVZF%2BEU4t97XPWnRXjRpLZdTera8evvCIs6jLfQEl%2FZXY91WZYq8F25WvxbrscvL4DheHFTEg7I2i2KK7EGUg6IfXPxSzgLOTV5T2eAM27D0xtU0mFjW%2Blb%2F1ke&X-Amz-Signature=a5b9a0c22dd51b4f79b733f3bde438cdb49d588dfa3a377bed3461fb1278aa92&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TET5BBUI%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T200917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJGMEQCIAdpgkS6SmmKKoKLyLiJzNq4CrQ6Hab%2FvUZC777QjqHrAiA52RHAh2MGiUUM7krCpzBMImMI6IFGbVzbWZ1j78zBBiqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbeKMrxIleVE7lZk0KtwDuKqUUPZeK1nC3%2BruFpmbzaBS5rhrTlf%2FBsE0n25a9JQ1GsdjGgOshFIyxC6hlC7aQWBYlR7uvECpvd%2B8YKLsvDF3WJOX%2BSpeJImANQwRJUI3mZ2mWDlbdZySU60iT3HyZaWC4RDOzIPx8caHo0ZGe3UFO%2BBzxW4BDrTYBuxYQKfKAwzfD5Bd7%2Bccafz2nyObbMKDShKho2cWt0tmp6yaJFdc2%2BOO3ZsN0Hz4%2Bg7Z4GfAktMbIQBFLahR70biwWaetTtloDTXuwy8Z2DT3q3K80XaKMicCMs22JaD3DBcgxptCg7l1pvhkbxB7zQHxGuCOn5Edu25gBtff9vRCMSHrObh9r2rMExDyBztmXrEvdkzduEU2ep9SOnCmY%2FIV78dMxeLZeDeCy8zUPqAmKITx5WRcc3JAmuXKzre3nw3OnMr2dzM9EyJma8FMn1LJCAzQTpsrmRULAa4Tz0ppb%2FjpblFAkg62C%2F5DT7MA7us0EuNG1JbWs4r3ZO%2F0BOmKPsW6iu6V38evVsjCH7wo6HojWY3d%2B%2BPFlnt9gELk1APo91yPpmSg68wA7hWkSvr2TM9lNbt8RxJipswnNR6sBlI04NU%2BxsjKq%2BOpXjumk5dU0F7t05Rx1en8GVekdkwgLLgvwY6pgEgFdk4RSD%2F4JFL29sNvQUu06gJkB1kKFZGQh94MJA4OQmc7cWgJzzwjoVw%2F4uEM7MB%2Ba0%2FZMzSRoRsl36TVKkLwprg5TcInqGKWhVZF%2BEU4t97XPWnRXjRpLZdTera8evvCIs6jLfQEl%2FZXY91WZYq8F25WvxbrscvL4DheHFTEg7I2i2KK7EGUg6IfXPxSzgLOTV5T2eAM27D0xtU0mFjW%2Blb%2F1ke&X-Amz-Signature=9149dfe796210a8ba4eb5a37e600bcf3d9c60d96fbf3a1e3ef6e5eff1b8bfa75&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4QUXD6Z%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T200921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJGMEQCIH6qQiNtSgEM994JRCZb%2F8xEa0ahNSTNWJoLiD8Y74j%2BAiAwVTSPg1LFE3I4c8Hz1UPNINuhbXQsh9i1lZ%2F8n%2Fom5CqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgdXc6ZNdwMncVeewKtwDB2cXNCWN3qIGo1ibVgW4s2%2FE5791fw7u5bDnCtSHyj%2FCQzx1d%2FirALfplznhF21%2FedsNxQu0c9d%2Fe%2BC6ZNChxpSy64wgRxPlxfnn1B4WvM5iBh6ebL0G%2BTyKx8sqesNN8chrfXoK8pHnpViKMuqzTjD14g124jwZiJZNkzW%2FiMJ7gMvX0hDtez%2B3awKFvaSwEhUN0q%2BQ9wQM5iq%2BqZgGY1UuSc%2FA7iV0rg27jy3YtIbGP5vreqw8xxgRB35lZGuCCT%2FQOjp0V7PMExuDa%2FeGCTYvqlW1u3OPdutpeldXyEhuG1ZB4PwWMV92EBp%2BJ%2FZ83GN0KDr0kU8gSWCkMdsv81%2B0h7GcQf%2F8HP%2BZsqPyM2f99MxzeKFUbi4%2F8rTorYGGUuNPqE8bt5sxlS7rJXRzWi1X%2F%2FW8GmphSyeRE4C14PzJUOh3nYGulpEOT8M145IJ07X4c80bgrv5dXnUKCaU4gRA7tqNj1Exjl9jSQYtaS64ocTX5hFj0svJIDzluZM2Z4MUzqTAyalBgaLl7FoKkC%2Be6PbwKCbqurbTlLUGUyUc94jBmmtbeDHwtcxnY4ZWa9BR4mCUDslCTAlx8X8gwILFqrR9R6vK4TU3faWIFfgTKbkGjP5%2BV%2BQCBLEwjbLgvwY6pgGl%2Bz80iY0mhM5294evGPyS5qBtV%2FBe1W3cYHSCPURIU3BHhAdC53Qo1%2Bv9bgWyx7pv62iIINu%2F5Zi5%2FJMGaT1%2Fvj7eUWgR%2FFyuadxVDcWnh9t8HZTZPWA%2BHZ7MccvSpWKB%2FjIQ6w8r6DQUK3RNIYIlUC%2BDc29D6kk%2F5WQ7CKnZuKLysx97BOIFJ0NnB0mJ%2BcE2EUxghzrpTXT7s0YjnjEkelILx1r8&X-Amz-Signature=d0afae25eaa4e94f763c22118be4c1590ad3b1d49c4cf6bd03d0a9854064671a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NP2LEOH%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T200922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIQCacwcYLglPNR9RM3QyCY%2FBurm%2BbtA4Al%2FJq%2BCIfJdG2gIgSmwwxRPYBMb7PsCi75XT1NuxDesS5SlYmEtZZ1djTcMqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2FNnIYRkSEdNoLK6CrcA7I3SdfDc%2BwHNeE%2FuoCa0TTP9SGDuHxWlmWo4am1%2BUd5VRE9xBpSQyJ%2FuJPHEjDD%2F27ruz5KHP4D0Mx53eyvNEjU%2B6BxjXMhc5C6kh1xZ8azJL6YDYfjzzCn8mLrdLpknVgI0JSJJ%2FG8uVhMmNVOF%2BOKEycDvw%2Fg8FHlc1EOrNNJQ9r%2BvPD8DTbY7%2FgHbaAWxn933UpWXwSwwgCxS0JlfMei5gB2VWed48G0%2B12HS44xPJDXNpsPrbLo83LL9tbMBreFHwDNVkAmNYPCqim9x7BHS6PTVhC%2BsIDkbwIaNWK7%2FhfpzM%2F0dQIcipjcv27ZRWSwHtFjNCzdG%2B4xKhnOvkUJjDtbzpAG5xZP2PUKaeh2S8MFDwr3wJeVPX7%2FCh%2BUklG92ecnJD%2FWI4RZMpHZoKL6Ht85NUHCykx00iGer1qkfWhgBlI0%2BLogAvZyB%2F8wLLlJTlEM4yEKArYQbj5ObxWLTpHhUGC7zw9hVk9iY%2BIf5KaYGJ0duyMhwI%2B5LnYM2nBdRzYbAomEE1qlg7qcr%2FVJVfpbw0h7gXeMqdNy4WCkUwYtI7MWibQ%2BeKm8NCWO8BFhjIyDRx5qO13%2B%2FeAx%2BYguc7IWj6iG4vui9%2BtCpOgIreZLiRhYBwLSLwWNMKGx4L8GOqUBs%2BKvsA2qmu7zvjSKck7zUtHqclorUYJAwnQy3p8eQs4bPZN5nI7pdkC2QGp19ZNslVS%2B%2Bi9YZE4YCA9fxKxhKYZV1w0BFsZVtVUodk%2BiXY68HTC1UD5xbbp6xIF%2Bc8SWVNYlUtZQg5DgWSbRBbocOSsSlPO%2B98lQeiAbbcB02ySKl3KXO5OYOFXuDwjGNjpAOo%2F9lg18feJk%2F2gGNy4RV7mepTVZ&X-Amz-Signature=72411793bfb40f159daf6234d8e0277f663e209f210c3411ed0ebf17ce6ee053&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TET5BBUI%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T200917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJGMEQCIAdpgkS6SmmKKoKLyLiJzNq4CrQ6Hab%2FvUZC777QjqHrAiA52RHAh2MGiUUM7krCpzBMImMI6IFGbVzbWZ1j78zBBiqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbeKMrxIleVE7lZk0KtwDuKqUUPZeK1nC3%2BruFpmbzaBS5rhrTlf%2FBsE0n25a9JQ1GsdjGgOshFIyxC6hlC7aQWBYlR7uvECpvd%2B8YKLsvDF3WJOX%2BSpeJImANQwRJUI3mZ2mWDlbdZySU60iT3HyZaWC4RDOzIPx8caHo0ZGe3UFO%2BBzxW4BDrTYBuxYQKfKAwzfD5Bd7%2Bccafz2nyObbMKDShKho2cWt0tmp6yaJFdc2%2BOO3ZsN0Hz4%2Bg7Z4GfAktMbIQBFLahR70biwWaetTtloDTXuwy8Z2DT3q3K80XaKMicCMs22JaD3DBcgxptCg7l1pvhkbxB7zQHxGuCOn5Edu25gBtff9vRCMSHrObh9r2rMExDyBztmXrEvdkzduEU2ep9SOnCmY%2FIV78dMxeLZeDeCy8zUPqAmKITx5WRcc3JAmuXKzre3nw3OnMr2dzM9EyJma8FMn1LJCAzQTpsrmRULAa4Tz0ppb%2FjpblFAkg62C%2F5DT7MA7us0EuNG1JbWs4r3ZO%2F0BOmKPsW6iu6V38evVsjCH7wo6HojWY3d%2B%2BPFlnt9gELk1APo91yPpmSg68wA7hWkSvr2TM9lNbt8RxJipswnNR6sBlI04NU%2BxsjKq%2BOpXjumk5dU0F7t05Rx1en8GVekdkwgLLgvwY6pgEgFdk4RSD%2F4JFL29sNvQUu06gJkB1kKFZGQh94MJA4OQmc7cWgJzzwjoVw%2F4uEM7MB%2Ba0%2FZMzSRoRsl36TVKkLwprg5TcInqGKWhVZF%2BEU4t97XPWnRXjRpLZdTera8evvCIs6jLfQEl%2FZXY91WZYq8F25WvxbrscvL4DheHFTEg7I2i2KK7EGUg6IfXPxSzgLOTV5T2eAM27D0xtU0mFjW%2Blb%2F1ke&X-Amz-Signature=6b637fedbe36047ab4be48740b9bca791b1b5df225e567ab8f09e3fbf8ac5c74&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
