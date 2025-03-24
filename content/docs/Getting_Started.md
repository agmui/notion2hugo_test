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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2UPKB3A%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T170729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGrMDD1aZEjvQn5rjRCJamPGhpwyu4vpHnGEMh4gepPiAiEA9UA5z5x2imGVCowAcy0AD%2FEkyitYmtCxWa9QYlTjMYQqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHQ5XqDk91VzuGYzYSrcA%2FpXbGHeK2A5FbC5CFfyFtyWQzBwSuLoJGPwz3FSSnqNljx2VVmTqNXfcQYxgrHXL0s%2BBat7%2FVQs0SCjvQ0rG7cfwkUghKJxEJqFCLphW2aSWQZJG3LUyw%2F30lLq8dE04Gb2%2BJduGGvfNIF8PGHPmlwS8iuwt8W3G6OS8rxGUjijTvVMjXRWotwWe5WzdGpdVFsMM3pk6H7j4inL9luJMhFrHS3StflKTq90ZhWXe%2BrC6uIPwe5GHzzxNAEu6Fd%2F1qo%2BFTKkV2%2BfeRIWdbfRPxzn9%2BlPpngvWmPZw0jwpNBFfWTItSPKDtgoLfy2uFIeKmTvdUd98dSjKWt2tksyKYmO6OzwhU8hEhWCZcCZEh%2B0CaPF5uW5rVOkKsis3AbFzHaTIJk5dcZlw7nYJHiQI2tfC%2FEGgYE%2BIMAZ3iHuSzX3CQT2PvfNWHolmHlqjahahLtCZqWW1jZymWUCBaJIGMONJTmZFAVDZkYRrDCMBGsUm%2FyzuvlscTLniRMrnUsX685MxfpDE1G82wxdumuEQAsJ0b0tEELhfncylbfL9r7C92Vy2JIbxNrkx4PHLrRPKAQ2C00DOwRR6mBowvEjgaAdQ4qieXnlQke3q7P8KYsQBZHDl%2FMIT1eM0jTzMNL9hb8GOqUBnCigqQs3YptWpE5YJVuPKnWU1PB96WdlOm1Q8Y8whBJGvN8bfE9ghfL2W7lo%2B%2FwXwBpUnWyEz%2FZbHwRxJRLvWIn88nUnTN3C4tLO5eyVV%2FedOKsCN8ze3kiQGg6KkepvJR3jozIBLQ8o1bryPGBhoIlD7jqB9DPSPMCu2%2F5ee7DI%2FOEk%2FqdYkn5oUFNv93ooZFMm5sCizlCdGXLvGCOqJ9q5ZUrp&X-Amz-Signature=960b892397ae1ee95d8ba3972c144432a595190ed18f87e9536190a04ea253f4&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2UPKB3A%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T170729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGrMDD1aZEjvQn5rjRCJamPGhpwyu4vpHnGEMh4gepPiAiEA9UA5z5x2imGVCowAcy0AD%2FEkyitYmtCxWa9QYlTjMYQqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHQ5XqDk91VzuGYzYSrcA%2FpXbGHeK2A5FbC5CFfyFtyWQzBwSuLoJGPwz3FSSnqNljx2VVmTqNXfcQYxgrHXL0s%2BBat7%2FVQs0SCjvQ0rG7cfwkUghKJxEJqFCLphW2aSWQZJG3LUyw%2F30lLq8dE04Gb2%2BJduGGvfNIF8PGHPmlwS8iuwt8W3G6OS8rxGUjijTvVMjXRWotwWe5WzdGpdVFsMM3pk6H7j4inL9luJMhFrHS3StflKTq90ZhWXe%2BrC6uIPwe5GHzzxNAEu6Fd%2F1qo%2BFTKkV2%2BfeRIWdbfRPxzn9%2BlPpngvWmPZw0jwpNBFfWTItSPKDtgoLfy2uFIeKmTvdUd98dSjKWt2tksyKYmO6OzwhU8hEhWCZcCZEh%2B0CaPF5uW5rVOkKsis3AbFzHaTIJk5dcZlw7nYJHiQI2tfC%2FEGgYE%2BIMAZ3iHuSzX3CQT2PvfNWHolmHlqjahahLtCZqWW1jZymWUCBaJIGMONJTmZFAVDZkYRrDCMBGsUm%2FyzuvlscTLniRMrnUsX685MxfpDE1G82wxdumuEQAsJ0b0tEELhfncylbfL9r7C92Vy2JIbxNrkx4PHLrRPKAQ2C00DOwRR6mBowvEjgaAdQ4qieXnlQke3q7P8KYsQBZHDl%2FMIT1eM0jTzMNL9hb8GOqUBnCigqQs3YptWpE5YJVuPKnWU1PB96WdlOm1Q8Y8whBJGvN8bfE9ghfL2W7lo%2B%2FwXwBpUnWyEz%2FZbHwRxJRLvWIn88nUnTN3C4tLO5eyVV%2FedOKsCN8ze3kiQGg6KkepvJR3jozIBLQ8o1bryPGBhoIlD7jqB9DPSPMCu2%2F5ee7DI%2FOEk%2FqdYkn5oUFNv93ooZFMm5sCizlCdGXLvGCOqJ9q5ZUrp&X-Amz-Signature=043e6e2a53481280d000f4166dd42964f74e9dea1cfb0e804a52320a960d8bf3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VH6K3DS3%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T170734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHkwOucMcBhijztwppnPi2ISbNCa50O2%2FCU0aCGKWvknAiBigYme4ljY5Qq7w5Bge1%2BsjA28JQuotHVOBwTwU%2FZoTyqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjykLoNsDeMJbcfxjKtwDiYKT9unN477GUH3fQyqmi1BggZ71YZPTGT4fTMvNt8ERANRqaezQVsdMA5Xw8fU4%2Fqom3S%2BRcXSbxXG0pjiHbXYdds6eU%2BT1MsWaFmOmBRyBSVfNbSFXtS0UnM6S3b865%2FD4aGQfhiBvQj8l4ZK49%2BVeppRrAK%2FRH76t4S3VngYzUVK2eRvhQWWFFAwXaV9Q5cS7DTEHcGHA4yeZ9mwqoWlz8KMu%2BFpjykG5aWo50c4lzR0y4gyXS8t8eaI1aw%2BpmiSqnI6v09t7VS2ttXire4GZ5nCtfAbY8a%2BpY7dB026GERK9atJQ0yrC9Ezy%2B%2BXn535Il7rNoYPcKyoFNwAJYMWrJogcmljYKZnEBnAfEBBlpQpyYmOwBOE9tAaWWzwKm8FNUMDZx6FBzk9zCrluofRpxUtS458t43ke1fmxJ49Zdak5yJZAW2%2F8mjtGxTHHb5f0YHxeMRZpw9DwoKvOH7MrE04T6lPLpxMv0uNDSBkmBDiq3BEVhZ86fr1eJ2DfK1z1KDF9Pc1Gj3mHIwbRWdVFUc5VtsXDuO5U%2Bz77j5N%2Bv%2F0xY4q23IJjZXzwvmr2wJjQD875xqzcK1IMYLJpXLmqSEWZUtCa5NMbcdVa3A8QSn6DqxB2bOq0vt8wh%2F6FvwY6pgFPYG2K7q4we2mXuiYfU3TB2hhXnnfyrchWb2tXBOUiyR%2BGOEOtzreZNfqhMti51ZOdEXxH5c7VinY4KqgXfRPB%2BCiK%2B7CAWESl3BHH4%2BBK2LSM2i%2B1KQGfsP79qtA1hWyRtKuuLyLAbj7u1kBuzK2h7fqaDpbyanLYJBo4QtAlKflfd%2Bofxc0X06SeTjifKglz0oFLGad86WjTsGaX9c%2Fyswfak0NC&X-Amz-Signature=6ce503999ca741d268bd84a5500c3f20bc1c6875f4b052dc03b1099836b39548&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662H4EF5IV%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T170734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBBudnG2KyDpdc6K89RXIJJagGK0QGFGa19yeTq3ygVoAiEAloOFff3GE2ZU74QB92F%2BrEz35q%2Fao2sw7eQixoeh72gqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCU3hZbxkl3gVVrOYSrcA2BHYe88mxMxRy%2BoRlXuAXMmZ8xChyjNSt6Lp3hBVEb96EdjdA33%2Fj3M7IFdxVEsSWH95ZbfGEJfYTv7G3LwxeXfdmGsfSabM4Jl4Ns2Wbg7T%2B1b3PU%2Fy9d75EhlRpRMPayARJa%2FVm6yLkVkkqiEd0mCUm5Ij%2FGk54o68yVcYK7mew%2F2y%2FH0vtu1KzCUU7jxYFV%2B0xaKKNsn6CCaOhesctZmN2sBztVHQ3KHtJjrGFZUysxUi7p1%2BCZzDNs0fQV2%2BezeuGGk6%2BC8%2BkNthxPGj6vRXWDUppQVns3FiZcAC%2FbQOE%2F49VbZLX%2Fetk2LtXh7j46Bsr8mjA%2Fn%2F4b8yEV%2FenDFglXGbQ4KSXxd%2BO%2Bo4oIhs974ZWVwrA20MsEtfCATVnohzkwPLqlRKKGihHqFRwaxZYWhMdTYXCG%2FlRsUGX2d6xONvXtnAP3X4v97I4EAJ1BUnJMntSjyBgPEsuk35LRrgrAPGr3lBlU8nU%2FX4lG4c8%2BPw0HKWmPldsGICbN1BrBgHgp7e3io5Iad%2B9Rh9eq%2FIpxI2OqxXEqpuWNr%2Fa8oujmvb5NB4kZLOl%2BKkPFgDV%2FcgaHdR6A5%2BfzsQV9fj3ZBV53ideSmueEM5gkxqJcqj05Kv3MyBpq9%2FNlbMNX9hb8GOqUBXHTUMhhfD%2B72GXmFFkCoQINmPvP5oafGitD6WHp5g1sA0NLC7bncMgof8GkZfwhw%2B3gHcqFSXqI%2F%2B1Id1c973zZdWMOmG9YcxFZoicRTUFNfhdFxNesvDOaiJeheW5GC9HQZuQP1iNaG8QW%2BT3ZniJfLo9AJ8pydVp7lIb5PdqDJTARHlkYXpJiGRoE2qxoSKjQniFVd32RiHeCy85FzcJ%2F34hND&X-Amz-Signature=15fbec75315c0068470cb01699f1d1d51125b2d5878767265fa82d5496b6dd43&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2UPKB3A%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T170729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGrMDD1aZEjvQn5rjRCJamPGhpwyu4vpHnGEMh4gepPiAiEA9UA5z5x2imGVCowAcy0AD%2FEkyitYmtCxWa9QYlTjMYQqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHQ5XqDk91VzuGYzYSrcA%2FpXbGHeK2A5FbC5CFfyFtyWQzBwSuLoJGPwz3FSSnqNljx2VVmTqNXfcQYxgrHXL0s%2BBat7%2FVQs0SCjvQ0rG7cfwkUghKJxEJqFCLphW2aSWQZJG3LUyw%2F30lLq8dE04Gb2%2BJduGGvfNIF8PGHPmlwS8iuwt8W3G6OS8rxGUjijTvVMjXRWotwWe5WzdGpdVFsMM3pk6H7j4inL9luJMhFrHS3StflKTq90ZhWXe%2BrC6uIPwe5GHzzxNAEu6Fd%2F1qo%2BFTKkV2%2BfeRIWdbfRPxzn9%2BlPpngvWmPZw0jwpNBFfWTItSPKDtgoLfy2uFIeKmTvdUd98dSjKWt2tksyKYmO6OzwhU8hEhWCZcCZEh%2B0CaPF5uW5rVOkKsis3AbFzHaTIJk5dcZlw7nYJHiQI2tfC%2FEGgYE%2BIMAZ3iHuSzX3CQT2PvfNWHolmHlqjahahLtCZqWW1jZymWUCBaJIGMONJTmZFAVDZkYRrDCMBGsUm%2FyzuvlscTLniRMrnUsX685MxfpDE1G82wxdumuEQAsJ0b0tEELhfncylbfL9r7C92Vy2JIbxNrkx4PHLrRPKAQ2C00DOwRR6mBowvEjgaAdQ4qieXnlQke3q7P8KYsQBZHDl%2FMIT1eM0jTzMNL9hb8GOqUBnCigqQs3YptWpE5YJVuPKnWU1PB96WdlOm1Q8Y8whBJGvN8bfE9ghfL2W7lo%2B%2FwXwBpUnWyEz%2FZbHwRxJRLvWIn88nUnTN3C4tLO5eyVV%2FedOKsCN8ze3kiQGg6KkepvJR3jozIBLQ8o1bryPGBhoIlD7jqB9DPSPMCu2%2F5ee7DI%2FOEk%2FqdYkn5oUFNv93ooZFMm5sCizlCdGXLvGCOqJ9q5ZUrp&X-Amz-Signature=984bc68c09f95c2e32d2d65f099dd7865c8c7914c3d5d376bb14ea912584f98e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
