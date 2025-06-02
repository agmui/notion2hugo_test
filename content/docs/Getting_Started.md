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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSJCRXRD%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T034412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIDmmFhoAIkWZMJG6Iv87a8yaaq13BbHW%2BD16Fi8xjbVaAiEAl4yO2w6KFTmFw6Xk00qz9SK49TORtTkqdqLgYFrDzEoqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEd5KahBjM5J7cBLGSrcA0%2FfIQy5L4zCt9SOjVR1wDdcMVUzQ148UK9Rutlaq4awKFo%2FYu%2B0l5vVV9fYTHzct%2FDx6FJec2F3s8SolLZQHIQRyASg3FY45eyun8AfxUNKNGmBUrsiENOiTPZOETPjjAK71O7Unj4e3CfUcmnUGKUDDFhMJ9yTBXBJmUzW42toaAgewwQ5JijjStYRwju8HAUURCgg9IpJPTqwc0OJIO0%2FcwY5jo9gG3m0G8QdhHAZTWJx4CIbyKIvzS12bf98ya3GPuTXvOIviKerQMsLfCnovQF0ARvHordi20o742gQWnKIlxKBA7YlEU%2F4b7TYoKt47XtVj80DqaOGYInf7GjMf3AVZZwzZxhlSU1ZMa9S6hLk%2BoIm%2BcKJwLbV%2BacgTzdo7jYm4Uxb%2F7fkZmRFwgoa6Risugl5kZpP86tJBgtLtvUO%2FeBrwmaOfpq%2F70IM0XmsApFJC%2B9nW228rLNrnUe8oL6fywhhhgKNV9PPAahqDytmepziCE7koumSpw%2BydLZHxA3NglhaFjrX%2Bs41QpjDe94vTfZnqIfTgZqWpHh4LeTpkUDJHyudwlsm9PoSTTgpNA8V4jzgRWR1skQqiFTd%2FhhV34f2u9C2XhWx08ei%2F%2F0TG9xkHouXWAX3MJSv9MEGOqUBiW%2FgwkjMb%2FNl83%2FA6M1wfDu8ICOEqaXM%2BesfdnuskfrfUqkTqPXATxAzHq5G%2Fakt45TSe6DmuP2oEcQ%2FdxOShzo2hgQ7jI6sKWrY3Tskr6pa0RPhPuWhvEle1YMAAUfJsZNG7NjQr2lJFuPGh5OCmzbCyk8Mz3zatuKBlhdYA%2B2Z5AdqXWMtUnKW%2Bc7ti31nlYZU7K4GQ3zW5wzfQ5OqHFqv0okd&X-Amz-Signature=d5ecd57bac37c335e67d32e20f87158fb27a660cb3c690c87772a8b42635bcb2&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSJCRXRD%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T034412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIDmmFhoAIkWZMJG6Iv87a8yaaq13BbHW%2BD16Fi8xjbVaAiEAl4yO2w6KFTmFw6Xk00qz9SK49TORtTkqdqLgYFrDzEoqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEd5KahBjM5J7cBLGSrcA0%2FfIQy5L4zCt9SOjVR1wDdcMVUzQ148UK9Rutlaq4awKFo%2FYu%2B0l5vVV9fYTHzct%2FDx6FJec2F3s8SolLZQHIQRyASg3FY45eyun8AfxUNKNGmBUrsiENOiTPZOETPjjAK71O7Unj4e3CfUcmnUGKUDDFhMJ9yTBXBJmUzW42toaAgewwQ5JijjStYRwju8HAUURCgg9IpJPTqwc0OJIO0%2FcwY5jo9gG3m0G8QdhHAZTWJx4CIbyKIvzS12bf98ya3GPuTXvOIviKerQMsLfCnovQF0ARvHordi20o742gQWnKIlxKBA7YlEU%2F4b7TYoKt47XtVj80DqaOGYInf7GjMf3AVZZwzZxhlSU1ZMa9S6hLk%2BoIm%2BcKJwLbV%2BacgTzdo7jYm4Uxb%2F7fkZmRFwgoa6Risugl5kZpP86tJBgtLtvUO%2FeBrwmaOfpq%2F70IM0XmsApFJC%2B9nW228rLNrnUe8oL6fywhhhgKNV9PPAahqDytmepziCE7koumSpw%2BydLZHxA3NglhaFjrX%2Bs41QpjDe94vTfZnqIfTgZqWpHh4LeTpkUDJHyudwlsm9PoSTTgpNA8V4jzgRWR1skQqiFTd%2FhhV34f2u9C2XhWx08ei%2F%2F0TG9xkHouXWAX3MJSv9MEGOqUBiW%2FgwkjMb%2FNl83%2FA6M1wfDu8ICOEqaXM%2BesfdnuskfrfUqkTqPXATxAzHq5G%2Fakt45TSe6DmuP2oEcQ%2FdxOShzo2hgQ7jI6sKWrY3Tskr6pa0RPhPuWhvEle1YMAAUfJsZNG7NjQr2lJFuPGh5OCmzbCyk8Mz3zatuKBlhdYA%2B2Z5AdqXWMtUnKW%2Bc7ti31nlYZU7K4GQ3zW5wzfQ5OqHFqv0okd&X-Amz-Signature=48d21beac07f731611d1251b045b0dcb2dbe63beaebec7d021491dd0ca7f3fd7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSJCRXRD%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T034412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIDmmFhoAIkWZMJG6Iv87a8yaaq13BbHW%2BD16Fi8xjbVaAiEAl4yO2w6KFTmFw6Xk00qz9SK49TORtTkqdqLgYFrDzEoqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEd5KahBjM5J7cBLGSrcA0%2FfIQy5L4zCt9SOjVR1wDdcMVUzQ148UK9Rutlaq4awKFo%2FYu%2B0l5vVV9fYTHzct%2FDx6FJec2F3s8SolLZQHIQRyASg3FY45eyun8AfxUNKNGmBUrsiENOiTPZOETPjjAK71O7Unj4e3CfUcmnUGKUDDFhMJ9yTBXBJmUzW42toaAgewwQ5JijjStYRwju8HAUURCgg9IpJPTqwc0OJIO0%2FcwY5jo9gG3m0G8QdhHAZTWJx4CIbyKIvzS12bf98ya3GPuTXvOIviKerQMsLfCnovQF0ARvHordi20o742gQWnKIlxKBA7YlEU%2F4b7TYoKt47XtVj80DqaOGYInf7GjMf3AVZZwzZxhlSU1ZMa9S6hLk%2BoIm%2BcKJwLbV%2BacgTzdo7jYm4Uxb%2F7fkZmRFwgoa6Risugl5kZpP86tJBgtLtvUO%2FeBrwmaOfpq%2F70IM0XmsApFJC%2B9nW228rLNrnUe8oL6fywhhhgKNV9PPAahqDytmepziCE7koumSpw%2BydLZHxA3NglhaFjrX%2Bs41QpjDe94vTfZnqIfTgZqWpHh4LeTpkUDJHyudwlsm9PoSTTgpNA8V4jzgRWR1skQqiFTd%2FhhV34f2u9C2XhWx08ei%2F%2F0TG9xkHouXWAX3MJSv9MEGOqUBiW%2FgwkjMb%2FNl83%2FA6M1wfDu8ICOEqaXM%2BesfdnuskfrfUqkTqPXATxAzHq5G%2Fakt45TSe6DmuP2oEcQ%2FdxOShzo2hgQ7jI6sKWrY3Tskr6pa0RPhPuWhvEle1YMAAUfJsZNG7NjQr2lJFuPGh5OCmzbCyk8Mz3zatuKBlhdYA%2B2Z5AdqXWMtUnKW%2Bc7ti31nlYZU7K4GQ3zW5wzfQ5OqHFqv0okd&X-Amz-Signature=61837857e7621f839e19c67a3d613f125f62251b291e26512b4619b99b275724&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXWEK7JF%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T034415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQDxwpATnlGbzdqTP4zdbhkO5oCzqI3oqeVUSwohs0VbJAIgbpc7%2BQYhYmBr3Xml9Lkd0HDcBR7ysnGY6lXioCehBhMqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBnGq5BZWS2bJmlcIyrcAxylzBz002tnBNQXIaXFzF0P1kPnSK%2BpxUdYFgABk4Ku6v3RoUGkQ14LqooSFSUQ2FL2cSPZLp%2BdZmcgRFRofUAp6yCS3WBHcmS5WvwvvtWZd0E%2BpuAmcLjmKFA2ggAgx1P3vHcT9WejlsoGtQr8Xv20l1G%2FOO7jR5m6SiZlIImVxKh6Cj8WuDgYGO3WTxAspdOMdB9wunhu48TypGN4%2F3xWiimwQLKzbNnIgOcVbrRQXZyREEi4CJCBNLbCt%2Fv0WLm1M6HSyEmxCRyO4o0SR%2BMB5kNQYFyedHI6Yh3SzOfLY1RxsciFtEsiBLGaHutH1XaljFs%2BI7zecL7nuQxJymBEwLODmgt4iNrvACzyKGthgqGx%2FMFQUVUEdQtI6cXvbxBHKNiOY2Db0kPr8%2BHt37IPnNuLYRaykp0YzeVxz4OuJ1zRXbtrxIFztkyhbEhCUcM77%2BCwMIlOL7LCLesa%2BPFjcIQiUwMIGEjHpJ4m%2FAvIc45%2BQVnTaPABr6Tre2IyxzXTUB0pnqHyNof8619zyEcn3OnlsCz3%2BF1JBi0d%2B09EExQ%2BtqRJkvXg5Mllhz12uciViU1Bqs104xeF81wT3oq48qf8NFzhTEDbtI%2FeDAmz%2BvwXROpJU3YfWmxHMJOv9MEGOqUBgNnOchDAsbohf7MsaZVaotTGbPdeW4TEpL2M5L%2BeNrby%2Fd5lQyrrMKFAYjU8CPTGDjD5hEpm4qbi47eoISLiXzfeCDJ2zPViV47PuIwdMjlfBMDD4YVUhZL0A%2F9z8jop6zOyfViUFa0fqql0Pj6mUcYpgNxgZCATlfAnZDCxY0N0CeLe6M8XQ%2FY9FPl2yPsz5shTdX4OFkFl7qz8xzJlrcgMvXQm&X-Amz-Signature=0a784d494ee815104e63e94b2e1ebdc930faa245496ee8ecb2b5d660e8bd8098&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAO7GRVP%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T034415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQCK%2B0gFAlff4fThJsc9X2R38GvDqLi3jX53ubTw%2FbMY0wIgIEBJJclezR4UdUanLSxxrmWxqFB%2BIQlotpvaqZIc3zUqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFylztVMMpKbug9jUircA27GfBpEfk2b3FQD72xhijR3nniFIuP78UzlzSkRKRXum62BV2GB6b0O4aKRlgeQshRgZ1%2FzvrPLcg%2Fp1t%2FXUtUpGMbXZJa%2F%2By5wltaQF39TIqnI3I5doQKQGjvxasMAgYT7kBroZ6KJdsH35axRqSKldsOp275mfPN6kNTZwTTg%2Bro1AlNajbAOD2i37a7ERvNsz5N9VahXArXq6gAIeRFdGcuvLtUjv2cWcAdeuH%2Fw3yAxTbiLJsK1ueuXP0mapQRu4DFgfCn8xiMDF3V4C8ebGoq%2BBJkavxOXAP%2B%2FKoR4tUXg%2BJxof7S1pOm4cRiaeNdNcrScwc%2Bsq25xgzQ09Mi8w5%2FN6lQtL953saMO6NvqN68Y28YqeGnnEYkAT5%2B4ZSm7Zcvdl%2FLfmHx7gkKLejarWVBIP%2Fjt5p2YOV6ZG4njDfpNJJqdMn2cpXsABE4fR16d5uR654ymT%2BnVpnlBuEkOZLaOTGmzGPxsbzvLEi%2FOlB02hV58VSb7TUM8fEWdhaaMy2p%2B4FNcp1npSGJCYPyOL%2FhnY9g2ce9AMq0D1ZhoRYukjWgRSbaYxtDUKvVu2DdxzRlSUfWNUJAN7oQeBHrJ9YLtV%2BPDjexRgFYOO4LaEf%2FgzvofRwa8ZBFMMJ%2Bv9MEGOqUBxjB4HtKs%2FpjyMpywIs24mN9teFHXsuMcdIEGz19LwWkLggtpeap9vVDXo2nUbrd7iA8YnbWPgFjvPC7ixMX7l9NcriXnmkmjWN9v7SJxN7JGN8aQ4BsL3M1NykAkHzZrqDLWxJ0BmKjEtvvOEKDoMME5iiIKHd6HEW4nSKhlOZtDxk%2BGuMXAJJGqr59UH8d2tedzr8EsRH6IKKUccXyemISnxZH1&X-Amz-Signature=44e9d6f237f42cfc918ac741e86e6112e026af0dcd5379da601d88507416307d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSJCRXRD%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T034412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIDmmFhoAIkWZMJG6Iv87a8yaaq13BbHW%2BD16Fi8xjbVaAiEAl4yO2w6KFTmFw6Xk00qz9SK49TORtTkqdqLgYFrDzEoqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEd5KahBjM5J7cBLGSrcA0%2FfIQy5L4zCt9SOjVR1wDdcMVUzQ148UK9Rutlaq4awKFo%2FYu%2B0l5vVV9fYTHzct%2FDx6FJec2F3s8SolLZQHIQRyASg3FY45eyun8AfxUNKNGmBUrsiENOiTPZOETPjjAK71O7Unj4e3CfUcmnUGKUDDFhMJ9yTBXBJmUzW42toaAgewwQ5JijjStYRwju8HAUURCgg9IpJPTqwc0OJIO0%2FcwY5jo9gG3m0G8QdhHAZTWJx4CIbyKIvzS12bf98ya3GPuTXvOIviKerQMsLfCnovQF0ARvHordi20o742gQWnKIlxKBA7YlEU%2F4b7TYoKt47XtVj80DqaOGYInf7GjMf3AVZZwzZxhlSU1ZMa9S6hLk%2BoIm%2BcKJwLbV%2BacgTzdo7jYm4Uxb%2F7fkZmRFwgoa6Risugl5kZpP86tJBgtLtvUO%2FeBrwmaOfpq%2F70IM0XmsApFJC%2B9nW228rLNrnUe8oL6fywhhhgKNV9PPAahqDytmepziCE7koumSpw%2BydLZHxA3NglhaFjrX%2Bs41QpjDe94vTfZnqIfTgZqWpHh4LeTpkUDJHyudwlsm9PoSTTgpNA8V4jzgRWR1skQqiFTd%2FhhV34f2u9C2XhWx08ei%2F%2F0TG9xkHouXWAX3MJSv9MEGOqUBiW%2FgwkjMb%2FNl83%2FA6M1wfDu8ICOEqaXM%2BesfdnuskfrfUqkTqPXATxAzHq5G%2Fakt45TSe6DmuP2oEcQ%2FdxOShzo2hgQ7jI6sKWrY3Tskr6pa0RPhPuWhvEle1YMAAUfJsZNG7NjQr2lJFuPGh5OCmzbCyk8Mz3zatuKBlhdYA%2B2Z5AdqXWMtUnKW%2Bc7ti31nlYZU7K4GQ3zW5wzfQ5OqHFqv0okd&X-Amz-Signature=926c0467ee7f3ccd8baad0b6d7bb0a8bd3ee02bb514aa8b755aa5260ddcca4d2&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
