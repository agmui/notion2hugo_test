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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2BUOI4J%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T110715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2FgJ7Xc1eewh3t0dcpHAnlYfGiSRoObHmLcCEKI0vYAQIgRyD9U%2FYV3bvp4ER1MY%2FDbpKTYjDbDZPwArDXqJ9272cq%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDDueZsJ56auctZ9HjircA8NjnAz8zDyukF2G7THByfJb11iuGr%2BnyBBGnqLpFZzWH5RRdhieAVTHe9lG8Y%2BTgVp9WJ4CkbmBMkYA22QRnHRgUoWqsjg1wfuSYjlEfD48Dc%2BW1PsepSE%2BkWnCcKyeHSCCRtawBj%2B5o85eIoZOaU6ZWQJqX7PfVyyYcZf9shvnEhtRSeowMr6D9HInrUSAFM3qkTybyRV3R0vAoRfqfcx3A6sOr2Qc%2FGEfaT3Pl2n3RxHbnGhTDIqxW%2FcJDfOs2CedRxpUBITYf0%2FttDFdxC88UzboR%2FoJM%2BIZLfylF1DJghuzkpPCpVljOUcKvYFRe4tb5Fty0cZJeidM6M%2BmErT0%2BvRSL9wottg4Vqd4UwY8wVzUei8LxQX%2FxlHSY0dyySN%2FUcsVtT6zj2OnU8czCpIF%2BxrYm3oM6y2Je1Dy%2FqndiDVKM%2FflQgCc1cGQahiITmz54npsOjCnxir%2BmPeZnq%2Fq8Cjh33Sig5tG%2BREDbbDtTKzcxBV9rxlzkP3SEexNip7f0zJBiu2JUqJxJNhUisBy8FbDr%2BsIec5%2Bs7QHaKJGKl1KXXpMpXj8KqHw00jrrg6bYq1ibbS6aB4GoTOztO1IpiUTsr5bTwifYvX5tP8oG3qd0tKRCGVkMkfZMJHkvr8GOqUB2f2G%2BcTeO%2BzyEW67hctZ4FWNmQKURMiWfFfA7YrPxCRid%2By2zVVmGuPUpmIX0jJqyQk49cbdcNOma5kVEjJMi9Qpa83WQZ%2FgvPJm0WIETALZgDIUscRj%2FVZudZbN1k9fCgzi3xGgxJWyYxAJouKlJt0E78wCAuIAz%2FbsjDQIyZv8r1AH9RnjXYIWMzAw6tDT3gNVYItwBR2WVS6vEuzhH13dRq73&X-Amz-Signature=2cc9f3a923873c0a135a3599491aa9debd9ed3be5eb8c6944dd1b5ccf5952bc1&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2BUOI4J%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T110715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2FgJ7Xc1eewh3t0dcpHAnlYfGiSRoObHmLcCEKI0vYAQIgRyD9U%2FYV3bvp4ER1MY%2FDbpKTYjDbDZPwArDXqJ9272cq%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDDueZsJ56auctZ9HjircA8NjnAz8zDyukF2G7THByfJb11iuGr%2BnyBBGnqLpFZzWH5RRdhieAVTHe9lG8Y%2BTgVp9WJ4CkbmBMkYA22QRnHRgUoWqsjg1wfuSYjlEfD48Dc%2BW1PsepSE%2BkWnCcKyeHSCCRtawBj%2B5o85eIoZOaU6ZWQJqX7PfVyyYcZf9shvnEhtRSeowMr6D9HInrUSAFM3qkTybyRV3R0vAoRfqfcx3A6sOr2Qc%2FGEfaT3Pl2n3RxHbnGhTDIqxW%2FcJDfOs2CedRxpUBITYf0%2FttDFdxC88UzboR%2FoJM%2BIZLfylF1DJghuzkpPCpVljOUcKvYFRe4tb5Fty0cZJeidM6M%2BmErT0%2BvRSL9wottg4Vqd4UwY8wVzUei8LxQX%2FxlHSY0dyySN%2FUcsVtT6zj2OnU8czCpIF%2BxrYm3oM6y2Je1Dy%2FqndiDVKM%2FflQgCc1cGQahiITmz54npsOjCnxir%2BmPeZnq%2Fq8Cjh33Sig5tG%2BREDbbDtTKzcxBV9rxlzkP3SEexNip7f0zJBiu2JUqJxJNhUisBy8FbDr%2BsIec5%2Bs7QHaKJGKl1KXXpMpXj8KqHw00jrrg6bYq1ibbS6aB4GoTOztO1IpiUTsr5bTwifYvX5tP8oG3qd0tKRCGVkMkfZMJHkvr8GOqUB2f2G%2BcTeO%2BzyEW67hctZ4FWNmQKURMiWfFfA7YrPxCRid%2By2zVVmGuPUpmIX0jJqyQk49cbdcNOma5kVEjJMi9Qpa83WQZ%2FgvPJm0WIETALZgDIUscRj%2FVZudZbN1k9fCgzi3xGgxJWyYxAJouKlJt0E78wCAuIAz%2FbsjDQIyZv8r1AH9RnjXYIWMzAw6tDT3gNVYItwBR2WVS6vEuzhH13dRq73&X-Amz-Signature=02fe3debbf6178ba731602baea8883bdcf5a1f736df0abc7979d3853c610f30c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7VB6TQG%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T110724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIETIZiU2uHWOKlLxIgQWAbKHhBmzm1PL78S%2FcvJ1IPM2AiBp6NH8ViFUS3tV016Vezdm%2FsdBm9MAWPPhbQsWT5pzVCr%2FAwgTEAAaDDYzNzQyMzE4MzgwNSIMUVUgmRkvCvD6o%2FkQKtwDg2HDmRR8Eraxv43Ll76s4dJQvveSKAqWC2IKiNb4kX3Up8h%2B6gwdykysHHts7hRlqD9hpTtR%2Bww9zfyTb%2FdMai7Hqbw7zmuvF1ioZPda9iwSdmWsEF3N1A9%2BGKuvxHgVE77aJY%2FD22nSltRwBAekLt64FAatvkiLASfA1A4eII2dkY6%2FgWDjYWgb%2FxkRkIwxHw6P22etifu6caqs%2BpgMrysQkWAt0KPAw07Q8bT7qX6wMHOnrE%2F3L96BWQTQ9z%2BqSo7LfMgTXzwVlLdqG2fHbDxSl95vpwkgPtnGZIFg4EpjCdUOMTIrh9j8WRnHcxRbbApaha%2FW%2Fu02%2BEXIpk2itmA5q4hyg4nS%2FlEvm%2FFRy7KTtdt%2Fy6bTG8%2Fg%2F82z8bxLiGMEmfDgxITtm96ebti6wYXKJ9uMptHYwUQuxiXxkl39zDkqFsb8SSGJQhqWB8%2FkRbIEpC1mGL4nmBWJyD%2Bzmpb95F58hOeIaTCV2aEaxiKQAP4Z0TzTSfg64c0ubV8X9WadPQdx8qZ91SRq88Vrl93njzO2Z5gJuM8k05ZW5PnQhxqA3LuLI5L5LmMmcJrX2wKinhgAYuzJPUrWMOn3iF%2B5inC8FSQLeW%2F3cZ3zGT%2FAhbYyoILCuKQ%2BVpswnuS%2BvwY6pgFMv6589JyR3YDOzzwZaUTYktkOKdMhrErJTVIOJhMBUZDJ2Ro9P6wUtB1seC2KimPIeCRsO8CRF%2FDQVVn77asgaRnvV4RWSNdm8%2F3YLakRm3z1J%2BhruiJnd23VSnFzlx4BgYmBnRnNBQ6gSGJ4ro%2FUt8brD6iD3ll6I3wGjQYOPRmT73PhH1JLOcCZHtnDPp4COSK1lU4Bo6i6Z6ulOK1w%2Bv5QXsPc&X-Amz-Signature=5234b9b32be5f1fe3f7467ba405051784b86597c7b2b663f6b98611b802f6e80&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVHZSK5E%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T110727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAxgV2IB9FRgEdx8Kg%2ByY2DCB%2BUURT4h3JageOYObQ5DAiAOr%2F132Lvrm9oREmLRA%2B6O09fZKcip1STY6oD6dfETpyr%2FAwgTEAAaDDYzNzQyMzE4MzgwNSIMmLgA9ywJ5j715ZqKKtwDAZwH1SKh0ZrLP%2FcHK3muYxdMEZxxg95oUGsdpaYMcc8%2F6vrgSCq2T5i%2BWh8i%2Fivd6GjQ7zoQnuWiXPQ%2B2ZYbJkK7gpZnrYCCfjVbsUfTlQmN3wG8d94yzdruL6m9Oz3wgJAI0JRgNzxEjQveob55II0jCYUKqHoyHnFr7Vr71gGmgr91DcO7iJO6rYc4rta8NPf%2BVgEgpIKg%2B7W2aoYhp9T%2BXmyHuSI%2Fr63VE4kdPLbBc%2FoqRqKVrRqWa1xGOd2WePTk3DQNfMTbhNKJjBVrYCRwxrlp4CHPbYQy5V%2BPCBsFBSAIvevvAxzbwDEcFh1miVizXKkiqM7TBJo1N7izVM%2BOPIEv0qfjiX3P4Uj6rfl5w4WMusFWObF6W5TFPXWDf7Q9jBRBYDFR53SONp46dN%2BIA5ZyvVNv7U6wV3nVQ9mvXHMOD%2FutfF0QewNkVK1MqYoGW5K%2FeokdP1Y2mw8Y1Caiarq5ge4Z2blw2APmeQQ754mZaspR7hxfa684QMWFAfYm6F3Hxo%2FXuXgxbWdGLrTU11G9OD1o11sBbsD78FDEuc3v0UsfhB8UqLqCfOw6jQdTHvQkI5FmT5XtvmzRbMoXCUf93H5QlUES7uvjme3%2B2eNdKhN9GXEy6xYw2OO%2BvwY6pgHQEfnGhGjU385kCGEzucu67uQqkI0EN50b%2F21vyelK%2BG%2Bms1lOD0ZjL1DI9aaqi2R48AyEH2qSQf%2B3CuSDwrjo7jFBm%2Ftp%2FvsSXEtt2neq6%2Fz5JpVuDC5Lb8WDSAB7skas60K7%2BaqUFAF5VJiI0XXiXfywS0njppd%2BlwuTiXU%2FRhbc1Ked2LkWx%2FEn9MH9xapbjdEInQYrr6cfHDI1ufnkeiZOzlm5&X-Amz-Signature=d0218b9449643233cabf2535a30f7fb49e4f484a1216aa343adc3462d3d02db5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2BUOI4J%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T110715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2FgJ7Xc1eewh3t0dcpHAnlYfGiSRoObHmLcCEKI0vYAQIgRyD9U%2FYV3bvp4ER1MY%2FDbpKTYjDbDZPwArDXqJ9272cq%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDDueZsJ56auctZ9HjircA8NjnAz8zDyukF2G7THByfJb11iuGr%2BnyBBGnqLpFZzWH5RRdhieAVTHe9lG8Y%2BTgVp9WJ4CkbmBMkYA22QRnHRgUoWqsjg1wfuSYjlEfD48Dc%2BW1PsepSE%2BkWnCcKyeHSCCRtawBj%2B5o85eIoZOaU6ZWQJqX7PfVyyYcZf9shvnEhtRSeowMr6D9HInrUSAFM3qkTybyRV3R0vAoRfqfcx3A6sOr2Qc%2FGEfaT3Pl2n3RxHbnGhTDIqxW%2FcJDfOs2CedRxpUBITYf0%2FttDFdxC88UzboR%2FoJM%2BIZLfylF1DJghuzkpPCpVljOUcKvYFRe4tb5Fty0cZJeidM6M%2BmErT0%2BvRSL9wottg4Vqd4UwY8wVzUei8LxQX%2FxlHSY0dyySN%2FUcsVtT6zj2OnU8czCpIF%2BxrYm3oM6y2Je1Dy%2FqndiDVKM%2FflQgCc1cGQahiITmz54npsOjCnxir%2BmPeZnq%2Fq8Cjh33Sig5tG%2BREDbbDtTKzcxBV9rxlzkP3SEexNip7f0zJBiu2JUqJxJNhUisBy8FbDr%2BsIec5%2Bs7QHaKJGKl1KXXpMpXj8KqHw00jrrg6bYq1ibbS6aB4GoTOztO1IpiUTsr5bTwifYvX5tP8oG3qd0tKRCGVkMkfZMJHkvr8GOqUB2f2G%2BcTeO%2BzyEW67hctZ4FWNmQKURMiWfFfA7YrPxCRid%2By2zVVmGuPUpmIX0jJqyQk49cbdcNOma5kVEjJMi9Qpa83WQZ%2FgvPJm0WIETALZgDIUscRj%2FVZudZbN1k9fCgzi3xGgxJWyYxAJouKlJt0E78wCAuIAz%2FbsjDQIyZv8r1AH9RnjXYIWMzAw6tDT3gNVYItwBR2WVS6vEuzhH13dRq73&X-Amz-Signature=0c0472880fe1722dcba7242caba58acb5e2344c80500657d2fea456ea3bad4b2&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
