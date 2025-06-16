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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAGDAF3H%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T190656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIFAhueisxc3L20Fht5m1%2FP%2BvKRRRhA1BMk8X51BuMIzaAiB0UWGsgn0fMwU4gATAGDAJPJOoEXWwofrFLQ4IGh17Bir%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIM%2Bwfnk9mo1Z7s0Mg1KtwDiH3T6gOUmC3s4IeV68Mf7qWqyWpH5bBy7KspHWFtuyozggjtxpcpk6jD%2BSVuEk9Pf%2B8rVRREV3v8e95f%2BdnXKMcvBzKR%2FRe7c13ULn%2FH%2FN41zUhRADV0%2FSGEop0Cpujxk8Gvhf1sFn2RAnwJZbisP788pGvZEze5HaRax6cBPky6yggtABb%2BdbDCpH%2FWDWQG%2FhvknJ80rwbW3DYgTODJPJNq%2FVoIj%2FDCAwWcY8QvIpJOWS9v1Uz3q5fDDlNVGOtl%2FgTfI5xHTmSUbhubcLL3WoZMTyoUUuQ3wFLLKDc3cJolPAqzwWu1WhUtGCs6rklFT2RC4pBko%2BafrISGufScOhWmx41QOPXs2CrrT8xavQQAULjOVuXbgkbaQbpiiy5Skd1wNc9D0qlsDjQSuHWVUDK1poj1IciwhBkzufUfr%2B7WSBkI2dd4GcmexkCEorb%2BB6XHSZ%2BRcykIjvtefsnB%2FImDFhNg%2BLgnRYj1XqvIYUNk530%2BEod6ov%2FJAvCRBuoIboqSCuilJ8e%2BBJ4ByLfEDK1ETsRmXyIlCZbEH7XI4YiwBT06r7j%2BLW7yf%2FPub9o7UrEpev6ys9ePSJ78UGgD1hyDpylAxX5wIahycqHfku1v5qzj6nRbz3ORu7IwrK%2FBwgY6pgGAQgswHELsz8Y1yC4SN2P4JGVO1%2BdSNZjSs7K2xZWp82qE64UgH6bmMImvBfZ2qTDkc6VZMbWnnJp0hnh1GJVcYOzxy8G6ZOtXM3roNzsmRYIqWkVRIDO8%2Bz4sDTGGWYjUYkIS%2BJQs1zt9lrBOGQEdT9H%2FuMk00JFlNkQ%2BecPceCUoUHKPdkWqtQckU00CfMjSv0FM6CbkyCkyS72BvtblMs%2Bp82pb&X-Amz-Signature=505322da5822a3a12c53ea56fc0a24486087d4dd0f9689174cc6931d5ae659ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAGDAF3H%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T190656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIFAhueisxc3L20Fht5m1%2FP%2BvKRRRhA1BMk8X51BuMIzaAiB0UWGsgn0fMwU4gATAGDAJPJOoEXWwofrFLQ4IGh17Bir%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIM%2Bwfnk9mo1Z7s0Mg1KtwDiH3T6gOUmC3s4IeV68Mf7qWqyWpH5bBy7KspHWFtuyozggjtxpcpk6jD%2BSVuEk9Pf%2B8rVRREV3v8e95f%2BdnXKMcvBzKR%2FRe7c13ULn%2FH%2FN41zUhRADV0%2FSGEop0Cpujxk8Gvhf1sFn2RAnwJZbisP788pGvZEze5HaRax6cBPky6yggtABb%2BdbDCpH%2FWDWQG%2FhvknJ80rwbW3DYgTODJPJNq%2FVoIj%2FDCAwWcY8QvIpJOWS9v1Uz3q5fDDlNVGOtl%2FgTfI5xHTmSUbhubcLL3WoZMTyoUUuQ3wFLLKDc3cJolPAqzwWu1WhUtGCs6rklFT2RC4pBko%2BafrISGufScOhWmx41QOPXs2CrrT8xavQQAULjOVuXbgkbaQbpiiy5Skd1wNc9D0qlsDjQSuHWVUDK1poj1IciwhBkzufUfr%2B7WSBkI2dd4GcmexkCEorb%2BB6XHSZ%2BRcykIjvtefsnB%2FImDFhNg%2BLgnRYj1XqvIYUNk530%2BEod6ov%2FJAvCRBuoIboqSCuilJ8e%2BBJ4ByLfEDK1ETsRmXyIlCZbEH7XI4YiwBT06r7j%2BLW7yf%2FPub9o7UrEpev6ys9ePSJ78UGgD1hyDpylAxX5wIahycqHfku1v5qzj6nRbz3ORu7IwrK%2FBwgY6pgGAQgswHELsz8Y1yC4SN2P4JGVO1%2BdSNZjSs7K2xZWp82qE64UgH6bmMImvBfZ2qTDkc6VZMbWnnJp0hnh1GJVcYOzxy8G6ZOtXM3roNzsmRYIqWkVRIDO8%2Bz4sDTGGWYjUYkIS%2BJQs1zt9lrBOGQEdT9H%2FuMk00JFlNkQ%2BecPceCUoUHKPdkWqtQckU00CfMjSv0FM6CbkyCkyS72BvtblMs%2Bp82pb&X-Amz-Signature=920a752646b73a720ff91fb6e23d9ff29eb9e922585989289364a009c9350f98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAGDAF3H%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T190656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIFAhueisxc3L20Fht5m1%2FP%2BvKRRRhA1BMk8X51BuMIzaAiB0UWGsgn0fMwU4gATAGDAJPJOoEXWwofrFLQ4IGh17Bir%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIM%2Bwfnk9mo1Z7s0Mg1KtwDiH3T6gOUmC3s4IeV68Mf7qWqyWpH5bBy7KspHWFtuyozggjtxpcpk6jD%2BSVuEk9Pf%2B8rVRREV3v8e95f%2BdnXKMcvBzKR%2FRe7c13ULn%2FH%2FN41zUhRADV0%2FSGEop0Cpujxk8Gvhf1sFn2RAnwJZbisP788pGvZEze5HaRax6cBPky6yggtABb%2BdbDCpH%2FWDWQG%2FhvknJ80rwbW3DYgTODJPJNq%2FVoIj%2FDCAwWcY8QvIpJOWS9v1Uz3q5fDDlNVGOtl%2FgTfI5xHTmSUbhubcLL3WoZMTyoUUuQ3wFLLKDc3cJolPAqzwWu1WhUtGCs6rklFT2RC4pBko%2BafrISGufScOhWmx41QOPXs2CrrT8xavQQAULjOVuXbgkbaQbpiiy5Skd1wNc9D0qlsDjQSuHWVUDK1poj1IciwhBkzufUfr%2B7WSBkI2dd4GcmexkCEorb%2BB6XHSZ%2BRcykIjvtefsnB%2FImDFhNg%2BLgnRYj1XqvIYUNk530%2BEod6ov%2FJAvCRBuoIboqSCuilJ8e%2BBJ4ByLfEDK1ETsRmXyIlCZbEH7XI4YiwBT06r7j%2BLW7yf%2FPub9o7UrEpev6ys9ePSJ78UGgD1hyDpylAxX5wIahycqHfku1v5qzj6nRbz3ORu7IwrK%2FBwgY6pgGAQgswHELsz8Y1yC4SN2P4JGVO1%2BdSNZjSs7K2xZWp82qE64UgH6bmMImvBfZ2qTDkc6VZMbWnnJp0hnh1GJVcYOzxy8G6ZOtXM3roNzsmRYIqWkVRIDO8%2Bz4sDTGGWYjUYkIS%2BJQs1zt9lrBOGQEdT9H%2FuMk00JFlNkQ%2BecPceCUoUHKPdkWqtQckU00CfMjSv0FM6CbkyCkyS72BvtblMs%2Bp82pb&X-Amz-Signature=3f04991a340d26b8882d7a291308a0ad958bee326e69e4db35820aec5574f43d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBM26A6M%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T190657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIDYMaJ6PYa16bsUXJ%2BR1DEMPKcKDRPWmgJCNTatzUdTeAiB%2BZg4C7FSnrdFxlCulmJFx6cjvMI3jh3IliHsd3NhKAir%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMWl6sMGE1qxQGVz0xKtwDPXoiOr2sx8wQBeTZSDay89mZNmp3FBTC%2F3Scmi6MEUeNX3uAe4RHZGTUr%2FA2qSN3rjiIYdxPS6vHefdgjtax6nmUejTBZxmaLB249heCLa1%2BFnVj69UwPT5LMsB5VGrbayMeHlZ1uvqGwZ5lfHNJ08hA31zw8bfSrboILB0uLHxn9t88M1bGGNyM9JZ0Yph%2F4Xy3CKkR%2FiVjiMm%2F6MAXeDYQGVYXkzlmz8RBuvaznA2vx3%2BLrw0BGKFZ55nj07xI1GSpCQTbajt0mUfaUt4RaSO9oRLocVR8IFhwgkVYDfiDoANQmrtUMGqzhVMW2%2BGyOhW4rx8E5yZn%2FRX087WrUPuZNs%2BoMkuxYV28jKovgS0M%2FXxfbsYVaFPTLmDj7mG%2BfthqmyUAkMcorszC0J%2Fh6myH7cbr4mth8Xj0zgBfEdbFZ9yLUdLwj%2F2LX9bMVayWtrAWEhDYJLLwJsExNnjsrsbNVpY3ZQZvlieEZDjLyvGUKl9hNVCY1F19hOqzHV1x5HzbNprhXIdDSSAnv8gTgpiYzulxkyRVw66y75Oecdjig%2FyAFa6ZdWudfUXYja60XVqome2UIl%2F4C%2FcvGMfDNt%2BLOSOkFNYIo5uaUeSGyFEVropnIkKE2PTDCuAwuq%2FBwgY6pgHO4QeW0Pk9C4CA8HOFnxyovkevsaUgyOslmJHLZXksTDLGe1xOL%2BwPYXMKnA43MlaEeqo62FQtkQjFcL0p7luvJoY4DfDzRPVwMFJR9F3rGEz4mY8wNTA6Esy6lMN3hkgOGrJrh5ZeEi420hEWiMFMptTvrYGJl3tM36zgXu0h7xVYF2bMdlWxxjwIejdQmebtfQHEoKqAz%2FTgHb92Mq25rQPS%2FHtU&X-Amz-Signature=71fe25013f24a1742353d65b6dd7e420bafced62000216495744831ffa0df837&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665S5VM4XC%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T190657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQDIsLKTXqqOl7VtkFTWEEYcfVe6huiivvnZEQrg37mWsQIhAIv4LQhKsPgWd9IMkbUDI91%2B3is2ABC7C5XlS%2BIG3vMAKv8DCGMQABoMNjM3NDIzMTgzODA1IgxuaHxIXqJEFpdyo%2Foq3AM90cKbApYT7piQUQ%2Bz1CzQYkirz5ZwIT1EJ6fJK134LouccJFVxLiUVX%2FAiMcufT%2BwUUWKRZirTAkMor5UL5kfYQ5MN6ynOjxR5R8s7ZGCGHtJpDzbYeU7ERYtAbra1%2FHb4Yj9%2BUDoyjsuNBG1Pyvp50eWDluDMaxJpI6C8CadsS1hCmT8qoinH9FZf3tFNrakw02u6zNQ%2F0iZsM3E%2BKKslTun74RxgNKV8K0Vmq9scnpFxZ6Ww%2FvDjDFX7Mbsn%2FBQhPl7YPKrJ17ucNILjCHJ9KPiri9rGe%2BW2wvKvf1OZysVlYUWlNIsCRSk4bJi3V5Q%2FJ0Ql0WNTj57N6Ze0dM4BtfpIs1lzD9DCsr5g%2FDm5YF1I5Lfuvb99ZhkvR6cvoUFyuKB8iKtBvSyjgWd6tO3DuNS2Vfgz5Fnljw6%2FfP3x218QY6k7OTB31Loq%2B2yFK5kHPkcPEkQFpSwRti1qJwHdBTHl%2Be74nJjuaCpe6661G0OjWHKiPElYpC6otgswwwNrtjpXnNe%2BJoU1R26wf%2F%2BCnso8c6jjZhGNggVtty8tPxbXooSF23AjFs%2BCGdicV1DUCPaO1fVyErYiFwzvHmTXgpeLyEFk0Raqys2hNBEhKlut0Rt6aDa6FaBDzC1r8HCBjqkAfXSsC%2FQQcLRkzoQSchJasW9%2B70JkFaGkzFlolOxVnW6UbL9lYShN3agQRpi0SrbP8ofjcjQ6n7yR5na4chGKgDqe%2FFnYVqzG9S5KQ3h4FT7Q60weCfHQ%2BRShZFXSTnbn8B6Kmzo%2B7yHih2H7R78dp8dm34C8FVmpTT2lfhp3Mi4EJwSNq7TDfejHf4rG3lMxEoaEnF0TRfW5IFVn5i2wO6u3f9b&X-Amz-Signature=3928233bccefe656c5ad9b8985e4e092537146441a0bfc02d0929b8fccb246a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAGDAF3H%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T190656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIFAhueisxc3L20Fht5m1%2FP%2BvKRRRhA1BMk8X51BuMIzaAiB0UWGsgn0fMwU4gATAGDAJPJOoEXWwofrFLQ4IGh17Bir%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIM%2Bwfnk9mo1Z7s0Mg1KtwDiH3T6gOUmC3s4IeV68Mf7qWqyWpH5bBy7KspHWFtuyozggjtxpcpk6jD%2BSVuEk9Pf%2B8rVRREV3v8e95f%2BdnXKMcvBzKR%2FRe7c13ULn%2FH%2FN41zUhRADV0%2FSGEop0Cpujxk8Gvhf1sFn2RAnwJZbisP788pGvZEze5HaRax6cBPky6yggtABb%2BdbDCpH%2FWDWQG%2FhvknJ80rwbW3DYgTODJPJNq%2FVoIj%2FDCAwWcY8QvIpJOWS9v1Uz3q5fDDlNVGOtl%2FgTfI5xHTmSUbhubcLL3WoZMTyoUUuQ3wFLLKDc3cJolPAqzwWu1WhUtGCs6rklFT2RC4pBko%2BafrISGufScOhWmx41QOPXs2CrrT8xavQQAULjOVuXbgkbaQbpiiy5Skd1wNc9D0qlsDjQSuHWVUDK1poj1IciwhBkzufUfr%2B7WSBkI2dd4GcmexkCEorb%2BB6XHSZ%2BRcykIjvtefsnB%2FImDFhNg%2BLgnRYj1XqvIYUNk530%2BEod6ov%2FJAvCRBuoIboqSCuilJ8e%2BBJ4ByLfEDK1ETsRmXyIlCZbEH7XI4YiwBT06r7j%2BLW7yf%2FPub9o7UrEpev6ys9ePSJ78UGgD1hyDpylAxX5wIahycqHfku1v5qzj6nRbz3ORu7IwrK%2FBwgY6pgGAQgswHELsz8Y1yC4SN2P4JGVO1%2BdSNZjSs7K2xZWp82qE64UgH6bmMImvBfZ2qTDkc6VZMbWnnJp0hnh1GJVcYOzxy8G6ZOtXM3roNzsmRYIqWkVRIDO8%2Bz4sDTGGWYjUYkIS%2BJQs1zt9lrBOGQEdT9H%2FuMk00JFlNkQ%2BecPceCUoUHKPdkWqtQckU00CfMjSv0FM6CbkyCkyS72BvtblMs%2Bp82pb&X-Amz-Signature=e4cb4851f53351c75e5a33b052dabc253e9d3c4e8f34f9f911cc29333f37f56d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
