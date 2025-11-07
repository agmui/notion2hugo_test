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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSREN4CX%2F20251107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251107T013745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE0rcfgSSIy30rzjHLDQGhI32cN3SHrZ442kO1EONSMMAiAiQxNvuFj4WBO7N5YOleWU2rryCKe4IS137unukwx4ECqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFs%2FAPNQ2H1JPHp7RKtwDTVPHk8IYLpdsYIRPw%2BM%2Bibf%2FiyX0JuxQIg7tb7oQuOTfEBw65tADdgXds6cdTQKOAa22BLWPzbHHiTwHE3O54zjZa6LSXnkGdrPsif1eTZK8xBwEHT1IkOHXXhMV1LpvJcV9TPacfhGK22lOoPwRuz8Mj03W1%2BlKRpV61upqRrxFVry%2F5nXnKLPMNo9Stto4mO109j%2BoUN%2BTDxYA7OPSUWzSnVn7GMupL3qBf540XLbT9SkNxIHG8x0VnQEr3RhyZSbbOpDR7PSSlDTMhDRhNPJDzsMC7dW4W9St7dYyieMDnHphu%2FdsFcfvUw6483FSv1tLQLoNaeebV2QnsL15IyL6l8QVYdjIAGHcCa%2FE8v34vLrpWnYswmMFeE%2Fco%2FHkJkzo6mnLJ%2FDoXIqSN6ZeT7CZK2iY%2FyiaIEU9EaDuYluqhCgvQSZF5NS4ynTjjGaOm5xKFfIUH2x04UPTSK8dmtSJWjYl81C5OB37bKX3A3WRfOnjk85Y4ant8hl3A9FkHXG%2FL3QoG7kr8%2BnttGjo79FxOrz1SxMj2O%2FxYcbVCwHn%2BYnTBguHNg5OQ30Ozi7%2BsrOr50ZoOF8P5vKKYN%2FxDJr9HTZcslMqAOqnt%2BjAinIpHCAmCp3dKTwBVQswgZe1yAY6pgECK7RMfyKxE8Q83GbaDFjUIjUrSN%2FMloij0%2BzhXE%2FjXn4D1eE8pyU9dqYvpSrJs4PoLKtLLI9RWWBK9jUVOkFAkmjxmxPu1by8xNunNDbgHasDdKCqawiTmGymHLU3bPThP1zVaDWonvmKIkjOl2bZfl%2FudbNnhfAm%2BG5MYBiSr72%2FCoJ9G99D65L5arHCzFhLk%2BupNLSxySSF7r5p8nv4dUpRnksC&X-Amz-Signature=dc2c55d8bdb3523dac0ae08cfd06fdf890d29ca0b8b6e7c5fbe425e0c6524aa8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSREN4CX%2F20251107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251107T013745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE0rcfgSSIy30rzjHLDQGhI32cN3SHrZ442kO1EONSMMAiAiQxNvuFj4WBO7N5YOleWU2rryCKe4IS137unukwx4ECqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFs%2FAPNQ2H1JPHp7RKtwDTVPHk8IYLpdsYIRPw%2BM%2Bibf%2FiyX0JuxQIg7tb7oQuOTfEBw65tADdgXds6cdTQKOAa22BLWPzbHHiTwHE3O54zjZa6LSXnkGdrPsif1eTZK8xBwEHT1IkOHXXhMV1LpvJcV9TPacfhGK22lOoPwRuz8Mj03W1%2BlKRpV61upqRrxFVry%2F5nXnKLPMNo9Stto4mO109j%2BoUN%2BTDxYA7OPSUWzSnVn7GMupL3qBf540XLbT9SkNxIHG8x0VnQEr3RhyZSbbOpDR7PSSlDTMhDRhNPJDzsMC7dW4W9St7dYyieMDnHphu%2FdsFcfvUw6483FSv1tLQLoNaeebV2QnsL15IyL6l8QVYdjIAGHcCa%2FE8v34vLrpWnYswmMFeE%2Fco%2FHkJkzo6mnLJ%2FDoXIqSN6ZeT7CZK2iY%2FyiaIEU9EaDuYluqhCgvQSZF5NS4ynTjjGaOm5xKFfIUH2x04UPTSK8dmtSJWjYl81C5OB37bKX3A3WRfOnjk85Y4ant8hl3A9FkHXG%2FL3QoG7kr8%2BnttGjo79FxOrz1SxMj2O%2FxYcbVCwHn%2BYnTBguHNg5OQ30Ozi7%2BsrOr50ZoOF8P5vKKYN%2FxDJr9HTZcslMqAOqnt%2BjAinIpHCAmCp3dKTwBVQswgZe1yAY6pgECK7RMfyKxE8Q83GbaDFjUIjUrSN%2FMloij0%2BzhXE%2FjXn4D1eE8pyU9dqYvpSrJs4PoLKtLLI9RWWBK9jUVOkFAkmjxmxPu1by8xNunNDbgHasDdKCqawiTmGymHLU3bPThP1zVaDWonvmKIkjOl2bZfl%2FudbNnhfAm%2BG5MYBiSr72%2FCoJ9G99D65L5arHCzFhLk%2BupNLSxySSF7r5p8nv4dUpRnksC&X-Amz-Signature=94d5e9fdd8a97aca8ebd08aeb867e73a3ee3929d0b84a202029650941e862ba9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSREN4CX%2F20251107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251107T013745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE0rcfgSSIy30rzjHLDQGhI32cN3SHrZ442kO1EONSMMAiAiQxNvuFj4WBO7N5YOleWU2rryCKe4IS137unukwx4ECqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFs%2FAPNQ2H1JPHp7RKtwDTVPHk8IYLpdsYIRPw%2BM%2Bibf%2FiyX0JuxQIg7tb7oQuOTfEBw65tADdgXds6cdTQKOAa22BLWPzbHHiTwHE3O54zjZa6LSXnkGdrPsif1eTZK8xBwEHT1IkOHXXhMV1LpvJcV9TPacfhGK22lOoPwRuz8Mj03W1%2BlKRpV61upqRrxFVry%2F5nXnKLPMNo9Stto4mO109j%2BoUN%2BTDxYA7OPSUWzSnVn7GMupL3qBf540XLbT9SkNxIHG8x0VnQEr3RhyZSbbOpDR7PSSlDTMhDRhNPJDzsMC7dW4W9St7dYyieMDnHphu%2FdsFcfvUw6483FSv1tLQLoNaeebV2QnsL15IyL6l8QVYdjIAGHcCa%2FE8v34vLrpWnYswmMFeE%2Fco%2FHkJkzo6mnLJ%2FDoXIqSN6ZeT7CZK2iY%2FyiaIEU9EaDuYluqhCgvQSZF5NS4ynTjjGaOm5xKFfIUH2x04UPTSK8dmtSJWjYl81C5OB37bKX3A3WRfOnjk85Y4ant8hl3A9FkHXG%2FL3QoG7kr8%2BnttGjo79FxOrz1SxMj2O%2FxYcbVCwHn%2BYnTBguHNg5OQ30Ozi7%2BsrOr50ZoOF8P5vKKYN%2FxDJr9HTZcslMqAOqnt%2BjAinIpHCAmCp3dKTwBVQswgZe1yAY6pgECK7RMfyKxE8Q83GbaDFjUIjUrSN%2FMloij0%2BzhXE%2FjXn4D1eE8pyU9dqYvpSrJs4PoLKtLLI9RWWBK9jUVOkFAkmjxmxPu1by8xNunNDbgHasDdKCqawiTmGymHLU3bPThP1zVaDWonvmKIkjOl2bZfl%2FudbNnhfAm%2BG5MYBiSr72%2FCoJ9G99D65L5arHCzFhLk%2BupNLSxySSF7r5p8nv4dUpRnksC&X-Amz-Signature=23a0d2242571ff040a31919306cdfb1e8dc5b14b76578088ce4a23c3fa2d2674&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YIEXT4F%2F20251107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251107T013748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCjJtSIAR%2FRCdSw53kHgayLdS0OHsAocW4Ca3xFESiA5wIgfPgvcaYxDJSStXnxpcKYhmR5VuHJJ4q8NTMPSazS3moqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDBVJHJnm2LLQsH11yrcA6reGuf6iqTSZi83BxhHnxYRf%2Fyh5vFYtGJbH2YJGAsqK6y29NT5CWMzkgjVfrFZKffqrb4Hy8GGMrNDDNtivGViQa0azV48IkhAwj8hPP95D8R5Sh0khvCPyT5z6deBvRxUBhMOkdpg8G2BxNJI8A3WXFHxa7HkfO0a%2BEl5GC9Ha6l1%2BUdD4IQpdPKZBZ973xrfvMqWFUodT2Y9DoK97kpYcYn3Eg2MnYnnb0M5XeKkmuWtvCrN7T%2BRvJLM5orF6NCC%2F7q4tE3jKxMkGQE1UoGhWCjNasoR5cW74s8m1ai8VHXGyqHlU6uNz8LSPsMUuQH3uU4cEtKFst1NI1BjkHsYrR6l5%2BXysZMbueJxj1MlzuNhHgHNJlC8ApDISGnnHdz55Kx2I0tmi%2Frv0lbZzghzp7yELMpuTSbtFf5h%2B3Zhdc%2FWapqsQu5A9Uu4fiQwAv0WCUven8hUv9ae0TXqwSmsHQgSF9PaxOkoh0Rb6CwaC6yzO%2FGJ9sW8GUVCvtHVDztxGUO9pkWslEORQrmOD%2BbZQVJjlAuhA04ZEBrWqwql8fUxchV%2BPisgZhdj6A1E91v8qeZ1F4X4DFqjpdRsZjf%2BrT5%2FQ4CgNzIVYzs72R6QVcJxor2z0hUxz6ckMOiWtcgGOqUBguwirhhfesxfwpkYsjmap5MPsfRdwATSrBnHwLeC1Ccv9eZPB1EcOvdCZUw5DpNVv2H19iDR6b9SVy2FUAM43g%2Fl5ewDRrYGBcJIkAOdNM%2BnT7gGVSlhefLEclmkCGuqE8X%2FTpQVORfevxKmrJUt0sguU%2FUAS8Qbiaq33bl6oBfSqfEDPXyqb7hAfpZinyv8J5f5RxDUP8P0JhO4m0qpienMsca2&X-Amz-Signature=6c28dfb0d72946702771c53ae987bf632f5a30a11eb85c620532c63433d82d56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Z34XLW7%2F20251107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251107T013748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHPkIPd%2BfBoVBYYfncnCXOwKA5L%2BjNGYZYR3xEBrXQrAIhAKk9ixpgQJ2f%2BoXSyAX9wxqzNKzpP3xhWwCdVAX9YgSjKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgylRjJ%2B0P2K3YnQB2oq3ANjIBbyy8dQvMGurfH38OdHxva2F02QTTrLi%2BVkY4rr%2BJfEBsgUreMZx0zBTBovJAD2gr30OAtbZ3kdE53NG8MCy8qXCkPwGZ8Qv8ijajOd3wyNemPBdJJZhzs62ngBASvRRrXcak2pv667Ty%2BMp40GjW7nOZoPMq74jNHRU%2FdEK14EzyVD4%2FbadSzRJw%2FYLAKkonK02NNFRwBYOK%2Bqwp2jRv1gSOFd6vfKF%2F1w0%2B6Gg5D6CgJcZhZw5ZBGgLJ3N96TExVey0PLceM%2BDrfS%2FF9lyEoMLmVacyak04CkHWPMfoMBGC0iimSLzR6R4opvGK5DOLf%2BI7yPGCqJ6uztEgPX9KCkgI1RaBJfc1Ah6gFVb4vgpNkCdS8wV22uvxH%2FDEIDXE%2BRznG34Vjfb7tFYPDPdZvdVbOmoYC6ny01yuCpM6WwMnl0QRtWrd85Gp2%2Bv8iGEX9Lxt08KAZV1DWKpAs9LCkIfnlCTPlGdjUGIDSCqEG7ZAronLbAU0bdQDtY7f6ZCSftecB0fm8jDGI9eYgtTbBH%2BNDQwAL3Ej3oVNM%2BKuaeqFHsyvsF9lhMhPsbrPvIeJ%2FEyFQWC4I7AmgsQ1toIRQy96mTkksYffUsE9MaMm81BN%2B6%2Bam%2FJE4J%2BTCImLXIBjqkAZt1pp75A8iNomgn3tNLWmDZw%2B329dAzWgHFzJsw5A6FPp8S5CmcxvWjfr1pdr8tYZzc6dFkAyKjwfqMec6S7NYdDeI%2Bqnjre505xz9lEME8qazqotJNgpuVcgiD7HBmnP%2FTrF7TKUS0keOrF%2BONtt2JOUd6oxPFrRQAmgnHL3QNb5DcpHe2fc5BeSQDxf13DOHQvIuMnVJ3DJtrHe9f47iwyPUR&X-Amz-Signature=060a674fc49b2f71a4dbf81ac4440c5cb672ac1cd9311d9aaa0bc88bdcb1c0a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSREN4CX%2F20251107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251107T013745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE0rcfgSSIy30rzjHLDQGhI32cN3SHrZ442kO1EONSMMAiAiQxNvuFj4WBO7N5YOleWU2rryCKe4IS137unukwx4ECqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFs%2FAPNQ2H1JPHp7RKtwDTVPHk8IYLpdsYIRPw%2BM%2Bibf%2FiyX0JuxQIg7tb7oQuOTfEBw65tADdgXds6cdTQKOAa22BLWPzbHHiTwHE3O54zjZa6LSXnkGdrPsif1eTZK8xBwEHT1IkOHXXhMV1LpvJcV9TPacfhGK22lOoPwRuz8Mj03W1%2BlKRpV61upqRrxFVry%2F5nXnKLPMNo9Stto4mO109j%2BoUN%2BTDxYA7OPSUWzSnVn7GMupL3qBf540XLbT9SkNxIHG8x0VnQEr3RhyZSbbOpDR7PSSlDTMhDRhNPJDzsMC7dW4W9St7dYyieMDnHphu%2FdsFcfvUw6483FSv1tLQLoNaeebV2QnsL15IyL6l8QVYdjIAGHcCa%2FE8v34vLrpWnYswmMFeE%2Fco%2FHkJkzo6mnLJ%2FDoXIqSN6ZeT7CZK2iY%2FyiaIEU9EaDuYluqhCgvQSZF5NS4ynTjjGaOm5xKFfIUH2x04UPTSK8dmtSJWjYl81C5OB37bKX3A3WRfOnjk85Y4ant8hl3A9FkHXG%2FL3QoG7kr8%2BnttGjo79FxOrz1SxMj2O%2FxYcbVCwHn%2BYnTBguHNg5OQ30Ozi7%2BsrOr50ZoOF8P5vKKYN%2FxDJr9HTZcslMqAOqnt%2BjAinIpHCAmCp3dKTwBVQswgZe1yAY6pgECK7RMfyKxE8Q83GbaDFjUIjUrSN%2FMloij0%2BzhXE%2FjXn4D1eE8pyU9dqYvpSrJs4PoLKtLLI9RWWBK9jUVOkFAkmjxmxPu1by8xNunNDbgHasDdKCqawiTmGymHLU3bPThP1zVaDWonvmKIkjOl2bZfl%2FudbNnhfAm%2BG5MYBiSr72%2FCoJ9G99D65L5arHCzFhLk%2BupNLSxySSF7r5p8nv4dUpRnksC&X-Amz-Signature=14f15423bb56a1f5aa326d697f8d29eb60a60bf4fc7b3af3bb350772cad8dfd6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
