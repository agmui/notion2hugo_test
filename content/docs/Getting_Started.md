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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637DKIQXE%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T170728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC5Pd1W7cAUdFHkxCU8wKLmbzK1%2FXhLWMnoz9QOa%2FMpWAiAKTPBwYskd0S8rwkwYYX6qNO2HJt4%2BCTmbmqns93n5qir%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMtSAo4l%2F3VqgW4lLCKtwD9nGEEHu2SKNJqLnnzstcBa6WpehOe8ColKUFlGXOFhF0BajgQBc%2FUuUDN9K4hhTeYzeNlcFoneBnj%2BJUqKwIdc9OeigXNkDWTdGhx7Oux321IJ2rmuyc4ZTMscc%2Bpb0lhdYg5aBW4nqjOU0XqsfxKWtZUR9yt4y9EYW09VchOl8qmIYjVKKt8Ty%2F%2FMKL7ZxCYGa%2FOAgnIq4wys2RMsxTMHBjuyGJVigRlO1uhd8ufjYHOH4shTbF3ugcVkAu6fOHD7U3XbzIGPWIH1OaxW3xDZPFrmzj8yMX8g0OLZhb97TAgwb8R6ZETd%2FtCHTVgpeKwSAqLXHcyVZdiU%2B%2B3itrV%2BpNHmqlsru3qXyrH2xbmxLYrbtu2tz6hGDEwKVpeURlsWRjKaIUn6WS8kWMNEVAfXLsd8uzBzs8qxts6nqHQ0aZEVogOktoFE9f7AdTO3w9TFsHDXBco%2FrAIfxNcbqmKxxCT4SUPX6r8D32zyZ0sFbrfia5SmAZ4JcaEPRi%2FBobwcjpuzp3SYZ18GabIQWUOCVvG7sa7Yix9pmT3MkBrnt%2Bejl%2FsoJTR8A27zIVAdbKXup2jEDdxwTLYVoNhieugNvQybzme5bymf%2B2PcROwx9zeJ2qtbf9hFhubj4wzIT6vwY6pgHSTxWrJxkZ7aCS4HbTgP%2Fx3v0dULQHa%2F1tISoY62nlVgrpQVoatIO4JPw8A6jixNQLnH95MTwXwKTGbyhnTnkGCjoNiUU1vIpmhYTlYDs9BxpFM2LeerGAcwssipTcmQ7KZ4kS%2Fzvb%2BfqTIvVn88Ym5QZmSABnkyJMogFnhqjTMv%2BoUJDX3cXh5x%2BQTQJf5qypcXEOe0F7NybcesG%2Bg9CZHhZkikGG&X-Amz-Signature=bf94c5fa90f41c9674a13b135ca8955d81e7d8f4b06fa66edc261f51cc083772&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637DKIQXE%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T170728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC5Pd1W7cAUdFHkxCU8wKLmbzK1%2FXhLWMnoz9QOa%2FMpWAiAKTPBwYskd0S8rwkwYYX6qNO2HJt4%2BCTmbmqns93n5qir%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMtSAo4l%2F3VqgW4lLCKtwD9nGEEHu2SKNJqLnnzstcBa6WpehOe8ColKUFlGXOFhF0BajgQBc%2FUuUDN9K4hhTeYzeNlcFoneBnj%2BJUqKwIdc9OeigXNkDWTdGhx7Oux321IJ2rmuyc4ZTMscc%2Bpb0lhdYg5aBW4nqjOU0XqsfxKWtZUR9yt4y9EYW09VchOl8qmIYjVKKt8Ty%2F%2FMKL7ZxCYGa%2FOAgnIq4wys2RMsxTMHBjuyGJVigRlO1uhd8ufjYHOH4shTbF3ugcVkAu6fOHD7U3XbzIGPWIH1OaxW3xDZPFrmzj8yMX8g0OLZhb97TAgwb8R6ZETd%2FtCHTVgpeKwSAqLXHcyVZdiU%2B%2B3itrV%2BpNHmqlsru3qXyrH2xbmxLYrbtu2tz6hGDEwKVpeURlsWRjKaIUn6WS8kWMNEVAfXLsd8uzBzs8qxts6nqHQ0aZEVogOktoFE9f7AdTO3w9TFsHDXBco%2FrAIfxNcbqmKxxCT4SUPX6r8D32zyZ0sFbrfia5SmAZ4JcaEPRi%2FBobwcjpuzp3SYZ18GabIQWUOCVvG7sa7Yix9pmT3MkBrnt%2Bejl%2FsoJTR8A27zIVAdbKXup2jEDdxwTLYVoNhieugNvQybzme5bymf%2B2PcROwx9zeJ2qtbf9hFhubj4wzIT6vwY6pgHSTxWrJxkZ7aCS4HbTgP%2Fx3v0dULQHa%2F1tISoY62nlVgrpQVoatIO4JPw8A6jixNQLnH95MTwXwKTGbyhnTnkGCjoNiUU1vIpmhYTlYDs9BxpFM2LeerGAcwssipTcmQ7KZ4kS%2Fzvb%2BfqTIvVn88Ym5QZmSABnkyJMogFnhqjTMv%2BoUJDX3cXh5x%2BQTQJf5qypcXEOe0F7NybcesG%2Bg9CZHhZkikGG&X-Amz-Signature=08a5ffcb81b0b1a64997f0c9af0705f56961688c140488ae85628420ce30c545&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJPAS3XG%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T170730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEk6ftSkUWQt%2FeiwWmyOxqTMg3wIf6VmHkHwxUCE3wCcAiBofsELep82XlQEbWRq7xNLsjWz3TgX%2B314UNkkreTVRyr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIME3n1JUYpJjSpIbSzKtwDHZRxZN9BEXKymNhQIq6DuHNyBFy5CeksXVV21eKlZQd%2FKLZm91wODxPUe0plpDj6jPEMixd4ad%2FMGlMuhrFJD2BMS0t3hx9t4GHyW0IQOG5Zkx1Q%2BxIDwTVrqymbQYYoABq8htWedszOfq74Sj%2BnUPRvBXYNoGg%2FVFA0OJMsuTA%2FKplqz4abnI1Lzd7jfdF7DeZHbRL4vMF0qy5gC4tzj5DySMM9SCScpN7pes57gwe6YSme4i6ApzpuocaVQVY84N1DwFj6dwLyFtGVa2bThr%2B228IcyYlbEkbc7hnl%2BU%2FH1C4lSChOjU2CbdtNSL0UE6ZfE0xh9lOAaxx4V4FYiE%2BSE7BZCOLnLWFQDXftDxycYabbXyUDvBwPBmIupaqMpOPoEyND%2B33CPvbAj%2BqDHKLPXpnBa9GHkLsPQZe1Jq1t62Vd3bp0dJKA2UPV9Izr%2FCvIk6mV9kbzt0YlOuKbQA4dk827YAjkRmeLTuaV8zr%2BMHaaidQlFG%2BWfSdrO2k4YzeX2fdTZ%2BjGAVzxqQGgWDCxQAYv70%2F1aX1i4NFavh8%2FTIJu0VSiBe8X6YNiOHDbaQF17ivF9DoUgNkq7qeiLZJgZdlXupBs%2BG2XT8Itt6mwbiUiu%2Fdh71BXvFQw5oT6vwY6pgGtJonpsU6MsZK9zl9rISoGFl%2FKkSuI7LJBBN%2BJOGE9A0Yg7yzbb2erQ%2BO4M2lv4i7v4kS66X%2B%2BapgPZK579zP6ZFtfAG4S%2F9sgIVkH2XTzvcWfqm9oKMH4FbpRYpcGanhx9lD9W33ViM18vpbZB19WY0IFTigg0pfns562aW50771izpLLeTsesDHTxmtGHsKfC5jvmNRJyXykfn50wyNlOw%2BT%2BGeo&X-Amz-Signature=ea8c8f8e08474e02aaefdf7cdad3bdec4ccdc1bcab4fb342c08dcb9b880c6d76&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGZIAU7D%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T170730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCiPlQud8JfjMry0GmPZM4iiNHyMc8NWDpRhTeI3rMRrgIgS%2FMRg%2BKYCrGVQcO9JZvXaZibvKT2%2BJR51QYU1RHHFvAq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDPfbYsML9Y0XY9VbzSrcA9uKPvfKliS6vdKNHs7f0%2BohSTLJIm%2FFmaOyFAUsVzknUTLjqZSzwRfzGlkS4cowAzeS%2BIn6CIJCt8yr7fVOBF2Hw12563IUrsmBcQoBjoAUs0HimW89Cuefxj%2FursXy36hV2fniylbr7BzcuJed5ih425ueM6DmgoeRZLlRCeRsmuEIVQwHNHZ%2Byoha4TKUEJIQ63Kb6b%2Bjt%2BurZ2CoM9INUifg9aLBuGrDD7IbYI80GBfzHLNqimHEIqu%2B%2BwCJJoso%2Bn4bd4oaS21YaSYouzgiGfJCynpsrm1c4EqRagDZ0%2Flo1vutFQjUh4AYI0wV6740S9KxEpL0QcKmNEtQ94UPdEI5kMM4IDTSqfilAPPTPNTOZqIfYtiV369g0om2LvD5qMQ4XZ6vBDxPIBn2UOtxXFUFVsaxIQTx3TrMny5wSKn%2F3y82DQEvuym%2BOx3SacSMNmekPEOMazelCz9LSC5FmmVPynNGZBDPD2ovWGRHle919ZLKQ2UByau8zEV%2BTtg1KsP9mXv%2BcY1MWFhEUy7%2FwNI%2BHsSnJkmlC6aYABsKs6RXs4%2BlNDp2gv0xwaren3fYG3ap6Hp%2BAgWmx0hAKEktUR54xb2lxypZ%2BoMtgFcNaEyFoo94q0FvJkhbMNWE%2Br8GOqUBOoVwbrXbmP%2FubWKa9Jk76QEnHo2Zn1sNUuREzWaWGMzANyD0HxgSiG%2BQ4yEbAaV6nIGE5af4qkKnkxYaqpXo51MKX%2BC2DUhiQPiWzLAQNlHCSJXkw%2FziWu9kzKva8r6DwZM0H9gFyCj8iTcKDpLt88L3wfQS8nlmykiCxw4fqQejhjpBClj4buOFPa50NOblaQj37R%2B1CaAJg4o%2BuVBy91M3OeDV&X-Amz-Signature=eb166d3e849f4006a3c8694df5b73cfa00eee46e1bdaf89930929f619ffe2200&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637DKIQXE%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T170728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC5Pd1W7cAUdFHkxCU8wKLmbzK1%2FXhLWMnoz9QOa%2FMpWAiAKTPBwYskd0S8rwkwYYX6qNO2HJt4%2BCTmbmqns93n5qir%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMtSAo4l%2F3VqgW4lLCKtwD9nGEEHu2SKNJqLnnzstcBa6WpehOe8ColKUFlGXOFhF0BajgQBc%2FUuUDN9K4hhTeYzeNlcFoneBnj%2BJUqKwIdc9OeigXNkDWTdGhx7Oux321IJ2rmuyc4ZTMscc%2Bpb0lhdYg5aBW4nqjOU0XqsfxKWtZUR9yt4y9EYW09VchOl8qmIYjVKKt8Ty%2F%2FMKL7ZxCYGa%2FOAgnIq4wys2RMsxTMHBjuyGJVigRlO1uhd8ufjYHOH4shTbF3ugcVkAu6fOHD7U3XbzIGPWIH1OaxW3xDZPFrmzj8yMX8g0OLZhb97TAgwb8R6ZETd%2FtCHTVgpeKwSAqLXHcyVZdiU%2B%2B3itrV%2BpNHmqlsru3qXyrH2xbmxLYrbtu2tz6hGDEwKVpeURlsWRjKaIUn6WS8kWMNEVAfXLsd8uzBzs8qxts6nqHQ0aZEVogOktoFE9f7AdTO3w9TFsHDXBco%2FrAIfxNcbqmKxxCT4SUPX6r8D32zyZ0sFbrfia5SmAZ4JcaEPRi%2FBobwcjpuzp3SYZ18GabIQWUOCVvG7sa7Yix9pmT3MkBrnt%2Bejl%2FsoJTR8A27zIVAdbKXup2jEDdxwTLYVoNhieugNvQybzme5bymf%2B2PcROwx9zeJ2qtbf9hFhubj4wzIT6vwY6pgHSTxWrJxkZ7aCS4HbTgP%2Fx3v0dULQHa%2F1tISoY62nlVgrpQVoatIO4JPw8A6jixNQLnH95MTwXwKTGbyhnTnkGCjoNiUU1vIpmhYTlYDs9BxpFM2LeerGAcwssipTcmQ7KZ4kS%2Fzvb%2BfqTIvVn88Ym5QZmSABnkyJMogFnhqjTMv%2BoUJDX3cXh5x%2BQTQJf5qypcXEOe0F7NybcesG%2Bg9CZHhZkikGG&X-Amz-Signature=8d1b2dbbaf78c029e025c56fb280f093fb90a93336920a68f4666290e1a61d18&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
