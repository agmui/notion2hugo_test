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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXPWRLU3%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T170724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDd1imajZWqM1%2BATt0VKEW%2Bkt9ZkFky6b8T26lNqS4SAQIhAJtK%2FAZoxzh2D3ASYu58z2d4oyLeh8VfftGiMZXlhI%2FCKv8DCEoQABoMNjM3NDIzMTgzODA1Igw9zSYwhzK5UQunbuIq3APtwWUUqTsL%2Fc5FRZifq8B%2FdmsCIYmg%2BzFQBPeuNPDF9m%2Bk%2FqQ6pPfRNf0rIhlYeJJ0XUvedeEyXi6cnJkbjrM7pGrCK7hliD8BzJt05Q8SLQvgUTbYJTQYg86DPnsyhLVW%2BCaCCS7yJXNC3vJ0kp7Tl3aZPAJGW%2FwmVJFAx%2BB224RDpaKQzVlf%2B%2F66RiJsKxn9W7wC4XUJdX%2FegiOEyj3rcHzCkPZOrRtAj2pdRjndWmEOFzdsevaRVmTvks0riUdqXbH1vwMWLqkiZSegTRQFPw7mlthv6FAPYzqLxDQ7m%2FQqXFqe8XkG%2B4PHk797h4ozaVaEBI3xWzCtDRCqbb7T%2BQgc2PIz%2FFCKkpf7c8JcmrTMpXy5aarPiU8GvJYaF%2B3avaL8%2Fm3L%2FRnOfQsoh6gfMcw5%2FoWhWpJ2Cml3OrULgThXCh44Rb7undW4JC7i7NTuSDcuKGngC8Bx4J3KDZ5rs0nXYE51cb3ZuerwXcCwjRCfJYmPuCQxI0OhfHH%2F3T9dMJeyV7Y20dBCaqjy7Kpch0rirRm50%2F5V2FYOb%2B5V9gRIZ7RH6PTh%2Bks%2FRQvHtu4aJhf1HH5%2BcXcaKHg%2FPBAVSPlqZmcpje4QQ2oUj%2BDPgK8YH3wKiypDd3Q8yTC1hpa%2FBjqkAWSDEPPKu1uOi2w18YZYtYPjl6AOUo1uhyxXvEdq%2BIVojdh%2FjLw6bAaYyGumQWfls6e0inJJyJcEyVeDQPuUxOmA4JLBEUba11%2BpMFuPhe9VhbpX0nws%2FK6GqO1777TRO%2BuFU67uw4vBDK0tI4OivlXX9MsAKiI1WNvBakkTw4F%2Bi%2BKeKDsxuvMKCbSsrJvnLF8vg6CDqxo%2BXlIjnwBI83GBeAYw&X-Amz-Signature=72e33fca83c4d66beaae94e7600dd3f806dc5406dcd1e18c0d3a84af3d1f5e77&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXPWRLU3%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T170724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDd1imajZWqM1%2BATt0VKEW%2Bkt9ZkFky6b8T26lNqS4SAQIhAJtK%2FAZoxzh2D3ASYu58z2d4oyLeh8VfftGiMZXlhI%2FCKv8DCEoQABoMNjM3NDIzMTgzODA1Igw9zSYwhzK5UQunbuIq3APtwWUUqTsL%2Fc5FRZifq8B%2FdmsCIYmg%2BzFQBPeuNPDF9m%2Bk%2FqQ6pPfRNf0rIhlYeJJ0XUvedeEyXi6cnJkbjrM7pGrCK7hliD8BzJt05Q8SLQvgUTbYJTQYg86DPnsyhLVW%2BCaCCS7yJXNC3vJ0kp7Tl3aZPAJGW%2FwmVJFAx%2BB224RDpaKQzVlf%2B%2F66RiJsKxn9W7wC4XUJdX%2FegiOEyj3rcHzCkPZOrRtAj2pdRjndWmEOFzdsevaRVmTvks0riUdqXbH1vwMWLqkiZSegTRQFPw7mlthv6FAPYzqLxDQ7m%2FQqXFqe8XkG%2B4PHk797h4ozaVaEBI3xWzCtDRCqbb7T%2BQgc2PIz%2FFCKkpf7c8JcmrTMpXy5aarPiU8GvJYaF%2B3avaL8%2Fm3L%2FRnOfQsoh6gfMcw5%2FoWhWpJ2Cml3OrULgThXCh44Rb7undW4JC7i7NTuSDcuKGngC8Bx4J3KDZ5rs0nXYE51cb3ZuerwXcCwjRCfJYmPuCQxI0OhfHH%2F3T9dMJeyV7Y20dBCaqjy7Kpch0rirRm50%2F5V2FYOb%2B5V9gRIZ7RH6PTh%2Bks%2FRQvHtu4aJhf1HH5%2BcXcaKHg%2FPBAVSPlqZmcpje4QQ2oUj%2BDPgK8YH3wKiypDd3Q8yTC1hpa%2FBjqkAWSDEPPKu1uOi2w18YZYtYPjl6AOUo1uhyxXvEdq%2BIVojdh%2FjLw6bAaYyGumQWfls6e0inJJyJcEyVeDQPuUxOmA4JLBEUba11%2BpMFuPhe9VhbpX0nws%2FK6GqO1777TRO%2BuFU67uw4vBDK0tI4OivlXX9MsAKiI1WNvBakkTw4F%2Bi%2BKeKDsxuvMKCbSsrJvnLF8vg6CDqxo%2BXlIjnwBI83GBeAYw&X-Amz-Signature=9a02cbf1aa07bfbe34a53db0c517be034f4809475bd96e6fcec534fcefb8ea78&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZSIZGIT%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T170731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbthGkr0s3W8UxJsx8TXIO9r8GROb7G3BfRnZW9PaHNAIhALlLsvNCYEbBeAu4cZkfRXu8X1C8XPJ%2FLksK34A%2BjU3QKv8DCEoQABoMNjM3NDIzMTgzODA1IgytZryun9EasywU%2BX0q3APb5Xe%2Fq47gk1gLBXbDTf%2FoChnymgAxrZAvOn5oqk2viM8%2FWHxjJ4cYTmzd9OK3TPMQq0%2FZbcfT1hzHeKBZuahsdEMSRit5LIw6FPHlRGHzZgBtLMkFa5tKTZg1Ik5ZaVNPGHywi33ppeVAIKr%2Bn9tU81b6PM4HFR%2BiJ83kdg%2BSoGC7VxvYTuFS8KAJ6Z45WmUC9DodXVbpo9VWo86x4OxbBQzdKcIFeEE3OZS9jl3i9XY6vOmBkhNFph2dbAHxwa8pKrK%2FtqXts8pL14Z%2B7PjiXaOecdwPQ7sFdQHx0U%2B%2Bx2hG6tBia%2Bmpjes%2FgndQbfvcz9jVeTJQKrMVFuqdaa5EsZvgwuc4VNhKePCMLtMc5IllTkY%2FnOR1BbKsa3ldhje9DDwggLdd1ycKR%2FiItao%2BTQpebIUMvqVE5vhrKIoDmh2KqkOI6jpRBq6pl2wTnaOgNk6eDv3Ci6VxgpQ%2F33M8FSe8dajogJ8W9%2FBIFh%2BEqW%2FhVkz9YJFfIdUzzOkehoN9Ohv4i0h%2Bf3Xd1xrf2fO0BV218T0SYABDm0nTbt6xC8I%2FhnhPGbv8J4oQWafnz3yoEC%2FLHDcmqIhUhLslKfISESXldVkPzJuFlWGyGMFo9Mp3rxwgxi2VYt7nZDDkhZa%2FBjqkAQb0etTs3%2BsVhgHrIRNvPHu%2Fqqi4l1zIoOTOcrmfh0V9S4QK%2FVspKgRZSWxb%2Bd5CIyAgQldKgCelm38x8xXqYvUL7zAz3M2XUloe%2F16A8hF2HWWd41oNrkxEsurAXHjJr893jFX9tv1VDmj71r3Y9dWMkc%2BSegfX%2FmRWbbGC4zZ1gWC8i2Ln28SlcQTJotxZNICK3xniHV4SIVW1GnGydgaAzETh&X-Amz-Signature=37aef39a8854cefce53c8eea521bf0953cb7b01c59b6e5e44b154235faaabc47&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XG66RP24%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T170732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBperojl1FcJfsU0PMWV%2FjSU%2BJWjxidFkCBP2WkbZTIXAiBmX0vex0DFBY5EwooduKYN0lQqRjrlEc6kYYfxmhsN%2FCr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIM9Kxf%2BqGbVp3LEKc5KtwDUZqj2PnE6wIzMBU8VNmBrCDbgk2D7fZgyZ1CxPMSbxzqLj8WMwaa2Xyw%2FNdVmtKiKYjWMVSzyaf%2B%2FD8AFQAUGZ7dH3RFOPJuTRZIam%2FnEiApq1aBtV9%2BlDpLDl03hJ46VBKjmnXxoIp%2BhPznWtKaFgEhTs84EmDFVZJ8gJQXj0lyDFu95PCSiSMQPbylS14DtBoBuyC8je1Rfe7fj51VgOIVK7MdYu5wgb2uaZmbmgbab8xz5tDR9bme4RTVScNlz8tydcWOLzQUX2NlgQ6gcNGVcW8XHIVVYERodAPaWa22vg8%2Fh4ZmDx%2FlrWj7kBSDwtMoWsIpw%2B2oPryw%2B97ZIqoiKHTK7rxB9LgjPvDPFDhWwrQdURVIZwCNwfiyabaSHlbP4IFLLfx5uyNWAcv8ZWcEPUZwyduqmPo7QvAMqZb0mNTD0A8j6%2FO1aNeL2YGrap7FV9wVXJYjt0VSe%2FPRYnsUcJOILkEuzPYg5xomn0kXL6lS%2F7X5QdqcKpnSYXjNOwR%2Bp0pTRPAXG4LFNnALukd%2B94C1i8NPpqKsIoYe%2BVuxtzi5E%2BiGS3mkLgB88wI4lILULVz82mHa8Pxf0eqpS0%2BKXoRTFuTAZCR2Oqb%2BLvj1sOHwqn04nNQHit0w54WWvwY6pgH4K3fZ8KvC22NfIaCDJuWNgzxSNhk%2BQp49buJcdLlqqzGlb%2FnlfGkTdAhqe9A1VgVe4eTRrC%2FWSW7z0lKCt1iKWbqg0pIECYNzKm1AvXyznpSgkev6jQTAQBsDCPMBPt7SjmgGY8gogsWiS22%2BQZUtgQ%2BZs%2FaGZrczaVOHJpibqGjfYf3Zcksy%2FCeKYRY8yw5RQzzeNL6p0A7UF%2B5v67NP6vR4v3Hx&X-Amz-Signature=72dd42e2d817e9ac5d17d624fc1e99a2f3e8a70f6024c055491b027ae6c46fbf&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXPWRLU3%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T170724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDd1imajZWqM1%2BATt0VKEW%2Bkt9ZkFky6b8T26lNqS4SAQIhAJtK%2FAZoxzh2D3ASYu58z2d4oyLeh8VfftGiMZXlhI%2FCKv8DCEoQABoMNjM3NDIzMTgzODA1Igw9zSYwhzK5UQunbuIq3APtwWUUqTsL%2Fc5FRZifq8B%2FdmsCIYmg%2BzFQBPeuNPDF9m%2Bk%2FqQ6pPfRNf0rIhlYeJJ0XUvedeEyXi6cnJkbjrM7pGrCK7hliD8BzJt05Q8SLQvgUTbYJTQYg86DPnsyhLVW%2BCaCCS7yJXNC3vJ0kp7Tl3aZPAJGW%2FwmVJFAx%2BB224RDpaKQzVlf%2B%2F66RiJsKxn9W7wC4XUJdX%2FegiOEyj3rcHzCkPZOrRtAj2pdRjndWmEOFzdsevaRVmTvks0riUdqXbH1vwMWLqkiZSegTRQFPw7mlthv6FAPYzqLxDQ7m%2FQqXFqe8XkG%2B4PHk797h4ozaVaEBI3xWzCtDRCqbb7T%2BQgc2PIz%2FFCKkpf7c8JcmrTMpXy5aarPiU8GvJYaF%2B3avaL8%2Fm3L%2FRnOfQsoh6gfMcw5%2FoWhWpJ2Cml3OrULgThXCh44Rb7undW4JC7i7NTuSDcuKGngC8Bx4J3KDZ5rs0nXYE51cb3ZuerwXcCwjRCfJYmPuCQxI0OhfHH%2F3T9dMJeyV7Y20dBCaqjy7Kpch0rirRm50%2F5V2FYOb%2B5V9gRIZ7RH6PTh%2Bks%2FRQvHtu4aJhf1HH5%2BcXcaKHg%2FPBAVSPlqZmcpje4QQ2oUj%2BDPgK8YH3wKiypDd3Q8yTC1hpa%2FBjqkAWSDEPPKu1uOi2w18YZYtYPjl6AOUo1uhyxXvEdq%2BIVojdh%2FjLw6bAaYyGumQWfls6e0inJJyJcEyVeDQPuUxOmA4JLBEUba11%2BpMFuPhe9VhbpX0nws%2FK6GqO1777TRO%2BuFU67uw4vBDK0tI4OivlXX9MsAKiI1WNvBakkTw4F%2Bi%2BKeKDsxuvMKCbSsrJvnLF8vg6CDqxo%2BXlIjnwBI83GBeAYw&X-Amz-Signature=8fd7b8211acff1ad1124e87de34dd1c1d1c3a70637ccaa0a533f8c2a27b1bd4e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
