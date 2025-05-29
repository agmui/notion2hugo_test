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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R37RELBQ%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T090927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICTa8NV2k2MfixXRvFPZGpqJwFwCbgXlaPiXMZodZhVzAiEA4aC5oEsan2FEI05s6UKG1AlU1Qq1mLRhi6XuuaA0D%2BEqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLfqYWtUGK8XufC8jSrcA9RwvsEHVd7Q9J494thkvoijMOqNFkMN0WSnzK6YPuolE3AIjLR7j%2FJIeEXIcn3twQKAMb7hH9yNGc1Oqaqs5FBTUsOz5P%2FfeqebSQfrMCPuyuBlP8TCrcIBqTqrIII%2Bq0KwmW97GUhd9aPY74D4cY0Bk6CUNatpmKJc8FZxGRLIuEYuUAYpmdLMVhAuPd%2F9k3wPZKFxJqjRqRnyTwbLxS04uAnBYrQtnIjTPwy%2BYO%2Bg3gd6TyAsAyGXRd0i%2Fd%2F69c1KcLY6ze8P3UYZCwrm%2Bo8rLUE28Xs8G6kZmM4fspdxp6vDF8F%2FhFg%2B8shv7wV5wkOmCOAlruL7adYCFOl85q2n7Adc5FChGph0XD42Zw63%2FSrPgBnlqkW4mm84Jv5lFUWSEN1wAzR2EEQp%2B3Oxv6kCGSRjweH87U5FfnRfXsnqOzWRKd2qC3UFQ7EY8QSmX22QBRXajBXwOdOQ%2BzF4k06K%2FRpi727eWVF8pi5KvkQ4PEjKN8BBzkYzvYT9wF%2BB9xjrEnToaxKJvuLp4XzN31aWRyVaux%2F2QONRQg4QIbRjb0l7MsW%2FHmLKP6JNItfgTeV0LcuT51e%2BWw9jwsEb6cW2SElBIFE%2BrxzwyVoWw0349tXtYPPqILOwbYj2MNqt4MEGOqUBF%2F5uLN9fPUNfjdYo55DcWBTGDyZjKyXMHudZzmej6S%2FJlWdO%2B87k3AM4L6ZSTSs8dgEUu5ZMJknGL5SyLCyIIXqujpvZ%2Fa6csp9avSId4ISFT7Cgy69lk1B7EkQzsrHsbwTstN0FqLakMXbnDgX3sF4yEZce5nNZ4WcmT0tcuA44tpxpk%2FXQl2eeEfmbx2oag8cDDempgXHCwed2mnRSpCjFdniz&X-Amz-Signature=9cc21bce2fd18e1439cc47c5765fa178e2ac6502c29fcd1f1022b6a66fc63624&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R37RELBQ%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T090927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICTa8NV2k2MfixXRvFPZGpqJwFwCbgXlaPiXMZodZhVzAiEA4aC5oEsan2FEI05s6UKG1AlU1Qq1mLRhi6XuuaA0D%2BEqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLfqYWtUGK8XufC8jSrcA9RwvsEHVd7Q9J494thkvoijMOqNFkMN0WSnzK6YPuolE3AIjLR7j%2FJIeEXIcn3twQKAMb7hH9yNGc1Oqaqs5FBTUsOz5P%2FfeqebSQfrMCPuyuBlP8TCrcIBqTqrIII%2Bq0KwmW97GUhd9aPY74D4cY0Bk6CUNatpmKJc8FZxGRLIuEYuUAYpmdLMVhAuPd%2F9k3wPZKFxJqjRqRnyTwbLxS04uAnBYrQtnIjTPwy%2BYO%2Bg3gd6TyAsAyGXRd0i%2Fd%2F69c1KcLY6ze8P3UYZCwrm%2Bo8rLUE28Xs8G6kZmM4fspdxp6vDF8F%2FhFg%2B8shv7wV5wkOmCOAlruL7adYCFOl85q2n7Adc5FChGph0XD42Zw63%2FSrPgBnlqkW4mm84Jv5lFUWSEN1wAzR2EEQp%2B3Oxv6kCGSRjweH87U5FfnRfXsnqOzWRKd2qC3UFQ7EY8QSmX22QBRXajBXwOdOQ%2BzF4k06K%2FRpi727eWVF8pi5KvkQ4PEjKN8BBzkYzvYT9wF%2BB9xjrEnToaxKJvuLp4XzN31aWRyVaux%2F2QONRQg4QIbRjb0l7MsW%2FHmLKP6JNItfgTeV0LcuT51e%2BWw9jwsEb6cW2SElBIFE%2BrxzwyVoWw0349tXtYPPqILOwbYj2MNqt4MEGOqUBF%2F5uLN9fPUNfjdYo55DcWBTGDyZjKyXMHudZzmej6S%2FJlWdO%2B87k3AM4L6ZSTSs8dgEUu5ZMJknGL5SyLCyIIXqujpvZ%2Fa6csp9avSId4ISFT7Cgy69lk1B7EkQzsrHsbwTstN0FqLakMXbnDgX3sF4yEZce5nNZ4WcmT0tcuA44tpxpk%2FXQl2eeEfmbx2oag8cDDempgXHCwed2mnRSpCjFdniz&X-Amz-Signature=4000e72150be9a41606151137c3e604bc7da220bcf94b29729e132597603a1be&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R37RELBQ%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T090927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICTa8NV2k2MfixXRvFPZGpqJwFwCbgXlaPiXMZodZhVzAiEA4aC5oEsan2FEI05s6UKG1AlU1Qq1mLRhi6XuuaA0D%2BEqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLfqYWtUGK8XufC8jSrcA9RwvsEHVd7Q9J494thkvoijMOqNFkMN0WSnzK6YPuolE3AIjLR7j%2FJIeEXIcn3twQKAMb7hH9yNGc1Oqaqs5FBTUsOz5P%2FfeqebSQfrMCPuyuBlP8TCrcIBqTqrIII%2Bq0KwmW97GUhd9aPY74D4cY0Bk6CUNatpmKJc8FZxGRLIuEYuUAYpmdLMVhAuPd%2F9k3wPZKFxJqjRqRnyTwbLxS04uAnBYrQtnIjTPwy%2BYO%2Bg3gd6TyAsAyGXRd0i%2Fd%2F69c1KcLY6ze8P3UYZCwrm%2Bo8rLUE28Xs8G6kZmM4fspdxp6vDF8F%2FhFg%2B8shv7wV5wkOmCOAlruL7adYCFOl85q2n7Adc5FChGph0XD42Zw63%2FSrPgBnlqkW4mm84Jv5lFUWSEN1wAzR2EEQp%2B3Oxv6kCGSRjweH87U5FfnRfXsnqOzWRKd2qC3UFQ7EY8QSmX22QBRXajBXwOdOQ%2BzF4k06K%2FRpi727eWVF8pi5KvkQ4PEjKN8BBzkYzvYT9wF%2BB9xjrEnToaxKJvuLp4XzN31aWRyVaux%2F2QONRQg4QIbRjb0l7MsW%2FHmLKP6JNItfgTeV0LcuT51e%2BWw9jwsEb6cW2SElBIFE%2BrxzwyVoWw0349tXtYPPqILOwbYj2MNqt4MEGOqUBF%2F5uLN9fPUNfjdYo55DcWBTGDyZjKyXMHudZzmej6S%2FJlWdO%2B87k3AM4L6ZSTSs8dgEUu5ZMJknGL5SyLCyIIXqujpvZ%2Fa6csp9avSId4ISFT7Cgy69lk1B7EkQzsrHsbwTstN0FqLakMXbnDgX3sF4yEZce5nNZ4WcmT0tcuA44tpxpk%2FXQl2eeEfmbx2oag8cDDempgXHCwed2mnRSpCjFdniz&X-Amz-Signature=561a9933e3b2caa7da4095996fe5a86c30922bd2fe66c23134e34f94370750b1&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJPVFVRI%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T090932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFNrX9KKHZRjwXKwRxB%2Fj8kSVgY8st3V4a7Uw97H3wCeAiEA%2BIdbfbJXOQK13ylyW3cL1Rxa%2FVMUmIH%2FMVKIW0fPti0qiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKcZ%2BrdWoH7uD3sKWyrcA%2FN3uaXCltjTGhH%2B4kDujcY99%2BWWfhAMYzooqp8oIlRU0D9PR9gxLEoC3YxLffU7IT%2FfuOkqrKK%2FSHQufH0QNtACBDTp57sbh7bfeWJuTrgJvtwhkyNLsXaGVji1l7ZcMH79UVBaPu3btNvFGdqBf3iZhzuSGDGYkvWszJOOxNySrFYm%2Ffjrduc9bhPCPKgWsInNHjbeaqo6x4KUErhSa8Bow8eQqIdTFYIhfrbY%2FRFZ3yJ1u4KjEB%2FmP9YbKpIk%2FderB%2FwJQv837E1sK24GQzNiQeAGV8wJoSCC0CtpNlb%2FEifJawYH7rGD8Loe%2B6VR79QM1dDj3o%2BOAw5QOj7ZWSylRGkzc5WHH%2FxP1lcVMnpwoT6a6QoYsn%2BYULhSQUNvyO5ANYuHj141UO9cpORPPxAgL3%2FV9LQRiTUXc8rVjfEiVFwENMTCz%2FNza6nVN6N74O0LvZq0gPQUDxbgovJPQ2%2FNSP7I7HgRU3kazHqrZ18cDejz4b1YyOCXrewoUUQwqg9h3TY5NWTf7DqA5ZzyMhNGocC6u1xwYCDRI%2FCaUORddf%2FVjo8UKdLVBL2kS9YvnCqIh7fzrKWFXDsqxV%2BGf79H3Kt35XV8or4I%2BYQ7dHbpk8h8k1Mw1XBuMm4RMLGt4MEGOqUB0TTjHGDtrwpdUaQKu4HkfH%2FM6krxR8olfcUKpNHXaQOlk3Bd%2FbXClnWj5sbxLdua88febcFD7D%2B4F%2FcZvzeTGuBgD4riBUbnuIGVlU6kLzjv%2F54%2FEla90e0TcxVLioODBUr1OHZ5wECr3yU34raioA94sR6ARl31hFqw8i%2Fl3rW%2BimIoOaSm%2FkgqQQQpOyzd4xUBWs9lRvjYb4THuV2ci50%2F6DAn&X-Amz-Signature=f666cd65084a5e8af9c5dd65fb4c40c60545d505405788d8726ad6a23260f2df&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPR735HQ%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T090933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1b%2FFaASR3PNyOShBkq1gUXgHgj0VVQEXFPz98ByzpPAIhALBJ%2F3tXcamImhYm6wReGLUrJOZ79r%2F0EoaE7ozyOBf8KogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwU1vU2Dp7FCdVZsvgq3AOny6mfAttmbM6gCc1Ml0QPx1WkrvQyikM9stakIchINLB%2BkssVvI%2BEWRZFRfESp%2BjRGrFWobnkoox2w9KUdnv4%2FZH1x91ekV5OOCTtY3v4Ob48v2E2rkk2VAPBEcK35FG%2FSIEYkK085y%2BgBPhzXvMDzWrsr4THzJZXdEwi4v%2FkiFiV0w9vy8%2BrWht5nX0x2vMnXiBxAfH8OqHKY4dage8cqXYQpcupIcVCpcTHWCgLZsSRvwCfBUnt0gCFuxlt8Yt2N1lKLLD1rA7VMyh5DPfgqbs34AX8iHoowiEJx78oi5D7c7Q8GeyW2sM1K6w5zYN7o3D3FhAwBgSSCsrIyDBg82jdpiag9ZcuhEO0WnWcj6X7WAofjgjcsrJAgxS6dHwPfL%2BUoj2GSswvUp0Cz5R4AYfmYDeiQ4lx1%2BLzKfqgLNFDu5qxJXR3WiKoiC5RUM9ChpUEvQb3I7r2EgdACESO0HLsdXo1Gk6GaNYzIjbJwpkmoj5zs%2FPR8flIXmiMh6%2FrQOo6s9M8YBYJWLyevWJdjWSRNSXmB9sNZv7E0SMySzkHANz6ajHEACDUTBfe5IfcDcWmRGI%2BrRGI%2Fy9Nn8UDqBFZrrzmf9mKI%2BIPPeKgfvfpPphfpygOulcGcjD0reDBBjqkASY5H99V6OCVryM6gaWAFBZyJ8ldjvx9tg3UqR0eVW012O3m1kFaLM2iapY1Bb7UAzgcz1e%2BQ18AEOeKxw9IjiUpSeLhWBDP2k9J8K%2FjF0G31fSO6k4gKVy%2FMOMhlXzl1%2B7CgwrqpBlHpgapF5v9cbXdE0BDbtsALventciFD%2FnYQRPcUAJl1rwq%2FYqenwUUDq7unqn5o8jebYxj%2BBMxD5WLlnEZ&X-Amz-Signature=bb9eb521363277ea53169ce706bfd8228a167b5e9e4ad3876e9cdb9402c27838&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R37RELBQ%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T090927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICTa8NV2k2MfixXRvFPZGpqJwFwCbgXlaPiXMZodZhVzAiEA4aC5oEsan2FEI05s6UKG1AlU1Qq1mLRhi6XuuaA0D%2BEqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLfqYWtUGK8XufC8jSrcA9RwvsEHVd7Q9J494thkvoijMOqNFkMN0WSnzK6YPuolE3AIjLR7j%2FJIeEXIcn3twQKAMb7hH9yNGc1Oqaqs5FBTUsOz5P%2FfeqebSQfrMCPuyuBlP8TCrcIBqTqrIII%2Bq0KwmW97GUhd9aPY74D4cY0Bk6CUNatpmKJc8FZxGRLIuEYuUAYpmdLMVhAuPd%2F9k3wPZKFxJqjRqRnyTwbLxS04uAnBYrQtnIjTPwy%2BYO%2Bg3gd6TyAsAyGXRd0i%2Fd%2F69c1KcLY6ze8P3UYZCwrm%2Bo8rLUE28Xs8G6kZmM4fspdxp6vDF8F%2FhFg%2B8shv7wV5wkOmCOAlruL7adYCFOl85q2n7Adc5FChGph0XD42Zw63%2FSrPgBnlqkW4mm84Jv5lFUWSEN1wAzR2EEQp%2B3Oxv6kCGSRjweH87U5FfnRfXsnqOzWRKd2qC3UFQ7EY8QSmX22QBRXajBXwOdOQ%2BzF4k06K%2FRpi727eWVF8pi5KvkQ4PEjKN8BBzkYzvYT9wF%2BB9xjrEnToaxKJvuLp4XzN31aWRyVaux%2F2QONRQg4QIbRjb0l7MsW%2FHmLKP6JNItfgTeV0LcuT51e%2BWw9jwsEb6cW2SElBIFE%2BrxzwyVoWw0349tXtYPPqILOwbYj2MNqt4MEGOqUBF%2F5uLN9fPUNfjdYo55DcWBTGDyZjKyXMHudZzmej6S%2FJlWdO%2B87k3AM4L6ZSTSs8dgEUu5ZMJknGL5SyLCyIIXqujpvZ%2Fa6csp9avSId4ISFT7Cgy69lk1B7EkQzsrHsbwTstN0FqLakMXbnDgX3sF4yEZce5nNZ4WcmT0tcuA44tpxpk%2FXQl2eeEfmbx2oag8cDDempgXHCwed2mnRSpCjFdniz&X-Amz-Signature=5e71339c94985abdce0b270c3015dfae7dee9e9942929b7a323f293bd77ac2c2&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
