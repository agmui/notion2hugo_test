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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RTNKPRP%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T230709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICmrLaIP%2Bt1zZnV0etnzIixNubQj%2BimTHHzIVHRj9vBAAiBQ4XsZSqbQlF6L6Hnjujz6LkVk5L%2BE%2F20qZKCkI7GvZiqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeDQN5mhtXhuUJim6KtwDvXwKGBNmSq21hTE5rCeF6BQIMtBuOsCL%2FLGGJk6HUvbG39FsqF6PYxDtLStyxAPKgQmP2Q0N103VXaMp2lddRbLaieL1NmgSkAItzGmIUaRgDJbkTpHLBGYeZVY8lgsBgIsRJzcs0nB3QozYjoP4AXQSvKRWnWL%2BQ5YoGAS2yNrQlb0ognuD9%2Bb4TfA9%2FRnXRO23bxrc7Puwld2taWwzSzBc3tPW%2B6snrNWuKicVsM17XcK2PGsjS8m2Fmb0ohX1LX%2BzqCpKJLNZ%2BAVtM4iOMNwIw9c1XPBj%2BbgzRfSii2lLpEg2IhYCFnSXyspFsJ34tfSufTUhXMUar6mPKK2wJ7JcWsrS75SOmsFS9wibhFiK4duOuLNcHInVJVSPLuXOv43a2%2FiaUIcoObGgE2zTymRttkcqkOGiKAzTyTf9QS2fgRbTChVmd5bUNPJaocofym6wThQoQTjK%2Fmo3sJaXubniAW9UE2YzAyS7X5NX82yRW7LEMAEZQZncGhAjYAUMhSRpdrLlAhfNq2TMBD59Ut%2FNwHBAYMIKA6wZAg4sKDN0DmckPg6Y8xseMLBqtufXpUpHFHfCD7%2Fwgc8Lcedwk4dP4Q78JPa0CtAi%2F%2FGFh8sjxreTKJISaXFwSWQwz86pvQY6pgGnepUsATRyhvOW7qKTi%2B06oCPTA3%2FgAvCs3kQ0gAnWX4H%2F0TbyTnNbe1C6SOI4iynDTbzqT%2FvHq7A5mffFeLfmyf7XN%2FV9SF9h7c9%2BB4cU37DwWxqdfnnElukhYNTn69GjHKgARQN%2BWd2lAjcNrPOv94AFe9638LRAQQm92Y4DI63jboqe%2FkD1vdTUAGbUiW2yTOU3D45GwATlIHsxkflA6kHkKUMu&X-Amz-Signature=0c7762f215f50b819ec0527b6a85b7302fbba8007296dd56f91e918421047d1a&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RTNKPRP%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T230709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICmrLaIP%2Bt1zZnV0etnzIixNubQj%2BimTHHzIVHRj9vBAAiBQ4XsZSqbQlF6L6Hnjujz6LkVk5L%2BE%2F20qZKCkI7GvZiqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeDQN5mhtXhuUJim6KtwDvXwKGBNmSq21hTE5rCeF6BQIMtBuOsCL%2FLGGJk6HUvbG39FsqF6PYxDtLStyxAPKgQmP2Q0N103VXaMp2lddRbLaieL1NmgSkAItzGmIUaRgDJbkTpHLBGYeZVY8lgsBgIsRJzcs0nB3QozYjoP4AXQSvKRWnWL%2BQ5YoGAS2yNrQlb0ognuD9%2Bb4TfA9%2FRnXRO23bxrc7Puwld2taWwzSzBc3tPW%2B6snrNWuKicVsM17XcK2PGsjS8m2Fmb0ohX1LX%2BzqCpKJLNZ%2BAVtM4iOMNwIw9c1XPBj%2BbgzRfSii2lLpEg2IhYCFnSXyspFsJ34tfSufTUhXMUar6mPKK2wJ7JcWsrS75SOmsFS9wibhFiK4duOuLNcHInVJVSPLuXOv43a2%2FiaUIcoObGgE2zTymRttkcqkOGiKAzTyTf9QS2fgRbTChVmd5bUNPJaocofym6wThQoQTjK%2Fmo3sJaXubniAW9UE2YzAyS7X5NX82yRW7LEMAEZQZncGhAjYAUMhSRpdrLlAhfNq2TMBD59Ut%2FNwHBAYMIKA6wZAg4sKDN0DmckPg6Y8xseMLBqtufXpUpHFHfCD7%2Fwgc8Lcedwk4dP4Q78JPa0CtAi%2F%2FGFh8sjxreTKJISaXFwSWQwz86pvQY6pgGnepUsATRyhvOW7qKTi%2B06oCPTA3%2FgAvCs3kQ0gAnWX4H%2F0TbyTnNbe1C6SOI4iynDTbzqT%2FvHq7A5mffFeLfmyf7XN%2FV9SF9h7c9%2BB4cU37DwWxqdfnnElukhYNTn69GjHKgARQN%2BWd2lAjcNrPOv94AFe9638LRAQQm92Y4DI63jboqe%2FkD1vdTUAGbUiW2yTOU3D45GwATlIHsxkflA6kHkKUMu&X-Amz-Signature=a8ce8b365bf94a16eec9743ee27b7b066379fd9f961b360f6a08ee69e4304708&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFJIPTJ6%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T230713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcN7Y0ORaxGOj1IdP38FbhkRgWPEy8LepiXzyrumbUZAIhAKT8oCbqg7wM%2BVAZrl39wPVKhe5bEc0IIqarzkvdBwFuKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwIk0%2B4q%2Bv9wYR4VEcq3AMxq4fxmdceQI9c7rcM%2BY8alHuSw2IG0JKLQUvPQNerq8lRpLIgi5Xwcy2%2BMX6xd92I7YKA2DKc7mggIotu23RnADV3qWsLQa6O5jd3r5CDPvBXovppDorg%2FL6DoQPIwcCs49wVz3D6pZWzorjDWrdoXmXC5I%2FAQ3pAVoXDTgonT6EgoxBWsb9UtHA5X9mn3stSReMzmQfhOX1%2F2YQ7iI11XGlh9xPIDBxnz%2FxLaRg6omQe6RIVH12zMKO%2FGnaETGyy2xz%2BHmbaHASAHw2pa1d390Xhfjo%2BhjAF7dO0H26zsAVnngAd4%2FiIkAAx9iutdNDLGh8TQcjY3YbgQ6K7DiSCPW8TFczyLNb1y6ANaprCc%2B8B8muN4BoM90qO1p%2FO8L2ETp8XlvSH8iJ81dxIJofMmLaUtVVxhFD%2FptaGYkuf1T3q5Gz7bRgQUMG7HzBtiW6IxDIBGHBt0KDM9pRFJm5NyXE%2B4LtJjyVEr%2BZfdchN3yjkK32X6YVoa23c2M36tD6mQCNGqWleBvMRKk%2FGWT%2Bm0NZ3QusNJ9Llr%2BFZm1if5hG5Db0HGfFuGPEjFK5wuGp8jwQv1CPp4wRwjBrjtbtbG6Vg%2F0nhamOWecWH6dvnhYsO%2BNK13p%2B9tg7WoDD1zKm9BjqkAT2Bzs2Gz8Q1%2BwTZRG3gAjvuLKji%2BqURr9oWr%2BLtOAiAYOWZOjW0TJLqOIBE8EUe85v1Ynw%2FAPYyrhiLIKm%2FVPBdU%2Bn1WoM%2F5HvLoNYHDoTupqEqSobY1UR1qciggII97lIXD8gNOysUHXcPCCE90h25vfNfbTX7HbUYn4e52KgAv6g5KuP4DOZPlx9dXB5Xd5LZLcUbfg%2BrqU0WCdMJhlSNNfNV&X-Amz-Signature=4aa0586af72c802a496940d7275c3cf5ab3011217d3d2e22df048d09c7560a78&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6DOQMRV%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T230713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMX1nNGvjtucdr1FXH1YCAqEiLfIHFhu9QAHnuHBX9aAIhAIfSTMLgb0MKifYZihOYkSdJlecNLQguykgHv2M0pC2RKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxWuSeW0C8bFnKRNKsq3AO0ukXls54ffANN2b3mKuRUoi%2FMU7o9xYn6yf%2Ber%2B0WsmobqV%2FwT0RnSgcxEmlGHpQ1EDbFMOo0AoFG9vxdkRmiQOPH8ElNENwDohVrkV%2BuwK7nLCDb32seI27u6l3EXyUHhLHFMcDtEmN15Rei5F%2FRW6MyyYAntZgoLhSYy%2ByFy7JHI33liRwaZn2suOBh03QXkYNcxFijcB3%2BKYJ13TVt%2BbyGtFMzGDSuTO9DKOMhosaRJiZ%2FSoPLEzej5kdJQjLGAFKZF46pf%2BuY1xQW64BYtAY%2FtE3eUQR1Lvd7xjtMiFLH%2F%2BN7Q8R7Co97beI71zBHGLMnnq4O4wmRwYBaOPNOhbwZc%2FIRYIZjFPX%2FtffK%2BwtNp7TTzqMU8F7VUwZ8SKp5K%2FW4zRpjz7W0BVdL6FeIficBNi0d21krlcy7UQR8agPqQdCK2VKcKZH0w30b1aHV12XAX8vMAGdsd6MsHQg9wh2ZBZnB7Zi8lctOwxXkPSSE%2F3sI8nQOXAvpLI5TOSbC1xJPwte89Chzzx9sWZwZmRlNknWvyP2aXWv84lVAY0TLbMWeEeNYAiL%2FyOa4AMQscNYNNTZzMU%2B6nONeHVm%2FyTU9ZajgZS5dleIXjgM1XJnqoIsfY04LCyZ%2BGzDuzKm9BjqkAY7aMVtlq418t%2BTS6vXuSB7FiNJNHmD%2FQzi3TI716we0BCtY3Z9Mf%2Bl7V7X0666ysXNt1k6y4EVpU54unA1SfmJ8BqEMcwykf0VZ2lppXa0MpiadNCfdUIwNAoY17tRCD5JpKVArKntPEBRJ%2BU9mfYhUW8RuTvuo0%2BTVlGgPHTH7XedtFIq8IwpFenWnrJ4U7yzlxjR%2B9S8VD14obthzQekKexYm&X-Amz-Signature=ccc4f32b02f253644da7a447259639d755a10a08557f59406205d8fe50a352b2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RTNKPRP%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T230709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICmrLaIP%2Bt1zZnV0etnzIixNubQj%2BimTHHzIVHRj9vBAAiBQ4XsZSqbQlF6L6Hnjujz6LkVk5L%2BE%2F20qZKCkI7GvZiqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeDQN5mhtXhuUJim6KtwDvXwKGBNmSq21hTE5rCeF6BQIMtBuOsCL%2FLGGJk6HUvbG39FsqF6PYxDtLStyxAPKgQmP2Q0N103VXaMp2lddRbLaieL1NmgSkAItzGmIUaRgDJbkTpHLBGYeZVY8lgsBgIsRJzcs0nB3QozYjoP4AXQSvKRWnWL%2BQ5YoGAS2yNrQlb0ognuD9%2Bb4TfA9%2FRnXRO23bxrc7Puwld2taWwzSzBc3tPW%2B6snrNWuKicVsM17XcK2PGsjS8m2Fmb0ohX1LX%2BzqCpKJLNZ%2BAVtM4iOMNwIw9c1XPBj%2BbgzRfSii2lLpEg2IhYCFnSXyspFsJ34tfSufTUhXMUar6mPKK2wJ7JcWsrS75SOmsFS9wibhFiK4duOuLNcHInVJVSPLuXOv43a2%2FiaUIcoObGgE2zTymRttkcqkOGiKAzTyTf9QS2fgRbTChVmd5bUNPJaocofym6wThQoQTjK%2Fmo3sJaXubniAW9UE2YzAyS7X5NX82yRW7LEMAEZQZncGhAjYAUMhSRpdrLlAhfNq2TMBD59Ut%2FNwHBAYMIKA6wZAg4sKDN0DmckPg6Y8xseMLBqtufXpUpHFHfCD7%2Fwgc8Lcedwk4dP4Q78JPa0CtAi%2F%2FGFh8sjxreTKJISaXFwSWQwz86pvQY6pgGnepUsATRyhvOW7qKTi%2B06oCPTA3%2FgAvCs3kQ0gAnWX4H%2F0TbyTnNbe1C6SOI4iynDTbzqT%2FvHq7A5mffFeLfmyf7XN%2FV9SF9h7c9%2BB4cU37DwWxqdfnnElukhYNTn69GjHKgARQN%2BWd2lAjcNrPOv94AFe9638LRAQQm92Y4DI63jboqe%2FkD1vdTUAGbUiW2yTOU3D45GwATlIHsxkflA6kHkKUMu&X-Amz-Signature=9b76986bb9d0cc8e581d3670cf7587bfc5f7ecebaa24c4fbfd1d297e1c3e6f26&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
