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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3BS3B7F%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T200931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHWYG%2Bz0eeETIyYdNXGBUh3t69xwGHFd3hk4Nvk%2BkSR2AiEA1o0EjpmLxtF1g7Ma%2F0P3e0nsRLhsKQ82pSnffer2HEEqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDISAZa9ba9cYSW5vSircA95jDWB%2FPrkOwGa%2FgprsOfpn2cTLX7VWxihuJg1OSM%2B1rdYbwU%2FsKdZ%2FEXCrHIpqJs4GhKocaXpdtJKjv%2FyoaG4AHSrIiswJzupU6XAQThNESegpcgReFphrC%2Fm0VGfQtwi5AdvcFajI3xJUVEI8Q%2BhfZrnq2%2Bkm8cx4ArpHAMdj0xZZFe5xYagmcCmmzrb9BGp1ynXzoqfg5fS09NHLk84%2BYyccHGXkkfDKUzk1cFUDoh1BrsmtU6z94aWMXGczDCnp4e0TBr0Mv1x41Sh4niiT8pkfN86XF%2FnWxgCJedGG4TqTN9Mvc%2FvWSf87okTzG%2Bg4HYq4RMDCwTaFLh5ddMSwhPLPzF8sVo5d%2F%2Fqa7%2BN%2BsCITI802SCbwK1YqO0wY5pafenEXCL50%2BP%2BbJAI3ZHNg6C5fphS9bB1bUAJejcslTSSoU9pVJEwGfC%2Fj1LWer8fx%2FjrTh5uGdUwrKRBBHLvmF%2BPq8hg77C82HcdigYqOaHUDcjRlDxNo9suva7zFT7Mk63VHH9b8sNEmToqeebaa2Wr58D7wlu9%2BYaMBcaZGu9AtylnNDDuRw97fO%2B354wgJa65TFJLYDg%2BzE8YEwq7minLH60hASyv7YcRto04jeDepOIjf7vwhO7GxMP6r%2BcAGOqUBZ91HtVSGzVrFefDnnlZs5ZzI3CShqAjg315dr6sk9%2Bec%2Bob15vr7ysnjS7E7S0mLWSwO%2FjjUs0RuuXYqn4LoWiqauNDWUuRLkvgkeoFDXwSZIQ0foN092aJmK6l0b8RU31yNNNCYC4r0L77JexRC%2FLI5h9PTt7WzQiuRqnvF5qKmPibrLWmbXpNpWX7qEvqoF4%2FBxehFS5QGz16f3tQMWOK5oczM&X-Amz-Signature=2d11e4b21af5a7a14f35eff76df81c629d4fd9d14ed2dd4dcef0375013f649d1&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3BS3B7F%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T200931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHWYG%2Bz0eeETIyYdNXGBUh3t69xwGHFd3hk4Nvk%2BkSR2AiEA1o0EjpmLxtF1g7Ma%2F0P3e0nsRLhsKQ82pSnffer2HEEqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDISAZa9ba9cYSW5vSircA95jDWB%2FPrkOwGa%2FgprsOfpn2cTLX7VWxihuJg1OSM%2B1rdYbwU%2FsKdZ%2FEXCrHIpqJs4GhKocaXpdtJKjv%2FyoaG4AHSrIiswJzupU6XAQThNESegpcgReFphrC%2Fm0VGfQtwi5AdvcFajI3xJUVEI8Q%2BhfZrnq2%2Bkm8cx4ArpHAMdj0xZZFe5xYagmcCmmzrb9BGp1ynXzoqfg5fS09NHLk84%2BYyccHGXkkfDKUzk1cFUDoh1BrsmtU6z94aWMXGczDCnp4e0TBr0Mv1x41Sh4niiT8pkfN86XF%2FnWxgCJedGG4TqTN9Mvc%2FvWSf87okTzG%2Bg4HYq4RMDCwTaFLh5ddMSwhPLPzF8sVo5d%2F%2Fqa7%2BN%2BsCITI802SCbwK1YqO0wY5pafenEXCL50%2BP%2BbJAI3ZHNg6C5fphS9bB1bUAJejcslTSSoU9pVJEwGfC%2Fj1LWer8fx%2FjrTh5uGdUwrKRBBHLvmF%2BPq8hg77C82HcdigYqOaHUDcjRlDxNo9suva7zFT7Mk63VHH9b8sNEmToqeebaa2Wr58D7wlu9%2BYaMBcaZGu9AtylnNDDuRw97fO%2B354wgJa65TFJLYDg%2BzE8YEwq7minLH60hASyv7YcRto04jeDepOIjf7vwhO7GxMP6r%2BcAGOqUBZ91HtVSGzVrFefDnnlZs5ZzI3CShqAjg315dr6sk9%2Bec%2Bob15vr7ysnjS7E7S0mLWSwO%2FjjUs0RuuXYqn4LoWiqauNDWUuRLkvgkeoFDXwSZIQ0foN092aJmK6l0b8RU31yNNNCYC4r0L77JexRC%2FLI5h9PTt7WzQiuRqnvF5qKmPibrLWmbXpNpWX7qEvqoF4%2FBxehFS5QGz16f3tQMWOK5oczM&X-Amz-Signature=d3f60cd62cb2c9e6c47ed81c04b9dd4c305877670952de76201175ae848adf54&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3BS3B7F%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T200931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHWYG%2Bz0eeETIyYdNXGBUh3t69xwGHFd3hk4Nvk%2BkSR2AiEA1o0EjpmLxtF1g7Ma%2F0P3e0nsRLhsKQ82pSnffer2HEEqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDISAZa9ba9cYSW5vSircA95jDWB%2FPrkOwGa%2FgprsOfpn2cTLX7VWxihuJg1OSM%2B1rdYbwU%2FsKdZ%2FEXCrHIpqJs4GhKocaXpdtJKjv%2FyoaG4AHSrIiswJzupU6XAQThNESegpcgReFphrC%2Fm0VGfQtwi5AdvcFajI3xJUVEI8Q%2BhfZrnq2%2Bkm8cx4ArpHAMdj0xZZFe5xYagmcCmmzrb9BGp1ynXzoqfg5fS09NHLk84%2BYyccHGXkkfDKUzk1cFUDoh1BrsmtU6z94aWMXGczDCnp4e0TBr0Mv1x41Sh4niiT8pkfN86XF%2FnWxgCJedGG4TqTN9Mvc%2FvWSf87okTzG%2Bg4HYq4RMDCwTaFLh5ddMSwhPLPzF8sVo5d%2F%2Fqa7%2BN%2BsCITI802SCbwK1YqO0wY5pafenEXCL50%2BP%2BbJAI3ZHNg6C5fphS9bB1bUAJejcslTSSoU9pVJEwGfC%2Fj1LWer8fx%2FjrTh5uGdUwrKRBBHLvmF%2BPq8hg77C82HcdigYqOaHUDcjRlDxNo9suva7zFT7Mk63VHH9b8sNEmToqeebaa2Wr58D7wlu9%2BYaMBcaZGu9AtylnNDDuRw97fO%2B354wgJa65TFJLYDg%2BzE8YEwq7minLH60hASyv7YcRto04jeDepOIjf7vwhO7GxMP6r%2BcAGOqUBZ91HtVSGzVrFefDnnlZs5ZzI3CShqAjg315dr6sk9%2Bec%2Bob15vr7ysnjS7E7S0mLWSwO%2FjjUs0RuuXYqn4LoWiqauNDWUuRLkvgkeoFDXwSZIQ0foN092aJmK6l0b8RU31yNNNCYC4r0L77JexRC%2FLI5h9PTt7WzQiuRqnvF5qKmPibrLWmbXpNpWX7qEvqoF4%2FBxehFS5QGz16f3tQMWOK5oczM&X-Amz-Signature=8b958fa212544b59290fcff0166ad869b1895a432428ca339db980405e6020ab&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZ55FR3X%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T200942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyzEqu38b%2FQa%2FQYgMirWxgU615Ajm3tXy%2BTFlYoBDdLwIgF5qSvPrXKWRMSpF9MG1wU3Vr4He8T4QBz6Dh2ouXyxQqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJHm21c9gzatI1BlDSrcA70M1ii7oA51z7mQ789APdPuQOP3FX8sb7TxSc%2BP93wivymNGBx96YZnqC37HaiTMW%2B5OU215zi8ibY2SwP9iWOfFy5ZeT5Ccpf4nrbvLr%2F8WepUiAo4bRV4PyMAC96gyIY4Ps9igHq4J6i35tEpgfiTFnFAdTzUbDtU8LuM%2BJC1hzgFp432XUq05td0WfWwtaB3Qdwt5y0FElgErHZ7mtvdbjkVXlVfmmH3BkZYz6EEMb21ri5BK0OWsPFnEgPaR%2B2vQjBNhaG%2BQq5IZ1ZrRlH8TpK8XhEKItVVqdU8%2Fyj8szeNGPSTZ8a429TH7l%2B%2FLiNZm87RTi%2FzTPpv7xK2tp2dOJont1D0iK8q%2FGdPs0xnbCTI9XcxH3nRG4AsypwOSWf1ML%2FecY7mzCLMtKGYbD9FrPq2nG4X7OpKBULOhWz36LadPOyEf08MkO8IP%2BXewVY5c6hWp3azO14z6mPVth7R0gNucvpjxqWa%2B52eS36qDBoixet4PKgtEdXPy8A%2Bx37EUMruyDpS4i0nu58hF2BkYG%2B0J8Vx9Y2CL%2FsHmWBtKrQeKOVV7Jt231bsf%2BcI%2FdcVRrFwjUbSWJ61MgqNEuAZmlfmuoliZwmpx8kVEZiGaJlzwG9E45LY1usuMOGr%2BcAGOqUBidQ7qPhjJRUcJcRgrlp7gHqwBAe01IMWt%2BkzWxEzeEhbhRM3lCfhMO%2Fm9jsdnSkpvi1xzONn%2BOXSlBKtCSgESD7GOWstOUEiWCtFYbBV2QfqnuLUPQO%2FnN85Dz9fwSXXiBb76zjZMPs%2BBg0qOkN4%2BDQSDXk1FKQz9SQota9Ba9rv936FFQ1dc4i4%2Fa2Owcper6d6XO604MayK2KcICCdM3SY61VD&X-Amz-Signature=d1af7c463d182087efdd603b378f95adaeed13e802c82bcffbfb586164b581a1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666OWZI22%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T200942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCRGserhej4uYPqR88SfVDwIC5joFs0mTyr3y09EwxM7QIgJWWrSQJMnK%2BedlkhajMGXpb0JcLX7G8bOTdlGpSLyRUqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDS%2FcJwwIt012tcXryrcA970MCpqGjtMueIB2Rok28W0JfN%2FKojsCQX9rULXD8gVpdEInx0Eyu%2FxjIzcOjs66Nb7UOuOlod5oNAGConqUELNTdoyZutcwFRWoJIlx0DJoinsce4EQ3p1yu1mb%2FKeOh17ddCtiwF5kRM8U8ThSg%2Bs3dQD8zFF4x6obvwDA6Ai6nZdGLNLRwWDKuoPH%2F%2BKaFxpaBBFO4qly3P2PEsU7juOoMt%2BjaavVsJJGvoD2BnYMrSVA9mGNB8WkJ9thBlx3%2B36AFsVSk4mku6Me5M1%2BC0R%2BLBgScchwhh6usue18S9KfXglY4XuTqWqQkNscGDFvO2zE6zwtLUlJh74cqVF%2FumA1p8tGW8zljYIDqy0Vg9Qd9mhzMr4fSiM7KU6TiIAzOw%2BNsWRfy%2F1ORA1oojoLd%2FRSaZpoY0kcYKscZ%2FOjKUZXHPUpxmSrjBgCtoPnUgLrr6rG69qdhkekkkQIGNr8PCT7YiExAiqHx8J1hLW%2BD5a%2B6uPgV0FCE%2FWf2UEWx2%2B0OIdLzT%2BMjFQhptvQQCGTKlNx9F99adPT4Pit8FkFC6jkwJsl51oPW6lwZ14peEk0xu2kupi4zmN7moOgLvo1zbK0ABJ1CNIL%2FSCSzhrGvx3mTmMHXTsugzU3ZDMIes%2BcAGOqUBrl4kyjK4VMqXv7xZuHmnOpJVqIDHuM%2BrwO%2B8KYibwHzSPfl%2FJhAO61ocEwKIhkorEMtWukXO9ecbpBK1lOgL9vN%2FZSzBqFxwL2wECelagqqDNEcGIyeN8wIop5JpmUOFt%2B5mGaIblpRAcfcROYd2aZ5hg7RH0jwKuMlEaJ1y5hfv1nbcdKhg%2Bcpxc3RGuAxOoBEmhGrlDkq817i%2FUeL3dkWIfrin&X-Amz-Signature=9f65322bd0012186025b50bffaf3ff3c37f5614bfd78245fd03d17afa0d00d61&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3BS3B7F%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T200931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHWYG%2Bz0eeETIyYdNXGBUh3t69xwGHFd3hk4Nvk%2BkSR2AiEA1o0EjpmLxtF1g7Ma%2F0P3e0nsRLhsKQ82pSnffer2HEEqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDISAZa9ba9cYSW5vSircA95jDWB%2FPrkOwGa%2FgprsOfpn2cTLX7VWxihuJg1OSM%2B1rdYbwU%2FsKdZ%2FEXCrHIpqJs4GhKocaXpdtJKjv%2FyoaG4AHSrIiswJzupU6XAQThNESegpcgReFphrC%2Fm0VGfQtwi5AdvcFajI3xJUVEI8Q%2BhfZrnq2%2Bkm8cx4ArpHAMdj0xZZFe5xYagmcCmmzrb9BGp1ynXzoqfg5fS09NHLk84%2BYyccHGXkkfDKUzk1cFUDoh1BrsmtU6z94aWMXGczDCnp4e0TBr0Mv1x41Sh4niiT8pkfN86XF%2FnWxgCJedGG4TqTN9Mvc%2FvWSf87okTzG%2Bg4HYq4RMDCwTaFLh5ddMSwhPLPzF8sVo5d%2F%2Fqa7%2BN%2BsCITI802SCbwK1YqO0wY5pafenEXCL50%2BP%2BbJAI3ZHNg6C5fphS9bB1bUAJejcslTSSoU9pVJEwGfC%2Fj1LWer8fx%2FjrTh5uGdUwrKRBBHLvmF%2BPq8hg77C82HcdigYqOaHUDcjRlDxNo9suva7zFT7Mk63VHH9b8sNEmToqeebaa2Wr58D7wlu9%2BYaMBcaZGu9AtylnNDDuRw97fO%2B354wgJa65TFJLYDg%2BzE8YEwq7minLH60hASyv7YcRto04jeDepOIjf7vwhO7GxMP6r%2BcAGOqUBZ91HtVSGzVrFefDnnlZs5ZzI3CShqAjg315dr6sk9%2Bec%2Bob15vr7ysnjS7E7S0mLWSwO%2FjjUs0RuuXYqn4LoWiqauNDWUuRLkvgkeoFDXwSZIQ0foN092aJmK6l0b8RU31yNNNCYC4r0L77JexRC%2FLI5h9PTt7WzQiuRqnvF5qKmPibrLWmbXpNpWX7qEvqoF4%2FBxehFS5QGz16f3tQMWOK5oczM&X-Amz-Signature=65e22fc19265b9abba00822a0bd52db76019e68556340710a6cadf1e0112fd03&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
