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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JJWKDGG%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T230808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEAYTDaxQrRbUvJ6lLqDB0k9AFJTMslcYeXHr8FfIz2pAiEAyUQwZ%2F4fQrHVH1QTbeHazUd8OBsjR6vtTEwrMEZsOSEq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDDMrTw%2Bz6dfFZgvTRSrcA3bMeFfMticRngJ1rnu5nE%2BlP0XZloilSS%2Fvgi5SXLkGYebtz3h7je%2F8VnFFkiqBbF83q7zxGrz8dufZ9uu15GKCW5Oh%2BBwT4MHbw4nam7odxPosxZZiXR6PvysatyNnQZ%2F15D%2BgXtcXeyQwSdle8O8m5h7j71UtJKpJwiEQ3b8DhEBN3R3tMm18IHh%2FrZMPA515gOidmEstatu6%2BrDV3k4%2BESEgiBHcu7UrZJOEQHyxS%2B2G513uEn7mzy8rDFr%2BCROqAVcmm3dDoOOWDIL6nXNdOW1QqQfmsj7z45AmaoqZEU%2B%2FFIs2DCVO%2FCudqeJldEZu%2BlleytZcd8nQbhj8qkXpBBFxWq48Qv2cLsIWigJGBvvIXMIwnz3ZlReHfkj2qLvsGPbollILuGc5jmNZ66bpNk%2FdtDz%2FhOABK1%2B390hT4qIypcOhfBY2j1ZPl5WNtP7fEUyOSEsrfYLH71yLKUDcdsei0DikY7GeHmI%2F814g3EP%2BSN25C3Xb7SL9hmC%2BRGwAhieifSJWS1Y7JVEpShf%2BdXLQGmd5eJ4GEOklRVuYhWCmVvI91I9N%2BO9RnWMBYDvrzk80Js4agkfZCMdeqgliZmcqhikI6AEeXOFKS%2FeqFC%2Fn%2FYquwz7hYO40MM2hl78GOqUBE4dqt74gQuneVA8D0ZlBU7HvC52NumI246YXrJGawf9ZMf1sBIEXKBHvGS40Xes1s0x798yQHHwPKEUSxK5fJve1CMMJg7UwUPAJlA4M3kHXQP5wzbRN%2F254xKzGKSSM%2ByLk9JnwsNFi64AWlviRzREVLgaCK%2BmaMEOCyqhf37WzJBXhYJLK41S9wZerdUoIBKwgzs3VHnWoM%2Bn50Um0PYx9WokC&X-Amz-Signature=0e36f862ed5bf0ee9ed30f297bc564f3578d9c216ea3a2f795c843ddb90d41e5&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JJWKDGG%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T230808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEAYTDaxQrRbUvJ6lLqDB0k9AFJTMslcYeXHr8FfIz2pAiEAyUQwZ%2F4fQrHVH1QTbeHazUd8OBsjR6vtTEwrMEZsOSEq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDDMrTw%2Bz6dfFZgvTRSrcA3bMeFfMticRngJ1rnu5nE%2BlP0XZloilSS%2Fvgi5SXLkGYebtz3h7je%2F8VnFFkiqBbF83q7zxGrz8dufZ9uu15GKCW5Oh%2BBwT4MHbw4nam7odxPosxZZiXR6PvysatyNnQZ%2F15D%2BgXtcXeyQwSdle8O8m5h7j71UtJKpJwiEQ3b8DhEBN3R3tMm18IHh%2FrZMPA515gOidmEstatu6%2BrDV3k4%2BESEgiBHcu7UrZJOEQHyxS%2B2G513uEn7mzy8rDFr%2BCROqAVcmm3dDoOOWDIL6nXNdOW1QqQfmsj7z45AmaoqZEU%2B%2FFIs2DCVO%2FCudqeJldEZu%2BlleytZcd8nQbhj8qkXpBBFxWq48Qv2cLsIWigJGBvvIXMIwnz3ZlReHfkj2qLvsGPbollILuGc5jmNZ66bpNk%2FdtDz%2FhOABK1%2B390hT4qIypcOhfBY2j1ZPl5WNtP7fEUyOSEsrfYLH71yLKUDcdsei0DikY7GeHmI%2F814g3EP%2BSN25C3Xb7SL9hmC%2BRGwAhieifSJWS1Y7JVEpShf%2BdXLQGmd5eJ4GEOklRVuYhWCmVvI91I9N%2BO9RnWMBYDvrzk80Js4agkfZCMdeqgliZmcqhikI6AEeXOFKS%2FeqFC%2Fn%2FYquwz7hYO40MM2hl78GOqUBE4dqt74gQuneVA8D0ZlBU7HvC52NumI246YXrJGawf9ZMf1sBIEXKBHvGS40Xes1s0x798yQHHwPKEUSxK5fJve1CMMJg7UwUPAJlA4M3kHXQP5wzbRN%2F254xKzGKSSM%2ByLk9JnwsNFi64AWlviRzREVLgaCK%2BmaMEOCyqhf37WzJBXhYJLK41S9wZerdUoIBKwgzs3VHnWoM%2Bn50Um0PYx9WokC&X-Amz-Signature=93bda8eb99ebb9c2c6f7da39aeafcc5f7299db5e480df03ab4fe264019973941&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCIJCQNA%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T230810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDACRQ2R4pamOKhpm3TNkp4ES7FgI6OWuHDeXEBm4HaMwIhALmwmgYaijyFpKjjJQKpRvReEPB%2FKm6ZQIUN%2FJRlvpCFKv8DCFAQABoMNjM3NDIzMTgzODA1IgzRwCqC0HSorqkP2Z4q3AMfgvC%2FdE17cIUOmoANHUXH1XSuu4qTL3TxuTT3pPYAYwkZ8m13fL67yD9vMa8H4ZFqlhj3SMW38WcdALx3Zdyw29tKyaO%2FYOAqZtoTGcCiF2uRDnDNpSXssQGFd5l1p%2FF%2BPBEXjBhEOZLjUo3wYJXGvyA2PAC4iY%2FEneV%2FZmLzwN7mgoJSreynOtST1faZtwJSK0r%2FvPm4yQ%2FNDbsNJ1hU8568IyjHzfm6T3RQM%2FX5imkG2UesK%2FuJRewnVg6fuQu3qG4giPhnmGxy8BPbmTgvd8JykY1zLbJfbZJb8HmrDs5ZjsLthiIUJAsLLu6FVEmx032PaOUEXxQsQV9eMBvhTd7cK%2FAFJjSKeFS0JFsTv2VUsPCCcrWa6hBEvEP4fOy3zZ2z3Ggznx%2FR2%2BiT%2BfCOOh%2BH2i39082bzGL2RhyyuelFVtUHlWMWTz1lV7S2Mu%2FayCUN7hXehCTv3dAMe%2FojnrrvNTZsPHkgyokRbLCiP5MgJNJsRSvB97pRcn%2FOJB6YiiF1a8wE7LjLRuVkZa%2FBlDDK7lGHTONJK0%2BAtSS4YMPllj%2BBW0gfOzWx0kyoGQ5aRbSw4coV2GP98L7ZlruHol2M3XuEPnM9tKybIEHdGNlBmDTJAs3Mqv7TgjDEoZe%2FBjqkAa3bCydd%2BdRokLgxzGhjoc9jhNaB8Z0ezrFmBu0ff7WxROmlGy%2BbG7MEjru4dNztPwrQzyHkdOUL1UoCh73nCk7Y5wxsp%2Fy1%2FtPaQbzY8ahDQRju9GyYHmZ%2FLBuILcLBJBhm1pwipB3WZnH0R6YJuKlDideUDC28v0aP%2FMb3qglW9U0NTs8U0AzqPBpEOFu%2FIEzhfo7AfYd%2BqW2jmt%2F%2Bu6yXnYH%2B&X-Amz-Signature=18fc5ed35852ae1edf20645305cefaff086eeffe99c7eac6a33d32fe502ecf17&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2K5IGYE%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T230810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH%2BygQzDF7io7QykW19FJLRa3L1L3a%2BzzCrWrW%2BjevayAiBS4l8no%2FXBFA05HW19FSu6s7GOAsL%2FrhDMwLSx2RQ5Iyr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMAQQIjsXXNOCST9SYKtwDfpsiml9ChzExuKYiFlOsHAo2MauouAWOP%2BRJEoufTeB%2Bd%2FvvTeR0nMjYnPT86fgmCov%2BMEnNpcP5TjCnRScvudsNmnLBN%2FWrDyYPuvKm1RaN4uSttapEDPYtSyTI1%2BlCjDAmqy0RTxT5mmxRz%2FGkxaHBOoBwsW%2BHyjqr4y5TVWvROIKKuOg2pv4ixFSmC5ZvJhGBkGJFGI6J8TRxuVd%2BRPJdRisH90raiExZ%2BnuH0vD1twrU%2FiJCJrYBw3r2Xuwu8fGhZorJ41wxX0bWXgKWeIFCxWl2i6UmA2BLZHd3ANBlBhsNRcCc53FD0hBefbGmkTtcTfTQ91ZvYRCHOUDKM43Yto2%2FYwxnbX1wPNlnnnOdRaNEdv%2BmrmIpUiwrbgKHuwls3blgM%2FJTRnbfj5rxCOMLeS0oFeI8esMC5MiDGgoGSUtr0PwTWQhHDIpjQ7iD5%2BHhgALeiuyuxEHjwTVokHkN2YqDBgjI8mC%2F%2FVjV%2Fk5F6kJqH4lOtDsp2eN9dE924v3s31sc2pynhtxXo8Eh5M3gAol6BWsRopH1rEGDUKIkLur%2BtiHgQ9w4jJW%2Bcd0g8haDQ0SA4Wn5z4i%2BFEZah73fDiGIrwCC5GbIVFKVVBnIBY1dbcT8JMy5%2F1IwmKKXvwY6pgEhHgMqjUzycv%2FcO8ULHzTo8%2Bc%2BXW6RYr8Nvl6ezLIqTxlonT4ViIH6M9umU2X0P7jmJ0hJsomJZt9xNKCgtx%2F2xWJdAt%2BSuMmHFzCtMJJiy7Wz2etLK2UVe%2Bh2J97MbMbgzmJ4cSH0SL4lHjZ9PodbU5UPSg24iOYZMg7WBOBchQWUScDRM7SscGh66Z6y9W%2FOXK5xNeICajEbo5HBAjPAss0fl7zu&X-Amz-Signature=6ff4d15ef97393aa05a1aa16345218f0e8661026c4d67e233df3773e8acace94&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JJWKDGG%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T230808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEAYTDaxQrRbUvJ6lLqDB0k9AFJTMslcYeXHr8FfIz2pAiEAyUQwZ%2F4fQrHVH1QTbeHazUd8OBsjR6vtTEwrMEZsOSEq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDDMrTw%2Bz6dfFZgvTRSrcA3bMeFfMticRngJ1rnu5nE%2BlP0XZloilSS%2Fvgi5SXLkGYebtz3h7je%2F8VnFFkiqBbF83q7zxGrz8dufZ9uu15GKCW5Oh%2BBwT4MHbw4nam7odxPosxZZiXR6PvysatyNnQZ%2F15D%2BgXtcXeyQwSdle8O8m5h7j71UtJKpJwiEQ3b8DhEBN3R3tMm18IHh%2FrZMPA515gOidmEstatu6%2BrDV3k4%2BESEgiBHcu7UrZJOEQHyxS%2B2G513uEn7mzy8rDFr%2BCROqAVcmm3dDoOOWDIL6nXNdOW1QqQfmsj7z45AmaoqZEU%2B%2FFIs2DCVO%2FCudqeJldEZu%2BlleytZcd8nQbhj8qkXpBBFxWq48Qv2cLsIWigJGBvvIXMIwnz3ZlReHfkj2qLvsGPbollILuGc5jmNZ66bpNk%2FdtDz%2FhOABK1%2B390hT4qIypcOhfBY2j1ZPl5WNtP7fEUyOSEsrfYLH71yLKUDcdsei0DikY7GeHmI%2F814g3EP%2BSN25C3Xb7SL9hmC%2BRGwAhieifSJWS1Y7JVEpShf%2BdXLQGmd5eJ4GEOklRVuYhWCmVvI91I9N%2BO9RnWMBYDvrzk80Js4agkfZCMdeqgliZmcqhikI6AEeXOFKS%2FeqFC%2Fn%2FYquwz7hYO40MM2hl78GOqUBE4dqt74gQuneVA8D0ZlBU7HvC52NumI246YXrJGawf9ZMf1sBIEXKBHvGS40Xes1s0x798yQHHwPKEUSxK5fJve1CMMJg7UwUPAJlA4M3kHXQP5wzbRN%2F254xKzGKSSM%2ByLk9JnwsNFi64AWlviRzREVLgaCK%2BmaMEOCyqhf37WzJBXhYJLK41S9wZerdUoIBKwgzs3VHnWoM%2Bn50Um0PYx9WokC&X-Amz-Signature=7f88d5832a19f2e65cb89a9ab2ab9093c8a15bd1f9655ad1fd50e9bb45303d2f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
