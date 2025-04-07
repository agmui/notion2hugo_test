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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642YEDEY3%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T050924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGch3ynpDibTAL4vW1i7H0vvJPkV6d2ksRNkReMa8nLxAiEAq%2BbVHUzowE6ZymByqCZAplndXeWf%2F5G%2BU8%2BPwqWDy%2BAq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDH5mMs%2B8uIPmcbAHISrcA2jmoS4Ddnvqo9OypPcWtZ8SsaFqkILd8VVa9bmV6satn6RLntTBwyy1lxCqrKwS78CM%2FsGW7ipovScjvS3v7lWMU79r7AB3tzewpcaepOH1hFv9BDuATI2Yqqnij0v12Z1nuwph%2Fsmow0ug2MFZGDnIf0T276PkXNu6rGUnkoIEvPwsZTQDPfUUp1CsOt0pzs4143zkyUEdolhQqqH6PEbSYTSHRgKoyTX2dfEBXRqR%2FyguhOwMq8htS7HSbXIaHOCv7s6BvKGhRF%2Blg5UtLLS3K0t1MWt1nxs7%2BpKpqzkKETI3cW8jm98w%2Ff8N%2FHRNRm4NbC34hX0k4TS4uZMLxvHuDmswHrHCwiJQDxoXszyPs8fV6Fswq%2FIC4L5uRDrFIpjVIV%2Fj4VwiNXkLlrO%2FWpPjsz5lM7lbk5P75Ig0rKmHWfE9Xx%2Bf69M13DYpB96nuyBjBvfh%2BKv4amTEF8mXacKHlYTslgLvymqHjJRM53JLShwUnUjj5SamuKTMJlPfCV8PKwvgl9Q7GloiYofevy2D%2FdTS5U1mJ5Cy55FhNX9MoE4KYQqaCB3%2BAJzEWlPGFSoUjx1KRe5g4OuS9Tq%2BjV2JKQ%2F%2Bv03nZDCSViKDXQ6Ck7p5XqUpJ30HTsR4MKi4zb8GOqUBOuuWRSfHr6vHLWVRh4h%2BQowci%2BRCi%2Fv3tINFlhy%2Fx7QN%2F9%2F%2FZzPpCRikt94kWlyj3%2F69DsX1iZ0arvAdeGQiT6M89tLdmaKjbt5scIymLJFQgDJB%2BN5D%2FBhquko5B3PZ9tPm22pQAvENoQwWNHrgIi%2BCJKk%2BMil60CPvBdQOhz0Uiv%2F0n0zEjJqEgMhIg5L3HKm0FrU2Z9Ecyd7pTjkwzyYnEfM9&X-Amz-Signature=6e0b5d80adc17ebaaf4b5e47d3a5a1edacebdcf0d58403a77de0b66f981d9d2f&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642YEDEY3%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T050924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGch3ynpDibTAL4vW1i7H0vvJPkV6d2ksRNkReMa8nLxAiEAq%2BbVHUzowE6ZymByqCZAplndXeWf%2F5G%2BU8%2BPwqWDy%2BAq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDH5mMs%2B8uIPmcbAHISrcA2jmoS4Ddnvqo9OypPcWtZ8SsaFqkILd8VVa9bmV6satn6RLntTBwyy1lxCqrKwS78CM%2FsGW7ipovScjvS3v7lWMU79r7AB3tzewpcaepOH1hFv9BDuATI2Yqqnij0v12Z1nuwph%2Fsmow0ug2MFZGDnIf0T276PkXNu6rGUnkoIEvPwsZTQDPfUUp1CsOt0pzs4143zkyUEdolhQqqH6PEbSYTSHRgKoyTX2dfEBXRqR%2FyguhOwMq8htS7HSbXIaHOCv7s6BvKGhRF%2Blg5UtLLS3K0t1MWt1nxs7%2BpKpqzkKETI3cW8jm98w%2Ff8N%2FHRNRm4NbC34hX0k4TS4uZMLxvHuDmswHrHCwiJQDxoXszyPs8fV6Fswq%2FIC4L5uRDrFIpjVIV%2Fj4VwiNXkLlrO%2FWpPjsz5lM7lbk5P75Ig0rKmHWfE9Xx%2Bf69M13DYpB96nuyBjBvfh%2BKv4amTEF8mXacKHlYTslgLvymqHjJRM53JLShwUnUjj5SamuKTMJlPfCV8PKwvgl9Q7GloiYofevy2D%2FdTS5U1mJ5Cy55FhNX9MoE4KYQqaCB3%2BAJzEWlPGFSoUjx1KRe5g4OuS9Tq%2BjV2JKQ%2F%2Bv03nZDCSViKDXQ6Ck7p5XqUpJ30HTsR4MKi4zb8GOqUBOuuWRSfHr6vHLWVRh4h%2BQowci%2BRCi%2Fv3tINFlhy%2Fx7QN%2F9%2F%2FZzPpCRikt94kWlyj3%2F69DsX1iZ0arvAdeGQiT6M89tLdmaKjbt5scIymLJFQgDJB%2BN5D%2FBhquko5B3PZ9tPm22pQAvENoQwWNHrgIi%2BCJKk%2BMil60CPvBdQOhz0Uiv%2F0n0zEjJqEgMhIg5L3HKm0FrU2Z9Ecyd7pTjkwzyYnEfM9&X-Amz-Signature=92082e7a1068df357737584219139af75ae59636c8f2cae3f78dcc5a4511263e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AD5GDWU%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T050925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHb1l6ML9%2FU7tgOj454BYv0fe89PJfu7mIyTnaGXq%2BtRAiBS5w%2BfSMVzE94Iy4nptwAiO8hZ31CMG0NDAFXOkOOzByr%2FAwhWEAAaDDYzNzQyMzE4MzgwNSIMvUz%2F29fO919nEyZsKtwDi159SUBp8M3B%2FoyAO%2FeybmRcDoq242qr1LnQNtQ7gKSjAV8TyKKTBnGzcVVpNKeU6Z4EIrjRQKenl6sfvH5%2FFoGyOMhbMp9rD9nq%2BtGck%2FeRLT1XSd9wjuBdbKq4W6T0HNX3XGjgak%2B4Tkeajbzo7c%2Fm3dAql7q%2Foe6mVZNWnvsL16HCRgAFYSqNvjU%2Fk0iKtYBaumFo4Q8hULNzrB4yzeaL7ub06UEgQOvEWelqs3ND86E7MkHeVUsBBNCC%2BtHXhHDfIO02y%2F2FuPPaUd7Cbi9zJtO5LjujoDPih%2BgZaN05GU52ynYpzvNJlK8gSsB%2BjwyT102skdrkbvkFxQTkbTRbPtLhf7AibZ5c4RsyMPfdUhQDulcsVZq0hyF1UCNy1GDHxB7rRGLOAnZ9h5mph3vrVe2UpN9Ixt%2Bb9ht9Irh0KBreW2lHAzaUYX5RNNcHRv9dSqgSIdJnb2aHy9LCZ0OMozXKq%2BBDXR9zU9Xz5qLaKxPCb64jcWjXnOJq3bfo7ShX7wyELcFrJl%2BhBRgtA9VcRZTYBF0%2FFyHjSPEFhXbdwO33zdWX0VYhlmSthJpWib60MK0kQftsC1HjzMz78NnWcjq6RNbpNd%2BW9cMGD4XdxZiIY1T5rfOaIRgw27nNvwY6pgGmJGJPc6KBjqm%2B9OqULfK4swlR%2FiLYW4%2BGwtd7zVJ8oMhgwFXb%2Fa4JNVtCjYwr6QWyFkUXq0kB5z%2F2T0sPdpBjZQHljnjfsq88StR0a9O8iL86lgcAFhpHIV1DZZSOMz1pF1cCOq2ueN3kFTKUMTQURJNRUIT%2F6xqYUFgsKatVTsZgp85bhW4LxiYLpbg6TZlDPg15Y0ylFHjKmfCZ8GCJUlrzBO5K&X-Amz-Signature=a63797351c6663478a629da9bf7ca7425eee0d09ee3e2abf6f79043244496dc7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JQ75BA3%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T050928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDw5uz7D5H2vovIelIfgRCw7GjlCCs1ExtXlTO65M%2FVOAIhAL%2BbBCUTVU4wzBDL3seLOH1bVa7ioxjujkYLwLRwTs82Kv8DCFYQABoMNjM3NDIzMTgzODA1Igzs%2BOA2gzKxJpli5Eoq3AMgEzY4nnashGAFGBJuZK%2FrLKxpcXIPsrngCmottoc%2BNNRJX%2BlM%2BEixDI%2FDSOnEv1Q%2BBypmmmYqgrn4hLFqPbq1%2F7HHzApx3gmIgfxLvUqWf4HamIb7f8mEVSfkjxc8qInU25EjtUNeAdOYaSeArM0VlMAcqhnPble%2FMx%2F31WZKvdPrYymDEWgkxiJiPTnfz9pPS7tE5FslwEsqVzItwzNZcDytTuMoiLjSjzfb5ydPmXgZ8J9nH6tz9Wsl3CizAZMpc2mrxiGHrl4WvFIVwFmYOPBP7LMrQiWQGu2mshU%2F7YhAb2%2BfPMLPSU%2BHBNbgcjnG%2B5T1KO1IvwJlqgzUrx3jH0UmKFlPtOfCIuKcmSHY8vR7RiAPOJIRwUTyLC40JEFQBJ3D4HJsHrsrylDAVVMNX%2BlhOk2U6HjgDKmPrbrzPnsYai8OMWmVtQ3vywTsbcii1S6agckDYsFDz8v9wJbEgqk9qy8msbbQTBUWMlRXx3xudMZJYrKUj2%2B%2B7oFRiQ7RvE8Hlu%2B1wOuq7LtJAaWeC1u7m5xoupgQu2zhVt%2FbNNDc8nSHYqPKIB7hM4mWXNwgoQxtTAXxlqRiiOZXKTGaO0NqIAkI8qz23Uj%2B8IEK2BcXTerY6ktHZGXEWTCxuM2%2FBjqkAaHhXUEcx26mIjPIJVCgRIdWkbZvQUpMcypInioQz2QF5Cr9oqBTmItOt8JJY9W8X%2FG%2FxEPVBF8WRESJE2EHayHxMpUhAYh%2B5gjbS78yB5yANMhn31oLBIhB%2F3ietqfCH74EqngVuT49ZUgcY%2F2TkIEurj4pJ%2FqFfL64qQ0MnlE5D1Ew9IHK4iZq7HbBcExCFtCdYHP8MU1EAIuFOkU%2BXm63fgsa&X-Amz-Signature=11fe453e8f0775fdedffb763d17b81c818e310475466ead6108273efdac7ca29&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642YEDEY3%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T050924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGch3ynpDibTAL4vW1i7H0vvJPkV6d2ksRNkReMa8nLxAiEAq%2BbVHUzowE6ZymByqCZAplndXeWf%2F5G%2BU8%2BPwqWDy%2BAq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDH5mMs%2B8uIPmcbAHISrcA2jmoS4Ddnvqo9OypPcWtZ8SsaFqkILd8VVa9bmV6satn6RLntTBwyy1lxCqrKwS78CM%2FsGW7ipovScjvS3v7lWMU79r7AB3tzewpcaepOH1hFv9BDuATI2Yqqnij0v12Z1nuwph%2Fsmow0ug2MFZGDnIf0T276PkXNu6rGUnkoIEvPwsZTQDPfUUp1CsOt0pzs4143zkyUEdolhQqqH6PEbSYTSHRgKoyTX2dfEBXRqR%2FyguhOwMq8htS7HSbXIaHOCv7s6BvKGhRF%2Blg5UtLLS3K0t1MWt1nxs7%2BpKpqzkKETI3cW8jm98w%2Ff8N%2FHRNRm4NbC34hX0k4TS4uZMLxvHuDmswHrHCwiJQDxoXszyPs8fV6Fswq%2FIC4L5uRDrFIpjVIV%2Fj4VwiNXkLlrO%2FWpPjsz5lM7lbk5P75Ig0rKmHWfE9Xx%2Bf69M13DYpB96nuyBjBvfh%2BKv4amTEF8mXacKHlYTslgLvymqHjJRM53JLShwUnUjj5SamuKTMJlPfCV8PKwvgl9Q7GloiYofevy2D%2FdTS5U1mJ5Cy55FhNX9MoE4KYQqaCB3%2BAJzEWlPGFSoUjx1KRe5g4OuS9Tq%2BjV2JKQ%2F%2Bv03nZDCSViKDXQ6Ck7p5XqUpJ30HTsR4MKi4zb8GOqUBOuuWRSfHr6vHLWVRh4h%2BQowci%2BRCi%2Fv3tINFlhy%2Fx7QN%2F9%2F%2FZzPpCRikt94kWlyj3%2F69DsX1iZ0arvAdeGQiT6M89tLdmaKjbt5scIymLJFQgDJB%2BN5D%2FBhquko5B3PZ9tPm22pQAvENoQwWNHrgIi%2BCJKk%2BMil60CPvBdQOhz0Uiv%2F0n0zEjJqEgMhIg5L3HKm0FrU2Z9Ecyd7pTjkwzyYnEfM9&X-Amz-Signature=c211ed6bf427b7062614e472e90fe4768cb5305b3f65f9e0241d041dfccb62f2&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
