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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RE2VMQ26%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T061410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQCKhAt2EXkUdsFPlHbqUp9FwLOMyGZlQ%2F8hgW3ZWrk4HgIgR87diCr0ZRvetjS2ndIEDd9lZhkgixkvWhnsPV%2FOXqQq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDO7k0MAnqh%2BoiQX3zyrcA7HZzZvITmfWyKf%2FiJ2CC94We2RQoKx0v4YPZYeadjol%2FX7tYeCli%2F5maZZVnfeDtWTV%2FA34eELQbMEe8sF0rmfFGmaOYbydDs3rhqetM7gTDUnOP%2BtqQrHC3Fd4wXlMgf6rqhMYy2G4FIN2pko0CxNr0NeZ35ab6UcarDf9%2FWnijW31yvIlFYeis%2BRLLfE0ZGSoT4L6Fg5TeEtc91adxDQep7VPm5v%2BtVg1EHnUBwx4KRAkm5QBak13i7PuZJgD6SndWc%2FB8P%2FL%2B3WukNaoMUz9FctqhYrXOZUpyei4x%2FL%2FKE3A8m4%2BKmQKsRmVv59nj1riqs5Ip%2FOKtDDArby4dAzzQAKJLbTH%2F3ZNUgXDol54mBULXoNBitsj%2Bkr%2F3ypx2u1R%2BUahhAKkUEYuI%2BUCpiZyrVsqaks6%2BAhF7uUcfQmFUGeKf%2BGLvFv4Ufpr6gvHYv5I%2BsRC8A8SR89Tb9U3AMz1f6hvS6bqgXs%2FLzxX%2F%2BXS6Kz7IAUkazHQCMcQtQQ9hCBSbL1WfLEWneSx7oFpv3gqKB0Sx9HPnyxvkuEthSR5GgPTQmILZWmqE9ZMTYuXYgNVrqfXKeAuf8QLsQTOB%2BjsNwz0J7HOqHQnW8lwywwIUIlim4diazW0xntXMN7c3MMGOqUBtokA%2B4lbAYYNy8zmGtBodWX79aSwFCUfcVL6JHarONGR%2FhsFBALE2tj1cREN63szFg9SOD0fdh6AaSYB9oksE06H7QHcmA2DzXibThtouk9CC1%2F6xeiHrCe5p8wdaviS0Ts40lK3EROUNw3GTaxPi33HNYpGC3iG%2FnShVDBarLUrk9W835uy%2BNESRLDY5UmVByf7HemGtsQ0h85nNj45M0kVtQL0&X-Amz-Signature=63ac5b7604a791e5194bc471b28997a52eda4949cee52c6291339d7f3a423bb1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RE2VMQ26%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T061410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQCKhAt2EXkUdsFPlHbqUp9FwLOMyGZlQ%2F8hgW3ZWrk4HgIgR87diCr0ZRvetjS2ndIEDd9lZhkgixkvWhnsPV%2FOXqQq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDO7k0MAnqh%2BoiQX3zyrcA7HZzZvITmfWyKf%2FiJ2CC94We2RQoKx0v4YPZYeadjol%2FX7tYeCli%2F5maZZVnfeDtWTV%2FA34eELQbMEe8sF0rmfFGmaOYbydDs3rhqetM7gTDUnOP%2BtqQrHC3Fd4wXlMgf6rqhMYy2G4FIN2pko0CxNr0NeZ35ab6UcarDf9%2FWnijW31yvIlFYeis%2BRLLfE0ZGSoT4L6Fg5TeEtc91adxDQep7VPm5v%2BtVg1EHnUBwx4KRAkm5QBak13i7PuZJgD6SndWc%2FB8P%2FL%2B3WukNaoMUz9FctqhYrXOZUpyei4x%2FL%2FKE3A8m4%2BKmQKsRmVv59nj1riqs5Ip%2FOKtDDArby4dAzzQAKJLbTH%2F3ZNUgXDol54mBULXoNBitsj%2Bkr%2F3ypx2u1R%2BUahhAKkUEYuI%2BUCpiZyrVsqaks6%2BAhF7uUcfQmFUGeKf%2BGLvFv4Ufpr6gvHYv5I%2BsRC8A8SR89Tb9U3AMz1f6hvS6bqgXs%2FLzxX%2F%2BXS6Kz7IAUkazHQCMcQtQQ9hCBSbL1WfLEWneSx7oFpv3gqKB0Sx9HPnyxvkuEthSR5GgPTQmILZWmqE9ZMTYuXYgNVrqfXKeAuf8QLsQTOB%2BjsNwz0J7HOqHQnW8lwywwIUIlim4diazW0xntXMN7c3MMGOqUBtokA%2B4lbAYYNy8zmGtBodWX79aSwFCUfcVL6JHarONGR%2FhsFBALE2tj1cREN63szFg9SOD0fdh6AaSYB9oksE06H7QHcmA2DzXibThtouk9CC1%2F6xeiHrCe5p8wdaviS0Ts40lK3EROUNw3GTaxPi33HNYpGC3iG%2FnShVDBarLUrk9W835uy%2BNESRLDY5UmVByf7HemGtsQ0h85nNj45M0kVtQL0&X-Amz-Signature=d0e7b0c16c30ee7b0be825ecfda702e494093916e57e4be5eae6c4dea2e6b005&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RE2VMQ26%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T061410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQCKhAt2EXkUdsFPlHbqUp9FwLOMyGZlQ%2F8hgW3ZWrk4HgIgR87diCr0ZRvetjS2ndIEDd9lZhkgixkvWhnsPV%2FOXqQq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDO7k0MAnqh%2BoiQX3zyrcA7HZzZvITmfWyKf%2FiJ2CC94We2RQoKx0v4YPZYeadjol%2FX7tYeCli%2F5maZZVnfeDtWTV%2FA34eELQbMEe8sF0rmfFGmaOYbydDs3rhqetM7gTDUnOP%2BtqQrHC3Fd4wXlMgf6rqhMYy2G4FIN2pko0CxNr0NeZ35ab6UcarDf9%2FWnijW31yvIlFYeis%2BRLLfE0ZGSoT4L6Fg5TeEtc91adxDQep7VPm5v%2BtVg1EHnUBwx4KRAkm5QBak13i7PuZJgD6SndWc%2FB8P%2FL%2B3WukNaoMUz9FctqhYrXOZUpyei4x%2FL%2FKE3A8m4%2BKmQKsRmVv59nj1riqs5Ip%2FOKtDDArby4dAzzQAKJLbTH%2F3ZNUgXDol54mBULXoNBitsj%2Bkr%2F3ypx2u1R%2BUahhAKkUEYuI%2BUCpiZyrVsqaks6%2BAhF7uUcfQmFUGeKf%2BGLvFv4Ufpr6gvHYv5I%2BsRC8A8SR89Tb9U3AMz1f6hvS6bqgXs%2FLzxX%2F%2BXS6Kz7IAUkazHQCMcQtQQ9hCBSbL1WfLEWneSx7oFpv3gqKB0Sx9HPnyxvkuEthSR5GgPTQmILZWmqE9ZMTYuXYgNVrqfXKeAuf8QLsQTOB%2BjsNwz0J7HOqHQnW8lwywwIUIlim4diazW0xntXMN7c3MMGOqUBtokA%2B4lbAYYNy8zmGtBodWX79aSwFCUfcVL6JHarONGR%2FhsFBALE2tj1cREN63szFg9SOD0fdh6AaSYB9oksE06H7QHcmA2DzXibThtouk9CC1%2F6xeiHrCe5p8wdaviS0Ts40lK3EROUNw3GTaxPi33HNYpGC3iG%2FnShVDBarLUrk9W835uy%2BNESRLDY5UmVByf7HemGtsQ0h85nNj45M0kVtQL0&X-Amz-Signature=c2a20a8edda8b55ffea5b22e6173283683fe7426c3dfd50938ab388f18f9c3dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUGLXG6G%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T061412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQDJcW0a%2FF%2FDQ5R4F9vaTqKtTGqIOZh4WZLtVCGVL7tmywIhAJOpa5YX0cMaezA9g2F%2FECHczrra51M8R30XO2dgXRtAKv8DCFYQABoMNjM3NDIzMTgzODA1Igzc8JOWXcea0WxXoXwq3ANLIB74mohCt6PgtcJKcy6e7ttX3nlLaNGZzS6c00QzXVrD%2B%2BOXpdw2cn1%2FacljMdr31vv8z1tPK4TOWfNxPEaaK6eoDF8o0z9qV%2Bm7pHMNkof4MQw7JT6nO8kUlSDjLn1kVb1kC2PF7EaBYgiMFjq5KNIbz%2BoFCpav%2FkTMtmVNlx%2FR05Sv%2Fv5S6AnBK2qH5Xx8jN5pyatIAdwMPCWbboyj8D13gaJyIGSI3moA69PN0j1QSRaE0s%2FORTcXJDCJHlOWAB4W4kPyPSgKjE3nDEKb1F4jQf%2FdUB7CGkWMarCqI6CE7zgsfhdPcIhhWrTaj54YxrdEs0NF35%2FPzi3w2Z%2BRHNckk3djstT2MwAaIOZSVxn%2FTiiWar1i4pA0aCUB%2FtWnGJhYYP1WsuB9BnmJVSqOx8S7k4Nn6AtVKbP3YdtibMjwkTxyTiw2USoTo2UYwYlj1BJhBJ5UQHc1Sw71OdRRl3h2mDIh%2FWRYbOo3mPlTKIi%2FO0qzzU%2B85zYNo2DFvbkp%2BweguwTYKgDqKEDg7%2Bpo7ZoqPCTnSTZZnlC8hdXGs7IxNJkAUraywyHGLataFtvdCWxvSBga5V9wPrEJhJnkVjLZ7ATqB08UmuTztKxbLl3e48xkt8teBfMt0TDz3NzDBjqkAffVO8FfK6yZka1nKLh2JLet1jqdaBCfGb8nqH0OgZ1ZXB3YrWv9tsDr86%2BrfqwQI0z8%2BkyIlbCuxo8vx5HjJaJkN4IP5zp%2FwG6LYGWJeImsSbkp%2FLRHmlO6320ICyCAw%2FXxM%2B9h6KEroAzSLS0XY%2FnE%2BzGal6n41BL3k%2F23jt82%2BJeZ5H1IVMaRWwrddQ4xveqs%2BuK%2BmQGfRgMiENpPBlhzZo2i&X-Amz-Signature=49e9a62a2b20c1bb14258a8e0725527176438422eeb58ca2b17bd3db3fb8c0de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WK7GI5RT%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T061413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIDypNgwZ65i%2B9iOMCs9b%2BW0P%2FabSUXEvOiIYlLOY1fNKAiEAvp0Yo6D1ax65%2BSawTimO7hd7DhaE%2BlsvasGGjt6ueB4q%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDONDlj1XAJgHRf0qMircA5FL1FPOi%2Bx%2F9pmnTDA8rjFC3M2YKuf1es9BBBmk6dzw0cJsd2qLIbfyEbH4F9OvKEebNSiZ3gkORqp48HKkXxprbwfddWvxXaWsVAwRrasy%2FsQmcQ15%2FYD0H6upb1VRTqaTAaBD7wtQLgCwgklsgm1zJosQo1DIzO0lUFv2XIVYENAqgz2WXkL%2FtYiyC3hVU5iIXCwpNuBdVnivCWYbfndp8Mu2FgtPQ2ZxOBUho0Gf5BVKstFb84Rl9e3rtB1a4gLvbsiPrJ%2F%2BuuNdxdO44fzCGZPG8CIQuafbt9WASyAYbPuDUdioFjoM4s7T8%2FZlmhShWQBrQJunMdxB2LzaB44a9TlosdlK1x3Q6ZZdl%2B1%2BA%2BcMjaI8hZeHV0ZgLmmVEIm2QGMNRQlCKK5%2F7MqKLHo83k7tmb%2BD%2B57i4BYc74VI0%2FL%2FK2N2NjgK6rJu6cqlL76C2SQuJkUKYeRMcWxKYUeHJwYYWvXq0xkOXBoHwCLgwVlNYZrzlJLYhLA64sejOAUHbdlvKyIf0iZM7td8MmoaWOyKVjKAyrkvTlf4CRFPGJ6GI9IfykEu1E%2Fh5W%2B5QUM%2FdgMmA5%2B%2BADCEmoNBMrPkrURxuvXMe3dSSCDi3TLOTEmXu%2BcPFPs0fh5FMJrd3MMGOqUBpICAOvTAbKvrzZq4Y08OSRk2pHCFxrG3A6SVfp6r4ZrchbDSwK%2Fw%2Bk%2Fk5cqAbjcJ510tcaUpKrw%2B4Do7muwFi19jjDKQ3SpRMt5efDbOADHJtpnRar2xYqMYxPxjR9AusE1dgajWROvYpwudBIpN9r1s%2BXeyE%2Fkeahf5w065IkR6QEpRkg2PxwMvwaWZSKtQFqIxspGZyTKh3N0ez%2Bd5kL4nix3X&X-Amz-Signature=d034070dc6d11718ac4bc45f6be44d056f2aa13d31bf3b0aca635339b16e96b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RE2VMQ26%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T061410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQCKhAt2EXkUdsFPlHbqUp9FwLOMyGZlQ%2F8hgW3ZWrk4HgIgR87diCr0ZRvetjS2ndIEDd9lZhkgixkvWhnsPV%2FOXqQq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDO7k0MAnqh%2BoiQX3zyrcA7HZzZvITmfWyKf%2FiJ2CC94We2RQoKx0v4YPZYeadjol%2FX7tYeCli%2F5maZZVnfeDtWTV%2FA34eELQbMEe8sF0rmfFGmaOYbydDs3rhqetM7gTDUnOP%2BtqQrHC3Fd4wXlMgf6rqhMYy2G4FIN2pko0CxNr0NeZ35ab6UcarDf9%2FWnijW31yvIlFYeis%2BRLLfE0ZGSoT4L6Fg5TeEtc91adxDQep7VPm5v%2BtVg1EHnUBwx4KRAkm5QBak13i7PuZJgD6SndWc%2FB8P%2FL%2B3WukNaoMUz9FctqhYrXOZUpyei4x%2FL%2FKE3A8m4%2BKmQKsRmVv59nj1riqs5Ip%2FOKtDDArby4dAzzQAKJLbTH%2F3ZNUgXDol54mBULXoNBitsj%2Bkr%2F3ypx2u1R%2BUahhAKkUEYuI%2BUCpiZyrVsqaks6%2BAhF7uUcfQmFUGeKf%2BGLvFv4Ufpr6gvHYv5I%2BsRC8A8SR89Tb9U3AMz1f6hvS6bqgXs%2FLzxX%2F%2BXS6Kz7IAUkazHQCMcQtQQ9hCBSbL1WfLEWneSx7oFpv3gqKB0Sx9HPnyxvkuEthSR5GgPTQmILZWmqE9ZMTYuXYgNVrqfXKeAuf8QLsQTOB%2BjsNwz0J7HOqHQnW8lwywwIUIlim4diazW0xntXMN7c3MMGOqUBtokA%2B4lbAYYNy8zmGtBodWX79aSwFCUfcVL6JHarONGR%2FhsFBALE2tj1cREN63szFg9SOD0fdh6AaSYB9oksE06H7QHcmA2DzXibThtouk9CC1%2F6xeiHrCe5p8wdaviS0Ts40lK3EROUNw3GTaxPi33HNYpGC3iG%2FnShVDBarLUrk9W835uy%2BNESRLDY5UmVByf7HemGtsQ0h85nNj45M0kVtQL0&X-Amz-Signature=9c98c248dd63c2fccab51e6e1676a414de20d838d77c94990a049b30de975fc3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
