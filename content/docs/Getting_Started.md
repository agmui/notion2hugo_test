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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YACYP55L%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T050848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIEHpGHScJU0ElDgWCHxzuxVyQ1oF1x%2FK%2FAOtWkg2xoWwAiEAvw%2BPajUSaVzaADD%2FgThuKQF8hkBqOEFh2okWOsUkKxgqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDPcaex4%2FSWrcNNGWCrcA3GhJC0SOz%2B2FD8InE0OgblrDfV1%2FbVE7vKlnV8sWhHz68RsDLgAZDWZ5N3TN%2FBGQNowpmJBr3iGhl%2BjaCbyru98Q3Lb6LtMC14PHwVMYtEkTZtvUOogJSKugivNk9g6jeqVWKXJibTKXhM8eKIYHyI8%2BMdmUKeI1UqQCEZjUqpRqedASrmqTwVmT6hahTw9l22tlWAniR7XSzbLkFpXPiQ4g2E4HUEAA8iCrciR%2FB%2FSCuUba9CSNbK4ZG3MwdAtfkr5WINdDSvcYvdClqH%2BVgM8CQpHexuNtZrNDQss7O2RgOarZZSz0iMs8hCZdJPGFZDUYzS0IpNfeZWfg73f9cusI4FVswXUBKYvMKbbTuA5Mq9w5HqDwDHj6JeiLezWfHTG3v0cYNuXCQ7XGYm9kSm4RjRVP58Ug%2FwOD0oXsjINM00nrfCbsu7l6MEjkUp%2BadzxO%2FAPG%2F2Ph9KXrg2HmtrFuZcTW00oJyFF9GJY2SQ5u0sVABucT99bLfmsHGH1cnaVl7z7srF1fdjupbyHxOgGTisGsjJ8NlFc1%2BIkYX5Uml4m4SO0EwsHd7%2BTp0s8kGHoAiy7VM3FM%2Bm%2Br5mj54PY45SUB8qcP8jOYlmteDcmKgK2IQ3huhLHHIWmMM%2Bkrb8GOqUBm2j6zn0Eox5apW03JchNdkCEtGyAf5L5FYS5Ys7A8VZ0fLFEF2lOQSGodkD5pAhkdypwEp0Xq4AtPDhn0%2BlGtwTd880o98zuJlFjuhaMrwVLzLq4WA7FOmkBSR04x3tu%2FCOAWVs5WAR%2FQ6nNdtv1kYd7sZdHOWxCKVk4UKA2PblVZvCF3%2BKSztMEHo8%2FltOTl7Z0IcED9lyWB9fTIY7ehI3aAezl&X-Amz-Signature=9be2e8c0650ae0e77a531ca5d48266288b491f64795430d45dd770c6f13b5efd&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YACYP55L%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T050848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIEHpGHScJU0ElDgWCHxzuxVyQ1oF1x%2FK%2FAOtWkg2xoWwAiEAvw%2BPajUSaVzaADD%2FgThuKQF8hkBqOEFh2okWOsUkKxgqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDPcaex4%2FSWrcNNGWCrcA3GhJC0SOz%2B2FD8InE0OgblrDfV1%2FbVE7vKlnV8sWhHz68RsDLgAZDWZ5N3TN%2FBGQNowpmJBr3iGhl%2BjaCbyru98Q3Lb6LtMC14PHwVMYtEkTZtvUOogJSKugivNk9g6jeqVWKXJibTKXhM8eKIYHyI8%2BMdmUKeI1UqQCEZjUqpRqedASrmqTwVmT6hahTw9l22tlWAniR7XSzbLkFpXPiQ4g2E4HUEAA8iCrciR%2FB%2FSCuUba9CSNbK4ZG3MwdAtfkr5WINdDSvcYvdClqH%2BVgM8CQpHexuNtZrNDQss7O2RgOarZZSz0iMs8hCZdJPGFZDUYzS0IpNfeZWfg73f9cusI4FVswXUBKYvMKbbTuA5Mq9w5HqDwDHj6JeiLezWfHTG3v0cYNuXCQ7XGYm9kSm4RjRVP58Ug%2FwOD0oXsjINM00nrfCbsu7l6MEjkUp%2BadzxO%2FAPG%2F2Ph9KXrg2HmtrFuZcTW00oJyFF9GJY2SQ5u0sVABucT99bLfmsHGH1cnaVl7z7srF1fdjupbyHxOgGTisGsjJ8NlFc1%2BIkYX5Uml4m4SO0EwsHd7%2BTp0s8kGHoAiy7VM3FM%2Bm%2Br5mj54PY45SUB8qcP8jOYlmteDcmKgK2IQ3huhLHHIWmMM%2Bkrb8GOqUBm2j6zn0Eox5apW03JchNdkCEtGyAf5L5FYS5Ys7A8VZ0fLFEF2lOQSGodkD5pAhkdypwEp0Xq4AtPDhn0%2BlGtwTd880o98zuJlFjuhaMrwVLzLq4WA7FOmkBSR04x3tu%2FCOAWVs5WAR%2FQ6nNdtv1kYd7sZdHOWxCKVk4UKA2PblVZvCF3%2BKSztMEHo8%2FltOTl7Z0IcED9lyWB9fTIY7ehI3aAezl&X-Amz-Signature=de1f238ce6a30bce1517d02152f023a6098442bc3cd2a1dfa14cb54a9da3e65e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642J3OJWX%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T050853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQDIX4R8M1nQJaamy8kvjQmKf41vE7%2F%2FZFUi%2FIg6bUudNwIhAN1%2B6Mn4ecMDFkWVh1%2Fr4WVlW4WfoosdfAJ3VJFYNXx1KogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwQkhU6TDdzQmbK%2FN0q3ANKj4Wq%2Fz%2BDIvkPKxlQiTtgN%2B3WbcakSWmO8StkzUK99M3YdMea%2B1AXXbQ6kDnq3c0XM%2FD1SDP7ysqt2EMWzWbMeNXUweqKUfAYKeslMC31vyuYFhdkoiLHxsuF2DzbLNaqlSJ5shal2WI91ZQ1OyBJrq9E0FGdLKwiRd3sboEAyeIeOLSz9AZGfop0LIYWpJIvCiW16upY%2BkVqUlpTCb9TAwX3VKbSUPErq8JGb19FkqjRUoMjOLDbJjplYacrB0Xp9R7z70rRcYGbAn3yDGUzIGV7iuUxZ%2FT6boJI3lym%2BGwe4GMi0YDU2XlfvP3HonQlsuHoW2pCpul6%2FESbPhbAxVWyZFwFtSDHbGUzco0scTyyineyJppWwQxsCns84QPRZFVuh9QWIE2nBP7a9jA6cPVdPSMZ68lPh6HgBBWvpfnsI1rNWSZQ%2Bof9HgPkZdvQvpQKZoZG5gxfIGovOUCBKRomt4ym7ORDgbLETQIgZYZDO%2BYgEurpbj1YJCOIkwovMJqRE6Azbnb%2FM0fEx2Ka9Uw7If0KGO1GMlEjDXAtygxmOXu2cEEfxUQ0qSt0W7P1d5xAvCCbBeUFG%2BiJOPFYVpwR729eHS161YtDI69QI01qkstESTE90dtDGzDNpK2%2FBjqkAfE6Y1b2jgwtL0lar%2FGQKV%2FwbMcXn9HzxwigNRe0iqndr2J4pzMp9y7RcnjJ4kKnBqRlVEb3ZFeQ%2FlYwiyWtj2pgDoo3dnfdluBoLp5BxBfj5B0wxoZ8q003y17y8wDSe8sQVRwMmAMhFTPDnMLXzOXcLtO5XYXo%2ByWxvXkvSi84MwUk4bNKSCiRKF9X1IWlqvt8EURTXF8eXbZ2b95yKBQrVxyF&X-Amz-Signature=a52920516a657e96ed5ad3aed2399699b73af767eddf01a579dc328492fe248e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XD4XWJNK%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T050853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQDwnDRLj6uSvmhTsj3fFlSiFC2CVppwYlmGHhMrohYijwIgf9%2Ftm%2BKyeYgC5JpGEjmEWp2amjpJ%2BpG1k3sd0iXw01AqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP%2B4lBOWtmhUVM8w1SrcAwWtU8cb%2BqhHiexxG0qi71aSMJYIGJnkskrWbmqGDrgA0xRoo475uJ6PBWz5Iozv%2FRjcgyRX00OMD%2BWADMjTNpXPa1kCtX4XE85OEpWN%2F8HzzON30Jcim6KKx9QPJG2Pinj70r8Aj7nTxD4F21MHBS06K6ccPw5ZlVKaSabqTjDwOpWCsAD9UVoYtLTcJYyn%2BVjgWlwP6%2B95xJadZstjaQVVyPy9CrBFBmKb9aqIRLYB7A%2B9%2FzjEOf%2BB57Q%2B0x5oewXIAj4MdqthU4A3tc065TGc%2B0sn00zSoolritTb71ZctKlakbAD%2BuCkKfjmeUmI%2Falm8rDx0TPEBmwnF4NhsVE68vBiTfN00if29E418KVojG80%2FvOqMlgEU9lydiCRFjcdyYgbSifqQzgXpHFi1qZ1i0S2GWSmVx2s7zf7hftlyOtAmyiKW8MFg%2FKmr5UTmFgXLGz170vzjy%2FalMrZzUw2pXXg0OWkQPMIwlld5KiA6eYvhcjweCD0GWlFyojq%2BzNehy4ZHNsd2K0uzUAhxKiF7NF0QCCYcKkzSM3m%2FUeOt%2BjhP8oIMDVhTeIU3X1QXIH98cT5wm8mt5HBNKfuiP8vuwzH6V75XhO9GwbGLUUZeaDzGnI7j4h7Wt9aMK6lrb8GOqUBRnvbjzH2fSUQJRhExfLkpbVU1R%2FBNZzel0yE%2FbAGTi9cPKmzxTGL558MfvOAPS8Fm3vPlgk7gRHJ8DdOZLiHGMQilnLvkzhnBXym2ds%2BQkmKFOG%2Bj23DGaRO3%2BHQ7%2Fi%2BQEX78uS3pdB74SGu8m5DZ3sbFW2%2Bk8AdFeQnkf80ew6p6UC4nbd5WwXvbzXyKjI06BTrtG9b0ZJQUVcJ05Ifb%2BWf9reY&X-Amz-Signature=cb32b4f6127889c2ec437ca9a40d9ab818244bda6af94a98d45a5a3461ea3ab9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YACYP55L%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T050848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIEHpGHScJU0ElDgWCHxzuxVyQ1oF1x%2FK%2FAOtWkg2xoWwAiEAvw%2BPajUSaVzaADD%2FgThuKQF8hkBqOEFh2okWOsUkKxgqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDPcaex4%2FSWrcNNGWCrcA3GhJC0SOz%2B2FD8InE0OgblrDfV1%2FbVE7vKlnV8sWhHz68RsDLgAZDWZ5N3TN%2FBGQNowpmJBr3iGhl%2BjaCbyru98Q3Lb6LtMC14PHwVMYtEkTZtvUOogJSKugivNk9g6jeqVWKXJibTKXhM8eKIYHyI8%2BMdmUKeI1UqQCEZjUqpRqedASrmqTwVmT6hahTw9l22tlWAniR7XSzbLkFpXPiQ4g2E4HUEAA8iCrciR%2FB%2FSCuUba9CSNbK4ZG3MwdAtfkr5WINdDSvcYvdClqH%2BVgM8CQpHexuNtZrNDQss7O2RgOarZZSz0iMs8hCZdJPGFZDUYzS0IpNfeZWfg73f9cusI4FVswXUBKYvMKbbTuA5Mq9w5HqDwDHj6JeiLezWfHTG3v0cYNuXCQ7XGYm9kSm4RjRVP58Ug%2FwOD0oXsjINM00nrfCbsu7l6MEjkUp%2BadzxO%2FAPG%2F2Ph9KXrg2HmtrFuZcTW00oJyFF9GJY2SQ5u0sVABucT99bLfmsHGH1cnaVl7z7srF1fdjupbyHxOgGTisGsjJ8NlFc1%2BIkYX5Uml4m4SO0EwsHd7%2BTp0s8kGHoAiy7VM3FM%2Bm%2Br5mj54PY45SUB8qcP8jOYlmteDcmKgK2IQ3huhLHHIWmMM%2Bkrb8GOqUBm2j6zn0Eox5apW03JchNdkCEtGyAf5L5FYS5Ys7A8VZ0fLFEF2lOQSGodkD5pAhkdypwEp0Xq4AtPDhn0%2BlGtwTd880o98zuJlFjuhaMrwVLzLq4WA7FOmkBSR04x3tu%2FCOAWVs5WAR%2FQ6nNdtv1kYd7sZdHOWxCKVk4UKA2PblVZvCF3%2BKSztMEHo8%2FltOTl7Z0IcED9lyWB9fTIY7ehI3aAezl&X-Amz-Signature=604773049d93e46ae5189544d3facbf71b01a8336c9d26d52c90b085042ed6ba&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
