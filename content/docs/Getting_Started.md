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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYQKPPSB%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T003559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvAhzVs1tAyJQugSYiVRPNhMdGiOJ8Xei%2Fy7qV9sZRgAIhAJ3oWmEK5lCq%2FxtGLsAMazJiqwbQKW%2Fc8ql21mJ5kOkCKogECPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwoMPBlv8fKHN7p1O4q3AOWSrvX320eLW3NqwApIueesR80DE5TXhninWGZJ4CxOSihmCK9HC43WT6y1UEfcQLxXhmkR2LyVfSGkEJcCMnjM3aLHYIr%2FU18qslVEKA%2BUX%2FqX3SWvihD4G3Lc1%2Fv5u71Zu%2Bxyt%2BDNrq5DddhT1l9RHaAUKuZZlznjzKW5pzlFI9VHKtRoKR2ZQo%2BAysyuCONV3DoERZbEIE1jqV2qDKnudBGv1Ho3SeVuEzKo4PA4CV41Z%2FXPive5lr1lodX3P5IRWcu200q5FtYkHSVdibXF4Y6xFFaVsDU8WrDKGXL6r1O7o2ztzABU%2BWIbjIh%2F1B1ZreFc4Mk0N338s6eOxEn5I5%2B0XXKtU9Yv9hMaZHnRXvxGS8qUhDEgFo3QiikwXOdXjLH%2FlUXaWjkFJ%2B%2ByZ1bii1zb0rX%2BJ%2F4%2F3EkvQoynmEamTsqNRkCRItVqn5u40T5V85XY%2FONFgSRLhztSkglTAUBYwTnLtsJXCNj0ou%2F7rxmuiiH0KdFSsrLeShDPgtSmmesbB25IPYaZkl5LpZDduzFcbYIGfJMQ%2FU4CvOF8RazAdvLfHjYpEzddmFDRXVTUHePlwQsyeWNH026H4%2FF3u8GC34EL2dkvwjynWRQ5LdGnDeGOHvqOgtzrTCV4bS9BjqkAUBKqMEonkMXTWhBik20TFMc%2B%2BH7504pc1Loiam4Y%2FWrLtc%2BoJowA9HMovoChVvcGevSgcysgHVYDcBWVcl%2BzhcG0MEVkKVev%2B4Qx5eA%2BqWDDtYAgwVVbExBNjm2KawLOnJqIVz3v0EpH8YyTFwaX7qhrA5q7dSakt1BQ8K7fcJcSiRZzQCUcGHChQbS3EkgWo%2FhVLztF%2FRAl4FIX8ItFOFJygz0&X-Amz-Signature=ef39696c1e8bfe9689fdf91ec407e9314446f7ac4c31aa9fa8f12f714d522517&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYQKPPSB%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T003559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvAhzVs1tAyJQugSYiVRPNhMdGiOJ8Xei%2Fy7qV9sZRgAIhAJ3oWmEK5lCq%2FxtGLsAMazJiqwbQKW%2Fc8ql21mJ5kOkCKogECPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwoMPBlv8fKHN7p1O4q3AOWSrvX320eLW3NqwApIueesR80DE5TXhninWGZJ4CxOSihmCK9HC43WT6y1UEfcQLxXhmkR2LyVfSGkEJcCMnjM3aLHYIr%2FU18qslVEKA%2BUX%2FqX3SWvihD4G3Lc1%2Fv5u71Zu%2Bxyt%2BDNrq5DddhT1l9RHaAUKuZZlznjzKW5pzlFI9VHKtRoKR2ZQo%2BAysyuCONV3DoERZbEIE1jqV2qDKnudBGv1Ho3SeVuEzKo4PA4CV41Z%2FXPive5lr1lodX3P5IRWcu200q5FtYkHSVdibXF4Y6xFFaVsDU8WrDKGXL6r1O7o2ztzABU%2BWIbjIh%2F1B1ZreFc4Mk0N338s6eOxEn5I5%2B0XXKtU9Yv9hMaZHnRXvxGS8qUhDEgFo3QiikwXOdXjLH%2FlUXaWjkFJ%2B%2ByZ1bii1zb0rX%2BJ%2F4%2F3EkvQoynmEamTsqNRkCRItVqn5u40T5V85XY%2FONFgSRLhztSkglTAUBYwTnLtsJXCNj0ou%2F7rxmuiiH0KdFSsrLeShDPgtSmmesbB25IPYaZkl5LpZDduzFcbYIGfJMQ%2FU4CvOF8RazAdvLfHjYpEzddmFDRXVTUHePlwQsyeWNH026H4%2FF3u8GC34EL2dkvwjynWRQ5LdGnDeGOHvqOgtzrTCV4bS9BjqkAUBKqMEonkMXTWhBik20TFMc%2B%2BH7504pc1Loiam4Y%2FWrLtc%2BoJowA9HMovoChVvcGevSgcysgHVYDcBWVcl%2BzhcG0MEVkKVev%2B4Qx5eA%2BqWDDtYAgwVVbExBNjm2KawLOnJqIVz3v0EpH8YyTFwaX7qhrA5q7dSakt1BQ8K7fcJcSiRZzQCUcGHChQbS3EkgWo%2FhVLztF%2FRAl4FIX8ItFOFJygz0&X-Amz-Signature=910a566cb9258167595fbee9aa3d88e021b01e67b520f6933c776c17735a8f3a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGUXKDQM%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T003602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHwWyP7LbhFGHlviyrghl7W2%2B5%2BiBKLeWirp%2FgoYIPTeAiBibE0Dn9ywLhdAriKq7KHkrF9WSfxle8FUk94r6LHiWyqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBDLh%2BkSSddq66TY3KtwDHdpC8mMThNKhv1ItVQc5sDXkP152V4FAdIYslLqk4guRBV0TFBlsRFW%2FMivcoW6JcK%2F2OhbpAxfpNCz7l0ywZslmZPgzg154tad141mYhsHpCoMG1dlK8kF52FOvUAQN%2F8BoRvhvnKXvNf1VcI8V5qVOoxUmyIhw7NF7w3BRCPe48VA179%2FQQVdZbFbd%2FaUVD7j3SDN7J926cnzJLyRkgacp50rY5d9%2FVSsJgmlCQSwapHGGisxQssaTKeqDsG7fvhsVzIvs8pMQ9JUKgkZo3QqPY69aecmx46V8tAQogZUfmdgXITasZ7YUAqon7rEL6vIFtXY6z07zq6FiwmebhjVpycxh6vu8VHThLN2DrWFWtt5RoH5zk3dfBd42O49g3dmIyHZDgLIwBUfDf4cezciq2YH4V7btNSKdlyvPd9gii7gIeJIb1KV4yVlYqe7iW5CO95bfdGWmbPnK41Wm%2FGSt%2FHSSRG1JQa2vkHfmhcprRBtrSTGmToZVJWkSOTnA4ZsW23rc4IYa%2Fpz56VBdjMHQm60iJz97DlYUNuiEzlWtWiRB%2FERO77UdQHLV9rsYlyCS1r5cf%2BPEHpt42KnIimaFCfK19dgdoDP7DVLHeo9hO89Ae%2FtneyTlVfMw5OG0vQY6pgH20rflWSlC%2F5wg7poAqhWTYKqCBQfgFMtFTyus0MNlPnkEkF2gWpU1V1ZZamtrJIc%2FAbcUXTRYQAo6xSB7AsqpUVP1WrjIn87kGQXeOQtSAwr%2F3%2BeGnosyQ0CmQgeTKc47rzwaFG0QN3CITeNMmvRXesfRvkxK81WM9ig7cth9Ek724O8Fsj%2FX0v81g%2ByPHEYkbrne6PJ6Jie1lP898g3idvIA6wG7&X-Amz-Signature=3923d4c6ef6c4729819ea9205d14f37fb0bcf70a2f6f62a86e2150d044933ae0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XB5YI2WT%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T003603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHbiiGIcQpo5AnN0Pk5QYskjesU6zC8w4igQh20tNLxZAiEAuEqEXfjb2ZQmT4Q2lS4FiUqoHbjUl6arzdG6dzKXEaUqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNS9kKEOqdyUxg2u1yrcA1py3Gd%2BLLsetS3lb%2Bxp%2F2gWcR%2Fs6MeqOcYnKdAFydzeLoiHtq5y7mlVh8LJz0LhX9A8v4dNyHxCgKzoL%2BD%2FE7CBHP%2BtZYd2RP8dVwAPh9%2F5TTPtDrMbasHbO%2FtQlrYmkEzfitxlmLHYy5XJtTACmjp12GV9uUwfZ4QT1XUS7bS04myKO80nkS8txFCdn1qh9Fiv9JfrVW6WX1%2BXiKibF8ExoZXTDXxCxLutpGsLaYE3EgyTXp9Qjnbx5gO2HPy4X2oX%2FFrgtWMWz0PzPoxkHtBGm0pjb1StHvlLWdrY80tWqr7Jkyp3X6xlWJXLlb5aOE8ZcVOzgi%2BatJnxTzsBlUp2dLfCn4Q3gbRD1o9hPBcnL3x3WHSDIUCl%2Fh1FbH3v8uBP4%2BWAoV8hxGjDXrZamTOV3A%2BUuxUuKww%2BkMAlEmEUyABJIs1VGEkMfTc3hR7gxP7llv6zPGO06hLm3mjZbYuIPtI6rvQhBY%2FwJV1sym%2F9wWw9QFUbMCAa%2BOqX%2Fu5SKbSCFOzfROwficqJq2KHssVga3o4I7qc46ibFgtZYU%2BJVvQV7FNjZ2xK%2F3H4xrQyHX18df5zYG9kNNv3dArBK88xpKkCdDJd8fsPautJ53nbHywqNQKbgEH%2BMLGAMI7htL0GOqUB6Gw5ygd4AkTuWb1OndC3x5OaXyd1m6pq%2FXyKtGNP9mFI1fpzwxTVPjmgIvx9L0QLnFlGtJAmGVs8tKb8KUt4jCHC6SC0myXKhJdhsWvBfZ97QE2IC5op5vf4Ule9CDsyqfH5nIYrY2AdKhm1EAVRxrb3%2FlfZsKKWmPXSKy4efVZl3hpOERTB598%2FJ%2FfwVQivzWla%2BtKJT6YFrT%2BafR6HntiRayuM&X-Amz-Signature=520f25e10e924134455b9971c9319c220591aa140d172d5ce3f6aed677933e28&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYQKPPSB%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T003559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvAhzVs1tAyJQugSYiVRPNhMdGiOJ8Xei%2Fy7qV9sZRgAIhAJ3oWmEK5lCq%2FxtGLsAMazJiqwbQKW%2Fc8ql21mJ5kOkCKogECPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwoMPBlv8fKHN7p1O4q3AOWSrvX320eLW3NqwApIueesR80DE5TXhninWGZJ4CxOSihmCK9HC43WT6y1UEfcQLxXhmkR2LyVfSGkEJcCMnjM3aLHYIr%2FU18qslVEKA%2BUX%2FqX3SWvihD4G3Lc1%2Fv5u71Zu%2Bxyt%2BDNrq5DddhT1l9RHaAUKuZZlznjzKW5pzlFI9VHKtRoKR2ZQo%2BAysyuCONV3DoERZbEIE1jqV2qDKnudBGv1Ho3SeVuEzKo4PA4CV41Z%2FXPive5lr1lodX3P5IRWcu200q5FtYkHSVdibXF4Y6xFFaVsDU8WrDKGXL6r1O7o2ztzABU%2BWIbjIh%2F1B1ZreFc4Mk0N338s6eOxEn5I5%2B0XXKtU9Yv9hMaZHnRXvxGS8qUhDEgFo3QiikwXOdXjLH%2FlUXaWjkFJ%2B%2ByZ1bii1zb0rX%2BJ%2F4%2F3EkvQoynmEamTsqNRkCRItVqn5u40T5V85XY%2FONFgSRLhztSkglTAUBYwTnLtsJXCNj0ou%2F7rxmuiiH0KdFSsrLeShDPgtSmmesbB25IPYaZkl5LpZDduzFcbYIGfJMQ%2FU4CvOF8RazAdvLfHjYpEzddmFDRXVTUHePlwQsyeWNH026H4%2FF3u8GC34EL2dkvwjynWRQ5LdGnDeGOHvqOgtzrTCV4bS9BjqkAUBKqMEonkMXTWhBik20TFMc%2B%2BH7504pc1Loiam4Y%2FWrLtc%2BoJowA9HMovoChVvcGevSgcysgHVYDcBWVcl%2BzhcG0MEVkKVev%2B4Qx5eA%2BqWDDtYAgwVVbExBNjm2KawLOnJqIVz3v0EpH8YyTFwaX7qhrA5q7dSakt1BQ8K7fcJcSiRZzQCUcGHChQbS3EkgWo%2FhVLztF%2FRAl4FIX8ItFOFJygz0&X-Amz-Signature=7fccad7610afcf9d36e9dfb96b209dfca632de5d7e128bfb0e9346c505030622&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
