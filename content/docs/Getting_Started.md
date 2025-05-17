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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7ACKL4U%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T110235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDN5QZ8vsK6mmhNpD%2FwhXLMEfRDaiGiqlOghv3eDuRPvQIgPjToeW4ttpenDvGfR96e8E2YSIHuvawZ81G%2F7YdcEBUq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDFwMchTRp3XyApn7xyrcA0a5LvdlyTzHcuFxstJl%2F%2B02V40VPvaV6JVQ6hkuMxXZBP6LvGuJQTQQ%2Fd1BcgFGFZ%2FpfDXZxe53tFIW4nCOO0dCYPiNbVUYLQfSW3g90K3s11POKO21G9MbzD11wdWx0OJ7AvpWq6lq1uqtNlcw61%2F74hdE4wA4Qwdq2ERxPXhgChIZTkuatKs2hWANU7GqKybSla%2BDujXPfK%2F62RuDHGmVOanQlNSz4fLGuNg5n6MtG%2FiLj7nenHbexJ8ij31cjRmPcvYvBpVaPUxxxRHOdXdZW8ZsYAB8e0pEWaOo3rpCTzCiPkZlQuDLoXAs3DOFksP%2Bq3PplkCr6FPl7Zfa2pqCZnEq5vSgRlLrf0W36eWo5AD4Pj6EayxhvlnTx9torE1GrqFvqJtyFXot5pbX1FCzjlckGDbAmOMYii%2BG7RvSkDHwviCQWwncs9fUNB%2BZssIwljKfUcBg4KFebOv64busy5rlz8Q5Dw1Ne5SRDQgVy%2BiqvAgCg8WU4ch0VFv6w2e7FJHCvRjhwsvLkPqd5qYnbscnFDLVXz7xsU0rIhqzeP9Ib7IZzJOelb5MaTIi6WzV8DjPF%2Fh44ylTaztSR03cItM%2FFvjdL946VHxdsmgKdt5DSq3Nq66uwVBBMOm8ocEGOqUBlWGFDcvcmImLXUMF7Nv4Ky66dEXdfVHheIQOLvgcKsG5BTTgnUgLSwD6ajPFN%2Bx0ltCHTOo5e607OpEklV7o8umfkDP8d3tcoJfxQF0N6YpRaauPZRdHbmlI6%2Fsng9RSiaPD562xVoFPlO0rVh2qVCCKTnQnjGJdaPzxJKTLPMkFpoeN5ZSbp9InF43cWzipOzm7Y7mu96SM0%2BdUo3OetUXWujnN&X-Amz-Signature=fa781f53f767fd6651d6b518e4b13a79d76c29a7863536a6943ad8e0c0da1a38&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7ACKL4U%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T110235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDN5QZ8vsK6mmhNpD%2FwhXLMEfRDaiGiqlOghv3eDuRPvQIgPjToeW4ttpenDvGfR96e8E2YSIHuvawZ81G%2F7YdcEBUq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDFwMchTRp3XyApn7xyrcA0a5LvdlyTzHcuFxstJl%2F%2B02V40VPvaV6JVQ6hkuMxXZBP6LvGuJQTQQ%2Fd1BcgFGFZ%2FpfDXZxe53tFIW4nCOO0dCYPiNbVUYLQfSW3g90K3s11POKO21G9MbzD11wdWx0OJ7AvpWq6lq1uqtNlcw61%2F74hdE4wA4Qwdq2ERxPXhgChIZTkuatKs2hWANU7GqKybSla%2BDujXPfK%2F62RuDHGmVOanQlNSz4fLGuNg5n6MtG%2FiLj7nenHbexJ8ij31cjRmPcvYvBpVaPUxxxRHOdXdZW8ZsYAB8e0pEWaOo3rpCTzCiPkZlQuDLoXAs3DOFksP%2Bq3PplkCr6FPl7Zfa2pqCZnEq5vSgRlLrf0W36eWo5AD4Pj6EayxhvlnTx9torE1GrqFvqJtyFXot5pbX1FCzjlckGDbAmOMYii%2BG7RvSkDHwviCQWwncs9fUNB%2BZssIwljKfUcBg4KFebOv64busy5rlz8Q5Dw1Ne5SRDQgVy%2BiqvAgCg8WU4ch0VFv6w2e7FJHCvRjhwsvLkPqd5qYnbscnFDLVXz7xsU0rIhqzeP9Ib7IZzJOelb5MaTIi6WzV8DjPF%2Fh44ylTaztSR03cItM%2FFvjdL946VHxdsmgKdt5DSq3Nq66uwVBBMOm8ocEGOqUBlWGFDcvcmImLXUMF7Nv4Ky66dEXdfVHheIQOLvgcKsG5BTTgnUgLSwD6ajPFN%2Bx0ltCHTOo5e607OpEklV7o8umfkDP8d3tcoJfxQF0N6YpRaauPZRdHbmlI6%2Fsng9RSiaPD562xVoFPlO0rVh2qVCCKTnQnjGJdaPzxJKTLPMkFpoeN5ZSbp9InF43cWzipOzm7Y7mu96SM0%2BdUo3OetUXWujnN&X-Amz-Signature=1ac8bb1d5c00841249aee92de667863cab1490d13edc6faa6c870dda78263979&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7ACKL4U%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T110235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDN5QZ8vsK6mmhNpD%2FwhXLMEfRDaiGiqlOghv3eDuRPvQIgPjToeW4ttpenDvGfR96e8E2YSIHuvawZ81G%2F7YdcEBUq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDFwMchTRp3XyApn7xyrcA0a5LvdlyTzHcuFxstJl%2F%2B02V40VPvaV6JVQ6hkuMxXZBP6LvGuJQTQQ%2Fd1BcgFGFZ%2FpfDXZxe53tFIW4nCOO0dCYPiNbVUYLQfSW3g90K3s11POKO21G9MbzD11wdWx0OJ7AvpWq6lq1uqtNlcw61%2F74hdE4wA4Qwdq2ERxPXhgChIZTkuatKs2hWANU7GqKybSla%2BDujXPfK%2F62RuDHGmVOanQlNSz4fLGuNg5n6MtG%2FiLj7nenHbexJ8ij31cjRmPcvYvBpVaPUxxxRHOdXdZW8ZsYAB8e0pEWaOo3rpCTzCiPkZlQuDLoXAs3DOFksP%2Bq3PplkCr6FPl7Zfa2pqCZnEq5vSgRlLrf0W36eWo5AD4Pj6EayxhvlnTx9torE1GrqFvqJtyFXot5pbX1FCzjlckGDbAmOMYii%2BG7RvSkDHwviCQWwncs9fUNB%2BZssIwljKfUcBg4KFebOv64busy5rlz8Q5Dw1Ne5SRDQgVy%2BiqvAgCg8WU4ch0VFv6w2e7FJHCvRjhwsvLkPqd5qYnbscnFDLVXz7xsU0rIhqzeP9Ib7IZzJOelb5MaTIi6WzV8DjPF%2Fh44ylTaztSR03cItM%2FFvjdL946VHxdsmgKdt5DSq3Nq66uwVBBMOm8ocEGOqUBlWGFDcvcmImLXUMF7Nv4Ky66dEXdfVHheIQOLvgcKsG5BTTgnUgLSwD6ajPFN%2Bx0ltCHTOo5e607OpEklV7o8umfkDP8d3tcoJfxQF0N6YpRaauPZRdHbmlI6%2Fsng9RSiaPD562xVoFPlO0rVh2qVCCKTnQnjGJdaPzxJKTLPMkFpoeN5ZSbp9InF43cWzipOzm7Y7mu96SM0%2BdUo3OetUXWujnN&X-Amz-Signature=550fceddf32ff7551dca5fca30dacd03825e291dcc2951d1bfdba49793ddd93b&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAIREBVU%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T110241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC0xKsOOq%2F4HlY3OUHnJVKyiHRqGUtAkKLUlT6QvLkQEAiBzBiS6bF3GwYxdkhDPYbaEHZKhPw6LwMRqK86vHJnazyr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMjuVgcrStEl86TNzZKtwDuSZYvqT6igJmd0fft0wkCOg0mOO4XEpU%2FoeB2lg5vxG7vTLq7IDRTkBMsvQEBXmU7S%2FyMrshAnW1pF4UJ5kQvB6NwVKR13RV5aB5CuuJhO0aN1NhQU9oebSBRa2TFgiJjlTgm6xBUUsIQ6x653I2eIzLsZZ%2BkixziDuAkjBc1L7LwPSuTO1OPuVHxErm4etLFZ8Z%2FfLeq22KclONXOHEB0%2FUEMZn2Vo86zuypb%2BhV4EegY%2BbGiCaxKoW6qbWeWOnuap%2BFVnPsfuKkLWPSXQLqZRjdAwoFsu7b5Qe7npF%2FZrULf2uPCHceJXa1FMfvKe44RssqxXCCZNGLFt43l1AxaRVbfuot%2BGZB2oshJT3AqaQ4SIBkEJ%2FK36Xwzs%2B8LXxhSOOyD11%2BxkJFAoAqwB%2BdtTxlXoilYlY6f3kIXtB4TNNn95BDnxxh555aCpmXpEByncd7IAKpKjRRb%2Bf2Aadmlb4XqfANasoDjG5YXR5pV1VNuynUwJ9dKSTsiuc%2F2r8c2%2BMVp1k9nqJU49ByqWyRwq4nDEqwq1HI7iyIMlLg9oASoxaicxlZYtImbuqQkfuMCfh6qZ1RY8bJwlF%2F2rCdKBKQq7%2FtvkFT0LceakNWNuBABW2PINiNFAMANAwob2hwQY6pgGYBcujTYcy85O2q1FkXHfW4ohc9lEj7uBhoiVM%2FJ4A1Xo9qF6TkUSz7y2geZ9cMXradHwqu9U%2BxK9QygdiaA0rkIfGFinOpTgK6IUk4AL9b%2Fl2jAzDi%2BU6pPxZROx8BujiTfsFxLFh%2FfGbvRF2pnl0O9wIN4%2BoZmUtIL9h%2B225NHAEtjkFo9exe9lnFCtFdUSge7QhCKUvvZPn1cj6ZlUBDEcGUEAX&X-Amz-Signature=abc682a3e19c7b08e56c50c7f3b9d39ac3b6d289489a603bf299f67a0556ed72&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IMJGWS3%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T110242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCOMRqwOhy6%2BIg8Ee90zRnnyEgqj0F1ryv381HbQZpEgAIgWIJb%2FgH9IgbNh3jovYMippVwzrpvmsSAiX%2Fu931Yxzcq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDAcTBst9xWMbffG9tSrcA0CCRe8A2iliu%2BSZg7Vuwiky8eEY5EhWHN4Fc%2BauOV51GMwKcdjnA%2Bul910KYDmwJV%2FAkFiYd1i7Am1%2B6Q9Vy1b3J4bJ2tuhx6i1EqYbmLCq8AhGiXzawAQwCGQyuob2GAxwQHZfuKbjsRUto63sCu9mNRJEGwttLuYxIwShcHdsGqs6iqDOfNe83qwISjm2P%2FPYiJNF8oamD3qaU1XvOJS2o0svZyQ5smyBlPXdG%2BcM1WlSzjITZcHC0nZ0c%2Bfqin4qfMjO2QHRYtuU543A7uG0ntpyqokVjlI0jj3N6D9l7SP2PojcVJyQUhXnchR71b%2Fq%2FpcR3PtYX7yx5bd9C0BeRcNS6u0ahpa7ESAylzEX3Ra0IGaMMp8Kv4AfdnOdVny9n4B%2FlmaiseXD%2BtSjlQ4GLCrxoj7eKpFdlyC3vx6%2BHCbybaZ1i01rqVU%2B2BldviIaj8tNs0HmhEr1gG%2FwIK08LynEXqneYgqbrGjvmkzwx22RIdYNK6m2pAjMMIbcEeYDC5T9qUYlZKTJfPIZcNVZVl%2Fpz1gJZGNwMQKA1TPqK0GL9gabnS3UAukvy2Zvwy4Ij0BmFHAKbNdhkJl2tBkJdc%2FWQXDcEvoQV%2BataWjh%2B9KNAZBPDCkW1FVJMLjNocEGOqUBzYoW%2FZX9FRqvgPDXAzRR8FZ5cHwVKV875beZeS8uqHl87LZaJy2prniNmeRHOl8X4PzDPMsRc%2F3beAvrzaZ%2BtvieVD0AIE%2BixcoMWouwcmwqpPxrUGkmf3FTmLpNy4056XxzXVWvlNmBvFT%2FWfJdILoJ1itiDVd5GnnJGMVU3rxtNRhnf1ATMq7jrCsNq92mLmxm1p6hiUAvC5eibHoqywnZ40kD&X-Amz-Signature=3231435c84aa11a6dc69125b9d4f3b0f39ac634645cc03d272f6263f19a18bfa&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7ACKL4U%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T110235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDN5QZ8vsK6mmhNpD%2FwhXLMEfRDaiGiqlOghv3eDuRPvQIgPjToeW4ttpenDvGfR96e8E2YSIHuvawZ81G%2F7YdcEBUq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDFwMchTRp3XyApn7xyrcA0a5LvdlyTzHcuFxstJl%2F%2B02V40VPvaV6JVQ6hkuMxXZBP6LvGuJQTQQ%2Fd1BcgFGFZ%2FpfDXZxe53tFIW4nCOO0dCYPiNbVUYLQfSW3g90K3s11POKO21G9MbzD11wdWx0OJ7AvpWq6lq1uqtNlcw61%2F74hdE4wA4Qwdq2ERxPXhgChIZTkuatKs2hWANU7GqKybSla%2BDujXPfK%2F62RuDHGmVOanQlNSz4fLGuNg5n6MtG%2FiLj7nenHbexJ8ij31cjRmPcvYvBpVaPUxxxRHOdXdZW8ZsYAB8e0pEWaOo3rpCTzCiPkZlQuDLoXAs3DOFksP%2Bq3PplkCr6FPl7Zfa2pqCZnEq5vSgRlLrf0W36eWo5AD4Pj6EayxhvlnTx9torE1GrqFvqJtyFXot5pbX1FCzjlckGDbAmOMYii%2BG7RvSkDHwviCQWwncs9fUNB%2BZssIwljKfUcBg4KFebOv64busy5rlz8Q5Dw1Ne5SRDQgVy%2BiqvAgCg8WU4ch0VFv6w2e7FJHCvRjhwsvLkPqd5qYnbscnFDLVXz7xsU0rIhqzeP9Ib7IZzJOelb5MaTIi6WzV8DjPF%2Fh44ylTaztSR03cItM%2FFvjdL946VHxdsmgKdt5DSq3Nq66uwVBBMOm8ocEGOqUBlWGFDcvcmImLXUMF7Nv4Ky66dEXdfVHheIQOLvgcKsG5BTTgnUgLSwD6ajPFN%2Bx0ltCHTOo5e607OpEklV7o8umfkDP8d3tcoJfxQF0N6YpRaauPZRdHbmlI6%2Fsng9RSiaPD562xVoFPlO0rVh2qVCCKTnQnjGJdaPzxJKTLPMkFpoeN5ZSbp9InF43cWzipOzm7Y7mu96SM0%2BdUo3OetUXWujnN&X-Amz-Signature=578f296775e6cd81cfca418f3004e566984d55bc95c940e7630fe72a8c62bb0a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
