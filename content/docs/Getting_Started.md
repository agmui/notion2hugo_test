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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSHJTJV2%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T150850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQCgy7Ce7T1UAbXuLq4PQOewr8FfG8SPV4bbdP3hMLK0BQIgC2cfFnMeiADFJZlKnpz%2B6Bspsfcy6POFi1ODQpg19CYqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAndsu0Kz5vtzEnhryrcA%2FMMqf%2Bxarpde1KFKoioWvGAr%2BJWvuieTSeMkPd0givZtrmx90gCocD337VeyRGnyX3gCTuOhy6sOjzbKb6KXl9dfa%2B%2BhltiEZWimRH4uOKf%2BeSSuBly8ctHiyDBXQ7co%2BdCfXbdt9ZVNy6wn%2FK5hTImw5VRw53v1qI%2BapRPV1lnuvJrbZ9w5Akw0RRfFWMckd4t6E85mhOujtt74RSjkvFHYmGn%2FeblFvmEVonOu8nOzzVtPfUvvPkruLY7%2FE2sSBF4dmpKZV4GbY5urwYZIeiqnUWRUi4uuOECguyTABA88%2FAOO27yqgQTfWdH%2BXgpRjjdh7%2FxFkGITE4PmqW1cRkBDlowKc6E6ABo6CfsJy5Hj36j07nDF7MMrB1Dg6FPebmhAq9drQXnGfv3%2FMYL4ZGPhhRnFF6vLKSNJzOOEsK9uSGX8y3tt98GJcPwnuVSMLDzckzUxixgLFMkivPKFLuUbDuQ6bRUZyxm6Q8s4pUlgjcYimG%2F5FydsmlCuWSuTvjNQvWm77zoKLhSPZeEJz7OUaLNIXIa6Wywypyl8qw6dQPmy0v7nig2Eub4oPdda%2FxLCrcd%2FsB9XI0C5MViM2afwAmDWFVb7dPIH4I4N6jIRGfrFOfO%2F6CmUu%2BaMKPto8AGOqUBXI8YM%2Fhdo862ckGzSvwoyijl4XA%2BdepB2aAkU0jxIcj9ngh0rtcjX3J3kFSi%2BfoyrQa%2F6y2yhtCeeVX6U91budsJk%2BQh0T%2FF5j0vrq2EyT5a8HGiwqbSPS4ChaA%2B3pgqAhRSEJK%2Fo85aD7S%2BZdwL5044kMIungMyBZVbN8fZ%2BacjIfSs3BOg%2FJb1yWzoLNVMqAkPatTFcFwFpSHUmRd9v5RaP8a6&X-Amz-Signature=a2b209a1bcc5c15aaa4719f847a533ad88fd2f27eb801b24e9958b8c1d39b3d1&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSHJTJV2%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T150850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQCgy7Ce7T1UAbXuLq4PQOewr8FfG8SPV4bbdP3hMLK0BQIgC2cfFnMeiADFJZlKnpz%2B6Bspsfcy6POFi1ODQpg19CYqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAndsu0Kz5vtzEnhryrcA%2FMMqf%2Bxarpde1KFKoioWvGAr%2BJWvuieTSeMkPd0givZtrmx90gCocD337VeyRGnyX3gCTuOhy6sOjzbKb6KXl9dfa%2B%2BhltiEZWimRH4uOKf%2BeSSuBly8ctHiyDBXQ7co%2BdCfXbdt9ZVNy6wn%2FK5hTImw5VRw53v1qI%2BapRPV1lnuvJrbZ9w5Akw0RRfFWMckd4t6E85mhOujtt74RSjkvFHYmGn%2FeblFvmEVonOu8nOzzVtPfUvvPkruLY7%2FE2sSBF4dmpKZV4GbY5urwYZIeiqnUWRUi4uuOECguyTABA88%2FAOO27yqgQTfWdH%2BXgpRjjdh7%2FxFkGITE4PmqW1cRkBDlowKc6E6ABo6CfsJy5Hj36j07nDF7MMrB1Dg6FPebmhAq9drQXnGfv3%2FMYL4ZGPhhRnFF6vLKSNJzOOEsK9uSGX8y3tt98GJcPwnuVSMLDzckzUxixgLFMkivPKFLuUbDuQ6bRUZyxm6Q8s4pUlgjcYimG%2F5FydsmlCuWSuTvjNQvWm77zoKLhSPZeEJz7OUaLNIXIa6Wywypyl8qw6dQPmy0v7nig2Eub4oPdda%2FxLCrcd%2FsB9XI0C5MViM2afwAmDWFVb7dPIH4I4N6jIRGfrFOfO%2F6CmUu%2BaMKPto8AGOqUBXI8YM%2Fhdo862ckGzSvwoyijl4XA%2BdepB2aAkU0jxIcj9ngh0rtcjX3J3kFSi%2BfoyrQa%2F6y2yhtCeeVX6U91budsJk%2BQh0T%2FF5j0vrq2EyT5a8HGiwqbSPS4ChaA%2B3pgqAhRSEJK%2Fo85aD7S%2BZdwL5044kMIungMyBZVbN8fZ%2BacjIfSs3BOg%2FJb1yWzoLNVMqAkPatTFcFwFpSHUmRd9v5RaP8a6&X-Amz-Signature=370a2e81b96f5bbfcf12ed03caf728d9fbfa24030b1c6131318cd5acd4b6fff8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOCLDVWZ%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T150855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQC53MOArfUhquCrEDL6a2uf9tbOP%2FG8RE0miPE1gQ6MHgIhALOjTY2QsN2%2FS89BxnLnW9EimqWg8KRjgu3bR6AEZrcVKogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxLWGDCf1NlJBJ90B4q3APAnrO9RJHh5Dk2zTYkA0pEKgGf%2FIGCWZ8bHTKL7MMH5xgxOnedyMD%2BmTOh1rBveEzjwUwdcvvZ2zTswMjdqVI%2B1mm%2FCvW7NSLxKti2xNBysctSCtWfl04gzCgjfkkjLd2hOjZuAJpf1aKqLRvO52zOhX2rY7tPeQwaodzTd07O%2BlVFaMEgvGDHmgUc%2B%2BatPgztuuSQAw7SkEQgv9Jbd%2Bc%2FouNz658ybLlid%2BawNQw8GPYPGaYFjv5fpKWrTc2%2FCLAhmNzXP765ryA6SdyC67P77f3YvPyeosp6rmEuzzQd79md%2BZWLZqv6SPeALlOeHULiMUAAQ%2BNREUq%2F2JJsJpHVJ7CTSZq3WVQsAmQDj0gXWEFnYgnh4SS18EawifOyQ6SpjNKqJ3HfmisNF60vuCtJB%2F9IrKd2C8t57iQtCGsPOXb2e%2FO2vzlkivIo7BRgYLCYqGKjBuxHxlx5zT9kU0Y%2Fhtzh6CPBKFcXeIZwx4gEHMcBsgksL4MaMVz3vt6Qo56hHrg8M5H0MDlG8Bxh7fNjImt4Fv0dEdZ2odBTCI7joEPqb5t41OO%2BhlPDlFF8poNDuhSsFc1INxRKoHvYl4DkgMK9f6qY6cwK5QiAJlMFGXhFpRkwy%2FzqRghERjCf7aPABjqkAdqPeHUy5TsVm%2FJQviK3dYasg%2F6ZAw0Q%2FkI8iIWExtPNM2epryX6Xq2qI%2FIjwlKAyRnTC3cSm1UYQ1qexdcZ6skVq1fJC%2FWe4NP6wdUnBm7kz%2BNBPqQDB8mWGCwt4l8VeLjCXlNHBGhHwnpHtmQRT8C%2FRJ9rAN8PN0xcDmwk6XKSZJjYFrT40lL2ertpqpgV9GuDYhNDfbBd2Vv6fBh2Cxy0w0oC&X-Amz-Signature=88a35a59e7f79b22e8b4c22c4ff6c0e7933edfc010c54b5fa2d0675aa6990722&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UT42V6KY%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T150856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCIBUzL8i20VDbtbRkRiEEuZ1UJmqOCxoOKF0hfHUGcLdyAiBxmTVTrnOMSHV3e1Kb92a%2BgvTTT0pytqLzBrtFsXQMhiqIBAjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGdJJligQLyKSNb7MKtwDG7bdbfEHUojFqOLazaJ5z2IOfScw%2F88jolrHEmULhKINwgq67Da8yo9AHQldEgLLS8Jk%2FBSBX8%2BK6EptFa5T3ZkogjY86YVpOHR1Myew2tgQNqgtZRsb81NdxGJvDYYLoK%2F1w4E207A2VUBxI9dOvJQ40PvOVl1%2B5o6CpZxGvUVVUoLhi6RCH%2FGb3Bs3HIzSCh1pIjQaIm1l2f%2B6R4%2BKLVfNbZGGg%2FOMlCNis5RxDjG%2BGeYc8jqJFyS44OF8QMm6uzOQ2V%2Fw%2FLpeSl%2BwZ9X%2Bayirbhjq%2FzFociuqnpKzYejDsok%2Bi5V3bHxhKLIbH%2FZc09AA%2BgR%2F3Z20buuqJXxuTy6%2FhOlXSCe%2BWUwZWXOQWmJ0Y6gWwNBKkWfDsnfiCsSiT7baPz0QAc8GotLW8ndCV2J0ylniPArfQwxkA6ODT6uPCeZS%2FNGf67jj7jMWDc5AVLoQP9U6x%2Fv7NaLznUYC%2FKaMcTBDYVk65b4OMxYhdFkpC0i%2FvUZ83UJBk5oeT7Z5gTrggOaVPW2SN3uF%2FkqRmPrMeR5XfrRkwevr%2Bf8HP0H3N08MjKY8ULnnnmAvsdKE%2FzMH86aOVDdfeqOxnoLDIDGGZhgYdEUoMr7iHvJB3FSuKPZkvJvn02jBkiow0u2jwAY6pgEvi9Y%2FOK%2Bnn7ZOixrg%2F0yhuxwVm9wdLcZSBV3lBvPCea8QszCNqn3Jdp99NCowCbi4ZrLAT5AZ9Ej0xoeugfPmFO2LTbvUaFsoVyv5wruNW8LgGH4Yp6kLk7XcDax59lHcbTasNhhe9u%2Fd7vkkV%2FZGggdQm0ip4L40eTEz%2Ff9r8WSEfRMDew8zhW083TJv9RAGkh7WuA1nzUHeYm1YnTqrI%2Fp4717H&X-Amz-Signature=fb24e88171c5777486e57e8b2557a328aa6c311e7aed707f8a72e2148cfe1b04&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSHJTJV2%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T150850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQCgy7Ce7T1UAbXuLq4PQOewr8FfG8SPV4bbdP3hMLK0BQIgC2cfFnMeiADFJZlKnpz%2B6Bspsfcy6POFi1ODQpg19CYqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAndsu0Kz5vtzEnhryrcA%2FMMqf%2Bxarpde1KFKoioWvGAr%2BJWvuieTSeMkPd0givZtrmx90gCocD337VeyRGnyX3gCTuOhy6sOjzbKb6KXl9dfa%2B%2BhltiEZWimRH4uOKf%2BeSSuBly8ctHiyDBXQ7co%2BdCfXbdt9ZVNy6wn%2FK5hTImw5VRw53v1qI%2BapRPV1lnuvJrbZ9w5Akw0RRfFWMckd4t6E85mhOujtt74RSjkvFHYmGn%2FeblFvmEVonOu8nOzzVtPfUvvPkruLY7%2FE2sSBF4dmpKZV4GbY5urwYZIeiqnUWRUi4uuOECguyTABA88%2FAOO27yqgQTfWdH%2BXgpRjjdh7%2FxFkGITE4PmqW1cRkBDlowKc6E6ABo6CfsJy5Hj36j07nDF7MMrB1Dg6FPebmhAq9drQXnGfv3%2FMYL4ZGPhhRnFF6vLKSNJzOOEsK9uSGX8y3tt98GJcPwnuVSMLDzckzUxixgLFMkivPKFLuUbDuQ6bRUZyxm6Q8s4pUlgjcYimG%2F5FydsmlCuWSuTvjNQvWm77zoKLhSPZeEJz7OUaLNIXIa6Wywypyl8qw6dQPmy0v7nig2Eub4oPdda%2FxLCrcd%2FsB9XI0C5MViM2afwAmDWFVb7dPIH4I4N6jIRGfrFOfO%2F6CmUu%2BaMKPto8AGOqUBXI8YM%2Fhdo862ckGzSvwoyijl4XA%2BdepB2aAkU0jxIcj9ngh0rtcjX3J3kFSi%2BfoyrQa%2F6y2yhtCeeVX6U91budsJk%2BQh0T%2FF5j0vrq2EyT5a8HGiwqbSPS4ChaA%2B3pgqAhRSEJK%2Fo85aD7S%2BZdwL5044kMIungMyBZVbN8fZ%2BacjIfSs3BOg%2FJb1yWzoLNVMqAkPatTFcFwFpSHUmRd9v5RaP8a6&X-Amz-Signature=469e8af31daa651dd6c3102e742bece43ca5ac99b5c01379e929011058add522&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
