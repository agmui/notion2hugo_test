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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUP4DTWK%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T210640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2BMEaUWVY0AMQ2mIQ6pV3V9GCSuEKHB3meVYcrcve6QwIgLQDAGr5U5uQcGLTzn00GJKEFb69EjPGMs0jpK6G6GkEqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGBZX02tbq3DyJeELircAynItLwaIAyDRWPcpwFNpBl3uVh7%2BUWYZmmvHyARKpm4y2DaQoILUuUW5dCEk97IaKTBrD3PMbIEysYA90mCyqLx%2FtTWqw85jri2pPmmumRmWY%2F5ai1YqbyllmA0EPSKp9NmBjOvluGlRYgL1essppDqS0qKzHFgUbHwQTRatZmxLsLRe2RYzFTf3YnOmvA6%2FONgk8Fg162pBEpd6x9QrpKF5Jjhs6f5qTt7dtop5c9yE423SzEjO3dHgQL0Kz%2BTPE%2BBG2iwrz5%2FnA5TtbdQ%2BURWvtj8%2Fj4s%2F78QS0clrm%2BQIU8afb88EXEuod210b62oMh5kBk2PjK9c1RN4gDfurT5I%2FIiu3iJTdnaso1b2iZQ5h5cFtd1n7a0VTtNJ6o8ZKb1SH7GGxdEukHuo2WpqG3WUeMa3HTXT49%2BiFoQ2xJGrF%2FFvE3rv4Z7ubeebgB44Iog3a0PRoAZ5JWWlB57yfWDjrILOspDQpN6%2BX3qPefxUCRiRQ1TUVr%2FLoV51%2B3ZTZaT9cf6lmDlJVQL7ManWg3ehd09N4s4WIhWZJnt1pv9QG9Zfm%2Fsacq6L6lhBzSjJ8QhWsD2jIBJZ4oPG6iZ8oZtT3oas%2BnMXbm5DupOniikgc1sFEM71QEma7CUMM2NtL0GOqUBTmT9yXn%2FJ5gka4DJ8q6Y0UVlgrYsYr1Vaq8%2B1M7oEY2g7X9Em9lvd21qJfb9MpHG2atFSwpT6AXa19LzcUdBOghnnHeZT9%2Ftdif6NUZL2HfTnNrmHJ5l4bMk0a8oLsZVNTd%2FALcYujCNRWY2mtvaet3iytG4rBJJ8Aq%2BvlmXYTjq21I%2FNps4xcKKP1gGkjxCMnUOqC8G9bb4TAsTLR%2BqHRS%2B64dv&X-Amz-Signature=53e8065951de65349d201909d85102e0968fb0b4b5fb73a428d59abad6b7ce13&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUP4DTWK%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T210640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2BMEaUWVY0AMQ2mIQ6pV3V9GCSuEKHB3meVYcrcve6QwIgLQDAGr5U5uQcGLTzn00GJKEFb69EjPGMs0jpK6G6GkEqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGBZX02tbq3DyJeELircAynItLwaIAyDRWPcpwFNpBl3uVh7%2BUWYZmmvHyARKpm4y2DaQoILUuUW5dCEk97IaKTBrD3PMbIEysYA90mCyqLx%2FtTWqw85jri2pPmmumRmWY%2F5ai1YqbyllmA0EPSKp9NmBjOvluGlRYgL1essppDqS0qKzHFgUbHwQTRatZmxLsLRe2RYzFTf3YnOmvA6%2FONgk8Fg162pBEpd6x9QrpKF5Jjhs6f5qTt7dtop5c9yE423SzEjO3dHgQL0Kz%2BTPE%2BBG2iwrz5%2FnA5TtbdQ%2BURWvtj8%2Fj4s%2F78QS0clrm%2BQIU8afb88EXEuod210b62oMh5kBk2PjK9c1RN4gDfurT5I%2FIiu3iJTdnaso1b2iZQ5h5cFtd1n7a0VTtNJ6o8ZKb1SH7GGxdEukHuo2WpqG3WUeMa3HTXT49%2BiFoQ2xJGrF%2FFvE3rv4Z7ubeebgB44Iog3a0PRoAZ5JWWlB57yfWDjrILOspDQpN6%2BX3qPefxUCRiRQ1TUVr%2FLoV51%2B3ZTZaT9cf6lmDlJVQL7ManWg3ehd09N4s4WIhWZJnt1pv9QG9Zfm%2Fsacq6L6lhBzSjJ8QhWsD2jIBJZ4oPG6iZ8oZtT3oas%2BnMXbm5DupOniikgc1sFEM71QEma7CUMM2NtL0GOqUBTmT9yXn%2FJ5gka4DJ8q6Y0UVlgrYsYr1Vaq8%2B1M7oEY2g7X9Em9lvd21qJfb9MpHG2atFSwpT6AXa19LzcUdBOghnnHeZT9%2Ftdif6NUZL2HfTnNrmHJ5l4bMk0a8oLsZVNTd%2FALcYujCNRWY2mtvaet3iytG4rBJJ8Aq%2BvlmXYTjq21I%2FNps4xcKKP1gGkjxCMnUOqC8G9bb4TAsTLR%2BqHRS%2B64dv&X-Amz-Signature=8a8950231e7557f9ff408920d2c26d07676982a9dada2fd906406fe9e4a7eb9c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2YGFWJI%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T210643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCUb6Z1GzRzur2N0AtJdzy9xJmjwel49PlDg9oq5dIe%2BwIgCvpCTJfN9OvLaqhKIld%2B7slmopX41vvizyREMhn6H1cqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLo1z61qRYaCIc4QUCrcA7ABfAYYZabSGeANUy7b0eRq%2BQ2xbJJEIdyweY7AFQBdkO4NEQSaiUP%2FNfgl7vT%2Bk%2ByydeyeU%2Bszi6n9BIAdpx1Z8hgv8e%2BxdFPGlHaALf3FnXtaqqhPp7IN6W6bIujYs8v4cur6k4Fu7KksKpziiRBZrRMHX1q2w08B0L0YW8J6lZIwDetjhP2RRLXIXCM3%2BaJkPBZiQ1vSw4Wi3myTRY0d7Ae2Oymi%2FtD2%2FN5OqZbG7YzeGCljLoGqqQcCvsjTUf8EZIkx5T4Wdqtk7IkzsOvtf6z2dYy4F2oYmKqw3ytT5LV%2BiDi5zo%2FxxiJhpKlSUqXIh99vTrloz6NyYdq3ObL3Ls7CzgNJNes%2B1YFxLvaGoRsaJzG9h8N%2FCSKAD0%2Bp0xwWo5lzTz5FgDTWUWtnSZ1%2FgRiB7HYl6s4eNEPtwZ3FH2OLVa6Wc7bWqyRy0Kebw01EwXHBOX5L6tAgkxEQMIvxx3l8PQQBRAyVvEyuwHWkwkvUj3YYNTjWtZl9br%2FiAxMgql7lb%2BhJ99qSiqGO5vnVpg4dQtI%2FDTcuESH23rFQDP2wVR4iXZ%2Fy4V8VCcXBxtoF%2BzfDplak9uvdWYEHkxUtwpM5hW2Ii9Eokss%2Fty6e7z2Ev4ysYmPxlk%2B3MKiNtL0GOqUBlVKyV7jd0e0DF2FH9SD6tK45LNovOY3eNa7tnS4uAuy%2BDSVRoUP9bQZWGqX3cB%2FYyL4LBkCLYf25CsHlEvNL4zeZM1uUz5Hm1nbM81HY5UO8BwtMAE6397QYX9uTEGuTJ4JPsOnSHzGezCkXf0rWILVUPeOHOM5tOxAI66aEAL31%2BurToGXSZyJ4zluscQSnquj5viaACV6xI5IaghtdZSqypNzU&X-Amz-Signature=0fe7a9d0ed1c66546b78b333847189c6bb6995f6aa1b67d46c887898062c28f6&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPCISP2T%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T210644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFH6iXo5uSVexKf%2FEHoBmzQdfVijBe%2FxUxH8EQzOHSkXAiEAsrr%2BvHPbNCz7d3lgfvQkdop976kbhsGZg6NcXdpXJI8qiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE1ZmSb2CLFYzbNXWSrcA5bqLFX6RmCvGobDknnGsegRkGO6I1Amt%2BBtaOqyqYiL0N0mCWZfv%2FZW5PBcKS%2B9%2Bem%2BpCiV5eYDw5nqubN%2FK61j4iZ2bS1a6OoNRQeGsmAmaWgKFd8Udu6mUvBTMtFhxXQa2Z8aQQArRHuOYXU%2FCKgd%2FJA7tpRrPAOgKLuMmbpPWjNp%2Biw98Pd0QVVmm1LT5W4ZCfj%2FUrpSqP%2BFT%2Bg%2FxkGLrtorLMJ%2FkY0mWFCWjRRg%2B51NvKrgMNKj2fmoxj0eT%2FMhaN0KyKosgtQuvILSXneD9f74mIrsBpSI1B9ZN5eMO5VwedTBST8mP5L%2F56z2McbxqK4Rug3Z9E0mvHrGCdmaAyLh4vK49A83MRR79PuZBxE5a3UrkezJjke4tE%2Fuxdd3vADsZb%2BcMZPZz%2FXMJgkjOfmIDapxqVTEd94E8nxzS%2B5W6gHv9tyPxWVSj6NDebJ%2BZXcYTJKvvqIPtaTv%2BH5NE8YYmFO7KA1NjUEvrruRruzOp3cK%2FS4FBKIET7vps%2FPjSasUuc0bXHUQKxuGD8bmzVHFnsh%2F4X%2Fc7sPWcxYXVLQf1GA3twcM0cdmk90PFM43z7WsQxVqMqsK029PAEkibfmmZGOVzpdRBwLpNxgpyuaHNDmOos9geWIWMKKNtL0GOqUBs58X6lqPM5Es%2FdlVEiZbJi4WkEK3NsnEsTHrf%2BY7nYTMdcf%2BqR4VYsEIQiTGfyAb7BgIFuBQELkkINYtHQT%2Fi6a6eb62rcYl3NQI3BYoNHPpVCjWuLwxeiSf48M0uov8DPuAPzfuz9Yj%2B00UFSNFmdzcGIeiIojk4aozKSVRrscaEul1f0idAqMSkFbHHKq5XZqFwEcJsC8YmqIogGqYL4UjMjvz&X-Amz-Signature=53b9298d20f1c6958b45633987a1f95e81e78388fe5d5027ed939d5fe00912dd&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUP4DTWK%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T210640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2BMEaUWVY0AMQ2mIQ6pV3V9GCSuEKHB3meVYcrcve6QwIgLQDAGr5U5uQcGLTzn00GJKEFb69EjPGMs0jpK6G6GkEqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGBZX02tbq3DyJeELircAynItLwaIAyDRWPcpwFNpBl3uVh7%2BUWYZmmvHyARKpm4y2DaQoILUuUW5dCEk97IaKTBrD3PMbIEysYA90mCyqLx%2FtTWqw85jri2pPmmumRmWY%2F5ai1YqbyllmA0EPSKp9NmBjOvluGlRYgL1essppDqS0qKzHFgUbHwQTRatZmxLsLRe2RYzFTf3YnOmvA6%2FONgk8Fg162pBEpd6x9QrpKF5Jjhs6f5qTt7dtop5c9yE423SzEjO3dHgQL0Kz%2BTPE%2BBG2iwrz5%2FnA5TtbdQ%2BURWvtj8%2Fj4s%2F78QS0clrm%2BQIU8afb88EXEuod210b62oMh5kBk2PjK9c1RN4gDfurT5I%2FIiu3iJTdnaso1b2iZQ5h5cFtd1n7a0VTtNJ6o8ZKb1SH7GGxdEukHuo2WpqG3WUeMa3HTXT49%2BiFoQ2xJGrF%2FFvE3rv4Z7ubeebgB44Iog3a0PRoAZ5JWWlB57yfWDjrILOspDQpN6%2BX3qPefxUCRiRQ1TUVr%2FLoV51%2B3ZTZaT9cf6lmDlJVQL7ManWg3ehd09N4s4WIhWZJnt1pv9QG9Zfm%2Fsacq6L6lhBzSjJ8QhWsD2jIBJZ4oPG6iZ8oZtT3oas%2BnMXbm5DupOniikgc1sFEM71QEma7CUMM2NtL0GOqUBTmT9yXn%2FJ5gka4DJ8q6Y0UVlgrYsYr1Vaq8%2B1M7oEY2g7X9Em9lvd21qJfb9MpHG2atFSwpT6AXa19LzcUdBOghnnHeZT9%2Ftdif6NUZL2HfTnNrmHJ5l4bMk0a8oLsZVNTd%2FALcYujCNRWY2mtvaet3iytG4rBJJ8Aq%2BvlmXYTjq21I%2FNps4xcKKP1gGkjxCMnUOqC8G9bb4TAsTLR%2BqHRS%2B64dv&X-Amz-Signature=67b204c843dea0761abbe98e1d1b4c774cd15dc0bd41f008fccb30a79e28bc88&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
