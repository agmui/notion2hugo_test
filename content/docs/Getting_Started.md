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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRP64CC2%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T160654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIARriI9Dk4mDAwf286gpqMCltPj6NdIbAa2tXotaCIvnAiEAkBQPX3lReOy%2BKQkdE9O7bH8%2B%2B4mRgXTEmkNX9pH0JKYqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHKW0JYwFaRxDrwpGyrcA7W2EB9bUi9KcCsO5SEixAeghoKPHAk%2B6S2holP2wUjPNpOBoPo9iA65fneYFzccltnMf6W8PfW8Hem93xZ9hq168bfFgAbjxA3LKdXzFD8nQC9L456CmJgKQLKrG%2FjmOjxnBqmh%2F2gywEt4FrMZD2CeWFVoSkxAmIkpaQ%2F%2BZAZqsZGUufZrLgpkO96HpCrAV1TPYhESW9HrrmDDuOxhtdZob3NDTcEHGqViT1fM57vnt4ZoVcyPO7GcA5j3oSWudut1ViCHXJ5HbrQ1gI5vPl203HUhlXMyFoh0EJctYh6yeC2KhCrBybyQq7DfG815ZjkyGycQz0D9B%2B3bIwNcdTmm84h6LVS%2Fcz3GkOtRIaLQ2x%2FXJO%2F9FhjwOWkmh0HIYURGD6T9tGyfl%2Fo8nbQ3thRczePkRdyOlcuqARAwFd3x6yH8yDyLCrHDYZ%2FaBqHHZMQ0d1pSU2QzxwIC4qEvLTpuDP48z%2BLbfZEFeWMFaFlz%2FKyTOTuhx1EanTV0H9Xfvu0ki8HxnpR7GPc%2B8%2FAzPwmTTZ7Lo0sAiz0iWZgr3BMet7BHMd98y%2FKLP2x1lUO13Z%2BeGOZ%2F9DlEUtuY6iYFLnORllmaJGXZb%2F5wnk4XoeSKtrBOrbO%2BjFDZIWSPMN23%2FbwGOqUBL00pP4zBISuj5tI8EaimFqjPYTI%2F3HGfkZqDh3dUod8EMEGQ%2BeTGWBovezZbngV9NfKyF%2Fo687UFjJ6WQnkzvMY2pWPvyEmBOLzhR2AOcR%2FHpCJFrd1zbOser19Xqq1jApQOHOMKrUUL%2BCHB7VtBC2L1KxwiE3hSQ0MdQ8xGy0ATUU7OkTd78in1mMOCwP29zzurzbPFTLDqxjG6fNTi18Gy0yQP&X-Amz-Signature=2e31556785851f58c4b5efc4e5c1882ec1326df1db4b0ff23db65b8d3d976d83&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRP64CC2%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T160654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIARriI9Dk4mDAwf286gpqMCltPj6NdIbAa2tXotaCIvnAiEAkBQPX3lReOy%2BKQkdE9O7bH8%2B%2B4mRgXTEmkNX9pH0JKYqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHKW0JYwFaRxDrwpGyrcA7W2EB9bUi9KcCsO5SEixAeghoKPHAk%2B6S2holP2wUjPNpOBoPo9iA65fneYFzccltnMf6W8PfW8Hem93xZ9hq168bfFgAbjxA3LKdXzFD8nQC9L456CmJgKQLKrG%2FjmOjxnBqmh%2F2gywEt4FrMZD2CeWFVoSkxAmIkpaQ%2F%2BZAZqsZGUufZrLgpkO96HpCrAV1TPYhESW9HrrmDDuOxhtdZob3NDTcEHGqViT1fM57vnt4ZoVcyPO7GcA5j3oSWudut1ViCHXJ5HbrQ1gI5vPl203HUhlXMyFoh0EJctYh6yeC2KhCrBybyQq7DfG815ZjkyGycQz0D9B%2B3bIwNcdTmm84h6LVS%2Fcz3GkOtRIaLQ2x%2FXJO%2F9FhjwOWkmh0HIYURGD6T9tGyfl%2Fo8nbQ3thRczePkRdyOlcuqARAwFd3x6yH8yDyLCrHDYZ%2FaBqHHZMQ0d1pSU2QzxwIC4qEvLTpuDP48z%2BLbfZEFeWMFaFlz%2FKyTOTuhx1EanTV0H9Xfvu0ki8HxnpR7GPc%2B8%2FAzPwmTTZ7Lo0sAiz0iWZgr3BMet7BHMd98y%2FKLP2x1lUO13Z%2BeGOZ%2F9DlEUtuY6iYFLnORllmaJGXZb%2F5wnk4XoeSKtrBOrbO%2BjFDZIWSPMN23%2FbwGOqUBL00pP4zBISuj5tI8EaimFqjPYTI%2F3HGfkZqDh3dUod8EMEGQ%2BeTGWBovezZbngV9NfKyF%2Fo687UFjJ6WQnkzvMY2pWPvyEmBOLzhR2AOcR%2FHpCJFrd1zbOser19Xqq1jApQOHOMKrUUL%2BCHB7VtBC2L1KxwiE3hSQ0MdQ8xGy0ATUU7OkTd78in1mMOCwP29zzurzbPFTLDqxjG6fNTi18Gy0yQP&X-Amz-Signature=6ee75c7a3986ee53d330d0bfc75946e15a09dcc889ac5420589e242e8834548e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KN4M2UB%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T160656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlZf1WGGwCY9jXOZGP7HTJWfVoKMTSzbiEVeKnnZWrqQIhAOvSIfVLiPc7TLkZU1IDi6YOL%2Bm1hsjlwhHy7TzDmQ0oKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzCGUXWtYK%2F1K6LpjYq3AMQHEApB4cAPKOd0Tj3yHCZWNZaWtDeITLuKVgkt9AiOc3lh0if0%2BlUScTU6MI2Jy%2BGj0HtkNXlG7k%2FwBjhz53BnJeorRlqlKD4tPN%2FfCc9IdtLxCz6G4lP6xBafPdHMfv5cPdsQM%2BZ6FVA6yyHOTjNG6Dn4CemkKdjdFZaIXvC6jkIMcol8RGYjkIFGNbK1Nfz6TGdt2hKNf8g3L07tjf9xgp7R5T066%2BMiATp8Vlz33IbxqUwAo9Ngr%2BEzrxK9L%2Bnz45eae5XTF5p8YeErrjmUen8Sk1P3EUOMr3m%2Fnn%2BVja7f3vwmrgyFtfXUqtAM1yAMd91pedQ%2FwrFAkqh72jHkXanFZ%2BiaZW7fE%2BFzyb%2FE2r5eIMrnM7JcSXBMxxB348OD0i%2BKVfoOSEsRcbLZ%2B44OoDi6YSzwvqrV5rXsXa89EsZiit1Xx8aLvjXggvSwBbddC4CV%2Fi1STWEQbQQYq500xyUmd4sJyVLt0fU4Xpzg%2Bsu6hxQmVklJ5U3cMrpK7VNZGokjFt470rXjEu3hMbfVXFwKTiVCYzrWJxgSYPT5jr0iEIbShroQW%2B9pvTjzNpWOA%2BQArHE1CyM7ajJcLAlnGheGmSuUUnoRkRkRvEoRRJHzg897ls3ZOfHJDCzv%2F28BjqkAVlWy70igCfYFemG0p%2Fl31VoL8gpsgRb0el%2BOy4LbX8oRm8uscCjzbadS1mybabmiC%2BnD3y1alC8DY1qcZI7l9T97A7Lrc%2BUmOG25jQ0%2FZ6qtpz%2F8lisBbu2um3nuFMRX8Vcjgup4HDOQzZEGNjJz1HZZMAABEs3kfs%2BZjIfI1y47fFzDTxAMm8DTu6C3r4bV5AjfwGKS%2BTNKS8mxCszk0o58qwz&X-Amz-Signature=7d75f117d8806369be2cf91c3fd6bb1d749da1584bb2b6f086560359113d501c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665C3VVIMF%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T160657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZQQ5lWBnPRhiXGJbnYE91m6v077FVw3R9LkMUlz%2F20wIhAPo1LAdkYAvxG4kTMKWCqyDxxR%2Fajk890rUhEp8Fep44KogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzWzcIskLp1vurWPNoq3ANEOELXmxVK8420usfHu9WGoPYjuDxHRCqTr3Jk3FJQr%2Fo%2FALBsQ1MMU1u0PY1lJUn6Lfpdx2vP53xmqRwyo70GbWp0N0vENcey61sno5%2F7phzI%2Fy4qGzG0fJ%2FBDEwUIINIqOBbcVyUXMW8Dg0fB5faZw2GqQtV8Gs4Tj9r9RuZAQZw93SPQPrg%2BWOM4232Uls5v5XMsBtoEJH0in0hheGcJcZ4BU%2B0P6ck0OmtfmAXu6H%2FsmPpRiLmM5N2bsCKvGHU5lcHFDnDA3HycNw3HsrFjy6CLWUAFtaWC1q3yaIsqHaeQQ6h7Ms9RvqSMXbuJuhhPTtQG0pu7MTZmfDHKBVMUD480j00CTOCeaGZh1ZHqK4ZDVmQj8XlF4rVhaqG7DK1IiQCGEzlwrznRP2Nih0sg28MmHw8YJdt9tIWWk2qAyvMOzxlYqHGjeqQNTniCYOdcChXquzucZB9fMjGDMPPz1420xt3O9b1AH4EGLdkwSbiJBpxMzRTAkJlj1%2F3zxOUwkpAUTDspGrSe5G2eIAA48n4fd7COcJiy9w7D9CiyE%2FLphLTyP2A5cA2C8n9HyMmpKkzwDoY%2Bg6mkqcTqXioIymi4C5P5PB0j3ziRqHL1pfHvtuTRK2frGH%2B9TD9vf28BjqkAS6Q2tccd4j7sk0oxcqNfrQgbvMmvXMP1R5eSww4LeZy2TwuvMR6c6mvyvl4dNgcbqqM2PjvSCm9ug9qyudO7iT8J6u0wqzjQRZuHtWAnIpNCAwDxklkhgR7pOuoHyonduIcg9ui6gY2fz6pZvb22N5d9URJTWVQI0z%2BZUVttYAAVLzyQEUOfdW9HqJdlFlaD4kNI2SkjbnlZvdv6dIunTnsGT1p&X-Amz-Signature=fc1ec5b9827c0105e7bb19157c1a3aba45292457bbc183df7cc677301f12a250&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRP64CC2%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T160654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIARriI9Dk4mDAwf286gpqMCltPj6NdIbAa2tXotaCIvnAiEAkBQPX3lReOy%2BKQkdE9O7bH8%2B%2B4mRgXTEmkNX9pH0JKYqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHKW0JYwFaRxDrwpGyrcA7W2EB9bUi9KcCsO5SEixAeghoKPHAk%2B6S2holP2wUjPNpOBoPo9iA65fneYFzccltnMf6W8PfW8Hem93xZ9hq168bfFgAbjxA3LKdXzFD8nQC9L456CmJgKQLKrG%2FjmOjxnBqmh%2F2gywEt4FrMZD2CeWFVoSkxAmIkpaQ%2F%2BZAZqsZGUufZrLgpkO96HpCrAV1TPYhESW9HrrmDDuOxhtdZob3NDTcEHGqViT1fM57vnt4ZoVcyPO7GcA5j3oSWudut1ViCHXJ5HbrQ1gI5vPl203HUhlXMyFoh0EJctYh6yeC2KhCrBybyQq7DfG815ZjkyGycQz0D9B%2B3bIwNcdTmm84h6LVS%2Fcz3GkOtRIaLQ2x%2FXJO%2F9FhjwOWkmh0HIYURGD6T9tGyfl%2Fo8nbQ3thRczePkRdyOlcuqARAwFd3x6yH8yDyLCrHDYZ%2FaBqHHZMQ0d1pSU2QzxwIC4qEvLTpuDP48z%2BLbfZEFeWMFaFlz%2FKyTOTuhx1EanTV0H9Xfvu0ki8HxnpR7GPc%2B8%2FAzPwmTTZ7Lo0sAiz0iWZgr3BMet7BHMd98y%2FKLP2x1lUO13Z%2BeGOZ%2F9DlEUtuY6iYFLnORllmaJGXZb%2F5wnk4XoeSKtrBOrbO%2BjFDZIWSPMN23%2FbwGOqUBL00pP4zBISuj5tI8EaimFqjPYTI%2F3HGfkZqDh3dUod8EMEGQ%2BeTGWBovezZbngV9NfKyF%2Fo687UFjJ6WQnkzvMY2pWPvyEmBOLzhR2AOcR%2FHpCJFrd1zbOser19Xqq1jApQOHOMKrUUL%2BCHB7VtBC2L1KxwiE3hSQ0MdQ8xGy0ATUU7OkTd78in1mMOCwP29zzurzbPFTLDqxjG6fNTi18Gy0yQP&X-Amz-Signature=78cb87bd04b380671363963a203831a9a862a84ddedc206f0718a3ef5bdb448b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
