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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663D5RF3CG%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T110714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCQn%2FkdejTZ0zfS7h0cM4tvEdRvS1DJ50iPoJji6ORSMwIhAJNmN%2B9g3d8tI7W%2FsH304KXwSYkveM%2FcTsjsgvPyALaUKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzZme3QKE%2F8SWmLvRwq3AOSFNr%2BL8XUyO8mWkAM1f76NXdO92eBaClcWQKdDTz4I5KHF1WhfLnnwooZg%2BGYrIkq4H%2BSBfCaGh2xLDE%2B%2BjEaP2mj%2F7wA%2FzM182uJ4Qeg9k%2B6QJITP%2FCBJlH3qwzucePmULbo23ch0N5tlOL9rUrDkmd33ehCWo1GSpUKhMBURZL1XA8GvFnueSftRqxnHkaluCkr2t6ln3k2TgrzGlAZsAloQTD52EOgnbN7s5K3jckN%2FlotWtIA86hBZrYoJtEulIx0qLMKbh7v4dtdhmiJxmZc9FBDjB1UBLUTDxrgzpGKgNScOqtscHFrjDUBO9qgfpDbRjWwX6fLaEn7mAP5rF1QY6VMW1Oi0Ilm02%2BfWx%2B2KpFPdSZln8QzsPeBWKqW8pBFZS0iRNJONduxpAfBBmkn338bCmrw6ptxWbaM8zMUWSddphEIOPb0ruqAanJPMp2%2Fj%2BBGfUyMn%2B4Xj93s1etfmlZzDRTnub4tdlQFwREA81yd2ZeaW6FObhccrI78yR8xJ3s9w0u8kbU6cGlY%2FErfLXeh2EqF6LovemeW%2BZ6aYmVZJpCPAGnrpuSwsvvcnCooK%2FQa2HU1Ba76VdX0OfDfks%2FjTwpnAxQexd2nQ5Ns0gcCwleC48sBgzC2xNvEBjqkAfQgTgEIwCa5hr6VRAz2babaDmLzt1pl0sjIkKQGRrE3tlWQYNRuo%2BNl7MKJOrD9pv5DT8AFVSRxnCebMv9VON2hsne3hmPLsZRxVR%2BYQL%2FxAlgNcrnr5OHeOKuLbFe9%2FN20PvvKCY1o2QMGjb3ryZKGWAbP2Cmf1jAxDaKPRyVqDguz%2BT4d4%2BAsklkK3AR%2F7xQjgM4synsIdq4QN%2FIM59bGLAbF&X-Amz-Signature=420cfba06858f4294ce2f8a5b86bdd08ac3ccfe17d09ed928dca8aec38a37749&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663D5RF3CG%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T110714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCQn%2FkdejTZ0zfS7h0cM4tvEdRvS1DJ50iPoJji6ORSMwIhAJNmN%2B9g3d8tI7W%2FsH304KXwSYkveM%2FcTsjsgvPyALaUKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzZme3QKE%2F8SWmLvRwq3AOSFNr%2BL8XUyO8mWkAM1f76NXdO92eBaClcWQKdDTz4I5KHF1WhfLnnwooZg%2BGYrIkq4H%2BSBfCaGh2xLDE%2B%2BjEaP2mj%2F7wA%2FzM182uJ4Qeg9k%2B6QJITP%2FCBJlH3qwzucePmULbo23ch0N5tlOL9rUrDkmd33ehCWo1GSpUKhMBURZL1XA8GvFnueSftRqxnHkaluCkr2t6ln3k2TgrzGlAZsAloQTD52EOgnbN7s5K3jckN%2FlotWtIA86hBZrYoJtEulIx0qLMKbh7v4dtdhmiJxmZc9FBDjB1UBLUTDxrgzpGKgNScOqtscHFrjDUBO9qgfpDbRjWwX6fLaEn7mAP5rF1QY6VMW1Oi0Ilm02%2BfWx%2B2KpFPdSZln8QzsPeBWKqW8pBFZS0iRNJONduxpAfBBmkn338bCmrw6ptxWbaM8zMUWSddphEIOPb0ruqAanJPMp2%2Fj%2BBGfUyMn%2B4Xj93s1etfmlZzDRTnub4tdlQFwREA81yd2ZeaW6FObhccrI78yR8xJ3s9w0u8kbU6cGlY%2FErfLXeh2EqF6LovemeW%2BZ6aYmVZJpCPAGnrpuSwsvvcnCooK%2FQa2HU1Ba76VdX0OfDfks%2FjTwpnAxQexd2nQ5Ns0gcCwleC48sBgzC2xNvEBjqkAfQgTgEIwCa5hr6VRAz2babaDmLzt1pl0sjIkKQGRrE3tlWQYNRuo%2BNl7MKJOrD9pv5DT8AFVSRxnCebMv9VON2hsne3hmPLsZRxVR%2BYQL%2FxAlgNcrnr5OHeOKuLbFe9%2FN20PvvKCY1o2QMGjb3ryZKGWAbP2Cmf1jAxDaKPRyVqDguz%2BT4d4%2BAsklkK3AR%2F7xQjgM4synsIdq4QN%2FIM59bGLAbF&X-Amz-Signature=04fd01a96adab967032f1ee06d4fccf1c4659a46ea7ba20cd95adf71fa1cad93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663D5RF3CG%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T110714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCQn%2FkdejTZ0zfS7h0cM4tvEdRvS1DJ50iPoJji6ORSMwIhAJNmN%2B9g3d8tI7W%2FsH304KXwSYkveM%2FcTsjsgvPyALaUKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzZme3QKE%2F8SWmLvRwq3AOSFNr%2BL8XUyO8mWkAM1f76NXdO92eBaClcWQKdDTz4I5KHF1WhfLnnwooZg%2BGYrIkq4H%2BSBfCaGh2xLDE%2B%2BjEaP2mj%2F7wA%2FzM182uJ4Qeg9k%2B6QJITP%2FCBJlH3qwzucePmULbo23ch0N5tlOL9rUrDkmd33ehCWo1GSpUKhMBURZL1XA8GvFnueSftRqxnHkaluCkr2t6ln3k2TgrzGlAZsAloQTD52EOgnbN7s5K3jckN%2FlotWtIA86hBZrYoJtEulIx0qLMKbh7v4dtdhmiJxmZc9FBDjB1UBLUTDxrgzpGKgNScOqtscHFrjDUBO9qgfpDbRjWwX6fLaEn7mAP5rF1QY6VMW1Oi0Ilm02%2BfWx%2B2KpFPdSZln8QzsPeBWKqW8pBFZS0iRNJONduxpAfBBmkn338bCmrw6ptxWbaM8zMUWSddphEIOPb0ruqAanJPMp2%2Fj%2BBGfUyMn%2B4Xj93s1etfmlZzDRTnub4tdlQFwREA81yd2ZeaW6FObhccrI78yR8xJ3s9w0u8kbU6cGlY%2FErfLXeh2EqF6LovemeW%2BZ6aYmVZJpCPAGnrpuSwsvvcnCooK%2FQa2HU1Ba76VdX0OfDfks%2FjTwpnAxQexd2nQ5Ns0gcCwleC48sBgzC2xNvEBjqkAfQgTgEIwCa5hr6VRAz2babaDmLzt1pl0sjIkKQGRrE3tlWQYNRuo%2BNl7MKJOrD9pv5DT8AFVSRxnCebMv9VON2hsne3hmPLsZRxVR%2BYQL%2FxAlgNcrnr5OHeOKuLbFe9%2FN20PvvKCY1o2QMGjb3ryZKGWAbP2Cmf1jAxDaKPRyVqDguz%2BT4d4%2BAsklkK3AR%2F7xQjgM4synsIdq4QN%2FIM59bGLAbF&X-Amz-Signature=6382afdce5c81289d300dca537729faa6377f2eec06f3ed8374a726beae02690&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6PH7A4G%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T110723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIDMgdQ%2BUw9eU1vxor0IbIpqyQt9SUYkuKCB0JkK6Zv2TAiArV7yEhSurad1fMctfnjrvH9EEEpV80EWeV15j3U1gwiqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2pKtssgDBIqFHq4DKtwDsXEBcdAo4siQVOi3es6UlsGJGHsqWMOWwwp2sDr2xb6MSGn72WcW1ZYuBnvahQSxsVj%2Fyvzmtw72fHOZhgqc%2Fq4XQCWjysrIXE7T9K7ipr1rE0O8zT7AjaILdrcGl1ObuGT%2BTtY69wRLjxoBs9jxTQmTGuEUthVPk9%2BhPBOCokKi14IW3OrQ5uTeqlTXmlXT6GqMHlYCwZp3w9sPrbU6g0X0WMDxtgqH%2FZOG1kY%2BxcRiBpVv8daq%2FtXy5Ovzfelkis9ZUSRgwUkMQzA%2Bf6O48y1E3Nok5TtMHjcFjuH%2BuwJCKJQrv140nn2p5J4i3Zp5On7HlVqEAUCXY0LjYl%2FzQAvBJdSAvriw3bFxqv2uKfMaJs5CB76ZJlLl7wEKX49tgw6%2BSIaSLZxBqkQCCfhQrLbMqqXZ%2FCkezPyKAJZOK1UuByjyF9gHqiqWKHCuCjNVrQ60YprmUWEjxeGBUGv2WkBCr%2BFmBzj5ePp7Ras%2Btmb4L6azi1GqKWFle0O1H7g1Jw2bINHBV11KM0hGCccprcaWkTmbflW7wLSKMJT1No7bOZMJgQABa4JA4sv11twdlyqFHANlL0SNQCtypKaTarJyf%2BtEtmIDoQwZM9x%2Bx0h5dFmiAF1S%2B3hod3QwxsTbxAY6pgGLEeIjlnbC90hOtoA0vE3Lxsda2%2F%2BfAsBuS%2FcpfITgnCrvXVDoV9oG7yBhrVx3MPwnuRmpbo4o0ebLb1sQjln%2B4cIPWV5x4qruRijKGSPyBufH9KP5cg8fRjsd7DLkavN9Fnf3yfR0Lhi2Ms7qjls%2BIGEUVvyyNqCVccblybl488da4gchsFu1w4oaKAqAR%2BD7Ov5REqFoVNipJMt%2FHNeVSfLceEzP&X-Amz-Signature=0e44e290d753b353cb6972a477c1281193972a39029eccfc2eb9e3b7a10bf0b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKFGFSA4%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T110726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCICSyUDjHsxFEKENcbvyoLlhel73PPZITD4Q5VsOTlWm9AiEAmWILbjE7JMwo2FsXKZ6KzkljDx1ItMa0HD8B3Q2veesqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAiUi0HX9bIK7xfQ3yrcAyRTMnImrzbeeGl%2FuUjnrXsFOUetxTjWL7QqAVMsP6e01yPpY%2FMxQkEKG%2F4NjcppACfcwOykpLuR5Jsw4HbjF73wLITJZyWGcgcKqNsaw9jTwlBV4idECg7la7LCthgB14v6UG68PA%2F%2BdW4fisIa8z5K7zOwaal4P2NMtnn4KPZbsF%2FrmiVR%2Fa6EV7LnnK4fZadGS1K9ILLpwuu5IEPBuqF6FyRBUSLP5%2F6bNg%2FMaOG%2BvXPJvznVmoGzHWl2EsUge%2BiReEorCrGGqX0dOkxtNffxtetrQTh8M8RCkc92U1RPeYJabs7CrajrDrgHVe4B4zqSbF4XCWzRN%2BtwDQ1j24XlRu9UZMWhKzHH4Z065%2BNoEWx%2BFleHDw3W3TxHJcyvGiVHIizjUDoF%2BbDf3GLqLFxv7Vwn2k0Ykb1ZEooD92OLT3dV00LsuNvx7EW4OkU0M2wOKX%2FxlJR7WRNxrAsYF%2FgkwbDopZir5lHM7mCQiQE6XVBFzM89lkvKiFAtayg5TbzCnRqHx2ZHDHRb5UvUKVYnBbdbwn%2BiIS1AHeX%2B6MaS6BUcD3N8bXw7DFBaGcItk5%2BW9ymVdIy6daYv3zxrstFQVH4etBO2VNxx5Crk2Xz6NsgRhcqznreMSu%2BYMOXE28QGOqUBvDrpxVTQRk3Y0NMJrTmUJtt%2F7znK5EXo9XwFQLpldCMeIqU%2FhBLZV798ITptEGFxPsw9XdbactynDtpJqmUgulVCVRrZ%2F45m8t2qMbXDU%2FxDmrLun4FtGBfkWXWm%2BlOlvOcsGYTy35ks8uqjzGowDho%2FazFJnU7Zf4zxJHQdS0YWeD85rG0pd%2BtCKARFb1ybHQMNRNDiFAYOCrGUzr5efnl6OOPR&X-Amz-Signature=a0de19b09e405e00e06db0dd597cd8bfdec5cf018b4fa855d41ef2de1d861002&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663D5RF3CG%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T110714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCQn%2FkdejTZ0zfS7h0cM4tvEdRvS1DJ50iPoJji6ORSMwIhAJNmN%2B9g3d8tI7W%2FsH304KXwSYkveM%2FcTsjsgvPyALaUKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzZme3QKE%2F8SWmLvRwq3AOSFNr%2BL8XUyO8mWkAM1f76NXdO92eBaClcWQKdDTz4I5KHF1WhfLnnwooZg%2BGYrIkq4H%2BSBfCaGh2xLDE%2B%2BjEaP2mj%2F7wA%2FzM182uJ4Qeg9k%2B6QJITP%2FCBJlH3qwzucePmULbo23ch0N5tlOL9rUrDkmd33ehCWo1GSpUKhMBURZL1XA8GvFnueSftRqxnHkaluCkr2t6ln3k2TgrzGlAZsAloQTD52EOgnbN7s5K3jckN%2FlotWtIA86hBZrYoJtEulIx0qLMKbh7v4dtdhmiJxmZc9FBDjB1UBLUTDxrgzpGKgNScOqtscHFrjDUBO9qgfpDbRjWwX6fLaEn7mAP5rF1QY6VMW1Oi0Ilm02%2BfWx%2B2KpFPdSZln8QzsPeBWKqW8pBFZS0iRNJONduxpAfBBmkn338bCmrw6ptxWbaM8zMUWSddphEIOPb0ruqAanJPMp2%2Fj%2BBGfUyMn%2B4Xj93s1etfmlZzDRTnub4tdlQFwREA81yd2ZeaW6FObhccrI78yR8xJ3s9w0u8kbU6cGlY%2FErfLXeh2EqF6LovemeW%2BZ6aYmVZJpCPAGnrpuSwsvvcnCooK%2FQa2HU1Ba76VdX0OfDfks%2FjTwpnAxQexd2nQ5Ns0gcCwleC48sBgzC2xNvEBjqkAfQgTgEIwCa5hr6VRAz2babaDmLzt1pl0sjIkKQGRrE3tlWQYNRuo%2BNl7MKJOrD9pv5DT8AFVSRxnCebMv9VON2hsne3hmPLsZRxVR%2BYQL%2FxAlgNcrnr5OHeOKuLbFe9%2FN20PvvKCY1o2QMGjb3ryZKGWAbP2Cmf1jAxDaKPRyVqDguz%2BT4d4%2BAsklkK3AR%2F7xQjgM4synsIdq4QN%2FIM59bGLAbF&X-Amz-Signature=6e54b59feb73ece43526b356953731e2cef5f00e8512e69a855b1005a08b499a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
