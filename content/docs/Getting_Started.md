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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664I7NEITP%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T110839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmh5%2FIMb9HCqCbiRGHUsztGVHvAOAFk2D7f1dNDu4vuQIgMVlZU9RqDY0MmZMXuoJoBKYmw4HBPdXk0Cc3VYxi8wsqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI3DTQpT0Ei6XLTAfSrcAyEDvUGgUqlejcvLaVwDUKsS1iVq8vvs%2FCXv6wpip8v3%2Bo0URwxWcAmHUvsJ3wBCgzgXZMw0MlrXaFJOOf87xTVClU9K5E7TG%2FeIOVnQUz60pnouPrqbWn%2BOdUzSu%2BL%2BE9HqoDX3whEJfwbwcDPanHveL1kA3Lo3RtJjFvj1aBwA7Uh5oT9HjNZw6rk9ECdvLOA5eL%2F%2BGMGOYkMq4qT%2B5cfBzmtahUuhRdcKKkF6E8NtxSgfzMKPUCgJeTm6I9GglmihE3U5ecOdAGRS3wfOlwWi1Czh2bWqujbUWFNfr5oj3Noieiftkqn3PJN4aysTJUEYz8q1wUhMk8TEKZr8TqV4RnpI6Lh8nuQFwW90C%2FItvhPuuOUxUJt7dJShVdNCuhwOZF2LB5XgSDoiDO5B2vEynaVS0nq%2BxbswVY6tSR2CRGGJpIArYvKJmAQxCNPjWbmsFYnHz3KkomP01n0G5wMSwBN2wyMKaSIEWW3uig5hgWZzKKT3XJ0a3lovLpHAzOPd%2Baxp5UPNQhWsabPcfe8UO3Iy3mJLG45kw%2FX%2FqJfqfLtqs1eG3sCTpbu8YcQL4Hwklhdp2JMyj2v0kleUVok6wskqUCqdv8l4uDaQrS33d5JsyNgdUqRbU2qPMNmcrcQGOqUBHSnTZFd8PyQmQgmkz2PHyqFvZkAnioQEOkMVezBaFAK8fwdIDKu%2Fd6F%2FoHqxmCABzAR01qvGQgXLGUYerrYxT0Bsgybe6M50weR0x2YdV2IcsWRymk%2F%2Fvg%2F81S3UvdGOL%2F5yTRd577iQGWOkryp00%2Bo596CvwYoRUCpO1nLUMV9ZUMG8PG6DSxPYIWLEJUadhWvpLJJxbdMqmuUyJnKNNks8v47w&X-Amz-Signature=06327732e24c9be947eeef1b28d4d8934e4e8ef8bc7ff13bca42511c8cd3cd7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664I7NEITP%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T110839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmh5%2FIMb9HCqCbiRGHUsztGVHvAOAFk2D7f1dNDu4vuQIgMVlZU9RqDY0MmZMXuoJoBKYmw4HBPdXk0Cc3VYxi8wsqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI3DTQpT0Ei6XLTAfSrcAyEDvUGgUqlejcvLaVwDUKsS1iVq8vvs%2FCXv6wpip8v3%2Bo0URwxWcAmHUvsJ3wBCgzgXZMw0MlrXaFJOOf87xTVClU9K5E7TG%2FeIOVnQUz60pnouPrqbWn%2BOdUzSu%2BL%2BE9HqoDX3whEJfwbwcDPanHveL1kA3Lo3RtJjFvj1aBwA7Uh5oT9HjNZw6rk9ECdvLOA5eL%2F%2BGMGOYkMq4qT%2B5cfBzmtahUuhRdcKKkF6E8NtxSgfzMKPUCgJeTm6I9GglmihE3U5ecOdAGRS3wfOlwWi1Czh2bWqujbUWFNfr5oj3Noieiftkqn3PJN4aysTJUEYz8q1wUhMk8TEKZr8TqV4RnpI6Lh8nuQFwW90C%2FItvhPuuOUxUJt7dJShVdNCuhwOZF2LB5XgSDoiDO5B2vEynaVS0nq%2BxbswVY6tSR2CRGGJpIArYvKJmAQxCNPjWbmsFYnHz3KkomP01n0G5wMSwBN2wyMKaSIEWW3uig5hgWZzKKT3XJ0a3lovLpHAzOPd%2Baxp5UPNQhWsabPcfe8UO3Iy3mJLG45kw%2FX%2FqJfqfLtqs1eG3sCTpbu8YcQL4Hwklhdp2JMyj2v0kleUVok6wskqUCqdv8l4uDaQrS33d5JsyNgdUqRbU2qPMNmcrcQGOqUBHSnTZFd8PyQmQgmkz2PHyqFvZkAnioQEOkMVezBaFAK8fwdIDKu%2Fd6F%2FoHqxmCABzAR01qvGQgXLGUYerrYxT0Bsgybe6M50weR0x2YdV2IcsWRymk%2F%2Fvg%2F81S3UvdGOL%2F5yTRd577iQGWOkryp00%2Bo596CvwYoRUCpO1nLUMV9ZUMG8PG6DSxPYIWLEJUadhWvpLJJxbdMqmuUyJnKNNks8v47w&X-Amz-Signature=9cbbf16736e89fa774d9c18be0221d0b4a78713796e91fc52f7117663e09c946&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664I7NEITP%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T110839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmh5%2FIMb9HCqCbiRGHUsztGVHvAOAFk2D7f1dNDu4vuQIgMVlZU9RqDY0MmZMXuoJoBKYmw4HBPdXk0Cc3VYxi8wsqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI3DTQpT0Ei6XLTAfSrcAyEDvUGgUqlejcvLaVwDUKsS1iVq8vvs%2FCXv6wpip8v3%2Bo0URwxWcAmHUvsJ3wBCgzgXZMw0MlrXaFJOOf87xTVClU9K5E7TG%2FeIOVnQUz60pnouPrqbWn%2BOdUzSu%2BL%2BE9HqoDX3whEJfwbwcDPanHveL1kA3Lo3RtJjFvj1aBwA7Uh5oT9HjNZw6rk9ECdvLOA5eL%2F%2BGMGOYkMq4qT%2B5cfBzmtahUuhRdcKKkF6E8NtxSgfzMKPUCgJeTm6I9GglmihE3U5ecOdAGRS3wfOlwWi1Czh2bWqujbUWFNfr5oj3Noieiftkqn3PJN4aysTJUEYz8q1wUhMk8TEKZr8TqV4RnpI6Lh8nuQFwW90C%2FItvhPuuOUxUJt7dJShVdNCuhwOZF2LB5XgSDoiDO5B2vEynaVS0nq%2BxbswVY6tSR2CRGGJpIArYvKJmAQxCNPjWbmsFYnHz3KkomP01n0G5wMSwBN2wyMKaSIEWW3uig5hgWZzKKT3XJ0a3lovLpHAzOPd%2Baxp5UPNQhWsabPcfe8UO3Iy3mJLG45kw%2FX%2FqJfqfLtqs1eG3sCTpbu8YcQL4Hwklhdp2JMyj2v0kleUVok6wskqUCqdv8l4uDaQrS33d5JsyNgdUqRbU2qPMNmcrcQGOqUBHSnTZFd8PyQmQgmkz2PHyqFvZkAnioQEOkMVezBaFAK8fwdIDKu%2Fd6F%2FoHqxmCABzAR01qvGQgXLGUYerrYxT0Bsgybe6M50weR0x2YdV2IcsWRymk%2F%2Fvg%2F81S3UvdGOL%2F5yTRd577iQGWOkryp00%2Bo596CvwYoRUCpO1nLUMV9ZUMG8PG6DSxPYIWLEJUadhWvpLJJxbdMqmuUyJnKNNks8v47w&X-Amz-Signature=f7958e5bc66210b721b51d7e7c87ff6738511d1787a92a0e70c362f73ac5d668&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IFF7X4Y%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T110844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBLxSPghA1dlDLm5z72jCEBz3ZEzWenER6%2B7TvEsPyrQAiEAwc31Fs0H1NDMvRMuABsZSwYsgJbZhQ2L23taMq5ZQ0QqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFt46CHE1dVdN2%2Fp1CrcAxm3JmAdoTvzDkWd3UfQTBf4wXp2W8NsYd8BNqAYI%2FSxZM2YKgQOB32uV3PSOh7QKLLxch4Nar%2Fx8M2KYIWbfPQGIr1KQ7t2xbTmtKF2amM0j%2BUikqlMevGNHW%2Bp9DDAlUKVPtkm75yRlRRLgEVE61XDkh%2FidjVnNUv%2BiFu6liKQKOzZJwDKAvrxDk1MUqM7D3W5oI8C94BUr3BtVV68ErljIB3UT2zkhUisWiCTSnNd4fRQPMRZX6f4LJYteWztK7TtX7waYRuDGSY78HeKZ2SOhOx6FZWSY5CPycNerxMp1A88HpVK7Hp7PnrXM0%2FOtl9bFQsMHKymjes9woJ%2Fq0S%2FK1RuJQ%2Ftk%2B8ABNT7FLdh0WWhNwcTMPMenMCn7pp3%2FSRkWOrlAmmEUAjLoEcd25SY%2FeVQiHcyZpdDXQvppwkzRjhjq%2BMSOXV0TFZwDmMrJuaYo3W8xt1O7Fs%2FfV0SdiZ9N%2Fj6cZOxbHEUpHk6nPo8LiNn0GqD2Bqdq7TiTcWyLiKmJyUehLIjvER75DOgi%2F9wQh9RTNREGTUoJJ5YMIwR8UD5KD1zJWQ%2F4vnxD2nblCKwiwnfQkWKqKnqUSiv9sOWW5cSxS5VWElFy9Sm65BJcIm6MVmeTN4gu74YMKSarMQGOqUBvhegsvi8sGIZircvAsdSnys%2BLqMIs5Rotz7FziJTWlhokEZbqs5eaxRH9Ge84SF1gzlwvqeUe7EqCz4K%2FtVBM8gMq6qZk3pSq%2B1yyR46QxaiwFgxQ3ySAQd06dDkUQtb5phTHZY%2BjoZmTgglimue%2B9mUkteFhzeVhK4MDM67K2x7h%2BDEJvyc%2BANuiD3g4rsY3TBTMV3OH7pYEM2VXGdYUbbdpOBi&X-Amz-Signature=4272b3d65965b676182c8141de2fa425f4eb51c2db59042b6ab76e249e802ab6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VH6ITWYP%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T110844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDeOM7WLbfYc8tmvwzajXXqzdV4gtr%2BY55oFX%2BD%2Br3FaQIhAOIna8vLySeVQR9GDfVrtGCUo%2BeBhhWzx6oIzcmD%2BX66KogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy3qlyu5I9gd4f5Cycq3ANJtd%2Fl0Bohfpu28Yhrm%2B2RxXvjur70h0JNQBtmW4HkoTuImCfOZ0bPzulI9h1BxrqZBXdVk%2BO%2FZGD1V%2BQE%2FhQJPXmXO5eCgZWOUV04GQ0FAT%2FVpMRqbLu%2BQWl%2FqWd9UVHRNOgWLzhri9IXB254rSh1uG8Rt%2FKwZTLonC5VXbqzaWPD7hNk7BXmr5ib6HxrZeY9HdN3m2uM8GArLn18hhpj9hVf%2FtZQRvyz5M9iUQ290kh5pMHoRS7uPcB%2BHNhIiSOIiVmBCQjpIO4IZ0DtCaI39PrUGRLM8KxGdbCkOos3xVC9UQMDRBXwVpJCUIaBY2p5KRMua3tBldZrHwpIPO%2F9RsLjAuElD99gNF5MdLXUY4xJdrnWThsY%2FtaIsII4IpckpdnZq0tUeUIL1MfRqfazW869KGBg%2B38MqeBQacT6rJLPS90lOnaGfUhhCqCE6YU5gZV0rcTynopvuLS6GZdA%2B4%2Fr2O0o15IKo%2BjzJnLjmRF0CgUfHOsc0ZGfOnvosxA9jDCeIjoczFFhKZFLapFYIwD%2B1ycqy1q2%2F7%2BrHGioRlUNQce%2FM19S36Y2DuJfvTUSXmG8CBWZIPOJZoUFSmBB1VevBm5x9gQrsrhHS%2FGrV7E3zLDYRFYNSj1%2FiTCPm6zEBjqkAY1DDz5NvLizxZtq6PHmW8hYkWgS8JgGMIdA%2B8MK0NQQCEZjWbuoHBoJbHAvC1nxNCOvr4Fy2IWn%2FSBMylDcY5AE3Y3CjfFLJCYlro%2BasQUB%2BXBY9KF5ytnF6pDSart9ak3NJBk2k12QnM%2FeilHco%2BOwKgGO%2Fd%2FEBEXtcwt3t1mKfbhwfxVQFoRNnIG0rtpWdszI2G6UICC86GaeVsvNH7ezdA9q&X-Amz-Signature=c8f6d32e973f4ed1c4e9eb8f466ac25cbd64c03856b85d856e7fc96a0d16e3b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664I7NEITP%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T110839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmh5%2FIMb9HCqCbiRGHUsztGVHvAOAFk2D7f1dNDu4vuQIgMVlZU9RqDY0MmZMXuoJoBKYmw4HBPdXk0Cc3VYxi8wsqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI3DTQpT0Ei6XLTAfSrcAyEDvUGgUqlejcvLaVwDUKsS1iVq8vvs%2FCXv6wpip8v3%2Bo0URwxWcAmHUvsJ3wBCgzgXZMw0MlrXaFJOOf87xTVClU9K5E7TG%2FeIOVnQUz60pnouPrqbWn%2BOdUzSu%2BL%2BE9HqoDX3whEJfwbwcDPanHveL1kA3Lo3RtJjFvj1aBwA7Uh5oT9HjNZw6rk9ECdvLOA5eL%2F%2BGMGOYkMq4qT%2B5cfBzmtahUuhRdcKKkF6E8NtxSgfzMKPUCgJeTm6I9GglmihE3U5ecOdAGRS3wfOlwWi1Czh2bWqujbUWFNfr5oj3Noieiftkqn3PJN4aysTJUEYz8q1wUhMk8TEKZr8TqV4RnpI6Lh8nuQFwW90C%2FItvhPuuOUxUJt7dJShVdNCuhwOZF2LB5XgSDoiDO5B2vEynaVS0nq%2BxbswVY6tSR2CRGGJpIArYvKJmAQxCNPjWbmsFYnHz3KkomP01n0G5wMSwBN2wyMKaSIEWW3uig5hgWZzKKT3XJ0a3lovLpHAzOPd%2Baxp5UPNQhWsabPcfe8UO3Iy3mJLG45kw%2FX%2FqJfqfLtqs1eG3sCTpbu8YcQL4Hwklhdp2JMyj2v0kleUVok6wskqUCqdv8l4uDaQrS33d5JsyNgdUqRbU2qPMNmcrcQGOqUBHSnTZFd8PyQmQgmkz2PHyqFvZkAnioQEOkMVezBaFAK8fwdIDKu%2Fd6F%2FoHqxmCABzAR01qvGQgXLGUYerrYxT0Bsgybe6M50weR0x2YdV2IcsWRymk%2F%2Fvg%2F81S3UvdGOL%2F5yTRd577iQGWOkryp00%2Bo596CvwYoRUCpO1nLUMV9ZUMG8PG6DSxPYIWLEJUadhWvpLJJxbdMqmuUyJnKNNks8v47w&X-Amz-Signature=c30dec080d17b1fd6ba5cd718ea45d2a8517f24fa05825bd7f54d1e085447cf0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
