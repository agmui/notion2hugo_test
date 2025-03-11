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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TNR5WIK%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T003742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIAK3EZIeer1Qc7x%2Bz8oazuFpFZlisnewNnGiP5n%2FSyd5AiA%2FjwkNgsL7xY4CG%2FcwytOFFbEE1oVH5CpIHxsMi1oIuSqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwySMTlSbRWFhLHIZKtwDzLZ1Gs5eEgwun7C2mIMeK00CDpyqfvhAzR4bVKNU5S%2F1Y2Vf7V5t6Jt3ieVbWU16aBkON2irBkIwqJMh9UJ1%2B3YNoO24wHhb75Nulnc5AC4dpx6aoQkaVmTHCmdbh0oa8TTFi26LM1m%2Fud6a7QuPdSawpNOD9lOYbSOmv0xhiQqNfX6mW7xGGDrX6ftLUwT78BRN2Lr0gOIjREB64qVItnzDdVJrp0Z9pRM8ROS7GEz8XDssOWN3NljrM8mruQuErGVh%2BlMVdjrsDYkUqnv0xDcDSxy2fWXiZsd5Z0DqgL1g7DbrCJPSgWB9R%2FVKH73FEOFzKW0EinlxRXYB%2F2EbNEo8YC3hRJbFmNfeB22gT96MpfaiNtyyxUOknDu0Y6W4bGR5jz%2FyrK%2F415wvVSc8pa%2Fd0%2B1bWhT%2F%2FIxYGjuj30lpHsxO4yh6TjyBra7qt2kqMErLmlIsnt2Fkq1LsjZZKuv%2BAHt%2F0AJlEtaj6HiaYEtrrBg4V9p37wVXOLYjeUHCz3TiYYPR0R%2BDNlZ0XR2%2FZiLMC2qJT345a4O0GuW%2B8P03VCVGCFlyBgeoGj0PUEgquoq7ucaY0nWZbU1hRNZegxII3aUCPPRvs2f1yNY%2BltGpWMehdMix65dAmFYw1u29vgY6pgEE%2FHCmZ07pAekqrhV8ROWV4nhMopQW2d3mDfH61b0lgme3ULJ%2BI7lnTyHPHhel2AldsfI9J0wp2HSX8zf9mBoXIUc3WuVFbfk%2Fm60fUh2ABuLUjzEsVwcrVg97TnMF1kgPh16UI4q2NCCUcrO10O13jOmx5wxEpZWBw5mWGV3jKTWZGg6XD2jyfM54OTkfhnyRD%2F16%2BkvcCC5yzhvMRwxpU13VXzuH&X-Amz-Signature=c5e35e91f3157b4f9a9d4e9527d679336c3261b85e81d08d69b6a35b99d4d218&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TNR5WIK%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T003742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIAK3EZIeer1Qc7x%2Bz8oazuFpFZlisnewNnGiP5n%2FSyd5AiA%2FjwkNgsL7xY4CG%2FcwytOFFbEE1oVH5CpIHxsMi1oIuSqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwySMTlSbRWFhLHIZKtwDzLZ1Gs5eEgwun7C2mIMeK00CDpyqfvhAzR4bVKNU5S%2F1Y2Vf7V5t6Jt3ieVbWU16aBkON2irBkIwqJMh9UJ1%2B3YNoO24wHhb75Nulnc5AC4dpx6aoQkaVmTHCmdbh0oa8TTFi26LM1m%2Fud6a7QuPdSawpNOD9lOYbSOmv0xhiQqNfX6mW7xGGDrX6ftLUwT78BRN2Lr0gOIjREB64qVItnzDdVJrp0Z9pRM8ROS7GEz8XDssOWN3NljrM8mruQuErGVh%2BlMVdjrsDYkUqnv0xDcDSxy2fWXiZsd5Z0DqgL1g7DbrCJPSgWB9R%2FVKH73FEOFzKW0EinlxRXYB%2F2EbNEo8YC3hRJbFmNfeB22gT96MpfaiNtyyxUOknDu0Y6W4bGR5jz%2FyrK%2F415wvVSc8pa%2Fd0%2B1bWhT%2F%2FIxYGjuj30lpHsxO4yh6TjyBra7qt2kqMErLmlIsnt2Fkq1LsjZZKuv%2BAHt%2F0AJlEtaj6HiaYEtrrBg4V9p37wVXOLYjeUHCz3TiYYPR0R%2BDNlZ0XR2%2FZiLMC2qJT345a4O0GuW%2B8P03VCVGCFlyBgeoGj0PUEgquoq7ucaY0nWZbU1hRNZegxII3aUCPPRvs2f1yNY%2BltGpWMehdMix65dAmFYw1u29vgY6pgEE%2FHCmZ07pAekqrhV8ROWV4nhMopQW2d3mDfH61b0lgme3ULJ%2BI7lnTyHPHhel2AldsfI9J0wp2HSX8zf9mBoXIUc3WuVFbfk%2Fm60fUh2ABuLUjzEsVwcrVg97TnMF1kgPh16UI4q2NCCUcrO10O13jOmx5wxEpZWBw5mWGV3jKTWZGg6XD2jyfM54OTkfhnyRD%2F16%2BkvcCC5yzhvMRwxpU13VXzuH&X-Amz-Signature=07708d220f9305c93b5e65ebea0fab48476dee2a4634dc929cfb807e5324d894&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2TQENVR%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T003745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQDTu8wEakR5mjjz3mv74W93ODaFUJsEeVMNJ2jEdifkOAIgazRiX%2FiXohIbCx0Zhxvg%2Bp45YEguVVavtWAYwn1c1rUqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ%2BZJIKuLbIJrwqpbCrcA1FOSuaMmDX7U4%2BtkePZ8AjScULL8B8W4bRNPkbs7hR5DL%2FP7N11OsEOYhHhEtHSD9T67xMop54C%2B9iof%2B%2FBBENlVUjcJNVo%2Bb6fom37lRJY3GsaIdtLqV5jVN1zfUGE6SN59UYyw%2BsotJ1p9J81o62VBarMapl%2BsrH4VVZQWWkb7zbd5VPhHiE%2Fvv9hhz9dZNd6NaLh4l3c4n9PJerr1Bz5DxoxFJrAKPs7LFc3zcISJ97CqC49QbfETnmMD0cEy2I7g28Jk%2FExIfCI9PZTYEcB9jIVE2evFVm8MYK9UP%2Fe2edfuo5OfLxpcEB7dQ%2FxbqFNvcii5L%2Bet1V%2B53FsT%2B97EfJZsqfD38BbAjKftjjss%2BEbUvyN3a4D5QTaUHRvm%2F66%2BruDKZCF4bzKoSDZaYkcwcmrpiLleokoGmcgHd5hlIjzjXxay9TPboDM8RVtyVB76r8zP0F4K%2BaebWHY66o1e3bhRwo3fIhmY7fwn8wC8wNF8%2Bcc1sqg9rbqES%2FiRm%2B5riwacOMnZmgaBYEOry5HrR5e3wveIVIoii1TsLboYflGSLXPpcC0Mce5uBSFuT1ZnjloaXxgScTcTT5LDnJPn8DFxEtoZELJzWHAZNOU6iTxpGKaibO7Ni05MMPtvb4GOqUBrSHx%2FSnjWTVVjld7iMnr47%2BpGObU8YmI%2FTQzE36y%2FHsbcvrCVC8UJP3IZvcbeiBX42Bx6LRmGOtZdbeSFpwz42Wuxdpjtzask34XGze3JTFvRgNUx4q30M4yWPxEx7HLTtTqAIf45%2FCJOQ8Um3gcq3ukyvO7teJstTp4wDM1w6UqXpxnnER6oAbv%2B2xLA58bxEYGLSocAqEN8gLo%2BbvZyIju434w&X-Amz-Signature=cd3eab29fb34f9e6e9146f68cbedcd92351c54a440e2cec883ab8be6bda61b9f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PYL45JA%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T003746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIGsOFcWAhCFwG8TROOh3m3U47enXAJKWSa4EJ%2BLodnyoAiB7%2BH2dr9A0vDen%2FZZ61R4sh2DWhk5jQzFOWpGPHAx3siqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjLAC%2B84JWLGmHzecKtwDy%2FL5dyahnqHSk8Or3ac681lPMMr6PhmJuo4NPijjWQ9fL9KXSPRVERaAVS4jkqA0mjyandTWgyHUpfNDHHTgv7c8aA%2FpOEM56WdyjozvIuqEqX1SEogtbRw8zlgpaE0h17EBmGtMTyPtY234q2%2Faxx1Wq9wNc%2BRKLeKwlJpc7RmxOdCmE4BcslJBz9giscOoBBk4QWkwDNnRVVdORgfU9ontuAsh7qVQwRlq3LSWolMRb6EZbfMl8gJnM3IqlvWOFTB3S9ijS9PK7t1nWURTThWsnAkdL9gR13P5mjtQncrgoaiEUPN97CPhx4D9%2FS5i7lPGlEVH8Jphc85LKS1%2FPhEj%2FBOSSabG3ndDcd52ZYUgd7cPl1zCWlvNvVYrK24L9zXQNNO8%2Fy1lDQWEbEvJNRIU1P9RUZdaqjUyyxXYuSmC0w0Lg2uJN7ZdnlbbSI0hSBA%2Fpf2KcsMSvx4miZtr4DBEkfYYnKoqNyMNxW60AL9DNBoWxmZHH9ApAr72LXKv0P4L5c9GSamOOuVErQr3uwjFwBOkT7384k%2BGYpnSuZNDmGkea6sxBHbXxSMXD0rPd7fTeWnOOsPTSgbCIC%2BIYJeAt6fojriccrMGNTNPu5P3MbSQf6AlDCh%2Fjsowne69vgY6pgE9Ef8hBSi2qBTJuJ8CTcb2NEbipJ%2BRIZvZGQC%2BFrzDZVvAo%2FnUFdm8COeHIP1TjsJcO7uJXev6vejtilAF8bGC6%2F3xnN%2FJyb5AIVxmipuBdmSNe0f70p6Yp8Nv5xJ%2BwE6JdJK3GYvdhoG%2FlK%2FnPtmhzetoZZnrUlpIt%2FT10j1julJhxFGoSz4sxS9lqkNYWzl1hmF1fnjEIfvkOMdvVQGlXoz%2BOJ%2FI&X-Amz-Signature=ffc01674a41f6ff94a77075b2417e2eaa082c6f3b8c161a70a65cbd174bb692e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TNR5WIK%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T003742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIAK3EZIeer1Qc7x%2Bz8oazuFpFZlisnewNnGiP5n%2FSyd5AiA%2FjwkNgsL7xY4CG%2FcwytOFFbEE1oVH5CpIHxsMi1oIuSqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwySMTlSbRWFhLHIZKtwDzLZ1Gs5eEgwun7C2mIMeK00CDpyqfvhAzR4bVKNU5S%2F1Y2Vf7V5t6Jt3ieVbWU16aBkON2irBkIwqJMh9UJ1%2B3YNoO24wHhb75Nulnc5AC4dpx6aoQkaVmTHCmdbh0oa8TTFi26LM1m%2Fud6a7QuPdSawpNOD9lOYbSOmv0xhiQqNfX6mW7xGGDrX6ftLUwT78BRN2Lr0gOIjREB64qVItnzDdVJrp0Z9pRM8ROS7GEz8XDssOWN3NljrM8mruQuErGVh%2BlMVdjrsDYkUqnv0xDcDSxy2fWXiZsd5Z0DqgL1g7DbrCJPSgWB9R%2FVKH73FEOFzKW0EinlxRXYB%2F2EbNEo8YC3hRJbFmNfeB22gT96MpfaiNtyyxUOknDu0Y6W4bGR5jz%2FyrK%2F415wvVSc8pa%2Fd0%2B1bWhT%2F%2FIxYGjuj30lpHsxO4yh6TjyBra7qt2kqMErLmlIsnt2Fkq1LsjZZKuv%2BAHt%2F0AJlEtaj6HiaYEtrrBg4V9p37wVXOLYjeUHCz3TiYYPR0R%2BDNlZ0XR2%2FZiLMC2qJT345a4O0GuW%2B8P03VCVGCFlyBgeoGj0PUEgquoq7ucaY0nWZbU1hRNZegxII3aUCPPRvs2f1yNY%2BltGpWMehdMix65dAmFYw1u29vgY6pgEE%2FHCmZ07pAekqrhV8ROWV4nhMopQW2d3mDfH61b0lgme3ULJ%2BI7lnTyHPHhel2AldsfI9J0wp2HSX8zf9mBoXIUc3WuVFbfk%2Fm60fUh2ABuLUjzEsVwcrVg97TnMF1kgPh16UI4q2NCCUcrO10O13jOmx5wxEpZWBw5mWGV3jKTWZGg6XD2jyfM54OTkfhnyRD%2F16%2BkvcCC5yzhvMRwxpU13VXzuH&X-Amz-Signature=98808cf8f86792227f1907a95b6139c332619be183841ab9ac713dad81e5c6c1&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
