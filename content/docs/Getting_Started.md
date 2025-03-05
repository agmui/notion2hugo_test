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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624OW7YJK%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T003747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFwnoTw9%2F6u2WBkv6F7cyqEqC6qT5VSEb%2FkZVtGnCltQAiAQ516VMnh4YGCVNfsHxasUUrCFiwgOXw7WBspNAEE0%2FCqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJ9qwGOs2%2BNEr2xCMKtwDkqHvZLPASjXnxoFHBI29tV2VvQvhMBURCVrHEJJfMtJenFcGXWAgwmlWTG%2B8I%2F7wR6EcYhEuSsxf1ryYqchR46wo4aG%2B5gwo72Lxd72gtrdtLkyF05c6iurVubYNhJvoMbzIxkIihaMp0LviiHTgQrSp3t5OC0ZQ34T0KJaUM3IUQh%2FNBbHs9HAkosss8HnNchb8%2FKoExYfWhyzvxnhEyCNr3zQ%2BAcL1t15wKuQtIP0p%2BH8pJBktWqC6tZDd8Ef6spMXLrwvGD4275P7FClNRkHwFz%2Bh6N9HRQs408aofl16AYmRkO2eHcStPD3vtxS%2B0KWlWsKcMMje2gd1O8c5oIGBi9xcnQ0nsaAZp3xOAlpfGV1wTgk%2BOyDyJGDEXHZJ4gsAhvrv7Mn9GXaTduwyc7Jt4P7dhhIL%2F6xZn4BqXcKG2o68lqI9VNMMhDlgcMwMm7OppLSXtTsFVjL36uklUMv7jiWZ7YYbCk4xPNR7yLR2u3sep88lZLrz1445O5jv9NYPfh5RI3vz%2BgU0eKltGi3hoz8e858xFg3ZXdA%2BiEzeFb9RmbNbRbuhHhPgCdDP2nDlLajohGp8m%2FwwFgXCtYZTubW92BYEbAyCeXaMRTMkOFAKcKuDNUPl3IQwoJ6evgY6pgEvKXkInuDfk%2B5moC6yaQWvzNnQKepbAdUPiDZ7aNBxJDkdpZw2T0ZJ1DWxre2sDdAj9Cdwr8tNxrV1e2i0xNbEEKli7cYBWbFO2mudXe9cq0Mo22DY51cTu4ZUxa9%2B4pbeJNohnIX4Ttw6pmG6%2F%2FdpGdecoRpE8Zh%2BHfLzgb01fY9BkKU37d6NkF0Ie%2FpFvP6fFMme9fSmfC9Jlqd0GiiILSNeiPuw&X-Amz-Signature=5676ff3f61e30e93856c00fa64a7002a865bf20db9352dd45def2903c247d310&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624OW7YJK%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T003747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFwnoTw9%2F6u2WBkv6F7cyqEqC6qT5VSEb%2FkZVtGnCltQAiAQ516VMnh4YGCVNfsHxasUUrCFiwgOXw7WBspNAEE0%2FCqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJ9qwGOs2%2BNEr2xCMKtwDkqHvZLPASjXnxoFHBI29tV2VvQvhMBURCVrHEJJfMtJenFcGXWAgwmlWTG%2B8I%2F7wR6EcYhEuSsxf1ryYqchR46wo4aG%2B5gwo72Lxd72gtrdtLkyF05c6iurVubYNhJvoMbzIxkIihaMp0LviiHTgQrSp3t5OC0ZQ34T0KJaUM3IUQh%2FNBbHs9HAkosss8HnNchb8%2FKoExYfWhyzvxnhEyCNr3zQ%2BAcL1t15wKuQtIP0p%2BH8pJBktWqC6tZDd8Ef6spMXLrwvGD4275P7FClNRkHwFz%2Bh6N9HRQs408aofl16AYmRkO2eHcStPD3vtxS%2B0KWlWsKcMMje2gd1O8c5oIGBi9xcnQ0nsaAZp3xOAlpfGV1wTgk%2BOyDyJGDEXHZJ4gsAhvrv7Mn9GXaTduwyc7Jt4P7dhhIL%2F6xZn4BqXcKG2o68lqI9VNMMhDlgcMwMm7OppLSXtTsFVjL36uklUMv7jiWZ7YYbCk4xPNR7yLR2u3sep88lZLrz1445O5jv9NYPfh5RI3vz%2BgU0eKltGi3hoz8e858xFg3ZXdA%2BiEzeFb9RmbNbRbuhHhPgCdDP2nDlLajohGp8m%2FwwFgXCtYZTubW92BYEbAyCeXaMRTMkOFAKcKuDNUPl3IQwoJ6evgY6pgEvKXkInuDfk%2B5moC6yaQWvzNnQKepbAdUPiDZ7aNBxJDkdpZw2T0ZJ1DWxre2sDdAj9Cdwr8tNxrV1e2i0xNbEEKli7cYBWbFO2mudXe9cq0Mo22DY51cTu4ZUxa9%2B4pbeJNohnIX4Ttw6pmG6%2F%2FdpGdecoRpE8Zh%2BHfLzgb01fY9BkKU37d6NkF0Ie%2FpFvP6fFMme9fSmfC9Jlqd0GiiILSNeiPuw&X-Amz-Signature=5e53d572025c0aef308bb348105993887e13915ecf992812e90465829c85a2fb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AIIQLK4%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T003753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGIRSejZ4yhIgOC%2B5qMDLwrgkw2V9KzhyOExQgAZt9I9AiEAoaY8yQxKCq5lI62VoC%2F0h4Q3p0vLpN25MqSMf1PdUL4qiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEAZ9ef7A%2B8W%2Buy9DCrcA%2F0DrPWLKs6O0LPm9TDO0aDa6jI4v4E5xDh6SXM60LjygNd%2B9RPCtzBwr%2BGjgdEWHn44vVGRW4IZs9EzUlSc5%2FInt7AMTAeFyUfqnTDq6MheVTwabKZGdeBg5lKG4sqC6QalXCyQjrASkYht6oI8kqpZVhAV9sALoEOuayd037ulZL214552Q%2FZmckeQrHhQtre4rZgpFTK2vVZDkMfIqgcoFgOvV%2FM3zekxYitEO0LJ0q2vDGPWBpw35nIIh%2F7brXXB1RIlf66wmBuurmSK1d5VMn7x1XIZpxuqBBoq%2BNkdsv5YkTKt%2FcJQV5VdIFgincDFrypYPpXgdZjTLCHSXOgdr4%2FnZia%2FjZ6%2FpyXAqjkPQJkn%2FPfvFl8aLGpAMxtfV%2FoNAdynpeQMolB0EN%2BoaqpgB1iGMznj6fNgWjuVxWqCYQJmvjhvu%2BEQ23oOKhTL%2F3%2FAxGPZwbx9Ur6JfnFbLjqosLCYOaHa6stx6hz2WmlTBO%2F%2Fj1UbAJgVOKtD4UgwPYYyC8bmQO8AxVTp%2BjGQxKmzvpKP8rNGp%2BD%2B2Ju24i5jUIkr6uJ1QWyzqRGN3trTNUa2HikvKfqYzU3HIUrRhcen7Cvl4jkcNDKgUCUGfCto7LtrGZ9DdjAjSWC1MKqenr4GOqUBysvzO%2FH%2BZv5jayX%2FWeFE96tiE0xYpOMHUKsxwHzYYO%2FTLP6Yk6lDpz%2FL2hIoonxB8yujqLx4D%2Bo5RhHKhR1DoU2C5YinBJCyGOHiRTWeEmmiiS%2BkGNkcoqMWtl3HNfi6mskpJiYHNi0Q1EREGqR7AdyAQjs1DDHtw8DUs7vGYGt804VQqytUBg85Gngq4lmFvewZ2kalJ0yIRGO0KKeg7dw8XY%2FY&X-Amz-Signature=13be1e553a579d83888396f02c32b14e3f1083a1c636980f2ce9d3c2cef654ad&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVLCAWYW%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T003753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFWfrlWkcMEj9JuvWZzuOUGPxwgUvORntK2DkLDSL0RDAiBNl5%2B7sRYaGc8NsyVQSl5VHk09IlmSFtx7dev%2FV%2FvdIyqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFg1zi%2FSWc9RY0FRAKtwD%2FclslE3Z2zi9zPvqj1MJN%2BNJytMcnvj%2FZgZv4yL%2F3ZEO5YUBd6n2HmYfdvWLmdnPZEuecm4aeiuwQV2vcIDiFOUvXCsM%2FVcYvLKpb0nOApmG017CwIYRPWjUIga%2BLwj5kkvEwqu66uE5NCBHxkMFoBxYFcvWaLGvuEGvSYmifogA7skIjbBk1nMP6xyDQbZu%2FCFoOdh8%2BVz9LIT%2BsqRa559KgKke8nrkMq5JmlwEumZW5cGtv7usZOvQeMUPVzDTBr%2BrDm7mUNi5rz4XIXsUqVwrndTBBQUl%2B7jjXCcG%2FvSJ18%2B1XsLvwxSm5%2BdS7zfssvu%2BYIfnVaSqZ9%2B%2FpIR6WG5xSN8BtAYXLrtdfPKOSyjsOAYW%2BnHJZeUAe5CQ3ZRSwqRla0cmTW97rWMKPuWg8wZOk%2F8kHhdz3ba2pJZ2byKTjQcuG5Fyy%2BlAKHUlIBsM1QTmYjM6dOMpyrsqv8OsTKxBzAcrea0hg8d%2BKk5f43f%2BvjxFrELHVvQCZwZZ7ywUvpMgS%2BlgphwfrVvTruA0hEXsi3A4eSnOZsTTLgOTrdpUABG1hEUbXVLlTJro4PI%2Bi1%2B00shoE%2FB0XyZbfiL6FUZZg8%2FM%2BU5ua007ST%2BFG3TMQL%2F263GpPf52s2UwtZ6evgY6pgGls%2Fqk998Pq60%2FB6Ps%2BoFtVZBZFBXgm0Dx2QWaFvp79EBmUEfbW%2FMEV3cK3mWOcIN%2Bc7g5ud3Yiks02p1epMl7ceioZAVMNtHuPlhd3ZyPfIrqOXsKJpj%2F4BUVGFdTZoEYeeE360uYbVNVVs5Ysje0mEuy3bbG427Z3gk9SMKOGEfaIjBwMsov%2FmC5bOcIswwXJOggpILq4WnASHfcfh0qMbpGY8zN&X-Amz-Signature=8f72eaadac4aa415af8df60d92a812aff9a1b9fc417db339584ba27aabed9498&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624OW7YJK%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T003747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFwnoTw9%2F6u2WBkv6F7cyqEqC6qT5VSEb%2FkZVtGnCltQAiAQ516VMnh4YGCVNfsHxasUUrCFiwgOXw7WBspNAEE0%2FCqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJ9qwGOs2%2BNEr2xCMKtwDkqHvZLPASjXnxoFHBI29tV2VvQvhMBURCVrHEJJfMtJenFcGXWAgwmlWTG%2B8I%2F7wR6EcYhEuSsxf1ryYqchR46wo4aG%2B5gwo72Lxd72gtrdtLkyF05c6iurVubYNhJvoMbzIxkIihaMp0LviiHTgQrSp3t5OC0ZQ34T0KJaUM3IUQh%2FNBbHs9HAkosss8HnNchb8%2FKoExYfWhyzvxnhEyCNr3zQ%2BAcL1t15wKuQtIP0p%2BH8pJBktWqC6tZDd8Ef6spMXLrwvGD4275P7FClNRkHwFz%2Bh6N9HRQs408aofl16AYmRkO2eHcStPD3vtxS%2B0KWlWsKcMMje2gd1O8c5oIGBi9xcnQ0nsaAZp3xOAlpfGV1wTgk%2BOyDyJGDEXHZJ4gsAhvrv7Mn9GXaTduwyc7Jt4P7dhhIL%2F6xZn4BqXcKG2o68lqI9VNMMhDlgcMwMm7OppLSXtTsFVjL36uklUMv7jiWZ7YYbCk4xPNR7yLR2u3sep88lZLrz1445O5jv9NYPfh5RI3vz%2BgU0eKltGi3hoz8e858xFg3ZXdA%2BiEzeFb9RmbNbRbuhHhPgCdDP2nDlLajohGp8m%2FwwFgXCtYZTubW92BYEbAyCeXaMRTMkOFAKcKuDNUPl3IQwoJ6evgY6pgEvKXkInuDfk%2B5moC6yaQWvzNnQKepbAdUPiDZ7aNBxJDkdpZw2T0ZJ1DWxre2sDdAj9Cdwr8tNxrV1e2i0xNbEEKli7cYBWbFO2mudXe9cq0Mo22DY51cTu4ZUxa9%2B4pbeJNohnIX4Ttw6pmG6%2F%2FdpGdecoRpE8Zh%2BHfLzgb01fY9BkKU37d6NkF0Ie%2FpFvP6fFMme9fSmfC9Jlqd0GiiILSNeiPuw&X-Amz-Signature=939b235eb29dc32447637fd5a8341ab6f10dbad151683d6352c3c68f0eda73b9&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
