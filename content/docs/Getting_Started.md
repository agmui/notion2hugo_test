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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXOWIE55%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T140735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbdza6x7FeGF06vt5U8dFzTRR60epPpOLnldBs1gPtXQIgHF0%2FVqGa4wa%2FrDKhm%2BbS2nIbOwZfB6XKDMTcEm%2FQl80q%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDHxfuGtgqHfR0uvQySrcA9xgw4c8lXU%2FrXr2JAYI65HeX1GPasOviQMHbgGzcgD%2BcW2UXaHnjSkWJpoKIcSNtBntdAMgxZ7UldZDUBvgtXyzUUCbJw2A1j4%2BluoJPRfLE65VZ8bJOQutApf3uRD653UD0%2FNgn6wiJsPqACYAfaiu1%2B%2FXTtWpjuJo5zU8V%2B3s6ngUQ8ySZ1NRsYXnGm47xX6EF3OQO2W7pix5uenV723JFIjkw9SJgsybOkBdU5XreT6eokMxbRikPfYzGpZVCr5otxpPJ2d%2FxBeZdit3qj%2FFrvB7Vghs5nE9BC%2Bbro0EBxqCRw5zVBXPM2x4eVpPub7194a9%2Fre%2FDkEKw2PfQQVXFMrA4qaRAcmVnf4MC9bqtxumRfKgUXnvdgvQ4%2BY%2B4GD7NK%2FnFzxgqu3pCYPM00g0NfbQXNIX8Dp9uMtAL%2FGk8%2FR64WqMRJxqXbyKW8sAY%2BTQRW7YBGFsa8o0cbP6RxjwbeLxwrbzqmN5BSQ%2Bk%2B0blxdqyJveyxDhY%2BS8nRnmloHLMs%2ByASbUTzMk8LV1%2BFoPIjVylmUM%2FiHR7BugEF%2FehhzyvezOS3OXy%2BXUyjOdQF5e%2FBUkc5QKn2NqLrN52dA95l%2BZ76QQjHSIqw5i0kUiaRg2VleqgRaLuBP0ML3fq74GOqUBwFePgZpUrJelJQgKVPXJlhYYKDAfAi%2FirDTMkht32BHppYaM4aXNHKE%2BDdlo7%2BiORrRPdBR%2BjuPC8LcApZHcdrbeD8ooY6xNV8qOcwM3MbvIQnEaXpRiAo7CJQ4GQBJWZdN6y0X5pY%2B6BZnsrNeuy8gGlVytV2CSBN6xnOmIctyEZQzCdsominqhPHv8V0u8ylQfwrEfWJPktgUbo30XDdja3TkB&X-Amz-Signature=c92b3510283c159961da9622d1d0ac097cd0158bdadd1cdde913c5891dc63b9d&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXOWIE55%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T140735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbdza6x7FeGF06vt5U8dFzTRR60epPpOLnldBs1gPtXQIgHF0%2FVqGa4wa%2FrDKhm%2BbS2nIbOwZfB6XKDMTcEm%2FQl80q%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDHxfuGtgqHfR0uvQySrcA9xgw4c8lXU%2FrXr2JAYI65HeX1GPasOviQMHbgGzcgD%2BcW2UXaHnjSkWJpoKIcSNtBntdAMgxZ7UldZDUBvgtXyzUUCbJw2A1j4%2BluoJPRfLE65VZ8bJOQutApf3uRD653UD0%2FNgn6wiJsPqACYAfaiu1%2B%2FXTtWpjuJo5zU8V%2B3s6ngUQ8ySZ1NRsYXnGm47xX6EF3OQO2W7pix5uenV723JFIjkw9SJgsybOkBdU5XreT6eokMxbRikPfYzGpZVCr5otxpPJ2d%2FxBeZdit3qj%2FFrvB7Vghs5nE9BC%2Bbro0EBxqCRw5zVBXPM2x4eVpPub7194a9%2Fre%2FDkEKw2PfQQVXFMrA4qaRAcmVnf4MC9bqtxumRfKgUXnvdgvQ4%2BY%2B4GD7NK%2FnFzxgqu3pCYPM00g0NfbQXNIX8Dp9uMtAL%2FGk8%2FR64WqMRJxqXbyKW8sAY%2BTQRW7YBGFsa8o0cbP6RxjwbeLxwrbzqmN5BSQ%2Bk%2B0blxdqyJveyxDhY%2BS8nRnmloHLMs%2ByASbUTzMk8LV1%2BFoPIjVylmUM%2FiHR7BugEF%2FehhzyvezOS3OXy%2BXUyjOdQF5e%2FBUkc5QKn2NqLrN52dA95l%2BZ76QQjHSIqw5i0kUiaRg2VleqgRaLuBP0ML3fq74GOqUBwFePgZpUrJelJQgKVPXJlhYYKDAfAi%2FirDTMkht32BHppYaM4aXNHKE%2BDdlo7%2BiORrRPdBR%2BjuPC8LcApZHcdrbeD8ooY6xNV8qOcwM3MbvIQnEaXpRiAo7CJQ4GQBJWZdN6y0X5pY%2B6BZnsrNeuy8gGlVytV2CSBN6xnOmIctyEZQzCdsominqhPHv8V0u8ylQfwrEfWJPktgUbo30XDdja3TkB&X-Amz-Signature=ff2f5a2e2220c142316b1d5ea567ebc70cb33bbc4e618bd0be3d8353f12ef098&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YW4CCKJB%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T140739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICUJ5j3VIqmAvNC8i0kX04btPeUiel%2FJycKV6btbaDHHAiEArf55MKDb2r5RsdYLMlIK%2BQTw1xrg%2FeLQY36ngipab%2BMq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDFdytHrNj2cb1D2XLircAytIQoU%2BpvC2G%2BuCFUqY0dIf%2FJWKZ4WK8kBZWU5rVlOAtPm3DzZow82ZNKtkU0dGWKasRBvhuI9ORvZnPhFO4G9Ih9uE3W2xOtvBeddq3mZP3ocehdvTqVIB1%2FARsH8RAy6Ya3avqktdeFhbZwPPvVZwkvAMsbp1vAwGmLl%2B0QqUnjpgf3aMXtpctS8ZZxHIooOcgSAYDyzucOUzhvcWDvt93h2LkfiEvRtqN4AuwFZDf7x0H7p67r1IjQwtaUOgDQVb7Eq9cgehlL1yEyXZbhN8rsuDNoBRtrfL9fhdffiT215hL8xNSXKlYBX3OWe3vpUciLOv8ytm6G0EDcSzaFwfNxhfcMelQnBc24nLXiorhip5DKUSVRpCsshRUJIo642iWEMnXdEu0jaHIChTo%2FqMiUi0GLFSEvDBX1a%2BZKTeuY188a5AB2gVaimwJ2djCSxIvlqVS2CLToCKOGs%2FTBUbeKmyz6%2FtfLoomvIEv6A%2FYjPyJycsy%2FP9MxQlfY%2Fhw%2FfysiuR7jpXZ5PJVcO8%2BeCKLFsHySYw7U8Z%2BSELyKNyPFfbwnCCIF%2F5l6DPKBbHvKg9soxVq99AdE%2FgZe91xk3Ysw6NK9uYKDxeb5lBeNY3T3lCuKKkszf7tXidMM7fq74GOqUBPuBcnmrAnAOVmx3DouiG31TlPaMHyOI8mU2r%2BpaYg6yYVAuaDSjNi2dL4NIE0pE7X3ULS5ED21VLX9H84vEUGgWrbVBxbaZonhICC986VBEDgaDh4zI4FEOOrjfutYFXpX4pD5Js1G5jQyEepvwdIuviNXE1soMPSVKUb4sghUKeJe0zJ7ZXjsGe9X59Bhtjysd%2FQaf0KqqfuDK6cK2Il3LOcrj5&X-Amz-Signature=a9267d3c39f2dfce3093fef7ea8fa3d52780b6ddaf565c2ff29bdc6365a8477e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UFDBUF5%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T140740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAVKQZsnS%2FJ%2FHQfIlM3AKAqMaCfqzttxEy60eeWLiHUAIhAMvxZLsN3pJMhSQNxuG034iLhWr8fWZXVmcxDP3ZLsisKv8DCEYQABoMNjM3NDIzMTgzODA1IgxVsLRGyBOaJ3VcG0Aq3ANzNBRVm%2BEpyM2pYURMcnGFDeugm%2BbMnGs4TbuPMxK8ISjsZdV7KiAdp0GX6R0wqJkqo%2FmU1TOPCPK%2F1RPydgRrT82hXBZGdJUTv%2FAqha5kJjBN7umUwwZ5EO21EsHArGBDzuPeX%2BlWX0qYhuqywEHK9n1q%2BXkhtAFlXs0ojRjQsrVP45gJce8HKyWNnE0UTYYQXehi2TIOQmYn17%2FkbAn%2BGK4cVQJJnJeaaj4GsOW9jbaExJi1BYDaG8jwW9JYwUa4r6%2BvWUE6TcwMnLZHFZ%2BcmqM%2BjVioymajKP8JMd8JWJsPUb9TOVbDG%2Fs%2FWvYVbKkdzah014IPxw%2F73GuUU8h6mw6inYmbP50JF4C%2Bb3UzsNhMhiTJ3M0zxOHVQeHRmxj7k3duGN4lol2tjuDMtYOzJuXXnGEapiNI32MjAB0a%2BRoU%2BlU9cY4xE%2Fpcb4x0RZ1IQJbCu5bw1lU85rxhwxtYiaaKx2zYCULjzZzVJZwsiSVEOIx0n34d%2BT5cixQCXOFqmyvo5zENBY23%2FQlvC6a4%2FyXaF5DsHBApXSfkB97qOfcn9hVDy8rtCum1SUhoK5OdqUTlB96%2B1okCm%2FeL6nHH3eXlWp3yLY6I7KgR%2FNsK72Lmur%2FarbKA0gdHzDCU36u%2BBjqkAdW8Bf7nxl2%2FePDtsstyjx4j2PI3JIGqramxlbdRmVfIXjhAEmRG4wDhNUEdHgAbNO1wKWMCp4I5rluXhMoEongOIgqYAy1DadJbIHMiyrg7z%2F0AYrrRhsd13sM%2Bbqo8LQwP827x%2BygthFkMk76QdNobh9tdZYGJA7T%2FwPgNJIC07CIRJ0XagP6b31p4yy5UhTJFJfVltZP52LIbKAFTgQuiqiou&X-Amz-Signature=9f6e60fd4fd3c322f98ca39d798591ff7d51143bbf67c9c35b99999febb0f9ef&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXOWIE55%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T140735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbdza6x7FeGF06vt5U8dFzTRR60epPpOLnldBs1gPtXQIgHF0%2FVqGa4wa%2FrDKhm%2BbS2nIbOwZfB6XKDMTcEm%2FQl80q%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDHxfuGtgqHfR0uvQySrcA9xgw4c8lXU%2FrXr2JAYI65HeX1GPasOviQMHbgGzcgD%2BcW2UXaHnjSkWJpoKIcSNtBntdAMgxZ7UldZDUBvgtXyzUUCbJw2A1j4%2BluoJPRfLE65VZ8bJOQutApf3uRD653UD0%2FNgn6wiJsPqACYAfaiu1%2B%2FXTtWpjuJo5zU8V%2B3s6ngUQ8ySZ1NRsYXnGm47xX6EF3OQO2W7pix5uenV723JFIjkw9SJgsybOkBdU5XreT6eokMxbRikPfYzGpZVCr5otxpPJ2d%2FxBeZdit3qj%2FFrvB7Vghs5nE9BC%2Bbro0EBxqCRw5zVBXPM2x4eVpPub7194a9%2Fre%2FDkEKw2PfQQVXFMrA4qaRAcmVnf4MC9bqtxumRfKgUXnvdgvQ4%2BY%2B4GD7NK%2FnFzxgqu3pCYPM00g0NfbQXNIX8Dp9uMtAL%2FGk8%2FR64WqMRJxqXbyKW8sAY%2BTQRW7YBGFsa8o0cbP6RxjwbeLxwrbzqmN5BSQ%2Bk%2B0blxdqyJveyxDhY%2BS8nRnmloHLMs%2ByASbUTzMk8LV1%2BFoPIjVylmUM%2FiHR7BugEF%2FehhzyvezOS3OXy%2BXUyjOdQF5e%2FBUkc5QKn2NqLrN52dA95l%2BZ76QQjHSIqw5i0kUiaRg2VleqgRaLuBP0ML3fq74GOqUBwFePgZpUrJelJQgKVPXJlhYYKDAfAi%2FirDTMkht32BHppYaM4aXNHKE%2BDdlo7%2BiORrRPdBR%2BjuPC8LcApZHcdrbeD8ooY6xNV8qOcwM3MbvIQnEaXpRiAo7CJQ4GQBJWZdN6y0X5pY%2B6BZnsrNeuy8gGlVytV2CSBN6xnOmIctyEZQzCdsominqhPHv8V0u8ylQfwrEfWJPktgUbo30XDdja3TkB&X-Amz-Signature=593a2957e9a252a189a8ccc4efb7141bdfdd618c5b9ed9f42409f642c5991700&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
