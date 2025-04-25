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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZRZPLEM%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T161000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnQR2P7NK%2F9PVLMp%2ByXEVVpme9lZQMmy2AKG1QTtMS1wIgSmeo%2BZTm4%2B88Q5uP8fH5sDLRl9Cm5%2FWoaNt%2BW8KlxeYq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDOkpiC8n6KFuqcoxuyrcA0xhC9nr%2FDGvY42oIDiukjXoSN15OJOGU8qg3tG97gqWqYtiWIQhItanbmxkIB7Pgjv4v9c7IUxi%2B2dL2v%2FuKWX5%2F74g5OKTSM6Syamyz6MWYxbnbA5SMsrzu%2BeCPuzGzjqvjMhdG68zmDx7EACAKEimE3lBMQb3GJhck3jCSeSMm%2F9lsRM7hF4JxyvsO7Wn68SCigM%2FSooElEE5cc31wjWFR%2FSSlSWmAL1%2FlR9P2rWikcl8E3jPPTS7MI8V9v%2BrO9svgG8AQnsnV3Xho7HeTK6uiSotu2l8dCCZJH7F3GI12YuYsq%2FLB3XrJg%2B9B6EVzx%2F8KWs3s4Qp5AIubDiXLJmGfDYXbmBenZLv2TsnhhQo2LvrfF%2B6I5QMBo60TWuQheT%2BOdNbZsuoDd5fGTttPAr5WSO5CMR8n7BC1wutdv7FiNdbnIp2sUSd54xHwuTIHn86beyP5OXFsHxU3NGwBpkRb5llInCRDXH6yF71hjITN5AsI887sFQotEHzDdsfvLjhuXt9nXK%2BmQf0GnfXOP4uncKFO%2FMeAhYf2MiwsV4c%2FWJmd3%2BX4ivAEkWPbk22Q8Hh%2Fv7Ym7bEoyZIYdF35gtaVNeAqBTS1k2UA0CyLF%2BVjYTsr%2FXqSfJ%2BLGfgMMjNrsAGOqUBZPOTdDC%2FVFZ4zyNH5k15iTUlqSbre7NlAjAHaXiOlJX0LPl7q2u6IHK%2FyhEg0heUq%2Bfl6daUTsPRJFSZWsMMDbKe7yHu53eKvXE%2BBnX67fs7vLisV15rGE2OlV5maSQq8JUbbCT8uu5vnTdqlI%2B2gJvuEGmzwZhDu2aTDrZxodBcxN%2FnGy47zYEP7G49K03uvO9VFAx7r3Sp8vMMGMktgV%2FJ%2BBJU&X-Amz-Signature=006b4f37ca6ac3ffa95f7d127d696ec76f3991d22f5e674e44d6d4db26059187&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZRZPLEM%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T161000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnQR2P7NK%2F9PVLMp%2ByXEVVpme9lZQMmy2AKG1QTtMS1wIgSmeo%2BZTm4%2B88Q5uP8fH5sDLRl9Cm5%2FWoaNt%2BW8KlxeYq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDOkpiC8n6KFuqcoxuyrcA0xhC9nr%2FDGvY42oIDiukjXoSN15OJOGU8qg3tG97gqWqYtiWIQhItanbmxkIB7Pgjv4v9c7IUxi%2B2dL2v%2FuKWX5%2F74g5OKTSM6Syamyz6MWYxbnbA5SMsrzu%2BeCPuzGzjqvjMhdG68zmDx7EACAKEimE3lBMQb3GJhck3jCSeSMm%2F9lsRM7hF4JxyvsO7Wn68SCigM%2FSooElEE5cc31wjWFR%2FSSlSWmAL1%2FlR9P2rWikcl8E3jPPTS7MI8V9v%2BrO9svgG8AQnsnV3Xho7HeTK6uiSotu2l8dCCZJH7F3GI12YuYsq%2FLB3XrJg%2B9B6EVzx%2F8KWs3s4Qp5AIubDiXLJmGfDYXbmBenZLv2TsnhhQo2LvrfF%2B6I5QMBo60TWuQheT%2BOdNbZsuoDd5fGTttPAr5WSO5CMR8n7BC1wutdv7FiNdbnIp2sUSd54xHwuTIHn86beyP5OXFsHxU3NGwBpkRb5llInCRDXH6yF71hjITN5AsI887sFQotEHzDdsfvLjhuXt9nXK%2BmQf0GnfXOP4uncKFO%2FMeAhYf2MiwsV4c%2FWJmd3%2BX4ivAEkWPbk22Q8Hh%2Fv7Ym7bEoyZIYdF35gtaVNeAqBTS1k2UA0CyLF%2BVjYTsr%2FXqSfJ%2BLGfgMMjNrsAGOqUBZPOTdDC%2FVFZ4zyNH5k15iTUlqSbre7NlAjAHaXiOlJX0LPl7q2u6IHK%2FyhEg0heUq%2Bfl6daUTsPRJFSZWsMMDbKe7yHu53eKvXE%2BBnX67fs7vLisV15rGE2OlV5maSQq8JUbbCT8uu5vnTdqlI%2B2gJvuEGmzwZhDu2aTDrZxodBcxN%2FnGy47zYEP7G49K03uvO9VFAx7r3Sp8vMMGMktgV%2FJ%2BBJU&X-Amz-Signature=48b5c5b13b2dc4024bdb34cfc99cd09dddf364cd5bb7801f6301a62ce47a7dcb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QXWK4D2%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T161015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZFIKLeWsYbmJcB1xIJSgi89LfG4S37Wye8iDc3%2FA5fAIhAPTCcuxj%2B0qGj40IwnnrvifIMSZt73Ol%2BEgM8w404JOIKv8DCDAQABoMNjM3NDIzMTgzODA1IgzTVOc%2BkUL9%2BueunB4q3AMOtC9ImnFCWCixEpZz3pkD4CVoYacQKQhJOdFAfg6cKHAadMge7GRdUsYcju3GUO0uOWg0b0WJIjRKXAWyzmyMtkIUN0oTiyA2t74uUMPE%2BtmbaqVpb%2BCxv2VrlSRDfAUOYgJjuuEEbCdvAWcM8K0lZ0BZR%2FWlytLrE%2FU2MCbMImB%2BzlT93TxqmQ3%2BWd2kP0t28rlXR%2Fz58Ct%2B0rEX0HE0q%2Bl4zo5nOZ9tKJw4gkJkvGC8hNyVjuKh3n%2BX%2BZMbHUkIqSOT1G2o7uFElXQnRqjUSxmuBSvOddqoRIl2OCi0rClbDcFYwQbQo%2F36RcsTDzH34ykNyFeS4E%2F7mww71zAf03Sxz2qeeieHWKmNlxZ7%2Fiz104win5oML9rKXJ9hAZJHYvHjhOOybQx064KjXDRVo3Up6%2BRe7GukKvBmPsrvZHmR6GScLoI2clLwkqtW%2FwWP40J%2BCOwLl%2FJOP1QLuu2fBJLwyJ%2Fla25ZdjHum0DaMDgiiirEqCBJtu571BdoV57a10TOd76J3xcFfgAuFhrW5kzg41ipo4RHKXhcoaBcT4Qpvzmgk515k8zePl1QhaxrRLiwMET8oWxPtIuiYmmCpkBXDw2sM3l6nhsPzoddRVBxFpLGTfGzBTWSDzDuza7ABjqkAZqwTpjrQF%2BQF1a%2BVV3SBy45LvKAIB8cGAYNS7AU0RhkOTjDTo7d5OYPjTiXTM3VyQMRH0xJwgIYSoOKDF7%2FreoxI6z1rRzhfizY4gmo9sII%2BHGwc%2FMwXmXuIGdfpY6%2FKrRbF8svHVRIEKf1morHbUrmbBOVYJmDUhX7ml5NhnDz7pKqajj3dE0zNhdARplUEMGJDTfSJd3ifJ1nKy9pUOtAvibV&X-Amz-Signature=281202a900855fdc7e35fa5dbe92e500a5fdd9b11095192c20ec0738ad63951c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UAMERIP%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T161016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH2NoBoMPXYvpzYnq0gMGdzZfoh%2FDMxXfiF6DZ2qIbbzAiAXaDHK3m4SIFdnT4yktXnMUUVlxL2CojZdMfjeROr%2BXSr%2FAwgwEAAaDDYzNzQyMzE4MzgwNSIMK%2BnfQkeou3RCHVxQKtwDN39xo7QxhoKc9x19p%2FjsXiUoVTbYn8Qe7eIH0jsI%2BqOz5iZsJnN370IjXQfsi4AfdQckrw8kVaGkkwh8M%2FjzN75%2FTDdC3I8XLSvyAgfqKWnAbtKVwZrwzWM%2Bn7zJVG5SggS9l5yKhEIZ9YKQxxCn%2BE36OBP2RZRo%2BO7GOVzw%2F%2B70HimYDpuRKZdKxJWwh2CSqX%2FReNEiNBj1miCczZuNmd4N2DGH8190zjxRKIoI39mGQI%2F2LPcOztNIvGOkBG4YHvgDIaBqb6RHYeE5abzMaXlDFHLRsJwylwHpCtzrCa1hlUpvdMvLC2L7r3dtJn7qOLEhDQr7HBpTqsnNtNPQ8f2GeShGeeMc6y2yzcOBjZSMiAUdPBHhoJbffDtkHSZ%2BICUyrwzQUpcQfGsSv0%2BkvBKSEBSAS%2Fyq49Ib2LkFVH02zfILs0mDERFwhdS%2B99cs%2FHR60RBIi59brdrYWh7aT2J%2BnfTZEKPOY5EvVkRxcKqTwFF7MK4JYqBGmW9TPMZ08%2BpWzVDkyFD7wsTCQkIvMrf%2FquP7cbzlLXwNqJVAxB2eidp%2FSIyxlHp9JG9hYvbgsceGxZQJeiGN%2BkzFX5WQubyIzvvyWyykC%2BFyckd4R0%2BkoRrlAtcfoVZvCRcwyc2uwAY6pgFB25N78JHnkCt1GuYLshes92d77T0tDxiY9zM7xFwvKem1MoYixXVg%2FLAgwhspdk6TNo1aicwOJxA%2BqkBoA1f%2BUrfnMT6D2S9395FXBhHk2xMB%2FDVKr%2FleqpBKRxa0PsYcKvycIr6BJLbbyp305b%2FJkYeaxz9wg%2Fp%2BalN3s3ALFCKP%2BzKUaM9whvBYkRfCIC6ixeaDGEFsXZ9jt4Ma%2BxP4mPKBLIAg&X-Amz-Signature=86237131dac213e9aa571f865e4c3da67b171d9f7b3568af5d3b75364e9affd0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZRZPLEM%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T161000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnQR2P7NK%2F9PVLMp%2ByXEVVpme9lZQMmy2AKG1QTtMS1wIgSmeo%2BZTm4%2B88Q5uP8fH5sDLRl9Cm5%2FWoaNt%2BW8KlxeYq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDOkpiC8n6KFuqcoxuyrcA0xhC9nr%2FDGvY42oIDiukjXoSN15OJOGU8qg3tG97gqWqYtiWIQhItanbmxkIB7Pgjv4v9c7IUxi%2B2dL2v%2FuKWX5%2F74g5OKTSM6Syamyz6MWYxbnbA5SMsrzu%2BeCPuzGzjqvjMhdG68zmDx7EACAKEimE3lBMQb3GJhck3jCSeSMm%2F9lsRM7hF4JxyvsO7Wn68SCigM%2FSooElEE5cc31wjWFR%2FSSlSWmAL1%2FlR9P2rWikcl8E3jPPTS7MI8V9v%2BrO9svgG8AQnsnV3Xho7HeTK6uiSotu2l8dCCZJH7F3GI12YuYsq%2FLB3XrJg%2B9B6EVzx%2F8KWs3s4Qp5AIubDiXLJmGfDYXbmBenZLv2TsnhhQo2LvrfF%2B6I5QMBo60TWuQheT%2BOdNbZsuoDd5fGTttPAr5WSO5CMR8n7BC1wutdv7FiNdbnIp2sUSd54xHwuTIHn86beyP5OXFsHxU3NGwBpkRb5llInCRDXH6yF71hjITN5AsI887sFQotEHzDdsfvLjhuXt9nXK%2BmQf0GnfXOP4uncKFO%2FMeAhYf2MiwsV4c%2FWJmd3%2BX4ivAEkWPbk22Q8Hh%2Fv7Ym7bEoyZIYdF35gtaVNeAqBTS1k2UA0CyLF%2BVjYTsr%2FXqSfJ%2BLGfgMMjNrsAGOqUBZPOTdDC%2FVFZ4zyNH5k15iTUlqSbre7NlAjAHaXiOlJX0LPl7q2u6IHK%2FyhEg0heUq%2Bfl6daUTsPRJFSZWsMMDbKe7yHu53eKvXE%2BBnX67fs7vLisV15rGE2OlV5maSQq8JUbbCT8uu5vnTdqlI%2B2gJvuEGmzwZhDu2aTDrZxodBcxN%2FnGy47zYEP7G49K03uvO9VFAx7r3Sp8vMMGMktgV%2FJ%2BBJU&X-Amz-Signature=307dd8321c8086f7a0ea5fb107dca20229cfaa5cde0a621309f8699edce1cb48&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
