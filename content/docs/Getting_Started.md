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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HS3QERA%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T170710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGn1oZ3pP6wibJERpxB2nLQSwi%2BBEAlJstk5BRRtj%2BxiAiBHjBJis81P8j%2FdIkMRxW067ZDWGDSaOoonbkkPGIR6XCqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSueBNZ1m56kO9NFBKtwDlO0TiNsblBdFURS469cyU69pea7sqKtNdhM2fXqf3F4qd3ixtds0AsCSltUfF291r%2FiWh1EHNiGzbZd4FN2tDJKR%2BrVLCb3oHkL7uCACSuuIhHrN7qeXeaXRohYHDrldO24SRQ%2FRwEu7%2FnZjkeLXXIq2ktkfHwIyjQtUkECcefaHD%2FHJEQrPwyTbes8fiuAKJHY5UeEAbLQYebuUSkd4%2BEf%2BcNGD00Te%2F6%2B%2FU6FHCPgcxJUUseS%2BZld906sHzmM3q1QT4g4XvOYh29%2F4RracvXaQ4ykcA2HPUO0P7CGTjuxZFINTvQ1ND%2B6Jk0FnEhW3lWNMskqOV9Hx1YI5OQZHeHPiCyhjtJz277JJWztOdBwk3lZLmc1OGRe%2BFkpoWVZEJYLIPOZK6w0eg2BOqrUvY8g%2BlAXOFouDrI4AP%2FI1TGMN42NprRe85zqKr6olu2nC2Bg7YaomEwIyxUBaleVgkTN2%2FgeBGL1mPPgMBd44acPEVEgTeIGSWq719LG6CZqymdYjzLDGsCBfbkUW53%2BFJa%2FRoSo%2BUX7Ae92lK1RIgsdlzDrr9H46spWsrwWf1OB6t9rpXaRJUUGd5sp0wMQ6MpOJOFDQjSxbqUBPkgBwl20ouig9qDaBQ23DkLAwpNOcvgY6pgFk0OF9Sw95mdYu8U5FXXIfAq5O%2BC7ZzHBntSRJGDHbDNwN3QBgg65hWKZjv%2F4VxFB%2B9jAQLsNowFvbZuswH6EpoyBPXeIETpK1WHCHIQBvk9iHQe%2FPEF2xz846D4mt2jNb2v%2FmyRwJVvblHVCKMidzXRhuY5QtxQXd7P118YpoysKGEX9KI5IfBnzXfeZrIJKBHmbhGcqt%2FRpPb4ZtUbv60dmGaWSq&X-Amz-Signature=20af7523868bd57aed4611f66b078c4e73a44c22321eb92a81f929e94f3fad64&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HS3QERA%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T170710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGn1oZ3pP6wibJERpxB2nLQSwi%2BBEAlJstk5BRRtj%2BxiAiBHjBJis81P8j%2FdIkMRxW067ZDWGDSaOoonbkkPGIR6XCqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSueBNZ1m56kO9NFBKtwDlO0TiNsblBdFURS469cyU69pea7sqKtNdhM2fXqf3F4qd3ixtds0AsCSltUfF291r%2FiWh1EHNiGzbZd4FN2tDJKR%2BrVLCb3oHkL7uCACSuuIhHrN7qeXeaXRohYHDrldO24SRQ%2FRwEu7%2FnZjkeLXXIq2ktkfHwIyjQtUkECcefaHD%2FHJEQrPwyTbes8fiuAKJHY5UeEAbLQYebuUSkd4%2BEf%2BcNGD00Te%2F6%2B%2FU6FHCPgcxJUUseS%2BZld906sHzmM3q1QT4g4XvOYh29%2F4RracvXaQ4ykcA2HPUO0P7CGTjuxZFINTvQ1ND%2B6Jk0FnEhW3lWNMskqOV9Hx1YI5OQZHeHPiCyhjtJz277JJWztOdBwk3lZLmc1OGRe%2BFkpoWVZEJYLIPOZK6w0eg2BOqrUvY8g%2BlAXOFouDrI4AP%2FI1TGMN42NprRe85zqKr6olu2nC2Bg7YaomEwIyxUBaleVgkTN2%2FgeBGL1mPPgMBd44acPEVEgTeIGSWq719LG6CZqymdYjzLDGsCBfbkUW53%2BFJa%2FRoSo%2BUX7Ae92lK1RIgsdlzDrr9H46spWsrwWf1OB6t9rpXaRJUUGd5sp0wMQ6MpOJOFDQjSxbqUBPkgBwl20ouig9qDaBQ23DkLAwpNOcvgY6pgFk0OF9Sw95mdYu8U5FXXIfAq5O%2BC7ZzHBntSRJGDHbDNwN3QBgg65hWKZjv%2F4VxFB%2B9jAQLsNowFvbZuswH6EpoyBPXeIETpK1WHCHIQBvk9iHQe%2FPEF2xz846D4mt2jNb2v%2FmyRwJVvblHVCKMidzXRhuY5QtxQXd7P118YpoysKGEX9KI5IfBnzXfeZrIJKBHmbhGcqt%2FRpPb4ZtUbv60dmGaWSq&X-Amz-Signature=69bdf316ac60f10b91c5d1247937c81f90631b753ace44b117adb8be0844c903&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LOYKYGX%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T170714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGF1li8rEzjibJVRopi%2B9xsw%2FBWj5aPRXqLNUPkYfMbEAiEA598ph33Al42hNSW9LWRZY1b3PHv2ujrmMb0EfoZyWVQqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAA8eEYa766EIVse9CrcA5mfHxv%2By0WTgUG9ahSqfqhA6mSvJMkhkMjwggcwjPcBXyyQU3tK6MZ1LTynqbXwAeIG3f4f4IDCNjPybpkMpmRo9G09milVmCxt9ZbiY%2B5mq47gyOVOIY48z%2F3fGWs3%2FX1oHe%2BxJpxI%2BYf%2FGZPd%2BEo8CzlXUH8GqBrhSF1AL3Aca%2BWB6wF%2BncCHO8nF8cbmTDBHyqyKi5sckO%2BxFcdLcoesneSQGO2MYeIG3Ryci5Ce0GHtC%2FNokXAxnBDNUkmNI8KYz4fc3xLWmlqN9a7DXqQdC8yW%2FWVSeiO879vapngr%2BVrDXui%2FRh2xF6MB%2FCfT3IbRclFD8IPH3kGQPFkSQaeklXlK%2FVCw4%2FSe%2BMFm4Sf5KYVtvE%2FeciIQ2jYjpRUKovNj%2BtOnnTBizEQdx7xHl92gVc0FB4T%2F5P84C%2BjhUbkyQOH51Qup8H6IFRafD8%2Bx3U4MNevIXApMOBZ88LjJfVsBNAEFKMEsB1d2NQKBmWy%2BKsAhcSEHeP3vFNOTpPGKir6jrYkQmJMZ6W9ioU0ncl%2FNNO02dmJue75TAGxnnjeHnmn29rbcZf6wnCG%2BIZ%2BohtPvKD2rD%2Bl6mg%2B1kRJanbNgKDYUvYgujYUHU0ZI6%2FP9CR3bmEaBu5fHDEYeMMXSnL4GOqUB3vKwGp1LdGIdelOkuuQ9NxUtiIsFkkIWXoIeaXBYWtN8G6kqngMp%2B2F6ZtDfEwkQydvHg0cgzcR%2BZ7zZXYPpNbIPQvJFHDL%2FTUS6pVZobRBHU0YENMCIY%2B9SchmFtKIPfYb%2BBP7YnNO3DmWRv5JnVSkUFwRqJsfFP39T%2FgemtPKSMu4inlzrStB4Lk2aoHOLqBtllNgWFiVEC2j1hAkR6neJYRx4&X-Amz-Signature=379046f5417229f69f84857ae61e388e8a97ac974ea7a5d4183969d669807aa4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDMQWPFP%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T170714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmGlXHIKKKretLDFhuBDmNk2DLpMo8U05qoZ76C5oSOwIhANwdUSE9h029cGl9DbXuPJFV8gFxr%2FDhZGAnTmknRnSRKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzs%2BbOJXUk2ZduIX%2FMq3APAloAjJI%2FkkCSvLuGuHf%2F3kafSUHSttPlD1BFufIFK2kXnukiid%2FnNMariULl%2BT%2B%2B5tmJcPGDYzyO%2B8go9%2BqEf9kE%2FkCz5ZsG%2BMoGCm8OHwuvo0onbOoIbH6qjHKlSOq7UuJ07zjKLGbhvUO5zuhYNdmeYd8Ibh1ZeIealaERuEG3DZQ2dhb9Un8PxHKjEVdVR529kJd3yWd6FNQgwTTAAfvaKeUSlh6oR8JsvK3cOvRXMNjWfc6Z6gPgtqG1JrJCX7UITSjp9YRqXWjxl1cBXbDDW4d4E8uQP9rIJ3sGnW54m2kZNrQl6FbzA30AAHbQX5njumxX7xgmAssWPRRMBmBWA4e3W0%2BRXWdAn9%2F0eR60gkVMF9CR8YdPIpxuzzDkT%2FrLdXPXx%2BlPUry8Ij4%2Bi5tMhtE5%2FPl2D9aDhLyVJwnLDn%2F3ckUPsv%2Bq3lSowrJyfwoI1g4rc80JsLdmC420a4S6BdY4%2BIqHH2IzDHNCtsMyi945gii0%2BL1zJ4Z7uVNjHs%2BD8MNR5tlo5%2F2EFfhWwtn7PxWsOUc8tsZxo4%2Fa21TciUhPZUc7BYVX28myC4eGA72AowKz7QhotRj3TRWdbPKU%2FCujtK3JVlO2WEOGQcXwLDURV9CKVF%2FmsqDCZ05y%2BBjqkAVjfi38G31OZw6XRWAl0%2B5j1O%2FEhHMCR2KYY706rW0NL2N1Iy5fyTSXFWBtUrKKme6lq43quFJy0jmVbj0alkJVMDOutRn9DQ9ipY3lmaIWh3T9kEZ9UU%2Fjf3Jr8y7fQBG2z3aHUq46wGTCtpm1HEjhofcFsMMbov6qSYIfIxqF3aL0Mz9o6%2FBMLXAG05ryOW7y8S%2FMd9uLOL7t%2B8DbWxGVFkNXf&X-Amz-Signature=6d06e2ea004af934a4398327636cfc981f491788964edff569fdc17f8ea193ab&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HS3QERA%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T170710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGn1oZ3pP6wibJERpxB2nLQSwi%2BBEAlJstk5BRRtj%2BxiAiBHjBJis81P8j%2FdIkMRxW067ZDWGDSaOoonbkkPGIR6XCqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSueBNZ1m56kO9NFBKtwDlO0TiNsblBdFURS469cyU69pea7sqKtNdhM2fXqf3F4qd3ixtds0AsCSltUfF291r%2FiWh1EHNiGzbZd4FN2tDJKR%2BrVLCb3oHkL7uCACSuuIhHrN7qeXeaXRohYHDrldO24SRQ%2FRwEu7%2FnZjkeLXXIq2ktkfHwIyjQtUkECcefaHD%2FHJEQrPwyTbes8fiuAKJHY5UeEAbLQYebuUSkd4%2BEf%2BcNGD00Te%2F6%2B%2FU6FHCPgcxJUUseS%2BZld906sHzmM3q1QT4g4XvOYh29%2F4RracvXaQ4ykcA2HPUO0P7CGTjuxZFINTvQ1ND%2B6Jk0FnEhW3lWNMskqOV9Hx1YI5OQZHeHPiCyhjtJz277JJWztOdBwk3lZLmc1OGRe%2BFkpoWVZEJYLIPOZK6w0eg2BOqrUvY8g%2BlAXOFouDrI4AP%2FI1TGMN42NprRe85zqKr6olu2nC2Bg7YaomEwIyxUBaleVgkTN2%2FgeBGL1mPPgMBd44acPEVEgTeIGSWq719LG6CZqymdYjzLDGsCBfbkUW53%2BFJa%2FRoSo%2BUX7Ae92lK1RIgsdlzDrr9H46spWsrwWf1OB6t9rpXaRJUUGd5sp0wMQ6MpOJOFDQjSxbqUBPkgBwl20ouig9qDaBQ23DkLAwpNOcvgY6pgFk0OF9Sw95mdYu8U5FXXIfAq5O%2BC7ZzHBntSRJGDHbDNwN3QBgg65hWKZjv%2F4VxFB%2B9jAQLsNowFvbZuswH6EpoyBPXeIETpK1WHCHIQBvk9iHQe%2FPEF2xz846D4mt2jNb2v%2FmyRwJVvblHVCKMidzXRhuY5QtxQXd7P118YpoysKGEX9KI5IfBnzXfeZrIJKBHmbhGcqt%2FRpPb4ZtUbv60dmGaWSq&X-Amz-Signature=f2ba636065f096d48a241a60bac3541406d5aadbbe8c5d9673f6418d23c17105&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
