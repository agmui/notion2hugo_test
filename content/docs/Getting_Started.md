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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6BKFW7G%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T131625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQCNww4NdRV31hLLNNykGQAZliAydh8Kh3cbytL9zHkebAIgSjhRBoNZ5BWUJ8zQNt2fu6lhRjauXKU0f%2BfuUVe6iOoq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDGVQ6XDHvHyROlwAbSrcAwrPprUxe7Xr1KcBz9nFZg5tzULKLWx1rDeNpAv2RYtNFw70UWoMg5feArSf0F4k453FYalvLovEW4cpmhO3eJm9epZIgYKW%2FGpRUbEVPEa3knmMvSJTyQXkU1jWX8UM2KZgj5p%2Btur6VOoJp%2FYfPznGlq2oA52FpLswAzO8GbV1udxCzCXYi5SZkilY4nSuOC1gR4RBkFSe1Vfqfs5HiGFMwXojmXneQhQjrvesDAnO3SOFdUAKGAh5ODS4qYp2huxOnZ9ChfHy372Ex3rRRHLYA8ymhu1Erk%2BtnnS05XlRepfSZTnvEZrq%2Fuk57QmqDrtc270E%2BglVMmwcrk0oF03Gy2xOrINII%2FfAvu%2FnYc4mUrWeqCopr2DHRfHiC0evX4Qk9bBR9j87nsTrO16b1pmO3WPfHXn%2FQVcHSTUeEguNU8zZOS%2BpR6RqxmcG1032si0tMET52yfYrw6b2mGpgSPpqJEP2P6JGft9m%2BxyCsczxcmkAPcmrpTRrHcy4WHN8q%2B8JPrjtqzPFsrfpOkfNzT2%2F9m6jOWumtjV3%2F4taeNUkI9K7bitb9Bvgutrf1BfKXO2tLFGIO9a692rhsVAP2VFiUGvh1JHkc7O2G%2BXTllDGlDcUtQnk0YCRAdzMKHbzL0GOqUBU2LeX1QOor8GgXFN8J%2F2ZGR1XiEOEqfCEHd9zMFrqBFll724ejXcAOegBtpc%2FEfacYiEDChoZjzmooAYX7Eq0D1sJoKQvJdWXjynh3kSbHL7h55IBbTO5fpYQdftwl5DYIaJNh2IqGjaS8Ipf4t2MCuerJdjC81hI82bYqoSo9y8JzeX2nPAXac2IETkFDr5rLjz59eB9WwdeanECIZR90uKIyHk&X-Amz-Signature=b7b1f627f0757b31e676f3c443b5f097fd375def2ecc21bdf685b66367941f30&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6BKFW7G%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T131625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQCNww4NdRV31hLLNNykGQAZliAydh8Kh3cbytL9zHkebAIgSjhRBoNZ5BWUJ8zQNt2fu6lhRjauXKU0f%2BfuUVe6iOoq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDGVQ6XDHvHyROlwAbSrcAwrPprUxe7Xr1KcBz9nFZg5tzULKLWx1rDeNpAv2RYtNFw70UWoMg5feArSf0F4k453FYalvLovEW4cpmhO3eJm9epZIgYKW%2FGpRUbEVPEa3knmMvSJTyQXkU1jWX8UM2KZgj5p%2Btur6VOoJp%2FYfPznGlq2oA52FpLswAzO8GbV1udxCzCXYi5SZkilY4nSuOC1gR4RBkFSe1Vfqfs5HiGFMwXojmXneQhQjrvesDAnO3SOFdUAKGAh5ODS4qYp2huxOnZ9ChfHy372Ex3rRRHLYA8ymhu1Erk%2BtnnS05XlRepfSZTnvEZrq%2Fuk57QmqDrtc270E%2BglVMmwcrk0oF03Gy2xOrINII%2FfAvu%2FnYc4mUrWeqCopr2DHRfHiC0evX4Qk9bBR9j87nsTrO16b1pmO3WPfHXn%2FQVcHSTUeEguNU8zZOS%2BpR6RqxmcG1032si0tMET52yfYrw6b2mGpgSPpqJEP2P6JGft9m%2BxyCsczxcmkAPcmrpTRrHcy4WHN8q%2B8JPrjtqzPFsrfpOkfNzT2%2F9m6jOWumtjV3%2F4taeNUkI9K7bitb9Bvgutrf1BfKXO2tLFGIO9a692rhsVAP2VFiUGvh1JHkc7O2G%2BXTllDGlDcUtQnk0YCRAdzMKHbzL0GOqUBU2LeX1QOor8GgXFN8J%2F2ZGR1XiEOEqfCEHd9zMFrqBFll724ejXcAOegBtpc%2FEfacYiEDChoZjzmooAYX7Eq0D1sJoKQvJdWXjynh3kSbHL7h55IBbTO5fpYQdftwl5DYIaJNh2IqGjaS8Ipf4t2MCuerJdjC81hI82bYqoSo9y8JzeX2nPAXac2IETkFDr5rLjz59eB9WwdeanECIZR90uKIyHk&X-Amz-Signature=5d4ddc01279656c0e39253a55effa1b0564a44c5a107c65318bfe7587baacdc8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZKQ7FK6%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T131627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJIMEYCIQCXdhsOe2kJYXGgE8Qk4OYk8uv6OpWatY4kISTNy%2FkxfAIhAP4grSrmyckfUvy3QwMGhVUJnhdk4CyTufoLCPKwb8tZKv8DCHYQABoMNjM3NDIzMTgzODA1Igzvvok2izkc96S2bWAq3AORGOsOoAhJUHKHLwhAzRXPEkuFS4VMUdgxpR4UkCkNRuqWKF2twO%2FS4vXC%2FRa1pvm%2Bh4W5umZQeLWFdsI%2FYRyOobryHEEyR9aI29sPT5tIVieZFXyt7tLxzze9n%2BSRqGy3FM3Llj81sFQDHHRHAj9XgKWIu2cFewu09i3sGUKz4lE417Y0h4KKTMlnmVBHaJ42ifQ57I5ndMqMk%2FfjfmfQuPlRGTKjfiMujbaKcLTsdLTUjDInjn7JF4CJpBr118JpkP%2B06nBbVYO4ku%2BZkQDCNrZ%2Bql2n%2FTOZhBIeVKXOWSB4xBnclK76%2BZ5A%2BR%2F4f4VOnl2zaN%2BdDAp8F7GANUozeRJSkoH8gv4%2B4YoJADy4PU9bdBYVxPYassncbVKI%2B58YNqG4c141oV6M2x7yEa%2BgFyxEAkPGMZNtF%2BwZlGbBJABMXjC3HtX37zxlIKKkM%2Fa04%2BQ2w1C2mksyl1SQNZrCS3DOzBzcYX3bosiWQ56B3zUyy484v7XqY%2BIcLgR5eCTIVSCrm7cvwL%2Bxid%2B%2BS4dM%2B6dhfzMjbbHMxmvPerbK11XIkAxDEdSg7tb6A4duKOelmArjv2awhK0l%2BLe0KiM7JMazkgKLyAMH%2BIw2672DHul6bSEgxZkJ9LwCPDCj6sy9BjqkAfhycvvK3ty2SsNblACMJ1FYDI2ItQjx7iHqP4kDHoXyKbUXmGVOkts4NNpsPrpjgU5GYb3FCjcy4VyNxBfgYiX8304F5B6Qu0jvQkLFKgpZS3qCJg5kIwssIOKlLe1m8wnWKpMc5WyKn0L8%2FTPrgXxJveNQgsTM8ANOB%2Fg19jDXJVUpRlc9GFHgO4%2BTg%2Byoo4LGQvwS0ck9AMSKzkVv4OfH51O2&X-Amz-Signature=7cc8f2b0417ab5fa21366658ebd6b012b486c3485693958c4b00673f2b3ea9cf&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SO3DXPPC%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T131627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQDwRTqCUKqJit7kkPdwLu%2Fz3k0SoAYViCxeKhunxrfcSQIgeGT30%2B5Vtbsd1g9xNMQC9bRcfyZZUQznNcROuUfuCEcq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDLwggLeIgU3wOLqYrircA3jJ8MU8KDxgplSsctH4jrYZsARswzuVbO35d%2FHdJ7yKGS4CMEdBYt228muA5TiZJxFLmSB9vBHOxn51KBLavSbn%2BYi%2BS92%2BQoqoJgnCkwUNT61GWqPXXmf5lzmf9V9bc75kMi4FXvDaq8ooCVawwwHnFBwyV%2B3smzWvMqrqP84xlwtWmRV9DickShRW3jl%2FQI%2FMmibWhZSSwBVVbvH9EsjwFa%2B8HXD5S07RBXyk%2BEwUcFKigzmmiFKhEohCDqaVl7d2G%2BtDGnbGhiwfFpBoDNTHJqzPfXO75ZU3UgBaSuuk8XXI86yzRqTSHqVkUPCuccciLWhBrvtCywkAAw3IZJMu%2BNdMn9Hs%2BuHa7KVUQ%2FAAR7t%2FsQ3BGp%2Bj29pQGahXZYBKPfXmd8jJ0evnq4J1mnQy7XuykeycJgKeP8bawhDqJuTMsZbXbX%2Bv9dJg7P%2FZFJBIHoEaidvKtYKj4KoGONkwZBYyMggUd7TTAKVl5lyjrlqGAPrXrsZwzwqLFNAr1UoCpe8AptnwqvmzvKwZamB1T6eMb7tFbV5f04yIPxqa9hnpALd8XpwuAn5a9%2FAUoj3QzcGtgw6Iyo4WcNahU%2Fz2ZYRnjA%2F3zZYlup%2B43SpbJ30ffahd4ghxTLDoMJrczL0GOqUBq3fuITXrTNBmIuX0XcMIMlbc8tg0xfpeH8rzhdvQWMnNAfL%2BtRwqmL3b9F0Agm9M78fh9KLe0GTYUp0VGzlqHftbqjWPbNBoNZOGF6VEm1fTwFIzWd3RnlcjSP2rBRG3Plt5peeMib0XHgsPJjoMYatwRdBgYpt2K2rIB9DB43sajfLT%2Bcaw7%2BkaOduBo71S70xyvbcsDDJ5Wba0vS9xhj8B4tEv&X-Amz-Signature=58427c9799b81e8e0f65398e0a0d1e5eeceef959fddec4e6d2127fec047599c3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6BKFW7G%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T131625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQCNww4NdRV31hLLNNykGQAZliAydh8Kh3cbytL9zHkebAIgSjhRBoNZ5BWUJ8zQNt2fu6lhRjauXKU0f%2BfuUVe6iOoq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDGVQ6XDHvHyROlwAbSrcAwrPprUxe7Xr1KcBz9nFZg5tzULKLWx1rDeNpAv2RYtNFw70UWoMg5feArSf0F4k453FYalvLovEW4cpmhO3eJm9epZIgYKW%2FGpRUbEVPEa3knmMvSJTyQXkU1jWX8UM2KZgj5p%2Btur6VOoJp%2FYfPznGlq2oA52FpLswAzO8GbV1udxCzCXYi5SZkilY4nSuOC1gR4RBkFSe1Vfqfs5HiGFMwXojmXneQhQjrvesDAnO3SOFdUAKGAh5ODS4qYp2huxOnZ9ChfHy372Ex3rRRHLYA8ymhu1Erk%2BtnnS05XlRepfSZTnvEZrq%2Fuk57QmqDrtc270E%2BglVMmwcrk0oF03Gy2xOrINII%2FfAvu%2FnYc4mUrWeqCopr2DHRfHiC0evX4Qk9bBR9j87nsTrO16b1pmO3WPfHXn%2FQVcHSTUeEguNU8zZOS%2BpR6RqxmcG1032si0tMET52yfYrw6b2mGpgSPpqJEP2P6JGft9m%2BxyCsczxcmkAPcmrpTRrHcy4WHN8q%2B8JPrjtqzPFsrfpOkfNzT2%2F9m6jOWumtjV3%2F4taeNUkI9K7bitb9Bvgutrf1BfKXO2tLFGIO9a692rhsVAP2VFiUGvh1JHkc7O2G%2BXTllDGlDcUtQnk0YCRAdzMKHbzL0GOqUBU2LeX1QOor8GgXFN8J%2F2ZGR1XiEOEqfCEHd9zMFrqBFll724ejXcAOegBtpc%2FEfacYiEDChoZjzmooAYX7Eq0D1sJoKQvJdWXjynh3kSbHL7h55IBbTO5fpYQdftwl5DYIaJNh2IqGjaS8Ipf4t2MCuerJdjC81hI82bYqoSo9y8JzeX2nPAXac2IETkFDr5rLjz59eB9WwdeanECIZR90uKIyHk&X-Amz-Signature=64ff30f1cd31884f33be7a01bb9829a738d79203f312f269a61336652fc1c6b5&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
