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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTAH44JA%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T131805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFa56dYsFaWOJShW1HaaWkp4qvAdx3QYln9Dush0qAgyAiEA5HzsP2jn6duf4Px25qbZQXrSMbN6yfw4FDJn%2FO6ZczgqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC00S6xMZlml%2FpSZ9SrcA5vTIv7cauNJBTsRIdxAdrQ8mX9U%2B8LAg9MFgD%2BT3gBBM4vD%2FlN%2F8hdCiyeuSup2eHcRzMU%2Bv6v%2BqvAcB7fvlhvdU0Kyag%2BlP%2Bo0chD1DyHLpIVWYoqPcxBDRpXiuDQIFrOKwAF0u%2B9GukDHL99XIOQze0ERHgJ%2Fsqw1JmLx4Kiap0dATi1iUm0cGeavc756fjNap0QeSj2LA%2BBfRIuKCCcjL14DyYaEmvgfwu54rbqDGS0nBlfK8lQPE0nKmgKpkA7sqRPNBCm6L1R08wM%2BOZcKPPLOtN0K3ZYSlcKPl6psso0gSGl7EfxEMPYS81%2BO9d3wZNLgYLcjN%2FOI2IwpGMOGrS6U%2ByHKsdw2fdyLJAZ2Epq9S3a6kqBOieZWYb5LBrrGM0lxcMYuYYK6oWrVoWtTdQn7MpkWtksmZ%2FkjiraU7gHnnLNEt8fWIrbMseVLq%2FuDGAKbFgaR9lgjfXXtOgNyVCQrDAIcUZ%2FJvK7OIA%2FXVmxOu1%2FnAeDetWfS2WTpJ1EIA5%2BirR%2FLOU50VBvwg4E8MuqHCZIEdDZbgOPBZR3J5o1mpPJ3wT0YeHJ5yRuFAwf8amk9SzdG3vSy90id63ZD9ovnUk52cuBUECm5%2FXtDcJ6GpYA%2BFMbOPQZzMM2cy74GOqUB6zDWCcck12QgJyPYQXFlEDJr1ioCWYOgpK77jiYtJQPBD%2Fz6fieTkQ6i5nljC%2Bw5Cj5kMqoLldLpGvGHdmuQ8aaWwpHiR%2Bzr7vp88HMNWV2lpZ4YrmIvEoFCS8X1aHiamPkfghlCZ1ciWBy1ob6ZM0QVzXulifp%2Bh4CrJYzM2CiLmFzOb5KSzfMU0MT2pv3lEFxOBTPM7NmE9BYq0gmx0R9EPQFp&X-Amz-Signature=0961fb0789658b32414c89c86da11ac6b23eb3a52cf37d6f31a98db261c53456&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTAH44JA%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T131805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFa56dYsFaWOJShW1HaaWkp4qvAdx3QYln9Dush0qAgyAiEA5HzsP2jn6duf4Px25qbZQXrSMbN6yfw4FDJn%2FO6ZczgqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC00S6xMZlml%2FpSZ9SrcA5vTIv7cauNJBTsRIdxAdrQ8mX9U%2B8LAg9MFgD%2BT3gBBM4vD%2FlN%2F8hdCiyeuSup2eHcRzMU%2Bv6v%2BqvAcB7fvlhvdU0Kyag%2BlP%2Bo0chD1DyHLpIVWYoqPcxBDRpXiuDQIFrOKwAF0u%2B9GukDHL99XIOQze0ERHgJ%2Fsqw1JmLx4Kiap0dATi1iUm0cGeavc756fjNap0QeSj2LA%2BBfRIuKCCcjL14DyYaEmvgfwu54rbqDGS0nBlfK8lQPE0nKmgKpkA7sqRPNBCm6L1R08wM%2BOZcKPPLOtN0K3ZYSlcKPl6psso0gSGl7EfxEMPYS81%2BO9d3wZNLgYLcjN%2FOI2IwpGMOGrS6U%2ByHKsdw2fdyLJAZ2Epq9S3a6kqBOieZWYb5LBrrGM0lxcMYuYYK6oWrVoWtTdQn7MpkWtksmZ%2FkjiraU7gHnnLNEt8fWIrbMseVLq%2FuDGAKbFgaR9lgjfXXtOgNyVCQrDAIcUZ%2FJvK7OIA%2FXVmxOu1%2FnAeDetWfS2WTpJ1EIA5%2BirR%2FLOU50VBvwg4E8MuqHCZIEdDZbgOPBZR3J5o1mpPJ3wT0YeHJ5yRuFAwf8amk9SzdG3vSy90id63ZD9ovnUk52cuBUECm5%2FXtDcJ6GpYA%2BFMbOPQZzMM2cy74GOqUB6zDWCcck12QgJyPYQXFlEDJr1ioCWYOgpK77jiYtJQPBD%2Fz6fieTkQ6i5nljC%2Bw5Cj5kMqoLldLpGvGHdmuQ8aaWwpHiR%2Bzr7vp88HMNWV2lpZ4YrmIvEoFCS8X1aHiamPkfghlCZ1ciWBy1ob6ZM0QVzXulifp%2Bh4CrJYzM2CiLmFzOb5KSzfMU0MT2pv3lEFxOBTPM7NmE9BYq0gmx0R9EPQFp&X-Amz-Signature=d3fac82523208540e54a61b5d1273774f1cdad2b00835706480f1e8ef03b8bc3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WILYTR7Q%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T131808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA9Oo2TIRtGNzchiG8YzZRd4%2BUxO0u1h0t7mByWjKw0jAiA9wCkRcYSUjPCOROTFxZfrkxBH1h9OcCJWjCRWN8Q%2F1yqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2IsfE3KbhAwTUvtHKtwDMrLDMRXMLl7%2Bj2r8PrE4fNl7c43xksCIukW%2BMMXn%2FT3P7mG0wNarQSVa%2BvsKGosiMuQiO2FTk1bwQpbwBQruowGhLLQyEb3GeVzsAoAEu4w7ljGpMHdtPgF301leMTTw90I6goHD2Gfi3qFy%2ByNE0iDPjmmSw%2BssOF8I%2FZn%2B%2Bks49SBSygDMuVGK%2FnZwxOAhLifsiSDV0h%2BIKZUNmrLHkq0Ro9CmCbALg%2BP6NaXF%2BHeozM18cjeCjIcCXmsexnXJhCir31dgNGV%2Bpf7ld%2BVeFRYv2Y51UKbCXxovOuGLtVL9kXE1BTFBgVHh2SntHMWA6quPfRVxIkcYPUH7SDpxwUG50h%2FYVRusFmgyOo9%2FjOyJM4mbasTY79MgLldd9aUc7XxGq4T%2B6ImrdSPrx1aI2FrGqBqZJhRFIfLl8sjkFNkLnM2s4VoXtGShi0SHH3%2BrRWyrli%2Fz3Z1zeRfTPfgGwHPwNjuJKSUS3xh9pyJK12OkEI9wpMmsVcCIt5rovakx19uIUDFoNfIiWvT%2BVQZJgN9NbfyLlwtGXl0T3Zmc57vTizwgXgd%2FKR88QgRXrxNhvrDpjBxRnMoYcP7QRuDPBHzduYqsLDXaVORLRsdlL52NZWKgRl7L9008%2F7wwy5zLvgY6pgH7C6jst05vfGiSIwlPnyBZ%2B1ZTvJto7tU7mmKG5zI%2B%2BoGPaRiCiRtF4C7iMgLWEvMPTVMrMd%2FTUCXtDwFltuUywt4eJ6himn14MovGaEA0P%2FglBwPeOLVQA%2F6emENpaRhDJAE3Ey3608QtfS1WUdxF50vkCRy4zM3kOnzRs%2FOqkt60QPB28vc8lA0SEdhD2uFJ9%2FQ5BUGdxa5SU%2BTWbHRNp%2BjhpacK&X-Amz-Signature=53585d6a0c9e852851c6e0e9cf8d36ad0494863d924089eef503e070d0856dbd&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDN376GA%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T131810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYcFGFgW%2FOeCL1LlxsTBlV8uzZsU44VKct9UhSHHGNuQIhAL0daiqyjqXotE6CYn4nhtxnh19ZEmiU1WiAZrmdbk6qKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxVe%2FjzQHnDUvlTHH8q3AOXh86fKA8eJL8wOHtEjHe3xPxiubLgqDPAMSKGsPK2ggi9rUv8E08UraEdG%2FfMrOcB7u%2Fudwu7kistAmVVy3Fm4NsFBq0lHNs%2FCqNkUaPQIFq0RFQv%2FexvnOyX7HOX%2Fgkn%2Balanss%2FdqvAcUbSVDmzouIPquUhxyqq6qKIJed4qieJ%2FALsDRNARX2Dz9bhdJE3y6PFo8zVnaBiGAGwiRykGGXRacUoKhH8n1G9TX4fXWa0Fn3dsTAMEzVuycAdDdpL8IM5VL4Ik61uT7KiBsHPOG9cnKs%2BYm68PsjO3Xj63oOamCP%2B6MvqhIXvK3IMiKes8EZ3ksIt1Lw6fPFZPBkNxWQf5PPXZFrMp80eK0a6Jn4l%2BpqoXAviHjvjXFCKGU3BRpMVIgPlB8BQOT0ya3zJJpPEXLF%2FXs75ttk0439LeFcLztNhAa479U0jjHh7ilTOfVwlPFeq8ShKQIUsdqQtHGa4zeWCmZQ8RXP7JjRaEAvqnx7Ea4vTc5Wv%2FpX9CyXiBFirlbBoZN5Wj4c0NjKNyzZjBbuVms0sjW%2BG1aRL3GRVmt%2F%2BmSKpd48%2BR%2FmrqX%2FdHaJRni%2FnJjpY0dVBnyvB2OzCX%2FPQ9RzrABHVWhj%2FU1YB3mMmT0znYSjamjDNnMu%2BBjqkAelxrCjwuKBn947q9K6mAhfbYi8IWGJu1SoskclzFrGyGN7oR8aV6aQmQ%2BUZEoSGE5w56A5rqqNdFGXcq18goR2vC130Nmu2AjHCp96IyoTilmdPKiqptvOXmyx0YmEukgvksGbA5SA9ZDGyEWv2e6sjaGLGWW24Gg8Me5b9ma9IqFSe5PmEjuBA8QJjOAxEaB5cD4ZANlg6tOTdbvSZDexMrqr8&X-Amz-Signature=4d42459eda322885bf9dbd4e472f98e90273808b2a1bbd408e9b93b1df780f88&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTAH44JA%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T131805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFa56dYsFaWOJShW1HaaWkp4qvAdx3QYln9Dush0qAgyAiEA5HzsP2jn6duf4Px25qbZQXrSMbN6yfw4FDJn%2FO6ZczgqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC00S6xMZlml%2FpSZ9SrcA5vTIv7cauNJBTsRIdxAdrQ8mX9U%2B8LAg9MFgD%2BT3gBBM4vD%2FlN%2F8hdCiyeuSup2eHcRzMU%2Bv6v%2BqvAcB7fvlhvdU0Kyag%2BlP%2Bo0chD1DyHLpIVWYoqPcxBDRpXiuDQIFrOKwAF0u%2B9GukDHL99XIOQze0ERHgJ%2Fsqw1JmLx4Kiap0dATi1iUm0cGeavc756fjNap0QeSj2LA%2BBfRIuKCCcjL14DyYaEmvgfwu54rbqDGS0nBlfK8lQPE0nKmgKpkA7sqRPNBCm6L1R08wM%2BOZcKPPLOtN0K3ZYSlcKPl6psso0gSGl7EfxEMPYS81%2BO9d3wZNLgYLcjN%2FOI2IwpGMOGrS6U%2ByHKsdw2fdyLJAZ2Epq9S3a6kqBOieZWYb5LBrrGM0lxcMYuYYK6oWrVoWtTdQn7MpkWtksmZ%2FkjiraU7gHnnLNEt8fWIrbMseVLq%2FuDGAKbFgaR9lgjfXXtOgNyVCQrDAIcUZ%2FJvK7OIA%2FXVmxOu1%2FnAeDetWfS2WTpJ1EIA5%2BirR%2FLOU50VBvwg4E8MuqHCZIEdDZbgOPBZR3J5o1mpPJ3wT0YeHJ5yRuFAwf8amk9SzdG3vSy90id63ZD9ovnUk52cuBUECm5%2FXtDcJ6GpYA%2BFMbOPQZzMM2cy74GOqUB6zDWCcck12QgJyPYQXFlEDJr1ioCWYOgpK77jiYtJQPBD%2Fz6fieTkQ6i5nljC%2Bw5Cj5kMqoLldLpGvGHdmuQ8aaWwpHiR%2Bzr7vp88HMNWV2lpZ4YrmIvEoFCS8X1aHiamPkfghlCZ1ciWBy1ob6ZM0QVzXulifp%2Bh4CrJYzM2CiLmFzOb5KSzfMU0MT2pv3lEFxOBTPM7NmE9BYq0gmx0R9EPQFp&X-Amz-Signature=c3442024258a06bbb9540411a50c1207349f565ecba52923b0fb11006a35b41f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
