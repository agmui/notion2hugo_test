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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QIEHNTA%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T050919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIQCsH3LjPXRihnxTR1PWRcdAp0LRFRUg%2B%2BgnYmihW3WISwIgDqMujzZG2b%2Bbb0ueXblP08x%2B6Elner2IG77%2F0HuiiKwqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2ByobJDXtQTIoP2PircA4VmwUdAXNEyJsiumjXg5vo78oMzkaafp0CFL4Q0QAdhrwWH%2FILgnvTwq0MNCOHHRwGqTZke7%2FjcHAXVCQ2i7%2BgiRnonpgqHcsL%2BAbzZC0jt8hNeWQmzzMGvNfyjLmy%2B5yZgFHFpKhjLusiEu6XvpP3CBZofm0j%2FMIYvBOZDIoFUDOrs11f5dY%2BIp1e7Kml0AFQzQTKwOz0WZYlrOpt0FUW04%2BtyiKr4wXGtxZHu0YKvbWiua%2BhZnp0zHwilDSA79S%2FhxpqA6mVoBjjU1yNgAyPlYw56NSlibmW4kPXWllUiKHEyDtWSsbp5YyUdnOq%2FyDL9tE6Reg1MtvCEk1pqTNa921OM%2BBdY83o7OJB428448L2Z4OSRdkXco17tZtLIr5tgTyq52VTZ5ctVP0OOvMaSMx6A7%2FHg2kRJ0u4b465IY9PYqbl2PQxo7TJ7Rgr8yxqKU2dxpkB0QF93X3568THmXAnDhV08Aiemu3Fua%2BgiOm3CP2sxoti4zjABKX7QOkeAvvYpFj38L82S1RknjFUT1ya06JFGUVXCUgshd76foNWM4%2FV%2FoW6zJr%2BZMShyIUMH1U1zVnQK%2B2OWNwxbunLeGu8QhYrB9jZCHfbdwxcsUeBtdesGwbpqUpB3MKm4kMEGOqUBu3brwix7OY%2F%2B%2BXl9F4oQryPMUq4uBcU9e9qBo8SoIxJn1zF3v8XgTvyHyo6QBIndyIImNHoAdFoQ%2BaL3VL0LeXrIrkqExUmEnXyTlHTJ382zHQ2o%2F%2BJSiqvYTgarF9dGFwouz8%2BA7zO9nBeBHWH9C%2FZ7khfbfNofZJbjYBGNAWzlDKVN1F6yhQ4kTuIS9VTtZefL3S%2BBbm0vVtTqKk9H88JX6kFX&X-Amz-Signature=4aac5349675b75ce6910e71f8de6bbe8e28ea64d1a84c64a929b23d11b0cac36&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QIEHNTA%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T050919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIQCsH3LjPXRihnxTR1PWRcdAp0LRFRUg%2B%2BgnYmihW3WISwIgDqMujzZG2b%2Bbb0ueXblP08x%2B6Elner2IG77%2F0HuiiKwqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2ByobJDXtQTIoP2PircA4VmwUdAXNEyJsiumjXg5vo78oMzkaafp0CFL4Q0QAdhrwWH%2FILgnvTwq0MNCOHHRwGqTZke7%2FjcHAXVCQ2i7%2BgiRnonpgqHcsL%2BAbzZC0jt8hNeWQmzzMGvNfyjLmy%2B5yZgFHFpKhjLusiEu6XvpP3CBZofm0j%2FMIYvBOZDIoFUDOrs11f5dY%2BIp1e7Kml0AFQzQTKwOz0WZYlrOpt0FUW04%2BtyiKr4wXGtxZHu0YKvbWiua%2BhZnp0zHwilDSA79S%2FhxpqA6mVoBjjU1yNgAyPlYw56NSlibmW4kPXWllUiKHEyDtWSsbp5YyUdnOq%2FyDL9tE6Reg1MtvCEk1pqTNa921OM%2BBdY83o7OJB428448L2Z4OSRdkXco17tZtLIr5tgTyq52VTZ5ctVP0OOvMaSMx6A7%2FHg2kRJ0u4b465IY9PYqbl2PQxo7TJ7Rgr8yxqKU2dxpkB0QF93X3568THmXAnDhV08Aiemu3Fua%2BgiOm3CP2sxoti4zjABKX7QOkeAvvYpFj38L82S1RknjFUT1ya06JFGUVXCUgshd76foNWM4%2FV%2FoW6zJr%2BZMShyIUMH1U1zVnQK%2B2OWNwxbunLeGu8QhYrB9jZCHfbdwxcsUeBtdesGwbpqUpB3MKm4kMEGOqUBu3brwix7OY%2F%2B%2BXl9F4oQryPMUq4uBcU9e9qBo8SoIxJn1zF3v8XgTvyHyo6QBIndyIImNHoAdFoQ%2BaL3VL0LeXrIrkqExUmEnXyTlHTJ382zHQ2o%2F%2BJSiqvYTgarF9dGFwouz8%2BA7zO9nBeBHWH9C%2FZ7khfbfNofZJbjYBGNAWzlDKVN1F6yhQ4kTuIS9VTtZefL3S%2BBbm0vVtTqKk9H88JX6kFX&X-Amz-Signature=f3ecaa2f509dccaf9c228b9003c17a99d078e14c919d9decf18fbeafb1da99f4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QIEHNTA%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T050919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIQCsH3LjPXRihnxTR1PWRcdAp0LRFRUg%2B%2BgnYmihW3WISwIgDqMujzZG2b%2Bbb0ueXblP08x%2B6Elner2IG77%2F0HuiiKwqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2ByobJDXtQTIoP2PircA4VmwUdAXNEyJsiumjXg5vo78oMzkaafp0CFL4Q0QAdhrwWH%2FILgnvTwq0MNCOHHRwGqTZke7%2FjcHAXVCQ2i7%2BgiRnonpgqHcsL%2BAbzZC0jt8hNeWQmzzMGvNfyjLmy%2B5yZgFHFpKhjLusiEu6XvpP3CBZofm0j%2FMIYvBOZDIoFUDOrs11f5dY%2BIp1e7Kml0AFQzQTKwOz0WZYlrOpt0FUW04%2BtyiKr4wXGtxZHu0YKvbWiua%2BhZnp0zHwilDSA79S%2FhxpqA6mVoBjjU1yNgAyPlYw56NSlibmW4kPXWllUiKHEyDtWSsbp5YyUdnOq%2FyDL9tE6Reg1MtvCEk1pqTNa921OM%2BBdY83o7OJB428448L2Z4OSRdkXco17tZtLIr5tgTyq52VTZ5ctVP0OOvMaSMx6A7%2FHg2kRJ0u4b465IY9PYqbl2PQxo7TJ7Rgr8yxqKU2dxpkB0QF93X3568THmXAnDhV08Aiemu3Fua%2BgiOm3CP2sxoti4zjABKX7QOkeAvvYpFj38L82S1RknjFUT1ya06JFGUVXCUgshd76foNWM4%2FV%2FoW6zJr%2BZMShyIUMH1U1zVnQK%2B2OWNwxbunLeGu8QhYrB9jZCHfbdwxcsUeBtdesGwbpqUpB3MKm4kMEGOqUBu3brwix7OY%2F%2B%2BXl9F4oQryPMUq4uBcU9e9qBo8SoIxJn1zF3v8XgTvyHyo6QBIndyIImNHoAdFoQ%2BaL3VL0LeXrIrkqExUmEnXyTlHTJ382zHQ2o%2F%2BJSiqvYTgarF9dGFwouz8%2BA7zO9nBeBHWH9C%2FZ7khfbfNofZJbjYBGNAWzlDKVN1F6yhQ4kTuIS9VTtZefL3S%2BBbm0vVtTqKk9H88JX6kFX&X-Amz-Signature=165b699d41a98b63606cd489ebd69d98c65bb01b6bc122b6ddf2838dd3c4b636&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TBJRWEN%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T050920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIEg%2Bg47foFY4JqUJOTgnPlz%2F2ZtzNMQbKsOKVzDcBGuzAiBZg8QJMCwTSrtDfzqd6HKt02pvimwPwktAbewYVk7THCqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrEyA5gt9fYY1bnmOKtwDBFFiawb4xg2oPm503MioVV09zlhDTFagBf2o13RXvnF6natCcJHz0usUz0BQav9YGqqESVkBcjxIYReSGVWo5ym143OB3WFM3eWRD9pYxgGs%2F4LF0HFk2Gk6kkz%2BDaRKnEKwMkMSJqJGEp0z1wvi0miz6X4DE4vlKhVCUvxAFEYmkr3omILhcGmwev46pKg%2BT%2FjvJJ%2B5WJTx18yQ6kVjF4ZfV9wKxcM68vLMkRz0oRkIM8fWMrbFua4NqjzyBmZkppMqFgREz%2By8wH4aeNIJw%2Bl8NsEKeWwtLuxlQODYp9cgvlwZac2M36BLY3Y3jk99JW2%2BoVMEP99ck2ZuXofLIwpH4RuDypnqESdMKSQsJXVnB1TbNJqrBifBHm4REP5aQCvg2MYqMYF55OJJhMPx6H1kwSx08spBubAzm%2FE%2BgHMNcKyr823PXKWtU0ijtk%2BT1XshPUQp09NSrCN6wVQmUWEtNskjfxPcVW2esUe17Pm6a%2FZW86rYoGpAuSux7s4J3V7f7YUcKHtAAFp6iHepZSlrgpnpQBGNTJDs7ZIWZ3miNpu9EcovwRz1y7DlswhNUKAib8GsTyJOIitK5wbvLd7ubzXN9QmEx0XinLn%2FIxit%2FMBV2G0MtgA3cpwwzbiQwQY6pgEj2G9GW4egdKvwbEdDnL61xIqN58yNk3Dm0V1%2FmFcVK%2Bbbyd0tzeUYTca4noz3T3p3shrqBRxWm5fPD03qjkARrFzBm2Io6T0%2Fju5ZpkSkCP7vcKFZK6b63P6JysRQUTOcWnYDBJewJt0lbKEP3Bs53ccLA8hPwRA%2BPnJDaqxbk5gH9DJQpb5raIXLjsOon99tKMkelnldo7FpCGZ0ljBpZqCxqeCG&X-Amz-Signature=51650c7d803fa0518c8bf564784cb9fcce5223cf85df55aaa11e2704b0fda70a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXTXUY2N%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T050922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIQC%2Bo6HwDrpn%2FQxHesw3avDu71Ab1f1R%2Fp3bmHlivnOu1wIgcRWaZoPH%2BT5d86Aru1wKa2li1TqYnRrRldsQj2o1c3EqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIvLsUWi2jbvFqViFCrcAybof5BI8HCihFOtZZgThgpjXLr0l2nriTZyoi32QV05ctbffuooRTHMIQrn5fhqpdzaifj8CdVXDFsRdU5u7XQlDq1BkkiAWPRCK3vnqfb4FT73lPku7iYOO1HfbUvloNJgRUOx%2FmDVfv%2FTs7BHA2gd2yC1laVgswl4MxNV1nYoCiUwb%2Bnj9IVOQMAp%2F7f8JAMjmIpncei%2FVmrdfjaXW0DaffKXgiZQHAkanJy7JxeD%2Fw8qSPP3mns4y%2FGFO3MCeOOHw7gBGlaCI%2FOzht3yDtiB1AffniuRFJ2at8QUs88PbGVRnYq3MRPyJ7%2FeztYxmYAmEZdVQ5bRUqVfCJkdcYlPMII5t487sR84sqKTThG0DqneakAcABqZZLrn8KvIgosHtwBrcafNal9ZPICrE2b39MtIPEBFbtoc9MQ5SEVmQ7dtbp%2B2ngCI0AxuGS%2BEJ4%2BGnYEe2w%2BSOlNwvUGGYf56SIC%2B6cUclOZOh6PP%2B67Emdi%2F9Pf2tSinRqiVmQkNhL7pNRofChBx485dq3kP8%2BWZ8Z4poqKXOnp0Ufak4n4ocpD1HffSh%2BN7YIwz4P4cIleFq7j%2FFAmFlUNIZ3PPIjETe0EOdpqIsMYeQYLfzdfr4QTlzxo%2FPOocHloXMPq3kMEGOqUBuQZxfIA4r%2BRkgqnsEv5WTktSxwm4%2F5tB73yDHAJxew4BmUj6Yrfd0xpnf7wv3OhPsKrAVY0gy0p%2BSDcmlHuxzR9ulwubTFBC6qfEH0VhPQkoCdE8HKiFHzSTpyGrEBKU2LNk16QyiaafAp%2FnlIB0MKCKc6L97ihxCF%2BFnJwSBGtUWk%2FagEPba4pQ8hUWF1Xl7cUkObKt%2FbyuDlAE0%2BphB394ZOXM&X-Amz-Signature=31ea4fccdd2451f69b8f20c57a16306339fe3ab4ac20298af5b955122faff8b4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QIEHNTA%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T050919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIQCsH3LjPXRihnxTR1PWRcdAp0LRFRUg%2B%2BgnYmihW3WISwIgDqMujzZG2b%2Bbb0ueXblP08x%2B6Elner2IG77%2F0HuiiKwqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2ByobJDXtQTIoP2PircA4VmwUdAXNEyJsiumjXg5vo78oMzkaafp0CFL4Q0QAdhrwWH%2FILgnvTwq0MNCOHHRwGqTZke7%2FjcHAXVCQ2i7%2BgiRnonpgqHcsL%2BAbzZC0jt8hNeWQmzzMGvNfyjLmy%2B5yZgFHFpKhjLusiEu6XvpP3CBZofm0j%2FMIYvBOZDIoFUDOrs11f5dY%2BIp1e7Kml0AFQzQTKwOz0WZYlrOpt0FUW04%2BtyiKr4wXGtxZHu0YKvbWiua%2BhZnp0zHwilDSA79S%2FhxpqA6mVoBjjU1yNgAyPlYw56NSlibmW4kPXWllUiKHEyDtWSsbp5YyUdnOq%2FyDL9tE6Reg1MtvCEk1pqTNa921OM%2BBdY83o7OJB428448L2Z4OSRdkXco17tZtLIr5tgTyq52VTZ5ctVP0OOvMaSMx6A7%2FHg2kRJ0u4b465IY9PYqbl2PQxo7TJ7Rgr8yxqKU2dxpkB0QF93X3568THmXAnDhV08Aiemu3Fua%2BgiOm3CP2sxoti4zjABKX7QOkeAvvYpFj38L82S1RknjFUT1ya06JFGUVXCUgshd76foNWM4%2FV%2FoW6zJr%2BZMShyIUMH1U1zVnQK%2B2OWNwxbunLeGu8QhYrB9jZCHfbdwxcsUeBtdesGwbpqUpB3MKm4kMEGOqUBu3brwix7OY%2F%2B%2BXl9F4oQryPMUq4uBcU9e9qBo8SoIxJn1zF3v8XgTvyHyo6QBIndyIImNHoAdFoQ%2BaL3VL0LeXrIrkqExUmEnXyTlHTJ382zHQ2o%2F%2BJSiqvYTgarF9dGFwouz8%2BA7zO9nBeBHWH9C%2FZ7khfbfNofZJbjYBGNAWzlDKVN1F6yhQ4kTuIS9VTtZefL3S%2BBbm0vVtTqKk9H88JX6kFX&X-Amz-Signature=8d8915c6a43e798b1ef66e8ea87bc3d5e7b19713e59be642f0be61d8ad303405&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
