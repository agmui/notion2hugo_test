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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJ6DT3TM%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T032824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDhw1rgfB7n4Y%2FsPtmB7wwQMuFnCxWXj32canE6hi1ZxwIgUt9HOopstBJo7Z8%2FeP2%2F3cvC6FDlLqXVOwk%2FVK9yQzYq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDEmwI6iOnpgH0pBGUyrcA3AQ09UXzWwDc6mzf8VaNMuz07UW1iCf6bDbNiDxeKWfWP7emcdTi%2B%2Bo87bJdyqtsi9jOtX2VdSa0AVTBsJoiJmCk9hSqtdwzS%2BTt5milQhmgP%2BsTNzwRA2uOOhHBwP3pNxqV0Mou884ucoyFsp1c1%2BMqvuhCNcCI%2B7WGFBhSBuRu2zBpgtAYXu9%2Fo2vJR6dzF1hwrWL0RQzY32%2BGDeYWndjgV2W8sJW7QbPIcz6RAjruWiGQDXJ2Wxaay%2BYXAVmCH7nExSYbmB7KGHegGv4wczi29qrBgdZsN7SitowdA%2F6oMcRt3Gxigw%2BLLwX5ck7%2FKM8osW9YW9BbjGNObmXRPVSAqZy%2FuBk59ZDaxDLqKmddwUFfYvAdg1rHnM1MKCREkqZ5iLzQ7AqsGYcKShFoFYI4NTtdlbRTIscWI4u2rxRZFOOl8LphsMGMn0Ozf5nS4ZCoKkQl%2BQWZjnOoJnKkGi%2FHcE%2BJ92bVUnsHOHz8AzujuTKGLYApMlVPU1FtnRInsghVxgvyOJ%2BhGq%2FHyKgGkQaFuXATVpXe5xbKq0XGWZ4xaniNVjqtptKqXiWmBaZ8LAclKnqqTbTY9SNYzj4eiP95w3Euc1gV2yCPSfxMdXPyuaoOZO%2FSkwUDMf1MNKDzb8GOqUBrZ%2B5xFOCeNw1SMoYYVz6zF2Y%2Bu1TYSFuMTXBgWGF9U%2B%2FwglRJik6yfzFbusye8Qb8kimUG24n8r8L2OPVGjXtvUPfW76Izylb4TdS1pme8Dj8e4lB1aJre5Finqe48%2F4ZdlzG9efrwelihJaE51%2FQTJ9Ros7QWJnCEnE3cAQ0CUEyFW8U4zHiRf1t%2FyEoENG7%2FingNdCza2l5OUO6Idq%2BVJqNZnN&X-Amz-Signature=df739ba5814c2dddf244bb85fbcc3756623c6753db103126074b022857c3642b&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJ6DT3TM%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T032824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDhw1rgfB7n4Y%2FsPtmB7wwQMuFnCxWXj32canE6hi1ZxwIgUt9HOopstBJo7Z8%2FeP2%2F3cvC6FDlLqXVOwk%2FVK9yQzYq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDEmwI6iOnpgH0pBGUyrcA3AQ09UXzWwDc6mzf8VaNMuz07UW1iCf6bDbNiDxeKWfWP7emcdTi%2B%2Bo87bJdyqtsi9jOtX2VdSa0AVTBsJoiJmCk9hSqtdwzS%2BTt5milQhmgP%2BsTNzwRA2uOOhHBwP3pNxqV0Mou884ucoyFsp1c1%2BMqvuhCNcCI%2B7WGFBhSBuRu2zBpgtAYXu9%2Fo2vJR6dzF1hwrWL0RQzY32%2BGDeYWndjgV2W8sJW7QbPIcz6RAjruWiGQDXJ2Wxaay%2BYXAVmCH7nExSYbmB7KGHegGv4wczi29qrBgdZsN7SitowdA%2F6oMcRt3Gxigw%2BLLwX5ck7%2FKM8osW9YW9BbjGNObmXRPVSAqZy%2FuBk59ZDaxDLqKmddwUFfYvAdg1rHnM1MKCREkqZ5iLzQ7AqsGYcKShFoFYI4NTtdlbRTIscWI4u2rxRZFOOl8LphsMGMn0Ozf5nS4ZCoKkQl%2BQWZjnOoJnKkGi%2FHcE%2BJ92bVUnsHOHz8AzujuTKGLYApMlVPU1FtnRInsghVxgvyOJ%2BhGq%2FHyKgGkQaFuXATVpXe5xbKq0XGWZ4xaniNVjqtptKqXiWmBaZ8LAclKnqqTbTY9SNYzj4eiP95w3Euc1gV2yCPSfxMdXPyuaoOZO%2FSkwUDMf1MNKDzb8GOqUBrZ%2B5xFOCeNw1SMoYYVz6zF2Y%2Bu1TYSFuMTXBgWGF9U%2B%2FwglRJik6yfzFbusye8Qb8kimUG24n8r8L2OPVGjXtvUPfW76Izylb4TdS1pme8Dj8e4lB1aJre5Finqe48%2F4ZdlzG9efrwelihJaE51%2FQTJ9Ros7QWJnCEnE3cAQ0CUEyFW8U4zHiRf1t%2FyEoENG7%2FingNdCza2l5OUO6Idq%2BVJqNZnN&X-Amz-Signature=ef8c45a6cf6ed929bba3ba01c2ac0047c949445c1d7f1c5634048d0e154fb592&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSZWKLIU%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T032825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD53XCsU%2BZbaHbpsgkGA8EbvgBdC4p1eCv7VcVjUEF8xAIhANwt3UALk%2FZCi%2BUdxtsPxkmO11k%2Bzm9Zil0GwyI2QjYwKv8DCFQQABoMNjM3NDIzMTgzODA1IgyxeCoWxCd%2BHoAgV5Yq3APQxfMtgzwNeaU1Qqv%2FeGsKFQ1aqrojhzIYgBFGQNUQsvwpk2f7LXFzUSyCbLt4UGmCp16glKlC%2Fd6Srnr3a94qJYeSRkDRj7RJ%2B68d97UD6smExcE7Z8UKDY%2FlNisDpHJ5aW6bxA90DmHZ9TWIL6Hq43OkVkJkJcyx2fBbryqh4vL%2FwSs%2FPN5vzrIbQPNb4av80rl4s2jSvq%2BJanuSXyKWTEXiFMHbw8J%2F5j4dGJOCetjJEDZmQfpxus7xGYLz32dQHssV%2BKgmx6tB8MxzcUeze5fV5uG4E6Fy%2BvlNfp4iZlxOV5VNe3sg0RibytQu1BFYx24VjPoFhXqF1uaXWe3qYH5AmPtoLP4o1FSNWfPuvdXEdREeV8w%2FJ0hN%2BgS5OA0P%2FJBPNVZzKTyLmgV5LXfAMAFTzOzZ1uiByh0HDTt3kTvXpKShQWI0alg7D5%2Bd1KQsqKuCQqltX7IDk%2BZcH4SpcSvkv8AMXkPdm%2Fn0cF3J6JHA5pqxnwtKiAeu5krQ%2B4iP%2BXEdSO72BcMf10CxvgmA9cfTHHxcx9Tz2Np3jpr0sIvMrwRDGgjDxFinwWPo%2BwCk01XBACQGky5NZVDa9mpb7ScYP0%2Bqs7okqlq%2FljcAQv0sZvGrCGf7RXw%2FkDC3g82%2FBjqkAbdalS1bf0ZzbyEuqqAEHLugCrsM3EKw7Kib7SBWa2nnBTvQ2Ueey2qn9zc0I9v84YdFb4Mz691zQVq6j7ugvJwiA%2BMC0Sn3%2FvurzCJe5gUevTqfc5DdHGXNNBkyjtdgHPJn%2FFNsMfWWyfvCjGFWzvQwi0ZK1nVg%2FuVFKFd2mo%2BkYKw6Ff%2FTYMM7mCkLywGQ6r4PdoiVI7QijMt17D0NUzn96XWq&X-Amz-Signature=d36f974c5e87f245051d23b80b46464e63c205dd3846479b8377d8796517d922&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663D37RNQ2%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T032826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0EMrwRuX%2FVtaOAa9UzMyHpF%2Bif3VOHnJY3NQzSO%2BxaQIgUm7Gs7Gf7jcgT%2FVbyUVWK%2FKyB1slRrhPzukod9b%2FkvIq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDEJ%2BiNalywDhjf9VrSrcAxdbqA9zz0uWT%2BabAmcIsZMIta4CkuwsmseLqF8eXI5JdLjD3QLWaSTElGNyke%2FdjpIorqCCi7X6TUbSoh1lRozVrSvbWrpNhI8iYawM6ySY%2FDk%2BJAxoRdNBp5MxEijYzmthqjBejsfZi3hY0nIGohDMXbIMl7ML9ds8QFZICyk5cB%2FBRfIRqdbprBqixzagBtmBRVQ14vu4y0GzAXHNAxAUPTnlO5DW8kY1H58VE5ImnkDe%2FExoOjGQt0IlWNEgdRJdpecap%2FrrQOi288sgBKPSdPeQ0PFifOmoVA8bc8YyybQRW3C0DJBaJGt9jEdbsd3QvIv3jYO3A4OWM6qSjFI8dC6yQTHGeVU2XtON1Wf1bj8OUY6NXD9jM%2FFg9SE%2BjYemSl392GB5V483C36PGqL88e2ftK3rA0VO81ipCWlcwQ81R3yjBKaK6OA1hBwyDnZ8f%2B%2B2ysd1qYuBiUafEMqa3VO8lJaVeIwSMBRJrX2TuUiZYuzOudXQUljjHxx%2BVW4UmN%2BH8gCvlvSsfj%2FvPGEPkeMMQvVnbTUumb80u9BjwbRe%2FRLAgqECHW3jl6Kuab5RnrarsAUXb45IDXYU71VR0w4AUbD5hdGTJyWPbpYAgAB2PKJeaj4pAtUzMKWDzb8GOqUBzn7IlvBjDD1ukxo4oPjRI9YfNY9qNArgzWInwG7YpGjHlJQ0zxzUzfv6WSV81CdMpW0mgXwpqwqHVWF3AiPHg1Rfea6SyRqqnIA1yLZZSAzNfhVPn3DJJTNylW3uUPgVN30ZSTUIplviRIVMdMnAeelf2UVpCYvwiyh9Pu6GsIDBDOlyejnk3d7Hfp3bxhiQ8gZoj5rN1lJb5lWXqZdw7EEJfa99&X-Amz-Signature=85753f3ba20f188260b653a776f7ceb5069f2797f421063155eea59804024ca1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJ6DT3TM%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T032824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDhw1rgfB7n4Y%2FsPtmB7wwQMuFnCxWXj32canE6hi1ZxwIgUt9HOopstBJo7Z8%2FeP2%2F3cvC6FDlLqXVOwk%2FVK9yQzYq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDEmwI6iOnpgH0pBGUyrcA3AQ09UXzWwDc6mzf8VaNMuz07UW1iCf6bDbNiDxeKWfWP7emcdTi%2B%2Bo87bJdyqtsi9jOtX2VdSa0AVTBsJoiJmCk9hSqtdwzS%2BTt5milQhmgP%2BsTNzwRA2uOOhHBwP3pNxqV0Mou884ucoyFsp1c1%2BMqvuhCNcCI%2B7WGFBhSBuRu2zBpgtAYXu9%2Fo2vJR6dzF1hwrWL0RQzY32%2BGDeYWndjgV2W8sJW7QbPIcz6RAjruWiGQDXJ2Wxaay%2BYXAVmCH7nExSYbmB7KGHegGv4wczi29qrBgdZsN7SitowdA%2F6oMcRt3Gxigw%2BLLwX5ck7%2FKM8osW9YW9BbjGNObmXRPVSAqZy%2FuBk59ZDaxDLqKmddwUFfYvAdg1rHnM1MKCREkqZ5iLzQ7AqsGYcKShFoFYI4NTtdlbRTIscWI4u2rxRZFOOl8LphsMGMn0Ozf5nS4ZCoKkQl%2BQWZjnOoJnKkGi%2FHcE%2BJ92bVUnsHOHz8AzujuTKGLYApMlVPU1FtnRInsghVxgvyOJ%2BhGq%2FHyKgGkQaFuXATVpXe5xbKq0XGWZ4xaniNVjqtptKqXiWmBaZ8LAclKnqqTbTY9SNYzj4eiP95w3Euc1gV2yCPSfxMdXPyuaoOZO%2FSkwUDMf1MNKDzb8GOqUBrZ%2B5xFOCeNw1SMoYYVz6zF2Y%2Bu1TYSFuMTXBgWGF9U%2B%2FwglRJik6yfzFbusye8Qb8kimUG24n8r8L2OPVGjXtvUPfW76Izylb4TdS1pme8Dj8e4lB1aJre5Finqe48%2F4ZdlzG9efrwelihJaE51%2FQTJ9Ros7QWJnCEnE3cAQ0CUEyFW8U4zHiRf1t%2FyEoENG7%2FingNdCza2l5OUO6Idq%2BVJqNZnN&X-Amz-Signature=31abadd9e1c5066cb934f1957d1e49989582f6e78bb84a72d640de947cf157d0&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
