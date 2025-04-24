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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466654LQKK3%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T050854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQCyBXv1CfFlu9aE02CJ%2FciC8XMff5nxdcg0JugtwApTNAIhAPgSJI7er6ZcTnHczGBcUQMiGBXPD1RoxQAKxB%2BPZATeKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxuuIekAgvRiQVREIsq3APCAo5H%2BrfjuGQML4CMiQz6kmBeGX%2Fw8KWCpjub2PsCgH%2FaMCX5dZLlYaetkH4Gsv5vA4Ub4Tfr92oyA6d9ogWix4%2B6CId8s6AGUxWq%2F1FSGMbIECSZYvOo5%2FElZ0Mqf9tv7fv3829KHhucA9eAXZlut1qTv1989vVmzYBMGiWCpjOazpj82V0g5duKMH%2FBU%2FEaBYRl6ALAtpSxj%2FX0Px%2FChWd2EFF%2BCC47uqySAuIQ4QLLHBO5Hoird%2FjEyQVtS6PSpUjznb4icONh7cJOU2%2FcORDUTxrof2qb5wc5TKV3wCwK%2F%2B6pAp2F4oE%2F5CStH3ybhlBHtxBAy0DVYc8wOOn7cvv4LrzsAcweHKpMrd8TAqRBoA31SpcgRgsgjyXD%2FrY%2BPEizVOdBhDxFq8bJ9FHjDVcrI3Q%2B3TtKs%2BxViQA2L%2By2wh7kYsXWljdgjGXRPjV3GHOTY6PN3%2FdvpuRVtXfNnvfaSWEcOgBMl%2BHxUwcpbDIlCJOxvcVX8GuHM%2BnVEg7N5J5FcFXvVIVWS%2Fa5uucg%2BzkxRseJcpNv6ldg7%2BV2%2Bb9sDISd4OPmXf1OgS2emzY0py4GgUQrksygN4hFMthJPN3ZtH0kSE63EIW0SUbr7r3VE6p5vnLr%2BQQfIzDYgKfABjqkAWBx9ovt2KSuIJ5c1oFHuXROWyycAp2UzbwmSMf2V6N78c%2Fv3SWD5DeH58yVbV%2Ftx6dEXvUQ0BjNgdTQyafUTWZSVJukiWzUxRioJEja2nQXsKh154xBIwXKVt%2FjD3eeAb9J%2FFCqw%2BJFTqTdnixfyiKkSJP7GnGlWTQ2egHFPomIGR5Ap4rpgk2MA%2B1eZ9rBUjeLF0ZCdkPjGikCeEftwkISYVyx&X-Amz-Signature=0afc3e86e49d0e7ec9714cff8aa7aadab4611ee66c80a5c404cb8bd53f90b459&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466654LQKK3%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T050854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQCyBXv1CfFlu9aE02CJ%2FciC8XMff5nxdcg0JugtwApTNAIhAPgSJI7er6ZcTnHczGBcUQMiGBXPD1RoxQAKxB%2BPZATeKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxuuIekAgvRiQVREIsq3APCAo5H%2BrfjuGQML4CMiQz6kmBeGX%2Fw8KWCpjub2PsCgH%2FaMCX5dZLlYaetkH4Gsv5vA4Ub4Tfr92oyA6d9ogWix4%2B6CId8s6AGUxWq%2F1FSGMbIECSZYvOo5%2FElZ0Mqf9tv7fv3829KHhucA9eAXZlut1qTv1989vVmzYBMGiWCpjOazpj82V0g5duKMH%2FBU%2FEaBYRl6ALAtpSxj%2FX0Px%2FChWd2EFF%2BCC47uqySAuIQ4QLLHBO5Hoird%2FjEyQVtS6PSpUjznb4icONh7cJOU2%2FcORDUTxrof2qb5wc5TKV3wCwK%2F%2B6pAp2F4oE%2F5CStH3ybhlBHtxBAy0DVYc8wOOn7cvv4LrzsAcweHKpMrd8TAqRBoA31SpcgRgsgjyXD%2FrY%2BPEizVOdBhDxFq8bJ9FHjDVcrI3Q%2B3TtKs%2BxViQA2L%2By2wh7kYsXWljdgjGXRPjV3GHOTY6PN3%2FdvpuRVtXfNnvfaSWEcOgBMl%2BHxUwcpbDIlCJOxvcVX8GuHM%2BnVEg7N5J5FcFXvVIVWS%2Fa5uucg%2BzkxRseJcpNv6ldg7%2BV2%2Bb9sDISd4OPmXf1OgS2emzY0py4GgUQrksygN4hFMthJPN3ZtH0kSE63EIW0SUbr7r3VE6p5vnLr%2BQQfIzDYgKfABjqkAWBx9ovt2KSuIJ5c1oFHuXROWyycAp2UzbwmSMf2V6N78c%2Fv3SWD5DeH58yVbV%2Ftx6dEXvUQ0BjNgdTQyafUTWZSVJukiWzUxRioJEja2nQXsKh154xBIwXKVt%2FjD3eeAb9J%2FFCqw%2BJFTqTdnixfyiKkSJP7GnGlWTQ2egHFPomIGR5Ap4rpgk2MA%2B1eZ9rBUjeLF0ZCdkPjGikCeEftwkISYVyx&X-Amz-Signature=f205257866c9cc7ba44ec3adfb05d6a322a639a038428d8860f449a270d958cb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCZEVDWN%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T050855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQCNgsv4H8ikdqS%2FHKnwxpz5fJBfJiYRrRksOy50kUpGtgIgdBMCyWHcl6BG8EqEQYYflbsTT%2FTuGw6HrGtERv%2BKsvQqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBHxIm149gSc0uG0xCrcAyhoqYH42ITCpeeNPwmncb0IK34ecCHtfGVOaG6YcFvY7dObABnh59ngJVuoLewpT6GMj8JBRq0p2tIPrXIB6up7jZPRuf1lcBBJ8KT%2FgY5ut0odMJpcFpjYurlPvFPUEeT%2FX97KyUs4SZ20y9Dujv7RgVSIzpbMOrn%2F2Z%2FTfr8CXWyQSjBf1RRERBUCoHWhY3DUXGBZtHS%2F%2FhkOLBifKg5NsJ2J5e5BPCu8QrNyiiQfEmIN%2BL6B7GwVUY0CdUy44aYznhoTYyelj80Qe4p2eBfFNiagl0sAjdq78%2FnTBvOO%2FP6QxMNP3EusdSvZgK07Dh8VifVXB0iODbw4FCyTR%2FOixWS512APu%2FFFE260XyGPhxxb4rya4Ug%2FqVdGcLPaNox95ziAzEZTkb6l9JuyHvspQ7PfqQK3ZjWqcxr6cF7RitomP99wxRZHO12oQ0OaIcKLu6V12WhNlrlMHMfg0koSGA26xFTCOmonUVcHPnmxKjZ8Tqbqsi%2BGL22Fz9R%2FC7UlEN7fkzjFfSES3MHqdRLyxY0d61w1OwvvOpB8vkjHDpGtbY%2FUv5a0pKvb6iAd9zPW%2BTstTFaB%2BqSflAk3LJLl%2FOkhdzvVTXn8rWEnH4HntjWrK4gK5bZPL%2BoCMLWBp8AGOqUBWizHnNRaW4z8xXV30IIqPXh3OmRA77nxL2hOJ4V2mij%2FgCZD9%2BSehMk0cggh%2Bdhx0U2AeSHGHuZZK8d%2B5IOjn9gbP%2BqmUGLBiZcZfQ2EBdbwRwGwMVkQxWpAt033x0v6qsCg6t%2FYUyBTBSewqdccrKyUIo2slOVj1i%2B65JJs64qcmmL2YasPGf6b2sMoN4kVXNQADnoghEVpE8n1QaPXQU1LBOp1&X-Amz-Signature=df21071f729c7041dc549d671f3eceab5760ffc2087467dd1dc2676087f706f9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOLBGZ5K%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T050855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIHgKGDgwh728eTBGSmJLaFbU%2FMh3CrVf0xDgoyAxyj6uAiEAzdJZsz73NpI%2F7AcJN5X0Zh6WTAhNbfk59xP92EgGPwoqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJB0XLNvTZHKa%2F9WxyrcA5%2F3bUgbMFNHxT4%2F9MYycyTJ19bRH7CQuN0P39tCabPhXSGTp8JJkejKsYlw3QSOatZkGukLcQacxyHV2vsxLKSi9oKJUoyQzUlMENdDuGgDZ493%2BnaFpd%2BICjiaeUi%2BxX5z9xMlrgPZ0EheFjCixjwuM%2BfjKXRzShySQv0h%2Bv8GxYIeqvSOMPPP%2FLvvkRL%2Fg%2BPqXhX1hJbeMhct7yaQFodHbU4CkdE5qttjRTmkf8UtGbFVzY3IYH917c%2FhyewxVwKkRanHqAL%2F3nqk4DueZxEIbTbpS6sW8MqSLVnp36a8WsbRzchfjqjk9u2ybaz0%2FcoiGWXkmZ84xWuZvNl5S6p78hEvkEjKI1wqax%2BfrIcMeq7GNafjH0uDejfiT38n64d4YES7w3DmH7mCKGh%2BGPPWTToy%2FbidSCmiTp8o9OOfuhz9AbnIAV0NrZ0UOEbJyX7ej1dOcU%2BHwULXTIzJJB%2BZTEXDDxtVXbxiux5hvIvRyJiqVYW44tvpPUWnmj%2BXYWfnsIt9dBToes0QZoKpT45N5I24GjGHDK%2Bh0VwotT1dxnM8DZ6aGCHJgwRhZk5xAnkggttlKQk18wMVbil7W%2FQB7KfUjFj6QHrIf6NwRK1KrtJ62BPjnQ5t%2Fb%2BKMPmAp8AGOqUB3hutoXO%2FvjV1qyVIzdsobAa5QJh5tWVOAAGygMNbTu3cDPiU3JeDCYkxvx09XKDnz8hlYBHdNYD4SjadEm86S923oVaqOr6lSCTU8YsflX%2BFHM9ohsblGnlezkaTEu1RhP5jCEFvgQxVuIkTT5J57LNFnWYSZsaAKDjhvauyZT%2FDldWXLa2b%2BjMc8yjWgRSHGBXmm0EGDWGERh1mglaOfA06P8qV&X-Amz-Signature=0f5261c6f8817648fd7a64dff4a3a25498a04069bac614b1e1d4894f34143865&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466654LQKK3%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T050854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQCyBXv1CfFlu9aE02CJ%2FciC8XMff5nxdcg0JugtwApTNAIhAPgSJI7er6ZcTnHczGBcUQMiGBXPD1RoxQAKxB%2BPZATeKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxuuIekAgvRiQVREIsq3APCAo5H%2BrfjuGQML4CMiQz6kmBeGX%2Fw8KWCpjub2PsCgH%2FaMCX5dZLlYaetkH4Gsv5vA4Ub4Tfr92oyA6d9ogWix4%2B6CId8s6AGUxWq%2F1FSGMbIECSZYvOo5%2FElZ0Mqf9tv7fv3829KHhucA9eAXZlut1qTv1989vVmzYBMGiWCpjOazpj82V0g5duKMH%2FBU%2FEaBYRl6ALAtpSxj%2FX0Px%2FChWd2EFF%2BCC47uqySAuIQ4QLLHBO5Hoird%2FjEyQVtS6PSpUjznb4icONh7cJOU2%2FcORDUTxrof2qb5wc5TKV3wCwK%2F%2B6pAp2F4oE%2F5CStH3ybhlBHtxBAy0DVYc8wOOn7cvv4LrzsAcweHKpMrd8TAqRBoA31SpcgRgsgjyXD%2FrY%2BPEizVOdBhDxFq8bJ9FHjDVcrI3Q%2B3TtKs%2BxViQA2L%2By2wh7kYsXWljdgjGXRPjV3GHOTY6PN3%2FdvpuRVtXfNnvfaSWEcOgBMl%2BHxUwcpbDIlCJOxvcVX8GuHM%2BnVEg7N5J5FcFXvVIVWS%2Fa5uucg%2BzkxRseJcpNv6ldg7%2BV2%2Bb9sDISd4OPmXf1OgS2emzY0py4GgUQrksygN4hFMthJPN3ZtH0kSE63EIW0SUbr7r3VE6p5vnLr%2BQQfIzDYgKfABjqkAWBx9ovt2KSuIJ5c1oFHuXROWyycAp2UzbwmSMf2V6N78c%2Fv3SWD5DeH58yVbV%2Ftx6dEXvUQ0BjNgdTQyafUTWZSVJukiWzUxRioJEja2nQXsKh154xBIwXKVt%2FjD3eeAb9J%2FFCqw%2BJFTqTdnixfyiKkSJP7GnGlWTQ2egHFPomIGR5Ap4rpgk2MA%2B1eZ9rBUjeLF0ZCdkPjGikCeEftwkISYVyx&X-Amz-Signature=07bd79e787f1f409fb2d76dcd149f9bcdff876c98c3e4860ac4758063f2e1e58&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
