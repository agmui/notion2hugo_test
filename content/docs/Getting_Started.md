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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZDSSJZK%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T160958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5Yb3%2FBUpGIgIq%2F1oyR5MxoEe8f%2BBQSwoKEyUnKBHFEwIhAJ5stE4n292QeBsvbt2wxZQdlMkiydT9YNzNqrh5zPFIKv8DCEkQABoMNjM3NDIzMTgzODA1IgxA%2BmIs81oMW2qA7g4q3ANEofCpSAmBDK0fxv7KMsmHSE0pfBWVNKvUFXGzQjEX5QeMP9oLvtr6T8CvLdMSADXnC%2FetAqKiY2jNGe2tJaUAkzNqauECo48cuAACyfsZSK7pt6APVLpkvZlWcq%2BgtD9NxbXHbfhKPisxfXHGnQvM9zGErUza%2BMnB0WLaTNJL0aDKsue9kTU9cpKLNiombRoX4z6cYYmyVI4ioUbH5pHNdX9oYYNmA6Hh5hs2kTYkZ3T%2FML5mqNuFfaEuIoXd%2F0Pl0dEqMMnMPkbbUMDeXwkH9COUPgfvJF5FIdTcy2i0dv83PMxBZGao2NdPmyHRLfzLEqBtCYesnDyjy4NWrfPalnXhf7YoZiyfvulI%2Fn0KIE%2BpJ%2FBeUIiUvoqlbbKx2phte%2B0JEKY1k65fISSODJ2zyEW58rMNYm%2BNGDDoj3d%2F%2Blpw6LAsFfe5RBp94fRo8Kxdrr8hSnjNQQeROdwLYYp8NXm78agAjV3aP9bOVBVgUsOdB7%2BZDR1qazH7EcwsK0Pwqyl2M63ao%2B7fUgIyznJsY09P36TRZvmkwbj7Npx9PZSyO7VvGSkCVGWT3H%2Bw89S7j6UhGJRgDMbFr%2F0TNYdd7Z8BTJ5hB1MpBxDkBoT%2B9%2BHyNSRsIszOuyTkTTCTtJ3BBjqkARF1BJqNyMZzN1mczxUIfRpoxWL9Tsw4gFJcgZW%2BqcuonDdA384Pf6yaBtalbT%2BpyBSkqrmCIz1JRQych6hTZqdKwfq4vsCuVrbrrsF%2Fwx9uSS2QX81W52ouXuDgYecMve%2BrV6A3Q0f75joyqg5cFK1vlc0Z2IzWJhohT3CkH%2F8x2b3dJhKDIN9Q%2FDJ2ytDHJinIwWzWYrWV6fIMMJz6rN%2FnpvFL&X-Amz-Signature=48ff1dc1fb6fe44fccabfe25e680fdac7e6611758b442069dcddfe98fdf2b012&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZDSSJZK%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T160958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5Yb3%2FBUpGIgIq%2F1oyR5MxoEe8f%2BBQSwoKEyUnKBHFEwIhAJ5stE4n292QeBsvbt2wxZQdlMkiydT9YNzNqrh5zPFIKv8DCEkQABoMNjM3NDIzMTgzODA1IgxA%2BmIs81oMW2qA7g4q3ANEofCpSAmBDK0fxv7KMsmHSE0pfBWVNKvUFXGzQjEX5QeMP9oLvtr6T8CvLdMSADXnC%2FetAqKiY2jNGe2tJaUAkzNqauECo48cuAACyfsZSK7pt6APVLpkvZlWcq%2BgtD9NxbXHbfhKPisxfXHGnQvM9zGErUza%2BMnB0WLaTNJL0aDKsue9kTU9cpKLNiombRoX4z6cYYmyVI4ioUbH5pHNdX9oYYNmA6Hh5hs2kTYkZ3T%2FML5mqNuFfaEuIoXd%2F0Pl0dEqMMnMPkbbUMDeXwkH9COUPgfvJF5FIdTcy2i0dv83PMxBZGao2NdPmyHRLfzLEqBtCYesnDyjy4NWrfPalnXhf7YoZiyfvulI%2Fn0KIE%2BpJ%2FBeUIiUvoqlbbKx2phte%2B0JEKY1k65fISSODJ2zyEW58rMNYm%2BNGDDoj3d%2F%2Blpw6LAsFfe5RBp94fRo8Kxdrr8hSnjNQQeROdwLYYp8NXm78agAjV3aP9bOVBVgUsOdB7%2BZDR1qazH7EcwsK0Pwqyl2M63ao%2B7fUgIyznJsY09P36TRZvmkwbj7Npx9PZSyO7VvGSkCVGWT3H%2Bw89S7j6UhGJRgDMbFr%2F0TNYdd7Z8BTJ5hB1MpBxDkBoT%2B9%2BHyNSRsIszOuyTkTTCTtJ3BBjqkARF1BJqNyMZzN1mczxUIfRpoxWL9Tsw4gFJcgZW%2BqcuonDdA384Pf6yaBtalbT%2BpyBSkqrmCIz1JRQych6hTZqdKwfq4vsCuVrbrrsF%2Fwx9uSS2QX81W52ouXuDgYecMve%2BrV6A3Q0f75joyqg5cFK1vlc0Z2IzWJhohT3CkH%2F8x2b3dJhKDIN9Q%2FDJ2ytDHJinIwWzWYrWV6fIMMJz6rN%2FnpvFL&X-Amz-Signature=5db944039bd5f2ad5e55205904d28bfb63eb19d9abc6057338a1faa8f28d8937&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZDSSJZK%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T160958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5Yb3%2FBUpGIgIq%2F1oyR5MxoEe8f%2BBQSwoKEyUnKBHFEwIhAJ5stE4n292QeBsvbt2wxZQdlMkiydT9YNzNqrh5zPFIKv8DCEkQABoMNjM3NDIzMTgzODA1IgxA%2BmIs81oMW2qA7g4q3ANEofCpSAmBDK0fxv7KMsmHSE0pfBWVNKvUFXGzQjEX5QeMP9oLvtr6T8CvLdMSADXnC%2FetAqKiY2jNGe2tJaUAkzNqauECo48cuAACyfsZSK7pt6APVLpkvZlWcq%2BgtD9NxbXHbfhKPisxfXHGnQvM9zGErUza%2BMnB0WLaTNJL0aDKsue9kTU9cpKLNiombRoX4z6cYYmyVI4ioUbH5pHNdX9oYYNmA6Hh5hs2kTYkZ3T%2FML5mqNuFfaEuIoXd%2F0Pl0dEqMMnMPkbbUMDeXwkH9COUPgfvJF5FIdTcy2i0dv83PMxBZGao2NdPmyHRLfzLEqBtCYesnDyjy4NWrfPalnXhf7YoZiyfvulI%2Fn0KIE%2BpJ%2FBeUIiUvoqlbbKx2phte%2B0JEKY1k65fISSODJ2zyEW58rMNYm%2BNGDDoj3d%2F%2Blpw6LAsFfe5RBp94fRo8Kxdrr8hSnjNQQeROdwLYYp8NXm78agAjV3aP9bOVBVgUsOdB7%2BZDR1qazH7EcwsK0Pwqyl2M63ao%2B7fUgIyznJsY09P36TRZvmkwbj7Npx9PZSyO7VvGSkCVGWT3H%2Bw89S7j6UhGJRgDMbFr%2F0TNYdd7Z8BTJ5hB1MpBxDkBoT%2B9%2BHyNSRsIszOuyTkTTCTtJ3BBjqkARF1BJqNyMZzN1mczxUIfRpoxWL9Tsw4gFJcgZW%2BqcuonDdA384Pf6yaBtalbT%2BpyBSkqrmCIz1JRQych6hTZqdKwfq4vsCuVrbrrsF%2Fwx9uSS2QX81W52ouXuDgYecMve%2BrV6A3Q0f75joyqg5cFK1vlc0Z2IzWJhohT3CkH%2F8x2b3dJhKDIN9Q%2FDJ2ytDHJinIwWzWYrWV6fIMMJz6rN%2FnpvFL&X-Amz-Signature=f579f394d43febb61f7f1f3d9065533fd3d7a543cb491e3c95742a3a0a465485&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WB4AY2AA%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T161005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChslnL%2FvxmxtpjjLf5KXxtzDUN8bsrh43jS6Q4uWugSwIgWH8zCthiEezUTSprDaBRYL1u5Gnuq%2FXMApGDjudgGyUq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDO6EDaMy5%2B5MxECLBircAww61FfrVnRjyapnLDvyRmXybyGlwA7LZU1Dg9YdYzH9hRlUXn5tcHbZvTurU02y%2FCdG2yAH8Lj2iOlJfuBvCgsAdy%2BaiOJOED4Wd54X2jwtLPeYLAtQGNpdom8AyAC%2BCAZs7eSCj2CwleUMFSoFD%2F5f%2B8v7wPXo7ESPe2Yyw25EpGbEvKZngMyMSlrWkHxd9n%2FQhOP%2FKecfbjujiaWwC6C%2BuBuGLRrO%2BbnXHAq7Ur0UGYfMJ7u0ctJz0a8ISNgaDjQKm2cICAwvJ%2B4ZRwF4zTyYcxEgaepeXkVKdXaw1jYkAmds4j7RneLi3i444cUk29fIHeXdf0s66gCBE%2Bi%2FDe2y%2Ffy6V6YCupIryyPbRDpAcDfE7UTWRM89B3l%2B7XtUqJJtPHBILoI0rctJEG6LQfSqxZpEgO%2BgangANUVX7GCMTacgyiZR%2FdZcdpLiPiCNWN3SaxLXh2%2FRzXzXh3gadtQA01M%2BvSyP4waIhwGR91z25L0TpcVH1p2BdI4zOCEUxZzFd7rvRKxSIUHSUDxvb1wkShrCiLNY1lJgoWo17VufjsOrJ4n8RB945%2Ff4SkvBLnBlUJi3IU1D6Ly3DRAHmTEl9HERwgSuIyNQk%2BcsUhFF9EO5KuPczERPRzLpMN%2B0ncEGOqUBaOVUdDfbfO55b9Pfjwp6o4CfMya1vFeUahUwdWfowe6bdsS%2FNrJiT6HaRdTZjZzgHBIZUrEu1Ml4QnYGB4tNdkliwuMoli%2F%2F6kSDJSYGWuIWcpjJY6dwbWxX0GAetjoMZD8BzvVtZBOw9PARIUwHxzaO%2BpzrHosfkKxVuciR%2Fyt9zXsU3O1umRRFrkeSfmV8sd2NtZwwDXscOed0dbfrjjay5bU%2B&X-Amz-Signature=db6d010cf0b7507939f81eff55ba9bc646cdf6046f1a6e5390d1158cacc77ce7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MTQHNMS%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T161005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrC4cRUmQRZBLLxjy7lj9wYn7tTU9l2%2FRwsRd%2ByW80YwIhAKbpx1wWfAJvtX0dPZjc6UOU1UjoaQD7uiDLIBAQ%2FWKBKv8DCEkQABoMNjM3NDIzMTgzODA1IgwXO8mphCxPhnjpN0Eq3AM2GQ2bOeKLqSjRv%2BoYaurUyghxmTafqshi8f0%2FED%2Bizc%2B14RaodOr2DVGY0C9ljLOSI1b44Sd%2FGf9aUjmT6fMn%2BOGkGxapByuNEE9bHm8kyF89RwK4Vry989XA8WxHtnnOEiAjjQQhNe5GDMXjsmqxU8W5HjCg3jfC7d4jqUTs1c9vEGNsRPYxDK0I3ctQZs30hA5SEWMvY42a%2BrIBFaYKc93xovepxJ4F%2BXwEsw0MZLxcc%2B99rDVPvlElvqN4n6eXhiONqf2ehGjwRDcfk3GXs4mieBkKHUkx8Mht1Td9Wnmr3cbdVAxEMx6vcnpDUZM8fwj0lsMq92CLjn7TqEelg%2FpTXS3C0yxEbC7PMwU3lKRkV6MnyKwGangBppBFgi1AmJ66HHbLYrKXJcguVi%2BAlKmnJy3rbJvx20JgiZyq0omG2CtQdBU4xlMlkMAaRo8PUgreHGURX7Xx8Uz3OmK9EQO19%2Fko15ThEXcNxsnaeMtEu2xvHseegsfKUbf2XfnCj%2FslGBhn7ysQd6LzYesWyZx7Am93kzB%2BcX13N69WQVkheVP2ZPx5pxicNQ%2FjcKRis9GVkaiVH4T61G34Uux4tt1LM9VOo9YnQcD94FMyCkBEzQh7%2B40w7uKB8jCPtJ3BBjqkAfHqkTbsGJDvYsT2fRuxIALzsgu2kxIfDS32q1GTHwshmbHKYaZiQdJkkFTLjBjnrPDb552Lbx02ib6kpbDZjhZtpfr4Q3wUwGNrN5sAEYFJMn57ZR8WupRlxW6PnWtdpa8uM%2BV%2FMtIw4YtekfWqhIOU2Dx%2FNIUaWonDQ4hv9Ckgm%2F2qWoXyP3FxHrGpy4HI6pu3wyuA6Y6ZkYsbfxoo36M0CZ8M&X-Amz-Signature=2e5747448ac90d38ff425219eaf7fac8efbddee58530a00ee7fed36c887ce7d0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZDSSJZK%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T160958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5Yb3%2FBUpGIgIq%2F1oyR5MxoEe8f%2BBQSwoKEyUnKBHFEwIhAJ5stE4n292QeBsvbt2wxZQdlMkiydT9YNzNqrh5zPFIKv8DCEkQABoMNjM3NDIzMTgzODA1IgxA%2BmIs81oMW2qA7g4q3ANEofCpSAmBDK0fxv7KMsmHSE0pfBWVNKvUFXGzQjEX5QeMP9oLvtr6T8CvLdMSADXnC%2FetAqKiY2jNGe2tJaUAkzNqauECo48cuAACyfsZSK7pt6APVLpkvZlWcq%2BgtD9NxbXHbfhKPisxfXHGnQvM9zGErUza%2BMnB0WLaTNJL0aDKsue9kTU9cpKLNiombRoX4z6cYYmyVI4ioUbH5pHNdX9oYYNmA6Hh5hs2kTYkZ3T%2FML5mqNuFfaEuIoXd%2F0Pl0dEqMMnMPkbbUMDeXwkH9COUPgfvJF5FIdTcy2i0dv83PMxBZGao2NdPmyHRLfzLEqBtCYesnDyjy4NWrfPalnXhf7YoZiyfvulI%2Fn0KIE%2BpJ%2FBeUIiUvoqlbbKx2phte%2B0JEKY1k65fISSODJ2zyEW58rMNYm%2BNGDDoj3d%2F%2Blpw6LAsFfe5RBp94fRo8Kxdrr8hSnjNQQeROdwLYYp8NXm78agAjV3aP9bOVBVgUsOdB7%2BZDR1qazH7EcwsK0Pwqyl2M63ao%2B7fUgIyznJsY09P36TRZvmkwbj7Npx9PZSyO7VvGSkCVGWT3H%2Bw89S7j6UhGJRgDMbFr%2F0TNYdd7Z8BTJ5hB1MpBxDkBoT%2B9%2BHyNSRsIszOuyTkTTCTtJ3BBjqkARF1BJqNyMZzN1mczxUIfRpoxWL9Tsw4gFJcgZW%2BqcuonDdA384Pf6yaBtalbT%2BpyBSkqrmCIz1JRQych6hTZqdKwfq4vsCuVrbrrsF%2Fwx9uSS2QX81W52ouXuDgYecMve%2BrV6A3Q0f75joyqg5cFK1vlc0Z2IzWJhohT3CkH%2F8x2b3dJhKDIN9Q%2FDJ2ytDHJinIwWzWYrWV6fIMMJz6rN%2FnpvFL&X-Amz-Signature=e7ecf6218dacd40d01d34e929f19c34aebeb2e64aba17c8aaa8f91c2d65246b4&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
