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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMUP762W%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T021920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEWboTaW3C4jFj8L1HRNg3FDg3zV8UwyUxRXw4WOJmQZAiEAmMe%2BusTK1i9PM5SsBppV0a9Wl3%2B5iE02Di8vsbzm3JAq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDEKI9Gw6ZeMa9hlULircAzMPBBVrvAhpn4%2F%2BhDGE4aNxqt6tv%2BmEaYFlPTS3b%2BcqzoCjM11ply%2FSzTVyV0likc1xh1M3iUYhNg4cj2RbLIMI0RncwPF83k8OKwsLvjihpKRIR9TuhDzb8EjNLPJWwyxpOCtBOmkLXH6LrEaonvVztBeo93PQcH1vhZIMicvondqzOFr0FBuJedbjroAoFNXpcUu%2FHmBoHdk9sAVn1Upi34Cfb2KyO7%2B6ugMxHig6%2BaxJZXdQfb%2BmbtST%2Fcx1hjdtLnDuJkcDEx3LCMo2m73%2FNGitgv0KdFenGm6aC797DTKNckDPZPBjn0XuJmLbfgrU93LjFTMyMzj%2BIXZB0cK%2F%2FfU6VDClZTKjjWbALljILsLMoFlxLyHkkfzUGOWTg1%2FeJQTA8OhRCMrnyCp1BLtMUtBwsT0v8IxBYw8z5jkE%2FvvbUbYCuVKcuDuOryMOwsG45C9vgBZh56KeRprhcdRQySHFyyrOtWqNbBjyMFTB9ISXXBan2VNc5Ioi4C6UXfVCcp1Hi%2FfsuRJ8GSpS3bgGhtL%2BlHbB8AE3NXnAIDal62EeN%2BDtMmLhyXzFoaPpOkLJMq377GKSyu8ylZn31aChUiqo6NEwEBcpvydlZVkPhBgixaLjR7RNRasLMK6E0r8GOqUBtDACqy2FyAHtyVksUDn9XQRyX4uLxOOCPMTcfeffRudRmWiHPjKDKpqd4Fawu2V08I%2BvrfOpz4nIFud9dY%2B95Dvy%2FxTtb05fO1qRW%2FvplPDAfyUsemdEySNqPIfRGDKfEIseIYIWaWAyTcI8e2fEXzkXWoBdmuCwqUZe4fqSeu48wfKxgqFk6Q2mWULsljTKV4eIkOLVlCXeQLDCfaU8lTp1u%2Bpz&X-Amz-Signature=b6108912da8bb6a195f97c4337cf8db406bccf96368444ad42de52d7430c1387&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMUP762W%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T021920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEWboTaW3C4jFj8L1HRNg3FDg3zV8UwyUxRXw4WOJmQZAiEAmMe%2BusTK1i9PM5SsBppV0a9Wl3%2B5iE02Di8vsbzm3JAq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDEKI9Gw6ZeMa9hlULircAzMPBBVrvAhpn4%2F%2BhDGE4aNxqt6tv%2BmEaYFlPTS3b%2BcqzoCjM11ply%2FSzTVyV0likc1xh1M3iUYhNg4cj2RbLIMI0RncwPF83k8OKwsLvjihpKRIR9TuhDzb8EjNLPJWwyxpOCtBOmkLXH6LrEaonvVztBeo93PQcH1vhZIMicvondqzOFr0FBuJedbjroAoFNXpcUu%2FHmBoHdk9sAVn1Upi34Cfb2KyO7%2B6ugMxHig6%2BaxJZXdQfb%2BmbtST%2Fcx1hjdtLnDuJkcDEx3LCMo2m73%2FNGitgv0KdFenGm6aC797DTKNckDPZPBjn0XuJmLbfgrU93LjFTMyMzj%2BIXZB0cK%2F%2FfU6VDClZTKjjWbALljILsLMoFlxLyHkkfzUGOWTg1%2FeJQTA8OhRCMrnyCp1BLtMUtBwsT0v8IxBYw8z5jkE%2FvvbUbYCuVKcuDuOryMOwsG45C9vgBZh56KeRprhcdRQySHFyyrOtWqNbBjyMFTB9ISXXBan2VNc5Ioi4C6UXfVCcp1Hi%2FfsuRJ8GSpS3bgGhtL%2BlHbB8AE3NXnAIDal62EeN%2BDtMmLhyXzFoaPpOkLJMq377GKSyu8ylZn31aChUiqo6NEwEBcpvydlZVkPhBgixaLjR7RNRasLMK6E0r8GOqUBtDACqy2FyAHtyVksUDn9XQRyX4uLxOOCPMTcfeffRudRmWiHPjKDKpqd4Fawu2V08I%2BvrfOpz4nIFud9dY%2B95Dvy%2FxTtb05fO1qRW%2FvplPDAfyUsemdEySNqPIfRGDKfEIseIYIWaWAyTcI8e2fEXzkXWoBdmuCwqUZe4fqSeu48wfKxgqFk6Q2mWULsljTKV4eIkOLVlCXeQLDCfaU8lTp1u%2Bpz&X-Amz-Signature=315ca8f5eeab2168afa513d519e6e7a296e26795144ff0cc524f639299d01730&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FJN3LUB%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T021922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFeDxLTdBSwdvz9LSSoCzVuQ6oxGEmOaPLY48%2FYr9BHJAiB5QYGzj3POZuBuBNMWUG%2FKQc7AurATOsuq93P2tQGwHCr%2FAwhrEAAaDDYzNzQyMzE4MzgwNSIM%2FC1uggauZhyJkdaOKtwDejoD9xyXESGzd6F%2BxL50S9bgeT3osnuLPljAM%2ByHzqGLUxI%2BryHD4yngByFlsDZXz1GptG3TcUUjN07LsQFjQqEh%2FqIiHkWJp%2FE49KPjdNrdd3Jt%2BqHJjeAFI%2F%2FigDdWKfDFwMyYPW2ff0MapdvUoeVn3um1iAFczzLIh1yGrTRqWc4KwEANXpOtCs9fw%2B%2BQsosZGP5kG08YnwybkdRukdJ6M85W9EF41gWYiPyXh0iXIYuvauUrlYUAhcGtQZlcN3BsWIh6h7eE6lQuzO6sRnt1HtyW69BsGZM8ACoyUS35eHjtyOtJ%2BslMwb4wCAy73ps19fOlw9gVw4zp0dz5UeuswUtg0DRCbo4Tis6R0GBgMfb%2BZii4kVYYBeZAEqTVjqvHXDkmdx4grHs%2FU9V1fwqoihR0u8rk1dGhVGb9IJxrNncVUO8PBerJu3gSpuHe%2FlHQ%2FSY71n4xz9%2BqeClh9iAoEAs4FcycEzrEg77ni77rtK%2BfqRFY9Z%2BV32ak0cqZj0hjqDPeKNCo2VEYYaGvvepwHvHntvhHwIrwEAmnYR4FryJcxgTqKj3ZGXWUqdRvVitdHr%2FJie38Vu%2B9Swiq4RoSFTuladqxbz9VtD8kqYUt3UaHTBCLjvuuEMoww4TSvwY6pgFK%2BvNcgwqBwVSLfCv0d3hH2thD4nnlCWMPpfnLvIeQM035fz0Sd9F28WCMby3fDxkPLtkx7LqJJOZiEKnZ8gp%2B9DbPNPsJstdjvF4A5ICjQ0l86AexoIxQPSvMfc2aT3k5ZRPlfAIf1Eqy8DpUSYWB0hA1U6bq94bRa9WJdR2xCM3fHQ03HIhMupH7VDGXWKbVb%2BSzcAngmuUINOJdqPY9nc5gBsuf&X-Amz-Signature=e07f74ef6543622aea1ff1a9c79b8d1be45121a2666d4081d8bd26f272d5ea81&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBHHL64P%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T021922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICgno2v5dBspQYsfCqe2r9YVB5%2BYx4OnouRnt1BCoh2rAiEA%2FmPxUKKbDWRdCsXbCzQBPYv2Y6YcfcodnKEtuPvJ9pUq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDODTNHl%2BjAMZO2KpVircA4Mp2By0oCa8suyY4w6ikjYzvvygdBowzYdjpvDXcodIVtadLO7Xi491PmtP8iMgRTzc%2BajfJhz4dgsYLGHKDB4nlUgPiHkt98bXpHf4wygmCZrJluCpOOC9VSSPcygPUhbcjvTxfWOXCrU81b7GCykjMjjYesz6Xzs6lp2OSnE0l9CVIKKOEjpIu5xzt0OkEkRbwsi0BeJkiIkszDCSA6xGPYgoorrVk0hsFpluR%2FLKLW9vBlv8Wz35VUYYhU95cdFrvg%2BBcwjeR0HRnxEXhDtBuKT2G%2F4wu2geMWAJ6cJgzdL1rXq13pkPfhh7aXZr4fqh%2F1ryMR%2Fj1EOaoo%2FxU%2BBaXfU%2BUoeHLIkG%2FuvVIoDy3ZKbSdKkRYUvYpB3hiDo1ckBrgI1eSQqlAJrbYn5tzVKGa4US7PTV5PaQEBC0twjucGizrP1yAmoFFsqkPpwyZSW7e5ktznEwmKmumO%2F%2BceImcCVSqRov55UkffNgfjfNggecOkdWlPyg9xjLkKrMYd4RuNdcQRH7TMp88oT8wu8CUy%2Fu0OtEoTbo5hkLauy7e4vDtXu2oT6NwNljgMHRtrRqikF3R4pmsXTb9gNaYx0fEoeQahUJlQVLM5vuARPdc1yYO%2FgCe5p3PzzMIaE0r8GOqUBrfmZPlZrmcvk97GY%2FuIgxpW8U%2B0uyabbJq%2FPWbpzXbgdoggfUtS%2Fl9bKl8zhQy17pPGqo%2Fy1s2S2rGLo%2FJ0UflSCQiYeffADAQbJOK997GWT5yRacGXNX1GbapaVHhaRYzDWwvt%2F6leL%2Bfb5n1JoK5REmrQbps0xa3mqcq53eUsfv%2FPVhclwb%2B0BaNOnw5PLWmQEM0c1f%2FUj7sCI1RPtRrakcArk&X-Amz-Signature=91ccb9da8325e9e3d821f1a5e540d7da5b923a8efad38fa0d1f612e53e317f98&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMUP762W%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T021920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEWboTaW3C4jFj8L1HRNg3FDg3zV8UwyUxRXw4WOJmQZAiEAmMe%2BusTK1i9PM5SsBppV0a9Wl3%2B5iE02Di8vsbzm3JAq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDEKI9Gw6ZeMa9hlULircAzMPBBVrvAhpn4%2F%2BhDGE4aNxqt6tv%2BmEaYFlPTS3b%2BcqzoCjM11ply%2FSzTVyV0likc1xh1M3iUYhNg4cj2RbLIMI0RncwPF83k8OKwsLvjihpKRIR9TuhDzb8EjNLPJWwyxpOCtBOmkLXH6LrEaonvVztBeo93PQcH1vhZIMicvondqzOFr0FBuJedbjroAoFNXpcUu%2FHmBoHdk9sAVn1Upi34Cfb2KyO7%2B6ugMxHig6%2BaxJZXdQfb%2BmbtST%2Fcx1hjdtLnDuJkcDEx3LCMo2m73%2FNGitgv0KdFenGm6aC797DTKNckDPZPBjn0XuJmLbfgrU93LjFTMyMzj%2BIXZB0cK%2F%2FfU6VDClZTKjjWbALljILsLMoFlxLyHkkfzUGOWTg1%2FeJQTA8OhRCMrnyCp1BLtMUtBwsT0v8IxBYw8z5jkE%2FvvbUbYCuVKcuDuOryMOwsG45C9vgBZh56KeRprhcdRQySHFyyrOtWqNbBjyMFTB9ISXXBan2VNc5Ioi4C6UXfVCcp1Hi%2FfsuRJ8GSpS3bgGhtL%2BlHbB8AE3NXnAIDal62EeN%2BDtMmLhyXzFoaPpOkLJMq377GKSyu8ylZn31aChUiqo6NEwEBcpvydlZVkPhBgixaLjR7RNRasLMK6E0r8GOqUBtDACqy2FyAHtyVksUDn9XQRyX4uLxOOCPMTcfeffRudRmWiHPjKDKpqd4Fawu2V08I%2BvrfOpz4nIFud9dY%2B95Dvy%2FxTtb05fO1qRW%2FvplPDAfyUsemdEySNqPIfRGDKfEIseIYIWaWAyTcI8e2fEXzkXWoBdmuCwqUZe4fqSeu48wfKxgqFk6Q2mWULsljTKV4eIkOLVlCXeQLDCfaU8lTp1u%2Bpz&X-Amz-Signature=64ed8878a7b370131109f10a6b80603f965eaad3fdf1bf7db94309c48a33fd19&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
