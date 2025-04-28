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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466672UBIG2%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T073417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWnCN63KondbhHIypnzTa0N%2FQ8ue0d%2F5rHTwQaYqeJTQIgUj7G3AyVGRsKfpCRjRDj84zon54rj6%2FtyohMW%2B5eNEEq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDNyuUX7%2Bhafslaz%2B%2BircA6FHGXCi7ls0opr%2BH1jQdFfGIMEIJOebytJ%2FMcLgrguRlvsyHpf3vpDasyCg0THaYWbvxh3PzsvS6IErPt%2BPVFkuwcD1WjOdTHB0x5roR%2BPwCk5BEq9tsnYlZr0DAAds9i1EqHcanxrtjg27hTArK60%2FCRaazNkh9Io4h8lyVOjksgJtTiWxiNUTEdoIpgzOD08x33gk5Hqx9MxhA%2Bik29qsauW%2Bpw9NRBUvjcWR2SA%2Bo22p0dlCZKLh4gl1X5ir12K55PR9weVuBh5LqjFecMMcixOwwyKazLw4QMMVuWsGV%2BRFne%2FypjHjvqiNkhjjVLFk5KQ4h5DWgEebgsR%2FnWOcrLVP9foY%2BVU34wPvtKx8LO4maXJ4dw9DKQ3SJUo0i36Ynu2za3b3jU5uVTItaKV4EwvJz9SxaWB%2FMsy%2FKR6Ce5PjgYIlHqGkm20esPUsmYwHrrP8msyo9gniAExQqaR40VErXiCEIXfbDSVRhebQZNCpTRN8gBYJnLB%2Brut1362qDLoIM50vCwImUHnMgZzCIuDp78cLf6axHd8fhpGBXjfoyXEmMl%2BT8R4JgCecKUdwhw5rafZzNRKvnFVuTWa6nwqt1UdPcRMaSlWLHSJwUwTiVD8D8vGHAtCmMPu7vMAGOqUBHWB4x3Oyy1foCLUjFGQ6DhLYpNawTQSMbWLIa4zC4AZLVOY6RAD%2FWS1FXL1UzdnvuXVwsg0ZqfsB6cBPxS0JwiCbROwIgmdPtviccLUY7al0GuYPdMcgxup9V5Vkmtc96dRprPykCF7t8g1czf%2FXXFFutZAflojE3v7gQGKy0hQCgf3RXyDGbPFvTCH8SKKzuWY5JnxHgTteFw3uIynUbcMIqQUN&X-Amz-Signature=74bedd1cc8974e5523245a53949e81f27de11d209da99ca64aa7bb9ef614ecf2&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466672UBIG2%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T073417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWnCN63KondbhHIypnzTa0N%2FQ8ue0d%2F5rHTwQaYqeJTQIgUj7G3AyVGRsKfpCRjRDj84zon54rj6%2FtyohMW%2B5eNEEq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDNyuUX7%2Bhafslaz%2B%2BircA6FHGXCi7ls0opr%2BH1jQdFfGIMEIJOebytJ%2FMcLgrguRlvsyHpf3vpDasyCg0THaYWbvxh3PzsvS6IErPt%2BPVFkuwcD1WjOdTHB0x5roR%2BPwCk5BEq9tsnYlZr0DAAds9i1EqHcanxrtjg27hTArK60%2FCRaazNkh9Io4h8lyVOjksgJtTiWxiNUTEdoIpgzOD08x33gk5Hqx9MxhA%2Bik29qsauW%2Bpw9NRBUvjcWR2SA%2Bo22p0dlCZKLh4gl1X5ir12K55PR9weVuBh5LqjFecMMcixOwwyKazLw4QMMVuWsGV%2BRFne%2FypjHjvqiNkhjjVLFk5KQ4h5DWgEebgsR%2FnWOcrLVP9foY%2BVU34wPvtKx8LO4maXJ4dw9DKQ3SJUo0i36Ynu2za3b3jU5uVTItaKV4EwvJz9SxaWB%2FMsy%2FKR6Ce5PjgYIlHqGkm20esPUsmYwHrrP8msyo9gniAExQqaR40VErXiCEIXfbDSVRhebQZNCpTRN8gBYJnLB%2Brut1362qDLoIM50vCwImUHnMgZzCIuDp78cLf6axHd8fhpGBXjfoyXEmMl%2BT8R4JgCecKUdwhw5rafZzNRKvnFVuTWa6nwqt1UdPcRMaSlWLHSJwUwTiVD8D8vGHAtCmMPu7vMAGOqUBHWB4x3Oyy1foCLUjFGQ6DhLYpNawTQSMbWLIa4zC4AZLVOY6RAD%2FWS1FXL1UzdnvuXVwsg0ZqfsB6cBPxS0JwiCbROwIgmdPtviccLUY7al0GuYPdMcgxup9V5Vkmtc96dRprPykCF7t8g1czf%2FXXFFutZAflojE3v7gQGKy0hQCgf3RXyDGbPFvTCH8SKKzuWY5JnxHgTteFw3uIynUbcMIqQUN&X-Amz-Signature=0dbbd7fa7d8ed3e4fdf7e478876c035ab218710f9f96ea9ff741e8f129016f54&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664GGPZNC%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T073423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDnHUNby%2Frl0jsNY54ae%2BSJ79LFt5IFMGyZaJzlC48m4gIhAKJoyXtJbe77kc27tTaGzrrjNtcPsBeYq0Jy4MkK3yc%2BKv8DCG8QABoMNjM3NDIzMTgzODA1Igzo70EWmxSKKI0vukgq3ANY0Wd6T2vEEGVF%2BjcVzc7l5aXGfeWjJ3CeA9FdS%2BaWJo%2BJ3F4jrEdNzmwubFyDy60Yp8d9zziVZNLJuq35VsX1DF%2F1l1dPf5ynbNtCkU3WqFo5gxdfGGXezRrOsIIs7shUOWTipoPtinHBXpBRHseFGzvH%2F3D7CGDyjJjfTS8288Pluv1Ud5ufeCUKM6vC7lUzS8UaXD9GENY6Y3C0cWAx%2BvL5B1z2qKUNyBNciJEa3bWLHwDXM0w9iB8iWJvvz8vPbTjE52jaWkrDJfBPkhrutRDMD75zIHd952v9PCUlG5URifXT6UTMFvbFgwkQCDBLphfeXa0qKtCCnrzeBCgiinD7BknKSYsBUko4UUwZYhjGNOzQS5bTWS7P%2BC5jO7KL8x0CPBNinq%2FxDdhW0tUTNtgxpsFkL4vJm4ll0r6nkTaMy4RNfMd6Hrg8mHgeybWJmMJBbKFuTBHRuyK6VZRDkiQ54jcraqbBwhlPlcgnPIreD%2B1fBAx2ZvUMPTeviMwl7oTtQMsivh8n5s008zEua0IW5dZbbIyTaxSsBsM0rVbrTP%2BzFV65vYMxK6ESzKjKT%2B4i5N7ePUSPsIb%2Bab5ZHJa7p%2FpYdlLrNmS9hP%2BZDD3y5L3F41xKu4kfrjDmu7zABjqkAcgHKCS77SA39E9El0Gho%2Fl6Yo6PWxnf8JVkWTILhCIcPCtaq2dt8STFnIkmwE0m7HGNd2kpsGaDbNdvIwc6XGHtg6ih5%2BkIrP4zJ5gcrC1twOh3oTZ%2B%2B3%2BlQUy9tDx%2BoUvdCZdtU8fmqhGiSRSIf1gm3yMpTO%2F6%2BRxlBvGsdDI9SkIaQXP52Ai3AMaSIFR%2FCRyiieq7W6tFcPNUZ8osXuUxeekc&X-Amz-Signature=f999b09f1a477fc8430d6888f9fb6b4332d80907c74722ed07082fcd4c76757a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRBHFAQU%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T073423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC7mZOjG0Yf1RhQg2ju1VoTSj%2Bwv9vsJQo6Wh1lq5gNdAiAAvlXh6CS0Hykiznef5ahjtLQfi8D2iZ48VuE5c%2FpRgSr%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMEllCQgSxdCcQdJLfKtwDfgyoIe%2FSf2fVdqcZJ%2Bbz%2FWfenXDk%2FyiJ3WBsWdKkNP9KM1SZ%2F%2Bi0DBA6%2BF8eV8YlintjAUP7wb6fpzMzPifnaxx7bJiY2WV4uYhvwYtJpMvEac3tPKRpmXV%2FExCbX8JXo06lXcnWGvB6rem0TakPKCcb4udi1%2FVFcHp4LIypKGD0dWI7zbX1ONSuSlLN9ZsbuaDAa6gh3Jh2jYGrIBR1W3BQs8Z%2BSl6xLSxxE5O9mg4kC%2BnnStbGIclN7TPOoUAiVBF7eMXN8C17PugYiTywEWen9nQVMko3MhT6Dx2umeqq8SegmT5Q97TiCGilF7KAK7B%2F0ybf%2Bqv9kWB6mfj9AZV6c%2Fqt3baedHefLdPc66VHYQOApzw116GbvtHGLBhmflEISy1nUMVIN02x79DmllzMbYseG4N15hAkZy7CBiWCqdJxch0SCBKcf1Un%2Fp%2FToH2cyybI7g3WKymsebCY423jWzH56KnR0N4pDRaD1jqUklibmY9cX08D7NpiJHkfWHp%2BriTj6RyoNo%2FwA89ZTZkEAjmLbdAIK1mWAH5KRNfQO%2BbR3ebaG6spWEFzI5wzdO5ytLb0hYOS9j4UiFwF9%2FedxTW%2BlxOvvv9XNRjDP67B5jHZ5PDdqJ8fvw8w%2Bby8wAY6pgGiB2NJVjLXdmpa3jrn0uD18BCHE6hE2yOLPY7sk4F77%2FehwaO1CJHYk1xgl5bvsOOnVSjEgsmWsSJGKJd8EXHCvcGmgI1w05DvN%2FETmSpBh5JAb4UD1mDDHjDhQoiQc7kVRPfEYYgQhC1YXAngtVe%2FHx2iv2mM%2Ft86ySnQF2soV1a1%2FgTjqprbXDHZPHgJUerww5LYXhgs%2B7ts7j5If2Dtmam8S4xp&X-Amz-Signature=e7995650100a0ce1e791e7af627e8040b86b491ff64b4d5ed0bd7428fe9b9c4c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466672UBIG2%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T073417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWnCN63KondbhHIypnzTa0N%2FQ8ue0d%2F5rHTwQaYqeJTQIgUj7G3AyVGRsKfpCRjRDj84zon54rj6%2FtyohMW%2B5eNEEq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDNyuUX7%2Bhafslaz%2B%2BircA6FHGXCi7ls0opr%2BH1jQdFfGIMEIJOebytJ%2FMcLgrguRlvsyHpf3vpDasyCg0THaYWbvxh3PzsvS6IErPt%2BPVFkuwcD1WjOdTHB0x5roR%2BPwCk5BEq9tsnYlZr0DAAds9i1EqHcanxrtjg27hTArK60%2FCRaazNkh9Io4h8lyVOjksgJtTiWxiNUTEdoIpgzOD08x33gk5Hqx9MxhA%2Bik29qsauW%2Bpw9NRBUvjcWR2SA%2Bo22p0dlCZKLh4gl1X5ir12K55PR9weVuBh5LqjFecMMcixOwwyKazLw4QMMVuWsGV%2BRFne%2FypjHjvqiNkhjjVLFk5KQ4h5DWgEebgsR%2FnWOcrLVP9foY%2BVU34wPvtKx8LO4maXJ4dw9DKQ3SJUo0i36Ynu2za3b3jU5uVTItaKV4EwvJz9SxaWB%2FMsy%2FKR6Ce5PjgYIlHqGkm20esPUsmYwHrrP8msyo9gniAExQqaR40VErXiCEIXfbDSVRhebQZNCpTRN8gBYJnLB%2Brut1362qDLoIM50vCwImUHnMgZzCIuDp78cLf6axHd8fhpGBXjfoyXEmMl%2BT8R4JgCecKUdwhw5rafZzNRKvnFVuTWa6nwqt1UdPcRMaSlWLHSJwUwTiVD8D8vGHAtCmMPu7vMAGOqUBHWB4x3Oyy1foCLUjFGQ6DhLYpNawTQSMbWLIa4zC4AZLVOY6RAD%2FWS1FXL1UzdnvuXVwsg0ZqfsB6cBPxS0JwiCbROwIgmdPtviccLUY7al0GuYPdMcgxup9V5Vkmtc96dRprPykCF7t8g1czf%2FXXFFutZAflojE3v7gQGKy0hQCgf3RXyDGbPFvTCH8SKKzuWY5JnxHgTteFw3uIynUbcMIqQUN&X-Amz-Signature=0e468a6aeb5d2d81445d191b59a0370735f648173fbb815ec0861272d92fbd79&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
