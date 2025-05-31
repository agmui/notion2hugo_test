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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663R2EZB3L%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T081034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCECGIyYLpVhuJWXIMngxSZVu4ej0Ts0MhpW8JvbqWrhQIgb%2FVZfeBz7uGy7pR6mDTiBt5Yi%2B%2B0HWJofYTD3SYWaEQqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD9VjBPioiJLXpv%2BnCrcA8xxsAefFt29ZWnXcIa8%2Fd19Q2DihIoNGS3mN3n%2FW7dq01JP84nY%2BwC95dm%2FMV%2FAGOcwHkyC7DK2SbLelkJPNpxWKBJzsfD6%2Bv612YTmejrCmWTryPZT0tW%2BHH8QI1dwDfXtUdpRm84UXDPOG9JRIdX78DykzsdzZXz8aBYjJBYFhFhhutzPYEqqkOYDmJaGGvuxtBsRYUYR31R339UTOor%2B6tVci9RFm%2BTDq4RuK7lzDCSxjSBvVcIMkZAbkS8cRPcnA%2BzMsCjugwMrBQ8vbctpNLf4digHtp6LxrJlSlWVZhjzsCc2hVKaucCqYzP1TpQ5CIMT880gkIzMeawB4Pyrwc4181MdaEIt3zTIzZ%2FfEElIG9nGUXB%2Fc6JYqJsMc%2BYu4ihbDp9tcbm3BN7Y8hXGYEMk68YMCa8dwKPgO1Z37FDlc4KvxrCj2yoPtVXooBiBiFvvTk8tE3NeTAtP9uDeT4uNHqt1hODtHZCV66T%2F9jVhSmQnClov4lvWqZWdxQltPgPrDwbsc3ii2qanHRKDjm06JS%2BcnTvYbLFDYQPZnoFztd2kchcQEPUoVtRtuhPaelUy2%2BtqqHMGvdYWulWmEqO4%2BCE7uPbc1kuOdl3%2F%2FyvPLWk%2FjRpEksn2MLXd6sEGOqUBKr2oQcLdWwJ4EFd%2FH4S8zNZc5ln1zNJZ4emkFkVT2Iopw2hFxCQPfAXfLSGabEDLL5fC4MVcg6MmPgB5zMam3guQCkI5ucv0QDcwxQ5xzJoUQht%2BViI%2BZuadMusK%2FnSunAVk%2BFUpWK0EmHrTMiXl3LXPDLGFkVpybDGjLMcUKPVGqtXrODvXhhzuToggijGSlYLk0SVgVWMHCUVIJHfwG6ZH0gN2&X-Amz-Signature=e42f9a572515a94a6ac361822364c101a780b65bac5560e810bef902fd41c16f&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663R2EZB3L%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T081034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCECGIyYLpVhuJWXIMngxSZVu4ej0Ts0MhpW8JvbqWrhQIgb%2FVZfeBz7uGy7pR6mDTiBt5Yi%2B%2B0HWJofYTD3SYWaEQqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD9VjBPioiJLXpv%2BnCrcA8xxsAefFt29ZWnXcIa8%2Fd19Q2DihIoNGS3mN3n%2FW7dq01JP84nY%2BwC95dm%2FMV%2FAGOcwHkyC7DK2SbLelkJPNpxWKBJzsfD6%2Bv612YTmejrCmWTryPZT0tW%2BHH8QI1dwDfXtUdpRm84UXDPOG9JRIdX78DykzsdzZXz8aBYjJBYFhFhhutzPYEqqkOYDmJaGGvuxtBsRYUYR31R339UTOor%2B6tVci9RFm%2BTDq4RuK7lzDCSxjSBvVcIMkZAbkS8cRPcnA%2BzMsCjugwMrBQ8vbctpNLf4digHtp6LxrJlSlWVZhjzsCc2hVKaucCqYzP1TpQ5CIMT880gkIzMeawB4Pyrwc4181MdaEIt3zTIzZ%2FfEElIG9nGUXB%2Fc6JYqJsMc%2BYu4ihbDp9tcbm3BN7Y8hXGYEMk68YMCa8dwKPgO1Z37FDlc4KvxrCj2yoPtVXooBiBiFvvTk8tE3NeTAtP9uDeT4uNHqt1hODtHZCV66T%2F9jVhSmQnClov4lvWqZWdxQltPgPrDwbsc3ii2qanHRKDjm06JS%2BcnTvYbLFDYQPZnoFztd2kchcQEPUoVtRtuhPaelUy2%2BtqqHMGvdYWulWmEqO4%2BCE7uPbc1kuOdl3%2F%2FyvPLWk%2FjRpEksn2MLXd6sEGOqUBKr2oQcLdWwJ4EFd%2FH4S8zNZc5ln1zNJZ4emkFkVT2Iopw2hFxCQPfAXfLSGabEDLL5fC4MVcg6MmPgB5zMam3guQCkI5ucv0QDcwxQ5xzJoUQht%2BViI%2BZuadMusK%2FnSunAVk%2BFUpWK0EmHrTMiXl3LXPDLGFkVpybDGjLMcUKPVGqtXrODvXhhzuToggijGSlYLk0SVgVWMHCUVIJHfwG6ZH0gN2&X-Amz-Signature=2fdd89282e2ff448640a1e0afcbbfce7610bfa18cbf60bf8409b344e269f684e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663R2EZB3L%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T081034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCECGIyYLpVhuJWXIMngxSZVu4ej0Ts0MhpW8JvbqWrhQIgb%2FVZfeBz7uGy7pR6mDTiBt5Yi%2B%2B0HWJofYTD3SYWaEQqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD9VjBPioiJLXpv%2BnCrcA8xxsAefFt29ZWnXcIa8%2Fd19Q2DihIoNGS3mN3n%2FW7dq01JP84nY%2BwC95dm%2FMV%2FAGOcwHkyC7DK2SbLelkJPNpxWKBJzsfD6%2Bv612YTmejrCmWTryPZT0tW%2BHH8QI1dwDfXtUdpRm84UXDPOG9JRIdX78DykzsdzZXz8aBYjJBYFhFhhutzPYEqqkOYDmJaGGvuxtBsRYUYR31R339UTOor%2B6tVci9RFm%2BTDq4RuK7lzDCSxjSBvVcIMkZAbkS8cRPcnA%2BzMsCjugwMrBQ8vbctpNLf4digHtp6LxrJlSlWVZhjzsCc2hVKaucCqYzP1TpQ5CIMT880gkIzMeawB4Pyrwc4181MdaEIt3zTIzZ%2FfEElIG9nGUXB%2Fc6JYqJsMc%2BYu4ihbDp9tcbm3BN7Y8hXGYEMk68YMCa8dwKPgO1Z37FDlc4KvxrCj2yoPtVXooBiBiFvvTk8tE3NeTAtP9uDeT4uNHqt1hODtHZCV66T%2F9jVhSmQnClov4lvWqZWdxQltPgPrDwbsc3ii2qanHRKDjm06JS%2BcnTvYbLFDYQPZnoFztd2kchcQEPUoVtRtuhPaelUy2%2BtqqHMGvdYWulWmEqO4%2BCE7uPbc1kuOdl3%2F%2FyvPLWk%2FjRpEksn2MLXd6sEGOqUBKr2oQcLdWwJ4EFd%2FH4S8zNZc5ln1zNJZ4emkFkVT2Iopw2hFxCQPfAXfLSGabEDLL5fC4MVcg6MmPgB5zMam3guQCkI5ucv0QDcwxQ5xzJoUQht%2BViI%2BZuadMusK%2FnSunAVk%2BFUpWK0EmHrTMiXl3LXPDLGFkVpybDGjLMcUKPVGqtXrODvXhhzuToggijGSlYLk0SVgVWMHCUVIJHfwG6ZH0gN2&X-Amz-Signature=957bfaab9764cb196c39585e6b4fc8add748545ba2082ec3e4eb5b956156ab8e&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667I43FXK7%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T081037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICjkmvcdcPY1vjbM%2FwEBQrhHMFmDSH11H53nBTC1Q6DnAiAiAbC%2F%2FWWMLZk7Fn1MggpOW2bky%2F9qHkm2wbQ%2BjQ8gjiqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FwuWDuW%2BvW3l%2FXh1KtwDQJkFuJpHJtHfV8yRnw7oI%2F%2FV7gkjwyseeoaVik%2FX6xVqnob8tCVziwd7Xm4%2Fx%2Bt81%2FNLnU94f1JxQqtDF7j%2BNUzENlhzLNbYo3WqzTSgJN8fpDqCeynIuUjw22FBcEjehm77N4OZncUrZEvp5nCm%2BF3Dslp9WM7TZCwTRtgqAhwZWu13HJZfXs95zlKIyvR5hBbWuNstLHW6%2BIrmgR1%2B5dMeGbwe%2FYL%2FXDvsFOrd7DwPkM0bTrLEa1cfR28lsF%2B3C%2BWuurQjP2MM4tb42jGx%2Bnb53j7wUDG9MlUCz7axDWXZ53R%2FbC1fdn5LRaRxLIGj%2FeFxH6qX5vuTFmUWhT5TkdsraUq6NmbzShnLi%2BlTq96T32t%2BY1b%2FNQPCaVvKJwmgtXmyoKCPK13%2FY7Umm3LjHRQRIFa3K%2B2T2PxAtqOaAlyflKCX3emBhdNISt8qQrpUWGpS2SkJups89fOLIysSDI%2F%2Fh4eWAS6sQHO1bvMPOHoki3suHjckQjm1DQwmu6DGEfTrR6E3pHiWJyzpzQeJdjGO6mVzKi49N3rB%2BU5lCXanxpQH93p7bOFBr36nRyEuwUEGK%2BBmG%2FGtZzq2Llql5%2BWgvb%2BqP4%2FfUOERxbvEcoPgfJdElgR7AGrfE40wtd3qwQY6pgGgufkQxs4HRP3d7gOFT7y1gY07ySAAYxOtaXZHJcrjUPQ%2B3dO6RuyK9ZEoYF9nWRErO4SHW%2BxWmlVRCwxiQ8PGDn%2FHRlFP%2Ff4lim8lrLq6IDZ8%2FHRwd7%2Fu5h0kp9sypmARH%2Fz1z8HIUptSkoD7EJ%2BnRCUmjC1w99oZGVW3unD2gRqXpNppVnd0SV%2BGEvmDKjzo5tjDFrCGjovSVwwsgZMVcrv1Mdx5&X-Amz-Signature=4eb58638c85325c5d58596e90ad0cb5db838a257068f90eb7140a6a99de8f838&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGSXB6VT%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T081038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF%2FBSQP%2BkymabGXmCHdBYamm5qGtx8egvI3oTfPJ12eeAiEA6QCeg0w3VZpLYYxHnNkvXp%2F7bekJnuJ0rRlQxs6qrB0qiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPE1%2BpNOcTCHsp%2FPJircA4g2aJcp%2Bfy9kMXCfrLPK33g3oGz%2BxLKZp4%2BcZgSMq80c8rh2kSAiA6BBUmKCzWuK%2BjKIbI%2BxC1vX4a7%2FeELANfzE2hLAyMezL7whMKcw%2BmQ8Rpwt5UoYG38%2FrZ1RTZmcVhTC3I4RoYu6k65jrLCC0wSGdfobwlKGcMPbj27%2Fcm3B85rwcE7QuowXqeS77XtcYfFL3rmayq85q9rAQoljNIP7X5ueOy6ev5vy34jY8jcUXEbZbFJ3kcF%2BV2XmRgZ9Kn07yf34Q9l7eHoue07w2J77mDgSFRL64syLJZTpBB47XsuAeN2%2FLZ0WNfXq56VXCGa9s3v%2F3yEWXSAMaSPeDzp4DQ%2BkfpnupnCXp3KL9Drys0oxvpQ4kG9hQjH12dB7VV9eZsOhmVN%2BGtjC8bxSyZI5sOsO4CijQw4DpeSCdkcXg2AKMlZQzZMZkDOI9AD3E6UE5m4p65zT9xf2sPn9Ran4FW06fs0Y%2FOYwcewKt%2Fg4GQACO47k1dMn39aTr8nbn%2FqqZibeeLnBYK%2BI2%2Fe8E03lcUK3bKVpgzGldkLvIGp6aJhMpd8mthUkdpt5vOMkLuQiwB3j1OZi%2Bs4OYPGMOHiVKzKp5ZP0ShZdWMSYCtneVP9vkkjSUsLAjovMMXd6sEGOqUBMeOpgOI3hKTW4bot4aHRZoK2PVeZuJ8Ie2GpW0FzJVorNC%2B8F6I%2BLaD8uxbDSZwgr4MHfghJAElggeldsuLJWI%2Fqc8mzBva%2FKqqy1FOph5divsyNULMiv9RAq2lbGSRPpbQb9wq%2FzvPgbhXovqX6AA%2FYQSfW2E%2FKYaeQ6Du6V4N4XVvWLC8CvvfHHMuMpYBgDyzGMDbQyHPgw6%2BPYN3%2F%2FPv3wq4%2B&X-Amz-Signature=498da3cdc03ef58d2f7e8ede454f6e0408db9e43da970dde5c43e8404160ff87&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663R2EZB3L%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T081034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCECGIyYLpVhuJWXIMngxSZVu4ej0Ts0MhpW8JvbqWrhQIgb%2FVZfeBz7uGy7pR6mDTiBt5Yi%2B%2B0HWJofYTD3SYWaEQqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD9VjBPioiJLXpv%2BnCrcA8xxsAefFt29ZWnXcIa8%2Fd19Q2DihIoNGS3mN3n%2FW7dq01JP84nY%2BwC95dm%2FMV%2FAGOcwHkyC7DK2SbLelkJPNpxWKBJzsfD6%2Bv612YTmejrCmWTryPZT0tW%2BHH8QI1dwDfXtUdpRm84UXDPOG9JRIdX78DykzsdzZXz8aBYjJBYFhFhhutzPYEqqkOYDmJaGGvuxtBsRYUYR31R339UTOor%2B6tVci9RFm%2BTDq4RuK7lzDCSxjSBvVcIMkZAbkS8cRPcnA%2BzMsCjugwMrBQ8vbctpNLf4digHtp6LxrJlSlWVZhjzsCc2hVKaucCqYzP1TpQ5CIMT880gkIzMeawB4Pyrwc4181MdaEIt3zTIzZ%2FfEElIG9nGUXB%2Fc6JYqJsMc%2BYu4ihbDp9tcbm3BN7Y8hXGYEMk68YMCa8dwKPgO1Z37FDlc4KvxrCj2yoPtVXooBiBiFvvTk8tE3NeTAtP9uDeT4uNHqt1hODtHZCV66T%2F9jVhSmQnClov4lvWqZWdxQltPgPrDwbsc3ii2qanHRKDjm06JS%2BcnTvYbLFDYQPZnoFztd2kchcQEPUoVtRtuhPaelUy2%2BtqqHMGvdYWulWmEqO4%2BCE7uPbc1kuOdl3%2F%2FyvPLWk%2FjRpEksn2MLXd6sEGOqUBKr2oQcLdWwJ4EFd%2FH4S8zNZc5ln1zNJZ4emkFkVT2Iopw2hFxCQPfAXfLSGabEDLL5fC4MVcg6MmPgB5zMam3guQCkI5ucv0QDcwxQ5xzJoUQht%2BViI%2BZuadMusK%2FnSunAVk%2BFUpWK0EmHrTMiXl3LXPDLGFkVpybDGjLMcUKPVGqtXrODvXhhzuToggijGSlYLk0SVgVWMHCUVIJHfwG6ZH0gN2&X-Amz-Signature=f443b4c0da1e21c33dda56688cf31d6085d3f63962b5fd127887099f0282b8e5&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
