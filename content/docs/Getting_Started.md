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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUC2DPMM%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T041000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDG7NSPOF9%2B0KZh27ut7TCbLZ39%2F8tFns5y5L%2FxYTbUXgIhAIoiNDfGIVhVgqaWQY21cBCVveladYJBsBQY%2Fglc1ticKv8DCCEQABoMNjM3NDIzMTgzODA1IgxrU%2FXm31AP%2BPHLdegq3AMdGyfyxcc3Bmdt0sfKd1JjsmJ7F2ZnT7P5119lpq3HWX%2BAYQD6xaTw6MFse0M%2FqSL%2BEiGikjAVswCTzpIILd9W2L6UuSlKr2LCagigfau5DYmCGoI4CwTL%2FgXYvfgD931FViZQmFvUeehr9scR5757gfPhCUxHXLAsPK5iRllT9mw3Sk3dIewZJ74TcUv054OBV0W4m78%2BLzYzMZnLbweieg2JLLCUNN82xz3EgNN6UeYDBt0mf7h81Hv0LgII%2Bcl1C%2BCxOrKbvB4zhhZCuw61nQMWzR1spoJBcb5TJ98ZeEBckKiZ%2B3Mr6hA%2FoF3Z1%2Fe%2Fh5UThTQ379TuSXflqjb1pyRJvMjNzSIu4h3SbhktD6TvZ2AcTm1%2B%2FKVAzMP2jTKqcoBE5ZMJmm2TQJzeLBBSg9CVnk8z0Tg0B9EjEfGDZLXvPPwc0c82Z5aSkAqFBWC8eDHo5R11g67CaiRYIFPqRS1FoP8Gd%2BqJlH0sn90G%2Fw7CcDJoQeQ0Prk9CEM7xUQlvdiU75jiKG8MZBJ%2B5QdtRD2ve8TwD6UOUldODTMA28ct0yRwoyoMAqZTDBiCKj2Wx2aBAZZ%2BSk5APbal9mCkIto%2BvW0KdNoshRR1qrNs%2F48BraBQXY5pvvtnQjCo8e69BjqkAX4iujsnWIc7zYczL8B8CKx%2BtdXG9LSZCVn2dBQGTA4obssmFqEV7sxkDF6%2FIC5zH7GEKrKeIG63d7QGcg1S2cyT3d%2Fo3rsXUNM608%2FvjfCL9u3V2KSvp0184G5P9AcNplPQ7eaGmpHaEVW6WbLwAhttdKrHiyAmzaYmMmQZWKc5ZGbPRyFUgiVIjUAtAHZqQ0FGly15GOb9Z%2FKqn%2FChq8CQdeGY&X-Amz-Signature=37c78939de0b2a4a93bc65d2558d3c09abdc966c4f0bd5a803da4b641d321ef2&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUC2DPMM%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T041000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDG7NSPOF9%2B0KZh27ut7TCbLZ39%2F8tFns5y5L%2FxYTbUXgIhAIoiNDfGIVhVgqaWQY21cBCVveladYJBsBQY%2Fglc1ticKv8DCCEQABoMNjM3NDIzMTgzODA1IgxrU%2FXm31AP%2BPHLdegq3AMdGyfyxcc3Bmdt0sfKd1JjsmJ7F2ZnT7P5119lpq3HWX%2BAYQD6xaTw6MFse0M%2FqSL%2BEiGikjAVswCTzpIILd9W2L6UuSlKr2LCagigfau5DYmCGoI4CwTL%2FgXYvfgD931FViZQmFvUeehr9scR5757gfPhCUxHXLAsPK5iRllT9mw3Sk3dIewZJ74TcUv054OBV0W4m78%2BLzYzMZnLbweieg2JLLCUNN82xz3EgNN6UeYDBt0mf7h81Hv0LgII%2Bcl1C%2BCxOrKbvB4zhhZCuw61nQMWzR1spoJBcb5TJ98ZeEBckKiZ%2B3Mr6hA%2FoF3Z1%2Fe%2Fh5UThTQ379TuSXflqjb1pyRJvMjNzSIu4h3SbhktD6TvZ2AcTm1%2B%2FKVAzMP2jTKqcoBE5ZMJmm2TQJzeLBBSg9CVnk8z0Tg0B9EjEfGDZLXvPPwc0c82Z5aSkAqFBWC8eDHo5R11g67CaiRYIFPqRS1FoP8Gd%2BqJlH0sn90G%2Fw7CcDJoQeQ0Prk9CEM7xUQlvdiU75jiKG8MZBJ%2B5QdtRD2ve8TwD6UOUldODTMA28ct0yRwoyoMAqZTDBiCKj2Wx2aBAZZ%2BSk5APbal9mCkIto%2BvW0KdNoshRR1qrNs%2F48BraBQXY5pvvtnQjCo8e69BjqkAX4iujsnWIc7zYczL8B8CKx%2BtdXG9LSZCVn2dBQGTA4obssmFqEV7sxkDF6%2FIC5zH7GEKrKeIG63d7QGcg1S2cyT3d%2Fo3rsXUNM608%2FvjfCL9u3V2KSvp0184G5P9AcNplPQ7eaGmpHaEVW6WbLwAhttdKrHiyAmzaYmMmQZWKc5ZGbPRyFUgiVIjUAtAHZqQ0FGly15GOb9Z%2FKqn%2FChq8CQdeGY&X-Amz-Signature=43f0e9b147b12e97e05084601d7889814d57350e1996f884ac8bfc76de150a0e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOZUYWSW%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T041002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCf3HcAgOG6SRHmLJa2QpooorxvCafYiVeqFKDTUp9KhwIhAIVRmFx7ogh4JHJbW%2FhWPwmQCtiVWYQkkgihZGrSWOHKKv8DCCUQABoMNjM3NDIzMTgzODA1IgxDFO7Qx89vdJejPwkq3AO83EpEUMm3ft9ySAgeZM5ST15Hy10cKW%2F9ANLHn7mvF7Mqz9X6%2FmR7ThrdMFSuns8R2QmMnyGuP4zEu41BK8jO16ybc5uuqtROKGyvyWdj%2FltQT%2Fbq3kIyuMmhb9iELePpwEMZNUqX7vSnvZBXLaBnnYQ3Gq9CK3VCXFvUvEFnGAyqGEzjWSJoECJa7lCxZ1OD2LYk5Uy72l%2BybSd%2FswD8jWSLSKUjhoo%2F3p%2FPVQBhNhapSAL7LxkmQec5xhdemxA%2BDtjmS0cTMDeow0S37DZbBglQnlLcTuxxLHFlSlyNlzORUtkVJwYfTERBlPPRZtkfyrHDSJdgWzQojl54DJulC7jd%2F5xuVpRTTPfSIYOIYmLT8IFTnMyyipeOKyqmiibTT5U82YUi%2FFXNg9FUE0alK5QCl%2FQ8%2FiOR9niwWmSg4jzcgKu9JKf0wHa6MmTtmHIPlhlLQZLPuQUb%2BqAEE55UaT82%2BjY7DBh2F6%2BGEUs47AbWFfuFtcS5rGPshOFJr%2BrAwh9Adm%2FQIaXSlFOvz%2Bo0vxoPzTR%2F1UDoLiCvzEpb%2FFYhIuBs7triLvWzJKCbI%2BkQmsE6B8TZcEEcahnB297Lux2t2pp8kC5Bf4NaICGvWxJTeVECoURNVCGDQjDc4e%2B9BjqkAfQQRKEa2UcxSCWHlUY2RhG7Ord8X3tmAyIV5sL9ni7ZdLgyoPQas6HKb84acll9XF7R574yha%2BpunA2nUqPYQTtD%2FPXHu%2Fx%2BDD1WovvutnURbsLijgVmgIuz3kPmjEuUcx9ls2TqpFL8H62LCBMza0%2Bye1gbj2JhC0Xd1HW%2F1XhFhkLIKrFvMOHcZdiZ6f1yS57ApDgOsFfRP40PXsEQL9YuRJ1&X-Amz-Signature=1cf66389a93b4216d50c1e9004cdc35810ac6a8ff1e5223b88ff0d540b297e90&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOXTEKAI%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T041002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBSdbeVMPvoQi7fJ4qC3ETzVp%2FazyUQOnsM%2BKdUDKgLdAiAVsgeLk3C3CLkeL4EcuMsBBDVx6SCiiEbdx6beQGSycCr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMGPsdpUWJTjliWSOeKtwDCgrRd46UP9zlcXqq8DaIyFW8akD7nu5KACcE3Vog2w84xPpyyXZoCKYr4nWtG6oWaZO%2BH9LMPeG6arOHcNgcF7MC6lr9y7uUF4jeUyfVAzdtv2VIqk8oBJb%2FVe1NyRIZTaK6kSjN1480sfcgEa9c58k9FKJ4gOPiRbUsxHnwtB2byR62jci2ZsY9S7meMsrNHDqvFZGIgGDyuSGJTbV80GB1aICa47YzIWdPQOSmpHRmqUCTrghgls8%2B3tFnn3LO112jQLahxce437QXKjeFLj4%2FCA5d4O%2Bh6SpTs9NpQFULcYejpRt94vCwH9xqYc9vmr7%2Bg8F5HTd1u%2Bz5hpN8flI3FgD4TsWJuU42nGYS5uzey9bVpv7HrTELIytXIimTE0adhVL8wG8L35vyZwnH4ayJ8RvtD%2FTPGiz8LF4YzrIOh4hrkXnTuYlR0fhSm8Y4WkRyLprjgTAzXIhlbF7Qoe1jBrqX%2F%2FtxHcXs1RKDyksFb7%2Bc96SkO835zd9Y%2BVimV4AZIZMz9QTtlzwlqHi5EJTY7Yw6dkqoBu2%2FafwkuNa16PaR3YO0ffPGROXWqwyzWVKnDTU%2BTGBL8xxP9bkuqQUMh4tzTWFGqxs2bmuBoLyHZjhejklkpeUedGow0vHuvQY6pgGQpg%2F3f%2Bn2r58CettXUeoCGZCXPVZjZUo5JPtBkGKjv1hdJXxnKHrR44Qg2ggc5RCVYyN7Q9ibTDyhTk2b2QVrur462ZRXnl5oo58r7%2BMHOkItqFSFj5FOAbfo4prQ9ks0N55%2FnnMK8sXbb7BPkomjRepK5MHjZjRY3yWtBOwZqFI5ZOUuT7goeWS7KPZQpPVhvl85qYvI4GaQVL%2Bygnl194Ut5Ydj&X-Amz-Signature=082f1068b6d5fdf049fab274a1a49a7ee167e5298cfc363cc534420bb659c131&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUC2DPMM%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T041000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDG7NSPOF9%2B0KZh27ut7TCbLZ39%2F8tFns5y5L%2FxYTbUXgIhAIoiNDfGIVhVgqaWQY21cBCVveladYJBsBQY%2Fglc1ticKv8DCCEQABoMNjM3NDIzMTgzODA1IgxrU%2FXm31AP%2BPHLdegq3AMdGyfyxcc3Bmdt0sfKd1JjsmJ7F2ZnT7P5119lpq3HWX%2BAYQD6xaTw6MFse0M%2FqSL%2BEiGikjAVswCTzpIILd9W2L6UuSlKr2LCagigfau5DYmCGoI4CwTL%2FgXYvfgD931FViZQmFvUeehr9scR5757gfPhCUxHXLAsPK5iRllT9mw3Sk3dIewZJ74TcUv054OBV0W4m78%2BLzYzMZnLbweieg2JLLCUNN82xz3EgNN6UeYDBt0mf7h81Hv0LgII%2Bcl1C%2BCxOrKbvB4zhhZCuw61nQMWzR1spoJBcb5TJ98ZeEBckKiZ%2B3Mr6hA%2FoF3Z1%2Fe%2Fh5UThTQ379TuSXflqjb1pyRJvMjNzSIu4h3SbhktD6TvZ2AcTm1%2B%2FKVAzMP2jTKqcoBE5ZMJmm2TQJzeLBBSg9CVnk8z0Tg0B9EjEfGDZLXvPPwc0c82Z5aSkAqFBWC8eDHo5R11g67CaiRYIFPqRS1FoP8Gd%2BqJlH0sn90G%2Fw7CcDJoQeQ0Prk9CEM7xUQlvdiU75jiKG8MZBJ%2B5QdtRD2ve8TwD6UOUldODTMA28ct0yRwoyoMAqZTDBiCKj2Wx2aBAZZ%2BSk5APbal9mCkIto%2BvW0KdNoshRR1qrNs%2F48BraBQXY5pvvtnQjCo8e69BjqkAX4iujsnWIc7zYczL8B8CKx%2BtdXG9LSZCVn2dBQGTA4obssmFqEV7sxkDF6%2FIC5zH7GEKrKeIG63d7QGcg1S2cyT3d%2Fo3rsXUNM608%2FvjfCL9u3V2KSvp0184G5P9AcNplPQ7eaGmpHaEVW6WbLwAhttdKrHiyAmzaYmMmQZWKc5ZGbPRyFUgiVIjUAtAHZqQ0FGly15GOb9Z%2FKqn%2FChq8CQdeGY&X-Amz-Signature=31237eedd6f77ddc3f5ca6e3fbe94e599b43415b161fef546e8e9d7144e29192&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
