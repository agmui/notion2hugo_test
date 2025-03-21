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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FL2GB45%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T210701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQCOftH7qh%2FLQAGDhTTbU46Pv76nn539aJA77Y6WLUwkDwIhAPHjGzQ5qLWHAHmFeSmIZjC9kOOJgKMWu6Q5cfjP4oHpKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxweAx3%2FGic2eeGc4Eq3APb%2BG77VtF59n0mGtnIXU1VH0lVJvS1AhHl7Iu%2FP73VoVprr4ILqdpIj5lcy%2FE7kG8Oinf9mLO0mtuRnX09KBk0QywT3JQSwYlUqRtVuHjJ8TFEyqgUKrWA2TB%2BI1PdRkiXtVXxLHEDPgjxeSwjUt5uoKEfaYk8S6DrnNgqJAwg3wMgTt6tX%2BvqIMHh%2BOlaDCzvbieuQy%2BmbUz%2BJZvkgyTA3xaeAwx1L%2BiHvpYpN8LrITPGWYlKAWxusLb%2BrkakbmbeTJaZGp0%2BdNnVptfGp7ViwcDJUQ4xNDvLmw6NX3EwsjdSvN7IJ%2B5EfXS6sA5Wu10Xr9sZD1E6T5ROwWUXqaI6dfQTZpkZEWNWND0%2FLfZN5cqf%2FcMNeu19PKxUVU3cdvjYXSoyBWGYhRNBmqQlmSAgNRx1vOIAuUlS%2B18FHw%2F6kr%2BedDYDfRuoTdAzZVZE9iUyGBDnXsjmcKSYR0tegs6VxB%2BCOSEkWgb5Rb1Jnwu1gvLEQX9MAwCtW2am2sN65DoDlA5yD6uMMNcKRKXotxf9dIIxAnoBrlVVYyZWxG89%2BZJ2Rihx9ltGX0dz4NO8hV%2Fy5c4RdEMmYixQ26a46a6sGV7pEAN%2BHh9PuclIHajipbkrLQ18PoqoxA9D7zCM2%2Fa%2BBjqkAcPABWgEgGVFj8x%2BiylxYTtoFlfTsXiBf6DMXVGU2MezZ%2FNryOSLGVSKXf9a0pOec4ncanKrrXmQPOqeg8oOUPkFnCjN5SaP9EhqE9POVN7gQ%2FHHNpAl9kldaTDtn3zHNuyrLeMpitx9OJla6Z9l%2BAK1wAT3olrZM3o9ilpshnJdDaNo5o4CEE6fkskeGf6GrF%2F3DkuoZphECKFGv5yeEZxtNOpU&X-Amz-Signature=f6292109492536ff32cc4a972745800ddcacb2bdb3017431de5df9c91e5bea07&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FL2GB45%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T210701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQCOftH7qh%2FLQAGDhTTbU46Pv76nn539aJA77Y6WLUwkDwIhAPHjGzQ5qLWHAHmFeSmIZjC9kOOJgKMWu6Q5cfjP4oHpKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxweAx3%2FGic2eeGc4Eq3APb%2BG77VtF59n0mGtnIXU1VH0lVJvS1AhHl7Iu%2FP73VoVprr4ILqdpIj5lcy%2FE7kG8Oinf9mLO0mtuRnX09KBk0QywT3JQSwYlUqRtVuHjJ8TFEyqgUKrWA2TB%2BI1PdRkiXtVXxLHEDPgjxeSwjUt5uoKEfaYk8S6DrnNgqJAwg3wMgTt6tX%2BvqIMHh%2BOlaDCzvbieuQy%2BmbUz%2BJZvkgyTA3xaeAwx1L%2BiHvpYpN8LrITPGWYlKAWxusLb%2BrkakbmbeTJaZGp0%2BdNnVptfGp7ViwcDJUQ4xNDvLmw6NX3EwsjdSvN7IJ%2B5EfXS6sA5Wu10Xr9sZD1E6T5ROwWUXqaI6dfQTZpkZEWNWND0%2FLfZN5cqf%2FcMNeu19PKxUVU3cdvjYXSoyBWGYhRNBmqQlmSAgNRx1vOIAuUlS%2B18FHw%2F6kr%2BedDYDfRuoTdAzZVZE9iUyGBDnXsjmcKSYR0tegs6VxB%2BCOSEkWgb5Rb1Jnwu1gvLEQX9MAwCtW2am2sN65DoDlA5yD6uMMNcKRKXotxf9dIIxAnoBrlVVYyZWxG89%2BZJ2Rihx9ltGX0dz4NO8hV%2Fy5c4RdEMmYixQ26a46a6sGV7pEAN%2BHh9PuclIHajipbkrLQ18PoqoxA9D7zCM2%2Fa%2BBjqkAcPABWgEgGVFj8x%2BiylxYTtoFlfTsXiBf6DMXVGU2MezZ%2FNryOSLGVSKXf9a0pOec4ncanKrrXmQPOqeg8oOUPkFnCjN5SaP9EhqE9POVN7gQ%2FHHNpAl9kldaTDtn3zHNuyrLeMpitx9OJla6Z9l%2BAK1wAT3olrZM3o9ilpshnJdDaNo5o4CEE6fkskeGf6GrF%2F3DkuoZphECKFGv5yeEZxtNOpU&X-Amz-Signature=4fc558c941fdad7b9d3dfcb1ef4f2e73ee9be84641dcaa70444caf9b84586a43&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVZER7HP%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T210703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIE0WAqCtX7Yb%2FrOUqeyMjawLadPo84YVUwMmn5PGFKAGAiEA%2BcKPByStmuEG%2FnIEYo5X51N7MbWnZgPIJvtVv%2FH86wcqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOnk2XKUhUUllZ%2BeEircAxOIWjbdiGg%2FInPmzMhP%2BAgWJpqPsimYNJvocwNerAD%2FJCsx0%2Bec%2FVeA3SbL%2FQQtfhlp4UFJFxAxWFVIbmUx%2BaoU1lgdIhlhQe20m0s0NJ4tqhiCEz4GV6uYD%2Fp705RSYWwmYCpC2jU%2FIg50U8VV9xg%2F%2Bk6qO1I2lV4EN45U7BHiosiwDeZ%2FrFed4gw62YtDVvF8zZPAlyAIBEJOd3wlUpa7M8%2FWK5H1gswC7HsEq1CDQ0Yi%2B39dOKlVMAbmLHrfe%2FyaYj8ShQ3gv7HxFUvyruKlP4G0CUqyNdLCFs94e1o82neLk8HIy2qeYdFzzTrXog9pqbI7yeabqeyiNJgcFTMIOR5UwQ3n6Q69ZSEmo0LAwY4zJjXjcPq%2FXvFQEeRE6e%2BAP6PbmYDxOhmJMf8Rp5HmpCXt8YqYOtIidHLIUdMP9pHPnRvlovk76R2KxZDx95NxQlwf6tyIjPsymAvVMwNv6PUiKxskKDqMKusu5K4e6Q6UhdfZgqbewv4va964J71g8OY%2BPvwi0hUEJeIMhAgfmzE6r4BSQ9JXzeSoR2GTjJYc20lGrSXAwdAWj2%2BFWFR26nZFit73hD%2BjvqzkaAiPZRAZc%2BvWWnQ0Dh%2BuJcQDuToaoCLfHc%2FXIkM6MIPc9r4GOqUBY%2FHimn1z2MmvLYrCI9SrRABaLBelqBkny8FIWPE2ZApd%2BL10PetuS2d47VtOAmbw5Clq3r5l1To2psgF6OIVHdc1e13ILfsXAjn1rd9i7Fr9TlzsB23KdVWm7nD%2Fd60WQe%2Fznmr0hznUtXxK8B9o4CkedN26odhPThqnVwkYdxwFdiIIvypl12c6KVJWQeM48JQ3kVv19bqL1BC1ZfJw24m7B2Qa&X-Amz-Signature=eacc97d752c3dc15308e60d5899cf9423ac5c4147dd3e54f349e05fab4716eeb&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DO2QERS%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T210703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQCYBZyIiOwhExlTBQE5WsfMFoj5cTO5%2FnqGDa6wEL3h6QIhALNxZjiL8o%2B6XrwbX9ypuDN%2F3EiT%2BAaCUzkkfOTip2bBKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw9SUBI%2Bxsri56nHMgq3AM2TARirhacb9hSFZkmuUGyYBqDvjHsQFSllVRdXuBQ7MeruEUzY%2BSKiu6%2BI2r%2BzXf1loErC54EqQEzr%2B41oWjuorMRiSbGIp7oaSzQvj7%2B5vv3nPi4WkTjc8ke%2B67S0zsEgQRtMukT%2Fg4%2F60iPiIn0rog2Z8kmgk8dHgJGefHZNkkWmXOMX2Cy7OQi%2F9Wp7Jz3mzytXLyqdUDJU47V2z47fvOq0LX1yafOyNRC38C1vW18pYjB1gSAz%2F5vdVtBYm4qHCSKloPlZz34nAGpaVWG14BTUEjt128Hy5LAXTd9fuwL4qIj%2FB8mulsuZNuBAxkN7ycCWmyDejTCt4UVyEQVVraNlaVbaMeMVt1sxlc6dFHU4fh9pL2hAyPb5osAb8nReLkPX6N1HgzTgGIZdYPiS6SpcpkaPe8f6JPAAoP%2BgRBI4OdB4CgxNH5S9aKO%2FgljyRFQPrt03O6FZpjJ4hwFvwIi102eJPuaNx13WL%2B4StZLXKtOBcDB6EeZRbRWY0JmOCXK%2BrKC0fIo0DG0XzxlDzEB%2BO0W3miry2JPSrjpzodCuoVKu0%2FVRJJmiEVGkdLRk30bCIE%2FagyY4aI%2FcZeacUGe2TQpVbfAf4bM6dhfVYpkaBqMzSLTgdhNGTDB3Pa%2BBjqkAbz4pobflq71Y6S8SkbopqhyzD3tXlBrvV3N39ALpRu6606CQim1QfhDw9BICDLMJQ6XNfMv0ZdmzKfQ7CAMcxIQ3Kq1lzmZ85d%2FCi1pkRYFtQvIQWqCojwCg63LfPRGDpiK701OZO915PKQ0Kc7gDQqlRY552EoNNDmVXpu%2Bx9LpOQDAeh8hRaTOghc4m3wCwmDOp9nr9bU6qh7vaodcniPSEtW&X-Amz-Signature=b9bc10151f9ef14487eeae11ada500cd8f006fa2ac463eda78177ab7ebd49e64&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FL2GB45%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T210701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQCOftH7qh%2FLQAGDhTTbU46Pv76nn539aJA77Y6WLUwkDwIhAPHjGzQ5qLWHAHmFeSmIZjC9kOOJgKMWu6Q5cfjP4oHpKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxweAx3%2FGic2eeGc4Eq3APb%2BG77VtF59n0mGtnIXU1VH0lVJvS1AhHl7Iu%2FP73VoVprr4ILqdpIj5lcy%2FE7kG8Oinf9mLO0mtuRnX09KBk0QywT3JQSwYlUqRtVuHjJ8TFEyqgUKrWA2TB%2BI1PdRkiXtVXxLHEDPgjxeSwjUt5uoKEfaYk8S6DrnNgqJAwg3wMgTt6tX%2BvqIMHh%2BOlaDCzvbieuQy%2BmbUz%2BJZvkgyTA3xaeAwx1L%2BiHvpYpN8LrITPGWYlKAWxusLb%2BrkakbmbeTJaZGp0%2BdNnVptfGp7ViwcDJUQ4xNDvLmw6NX3EwsjdSvN7IJ%2B5EfXS6sA5Wu10Xr9sZD1E6T5ROwWUXqaI6dfQTZpkZEWNWND0%2FLfZN5cqf%2FcMNeu19PKxUVU3cdvjYXSoyBWGYhRNBmqQlmSAgNRx1vOIAuUlS%2B18FHw%2F6kr%2BedDYDfRuoTdAzZVZE9iUyGBDnXsjmcKSYR0tegs6VxB%2BCOSEkWgb5Rb1Jnwu1gvLEQX9MAwCtW2am2sN65DoDlA5yD6uMMNcKRKXotxf9dIIxAnoBrlVVYyZWxG89%2BZJ2Rihx9ltGX0dz4NO8hV%2Fy5c4RdEMmYixQ26a46a6sGV7pEAN%2BHh9PuclIHajipbkrLQ18PoqoxA9D7zCM2%2Fa%2BBjqkAcPABWgEgGVFj8x%2BiylxYTtoFlfTsXiBf6DMXVGU2MezZ%2FNryOSLGVSKXf9a0pOec4ncanKrrXmQPOqeg8oOUPkFnCjN5SaP9EhqE9POVN7gQ%2FHHNpAl9kldaTDtn3zHNuyrLeMpitx9OJla6Z9l%2BAK1wAT3olrZM3o9ilpshnJdDaNo5o4CEE6fkskeGf6GrF%2F3DkuoZphECKFGv5yeEZxtNOpU&X-Amz-Signature=c538b9e5bcd6b2220a4cb46535f4f4f9838f585b3560b0cc8586e0ef6065015d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
