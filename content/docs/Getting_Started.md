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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZH2AYW3%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T160941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICe8zHDNnyblr34xOaNoaxBESYFisncr3lsxsAs9bxjBAiA8kjDMux%2BGD07ky4l7Cayh7qo7Ngy8Sn1fMvy3xjdWWiqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDJA20%2BVo3U%2FqYXbuKtwDLQE3quOE6YLefKoSnukh%2F6ZOuY2xrLtc2hHWFfkpPGzuPWeJecLkjw%2FU4lmrzooqzw9auQsu93ovgedZJk4xhXQgOEN8rXpg7skHrfxkREQfXGFqHlDK7%2Bu04eX7e3On2bm7LKhg7jxkoZ67%2FKW2RgNJ3W6O0MxhnKKJXx4eO7jj2CyZEZNHz9Zc8AQtsbgOIrxSAfd1ZOvIaBs0EU2PwMu6vvpadRGCjqT4Bwe5ggmJNW85W7QFh%2FRgFAzeQpfbbDNsAqBzdeWYU5G8LODu0zDlr7JKGhfJuX97tkM96nsQyk0wmACQSh4AEhAPxr36caoE0xFQHxiYqQuXBQpcHKi%2Bdh2CMBCQaSQtA2fPAGFXUta%2F91MUnSRPt78BqO7pelqFnxxe2Sqe2yeoe0daQvG%2FL0dwAcnXPXh9wr%2B21kGRUNI%2B2KRwHSHTlr%2F7QV4No7d7GvNPSo429qlb6fV7lafiwOXoKBZFv1zRFOSiZHuR%2F85EXldcgRxRzBwbdOwtahWMInWq5TK2cHimmrwa2r6YgyTzVtCUWUstdQfCOj9Gj1bYYEOJo%2BRuG4pbLH%2BFctYNs8iaAyghOGEpWuoBpU6x3mQx%2FL2xh%2B0zjFFu7BByIu6nJTISaTj9wXEwppXdvQY6pgG77WUicN46DlvnHt9rsdKUc9hVfY3xpZWhM6o1BeAsp0lYK4zzYDx5TBESH7ZzgNwwm62li2Ubge7Qc%2Fg2dkt0GaFmOb3tdfxWlUb2LyiypDoAIzaXS%2BZiX5Lpgdw%2FoIDZoShzuQ8VSz0x2RdDoZVcUZLJv9%2F7jPtT%2FtLN3v1kYrgnpwp%2FLE2DmJ4plElra2fJhHuKd1Ti3vZiwwR4027mXkNMA8f9&X-Amz-Signature=d1a5f31d1b372bd3ccba6dc3bbf2e8e56ba9c7f9b348e01b2f5265f48215bd1e&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZH2AYW3%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T160941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICe8zHDNnyblr34xOaNoaxBESYFisncr3lsxsAs9bxjBAiA8kjDMux%2BGD07ky4l7Cayh7qo7Ngy8Sn1fMvy3xjdWWiqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDJA20%2BVo3U%2FqYXbuKtwDLQE3quOE6YLefKoSnukh%2F6ZOuY2xrLtc2hHWFfkpPGzuPWeJecLkjw%2FU4lmrzooqzw9auQsu93ovgedZJk4xhXQgOEN8rXpg7skHrfxkREQfXGFqHlDK7%2Bu04eX7e3On2bm7LKhg7jxkoZ67%2FKW2RgNJ3W6O0MxhnKKJXx4eO7jj2CyZEZNHz9Zc8AQtsbgOIrxSAfd1ZOvIaBs0EU2PwMu6vvpadRGCjqT4Bwe5ggmJNW85W7QFh%2FRgFAzeQpfbbDNsAqBzdeWYU5G8LODu0zDlr7JKGhfJuX97tkM96nsQyk0wmACQSh4AEhAPxr36caoE0xFQHxiYqQuXBQpcHKi%2Bdh2CMBCQaSQtA2fPAGFXUta%2F91MUnSRPt78BqO7pelqFnxxe2Sqe2yeoe0daQvG%2FL0dwAcnXPXh9wr%2B21kGRUNI%2B2KRwHSHTlr%2F7QV4No7d7GvNPSo429qlb6fV7lafiwOXoKBZFv1zRFOSiZHuR%2F85EXldcgRxRzBwbdOwtahWMInWq5TK2cHimmrwa2r6YgyTzVtCUWUstdQfCOj9Gj1bYYEOJo%2BRuG4pbLH%2BFctYNs8iaAyghOGEpWuoBpU6x3mQx%2FL2xh%2B0zjFFu7BByIu6nJTISaTj9wXEwppXdvQY6pgG77WUicN46DlvnHt9rsdKUc9hVfY3xpZWhM6o1BeAsp0lYK4zzYDx5TBESH7ZzgNwwm62li2Ubge7Qc%2Fg2dkt0GaFmOb3tdfxWlUb2LyiypDoAIzaXS%2BZiX5Lpgdw%2FoIDZoShzuQ8VSz0x2RdDoZVcUZLJv9%2F7jPtT%2FtLN3v1kYrgnpwp%2FLE2DmJ4plElra2fJhHuKd1Ti3vZiwwR4027mXkNMA8f9&X-Amz-Signature=e19916ad6d8cbda4284cb313e14ea0729c1beb7744fb980baeefbe39db2fa9e6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5RGSIPT%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T160944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChG4tJjIyf66IFy8Bl1Bfy9J0PPh5KqPznoQx3ggFVqwIhAOpuiBv%2F7Ic2KMbJZLA6hp11YiJcthUK57XyKDuwcKdRKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxFvu8CpptQpPNNTgkq3AME%2B0Oqrss1RFcNUIDsN6JRqjJu19kJ0q7FjOLNwJvq4EKiAgIVnFDquIJqHjrhQLLsHjWhqvBSp8XLk0Z4HYmk1RyZclXflh7vwF%2Frr35zbAYvUfWsJryMSkhOBi7sHA7kE3XR%2BFtloK9a8dYHvyedP%2F%2BBdscsh%2FZ0HVRK7LC1rGvGEgIpGfI5hQHBlpqzjhcsht2zl%2F2wZYhq%2BQ6qKpfJyJJGLWlolNFwH3n4a%2FTNwbF1Q4AlaO4PjhurF%2BbTd1dn1rXdn6U0hMfynnXvoP1tB3ZAO%2FrqleXJ6Qi4XH0jcooW8XIyIN3ssnBNS7JORGoEqrBoiFo8Dq6jaW2wWzQf6oCHsknbjz6ZOIvSgSn7mljy52c%2B0gMCdvMMexev%2BpSKtEU%2B%2B%2FDb95B3qm9gaW7%2F77kerOAr5qNyBxz03Hurx%2B92WT%2B8CTDU35hlw8LrkW4%2BjAQBJ4Gj41tlTCVxKC74DVWEKZ8GBigRcMboizpcmX7tIDWwM1PpK5SUGyul1avA2oiq%2FvuRGX0SFwRV2a8pJz64gkT2PE6VhYY6QRcQVVRiFPch5YNpqVcxiWhMq1SXEXUsqM9hsAGpY6vMqnmuD5zTD%2F8GG35AuVleSU2PT4cLek%2Byo1atiZlo0TCLlt29BjqkAV7hLzmPakeXF23P9q3IUaaisrGv5B9WHoue8SLJUBWcu7kEMZRHZ4JFhU1%2FCGM4PY%2FfxfSXimH5YfwVl32%2Be9A5DP5IoZNUn4K%2BF8FKTDzPRz79jfZrg5NXQrRXBVHnfaupvVwPsXYv0iaM%2BXBvPzef5bXrnqn3%2BCswMOGw8GCXPOe0xQOvMtDSmBqhwMHofXPqGKF4eJdmR0tvpRL43LJO1R8N&X-Amz-Signature=bd9f2ad5a54d41aed6fdb1468e37822f0c4198d7b91ed79ea61b583d329cd1d3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKANQEJZ%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T160945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDR7lg3Ivy3ZnyB6oSA%2BAtJiUPjGUBHChJ60hvp3abTcAiBfP7iN0SA2fKoT194AZyhfTqIz2PvLh2Us6Q7%2BSLsC1SqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYCXVoiFMYuE6JYyeKtwDhY4t3LhR2NycaHXPo6nV9oPGkw3roEOKjQSfFzbZxkCGI5O1yvVBhR7gXHJzS0cDpvBJvON9LZjk%2FhDQZNQjLsAF9f2PFNviyRg6LbQNTdwZaT6ky%2BCax9CUiih1oaV7E%2FIj88TNmR3rZOFmXJ2HBvCYIHfe%2FxGNDubWm05Ksps1%2F2fw3cwRHUaC4ehyrY0UYxaY74qJ3jhMnACEXrJDpOua8zIubBfZo47G%2BZhssF15skltG7hgKUHXxR8to3DW1ARGOJV8LiMRk2EgVULG%2F0v7R1qw1g%2ByL3KJIGDEIDQrBlCplctj9CaTypZ8vXBUMWj68XUptJgNb7%2Byy4AA7cOUjJU6iUwch57SMn86%2BfzY2D9YAdM3j2RmbSp6eg4V6lYqme5QY0DuWRgUTqn%2FLEI3jB0wC%2BCpSRbXvrQhQzy9n7NF0Wdvw%2B7roT7rTtkO2BuWXrXYaIn3%2BmaHl17GZ8sps6mbpIHiF%2FgYycebV2EevvYm2ErzcKxNvGgsFcuJ%2B7zwoKj77eu6enhFMuKhWUhmQ8yJTJIFOxl5k%2BXtmfDeFEg0GLTmQyofSf4qqaqMN7s7X%2Bsz9H7k%2BzpZURL5zNbe8siZmSNVidqhJKYnEZF4SDl9%2Fct1YuDzk%2BIw%2BJXdvQY6pgEqYpOjhNU9OY0ZEnPVP6TmfAlGP4rABd4UKZ%2FHKJWUUZG1U4ufKkUlWaBCzTROhVAvkuP7wKEcTiOkNJICGMlR64HZ3MShdjEKapP0Dcq%2Fi5VVaZXiGVw%2Fz2AqvD%2B%2BfiuTMJLu7uCj%2FYG60KgGY28wWu%2BJbQVZOPiEMzBjJi3C00ZukM%2FAkecNY1kH43ga2DeZwpGK7EHkK%2Fzz8O7UDgrjcZlUj2kU&X-Amz-Signature=6435bd8c89421b5d5dbba3fc916129d37a13e7587a43cbe4b0bec50345f55371&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZH2AYW3%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T160941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICe8zHDNnyblr34xOaNoaxBESYFisncr3lsxsAs9bxjBAiA8kjDMux%2BGD07ky4l7Cayh7qo7Ngy8Sn1fMvy3xjdWWiqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDJA20%2BVo3U%2FqYXbuKtwDLQE3quOE6YLefKoSnukh%2F6ZOuY2xrLtc2hHWFfkpPGzuPWeJecLkjw%2FU4lmrzooqzw9auQsu93ovgedZJk4xhXQgOEN8rXpg7skHrfxkREQfXGFqHlDK7%2Bu04eX7e3On2bm7LKhg7jxkoZ67%2FKW2RgNJ3W6O0MxhnKKJXx4eO7jj2CyZEZNHz9Zc8AQtsbgOIrxSAfd1ZOvIaBs0EU2PwMu6vvpadRGCjqT4Bwe5ggmJNW85W7QFh%2FRgFAzeQpfbbDNsAqBzdeWYU5G8LODu0zDlr7JKGhfJuX97tkM96nsQyk0wmACQSh4AEhAPxr36caoE0xFQHxiYqQuXBQpcHKi%2Bdh2CMBCQaSQtA2fPAGFXUta%2F91MUnSRPt78BqO7pelqFnxxe2Sqe2yeoe0daQvG%2FL0dwAcnXPXh9wr%2B21kGRUNI%2B2KRwHSHTlr%2F7QV4No7d7GvNPSo429qlb6fV7lafiwOXoKBZFv1zRFOSiZHuR%2F85EXldcgRxRzBwbdOwtahWMInWq5TK2cHimmrwa2r6YgyTzVtCUWUstdQfCOj9Gj1bYYEOJo%2BRuG4pbLH%2BFctYNs8iaAyghOGEpWuoBpU6x3mQx%2FL2xh%2B0zjFFu7BByIu6nJTISaTj9wXEwppXdvQY6pgG77WUicN46DlvnHt9rsdKUc9hVfY3xpZWhM6o1BeAsp0lYK4zzYDx5TBESH7ZzgNwwm62li2Ubge7Qc%2Fg2dkt0GaFmOb3tdfxWlUb2LyiypDoAIzaXS%2BZiX5Lpgdw%2FoIDZoShzuQ8VSz0x2RdDoZVcUZLJv9%2F7jPtT%2FtLN3v1kYrgnpwp%2FLE2DmJ4plElra2fJhHuKd1Ti3vZiwwR4027mXkNMA8f9&X-Amz-Signature=fd12c898b89fb96f2e9ee5be0dfdcf09c870b11db59c40a5d29ce36452ed860d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
