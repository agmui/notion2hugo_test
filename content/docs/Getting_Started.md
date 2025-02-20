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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRRJD2HS%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T003631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHFwQvZcmuyeZ6QSrsClnJRDloThxkGkPj44aAXbwojGAiASQy5E%2Bcdq6K3vBpErlZwuSHlZCYB%2BSq7%2Biut1pE1i5CqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3g%2BmO7%2FWvk4f0vlAKtwDQRojms%2Bb5hmtXuygndNsSASdgRS9hmWkwpwNBh8OUNRx6%2FT9GFFSMNcW2Ia2VXh0BUa0nxUDlhGzUvlB%2B79nhR0BjPbGgYzNuoo2gzscGSwbT0LQhk5FVjVFJB8mg27b6ETOPdUmqX2P7HkA5opYhriEYaW7woD1cg81wevxN2VzS83cgLZTG2jMjkzd7nRkgME4mlr3uJhaQa6GosmVowZgw0eh2qe5rAQhYyMcevoll7BtxL30g51XGAnF2B13u4LcQRz85J4Vicsv05QFy2GpyTko1SLS7AvASulftt%2BqG%2FlKvZYAXYmQkdTlEglDzutMiP8SJotfDVUyRQ%2FmHDPWt8%2BvksRqbEJuYqqwC6m4A59kKIAKmPj5mfSrae5eIc7dUSEUmjoE5fshuo1z0fiqJj5H9dxXac7LpedUT4HQNfkXwE908g5aZlqbaMwOWhKjSAbRfil7aUvfLZscUF%2FhYvubKNBxOaqG1omMMEKMP%2F4l6QGWleLfJ78lmgFnPFFMfA7pTdLKA57cP3uwCjL6UGlmmChzqS5XHd0OJgYT7TDjXOokpt0P3DAX%2BboBlWXZISSRuo%2FCsSyKhIYV2%2FASMi%2B%2BIG%2BljA6kxqyyPkERP%2FwlxigSWCCXS14w4%2BfZvQY6pgErGT%2BH%2FnhAmwT1f%2B1e4qUtdNBnN9o791AWCsXMkdUUgwKtyttu3Wa9AmFxqQqgnlR4ep28pbGkqJ2MozcxxRe9qYOZqAyrWvHEAp%2BbEM3agrX0zUlylfTxt1nv%2BSBOBKpeDDfBVCeAc6Mz1wnyuKA3DqnaLZrdWprcgWo7kegBiWNhC52Mvu9609gUCs12%2BAC5VGQ%2BYeTSX%2FaaUIbokiUkMDqkV7oH&X-Amz-Signature=601ab7d0a78b7395ad098688811678e51fbf34bbcf468fbdc2d011157f6d4bea&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRRJD2HS%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T003631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHFwQvZcmuyeZ6QSrsClnJRDloThxkGkPj44aAXbwojGAiASQy5E%2Bcdq6K3vBpErlZwuSHlZCYB%2BSq7%2Biut1pE1i5CqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3g%2BmO7%2FWvk4f0vlAKtwDQRojms%2Bb5hmtXuygndNsSASdgRS9hmWkwpwNBh8OUNRx6%2FT9GFFSMNcW2Ia2VXh0BUa0nxUDlhGzUvlB%2B79nhR0BjPbGgYzNuoo2gzscGSwbT0LQhk5FVjVFJB8mg27b6ETOPdUmqX2P7HkA5opYhriEYaW7woD1cg81wevxN2VzS83cgLZTG2jMjkzd7nRkgME4mlr3uJhaQa6GosmVowZgw0eh2qe5rAQhYyMcevoll7BtxL30g51XGAnF2B13u4LcQRz85J4Vicsv05QFy2GpyTko1SLS7AvASulftt%2BqG%2FlKvZYAXYmQkdTlEglDzutMiP8SJotfDVUyRQ%2FmHDPWt8%2BvksRqbEJuYqqwC6m4A59kKIAKmPj5mfSrae5eIc7dUSEUmjoE5fshuo1z0fiqJj5H9dxXac7LpedUT4HQNfkXwE908g5aZlqbaMwOWhKjSAbRfil7aUvfLZscUF%2FhYvubKNBxOaqG1omMMEKMP%2F4l6QGWleLfJ78lmgFnPFFMfA7pTdLKA57cP3uwCjL6UGlmmChzqS5XHd0OJgYT7TDjXOokpt0P3DAX%2BboBlWXZISSRuo%2FCsSyKhIYV2%2FASMi%2B%2BIG%2BljA6kxqyyPkERP%2FwlxigSWCCXS14w4%2BfZvQY6pgErGT%2BH%2FnhAmwT1f%2B1e4qUtdNBnN9o791AWCsXMkdUUgwKtyttu3Wa9AmFxqQqgnlR4ep28pbGkqJ2MozcxxRe9qYOZqAyrWvHEAp%2BbEM3agrX0zUlylfTxt1nv%2BSBOBKpeDDfBVCeAc6Mz1wnyuKA3DqnaLZrdWprcgWo7kegBiWNhC52Mvu9609gUCs12%2BAC5VGQ%2BYeTSX%2FaaUIbokiUkMDqkV7oH&X-Amz-Signature=f61c6058d25df8ffe0d081a264d91ceca5e004fefc10e5c70de90e2a7dd68d5f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662C2WQCYF%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T003638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgisg%2Ff0odWh%2FyfYbfOFsD3mLoBZJOIvlMD3wRFjUYRAIhAKCiMFDs%2BvCwSOyn06X3gUy%2BG7M6mve2p%2FNQkMvD8be9KogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyNRHPmM7yroRRmy3oq3AM5sTGTuozWvHnFvAP7ojYH9Zkgtv8vE5yXNh%2BpwvVRAw5h4W9%2FREqqSpwQqxumHnwUr1Zk81o%2BPhwuoTihRz1Eok9WPudtEjJ%2FUcSJjM6crlbh%2BT9R72VrdOTbtQGbvLVi%2Fo9g1IgrREyee7EC0Cpj9fiUMX2rUSrIg%2F6r7C8Fj4Nozb7F3GBcr8VKj8RDGJoOQC7gYSgcaLAd2cbgzCssa7%2Fdbp3JGbA%2FKoVBbBTQGStu5piD6RnmbbpNvCHzggMKW1FMD4e6PeNQAJaiLH1Ctj5VvQThesfkMmaRfZn7rsSvXYnbmKiovY2dXqhUknR9YokNZ2BG20Bb3sWExvEiWM4pyKHJVRdvNwV2Dl0MLLu%2Fa0UI53fw%2Bhmbgqq98nyx9Cliuk9VSRfJ9NZXXfjYwjaGdUGdusv7EyiveXtBvexdkLFvazuQ6Reb0ABLpQtOTS46m99tS%2FGCpsU8KzzgEHYZtKGmL0x978zIhlTjDQoI6oW04AAL78YgO1LbecxZs5%2FOeyv4aBJh0DOY%2BuKc3Q1%2BO7%2BkCgYDOPAq7J0q53aiINBdNY0RhNT3CL9SlFWcJNXb6LbFi0FhG%2Bmg50u%2BUPRRum3jMPErhi5St%2BC1EukcvTSgS%2FJGsNqDrDCq59m9BjqkAe9eWiPQdjOHWcSXS0azjKv27A2wYI8Q%2BM4XBr3oCSeePDMbvyjRhzDiLDyJ%2FBcuRdftedn4HDsBMNTY6DRt9JKHvFg6HAmZGFCDusRgbzxNSEUeV4mcNJ%2B8pBG0q4%2F0cvIjgPQiyFCMcy9RAsaBWWRC8g0coQT8wZaHEgRa0joG%2F4hYYB18ZR9ENvhOHcVg4MTI0rMebSbFOQYmGWoG7Idm1Sz1&X-Amz-Signature=f91de62f1b1db30665d543d77af859a9f1687d86e1f29d1e81a18466d2f28eba&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2QGR5DK%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T003638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEfPQzELkF6vO0BfqTPeGJ%2B8w6uHrojpt7J1Wcqnl5KYAiEAytmzQFdL8%2B%2Brtxs5ZhjEiRGYp7x30w87UXPssWLfB60qiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDyNzXVG4F%2FvHmsgWSrcA1Zud1%2BRkUYYTZv8QZEJl7J2ktrPU%2FIZebI6f%2FHXkKvvs8TA%2BCyd6dP1Y42ZRGqHe0O3q0dOFuqtXKySonsN7tPv7LA1%2FVKlJ7us978vKjqx1e6zZCUeN25bqDv0pVLLQ%2BHETCE29VmRiPI2noYSY7znFLdsVSpALhZiDhzhMB3zvX9RmeK0QOSklu7Ytc31rz1bkRQIhEAjqTtuMH9i%2BqdHk3WbSQTPk5pDJyuvMW9kNeXhibQY8hR6mduu1amYU06i20aSixPqSPOzKF45HPJogtZkJC2bQBA12AL%2FXWnSJm9mKAg0L1mlYOZhLK9w0eE1aUWD33afRN%2FgXPrOjIjBBaTacSfuS4S16oRwia7fRXr9IpWNgPprLd6c82RMyuukYPrKZeHZwkt60Ck8pzpSelAphblEhNEdSAFl4AApXcoIOS1HV39Ysk04guRYdlRqOeFWuf5cdnqhibOUFnc%2FrPDRs2UeBHrpu96s23mD8LQ%2BhdOXhuNnCtydXHwj%2BRzaGUTY%2FV3Ybv%2BidjhcmI%2FZgG1r4y3vLl0S7MkmjkO5tyY%2FC%2FiVOcew483azMGhuwgC0TqeQ8THNe4zkwFb8KhU%2BYIMWFDekOAoH1DuIWxibVXHYw7hER5aJXMBMN%2Fn2b0GOqUB8kwvlT8FXR2pLutkdwvFsgLsCJQo4t2FSVBgRX1kCYsUdUCvxCAzzf%2FT3O08tG70KFsBU89jXgmPecf0DF3dfD5zDcfSYx%2Bew%2FrWr43Z5IWenhwVCa53AAr%2BFQ9appKhcD%2FQOpOSZaiTFf3kAATQPs%2Byo%2Ffeo0XRYWFDVBWivG3Qh%2FsFJ9qFL%2BC2n7o0c89ZElL%2BzahOg%2FWOYSxJ8W0FBhLffjuD&X-Amz-Signature=c0dd57f031913e1a28f05b13e4d1f13878b59647c5c8e0840730c2352f49e258&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRRJD2HS%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T003631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHFwQvZcmuyeZ6QSrsClnJRDloThxkGkPj44aAXbwojGAiASQy5E%2Bcdq6K3vBpErlZwuSHlZCYB%2BSq7%2Biut1pE1i5CqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3g%2BmO7%2FWvk4f0vlAKtwDQRojms%2Bb5hmtXuygndNsSASdgRS9hmWkwpwNBh8OUNRx6%2FT9GFFSMNcW2Ia2VXh0BUa0nxUDlhGzUvlB%2B79nhR0BjPbGgYzNuoo2gzscGSwbT0LQhk5FVjVFJB8mg27b6ETOPdUmqX2P7HkA5opYhriEYaW7woD1cg81wevxN2VzS83cgLZTG2jMjkzd7nRkgME4mlr3uJhaQa6GosmVowZgw0eh2qe5rAQhYyMcevoll7BtxL30g51XGAnF2B13u4LcQRz85J4Vicsv05QFy2GpyTko1SLS7AvASulftt%2BqG%2FlKvZYAXYmQkdTlEglDzutMiP8SJotfDVUyRQ%2FmHDPWt8%2BvksRqbEJuYqqwC6m4A59kKIAKmPj5mfSrae5eIc7dUSEUmjoE5fshuo1z0fiqJj5H9dxXac7LpedUT4HQNfkXwE908g5aZlqbaMwOWhKjSAbRfil7aUvfLZscUF%2FhYvubKNBxOaqG1omMMEKMP%2F4l6QGWleLfJ78lmgFnPFFMfA7pTdLKA57cP3uwCjL6UGlmmChzqS5XHd0OJgYT7TDjXOokpt0P3DAX%2BboBlWXZISSRuo%2FCsSyKhIYV2%2FASMi%2B%2BIG%2BljA6kxqyyPkERP%2FwlxigSWCCXS14w4%2BfZvQY6pgErGT%2BH%2FnhAmwT1f%2B1e4qUtdNBnN9o791AWCsXMkdUUgwKtyttu3Wa9AmFxqQqgnlR4ep28pbGkqJ2MozcxxRe9qYOZqAyrWvHEAp%2BbEM3agrX0zUlylfTxt1nv%2BSBOBKpeDDfBVCeAc6Mz1wnyuKA3DqnaLZrdWprcgWo7kegBiWNhC52Mvu9609gUCs12%2BAC5VGQ%2BYeTSX%2FaaUIbokiUkMDqkV7oH&X-Amz-Signature=f4be9a319f62194f1b4bd8f61aea7acc5d8d30d740d2523f39be3e5eea28e288&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
