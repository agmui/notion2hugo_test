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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4QNVWKI%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T150813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCt4Tq9b5qmsZ6g21bjPMYG1SaxYSBhsJVdS7Dkz9G8IgIhAJZfhtWhw%2BDju%2FDm5oWKDXydBp1aMjeaC7tIiQqaNez7Kv8DCEgQABoMNjM3NDIzMTgzODA1Igx2vr8TlbjmdyXWg3wq3ANIK4WF5DJaBGU%2BrTtGJH%2BwGIy0m4gVDoxVwtE544WVbKGFUXnXwnG4yD%2FAR4loWKc%2FnkJXsSbd%2BV%2B7tzOYGjV%2F2Weq%2F%2F13mNYc0sSdDrZZUYJIVairQY4eImuWyTJF5XrdBPhuTd42aaC%2BezmVFqPIAx1QjDH8mT2GregkM79YKbNt%2FYOsZMRadZoHpRwLCYgDR5U4jhOcSJHm3JOW0vzzYfXWCeCgv9602Vbc5GjZPZMjWC%2BnnyLH4pPhZSjVMfxnx%2Bw5EniULBRTjY9rN66ISBBs1wep5dqdMlmVapZK4561KXZa0OlIetsh5JFHPxQsUFqQKYNTHAh3LVfA11SzMnUl7%2Ft2VfUUB4mHIzlwvH0nftBhWpwkJSGuw6QqMa1RwxcDnGvBaW26yV4ky2oufpBm1Td2efU03YX4eSV3v1JP69UHLuhFpTStujZ8taFg7C0Zzk18VRhDB%2Bnb7RHsKFIAYut87cLLQnMg4P9YsgxLRLIYymjy0FMKnXgPDb9suE9d%2FtcOpeyHyO6Jpy9LanyVGYT%2BeeZgmR7KaqH3hccRIuTtpUxeQWNOEfxIhZotEE1SIyC%2FVDDe8pdDchjitS1NZDz2o%2BjrzpMqF5eAFQ91NYsjVE7rXnZFcTClm53BBjqkAQMa9XP65MGB5XR71q%2FMp7LN2Pely%2Fnd0UL5HY1mwgkD4XYwV0iwbXj8c0HHOzKu9ENNUkK%2FXzyeXimhICO9Qfh%2Fu9bwjsOlHpqNByV0d2%2FaMlNd%2FPFYZvZ87gFsqECApLHEynJJ69dJQZT1GNfUFEWf3Ms2fXxslRBzLDA4LVWTuHhtygtsN9aKwvBE1msQFvdfztvvgPZlnz7bObl2OR5YZLom&X-Amz-Signature=b3c28b352427974979883d0dff2ddd3e1aa354b449179bd7be956ca3b3d5b2a5&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4QNVWKI%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T150813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCt4Tq9b5qmsZ6g21bjPMYG1SaxYSBhsJVdS7Dkz9G8IgIhAJZfhtWhw%2BDju%2FDm5oWKDXydBp1aMjeaC7tIiQqaNez7Kv8DCEgQABoMNjM3NDIzMTgzODA1Igx2vr8TlbjmdyXWg3wq3ANIK4WF5DJaBGU%2BrTtGJH%2BwGIy0m4gVDoxVwtE544WVbKGFUXnXwnG4yD%2FAR4loWKc%2FnkJXsSbd%2BV%2B7tzOYGjV%2F2Weq%2F%2F13mNYc0sSdDrZZUYJIVairQY4eImuWyTJF5XrdBPhuTd42aaC%2BezmVFqPIAx1QjDH8mT2GregkM79YKbNt%2FYOsZMRadZoHpRwLCYgDR5U4jhOcSJHm3JOW0vzzYfXWCeCgv9602Vbc5GjZPZMjWC%2BnnyLH4pPhZSjVMfxnx%2Bw5EniULBRTjY9rN66ISBBs1wep5dqdMlmVapZK4561KXZa0OlIetsh5JFHPxQsUFqQKYNTHAh3LVfA11SzMnUl7%2Ft2VfUUB4mHIzlwvH0nftBhWpwkJSGuw6QqMa1RwxcDnGvBaW26yV4ky2oufpBm1Td2efU03YX4eSV3v1JP69UHLuhFpTStujZ8taFg7C0Zzk18VRhDB%2Bnb7RHsKFIAYut87cLLQnMg4P9YsgxLRLIYymjy0FMKnXgPDb9suE9d%2FtcOpeyHyO6Jpy9LanyVGYT%2BeeZgmR7KaqH3hccRIuTtpUxeQWNOEfxIhZotEE1SIyC%2FVDDe8pdDchjitS1NZDz2o%2BjrzpMqF5eAFQ91NYsjVE7rXnZFcTClm53BBjqkAQMa9XP65MGB5XR71q%2FMp7LN2Pely%2Fnd0UL5HY1mwgkD4XYwV0iwbXj8c0HHOzKu9ENNUkK%2FXzyeXimhICO9Qfh%2Fu9bwjsOlHpqNByV0d2%2FaMlNd%2FPFYZvZ87gFsqECApLHEynJJ69dJQZT1GNfUFEWf3Ms2fXxslRBzLDA4LVWTuHhtygtsN9aKwvBE1msQFvdfztvvgPZlnz7bObl2OR5YZLom&X-Amz-Signature=f54da46fb714a73743e84c4d5c7d57b805742b4458ec1c6c27eca95278506301&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4QNVWKI%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T150813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCt4Tq9b5qmsZ6g21bjPMYG1SaxYSBhsJVdS7Dkz9G8IgIhAJZfhtWhw%2BDju%2FDm5oWKDXydBp1aMjeaC7tIiQqaNez7Kv8DCEgQABoMNjM3NDIzMTgzODA1Igx2vr8TlbjmdyXWg3wq3ANIK4WF5DJaBGU%2BrTtGJH%2BwGIy0m4gVDoxVwtE544WVbKGFUXnXwnG4yD%2FAR4loWKc%2FnkJXsSbd%2BV%2B7tzOYGjV%2F2Weq%2F%2F13mNYc0sSdDrZZUYJIVairQY4eImuWyTJF5XrdBPhuTd42aaC%2BezmVFqPIAx1QjDH8mT2GregkM79YKbNt%2FYOsZMRadZoHpRwLCYgDR5U4jhOcSJHm3JOW0vzzYfXWCeCgv9602Vbc5GjZPZMjWC%2BnnyLH4pPhZSjVMfxnx%2Bw5EniULBRTjY9rN66ISBBs1wep5dqdMlmVapZK4561KXZa0OlIetsh5JFHPxQsUFqQKYNTHAh3LVfA11SzMnUl7%2Ft2VfUUB4mHIzlwvH0nftBhWpwkJSGuw6QqMa1RwxcDnGvBaW26yV4ky2oufpBm1Td2efU03YX4eSV3v1JP69UHLuhFpTStujZ8taFg7C0Zzk18VRhDB%2Bnb7RHsKFIAYut87cLLQnMg4P9YsgxLRLIYymjy0FMKnXgPDb9suE9d%2FtcOpeyHyO6Jpy9LanyVGYT%2BeeZgmR7KaqH3hccRIuTtpUxeQWNOEfxIhZotEE1SIyC%2FVDDe8pdDchjitS1NZDz2o%2BjrzpMqF5eAFQ91NYsjVE7rXnZFcTClm53BBjqkAQMa9XP65MGB5XR71q%2FMp7LN2Pely%2Fnd0UL5HY1mwgkD4XYwV0iwbXj8c0HHOzKu9ENNUkK%2FXzyeXimhICO9Qfh%2Fu9bwjsOlHpqNByV0d2%2FaMlNd%2FPFYZvZ87gFsqECApLHEynJJ69dJQZT1GNfUFEWf3Ms2fXxslRBzLDA4LVWTuHhtygtsN9aKwvBE1msQFvdfztvvgPZlnz7bObl2OR5YZLom&X-Amz-Signature=65d4cfcba0b179a936ac79acae0e54257fbb759a822f7332b987a1c593c13d44&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662O2HTLFG%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T150821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDW6tQeG500foZqAhv970I%2BHp9EupDHBGCTdI5gQ2jqNAIhAIu1a1RJD5IPfwdfr8NUss3KiEcZGZ9RvA1W%2BTzHu8ddKv8DCEgQABoMNjM3NDIzMTgzODA1IgxNFCjAbBuPw2d76AMq3AMRfn4c0RjnQ%2FrnissvIIJMdsk0Ck24GeDG6n9njSooceB0goy0oZsQxjciH6cpJtxTTyOJ8Th1qVVYaPYGLDnPScT8%2FpBa5Pijrit8sQraE%2Bld9A3veKVD%2FwGy3Xidyrwt7OUg%2BApeQhzY7OmhqOTO6xAnlFkepqJM9AC9nHH3vbN2qIDEkQZCVKd40yP3HzvLLLcjtY7Me61Vpw0UBZ4ZJL3iFlGMWsv5t%2Fa2yidu9QNJwUDjGGSE%2F0VlYf9obdtTHoU3WDN8mDcEu%2FLPxQ9FaUTYqVc2xMiPLoc3V7MQlTNAWAkV0hVgBXpKMxmDfGMzn5vMIwt1CCYwBWrW1NImjjkcPDRg0wbifIDaloz4fv%2FK0GUNWJ9RoJEBhWGMwFHHuELnP86glCfrsotYWefvgk0FIPHx3q87gK8WymCKUCQ7hEdwVARqzywI3Tz5x4xCy9l%2Fz2rV8cfvzLh6wkFgxH%2BM2atFTxVWvEba0rxTZfTVtVshIH2pKMVYxt%2FqlhYe0Lqn7Fy9U%2FQx7zt71%2Fiqu77dMrcyvlm5G1PHUySUS6lACUBP7bCQZmuuOhQuHiqrNc0OM8jgzobrqbpeQjioUlZR5A8%2FDmkqyhXwqQAW6dCass9e2D4%2ByXdr0zCxm53BBjqkAQMfE9ysDqh9Yyhg%2FklOzshw5NQgFnO0Ebc8LgcL8he092lJyy97KGuEFsa7MdjLT3IjHEX1v3LUg3SqK91NmaEYr6vD%2BSYzrdYjY9ii2zq5uUxlEVIclGDR1vxBqUpFdsK8ffSnpjSx1PlrMmD5zUG1pahlKSfLitHR7LDgCJ7kbc%2FIabZASEu6U4hGyMkPvD1nHVU%2BUxgTa5bm5Zyj3XY3S%2FB%2F&X-Amz-Signature=73febc9ec091a01e85e7b303303bd977a1b62edd09734eb6293f3512fb2c8c1a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJVA5C34%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T150821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLJkbli7fXU9gwwOuffAbAcIL627uRkRZDhkjpr%2Bm4BQIgKZhJF%2B9TMoCp4xTEFfaOE%2FOIkJH8VMvmoWz7giOAVQUq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDMPeYngJsGY4PMUZzCrcA9%2BeF6h4HVq56ONb0YSpWXB%2FUjgz5AJRXm8r65i4%2B20TkHoAFn8fR9NGHOqoNUcVxcxk7QfMBn0is1L3We6cKbwIF89PJ9LPIGoathFE1npybRGZAMqzbPS%2FMJ8JspHD3hhCO9z6zaU5Nku15z%2BBJlwmsmoFSyYv5Kad2mtVy%2FazMENZigr%2FHlte8Z35TJ4OT5KH3PpvwbkCBuKqVUCSOkhPq%2F%2BM%2FbJZE%2FOlZwQl8rwFrq9S16VVR6LbBFGK0AnJrKp0F2JzyBJBWEcPQTP0TSmIasrQR4JKOTmgBg%2BTCVLc9suFMWKbMSWjYaLP6uYEzNpyH3PT97QOrKm769p%2BXbOSsVL7XOJMZKxo2%2FZtV7kFwxaFG9TVjaZ2kQwpRqEvv0IVI3hikGS8kM6TMFx8WwxwJ9uoGgKuIwzSSmmbASdzpPJruMjBwzik7%2FZo2vy4fLCfsv9WNQ%2B7dMnUAW7FVJ%2FUnEAQ6f9diTMssQVSmZXilXh5vSkMRGiGKB2L9x7S2YOingiTKatlA5V9Rp4hQaiBph2dHiw6k9%2Bx9PQwUYRQy7JQOyRcpnGK59cxGzTsiNIBt2mR16BAL5KMwoMcIPgdRz4%2FuydOBk4MVb0NWuEgbFfz5XGJAtY1V52iMJObncEGOqUBLysLlVG6ajC9tBPYFKqLk4A5Pp6PVMu6LiJeD94J2OhEC%2Fqi2c2fn0cl3%2BgGt7xGqk%2BYTBV1eO%2F12sJSQvCoubZF5pADaoaWKSCr6XFA11RKEgbA%2BgMhLPlopmI55JppP%2B5k1tTTcWdWf%2BPA5e%2Falcaluq6yCssl%2FFRGGjFK%2FaMobXAQ1IFrUSJC%2FI07hRCoQ2MPY8PT2z08QKRd1fCBMVAhHG1E&X-Amz-Signature=65f33ac607fdd5ea4a17a3cb23822f7e0cb8f780b2a346243d9d1de252fe38e7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4QNVWKI%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T150813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCt4Tq9b5qmsZ6g21bjPMYG1SaxYSBhsJVdS7Dkz9G8IgIhAJZfhtWhw%2BDju%2FDm5oWKDXydBp1aMjeaC7tIiQqaNez7Kv8DCEgQABoMNjM3NDIzMTgzODA1Igx2vr8TlbjmdyXWg3wq3ANIK4WF5DJaBGU%2BrTtGJH%2BwGIy0m4gVDoxVwtE544WVbKGFUXnXwnG4yD%2FAR4loWKc%2FnkJXsSbd%2BV%2B7tzOYGjV%2F2Weq%2F%2F13mNYc0sSdDrZZUYJIVairQY4eImuWyTJF5XrdBPhuTd42aaC%2BezmVFqPIAx1QjDH8mT2GregkM79YKbNt%2FYOsZMRadZoHpRwLCYgDR5U4jhOcSJHm3JOW0vzzYfXWCeCgv9602Vbc5GjZPZMjWC%2BnnyLH4pPhZSjVMfxnx%2Bw5EniULBRTjY9rN66ISBBs1wep5dqdMlmVapZK4561KXZa0OlIetsh5JFHPxQsUFqQKYNTHAh3LVfA11SzMnUl7%2Ft2VfUUB4mHIzlwvH0nftBhWpwkJSGuw6QqMa1RwxcDnGvBaW26yV4ky2oufpBm1Td2efU03YX4eSV3v1JP69UHLuhFpTStujZ8taFg7C0Zzk18VRhDB%2Bnb7RHsKFIAYut87cLLQnMg4P9YsgxLRLIYymjy0FMKnXgPDb9suE9d%2FtcOpeyHyO6Jpy9LanyVGYT%2BeeZgmR7KaqH3hccRIuTtpUxeQWNOEfxIhZotEE1SIyC%2FVDDe8pdDchjitS1NZDz2o%2BjrzpMqF5eAFQ91NYsjVE7rXnZFcTClm53BBjqkAQMa9XP65MGB5XR71q%2FMp7LN2Pely%2Fnd0UL5HY1mwgkD4XYwV0iwbXj8c0HHOzKu9ENNUkK%2FXzyeXimhICO9Qfh%2Fu9bwjsOlHpqNByV0d2%2FaMlNd%2FPFYZvZ87gFsqECApLHEynJJ69dJQZT1GNfUFEWf3Ms2fXxslRBzLDA4LVWTuHhtygtsN9aKwvBE1msQFvdfztvvgPZlnz7bObl2OR5YZLom&X-Amz-Signature=c3c9fce72a8221d3a49988570a54ded29bf2669ea539eb19d968272c9901d987&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
