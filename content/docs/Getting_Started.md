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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Y3IASZU%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T220807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEq9OM7D96PAuZNgFZZt6RMheTXCokYsYbuv1fACaHVVAiEAgbsShn%2B%2BBCCk38ERif2JNV7SjuMFqQBTt1jdmxjFarAqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK%2FekDCNwEtcLln4yyrcA6Ef3GBh3ysfxI%2FCcMzbuZHRyOLeoJB8Cu7VP%2B5QF9pji3dH6cdV%2Fas44wRUacGQzLrgtW6YWBbqd313mhOyhdfgrcYlQNTR0oRLng1vGIOVLzidxuXaJEezp7HMU3x%2BpveZRD%2FA58KjXd1tUNsJAElVz8WLv0Yj8eufe4eyCWffdypdLYnkMwLuwz2tTNo0xZe3Hgl8kin8hCqa1bshEm4Y05cVlOemJd3hq7rt%2FXFgXZD10mFOZ4ERY%2BnCVTuRpkA%2BU9Cst1nbesrUCFKDgo5846edGRW6B%2FCXHVUINWoRIt8dWcli3lhALzW53jLQT04ctlxRiMElYWexb2W3UlJvfbYN47stnuI54q3eCMnQTPOI5Scx%2F5Hb%2Bn2B9bvY2p%2Fwz5VRZexhZ%2FPl6CZJcJXAC1E0agKbbKid6tFUgKsS%2FR0Xdh7p0%2FVoklENdDmbgbUKS6KpyEIIS4MEOJR2%2BVpEzTLmgVmv4IKKmX5kclRU0hPK5NoXEeNjIwEdqdv%2FzH7orIluJln92Zhf%2FcQTLtcQE6U0%2BCRqPaw3mYTYSjItNfwzhPIEG1dyrhjF9Rvkl6QleLrk10cSk649rHKSmaiwnvMUKS1%2BjcMjnROTO%2BZ8nESgVwUpJ9NEVI1DMOOty8MGOqUB%2FXnp4t8ksE%2Bl0eClSzrIzXj%2F0G1F3KYx0HKZQtm5iL8UkAYoCYAYT20EpElO8ladDnT6ocLKZmueiHoGSYPQzRarg1UEyBbxtkoz9xbPlCVdkZzgeFXwkVbRfZXKNNzorfFc4265OwVHgCOzkSTEV%2FqCAZm%2BeIt%2BHMONmmMUulhP%2BoH61SBSYVVqZKIY2uUqmRT3BHTs49Py3GEjcJe1kO1CuiSp&X-Amz-Signature=e2ebb3c461c9bb91669bfe4155ca1ccfd5dffa633e80a691e5734e1ca313c42b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Y3IASZU%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T220807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEq9OM7D96PAuZNgFZZt6RMheTXCokYsYbuv1fACaHVVAiEAgbsShn%2B%2BBCCk38ERif2JNV7SjuMFqQBTt1jdmxjFarAqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK%2FekDCNwEtcLln4yyrcA6Ef3GBh3ysfxI%2FCcMzbuZHRyOLeoJB8Cu7VP%2B5QF9pji3dH6cdV%2Fas44wRUacGQzLrgtW6YWBbqd313mhOyhdfgrcYlQNTR0oRLng1vGIOVLzidxuXaJEezp7HMU3x%2BpveZRD%2FA58KjXd1tUNsJAElVz8WLv0Yj8eufe4eyCWffdypdLYnkMwLuwz2tTNo0xZe3Hgl8kin8hCqa1bshEm4Y05cVlOemJd3hq7rt%2FXFgXZD10mFOZ4ERY%2BnCVTuRpkA%2BU9Cst1nbesrUCFKDgo5846edGRW6B%2FCXHVUINWoRIt8dWcli3lhALzW53jLQT04ctlxRiMElYWexb2W3UlJvfbYN47stnuI54q3eCMnQTPOI5Scx%2F5Hb%2Bn2B9bvY2p%2Fwz5VRZexhZ%2FPl6CZJcJXAC1E0agKbbKid6tFUgKsS%2FR0Xdh7p0%2FVoklENdDmbgbUKS6KpyEIIS4MEOJR2%2BVpEzTLmgVmv4IKKmX5kclRU0hPK5NoXEeNjIwEdqdv%2FzH7orIluJln92Zhf%2FcQTLtcQE6U0%2BCRqPaw3mYTYSjItNfwzhPIEG1dyrhjF9Rvkl6QleLrk10cSk649rHKSmaiwnvMUKS1%2BjcMjnROTO%2BZ8nESgVwUpJ9NEVI1DMOOty8MGOqUB%2FXnp4t8ksE%2Bl0eClSzrIzXj%2F0G1F3KYx0HKZQtm5iL8UkAYoCYAYT20EpElO8ladDnT6ocLKZmueiHoGSYPQzRarg1UEyBbxtkoz9xbPlCVdkZzgeFXwkVbRfZXKNNzorfFc4265OwVHgCOzkSTEV%2FqCAZm%2BeIt%2BHMONmmMUulhP%2BoH61SBSYVVqZKIY2uUqmRT3BHTs49Py3GEjcJe1kO1CuiSp&X-Amz-Signature=2d1956d3bded3229c635e735c1d69dcf152171975cfb9696965b03690d6a176f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Y3IASZU%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T220807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEq9OM7D96PAuZNgFZZt6RMheTXCokYsYbuv1fACaHVVAiEAgbsShn%2B%2BBCCk38ERif2JNV7SjuMFqQBTt1jdmxjFarAqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK%2FekDCNwEtcLln4yyrcA6Ef3GBh3ysfxI%2FCcMzbuZHRyOLeoJB8Cu7VP%2B5QF9pji3dH6cdV%2Fas44wRUacGQzLrgtW6YWBbqd313mhOyhdfgrcYlQNTR0oRLng1vGIOVLzidxuXaJEezp7HMU3x%2BpveZRD%2FA58KjXd1tUNsJAElVz8WLv0Yj8eufe4eyCWffdypdLYnkMwLuwz2tTNo0xZe3Hgl8kin8hCqa1bshEm4Y05cVlOemJd3hq7rt%2FXFgXZD10mFOZ4ERY%2BnCVTuRpkA%2BU9Cst1nbesrUCFKDgo5846edGRW6B%2FCXHVUINWoRIt8dWcli3lhALzW53jLQT04ctlxRiMElYWexb2W3UlJvfbYN47stnuI54q3eCMnQTPOI5Scx%2F5Hb%2Bn2B9bvY2p%2Fwz5VRZexhZ%2FPl6CZJcJXAC1E0agKbbKid6tFUgKsS%2FR0Xdh7p0%2FVoklENdDmbgbUKS6KpyEIIS4MEOJR2%2BVpEzTLmgVmv4IKKmX5kclRU0hPK5NoXEeNjIwEdqdv%2FzH7orIluJln92Zhf%2FcQTLtcQE6U0%2BCRqPaw3mYTYSjItNfwzhPIEG1dyrhjF9Rvkl6QleLrk10cSk649rHKSmaiwnvMUKS1%2BjcMjnROTO%2BZ8nESgVwUpJ9NEVI1DMOOty8MGOqUB%2FXnp4t8ksE%2Bl0eClSzrIzXj%2F0G1F3KYx0HKZQtm5iL8UkAYoCYAYT20EpElO8ladDnT6ocLKZmueiHoGSYPQzRarg1UEyBbxtkoz9xbPlCVdkZzgeFXwkVbRfZXKNNzorfFc4265OwVHgCOzkSTEV%2FqCAZm%2BeIt%2BHMONmmMUulhP%2BoH61SBSYVVqZKIY2uUqmRT3BHTs49Py3GEjcJe1kO1CuiSp&X-Amz-Signature=824ced3e2ddd726e35e15ae1e5cf9e1c9af3fcbb751c0b9d291640673d689d3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWQKGGT2%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T220809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHRQbeCKbEZRbPc3nfn6NBMoMgo0vEscShHebrgrQ1LvAiEA1AKzA0Wf8C8ol6I2coxu9hIuEDv32WpvhZRTpNDimn8qiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAZdBafupatPkOatEyrcA%2BRR5P80O2XP4cR6SdbJdNqfAFsQJt2Gkdo%2F%2BnVPa0LMMDUjnVUwu5OXHSgsMVUgGuxFB4XwZm8NL%2FCBLd%2BTznP2tQkTrD17T%2FHBdnO8JHEQSZcSx1rCW6FszEauCxsskYrLXjQZYRL9H37uE2dkgDV0wkAd7CT2w8XT5LlW2tVsVWnqdroeM2llK1y68e0xU1pMTZ4RWFAlVx6tWL1svC%2F1V%2BcF7keO94x1KylKN3ccIXSL0AYfbOi3AAFrvhI%2F7ZFY%2FhxacLrdTCDn9tsVN9S0XGcvLWFO8cHwfwZHudrXZe3p5YxEQtYmK5QwZyWC2wfji8x8%2FAYJvWLssQ%2FwoS05O24EdO5gE6m%2BT1aPsYbF0iOsW87aTLZkd%2FoaNEo7rD%2BsTTyplPlOgXqKSTzmE71tPNEbMyOQEIqBIMPv1Oo63w05rczbPD%2F47NWP0wa1lIv%2BPtvAzengiaKsJWYhuWt%2FH7voqx6Ei14%2FeHCS5h1ylc6v%2BA1gf9YfqGmiY5D9z%2B7xYKFFFHI%2BHdF%2BjwAcOxOPgiBMYRO9zFHW69Wr7VngBf6blm6dkUxt52Ar0L%2BYuSfFhEa1ZI7PHE%2B3DHXlPvUDElGSxb8ZDevFAAH%2B95m9EZ0Hx1uXnw4tnZCwMKCuy8MGOqUBMKcKCOnc%2BUDL7YiLIS4f00wEyoDBZaWmmQtrR%2FRSjCbMzUATu9aQB6uWiwscKtWki7B%2BFiQN12%2BeOsoqtWzS6DkSN1JjsI3Sp2zmktjvY34phtzKJ%2Bzz4y2227F%2BA3M3JVtS%2FSbRaC9AvMpxU3Oyj1oQmZb%2BxWNZ9wehSP2PcbqmIfq%2Ftuee%2FBpbb2Bl9iLxP3i2x6HMKvbvJbV9o9vN8rZLh1kO&X-Amz-Signature=aaa1da82024cde69c59c51fbf1e73e36ae8700681243f2a7566c33248a0f467e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTCRTPW6%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T220809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHtSUH7LrIf45JCYdS0pD2O7QSMlcBNgFonAxmYZ4j5YAiEAjtZze9I3bE6MIiUFC%2BkIE92TqGZHir%2FLNkdYGerkCF4qiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHmGHW3sFJgwOQ5S8ircAxMph6E3vaXIbS6X2%2FQPql3hTmT85ngn%2FAew5G49l6GvjiCNNrmhjcOyS9rgypZoiOaz3D6JOFHP4DgmxvFAwO2SbnQO2QokDLwtW9AhF32%2FVp4isogY3qNDmMjZu04J7sFpGRh%2FNyIoAvA7ikrq59H2fDRiLBAdi7YQaDCkIN%2BkRZInqght6OH1G6xGvHqN05lrSu4QWLGayYDCeNP9kU%2BL9oQ73RKfNafxfwsZ51RaWo91b84SGsjMdmsQH0h%2FmUM%2FlIDOpkVIpS%2Fi1RlCghGyTNJhyVTgAW%2Br%2B7KezEtqLvUSXODKqTAf8%2FPU9LCdZ4ew6sy6UWx8JzYqfLwskcte%2BHwvIKaQFejRMnZ5ZNm964QuArOiMGQzx%2BgGgVxB%2F3iWos49oMRawTb%2FB7Qaw26g2u6%2FpX0fsTl8MprF6yIriZo7SntZi53rR1RFwHT9mQiKkzM4cBqBSO2Zq86aSZNz2vifxdrg0ND%2B%2BWpE1iJ78Mp3lnXzBzK%2Bc7JDnOUg9ltC21su6hF3oBDWeMOlOnpaH%2Fz796n7X0%2BtHKGVNEqS3S9yyk6%2F0J0R4q%2BK0DOomgAVlLKX41dxwGkROnNHAr3TVaB%2B7E7LB2xXSZZeFu%2Blz7VyTdUEX5%2FdVqAPMMSuy8MGOqUBOA0YH0mG2JOukSw%2B421eteV7N%2F6gzrHro9Yy%2F5%2BJgalJtgcf9neP47Q7UlrqsHhFA7z%2FENIGVtbbNvQ6SWJRvqLHTXN2kgYwbzzqpOjdqPVfOUzlFIBV1Nh6Tx50wCrQ3QMy9lIvmFbHiDCzQt%2FL1c4tHY7nrxdQR2ieuo2qCLQfHpYKiTfnDvtsVLwWKlgsCNkjVjEJ5Qig9G7224FhqivPbTNj&X-Amz-Signature=ba12e9529d2691b4d20dda6bb589d592b264257e1fab1a47bf3a8dc292a5a6f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Y3IASZU%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T220807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEq9OM7D96PAuZNgFZZt6RMheTXCokYsYbuv1fACaHVVAiEAgbsShn%2B%2BBCCk38ERif2JNV7SjuMFqQBTt1jdmxjFarAqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK%2FekDCNwEtcLln4yyrcA6Ef3GBh3ysfxI%2FCcMzbuZHRyOLeoJB8Cu7VP%2B5QF9pji3dH6cdV%2Fas44wRUacGQzLrgtW6YWBbqd313mhOyhdfgrcYlQNTR0oRLng1vGIOVLzidxuXaJEezp7HMU3x%2BpveZRD%2FA58KjXd1tUNsJAElVz8WLv0Yj8eufe4eyCWffdypdLYnkMwLuwz2tTNo0xZe3Hgl8kin8hCqa1bshEm4Y05cVlOemJd3hq7rt%2FXFgXZD10mFOZ4ERY%2BnCVTuRpkA%2BU9Cst1nbesrUCFKDgo5846edGRW6B%2FCXHVUINWoRIt8dWcli3lhALzW53jLQT04ctlxRiMElYWexb2W3UlJvfbYN47stnuI54q3eCMnQTPOI5Scx%2F5Hb%2Bn2B9bvY2p%2Fwz5VRZexhZ%2FPl6CZJcJXAC1E0agKbbKid6tFUgKsS%2FR0Xdh7p0%2FVoklENdDmbgbUKS6KpyEIIS4MEOJR2%2BVpEzTLmgVmv4IKKmX5kclRU0hPK5NoXEeNjIwEdqdv%2FzH7orIluJln92Zhf%2FcQTLtcQE6U0%2BCRqPaw3mYTYSjItNfwzhPIEG1dyrhjF9Rvkl6QleLrk10cSk649rHKSmaiwnvMUKS1%2BjcMjnROTO%2BZ8nESgVwUpJ9NEVI1DMOOty8MGOqUB%2FXnp4t8ksE%2Bl0eClSzrIzXj%2F0G1F3KYx0HKZQtm5iL8UkAYoCYAYT20EpElO8ladDnT6ocLKZmueiHoGSYPQzRarg1UEyBbxtkoz9xbPlCVdkZzgeFXwkVbRfZXKNNzorfFc4265OwVHgCOzkSTEV%2FqCAZm%2BeIt%2BHMONmmMUulhP%2BoH61SBSYVVqZKIY2uUqmRT3BHTs49Py3GEjcJe1kO1CuiSp&X-Amz-Signature=41c532eabf034e76068e749f31be8548ccd7a9a116376c1071b6230219859d1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
