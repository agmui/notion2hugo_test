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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKR5TOMW%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T081311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCICLdbk99%2FCWWyP8UlPQl4Cel%2BtjnclaHUCb3hzRWTD7tAiEAvT%2BGoKRosXJrMxpbeGMay9%2Fnaj5grxbzY0JaPviGmwoq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDEypMTCPiNnv7wBA6SrcA9t9%2Fr%2FJockchzryI%2BJoMzv2sHdz2hfKm%2BxzOaZwswnkrvCW0HYD6gff8cDo5sc%2FuCDFU9SPe0%2FBUq7w%2Bu6NffFcw9Gtv5tqA9ORTAF9%2BBtKjt4aYK1FwQndkSbnvSqgMhtNW2xbClNkVO1u0mJiYA8XNGJwzT2bZtnMQi3DVRm%2BiBl18yJV%2FviYu1RhgqXWO%2Fsm4oKX7xJowR%2FpTknvEKusZOcKbwgwP90zBM60iWMVbtdIwL9qmt%2F9kRxSzkDAMUbxwMTWhzjm7A9uuVDgjJeVUoMMQAmwLHa4QIyHC%2Big%2B5B6UaQHALWFPiFEE1loXkgLZjR2xPeiY%2B%2B4olukAH6T57pdMB%2FnGNLZCnsHTRl7MS7DZn67rbcNf92RHhhd6cP%2Fv8Bz4lCPEzE6jw6lZtH4dFWDaZ%2BeVk14eaj20kCjO24Pfr8yxKaa9rzJ6faQnTXtFg%2F%2FY1H3jzJIdXFBQNJrUuKPYlqqs%2BIczTj1%2Fi5XuJwc52%2FlXxjGO9ov2kL3MdkfLMEYk9Ns2XHmVBrsjGctIaThcsidwCw5xzd%2BjPj%2FZgR5HS2GV%2Frc%2FPQIWx%2BRiDGtwIUDgU9L93bDN1yY3SYibVU0Jpr9UYPHVLuGkIEPSvTN%2FQKnc%2FxNne1AMPqQ3cMGOqUBzK6Uy%2FH679O3IV%2FSaU6%2BTrM4Zuf0JToiGxUkv%2BrXJllKwhYxPV4qdzlmVZQGbvregLT5mbcHFnbkfFpB99QOgypBk1slS6N9%2F%2Fxbhd60RXOTr%2Fb6wS7YASB9Eqp8fW7eKmtyW0LyrCmTDFPHn7YQv8d61TmX%2Bjp0KvuGiB9go0X4v9Sf4ol9%2FHkNbebN3O7PqxjFyIs9tLfxJFhAV%2Fg6zsTUUMMH&X-Amz-Signature=eac9043a7c73c4aa84ac1385e953b515f6e4a35ec58c9621a98643a6f3f5f7ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKR5TOMW%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T081311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCICLdbk99%2FCWWyP8UlPQl4Cel%2BtjnclaHUCb3hzRWTD7tAiEAvT%2BGoKRosXJrMxpbeGMay9%2Fnaj5grxbzY0JaPviGmwoq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDEypMTCPiNnv7wBA6SrcA9t9%2Fr%2FJockchzryI%2BJoMzv2sHdz2hfKm%2BxzOaZwswnkrvCW0HYD6gff8cDo5sc%2FuCDFU9SPe0%2FBUq7w%2Bu6NffFcw9Gtv5tqA9ORTAF9%2BBtKjt4aYK1FwQndkSbnvSqgMhtNW2xbClNkVO1u0mJiYA8XNGJwzT2bZtnMQi3DVRm%2BiBl18yJV%2FviYu1RhgqXWO%2Fsm4oKX7xJowR%2FpTknvEKusZOcKbwgwP90zBM60iWMVbtdIwL9qmt%2F9kRxSzkDAMUbxwMTWhzjm7A9uuVDgjJeVUoMMQAmwLHa4QIyHC%2Big%2B5B6UaQHALWFPiFEE1loXkgLZjR2xPeiY%2B%2B4olukAH6T57pdMB%2FnGNLZCnsHTRl7MS7DZn67rbcNf92RHhhd6cP%2Fv8Bz4lCPEzE6jw6lZtH4dFWDaZ%2BeVk14eaj20kCjO24Pfr8yxKaa9rzJ6faQnTXtFg%2F%2FY1H3jzJIdXFBQNJrUuKPYlqqs%2BIczTj1%2Fi5XuJwc52%2FlXxjGO9ov2kL3MdkfLMEYk9Ns2XHmVBrsjGctIaThcsidwCw5xzd%2BjPj%2FZgR5HS2GV%2Frc%2FPQIWx%2BRiDGtwIUDgU9L93bDN1yY3SYibVU0Jpr9UYPHVLuGkIEPSvTN%2FQKnc%2FxNne1AMPqQ3cMGOqUBzK6Uy%2FH679O3IV%2FSaU6%2BTrM4Zuf0JToiGxUkv%2BrXJllKwhYxPV4qdzlmVZQGbvregLT5mbcHFnbkfFpB99QOgypBk1slS6N9%2F%2Fxbhd60RXOTr%2Fb6wS7YASB9Eqp8fW7eKmtyW0LyrCmTDFPHn7YQv8d61TmX%2Bjp0KvuGiB9go0X4v9Sf4ol9%2FHkNbebN3O7PqxjFyIs9tLfxJFhAV%2Fg6zsTUUMMH&X-Amz-Signature=26d7db1df454cc7186bd6bc325eacd7f8c337e05321c4318e4e43e6521e6d9e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKR5TOMW%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T081311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCICLdbk99%2FCWWyP8UlPQl4Cel%2BtjnclaHUCb3hzRWTD7tAiEAvT%2BGoKRosXJrMxpbeGMay9%2Fnaj5grxbzY0JaPviGmwoq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDEypMTCPiNnv7wBA6SrcA9t9%2Fr%2FJockchzryI%2BJoMzv2sHdz2hfKm%2BxzOaZwswnkrvCW0HYD6gff8cDo5sc%2FuCDFU9SPe0%2FBUq7w%2Bu6NffFcw9Gtv5tqA9ORTAF9%2BBtKjt4aYK1FwQndkSbnvSqgMhtNW2xbClNkVO1u0mJiYA8XNGJwzT2bZtnMQi3DVRm%2BiBl18yJV%2FviYu1RhgqXWO%2Fsm4oKX7xJowR%2FpTknvEKusZOcKbwgwP90zBM60iWMVbtdIwL9qmt%2F9kRxSzkDAMUbxwMTWhzjm7A9uuVDgjJeVUoMMQAmwLHa4QIyHC%2Big%2B5B6UaQHALWFPiFEE1loXkgLZjR2xPeiY%2B%2B4olukAH6T57pdMB%2FnGNLZCnsHTRl7MS7DZn67rbcNf92RHhhd6cP%2Fv8Bz4lCPEzE6jw6lZtH4dFWDaZ%2BeVk14eaj20kCjO24Pfr8yxKaa9rzJ6faQnTXtFg%2F%2FY1H3jzJIdXFBQNJrUuKPYlqqs%2BIczTj1%2Fi5XuJwc52%2FlXxjGO9ov2kL3MdkfLMEYk9Ns2XHmVBrsjGctIaThcsidwCw5xzd%2BjPj%2FZgR5HS2GV%2Frc%2FPQIWx%2BRiDGtwIUDgU9L93bDN1yY3SYibVU0Jpr9UYPHVLuGkIEPSvTN%2FQKnc%2FxNne1AMPqQ3cMGOqUBzK6Uy%2FH679O3IV%2FSaU6%2BTrM4Zuf0JToiGxUkv%2BrXJllKwhYxPV4qdzlmVZQGbvregLT5mbcHFnbkfFpB99QOgypBk1slS6N9%2F%2Fxbhd60RXOTr%2Fb6wS7YASB9Eqp8fW7eKmtyW0LyrCmTDFPHn7YQv8d61TmX%2Bjp0KvuGiB9go0X4v9Sf4ol9%2FHkNbebN3O7PqxjFyIs9tLfxJFhAV%2Fg6zsTUUMMH&X-Amz-Signature=51b341968607ad755a5b17dd76fe442698ae432dd626e48c4ecbeef8dbe0fc76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUJUIKSY%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T081313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQDrac1yuhf%2FpVkOTav9d1o2rrNKjkbFEDVh5HCxbKn6swIhAP1%2Bah5fw1FAD3KzH7zz%2BjB5%2B1oG6k13vKTmmj7THct2Kv8DCFgQABoMNjM3NDIzMTgzODA1IgyBcD77hPOSmMxQ7Hgq3ANvlJzbjuQUQZcdNwc7kF%2FAKyT58vivw2a6miav7nXC9DWZK04H3kbtUNQRmCAslZQVryWSGoQJvB9vD64RIfnUF4YuMtNpG9UHrbguWWf7XLe1YQvL9sRimd%2FMyS2EkXeZChUBHvBptRSeAh0bvLm2ATsOneOwYLyugNaUE77E%2BJ1ODF%2FVxogdy4hAZIo9BWOk1187jSShrnlcfSsbfKzrOCLUBPFN1ufQAR1xVMoCHXl5ZdWgCNqc%2FyPumA4f%2BxNCIhdEjHCZGHOqMF9ZYigKhhoVFNgu4Q7vOFFdY1FPobjafBwxzb2Jr5YbK5PgrxdFW%2BxO4BTQ1%2FcXDMLuuwHx4474xYIbgJxLFgVSbQS2sJ6JP9u8WWOi6W5dtF%2BzEFe1tnOjXveWTqtiG56cANTLEXIXnSlIMaWDa1Q2og9WoG5KsNz3iMfGauV3lXExjKNxidyw3J2ARF4xcp5GBTSKU%2BteF2VOcU9tSC8VqE3b%2F3MnmeFHYebJgGbXaZbN0CHlTfG82dNAY6e0Sm3FPXb3D9qx9Ug%2BTxnfPZGC1CM8473i03cIJrAjAekHELoIGY%2FZ%2FJ3Nr68T1H0JjtbfuGkFFaZY7%2B21EPYZU0Fkx7Qe%2Bf9heTL8EFjTdl2F7zDnkN3DBjqkAQnjwYtZNaGJ%2B3%2FS3ltlbRryAHEQOYs9qfJuIqMjALNJ89Z8UmWCdhW%2FlJgLm%2BYzPVH0Fv8c9GMkSaliEKCPon83HNwjzN6JcHS2hlKFul5xLuzZQgyPFuLR4ryZ%2FH%2Fq9w%2FPu900Oj2WvhNbVxU04SGjIx7a96ag8poHsL05FgcRzPILnSbxQZLtQta1o5T129%2FAIWyAVNH4C3JPYatJTDnqvzbF&X-Amz-Signature=03a66e603780a95ade1e1c1e5f198ecde722bcd3d80fb23810724435f6d9229b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVHELJKR%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T081314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIEko2P3Lm7XLLbWQy9RWGnigmtr87rYjY0Bg8JMnMuKTAiEAwtK8tbP3e7ScoTjdZ8s8tagcOq8k9exZ7gHeac5oF0Yq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDPbwoz%2BslX6GwPdakSrcAwROkK08kHREEFV5amT1baD5THp84DaGuTL%2FLAkbULZ0t72j4Grprkwqf7vtYzx4p1H%2FbEnxAEwxwXrngdbkHvTIdJ3PBDXd8JcUjpe0Z32hg5wz%2BKJ3Y2QJCClAtHLegX%2BhgkyzNaGMzYKHNvaQqad3iGDzj9MXNueiTcru%2FWfyw7CnCI48CQ0R3guSbjtXdagaqy3Sz7TQaJwmNlTUoc8l12aZTe0tDBCdd1rT26zqaQYRfStPw6pq2up9EPJZcmVQUrrcOiobaqKyC60DPYTMJ63yiB5bUQO%2Bo%2F%2B3TvTArd%2FHIByb%2BdrpGGELjHcgjrYUZ%2FheC%2B68PRlY9vk4Yh8sBtAAhI607h9Pg6QhQVVcZniyMh%2BCPkvSLnalWgcvLpOzaTnzUNHUA%2FWyGE3yM7%2BKEKQTCAWM%2By7kcmCWhbi4x%2BDuyhs%2FCJcTHjKPYl4LtV%2BZF3TXdNVhCl5PQfOTYbRwzLJO6LaQbwoUOwlXxCPD19BuXQPPu4myKt%2FaR%2Fx6F11r%2B02sCZVuHlpSBUx3Ky%2Fux60P8X9CLY6eUVWAY1Vr%2F86i0pzEhrWyojuX1JbH%2FSNeNCfD8hWqQ8E497mEeZTzx5jnu0G9LG2fpdd8lcazR2U8sobO0Vcb1ucVMLq93cMGOqUBOTUZDnowetvCYQYGWXMLe37pHmQ3zUUCN0xVQ0lzHrlDizZJ60oFhx1LAHfmU%2BZ3T3LCR3v2%2BYPOMhhdYo%2FGLcYmeVY3UiFBS36mU%2FzWOGMbmI0MoXb%2FJlfUYaxFNxti4Xwr53YLZWpYGl0OzE%2Fw9jwnzokUo8hU5f%2BE8tln1fGaVzZQmSe3LviqQF4eXU5R0g8NYkY5kvHgRURxARZEoFBr%2FmGs&X-Amz-Signature=43cb6679bd6327ac786eab4e1ebe4f861699277c1d8f73aaf30d7381110dd9f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKR5TOMW%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T081311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCICLdbk99%2FCWWyP8UlPQl4Cel%2BtjnclaHUCb3hzRWTD7tAiEAvT%2BGoKRosXJrMxpbeGMay9%2Fnaj5grxbzY0JaPviGmwoq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDEypMTCPiNnv7wBA6SrcA9t9%2Fr%2FJockchzryI%2BJoMzv2sHdz2hfKm%2BxzOaZwswnkrvCW0HYD6gff8cDo5sc%2FuCDFU9SPe0%2FBUq7w%2Bu6NffFcw9Gtv5tqA9ORTAF9%2BBtKjt4aYK1FwQndkSbnvSqgMhtNW2xbClNkVO1u0mJiYA8XNGJwzT2bZtnMQi3DVRm%2BiBl18yJV%2FviYu1RhgqXWO%2Fsm4oKX7xJowR%2FpTknvEKusZOcKbwgwP90zBM60iWMVbtdIwL9qmt%2F9kRxSzkDAMUbxwMTWhzjm7A9uuVDgjJeVUoMMQAmwLHa4QIyHC%2Big%2B5B6UaQHALWFPiFEE1loXkgLZjR2xPeiY%2B%2B4olukAH6T57pdMB%2FnGNLZCnsHTRl7MS7DZn67rbcNf92RHhhd6cP%2Fv8Bz4lCPEzE6jw6lZtH4dFWDaZ%2BeVk14eaj20kCjO24Pfr8yxKaa9rzJ6faQnTXtFg%2F%2FY1H3jzJIdXFBQNJrUuKPYlqqs%2BIczTj1%2Fi5XuJwc52%2FlXxjGO9ov2kL3MdkfLMEYk9Ns2XHmVBrsjGctIaThcsidwCw5xzd%2BjPj%2FZgR5HS2GV%2Frc%2FPQIWx%2BRiDGtwIUDgU9L93bDN1yY3SYibVU0Jpr9UYPHVLuGkIEPSvTN%2FQKnc%2FxNne1AMPqQ3cMGOqUBzK6Uy%2FH679O3IV%2FSaU6%2BTrM4Zuf0JToiGxUkv%2BrXJllKwhYxPV4qdzlmVZQGbvregLT5mbcHFnbkfFpB99QOgypBk1slS6N9%2F%2Fxbhd60RXOTr%2Fb6wS7YASB9Eqp8fW7eKmtyW0LyrCmTDFPHn7YQv8d61TmX%2Bjp0KvuGiB9go0X4v9Sf4ol9%2FHkNbebN3O7PqxjFyIs9tLfxJFhAV%2Fg6zsTUUMMH&X-Amz-Signature=47683e9ab2adedc54bfb9a7192888bf0d7605939574f8d5d37900a1c017f67ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
