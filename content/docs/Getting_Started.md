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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFSPNNQA%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T190158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvtg7aEXF7AQ0K5YTQze8qjFiKWlYGgti77kR0Ke2KlQIhAPC0zsAKDA4w%2BDJExhx0PowbmZ%2FXIIigEhPwNPT3zekdKv8DCBwQABoMNjM3NDIzMTgzODA1IgxKdu8xRDUu8kd5ZwQq3AN3IJ55%2FDXGbh4UxYFWY9bCbqEHjs6j9TAe7eyKfsf14a0V1MJJGEi62t6DRPaQiGuPXfevmNy9BvaB9OfX1t5ciysfGMV6TckTxFbbu4Nr%2BhJ21EcqpuDs1xuioF8Bxl4uZmdlSYFjQ03NXMb%2BUdCQtqH28mKYid6EAQWg6Uz44BCHIkCvUMNkyoxCO1usXm7fd5RUg%2F%2B1gXkZH%2B8h6R19iz7XQ9VdPpMiRvQ5Q6Y1fc3jZG3UIY8RceVXBkhpjmqPqnUr1JXJroQIcVHwLhXzWAN7BtDLKaJdLvR7bduXd1dVq0iaOvy57P2gyWUkcUojXX25%2Ba4Fz20KcM6Pd6EOvY0zhSfH6vQ7NmMc%2BSSRdUiR6TU%2F3GEYmGAEmGOpEuOhPc%2FRfkBDPgwbzv9yredZKB82jMJ51b1hCFEPwl2jaAP4ZtWF0u4%2FvCEEMOQzQ3DiDrl6d7ty3jixI5IJRCuaFzQKjVw1Kg1B6fDPoAN2GB5Ywg5avAcIa8OYfuJtOM4RSLtnCA2BgBmJjN33TJiE4h%2Funhr5O%2F9oLKGgrzIJIEZJxetvfljoWxicu1D%2BnihsbVvggl4qm%2BxuciRdWNwLnnmLypAK8AJddFHy%2F8ZrrTYw2%2BI4WMxQBQudRTDY0sC%2FBjqkASKaCvWVJ7z3nUFV99MSqNGYekVwJVrO8SPTHlGxztH4OwZsqPhFxhu0xcvmw%2F0c66WLqyk9cCgjumDAYJ6KVi2Fs2tFMlvUNU2oWxeTbJyLYmzOwhs7saYpJ43kgqBdaVnGyskXfAo4YVnGy49FAE2pw1fViDx8tSNv7ok1taUKIjss7M0o32ExVkO74hQRTwU%2FSPSS8klsY1rogrQ%2BzaLECx6K&X-Amz-Signature=226c5b7c5abfa6524b4c256ebc539581302d1144702940dfd9a07611ae290e55&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFSPNNQA%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T190158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvtg7aEXF7AQ0K5YTQze8qjFiKWlYGgti77kR0Ke2KlQIhAPC0zsAKDA4w%2BDJExhx0PowbmZ%2FXIIigEhPwNPT3zekdKv8DCBwQABoMNjM3NDIzMTgzODA1IgxKdu8xRDUu8kd5ZwQq3AN3IJ55%2FDXGbh4UxYFWY9bCbqEHjs6j9TAe7eyKfsf14a0V1MJJGEi62t6DRPaQiGuPXfevmNy9BvaB9OfX1t5ciysfGMV6TckTxFbbu4Nr%2BhJ21EcqpuDs1xuioF8Bxl4uZmdlSYFjQ03NXMb%2BUdCQtqH28mKYid6EAQWg6Uz44BCHIkCvUMNkyoxCO1usXm7fd5RUg%2F%2B1gXkZH%2B8h6R19iz7XQ9VdPpMiRvQ5Q6Y1fc3jZG3UIY8RceVXBkhpjmqPqnUr1JXJroQIcVHwLhXzWAN7BtDLKaJdLvR7bduXd1dVq0iaOvy57P2gyWUkcUojXX25%2Ba4Fz20KcM6Pd6EOvY0zhSfH6vQ7NmMc%2BSSRdUiR6TU%2F3GEYmGAEmGOpEuOhPc%2FRfkBDPgwbzv9yredZKB82jMJ51b1hCFEPwl2jaAP4ZtWF0u4%2FvCEEMOQzQ3DiDrl6d7ty3jixI5IJRCuaFzQKjVw1Kg1B6fDPoAN2GB5Ywg5avAcIa8OYfuJtOM4RSLtnCA2BgBmJjN33TJiE4h%2Funhr5O%2F9oLKGgrzIJIEZJxetvfljoWxicu1D%2BnihsbVvggl4qm%2BxuciRdWNwLnnmLypAK8AJddFHy%2F8ZrrTYw2%2BI4WMxQBQudRTDY0sC%2FBjqkASKaCvWVJ7z3nUFV99MSqNGYekVwJVrO8SPTHlGxztH4OwZsqPhFxhu0xcvmw%2F0c66WLqyk9cCgjumDAYJ6KVi2Fs2tFMlvUNU2oWxeTbJyLYmzOwhs7saYpJ43kgqBdaVnGyskXfAo4YVnGy49FAE2pw1fViDx8tSNv7ok1taUKIjss7M0o32ExVkO74hQRTwU%2FSPSS8klsY1rogrQ%2BzaLECx6K&X-Amz-Signature=9c33ddcba9e05d13a75798c6cbf1a2a802b8aa26a20ceb1bbe3c152863577bdf&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5QL3ZL7%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T190206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF5zV4HQ5694uA2Fh3aYwtqCqKrJdw6oe2qd0HDuaXzDAiEAx3mpRUmaSneV5wataEeXyDL9wcEHbovCcvEPYRu1y7Yq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDHYM0IMruQJ0jtfKdircAwfZ%2B3g%2BwmkEY3T%2BIZvMFyQwls6nBAMJeqTg%2F4ajGHg1gDvbFKhwJHROYqzYVkhWOwajY%2Bf05UeKRx7dnOHG8RYL02yP0cUfZNBD4nN6ynhtbMaTrL280mRWL9YnS%2BkHiMD2blCr72JaiS9whkRWyFJKhxmawFyNyaEWFqO8%2FSWhCryo7IYCk8cJqXMBjX438xtZ1RvG7XNqUm47tgoGD8K2B%2BcHTkelh01AumppW0CxHfDoJbVyJkTpk7CR01i3n60tsvzQ0Eqy3s0Kryt17Rr6c4BuoQm84jewylW0A28NEWPIoHKa4H%2Fs%2FHQ13YspYvkgUAS%2BrA3nKqfPtxjr2hVOrf%2BDFjMc9d048UoO6ojLKFKRl7Y%2Fx7SDif5%2BaZytdpZuWd29v7EwzP73qgyPdG57bn0bRahnsz%2BzXWwmcuBcxhctc3pnuAobLnvi9CuI45Zz6oAlNsM2cMy6%2Bf8jpLS2eJ0085z%2Fx2lWvIOjSb9O0%2BdpTgpABd0hL%2BuPJ%2Ba18aBNtW9m0gCHLoSIK1NxedAdEXHk4UvhpNLPK%2FAbqTgSLHHCxD%2B7YErEpIBCEn%2BgIjHr1ZLjgkyRIhbknoT0BKuY%2F6ULtWCGC%2BKpYtprgEcnMnov22bobVRig0fbMOfSwL8GOqUB3AjXBHtHKmq5bFkWlyFB8a%2FSbbcGHXt37Nsc2d1FSxM5sWjPYp7%2BKMS7B1qi4FKSSwUu5LUqCyXNuSXpzhnqM5yI1i%2Fad%2BWc7LRGUO9DgTyYmEJrw6qrafHzC%2FEnWIu2eyd7ipkJZFOECo%2F9pyS2xqq%2FP3TmwYN%2BInGnCjDymOQIBMcA646v%2B8kNc14lPlSoOrLiYq4XTcnTbF43sO%2B3ymyA%2BWeH&X-Amz-Signature=917a13e4af865f8e5094c4d93b07d869806aabb479efb4d41e72d7f86db55721&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUXRPN6T%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T190206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTUnfbmOKK8kAAl9chdLlO9V%2FcW2ywOU7cyYAMT51B0QIhAIaMl1ou4ZYIkBYc0g629ygmLbRWFcJb2t2hD0F3UYngKv8DCBwQABoMNjM3NDIzMTgzODA1IgwtZLjmqUBH9gqmgmoq3AMitQiMheZdC0GsbCLXtbLG%2F%2Fkpid2Bch94Jw2YfEV9d3%2FNncbIN8P7zSQztJGOKdN2hjAF9eLD13RQgS4GHM%2FeXn45O0nE6n%2BYglmWcG6bjZtUBOqfX6UAQhgRV8uRdIISiSJVV5B0or8Pk75WE5q8BfwiQcZluzjKiAkHkJf4OZqW57Jgl2ZSBReW%2Ftm6hhEDupo06YPoZXauK5rel2gpbOOsfVkbaIlpqh4loe%2BiL5uMuPTEhP7qCro%2FoQIjnaHtSWYtm9moU%2Bxr4GD%2F%2FH2MRm3CY1gxBji9G6ea1J1L80qQltTymccfKFigFhcuTMaVuNgalBTmd1wqUuNAgijCE6%2BQprXIpTHFm714ePkuJPpKwfDyzJ%2BMJYTGzlaQw4x9RxewfrCFXhoIXeuyTTgzRU2YqZvbHYvUecwmXqLrXtQc%2FExT1FJdvoav%2FVCt9ypgeAvczZ837dz27pHzqhCc%2BWsBbKYFz1I6jiQTleLuCLuqKTxqx0kfU3vRsHt4UiTAYJ87mDQkcKutytetKg2gaf1lHl0smdusFUBlkKvbN8CJ5H5l5eGDOL37xfQmME5Qsy6%2BaDGeTUwWim1BdAzD%2F%2FKnzHPaI3vmmMtlewV1zosbbphDLVjaxGMkpzCr08C%2FBjqkAa0HwgX1rmgzwtetCFLx%2BOE0dRFD11KvyYK7tBBGVdUnlhfKYhiCWxypV9xxKyI00SH1yJpCV0%2FZmxqLRQdTbIGYEBHOsu5wZ%2BQYxp5kYQEx6XZJ85SG2mDGgcBGDtB2uArGIrfvRZYZTFZiQmKzCOSbmPLs4k%2FLMY9omIME0hLWLjZNFogNCQ0jrpcziA4OnRQ5vAp6vzH4%2BtT9sVlbvFhDKjuA&X-Amz-Signature=2fa509a78425c93d2fefc553b5f46061ce216eb414aed4d1ea1d44fbe4636f60&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFSPNNQA%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T190158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvtg7aEXF7AQ0K5YTQze8qjFiKWlYGgti77kR0Ke2KlQIhAPC0zsAKDA4w%2BDJExhx0PowbmZ%2FXIIigEhPwNPT3zekdKv8DCBwQABoMNjM3NDIzMTgzODA1IgxKdu8xRDUu8kd5ZwQq3AN3IJ55%2FDXGbh4UxYFWY9bCbqEHjs6j9TAe7eyKfsf14a0V1MJJGEi62t6DRPaQiGuPXfevmNy9BvaB9OfX1t5ciysfGMV6TckTxFbbu4Nr%2BhJ21EcqpuDs1xuioF8Bxl4uZmdlSYFjQ03NXMb%2BUdCQtqH28mKYid6EAQWg6Uz44BCHIkCvUMNkyoxCO1usXm7fd5RUg%2F%2B1gXkZH%2B8h6R19iz7XQ9VdPpMiRvQ5Q6Y1fc3jZG3UIY8RceVXBkhpjmqPqnUr1JXJroQIcVHwLhXzWAN7BtDLKaJdLvR7bduXd1dVq0iaOvy57P2gyWUkcUojXX25%2Ba4Fz20KcM6Pd6EOvY0zhSfH6vQ7NmMc%2BSSRdUiR6TU%2F3GEYmGAEmGOpEuOhPc%2FRfkBDPgwbzv9yredZKB82jMJ51b1hCFEPwl2jaAP4ZtWF0u4%2FvCEEMOQzQ3DiDrl6d7ty3jixI5IJRCuaFzQKjVw1Kg1B6fDPoAN2GB5Ywg5avAcIa8OYfuJtOM4RSLtnCA2BgBmJjN33TJiE4h%2Funhr5O%2F9oLKGgrzIJIEZJxetvfljoWxicu1D%2BnihsbVvggl4qm%2BxuciRdWNwLnnmLypAK8AJddFHy%2F8ZrrTYw2%2BI4WMxQBQudRTDY0sC%2FBjqkASKaCvWVJ7z3nUFV99MSqNGYekVwJVrO8SPTHlGxztH4OwZsqPhFxhu0xcvmw%2F0c66WLqyk9cCgjumDAYJ6KVi2Fs2tFMlvUNU2oWxeTbJyLYmzOwhs7saYpJ43kgqBdaVnGyskXfAo4YVnGy49FAE2pw1fViDx8tSNv7ok1taUKIjss7M0o32ExVkO74hQRTwU%2FSPSS8klsY1rogrQ%2BzaLECx6K&X-Amz-Signature=32a95fb4ddb814351bfe7f557adc383d356f359894f57cebe2ae8ffbb1330584&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
