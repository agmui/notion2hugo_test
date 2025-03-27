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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3B6T43O%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T121458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUK%2BQNaW1pVEIaOK1koWiJHICmGhnpUDI5v6%2BCjQMNegIgWQD0OKwySEEW7oVbk8cuamMt5Sa30nFceoU0NTMU5vIq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDHyjGHHoIew0%2FXeGPyrcA0Q0g6GVZXJd0NChRXi%2FnKTqPia36v2JIBD7tKzC22VjFcnY0JYESXae%2BVbww8WSj3e7kdNt2SxylQM%2F5BitreWxjpuN9n6eTaDnI4QMmunEPv4r%2BfmlPrdk2uuiE2cKj6DiCm4lhllQWMD88ZyWUIcsEhNxevSw9Z9NfqWu65oq0DTdtGEKb%2Fj88EXfmv%2Fa5JUPO7aBa9hq3degCZ9wDTuSbjkAlKmdovQdOnsKOhwbCwdzljO0cF%2B2TzZcHS%2FNXyv4Hb43XdWGLBwEoC5STI%2B3ZvYRHCrKR%2BKpW%2FwytIJwPsdl%2FqON%2FrmefP6g9jbjMRGzIsB3Ot1bONQ8Dksi6aNkk0eSCCyKQiuYBj42NMW9%2BxOBw22KjFyBruch2Vmqq5ieyiRs5xmW3NMMyvPtwLO1du6QT%2BSp7r%2BygzgU6Gf3nwGVxWAQUwQp6Gx8UYXw6CNa8sMYrNvR2UsAV7Sgkp%2BDSSBG%2FNNLUiMGVrtPz5v6tgFtrqDcL8m3F%2BbrTDLvpyZHk2XKKJH3dMOYTM89sLQ8vAFxXRbRSX6KxIpCc2e6jY6MWMURN93HitRBIbOKV84zNamMjxpmv3%2BH9dU8v7VjbXLLhevT1N1PsDty%2BLDTUxXystwOjqcB3DQDMJj4lL8GOqUBzzkVSFGEO%2Fx2UeaGTWSKcyAYLVYFFcXP%2BulcD3rr%2BZV%2FhQEef%2BZTcSa6s58W2aB9eEGtbJ%2BUNt4AVmRb5n1oElzQOgHcbSg2zjolxp1MGwPlFixBFljpgW0vUDsoVuzbfIBPHnttF2bPzdt1vo0SapPCF6ievyabbXLVZjJqL5LnLFPTL6PYDyUckR5%2BpCVnwp8r0Hg5uR0uUETwD9dqyc%2BVU65q&X-Amz-Signature=b69f5741f56bf135a81386c4060f87840462b215b8abff11b0532ff230f3462c&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3B6T43O%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T121458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUK%2BQNaW1pVEIaOK1koWiJHICmGhnpUDI5v6%2BCjQMNegIgWQD0OKwySEEW7oVbk8cuamMt5Sa30nFceoU0NTMU5vIq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDHyjGHHoIew0%2FXeGPyrcA0Q0g6GVZXJd0NChRXi%2FnKTqPia36v2JIBD7tKzC22VjFcnY0JYESXae%2BVbww8WSj3e7kdNt2SxylQM%2F5BitreWxjpuN9n6eTaDnI4QMmunEPv4r%2BfmlPrdk2uuiE2cKj6DiCm4lhllQWMD88ZyWUIcsEhNxevSw9Z9NfqWu65oq0DTdtGEKb%2Fj88EXfmv%2Fa5JUPO7aBa9hq3degCZ9wDTuSbjkAlKmdovQdOnsKOhwbCwdzljO0cF%2B2TzZcHS%2FNXyv4Hb43XdWGLBwEoC5STI%2B3ZvYRHCrKR%2BKpW%2FwytIJwPsdl%2FqON%2FrmefP6g9jbjMRGzIsB3Ot1bONQ8Dksi6aNkk0eSCCyKQiuYBj42NMW9%2BxOBw22KjFyBruch2Vmqq5ieyiRs5xmW3NMMyvPtwLO1du6QT%2BSp7r%2BygzgU6Gf3nwGVxWAQUwQp6Gx8UYXw6CNa8sMYrNvR2UsAV7Sgkp%2BDSSBG%2FNNLUiMGVrtPz5v6tgFtrqDcL8m3F%2BbrTDLvpyZHk2XKKJH3dMOYTM89sLQ8vAFxXRbRSX6KxIpCc2e6jY6MWMURN93HitRBIbOKV84zNamMjxpmv3%2BH9dU8v7VjbXLLhevT1N1PsDty%2BLDTUxXystwOjqcB3DQDMJj4lL8GOqUBzzkVSFGEO%2Fx2UeaGTWSKcyAYLVYFFcXP%2BulcD3rr%2BZV%2FhQEef%2BZTcSa6s58W2aB9eEGtbJ%2BUNt4AVmRb5n1oElzQOgHcbSg2zjolxp1MGwPlFixBFljpgW0vUDsoVuzbfIBPHnttF2bPzdt1vo0SapPCF6ievyabbXLVZjJqL5LnLFPTL6PYDyUckR5%2BpCVnwp8r0Hg5uR0uUETwD9dqyc%2BVU65q&X-Amz-Signature=9e92ac5c652ad523b52130edc5d1082d1ae7761b491fe81480dfa5be7f64a237&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMUE632O%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T121506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCx8K7zqIu0kSokX3rey3DPPwd7A%2FyQ4a6El8iCuVirTgIhAL7%2FP%2FidrNkRwHkIbPA0lmonIXU3ejFjQ0ner4vpIykVKv8DCEUQABoMNjM3NDIzMTgzODA1IgzyLcp12nEFdiLDpFoq3AOzyLCTQpRH5ZeGn3mlrAWvbmIUYqeFxMJVYowFe%2FOqEmajgZBPPAOfLKQ8ITikyxptaF8OzWOSA%2Fh5Ppdi3sBKFYaINVqyXYws8BIuahDv8Rfni5pZJKszzCvmtIdXaVU0YiqayvJs2hFdqpnR%2BdZlovfFvUPSdorIRHeeKPDtcMPfZTUTFkr7EMrEfIu9m1zE2JIarK6dGzBa34VRsgRPeGd6hTI3Loke%2F7Kam3XpY5CPmU14J0rAzN4Fng9vEgThMASxdxegptfdUpWopysl53dVtd0U7Nkm4O5JazlUQ%2FytulFNw%2Bna1nV6jDfY3RWchUS6IwPTMMxb2Cpc%2FxJ4bp7nD3r7Si7%2FE7Gyu%2Bza%2BIcTHmd4LctZE1SPlwBtuGTRfWB9Im7fQAYtyESOiuAYErdEVQ5EbrLltNf8AZSWRyQbitv2izTozijTdAJhog0quyOjp8DlzEijKxYV93gRI9nfMu2GBhHCyxH5hF5RxH2YJukDxqFAHff1dB7XQPL0S0VD3v8LwbY%2BT5lQxfDuHMbsqlI%2B9j1A%2FgyY%2BwXKfFl66dlRlBg9CC3BwgQQbzDLmz7khFqVR3p4vH5gfzx6s4vaNZzhA6nU95ZDxm9aFYVyyZe3T5o%2FT%2FoodjDw9pS%2FBjqkAdCppj6n6MuChSChdXy7u4qm%2BF0dhjiuXbHQ39CUcb0wt%2F3OjaVWOWyLl7lKYgTgtaSnzCmNm0aaqknRsVKqticiGjnps2vilagfVO%2BzOz2zAvJmwuSKGRVZKz90XCMIYJIfanmyRRNzY7YqWsF%2BdikBEGjKriOf0tToVPdp6%2FdAKvTOotI7x%2FS%2Favw9LoLIyPEXZefIauPW%2F5ABuV%2BbvCnfCKvK&X-Amz-Signature=509ae5c2d99660634b3fe293c71460cb4c7975aa294c1c2ec30f6f207f5dc9be&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KLVUJ5U%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T121511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSumqgjenO2ITbkeOBkHXaeVDuYngyW9mg5cywgd9g7wIhAKhuSg4trcYY3LwMXcTS3OMxmBpf%2BEVVovAyQrIF7LGWKv8DCEUQABoMNjM3NDIzMTgzODA1Igy90cTK7BfJVlvrKzsq3APDST%2Fo0Dl6b%2FYRd0vOCTB60hGPnDSCwddnffkE5KKGxP7VT2XkWVydBknqtJsJxUi5K6n6PeX1Zs7Zqo7vYA5mIPrwI3eWZmWd%2FTkNBwaliSlYTj4DlO%2BxMdrHPROQWn%2F74IbL2V48ku3BaVUYrdPcOgxgqwnfh9nNja2VSWiic1ZSYnuarLPWkdKzC4mFfx6hSJ473eUk3mlXKuJ9DKUctHLrnDZ2gDUIg5nsaCkTT515YTH4G5dDFVSgzbvOvqhJlO8npbaHrV9Q1oWy5nfVs4XtQJDFvmKz%2BN2Zv2yvGNK0ZG8szfhQVBam1oNDwWPXjJGANCk7vBpdikOf6%2FbqkYBFsUuRQE%2Flt0XKto2C%2FG6uXEwU6HcwdE3aQ4HZW9p%2Fo9LoEMhIQ1%2FWT4cCcZqglAEabje%2BPR9mF18ex029Bxlejq2agnZv%2FoIJQd%2Bg0QTIhy8bJMm%2FAGuz%2BxwMxCs5M3zcvdUlj3JNoB%2BqLAZed6A4xjuA0m6W4ko72ucAzZfT%2F0jvQfw1wTfG%2BDDtbQXsDe8aw9LC00r5h%2FsIEjSCabYnxfCndN8mtNBJN51Z9CfapADS08SYoNa4M9Gmx%2B%2BjaFn63xiTCqaljYA0kymArq%2FWftqGdwfozeQ3cjDt95S%2FBjqkAW1XrSL9pdkVonaqOt27Qj3M%2FXy62L65IE7gLp94hD97vzlLXRsf6qlDsJ0wlOKGTIiNGysONguAI3fvNZ9pdw9bFhv4af24XwIxlFp%2BaFsvjPDAsD2V97Qi0%2B8SNpafuDRbEDqMvEHS9NSWRP7r74mI0XEBxV8oO649bXQGc47gtN2DTXpvDxTSmcx85JhMnhzt1EPR0nLZoCpmEWVXhbyLZkJ9&X-Amz-Signature=4052a7c453e8cc7d452a3d00578c28c6f7972c3e9662e83ac5eeea94f9199e73&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3B6T43O%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T121458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUK%2BQNaW1pVEIaOK1koWiJHICmGhnpUDI5v6%2BCjQMNegIgWQD0OKwySEEW7oVbk8cuamMt5Sa30nFceoU0NTMU5vIq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDHyjGHHoIew0%2FXeGPyrcA0Q0g6GVZXJd0NChRXi%2FnKTqPia36v2JIBD7tKzC22VjFcnY0JYESXae%2BVbww8WSj3e7kdNt2SxylQM%2F5BitreWxjpuN9n6eTaDnI4QMmunEPv4r%2BfmlPrdk2uuiE2cKj6DiCm4lhllQWMD88ZyWUIcsEhNxevSw9Z9NfqWu65oq0DTdtGEKb%2Fj88EXfmv%2Fa5JUPO7aBa9hq3degCZ9wDTuSbjkAlKmdovQdOnsKOhwbCwdzljO0cF%2B2TzZcHS%2FNXyv4Hb43XdWGLBwEoC5STI%2B3ZvYRHCrKR%2BKpW%2FwytIJwPsdl%2FqON%2FrmefP6g9jbjMRGzIsB3Ot1bONQ8Dksi6aNkk0eSCCyKQiuYBj42NMW9%2BxOBw22KjFyBruch2Vmqq5ieyiRs5xmW3NMMyvPtwLO1du6QT%2BSp7r%2BygzgU6Gf3nwGVxWAQUwQp6Gx8UYXw6CNa8sMYrNvR2UsAV7Sgkp%2BDSSBG%2FNNLUiMGVrtPz5v6tgFtrqDcL8m3F%2BbrTDLvpyZHk2XKKJH3dMOYTM89sLQ8vAFxXRbRSX6KxIpCc2e6jY6MWMURN93HitRBIbOKV84zNamMjxpmv3%2BH9dU8v7VjbXLLhevT1N1PsDty%2BLDTUxXystwOjqcB3DQDMJj4lL8GOqUBzzkVSFGEO%2Fx2UeaGTWSKcyAYLVYFFcXP%2BulcD3rr%2BZV%2FhQEef%2BZTcSa6s58W2aB9eEGtbJ%2BUNt4AVmRb5n1oElzQOgHcbSg2zjolxp1MGwPlFixBFljpgW0vUDsoVuzbfIBPHnttF2bPzdt1vo0SapPCF6ievyabbXLVZjJqL5LnLFPTL6PYDyUckR5%2BpCVnwp8r0Hg5uR0uUETwD9dqyc%2BVU65q&X-Amz-Signature=141b39eddcd709574990f8c21803157ddd7ded120469bdb3c4370bf3ed0c56ae&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
