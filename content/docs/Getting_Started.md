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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IRNENIS%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T044007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEbKWv6UX7q4Uh%2Fs%2FA1XlvmN2gu7njz71x3TSwaM79D2AiEAg88tE%2FbX1YEbFeATmyKROfP1t9mLTKR50%2Fa5HIQcBAIqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGcCnWYWJxrfZyIOdyrcA57dQ4FETP8sgWPF7BIHsxRfYCU1vOS676zrQ9YJ%2F%2FpNn5WGMvGj0I61qRoE9iFvHbKsWoFg9jEO4gdZg0U%2Btw30G3%2FSIQnv5PloO5iQRB25d7AzWoUJngDN%2F0LLDb7bgkq5Q31VpeUo2yv6OWmm4Jy%2F878UXQR5Kdr0JpGyE5O5s%2BHQly%2BZ2kNpN39oVy80gfXgLqQHG7Mw4CLkGoizwvomfzlbCYkrx4Kpqc7mUMunh2ihg1jxg8tJsBJvpLa38VntTivS4KUmyEhqAxjrLElSODQPvg1d6OvSJJRtfh5CzlXuG%2BLSvm%2F7cWvzNWJdpjUGVeXi9hiqIjdWPZYAVDdwMAMMObNTSP2klKTaqu2vkkx7qHxzLhxZWQ2p9nZTxSAlwFNd8PmQAZPowy%2F3ijMrEc0f0h1fVxwmkXW2wxHmprbf9NLuzvN4GBY0kZmFkcBGWkYCBOGbTpiMBX380bRZODutcaF1JoovutGbc%2Fa%2BA2vjJcmhO2bHfcHCRMfINOmnWEwK4T%2B%2BuNdi9qngGvdg8q88eIPTkQXY4d8GZUPMXmV9NlsivluOSycUlzH8iOYZ2%2BgvOr7QrwcCAwsiN038ii8de9V6BMAgSgfe2hXcahrfYkgF3hT4QzHhMJez38QGOqUB8%2Ftb4XwlB2TFQ0ScHnXWW23IZblUEC6%2BbYQzspMwFNi73lZ%2Bgo%2BDVQecBwEh4L9FBee%2FVnKNCWjSeoC2QjStOgDtOfxXZvVArOBL3VhgIBapPR1znDiy8HkZLwPvHFK%2F6nM4nFwsWDlJbz%2FmRqjblBD%2BTglJkFjBzW9cohIHcmAkUJbQtXvC0Mfvw3kjtj7Z3kLQkxkAkU%2Bkg%2BReAAhGaY8HLcfm&X-Amz-Signature=5e30baee4aa378d244e534413946e75c8c4ec740cd223cd229ad8b59e977b3f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IRNENIS%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T044007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEbKWv6UX7q4Uh%2Fs%2FA1XlvmN2gu7njz71x3TSwaM79D2AiEAg88tE%2FbX1YEbFeATmyKROfP1t9mLTKR50%2Fa5HIQcBAIqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGcCnWYWJxrfZyIOdyrcA57dQ4FETP8sgWPF7BIHsxRfYCU1vOS676zrQ9YJ%2F%2FpNn5WGMvGj0I61qRoE9iFvHbKsWoFg9jEO4gdZg0U%2Btw30G3%2FSIQnv5PloO5iQRB25d7AzWoUJngDN%2F0LLDb7bgkq5Q31VpeUo2yv6OWmm4Jy%2F878UXQR5Kdr0JpGyE5O5s%2BHQly%2BZ2kNpN39oVy80gfXgLqQHG7Mw4CLkGoizwvomfzlbCYkrx4Kpqc7mUMunh2ihg1jxg8tJsBJvpLa38VntTivS4KUmyEhqAxjrLElSODQPvg1d6OvSJJRtfh5CzlXuG%2BLSvm%2F7cWvzNWJdpjUGVeXi9hiqIjdWPZYAVDdwMAMMObNTSP2klKTaqu2vkkx7qHxzLhxZWQ2p9nZTxSAlwFNd8PmQAZPowy%2F3ijMrEc0f0h1fVxwmkXW2wxHmprbf9NLuzvN4GBY0kZmFkcBGWkYCBOGbTpiMBX380bRZODutcaF1JoovutGbc%2Fa%2BA2vjJcmhO2bHfcHCRMfINOmnWEwK4T%2B%2BuNdi9qngGvdg8q88eIPTkQXY4d8GZUPMXmV9NlsivluOSycUlzH8iOYZ2%2BgvOr7QrwcCAwsiN038ii8de9V6BMAgSgfe2hXcahrfYkgF3hT4QzHhMJez38QGOqUB8%2Ftb4XwlB2TFQ0ScHnXWW23IZblUEC6%2BbYQzspMwFNi73lZ%2Bgo%2BDVQecBwEh4L9FBee%2FVnKNCWjSeoC2QjStOgDtOfxXZvVArOBL3VhgIBapPR1znDiy8HkZLwPvHFK%2F6nM4nFwsWDlJbz%2FmRqjblBD%2BTglJkFjBzW9cohIHcmAkUJbQtXvC0Mfvw3kjtj7Z3kLQkxkAkU%2Bkg%2BReAAhGaY8HLcfm&X-Amz-Signature=091ec2ae53fb5582cb2858403177e691198b73d3777dc91ef021de55b3108fc0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IRNENIS%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T044007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEbKWv6UX7q4Uh%2Fs%2FA1XlvmN2gu7njz71x3TSwaM79D2AiEAg88tE%2FbX1YEbFeATmyKROfP1t9mLTKR50%2Fa5HIQcBAIqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGcCnWYWJxrfZyIOdyrcA57dQ4FETP8sgWPF7BIHsxRfYCU1vOS676zrQ9YJ%2F%2FpNn5WGMvGj0I61qRoE9iFvHbKsWoFg9jEO4gdZg0U%2Btw30G3%2FSIQnv5PloO5iQRB25d7AzWoUJngDN%2F0LLDb7bgkq5Q31VpeUo2yv6OWmm4Jy%2F878UXQR5Kdr0JpGyE5O5s%2BHQly%2BZ2kNpN39oVy80gfXgLqQHG7Mw4CLkGoizwvomfzlbCYkrx4Kpqc7mUMunh2ihg1jxg8tJsBJvpLa38VntTivS4KUmyEhqAxjrLElSODQPvg1d6OvSJJRtfh5CzlXuG%2BLSvm%2F7cWvzNWJdpjUGVeXi9hiqIjdWPZYAVDdwMAMMObNTSP2klKTaqu2vkkx7qHxzLhxZWQ2p9nZTxSAlwFNd8PmQAZPowy%2F3ijMrEc0f0h1fVxwmkXW2wxHmprbf9NLuzvN4GBY0kZmFkcBGWkYCBOGbTpiMBX380bRZODutcaF1JoovutGbc%2Fa%2BA2vjJcmhO2bHfcHCRMfINOmnWEwK4T%2B%2BuNdi9qngGvdg8q88eIPTkQXY4d8GZUPMXmV9NlsivluOSycUlzH8iOYZ2%2BgvOr7QrwcCAwsiN038ii8de9V6BMAgSgfe2hXcahrfYkgF3hT4QzHhMJez38QGOqUB8%2Ftb4XwlB2TFQ0ScHnXWW23IZblUEC6%2BbYQzspMwFNi73lZ%2Bgo%2BDVQecBwEh4L9FBee%2FVnKNCWjSeoC2QjStOgDtOfxXZvVArOBL3VhgIBapPR1znDiy8HkZLwPvHFK%2F6nM4nFwsWDlJbz%2FmRqjblBD%2BTglJkFjBzW9cohIHcmAkUJbQtXvC0Mfvw3kjtj7Z3kLQkxkAkU%2Bkg%2BReAAhGaY8HLcfm&X-Amz-Signature=e82343088dafab59e5d6ffa62bd48a3611f2f9452d1ff04d547dbd6ee67b947c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466766S5LQB%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T044010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCwg8w7%2Biicf5QOgZu23fpraVUxHZhuk5cUgj7qCUDlwIgNQM%2BB%2FJU0X0V0wv5Wwamp4wllq%2BMs2aYdaqsMmFwYZcqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL7X9oMFNzxMZEO7oCrcA3gbyzA34mRbSLf6tYvwp7fmkwMpoIdI2zsNBSXalLccM9RYKZg5fLyMzelnNhjIPcAcD2phattmC8WII8L9ac1FuMM5QZiFnoMEcugnyrvzkhsxyfS6S8Yl4ii%2BTxRJcSluX4Yy%2Bt0WLJWsG%2BjwWR3IB9XmTwR9U%2Fb826IrXz680j5tFPjEVoqy69N%2FSRgfsZhJXoA0Z8sZlSMKNQRj0CU9XlABVz2M2LCh5cb1o3x3bBCNLn1ZCcZZKEva3g%2BA8JGlhwOtrowBVOgX1PH0khZtWVJwuBbnURR0ulKw%2Bz74XzoxMRQqHQmqWi8O%2BbiYQQRDNMQBj%2F%2FdAnL3z9mRY2rla60cIryDOrHKkuLCLF0kKWNRfrKYaRhatpeiB1OsebEBXK7PE6awshlVO3y27743Xv13NUCKkqzp3LLAswM%2BVbChQ9P4Aadp47KBOJFl7O%2FOxPWntTv%2FPXyEMfthMj%2B8f6HZ5tmvROHh%2FAn7zssufnTL4eeVgU2Jorxn9Sqrfwh4qnOJbU1J9Mt%2Fo24yLF6JQ2QJmXJxUwFiykQxu52WjbHe3cCpSpd3XGdAxSCAd1mgZFx5%2BMe7WtQzee10SfljXL%2B%2Bu0rAytiawvHYo2LxL0iX4ujezLP6ZLHaMOCy38QGOqUBUefBKdugzZrJlR8hzlWqhbuIzZ1pNM%2Fbn%2FkaXOvEWOOFfHP5JAy0%2BvkMVwPwJrrWyB7psoqLz74pFvuGIMpXzS88lNCOIaqOT%2Bs%2BUhGOH%2BwWM7ZF09opTZXRuKVjdnpGHtlOTNARvb0H5MYCSWmCQyFxQ85S6XmIVgNGxvFtWP3v0IyCFUcy6nwZSICxnOtMekFW%2BdvCQ8%2FOf229fb6HXaxuNRZ0&X-Amz-Signature=594f28be42850c873d04346ecda6bb04851c28aa393abe00a51545d02ad51815&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3TKDXFJ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T044013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZwHLJzOrR%2FBqKW0D4rt9hi%2FEEEitfxcSCL%2FValFbuSQIhAI9HvE18MxaVpcMngMkBoxLjafUouoiP8IlEv8GSyoyVKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2B5FOERjE0F43rKRMq3APDWFgDdI44stcCq0mLq4XymNNalJml9IiA0kWERaytpD1S094Pl1M6J4gdwbIADABeoU23yf3taQWXrwXXr9xeSdQdcwLYKEczspFIVe67YE0upqaBle0d7NhTuimhP1Nyzr3rny2AOKUL%2BUYYGsmI2ej9UtCY12RkUYLthKBaYp%2FQgPczFy%2BCKKbc6EY4Mx1DanyA8KDmYBAv52nR%2FPw88Q0hILEaEx7UZGLBNAHzHvVBThVnXKtZoNxYdADNkiYTWJKkpj7qYAdtGmALxLBBCRrdw4c3gSp8FlZtAKcVFtDp0V92KFFRE5baoJq3LCmlBxw6Xftbc3JXPzwJMjK1Jd08a9sF2FFNHVRl%2B63rXeVUgULNl71uypyPGcRtibfWJqMWAQOelqKGXT5lBMXdDarhPdJNWImB61mk0QxD590exgwQTepD1tU2N8YKHGzbuKbbtcFwCTKX39ASy5ltXY4%2FhJpPZ%2Fau%2BeZ9GTgFsdSCYUAFuvCV%2FIyqm%2FfK%2BcsISRP3oPGXSKa1RL7tyO7KrBO1A4JytSpgPQSLPeUXwkInkQTi7ASiLA9DkdULnftXmprhka6zy0SaiVHMR3yVZ0D5ttvsMYsM64PNYcD3xcfHGA8XstY171qY%2FDDvst%2FEBjqkAYeRyTipQdXxQJme9P4RBNpABis1EP1HInCNYvApmrgleK1WegappV3OiUaxss%2F8vjPYpvf0E3l5K8XDH1k8Cp3pesAYZMmX%2FM22dPH3B0DpJsta8nKBNQrxYqt8PBLR6S9YJoyBtUWaGkcfdriEIqOyJwAaKz%2BKGeiPFXhLUjJGH%2BSv91MljyGeFRcppcDbuLGHskJw5YeBhMidAhHFGI9QpsQv&X-Amz-Signature=029539c54530d24a649d12c6da3deb348c0d882ba65b9112b7a8978b246541c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IRNENIS%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T044007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEbKWv6UX7q4Uh%2Fs%2FA1XlvmN2gu7njz71x3TSwaM79D2AiEAg88tE%2FbX1YEbFeATmyKROfP1t9mLTKR50%2Fa5HIQcBAIqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGcCnWYWJxrfZyIOdyrcA57dQ4FETP8sgWPF7BIHsxRfYCU1vOS676zrQ9YJ%2F%2FpNn5WGMvGj0I61qRoE9iFvHbKsWoFg9jEO4gdZg0U%2Btw30G3%2FSIQnv5PloO5iQRB25d7AzWoUJngDN%2F0LLDb7bgkq5Q31VpeUo2yv6OWmm4Jy%2F878UXQR5Kdr0JpGyE5O5s%2BHQly%2BZ2kNpN39oVy80gfXgLqQHG7Mw4CLkGoizwvomfzlbCYkrx4Kpqc7mUMunh2ihg1jxg8tJsBJvpLa38VntTivS4KUmyEhqAxjrLElSODQPvg1d6OvSJJRtfh5CzlXuG%2BLSvm%2F7cWvzNWJdpjUGVeXi9hiqIjdWPZYAVDdwMAMMObNTSP2klKTaqu2vkkx7qHxzLhxZWQ2p9nZTxSAlwFNd8PmQAZPowy%2F3ijMrEc0f0h1fVxwmkXW2wxHmprbf9NLuzvN4GBY0kZmFkcBGWkYCBOGbTpiMBX380bRZODutcaF1JoovutGbc%2Fa%2BA2vjJcmhO2bHfcHCRMfINOmnWEwK4T%2B%2BuNdi9qngGvdg8q88eIPTkQXY4d8GZUPMXmV9NlsivluOSycUlzH8iOYZ2%2BgvOr7QrwcCAwsiN038ii8de9V6BMAgSgfe2hXcahrfYkgF3hT4QzHhMJez38QGOqUB8%2Ftb4XwlB2TFQ0ScHnXWW23IZblUEC6%2BbYQzspMwFNi73lZ%2Bgo%2BDVQecBwEh4L9FBee%2FVnKNCWjSeoC2QjStOgDtOfxXZvVArOBL3VhgIBapPR1znDiy8HkZLwPvHFK%2F6nM4nFwsWDlJbz%2FmRqjblBD%2BTglJkFjBzW9cohIHcmAkUJbQtXvC0Mfvw3kjtj7Z3kLQkxkAkU%2Bkg%2BReAAhGaY8HLcfm&X-Amz-Signature=72ea0f756a86ed8d354926fb54fa7254177ce8bedd265b8a60d8bfe3c2ca3a7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
