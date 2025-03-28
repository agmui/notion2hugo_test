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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPHB7QTS%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T121411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFK40LbElBdhIDn7ywA9duCcOEiGO%2F6CUa69MG%2BTHVVOAiAPoju1BOMAGqhNq32l6sMlFpfZmpSZkbGbn3%2F%2B1b8%2F0Cr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMGwbFCSteifdeymjKKtwD%2BAavPwRN2Y82g42FdMV2qZTFUVhLZxc7pRwzuX%2FV8%2Bx7wmKm4frfqFzX399zC%2FjtXZTQmfl3xNCtzGAB0VIpU%2BFZf4dy%2BD3s5vLl%2FxcB1L8ko6RYsnj%2F3VYIx7zdLf%2BcAUrpMJn%2F7A0podP9OlnQaRjTBGhBqsUwQvKY%2B0qbVDJ0T8LAlLcckn4VRS9VBOq4va4CfOxt8Hbwns%2FNJGzjH%2Blag7oCb7eTlrItn2cMAYlB18YoUmrCRg1vGcwm3%2BmeuFEGCx8QFjqETqivN5lKbD5Ml%2BPXq%2FUlvh9iUahfGlMZ6Pglo79VlYxLyolBD47yTJ0ZGJu6S3HZl6ggOJ35YNqPnuwi7KLfuDG7lHMv4NwHNd82Wi%2F2K0MqA18TVQiYZ%2FlesQ%2B7MzcDTepmhvPE9IK19yYMCjWCWeWOpTFRYamfIKHRKlnWdVsUyJ7RXXE8Mf4U4Vs8xOZJFGjLlXpo3iALnqNsq2ECQobhpqrLsIE5tl9PrxFZRKIONHIT9iuxXaNscqlpOyXs53jDMKJxTBBPEJrulQmUoXfd6c7qsovGIfzSN%2B0bd1ySHhlG7iq0XMLUwBRgqEVa5D30YppmtkQgAbz1Msn5W%2FJ4FL%2BHO8i7FfgusEadSDjk0tkw15SavwY6pgEEYTzHpNc293HoTuK1P2wA6yTIyChP1qLjdrCUzSm53LxYAZjVLo3nOciyYl%2BZqw%2BzgI6j1sQUA%2FM%2Fmw6zh%2BPnkMkjHUBIoxY3MyW2hxtxfZJ2jaHdFZQAxH02smZ%2FYLgCywyPgROWydPZ0BpZdEWSxyEU6fJ5C8Ds%2FXPK2zT%2BoHrFguBfJYKTVgwddDWv5vTyueilwBDdcS7YsyoA8%2B%2FhfFyGIIeE&X-Amz-Signature=558c0e193c5f91b7cb635bc72f0ed144c45b1e024a7c757ef5c3dc5b5f470971&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPHB7QTS%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T121411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFK40LbElBdhIDn7ywA9duCcOEiGO%2F6CUa69MG%2BTHVVOAiAPoju1BOMAGqhNq32l6sMlFpfZmpSZkbGbn3%2F%2B1b8%2F0Cr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMGwbFCSteifdeymjKKtwD%2BAavPwRN2Y82g42FdMV2qZTFUVhLZxc7pRwzuX%2FV8%2Bx7wmKm4frfqFzX399zC%2FjtXZTQmfl3xNCtzGAB0VIpU%2BFZf4dy%2BD3s5vLl%2FxcB1L8ko6RYsnj%2F3VYIx7zdLf%2BcAUrpMJn%2F7A0podP9OlnQaRjTBGhBqsUwQvKY%2B0qbVDJ0T8LAlLcckn4VRS9VBOq4va4CfOxt8Hbwns%2FNJGzjH%2Blag7oCb7eTlrItn2cMAYlB18YoUmrCRg1vGcwm3%2BmeuFEGCx8QFjqETqivN5lKbD5Ml%2BPXq%2FUlvh9iUahfGlMZ6Pglo79VlYxLyolBD47yTJ0ZGJu6S3HZl6ggOJ35YNqPnuwi7KLfuDG7lHMv4NwHNd82Wi%2F2K0MqA18TVQiYZ%2FlesQ%2B7MzcDTepmhvPE9IK19yYMCjWCWeWOpTFRYamfIKHRKlnWdVsUyJ7RXXE8Mf4U4Vs8xOZJFGjLlXpo3iALnqNsq2ECQobhpqrLsIE5tl9PrxFZRKIONHIT9iuxXaNscqlpOyXs53jDMKJxTBBPEJrulQmUoXfd6c7qsovGIfzSN%2B0bd1ySHhlG7iq0XMLUwBRgqEVa5D30YppmtkQgAbz1Msn5W%2FJ4FL%2BHO8i7FfgusEadSDjk0tkw15SavwY6pgEEYTzHpNc293HoTuK1P2wA6yTIyChP1qLjdrCUzSm53LxYAZjVLo3nOciyYl%2BZqw%2BzgI6j1sQUA%2FM%2Fmw6zh%2BPnkMkjHUBIoxY3MyW2hxtxfZJ2jaHdFZQAxH02smZ%2FYLgCywyPgROWydPZ0BpZdEWSxyEU6fJ5C8Ds%2FXPK2zT%2BoHrFguBfJYKTVgwddDWv5vTyueilwBDdcS7YsyoA8%2B%2FhfFyGIIeE&X-Amz-Signature=7973612edc55a1e2c13aeac7b1227f20ed532be3c367ef49f873bcd43f4cb5a7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBRREVFR%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T121425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICKGP6Uoy0LMH%2Fb7XLyo%2BcBzQIzhfE7jjjAd9Fvvo8bbAiEA2V%2Bv0bQiJfWxfXu9yxRr%2F2%2BqrK1Bdan23khYZ85W6RUq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDKKnVQ4k5AVqwhBb5SrcAwIXiiB3VwctgcP4KwrY35S3MsvNpnT2qGm%2FWMLSKMPJP6mcilXsMq2DHDjzjsPlb8hy3C44m3CMFWaotVKBhZ9oBX5e15HK6xHsK8MWut81AdxL5DsoU7vx8rwmX%2B2mD5riL1FI8PfgwJKCDJoe4VnxR0wsJNCpvdJhH77%2Fu%2BScha1S%2BZvchTDJZmrMgNiVgFI2eIuvtqkhF%2BK9X2LxYoe5W6UXp%2BFcHAP5Se58acg3JkdbZmaXGjHp6jBSidu9gdLaazszDVPQBYkewswcHoyA0vrT1yKtl53Q1Q60Y1wGo%2FkkDMi1oQrqJtQp7AG2NygwRbDNVb63GSATBeNJCEVTsnNB5j30I0rJULOkKKyX44MkY%2BXCq1BdHiYsQ5Z9QVBXN7lqcPM0OPpnp2dPASZzU%2Fk57Nj%2BQfCHHDxvI02%2BjS6ue%2B%2BTRxBovtWzhcxmb%2FjanoNnjJH%2B2NuugldWp4M1P%2BhD8fdpe2YHW1gsKDxd8%2BbV9cA8iEUr9P2rMy3BbVwwsm5R%2F5ca9U%2BDqPa53jNX%2BP6iP3tGjiUYZlNX0gpPYr0mmgrkEu%2BTmyCtQcNt1KREmFcdRuqVxMbVYjWdjNBe8gpS9poK0P52WFyrfMTKM%2BjIGaf3foavRpilMP6Umr8GOqUBWsJ6T28UEDAEyz%2FP51JaU6AqxBp%2FiMfYdRf9ZCf0fS9DDBfNEEy7OPWe%2B8HbPYt0nsJ2UNopYtV%2FgCURbj5uP1AeL98UOOC4jtx0uLX5JpKOTLs0XqvBNK1S5IIqirfouoXpCulK7TRsqgFSdXAHvzSG7MLuqBhnM7qYmYlApHw5nwxxY2OF6T2wQ021Ni8EMTLxKCSvwqN67CeUNAW83AhQpZDo&X-Amz-Signature=de88e29a3b8bfb20110f43ee53f95bcb8669a3eedafabc7c69cb7008081511bb&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MVIU362%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T121426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxYV1jXCe%2BoVsYcn1HJZFwDxlVJZ1gTmJuCIFIwBqwPwIhAKRpoe5L2WcC0mkZhG6TOrP6rhz1%2FxYksm6sjPKgqI4eKv8DCF0QABoMNjM3NDIzMTgzODA1IgzdsPH%2BcRIITGx8HcIq3ANOzKoNKmMqfBeiV%2B6IMWp9ks3i14775B9vqUdCNJL2jjGlb77LxESAyQC0u6KahRHoliwmloWEhyUDdf0LBbYxaA2gKBFQ1GJCY%2FBZh%2FmhbFUUbSSB%2FWko%2F1YFBgOUFyFzgL9UDkhDGgbryCtRo%2BgYZmZ1ITlQ5D21vI%2Bfy53STmuJnIwqE98rBAMWRxpkc0WKrEQxrRp0vBCF%2BgDpnfGL2165YPGS0o4ZxaMcEZjed8HVzR39lu7sPqlG%2BeX3cyiVy%2BcT0cSwdLydjaDqpEPZlz%2BzhDN8SOq4QSoPMy4Hdc6V8Opu029Yg%2Fga%2Bvi2cbzVO%2BBQf7mZ6sda80LWTyutBuAWP4lAz15HKDD5JFovxw7O%2FDO05WcfXVU4Y%2Ft6CoAiXaCwlU6c%2BmRSYAWX64vCMu7e6aoN5PgTEI%2F93OM2b6nrBPOSoqx%2BMxjXlmtqqXqT%2BJOGuGz7ad9gpDMe2CN6jFUAsZUieA2pHfJIEg9QYEw1InI1VUyyuL6xGSPimGy7bBYWYjFJgLbKfsnsO%2FAVBWlWMWgu26zdpqGrlJvDwtXVbwu9AspFvMFoc8cuOGNpUDAZ3%2B77Uv%2BKLDKZbuoqIhlkXSWzVldHjndgTl4Tt0NNCd7ZAK9fRtj%2FpjD%2FlJq%2FBjqkAd9V%2Bj2AAKgUG9l4gswjdrZ9%2FtoTPB4av9O7g%2BjKRSIJSuXvIy3rWyu6G4DPZq8cGslahZxCezFFyaiMeRu9XPb88UCbmeZ6fTyIcLNgI%2BOYSWUmd7SrxMfxl7bfkj2Oi2fvZz8Z04eIBYt2%2Fw60LsAOh6hyxDpPyF2sEUre%2FPJi8XdgLrcTvzAUSlIetGjoKWW1tYoIhFsX9JWJUgwJKXDltQq3&X-Amz-Signature=880d55706c12c609f58db00ec68a98cfabb308a5a11ab4c9d34e0204cd474616&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPHB7QTS%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T121411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFK40LbElBdhIDn7ywA9duCcOEiGO%2F6CUa69MG%2BTHVVOAiAPoju1BOMAGqhNq32l6sMlFpfZmpSZkbGbn3%2F%2B1b8%2F0Cr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMGwbFCSteifdeymjKKtwD%2BAavPwRN2Y82g42FdMV2qZTFUVhLZxc7pRwzuX%2FV8%2Bx7wmKm4frfqFzX399zC%2FjtXZTQmfl3xNCtzGAB0VIpU%2BFZf4dy%2BD3s5vLl%2FxcB1L8ko6RYsnj%2F3VYIx7zdLf%2BcAUrpMJn%2F7A0podP9OlnQaRjTBGhBqsUwQvKY%2B0qbVDJ0T8LAlLcckn4VRS9VBOq4va4CfOxt8Hbwns%2FNJGzjH%2Blag7oCb7eTlrItn2cMAYlB18YoUmrCRg1vGcwm3%2BmeuFEGCx8QFjqETqivN5lKbD5Ml%2BPXq%2FUlvh9iUahfGlMZ6Pglo79VlYxLyolBD47yTJ0ZGJu6S3HZl6ggOJ35YNqPnuwi7KLfuDG7lHMv4NwHNd82Wi%2F2K0MqA18TVQiYZ%2FlesQ%2B7MzcDTepmhvPE9IK19yYMCjWCWeWOpTFRYamfIKHRKlnWdVsUyJ7RXXE8Mf4U4Vs8xOZJFGjLlXpo3iALnqNsq2ECQobhpqrLsIE5tl9PrxFZRKIONHIT9iuxXaNscqlpOyXs53jDMKJxTBBPEJrulQmUoXfd6c7qsovGIfzSN%2B0bd1ySHhlG7iq0XMLUwBRgqEVa5D30YppmtkQgAbz1Msn5W%2FJ4FL%2BHO8i7FfgusEadSDjk0tkw15SavwY6pgEEYTzHpNc293HoTuK1P2wA6yTIyChP1qLjdrCUzSm53LxYAZjVLo3nOciyYl%2BZqw%2BzgI6j1sQUA%2FM%2Fmw6zh%2BPnkMkjHUBIoxY3MyW2hxtxfZJ2jaHdFZQAxH02smZ%2FYLgCywyPgROWydPZ0BpZdEWSxyEU6fJ5C8Ds%2FXPK2zT%2BoHrFguBfJYKTVgwddDWv5vTyueilwBDdcS7YsyoA8%2B%2FhfFyGIIeE&X-Amz-Signature=e27320c10b843fe6c0df37fb4cb35a0b7d34cbaf2317954c9a02a4d0eab75ced&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
