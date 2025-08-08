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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHJWMUMW%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T181113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIBLjMiDPawCWWS7yFKsaEa3F84Q3Wiaupko2JA0IERo%2BAiEA%2BAbmWdcMRAS2heZwMX5xta9zlhdiZHChVZk7ixRcTEAqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ3E%2BESFXkQ2mpY0EircA0xVFhlWd4Lv5AzheZa1u6NCHqTxJPrTsVN0z0sngbsE5WuovL%2FOY5HJhchloxuY0r0huonvYWVFytDuV15a2X0gKlg16CeJydByCHZmmVMoSYmhijDFXWBdU60XI%2Bcs8YzTvhZRXdMyx41QiiwJ2R4HK4vSGhYLsfscMqkygECEhsl0%2BdHxLo2j3PIalKzSe%2F1mNaoxv82dFxVJdi7eMJPk8Mdk8bhOeB917%2BnguNUj6cMAjeIzNei8gb6ENyH9bMvlKTNwFJcsN40Hfy2JjzIxtpos3xOvpFpK8iP8GG19dPeGxuv7GGC4hFm1JFxIqzVe9zVUVpcTD0yoouwLhJ8Allr%2FCY4gMyiMbK2q2KhD2DMvzefL4S%2B5vZ%2Bk1yvP5PVESHdOIhFpS4sESTIxHqKQRvqNNNH5N7EmHTG7Cm2Fqu8hYTaHGKLoFSJ4%2BXTuPhcYrMXgGGlsCLG0qxGGlcyg4q%2FLnW4xQb2d29uIt3S1nW3poujNikit4%2Fj9b4vI1Wh1UyCCG1YqwUaQuPnW9eIszBH4nEL1Yv9hzFLWLyC5gweJuQyhlldJh3tHahhdbfarmuORV8fe9squCX%2F5BOqoaAGbQB3ELtUvuar1yBr%2Fix6FtTmlIghbo9LhMLzq2MQGOqUB8QREBVoupXbTXfu2eRnWszi%2B0Ool4Bc2PAvkJxs0XfsIdo0BnoOmi8AnM1kq3j4hFOaY9Q%2BL%2BEHxeeUu2lWIBAVZbOFJHaK8PUvgmp%2BWsutR6nrHTOE%2FV9VozrfWfHWAcU0luFvLIuy%2FqKLKvhGzHkyQQCRFo0s4wagx8bpg%2FNbLrWapYctIKoO%2BaFJiAd4lO2tJ%2FM%2FIs3jTe%2FR1JLZbzuQZjYEJ&X-Amz-Signature=e27570873133d11197beb2b78151a05c0c0bb71e4af3c8f84f99093194554ccd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHJWMUMW%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T181113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIBLjMiDPawCWWS7yFKsaEa3F84Q3Wiaupko2JA0IERo%2BAiEA%2BAbmWdcMRAS2heZwMX5xta9zlhdiZHChVZk7ixRcTEAqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ3E%2BESFXkQ2mpY0EircA0xVFhlWd4Lv5AzheZa1u6NCHqTxJPrTsVN0z0sngbsE5WuovL%2FOY5HJhchloxuY0r0huonvYWVFytDuV15a2X0gKlg16CeJydByCHZmmVMoSYmhijDFXWBdU60XI%2Bcs8YzTvhZRXdMyx41QiiwJ2R4HK4vSGhYLsfscMqkygECEhsl0%2BdHxLo2j3PIalKzSe%2F1mNaoxv82dFxVJdi7eMJPk8Mdk8bhOeB917%2BnguNUj6cMAjeIzNei8gb6ENyH9bMvlKTNwFJcsN40Hfy2JjzIxtpos3xOvpFpK8iP8GG19dPeGxuv7GGC4hFm1JFxIqzVe9zVUVpcTD0yoouwLhJ8Allr%2FCY4gMyiMbK2q2KhD2DMvzefL4S%2B5vZ%2Bk1yvP5PVESHdOIhFpS4sESTIxHqKQRvqNNNH5N7EmHTG7Cm2Fqu8hYTaHGKLoFSJ4%2BXTuPhcYrMXgGGlsCLG0qxGGlcyg4q%2FLnW4xQb2d29uIt3S1nW3poujNikit4%2Fj9b4vI1Wh1UyCCG1YqwUaQuPnW9eIszBH4nEL1Yv9hzFLWLyC5gweJuQyhlldJh3tHahhdbfarmuORV8fe9squCX%2F5BOqoaAGbQB3ELtUvuar1yBr%2Fix6FtTmlIghbo9LhMLzq2MQGOqUB8QREBVoupXbTXfu2eRnWszi%2B0Ool4Bc2PAvkJxs0XfsIdo0BnoOmi8AnM1kq3j4hFOaY9Q%2BL%2BEHxeeUu2lWIBAVZbOFJHaK8PUvgmp%2BWsutR6nrHTOE%2FV9VozrfWfHWAcU0luFvLIuy%2FqKLKvhGzHkyQQCRFo0s4wagx8bpg%2FNbLrWapYctIKoO%2BaFJiAd4lO2tJ%2FM%2FIs3jTe%2FR1JLZbzuQZjYEJ&X-Amz-Signature=9c44d70b9b3d24e06d786e3a08657a1d36666ca1b321a295c7d9c4ff96d2d78b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHJWMUMW%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T181113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIBLjMiDPawCWWS7yFKsaEa3F84Q3Wiaupko2JA0IERo%2BAiEA%2BAbmWdcMRAS2heZwMX5xta9zlhdiZHChVZk7ixRcTEAqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ3E%2BESFXkQ2mpY0EircA0xVFhlWd4Lv5AzheZa1u6NCHqTxJPrTsVN0z0sngbsE5WuovL%2FOY5HJhchloxuY0r0huonvYWVFytDuV15a2X0gKlg16CeJydByCHZmmVMoSYmhijDFXWBdU60XI%2Bcs8YzTvhZRXdMyx41QiiwJ2R4HK4vSGhYLsfscMqkygECEhsl0%2BdHxLo2j3PIalKzSe%2F1mNaoxv82dFxVJdi7eMJPk8Mdk8bhOeB917%2BnguNUj6cMAjeIzNei8gb6ENyH9bMvlKTNwFJcsN40Hfy2JjzIxtpos3xOvpFpK8iP8GG19dPeGxuv7GGC4hFm1JFxIqzVe9zVUVpcTD0yoouwLhJ8Allr%2FCY4gMyiMbK2q2KhD2DMvzefL4S%2B5vZ%2Bk1yvP5PVESHdOIhFpS4sESTIxHqKQRvqNNNH5N7EmHTG7Cm2Fqu8hYTaHGKLoFSJ4%2BXTuPhcYrMXgGGlsCLG0qxGGlcyg4q%2FLnW4xQb2d29uIt3S1nW3poujNikit4%2Fj9b4vI1Wh1UyCCG1YqwUaQuPnW9eIszBH4nEL1Yv9hzFLWLyC5gweJuQyhlldJh3tHahhdbfarmuORV8fe9squCX%2F5BOqoaAGbQB3ELtUvuar1yBr%2Fix6FtTmlIghbo9LhMLzq2MQGOqUB8QREBVoupXbTXfu2eRnWszi%2B0Ool4Bc2PAvkJxs0XfsIdo0BnoOmi8AnM1kq3j4hFOaY9Q%2BL%2BEHxeeUu2lWIBAVZbOFJHaK8PUvgmp%2BWsutR6nrHTOE%2FV9VozrfWfHWAcU0luFvLIuy%2FqKLKvhGzHkyQQCRFo0s4wagx8bpg%2FNbLrWapYctIKoO%2BaFJiAd4lO2tJ%2FM%2FIs3jTe%2FR1JLZbzuQZjYEJ&X-Amz-Signature=53898754bc8c480be47e1150733faacb940f06edef1ca1b89082165d487bca49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSXSSQFU%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T181114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCn21DpVXiqfl0oMTSNueEKcUWEt2yBu161fluHFXRT0gIhAJUxTFu8WlkGmniobLve%2FpkTI1pM4G7JLp5ZufUe7rh1KogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwDGlpFXha%2FZWJkUaEq3APAaW2g7XtY%2FShiHuFltwgmJ%2BcfCnavp2nGVxl93q941lnE1lQlbrPhVjfZxSXSatKZ82BjlChibeDFj1nGF1A9y9htF5IQnKhrzWujKpmCLNLwSQlQis%2FYTkLQs6rbNkbhc18vuvH4OSfYD0U1fXKHUbMpCfwbPPVYVNYbXtPyvDeCCMsaGk1fwUVDS5Py3zjwujongVZ1Diz31PAHcVZaeIy1SuCspda6zTlQMJaR5SvjD0zlz6ahhM1JQb0nGogFqGl7KQPI6fcJjKBm2%2BrparnMRav5UH709CDbuB5QrEhABhGWmhOF4YGirGhAJr4P6vd2UEg2dpo%2FjjhRwvZQktiOuZlYstzLM2hZ%2Fe2X6%2FGBBy74mt%2FwGtAld1rSF503K1MH7QgZ1wWG3kEIBt%2FVSEphyFlNN0XqXys1%2F6OvrokONwpxrGwlJX%2FLo8rwUpN5687Jy8R0%2B5eL7Znikp1Vy2gXwEdy1BokRIS0Y7IvpC18hWTNd7nEVcnKAPptxWnu9y6EL1UPVFioQm7Rjzwx53WahJQhuO29q23kCoGssmwC7pXSoY6vgwjBXOJ1X%2BGyiyoR1cGQnzDO4Cfu7%2FVr9Cr2DPhjAQPNfDbS66SYyWcoZv5vJCV%2BUKujgzD26tjEBjqkAZGCCcnH4pae5UfkyYizzdjuabxz2RdtfXbd9HGdNKYhxdKQejmQuAr7eSSxbFCAc5tc2AgWZViw0FWMOStoTUxLxs3MG3gN8xCyajoLfQ%2BlJyOlF7g5oxnNszxZwWeamoR1%2Bs2%2FH11fW%2Bjs7wLT3DU2T2S8i%2Fq4h6%2F2ombgfjrAkvuHezH4A5JLYgU3lWA0%2F6qicF9Dcw5I8wjqxv6mMmZMczz9&X-Amz-Signature=30d2762d2f2735230653c19080072ebb44f87a798c29c2f7568a77f85882e45f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTJIH32A%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T181116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIBUudEBDQEx9mOMyxIDV13zDra23JJPowFdlkDkJ1B9wAiEAjC4yKxg5h%2FhvhWbXv%2FBG7kjBZ9abrzHe%2BVo%2FLQqEemEqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOeHA2UWaS4foRArhircAwg15H8SAfliP3B0Zi989g8QImj%2B9ziuD7LGwCFghDKuHW5ux4alCGCxjmWW3pi7CqAr61SaAOTRqxvmNA7W9Opa7MNrpFmm%2FDoWvnwHeQwla7GyvQSHEBqK7TtY97ReZpaxEGTaAYhgN9jP0crnsbVdbaBhwoFZbzW2I69mJCfHynQfmU6qnlV5H6FEClH8WzCY9nVzefqc9UjQtXwp%2BusVTSs5jrsovcLpic4jkA01bV1IjB8Yd%2FOa2%2F1E59ESCPE2ERepx9YxQKoVEPlAl39uSYyLThmALKthg2RanVr5RfLaShobrXVbtb4VlnGnnPWsceGOipUXbGNx9YOKuTUOpLWxbxOwO8tb3Ptuiizujk%2BCxZMoMAhOsFg%2BRQMVlvOe08CnVtVlrSkHgFy0C0tnYygvb2zdHuqhZbD1WDZfeWa%2FoW7I4c0mSrAZZ0kJGcgfzAfZJpCnRkUZ1%2Borf%2FV9Hq%2B4gstDnxIhDcnViEAK4RuQKcqZ2T7qEQbhPMQdO6cqf1CL%2BRkBUU8hcVYvCEhc%2BK4K7Imbk0S76GF%2BtYhksU6EA74MnPBg0xDod8zjSKStPX2sWrAzv0eiV5MIzqiredARgsMmRB2Rk6gmQdZsULxJN5%2FZnMAjLnb3MMzq2MQGOqUBscrxARIJOHMNRmu5kze1MjTim7nS%2B81nF4ze6IrI50RzEfXNA2ueHPWCJz9yASbwVaeuV2P8yBv8KZEYPTFbeE85QAb79EArHDwqQW26WnI9umX6YtqU9WIiszrgaENOdxBgGJuibC%2Fyp1C0wOF8XDBrGlKa2wE9%2FHWMitlSu1CdrUAKh8xthmFZ2mQQkiI23l0MJbYirPRrxWbpZ2D4TAUEXlB4&X-Amz-Signature=ca0c7f0f98d587caf1ab80eab6838674739280c0d498723ded51f6975e3e4377&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHJWMUMW%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T181113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIBLjMiDPawCWWS7yFKsaEa3F84Q3Wiaupko2JA0IERo%2BAiEA%2BAbmWdcMRAS2heZwMX5xta9zlhdiZHChVZk7ixRcTEAqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ3E%2BESFXkQ2mpY0EircA0xVFhlWd4Lv5AzheZa1u6NCHqTxJPrTsVN0z0sngbsE5WuovL%2FOY5HJhchloxuY0r0huonvYWVFytDuV15a2X0gKlg16CeJydByCHZmmVMoSYmhijDFXWBdU60XI%2Bcs8YzTvhZRXdMyx41QiiwJ2R4HK4vSGhYLsfscMqkygECEhsl0%2BdHxLo2j3PIalKzSe%2F1mNaoxv82dFxVJdi7eMJPk8Mdk8bhOeB917%2BnguNUj6cMAjeIzNei8gb6ENyH9bMvlKTNwFJcsN40Hfy2JjzIxtpos3xOvpFpK8iP8GG19dPeGxuv7GGC4hFm1JFxIqzVe9zVUVpcTD0yoouwLhJ8Allr%2FCY4gMyiMbK2q2KhD2DMvzefL4S%2B5vZ%2Bk1yvP5PVESHdOIhFpS4sESTIxHqKQRvqNNNH5N7EmHTG7Cm2Fqu8hYTaHGKLoFSJ4%2BXTuPhcYrMXgGGlsCLG0qxGGlcyg4q%2FLnW4xQb2d29uIt3S1nW3poujNikit4%2Fj9b4vI1Wh1UyCCG1YqwUaQuPnW9eIszBH4nEL1Yv9hzFLWLyC5gweJuQyhlldJh3tHahhdbfarmuORV8fe9squCX%2F5BOqoaAGbQB3ELtUvuar1yBr%2Fix6FtTmlIghbo9LhMLzq2MQGOqUB8QREBVoupXbTXfu2eRnWszi%2B0Ool4Bc2PAvkJxs0XfsIdo0BnoOmi8AnM1kq3j4hFOaY9Q%2BL%2BEHxeeUu2lWIBAVZbOFJHaK8PUvgmp%2BWsutR6nrHTOE%2FV9VozrfWfHWAcU0luFvLIuy%2FqKLKvhGzHkyQQCRFo0s4wagx8bpg%2FNbLrWapYctIKoO%2BaFJiAd4lO2tJ%2FM%2FIs3jTe%2FR1JLZbzuQZjYEJ&X-Amz-Signature=8dea7ff1a9427706b491ae5a2fc9d55e6f40f41d893c6aa48c611492358373b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
