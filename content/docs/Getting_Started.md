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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U46T6Y6S%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T140125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwcdkvYPljmy2tYjA5XTw3raOsU5BfBbpWTa2mQoa7fQIgN%2Fm%2FhIiQoNqUZJOFNkdU4hOreqK45jlvFjDurLLxP3IqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCv1%2B%2B%2B0oVdJMFkOAircA2sYS3D47kM1IYUSq930UR919sKtnz3WpAUeqMDUVkGYOVDiw9SBJIgD9VBg7OhF0CUUuAnV4Khv9RlxVomf%2FAYDw7etnn2Ps3dnMgj0RNo8409AX2oPVMU7wswBEx1GsN9vx7a45LGzmG0uPaWbPInJi3JXyjFYeokeS2WN%2FGKgEG1C6xqviRWzNm3H23QPjKdlKAfAFhlTQcufE1mXSnEKn4qDjbuvaGUj9WWBNxpPHxxWk6SP8P3Hj4ypBjIIJyqGOfb6PE4Cy92DeX3l0l6Pi8TVAuUl2WfkuTkZpIVMj08RVVGI6xyoejF1i5tv6yxzLEBCvOJv2nIAc%2FaWZ3oSsl3Dvc2v2CtYcaiAylz356o5QzsTTYm49PhMvIIPiDh%2FQlA7PCqTJMQzdBjrI5vLVHBc2l8qotPzYK5zdiT6KFI7as4LJA2nBNq0b5aUYsG5zBgRpW6Qqh%2BHMfF33Q3OLXkf%2Ff8YiiO3n%2FcE55fEJGTOJ%2F4qzQZprVvVpK0fX2RDg%2FClKCJd1UZ0mEawfnNBXUd2pa4sioT37JiaL7CcZgQ0JLNMVAWSNSCIGPGWTeRe5w6U%2Bnyq%2BAwes74zamZ6UBceAWbidR%2B%2Bsmy1zWgpebm8v%2F1zxKxaFUIQMKuD4r0GOqUBQZHsFsUHAmHTilorJ3462JQp%2FXXhscTeKT7zaihT057J0bjVp%2FZ7zyhZRhFRlLnOq30bBNjOjBK1Ctl678nXrVkobqkxDDq%2FSh1naCye%2FkjvvvI6ptPnx3%2F3uwBURShcNlJscOJbpP42vzyLPukQZHDYcMTuncKJJWqn0sAZJk0j7Ak0EfmigiMbz7d6lENsw5b651G5FeulgZi70Yx%2BfWVCf6Mi&X-Amz-Signature=9534a4c7dc8ab94e200bdde954ec981c879a44f68e4cbdc0fd06218d580ea927&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U46T6Y6S%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T140125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwcdkvYPljmy2tYjA5XTw3raOsU5BfBbpWTa2mQoa7fQIgN%2Fm%2FhIiQoNqUZJOFNkdU4hOreqK45jlvFjDurLLxP3IqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCv1%2B%2B%2B0oVdJMFkOAircA2sYS3D47kM1IYUSq930UR919sKtnz3WpAUeqMDUVkGYOVDiw9SBJIgD9VBg7OhF0CUUuAnV4Khv9RlxVomf%2FAYDw7etnn2Ps3dnMgj0RNo8409AX2oPVMU7wswBEx1GsN9vx7a45LGzmG0uPaWbPInJi3JXyjFYeokeS2WN%2FGKgEG1C6xqviRWzNm3H23QPjKdlKAfAFhlTQcufE1mXSnEKn4qDjbuvaGUj9WWBNxpPHxxWk6SP8P3Hj4ypBjIIJyqGOfb6PE4Cy92DeX3l0l6Pi8TVAuUl2WfkuTkZpIVMj08RVVGI6xyoejF1i5tv6yxzLEBCvOJv2nIAc%2FaWZ3oSsl3Dvc2v2CtYcaiAylz356o5QzsTTYm49PhMvIIPiDh%2FQlA7PCqTJMQzdBjrI5vLVHBc2l8qotPzYK5zdiT6KFI7as4LJA2nBNq0b5aUYsG5zBgRpW6Qqh%2BHMfF33Q3OLXkf%2Ff8YiiO3n%2FcE55fEJGTOJ%2F4qzQZprVvVpK0fX2RDg%2FClKCJd1UZ0mEawfnNBXUd2pa4sioT37JiaL7CcZgQ0JLNMVAWSNSCIGPGWTeRe5w6U%2Bnyq%2BAwes74zamZ6UBceAWbidR%2B%2Bsmy1zWgpebm8v%2F1zxKxaFUIQMKuD4r0GOqUBQZHsFsUHAmHTilorJ3462JQp%2FXXhscTeKT7zaihT057J0bjVp%2FZ7zyhZRhFRlLnOq30bBNjOjBK1Ctl678nXrVkobqkxDDq%2FSh1naCye%2FkjvvvI6ptPnx3%2F3uwBURShcNlJscOJbpP42vzyLPukQZHDYcMTuncKJJWqn0sAZJk0j7Ak0EfmigiMbz7d6lENsw5b651G5FeulgZi70Yx%2BfWVCf6Mi&X-Amz-Signature=12951d862c7189bfd98df612993da2cf79852d2af5e7504907606caad9cf6afd&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NR3UOWT%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T140129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDWUE8GPDI9u8OT2MNMNSokTJxYfVYlsW8PK8Utr95iEAiEAiXPpefe%2FZpJRcltFgAm7fXejVwM9V%2BTm%2BEOzrEocwzUqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPgYRnPj5xdd8vN%2FcyrcA8NzBE1z8C3bctJCdQlssVgY5VIEqO5EQzCHzVdJNdYWT51mIFauSq3yZ1ugEBjcPngbvxMNPE%2FFk0h0C141bGwpfNq7zRkCaQOAzdJr5IyUk4fr5SVUvNOq6KkpiHvJf1mltF1b1rFsU83OljJJeSTmCkyC1EO5wF8fWFmN9PEIKmdT2PVx9BWQoqpwGawX2ASQi%2FY%2FwNN1UfT3wZjkYQTu0pt9yW78do1gYWwbQIZRl75MJQHRi2MZf6LBCaDC73BG6yqa4McJ%2BVjG8YoqeEo5YxlOy6%2FcJaQfgqXzmB4np0Nv7LjmJRd65g%2BWYz%2F5lts92TXM9x2AWHDEd7ylkOjH%2FG%2BO4tfnQzi658YP3NG2M234UYqgNEKI%2BuqMYNhb6CYElhGOrNhLadvWKzOpKRkKpdUXXdrZSogigPrquEwNtog%2BB3qjEEazKvjPyq4KtCxabr4qicTukV8qZSUzJvb5SA6kZqiZikIqX935h6aGYv%2BbKvS2whsqqXQaB5VANlwutIcCgvQBlYIspYNRGQPENAC0ZZnZ719nZVPjHDda3YsAWvC96f6r9o2HfkH5wmy%2FdlJadilfE1r633AQKm30trIws4KqeaVLmdfkUgkENrWrueHB2RZxCBTYMIiD4r0GOqUBlJne4etxc9CTCQ4exwk74I7WuNJEG58YaJzuJEldvZ95F8zX0aF8Nfc%2FClFpSakqY3fivM23OWdQZyoS6wURFNyWD3jxssrfvFRh4fcBN2JR7QGRhHb7j9lxNxbXSU9bPZvrSRjGWRt4zN3A9OGPfwnezEe9Hr9RRay8PiZ7uuk6Nt7ICU10kimA7mhJrxwXT1X3H18bjR8UKSYt67oEjwAiIXKJ&X-Amz-Signature=84995108ad12dbb5981688abb56ddd7a0eb2943c0f3d98f0663a09a97197144d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVVLI7YK%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T140130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICJx0eIT20UMB7pvKvI5%2BEV7TcDiG49Z6VFw9AzPp7%2FRAiEAgLc6mthpT0HP0mxZN2OntrbVggpDiWxjszTq%2FfFFxuwqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFMMkBB7RP9rdMa5syrcA%2FM1klR8gpf99Cnzcaqqw%2BWamJfvo6jtXqaSzCkTkH4y1dmDDS4znaUz5kbx0MeEXVmXVjS753HYukQHwS4dZvu8C%2BQFU%2BodgAHJ4W%2FCmHnVhLo76Q1udFcc%2F4SEowg7lnc1Q4RjRPTd22t1jIhWm67KHd3deuvuOjkDdRCMgKLD2TmMj9tDv3%2BpEQas%2BiEtsSrhvZ2uw6c66abPzNgOOQHmzpwtpkSicyLzf1aKk5GPIOjAyJzKQFLyQ%2F35QTTHIgTprkoiDNPbWiO1xAn45FJ0Oz5LZoUqmgSxQ4LlL7z66Cw9pJdcNLGO92bX67hPlyAOYIHNWw4S6FVCqzSnt0%2FW1KgHgbpMU6EleRkIsWP3v7xibuIfamJ7BmeIdui667mu%2B3E0AfC6IV%2Beo6xZ1yq48T0q2r8RjJw%2BQ4EjBRA%2FCfa5tX2okfLCWBsn7J0uxNZiR8I%2F67wH3zDoksZXcVd7UsNgjYkd%2F7KRBZIvFhW0AVyAavEP9mMNo88qpuO0XAtOCQkPv1LUtf3ArGZgbUx%2Bi5JHGnGW%2FNuksSA0WqqGZRE0WunVgo4BF6RdqYqoFDyrrPIC1yDDEudynQQ4cIomed0R%2BTuVpH0%2Fgon16MSJBZkuTLTSw8oAzhxvMPuB4r0GOqUBqqua1otfilYTKWovUFFp4UvwEc5%2BqzffeG2QtFaaVHOU7g%2F9XV8%2Fih7HHnyzefx84y%2BnjM4k4v1e0NNxyPYz026O785w0c71ZWybjznJ8amH2lwQxNT7ptMSoS%2FHuOwxdBCobT%2ByvD%2BmtxBGcFpms2302BFEGB6Wq%2BKVnLMN8%2F0Gmp7sDfqIDAcFMDcO7h2fGlu9XKoTTqtx3TTTwqpLRP3saozC&X-Amz-Signature=52fbd6d5b0b01d267ee7464afb10fa9ba3dc35255bcf0040859338a0146b5852&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U46T6Y6S%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T140125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwcdkvYPljmy2tYjA5XTw3raOsU5BfBbpWTa2mQoa7fQIgN%2Fm%2FhIiQoNqUZJOFNkdU4hOreqK45jlvFjDurLLxP3IqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCv1%2B%2B%2B0oVdJMFkOAircA2sYS3D47kM1IYUSq930UR919sKtnz3WpAUeqMDUVkGYOVDiw9SBJIgD9VBg7OhF0CUUuAnV4Khv9RlxVomf%2FAYDw7etnn2Ps3dnMgj0RNo8409AX2oPVMU7wswBEx1GsN9vx7a45LGzmG0uPaWbPInJi3JXyjFYeokeS2WN%2FGKgEG1C6xqviRWzNm3H23QPjKdlKAfAFhlTQcufE1mXSnEKn4qDjbuvaGUj9WWBNxpPHxxWk6SP8P3Hj4ypBjIIJyqGOfb6PE4Cy92DeX3l0l6Pi8TVAuUl2WfkuTkZpIVMj08RVVGI6xyoejF1i5tv6yxzLEBCvOJv2nIAc%2FaWZ3oSsl3Dvc2v2CtYcaiAylz356o5QzsTTYm49PhMvIIPiDh%2FQlA7PCqTJMQzdBjrI5vLVHBc2l8qotPzYK5zdiT6KFI7as4LJA2nBNq0b5aUYsG5zBgRpW6Qqh%2BHMfF33Q3OLXkf%2Ff8YiiO3n%2FcE55fEJGTOJ%2F4qzQZprVvVpK0fX2RDg%2FClKCJd1UZ0mEawfnNBXUd2pa4sioT37JiaL7CcZgQ0JLNMVAWSNSCIGPGWTeRe5w6U%2Bnyq%2BAwes74zamZ6UBceAWbidR%2B%2Bsmy1zWgpebm8v%2F1zxKxaFUIQMKuD4r0GOqUBQZHsFsUHAmHTilorJ3462JQp%2FXXhscTeKT7zaihT057J0bjVp%2FZ7zyhZRhFRlLnOq30bBNjOjBK1Ctl678nXrVkobqkxDDq%2FSh1naCye%2FkjvvvI6ptPnx3%2F3uwBURShcNlJscOJbpP42vzyLPukQZHDYcMTuncKJJWqn0sAZJk0j7Ak0EfmigiMbz7d6lENsw5b651G5FeulgZi70Yx%2BfWVCf6Mi&X-Amz-Signature=2045bdbccf479289d253e89be20a99f8987fcc55d2212346f0999c9a87058620&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
