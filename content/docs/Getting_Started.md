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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHV2J6ZE%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T091500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQDqIftaT8TbtcWo2UffyD67Kn5ormNPyzj50oktuj2W%2BQIhAOnDxs%2BfiiJrMThpAD2lu8a4mbwmutXiCEI9LPaHwDJcKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgytegaTRJ0klS9Gl%2FUq3AP7NYxjqqB%2BdzthCI%2F%2BJvtLep9YEoonzyp%2F01tMLteQ%2FjbdTQQLRgJIlFwXZpWdHRpONKc0L4WXRhogswQazWvwFuoZi0ks%2FpxzsDJcf7gPFaF3P0TsRz86nOKSyJfOiomZ8H7AnXnagupKdr9X6Zb44rpEZwtt1v3t6s4fha3vcmRFCtffDV0GpCYFmJoErAqWXo6fTbgwub9o%2FwmMiZHdfZqNg2xzUI4pxgg7zvUoVHtQaJkzbSS96pGi3hiVfKED6Po6oOSqpDG445%2BNv5587HlH6e0cKhlSR%2Fb4J4GxWmwiYGOtOnb6VU2cpNnwqj3MVSmfMmEbNMK4kYmYxp3py%2FKoUAsSYoIvfdfp1ahzPpI2v8D%2BPv%2FGKi9fBgYSoqEqcW%2BHx5GV%2Fg0pFNDgAxvvfGBaStxLEkcTiwKIWG5JeiNj6sbs2n8JQln9s2iKKfjRHeX32xUDDgX7mQuwao%2BANg%2FB6ib1NYX6gQChk78VDQ8SlZ0FI8%2BvAmnezKhiy9xxs2rtJ528P%2BsvYX1ecKpsCso%2BOSaMpnKsQvTF7meaYT98DwtGSpawAjELKIH1%2BJ6ev0yJKwbrnJEIoUpDQ5k04sll19gNkooh7j0J6Q%2B1yrDreG5POQX45m%2BFdDCzg6LEBjqkAatmucjMJ217YJVyHHHnUauFXWbCFZ7dF5P5emYbP2VcTZfaIVjHVTOUrUu00b5NaeIEWlipMmZGtm9mwO0DrwpurK3eioMTc%2FTiFzgjdXXgP%2FcrOmikDs0L9GHOqGshSqqkgGXhJBMCF37JrS%2F2V5G1xCZ7arNhSFV3K2ls1afZHKFE6WOX61wMb4iedK710K9wQU9mGeJ8S%2BQxJnsvZju4ftJM&X-Amz-Signature=e66e5a9fb4274d7ec36f9a6044e959fd5f6107598130176a8b7f9a81f01846dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHV2J6ZE%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T091500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQDqIftaT8TbtcWo2UffyD67Kn5ormNPyzj50oktuj2W%2BQIhAOnDxs%2BfiiJrMThpAD2lu8a4mbwmutXiCEI9LPaHwDJcKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgytegaTRJ0klS9Gl%2FUq3AP7NYxjqqB%2BdzthCI%2F%2BJvtLep9YEoonzyp%2F01tMLteQ%2FjbdTQQLRgJIlFwXZpWdHRpONKc0L4WXRhogswQazWvwFuoZi0ks%2FpxzsDJcf7gPFaF3P0TsRz86nOKSyJfOiomZ8H7AnXnagupKdr9X6Zb44rpEZwtt1v3t6s4fha3vcmRFCtffDV0GpCYFmJoErAqWXo6fTbgwub9o%2FwmMiZHdfZqNg2xzUI4pxgg7zvUoVHtQaJkzbSS96pGi3hiVfKED6Po6oOSqpDG445%2BNv5587HlH6e0cKhlSR%2Fb4J4GxWmwiYGOtOnb6VU2cpNnwqj3MVSmfMmEbNMK4kYmYxp3py%2FKoUAsSYoIvfdfp1ahzPpI2v8D%2BPv%2FGKi9fBgYSoqEqcW%2BHx5GV%2Fg0pFNDgAxvvfGBaStxLEkcTiwKIWG5JeiNj6sbs2n8JQln9s2iKKfjRHeX32xUDDgX7mQuwao%2BANg%2FB6ib1NYX6gQChk78VDQ8SlZ0FI8%2BvAmnezKhiy9xxs2rtJ528P%2BsvYX1ecKpsCso%2BOSaMpnKsQvTF7meaYT98DwtGSpawAjELKIH1%2BJ6ev0yJKwbrnJEIoUpDQ5k04sll19gNkooh7j0J6Q%2B1yrDreG5POQX45m%2BFdDCzg6LEBjqkAatmucjMJ217YJVyHHHnUauFXWbCFZ7dF5P5emYbP2VcTZfaIVjHVTOUrUu00b5NaeIEWlipMmZGtm9mwO0DrwpurK3eioMTc%2FTiFzgjdXXgP%2FcrOmikDs0L9GHOqGshSqqkgGXhJBMCF37JrS%2F2V5G1xCZ7arNhSFV3K2ls1afZHKFE6WOX61wMb4iedK710K9wQU9mGeJ8S%2BQxJnsvZju4ftJM&X-Amz-Signature=4b6b47a5c55fcb64d2cbe350647c24b2a2049901261e8c1d049bfc927aa2a179&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHV2J6ZE%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T091500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQDqIftaT8TbtcWo2UffyD67Kn5ormNPyzj50oktuj2W%2BQIhAOnDxs%2BfiiJrMThpAD2lu8a4mbwmutXiCEI9LPaHwDJcKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgytegaTRJ0klS9Gl%2FUq3AP7NYxjqqB%2BdzthCI%2F%2BJvtLep9YEoonzyp%2F01tMLteQ%2FjbdTQQLRgJIlFwXZpWdHRpONKc0L4WXRhogswQazWvwFuoZi0ks%2FpxzsDJcf7gPFaF3P0TsRz86nOKSyJfOiomZ8H7AnXnagupKdr9X6Zb44rpEZwtt1v3t6s4fha3vcmRFCtffDV0GpCYFmJoErAqWXo6fTbgwub9o%2FwmMiZHdfZqNg2xzUI4pxgg7zvUoVHtQaJkzbSS96pGi3hiVfKED6Po6oOSqpDG445%2BNv5587HlH6e0cKhlSR%2Fb4J4GxWmwiYGOtOnb6VU2cpNnwqj3MVSmfMmEbNMK4kYmYxp3py%2FKoUAsSYoIvfdfp1ahzPpI2v8D%2BPv%2FGKi9fBgYSoqEqcW%2BHx5GV%2Fg0pFNDgAxvvfGBaStxLEkcTiwKIWG5JeiNj6sbs2n8JQln9s2iKKfjRHeX32xUDDgX7mQuwao%2BANg%2FB6ib1NYX6gQChk78VDQ8SlZ0FI8%2BvAmnezKhiy9xxs2rtJ528P%2BsvYX1ecKpsCso%2BOSaMpnKsQvTF7meaYT98DwtGSpawAjELKIH1%2BJ6ev0yJKwbrnJEIoUpDQ5k04sll19gNkooh7j0J6Q%2B1yrDreG5POQX45m%2BFdDCzg6LEBjqkAatmucjMJ217YJVyHHHnUauFXWbCFZ7dF5P5emYbP2VcTZfaIVjHVTOUrUu00b5NaeIEWlipMmZGtm9mwO0DrwpurK3eioMTc%2FTiFzgjdXXgP%2FcrOmikDs0L9GHOqGshSqqkgGXhJBMCF37JrS%2F2V5G1xCZ7arNhSFV3K2ls1afZHKFE6WOX61wMb4iedK710K9wQU9mGeJ8S%2BQxJnsvZju4ftJM&X-Amz-Signature=5ee35688e436894b0d856419a1312de8778231d64b6263e0037069b03b5dd0f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MJJKCRU%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T091504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQCA2pWrMXfDm3q5kaLu9wFOjDmB9IMTcTQ2MCyn%2BJM2gQIhALXzkH3elhUIjCYCoOiq5eFRo5v33l6f4Mn%2Fx5Y6IPL%2BKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw0xB3BhQUbn%2Fhr5usq3APAbvOU5dw10AvMz29AS1immqOsOBQpC%2Bap8YznMqKRmhiZRioFVdTnW6NYuQJ%2Bmwn4vjqpLBhqIDmyN3phegDvHs9BGvZnlAGxkI80GRuAxkbltUaHHQ81cP5vWGOrnFzQQRtj6irBoskyjLCwpWcctut5wgFWt6eZKswsAa4qFZt9HbU7uuinAWIBrj0EKf1Z%2FwvPAoqWsiW9ZbuNi3bdhLMCpC5HMjJUnOf0Pv41BRm70bM9%2F%2FQzSWj0vVMoE%2BOQZGnOrogCbTZJbVwuXIaFjzjICF9BayxKsSrsRYDHTzj3Rw%2BwRP34PSN2A4pqmADCHxxQGMwIbLaB8aasYiGQJYOaR%2B23BbFQBGaJa6K%2F%2FPR0wIjVUNouOHITQge7LYEYOuij1qVO1lX2PBGPtSad57HfHpC3LiMi94y4owlddWLXlWDz7%2B3sqbAYrJImCnp%2BH11Za%2BFO6ylg8hYfCYO6Mfu4Ib5o%2FNbhTIoWCw74IYVS1Y6bmWtZiCo3Yi60zRgncriKkrzfJxZMl1yfVNa7wMVL55QKwzf%2FQLNvS7ryUNNmPRJXkx2GmQkBbC5FMqpBoWAzPUa1R7VKUj13t%2B0yJdgnqc8AWl1ySvxqexHzhEyR0SgJV8FUbjgiOTDGhKLEBjqkAaiHJqvyHFa1GClhNmOVvF9yzQfnGePcWLtUit%2FldEb%2BUeIzLKBQWcFQYiOYdXSBDsE4vwJWOvOUiDfQ5VhU4QZRfMQj9LnePFb6qcmIPwwQVEKUsk5vq3MBh9VNG4piBqwbwmA83xIaQsXaT3RV43gQV8%2FFw5jSnk6IntXtTK%2BJIXpGWEEngbLeMmQk9EQ8y4j%2FrfdCkqAQEWjLfNIlI9FYpkRO&X-Amz-Signature=5bd3c1ca7960046a0a23f8df7fd82e5de03b64bd2e80efa38c9995f7234bbf0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V32PHSUI%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T091504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQDStOMH%2BBVq%2BvxwI1gREaVB1KbKOdQx2BNvt1hTvWkiLwIgTnzMTdM9onnie%2BUTghqn1wkHpcyUxEhrT9%2BK7ZfU5Z0qiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNoMojykVKf0LSWC2SrcAyTl9Eb58jkRJGq6p9krU7IqOdUUE0pjIFb9L3wc2ppZn%2Ff84JQaWhfRPwp6iGO9rodoYuFG6demBdzsaYrB7qdWvToac6Ei79dbq6gfzSLxXkNKbfQEv3%2B1bXWyjAH4K%2FOo958dxfFfWqh%2BfxrPjhzruT5iJS9z0JdT9p%2BWF%2Bu0h0F5qLaG2EWv8FmhpjD8TbfILDewk1JsewfTwgsPlboKkyu9cEHRATj6Sn33YhA09NMKhoA7SB3Yyef5Wo29BGw3XK%2B6y4WTsyrW2z9VFwM1Kp92MsDmGRiqDkOGh%2BWJyu1Pk5f2M16tQqfvPo5OcQAmO8F3O62TlNND6gemJFSndpwYaAoPmz7WhfFylaMfhOsMgAXBV8xVhZcV3fL6d56y%2FSQpdZdaAXrMVp6%2FvrChgAH6cvpi1XtuE0otEOTuTExwZ0N05EeC0PeHf8e%2FxMnKO1rYpxpLn56Dx61ukYLVmyMlxWs%2FvpMJKowDNcaAlAWKK4XJqLitCosp6e5vC33Vr3xiX5ETubYQVxHlq9reXe2vR7U5PkJ43Ctdm4asJMpxnk2roDVOwJWaeUvy0p%2B7%2FVckIjj%2FmJVWQsHjpE%2F0StyVsMiAA%2FgeKr%2F026mRcrYz1t2USV%2B7A5yuMJyDosQGOqUBoAyVUoajTUk8t6IQTsLj24e73oc1Rzkoq2HBV6QZYqTWo7YCVYYSVYCS1oAFBEI1Y5heC5NLy7o%2BrUL05jnjwjp8WPehC2X5jNE61jUVYW5uS8%2FjateSOwJjhsF6NVsxNfRYZnkeZwpbVgXAghmRnqneWutoYKZ5JLGr7vznuO4LDjyNNRY35xVK%2F%2Bccr31XP19NS4WrlgdI8S%2FCKOn%2BqVty74qy&X-Amz-Signature=b9919e909ea471d5b831122f640df9ee554c6428d50d224de1e20b6e44fec167&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHV2J6ZE%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T091500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQDqIftaT8TbtcWo2UffyD67Kn5ormNPyzj50oktuj2W%2BQIhAOnDxs%2BfiiJrMThpAD2lu8a4mbwmutXiCEI9LPaHwDJcKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgytegaTRJ0klS9Gl%2FUq3AP7NYxjqqB%2BdzthCI%2F%2BJvtLep9YEoonzyp%2F01tMLteQ%2FjbdTQQLRgJIlFwXZpWdHRpONKc0L4WXRhogswQazWvwFuoZi0ks%2FpxzsDJcf7gPFaF3P0TsRz86nOKSyJfOiomZ8H7AnXnagupKdr9X6Zb44rpEZwtt1v3t6s4fha3vcmRFCtffDV0GpCYFmJoErAqWXo6fTbgwub9o%2FwmMiZHdfZqNg2xzUI4pxgg7zvUoVHtQaJkzbSS96pGi3hiVfKED6Po6oOSqpDG445%2BNv5587HlH6e0cKhlSR%2Fb4J4GxWmwiYGOtOnb6VU2cpNnwqj3MVSmfMmEbNMK4kYmYxp3py%2FKoUAsSYoIvfdfp1ahzPpI2v8D%2BPv%2FGKi9fBgYSoqEqcW%2BHx5GV%2Fg0pFNDgAxvvfGBaStxLEkcTiwKIWG5JeiNj6sbs2n8JQln9s2iKKfjRHeX32xUDDgX7mQuwao%2BANg%2FB6ib1NYX6gQChk78VDQ8SlZ0FI8%2BvAmnezKhiy9xxs2rtJ528P%2BsvYX1ecKpsCso%2BOSaMpnKsQvTF7meaYT98DwtGSpawAjELKIH1%2BJ6ev0yJKwbrnJEIoUpDQ5k04sll19gNkooh7j0J6Q%2B1yrDreG5POQX45m%2BFdDCzg6LEBjqkAatmucjMJ217YJVyHHHnUauFXWbCFZ7dF5P5emYbP2VcTZfaIVjHVTOUrUu00b5NaeIEWlipMmZGtm9mwO0DrwpurK3eioMTc%2FTiFzgjdXXgP%2FcrOmikDs0L9GHOqGshSqqkgGXhJBMCF37JrS%2F2V5G1xCZ7arNhSFV3K2ls1afZHKFE6WOX61wMb4iedK710K9wQU9mGeJ8S%2BQxJnsvZju4ftJM&X-Amz-Signature=74e63e733a9cbc402d065a0e921065fbd9c8c0ab4fd97a3141367d52a60033de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
