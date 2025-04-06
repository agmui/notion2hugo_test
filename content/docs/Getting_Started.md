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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSUYUJYM%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T004203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWIxWrpkNUHjeQwhzXt9Ufz8dhj7jQH2JnH3p99atdNgIgdUYVdMmU1YiV7s1x%2FqIiGxrcvOfWh8PWzYvAQfJ06s8q%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDCmVU0iFR1srpd1VfyrcA0x%2FoVn4uc4CTOZ%2BB6pYO5vOe16gf930mxynRw7lSJ5qcmhxZligMAMuBKrNo1XCYqi5FlEEwWvw2Pr3FAJpnUMztzE2sfVqfyEQ5MWvqYCOIZCoN4Ra9ZV8uyo4fvg1lTEIxyPJLjZ8X9atnxsTpXfi5tDEEu82whqgKZlC5nAM6QZ4XKqVRizsxxD02DhoiywP3peurXAizxrlf%2F15KJf3xLB05czYMXTnLf%2FEm3QRBDU3gNlVkSiaXajOW8a3C8VG86bRNNVGIgd9heBQ9GlnGV7%2BqI7QNWZC8ABGbw5x8nmMa5XeUyrkTu%2F8Bpoe9luoL5op3kYkbPKMQ70lPHAryBDmCloBvktQ1JBfQt04F6Xm3eIjK5NrP6yK98fW2ktg9jFo1VwKuyu9cNfSFhPcK3Q%2BCaX4Zw4kRK9yA0k8ySIUxWCrMuzboQ35moiTiJ2EIIrLS%2BleU40b%2FgeljAbMC1hTQ6mxzlV7aVHatiJwlT%2FUpE6l%2BZxb%2FCT%2B9rwA1fgQsjWXM5wk2%2F4lVFYBTUNDyOO7x6sF0c1IfdfSgGYT6v6FHSN2Bp4gEkxb%2FYwVH1VaNkjtibY94pza6%2F5Kp8RoysRYjst2ATAuQvjbXu7RRWYuESx0wzmcVy%2BWMN%2FCxr8GOqUBe6yZu8ZwYf9EBbyQ0iAV7yYQdctRZi0%2F%2BqXV1ksLwzSsk6PEGJheS6hP3tNT0I7NDnyxUAIpFerV%2BDq6p6mw63fOez21xwFzQW8vq9XRqidM6efYVxQ40r%2BOms14PN1JEmwPvnE9R9VPx1aApSRXgl3TVfKlTl9pQsFr9tTcjanIaOOAn9Ytl14dbwNNZAWZj97NcndGKDgqLf29u2yDO%2F1ZEX75&X-Amz-Signature=60000387b1285cc0d9433db0bf0ba00b5eda817c4008471436d1865135f48a3a&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSUYUJYM%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T004203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWIxWrpkNUHjeQwhzXt9Ufz8dhj7jQH2JnH3p99atdNgIgdUYVdMmU1YiV7s1x%2FqIiGxrcvOfWh8PWzYvAQfJ06s8q%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDCmVU0iFR1srpd1VfyrcA0x%2FoVn4uc4CTOZ%2BB6pYO5vOe16gf930mxynRw7lSJ5qcmhxZligMAMuBKrNo1XCYqi5FlEEwWvw2Pr3FAJpnUMztzE2sfVqfyEQ5MWvqYCOIZCoN4Ra9ZV8uyo4fvg1lTEIxyPJLjZ8X9atnxsTpXfi5tDEEu82whqgKZlC5nAM6QZ4XKqVRizsxxD02DhoiywP3peurXAizxrlf%2F15KJf3xLB05czYMXTnLf%2FEm3QRBDU3gNlVkSiaXajOW8a3C8VG86bRNNVGIgd9heBQ9GlnGV7%2BqI7QNWZC8ABGbw5x8nmMa5XeUyrkTu%2F8Bpoe9luoL5op3kYkbPKMQ70lPHAryBDmCloBvktQ1JBfQt04F6Xm3eIjK5NrP6yK98fW2ktg9jFo1VwKuyu9cNfSFhPcK3Q%2BCaX4Zw4kRK9yA0k8ySIUxWCrMuzboQ35moiTiJ2EIIrLS%2BleU40b%2FgeljAbMC1hTQ6mxzlV7aVHatiJwlT%2FUpE6l%2BZxb%2FCT%2B9rwA1fgQsjWXM5wk2%2F4lVFYBTUNDyOO7x6sF0c1IfdfSgGYT6v6FHSN2Bp4gEkxb%2FYwVH1VaNkjtibY94pza6%2F5Kp8RoysRYjst2ATAuQvjbXu7RRWYuESx0wzmcVy%2BWMN%2FCxr8GOqUBe6yZu8ZwYf9EBbyQ0iAV7yYQdctRZi0%2F%2BqXV1ksLwzSsk6PEGJheS6hP3tNT0I7NDnyxUAIpFerV%2BDq6p6mw63fOez21xwFzQW8vq9XRqidM6efYVxQ40r%2BOms14PN1JEmwPvnE9R9VPx1aApSRXgl3TVfKlTl9pQsFr9tTcjanIaOOAn9Ytl14dbwNNZAWZj97NcndGKDgqLf29u2yDO%2F1ZEX75&X-Amz-Signature=7169252248518db5cb9573932579f7a454b0531a3d3e6a3715a58d3ed5a688d1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664P45R2JQ%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T004205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBLOhlhykA0Aq50PAKXEMvzbRcG1U%2BpnyY2IjldNTxUXAiB5j6ynJsPe2JD9pPRntWtJkUME6zDoBXLkAjyeP00pryr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIM6aRNK7p%2BXWfdFCWUKtwDowBGD9Y98B2W%2BFcjuOfPBwF%2BYTjXPO40peZ1eQxwtUQ3R8yIyI2JZoUZHgveBM8hTRuhZZH9u1tsJBON3NDjziRBIIDQN6lssHQgyeA5ok43SwIwTD2SubyJXnCLuNibpCre3T6lgVhiDOqPFFnCXNbkpo5wqw9p%2B5eQV8d4iNIS%2BvnWJ4LmrGgwOAvi0ltYPEoJNSGUuddNt%2Fa9LIJ26xxnmhzTLWVAfuZcNIRhzrU6R0y7gzEttC3yIR78HGbbMqNm6S8r0BBb40Dx0WIaQzL3xfc%2BNdNY1Cx%2F5r5F%2BMTBP5lzXLfXZb5uamlZBGWD2MExUDsDjWvjp5uYcuU0TApiShr08INmumw2t4YY67JnADqoLBK5v3J0RtOA0zuariOhlfSc%2BxEKebYkc6R09ekEB1%2FCHIdqtTlwPX51PFHnDcSJc3G%2Bi56bfJwW4xY%2FML6lEqW4eWHoh%2BfbEINZQGsCJFnnXRQVLCifaQ6RHISuVFney%2BL4He5sdo10weHV4iuHQ7RjHmOiJTJWOvImSdbMwAI1eWqXMWhGnUoW3xT8b57LA%2BLwAKNb3bUdh0SddorBqaB4V0p0vb6stlDa3bFMd2qz2gcIovf8bTP932bsvZt2mA%2Fjlgw2QQEwvsLGvwY6pgHcid1BCdVgm%2FEYMNU2r60OxdrNRG012Q2eQh0JBfhgLHoVOhUEvlnH8Hu23xIKMwxUryJ0H79HD3NIZQQgodYLijowOhmQN4XHcx8BhABypZblTtaVGfWpW%2Fm%2Fo0yEvH8dmq7eHq%2B%2FktE0QPfx431nSFXqRDNkZwdIFWWda%2F5NtyNi2QkK7brXhAG%2BW8OG1aGFfjtznf2U131yMX9PbmKAuzjFavXb&X-Amz-Signature=f6303fec8729f2903b220b9d294485f4961d3df8d3c3f2f2998541e4de54f0f4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RC4HXUD7%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T004205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFbn2r0vdAlGG1SYfZseZjHMSZwmh%2BzT%2BAuiS0eJJQ25AiAlAiRb5EagsaTMetg06J3yRaWm2HRHx9SysaJPiTfaxSr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMidNQAj9oH7xbtdxsKtwDQHxvibqGIg%2F7HuKIYvlie741o7jwAmfbLrLEwZDgp4Ix38BNBtX5mKzh9v%2FLvvNC35uPSoKV73ejRSCiiHpMD7mDF%2FMQxs1zxylbXpWGRioZZJtNN53CM%2FswRikEwapaa5fTow9YvKrTnfXWnp91JOaBOzFYKeffmxcX1JZ4FbgpY%2B4ByvZOUy0M2it%2B%2BJW26Av5l483YJ6gT2%2BltLPT3U547BJ%2BdsrR%2FJQYVBQTwJx7NI3lBMmHwG34RlAYx5z4to8NGWbI7vVdlgkoCDubqiNaty6tg6ty8LeaHDyvgRxmGGATGrEvpfPMkzjoDeFpllK6witvY9s8uAQ53o6Qda8q6NCPQEhoB9noPmtSAhAHg110t0o55uYJK%2FeY1l8egRKM8JOGqsbEsrk7xAl6Gde718%2FPg7Mp2%2BGjMB1wgA6bQfOmbWOoWpNw5nowlD0j03bW5B0pxN8Hf0028LF1kCZY1CjkVoe1mNSrTdEk5%2BrDDxRAFR%2FWJrkTNgpUKci5QH%2B8QWNcfgYHhFmHbrGqMvy%2BOk5Hjvf4LmOhpkLJU96wITX%2FMcsM04zkidsVsBd1Mk6uo%2Bob7r3qI%2FVIigxoJHPPfrzoOgoB%2Bg4AZWJI8lT0N3qHFGTQ4D1Te5QwrsLGvwY6pgGn0%2FJio3Z3zGQMP8YLwIhyX7ConyYuLEDPJi5qCUoAxfVxP2TSqRsk7zwBoSvyvmb0uyUz7ve5Ug70gQo8LVeDRZP7RCwzgqFfeLe0DY3Rs8timEf2V4qH9LMDEDYhCn7St0pu%2FAGAGDGIcUbhinhcAfVi6J9wGeE0w7IIqhUANMwXavCNEXxtuENzlrRpJy9AmBugYEQVd0inJcI93WLDoDi8Nza4&X-Amz-Signature=5ea555ffbf0bcb8323f892f6bbf39f0485915418ecaaedfd18c03434c4320b21&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSUYUJYM%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T004203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWIxWrpkNUHjeQwhzXt9Ufz8dhj7jQH2JnH3p99atdNgIgdUYVdMmU1YiV7s1x%2FqIiGxrcvOfWh8PWzYvAQfJ06s8q%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDCmVU0iFR1srpd1VfyrcA0x%2FoVn4uc4CTOZ%2BB6pYO5vOe16gf930mxynRw7lSJ5qcmhxZligMAMuBKrNo1XCYqi5FlEEwWvw2Pr3FAJpnUMztzE2sfVqfyEQ5MWvqYCOIZCoN4Ra9ZV8uyo4fvg1lTEIxyPJLjZ8X9atnxsTpXfi5tDEEu82whqgKZlC5nAM6QZ4XKqVRizsxxD02DhoiywP3peurXAizxrlf%2F15KJf3xLB05czYMXTnLf%2FEm3QRBDU3gNlVkSiaXajOW8a3C8VG86bRNNVGIgd9heBQ9GlnGV7%2BqI7QNWZC8ABGbw5x8nmMa5XeUyrkTu%2F8Bpoe9luoL5op3kYkbPKMQ70lPHAryBDmCloBvktQ1JBfQt04F6Xm3eIjK5NrP6yK98fW2ktg9jFo1VwKuyu9cNfSFhPcK3Q%2BCaX4Zw4kRK9yA0k8ySIUxWCrMuzboQ35moiTiJ2EIIrLS%2BleU40b%2FgeljAbMC1hTQ6mxzlV7aVHatiJwlT%2FUpE6l%2BZxb%2FCT%2B9rwA1fgQsjWXM5wk2%2F4lVFYBTUNDyOO7x6sF0c1IfdfSgGYT6v6FHSN2Bp4gEkxb%2FYwVH1VaNkjtibY94pza6%2F5Kp8RoysRYjst2ATAuQvjbXu7RRWYuESx0wzmcVy%2BWMN%2FCxr8GOqUBe6yZu8ZwYf9EBbyQ0iAV7yYQdctRZi0%2F%2BqXV1ksLwzSsk6PEGJheS6hP3tNT0I7NDnyxUAIpFerV%2BDq6p6mw63fOez21xwFzQW8vq9XRqidM6efYVxQ40r%2BOms14PN1JEmwPvnE9R9VPx1aApSRXgl3TVfKlTl9pQsFr9tTcjanIaOOAn9Ytl14dbwNNZAWZj97NcndGKDgqLf29u2yDO%2F1ZEX75&X-Amz-Signature=4cd1479ad9ce2eb94887c4e9bb18a58e2b7e380979f0b78cbf0ff738fa4d9b35&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
