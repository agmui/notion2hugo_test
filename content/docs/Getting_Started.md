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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WROFX56T%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T161125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQC5VeAO6Ua93TsWW7QTSUKfOrJqgGKPnJFzHWO%2B60tBoQIgI1SEFVEJhcpsJbX%2B%2BxR4Z62KFp8HFUjDCKBGVoEQ%2F1Qq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDPhKT4NjXaXvgDHfEircA2AD%2BRGA11pnQ2gZsvWtaq98%2BIe91lipHoclJAWcbXSG7Nr9Bjwsj1kN6IlUbVD%2BJUMPniNcAnbwChYXv%2BsKr7puk8Bpmi88LAslzAMb0uzsf9VD3gudEC7o3Bon%2BvBJC1YqDvoBcksjfl634AXzBdpIfOWfMq7qxvV%2FZkQCOyKfI4UZjAiTxRNKyb1ta0Fq0RMLPbftwYcET8CqyAu7LCcgWzxkXM%2F84A8blfLQUOmxRxWw8oc9H%2BqwAiKHV%2FZ0jAw%2FWQxyVg1qF%2B2vuuXQcrMLqlIWZwtPBFc62hC3shALgjMCsxc%2B5T7OMuz0arQcLb7myI4QBMX%2FsTna%2FNaB6lGt2dBt9HHBB2fMJUIIUl90aDdde6AnMpFOIceIKBrI8YGlxnH%2BwIkFia1eOvNPFkeHy68eNWwETlCeZ%2FuJoRKjcDLHXdqIcTF3I8l31uphVMPH7GSZy64URho6Es5aa7mtOYqXQbqJ3qqmqMGGsHr9IojPAI4bNp1ahwtt8imXX3bmSwjt7PlEfxC23sXK5%2FglyKh1aGpTCdcN%2Ftx2DuIOeZIRBbfAhuswn4mDH8sqZgWVaAdP9nEOZkZeNzeOmOAz6Io5uXVLjnubcKJznb16hl86LCW08v35Sro4MMTZ2cMGOqUBDNpuzzoBjHuc65%2FCQodNrqLG5N4U2DH%2BXb1DfaBPvgKcxhwzA%2Fyo7taBzhl%2Fy%2FJyFbGKvu%2FEzrodOqLYqj%2FAMcLkQD0N9tyB0hBLTR59oFKmL4hAHe4llAJfJj5mTctJP3qmeSpKxUPOqAyDLO7ePjxdlUPX7Q6flP1K1%2BrHenypnyaYKJP3bGrbA%2B7Y3lVlFeD8LjTsRrwfCusMhWVhamGulqwf&X-Amz-Signature=e87321e02ecf8e16aceda17e3eeeae2f3cae0fc022cc9266d2ab58cf54f9deeb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WROFX56T%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T161125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQC5VeAO6Ua93TsWW7QTSUKfOrJqgGKPnJFzHWO%2B60tBoQIgI1SEFVEJhcpsJbX%2B%2BxR4Z62KFp8HFUjDCKBGVoEQ%2F1Qq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDPhKT4NjXaXvgDHfEircA2AD%2BRGA11pnQ2gZsvWtaq98%2BIe91lipHoclJAWcbXSG7Nr9Bjwsj1kN6IlUbVD%2BJUMPniNcAnbwChYXv%2BsKr7puk8Bpmi88LAslzAMb0uzsf9VD3gudEC7o3Bon%2BvBJC1YqDvoBcksjfl634AXzBdpIfOWfMq7qxvV%2FZkQCOyKfI4UZjAiTxRNKyb1ta0Fq0RMLPbftwYcET8CqyAu7LCcgWzxkXM%2F84A8blfLQUOmxRxWw8oc9H%2BqwAiKHV%2FZ0jAw%2FWQxyVg1qF%2B2vuuXQcrMLqlIWZwtPBFc62hC3shALgjMCsxc%2B5T7OMuz0arQcLb7myI4QBMX%2FsTna%2FNaB6lGt2dBt9HHBB2fMJUIIUl90aDdde6AnMpFOIceIKBrI8YGlxnH%2BwIkFia1eOvNPFkeHy68eNWwETlCeZ%2FuJoRKjcDLHXdqIcTF3I8l31uphVMPH7GSZy64URho6Es5aa7mtOYqXQbqJ3qqmqMGGsHr9IojPAI4bNp1ahwtt8imXX3bmSwjt7PlEfxC23sXK5%2FglyKh1aGpTCdcN%2Ftx2DuIOeZIRBbfAhuswn4mDH8sqZgWVaAdP9nEOZkZeNzeOmOAz6Io5uXVLjnubcKJznb16hl86LCW08v35Sro4MMTZ2cMGOqUBDNpuzzoBjHuc65%2FCQodNrqLG5N4U2DH%2BXb1DfaBPvgKcxhwzA%2Fyo7taBzhl%2Fy%2FJyFbGKvu%2FEzrodOqLYqj%2FAMcLkQD0N9tyB0hBLTR59oFKmL4hAHe4llAJfJj5mTctJP3qmeSpKxUPOqAyDLO7ePjxdlUPX7Q6flP1K1%2BrHenypnyaYKJP3bGrbA%2B7Y3lVlFeD8LjTsRrwfCusMhWVhamGulqwf&X-Amz-Signature=45cb80df016110369a8c5e3088c29a6f55e98cb1d69bff4a465dd1a68451d22e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WROFX56T%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T161125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQC5VeAO6Ua93TsWW7QTSUKfOrJqgGKPnJFzHWO%2B60tBoQIgI1SEFVEJhcpsJbX%2B%2BxR4Z62KFp8HFUjDCKBGVoEQ%2F1Qq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDPhKT4NjXaXvgDHfEircA2AD%2BRGA11pnQ2gZsvWtaq98%2BIe91lipHoclJAWcbXSG7Nr9Bjwsj1kN6IlUbVD%2BJUMPniNcAnbwChYXv%2BsKr7puk8Bpmi88LAslzAMb0uzsf9VD3gudEC7o3Bon%2BvBJC1YqDvoBcksjfl634AXzBdpIfOWfMq7qxvV%2FZkQCOyKfI4UZjAiTxRNKyb1ta0Fq0RMLPbftwYcET8CqyAu7LCcgWzxkXM%2F84A8blfLQUOmxRxWw8oc9H%2BqwAiKHV%2FZ0jAw%2FWQxyVg1qF%2B2vuuXQcrMLqlIWZwtPBFc62hC3shALgjMCsxc%2B5T7OMuz0arQcLb7myI4QBMX%2FsTna%2FNaB6lGt2dBt9HHBB2fMJUIIUl90aDdde6AnMpFOIceIKBrI8YGlxnH%2BwIkFia1eOvNPFkeHy68eNWwETlCeZ%2FuJoRKjcDLHXdqIcTF3I8l31uphVMPH7GSZy64URho6Es5aa7mtOYqXQbqJ3qqmqMGGsHr9IojPAI4bNp1ahwtt8imXX3bmSwjt7PlEfxC23sXK5%2FglyKh1aGpTCdcN%2Ftx2DuIOeZIRBbfAhuswn4mDH8sqZgWVaAdP9nEOZkZeNzeOmOAz6Io5uXVLjnubcKJznb16hl86LCW08v35Sro4MMTZ2cMGOqUBDNpuzzoBjHuc65%2FCQodNrqLG5N4U2DH%2BXb1DfaBPvgKcxhwzA%2Fyo7taBzhl%2Fy%2FJyFbGKvu%2FEzrodOqLYqj%2FAMcLkQD0N9tyB0hBLTR59oFKmL4hAHe4llAJfJj5mTctJP3qmeSpKxUPOqAyDLO7ePjxdlUPX7Q6flP1K1%2BrHenypnyaYKJP3bGrbA%2B7Y3lVlFeD8LjTsRrwfCusMhWVhamGulqwf&X-Amz-Signature=3a9598fc3001278164c2927b4e624ec4061e37d7da3a98b9503942af18bf0fb4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYY6DYU6%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T161131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJIMEYCIQC1O4BYp7aAQjDiD1YKf8RL4SD1SSYOvSRsSkSysU5KiQIhAIuMuUMsO61r1AzCCLupvakb6uHpDU423AZjnMbg2mCCKv8DCEgQABoMNjM3NDIzMTgzODA1IgypLnlDdaWO6K5aORwq3AMUWWFjllCBhvIAzNu57XxrdX5aSxiv64J2LQ8USOh9L3R4ue4vmjkVs4FJc1hC6IPjffqCoh9QmXfpok5NcdGfZhb5WK5XnkkaoBOqXGBpMmh0nqU%2F0kPBSRv%2BJDl1z5nWkHj0MrfKqU4QKPfOVczzP8FehBtknkUOhCKsvaHTzDLdepI2LrTIrWKhAtzvPpRByPEUKfqLkxPm8a5xr4YYEiNZ%2FFAafqIB%2FSvwhx8EEgjDw%2BZlbVHnr2wqk7hXIgKobzcMEWd%2FsgNjzNnXd3SJzin0WmOggSK5ZcuHs7l3fDkmsMs0na5Z3sZELvhwGH%2FEdRMHiMUZJRyXyKjeRNT5BY4ebpvPODN7sQDl8yfD41UYdVerEzKYGoQm8z5clhZJoduYXyfnICA%2BwaIuitcXsVKfnJ%2FjD8tzAz83woeEPO8Ecawii24uV09GvrH6WtDDQMGLGPdpRuBa1TNqJszsOCMddxvC9oMM%2BSIwFxLWUwFu6lgseMG7F7rTN%2Fu92DUd2008DwTti1HoCJXV%2F0YK3z%2FW3i3w7R6g1dmBii649ChI%2FRh7ky%2BaIHZ%2Fkwy82RnganQRV5v46z2GBSTqs5gla0WCoZSceRRQcUWzJWfzlRnuOfdPDn5WRFCLJTCs29nDBjqkAQZ5%2FJ4qy1qaDdjtMQzGyJs7K9QuDxsRMCUKHhpW%2Ba1CXHiJe4cV1M2X6xk3Wo2wqsjl0Hz3qnz8SjKIwPnLAbpbms472a%2FrKZ7T5onu3BxwVG3EjqU%2BfyRhFh3TjVzYh71sra5EwnhZLt5%2FbvhplH6kWeBkp5ZoZ2hxaRv94i%2FlmbbUR6OYW1AktHqtBfAH%2BTXYSwqN%2FZqsTvviaL%2Bxz7VZfXZM&X-Amz-Signature=8228fb799b9e427126660366eed723e81e36d3e822ca6df25776d3ec869d7b4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HJPAEQE%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T161132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJIMEYCIQCdDqGLezIA9Fb6vj2aWlWc2Aahy2AUSOL4%2FxE78bhrbgIhAIQthRfwdCdN%2F6UiqNT%2FynfN7Oh3GIEhPgJjRLw88eHYKv8DCEgQABoMNjM3NDIzMTgzODA1Igz12wN72V0yHk2XCSQq3AO9NQa8vrMkzzeO9WY0U28Ci3Kstfq5rlyDhIa2XXR7T%2FKiTkjTljeIAkSb9fnl5gC0Wq9i3qmnltXHLaaVV0FWZ%2Fo0wY1yklYbNdEYKwnooH1uFLUX%2FzvjG9AXn84VPW51SB7pRXHcetgRZ0FnWWx7C2uiMqL%2FpONgp%2FwYT495RSoSEjr%2BvDUMTxmMKJNm7Y7d1PaFqREQIDNqw%2BKvhb3i%2BZqH7QKf3izwuHN5oLCta4b1Q5lM4Yw6rj3lru1WvBXm367zfYQCwE1MAfmEbx2kCtVkteI8oEAiGi8RgCWKxWFE0GIzEC9ASjbt6szpjIkCK7EvNjkse8TmMsUit3nBOIfDwopJERwAHmVN%2BAP6UNQi6BDf6Hhf53hFooR4CmkPQUarLybr2uUtzYm8Kz1xddS4Sj06Bou%2FjKAk%2FJEwc%2F6%2FSnWc4UONQwRbAtIr%2FevmGk3Rvk8qWOp7hZ%2F9uhFYXs7aGcLqzXidGKSfiEr1dbOTJxDRLHhoV3aOvWotCfENNQXb4ht3cMQFAHINcJMLdqVWODpVGyRQK2WLXSTIr22TFhu1Xoj1V2txcq%2FRXEicpd4RkyWfzVidp50ojRyPPnCYnPO6%2FSPpJjJfb%2FNUU%2B8sLHMxLHoLixCL1zDF2tnDBjqkAfPvvYkhH2BXcDVcq%2BNOPsSskPYbSTsce4uNuGPfjXET57u4dOGdqSw0tex%2FgWDiZQUwlfk0EYpgZEPkBYnpHs0QNZzVkt4SGUSqETvgatxIgfW%2BSQNtFV6%2BRscOGFy0xfs0ioVeR%2F0n%2BHXk3FCZ%2FuZOm0QRIyHlNPY%2BOtKIQwkmYpbmZ0kWaO2pjrvyQc4Vn4lA8o%2BYVctX8XgHQV%2Bzt229TZn0&X-Amz-Signature=7bfab1251cbd3dfc49970f8559a4ef41288cf655b2d80e86855f46f9d43b1083&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WROFX56T%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T161125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQC5VeAO6Ua93TsWW7QTSUKfOrJqgGKPnJFzHWO%2B60tBoQIgI1SEFVEJhcpsJbX%2B%2BxR4Z62KFp8HFUjDCKBGVoEQ%2F1Qq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDPhKT4NjXaXvgDHfEircA2AD%2BRGA11pnQ2gZsvWtaq98%2BIe91lipHoclJAWcbXSG7Nr9Bjwsj1kN6IlUbVD%2BJUMPniNcAnbwChYXv%2BsKr7puk8Bpmi88LAslzAMb0uzsf9VD3gudEC7o3Bon%2BvBJC1YqDvoBcksjfl634AXzBdpIfOWfMq7qxvV%2FZkQCOyKfI4UZjAiTxRNKyb1ta0Fq0RMLPbftwYcET8CqyAu7LCcgWzxkXM%2F84A8blfLQUOmxRxWw8oc9H%2BqwAiKHV%2FZ0jAw%2FWQxyVg1qF%2B2vuuXQcrMLqlIWZwtPBFc62hC3shALgjMCsxc%2B5T7OMuz0arQcLb7myI4QBMX%2FsTna%2FNaB6lGt2dBt9HHBB2fMJUIIUl90aDdde6AnMpFOIceIKBrI8YGlxnH%2BwIkFia1eOvNPFkeHy68eNWwETlCeZ%2FuJoRKjcDLHXdqIcTF3I8l31uphVMPH7GSZy64URho6Es5aa7mtOYqXQbqJ3qqmqMGGsHr9IojPAI4bNp1ahwtt8imXX3bmSwjt7PlEfxC23sXK5%2FglyKh1aGpTCdcN%2Ftx2DuIOeZIRBbfAhuswn4mDH8sqZgWVaAdP9nEOZkZeNzeOmOAz6Io5uXVLjnubcKJznb16hl86LCW08v35Sro4MMTZ2cMGOqUBDNpuzzoBjHuc65%2FCQodNrqLG5N4U2DH%2BXb1DfaBPvgKcxhwzA%2Fyo7taBzhl%2Fy%2FJyFbGKvu%2FEzrodOqLYqj%2FAMcLkQD0N9tyB0hBLTR59oFKmL4hAHe4llAJfJj5mTctJP3qmeSpKxUPOqAyDLO7ePjxdlUPX7Q6flP1K1%2BrHenypnyaYKJP3bGrbA%2B7Y3lVlFeD8LjTsRrwfCusMhWVhamGulqwf&X-Amz-Signature=7adeaec3bc664df75bfe316bd0d3a998c56cacf5442d196d21f2da3c8de74f9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
