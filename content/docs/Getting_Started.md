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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GYRM3WE%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T100853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIB0ODFCUz52Ltk%2BAFYDPxG%2FnpP7GBsZi4UBJKa6nwJazAiAe7jCnXa2O%2FL54Bk%2BP9WzHT9AqtOnRVpPvLf1dNSTIgSqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FbzX4bE8AVZLKD0ZKtwDzxcFYwoLv6aH%2FSn2nVnENmFsGpOYXKQgjKGs2jCk1C0fGGQ0P3rPhbqHQyATu5PULJjKorNu4Onb8PAZgqvdpmWeIUtzGR6XP2GmckUSvJKGps5Gqtibql9wNCVxDiUgCVXSB7pQwQjzDer4apfQHnMQAWM0qPZowW8JuSlERwT0FWr3XVzX4msxCU3wYsd1IQil80qdvityK1ouF9JVtu8SeR1fHBdJe2v8fCbmXE2SyM6egpzwTE7JLtf%2BEo%2BtIl8CY79ynlYsCvAEBfI9%2FqFdJPsd%2FFKMfVKhv6no%2BCj3GCDxe9eQfTbmkIISKYnhaUf%2Bfn%2FyQXNMgrS82S7bvyMpv5HEpsmzc7C0bJxTpvI0ifYiZPe9hVTHDQ0iNc5wVP35QfV4bjKbl%2BwKle0n5xLBNU%2FTB5DDebfnSif4jrthbcW3Arrpjp%2F6w5lFMxUjhb1Fp7cUh415XbdaadpX%2BJ2EDAs5r%2Bh1NNBgCi08TrcpPxn25YwQ4aW65oEn7DiHfvSE8tQGNZMPwhTMeXL8GvlVNThndObQNrqkTShlJr8gAHC8KYuXaZuCPNWUkc1cSovqpT%2F%2BleaPoA%2FM7Ys79yBXYadsAJ3khFtO%2Fzl3AZZ4rEk0gMa7JHUaalQwpsPvwQY6pgFQcbW61UlP6%2F8FqW4VdQWEUNkoTpxg%2FGrugKA8G%2BJF%2B0qtyO5%2FUMUzsMpBgrsirWFTrINEQHMTG93fMWp6uQ9%2BdYs%2FZnaBPVtbI48j4SD1B%2Fe%2BX8zghVGMCbHL7GUfooel8q4tm9%2FPnh25TNuSHeWQNLSL%2B4IUEYbKcS9jQ8UjhI16F%2Bs6l42gLNKcCAqeY7doBbtT9JW4cO46dYu51m1akdevDyeP&X-Amz-Signature=19d009bdf9198f7e1cb32483bb85e1ef37580b42659d6136c7b56f98de7233a1&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GYRM3WE%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T100853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIB0ODFCUz52Ltk%2BAFYDPxG%2FnpP7GBsZi4UBJKa6nwJazAiAe7jCnXa2O%2FL54Bk%2BP9WzHT9AqtOnRVpPvLf1dNSTIgSqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FbzX4bE8AVZLKD0ZKtwDzxcFYwoLv6aH%2FSn2nVnENmFsGpOYXKQgjKGs2jCk1C0fGGQ0P3rPhbqHQyATu5PULJjKorNu4Onb8PAZgqvdpmWeIUtzGR6XP2GmckUSvJKGps5Gqtibql9wNCVxDiUgCVXSB7pQwQjzDer4apfQHnMQAWM0qPZowW8JuSlERwT0FWr3XVzX4msxCU3wYsd1IQil80qdvityK1ouF9JVtu8SeR1fHBdJe2v8fCbmXE2SyM6egpzwTE7JLtf%2BEo%2BtIl8CY79ynlYsCvAEBfI9%2FqFdJPsd%2FFKMfVKhv6no%2BCj3GCDxe9eQfTbmkIISKYnhaUf%2Bfn%2FyQXNMgrS82S7bvyMpv5HEpsmzc7C0bJxTpvI0ifYiZPe9hVTHDQ0iNc5wVP35QfV4bjKbl%2BwKle0n5xLBNU%2FTB5DDebfnSif4jrthbcW3Arrpjp%2F6w5lFMxUjhb1Fp7cUh415XbdaadpX%2BJ2EDAs5r%2Bh1NNBgCi08TrcpPxn25YwQ4aW65oEn7DiHfvSE8tQGNZMPwhTMeXL8GvlVNThndObQNrqkTShlJr8gAHC8KYuXaZuCPNWUkc1cSovqpT%2F%2BleaPoA%2FM7Ys79yBXYadsAJ3khFtO%2Fzl3AZZ4rEk0gMa7JHUaalQwpsPvwQY6pgFQcbW61UlP6%2F8FqW4VdQWEUNkoTpxg%2FGrugKA8G%2BJF%2B0qtyO5%2FUMUzsMpBgrsirWFTrINEQHMTG93fMWp6uQ9%2BdYs%2FZnaBPVtbI48j4SD1B%2Fe%2BX8zghVGMCbHL7GUfooel8q4tm9%2FPnh25TNuSHeWQNLSL%2B4IUEYbKcS9jQ8UjhI16F%2Bs6l42gLNKcCAqeY7doBbtT9JW4cO46dYu51m1akdevDyeP&X-Amz-Signature=80e62b80787aa9bfd26239102ce8d92612ef26a24ece9b377156ce32e1dd9cfe&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GYRM3WE%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T100853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIB0ODFCUz52Ltk%2BAFYDPxG%2FnpP7GBsZi4UBJKa6nwJazAiAe7jCnXa2O%2FL54Bk%2BP9WzHT9AqtOnRVpPvLf1dNSTIgSqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FbzX4bE8AVZLKD0ZKtwDzxcFYwoLv6aH%2FSn2nVnENmFsGpOYXKQgjKGs2jCk1C0fGGQ0P3rPhbqHQyATu5PULJjKorNu4Onb8PAZgqvdpmWeIUtzGR6XP2GmckUSvJKGps5Gqtibql9wNCVxDiUgCVXSB7pQwQjzDer4apfQHnMQAWM0qPZowW8JuSlERwT0FWr3XVzX4msxCU3wYsd1IQil80qdvityK1ouF9JVtu8SeR1fHBdJe2v8fCbmXE2SyM6egpzwTE7JLtf%2BEo%2BtIl8CY79ynlYsCvAEBfI9%2FqFdJPsd%2FFKMfVKhv6no%2BCj3GCDxe9eQfTbmkIISKYnhaUf%2Bfn%2FyQXNMgrS82S7bvyMpv5HEpsmzc7C0bJxTpvI0ifYiZPe9hVTHDQ0iNc5wVP35QfV4bjKbl%2BwKle0n5xLBNU%2FTB5DDebfnSif4jrthbcW3Arrpjp%2F6w5lFMxUjhb1Fp7cUh415XbdaadpX%2BJ2EDAs5r%2Bh1NNBgCi08TrcpPxn25YwQ4aW65oEn7DiHfvSE8tQGNZMPwhTMeXL8GvlVNThndObQNrqkTShlJr8gAHC8KYuXaZuCPNWUkc1cSovqpT%2F%2BleaPoA%2FM7Ys79yBXYadsAJ3khFtO%2Fzl3AZZ4rEk0gMa7JHUaalQwpsPvwQY6pgFQcbW61UlP6%2F8FqW4VdQWEUNkoTpxg%2FGrugKA8G%2BJF%2B0qtyO5%2FUMUzsMpBgrsirWFTrINEQHMTG93fMWp6uQ9%2BdYs%2FZnaBPVtbI48j4SD1B%2Fe%2BX8zghVGMCbHL7GUfooel8q4tm9%2FPnh25TNuSHeWQNLSL%2B4IUEYbKcS9jQ8UjhI16F%2Bs6l42gLNKcCAqeY7doBbtT9JW4cO46dYu51m1akdevDyeP&X-Amz-Signature=8983ccfca656615d514993fb041908762e65d5d0ccb4730b16190a232df6d2e8&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWZY7VGQ%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T100854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIG4Gnq5IPCfW%2F6BNuyaGT5AlIkBbOfwxdeTEtvNcAZvcAiBohNqobZqFhQjO3kpwCpOV1S0q1PHUaXB1Ok44fuZsCiqIBAjS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmKeBAMmRYLAbMuxhKtwDH881%2BVrvn2QpbwgptcQWfxYW1UO4nUnSWHTtAAO9veKaoO09ZawhDNO8AQfwwZ7GGotJI%2BDGYeMoA4gpqJO7vJPaeF8xp7J9G9zeAg98qswioWUCLGAWa2BsPLaCE5Dc9nv%2FAdCq%2F0ENO3K7nMOqDnTLg9uBR5uhFV6uoUdCqIt28yrk%2FjshAQrB4MVQNXTnapkrh2%2BCVkO63XpYM%2BcghdtbxMPj55390Gw5lpSjC4buZXITzJqG6Ni1XFWDSfvM1snC7ql84uF5kwlmF%2Brs8lj%2BJGbopN9FqDwzp9jxAWAWhs6JUh3gmerIUW4pkdIRmO8X%2BEaYkPKu1yqNUNsLASznMfrxvdeG17hgLyFGzPVnZS%2Bt6vS%2FDPrTKXG0u4rqdZC63vDHmHFLhoj1LJ5Ckd2sjBU4ws0PIft0E4J6RVYTPPL6kTzJm%2F200bqIsTFIg7KUWNPW00aXJ%2FT7xsfwMpeJZ2HcIiKN3%2FbcaUy%2FsjDuHMJqEViGJrgEEE3RLgWDV1Pn1fATzbvOV6jbkYB2RlEya1rnZY5fF4erDIelyqzew1Uy7Sc1LNcgKTWFF8yK1cf6g%2FZtE91VFn1QbRNLDw%2BxItN6hg37HmcfvXZ7bVSsvtmXq1XKEL%2B3ZZQwhK7wwQY6pgGVcWn%2FjtZlDqS2aQZtyaJvTU9P21Jr%2FGWHpJcZppnT0y7i2BPnmvdYQkyZYrBQuLCCxKXezr%2F29aoIlC%2BK2Redq82e%2BER4l2rv0jKBKgQKRYlsLMDD8%2Ff8CFML00I7%2FLypQfMank49P1md%2B4%2BLk8VKTsLjIZNXuH80SAH0%2B7rwWUebUIh0IdKO71v5Sf6fkWAxuGHWIyj4pHhyM%2B3v%2B9722RKVQRqt&X-Amz-Signature=6744d7d0bded0122a4e3204cb477ee30071c08ee7bfef16d13a5c3fb6b400778&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R76YDEP5%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T100854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIG2WpcTIH6L5t%2FLqlb8w7t1aTlaC4gCqeV7L3xgHPNBKAiA1gh98ji%2BBA%2BvFcc2FaOpVFNTDZf40gkA%2Ba7u%2BLH8nEiqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMx9PA24bd%2Bw19Yj1mKtwD3g81gL6CBiSx9UL0BdgCRQzjSDRGnIBVtY9LWB3eu9W8zJAmM2GVNtieQxjFGLIqqE%2FLrvNrQ6uzYeQQLItknXwFKeDn0XtijNs7mWQjUENL7TYPLl00lZ%2BJJyFfglBHkzJGroVteCzfK7wFBro4Xd%2FJpB0hpL67ZAp%2BBo4oTWbDxoSnT1zSN%2Brftu1kUzUie%2Br404UCfAPNBZHgFoP5Hj2ktHSyWl1mS29wEomdeNHjfu41wkhB3FXibIAzLdJr9QQvkge8QD9i35U6752F9If8rq3%2BH8LD3Xngij6e6ar2PjuWf5S6yQny9fg4G81Vr4UTdveCLdNW1lph1SR44dyy7YwYfkT6hPVRg6VvOkol7rKjxABoAYt%2FDuX%2FgDmr3tQ1MBAHI6Emsw6XNkDViLvRsYy724xZRI%2F959zvBnnfJB0zy4X7cSfuqyM4mBG3CsoTl9dRkiaLw%2FhMFmAYgyMUSnk4miksYBLMWYVuFw1vuIdROCIs58kUxsuxmNEDYZ%2F%2FcGU9BFpL2j21EhqgcG4xJrEi3O7mmguIqptqdWJXCRIMt12%2F3EvkL6NFdeWXW7RXWi%2BlfNd6FYWBmhghzMV2yhTvCdu3FVyhBaZP2GbNn1tcND39rHsWApcwttzvwQY6pgFd3Yva1ZYPQAj1LpVDrfA%2FY5zbXmp6LC6%2BUAevX0gdWK%2BRu9swFG95CZ9ON%2FHnQjgbSskJIbgWpJ8H5bj3s%2F%2FRfEnb2N3Vl1N9UFydgJST7dxPnsqtbTPHYTFtShx8VfNkpi6MdKk%2BP6KZqKz20syNzw2MQ76Q9IwJ7XIyfXVb8FZMMiBDQypiTFJ589sk7l9S4hBcHBev5SgK6QMnb8cplBGUdUmx&X-Amz-Signature=0dff8d68cffa8198128aa45caa32006282819ddbc2af34b599fbe1172366e2cb&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GYRM3WE%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T100853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIB0ODFCUz52Ltk%2BAFYDPxG%2FnpP7GBsZi4UBJKa6nwJazAiAe7jCnXa2O%2FL54Bk%2BP9WzHT9AqtOnRVpPvLf1dNSTIgSqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FbzX4bE8AVZLKD0ZKtwDzxcFYwoLv6aH%2FSn2nVnENmFsGpOYXKQgjKGs2jCk1C0fGGQ0P3rPhbqHQyATu5PULJjKorNu4Onb8PAZgqvdpmWeIUtzGR6XP2GmckUSvJKGps5Gqtibql9wNCVxDiUgCVXSB7pQwQjzDer4apfQHnMQAWM0qPZowW8JuSlERwT0FWr3XVzX4msxCU3wYsd1IQil80qdvityK1ouF9JVtu8SeR1fHBdJe2v8fCbmXE2SyM6egpzwTE7JLtf%2BEo%2BtIl8CY79ynlYsCvAEBfI9%2FqFdJPsd%2FFKMfVKhv6no%2BCj3GCDxe9eQfTbmkIISKYnhaUf%2Bfn%2FyQXNMgrS82S7bvyMpv5HEpsmzc7C0bJxTpvI0ifYiZPe9hVTHDQ0iNc5wVP35QfV4bjKbl%2BwKle0n5xLBNU%2FTB5DDebfnSif4jrthbcW3Arrpjp%2F6w5lFMxUjhb1Fp7cUh415XbdaadpX%2BJ2EDAs5r%2Bh1NNBgCi08TrcpPxn25YwQ4aW65oEn7DiHfvSE8tQGNZMPwhTMeXL8GvlVNThndObQNrqkTShlJr8gAHC8KYuXaZuCPNWUkc1cSovqpT%2F%2BleaPoA%2FM7Ys79yBXYadsAJ3khFtO%2Fzl3AZZ4rEk0gMa7JHUaalQwpsPvwQY6pgFQcbW61UlP6%2F8FqW4VdQWEUNkoTpxg%2FGrugKA8G%2BJF%2B0qtyO5%2FUMUzsMpBgrsirWFTrINEQHMTG93fMWp6uQ9%2BdYs%2FZnaBPVtbI48j4SD1B%2Fe%2BX8zghVGMCbHL7GUfooel8q4tm9%2FPnh25TNuSHeWQNLSL%2B4IUEYbKcS9jQ8UjhI16F%2Bs6l42gLNKcCAqeY7doBbtT9JW4cO46dYu51m1akdevDyeP&X-Amz-Signature=1875367967fae435a6a9ff5df62250c34db136cce8742b404539199a2221e606&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
