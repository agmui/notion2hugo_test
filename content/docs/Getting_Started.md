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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTBNFOL4%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T150851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6CkfleFgJYxInT%2BYKk%2B2GvbipbM4%2BlSz3vnRXlMHR%2FQIhAP4sGrb4MPPv%2FwGuHIhLK9InUzySngGSlpioNyXhrsnjKv8DCHgQABoMNjM3NDIzMTgzODA1IgxLhIopEaxkJUbCF7Iq3AMBTAwi0tBkOVmKUBM%2FFZ4LZKrFhdRypjT0HfX1vdZBrVO0nccdYVhwEhYqr1UZMSuVcl%2Bl5BLsDamXMkkJ9xN%2FY6nxEUEvBIp3IiqpwjgMvCJB0zcP8HJdbFQPty5pXwnSIfElsd8dxiA80JatoN1WWzuwBPkFlONtvrLcnMqFAGCofRv2aiDu3xnXQ%2BwxXCeQwg0tBTM6MqYwWQsP%2Bf1NQ3JQ5Bg2HAspaN%2FAAgKXMCIFhY%2BLykgLB2TiXA8vMMmAi1kwadfTJo45CihJ%2FVckNDwpcqxDG3iNeIUOhxFntdrGHspf9yPPvsUwYEjKbP1kyP3xWBa6CsxhcH%2F2KH%2BFx2yDB5xBa%2FlzpDgx6td5QX01UWtJHesOWMlErx0dBCNJtefeiry%2FEA5WeKJFckau8hLN7d9M5YMS3f6YYDELXLUiR02u99QFia0IH5WOR6Ezy7OUjXTxxN8M8WV0HF7BxY4wkayFkDMxqTEnmZxBCA8flJ4p1qza30IXMa5nfcruC0h47CjvyKIyfnzI5iVHidqgDCq3a6eXaezaCbULEOFIvJINmuMsycyhMUr%2Bl7tULWkfSx7V6A%2F8Evlpeyib1i8v2jgf%2F8l%2F%2BSzBsVBLbobVPLTZBEcur1PhoDC5nr7ABjqkAYRXtRfU5ClACKZlQ4BnVyqYnEpqoNAKnsUUnhFUWyRFvF1jQYgJt6YCEKLwDxOxB%2FaeBXEos5L6B8UahuWdFwej55OpUdvaHA61EzfCuu8yVCSNDRLkQ63yk1aYtghkIIbjwYymVhnhbSPuBMliOdjRIizjoGaeVpPROB9epxtvWzCBYVgATKdriNvC6Kz2SZa8RpATEmIT5QmmonhfNDsHbmjh&X-Amz-Signature=e6b68232f16fd6a5ea4f8e336d97d7c823d6ae1fbb82bdc080e442175049b5ca&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTBNFOL4%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T150851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6CkfleFgJYxInT%2BYKk%2B2GvbipbM4%2BlSz3vnRXlMHR%2FQIhAP4sGrb4MPPv%2FwGuHIhLK9InUzySngGSlpioNyXhrsnjKv8DCHgQABoMNjM3NDIzMTgzODA1IgxLhIopEaxkJUbCF7Iq3AMBTAwi0tBkOVmKUBM%2FFZ4LZKrFhdRypjT0HfX1vdZBrVO0nccdYVhwEhYqr1UZMSuVcl%2Bl5BLsDamXMkkJ9xN%2FY6nxEUEvBIp3IiqpwjgMvCJB0zcP8HJdbFQPty5pXwnSIfElsd8dxiA80JatoN1WWzuwBPkFlONtvrLcnMqFAGCofRv2aiDu3xnXQ%2BwxXCeQwg0tBTM6MqYwWQsP%2Bf1NQ3JQ5Bg2HAspaN%2FAAgKXMCIFhY%2BLykgLB2TiXA8vMMmAi1kwadfTJo45CihJ%2FVckNDwpcqxDG3iNeIUOhxFntdrGHspf9yPPvsUwYEjKbP1kyP3xWBa6CsxhcH%2F2KH%2BFx2yDB5xBa%2FlzpDgx6td5QX01UWtJHesOWMlErx0dBCNJtefeiry%2FEA5WeKJFckau8hLN7d9M5YMS3f6YYDELXLUiR02u99QFia0IH5WOR6Ezy7OUjXTxxN8M8WV0HF7BxY4wkayFkDMxqTEnmZxBCA8flJ4p1qza30IXMa5nfcruC0h47CjvyKIyfnzI5iVHidqgDCq3a6eXaezaCbULEOFIvJINmuMsycyhMUr%2Bl7tULWkfSx7V6A%2F8Evlpeyib1i8v2jgf%2F8l%2F%2BSzBsVBLbobVPLTZBEcur1PhoDC5nr7ABjqkAYRXtRfU5ClACKZlQ4BnVyqYnEpqoNAKnsUUnhFUWyRFvF1jQYgJt6YCEKLwDxOxB%2FaeBXEos5L6B8UahuWdFwej55OpUdvaHA61EzfCuu8yVCSNDRLkQ63yk1aYtghkIIbjwYymVhnhbSPuBMliOdjRIizjoGaeVpPROB9epxtvWzCBYVgATKdriNvC6Kz2SZa8RpATEmIT5QmmonhfNDsHbmjh&X-Amz-Signature=ae0acd59babaffcc57a9a35267793e619878a2196ef0101d0d82dfbe340d066f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVEERPX4%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T150857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDq6bgyxHmX9jR8W7MGdw%2BWXoUJ1Eye%2BLSXb84nFGV2LgIgMQvt1uka4KQBlJ8jDBKmItKpkHNQsg3INHPZY1dq%2FnMq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDJ56MVVvDszcpWRbUSrcA57Uu7XRE0yoDnLOAcn54DpmhzoFpkSPeuRPCbqUTYn8waXJevvw015nC4PUquW%2Fn1EMoM9p4JcJhnWen4xjXqMJlJWdxdnPzDEzARW0Mk2hnkC2x1fUsm%2B0Q9ToafbTtw9ok1u9tFcawHq3cBlimfqNFbkECt3wdzsi4XINTgdfzoXyrlyvDmvMl3PsRAcRXiTYDhJatBqnxZh4IUMc%2Flv4MvTI3Q68I0pnTJRD4%2BYRkEv4YFECfiL7cM%2BKRsR8sVLmNgAe0o1p6q%2BsUtgwsURzFp9lkAMdhc%2FKQWe3bej0aoUtfKn%2FVO0aDdJd6dIb4opHR0QV6vQzJY0wURqVhEr5VxPOKtwDPS52ZzdBzdLOIM%2BsZNczPsBZBlkCnZ0LNTmvoHwqb6hnKVYPXs6hKBWGeuM1hQ8bB5q9ninJvo2%2FzaB13p%2BxabqVntmsHGsyqUzskL541KX1UJl3ffB6omHZ4x0XhImVOwA38Cuv2ya9bI01%2Fj1e9TQAo4WDuuUFqTHBpOD7Nw0WcLzB%2B8nDakUJ6CiKBJtlkJ1EOBrAo0qDCQ6Qu0tefkowplmjr8Sk45GlkhSIXxSUPl83ZrU51uZ1I8uqf2K1bTSMdLbLBIkYR54o7UOcAN3KCPITMN6evsAGOqUB9aHooxBAzosG8nIQZV2%2BMLK2dSEsRwbrbLxLbcuxmWe5Q7O331r33%2BVdLMAJHq9B86vgEfgHq7QPz7FA4LcTyW0kV%2FWMyXo4I7OidbhcLdvVh3tu5%2BU%2B2%2FTlct%2F%2FdgEsNuxbn5QG4%2F3gdx7fm25JlnQuge%2FD2YnR5jXqb51GK%2F5IcUZVHgwnBJJqua8vcvCX8F4GIMkm5t4y3JZVYnSDKDXV%2F%2FF9&X-Amz-Signature=7d5bb855954b91859e470ef3048461b674df96f15ef3e9fd0fe4f7b62248e979&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RYTABKA%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T150859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDVJsW5DrG%2BAPJKNDnM4UZIHLdMcao9PKQsWMlYmYkZTAiBlk5LfWOZaTD5r%2FCGoUYDfNu5Kw5HT6aWOCdhCTiI%2F1ir%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMm9Z7L8gJv1YHVdNKKtwDbjTI6oAKc5VizCvcsUuyRNYTtVVxxFiT0eRFApilbVjT1eRkDy1hM3pQgL65e603PiTAMvFKQpy71nCmhbyIFS397knowxhcRC1ZWrr2wmPZRlS5VHss1sKt6DHH2%2B7CC6WePXYri%2FbocsQStn3LhaTybSHM9wWCjgriw4lZf3czseu4htYGjcziLwl12kIP4f2rQh%2FtYjoeKJIBp2SUREzb3dIdnOSi1l0AjZdG9MpJpjfvOjfy5DnLHKQwjAXlaUK4CW3NN4u39yP5lKbtW0hGgCkYI7o46CQSTFcdLDTgDb0pON%2BwPgBH1zPsqfZWmufdMZXlv9ey7QAUXAbBLK%2Fio%2FE22U2YfEsax3jDv3AMGy153UKvdImeNBczjkMKCaD4hIv0ZSDmyCAD8I868nk%2FsDPkBxke%2FNAhfc8nCuobzG1TcEhfcm%2Frijq5Eaw0m8Sysu6ovj18VTr4Q5ymWOH8ZQ24adQflzN0ES0I%2FdYWipo99MoNQ2i9Dc6%2FG8uQ%2FubdIgoBpmVJ4Kz8TOoH%2BidAmu26JkhW%2BUdfwSVE3VE%2BYJIQvidOB5V2aMMqWAYPq3%2Fj9lK1FmVznForF2qX7FYDmv561jGHf6Wj8pLSo25naemx%2FM0ayrG%2FcfEwpJ6%2BwAY6pgFHViraxIn11%2BJBlPQfvQlZmNwj8wfjFt%2BE0GFIBEmlLxYv%2FAB6Rqoic89kEwH7gW%2B2DKQ6oBF5kNLJi5j1nUWTaltiTAbygsCrm7oCsWk06XAT5us6PB6Kvuj%2Fml%2FVbnMGB76i2foUOf5YLLw3H1vbnYb0bvhHV35GDeFUZ5EBFeAVEgVKcB5OnhWxlM6adB%2F3QZANr2L881G2DNwis%2Fv5uV5OIG4g&X-Amz-Signature=e28cedb37c746e38db4c9d676713cc6e495ce77262331ad5eae84bec7c16b1d1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTBNFOL4%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T150851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6CkfleFgJYxInT%2BYKk%2B2GvbipbM4%2BlSz3vnRXlMHR%2FQIhAP4sGrb4MPPv%2FwGuHIhLK9InUzySngGSlpioNyXhrsnjKv8DCHgQABoMNjM3NDIzMTgzODA1IgxLhIopEaxkJUbCF7Iq3AMBTAwi0tBkOVmKUBM%2FFZ4LZKrFhdRypjT0HfX1vdZBrVO0nccdYVhwEhYqr1UZMSuVcl%2Bl5BLsDamXMkkJ9xN%2FY6nxEUEvBIp3IiqpwjgMvCJB0zcP8HJdbFQPty5pXwnSIfElsd8dxiA80JatoN1WWzuwBPkFlONtvrLcnMqFAGCofRv2aiDu3xnXQ%2BwxXCeQwg0tBTM6MqYwWQsP%2Bf1NQ3JQ5Bg2HAspaN%2FAAgKXMCIFhY%2BLykgLB2TiXA8vMMmAi1kwadfTJo45CihJ%2FVckNDwpcqxDG3iNeIUOhxFntdrGHspf9yPPvsUwYEjKbP1kyP3xWBa6CsxhcH%2F2KH%2BFx2yDB5xBa%2FlzpDgx6td5QX01UWtJHesOWMlErx0dBCNJtefeiry%2FEA5WeKJFckau8hLN7d9M5YMS3f6YYDELXLUiR02u99QFia0IH5WOR6Ezy7OUjXTxxN8M8WV0HF7BxY4wkayFkDMxqTEnmZxBCA8flJ4p1qza30IXMa5nfcruC0h47CjvyKIyfnzI5iVHidqgDCq3a6eXaezaCbULEOFIvJINmuMsycyhMUr%2Bl7tULWkfSx7V6A%2F8Evlpeyib1i8v2jgf%2F8l%2F%2BSzBsVBLbobVPLTZBEcur1PhoDC5nr7ABjqkAYRXtRfU5ClACKZlQ4BnVyqYnEpqoNAKnsUUnhFUWyRFvF1jQYgJt6YCEKLwDxOxB%2FaeBXEos5L6B8UahuWdFwej55OpUdvaHA61EzfCuu8yVCSNDRLkQ63yk1aYtghkIIbjwYymVhnhbSPuBMliOdjRIizjoGaeVpPROB9epxtvWzCBYVgATKdriNvC6Kz2SZa8RpATEmIT5QmmonhfNDsHbmjh&X-Amz-Signature=d5829b4c9cea6d9309b1436c60c5f2fb1f0229328a1161ab13fed8ff7c6ac3b6&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
