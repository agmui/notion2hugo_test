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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667B3JKDSU%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T061142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIANW3dWcCrZTXYXcSJZn7jJVqReVOkDmCdprN10qgIGUAiEA24C%2Fib4y7rm2QbRqXJNRJ8yIUnt90DArrz2qBPJViJEqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGyKV4pcsPUVqi6YJyrcA3ugmfNgYhKFf9idx3X%2Fyv96hEXpjhb%2BaO1HZVwjsQ1np%2FXzcvmIOlF%2F3VdZgui3w%2F%2B27O7VGZkZ%2FK2Dt3%2BmcbPImmS%2FhfDC4UDcbgK6DcuyNXUPsD0X%2F%2FCu%2F%2F1OHY5Hqi3h1y6vwVzCrTpBZ4H60BB88uRZA1tmNCIJhS1MIrR5LZDXJtaO3tATNT8CL2b%2FVtJ8IwNeMB6RUcVjVZcKpoWa2LWwUz1IHp9nr5L50%2BYbNTgNvm1rwP4DUBYvPjtevyj8KXMKvUUwmyLeE5HjrzOzXmqHqUsMCbs9onaRRvhpR2Bus1%2Fs%2FQXbpSCE6qVH0i8h8gQOwnBOuz%2BGZsGMGYe2XO5uHAd3DUWKfatPa9Np5RJ5yl6Us4oq%2BKXZ84S5VxB1FA9%2BaKa3MJmO%2FEcDDn7A%2BxPCLa4YlYZ7KDZpOyXeixQGAE7LW3%2B6f4ITc4x%2B61lTlrKaHYtQQG57mov6ISP89%2Ft9wxtlGnmRT6mVw5LQMVfI%2FJPZKMRvn3euIu8AtA8qj63RUK1QTb0YM65W6XglbESXy5gTnFGuyIVyL5Xlm%2FEOIRXH8B7OyJvABFIpxYX3gD8A2Td0d4YU%2FvroHJk4zpfGGMrLbb2p7Nxizs%2FSZSiiK1kajdZ%2BWATkMJnH7r4GOqUBibGCpt2ztsRmzA3ydwWNV464oNtJLqSFHCnuYwdft2F%2BIf7OdEFOEAH3qiMx%2BV5sRDuEwE2iflk7Di0q0n%2B6yJbGfLqstj%2FSyYZ%2B4T5BDrIILT4UFtRXWA5xloZd%2BYpReBx74Wd4IMhuoRZnDTqh13pszemQNrRkyTSsoeptdsiXyFtROvIeZX3Gn2xxVQKS2UPhML%2FPOaNftJwr5rhO7U6efNrL&X-Amz-Signature=d4d9475a93d47489224b019bb5469bf6ae7250ad31bc1de9f09867ed6d9c7aa2&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667B3JKDSU%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T061142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIANW3dWcCrZTXYXcSJZn7jJVqReVOkDmCdprN10qgIGUAiEA24C%2Fib4y7rm2QbRqXJNRJ8yIUnt90DArrz2qBPJViJEqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGyKV4pcsPUVqi6YJyrcA3ugmfNgYhKFf9idx3X%2Fyv96hEXpjhb%2BaO1HZVwjsQ1np%2FXzcvmIOlF%2F3VdZgui3w%2F%2B27O7VGZkZ%2FK2Dt3%2BmcbPImmS%2FhfDC4UDcbgK6DcuyNXUPsD0X%2F%2FCu%2F%2F1OHY5Hqi3h1y6vwVzCrTpBZ4H60BB88uRZA1tmNCIJhS1MIrR5LZDXJtaO3tATNT8CL2b%2FVtJ8IwNeMB6RUcVjVZcKpoWa2LWwUz1IHp9nr5L50%2BYbNTgNvm1rwP4DUBYvPjtevyj8KXMKvUUwmyLeE5HjrzOzXmqHqUsMCbs9onaRRvhpR2Bus1%2Fs%2FQXbpSCE6qVH0i8h8gQOwnBOuz%2BGZsGMGYe2XO5uHAd3DUWKfatPa9Np5RJ5yl6Us4oq%2BKXZ84S5VxB1FA9%2BaKa3MJmO%2FEcDDn7A%2BxPCLa4YlYZ7KDZpOyXeixQGAE7LW3%2B6f4ITc4x%2B61lTlrKaHYtQQG57mov6ISP89%2Ft9wxtlGnmRT6mVw5LQMVfI%2FJPZKMRvn3euIu8AtA8qj63RUK1QTb0YM65W6XglbESXy5gTnFGuyIVyL5Xlm%2FEOIRXH8B7OyJvABFIpxYX3gD8A2Td0d4YU%2FvroHJk4zpfGGMrLbb2p7Nxizs%2FSZSiiK1kajdZ%2BWATkMJnH7r4GOqUBibGCpt2ztsRmzA3ydwWNV464oNtJLqSFHCnuYwdft2F%2BIf7OdEFOEAH3qiMx%2BV5sRDuEwE2iflk7Di0q0n%2B6yJbGfLqstj%2FSyYZ%2B4T5BDrIILT4UFtRXWA5xloZd%2BYpReBx74Wd4IMhuoRZnDTqh13pszemQNrRkyTSsoeptdsiXyFtROvIeZX3Gn2xxVQKS2UPhML%2FPOaNftJwr5rhO7U6efNrL&X-Amz-Signature=59af7fa944e2853d8b76d80b79035da2b13162496c64a246d4b6f5de60ad55e3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DPYFWU3%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T061144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIFy91MUyuZMcP%2FwRo9dTwbMihiNsejbCIbmXL851rZg3AiEA%2FaXzDYl9QhbaxJC49FXLVWau1UkTEqjdwzTpv6v%2BG3UqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK8d3hZgi7BeqbLZiCrcA%2FFDyoZ%2FwVz6gWeo7yPstIaFSgiKWY8ORUAwkt%2BYvZ9kZSQSG3bOTQWUo%2FcXjgepJ7HghFmLsUX7d6CNrOEulQzkYJqEI9yDDj4d45XxDdKmhvhJF1zX6u3gfzYtTke9WbSIlx0wzCxNY%2FuHcTulLnhUBUQFivsMgrPilmpba8R5dRgBER%2FQHwSX7YCggr5ZEfrTY%2FsMlbL%2Fx7Cphdofz6Mtr3pwy1SulA%2BOreI5sY%2BIbAEfoV5sv0hF2umpGkJPg29vevZYTZjYM%2B5AH%2B%2BKeS%2B%2FBNuZSFRrESpt2ouKfOWdWegJUFiF2FPJomV2G0RcYA%2BnQGJd%2FNzxb74zzb%2F9iwh6MlxUI4p6ZzAVKDvZ6lkp3y2KPjUeqplOMslSZL4U9GbVqs38I8FnCVCBophPOdJICkmabH4qX2%2Bl%2BqUMnkBeHUjI%2FYgae1JfVPI9l6pgMVk%2FOtGAOwr9va90c2DRK8b7HrhumVlmxtvHJotLZQ1rNlTrkzGpfZPJXZPd6TwvlpQnGNzxJ76JX%2BVWJ1j6Xvqg%2B8%2FQ8HcE1foRS8pdP1gknpq%2B5ENXrzp5RsMzXDhkyCxxijn4q55d2KwTIvKya0uC7V10mWwC6CtWmDgkODRBDPaWuEkzWem52yqUMNXi7r4GOqUBarYVoO6%2FpTpqUXM%2FfC%2FDWGdcYHofo2V1CHWHUW01%2BwxSNztyqAXjL3YtUKGx3CXuA62HUtAmmUXtbkY%2FAhSaJ14GMeF4hEXNfmXTsh8ZgPT14OcM60gBoD0xv8VdeL3cT11skbcNYkcyFdHnRelFhbzHn9ebAOktPB9mFzN1iBgoRj5zXRUmigq9wo0sh9AlUM3gdlRjvlOoZ1s9VcfARA4Puvhg&X-Amz-Signature=2f2471aa09bb81e66fbf2ecc37ef4b62c731c56b2d17415f2c92a6e243d097bb&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SY52DZU%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T061144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQC%2B%2BVR7hBKJ%2BjefRsslWBdptPxh1RrbIsm64Qj37gN%2BMAIgM%2BuPWyz6RxWGVK3HLjgcv8ZISdq8xXf%2BsZzkiSLpkTUqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJtE%2FS%2Bo2zQhDMNhhyrcA8MTeGWYqA5W1PyZIK9swhWDs7Spb1T6%2FXUeN0q3tyQY9NZ%2Bqw%2F0%2B8gUZ1EXOunD9sDjWDLwsmens3MWsS7RyUT%2FBl1ALYgoFt2ZGXFa8Y80cOmvRyxY2%2BJy11svUqciYM0PMkniWOPkbldHd%2BQ7Zs0NLTT3Mm7782humZrUGsFECyUO8xmUBWwVjD2lrme4T%2Bq6gWB73gx4xF6blWipB%2F2wXxU0G9D1O0iQFaNb3uibFTkJtVMoh0r3PnBZY5jpDRfa9j4r3odVfRcF%2B%2BPkBKyKAc1Ir5omIMruzoZyYgkFZitBORG02yxlZL8dikINs8pyK0pHQUF36eehgR0sSTDnrNF6pEO02utHYYVsDTCrRXDXiX%2BEGl3hb55R9YOs5axbdTN%2FzKQfrCeE6DvYhQFEYwu3j8VHf6B3jCAWBL9qjmdW407b2SNH0KWjL66A3KY8dUddUaIX6WOEItSJD4%2FWVG7e%2FuwA2ml5ivK1X2mdHIlGGxckup%2ByrvRHK1YGqqsYX%2F3xmOcvxWlDs%2FFyQo3r1GdVO5zC9c3OMtRk0oK%2F0O19Jv1FO5ADZ%2FZYXtT17zcTnbDAGhqreNBVvSPUbpgHkTbkMW%2BPVUxgaOKUStYsahi5blTxjsE3PV06MIbI7r4GOqUBBE%2BQBZli92tqCf9uHxywmCisrnpL7sidVXnYm4UXPkSq27SQ8eEotxzszH2uzlQgHKSPKitp9syJhojqlLq2BfqftaguaXrkxDN3PzV278psTEfcgZg70YjDkU%2FSfXz1lCCzzsr9vzqoCcH7UeSxBYNsKesyMsxbzHkHd1Liomy9vzQ7Ig4361RWHgWgaU3dDF1WPPvTLoxGn31dN2R7kHA9mOXL&X-Amz-Signature=7351334fdd28f7636bac6d805e6a2d3dd177d94a427a6414539da2b416ce23b8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667B3JKDSU%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T061142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIANW3dWcCrZTXYXcSJZn7jJVqReVOkDmCdprN10qgIGUAiEA24C%2Fib4y7rm2QbRqXJNRJ8yIUnt90DArrz2qBPJViJEqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGyKV4pcsPUVqi6YJyrcA3ugmfNgYhKFf9idx3X%2Fyv96hEXpjhb%2BaO1HZVwjsQ1np%2FXzcvmIOlF%2F3VdZgui3w%2F%2B27O7VGZkZ%2FK2Dt3%2BmcbPImmS%2FhfDC4UDcbgK6DcuyNXUPsD0X%2F%2FCu%2F%2F1OHY5Hqi3h1y6vwVzCrTpBZ4H60BB88uRZA1tmNCIJhS1MIrR5LZDXJtaO3tATNT8CL2b%2FVtJ8IwNeMB6RUcVjVZcKpoWa2LWwUz1IHp9nr5L50%2BYbNTgNvm1rwP4DUBYvPjtevyj8KXMKvUUwmyLeE5HjrzOzXmqHqUsMCbs9onaRRvhpR2Bus1%2Fs%2FQXbpSCE6qVH0i8h8gQOwnBOuz%2BGZsGMGYe2XO5uHAd3DUWKfatPa9Np5RJ5yl6Us4oq%2BKXZ84S5VxB1FA9%2BaKa3MJmO%2FEcDDn7A%2BxPCLa4YlYZ7KDZpOyXeixQGAE7LW3%2B6f4ITc4x%2B61lTlrKaHYtQQG57mov6ISP89%2Ft9wxtlGnmRT6mVw5LQMVfI%2FJPZKMRvn3euIu8AtA8qj63RUK1QTb0YM65W6XglbESXy5gTnFGuyIVyL5Xlm%2FEOIRXH8B7OyJvABFIpxYX3gD8A2Td0d4YU%2FvroHJk4zpfGGMrLbb2p7Nxizs%2FSZSiiK1kajdZ%2BWATkMJnH7r4GOqUBibGCpt2ztsRmzA3ydwWNV464oNtJLqSFHCnuYwdft2F%2BIf7OdEFOEAH3qiMx%2BV5sRDuEwE2iflk7Di0q0n%2B6yJbGfLqstj%2FSyYZ%2B4T5BDrIILT4UFtRXWA5xloZd%2BYpReBx74Wd4IMhuoRZnDTqh13pszemQNrRkyTSsoeptdsiXyFtROvIeZX3Gn2xxVQKS2UPhML%2FPOaNftJwr5rhO7U6efNrL&X-Amz-Signature=fecdef821ef216e3d4a93a8ec71c11ebca17df38fd19db2d849beb0d2012579b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
