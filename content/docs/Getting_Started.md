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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STIS7HNO%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T081017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEsLvfXIvP5KvKDLFiifwPhFsWdKEJFhkhP9DuGBQKxAIhAMO3TtNYgRtz%2FfsLqN6JR9TupYy75b8NPGkmx34OJJY6Kv8DCFgQABoMNjM3NDIzMTgzODA1IgyTHeM2utwzUPEKte0q3APsx%2BbUZm4r6by%2BThq9Bj7blMpFlHFGBAMuWZZp%2FVoTFZZ9tEWVB9O2VUpYumZPvwPclOlHzCCspnHRtv329FbH0y0kArtKLOq3Hmf1BMF5Nyrg0Q3mKOzdVNWR4TuF2%2FGhCxg4PHHBrf7z%2F7mybRzdtuA3g6L5%2BTL8EDesUqq45w0hdJ03eAO91z0GSiDpObGEQGLqDbe0ezCY85c1TVy7vQfH8Pm5TOrLoY8P5DgwHLSm0Zjlwvyk%2BmALV4rhSupoeUNqmJwh0xRGGBJpUQMNcAumX%2BnJ9VBWgUEf7KqL6kJnC04TosLd7pW4dc%2FoOGJus3xeJ3st5NtmsnRGweNwmVUCF1o%2BNCUBL5DgM85k%2FuH37QcLh3OIfHsEgpDKaQv3CKUFPy8HL1WoCtdKMlQgJdTHvo3wWRcs6kOT3CDMekm4GANa5Cm7yPMpnoUd6jbHnEy%2FQKKw4q1TpZFzjKLzDx%2F%2B6FoffsbaYraPRkn%2BXY30M%2Fqsd3oRmydPSbsjnFvD%2Bl%2F2JVu%2FbsX%2BaTIgcsgKp2hCELWRbopO0YGgNB%2BAaN%2F2VYzzlp48rCVitqHv09NIFLlfX40YU44bfufOXPI917xF5ggjoo3NU8os0K8yvsx4QNmDDit3ANhuhjD04KDBBjqkAUvrxixOzAz%2B9UaQj9fm5vKABoskwGcKe%2BxPXCC33LERxVobE8ACpQMyIKv3tbQs5eVy1Yd2fXx6vQXEl%2BmgqGa49ujemh1nGULKl6LVFpcSLmRJYJKRlkTYrlwyNi85xRy5%2Fe1mQqNt2ULvWXowh7tOkusjOaB1l%2Bz3HriSqkIpUZahpKA5r%2F%2BAT2bdda4JTm74ABQYfwQpfmujYkEXyYZ7tVEk&X-Amz-Signature=7e5e1b9ac024ead08339456088a042930adb480810bc46fbe5f4953f03b5754c&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STIS7HNO%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T081017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEsLvfXIvP5KvKDLFiifwPhFsWdKEJFhkhP9DuGBQKxAIhAMO3TtNYgRtz%2FfsLqN6JR9TupYy75b8NPGkmx34OJJY6Kv8DCFgQABoMNjM3NDIzMTgzODA1IgyTHeM2utwzUPEKte0q3APsx%2BbUZm4r6by%2BThq9Bj7blMpFlHFGBAMuWZZp%2FVoTFZZ9tEWVB9O2VUpYumZPvwPclOlHzCCspnHRtv329FbH0y0kArtKLOq3Hmf1BMF5Nyrg0Q3mKOzdVNWR4TuF2%2FGhCxg4PHHBrf7z%2F7mybRzdtuA3g6L5%2BTL8EDesUqq45w0hdJ03eAO91z0GSiDpObGEQGLqDbe0ezCY85c1TVy7vQfH8Pm5TOrLoY8P5DgwHLSm0Zjlwvyk%2BmALV4rhSupoeUNqmJwh0xRGGBJpUQMNcAumX%2BnJ9VBWgUEf7KqL6kJnC04TosLd7pW4dc%2FoOGJus3xeJ3st5NtmsnRGweNwmVUCF1o%2BNCUBL5DgM85k%2FuH37QcLh3OIfHsEgpDKaQv3CKUFPy8HL1WoCtdKMlQgJdTHvo3wWRcs6kOT3CDMekm4GANa5Cm7yPMpnoUd6jbHnEy%2FQKKw4q1TpZFzjKLzDx%2F%2B6FoffsbaYraPRkn%2BXY30M%2Fqsd3oRmydPSbsjnFvD%2Bl%2F2JVu%2FbsX%2BaTIgcsgKp2hCELWRbopO0YGgNB%2BAaN%2F2VYzzlp48rCVitqHv09NIFLlfX40YU44bfufOXPI917xF5ggjoo3NU8os0K8yvsx4QNmDDit3ANhuhjD04KDBBjqkAUvrxixOzAz%2B9UaQj9fm5vKABoskwGcKe%2BxPXCC33LERxVobE8ACpQMyIKv3tbQs5eVy1Yd2fXx6vQXEl%2BmgqGa49ujemh1nGULKl6LVFpcSLmRJYJKRlkTYrlwyNi85xRy5%2Fe1mQqNt2ULvWXowh7tOkusjOaB1l%2Bz3HriSqkIpUZahpKA5r%2F%2BAT2bdda4JTm74ABQYfwQpfmujYkEXyYZ7tVEk&X-Amz-Signature=3ef2ca411a2ed13890fbe9a799c4666f68946f86150fb24ad688ef1c121b106f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STIS7HNO%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T081017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEsLvfXIvP5KvKDLFiifwPhFsWdKEJFhkhP9DuGBQKxAIhAMO3TtNYgRtz%2FfsLqN6JR9TupYy75b8NPGkmx34OJJY6Kv8DCFgQABoMNjM3NDIzMTgzODA1IgyTHeM2utwzUPEKte0q3APsx%2BbUZm4r6by%2BThq9Bj7blMpFlHFGBAMuWZZp%2FVoTFZZ9tEWVB9O2VUpYumZPvwPclOlHzCCspnHRtv329FbH0y0kArtKLOq3Hmf1BMF5Nyrg0Q3mKOzdVNWR4TuF2%2FGhCxg4PHHBrf7z%2F7mybRzdtuA3g6L5%2BTL8EDesUqq45w0hdJ03eAO91z0GSiDpObGEQGLqDbe0ezCY85c1TVy7vQfH8Pm5TOrLoY8P5DgwHLSm0Zjlwvyk%2BmALV4rhSupoeUNqmJwh0xRGGBJpUQMNcAumX%2BnJ9VBWgUEf7KqL6kJnC04TosLd7pW4dc%2FoOGJus3xeJ3st5NtmsnRGweNwmVUCF1o%2BNCUBL5DgM85k%2FuH37QcLh3OIfHsEgpDKaQv3CKUFPy8HL1WoCtdKMlQgJdTHvo3wWRcs6kOT3CDMekm4GANa5Cm7yPMpnoUd6jbHnEy%2FQKKw4q1TpZFzjKLzDx%2F%2B6FoffsbaYraPRkn%2BXY30M%2Fqsd3oRmydPSbsjnFvD%2Bl%2F2JVu%2FbsX%2BaTIgcsgKp2hCELWRbopO0YGgNB%2BAaN%2F2VYzzlp48rCVitqHv09NIFLlfX40YU44bfufOXPI917xF5ggjoo3NU8os0K8yvsx4QNmDDit3ANhuhjD04KDBBjqkAUvrxixOzAz%2B9UaQj9fm5vKABoskwGcKe%2BxPXCC33LERxVobE8ACpQMyIKv3tbQs5eVy1Yd2fXx6vQXEl%2BmgqGa49ujemh1nGULKl6LVFpcSLmRJYJKRlkTYrlwyNi85xRy5%2Fe1mQqNt2ULvWXowh7tOkusjOaB1l%2Bz3HriSqkIpUZahpKA5r%2F%2BAT2bdda4JTm74ABQYfwQpfmujYkEXyYZ7tVEk&X-Amz-Signature=9565ab42440aca464948936387b7cef5a67943fb73ed62c92ab2d9ad1f1719fe&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAYLG2A2%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T081026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAu3D4LiGbj2WZ%2F%2BHS1cscsXad5Kqg5A8co07tQp3RZyAiAW61MocZtdV7nKeL1T01iZcSxDiTBPttnLLEDo36U7eir%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIM4HXKdCtuqks9W8BcKtwDgqQvzaigsVeKR61ncAc4sMuVqc%2BS%2FkXLuGLBzFE4Ug%2BHEOX7zKkG7JNMqAWPtFeQDVSpvIbA6R%2BUyQnMB2WIduuCIbaUkeGreeFPMRSbkWSGiANJmHHxDIgWs8yPDqh0PpdMaBruTzb6kxAVsaWo6Nww1FYmMyomIgZKS7P%2FWMvrSTlkBFXu5p5zXEwRmMLvfcpnODUc7xnM31ay6Vra2m4%2FMrv0StCUelrZ%2BGUi4h%2BfABTb%2FCqty8cRbpcrxU8BvoxeNy7L4LMbAyTvbP47wl7vFXZs8tabNQFLyzFWtBLKTx%2Bo5cWsPOfNL%2BWb%2BMa4wclwOpkkjauRIU42%2B%2FYl0r6jQtiGIhqrGuXT8ZZIru4SZE1TPwIzuFxGkMJ9jQO5HKrHRGIst8M0HajG%2F89xzd4UOwMvrecE53Gd1HTmcbSxO67tIe6Xy4920k0jx9nSsvjrWXwzmFh90QFha%2FyTBsOoSEHC6zFk6e%2FJDUyKZ0CFxIhK5a4uyfqAhJVG0%2FQp8FLpg%2FCDo37VG6YwZX5AeCdKDqDXQG5lmDI686gqxDlJU%2BJb%2Fp7kL%2Brmlp8OsnRO2rmilLdE2CT1h%2FiLnzLf49i1mpy3xdB%2BUQZCkhafk0ryRIoTvK9MnJmeAQUwgeGgwQY6pgGwaddCAVJF56CvJ3iORfZjFllOHikJKmOLidzbYtLzo8u2o98vgOTz2DnE%2BSjyVfDDa4o0feiNx0P1dbld3U0HMZflKUVOlpaBIZ6mWQjgXOs7fisTfD2xNO0QexqULFezO%2BVEQ6knxUMM49Bwh0dZTcQUFH55nmhvK8VJW12an1cAW8w1gq7nfcdb9SiATyibAmIRTM79b891eiE%2F7ECvfm0GYh1M&X-Amz-Signature=71cecfd3feed84f8560131ea95bfa26a7935eb58d7d069d8efe9d77a1c430e7b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663T3IGNX5%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T081027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEfISzcj9ckLZCJrhNiwLMy%2F4k4X67fQZpf1d24%2BvS7wIhAO2F7YVMwq00PM78Nm8kez6z3aZoM5qq4tYKlk9ZaLbkKv8DCFgQABoMNjM3NDIzMTgzODA1Igx9THPCeh0tzlQLXIMq3AOK6xcyIxNpqBzdneHN9WV4oKNea9%2FeSmJ5JGBK5gQJfZF3LjwevdHXW8jxvMmaadmbXi7XugnUTA7hitqZPjSOOfGDegE8XexVNnLUIU54xqFYCiTQC1GJplxfYU26DmO8Ltd1bp5xv37V6bfyPj1v3FgUrE0%2Bf1B6szrQIXvWonqZ4AQN3FyVFH%2B56ydgYTKNdqDlXB824D6kIz%2BnqyOiyDyWxPzyw%2FsRe%2B%2BWkvxqwzsXIP6RQKMWtgPi%2FVmk7jbTFdWmHBOhvfm5WR4lGRPe3u10XxQB%2F5qmbvqbp%2FOVQPJQ60uOb%2FFM2wpRTi0ASDPihIb1tuPPC19ERSo6fZFGueV%2F5IRYAuULaHRATdKtEWPsVmYgYY7sJeJe819Kic2O7fssQVT8EKebXDY%2FFGjO%2FAzLA%2BiO9CJPiHM%2BTPosbMiaqljnLkV1AB2RPsnzXfHtf8IDkyXfYkmL1YXjTvPb3oelDoFGXnstkn2ip7W%2BfveHwPmggasorjrrB8CVFwP%2Fx0CEjwao%2FsapS0Q3ZYv0oKi2EpUys8zqp4SAqsYeXCWzpmjnW3JKxquU01vrQB909fKGGwpPpwvSjmRFnF5rbOVVBlNFNHxaTX6WciTClv8aMGfO9T3nrAThcDCw4aDBBjqkAZLMnUlzPaBgEYtSBnx6JGpR2I2gJ7UAkSf6JucXMyMvxEd38bSOSH%2B2nTr1nf%2FTEM9Uo4qC4%2BS4%2Br6kFxzovwBCR%2BlnyQFpdw9oq52RkMqDi1SoMmNawHO2lIIZKVOiFyRbVhTe8Ey1WgsxIpKOOnMHDEdFB%2FbShKCm2CjnAH8JYcck5A2TkZrTMWtPoiDyvlY%2FjV7wc0RiQu86S8JsAYy6URHI&X-Amz-Signature=25f2b4a1b562ade258f3de77b309641f290ee442b238f9aa8837f8c4d669be18&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STIS7HNO%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T081017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEsLvfXIvP5KvKDLFiifwPhFsWdKEJFhkhP9DuGBQKxAIhAMO3TtNYgRtz%2FfsLqN6JR9TupYy75b8NPGkmx34OJJY6Kv8DCFgQABoMNjM3NDIzMTgzODA1IgyTHeM2utwzUPEKte0q3APsx%2BbUZm4r6by%2BThq9Bj7blMpFlHFGBAMuWZZp%2FVoTFZZ9tEWVB9O2VUpYumZPvwPclOlHzCCspnHRtv329FbH0y0kArtKLOq3Hmf1BMF5Nyrg0Q3mKOzdVNWR4TuF2%2FGhCxg4PHHBrf7z%2F7mybRzdtuA3g6L5%2BTL8EDesUqq45w0hdJ03eAO91z0GSiDpObGEQGLqDbe0ezCY85c1TVy7vQfH8Pm5TOrLoY8P5DgwHLSm0Zjlwvyk%2BmALV4rhSupoeUNqmJwh0xRGGBJpUQMNcAumX%2BnJ9VBWgUEf7KqL6kJnC04TosLd7pW4dc%2FoOGJus3xeJ3st5NtmsnRGweNwmVUCF1o%2BNCUBL5DgM85k%2FuH37QcLh3OIfHsEgpDKaQv3CKUFPy8HL1WoCtdKMlQgJdTHvo3wWRcs6kOT3CDMekm4GANa5Cm7yPMpnoUd6jbHnEy%2FQKKw4q1TpZFzjKLzDx%2F%2B6FoffsbaYraPRkn%2BXY30M%2Fqsd3oRmydPSbsjnFvD%2Bl%2F2JVu%2FbsX%2BaTIgcsgKp2hCELWRbopO0YGgNB%2BAaN%2F2VYzzlp48rCVitqHv09NIFLlfX40YU44bfufOXPI917xF5ggjoo3NU8os0K8yvsx4QNmDDit3ANhuhjD04KDBBjqkAUvrxixOzAz%2B9UaQj9fm5vKABoskwGcKe%2BxPXCC33LERxVobE8ACpQMyIKv3tbQs5eVy1Yd2fXx6vQXEl%2BmgqGa49ujemh1nGULKl6LVFpcSLmRJYJKRlkTYrlwyNi85xRy5%2Fe1mQqNt2ULvWXowh7tOkusjOaB1l%2Bz3HriSqkIpUZahpKA5r%2F%2BAT2bdda4JTm74ABQYfwQpfmujYkEXyYZ7tVEk&X-Amz-Signature=d36e54bebd7c2a7c6bc2fcce6ffd8dccd6af597b332052104354019788597a0d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
