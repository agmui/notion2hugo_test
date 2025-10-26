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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZH4MMHPV%2F20251026%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251026T013949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGHlm%2FZ9wjoNhXpKzFV35OudL6rIr%2FAXaKkbIC8H3PHwIhAM4vHyfEReBW%2FzeKQoB348BNXPYN1b9%2BeHHaWoUzO%2FIEKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzKEJrKCUCzJ8zt1WQq3APVoLzAgZrBEljW407IW9z8HSt4Shot9f1hCAX5ahKbmZTBzSMcKEE0eCybzFf7tBO2LH595A7F44Wu1xvvMfuzODkXj9yKM%2BCmlrSARy4UNqIFUd72ezA7Fny2%2BlcZJagieq8Gkqbi36RcWZ2rFEZIzCU5nryP4MteMz5JefiuSKy9vm3iIjRxoAx8yZ236bCmh4cZom1iS5OKinNCOAy2hQRnf40%2BPYyIT0dUjaLQ2kBspipUZHROGzJXtKG%2FUXL7qXzyhZdLGlhCdapGZpYdD7LQt5Y234P5FXtaW%2FK94hRiUnxza0OuT32OPOcCCfjWRFK375Jz%2BN88ON4RvyZTXVAMRcb68R1o%2BFUB6glmkdkgOTOQ0DTjSKWkcbuxeuhkc%2Fc%2FrP2dcyqJ1F%2BZPYf3D40SNpx7kuKIhAXMA5J%2FayurboC1%2BZ%2Fa%2BDqudkP7Z0GsPCjYxXdRBe%2BeiEF5UzW%2F5LiCEcLQw1sc%2FefUT6m1ra0C2OZAbyi80Mvl6MIZ3cDVdLDxWRhHK0JgVsXA0Yz8Johl%2FPRbHKLjhRmfciQUh0HzFa5iPh32A3x8IPKczdL38wTMQn11KDnVWDeU47DjNwUAKcGpy%2FPfxlhQwZXGqrVrLKpV8UjSkLjwnjC3q%2FXHBjqkAeZgnAaav19fyMA7uvhw39wOz0LU6q7%2FUKA7x5tb9BGIf%2B0WSuXTpY6ozWA8QICCs2Wu4FJ5Jm1EVO2Xv2mMiT3%2BnXMGMcjVq9f6StxWHrMJNte%2BKrJhZYxz9LvGh39y7U%2BkXGQZALOfp6rR5RD7bCn3JlIMlKSlceDBvf4cC7A7V100K%2Ftks054KEAN7LvXG0e32A0nKDfFrO5YyQq%2B7UiEX3Yt&X-Amz-Signature=069492ab6fc2ed7e8d46f52e8eba7db2e95c3730667d70a0526d511b96d1bd08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZH4MMHPV%2F20251026%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251026T013949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGHlm%2FZ9wjoNhXpKzFV35OudL6rIr%2FAXaKkbIC8H3PHwIhAM4vHyfEReBW%2FzeKQoB348BNXPYN1b9%2BeHHaWoUzO%2FIEKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzKEJrKCUCzJ8zt1WQq3APVoLzAgZrBEljW407IW9z8HSt4Shot9f1hCAX5ahKbmZTBzSMcKEE0eCybzFf7tBO2LH595A7F44Wu1xvvMfuzODkXj9yKM%2BCmlrSARy4UNqIFUd72ezA7Fny2%2BlcZJagieq8Gkqbi36RcWZ2rFEZIzCU5nryP4MteMz5JefiuSKy9vm3iIjRxoAx8yZ236bCmh4cZom1iS5OKinNCOAy2hQRnf40%2BPYyIT0dUjaLQ2kBspipUZHROGzJXtKG%2FUXL7qXzyhZdLGlhCdapGZpYdD7LQt5Y234P5FXtaW%2FK94hRiUnxza0OuT32OPOcCCfjWRFK375Jz%2BN88ON4RvyZTXVAMRcb68R1o%2BFUB6glmkdkgOTOQ0DTjSKWkcbuxeuhkc%2Fc%2FrP2dcyqJ1F%2BZPYf3D40SNpx7kuKIhAXMA5J%2FayurboC1%2BZ%2Fa%2BDqudkP7Z0GsPCjYxXdRBe%2BeiEF5UzW%2F5LiCEcLQw1sc%2FefUT6m1ra0C2OZAbyi80Mvl6MIZ3cDVdLDxWRhHK0JgVsXA0Yz8Johl%2FPRbHKLjhRmfciQUh0HzFa5iPh32A3x8IPKczdL38wTMQn11KDnVWDeU47DjNwUAKcGpy%2FPfxlhQwZXGqrVrLKpV8UjSkLjwnjC3q%2FXHBjqkAeZgnAaav19fyMA7uvhw39wOz0LU6q7%2FUKA7x5tb9BGIf%2B0WSuXTpY6ozWA8QICCs2Wu4FJ5Jm1EVO2Xv2mMiT3%2BnXMGMcjVq9f6StxWHrMJNte%2BKrJhZYxz9LvGh39y7U%2BkXGQZALOfp6rR5RD7bCn3JlIMlKSlceDBvf4cC7A7V100K%2Ftks054KEAN7LvXG0e32A0nKDfFrO5YyQq%2B7UiEX3Yt&X-Amz-Signature=b48135f48e1b91fa828990251cec4ea01e5566a4680999e503e12cd4a677153f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZH4MMHPV%2F20251026%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251026T013949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGHlm%2FZ9wjoNhXpKzFV35OudL6rIr%2FAXaKkbIC8H3PHwIhAM4vHyfEReBW%2FzeKQoB348BNXPYN1b9%2BeHHaWoUzO%2FIEKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzKEJrKCUCzJ8zt1WQq3APVoLzAgZrBEljW407IW9z8HSt4Shot9f1hCAX5ahKbmZTBzSMcKEE0eCybzFf7tBO2LH595A7F44Wu1xvvMfuzODkXj9yKM%2BCmlrSARy4UNqIFUd72ezA7Fny2%2BlcZJagieq8Gkqbi36RcWZ2rFEZIzCU5nryP4MteMz5JefiuSKy9vm3iIjRxoAx8yZ236bCmh4cZom1iS5OKinNCOAy2hQRnf40%2BPYyIT0dUjaLQ2kBspipUZHROGzJXtKG%2FUXL7qXzyhZdLGlhCdapGZpYdD7LQt5Y234P5FXtaW%2FK94hRiUnxza0OuT32OPOcCCfjWRFK375Jz%2BN88ON4RvyZTXVAMRcb68R1o%2BFUB6glmkdkgOTOQ0DTjSKWkcbuxeuhkc%2Fc%2FrP2dcyqJ1F%2BZPYf3D40SNpx7kuKIhAXMA5J%2FayurboC1%2BZ%2Fa%2BDqudkP7Z0GsPCjYxXdRBe%2BeiEF5UzW%2F5LiCEcLQw1sc%2FefUT6m1ra0C2OZAbyi80Mvl6MIZ3cDVdLDxWRhHK0JgVsXA0Yz8Johl%2FPRbHKLjhRmfciQUh0HzFa5iPh32A3x8IPKczdL38wTMQn11KDnVWDeU47DjNwUAKcGpy%2FPfxlhQwZXGqrVrLKpV8UjSkLjwnjC3q%2FXHBjqkAeZgnAaav19fyMA7uvhw39wOz0LU6q7%2FUKA7x5tb9BGIf%2B0WSuXTpY6ozWA8QICCs2Wu4FJ5Jm1EVO2Xv2mMiT3%2BnXMGMcjVq9f6StxWHrMJNte%2BKrJhZYxz9LvGh39y7U%2BkXGQZALOfp6rR5RD7bCn3JlIMlKSlceDBvf4cC7A7V100K%2Ftks054KEAN7LvXG0e32A0nKDfFrO5YyQq%2B7UiEX3Yt&X-Amz-Signature=e8821964f99ad0f7dd1fd2df9812caae17b8662b4a25e46f41575f8e141f47e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSBMXLHR%2F20251026%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251026T013957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbf3SIpr6OGuz857Qm0b5PCgNOyTDXPTJ9wuB0o1IPIwIhAP1K3xVk%2BLQC1k%2FtGS%2FuDE88k1OIzecAmg9zCAwLEzdlKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxEjm2WRXAgqQM3kjMq3AOmZL4dmudeNTmZ2Cm72GHCN%2BS0FCqW218riPx5wQq5BlM7sQZGweKBWPVP4TCp7ChzTHHRIgG6pxbXnYFM6p6Cgt3vN6not073s11kwMZYHk4QS9UptDGIICyOQ%2F3ByyYnZ3fvGVBjazOgsMjPUb4SjjGnfvEJEHVg0owYcoej96o0uy37%2FfJ1aYlMvbbJ8pG5ct6lRrOrb0g6buxl%2BLYYTq%2BA0kJW0iz%2BrZHRMpPrVxNc5mcIFB9DxabwH9c5KVezu2obop2AbEYxwaI8q2qrMIO3Pn1IBOEGCXqbCQY%2BM052BNbT9pWTvuUV0MyHrRwUwOlnMyzxZtqDhnjoaqyxuAfZZxGnLBXh5VBq%2FQMeSRWKhZEQA3YuQeANjKjT%2Bss5NG6PPynl5O0xcNgfPEKgt0%2FSrD2QOOGhPXOKrzfKW1ERI6XMPjGxM7KNrvrMdplPkGNKkj7Y9YHUFzKQ9jB1V1QaDcvxBIWC%2B2zryXStRhkqzkC3wJiADYN6iG0%2FtPBiuuftNIlHRa6lCdBRczFqjsj4G7YcK5wJcnG%2F8lA9S4gdlGVipF5WfeTpVdFZoLvUvYA0iXhycndRPbQ1hrqEOoHfyLhc86%2BaxD59sjU9Bpt952pLsl3EVGl55TDMovXHBjqkAcHYTs%2FBnddbPGf9HYlDSX5GMpKzsDf9Hyv4tY7sie4sWE2St9N3cHUxCAayIci5ggy0f73gESXMkpnIPjpYJSgonDM4S6oX%2Bzcjgm6qOqPgbA7DA546pGmC%2F6t70wEgU8WzSfPfyh%2Fr8srip0xIBM9HgiTzM0ExduOeJr7JOCT%2FcoCK7Ajj10PRYL8SMYpsOinwnLCS8ofesFLOEvYpD1n5gTtl&X-Amz-Signature=cefc26917b4270927e0730ef700316fd3a55c4edf95f911868c95a705e16a2e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JWJ2EPM%2F20251026%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251026T013958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBCT0EkOEqEZtCa4QZD6Bn%2FPqUQtFOUANMmd61ZNwl6lAiAT1c0fYCIdv6ocmdTOFRdr8NhZ8gMFfjBunPIPAFOCASqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJCQq5dbdZlAjE1qGKtwDpnNq9pGzi%2FB4bZapT05lxc1ZKm%2BDmzQ4b8W4guzHfc4J5gcJ3M1gedNXh9O0JiI3mUM7Hsav2nif0bhE9rd7hUmW0YTIsCU464HhyFmKDyTDaXUqv2XZcic67AI3H0Ek7F31QqCb%2Fwq79lvvpv39AOUvglruUU6YuZfO%2FQ2nyrC7Rl1RAdf4pMUfIEKMljOFg8bD4F8MMsmlegmm1nUY8y2yE%2BDCSaNCEeukiPnTyqk9NSzi5rKYItW5kWtel%2FbuQV43ohu4AxGXJfYZSYZY3mMt2SAQAqXG3Z5FWtZFURxuLfhNdAzq2jiMgrhZqJlioAjTKkGBsflU2DIFtheaF9vXCpuZ7eNVYepcq8bQVIb3%2FamAMHJCZA4bzOWdzrhA0azwHUc73MlKZCcrcUj1BU39kBpCWQkFXXhES3xfEr0x3YwDO0l32tIvMJ61WfMVcje1IGkJvbWCIkuO1JxdZSeIOvXKru7viy%2BJcQARPevAIjcsqDuL5Na01zU4VtmHAqe26mx1kIQO3d3jJkffdlUF0gbps5CRMX8u0va92ikNZVuLIqFs2N8c00OGIZGtW1h%2Fx3S1EA1EdrUbIydnDqUPqsB0PTJa23SdRmHFpkRyo2M%2BJAYira7ukCcwmrD1xwY6pgE3st7TXgkBsAhBbhYnOPSdFgxDkLniKniwFgWjDFy%2BM8HFoWVfIICsAB%2F1MNt%2Bh8slzR55tM%2Bd048vTPfJe8VOdrY3jeUtBTCnOZTUUHSR2W%2BUP7SU3DPcgrFHLJPUxnf%2BiSmazrC%2B0b6XbX3S%2BcoLrpsU7D0K3nl9%2FjBiyyLMdOXcR91DrU6bwTzKohYsFSzlisrlsV6qgmsHc6Aq59KCZiwN0f8U&X-Amz-Signature=b560705ee8aced7c978522a098a246a2d0dd0b9c170fe2d86da8dd3dc9a1bb6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZH4MMHPV%2F20251026%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251026T013949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGHlm%2FZ9wjoNhXpKzFV35OudL6rIr%2FAXaKkbIC8H3PHwIhAM4vHyfEReBW%2FzeKQoB348BNXPYN1b9%2BeHHaWoUzO%2FIEKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzKEJrKCUCzJ8zt1WQq3APVoLzAgZrBEljW407IW9z8HSt4Shot9f1hCAX5ahKbmZTBzSMcKEE0eCybzFf7tBO2LH595A7F44Wu1xvvMfuzODkXj9yKM%2BCmlrSARy4UNqIFUd72ezA7Fny2%2BlcZJagieq8Gkqbi36RcWZ2rFEZIzCU5nryP4MteMz5JefiuSKy9vm3iIjRxoAx8yZ236bCmh4cZom1iS5OKinNCOAy2hQRnf40%2BPYyIT0dUjaLQ2kBspipUZHROGzJXtKG%2FUXL7qXzyhZdLGlhCdapGZpYdD7LQt5Y234P5FXtaW%2FK94hRiUnxza0OuT32OPOcCCfjWRFK375Jz%2BN88ON4RvyZTXVAMRcb68R1o%2BFUB6glmkdkgOTOQ0DTjSKWkcbuxeuhkc%2Fc%2FrP2dcyqJ1F%2BZPYf3D40SNpx7kuKIhAXMA5J%2FayurboC1%2BZ%2Fa%2BDqudkP7Z0GsPCjYxXdRBe%2BeiEF5UzW%2F5LiCEcLQw1sc%2FefUT6m1ra0C2OZAbyi80Mvl6MIZ3cDVdLDxWRhHK0JgVsXA0Yz8Johl%2FPRbHKLjhRmfciQUh0HzFa5iPh32A3x8IPKczdL38wTMQn11KDnVWDeU47DjNwUAKcGpy%2FPfxlhQwZXGqrVrLKpV8UjSkLjwnjC3q%2FXHBjqkAeZgnAaav19fyMA7uvhw39wOz0LU6q7%2FUKA7x5tb9BGIf%2B0WSuXTpY6ozWA8QICCs2Wu4FJ5Jm1EVO2Xv2mMiT3%2BnXMGMcjVq9f6StxWHrMJNte%2BKrJhZYxz9LvGh39y7U%2BkXGQZALOfp6rR5RD7bCn3JlIMlKSlceDBvf4cC7A7V100K%2Ftks054KEAN7LvXG0e32A0nKDfFrO5YyQq%2B7UiEX3Yt&X-Amz-Signature=49e44209636ce1d9c3ff073436cd48fc5178bbe3d0a1911f46276853b1884fcf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
