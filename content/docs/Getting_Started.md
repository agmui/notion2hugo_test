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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMBHXRUE%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T150657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQDBh1iBNH7SEGY2%2B7fWks%2FtYqKDh%2F90LLSCT9Knz%2FhPzAIgHegHKgoYOrVLSlBdYyBJNTgBps2itu0VwTOClTXpY9EqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA0NEAAIqtsre4xGaSrcA65WyiZzOobkA83QiNOGc37nlUiGaDFnlrw5FIa%2FQ6y84r06fO3VuiyLhzrCQNym8%2B%2FAOAu2tcsJgsO9AJ3IEghqrBLa38HpqDf9WALCBdFH%2B%2F9%2BOzbAqMcYRdn4JFyAhirB1GqbBTl1QQg7YtO5SGKdJxhYzh8xTS8gR72YKdy2wYsSJXaWEXtuEzml8KquZZYvIP78DKuM8VH65Hwyb%2BKVGu59ju%2BTj9PSlu4Q5scEuF9QYLE66sx0IgOElrsmiz%2F1J3b5i%2BRF5zSTSJaRE3K4nALVfyqBOV4PXuY5FADgrJWZW0bdK22IbKhQMaPJcDAJGjD19htvfRmNVKm00P13MfcQM0UPsAh02nw%2FM2m0YiVKGWHVtnInAzSrrHbXCbyxsUNQIw4zNVy%2FiF3M7otA8ltpj846Sp6FOGx3C61heWaM4m0xfXfUnv5hTVKjXfzqDv6SuwoPMlkNttvYKYKXkVZPw59FJxtZ95a6%2BhITAYgiA%2FZ88%2FfVzjUFQb6WTpG8npR6BPqiGoyTokCLgoPmdmrbxUdVO12BBgs8VsWsc3ir5Z66ipog8Q68W5gyGdaC1CT6OLhFMacHeptnleAgCS6nGLr0%2BQcUUuHi414aTl1xW%2BWCLOiGgiWqMNWXjsAGOqUBLNLWIRngJ4rwEyBRmUX%2BG55fti6gm066l6CF63VdCRccS1H5PV%2FGwKl79agovPLd3h6V7pu8tYA13wWAu7NPFyDaX1hn2hGL%2Fx04YoMcMmkDn3PU6%2BUJe5H0CDQQJVz41TXXBuIREcOwihKp55EDKuIh76hibjJ81BjEdenpq8YOjGLyKtXn9V3BuINRn09jGEX0681az40Pf%2BNmbYOmQ9m5ySqV&X-Amz-Signature=25c64e0be805ccf25eac661e5fe819172856f0bf05a99b8a6850b4cbb9cbc9ce&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMBHXRUE%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T150657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQDBh1iBNH7SEGY2%2B7fWks%2FtYqKDh%2F90LLSCT9Knz%2FhPzAIgHegHKgoYOrVLSlBdYyBJNTgBps2itu0VwTOClTXpY9EqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA0NEAAIqtsre4xGaSrcA65WyiZzOobkA83QiNOGc37nlUiGaDFnlrw5FIa%2FQ6y84r06fO3VuiyLhzrCQNym8%2B%2FAOAu2tcsJgsO9AJ3IEghqrBLa38HpqDf9WALCBdFH%2B%2F9%2BOzbAqMcYRdn4JFyAhirB1GqbBTl1QQg7YtO5SGKdJxhYzh8xTS8gR72YKdy2wYsSJXaWEXtuEzml8KquZZYvIP78DKuM8VH65Hwyb%2BKVGu59ju%2BTj9PSlu4Q5scEuF9QYLE66sx0IgOElrsmiz%2F1J3b5i%2BRF5zSTSJaRE3K4nALVfyqBOV4PXuY5FADgrJWZW0bdK22IbKhQMaPJcDAJGjD19htvfRmNVKm00P13MfcQM0UPsAh02nw%2FM2m0YiVKGWHVtnInAzSrrHbXCbyxsUNQIw4zNVy%2FiF3M7otA8ltpj846Sp6FOGx3C61heWaM4m0xfXfUnv5hTVKjXfzqDv6SuwoPMlkNttvYKYKXkVZPw59FJxtZ95a6%2BhITAYgiA%2FZ88%2FfVzjUFQb6WTpG8npR6BPqiGoyTokCLgoPmdmrbxUdVO12BBgs8VsWsc3ir5Z66ipog8Q68W5gyGdaC1CT6OLhFMacHeptnleAgCS6nGLr0%2BQcUUuHi414aTl1xW%2BWCLOiGgiWqMNWXjsAGOqUBLNLWIRngJ4rwEyBRmUX%2BG55fti6gm066l6CF63VdCRccS1H5PV%2FGwKl79agovPLd3h6V7pu8tYA13wWAu7NPFyDaX1hn2hGL%2Fx04YoMcMmkDn3PU6%2BUJe5H0CDQQJVz41TXXBuIREcOwihKp55EDKuIh76hibjJ81BjEdenpq8YOjGLyKtXn9V3BuINRn09jGEX0681az40Pf%2BNmbYOmQ9m5ySqV&X-Amz-Signature=b39531f2a18043819db859484036e241b584ffe143829c0174e1748ee3c52846&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662M5GLO6G%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T150658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIHpVzb4PhnnVkco9R6sEp%2Beh4Kdw1mnkf%2F2fDiLAJKrWAiEA56xhzPMISt74TLgM7L%2FPwdxXB2etc7FJoZKJabEzp%2BwqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG7Jm%2FD3qelfDiLUVircA4DWc8Tbd1HLW99ITDnMqi%2FCbUzJY1HHXNU%2BdLIjvaHkVTEsVVoReLO5a9Jp9gSp%2FcgjDK3jMyQvlVxBXBl551KXN4gS8PZaYUiFchkidGFXFCUsciMw8u9ajY1iqFHoI6lQZ3%2BYiqinfy89CJJAVUp%2FlIH2L8aOCTAezFGyQqcsjoHAtsnwfjfwOn4rZ%2FdxRKTun%2FibsYwMSk99mt%2F%2FdYpRZ0oqOfIUmoIc3twITDR5F7kac0ID1dlQ7U5prH0TVqwpG78MAT2%2BKsCKVmt468PM%2BnhZvxe8gpNnOuBD91KEyCYpA%2FDmIsN96mkPSQrGF1TsAmrTW4yIZl97HDZ5hiQaYl2Fi368Ht2xxcTkQxRJI23gfH5i5Y%2BkWi4vEGWcoUmk7dFq2pfgA0DDTWTMoS5ZuyAGPvhBX7c2jWaLglS8aWTjRrExjxanIIUPhI%2BmucNTt8yzuauvewkjH7OVGzpfCh0ukSY8odriASYYxY0NAqVVL2J5fm2neEFODXArFGpS5LRX9jCVrfxxfTTMfGGsAZYYt1NnJPSdwrUTYSXSNx%2FZm1WGAcapE9J%2B%2Fp0qDz1yRaE7u2QXhva3s9%2FThQXyZRWhQRJrQc13N8wtTvnholatMrIve%2BASsDfIMI%2BdjsAGOqUBGQTl5eCYSKYusbTwqwxY22bUgQ%2BzsnOaxp0rH9idDg8xzY43wP0aqGzhmV1mMiK0wMLB7qg765ccJ5zRA7lR%2FNagGqKnnCumpmaTusB12OoLHe2t0H96D%2FQv59r%2FpPvfy8HJauRkqIxkYCF5TdzzmmJ5VxHpcWJ88yt2Stt3AwAnaWeYuWuSauO%2B3g6SXMZq9LUsy6yaP1f1Fi8KVWyjfiL%2BbZfb&X-Amz-Signature=e6ffa867d815f818445ea5c5ed394f565bbb7e51a1b34b0f93c59f0f07c4317b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPX6D3QN%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T150658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCICxspXeseCALVNixd8XaHH7B%2BBVd44njU6%2BGbaU8gAOcAiBvZb5svAlrPo2j%2BX%2F8Xu02aH%2FvlNziJIi3JKq2HI0DQiqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0JOh27jGDrQGSyaaKtwDWNth87F5%2FSWd9vtItav6mpD3YkDMaI%2FQGUQjYg3J0Oww6YhBIPNJor600%2B%2BDhRetkwLr2gv9ljmjdAcg7pNoaI4Yy5B5lFlipS7pSKpTdTrxh1MhIRwVQNDHaWK97JXozrLpYnNhe4ZBmqp3e0w8H2kh6UaCmnMcVp5H%2FVp6gSQ6uyieiUGmemISE9fI5GElu6nQHQ0e4eWlPTNk1zR3Hd0EYjsCf9z9Pn2LkO%2BiMKrlshfRWYfZ%2FYQCqxgPdQLoSDkBdiEd9QyBAy0yscpWXUrwqovmFLG6vFfDHoOxCMPUfm5Vroxg1C%2BgRvTQZVj3CRLyfiwEISEog8sW25%2FAoaxFDFJ6kiGOeWc4uwe9szW7S%2FZ6ZvUKf%2FW%2FUvLcdA1DVgB8rS8hQABmtMd8Cgnne1XxrMkaw6LA09QnpMUqWKfNIcjqEI63aWXX5ixQRLB7Boql81%2BNLFglTAurN%2FNeDdJxc%2BkMT22tgviER5w0gcwHxhJmrZfOnyoKOB80%2BVmOF5OoDVDU%2F6TiB47M9FKUJVfdUVMnLsZlNp3nqqygtQsniI3sLBn3Hqf1NrXT8aN0holjSzWBKpM1XlDlwDkydCYUtP19O0rhszIK8kLsepmRRDl0v5gkidtl0RUwnJ6OwAY6pgHfdAXzm3iIruek37Kd%2FH6tldhqmVw8k6h0nUL4D0MqjVyAA0zBA3Z3lv%2FRlqXhK6RNhiyGQz9BCkQgKlNASIYUTTs48mHEkiRd4Ae6mn5qv00xmlqw4Mb8YrO4HrcmrOUORkGau1UJxkkQNEDVogSo8BOjeq9QW61QX8yFrDSBpL%2BmxOTHVFUMWWKsoSNPOGsjlCm%2FitURyDjIFdr7W9xPEoRTMJQv&X-Amz-Signature=663d1c7aa9941754d5ddc8fb746778c17abdb8d6c5a3a29d05e323b16ac75a92&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMBHXRUE%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T150657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQDBh1iBNH7SEGY2%2B7fWks%2FtYqKDh%2F90LLSCT9Knz%2FhPzAIgHegHKgoYOrVLSlBdYyBJNTgBps2itu0VwTOClTXpY9EqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA0NEAAIqtsre4xGaSrcA65WyiZzOobkA83QiNOGc37nlUiGaDFnlrw5FIa%2FQ6y84r06fO3VuiyLhzrCQNym8%2B%2FAOAu2tcsJgsO9AJ3IEghqrBLa38HpqDf9WALCBdFH%2B%2F9%2BOzbAqMcYRdn4JFyAhirB1GqbBTl1QQg7YtO5SGKdJxhYzh8xTS8gR72YKdy2wYsSJXaWEXtuEzml8KquZZYvIP78DKuM8VH65Hwyb%2BKVGu59ju%2BTj9PSlu4Q5scEuF9QYLE66sx0IgOElrsmiz%2F1J3b5i%2BRF5zSTSJaRE3K4nALVfyqBOV4PXuY5FADgrJWZW0bdK22IbKhQMaPJcDAJGjD19htvfRmNVKm00P13MfcQM0UPsAh02nw%2FM2m0YiVKGWHVtnInAzSrrHbXCbyxsUNQIw4zNVy%2FiF3M7otA8ltpj846Sp6FOGx3C61heWaM4m0xfXfUnv5hTVKjXfzqDv6SuwoPMlkNttvYKYKXkVZPw59FJxtZ95a6%2BhITAYgiA%2FZ88%2FfVzjUFQb6WTpG8npR6BPqiGoyTokCLgoPmdmrbxUdVO12BBgs8VsWsc3ir5Z66ipog8Q68W5gyGdaC1CT6OLhFMacHeptnleAgCS6nGLr0%2BQcUUuHi414aTl1xW%2BWCLOiGgiWqMNWXjsAGOqUBLNLWIRngJ4rwEyBRmUX%2BG55fti6gm066l6CF63VdCRccS1H5PV%2FGwKl79agovPLd3h6V7pu8tYA13wWAu7NPFyDaX1hn2hGL%2Fx04YoMcMmkDn3PU6%2BUJe5H0CDQQJVz41TXXBuIREcOwihKp55EDKuIh76hibjJ81BjEdenpq8YOjGLyKtXn9V3BuINRn09jGEX0681az40Pf%2BNmbYOmQ9m5ySqV&X-Amz-Signature=2b14ca9a797f460d2b73673b2d299fb08983fbf933a3b4738105c0e0d0bdd1ca&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
