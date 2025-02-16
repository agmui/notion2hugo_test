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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRGDBIL2%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T200740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQDr1EzS97YCrx1J78Ls3XZD8QXZGz5I0GVDHCaU6eGAFQIgL0yRq2MbsUYYxmGjlXoPNyAxh3zawVAONnOua%2FhWoeEq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDAnZGrLPWQQJwkVVUyrcA15cfhEaVXFJg0QHqove64K%2BLcHH%2B2KQNvGE1t%2B4XkoW11R1CSTxTC8TOwXwG0loEz10q%2FVMZbQcqFrhLrIettmu%2FOIvXt3inffKlCIW11it64y7CfX39x5d7YvU2g3EGnY9uN46FLbXC%2FZGfHw4ADlIKw8UnKg%2Be6%2BqfSyMFa%2F2YXmsjtiwb%2BHU9xW%2BLT61iAQIJr2Abm5deSc3x6Z9HoYZd4XotVifKcK1hYS81H%2F%2BUJoWUz7QNAbKpgv8Ii6aGF86lkEW5srSsbmAvPyH9tgUddjDV5lL8gPTa3dd1K8edlKNCzZt3gniAjEoPn%2FwwyeLXBIXrrYvzKAVqfV19MLCHA8S%2BgRA5d4W2WOt60mcP4ZOD9XFf%2FOFz280MOND%2B62fuPXxOd6nz8rRqAva1Iz4GiETuLda6X%2FrqorDk%2BUfbmZyhNmaasy9xNyqDlXedcgJ9p3mnw8JQjoctlZEHLe9L5mA72lCdpxMigt%2FdVEibibr4uD96QmiZAr4tjVT%2FM3XzzCzpG%2FfOqaOeMrW9r9%2BNcnERDrAF3wJT4mmOGQrVpeyNXuXGZfbJoH8VmnaIG%2FDoOE%2FhAwO0Z8DRVrhtRw8ZxBzBFdRFbQ3Njscygg5ub4rqNpIzd19KHG%2FMJWIyb0GOqUBkez0W8TTCgExjCV2V9fFZhMAdfQoYlwL7eUqcl7JnAI40PCxIRnvVrvXg7vRBYgZ5D371vd9xxsnDDIf34bovi%2FsbN4yydRBS%2BhJCXcCfe%2FkG8%2FZ5u5XIrv9YvPA2hdGEm9frTAcE4wTazF2QDjnkVnDrWinuaHKv1v8EaQZ1Z9V8c85vv79mL2e97mEhiobpQ%2FvUGAUSMaGHzHt9GjweqgBQAHo&X-Amz-Signature=03492e7701a49a5358f611a3cd617f58ab24756b1013ffb3a1ca27cc344e35f4&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRGDBIL2%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T200740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQDr1EzS97YCrx1J78Ls3XZD8QXZGz5I0GVDHCaU6eGAFQIgL0yRq2MbsUYYxmGjlXoPNyAxh3zawVAONnOua%2FhWoeEq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDAnZGrLPWQQJwkVVUyrcA15cfhEaVXFJg0QHqove64K%2BLcHH%2B2KQNvGE1t%2B4XkoW11R1CSTxTC8TOwXwG0loEz10q%2FVMZbQcqFrhLrIettmu%2FOIvXt3inffKlCIW11it64y7CfX39x5d7YvU2g3EGnY9uN46FLbXC%2FZGfHw4ADlIKw8UnKg%2Be6%2BqfSyMFa%2F2YXmsjtiwb%2BHU9xW%2BLT61iAQIJr2Abm5deSc3x6Z9HoYZd4XotVifKcK1hYS81H%2F%2BUJoWUz7QNAbKpgv8Ii6aGF86lkEW5srSsbmAvPyH9tgUddjDV5lL8gPTa3dd1K8edlKNCzZt3gniAjEoPn%2FwwyeLXBIXrrYvzKAVqfV19MLCHA8S%2BgRA5d4W2WOt60mcP4ZOD9XFf%2FOFz280MOND%2B62fuPXxOd6nz8rRqAva1Iz4GiETuLda6X%2FrqorDk%2BUfbmZyhNmaasy9xNyqDlXedcgJ9p3mnw8JQjoctlZEHLe9L5mA72lCdpxMigt%2FdVEibibr4uD96QmiZAr4tjVT%2FM3XzzCzpG%2FfOqaOeMrW9r9%2BNcnERDrAF3wJT4mmOGQrVpeyNXuXGZfbJoH8VmnaIG%2FDoOE%2FhAwO0Z8DRVrhtRw8ZxBzBFdRFbQ3Njscygg5ub4rqNpIzd19KHG%2FMJWIyb0GOqUBkez0W8TTCgExjCV2V9fFZhMAdfQoYlwL7eUqcl7JnAI40PCxIRnvVrvXg7vRBYgZ5D371vd9xxsnDDIf34bovi%2FsbN4yydRBS%2BhJCXcCfe%2FkG8%2FZ5u5XIrv9YvPA2hdGEm9frTAcE4wTazF2QDjnkVnDrWinuaHKv1v8EaQZ1Z9V8c85vv79mL2e97mEhiobpQ%2FvUGAUSMaGHzHt9GjweqgBQAHo&X-Amz-Signature=159c8cf3167ab8d8c657f3dd18b08ee5eeca92db56aa460bff05c80098706408&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663634HKP6%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T200742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIGPLLrYXszoEQcTVtg4qPICenf%2BGjmkiuXh6QEVd5dZJAiEAqky%2FW4lJoa84xvUW8ygAaUwm9tT4Rx3GLFOW3s6pWJkq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDGrORJ8iFkR8CPi5JCrcA5IL3prqDWfktTGNVJ1miqmnzJ0OFEUGtacfqcINnOKQkSKsvixULATk4lYKkh6aSGX0LSgiSgi%2F%2FiBYZ0eTCbRl%2Fp%2Baut%2F9c6UXxBZi6f5ZAzK%2BhSmR4G4HN2MYZQmHsfdTFcLDZDonjOm6Dy4Dq38XXZfQwnj37Z8Q6MvbJLxMWKPy1hAwGXPKAp48reUHVrclc0dvTq50b2m3jJkNg4R57fs7H7gIZq%2BtbyXAYBYdDv%2BAMcRKozdytbhBqjcFuGQXzwycH%2F69NUu%2BcoYh90guyr7S%2ByV5Ex7pS0tjOQd9F3Cp%2FeEq819mce5yJkMzOP5NDgcWDGVjQXVBt9vWBkyQyR5GV2JwYGcJAp8TBltyXV70U9SpMxDj%2BDBEH%2Bcvs3HvlOVXRldsWziCPlGTbnqP4xXI8Tzmm%2FgV%2BHPkyXjNCa6CcGCtNAOEvv5y2F0FCm0nXG6wOPZt7asy10kU96cIYDEq34TPT%2FhjFY5gSV89MgSxys7Po7wfaztVRwrAEydO%2FVeJiHD2NNSjf8IVNWsknBff7iGd1iJTZRm9vuCkVzwEraOvl1NbH871ElRSeurpYMEdxMDePRY5ZPt%2B5ZuHp9TYqwYSamuEVvKQmVaUMUOnUDCzP1s%2B3ehLMIuIyb0GOqUBbk2D8w5mTATpNknaCpJg2rLuDwgidnTeinTCtR%2BZqSM%2BM4Jt72sCjX4CkSB45BPvUaPEcDBnVNq0OgN4nQ6667jVvUBOSeYb6%2BDT5xgGU5BzqsjKKhUAXS7XSP1cG%2FxdwDmjAPZuRliQLC8Mm6X5i3UuwZRWnZ8eGC6zjMK0tY%2BLkdd%2FeOaeK940j4O9Zm%2FrQtuxQ89F14rCzXhJRw7IO%2BqvtYlj&X-Amz-Signature=f288ba4ffddcfc22faa46956794674e97c4d232cf231a57f6049386ef817c5fa&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZX4FL6WX%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T200742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIGp%2FQovG3LyRkfZbk5zhP0Yct63n6%2B%2BJeq1KLSmSSwUUAiEA8AaZ8PnLUDhCQQ2uO7IGZFR%2F0thWZTpeYWi2IueZ09Mq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDCeErJMZS1kZKPui0ircA26XoWIKivvXOmSkPz8an32%2FgfYnA4kRaP0YgYSqh3Hrv85Dzp7Uov0ZsWFqRs7xRmMMDKSyHaT1%2FjqqNdwJk1b9jlXemcqKCNt%2F4RRgyhwAg927bradcp5%2FgfXaFoHMio3Y0Yo00DRS9NyMBMd%2Fv7hRZT4hx58ZZmR8n%2FfomSDjEHUMX5rGjipOdwBcI6vj62Iv7hWuLgB7TGFxDdez6nPFCuoou%2BfBAxykU2JuLbx8HfrfQUt3wSL076vHIz8Ajrnn%2FJWDDTy%2FfJvtQmfrIBivLyes1vRo2cnXxA89tJRVVwgaqJtiJ8kG1f4MO9d2mc8kwVz%2BTXhBBOTYsn6dTQZETNwvvEvcCLQLXxFCQ4XoDp0WzjxPsKxw3u2MKYA9qILYUobtPgl8etB25gUP20%2FLT6AJ3HFwU3fA%2BiI21SeEjQ2qyeI15%2FHv4rdj5ubvcxjyXH7WIr6yhE2h1qiSjpTPbU1o7e7C11cErdBdbS%2FkDuyvtLLIzkFUcU16909U0VZw2RTVcbzbJL8C3tUoiG58sjllMGR4hZAo3U5j2SMEo2pnQUBYk56%2Fc3QMxKJ05Oy7VAjdW5oWrvuyo8WfFVkMwtc2hBgnw9CfkhpmjMBKU3arRr4A4dTO5NOVMIqIyb0GOqUB3x%2BNiOs63scnhe33hetalof9R%2FdnOrJwDdyLotBQrF6TsqrpJba%2B09W40QFm6MqiyglZqKkUcXTi%2FInDSiv7GOM%2FLk8wVdxgNJcFtcpDQ20bNJ4nXTeDmeR7U2pgsS52eP720cfiRyNnJFQJZ1MiI0pMHkgx7mjwRdEHrWaiOst93dez47SKse1sKqYY5CwtN65EvtvTdAX%2B0shNNBWfAxkfIq1M&X-Amz-Signature=8e9d61dd8e7f5265eff9361a2a977e31cb4851bb4e6ae0cd2a331be72c19f8ad&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRGDBIL2%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T200740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQDr1EzS97YCrx1J78Ls3XZD8QXZGz5I0GVDHCaU6eGAFQIgL0yRq2MbsUYYxmGjlXoPNyAxh3zawVAONnOua%2FhWoeEq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDAnZGrLPWQQJwkVVUyrcA15cfhEaVXFJg0QHqove64K%2BLcHH%2B2KQNvGE1t%2B4XkoW11R1CSTxTC8TOwXwG0loEz10q%2FVMZbQcqFrhLrIettmu%2FOIvXt3inffKlCIW11it64y7CfX39x5d7YvU2g3EGnY9uN46FLbXC%2FZGfHw4ADlIKw8UnKg%2Be6%2BqfSyMFa%2F2YXmsjtiwb%2BHU9xW%2BLT61iAQIJr2Abm5deSc3x6Z9HoYZd4XotVifKcK1hYS81H%2F%2BUJoWUz7QNAbKpgv8Ii6aGF86lkEW5srSsbmAvPyH9tgUddjDV5lL8gPTa3dd1K8edlKNCzZt3gniAjEoPn%2FwwyeLXBIXrrYvzKAVqfV19MLCHA8S%2BgRA5d4W2WOt60mcP4ZOD9XFf%2FOFz280MOND%2B62fuPXxOd6nz8rRqAva1Iz4GiETuLda6X%2FrqorDk%2BUfbmZyhNmaasy9xNyqDlXedcgJ9p3mnw8JQjoctlZEHLe9L5mA72lCdpxMigt%2FdVEibibr4uD96QmiZAr4tjVT%2FM3XzzCzpG%2FfOqaOeMrW9r9%2BNcnERDrAF3wJT4mmOGQrVpeyNXuXGZfbJoH8VmnaIG%2FDoOE%2FhAwO0Z8DRVrhtRw8ZxBzBFdRFbQ3Njscygg5ub4rqNpIzd19KHG%2FMJWIyb0GOqUBkez0W8TTCgExjCV2V9fFZhMAdfQoYlwL7eUqcl7JnAI40PCxIRnvVrvXg7vRBYgZ5D371vd9xxsnDDIf34bovi%2FsbN4yydRBS%2BhJCXcCfe%2FkG8%2FZ5u5XIrv9YvPA2hdGEm9frTAcE4wTazF2QDjnkVnDrWinuaHKv1v8EaQZ1Z9V8c85vv79mL2e97mEhiobpQ%2FvUGAUSMaGHzHt9GjweqgBQAHo&X-Amz-Signature=5f97a67de027ecb34f06b3d947b195502710e9651e228cd95a7ef20d8570c822&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
