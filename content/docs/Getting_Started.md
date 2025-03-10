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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SSSAFPB%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T015724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQCilBHKB%2BRUnsPd7nZ%2F7jZCJZrOc4kohGG4%2FYVbdpMi7QIhAOsiV%2F0%2BgcK7AOFZyNHepnspABe1jH7LOIJXZ7K3TXQhKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwYTbHWCGCpjAmp9%2F8q3AM4usRtt%2F21bHK3KAw211xHlL6mmnHlNohRkXRRGJU5%2BiawPqHAfg18cNxKlr66pMyJHYD93zBs%2FG3jjT5PVIXu9X3xK2m0K8IfQF3EZqbmxFAAX12fNnF9bWqJzQePw%2BKStlAYI7UbNJ9FDh3bT4qa%2F7w757b6mlkotZoZ65q3l0IqtX5do2MkoDLdTbAiLaxMQb9Y44YIG6XeCjx4%2FmWNWCpKNtR37w81KemgkIXXjV9Vj6p09zolWEZtnXbUBjEstwOvhtbA2897I1OyatZhAvRGCt969U0u3pM1afJqPbgXf4v9%2B7PMdS8%2B8DvF8JQlYBKwSwX34dbgrFnBy%2BdLn0t0OisTWfCL9u1ihU4V4mO8tOJW0oJH%2FWeGpR6Fv3oA%2B9BAezStcg0iMCAflJpVSUn1z2VxcDPuEHHyRxfJaWuHR447O2BavpwAzH%2F6bMokeyMVZf%2BxId8UQ6Ml7VXFxYn3fcoViKtgrQyiNqT4Syn9SHC%2BANMM2%2FBx%2BdltXYud6rw2uGLkKv3A3RhdbH0c9J%2Fp7sBM%2BKa5KvlpJXB6h9nWi2iMOLq5a4oQYYBIIQ9TfBf9NZp6gCV%2FZEuvyqPwVvq75B4T4ZcGnJzzzzLQgs7jnYP0ygMkZVloPzCi%2B7i%2BBjqkAQXopPyqiMaCQcmZUOSbztJvr6Vt6ke52TVdrktm5o24EOJOhm%2Flh0oxRL8uspzGBaHWrMlUNlQzKsQiXu5WCKtl%2BtFKt5Q%2BAObP51QTikNJ%2BkBg7edWvL924ruzq0Xzhk2N%2BWLccJRG%2BrmVzifqUWSpy2HUm1QyqCEd7ZtTdmTWDit8euKdUSAx%2BfJYMuwdLCWMklrqQy4jtijxRAeHGkZMPM12&X-Amz-Signature=f28ff3bf45864b33128a48b010e1fdb190a764701531a8be8cc2fc3db57d5902&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SSSAFPB%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T015724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQCilBHKB%2BRUnsPd7nZ%2F7jZCJZrOc4kohGG4%2FYVbdpMi7QIhAOsiV%2F0%2BgcK7AOFZyNHepnspABe1jH7LOIJXZ7K3TXQhKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwYTbHWCGCpjAmp9%2F8q3AM4usRtt%2F21bHK3KAw211xHlL6mmnHlNohRkXRRGJU5%2BiawPqHAfg18cNxKlr66pMyJHYD93zBs%2FG3jjT5PVIXu9X3xK2m0K8IfQF3EZqbmxFAAX12fNnF9bWqJzQePw%2BKStlAYI7UbNJ9FDh3bT4qa%2F7w757b6mlkotZoZ65q3l0IqtX5do2MkoDLdTbAiLaxMQb9Y44YIG6XeCjx4%2FmWNWCpKNtR37w81KemgkIXXjV9Vj6p09zolWEZtnXbUBjEstwOvhtbA2897I1OyatZhAvRGCt969U0u3pM1afJqPbgXf4v9%2B7PMdS8%2B8DvF8JQlYBKwSwX34dbgrFnBy%2BdLn0t0OisTWfCL9u1ihU4V4mO8tOJW0oJH%2FWeGpR6Fv3oA%2B9BAezStcg0iMCAflJpVSUn1z2VxcDPuEHHyRxfJaWuHR447O2BavpwAzH%2F6bMokeyMVZf%2BxId8UQ6Ml7VXFxYn3fcoViKtgrQyiNqT4Syn9SHC%2BANMM2%2FBx%2BdltXYud6rw2uGLkKv3A3RhdbH0c9J%2Fp7sBM%2BKa5KvlpJXB6h9nWi2iMOLq5a4oQYYBIIQ9TfBf9NZp6gCV%2FZEuvyqPwVvq75B4T4ZcGnJzzzzLQgs7jnYP0ygMkZVloPzCi%2B7i%2BBjqkAQXopPyqiMaCQcmZUOSbztJvr6Vt6ke52TVdrktm5o24EOJOhm%2Flh0oxRL8uspzGBaHWrMlUNlQzKsQiXu5WCKtl%2BtFKt5Q%2BAObP51QTikNJ%2BkBg7edWvL924ruzq0Xzhk2N%2BWLccJRG%2BrmVzifqUWSpy2HUm1QyqCEd7ZtTdmTWDit8euKdUSAx%2BfJYMuwdLCWMklrqQy4jtijxRAeHGkZMPM12&X-Amz-Signature=af9e0e24b1214fc0912ef5abeec45ae1eb11e7522f0a0c987871c6e2381c72bb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2A2C2ZG%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T015731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQD1vPPHAZ6mkGQbeiAoed3yP3I62PqvYidnMPKXoAi0ZgIgccIOLAA2np4KGCKGq6krhCUKwiN8%2BqZ9hMDUW0%2BizWwqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPxJStZYzF2UZT5dsircA%2FFInEipAZE64PEe7E2KJGUn37jcPjJpsPHmheIErDHZ0oAehUcmMlS4T1jyE6TYi0cvX6nzyOry6IwgqCVMIPixpGiyuLKsa8%2F%2BrInAYr3WsjTk%2FVgAlx1IeU43dtOB%2BtfpWbFtW%2BPbpasamDOqWXv%2BpAzXoyu0%2BEo5lEk7cG5xIPJzjFcbE6T1UnyNNtz92wXS5SE%2By4bHYqSDW%2FuBFROqYFmrXlbjO2B5lC%2FIDdgkQHcV5NS594jL%2BrsAr4RKPXuXiOM0E7pGhhF373iRaRxauCbX5pnaQZ5v8BVKShKHO5LIjp8CZGwhV%2BG8qPNth2a8IU5YOQ5p5jffOvmOhdpM1aIYYHlw3Oo%2BxHIjzXYm%2BUcMAFuqxNrUMpg4ypBEZOrbHkZe897wEUgqyysHoRAPOlgg5sZGfg8NCq6iXXkIfS%2BigWVIDoiWMJ%2FsaFk%2BWzitFvkmhIOacj049VvEw3nbzrzhLxsScTavFZpmjF4TH3Ggt0wu7C5Csw3Aw6bYyt2aQUwOnQJNO8GwIeSC%2Bu4CjMsmlonlE1WTTOMMjDOLP3SsBbhVmuUqAd00psY3DOR%2B%2BYsWWB9WurR2Sj5RPysdpWN4F%2B9nSSDPWxRBYgXvxbRPet99O7DXcf2LMKH7uL4GOqUBA33t93LbMtYFp8pEWwqXu5JRo3dW5SpkDr%2FePw5ZqHtNRaMNX6ips4MBqNBwcuQWsUu8IaSdQ1KFXSY7nRQFcrdHqQHTzsypr%2FY4h1q7%2BjAU%2Fef63V4uaNdMf%2FFz8ecU7kQyE1VWeFiUhDH1JCufkGceSe5us9jciCvB7BHbTXhEoYsHmIkIEB8y6TUskGMQ5BP4y5hQyqdLTiInoqA%2FMfCtGHzj&X-Amz-Signature=7968b730359e0cd0c9cec0d94e4fd3177e286cfb63f784a7d4b6baa4deda06bf&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2A2C2ZG%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T015731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQD1vPPHAZ6mkGQbeiAoed3yP3I62PqvYidnMPKXoAi0ZgIgccIOLAA2np4KGCKGq6krhCUKwiN8%2BqZ9hMDUW0%2BizWwqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPxJStZYzF2UZT5dsircA%2FFInEipAZE64PEe7E2KJGUn37jcPjJpsPHmheIErDHZ0oAehUcmMlS4T1jyE6TYi0cvX6nzyOry6IwgqCVMIPixpGiyuLKsa8%2F%2BrInAYr3WsjTk%2FVgAlx1IeU43dtOB%2BtfpWbFtW%2BPbpasamDOqWXv%2BpAzXoyu0%2BEo5lEk7cG5xIPJzjFcbE6T1UnyNNtz92wXS5SE%2By4bHYqSDW%2FuBFROqYFmrXlbjO2B5lC%2FIDdgkQHcV5NS594jL%2BrsAr4RKPXuXiOM0E7pGhhF373iRaRxauCbX5pnaQZ5v8BVKShKHO5LIjp8CZGwhV%2BG8qPNth2a8IU5YOQ5p5jffOvmOhdpM1aIYYHlw3Oo%2BxHIjzXYm%2BUcMAFuqxNrUMpg4ypBEZOrbHkZe897wEUgqyysHoRAPOlgg5sZGfg8NCq6iXXkIfS%2BigWVIDoiWMJ%2FsaFk%2BWzitFvkmhIOacj049VvEw3nbzrzhLxsScTavFZpmjF4TH3Ggt0wu7C5Csw3Aw6bYyt2aQUwOnQJNO8GwIeSC%2Bu4CjMsmlonlE1WTTOMMjDOLP3SsBbhVmuUqAd00psY3DOR%2B%2BYsWWB9WurR2Sj5RPysdpWN4F%2B9nSSDPWxRBYgXvxbRPet99O7DXcf2LMKH7uL4GOqUBA33t93LbMtYFp8pEWwqXu5JRo3dW5SpkDr%2FePw5ZqHtNRaMNX6ips4MBqNBwcuQWsUu8IaSdQ1KFXSY7nRQFcrdHqQHTzsypr%2FY4h1q7%2BjAU%2Fef63V4uaNdMf%2FFz8ecU7kQyE1VWeFiUhDH1JCufkGceSe5us9jciCvB7BHbTXhEoYsHmIkIEB8y6TUskGMQ5BP4y5hQyqdLTiInoqA%2FMfCtGHzj&X-Amz-Signature=f536e608c5138f0f039f587d32ec5332cba70cf2cd5b2556a619f2846e2288ac&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SSSAFPB%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T015724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQCilBHKB%2BRUnsPd7nZ%2F7jZCJZrOc4kohGG4%2FYVbdpMi7QIhAOsiV%2F0%2BgcK7AOFZyNHepnspABe1jH7LOIJXZ7K3TXQhKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwYTbHWCGCpjAmp9%2F8q3AM4usRtt%2F21bHK3KAw211xHlL6mmnHlNohRkXRRGJU5%2BiawPqHAfg18cNxKlr66pMyJHYD93zBs%2FG3jjT5PVIXu9X3xK2m0K8IfQF3EZqbmxFAAX12fNnF9bWqJzQePw%2BKStlAYI7UbNJ9FDh3bT4qa%2F7w757b6mlkotZoZ65q3l0IqtX5do2MkoDLdTbAiLaxMQb9Y44YIG6XeCjx4%2FmWNWCpKNtR37w81KemgkIXXjV9Vj6p09zolWEZtnXbUBjEstwOvhtbA2897I1OyatZhAvRGCt969U0u3pM1afJqPbgXf4v9%2B7PMdS8%2B8DvF8JQlYBKwSwX34dbgrFnBy%2BdLn0t0OisTWfCL9u1ihU4V4mO8tOJW0oJH%2FWeGpR6Fv3oA%2B9BAezStcg0iMCAflJpVSUn1z2VxcDPuEHHyRxfJaWuHR447O2BavpwAzH%2F6bMokeyMVZf%2BxId8UQ6Ml7VXFxYn3fcoViKtgrQyiNqT4Syn9SHC%2BANMM2%2FBx%2BdltXYud6rw2uGLkKv3A3RhdbH0c9J%2Fp7sBM%2BKa5KvlpJXB6h9nWi2iMOLq5a4oQYYBIIQ9TfBf9NZp6gCV%2FZEuvyqPwVvq75B4T4ZcGnJzzzzLQgs7jnYP0ygMkZVloPzCi%2B7i%2BBjqkAQXopPyqiMaCQcmZUOSbztJvr6Vt6ke52TVdrktm5o24EOJOhm%2Flh0oxRL8uspzGBaHWrMlUNlQzKsQiXu5WCKtl%2BtFKt5Q%2BAObP51QTikNJ%2BkBg7edWvL924ruzq0Xzhk2N%2BWLccJRG%2BrmVzifqUWSpy2HUm1QyqCEd7ZtTdmTWDit8euKdUSAx%2BfJYMuwdLCWMklrqQy4jtijxRAeHGkZMPM12&X-Amz-Signature=611daf7f658d4ee9d9559313fd96d7bd33db81d490e90169608796ba22760671&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
