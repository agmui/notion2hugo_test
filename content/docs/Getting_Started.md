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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVS35PKL%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T181155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIGXYvVFHIJUKdpzbVqdOrtFNxqzC%2Fx1PrDkzdOww2aQqAiAVHVWuPdt5RdVasGzQWVLWFGL2k08%2BO3QzHQMahHMsmyr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIM9W1K7drDUVTPaRf5KtwDHevEqCz6gyI3JwaEcVNQZwwCc3Uz7WVJVtnhlV%2FGqbxddipzgUqJM9rmCl9fZWPxaHNLfDVzSTyiRuGI5HBnIKl%2F3su%2FlCqm%2FYT167yGdAF5YwC5VawtnppaqzWYUkkmVtga%2FVNL7onlnsfvU%2FbIXSimkeur9l622zunvlDW9ELmnoQPMt5Giy4sLDDN%2BZnPpS3Emgn32sveyh9iMZ4E%2BESiYpmaHljsqq43%2BQmSo7FBracGjU6bvx0j7e4bRqYrhBty3I2hpu7UcgYpXRLDZnSApMUqIzgUdU0rxoVBKKmcNY25yV8E%2FmC5lM26byK02nXYDQaC5ZcnDdWIpNer5I6qF%2B5sKPaoxNgoYr3iCBNFLSR1nD4uT2eVCm75%2FNxC45ipDBDTsWTiOxpJKMeL7f%2F%2BqdCurW7LAP3ZTAtf06ICAGUZh8JLJ4gkxwKKOlmcxh4Hx4eyRAJAQIYiIuueHFBWwHJUvGLmx3XOYg%2F64%2Btq8NyV5EOv4tnGHFM%2FaaxeFypAv4tuAqdZvqy6yCsYYZ4ZJsuHQKIVXs2ljGA7lHXb26ColIAiBz5qsv19tlV7wxT0TqYFuR1%2F47NjaRpYQwSxPE9RFh%2F18rAD4YjlQe3vcago4MgrRCLasJww2dKxwgY6pgE9hBSXPw%2B9kLYlIi5Hj1qpAtAnQuGnZCywMgOSX07FOJJQXfZeakCZXWcYXRHfe2RSzrPzM%2BnGMK0Jiq7NiGU3dKjawjVj0GvfsfTHFkkt9HkpkuclTog1Obnk%2BQXyu1uYagdfVFoQXuew%2BsHr8Zdz9D7825B%2FOyJNVUFiVqPQyGcVQGeNJJZ4TwmAEHZ9DJiMkvmwRXw2Nq%2B8Xj7D7CY3KqrADJ39&X-Amz-Signature=5143371e2921749e2d16c1d96ea71211f10d6d662075bdea2e38021bb590d3f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVS35PKL%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T181155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIGXYvVFHIJUKdpzbVqdOrtFNxqzC%2Fx1PrDkzdOww2aQqAiAVHVWuPdt5RdVasGzQWVLWFGL2k08%2BO3QzHQMahHMsmyr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIM9W1K7drDUVTPaRf5KtwDHevEqCz6gyI3JwaEcVNQZwwCc3Uz7WVJVtnhlV%2FGqbxddipzgUqJM9rmCl9fZWPxaHNLfDVzSTyiRuGI5HBnIKl%2F3su%2FlCqm%2FYT167yGdAF5YwC5VawtnppaqzWYUkkmVtga%2FVNL7onlnsfvU%2FbIXSimkeur9l622zunvlDW9ELmnoQPMt5Giy4sLDDN%2BZnPpS3Emgn32sveyh9iMZ4E%2BESiYpmaHljsqq43%2BQmSo7FBracGjU6bvx0j7e4bRqYrhBty3I2hpu7UcgYpXRLDZnSApMUqIzgUdU0rxoVBKKmcNY25yV8E%2FmC5lM26byK02nXYDQaC5ZcnDdWIpNer5I6qF%2B5sKPaoxNgoYr3iCBNFLSR1nD4uT2eVCm75%2FNxC45ipDBDTsWTiOxpJKMeL7f%2F%2BqdCurW7LAP3ZTAtf06ICAGUZh8JLJ4gkxwKKOlmcxh4Hx4eyRAJAQIYiIuueHFBWwHJUvGLmx3XOYg%2F64%2Btq8NyV5EOv4tnGHFM%2FaaxeFypAv4tuAqdZvqy6yCsYYZ4ZJsuHQKIVXs2ljGA7lHXb26ColIAiBz5qsv19tlV7wxT0TqYFuR1%2F47NjaRpYQwSxPE9RFh%2F18rAD4YjlQe3vcago4MgrRCLasJww2dKxwgY6pgE9hBSXPw%2B9kLYlIi5Hj1qpAtAnQuGnZCywMgOSX07FOJJQXfZeakCZXWcYXRHfe2RSzrPzM%2BnGMK0Jiq7NiGU3dKjawjVj0GvfsfTHFkkt9HkpkuclTog1Obnk%2BQXyu1uYagdfVFoQXuew%2BsHr8Zdz9D7825B%2FOyJNVUFiVqPQyGcVQGeNJJZ4TwmAEHZ9DJiMkvmwRXw2Nq%2B8Xj7D7CY3KqrADJ39&X-Amz-Signature=36ae8ba79a40d48c413e7992e7cc31118011ff76d1cad91a7ba2b66124c51423&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVS35PKL%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T181155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIGXYvVFHIJUKdpzbVqdOrtFNxqzC%2Fx1PrDkzdOww2aQqAiAVHVWuPdt5RdVasGzQWVLWFGL2k08%2BO3QzHQMahHMsmyr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIM9W1K7drDUVTPaRf5KtwDHevEqCz6gyI3JwaEcVNQZwwCc3Uz7WVJVtnhlV%2FGqbxddipzgUqJM9rmCl9fZWPxaHNLfDVzSTyiRuGI5HBnIKl%2F3su%2FlCqm%2FYT167yGdAF5YwC5VawtnppaqzWYUkkmVtga%2FVNL7onlnsfvU%2FbIXSimkeur9l622zunvlDW9ELmnoQPMt5Giy4sLDDN%2BZnPpS3Emgn32sveyh9iMZ4E%2BESiYpmaHljsqq43%2BQmSo7FBracGjU6bvx0j7e4bRqYrhBty3I2hpu7UcgYpXRLDZnSApMUqIzgUdU0rxoVBKKmcNY25yV8E%2FmC5lM26byK02nXYDQaC5ZcnDdWIpNer5I6qF%2B5sKPaoxNgoYr3iCBNFLSR1nD4uT2eVCm75%2FNxC45ipDBDTsWTiOxpJKMeL7f%2F%2BqdCurW7LAP3ZTAtf06ICAGUZh8JLJ4gkxwKKOlmcxh4Hx4eyRAJAQIYiIuueHFBWwHJUvGLmx3XOYg%2F64%2Btq8NyV5EOv4tnGHFM%2FaaxeFypAv4tuAqdZvqy6yCsYYZ4ZJsuHQKIVXs2ljGA7lHXb26ColIAiBz5qsv19tlV7wxT0TqYFuR1%2F47NjaRpYQwSxPE9RFh%2F18rAD4YjlQe3vcago4MgrRCLasJww2dKxwgY6pgE9hBSXPw%2B9kLYlIi5Hj1qpAtAnQuGnZCywMgOSX07FOJJQXfZeakCZXWcYXRHfe2RSzrPzM%2BnGMK0Jiq7NiGU3dKjawjVj0GvfsfTHFkkt9HkpkuclTog1Obnk%2BQXyu1uYagdfVFoQXuew%2BsHr8Zdz9D7825B%2FOyJNVUFiVqPQyGcVQGeNJJZ4TwmAEHZ9DJiMkvmwRXw2Nq%2B8Xj7D7CY3KqrADJ39&X-Amz-Signature=704ee2b3b1b4be1ac9b70a95ffacbef7d46d8aa49858548f7e2c6abd32b147bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QIEFUMC%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T181157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCICltf%2FR%2Fic%2Fxo17PsgcYzNs2ADV8T3T5OPnfjt0ByXPbAiEA2wmB71sVX2n1svw6sdtitHrRtmRWgNpkiuLoQ4Ap4SYq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDKK0Q0E2YpBbydgxDyrcA4pLNtyVXSRUoT4a6lqyJMB6BvebwQG3p%2BhIQq0YSTPLXVBB0IJYoTCALdJ0OcaxJI3KZ1dUcLIPXhoRNXt4Wi%2BAW7xqXuucHUCIhQ8fayLO0XHZNKq8uJb3tvLZmUFhIDB1KFSgsXNYl%2FP8sr1V%2FjZQ%2FjBbiraxmwLSV%2BGVWDhJRpid8qfw9eVYLlfYTJ9aDsrjmj%2BNWxuR3HamI39tZpgAVM0PRJARqGXmY0MB1DN20yn4eZvcUXpxM%2BpCgh6U7Ao1iZTOqjcr9p%2BvveVa6w2wZLz5YU7kFwqMrl%2B%2BSKrPBXvT63dOJRKEqoHS%2Bo9H7D7Lgs%2FDa4PGoahxquWuTgKdzMFLXJZevj3Y8%2BD0He4FjJ9xdmHrBD3wqzS4Uah1RTmdfxQCxeMqE5UYxOYcKbFAbJ7CpG7%2F1PqDv%2BADAW5xAGJ4Sycmfi8hCpvpYzXXn1jRGq5ztKK3wiRAZApiK0GY7dtRQCd1F0F3fuGBAzr93jl1I0wPlUe1yn9wp1jfelQ0DkWnB9BMNDqtOerjS6sz8vmXlSXPqS2VoWsL8RH1FkEe%2BdHmKWi7%2B8TQFV%2BdWYTrdZvu99Rd14kaEjCE9VV%2BaTnGejTCXysnypxKh%2Bs51SFu%2F%2BT0%2B0jVZnvqMKXSscIGOqUBZ7V07xOAh713RP%2FEqMYL%2BRbfE8IbDc%2FmDWey%2BLnzz2uZljz4CPL%2BNay%2F4sUfhbCS12P0XVo5I6qY3HDHqisIudPLYoKoOkS7OS6Rs8s045Aj%2F%2Fa5mphbn%2FeIVDgrKxsJLKBUPxucJumeBxrr21me9ZuOIosiiIlWEDcjIMG3U2JJG2%2BYV8Aybu2FVUtKSFtSRoUnAiZtFCUz7RGFrS3q6PNQ027B&X-Amz-Signature=1d9d50460f1ed948ab08cb54da55b3d0fdb42634a99e4dd25878ecd141e8f913&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVTRYEYM%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T181157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIFlaA7St3VybV%2F%2FxOC96RBlPHRHd2nQlb69E9UIobzaTAiA5S7xcC8yB89Siu2imKHHCEIifzs%2B7xX0kcecCiHVNCCr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMsxH5n2mjx5x1ai7BKtwDd6HCYbxyE2IubhIwDMPLxfUztPLXCSWyoNU%2BrvBhwli6L43il%2FPhblRRS%2FevtMOM5NE99cgeZt85vfDV6%2BgIPiy6Z%2BGaTDamyBaEhG58DTrQEKkxM7ELONlt9WN%2F80hO83497RIlUIAFbvaHc8MsKv5h9%2F6QS9vJt4WoaErzSRI8LzqHFL223GG2b909eCVOowRlwsE9fIg%2BU7i15UcOPYW3nzs96y0j9caSxufYJxe8zpHPFe5P1EyGqhTFnkulTW4HPuan05UXI0mcJTVNcXQkHKLrWwj4gsm6%2FDq4r9SvdNT7l7nfkS4B%2BYdI6ZuprjFdvxluXcJJVKHpnN7rBtEmz8Joo4x9ACwIAMnOWmUm%2BXDcgZGkhZdVCIGcySExlQam1Ns2ojuPY4kTPpYWFX6HII5h%2BJfGaZz1z4SCE4tFfEkb%2FGxcix4bRMV0WqvRFNTMNHpHJ3cFz0M8Wvv8KWGyz7owBucSxBg1sf%2FMK3D99FHe1URyKWcKv54Jv8ocKBhwDIPgTBgOtUY15BrUTAB59O%2BWW%2B3H0Etdf0feM075LRaD6E7IBEv4QfCd6gXdcSr%2By2wlYb%2Bdr2rxU61BekSRqggJwm53vAeJGSkJHUcafwlvLe0jwHiQA%2F8wpdKxwgY6pgGuwsy7hxAfwcvh%2BPafAov0at7LZ7EF4OTONKRwPtzvGI0BL7KoeYB%2F4jTWbLMhki%2F3OQK1X4eP%2B%2F9EOPYez%2Ff5aM1bT%2BzGuaIJoAg47%2FDaXLetENuywJEg%2F5GHfqCjUyex4nuUnhVQa7aEQBnBoXeBANVkcZbcRpsWdAF%2BcczdqI3dObNxgfFM9S1ktU%2F%2FBleHQ3a%2FzeMOuSTA%2F7NexvI923qAanva&X-Amz-Signature=b56e0e1ee8e0b1dc818ebcb0a297694d94ae3ab584634579ad26c2995b5bb51f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVS35PKL%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T181155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIGXYvVFHIJUKdpzbVqdOrtFNxqzC%2Fx1PrDkzdOww2aQqAiAVHVWuPdt5RdVasGzQWVLWFGL2k08%2BO3QzHQMahHMsmyr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIM9W1K7drDUVTPaRf5KtwDHevEqCz6gyI3JwaEcVNQZwwCc3Uz7WVJVtnhlV%2FGqbxddipzgUqJM9rmCl9fZWPxaHNLfDVzSTyiRuGI5HBnIKl%2F3su%2FlCqm%2FYT167yGdAF5YwC5VawtnppaqzWYUkkmVtga%2FVNL7onlnsfvU%2FbIXSimkeur9l622zunvlDW9ELmnoQPMt5Giy4sLDDN%2BZnPpS3Emgn32sveyh9iMZ4E%2BESiYpmaHljsqq43%2BQmSo7FBracGjU6bvx0j7e4bRqYrhBty3I2hpu7UcgYpXRLDZnSApMUqIzgUdU0rxoVBKKmcNY25yV8E%2FmC5lM26byK02nXYDQaC5ZcnDdWIpNer5I6qF%2B5sKPaoxNgoYr3iCBNFLSR1nD4uT2eVCm75%2FNxC45ipDBDTsWTiOxpJKMeL7f%2F%2BqdCurW7LAP3ZTAtf06ICAGUZh8JLJ4gkxwKKOlmcxh4Hx4eyRAJAQIYiIuueHFBWwHJUvGLmx3XOYg%2F64%2Btq8NyV5EOv4tnGHFM%2FaaxeFypAv4tuAqdZvqy6yCsYYZ4ZJsuHQKIVXs2ljGA7lHXb26ColIAiBz5qsv19tlV7wxT0TqYFuR1%2F47NjaRpYQwSxPE9RFh%2F18rAD4YjlQe3vcago4MgrRCLasJww2dKxwgY6pgE9hBSXPw%2B9kLYlIi5Hj1qpAtAnQuGnZCywMgOSX07FOJJQXfZeakCZXWcYXRHfe2RSzrPzM%2BnGMK0Jiq7NiGU3dKjawjVj0GvfsfTHFkkt9HkpkuclTog1Obnk%2BQXyu1uYagdfVFoQXuew%2BsHr8Zdz9D7825B%2FOyJNVUFiVqPQyGcVQGeNJJZ4TwmAEHZ9DJiMkvmwRXw2Nq%2B8Xj7D7CY3KqrADJ39&X-Amz-Signature=bd74bb538372d9e0fe6d725714d4671f58119abce2756a32557cd26b324dd21b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
