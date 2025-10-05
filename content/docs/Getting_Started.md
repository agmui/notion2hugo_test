---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2025-08-20T08:32:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2025-08-20T08:32:00.000Z"
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

[intro_to_CV](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_cv/cv_setup/)

## ROS guide:

[intro_to_ROS2](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/getting-started-with-ros2/)

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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663J57MLHO%2F20251005%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251005T013821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDRPgFwpoZF5DsXKxvr6tECGN3RqeqMFRiDocpMaHPCGAiA97Wt4bXmJ%2BwrLy%2Bmp7ECpB51BDliJlNGegKDycIA4nCr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMr1wHgJk27aglbwsjKtwDr3%2FDWhe1iiQoozIxfBhdGUoz0ennW70XnAYbLQDaiaSuJq9YZeMiBAQRkELp%2B%2FUfOP4E2G8PEYihcul4GUhlWXOU0%2FW6a%2BODMJtL8hrRtASWvjgF2hBifbufh9oztASzse6Xng6sSYRuYhkBSnHu%2FYZw1UXBmpy4GTHhusyxhcjpYgal9hgB1gR5qYGPIjKSH9AlJmLglOiDbmvXCDB7gvrK7JkR6%2BrT%2F4cRm3CmEuk6sKrxUc%2FamIUfMfhg1iY0YvuASm4DBI%2FAk3hIrU9MJuCfel6maJWcVSkixE9zr5QAbJV%2BlO1PrTk22ag9f3S1Z4Jwq1gadBRHMG0wfoPG%2Fa1hE5hYPJft%2FxSdvNY4A23yJwep1VXKowUp1fLZePOmfmqHhuYz9wSj7z0oKwRvp8YQKralU%2FKdLxlbn6hbNi7VSKsc%2BUKhe%2BdDk30mo1ALQbYOGJ6oa1kQYbcObquS41cJ%2BUGilG3MvkQIF3HIchUIgtINQjYJc%2F0IDPd0w3pXgPS1KT3RWBim0k91GKQa1J%2FVUeumy4i%2FSn0a1HCcWBemGsEvM9xjy9A7Dylc3IqxQWHbW4cYPc0%2B%2FYJrRy4td5ke%2BybpxuC5hbuOA1uRFSaxYdgy4nqYcaMKs2sw6PSGxwY6pgFISM6BTLBiSMtNgccnULZIpaHPeok0sC%2BqRa0BFjrWax88J0ADVtvXXYmx1uep7Gds0S3zno6IhoIxhjD5MVBvEBivm1NEn13px7CSyNssgi5ayIAqlTlsDHoXejTovYVJztFt4Y%2FHmD2jo9OAI4qFaqEFutnqPDKMldkHXz1hzp7%2FZAGOsAmN2RACa6V2CblekaEbIPYFLNk98xlXea5XngXrT01w&X-Amz-Signature=d6505c66daf32e96c12aad3bb37d4117181a64c66c5a56f751c9fad21ccb7cf4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663J57MLHO%2F20251005%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251005T013821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDRPgFwpoZF5DsXKxvr6tECGN3RqeqMFRiDocpMaHPCGAiA97Wt4bXmJ%2BwrLy%2Bmp7ECpB51BDliJlNGegKDycIA4nCr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMr1wHgJk27aglbwsjKtwDr3%2FDWhe1iiQoozIxfBhdGUoz0ennW70XnAYbLQDaiaSuJq9YZeMiBAQRkELp%2B%2FUfOP4E2G8PEYihcul4GUhlWXOU0%2FW6a%2BODMJtL8hrRtASWvjgF2hBifbufh9oztASzse6Xng6sSYRuYhkBSnHu%2FYZw1UXBmpy4GTHhusyxhcjpYgal9hgB1gR5qYGPIjKSH9AlJmLglOiDbmvXCDB7gvrK7JkR6%2BrT%2F4cRm3CmEuk6sKrxUc%2FamIUfMfhg1iY0YvuASm4DBI%2FAk3hIrU9MJuCfel6maJWcVSkixE9zr5QAbJV%2BlO1PrTk22ag9f3S1Z4Jwq1gadBRHMG0wfoPG%2Fa1hE5hYPJft%2FxSdvNY4A23yJwep1VXKowUp1fLZePOmfmqHhuYz9wSj7z0oKwRvp8YQKralU%2FKdLxlbn6hbNi7VSKsc%2BUKhe%2BdDk30mo1ALQbYOGJ6oa1kQYbcObquS41cJ%2BUGilG3MvkQIF3HIchUIgtINQjYJc%2F0IDPd0w3pXgPS1KT3RWBim0k91GKQa1J%2FVUeumy4i%2FSn0a1HCcWBemGsEvM9xjy9A7Dylc3IqxQWHbW4cYPc0%2B%2FYJrRy4td5ke%2BybpxuC5hbuOA1uRFSaxYdgy4nqYcaMKs2sw6PSGxwY6pgFISM6BTLBiSMtNgccnULZIpaHPeok0sC%2BqRa0BFjrWax88J0ADVtvXXYmx1uep7Gds0S3zno6IhoIxhjD5MVBvEBivm1NEn13px7CSyNssgi5ayIAqlTlsDHoXejTovYVJztFt4Y%2FHmD2jo9OAI4qFaqEFutnqPDKMldkHXz1hzp7%2FZAGOsAmN2RACa6V2CblekaEbIPYFLNk98xlXea5XngXrT01w&X-Amz-Signature=9f9389b165865aa0f7016fa5683c4bc6ae6404dd033ecfd2cc89bd4e85134cd9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663J57MLHO%2F20251005%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251005T013821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDRPgFwpoZF5DsXKxvr6tECGN3RqeqMFRiDocpMaHPCGAiA97Wt4bXmJ%2BwrLy%2Bmp7ECpB51BDliJlNGegKDycIA4nCr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMr1wHgJk27aglbwsjKtwDr3%2FDWhe1iiQoozIxfBhdGUoz0ennW70XnAYbLQDaiaSuJq9YZeMiBAQRkELp%2B%2FUfOP4E2G8PEYihcul4GUhlWXOU0%2FW6a%2BODMJtL8hrRtASWvjgF2hBifbufh9oztASzse6Xng6sSYRuYhkBSnHu%2FYZw1UXBmpy4GTHhusyxhcjpYgal9hgB1gR5qYGPIjKSH9AlJmLglOiDbmvXCDB7gvrK7JkR6%2BrT%2F4cRm3CmEuk6sKrxUc%2FamIUfMfhg1iY0YvuASm4DBI%2FAk3hIrU9MJuCfel6maJWcVSkixE9zr5QAbJV%2BlO1PrTk22ag9f3S1Z4Jwq1gadBRHMG0wfoPG%2Fa1hE5hYPJft%2FxSdvNY4A23yJwep1VXKowUp1fLZePOmfmqHhuYz9wSj7z0oKwRvp8YQKralU%2FKdLxlbn6hbNi7VSKsc%2BUKhe%2BdDk30mo1ALQbYOGJ6oa1kQYbcObquS41cJ%2BUGilG3MvkQIF3HIchUIgtINQjYJc%2F0IDPd0w3pXgPS1KT3RWBim0k91GKQa1J%2FVUeumy4i%2FSn0a1HCcWBemGsEvM9xjy9A7Dylc3IqxQWHbW4cYPc0%2B%2FYJrRy4td5ke%2BybpxuC5hbuOA1uRFSaxYdgy4nqYcaMKs2sw6PSGxwY6pgFISM6BTLBiSMtNgccnULZIpaHPeok0sC%2BqRa0BFjrWax88J0ADVtvXXYmx1uep7Gds0S3zno6IhoIxhjD5MVBvEBivm1NEn13px7CSyNssgi5ayIAqlTlsDHoXejTovYVJztFt4Y%2FHmD2jo9OAI4qFaqEFutnqPDKMldkHXz1hzp7%2FZAGOsAmN2RACa6V2CblekaEbIPYFLNk98xlXea5XngXrT01w&X-Amz-Signature=cb53369f4c20242e38cc3183387272bbda02f93b91e6044c872db8afec3dd186&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TLRPH6B%2F20251005%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251005T013823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC3gdx87WK2hu3BUMMjzx9ne0rKaNTnqRnqKJIoEZDQfAiAo3V8dcmVnrzIXv0hgmzEK0heA3%2FiQDS96%2FIPHnpOzyir%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMMcKb0h60E6o4ZASsKtwDH9vGZyQ1TIU5w3UK7qTAksPOOILW6cVlIC2JBQt6DN4tQtHAcMqr8jJVqOsPsSZBOT%2FPLvnZRb9mLtm9TkbqvMQ0%2BzGGH%2FKIZPQPtKsxfUrPzclNWsbDuMyaXXT%2FE6se3AUUUHCTTm5F4rNJxn0nx39L6u8FE6CbOBmsR7cd6NwhT9SgDAnDt5HlRZzhnTMhTQHOptRsL8wiVRUmPDkxfl8M7RiJuoviNsKyOGn9oZO7%2FedxnWxT%2FeMmF3YWxoo85nGn5ly0Se24l53H5gh27EP%2F6y8UM%2F7w6x69xOJhBFbCpBGnw5srN8i91BUHTS7XvgJMqTv6OSpdcmcL9YY9EMqmrCRx8E%2FkBUQPB%2F28Q3q9NmVzIqej%2FhOXZIQIbQ8LryLmtnZHs8GO5oS1wO9uTKGwxaKsa8wQg0W691bod1e0UPxWLW6NiFT7FPILEOjTwIWCcUPIGcCAGG%2BaqzUI2oY7k6FVIwpRbgzGzAa6t2oaqtq9U%2Fvvtk7yWn9Cu0Ijzg2AYqarDvcnxX8ZqOfuSZ9wxfsWgdNLndvDPdvr%2Fq46RT94EdjjIMQQK5liEiEZd97zgRFGQ6m6ggcKY8vdQTau%2FPSaXxkn59HO1KmX910qrBqMwL2pjb2bj5Uwi%2FWGxwY6pgF0mYX5cbCLzgYqVLTN7UJGhWvzeijHU7MFyUMQa98mBNoxiwFITH8AGbZ4Ak22%2BuyvWsivPWM%2BIYuyOxi0AMv1%2FYop3W%2Fhl%2BP1hkK%2FDAfl5%2FgcUvhMUym61TQdJ5zhz6RI6MG7QJp57QV4AVwp5O6qJXFXYiLjePl%2FUtBoOpdZADCRRNmrs7z4iUnYZgrdcFM%2Fb0ZnAZb5vlwdVg8x9txhC8pF4VxX&X-Amz-Signature=691bc0218eb3ff6ebf5f1a9336164e488d7497e1aaf069658c59df3b568dee5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WWVLMVN%2F20251005%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251005T013823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHzgK2OiuV98RsFDfJpiIGS4rWVOlFjJ8%2FK1xhvfhqooAiEAk2gcV%2FVxwALgDOGldCdMEGzwUoJzjvV3QiwZnveQwQMq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDHX3jy1fJowkj3Yh8yrcA8hIOF2jhvB0qL%2FX6m3F8LQv7Rg1s%2Bu%2FxWsLM4fpT%2F4s%2BbSOjsIkxt%2FzvWAY03Tjb2w2N6b6jWVbJzKt34Fuotn1nBBaQbQg0YCVdFYmIO96pzPbbbx%2BZh57DEVfI0qSms4spOYxtW3N7YnlHlxtuHtJwXhE5mKED0EwKL92cPhOHfWrNf8%2BxhLIXs4CkJv5M1F3o3KDrrnqXkJc0gpnAKt%2FCntuPxZXXAe3ZVGNPwHyhi8mrL541p%2B5WCni8ulYe60C5LnpOaQukhUrJYk33wKdSXMIzFtIb%2B8b0edpv85sMruTk88gdkM3tzhwYALCr05dSscKOkV%2Bt3FWS01YylAAyMoCwHdfO7iYJfqoXP8hz6e1fxwNbBnjXMaFPnrvcSz3d2LC7bLUqc8DDHtmpruDvsDjRWV92DP0EcDMO145bZ1KRWj4XPzQGKn9AnUOQus4aDze9S2fDOVP6hKur4C0zCnNxxPirRTm2WpFcw1Cs16v%2BIl1RXhyurKyvLlKVpkvq7%2F3%2FHvAObpn%2FR4Hfj25TKtC8%2FZL2fNXxnWLcIg%2FQWCcSUjydxEe3jXAEfr8bmzaiFrCuSWohjfOKHyy86DIc3wmzqkrgXpLs5grD36kz%2F0o6nNYH5QqwRuJMOr0hscGOqUB%2Bydu4ZtIyxs5kpjuvfObwHaoNLrQ4HV0pSz%2FblYjwxWKR1IZzCZOcQLTuD8eJ%2F6lwldMv%2BBz9UUnOxMqKNCjQW0x3xJjUu5NE591Q%2Fa%2BSySGkA6ZcF0XsQAQXycJb6Cgg9ThzFdudQPxZ4Q%2FntSONrWPTCbZAbbWs%2F7bqM7du%2BdrCpAcHGb0v%2B%2BDmnUqvSHhArTeGDCBi1f2XwSkw73dnrXrPaeD&X-Amz-Signature=166a8d9e246a5b6ee0162b6da49e645c34f2448c89a474f54d4a2c9afb83b6b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663J57MLHO%2F20251005%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251005T013821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDRPgFwpoZF5DsXKxvr6tECGN3RqeqMFRiDocpMaHPCGAiA97Wt4bXmJ%2BwrLy%2Bmp7ECpB51BDliJlNGegKDycIA4nCr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMr1wHgJk27aglbwsjKtwDr3%2FDWhe1iiQoozIxfBhdGUoz0ennW70XnAYbLQDaiaSuJq9YZeMiBAQRkELp%2B%2FUfOP4E2G8PEYihcul4GUhlWXOU0%2FW6a%2BODMJtL8hrRtASWvjgF2hBifbufh9oztASzse6Xng6sSYRuYhkBSnHu%2FYZw1UXBmpy4GTHhusyxhcjpYgal9hgB1gR5qYGPIjKSH9AlJmLglOiDbmvXCDB7gvrK7JkR6%2BrT%2F4cRm3CmEuk6sKrxUc%2FamIUfMfhg1iY0YvuASm4DBI%2FAk3hIrU9MJuCfel6maJWcVSkixE9zr5QAbJV%2BlO1PrTk22ag9f3S1Z4Jwq1gadBRHMG0wfoPG%2Fa1hE5hYPJft%2FxSdvNY4A23yJwep1VXKowUp1fLZePOmfmqHhuYz9wSj7z0oKwRvp8YQKralU%2FKdLxlbn6hbNi7VSKsc%2BUKhe%2BdDk30mo1ALQbYOGJ6oa1kQYbcObquS41cJ%2BUGilG3MvkQIF3HIchUIgtINQjYJc%2F0IDPd0w3pXgPS1KT3RWBim0k91GKQa1J%2FVUeumy4i%2FSn0a1HCcWBemGsEvM9xjy9A7Dylc3IqxQWHbW4cYPc0%2B%2FYJrRy4td5ke%2BybpxuC5hbuOA1uRFSaxYdgy4nqYcaMKs2sw6PSGxwY6pgFISM6BTLBiSMtNgccnULZIpaHPeok0sC%2BqRa0BFjrWax88J0ADVtvXXYmx1uep7Gds0S3zno6IhoIxhjD5MVBvEBivm1NEn13px7CSyNssgi5ayIAqlTlsDHoXejTovYVJztFt4Y%2FHmD2jo9OAI4qFaqEFutnqPDKMldkHXz1hzp7%2FZAGOsAmN2RACa6V2CblekaEbIPYFLNk98xlXea5XngXrT01w&X-Amz-Signature=e52eb5bdb1a3e38f8bb4b889688612d6bbd09837202f24ff46822d42a5b371d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
