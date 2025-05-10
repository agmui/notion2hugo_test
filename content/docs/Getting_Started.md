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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLAWOMBC%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T022058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHUjYob9szMLh2WPmOVaXMnPR7JVd7XbN4D6ku51X%2BeUAiBChDVmZOZhX9csNTraFcCf7JHOqGzBQdNDivSlE5%2Bx6SqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0QR9hzVWu9aI9lBQKtwDdFFmWzFVOy0pTA8jUc2qg7%2B%2FdDBN9vyQnnspNyC%2BWFB3slCpWTBdPS0vK3Adb80H58qVKcUBYnV7zli%2BdACnD0ZIoT687NevTTe9ukZffJFBvaL5jaDYZCxioDeq2Qdigt%2FcXujeCLhQgdRnVaLS5mqQQr0QLwUAlTddYJo%2FxMNyXGtGqSy30Sc9oQ89CpjRbYtuBHoFIzEd1cwQotW3Q1zij948IGWA6Zvt5prV1zJaqaHW%2FO8%2FX7%2BeKEuWsgeaTiJyBEQc%2BQqUWVd8x4sF%2BrerFDRb3%2FHSXeMFDOYPYubk8QzoAMkYFO3v%2BqeqdwnqzOjTJEBkMDxTCTXAR98eeSSQA0hI3oyp9bOKvrlDe%2BlNkxFBbVz%2F1Tkw64oI8M8vP1M4hGfu8MCLKMiB9f1fwXnDRRmYQGUeZtvLcE0qCkXSQWj4ytyCDDFoFcPkt32qlw6BwhqfbSwMYy21KJDk0EF%2Be9WBd%2FeRMkKoA%2FQrmyE%2Bpijnm7qMSGIScKwdQCNfdbI%2FiygtX5C5mmr0onJzurtPooYEUei0Ut%2FM6RZIdaqRi9N5ipJRBnlB7nsdLZTW6%2BTCMeTpd2AvSFdWZ6Z2rzR9AOlzatsRhz1n4RZtq2TyS9RpgXU8qSNdvHMww%2Bv6wAY6pgEkAs2Vgokymdsg1IdfPxVCjCOikRhCag1Lcqse9qyuZy2jL2i0ixVZUV01YY0bD9m0%2FKKN3jGKzGhgS%2Bc4o9faHKS1ig1gEbqt%2F5n4BMPQPYpBUmJgKVibl2yzQBynXgs6KaVPH%2FRgVIygHVfcjz%2B0WQZAoZ2nP8SZnFiwmziEfSrdyJiUZq8V2c0PDymaJLAEX8wVEexPStZCV8JsXw87ocaHbDst&X-Amz-Signature=59b9e998d0163e9544417043a01eecf6282da6d4ba4a26ab1a42da8de5fa00ea&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLAWOMBC%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T022058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHUjYob9szMLh2WPmOVaXMnPR7JVd7XbN4D6ku51X%2BeUAiBChDVmZOZhX9csNTraFcCf7JHOqGzBQdNDivSlE5%2Bx6SqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0QR9hzVWu9aI9lBQKtwDdFFmWzFVOy0pTA8jUc2qg7%2B%2FdDBN9vyQnnspNyC%2BWFB3slCpWTBdPS0vK3Adb80H58qVKcUBYnV7zli%2BdACnD0ZIoT687NevTTe9ukZffJFBvaL5jaDYZCxioDeq2Qdigt%2FcXujeCLhQgdRnVaLS5mqQQr0QLwUAlTddYJo%2FxMNyXGtGqSy30Sc9oQ89CpjRbYtuBHoFIzEd1cwQotW3Q1zij948IGWA6Zvt5prV1zJaqaHW%2FO8%2FX7%2BeKEuWsgeaTiJyBEQc%2BQqUWVd8x4sF%2BrerFDRb3%2FHSXeMFDOYPYubk8QzoAMkYFO3v%2BqeqdwnqzOjTJEBkMDxTCTXAR98eeSSQA0hI3oyp9bOKvrlDe%2BlNkxFBbVz%2F1Tkw64oI8M8vP1M4hGfu8MCLKMiB9f1fwXnDRRmYQGUeZtvLcE0qCkXSQWj4ytyCDDFoFcPkt32qlw6BwhqfbSwMYy21KJDk0EF%2Be9WBd%2FeRMkKoA%2FQrmyE%2Bpijnm7qMSGIScKwdQCNfdbI%2FiygtX5C5mmr0onJzurtPooYEUei0Ut%2FM6RZIdaqRi9N5ipJRBnlB7nsdLZTW6%2BTCMeTpd2AvSFdWZ6Z2rzR9AOlzatsRhz1n4RZtq2TyS9RpgXU8qSNdvHMww%2Bv6wAY6pgEkAs2Vgokymdsg1IdfPxVCjCOikRhCag1Lcqse9qyuZy2jL2i0ixVZUV01YY0bD9m0%2FKKN3jGKzGhgS%2Bc4o9faHKS1ig1gEbqt%2F5n4BMPQPYpBUmJgKVibl2yzQBynXgs6KaVPH%2FRgVIygHVfcjz%2B0WQZAoZ2nP8SZnFiwmziEfSrdyJiUZq8V2c0PDymaJLAEX8wVEexPStZCV8JsXw87ocaHbDst&X-Amz-Signature=464e21af776d20b956151f448cc0775700c43967a94dc52cf56823e404a7aa73&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLAWOMBC%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T022058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHUjYob9szMLh2WPmOVaXMnPR7JVd7XbN4D6ku51X%2BeUAiBChDVmZOZhX9csNTraFcCf7JHOqGzBQdNDivSlE5%2Bx6SqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0QR9hzVWu9aI9lBQKtwDdFFmWzFVOy0pTA8jUc2qg7%2B%2FdDBN9vyQnnspNyC%2BWFB3slCpWTBdPS0vK3Adb80H58qVKcUBYnV7zli%2BdACnD0ZIoT687NevTTe9ukZffJFBvaL5jaDYZCxioDeq2Qdigt%2FcXujeCLhQgdRnVaLS5mqQQr0QLwUAlTddYJo%2FxMNyXGtGqSy30Sc9oQ89CpjRbYtuBHoFIzEd1cwQotW3Q1zij948IGWA6Zvt5prV1zJaqaHW%2FO8%2FX7%2BeKEuWsgeaTiJyBEQc%2BQqUWVd8x4sF%2BrerFDRb3%2FHSXeMFDOYPYubk8QzoAMkYFO3v%2BqeqdwnqzOjTJEBkMDxTCTXAR98eeSSQA0hI3oyp9bOKvrlDe%2BlNkxFBbVz%2F1Tkw64oI8M8vP1M4hGfu8MCLKMiB9f1fwXnDRRmYQGUeZtvLcE0qCkXSQWj4ytyCDDFoFcPkt32qlw6BwhqfbSwMYy21KJDk0EF%2Be9WBd%2FeRMkKoA%2FQrmyE%2Bpijnm7qMSGIScKwdQCNfdbI%2FiygtX5C5mmr0onJzurtPooYEUei0Ut%2FM6RZIdaqRi9N5ipJRBnlB7nsdLZTW6%2BTCMeTpd2AvSFdWZ6Z2rzR9AOlzatsRhz1n4RZtq2TyS9RpgXU8qSNdvHMww%2Bv6wAY6pgEkAs2Vgokymdsg1IdfPxVCjCOikRhCag1Lcqse9qyuZy2jL2i0ixVZUV01YY0bD9m0%2FKKN3jGKzGhgS%2Bc4o9faHKS1ig1gEbqt%2F5n4BMPQPYpBUmJgKVibl2yzQBynXgs6KaVPH%2FRgVIygHVfcjz%2B0WQZAoZ2nP8SZnFiwmziEfSrdyJiUZq8V2c0PDymaJLAEX8wVEexPStZCV8JsXw87ocaHbDst&X-Amz-Signature=4e3a8891112bf6cb344017f783294fcac7c95341efaa326d9bcc7e54c003ea9b&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667G5I6RLN%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T022102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0irq6%2BPnJ8ymTrkb%2FWOGBSEit8JMV7I7DZuLj3yrtSAIhAKoJ6JWtEgZuhR1JslBDzqf1svVHmXiCGgjUnv4BopazKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz69Hw0ch4ithwjw60q3AN0BFnXM0IAUqYlT9Jz3JelvU5HFUz0cWGndA%2FzZycwLq3qr3FLsKGfDe9lFYvXc80bk%2FFnqQNtFiaDJGnhDJrZCf2MbYn5oDr9kEzxLA7Y9TheVvh48wwWJJpkiLxWtsZlmhQ9FGJR1%2FkZJBWq0YlAKxdNRkDB1S0O%2Bum%2F8KDCS5GS%2BOk72vvkg3nBrzsSMPBvs55G8KC5Hj8ZOfCCzUpPVeBAwXvFDUkmtQv%2Bf%2FIBsPli5sSPvroS3S4o436h4vYRrZ8HWW9wE2AIKSTNmIObAlVoR2CG%2Bg4jy4QB1ZtoMTL3CUc%2Blo0hj6036%2FpM35Fiit7sUXT5lHDkcqGAb7oDt%2BcFTdb1HALW%2BDsVwpKJ4huiYSKPFwzv%2FlGtEmRazonHxT16z%2FTEBdWvXnKRpQtXu%2B7tJ%2FKvSeBqqGCxM3lf0bzo6PHNExgBzzQh4HvZNaXtDy0YnCO5Q1IwG0639j%2BCyZ071Kf0%2Futd8j3WUmrUkN%2F1s5Uo8Ah2epkviTh3X99eQP4RBT1Q%2BAwq%2BNzXsusL%2FI%2FYmjO6%2FUbhBnF1h9d8b%2Bd0rIf%2FfaPnOZZcPEsQauljHT%2FgWObbSh9kBfIFfVoOzMYnsApw5fftT1PMmtQ3A7Loau4WVV7sKiVkiDDP6%2FrABjqkAXie8j1y0o8UtyuUOGPZ6tNoYUt0zPGaxzh9aeMvGPjKoRvDSthz9qJVsYsBMWjfGrcKfWMCETX41OHSJLiIyjgog6PWS%2BqpFHBuGgo4kDoJ%2Fr8W%2BjsfOehua5Knra5WGDg%2BD9TNfQNVTT3w1WrPkYqabjBAlxfea1bDihNn%2FEF0PFTuPAO4XFYd48T8hsvivUsUrmYx2qaKygLKv56%2FFFD7YFPI&X-Amz-Signature=430b3bb28129757420bcc029bfb584ca52d2433cff9a8cf9c46ec226bdb3b226&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NMH6E2T%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T022104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAKseIRCLQqzqRYP3cZjUJwbSiBP3S4p8l2t49YLrzH6AiEA5GNGjHI5Mdox69t8Ri63zYyS%2FgdEpgUaQpS0AhglEHAqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJUgn2qQ13bAnpGJLSrcA7HmEay8x7Wo9xdgPKucNpCa%2BiyCTS3wSlrcA0gpKTzTbUyucfwZpqBfSkNjaB1ktVMnbEB%2B04cUr3tR6mXu8qxQOwqU7Wt%2B16jKad6vHXh7LKJ%2BlPWF8rcEolcj24dRS1bWidMzxP8xexUv%2FieXOrdvw2eo2pYoU49GY9zKR6bQaHT%2FYkntsRLSi6tKCGgnQBeKjgCWFxak4E6Sp0XbOsLR1cmPIm629kw6I%2BYIx4UwDtPlt7yLItyb1dTiUwlSJ1odJeCPhCyhoP0Yzi155yVJ%2BcpddygsMtp3bW2B%2FVoYYicf9PdhC7p2u8hgflBMM0Djp4D3PNWH%2F%2F3Vc%2B2ul%2B8zkS5aFFLafzEQKyuI1uQlT%2BirnJJ3e%2Fua1oJHgpdM2elJCdAwlfOogtnh79CCDIFLnyFCXLtal%2BktyAdFvYXAx2WB3aG4dfcUwrKUex8SNmTt%2Bu%2FuXI%2Bt5yo70FNUiPjoX%2BkyDWVR3FmdehTDBW3px5wtweK%2BOQapavgz2wnWDc9247hsr9bJYgUALnCgQq5hbORKn%2BdUtqEqElGfqABvfJ7qAmEov2m4DaJy0e%2BEqLr%2FieAXB8rrba1TRDHEJ8k%2FkXI1qYEF%2BJgLy3V49XVtfK9HMLySNNN1Af61MMfr%2BsAGOqUBqPeDKSB%2FVVdcmqBwbq4kF4bieJlhsKQY8R9%2Bo5VL3Hu12u0TiAshsXAl%2FpLVMKwemlZc7tzag%2F91hXUDez3JY8kWOnqyif2G%2B4wxZU%2BMf6%2FNXaY9330ZB%2B%2B%2FuTN6KjJo0on036eyebKPgIz%2F9iWj7MA%2Bgl9VI%2FWgSkRvTUhIaMsyINdFI8YqJYTGUjTYXOn4Sp7JKChwB%2BluL2TK7zvNfzg4p3vP&X-Amz-Signature=85954dd8a61a526eb10260debcf45adb7fc96049c71c4a4eb71b6aea61f21443&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLAWOMBC%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T022058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHUjYob9szMLh2WPmOVaXMnPR7JVd7XbN4D6ku51X%2BeUAiBChDVmZOZhX9csNTraFcCf7JHOqGzBQdNDivSlE5%2Bx6SqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0QR9hzVWu9aI9lBQKtwDdFFmWzFVOy0pTA8jUc2qg7%2B%2FdDBN9vyQnnspNyC%2BWFB3slCpWTBdPS0vK3Adb80H58qVKcUBYnV7zli%2BdACnD0ZIoT687NevTTe9ukZffJFBvaL5jaDYZCxioDeq2Qdigt%2FcXujeCLhQgdRnVaLS5mqQQr0QLwUAlTddYJo%2FxMNyXGtGqSy30Sc9oQ89CpjRbYtuBHoFIzEd1cwQotW3Q1zij948IGWA6Zvt5prV1zJaqaHW%2FO8%2FX7%2BeKEuWsgeaTiJyBEQc%2BQqUWVd8x4sF%2BrerFDRb3%2FHSXeMFDOYPYubk8QzoAMkYFO3v%2BqeqdwnqzOjTJEBkMDxTCTXAR98eeSSQA0hI3oyp9bOKvrlDe%2BlNkxFBbVz%2F1Tkw64oI8M8vP1M4hGfu8MCLKMiB9f1fwXnDRRmYQGUeZtvLcE0qCkXSQWj4ytyCDDFoFcPkt32qlw6BwhqfbSwMYy21KJDk0EF%2Be9WBd%2FeRMkKoA%2FQrmyE%2Bpijnm7qMSGIScKwdQCNfdbI%2FiygtX5C5mmr0onJzurtPooYEUei0Ut%2FM6RZIdaqRi9N5ipJRBnlB7nsdLZTW6%2BTCMeTpd2AvSFdWZ6Z2rzR9AOlzatsRhz1n4RZtq2TyS9RpgXU8qSNdvHMww%2Bv6wAY6pgEkAs2Vgokymdsg1IdfPxVCjCOikRhCag1Lcqse9qyuZy2jL2i0ixVZUV01YY0bD9m0%2FKKN3jGKzGhgS%2Bc4o9faHKS1ig1gEbqt%2F5n4BMPQPYpBUmJgKVibl2yzQBynXgs6KaVPH%2FRgVIygHVfcjz%2B0WQZAoZ2nP8SZnFiwmziEfSrdyJiUZq8V2c0PDymaJLAEX8wVEexPStZCV8JsXw87ocaHbDst&X-Amz-Signature=9328e799b8f021625d310559808da4bfed273c86ce9aded4c64fe9a7fa319dc7&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
