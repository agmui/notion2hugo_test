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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RJGMNHC%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T181137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIDY6LwUFa2auYvp5wNQV6tZkBkf7%2FPUoUbDLEOHwezQZAiBJzMYnWlCcwHvFOJFlWk6c3Ct7Et8VYv%2F93kU0gotWwiqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzvPnmK9nLu7vIHARKtwDOtwetGZmTXF3p%2F1B9zO33j7N2%2BQH20DxQEEPx9CNzOT2fP0wOWajWz9sL0eZm1w3G%2FlkGkMR9A1bJiSSvktoo4pfVTZAjuSIPCAOd7s626JvK4GmJXzpH1n9sRG%2BgrgznvUNaJJQNCbxF7zgMG6SpBBDe40k54CZOWpjakdLyBt0zdf2%2B44awiAMSDCfsuhrK0MQspYvQeVxqHDCGp7ryRZXacBLuZ35tbmHCj8I3saCcTqFeQV5x4XxFAj0FM1bzASQza3kPQTCwy9yxAFigrYCEjBGzY0xPmL0bmJ0yOn9SakUrKYNRl%2FtSBjxslmbTdqbiEF4nUTMDYrQqtg2kV%2FIKZNa5SNzw%2FM0mVn92%2BlNHkK8t8gH4YzLzaxqOF7weYmMcDa94cmnkoglQkFkDKwAE7b1MkEmcUCqYwmtfm5eD2i7qcDEK5IWL5%2FkmHQ%2FSW2zV9gBOrzC4Yo8FDyfzoFZXsPoHD47jLoCsNHi7am4lBXkcRWGYM37RqjaDyyRM7XkQIJdJVYlTiLiZiL%2F7sH6TOLIDnwjp2UJk7F04tTOiZwuq05%2BXrwlUqstQ4Jycwr3YSSbu%2Fnj3rcMNQegNInOJAOyPb0U8dhJYNYLHGySi9v0IjjxWg%2FNZzkw79akwAY6pgGAyaHGR4BG88oLWJCyA%2BvTWtq%2BvFx%2BSaDZ4onbTId8UlZHDBfeDBUpGTkJZmJX21MqwFxVz8Zt2uLdtCSAR8SWJNdG9O9B4i52OrsxAnllZDKmj5nY3hdNW3yWHcd7rVpfML3ZFjB7ToGH0pYAKbYCbr%2BvFHfBXfqFd8%2BYEgGUi8tBOm6slcM4NqynxWwKrp2mIV6NQaan5GzUxUwF7YK1kSKmbqPT&X-Amz-Signature=c821c56e56f6270f3b023b29c75407109aa5ee7bf1f8555e57c6dd5e897dc7a7&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RJGMNHC%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T181137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIDY6LwUFa2auYvp5wNQV6tZkBkf7%2FPUoUbDLEOHwezQZAiBJzMYnWlCcwHvFOJFlWk6c3Ct7Et8VYv%2F93kU0gotWwiqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzvPnmK9nLu7vIHARKtwDOtwetGZmTXF3p%2F1B9zO33j7N2%2BQH20DxQEEPx9CNzOT2fP0wOWajWz9sL0eZm1w3G%2FlkGkMR9A1bJiSSvktoo4pfVTZAjuSIPCAOd7s626JvK4GmJXzpH1n9sRG%2BgrgznvUNaJJQNCbxF7zgMG6SpBBDe40k54CZOWpjakdLyBt0zdf2%2B44awiAMSDCfsuhrK0MQspYvQeVxqHDCGp7ryRZXacBLuZ35tbmHCj8I3saCcTqFeQV5x4XxFAj0FM1bzASQza3kPQTCwy9yxAFigrYCEjBGzY0xPmL0bmJ0yOn9SakUrKYNRl%2FtSBjxslmbTdqbiEF4nUTMDYrQqtg2kV%2FIKZNa5SNzw%2FM0mVn92%2BlNHkK8t8gH4YzLzaxqOF7weYmMcDa94cmnkoglQkFkDKwAE7b1MkEmcUCqYwmtfm5eD2i7qcDEK5IWL5%2FkmHQ%2FSW2zV9gBOrzC4Yo8FDyfzoFZXsPoHD47jLoCsNHi7am4lBXkcRWGYM37RqjaDyyRM7XkQIJdJVYlTiLiZiL%2F7sH6TOLIDnwjp2UJk7F04tTOiZwuq05%2BXrwlUqstQ4Jycwr3YSSbu%2Fnj3rcMNQegNInOJAOyPb0U8dhJYNYLHGySi9v0IjjxWg%2FNZzkw79akwAY6pgGAyaHGR4BG88oLWJCyA%2BvTWtq%2BvFx%2BSaDZ4onbTId8UlZHDBfeDBUpGTkJZmJX21MqwFxVz8Zt2uLdtCSAR8SWJNdG9O9B4i52OrsxAnllZDKmj5nY3hdNW3yWHcd7rVpfML3ZFjB7ToGH0pYAKbYCbr%2BvFHfBXfqFd8%2BYEgGUi8tBOm6slcM4NqynxWwKrp2mIV6NQaan5GzUxUwF7YK1kSKmbqPT&X-Amz-Signature=b1e5a73212b9937412bf80876a58c8d0b6f4fd1c3da85029d5c0fa9d77fdb0b7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RVA6AQ5%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T181142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQCCE5B4BJ0n5boL0P2ZR9%2FM%2BMycqHFZ6hD8AWei3UvKIgIgJOGPcVZ%2BEgRTvZ%2BDAcZ%2BZ6koS3SVbiHq0i4PuTgroO0qiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFgsMDQ0xjVJk9H2FyrcA9Kt8YmEiMu5CpriF%2FEKeSmlQmnQPVnijjiwaIb2yuf6yo%2BFXXwn4MjSbAhGvKj5nxFfIdbhxLlHuoxh7X9Zg60BJ%2B%2BctkqjsIZk1xJDWgC6dt0TpXa1mkub58yRqhVcYqY9h3s%2Be8JJznlpcyUgNEWAmg%2BOZc76apZDtDXLPlf28FDltZlcGAGvZpqWb%2Fy4iA9ZMBouTmI%2FXDtzIWGI1irUJfxNgINQMUXXWdy2gmpL8IvMUga1eOehpVB512Qe%2BNox%2BWGPx7BRGkwbqLIvZl%2Bfo3r9liPA2Zn77QLBRNeOy1peTo0TlkLobgzmZOv%2BRIK5%2Bpszli0xu0KCdlQXVdlWEivWRykLMhUSNsFCo5aR9lQiuIAYpls3eesExrzFZVmffXedfmT0zpT7bJ23Ps2Hnim4t804V4y6xqMcmOlWxsL113SAdIW9nP6Yr5EsykoSQKNqIryp8vyR60Vh%2F3G2jiu9to8L5ISq0oBhXNARgnZHDgwt5aKFhn0YxPyOE2T65431MbeHrS%2FpCjoXqgQ8je2f7%2FuKCyjNsmkl%2BIKCkYHugTiDtVnl3ATRAZ%2FLgYCSVYb1BDPGm3Hre93BvobC0nfWdP%2F639Ze9WrQFnkbG6OOcCiX%2F0SHVsU9MNnXpMAGOqUBO7W47OiTyIRrA9Bj0bXejBVSOha7XOvT%2FiYUcp9jXwtSm39pkQqICf5vkeWL1xqePYZS3XhW9AZZQbChYc%2BNxEk84WuXO6tk4s99cHGPrA3x%2BkJHvR3bDXthaen3Hw31IPkZE1aYNjXsDj%2FoIgxt4KywpYZ%2BzBRr0IEQLNW9GvJnSz1o9MlZtD83sWf1KokWj2zJVIZpUNjJmXgf2O4aBda0atxr&X-Amz-Signature=0ef282eea592393c23cb2482f304683f08e115dacf55d7391894ee369b107974&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466373DWED5%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T181143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIAN05YGQ1aoxtGBMkmO%2B0o%2FZNACrF3C2Vu6HYEt3vt5mAiEA2Dze1%2FTDr0vbOp3bKMutNBHmqbypzT5PxJT%2FINbNq2gqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAQK9Y3N2F4oURcu1SrcA2DF2MQliuiFfXEn%2F80iP65nbCyxhmzpu4RcNScDdektrQNkVxaHj%2BpRRKD2H5QKTqWFO99zXvmytqZCvctxwDYQ0BbyweWDQHNdObxQRIcrs2cYZYDNcJBqSgV8Etc0JqT%2F8MYc5GZlnorUwWXE9WLiadnH%2F2kqfXbBP%2B11ECIgQhdICpZ1EbfKH2%2FC2SND%2BALOPbQj2mzrmEHnZKb6cixmqjsMeGmOD4rq6PY96PZdlVwxBMsnfbVhVzpyNemsWu2qqJUe%2FSd9AngSP%2Bj%2BAPLV4IfcJyz7hoXzwAB2lgqDL%2FZsof%2BDwSfDni1OH1URR2wDnSUdNxauNqmrxDVNXLWkNm%2Bq%2F2Ifr7%2FSN7ocrn%2FZqNm7nXIEPEr1n4ccLeeKpztKHTndY4BdhINEWm%2F5BC0VVGO88k%2B%2BhG288Ca1RDY1LoIxITXmqC5JwZetrKOeHoc7xrXcSxg%2FRyqL8qSwARlWS4FPqRH4OOGEHOaJ34yEPn5lmW1WNkf5dzJsgmV64vcu7NwbM4YH5cvJSDVLtJSgZVIRAphNKH6XUJpCvoAxQ%2FK4Y35MurMgcIrRkf6hHRPITWVTgKw8pC1BY%2F%2BFApjcJaru7lzufQybNrCyCwvhx%2BYPx2M%2Fy2%2FrMLzFMO%2FWpMAGOqUBwnYq4WNs4tQ%2FRaRCt7gYajI%2FFreoR1GAFzWqxGX7VVnSN%2BLJAKgpevzZORL1VsDTbm0YjMYyLAXXdA0vfFPj8weGnuIR%2BeJAQV%2FovqaTZkHhnREpsb8Jz2sPxh4tHHGDbybeeS2DlgVD5ZaPPBd5hT%2BNxWUqpa9OPWj6uIawq5vL%2BfbgFiPZIo7Ea78LFJXR3D4aBaCiQxTysJy%2BlDZTfd4p0X2J&X-Amz-Signature=432f458004686f47cc9008e86b147b87846ce2bdf7a1371f01f58860a1cea090&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RJGMNHC%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T181137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIDY6LwUFa2auYvp5wNQV6tZkBkf7%2FPUoUbDLEOHwezQZAiBJzMYnWlCcwHvFOJFlWk6c3Ct7Et8VYv%2F93kU0gotWwiqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzvPnmK9nLu7vIHARKtwDOtwetGZmTXF3p%2F1B9zO33j7N2%2BQH20DxQEEPx9CNzOT2fP0wOWajWz9sL0eZm1w3G%2FlkGkMR9A1bJiSSvktoo4pfVTZAjuSIPCAOd7s626JvK4GmJXzpH1n9sRG%2BgrgznvUNaJJQNCbxF7zgMG6SpBBDe40k54CZOWpjakdLyBt0zdf2%2B44awiAMSDCfsuhrK0MQspYvQeVxqHDCGp7ryRZXacBLuZ35tbmHCj8I3saCcTqFeQV5x4XxFAj0FM1bzASQza3kPQTCwy9yxAFigrYCEjBGzY0xPmL0bmJ0yOn9SakUrKYNRl%2FtSBjxslmbTdqbiEF4nUTMDYrQqtg2kV%2FIKZNa5SNzw%2FM0mVn92%2BlNHkK8t8gH4YzLzaxqOF7weYmMcDa94cmnkoglQkFkDKwAE7b1MkEmcUCqYwmtfm5eD2i7qcDEK5IWL5%2FkmHQ%2FSW2zV9gBOrzC4Yo8FDyfzoFZXsPoHD47jLoCsNHi7am4lBXkcRWGYM37RqjaDyyRM7XkQIJdJVYlTiLiZiL%2F7sH6TOLIDnwjp2UJk7F04tTOiZwuq05%2BXrwlUqstQ4Jycwr3YSSbu%2Fnj3rcMNQegNInOJAOyPb0U8dhJYNYLHGySi9v0IjjxWg%2FNZzkw79akwAY6pgGAyaHGR4BG88oLWJCyA%2BvTWtq%2BvFx%2BSaDZ4onbTId8UlZHDBfeDBUpGTkJZmJX21MqwFxVz8Zt2uLdtCSAR8SWJNdG9O9B4i52OrsxAnllZDKmj5nY3hdNW3yWHcd7rVpfML3ZFjB7ToGH0pYAKbYCbr%2BvFHfBXfqFd8%2BYEgGUi8tBOm6slcM4NqynxWwKrp2mIV6NQaan5GzUxUwF7YK1kSKmbqPT&X-Amz-Signature=a043e72909bbb09d6c2d87d03f06b8755851f5130ef088c1c752239d03b169a5&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
