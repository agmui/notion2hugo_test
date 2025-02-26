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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YHIHYNW%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T041025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIBqvjiCQbY7kxL3D3Vj%2FjQUp8L3qPXD%2BLLBrAu4jrfsEAiBIDgaa8xTDdUAmydtxIjW%2F8zi3NE1LrOrEglILz0remyr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMjaWFBkzZxREWfFQFKtwDwtsHHb0IkuIkgSqtMJlVNfAVdAwy5wtr6C9KgJz2HJy46AUsmeGQJGVIANgqfs8Ww5Np71395lOO4qlPWspIbFusksPw9YxXgQQzFhEDstBTKjLQ657fLGvvheBG4CxfB%2FGTwwejWPYEggowcckeqLcRJ9%2FDKssSQYw1eX65Xn5mPowHeojfmjWKtuzO9GlCDDSvjLuk8tDoFoeK7vgyTtR6umCv7xbiiecEw5DLmtJvHuJQZfHsDyJWHyxEjOJpZXrpA3PI2OmN5zZe40B8cNCA9xeaL5Zrl9W9bIhoD7LVPrZ7jZBYiyuAbOQ2xbxD%2BvuzkvVcQnUM4tOTUiAkiFuLWZbf3iknV673RCo5eBIPPIsDDIh8VOa%2F0GS7XCGVlsVTEBXgqcmsyED38RB5m5eL%2FV9pZQ%2B90aLySqT%2B8QknnR%2FBYMhRJBYTZU1vZ0u3fAYA2GCIj9lAMGT17HUolfx0xFKwKQhxc%2F30PUJIjFIXFzJz1i96LisoVPmHykdEWNBkfIn%2FGaUjCXcX5TYnQt1wxCgW3CD6lySWYUMpQeYB4tL45bWxyHG914no8C89UtZIPAdRwplIcxIpVBx%2Fb7%2BzxNAyTo6duQJYSDhOM2W6qQC3MSiNC4qd8lgw6bz5vQY6pgElCiy6MPGW8J5GaCiQx4m6hcMPWjCI183%2FwLMzkVqOHwfDrwjcSAuRZkyemL%2F%2B2aMyy%2BkGqr%2F0BRd%2FVwVEShRVHCjlzzygDrVdo0Cu4WYAOr2NphiGUKgBVa2J2LDaW1HQnSCtihn8IP%2FPjEz%2BH9FWNbcv00aveygDg%2FouHNLCeoxpBhUtRo4uG21oI8ug5w8y7giJWxCzrJjPBgzTtwZz7oLoWc67&X-Amz-Signature=b1b0f74882cde801edd88e68cf95d4cf54b467ca136c9095286e6d2dd3a6ad2f&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YHIHYNW%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T041025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIBqvjiCQbY7kxL3D3Vj%2FjQUp8L3qPXD%2BLLBrAu4jrfsEAiBIDgaa8xTDdUAmydtxIjW%2F8zi3NE1LrOrEglILz0remyr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMjaWFBkzZxREWfFQFKtwDwtsHHb0IkuIkgSqtMJlVNfAVdAwy5wtr6C9KgJz2HJy46AUsmeGQJGVIANgqfs8Ww5Np71395lOO4qlPWspIbFusksPw9YxXgQQzFhEDstBTKjLQ657fLGvvheBG4CxfB%2FGTwwejWPYEggowcckeqLcRJ9%2FDKssSQYw1eX65Xn5mPowHeojfmjWKtuzO9GlCDDSvjLuk8tDoFoeK7vgyTtR6umCv7xbiiecEw5DLmtJvHuJQZfHsDyJWHyxEjOJpZXrpA3PI2OmN5zZe40B8cNCA9xeaL5Zrl9W9bIhoD7LVPrZ7jZBYiyuAbOQ2xbxD%2BvuzkvVcQnUM4tOTUiAkiFuLWZbf3iknV673RCo5eBIPPIsDDIh8VOa%2F0GS7XCGVlsVTEBXgqcmsyED38RB5m5eL%2FV9pZQ%2B90aLySqT%2B8QknnR%2FBYMhRJBYTZU1vZ0u3fAYA2GCIj9lAMGT17HUolfx0xFKwKQhxc%2F30PUJIjFIXFzJz1i96LisoVPmHykdEWNBkfIn%2FGaUjCXcX5TYnQt1wxCgW3CD6lySWYUMpQeYB4tL45bWxyHG914no8C89UtZIPAdRwplIcxIpVBx%2Fb7%2BzxNAyTo6duQJYSDhOM2W6qQC3MSiNC4qd8lgw6bz5vQY6pgElCiy6MPGW8J5GaCiQx4m6hcMPWjCI183%2FwLMzkVqOHwfDrwjcSAuRZkyemL%2F%2B2aMyy%2BkGqr%2F0BRd%2FVwVEShRVHCjlzzygDrVdo0Cu4WYAOr2NphiGUKgBVa2J2LDaW1HQnSCtihn8IP%2FPjEz%2BH9FWNbcv00aveygDg%2FouHNLCeoxpBhUtRo4uG21oI8ug5w8y7giJWxCzrJjPBgzTtwZz7oLoWc67&X-Amz-Signature=47ece725e4b052c7e32e0d01a50301e4745ef69d815da820ae29977e72918bd1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXAZSPY2%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T041028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIEWB9O4HM3r0BjvF2th4L3Zg13K8YkQv6QjLg8qngg5wAiEA3n04x6wMjeGLPANtOQWfPfa1FMYaYsu6aShMqOktQ%2BEq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDMZ6OYMSO46dvhfUPyrcAzuzEBum%2FRC3%2F7lhNj2Y9v7vzDhVVBmrgVS%2BNvFta2bDsguG0%2BOJCefDoxj%2BM26lqfdIDv06S8ZCX%2BO%2B%2BENmVZaki73KlPA4nLaok6HAOPxqDAJVjI4%2B08p4dsSPl%2FIDCpa3%2BqGI5ehOlv12NjkvtWfhxS3vbP4B21o%2FrvOVR4hBx19xXmq5xjbys1N%2FG0xz6nGId34n809YO40rcirwbZ84Bc9OQpCvaPC7If1HXWyNeTpaWI8CUOk%2BniWfptH60I2bRoUU0B3scqrfZk2E%2BXc6gZSsEORHZ1xuaPsWYSdm5%2FfVxkOuy1pGzih9gOVZvRvboB8WGt6PbtHr7HWQFujuptvGm%2F3KP2TEIyI1ynSH2OYQJiWmDqYbA49qnNO1fifnN1OQAFBZYTu7IalQ04TVSinLyP7jJ2tizaujMej%2FQkV9xmZIJBykvw7GI%2FQpnfUHOqWj7Qk5QSiK9KDvzawZuTvGP4c2l78%2BzZsOk5xmps1PlqnwLhTcE3gZ1pn5TRdnvvBCokHeGchB%2F0E5GWWaFlSsBWTx3ysq6oKZmqgpOiVC5wQVU2qpXVlaMTQqr82qm8IBtCph3eeCRezmntVg1gt11V5nmqpxGw89jVHDYvauM%2BxLmIdazyBaMK%2B9%2Bb0GOqUB038rzrQpsYj40NioP%2FIL173hkO43ENJVlaufNfSCLpwzUHjuUTRR75Ka1ekZ2FT9kXtK1UEAd7DCLFSB2BWVe5tsU%2BeTYj1Bp8IgHRGTgsQG6L7rMdW3T27qXTQNHZ7LK0g9mAW9oDdMEFb5iv5vptqYmbX072Q8oOMWCZ5Jhz85abP8h2EP6DJ3BB11gmflvZaTnzCOYTO4wy%2B4ZkIUGALNtGLA&X-Amz-Signature=9bd839fdca30644c563c9776d719e2dc754b691d479ac5d2530632c1537d6504&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642GSDD73%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T041029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIBXY%2FTNOgxwy4i4klWaoy8ofa4LdM%2BpZLCYyeun8MbfUAiEA49MY3HM57wZJkHYYftmaw%2BYIRtEtw3ZAU%2BZ611NWI0Yq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDOehrtZ4K31wp1GRRyrcAwWCD60ZyhslPUAKgyV3D3dsFh60TbpTyDjNNeFVtarn6aMYlgo2CkvZOUlKVXrsf9eAphLmh%2FyN3W1xutR7G6vIIYjSnYqEABbuGuDuJnOSrbVWPi13Pxno197sz1lv8bcPectqRiGcbx33D9atjgtoVbdRv8m1QzP%2BSa48EF4GDw%2FA%2BEJIWgFiW5La5fsWMHALHHHHM3OapYynPUyVLxVMKOO4gQOU4QadMPPbPHXoGAEKMeFMp7EFq1AlYCHzsHUfhNURq83%2FTHlr4IVghAzGG1Zu8hHzIpwarJEpwrobZVu%2BRYV7cdD7N6oUuEAmfHptq3DqN83OBs%2FlnRBflJyYjPOploWEU6JY29vdFHLDErK0iRvg1l8xucuj0S%2FBe0KoHpNMWpWY8gxiHuLfwklcAX%2FwXgcwX6sP45VTd3lQNl%2F1iZ1zTfvnAoiXElUoXDrAajov%2Bp5bi7wBzRavags7%2FDymVYAQEbGkLTyvX21GxaH7uowVJzKPRaUSBWnA9OsPo01y3TD1LBLgAwoI1OxRLzgIEHe2J1c7gYw9rKsXfUo5z7qicsU%2Bga4UXaROGs%2F3QWkmptVBoXwjL94iq5rvW8l0ijfsuNVGJSGTGc4QVRPc4Hf5Yis9YUnqMPG8%2Bb0GOqUBCpdEtoVZIfDA80V9hkQbexPcBNrEqUJON5v9sKMiR5%2F9a%2F3o9jvP3hCmWF0I%2Fv61EBl7tZX1qJKosn019J7DDs8wDaPX80NVs7WZ%2BgNWb44vAsry0a6la83NioaGq4S7EkURpJBWf9nxCNIsE3YuPYVs%2B22SrAAx2eJiQxAIhMpWV7%2BWz3Sccu16P70FbWriCcgto8VbAKOyGRxe2X1h9CirjmiA&X-Amz-Signature=b9b89ac58547eccbce853309dcad5011e913ebe80145dd76dfa80ed9ce41da28&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YHIHYNW%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T041025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIBqvjiCQbY7kxL3D3Vj%2FjQUp8L3qPXD%2BLLBrAu4jrfsEAiBIDgaa8xTDdUAmydtxIjW%2F8zi3NE1LrOrEglILz0remyr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMjaWFBkzZxREWfFQFKtwDwtsHHb0IkuIkgSqtMJlVNfAVdAwy5wtr6C9KgJz2HJy46AUsmeGQJGVIANgqfs8Ww5Np71395lOO4qlPWspIbFusksPw9YxXgQQzFhEDstBTKjLQ657fLGvvheBG4CxfB%2FGTwwejWPYEggowcckeqLcRJ9%2FDKssSQYw1eX65Xn5mPowHeojfmjWKtuzO9GlCDDSvjLuk8tDoFoeK7vgyTtR6umCv7xbiiecEw5DLmtJvHuJQZfHsDyJWHyxEjOJpZXrpA3PI2OmN5zZe40B8cNCA9xeaL5Zrl9W9bIhoD7LVPrZ7jZBYiyuAbOQ2xbxD%2BvuzkvVcQnUM4tOTUiAkiFuLWZbf3iknV673RCo5eBIPPIsDDIh8VOa%2F0GS7XCGVlsVTEBXgqcmsyED38RB5m5eL%2FV9pZQ%2B90aLySqT%2B8QknnR%2FBYMhRJBYTZU1vZ0u3fAYA2GCIj9lAMGT17HUolfx0xFKwKQhxc%2F30PUJIjFIXFzJz1i96LisoVPmHykdEWNBkfIn%2FGaUjCXcX5TYnQt1wxCgW3CD6lySWYUMpQeYB4tL45bWxyHG914no8C89UtZIPAdRwplIcxIpVBx%2Fb7%2BzxNAyTo6duQJYSDhOM2W6qQC3MSiNC4qd8lgw6bz5vQY6pgElCiy6MPGW8J5GaCiQx4m6hcMPWjCI183%2FwLMzkVqOHwfDrwjcSAuRZkyemL%2F%2B2aMyy%2BkGqr%2F0BRd%2FVwVEShRVHCjlzzygDrVdo0Cu4WYAOr2NphiGUKgBVa2J2LDaW1HQnSCtihn8IP%2FPjEz%2BH9FWNbcv00aveygDg%2FouHNLCeoxpBhUtRo4uG21oI8ug5w8y7giJWxCzrJjPBgzTtwZz7oLoWc67&X-Amz-Signature=ffa6ed9f21a04d80d6a293f83ab67e564747816fb0ec4795e0e78e343fab468b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
