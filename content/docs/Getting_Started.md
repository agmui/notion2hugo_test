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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q22TJXIR%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T080939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIAuwFlF6LReb7NqDkkjd7VylCL8VMgzIYTp9t%2FfrLFwCAiEAwRKW2VIiXin8umKo5%2BPMgjgYtTaQq5P8HqOSXC9xdS8qiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCtonlodaPUQ3ct76yrcA0ITmNzSDcR1UjFRZrXtp1%2FHa4bOaQ3BQW84RYM5Sck3KGLnPlu9pk%2FP4JN3Ay93XvyWy0UblYPV%2B64bv669QncrItCCSaaI71sqSz3mWXlzthxOMmrtErOPf9n9edB0Z2LmUdq6ZvtlgnW7efoHjnjgIvyZlQjzM0rrPPGgwoTgH%2BBtGkot0MOuYohsCcyvaewwjhnn1NQSf8EWruxDDl1%2FzPvhmxN7GWQTrKqX97QaCLSWM9PjzkLFg9u17KTA%2BS37EClRhZctp%2F5mXBqDyDmCxo1z0MU%2BniT3p5PIRAV0qrt37vMPQf8u7T%2B4X06CkjS%2BrmzsPNtlLLZACbFbyfDbYrCKpp00VH%2FNVLXle0ujdQjLcjbkuaSOISBvOAXQSbHaM6uC7VjUeHvEjFw8IyYUVO9%2B7Y32S3xj3xGBAlzac0AJaPvl32qJsNfwMnYgD3tczrEWfjuMRdjEHKBnvLxaGioYA5yFGZcTsCFykut5sRAran%2FUrY08HCDVIaAKf5Wj0uKKzn1vBi9t49k45IRjjWQhlmRz1VSb4uwm%2BDokbGHQVNi%2FhpyEETheHY%2Fer2KoUeAWYgjn9nXiyULQLVyW7ESiPeTcqHqkFG749pjE%2FXflhZJ6jegrlY5kMKWn6L8GOqUBQF6uq1k%2FnV28ETMJU7oN1WHEl5DA2zH1CuFj10bjO0qB4sXzevnt%2FkISyLLZTEZUhOiY%2BPqOTzVAG2TZTleZmsT6rLjsXBcL69%2FbAmlGRc16hCXTly%2Bm7lecuoQ2OPS9ilTibQ6K3w%2Bd%2FIxs%2BmCLyF9RPsNSfalp9SCgMy84oE4bYQqolBbwTdqp8j8A2AFO%2F90exaN4hvdFd7OqXCQFEb7LWUD2&X-Amz-Signature=84c655d8807993ae98e01c33f0f7cc2557e6bdb3585d5cb4d951e3aa97123f2f&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q22TJXIR%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T080939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIAuwFlF6LReb7NqDkkjd7VylCL8VMgzIYTp9t%2FfrLFwCAiEAwRKW2VIiXin8umKo5%2BPMgjgYtTaQq5P8HqOSXC9xdS8qiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCtonlodaPUQ3ct76yrcA0ITmNzSDcR1UjFRZrXtp1%2FHa4bOaQ3BQW84RYM5Sck3KGLnPlu9pk%2FP4JN3Ay93XvyWy0UblYPV%2B64bv669QncrItCCSaaI71sqSz3mWXlzthxOMmrtErOPf9n9edB0Z2LmUdq6ZvtlgnW7efoHjnjgIvyZlQjzM0rrPPGgwoTgH%2BBtGkot0MOuYohsCcyvaewwjhnn1NQSf8EWruxDDl1%2FzPvhmxN7GWQTrKqX97QaCLSWM9PjzkLFg9u17KTA%2BS37EClRhZctp%2F5mXBqDyDmCxo1z0MU%2BniT3p5PIRAV0qrt37vMPQf8u7T%2B4X06CkjS%2BrmzsPNtlLLZACbFbyfDbYrCKpp00VH%2FNVLXle0ujdQjLcjbkuaSOISBvOAXQSbHaM6uC7VjUeHvEjFw8IyYUVO9%2B7Y32S3xj3xGBAlzac0AJaPvl32qJsNfwMnYgD3tczrEWfjuMRdjEHKBnvLxaGioYA5yFGZcTsCFykut5sRAran%2FUrY08HCDVIaAKf5Wj0uKKzn1vBi9t49k45IRjjWQhlmRz1VSb4uwm%2BDokbGHQVNi%2FhpyEETheHY%2Fer2KoUeAWYgjn9nXiyULQLVyW7ESiPeTcqHqkFG749pjE%2FXflhZJ6jegrlY5kMKWn6L8GOqUBQF6uq1k%2FnV28ETMJU7oN1WHEl5DA2zH1CuFj10bjO0qB4sXzevnt%2FkISyLLZTEZUhOiY%2BPqOTzVAG2TZTleZmsT6rLjsXBcL69%2FbAmlGRc16hCXTly%2Bm7lecuoQ2OPS9ilTibQ6K3w%2Bd%2FIxs%2BmCLyF9RPsNSfalp9SCgMy84oE4bYQqolBbwTdqp8j8A2AFO%2F90exaN4hvdFd7OqXCQFEb7LWUD2&X-Amz-Signature=9d40ec569ca498b4b470ce1241ebbd7495285e9278523ad14bd31ac12e95ddb1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656TG4AHM%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T080942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIAE%2Bn4RVTDRROLsv9RXMb4VIkkao41YDwZG5DNo3EAOkAiAk5YjEG6QsqRWzzAa1w5FukvDJFhGLxtQn0d4HakAyMyqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFzKBhTy2ceVC%2FkvFKtwDR6tDM4ThN1RwtTu9nyEBK2IaLrvgokF21ghubMoSvz4g3xM%2FdikAherKzfTrv%2BX2XVgssnmkcHx9xvUQmBAAm%2BcOXZ5z21bYxW6yXXpdem6qf1li3rS11ywCXI4YwxaO6iOlOdpSezaSoZRYRscQMTtojw9vnT%2F409oTrMHbTkZiHpw9jcPem3fmt43RQXTOVEg9Y3zFHFyFGsV2%2FlCNXy9iW6hKKuQrSfXw0QFBptIZMJBu8zji3b%2FMRbE%2BKdbkxIdCtaAVLsQHpe9tkMTNTHn50o0qgFUeR3R321seQhRgJHG82W%2F1q7U9ilCZZ2J1PUqgsfb7DPfN2ZLYWi%2Ftmh6RpKJ7sFUZOtigP1P%2FEv0QU2GUtBVL9A4tzYFMlcruW90MorBy01cTyEQX0CNnKXWm16qZwo8SgvH%2BgZi0%2FtZ7flNim5iwchrqEPdW0vpBKSuPOIM%2Ft8u71ZftTombuIHnUXF9jkRKRvfhH0V4dfckj0YUwA0WiiDVv3ICyVBUjtF1imK8Fl8rNPZgQIquN1yqNxRTAqFSMzgDwC8W%2FBvN74KbTmUtev%2F8lVYVmxbZ06k%2BHS0Fo6u5vlTh%2BIFHDcZk1j4K4tqWpRFjpyFftI98K1mk81PTzWFtibYwhafovwY6pgF%2BUWBaOpSUK2eGFTIzpmp5cd2U3qm0emcW4rOgu7ZUEEAIWjsvhErh8C5k2D44qlSyt%2BQcGTTJs9K8C9E7nS%2B4%2Fe15VYSJJD5p92BtX3bQQf3WgGP2CsVFGjxCPEgPl7PB6KfTWK8bsgofotUohI8Yprnv%2Fvp5BQHFzuq%2By9eNePOroWP2Nk4z9vtC48U04mbdoGSx%2F7dW7qGDAIi3jUQJKwLimvjv&X-Amz-Signature=beb288f3f52cf9208918e31b256046fcb26401ea3bd0d0f2316656f7c605d580&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDDMUD2F%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T080943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQDSY%2BEymFpqEHYibsXcsrXSt%2Bmb34uIjxisVc2seIFSXAIhALzltpk49pV5%2F2ip3u1ydiAJxJhzCGF5x3HJu5gs1dguKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxEV5%2B34AxMOJOBdjUq3AMGK4PwnURbdOicRMUGDTUNkFBjOP3Qjp%2BPUEMq7vWUYn6Jhv76K23bLE99UjOhY5q0%2FGQqoA8WZVIv9LQAluDr3aqRiqfcHog%2BvgoaDvMpU4eRvWfiR6uz0IYiw5d4jcEHgOHrpVFTG1%2Bml0KdRHo3oGxqCKv5FqFbzUyThxBcQ05YtrGbGWJ7cPwP3pTeSjBeRmb%2F0Ip4LlWQyBdBDsf90r4XXt2u8nwKaUuxN%2BlnUtvg1FOnLvMCHTzTgPOwTqliJMefOnNtwnM4qwl9w5FftrSyibM5hhrIdxv0MYsACd5OO7rxyE9HQenfgkmgvjwB%2FfgGWLEsmZFbEDtXWbMVooOUPFlhBa4OY5UwXZOC9CcnhrzYgqPkwlYnsZsey2AfK1RW5BhDyFmEWQLLXyA0WIwa%2F5j1RnQYBZQ8j2JXxxqvdk3xUQ4Ynodh4rmQliwqKI2uCzgsQu6Lg9ttqA0mU007HuLYTkLo3x35AdqOUzR9kfA0dnugAgIIa1iAMXWqgFHHJf0wXNgGoe2yQx3wmaRpTyoAUXc2A%2FYQjcKbxMh5KMmddfMpHKqJTD5kZzl%2F%2Fm9cvCcC2%2FMed5nnzocicaMfQDRwwec4pHSm5oLkLJnbDAjC6rM4w3Z7qDCaqOi%2FBjqkAdDoM2WICDGLO%2BiFkCoheE9yTKRV2fFT7jihYBwKoTsIMJZdvQ%2FmXZErkxaOexqkeK%2F2VJvgYu%2BWaMVM19b%2FsooWgG66o5yZXhWK%2BSWhuk9Y2G4cez3YTFJ5JC%2BVPBp7BZnAw5UkH3GPYROQf81pjDjYPbdR6L6AQ4nQh28pwdjkHycQTHZK8pd%2Fepckdfxc3e7NuTr0HJY8EZCOIXax%2FNtjhSq6&X-Amz-Signature=52769dbf6e17bf296d30ef593f71f7397d13274d1c3717c643995122a4176caa&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q22TJXIR%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T080939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIAuwFlF6LReb7NqDkkjd7VylCL8VMgzIYTp9t%2FfrLFwCAiEAwRKW2VIiXin8umKo5%2BPMgjgYtTaQq5P8HqOSXC9xdS8qiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCtonlodaPUQ3ct76yrcA0ITmNzSDcR1UjFRZrXtp1%2FHa4bOaQ3BQW84RYM5Sck3KGLnPlu9pk%2FP4JN3Ay93XvyWy0UblYPV%2B64bv669QncrItCCSaaI71sqSz3mWXlzthxOMmrtErOPf9n9edB0Z2LmUdq6ZvtlgnW7efoHjnjgIvyZlQjzM0rrPPGgwoTgH%2BBtGkot0MOuYohsCcyvaewwjhnn1NQSf8EWruxDDl1%2FzPvhmxN7GWQTrKqX97QaCLSWM9PjzkLFg9u17KTA%2BS37EClRhZctp%2F5mXBqDyDmCxo1z0MU%2BniT3p5PIRAV0qrt37vMPQf8u7T%2B4X06CkjS%2BrmzsPNtlLLZACbFbyfDbYrCKpp00VH%2FNVLXle0ujdQjLcjbkuaSOISBvOAXQSbHaM6uC7VjUeHvEjFw8IyYUVO9%2B7Y32S3xj3xGBAlzac0AJaPvl32qJsNfwMnYgD3tczrEWfjuMRdjEHKBnvLxaGioYA5yFGZcTsCFykut5sRAran%2FUrY08HCDVIaAKf5Wj0uKKzn1vBi9t49k45IRjjWQhlmRz1VSb4uwm%2BDokbGHQVNi%2FhpyEETheHY%2Fer2KoUeAWYgjn9nXiyULQLVyW7ESiPeTcqHqkFG749pjE%2FXflhZJ6jegrlY5kMKWn6L8GOqUBQF6uq1k%2FnV28ETMJU7oN1WHEl5DA2zH1CuFj10bjO0qB4sXzevnt%2FkISyLLZTEZUhOiY%2BPqOTzVAG2TZTleZmsT6rLjsXBcL69%2FbAmlGRc16hCXTly%2Bm7lecuoQ2OPS9ilTibQ6K3w%2Bd%2FIxs%2BmCLyF9RPsNSfalp9SCgMy84oE4bYQqolBbwTdqp8j8A2AFO%2F90exaN4hvdFd7OqXCQFEb7LWUD2&X-Amz-Signature=f90ce1055024661c5205b1dae68a2905019891f18c3a0245c6efdd612b87f930&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
