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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EHYJYIR%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T220829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIHqHlGlP6wdKyTEQHInmpefNC76Wdg3tAL0SiM5TiJyPAiAT8RIbSHS5rfhKnuLCVRX3R2EpXwVsLUaajoCT03ei3yqIBAj3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFVHZcJxwUmHDUj5CKtwD63Wwqt1BOS0sL5GNjIxtaIkS%2Bajr757gWE3CaBBBNs4%2FOJ8m0Ip6oLEn43iyY3FAZ%2B5AyNbFpvBbopcQ5lgxVOsj%2BJ73NjVSarhgmjVDPOO%2BXiIkoW3TyFHqED5X3A148z10c0d7vuwm9Gc4lIAxlRH7knxGFqGPYsTqAjvxBh12tz3G3YN4Q3Zh6E%2Bxk%2Feaa9%2FVXJ1eBimV7qXz%2B9JhXKig5iQ%2BO3i%2FAIN23BwaYZy1g4omQ5yp45CtiFEX3ocSnRn5fvrrEKEqN3h4lHgamkx44jV3fuzzeaMcgddnkfDUNiqvOvJLaaLse2ckb4CV4dFUq%2FjmGOlIGnzf5NMVwqS%2FFVTe7c5JNlZw%2FranLx%2B0I6pmO4FEYoXwNbzc2p8SKKB3ZJWwILXz8sxt1zJZMvWkXG2tGEa3kg7wdueqhrKuZ%2FaAUH4ORMJeBa2vKTnryDqqDdidebFgISRVPc9MrH0lmHQDa5GzovvDRP3iOMXaif9972VmKVzoZ63yW6HD8qTbLr80t4EHL7Dud5P3t7Bij3dyTL4X%2FeHEmZnxmWBJTYwvc6KkzbqVPJ16Da5EMz1iFFagLLAEM5coH0QfEVLGBWevwbICoYJDgZRjpXsz1TaUl5%2FAoyZdYz4wrrT4wQY6pgEO2w%2BQS84aTy%2BRCCX%2FjikQzShqQ%2FhWyq%2BUP0IZLiRGnGBW7HlOsERQ7hAIGv9pI25N9DqSEjEFu8HvL8Ry3%2Fqys0AB8FT7sX%2FY8rsMpUJ5VjFCLlQTcRk4VuQ7dTBM6%2B7IjmJxB2Tp%2FzfU2jZITn90uOWE%2B6iwiM45T5Bn48n7pAD1JjsBCwWnt%2Ft2mvoUX5nNL8pFa4ncF3OG71ggFqJDqODpg9rx&X-Amz-Signature=2df4d88bb10e7cc8efc9f9fb954746f49523d50cc963df7e182c1ece941a340c&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EHYJYIR%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T220829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIHqHlGlP6wdKyTEQHInmpefNC76Wdg3tAL0SiM5TiJyPAiAT8RIbSHS5rfhKnuLCVRX3R2EpXwVsLUaajoCT03ei3yqIBAj3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFVHZcJxwUmHDUj5CKtwD63Wwqt1BOS0sL5GNjIxtaIkS%2Bajr757gWE3CaBBBNs4%2FOJ8m0Ip6oLEn43iyY3FAZ%2B5AyNbFpvBbopcQ5lgxVOsj%2BJ73NjVSarhgmjVDPOO%2BXiIkoW3TyFHqED5X3A148z10c0d7vuwm9Gc4lIAxlRH7knxGFqGPYsTqAjvxBh12tz3G3YN4Q3Zh6E%2Bxk%2Feaa9%2FVXJ1eBimV7qXz%2B9JhXKig5iQ%2BO3i%2FAIN23BwaYZy1g4omQ5yp45CtiFEX3ocSnRn5fvrrEKEqN3h4lHgamkx44jV3fuzzeaMcgddnkfDUNiqvOvJLaaLse2ckb4CV4dFUq%2FjmGOlIGnzf5NMVwqS%2FFVTe7c5JNlZw%2FranLx%2B0I6pmO4FEYoXwNbzc2p8SKKB3ZJWwILXz8sxt1zJZMvWkXG2tGEa3kg7wdueqhrKuZ%2FaAUH4ORMJeBa2vKTnryDqqDdidebFgISRVPc9MrH0lmHQDa5GzovvDRP3iOMXaif9972VmKVzoZ63yW6HD8qTbLr80t4EHL7Dud5P3t7Bij3dyTL4X%2FeHEmZnxmWBJTYwvc6KkzbqVPJ16Da5EMz1iFFagLLAEM5coH0QfEVLGBWevwbICoYJDgZRjpXsz1TaUl5%2FAoyZdYz4wrrT4wQY6pgEO2w%2BQS84aTy%2BRCCX%2FjikQzShqQ%2FhWyq%2BUP0IZLiRGnGBW7HlOsERQ7hAIGv9pI25N9DqSEjEFu8HvL8Ry3%2Fqys0AB8FT7sX%2FY8rsMpUJ5VjFCLlQTcRk4VuQ7dTBM6%2B7IjmJxB2Tp%2FzfU2jZITn90uOWE%2B6iwiM45T5Bn48n7pAD1JjsBCwWnt%2Ft2mvoUX5nNL8pFa4ncF3OG71ggFqJDqODpg9rx&X-Amz-Signature=ac1c2c26e206e9b57e0a769975a9556611bc2a9a2d9c928609505407086faad0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EHYJYIR%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T220829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIHqHlGlP6wdKyTEQHInmpefNC76Wdg3tAL0SiM5TiJyPAiAT8RIbSHS5rfhKnuLCVRX3R2EpXwVsLUaajoCT03ei3yqIBAj3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFVHZcJxwUmHDUj5CKtwD63Wwqt1BOS0sL5GNjIxtaIkS%2Bajr757gWE3CaBBBNs4%2FOJ8m0Ip6oLEn43iyY3FAZ%2B5AyNbFpvBbopcQ5lgxVOsj%2BJ73NjVSarhgmjVDPOO%2BXiIkoW3TyFHqED5X3A148z10c0d7vuwm9Gc4lIAxlRH7knxGFqGPYsTqAjvxBh12tz3G3YN4Q3Zh6E%2Bxk%2Feaa9%2FVXJ1eBimV7qXz%2B9JhXKig5iQ%2BO3i%2FAIN23BwaYZy1g4omQ5yp45CtiFEX3ocSnRn5fvrrEKEqN3h4lHgamkx44jV3fuzzeaMcgddnkfDUNiqvOvJLaaLse2ckb4CV4dFUq%2FjmGOlIGnzf5NMVwqS%2FFVTe7c5JNlZw%2FranLx%2B0I6pmO4FEYoXwNbzc2p8SKKB3ZJWwILXz8sxt1zJZMvWkXG2tGEa3kg7wdueqhrKuZ%2FaAUH4ORMJeBa2vKTnryDqqDdidebFgISRVPc9MrH0lmHQDa5GzovvDRP3iOMXaif9972VmKVzoZ63yW6HD8qTbLr80t4EHL7Dud5P3t7Bij3dyTL4X%2FeHEmZnxmWBJTYwvc6KkzbqVPJ16Da5EMz1iFFagLLAEM5coH0QfEVLGBWevwbICoYJDgZRjpXsz1TaUl5%2FAoyZdYz4wrrT4wQY6pgEO2w%2BQS84aTy%2BRCCX%2FjikQzShqQ%2FhWyq%2BUP0IZLiRGnGBW7HlOsERQ7hAIGv9pI25N9DqSEjEFu8HvL8Ry3%2Fqys0AB8FT7sX%2FY8rsMpUJ5VjFCLlQTcRk4VuQ7dTBM6%2B7IjmJxB2Tp%2FzfU2jZITn90uOWE%2B6iwiM45T5Bn48n7pAD1JjsBCwWnt%2Ft2mvoUX5nNL8pFa4ncF3OG71ggFqJDqODpg9rx&X-Amz-Signature=2b7fa43c259c4870885b42d5ced494d92a898ef2db62d6fd19a83177e6148a6e&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EMQZMAI%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T220832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQDbjNqJ5Lu2K5jaKKSyhtCaK8adab1%2Bnja4%2F7tuRkHYFAIgVpVL3T2kI%2FFaGkX71d73VoDEt4AfeHWTeKxRCm9vt2sqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHMN6v3R0cS%2FiIiBqCrcA%2FRVRB%2B0vxx6TAdesFijSi0nmYnTC%2Fk4XipRCwmhp2HvpT9NAfcy%2BtN%2Fp0r9qvflOA4nNOqhqCUjxqRcGM5yzXe844zHDpopOs%2F1sa%2FOKCKawMsGdOG4YgLzdJqYSF65aqGuymUgM50%2FbBqfvkA5yBNCfchex%2BEq6nYMcRtVwI4hkZJmfoCcFLRex58xIthgh2FH9IqS2OJalAQu0brFQCXLuHuvN4wl8aHUo23uXUXo6jztMJuMYz5jAZyHnKcA3g7YyygjP0po%2B9Rgg%2BY0Q%2FC9QccnpUzgdcxbTgi5P33ycgGnBDSai0jUYV5BGCfQVy8qWgSBlJubedBqOWUpH%2BfjVNuawpWD2KD%2BKL%2Fa4lhqarfj9atefcpKCQ%2FTDM7CxGAIFLPJRgPjDM5hQ9CeVp6hhAQW9LcBlaMCOJP7ppKUMkW7%2BWmflVJ6%2Fh7kZ76sJ2XWD%2FnrILdhmAvjr8E7Opakzle%2BVa73cQUP8ySTPARfLz2fYNxxclDQ5nVthThSrVZ7g1KtCc%2BRuvOzeGYZkiuboMuy7RQTF6bJSVz17hFDLqhJaVa%2Ff8UL%2Fuosc4rRzlQkGyKg9N5jxIjy1OSYOSOq8wiOHdDGgHi%2Bb5Mtvx4fRDM%2FVabMmm9YvzqbMKOT%2BMEGOqUBqdFzy6SVQAbhqqrsh3HqKaZ%2BJ2aSjw%2F8sUxXesUPS5KBm276Pj90qGW%2FEmDy%2FZiO%2BFnqQ%2FLkHo5ljBfk9W6elJAwDrdoFP9p5FKX2lM4GtFS%2FS8jyi25PwZwC%2Ft9h1ewbApAPMcgXt%2FU5ANDrCHYMUZ6eAyYlOJpYcfl7C2yJc7Yu%2FHatONKpNQeKIYa88oRM9xgIybHZBprpyObUbqWzKd0%2FlRj&X-Amz-Signature=9f616d77c53ed1144eead7825491ab286464560c46e9e51598d479fd430572d7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCFOZUEO%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T220833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQD7A%2B2LsZ3RVAJdyN2sduRASpX7A509KNKeXCc9iaNJ1wIgX6HDPtV7pEi7Y7bQX1%2FnlDwFr13Nl0QkyvEe3QZyaYgqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCrdUPwPR0KCj%2FlQgyrcAwUundPScJ4S5f1cmLQ3jcsnJOFsSozkDIXCZBc8yMuXNe6mhI0mvHFyhiqGe8whrDj1M%2F3DzRBniUmidwl%2BEytsokP6bD%2FZ%2F5ivnF%2FVPfqTZl9YEVq%2BZmkL4I7KLqur71wTkhKylxDjJXso52I%2Fm%2F1PkfhRR9gM2Nq3K87i6akFhOAOgjeTDtb5Buvc5%2F9gCv05UUjRHx%2BUbrXGyW1tgSCrQB6ksng%2BG6plUtlzZDfj4jd0GUPU3UGoYhEFQUJ2dYNPCmhG9jocVQsb67zJKTAqrazMm83VrBq6gTVupaQCY6GzfTfxP7yxIOCWy4Xj%2FDG%2F9QGDLyTIIcFzn5J1aaiTOqIG4Urjj%2BM8OHpCkrZm3EX%2FfCB1wAYRH8uK1QbbwU7uuAGWCkPmjdY3dXlt%2FLvp9HikYT2ccMaz0XI4%2BKWcm%2ByPfIcYwOBfGX384%2BNleV3uSwUVjDElW2OkI4U3IFwQBTQF0mNwlZOv6fLoDueoOMKLOKJtPHBaYeg56InzrgiYAx6EAO6Yt42bvd5rZiq8J1xtsCx8ywc0Et0ZIHeeBpa7Z3W3PtXoMd6f5wdSn3K3S7d1GkqRB7S1M5JSp%2FMRdQ62Yqh7yD9JwIq2dOC7RWjV%2FJKDamnyovS9MO6T%2BMEGOqUBXCamrM3qS%2B5BP%2F9MsmFXcZgveOEqBtU5DKHhWfYn3ZaTSwW%2B9pb13p%2Bs7Mhh5ihH9JzqtC7MVOwwzzCJk0bI9%2FxMxxKAbjqiPY%2BE3SIrQ6r3HbqCWk3LSJ%2FCKJuFFzo9Z5hY9YmJKIo9iNFMXermncJS4IC%2B8ru8rJ8J4c3U0NZZe45%2FCd7ozzcaNvb8x579ocjT48YcJxYJV0H5n1ibia5BmoeC&X-Amz-Signature=8a33f18594a2203b22f50c711e0939793c79711dd117fc7b550bfb2f3749b1b4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EHYJYIR%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T220829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIHqHlGlP6wdKyTEQHInmpefNC76Wdg3tAL0SiM5TiJyPAiAT8RIbSHS5rfhKnuLCVRX3R2EpXwVsLUaajoCT03ei3yqIBAj3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFVHZcJxwUmHDUj5CKtwD63Wwqt1BOS0sL5GNjIxtaIkS%2Bajr757gWE3CaBBBNs4%2FOJ8m0Ip6oLEn43iyY3FAZ%2B5AyNbFpvBbopcQ5lgxVOsj%2BJ73NjVSarhgmjVDPOO%2BXiIkoW3TyFHqED5X3A148z10c0d7vuwm9Gc4lIAxlRH7knxGFqGPYsTqAjvxBh12tz3G3YN4Q3Zh6E%2Bxk%2Feaa9%2FVXJ1eBimV7qXz%2B9JhXKig5iQ%2BO3i%2FAIN23BwaYZy1g4omQ5yp45CtiFEX3ocSnRn5fvrrEKEqN3h4lHgamkx44jV3fuzzeaMcgddnkfDUNiqvOvJLaaLse2ckb4CV4dFUq%2FjmGOlIGnzf5NMVwqS%2FFVTe7c5JNlZw%2FranLx%2B0I6pmO4FEYoXwNbzc2p8SKKB3ZJWwILXz8sxt1zJZMvWkXG2tGEa3kg7wdueqhrKuZ%2FaAUH4ORMJeBa2vKTnryDqqDdidebFgISRVPc9MrH0lmHQDa5GzovvDRP3iOMXaif9972VmKVzoZ63yW6HD8qTbLr80t4EHL7Dud5P3t7Bij3dyTL4X%2FeHEmZnxmWBJTYwvc6KkzbqVPJ16Da5EMz1iFFagLLAEM5coH0QfEVLGBWevwbICoYJDgZRjpXsz1TaUl5%2FAoyZdYz4wrrT4wQY6pgEO2w%2BQS84aTy%2BRCCX%2FjikQzShqQ%2FhWyq%2BUP0IZLiRGnGBW7HlOsERQ7hAIGv9pI25N9DqSEjEFu8HvL8Ry3%2Fqys0AB8FT7sX%2FY8rsMpUJ5VjFCLlQTcRk4VuQ7dTBM6%2B7IjmJxB2Tp%2FzfU2jZITn90uOWE%2B6iwiM45T5Bn48n7pAD1JjsBCwWnt%2Ft2mvoUX5nNL8pFa4ncF3OG71ggFqJDqODpg9rx&X-Amz-Signature=c9bb16bfb497b63a7d7cffdb4da1c04a9d6912d56be6be0e76b67a1255205e9d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
