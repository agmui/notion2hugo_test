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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SUPQBGU%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T200846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQCX5wO%2Fu3HIA2gCKTk0P4wb4twqicm6B%2FwJMr7eIvCmGgIhAKN6Newrt6NBtYtNIEUx8R6VcclaFnmlOs7h1CUKKEBEKv8DCHgQABoMNjM3NDIzMTgzODA1IgyuhwdFI7i0JIiy%2FiUq3AN0UIZWN9qXnSUYgab18Qljcrd0PhItcdNVwV%2B7feCcnXsTK%2BRxwgkMv9EqlvEhQAd2xBxKRHGKLJ%2FLuFHNi8BsWZ3cRuNT%2Bfvx0a9kSD6rPGw4H5QHyjnpZ7jza%2FBkKGjpyXKS3p3CvsQTjH1xmADdjVq5SwGLyJYVC5LGBFnLU2AXD0zPy5J%2FTGwMJbdD885O6Ay56bwLZPAE0XrifCDlEU1dY8TKufnFYTJhAialXkCOW3kCwk2Y5upPqa3fQEQXWUkdmluWf5APzQML4H0vol7xH5g%2BetTXU5b6pqyCeEqsyNWHHL%2F0NPeFOa6I%2BkFfcM%2BO63hXdL7V%2BWXw4oGl9Xfskvcp4HBybqoXgASsQU5kPlIo6lR1dCGwyc69ZqlYk1fCX7e1InRoNdR6GLI23k8M1Dt3c6Dd9fd7uIRJ3kA7JmeMKOOQVsGT88j2eAFVXdOJ0lU4XluBeF7KaeAvUWeNoijFj4rn2rJTv2b5VOn3vbNCGd60z1DCNnVo4ouPKo7CWhmFyYheXubbkyxkeQNVJua9CKx1JVRVBnL0L3%2Ff6v25t00XVbZ5nMpdnnBCJFav6uDdGCqd42QjOKM6N9sH9DyY19EvGZ6%2FROAEMZBNtMWZc38%2F4coGQDD5u%2Bu%2BBjqkASsrQlcPjhlA5nh5eUQPUdJqOVUZmjbAp%2FHShWY6hKKVY7UOvepDHwosm6GTiyl8EoBoVTyEWc7cYv%2FL%2BaAkRTZTC1BTrVUIsVo2rdvwzSERVMPHfsfxVM3tvHQxoS0oZy5CiYuQbv%2B17illEG9xAtYtFPs%2BNovR8xnHjntuf5OlyAzkP6nGfGtP8%2FVJ3UOJtxQazhSDN3g15LyldYfNYmd8zxDg&X-Amz-Signature=7277c5c487759bc147414e7eea96469ef7175dae1fdc5e5fd79179dcdc1d349f&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SUPQBGU%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T200846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQCX5wO%2Fu3HIA2gCKTk0P4wb4twqicm6B%2FwJMr7eIvCmGgIhAKN6Newrt6NBtYtNIEUx8R6VcclaFnmlOs7h1CUKKEBEKv8DCHgQABoMNjM3NDIzMTgzODA1IgyuhwdFI7i0JIiy%2FiUq3AN0UIZWN9qXnSUYgab18Qljcrd0PhItcdNVwV%2B7feCcnXsTK%2BRxwgkMv9EqlvEhQAd2xBxKRHGKLJ%2FLuFHNi8BsWZ3cRuNT%2Bfvx0a9kSD6rPGw4H5QHyjnpZ7jza%2FBkKGjpyXKS3p3CvsQTjH1xmADdjVq5SwGLyJYVC5LGBFnLU2AXD0zPy5J%2FTGwMJbdD885O6Ay56bwLZPAE0XrifCDlEU1dY8TKufnFYTJhAialXkCOW3kCwk2Y5upPqa3fQEQXWUkdmluWf5APzQML4H0vol7xH5g%2BetTXU5b6pqyCeEqsyNWHHL%2F0NPeFOa6I%2BkFfcM%2BO63hXdL7V%2BWXw4oGl9Xfskvcp4HBybqoXgASsQU5kPlIo6lR1dCGwyc69ZqlYk1fCX7e1InRoNdR6GLI23k8M1Dt3c6Dd9fd7uIRJ3kA7JmeMKOOQVsGT88j2eAFVXdOJ0lU4XluBeF7KaeAvUWeNoijFj4rn2rJTv2b5VOn3vbNCGd60z1DCNnVo4ouPKo7CWhmFyYheXubbkyxkeQNVJua9CKx1JVRVBnL0L3%2Ff6v25t00XVbZ5nMpdnnBCJFav6uDdGCqd42QjOKM6N9sH9DyY19EvGZ6%2FROAEMZBNtMWZc38%2F4coGQDD5u%2Bu%2BBjqkASsrQlcPjhlA5nh5eUQPUdJqOVUZmjbAp%2FHShWY6hKKVY7UOvepDHwosm6GTiyl8EoBoVTyEWc7cYv%2FL%2BaAkRTZTC1BTrVUIsVo2rdvwzSERVMPHfsfxVM3tvHQxoS0oZy5CiYuQbv%2B17illEG9xAtYtFPs%2BNovR8xnHjntuf5OlyAzkP6nGfGtP8%2FVJ3UOJtxQazhSDN3g15LyldYfNYmd8zxDg&X-Amz-Signature=d1ad08dc543b5999f60c2a762bfd7f417489c2a0ff4963034aaed37578ed73d9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPLBFRP6%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T200848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQCy8A97iKghshp1isb3%2BQL3bSqrvCQSZCH3fNrJWc5yKwIhAJOAmVGBO0RaCOoVyXvESAnCbJUxKtA4MbuwAMgPFNlWKv8DCHgQABoMNjM3NDIzMTgzODA1Igxpk8V96AWTZ51ZYMYq3AMP%2BM6WUbmBe5Y6ZaXejF%2FmjxTWt8lHwpOUcAQEbpPqML6gMKKX%2BX8DAQCA5PQirjB77F5ndD80sFHmMro9qzPDvp0M3Id%2F566EBVXQCGXydzmaWFdi5ztbdo5tHGp2KtuLG0lBFa6YlGlVsFgZFy8KqM8jSh7u5sEca1QxckNNLLZtdBmRf%2BijUKj9InqSBApfvy3y%2BOo69utMCKKrIDDnPn%2Bkm%2B9NiG2X2ow1B2VIaAa2%2FNvS%2FczD%2BfS2Kl3Q0KtQjNYiK9SKBpezD8BhMMo%2FXgJpX1gZVFY50E%2BVcL1b84IV5KJtyfl1G0qsSGkQRiJQ5uU%2FjfuZStO7nGDYJ9NpLjavYu33EcXjyamwiyD42KYAlMlF3BxKorsEfbcZ%2BIYrlp6warmk7kYBZwzz9JFUOj0WMDfjzMm5RJHMfzhyzCD920aYzzlBVdLDTqd%2BbCg9%2BG1DW593WTVHqRgpwFiRe0%2Fh%2B1BzEQqvN7gj8WPm2sUgza1kx3AqEVsdsyrTXPYVdchDc6j0P0E6txLdtX3zog7s3T22mlIpqbjaDTwPHLun1h%2B73lC6re5BufTV8%2FGw%2FY%2F5V7elrxOcW8g%2Bb0XZn6YaSvkFgquRCDzFGxHoujJBSjGnD9HW%2FmUvaDCGvOu%2BBjqkARS42D%2BO94AkjppLY%2FZfz%2BB978Ryz5Qp5gCOzTn2PD%2FkDvH6C%2F1BR%2FL1PfgcvWJGzolJaiTlScPgr2HrS5WdhLEQyUVMBgkVqJktMeb%2F4LDYwPdPltPJiQ%2F6NrykIYWAnKYAb9AnGfpEwCUhTTpf6nX5GbaCiSo1sSzAB%2BsJiXtjYleCfnkVnRPxESS01TcK9crFW1nQzZu5HhSTVC44610Cn6Gd&X-Amz-Signature=ec9022130d784bf9e94c87d351834e4f69a1523acbabfc0ac3997fb070a41822&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633KDJFTQ%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T200848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCICvukZEZHhs5yfTAsuYVzolgBj%2BfHVxweg%2FukT9aqzwHAiEAtFlXcygucAl3Q%2FpLA55OWzPW8%2BTQ584Cimknf9TwIBQq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDFBBCQ0k6WpJLFPvRCrcA0Kj4Gl%2B%2F5j57sWCQSc5vUXK1HamaPARwSZFm%2FqqSUivxhyNSqv%2FvDLhO2Iz6h%2BF5E7rK%2BaYR9gjWEb0ny%2B%2FlNHsQV5K2OoW7H8z7S1T0vkwDLXNMJUEjDbJ7G%2FFnIz6k129nFD29i2kJLG%2BHnhMFWPEGGbICYPOmgwXcct%2BvT4ZSAO6vspQ8lgEdekwkVTMIc51ot9yg1mW%2FYvpBr4M3noLWvGR2jFGaVYH1nhEOIYCFZ6GEYpgNT1pmCMsUSUQCFuWOvHa5%2F1kr%2F4IfnvNG88mqcXNzrmG2ej%2FqxriIKdToC%2FJYABy4v0EvMrLgFn9YLhNej4kcwyYoVpkuWvJzbUJU0Qoqm9ba%2F9YCAAR4%2BUkJL8p2lC72zaExK%2FAaYe1QXmz3QZ0jt5b5Rworib2KNHF8AqdosXRYDuNDCwCvcZnZaS29DpH9v8Px2i6lnr2mRw%2FHhBAs4up%2B0zeA15abjTmIqY4VqfJ5SxnYcF%2BuX3h1tMCBvU%2FRTMBUt4YBKtVgAODD5gESmZFs8iEryBuY%2Fpg25ZPzPVLN4SM4OGhUsOyC%2FqUak2NZcKEEAh5ihcKJ8xn1zEFYn%2BFVUPVlEgdNSCdZ7LPXNaNfhtXdtQSoRO94x%2BiUwuMbU3PSRYZMJu8674GOqUBjHzTAJsxPiV6NLmZgwQ%2FR8tUrnQGUH1lK7QcpUiIW9EVtvAZpIm858cwAaHlUhPo6G5o2xTfl68AquMeKnbrm5O%2BTycQKnoc4FSarLQTXpE5AlP7GmXi91lSbPmbR2TJYoR7dSEGIe5DopUoqUzd%2BwP199TLQ%2F48nG%2FJdNmk76po%2F9vo4F3e9Snw42Yyg0r%2Falcq9p9GUxzygyaeUqt54FksVPC0&X-Amz-Signature=9701e33f3889749aede04ced54a2270aab065934af48f2c314ea47041d4bc1f9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SUPQBGU%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T200846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQCX5wO%2Fu3HIA2gCKTk0P4wb4twqicm6B%2FwJMr7eIvCmGgIhAKN6Newrt6NBtYtNIEUx8R6VcclaFnmlOs7h1CUKKEBEKv8DCHgQABoMNjM3NDIzMTgzODA1IgyuhwdFI7i0JIiy%2FiUq3AN0UIZWN9qXnSUYgab18Qljcrd0PhItcdNVwV%2B7feCcnXsTK%2BRxwgkMv9EqlvEhQAd2xBxKRHGKLJ%2FLuFHNi8BsWZ3cRuNT%2Bfvx0a9kSD6rPGw4H5QHyjnpZ7jza%2FBkKGjpyXKS3p3CvsQTjH1xmADdjVq5SwGLyJYVC5LGBFnLU2AXD0zPy5J%2FTGwMJbdD885O6Ay56bwLZPAE0XrifCDlEU1dY8TKufnFYTJhAialXkCOW3kCwk2Y5upPqa3fQEQXWUkdmluWf5APzQML4H0vol7xH5g%2BetTXU5b6pqyCeEqsyNWHHL%2F0NPeFOa6I%2BkFfcM%2BO63hXdL7V%2BWXw4oGl9Xfskvcp4HBybqoXgASsQU5kPlIo6lR1dCGwyc69ZqlYk1fCX7e1InRoNdR6GLI23k8M1Dt3c6Dd9fd7uIRJ3kA7JmeMKOOQVsGT88j2eAFVXdOJ0lU4XluBeF7KaeAvUWeNoijFj4rn2rJTv2b5VOn3vbNCGd60z1DCNnVo4ouPKo7CWhmFyYheXubbkyxkeQNVJua9CKx1JVRVBnL0L3%2Ff6v25t00XVbZ5nMpdnnBCJFav6uDdGCqd42QjOKM6N9sH9DyY19EvGZ6%2FROAEMZBNtMWZc38%2F4coGQDD5u%2Bu%2BBjqkASsrQlcPjhlA5nh5eUQPUdJqOVUZmjbAp%2FHShWY6hKKVY7UOvepDHwosm6GTiyl8EoBoVTyEWc7cYv%2FL%2BaAkRTZTC1BTrVUIsVo2rdvwzSERVMPHfsfxVM3tvHQxoS0oZy5CiYuQbv%2B17illEG9xAtYtFPs%2BNovR8xnHjntuf5OlyAzkP6nGfGtP8%2FVJ3UOJtxQazhSDN3g15LyldYfNYmd8zxDg&X-Amz-Signature=c0ff01c7d59d88af341c171ef710ffc3dbe96e1aee302b4aabd84aed7b7585a9&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
