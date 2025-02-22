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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JQUUXEQ%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T050703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID9ol0aCDaXQo6XLkrDKxHO0N2jdrsX5QqRP5ANO2aqGAiEA6aPg6jS6MGKl0tCaX8dBRp58BeU%2FZdPyKJIagSfz74YqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGKQDRu%2FeTwhEBLWRCrcAxlSteT6YI%2BsYErQEZ71h6x%2Br39UNy8xrtpmqNqg9y9FBaTnzAje%2FaCM4CClHOjeKPPeKp4d2p%2BLyEaCP0QiT1rBFLwqH09PiSGKHm6ZlM37%2B0oLK1Ms9zAcSKeNVSG5723SrJ8Lt1ivtqx5qKAxhkuxV3bhOkAR1lHgadt4sSthVnrnw%2FdJtRiB3ztd2NUzn8G7icbCkEoVX2I3xoXZaE8Ph%2FfH2%2FmETryWDL%2FMPhAnURfAGbhQmS9LC4lI%2FRg97TcmfIb3QVFVmSxRrk20tVmMA7cpzVD%2FffpHgYXOU1iCEiwSE8FXYbnfjYVG1UQQ%2F1F5cZKZPKis6e4SZQl%2B1%2BbRIM2YBpsfFePlxRwvobN%2Fwvy3y15MqvdMKWLd%2BftKTuN5dm0WHGLqmq8N7sOAJS3w8zHzJ0xL3eLXfgibDXpWzyxQiDIdNPZw4rQ3nfP09mxNmFdiZXx9wWl5mldVpVmKuYomjHNZwMPjT8i%2FV1cH8S1I22hQptIUeIBG90ASWc%2BL7ncTBm4vwjpun6PTlNOkZlWrS7EE%2FxJt93Qd99PHdsHOPlX44xbI%2FdR6%2FDQJktsX6MoXQ7OcTiutb6IJ2eGROymDr1UxlbVhDBjWWwp7DCBL3nV%2BhjMkB1LTMJyq5b0GOqUBFldjQwuspEuaqewXIyTCiVqlHFCst2IOOeTdHQIVGiSvD9FQ4okVeCxdhJ0oLHWwM1ZllYTwmTalKNoEC3PkwdYQUdg7otCG1QfD98vkAXEQvRq2QVChwaktU1RFQv%2FF2ZFsrQ0%2BWNtWRiys3NY4OvKXhI%2Bg%2B0%2FBJR1hNDbWK0w4dURXC7FNWJODC2MGHqChE0CrsQbAm4Q1AoKUFSl1r4WYg5Xo&X-Amz-Signature=1f8d6fb2a7ab098276e510c5183b15357687f4da23dbbf78104f6f208dd531b7&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JQUUXEQ%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T050703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID9ol0aCDaXQo6XLkrDKxHO0N2jdrsX5QqRP5ANO2aqGAiEA6aPg6jS6MGKl0tCaX8dBRp58BeU%2FZdPyKJIagSfz74YqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGKQDRu%2FeTwhEBLWRCrcAxlSteT6YI%2BsYErQEZ71h6x%2Br39UNy8xrtpmqNqg9y9FBaTnzAje%2FaCM4CClHOjeKPPeKp4d2p%2BLyEaCP0QiT1rBFLwqH09PiSGKHm6ZlM37%2B0oLK1Ms9zAcSKeNVSG5723SrJ8Lt1ivtqx5qKAxhkuxV3bhOkAR1lHgadt4sSthVnrnw%2FdJtRiB3ztd2NUzn8G7icbCkEoVX2I3xoXZaE8Ph%2FfH2%2FmETryWDL%2FMPhAnURfAGbhQmS9LC4lI%2FRg97TcmfIb3QVFVmSxRrk20tVmMA7cpzVD%2FffpHgYXOU1iCEiwSE8FXYbnfjYVG1UQQ%2F1F5cZKZPKis6e4SZQl%2B1%2BbRIM2YBpsfFePlxRwvobN%2Fwvy3y15MqvdMKWLd%2BftKTuN5dm0WHGLqmq8N7sOAJS3w8zHzJ0xL3eLXfgibDXpWzyxQiDIdNPZw4rQ3nfP09mxNmFdiZXx9wWl5mldVpVmKuYomjHNZwMPjT8i%2FV1cH8S1I22hQptIUeIBG90ASWc%2BL7ncTBm4vwjpun6PTlNOkZlWrS7EE%2FxJt93Qd99PHdsHOPlX44xbI%2FdR6%2FDQJktsX6MoXQ7OcTiutb6IJ2eGROymDr1UxlbVhDBjWWwp7DCBL3nV%2BhjMkB1LTMJyq5b0GOqUBFldjQwuspEuaqewXIyTCiVqlHFCst2IOOeTdHQIVGiSvD9FQ4okVeCxdhJ0oLHWwM1ZllYTwmTalKNoEC3PkwdYQUdg7otCG1QfD98vkAXEQvRq2QVChwaktU1RFQv%2FF2ZFsrQ0%2BWNtWRiys3NY4OvKXhI%2Bg%2B0%2FBJR1hNDbWK0w4dURXC7FNWJODC2MGHqChE0CrsQbAm4Q1AoKUFSl1r4WYg5Xo&X-Amz-Signature=c1cbbc4cb38b05faace23e007d018fffb6987e7764a8926aaafa9b3cc0f37000&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665T5YE64%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T050705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5twQbG%2BuZIox1F1CGkykF1D5lUWdPa5YiG3Yd%2BU%2FAMgIhALkp2xedqo3s7D6LQj3XNBU%2BnUPfHhY%2FXrf1XTvk9szSKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz8BbdcAgeauiH%2Fplgq3AMuR%2Fa8VAnqOmH9crCuDyIYP44soqFOPVAzSpoUmorrwVHJnukNakIDzrHR8K1akKCE%2Bf8guCJZjHCMFGFDXqeRWZsp8iNDJz7fjogndOYlaWDQaub8%2BRD%2FV%2BxjXnZD3ZmWTwwDP0SvAo5nmKf2BeZOB9YX1mYmiy00LNf0xGGkzidsGQdbHzR1YHrcIce09i9mm2QRgMW4YyoY%2BT%2BL2QJtbjY9tCPGvwu7kSdYCzjL8wcSH%2BGqKoZHUrMEwGK5k2a3ii0QDBudRS7o4DzzL3Was50dpHjYfknXvulliX9iiB3atn4EjxiBRX01jcx8%2FNFMg2VKxZUjkXpf7JvO3dvLz0%2BqUAQnfpbHpR0%2FfGXTbtFV6uVnViJfsTdM%2Blp%2FVZqzQgfkcYaZwGwbDjVfMj2naRxZHqz%2BnuqZJlXGmcYZvi916tWBvOh84QzaNk0HRuRk7ELKu4pACqH64N8lo%2Fs1s0b9V5KR6ugeomL1h200nBPWMUCmeqF5WM9Si7B1PL5ByP3q1W7ofWYtO8MzNgSNWfRSy7V87PEXMSJ4zo7%2FnBGIyBofYRqE27BRoHq7GsD86iBJ9kcS3iPzPz44mdgjXd0FZyj%2FExQga2uism3ugw4RENAzZ1qj90WC6DCGquW9BjqkAd%2FyCa1xlgWV%2FssocRBnR3b4dew4Rjf4eG%2F6QoYvyYayOqhjX29dloFDG8P5K8xeDhUbybtf%2BHlPjhPfHQsEKQ9gR7qmQHAqxnKL9Py%2BEoPixttLjS%2FRAChLt9vhao7dXbVYn7XLpR8PeqVuy999ehUzLqKnWPBq3X2dw3zTU9f%2F3z98qiZHchCdDicYZQkwRMN7WfUuZ69fGHDjh6aOTQkoA4X2&X-Amz-Signature=781da463045ad08fc748ee6512823aee85c2a367159e6dab58822709568bd010&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDDGVKBV%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T050706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbAl%2F7V2wKJqNYRQxPSlTLJAqY1nvjSybcKHhrPISbKQIhAP2HKM5ufa85K5%2BqKX0ZncSHwmiVX8P06BRmlaIt8h1HKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzPvRhyA%2FRN9BnmNNUq3AMg3jct66%2BVKu7dO3CA9TNsa7RBFd7z7ZJQaIZrDjFdLj9Ctym0sOQx8bVFmhebMHxa5ElhJvmNVZ4Omh5baEA8VPluvgf3Mw1dW7hda64wFUy3nc1E3vJ6iPaAmX83eZDCk%2FzIAkGUbv71tZIbC88IfG%2Fmvg1EQlmr56TBTHtAgD%2BQuSNv%2BBUbSXkXlSsq0PKjUQowQ7p%2BV7eAJl3%2B9uLIAJAkLOIpgET5C9LvXGQpIreOHlr7LCzdZfRCNrd9sJxIrmDkd44kYl%2B3ddttOsmvGUAxu6YFHKSLAkWmhFbz5ZNMSfU2NqnMM%2BbRManp6uK5iBP8b1pZoRh2lCnAq76SBU%2FCutz8UaUk1wmbw%2F4lWYThKXrC%2BFdGON8Jk9FlDuxLlTiIEVJJqhS4jgP7z%2FoGvFvIZvYqb32F0FZBQo%2BZB3uOINgs60LBdDfI%2F3mdw0gCkfkXttrvlgtIZ42wzTMg30G01%2BwEXGpAffsOsYUOQQ1nKpu%2BWtyUgT%2BbpCHlEc8BUDRyM58gZRM%2FMjdyBRbkB5k0x4k5kREaGhiiptlw13EJqIiVlALNzIU2kwIDaEkdbDZZOr%2FlrgD3EbuxTef5Qha8InWMSlEb1sF73E9jienDbVXLIGOO7wCQyTCrquW9BjqkAWkMhCWgPFh6hWUuiPdY8GCmIm%2BlpXzDf4BrZFTvk9jRgqO60OZJJuzyB83j3DMbf0ns53c8954SPXTlvgAsinOwMCeSb30J%2FfyAgwqyPjfJlkZnDNwTbNWO8nSybApHkmfofa04N8Z2wTDPwB1%2B5l0TGJ6kZZl5xzhmim3AYLnJGYvb036VQwIa4OtsDH1zl9ae4OZaGmTMbhuw2qhsdHvaaY1o&X-Amz-Signature=3a8e42466da78c57fb8f75ff6dd12c50565a3051ad02e4e156b721fd3dba89e4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JQUUXEQ%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T050703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID9ol0aCDaXQo6XLkrDKxHO0N2jdrsX5QqRP5ANO2aqGAiEA6aPg6jS6MGKl0tCaX8dBRp58BeU%2FZdPyKJIagSfz74YqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGKQDRu%2FeTwhEBLWRCrcAxlSteT6YI%2BsYErQEZ71h6x%2Br39UNy8xrtpmqNqg9y9FBaTnzAje%2FaCM4CClHOjeKPPeKp4d2p%2BLyEaCP0QiT1rBFLwqH09PiSGKHm6ZlM37%2B0oLK1Ms9zAcSKeNVSG5723SrJ8Lt1ivtqx5qKAxhkuxV3bhOkAR1lHgadt4sSthVnrnw%2FdJtRiB3ztd2NUzn8G7icbCkEoVX2I3xoXZaE8Ph%2FfH2%2FmETryWDL%2FMPhAnURfAGbhQmS9LC4lI%2FRg97TcmfIb3QVFVmSxRrk20tVmMA7cpzVD%2FffpHgYXOU1iCEiwSE8FXYbnfjYVG1UQQ%2F1F5cZKZPKis6e4SZQl%2B1%2BbRIM2YBpsfFePlxRwvobN%2Fwvy3y15MqvdMKWLd%2BftKTuN5dm0WHGLqmq8N7sOAJS3w8zHzJ0xL3eLXfgibDXpWzyxQiDIdNPZw4rQ3nfP09mxNmFdiZXx9wWl5mldVpVmKuYomjHNZwMPjT8i%2FV1cH8S1I22hQptIUeIBG90ASWc%2BL7ncTBm4vwjpun6PTlNOkZlWrS7EE%2FxJt93Qd99PHdsHOPlX44xbI%2FdR6%2FDQJktsX6MoXQ7OcTiutb6IJ2eGROymDr1UxlbVhDBjWWwp7DCBL3nV%2BhjMkB1LTMJyq5b0GOqUBFldjQwuspEuaqewXIyTCiVqlHFCst2IOOeTdHQIVGiSvD9FQ4okVeCxdhJ0oLHWwM1ZllYTwmTalKNoEC3PkwdYQUdg7otCG1QfD98vkAXEQvRq2QVChwaktU1RFQv%2FF2ZFsrQ0%2BWNtWRiys3NY4OvKXhI%2Bg%2B0%2FBJR1hNDbWK0w4dURXC7FNWJODC2MGHqChE0CrsQbAm4Q1AoKUFSl1r4WYg5Xo&X-Amz-Signature=c679e151aca80cf21f9dcadae117bb6c43cfeda9d822e45076235095f4c6f4d5&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
