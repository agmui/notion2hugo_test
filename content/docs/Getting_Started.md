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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HGOOMZA%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T220807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQCsQtR2WiaXzOKo9EdaJY08ykuRn9ueDrS7pe%2B4oTIIvQIhAO6rU1bsX1gT5SlwNx4nBNeQEv4uF%2Bn1iGRzr%2F4nse9AKv8DCB4QABoMNjM3NDIzMTgzODA1IgxvaruL2g74mbhUD2Uq3ANw4mQCmM3N5t6my0KpF3lWV6u1KJtBQIjxLGp1wywYGZO0KLnpdDSUsLxM1vownOgKQQ3k0X9bqa8DoCOHKukHvlJdzlxUPm2PGb0aWP4WSt2aB%2Bk%2F%2BNkAWbX5cVFbHzbbql99RhPXMJ4UzsQF%2FMLVXE56WCADPmoww%2Fc8s%2FbNyJzCx3YdZgqee56LbEdFjhWLVeAxHmjDugm2xbAWcTFL5leTkIHZ12K4UTy3E%2FGo5cKhX%2BgTxRlLkcgb63Dj%2BrBzCgs68Wbu64gf76UrpLpxwFLR6S8HnVeUfsOCY09AK%2BhLpysQvYoHih0AKHNZp2Ts%2F8uanAQx4GHP9ql1q9er%2BJnHcylvp%2BBhpPMSgsd5FabS08YHoPZUxBUCMalhyE4MK8ajsO7MOS3hyvt%2BFHhMZm%2BJNoT7vXdzVqWCfG1rBgzf6jU0n6VhuC63n%2FgMC6t79TC37pIzAbqK4HTcOSlSeItCBAV9uah4qOj%2BXd4DxEDCJi4cZJWMdXRblQvk9b7Gps6MF%2Bh8rHBKfErV0mPBdaKgaP6b8ZWexjAS9fXEMYg4ke5IIiV4KIYYGVzbQ2SYDekUiR7G54rM%2FVOCe8E1cXnAPQ%2BQF4sfzdZceX0JwIg5fa9MpknErDkIxDDM5JvDBjqkARzata5vPl0Uf%2BdWTmvuVdO6lgBmhOrHE5w7%2FqFty7%2FfMwvofFDU3zh%2BKFvLPfuybfgg7TQwFabW5i2Gs6lVZAQv0kmJPAJLrIon7oS01keSwXHOzhUwthlqLdJs29t24csCF9DTkCaaOfqd6rYRzQT5gWB8HCzj0aH9X%2FOZ2d%2FVaONXX%2BQYa5I0DMWNGf8mk8omTPI763FtTwf0dTUPm8JivHn3&X-Amz-Signature=4333f9d7dc71880a9c6867a6698f15c064023802aa5775e95840ffd52c0e711b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HGOOMZA%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T220807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQCsQtR2WiaXzOKo9EdaJY08ykuRn9ueDrS7pe%2B4oTIIvQIhAO6rU1bsX1gT5SlwNx4nBNeQEv4uF%2Bn1iGRzr%2F4nse9AKv8DCB4QABoMNjM3NDIzMTgzODA1IgxvaruL2g74mbhUD2Uq3ANw4mQCmM3N5t6my0KpF3lWV6u1KJtBQIjxLGp1wywYGZO0KLnpdDSUsLxM1vownOgKQQ3k0X9bqa8DoCOHKukHvlJdzlxUPm2PGb0aWP4WSt2aB%2Bk%2F%2BNkAWbX5cVFbHzbbql99RhPXMJ4UzsQF%2FMLVXE56WCADPmoww%2Fc8s%2FbNyJzCx3YdZgqee56LbEdFjhWLVeAxHmjDugm2xbAWcTFL5leTkIHZ12K4UTy3E%2FGo5cKhX%2BgTxRlLkcgb63Dj%2BrBzCgs68Wbu64gf76UrpLpxwFLR6S8HnVeUfsOCY09AK%2BhLpysQvYoHih0AKHNZp2Ts%2F8uanAQx4GHP9ql1q9er%2BJnHcylvp%2BBhpPMSgsd5FabS08YHoPZUxBUCMalhyE4MK8ajsO7MOS3hyvt%2BFHhMZm%2BJNoT7vXdzVqWCfG1rBgzf6jU0n6VhuC63n%2FgMC6t79TC37pIzAbqK4HTcOSlSeItCBAV9uah4qOj%2BXd4DxEDCJi4cZJWMdXRblQvk9b7Gps6MF%2Bh8rHBKfErV0mPBdaKgaP6b8ZWexjAS9fXEMYg4ke5IIiV4KIYYGVzbQ2SYDekUiR7G54rM%2FVOCe8E1cXnAPQ%2BQF4sfzdZceX0JwIg5fa9MpknErDkIxDDM5JvDBjqkARzata5vPl0Uf%2BdWTmvuVdO6lgBmhOrHE5w7%2FqFty7%2FfMwvofFDU3zh%2BKFvLPfuybfgg7TQwFabW5i2Gs6lVZAQv0kmJPAJLrIon7oS01keSwXHOzhUwthlqLdJs29t24csCF9DTkCaaOfqd6rYRzQT5gWB8HCzj0aH9X%2FOZ2d%2FVaONXX%2BQYa5I0DMWNGf8mk8omTPI763FtTwf0dTUPm8JivHn3&X-Amz-Signature=dc076fea40d7ac21f478f945f01c1bc46a4dd2e9876b62641d892ecbcbe5a43c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HGOOMZA%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T220807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQCsQtR2WiaXzOKo9EdaJY08ykuRn9ueDrS7pe%2B4oTIIvQIhAO6rU1bsX1gT5SlwNx4nBNeQEv4uF%2Bn1iGRzr%2F4nse9AKv8DCB4QABoMNjM3NDIzMTgzODA1IgxvaruL2g74mbhUD2Uq3ANw4mQCmM3N5t6my0KpF3lWV6u1KJtBQIjxLGp1wywYGZO0KLnpdDSUsLxM1vownOgKQQ3k0X9bqa8DoCOHKukHvlJdzlxUPm2PGb0aWP4WSt2aB%2Bk%2F%2BNkAWbX5cVFbHzbbql99RhPXMJ4UzsQF%2FMLVXE56WCADPmoww%2Fc8s%2FbNyJzCx3YdZgqee56LbEdFjhWLVeAxHmjDugm2xbAWcTFL5leTkIHZ12K4UTy3E%2FGo5cKhX%2BgTxRlLkcgb63Dj%2BrBzCgs68Wbu64gf76UrpLpxwFLR6S8HnVeUfsOCY09AK%2BhLpysQvYoHih0AKHNZp2Ts%2F8uanAQx4GHP9ql1q9er%2BJnHcylvp%2BBhpPMSgsd5FabS08YHoPZUxBUCMalhyE4MK8ajsO7MOS3hyvt%2BFHhMZm%2BJNoT7vXdzVqWCfG1rBgzf6jU0n6VhuC63n%2FgMC6t79TC37pIzAbqK4HTcOSlSeItCBAV9uah4qOj%2BXd4DxEDCJi4cZJWMdXRblQvk9b7Gps6MF%2Bh8rHBKfErV0mPBdaKgaP6b8ZWexjAS9fXEMYg4ke5IIiV4KIYYGVzbQ2SYDekUiR7G54rM%2FVOCe8E1cXnAPQ%2BQF4sfzdZceX0JwIg5fa9MpknErDkIxDDM5JvDBjqkARzata5vPl0Uf%2BdWTmvuVdO6lgBmhOrHE5w7%2FqFty7%2FfMwvofFDU3zh%2BKFvLPfuybfgg7TQwFabW5i2Gs6lVZAQv0kmJPAJLrIon7oS01keSwXHOzhUwthlqLdJs29t24csCF9DTkCaaOfqd6rYRzQT5gWB8HCzj0aH9X%2FOZ2d%2FVaONXX%2BQYa5I0DMWNGf8mk8omTPI763FtTwf0dTUPm8JivHn3&X-Amz-Signature=22be2d954eb84cdcadae1f57bf5b269b4d90c30570a5dd9abc48beb3e12994c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RI6PUMOG%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T220815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQDWYK4cs7OiKy%2FziIWNoaQqGrpcKbUOh9TMYkbjaK1IcAIgCUjyAKGeM9StKjUm1nYPrOJFT62o0%2FLHgLauM11VNz8q%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDEyvkFbEjjUnCIRNxCrcA7TV2wLeExKlk%2Bw5ZJM5tGH8wlhfCBx4yiy17gMhKxUf9LHpAQrqKqW3%2FWnSYZAL43LeBuVFHL3zPc9C01fsEPMrxdxl5XZjdB2VsiFgWdVVC7mV79VdjpNcnxcYwdvwOicJlURrqJ4vU62QubIx8B7J1xOSaUuVveW%2BCjGeAkb8zSLwWyjNz%2BF9x2DDSJmzH%2FqpgNJySplOISHVD9L6c9%2BiSEf8NQqOh6lFMbk6pCPXD7BwFq0T4vaWlUONYBD0FrLlwu0TnPSIpR8MI8OJnht84bKkzhxzSGkr2Ep3n58HdqqzgDQ%2FHqkQEWHrMlI4lCXDQsTm3%2FA%2FCs3CB7no8OgMFoNkZKhap09Edr0GLB39bQGTnzTK1rBiBu6PQKYajxCGoPjccw1Ib3ite83Rpz5GhG3UoAWPmDkb1uyd8%2Buu2Nz4McXmGMYbYFEcPq3ByJ9yN2iKvuBm3Gk3%2B3wDUAIxOWHg1HfHIaohsZldJvvOq0MAo2xi%2FehCwOctJK3m%2B0umAh0wl9O4MkPcUMlzPaGe74qTORfbL7Z%2BOPr8atnZ8EYv%2FChJL59zEFuWEDKiRNJ08SEWukU8PFdkJ9lWFgZuCVeO5Lm%2FUmDQ6Kw3EOzoY%2BF%2FzZ3timRS%2Bs5QMPXkm8MGOqUBH2SWA3RL5u8F15Xer4%2BVsBW9%2BBijrt4Ci0AQ3saO%2FsNvhtmyLG9QEIL848v4c0jQHZFtm9iy4AaAvgjLAfA6z5NbhigNhr3jtliWsYpz6B1wNf2UX4sbvBPR9BkbicaY1cxj501rxhKASyHWLb%2BW00Yf9pRS2PkLlBB8fJfnmWThzV4kG2F7DdpaVIC8i28QSUuNbBwtL2HSM94G7TVbii4ptuSa&X-Amz-Signature=d6404fd70c73354a309da607559bb3245260324f0ecced14c739aafa9d2466fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWWJ5G53%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T220815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQDYxuiZYOaHAATR6JE8EiGgxU8tCJ0SS6bddbCbpUaQ%2FgIgUS5fu27x5bs1AhNopeWxRhnvTh4ttpiWlxUZH%2BArvq4q%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDEaU0FrG0jXLAA9fJCrcA%2FvTz%2FKoHhpmsVFSDMBX5sCYRP2qP1y%2FuKqk3CiJlVS1yvwsgVd%2BDHoL5Viyvw2gi07mLc0rH9r2zODJQd6K%2BngaCagOLh5Ra2qj8ZLu9rrRB%2BcXxyGuE2%2FSdtW6lywIa%2BFbNKUu1tOoBpFuDBPU5wyyO0VstUfao%2B8YnhUnMBifq5oL1YUyg5h1uKcsMadvIlnIeAVPS0dfkz2Efy2m2qHw7kmhUUwe5diTZmsQu3%2F7InsxTw938lwOejgzB2ixw4GvstzL00Y7Le3XCBqG35rehlm7Dj3y2%2FStH8aU5cFeHbvzzMzf9mpAvSDe%2BQNUqvHPpZtAKox4xanYdmqvpl9wyGeYCLyB2bjRIQjPh954EiILCXGlrCmq3HwW1Xb3Zt8RPjsxU5ioE2zVg1w2XNcnccx7YWSMaTcFXKE8NsqMmZjsnv7UkHt6p%2BbqtY99UzvftCyOKCBJfE5uANp75ei1oKuorgC570OU0lYyUw%2FtL6QS%2FGScCHvwV5BooF%2B3kled%2Bh0atMzXdfND%2F6wbrpvOBrORCB2tSYETwZ5N1VVMUWRn4vpgeHqNSqCidc%2Bpur8pXWVXiakN7WFD%2BB%2FomDF2jlgXLumcgBYd3OpTz4LBZKKBpFvkSxQrKjz%2BMI3lm8MGOqUBpE1RuHnGVptxDBKtlmIOnmczXdeQ6xqescu3CdNb%2FgC6zwcFZvDhNnS3D02maxQ1jYdelYfnBc7dF6uny3UvWmK2dOVp%2B1edpewZpU9JDhQFOMYmkwY%2FCHyTQVya%2FyDnPXqz%2BSTJ7QeF8jN7RGvgrX79WcFtL89Vp9jg4rUuDHyKy7kXyJ3OGbMx1%2Bl3kPe4NSgZkCWPuHWXWaCrRRFlhexAEm4c&X-Amz-Signature=139dc475119ecbfb4a93d17e6c9970a210a05123041e4d2c3759e0828c8a7028&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HGOOMZA%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T220807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQCsQtR2WiaXzOKo9EdaJY08ykuRn9ueDrS7pe%2B4oTIIvQIhAO6rU1bsX1gT5SlwNx4nBNeQEv4uF%2Bn1iGRzr%2F4nse9AKv8DCB4QABoMNjM3NDIzMTgzODA1IgxvaruL2g74mbhUD2Uq3ANw4mQCmM3N5t6my0KpF3lWV6u1KJtBQIjxLGp1wywYGZO0KLnpdDSUsLxM1vownOgKQQ3k0X9bqa8DoCOHKukHvlJdzlxUPm2PGb0aWP4WSt2aB%2Bk%2F%2BNkAWbX5cVFbHzbbql99RhPXMJ4UzsQF%2FMLVXE56WCADPmoww%2Fc8s%2FbNyJzCx3YdZgqee56LbEdFjhWLVeAxHmjDugm2xbAWcTFL5leTkIHZ12K4UTy3E%2FGo5cKhX%2BgTxRlLkcgb63Dj%2BrBzCgs68Wbu64gf76UrpLpxwFLR6S8HnVeUfsOCY09AK%2BhLpysQvYoHih0AKHNZp2Ts%2F8uanAQx4GHP9ql1q9er%2BJnHcylvp%2BBhpPMSgsd5FabS08YHoPZUxBUCMalhyE4MK8ajsO7MOS3hyvt%2BFHhMZm%2BJNoT7vXdzVqWCfG1rBgzf6jU0n6VhuC63n%2FgMC6t79TC37pIzAbqK4HTcOSlSeItCBAV9uah4qOj%2BXd4DxEDCJi4cZJWMdXRblQvk9b7Gps6MF%2Bh8rHBKfErV0mPBdaKgaP6b8ZWexjAS9fXEMYg4ke5IIiV4KIYYGVzbQ2SYDekUiR7G54rM%2FVOCe8E1cXnAPQ%2BQF4sfzdZceX0JwIg5fa9MpknErDkIxDDM5JvDBjqkARzata5vPl0Uf%2BdWTmvuVdO6lgBmhOrHE5w7%2FqFty7%2FfMwvofFDU3zh%2BKFvLPfuybfgg7TQwFabW5i2Gs6lVZAQv0kmJPAJLrIon7oS01keSwXHOzhUwthlqLdJs29t24csCF9DTkCaaOfqd6rYRzQT5gWB8HCzj0aH9X%2FOZ2d%2FVaONXX%2BQYa5I0DMWNGf8mk8omTPI763FtTwf0dTUPm8JivHn3&X-Amz-Signature=aec38de156e835f773880b28f814b200086d5b50043daabdbda91b40aa2fc4f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
