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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4AAIQNL%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T004207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQDZi8Jjdd2kp3F%2BJt9MxQb8KYxiQ9K3eG%2Blx2CU6I4brQIhALPr96STX34vO8LVce6QskQe1d%2BzR78NNJ%2Fgwok9RHblKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwB7p6foWY18ziQd40q3AN8d4jhSsN3kj0ewvZSTFXWjszkoHUuk9JbNgR7zwNmPYDsq1%2FTz%2BhV1cK84D4hjIS1i4uPsPJ1gXfRSZ1dpSTM7nd6ibyxYJVttLjoHWUWOVZYtugLqXDdjU%2BfhSKs0tDMqxZ7nrIAFonYfy9nDkwXvZlnglh8unuur0k80QrRwIgoEQz1PQKnLKAMRkVGRbeZ9rq5VNLSGalyMyDiQqNWRM%2BGEksD02dxXBrsZaCfAO4sZOk36033dI5YDSmuw4ix%2FQynUlQBWpVhry1LbSOXVRyDYdO5eE4pIiFLsXVfEyTUG4BT%2BKe5OEigVIsoB6n4TT44PHtvIuWiPk448mWTDJ0O%2FJNRk%2BtYIByc5WravVMLwZ%2FcC1Q4aawnamRiOWs8UIyE10PJvQvY9bVUmDGefuqCeYKC%2BGgztLWxRfUgBmDBWdhA6pHfM8xA1bhNwXfERjjyOClIurKV%2FoHKwEilptxP3OvIYMdERH5LHtAa1eCyR%2BkMnmMastsXrao6aVvKB5QA%2Be%2BE%2Bp3XY2%2BIjVFYafXFGPPqkM98oYgTwIo04JmrCOB23HvheOVwP8%2FKk%2FSs87gsH1fkjWWUQa7O%2BSUt4Xv4mWhcJErSvoF9r1%2FzhbMzGECVOxr6WJiN2DDKt6jCBjqkAfb6ODpC%2F%2Fob689iBP531IhKoiDJ%2F%2BdlVz3ASexQsiGpewer2XtlLWripe2JhtUUdmXyt3EOkSsrdP%2FdMMJ7R3tjp44x1kt8WoMN5ibBrdveyQK5jn9p4NaKaUxpb86ww43bzHegWqt2msusKNJ67xrsNSFGc%2FgZGxno8ZZQRdrsFcuHaLaAkbhUsbOn7gEE2rVNGRb%2FH6N%2BZ%2BBzVxcceihWt8tE&X-Amz-Signature=4fb5277aa56bf2323dffe0f700235796803c699e1c9e9755dc9778e195ea4012&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4AAIQNL%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T004207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQDZi8Jjdd2kp3F%2BJt9MxQb8KYxiQ9K3eG%2Blx2CU6I4brQIhALPr96STX34vO8LVce6QskQe1d%2BzR78NNJ%2Fgwok9RHblKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwB7p6foWY18ziQd40q3AN8d4jhSsN3kj0ewvZSTFXWjszkoHUuk9JbNgR7zwNmPYDsq1%2FTz%2BhV1cK84D4hjIS1i4uPsPJ1gXfRSZ1dpSTM7nd6ibyxYJVttLjoHWUWOVZYtugLqXDdjU%2BfhSKs0tDMqxZ7nrIAFonYfy9nDkwXvZlnglh8unuur0k80QrRwIgoEQz1PQKnLKAMRkVGRbeZ9rq5VNLSGalyMyDiQqNWRM%2BGEksD02dxXBrsZaCfAO4sZOk36033dI5YDSmuw4ix%2FQynUlQBWpVhry1LbSOXVRyDYdO5eE4pIiFLsXVfEyTUG4BT%2BKe5OEigVIsoB6n4TT44PHtvIuWiPk448mWTDJ0O%2FJNRk%2BtYIByc5WravVMLwZ%2FcC1Q4aawnamRiOWs8UIyE10PJvQvY9bVUmDGefuqCeYKC%2BGgztLWxRfUgBmDBWdhA6pHfM8xA1bhNwXfERjjyOClIurKV%2FoHKwEilptxP3OvIYMdERH5LHtAa1eCyR%2BkMnmMastsXrao6aVvKB5QA%2Be%2BE%2Bp3XY2%2BIjVFYafXFGPPqkM98oYgTwIo04JmrCOB23HvheOVwP8%2FKk%2FSs87gsH1fkjWWUQa7O%2BSUt4Xv4mWhcJErSvoF9r1%2FzhbMzGECVOxr6WJiN2DDKt6jCBjqkAfb6ODpC%2F%2Fob689iBP531IhKoiDJ%2F%2BdlVz3ASexQsiGpewer2XtlLWripe2JhtUUdmXyt3EOkSsrdP%2FdMMJ7R3tjp44x1kt8WoMN5ibBrdveyQK5jn9p4NaKaUxpb86ww43bzHegWqt2msusKNJ67xrsNSFGc%2FgZGxno8ZZQRdrsFcuHaLaAkbhUsbOn7gEE2rVNGRb%2FH6N%2BZ%2BBzVxcceihWt8tE&X-Amz-Signature=8630fe489a46f77e612036b862544c1c51377955fc34f728e70e20259d587fe6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4AAIQNL%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T004207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQDZi8Jjdd2kp3F%2BJt9MxQb8KYxiQ9K3eG%2Blx2CU6I4brQIhALPr96STX34vO8LVce6QskQe1d%2BzR78NNJ%2Fgwok9RHblKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwB7p6foWY18ziQd40q3AN8d4jhSsN3kj0ewvZSTFXWjszkoHUuk9JbNgR7zwNmPYDsq1%2FTz%2BhV1cK84D4hjIS1i4uPsPJ1gXfRSZ1dpSTM7nd6ibyxYJVttLjoHWUWOVZYtugLqXDdjU%2BfhSKs0tDMqxZ7nrIAFonYfy9nDkwXvZlnglh8unuur0k80QrRwIgoEQz1PQKnLKAMRkVGRbeZ9rq5VNLSGalyMyDiQqNWRM%2BGEksD02dxXBrsZaCfAO4sZOk36033dI5YDSmuw4ix%2FQynUlQBWpVhry1LbSOXVRyDYdO5eE4pIiFLsXVfEyTUG4BT%2BKe5OEigVIsoB6n4TT44PHtvIuWiPk448mWTDJ0O%2FJNRk%2BtYIByc5WravVMLwZ%2FcC1Q4aawnamRiOWs8UIyE10PJvQvY9bVUmDGefuqCeYKC%2BGgztLWxRfUgBmDBWdhA6pHfM8xA1bhNwXfERjjyOClIurKV%2FoHKwEilptxP3OvIYMdERH5LHtAa1eCyR%2BkMnmMastsXrao6aVvKB5QA%2Be%2BE%2Bp3XY2%2BIjVFYafXFGPPqkM98oYgTwIo04JmrCOB23HvheOVwP8%2FKk%2FSs87gsH1fkjWWUQa7O%2BSUt4Xv4mWhcJErSvoF9r1%2FzhbMzGECVOxr6WJiN2DDKt6jCBjqkAfb6ODpC%2F%2Fob689iBP531IhKoiDJ%2F%2BdlVz3ASexQsiGpewer2XtlLWripe2JhtUUdmXyt3EOkSsrdP%2FdMMJ7R3tjp44x1kt8WoMN5ibBrdveyQK5jn9p4NaKaUxpb86ww43bzHegWqt2msusKNJ67xrsNSFGc%2FgZGxno8ZZQRdrsFcuHaLaAkbhUsbOn7gEE2rVNGRb%2FH6N%2BZ%2BBzVxcceihWt8tE&X-Amz-Signature=12da42bd69fd5c9c6cc50f4d70290693831615ffe00388ec44a1e5476259b442&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WC2VQN67%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T004210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCIHFaXZiGHMdvQwzW10QWs9rEVArEoHhBhvGPq5FuTaS7AiAakXQyO8KguaaYM0KAyhLMm8chPylu9LB7GrxUwpEwrCqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9lwXodzKyu9qz009KtwDUwXFVQPAljwXIPllrAz71jumL0fFYk0148JSOyWkAkcM%2BqEYfBaC2nv7%2FQKhEIWZ%2FPeyo7xPTeMfElzKZUcyzP%2B7sZ4syfnOBxfIugiPMHLGe4k6JgiEIrQF0kFa%2Fg1vtPlVSl%2FYNdGOey5lSVcDn5rCE5f5XSqriiJr9O5iYdafAwVzuHBG6RAz0PfGG5FQVkNFwwY4XDFU9NSfPjyhhZ%2FzRWsCL1rg55x2qtzWVqV1Q%2B54O5uUqDbeiskEfVKmOX0Qez5RlVIxnWVHnbvWxcEav0hmyNg3QpemCuWDao%2BZku4FzTzJ8xqhSLL%2FjTl3ub6aGU3q9lJY%2B1r5m%2BGd%2FR5jqxh7JZpT%2BGhfL8Y0VtS0jSk%2BmOaP%2F6AwIHoAtrCUILSuN0lQWEPQjF5qNfNIGrKqAl%2BxXM57DqTQtTljzW7ZONtICtmpHtiMLUUoB7KvOpRD3W3xGJUx08fcRkgyX3jpCuzWMmsiJLghzPCytqsy4SUt%2Bw0X6XnyeJ4KfVWdZtXs%2BLxZwrLrY4660diHrngTdg%2FGQ36agK7GqnMYa%2FTjgJXcMo%2BeR9lG7fmF28zZjGXcCESfeKyS4LhmznzI8RDPEckbTXI55GQYUwdabCBQtZtnjaN20H3nH%2FMwhLaowgY6pgG7G%2Fnth1aXSvuBB6B%2B1f4G5vKNaUx5A3Itvfn1kJQB3K7w8T6X8UFsLFowsL0fotObF2QxGreVvj6JZdqQURh7SV0jYA4e0bw1f%2F6Eu0Ri2vgwwFp9X6Wz1dxdEh8zZhID0NQSQF%2FaCM8K8OTbvqgvfk2%2Bv3dGu1E9TnK382Hmh%2BzvPQc8eOJrySBDtJmFnefA2SsaJhLakyNXBvxk0jO3SLuAOxha&X-Amz-Signature=fafe993741603e31a4ee233814658b79128ec7141bf0c962ff59add746a146a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653PYUCJP%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T004212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCIHRa50Lz2PuBqEdOrqfqT1m4OVp0W1v%2FRNS%2F%2FrQlzbS5AiBg0dkHIUrv1i5Ce6SotKbPtOsez%2Fbbz8Ehfj%2FSDjh%2BuSqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLsO5l1ETnXHxUgc0KtwD%2B3%2BN%2FOb%2BeHZTHGBgn3mNeGHK%2BhPUDhdqct1oSc7RMnKMXTYVjx%2BnR%2FVyUupNNcz6QAhxOI2jFc0todMnbG1Ynqw%2FycEAG%2FVX0Gm3MhZI36O5LziH4p6npuJabphzsH%2FqfD5VJhWC1caHopsVfAlyndU94mmG7c13Sp0HIVZ%2BBHkDzvDzk6dQROZrk96g1d47iRe4FUaN9NgJ0IAt9ntJQ4Tk%2FXKxp7LlD0EAb8rcYwPbvLZ2Azxi4LKtRMJ9AcjfagJb8S%2Bab5j%2F3u8%2BhhDhwmF6%2BJkFa%2BFwDW3RCJ78oPEBzKL5e5DBTb7kR3vWlB%2Fqozn%2Brd7cYBxsSE%2F7oMN8R4o5g2SeyMxY4wDt2InyGR4VguM2p8xh6RhjYCDWIAduLfXJqN180bjDUTRC2ifwkF2rGv2QwECz5%2BKjivJZp5yV4v6tRhc0gjYV95Ock%2BIe96Hdcf%2Fh9BqHKtEo1Lwf%2F%2FqjDurtTpG7vx%2FKq3xGoEoy7ZnHDmhfozfe9EioM2XWeaTgq7ioymlqpc9eMKWyHKOkDSk1QWUMtzIlvt%2FfSsjlD9OX8%2FycH5hk2cWrVoK%2BKmhpsIMKN9jKkKIz%2BzOoxkxeivzE7lACDcOOtiRTWeUmfEA8QzvaEiWEa1Aw17aowgY6pgGhp6DemQjiSA3tqjZEQxXI%2B3QfCgb1oB41wSmHObNlXFF3s4HCz1aQ%2BopU5aY%2FU47VWY6n0Dj0pCz85rnImKc42LLKpFrsNi1Amhuky0AqwV8Yz58IJnyxZiV1fHKyT4bOWXGzjb1YnWVPuS%2BbiNhTjO9%2BNjjNVCJQAVBeO4N5SGRgNG1UldQgBh7a7d1ofsNTWnMgiE2NxROTYMK3XYcguxA%2FicjD&X-Amz-Signature=9df187a9b4b261d77104b10c894393e76ed7a2c4e9cd9cfe91a6d2f5a55f58fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4AAIQNL%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T004207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQDZi8Jjdd2kp3F%2BJt9MxQb8KYxiQ9K3eG%2Blx2CU6I4brQIhALPr96STX34vO8LVce6QskQe1d%2BzR78NNJ%2Fgwok9RHblKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwB7p6foWY18ziQd40q3AN8d4jhSsN3kj0ewvZSTFXWjszkoHUuk9JbNgR7zwNmPYDsq1%2FTz%2BhV1cK84D4hjIS1i4uPsPJ1gXfRSZ1dpSTM7nd6ibyxYJVttLjoHWUWOVZYtugLqXDdjU%2BfhSKs0tDMqxZ7nrIAFonYfy9nDkwXvZlnglh8unuur0k80QrRwIgoEQz1PQKnLKAMRkVGRbeZ9rq5VNLSGalyMyDiQqNWRM%2BGEksD02dxXBrsZaCfAO4sZOk36033dI5YDSmuw4ix%2FQynUlQBWpVhry1LbSOXVRyDYdO5eE4pIiFLsXVfEyTUG4BT%2BKe5OEigVIsoB6n4TT44PHtvIuWiPk448mWTDJ0O%2FJNRk%2BtYIByc5WravVMLwZ%2FcC1Q4aawnamRiOWs8UIyE10PJvQvY9bVUmDGefuqCeYKC%2BGgztLWxRfUgBmDBWdhA6pHfM8xA1bhNwXfERjjyOClIurKV%2FoHKwEilptxP3OvIYMdERH5LHtAa1eCyR%2BkMnmMastsXrao6aVvKB5QA%2Be%2BE%2Bp3XY2%2BIjVFYafXFGPPqkM98oYgTwIo04JmrCOB23HvheOVwP8%2FKk%2FSs87gsH1fkjWWUQa7O%2BSUt4Xv4mWhcJErSvoF9r1%2FzhbMzGECVOxr6WJiN2DDKt6jCBjqkAfb6ODpC%2F%2Fob689iBP531IhKoiDJ%2F%2BdlVz3ASexQsiGpewer2XtlLWripe2JhtUUdmXyt3EOkSsrdP%2FdMMJ7R3tjp44x1kt8WoMN5ibBrdveyQK5jn9p4NaKaUxpb86ww43bzHegWqt2msusKNJ67xrsNSFGc%2FgZGxno8ZZQRdrsFcuHaLaAkbhUsbOn7gEE2rVNGRb%2FH6N%2BZ%2BBzVxcceihWt8tE&X-Amz-Signature=82dcd8d056d17be88af1ac7f594c34c566271cda3445ae7f4d296990c4f776c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
