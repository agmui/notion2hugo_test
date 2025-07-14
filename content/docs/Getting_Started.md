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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4CJZRCF%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T101035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQDLz5CLOGuh4PQWaKeAhln0crH1zRrXohT3mpX%2FN7QUXAIgPXHzjkHrtJWTdaVVb8%2B6fbkBrdrOOxW%2Fx9SYkQdCHUUq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDNktvPwV1YTwfiIuayrcA%2BkZycHer9scZQgmflIaP97RsnsIR1MuEKqeAuhwqUkwIc0yYIO2gJZhc8wgndYKGtmXGZK9kQHmVyVKtA8SNw1es95glTMFu49DfZQEc1%2BZBjEH6Yv8FOIjCDPfOz9MmtovrX5iebuseWvc9RVE5oiN9Mnz3DPnsqke1ltTHJRtdGWEhtTQpj9L%2BRYy2C55bOkrHwn0raJnH1X6QVeYjnLAXFiIB12QkIx%2BOf%2BgbyVsTY%2F942CylgJ17IKvbJEPCM1vbsziLcP0D0aO7g%2FVYzDUWFAq%2FjzlkjAGN44GLaSqqzaw8AbZxNrx5IWEcan4dUHkE0l1B30CJzcc0uAuJTHGkH8NudDlnsRa1Cm8jlURSYxm2lmwjlrYWsE793uhBMMgXCwRmsUgOTZkVyUaDSzmqLP5lndYoGW1H8YGEXwNp6iYPCcyPtVXym45Po6g5GNOBRXZwb9pQqIk%2F5Qr4S%2B6dxHkAo0bc4%2F%2FkeXqzuieF4DcivFv7Ux5ZixtyitOQ3m%2FCjSQMDoU12d%2BwVmDp%2B%2FAQHzwfSj67zZHAznewdvc96Ie%2FNJ9uYP729hDRmi0fVLYVe2WX88znMFY1AZ8lgLMHKTvL8k20qPEGJ8OXzmMWqUymy%2BA3rHwQKd6MIWJ08MGOqUBW8iFCXTHnIJlWpt1WBiCXWhoGl%2FX0P3V3TasqRTbX9uRBio1mLNDJWJLWd6LKN9lIOmHxcF0291IP4yEMZgGmB%2FQ8b4CVZO736fXcqwPreu8EJcwFlLYKCR1fSWlEj%2BsGHpXu33Orvv3AoDHzKtM2CvwWD6PcT0IduSvnaOWkQRmauYasCepJhZANvwKCn50JsNUBf4AEWk7Ayoax4uHrYCBiSnL&X-Amz-Signature=c889d0de1dcad07f27bba74fc98e1f4caa796d949a082d864166d790e92f660a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4CJZRCF%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T101035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQDLz5CLOGuh4PQWaKeAhln0crH1zRrXohT3mpX%2FN7QUXAIgPXHzjkHrtJWTdaVVb8%2B6fbkBrdrOOxW%2Fx9SYkQdCHUUq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDNktvPwV1YTwfiIuayrcA%2BkZycHer9scZQgmflIaP97RsnsIR1MuEKqeAuhwqUkwIc0yYIO2gJZhc8wgndYKGtmXGZK9kQHmVyVKtA8SNw1es95glTMFu49DfZQEc1%2BZBjEH6Yv8FOIjCDPfOz9MmtovrX5iebuseWvc9RVE5oiN9Mnz3DPnsqke1ltTHJRtdGWEhtTQpj9L%2BRYy2C55bOkrHwn0raJnH1X6QVeYjnLAXFiIB12QkIx%2BOf%2BgbyVsTY%2F942CylgJ17IKvbJEPCM1vbsziLcP0D0aO7g%2FVYzDUWFAq%2FjzlkjAGN44GLaSqqzaw8AbZxNrx5IWEcan4dUHkE0l1B30CJzcc0uAuJTHGkH8NudDlnsRa1Cm8jlURSYxm2lmwjlrYWsE793uhBMMgXCwRmsUgOTZkVyUaDSzmqLP5lndYoGW1H8YGEXwNp6iYPCcyPtVXym45Po6g5GNOBRXZwb9pQqIk%2F5Qr4S%2B6dxHkAo0bc4%2F%2FkeXqzuieF4DcivFv7Ux5ZixtyitOQ3m%2FCjSQMDoU12d%2BwVmDp%2B%2FAQHzwfSj67zZHAznewdvc96Ie%2FNJ9uYP729hDRmi0fVLYVe2WX88znMFY1AZ8lgLMHKTvL8k20qPEGJ8OXzmMWqUymy%2BA3rHwQKd6MIWJ08MGOqUBW8iFCXTHnIJlWpt1WBiCXWhoGl%2FX0P3V3TasqRTbX9uRBio1mLNDJWJLWd6LKN9lIOmHxcF0291IP4yEMZgGmB%2FQ8b4CVZO736fXcqwPreu8EJcwFlLYKCR1fSWlEj%2BsGHpXu33Orvv3AoDHzKtM2CvwWD6PcT0IduSvnaOWkQRmauYasCepJhZANvwKCn50JsNUBf4AEWk7Ayoax4uHrYCBiSnL&X-Amz-Signature=5314ecf2bdccd2c232244774126f77254e6d41824dc0aa7a75b3a8f35007bdf3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4CJZRCF%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T101035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQDLz5CLOGuh4PQWaKeAhln0crH1zRrXohT3mpX%2FN7QUXAIgPXHzjkHrtJWTdaVVb8%2B6fbkBrdrOOxW%2Fx9SYkQdCHUUq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDNktvPwV1YTwfiIuayrcA%2BkZycHer9scZQgmflIaP97RsnsIR1MuEKqeAuhwqUkwIc0yYIO2gJZhc8wgndYKGtmXGZK9kQHmVyVKtA8SNw1es95glTMFu49DfZQEc1%2BZBjEH6Yv8FOIjCDPfOz9MmtovrX5iebuseWvc9RVE5oiN9Mnz3DPnsqke1ltTHJRtdGWEhtTQpj9L%2BRYy2C55bOkrHwn0raJnH1X6QVeYjnLAXFiIB12QkIx%2BOf%2BgbyVsTY%2F942CylgJ17IKvbJEPCM1vbsziLcP0D0aO7g%2FVYzDUWFAq%2FjzlkjAGN44GLaSqqzaw8AbZxNrx5IWEcan4dUHkE0l1B30CJzcc0uAuJTHGkH8NudDlnsRa1Cm8jlURSYxm2lmwjlrYWsE793uhBMMgXCwRmsUgOTZkVyUaDSzmqLP5lndYoGW1H8YGEXwNp6iYPCcyPtVXym45Po6g5GNOBRXZwb9pQqIk%2F5Qr4S%2B6dxHkAo0bc4%2F%2FkeXqzuieF4DcivFv7Ux5ZixtyitOQ3m%2FCjSQMDoU12d%2BwVmDp%2B%2FAQHzwfSj67zZHAznewdvc96Ie%2FNJ9uYP729hDRmi0fVLYVe2WX88znMFY1AZ8lgLMHKTvL8k20qPEGJ8OXzmMWqUymy%2BA3rHwQKd6MIWJ08MGOqUBW8iFCXTHnIJlWpt1WBiCXWhoGl%2FX0P3V3TasqRTbX9uRBio1mLNDJWJLWd6LKN9lIOmHxcF0291IP4yEMZgGmB%2FQ8b4CVZO736fXcqwPreu8EJcwFlLYKCR1fSWlEj%2BsGHpXu33Orvv3AoDHzKtM2CvwWD6PcT0IduSvnaOWkQRmauYasCepJhZANvwKCn50JsNUBf4AEWk7Ayoax4uHrYCBiSnL&X-Amz-Signature=0e3afbb427447d7582026b52cda1d1ecfdedea737841214acce04c6d40826178&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIVW3A37%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T101039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQCsKkhatcWqXdic4ku96zNasZ%2BY7cCBeb3ufckCXi%2BgAQIgAyizTpXx16DqYSN6T3wJKSnEJEFATm1Sfw0Ri5Ed4soq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDPl%2F4DaCgyJpHNHmrSrcAxifIrKTg%2F8Qo4FSXCLjsa%2FulJOYUGG7kTB0%2Fy97S4cgUM7tAUW7ge5eCfpLs8LThswOX6Fxue7eZlPfFN82O58rogP570CTSTlbA0h8Ig7qqmg5TTnalGn8nV6ekiJK2ablIY%2FvDfWycK1g04Iq02OL2R2d5wcYYrs%2FsbazPFIPI05LyGsCvv15jkTYCYANi7MNSllit8l9dt34oPCLYVma6OGp%2FjyitDl8UMy31iUJ5uSwMoR0gOGLV0z2iAovbNBUB36Ho5c1b1PMfwf8%2F0iw1kWJ88uWCOp3AX1glCMx2kX8V1qKD%2Fkm5N9BR%2FjOd%2BEsQDpaRtLhXopKynPtD0O8p%2BeMRpY2Q3d%2Ftck587D2SfBTA%2BzIYMbtIB6kNX2YbzuQqQj0LTLsUJbn9J1wrYFtohW5ph64W%2Bz5AqSE1M5eTB6gweH%2FGXgFuqk3TagRvzCCfcnyZTc%2BMW3JuwzUuc%2Bm1db%2BoMWdwsBzB6ln3WWVpJokcDtymfBcGF97EixYy74M8JXN2EaVce5FI0Wp6BxZonO2M6h7eAY%2BtUvtqwJ%2FwizqkWW7ec5uL4rCF4ILy0bVgNczCper23eJAPay%2BXBccJ9Pe5UTiSKyTfXnUVU3FhTFs0qkZKbN2LwCMP%2BI08MGOqUBphE33ENbbI5UqDeBGKOlQK6QrtRHHW4KO2Rxsja2TonMXoweVyq8cxzVooXb2XfyjqFkOrfHhGgo4ZMmQKvpwLLqENx9KiXUkEwEDq2xv%2F2hCTWLqMsioxbG8C%2FWZnFRIKqAga2QazJo%2Bg4O%2FImUlcWKudb4S8FzylUZE9%2FHNjLNmIVmWiHVZZ%2FmZxwiMwErEOZJlOm2Xs8m3cb3opSJ0siQmAsv&X-Amz-Signature=f0560d2b87e82539ae679783e96abf9c0716e3778deb60d81b600ae7a028ca23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BRPINIR%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T101039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQC%2BOkhfIp%2Bc5sWMgtJ%2BsWbINLK0A9DX2IoG8nB7U9hZIAIgCDWo2%2BJdgIJfEPcaP973j9hOiq%2Bl%2BCBEZcwFhG3OlHwq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDE4ttazTbkI4PI3vBCrcA9LDW9tHDUbGJOM11RqCGrTbCoc8cE3Xqjn3UhF8vmI8bfmh2ZVxyR5c3M4GrT93KkJXItwk8kchQhO34gxao%2BQrxjTBpzIYk%2Bbi6NE8jUVZiZXbShDP4VdayWWZqNgE9SA1foo4Mywzu0NZ7kEYK5jeYZfzg6fAaZoGi%2Bt0bT2NP1Tlt%2FJ07%2BF8x%2BEZfzAKRHSXxI1tbcSNCj43PzGnBouEUZhSL%2B6S1CRADun4PNSK3GjKcAVuc3zkTAB%2B8MyS4PdsuBRpVm0TJ2EloJkOXgOTfnwu3YUVHwQy7hP%2BPxjT7W7eV%2FBNLG8w0m1VJd77hzxyLnATFcfZII8bmSMS6mzAQCI6qpDCDzLqkoz1IZDJCPN0i3cqdf8EsEsfgons%2BSpE4v08G%2F9Ed4VqFGWutWcy%2BIpilxf7w%2FQLfihgvaKR%2BDRsC8F5wpKmHPIYKA9mQHFN5B%2FCH3HR9rzSfJ7TqkFwTdUqJSH9QUOmN7mre%2FPT93asjklmhqXreuKeLZ1YlRdAyQ2V0ER7X1ZnuK9YGTSVtnqynxrAbW77XlK9EV7eOui9CsuLPLC%2FFc8eo6kYedohm1v0K5104ArFMIq%2BXtvevBQRNbHtGStNyBw8J3%2F%2BsKKrvKBnj1Z%2FOFGrMMmH08MGOqUBJ7J%2B9wmctbZbfRz%2FJR7qm48o5Z1BMUqxkxFHEZKtjmCknDPf%2FE0VG0WjBSfQUYCEgFsvQbIg3Yc2fiP9bEO8BKBad1V%2BWnzZbp6OxhqK4Q8fppD2WMCqpcAnRY7Vp9%2BFo9Rlqmj%2FzVq80PymXzkz1%2FSYNI3UoefnxBAFbq0E%2BdMsf7Dkxx9vQii57YdNURGz7niM4pvj1oP%2FSuwxkblufTaGBlYq&X-Amz-Signature=51b9a5a989f75cbedae3c1fd2fbad1770e6352922770319ed63a02b8157e4b8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4CJZRCF%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T101035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQDLz5CLOGuh4PQWaKeAhln0crH1zRrXohT3mpX%2FN7QUXAIgPXHzjkHrtJWTdaVVb8%2B6fbkBrdrOOxW%2Fx9SYkQdCHUUq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDNktvPwV1YTwfiIuayrcA%2BkZycHer9scZQgmflIaP97RsnsIR1MuEKqeAuhwqUkwIc0yYIO2gJZhc8wgndYKGtmXGZK9kQHmVyVKtA8SNw1es95glTMFu49DfZQEc1%2BZBjEH6Yv8FOIjCDPfOz9MmtovrX5iebuseWvc9RVE5oiN9Mnz3DPnsqke1ltTHJRtdGWEhtTQpj9L%2BRYy2C55bOkrHwn0raJnH1X6QVeYjnLAXFiIB12QkIx%2BOf%2BgbyVsTY%2F942CylgJ17IKvbJEPCM1vbsziLcP0D0aO7g%2FVYzDUWFAq%2FjzlkjAGN44GLaSqqzaw8AbZxNrx5IWEcan4dUHkE0l1B30CJzcc0uAuJTHGkH8NudDlnsRa1Cm8jlURSYxm2lmwjlrYWsE793uhBMMgXCwRmsUgOTZkVyUaDSzmqLP5lndYoGW1H8YGEXwNp6iYPCcyPtVXym45Po6g5GNOBRXZwb9pQqIk%2F5Qr4S%2B6dxHkAo0bc4%2F%2FkeXqzuieF4DcivFv7Ux5ZixtyitOQ3m%2FCjSQMDoU12d%2BwVmDp%2B%2FAQHzwfSj67zZHAznewdvc96Ie%2FNJ9uYP729hDRmi0fVLYVe2WX88znMFY1AZ8lgLMHKTvL8k20qPEGJ8OXzmMWqUymy%2BA3rHwQKd6MIWJ08MGOqUBW8iFCXTHnIJlWpt1WBiCXWhoGl%2FX0P3V3TasqRTbX9uRBio1mLNDJWJLWd6LKN9lIOmHxcF0291IP4yEMZgGmB%2FQ8b4CVZO736fXcqwPreu8EJcwFlLYKCR1fSWlEj%2BsGHpXu33Orvv3AoDHzKtM2CvwWD6PcT0IduSvnaOWkQRmauYasCepJhZANvwKCn50JsNUBf4AEWk7Ayoax4uHrYCBiSnL&X-Amz-Signature=bf033601216e996be0526e547db692b9fafe718e527023c2e82c67a7995f67ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
