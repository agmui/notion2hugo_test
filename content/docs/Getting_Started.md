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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5X24OU3%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T160911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIGmoErD7aujeNaZRwtTql%2FfwBOjKQK3w9d6AMn6xsIuVAiEAnUUhC59RQx%2FsWtJth7YeayLTvqteTitTVwWmDGk4xeMq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDBdddcF30snz5XvfOCrcA7isF2opsHs3zErKPxnch8YyTnFxfnAvz%2BrQDjmTPaPIYrS4PTHqKV6DYV1HnPO%2BuFeOUls1ln9gSBKxUALVAR%2FXiWMs7iXpLzTdzUgDaV8wARiJC9laLf1GntKUX7x7vUO2BWdbtXBHZmQ59HvpyZCISrzj02%2FJ1QzbRvvP3Zmog%2FE1ri57l4faH3xUaR6BufqVglkAt5GOicjjmoGkMkpTEFtIAwG3PtA66u%2FVCOjqsp%2FUS3o2%2B0qB%2Fl5Y%2Fc7YC416jVe6qWhUNdOqpkKICiMS%2BVM9YK5ii8kBK8%2Feoc3BNeyAm9aEJJs2i0irch%2F2Q6ikc%2B71SiVZ%2BK6JPPw2A%2F53Xs%2Fp6pEjhtHppygQGoUerw6q37k2CBC4GbVsOXx1p5HTFaujUEihbrVKfY3x%2Bibnzx1YPlq1j7F90lu56HQ3FdE11NnNPcQY40Rj%2BNj%2BWRvBzHSH%2FFT3MNrX8LHhMSOGMnArY%2BGrtMM8dAZERQyTWSCAvqLMPhK8guXanS23lRPesqpQMFYUHjITuvsY7cq%2FtnFlwlImmkdW%2FrhWaEN7WprXvJOn67Wg%2BZQlIiPSyhORXebzA%2Bacg6LMpva8i0BjEECFZRKl%2Bykdnm42mGtVJVwet72vun3zb6UAMN%2FVqcMGOqUBVae55B%2BvFTQOrE4hNOcjrIPwQL7l%2FqnSh%2BOgJKMEiVBmmIhGWddKdsn2HAXgUsPOTTPCa67X9XgCTKKJyk3kLK2t4JYupsiQq%2BFXQXVnXs84f7BLj3GSpWWsbemuptcjUgb5GE1Su2Jw%2BuyW5PmdWHLz4f4D7OhVFIs%2BSd2KBDdrwoeHhT9%2BmzUfSJotGsb6IcdzUkQf%2FWMKh5xad4d8j9zWquhT&X-Amz-Signature=151a88275e4aa2f308c9b4f9c4e18a0081b7e8174da19d0809e926c52f965301&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5X24OU3%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T160911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIGmoErD7aujeNaZRwtTql%2FfwBOjKQK3w9d6AMn6xsIuVAiEAnUUhC59RQx%2FsWtJth7YeayLTvqteTitTVwWmDGk4xeMq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDBdddcF30snz5XvfOCrcA7isF2opsHs3zErKPxnch8YyTnFxfnAvz%2BrQDjmTPaPIYrS4PTHqKV6DYV1HnPO%2BuFeOUls1ln9gSBKxUALVAR%2FXiWMs7iXpLzTdzUgDaV8wARiJC9laLf1GntKUX7x7vUO2BWdbtXBHZmQ59HvpyZCISrzj02%2FJ1QzbRvvP3Zmog%2FE1ri57l4faH3xUaR6BufqVglkAt5GOicjjmoGkMkpTEFtIAwG3PtA66u%2FVCOjqsp%2FUS3o2%2B0qB%2Fl5Y%2Fc7YC416jVe6qWhUNdOqpkKICiMS%2BVM9YK5ii8kBK8%2Feoc3BNeyAm9aEJJs2i0irch%2F2Q6ikc%2B71SiVZ%2BK6JPPw2A%2F53Xs%2Fp6pEjhtHppygQGoUerw6q37k2CBC4GbVsOXx1p5HTFaujUEihbrVKfY3x%2Bibnzx1YPlq1j7F90lu56HQ3FdE11NnNPcQY40Rj%2BNj%2BWRvBzHSH%2FFT3MNrX8LHhMSOGMnArY%2BGrtMM8dAZERQyTWSCAvqLMPhK8guXanS23lRPesqpQMFYUHjITuvsY7cq%2FtnFlwlImmkdW%2FrhWaEN7WprXvJOn67Wg%2BZQlIiPSyhORXebzA%2Bacg6LMpva8i0BjEECFZRKl%2Bykdnm42mGtVJVwet72vun3zb6UAMN%2FVqcMGOqUBVae55B%2BvFTQOrE4hNOcjrIPwQL7l%2FqnSh%2BOgJKMEiVBmmIhGWddKdsn2HAXgUsPOTTPCa67X9XgCTKKJyk3kLK2t4JYupsiQq%2BFXQXVnXs84f7BLj3GSpWWsbemuptcjUgb5GE1Su2Jw%2BuyW5PmdWHLz4f4D7OhVFIs%2BSd2KBDdrwoeHhT9%2BmzUfSJotGsb6IcdzUkQf%2FWMKh5xad4d8j9zWquhT&X-Amz-Signature=e5f37c8391c021e62c15573d1ea800b66d7ebfdc93d1230a11a61b7274661593&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5X24OU3%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T160911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIGmoErD7aujeNaZRwtTql%2FfwBOjKQK3w9d6AMn6xsIuVAiEAnUUhC59RQx%2FsWtJth7YeayLTvqteTitTVwWmDGk4xeMq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDBdddcF30snz5XvfOCrcA7isF2opsHs3zErKPxnch8YyTnFxfnAvz%2BrQDjmTPaPIYrS4PTHqKV6DYV1HnPO%2BuFeOUls1ln9gSBKxUALVAR%2FXiWMs7iXpLzTdzUgDaV8wARiJC9laLf1GntKUX7x7vUO2BWdbtXBHZmQ59HvpyZCISrzj02%2FJ1QzbRvvP3Zmog%2FE1ri57l4faH3xUaR6BufqVglkAt5GOicjjmoGkMkpTEFtIAwG3PtA66u%2FVCOjqsp%2FUS3o2%2B0qB%2Fl5Y%2Fc7YC416jVe6qWhUNdOqpkKICiMS%2BVM9YK5ii8kBK8%2Feoc3BNeyAm9aEJJs2i0irch%2F2Q6ikc%2B71SiVZ%2BK6JPPw2A%2F53Xs%2Fp6pEjhtHppygQGoUerw6q37k2CBC4GbVsOXx1p5HTFaujUEihbrVKfY3x%2Bibnzx1YPlq1j7F90lu56HQ3FdE11NnNPcQY40Rj%2BNj%2BWRvBzHSH%2FFT3MNrX8LHhMSOGMnArY%2BGrtMM8dAZERQyTWSCAvqLMPhK8guXanS23lRPesqpQMFYUHjITuvsY7cq%2FtnFlwlImmkdW%2FrhWaEN7WprXvJOn67Wg%2BZQlIiPSyhORXebzA%2Bacg6LMpva8i0BjEECFZRKl%2Bykdnm42mGtVJVwet72vun3zb6UAMN%2FVqcMGOqUBVae55B%2BvFTQOrE4hNOcjrIPwQL7l%2FqnSh%2BOgJKMEiVBmmIhGWddKdsn2HAXgUsPOTTPCa67X9XgCTKKJyk3kLK2t4JYupsiQq%2BFXQXVnXs84f7BLj3GSpWWsbemuptcjUgb5GE1Su2Jw%2BuyW5PmdWHLz4f4D7OhVFIs%2BSd2KBDdrwoeHhT9%2BmzUfSJotGsb6IcdzUkQf%2FWMKh5xad4d8j9zWquhT&X-Amz-Signature=9ef9aafe315aa9e425e07d697b0dfcdc338744e70c7cff6ef4d87972599167b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WL2ITBL7%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T160914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQDzBM%2BcN5y0ZInrf7zgjXEThfOReAyT7S4EKo5iuPS2hwIgT%2BHudl0EGlq1KKx8hCe76UHj9QA%2F8wDefuo1EAC5VPUq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDF52fZBO1SpRNslVXCrcAwwC7AOijx%2Fo7ySbITKaNj%2FPBE%2FuLR9s1dpjAgM7DYWZOj%2F4WbnHKD3uZvgnbwvleP8Sk4OdLwWLs5K99oiUbOZy5jum1qVzhkBSBPvgPJ1uw3PMfhiI9IN77vE7fIyP%2FCzqV7tTVOQIbYklSmqODkdwNHRzVC%2BF7ydKF3yNWoxI9djlAHDOLohTGJxibK8%2BRmBdToT9veSYh%2B9q0l7F5zBbUcRGEnjwXNCcg3wBarY1BWh6YCAPwK1eclQyYIgHloI6tqJiQYvH8yXNlZ%2FIfd7f2ouuYsi5mQJIuiO2YqQiuOxKmwCBOWxAScpUZphrQH48ss%2BEE1SyFx81XqBKIzv1KsEvlLSgv%2BLK6Zdpb43FCwAWSojD57eZziGnt4T7PrW1ULpsRwaiSCuIckDPn5xbcGO5sSPK9zl4jXu75NETCVhhWBihHPb1cv67b%2Fd1OWsn%2FCaUrdRyiqxHSbDLmUJ0%2Fboatwn7LKbYkpIjF%2FWVXUKXj7UJQnwVC42pc2Qf3zsT%2F1aaVXnZw3zgdiPDUtMhgpZ88e6LZ8Qovh5s7QDN0VOId%2FCRo5Qyn1YFtkqEhMldhrbdamY%2FhMO2F24mw1WTq7c49FaiglTzPQ1OzJqe9YMhGT%2F2waYlt5ZWMK7SqcMGOqUBy4A1Yev6u3jrJXcxkgXvCfbeeADMxHeM%2BPJfT%2Fmq5lG95u9XmH3Xibu2USXhXyFiVMIqqsljo6ySKkX4rNhDgUZYePoWbs3Lr19qpnYvRWt3hlqTkRxZ9VUej%2BlEieCptIw9JTBk31V5TnzNnXcRmNag58PEvu90Mcleahv7MwAgnCDvLdPBoE0Fr%2B3jgXjWfDQnbXzNVti7Q9PuoK6aK02xQQj%2F&X-Amz-Signature=9d60cce267c524dbe0fec6579523f820671a8723ce29748ebfdb1bb17a004736&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHI5JL6O%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T160914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIBFx5387xi5iZYj1OYkc5Q2sbXrZV0u8ntQNTKRTJadjAiAwrx5TM3x6zlU58if5eX6LOdiRXZMVYqliY609o6czCCr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMAa%2FXpeThtDzonOPTKtwDbub7%2B4Y08Q0hxMC7tftw4jwVgbM%2FBmSGsCTKOz4eBHREcJaipL%2BmSA8G2SSpdTf26IVVEL8ildmjbUxUJmA8VoqWrsheyNGF8i%2BGovpz7YsMNUt85V%2B5Sfe4NLYb1Sem%2FsbqbyreL22sAJ2UdcuPhewBSDVpdC7gBK5y9fJbyYIQezXreN1afjdomWmp3DPM6irRF%2BPA4lWMI1izD%2Fe%2BTHBXBLEYTiH4v%2FaW53ukL0gh37zQ%2Fp043r0%2Bdo5vI2%2Fq%2B155w36i%2F3HAge5HaJrQXZP1lceosH3nsGR1WeIuYmm1tExjimm6cf4RA0Skt0yQHlfrwf8qobWBkmJSwiL0ovb98EtAKRxTsRp9B701BEFSXCH8TJGEfhEeSorF3RkQyPbaGMS77%2F7vWx8r9hibmZzhk6KxkMWleqS2cTmFu47rbzhLKRs69XcbJAzmOgHBAoeE%2BEPPGqW8qjYzL4yRlPQQhDzRBbKg0QNpNJr%2FlnGASdR%2F1SFuAY8WPLOCFWMm94Hd3PB5QGsCKIeL9W7c5Gg6NJtN2mMdhBe%2FOl4ljfGeEMG%2Bl9PBAjtuFs4PHkg%2FJbNNKRkgecyz80oEbb89qPPWjxybiZeWumSd7E2UwgYnghwPcQ9pDCNa1EUw47SqwwY6pgGY%2BO4Z5MFK29DabuYh%2FzbfcS0N%2FWsVur%2FFP7Z1EeQZ7KmfHDLXhomk%2F0mQdF%2F28eFRIpjhH9DaVvjmWQbIgyC6dUOfZJOM2yos%2BpE9OdPtjwmZR9ajVdN8xdlB2%2FmUc7wHR6%2F6Lk0fxrAbLhspALPcmWYi%2B1OOuvMBTGVlsOvQ9ccc1J5Uii%2BYgCfyaJh1LTMdh0Io%2FFQr2XcB9nf5%2BhpZIKOGrYNi&X-Amz-Signature=c12fac41f9fe19c603d4ac5a867c3b637136fe0ef4b57323332850e236f1fdb4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5X24OU3%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T160911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIGmoErD7aujeNaZRwtTql%2FfwBOjKQK3w9d6AMn6xsIuVAiEAnUUhC59RQx%2FsWtJth7YeayLTvqteTitTVwWmDGk4xeMq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDBdddcF30snz5XvfOCrcA7isF2opsHs3zErKPxnch8YyTnFxfnAvz%2BrQDjmTPaPIYrS4PTHqKV6DYV1HnPO%2BuFeOUls1ln9gSBKxUALVAR%2FXiWMs7iXpLzTdzUgDaV8wARiJC9laLf1GntKUX7x7vUO2BWdbtXBHZmQ59HvpyZCISrzj02%2FJ1QzbRvvP3Zmog%2FE1ri57l4faH3xUaR6BufqVglkAt5GOicjjmoGkMkpTEFtIAwG3PtA66u%2FVCOjqsp%2FUS3o2%2B0qB%2Fl5Y%2Fc7YC416jVe6qWhUNdOqpkKICiMS%2BVM9YK5ii8kBK8%2Feoc3BNeyAm9aEJJs2i0irch%2F2Q6ikc%2B71SiVZ%2BK6JPPw2A%2F53Xs%2Fp6pEjhtHppygQGoUerw6q37k2CBC4GbVsOXx1p5HTFaujUEihbrVKfY3x%2Bibnzx1YPlq1j7F90lu56HQ3FdE11NnNPcQY40Rj%2BNj%2BWRvBzHSH%2FFT3MNrX8LHhMSOGMnArY%2BGrtMM8dAZERQyTWSCAvqLMPhK8guXanS23lRPesqpQMFYUHjITuvsY7cq%2FtnFlwlImmkdW%2FrhWaEN7WprXvJOn67Wg%2BZQlIiPSyhORXebzA%2Bacg6LMpva8i0BjEECFZRKl%2Bykdnm42mGtVJVwet72vun3zb6UAMN%2FVqcMGOqUBVae55B%2BvFTQOrE4hNOcjrIPwQL7l%2FqnSh%2BOgJKMEiVBmmIhGWddKdsn2HAXgUsPOTTPCa67X9XgCTKKJyk3kLK2t4JYupsiQq%2BFXQXVnXs84f7BLj3GSpWWsbemuptcjUgb5GE1Su2Jw%2BuyW5PmdWHLz4f4D7OhVFIs%2BSd2KBDdrwoeHhT9%2BmzUfSJotGsb6IcdzUkQf%2FWMKh5xad4d8j9zWquhT&X-Amz-Signature=b3796537d5e1b14c6bcc72a5b3995dbf182f16b28b59235d71913ec6e7abb1e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
