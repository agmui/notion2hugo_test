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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3GMTLPP%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T003638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQCpcm8aayDyjdx8qolxQ73YSB6p%2BE4CsUhq7seNH96hNwIgRAvHWX%2BtV5ITBj6gvS27ZkDxbOOUZ%2FhwQRsSAU7wlkUq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDMOqf4gIS%2BM5Dn08USrcA%2BMJ6zX7fS1gDIoFyj7q3eUQa1JIY8qnnJnIX2L6PQrkr1QrbWW66vgkB8W2%2FE0rxuwXnklNnH35Ul1igxLNqaEkSUP5ceM0kXP4lK6NzFT7gp9%2BIwtdIrUkph0ahFtAsjOX%2FIhAbpYfFTDjws%2FYW2DFkHHkLSYfq8sHPXB9iuALmhyI0%2FlykY8HCJTc7Oy9PH5OJB2xZORaQuB%2BtnHbXiaW4lzYEP8keXZee6AzgytYCXlbVFiROCKLy2Ey%2Bow2ngoRYLq2WfjSh%2BVFdvJV2m4YDvGJqH%2BjWS1nW9%2BR9BGs285f5SO%2Bjax5uQy7jRgA%2Fpz2IYYf7uoJx6D0OGF1pLJIILVau%2BNRAYl4PkblRc0ggpkxg6D7rvRXeroUqn%2BSUGVtUlbc%2FjNbKNXjFsNsgi3Y6OSpxzRF9xgiLyAf9QGPQEnlz%2FREICzPS3%2F97F6G0pLtiTSsNMQYolYaoOfZD%2FqYIpuxfXtF9PUvA16Iv8wMm7Dwi10QupiLVRTAoxS%2BMyokbX2%2BgyGuG5Ss0QPhGiL66%2BSLcd%2FPIWkg2BU8TwQbY3q68vW8IYwgGjVgXcuNTcS4i5mSuOxokFY%2FDvT01PCUZ8%2F9oHoDep7fH1SFKHeVHih8rHzuR9w8c3vjMOC8%2Bb0GOqUBezh4FK7UbdyPNjgZnhfLY%2FZFaRshzdMi2rhd1Jzl6Ar%2FrZNVX1jyEsn%2B4vLaLqyglU0xtD0686hyZmFGkk%2Fv8%2FkpaEbhOT2ZS60lzeXzuxqwinRoOTUXuFS%2BT%2FZbHvpNcfHVvtUYTaIk%2Fp1i36R6vsUxuz391odOY35Tx2HlmbkW4p2t44iRR4NmMP1FX4EP4GXSI1T2%2B6pqEqXZDCAFA7wZaUvr&X-Amz-Signature=8cf7dc26adf8f44e4f61c3fe4c3d736b769c39131ec881e64ecdbf7c1c4bd525&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3GMTLPP%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T003638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQCpcm8aayDyjdx8qolxQ73YSB6p%2BE4CsUhq7seNH96hNwIgRAvHWX%2BtV5ITBj6gvS27ZkDxbOOUZ%2FhwQRsSAU7wlkUq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDMOqf4gIS%2BM5Dn08USrcA%2BMJ6zX7fS1gDIoFyj7q3eUQa1JIY8qnnJnIX2L6PQrkr1QrbWW66vgkB8W2%2FE0rxuwXnklNnH35Ul1igxLNqaEkSUP5ceM0kXP4lK6NzFT7gp9%2BIwtdIrUkph0ahFtAsjOX%2FIhAbpYfFTDjws%2FYW2DFkHHkLSYfq8sHPXB9iuALmhyI0%2FlykY8HCJTc7Oy9PH5OJB2xZORaQuB%2BtnHbXiaW4lzYEP8keXZee6AzgytYCXlbVFiROCKLy2Ey%2Bow2ngoRYLq2WfjSh%2BVFdvJV2m4YDvGJqH%2BjWS1nW9%2BR9BGs285f5SO%2Bjax5uQy7jRgA%2Fpz2IYYf7uoJx6D0OGF1pLJIILVau%2BNRAYl4PkblRc0ggpkxg6D7rvRXeroUqn%2BSUGVtUlbc%2FjNbKNXjFsNsgi3Y6OSpxzRF9xgiLyAf9QGPQEnlz%2FREICzPS3%2F97F6G0pLtiTSsNMQYolYaoOfZD%2FqYIpuxfXtF9PUvA16Iv8wMm7Dwi10QupiLVRTAoxS%2BMyokbX2%2BgyGuG5Ss0QPhGiL66%2BSLcd%2FPIWkg2BU8TwQbY3q68vW8IYwgGjVgXcuNTcS4i5mSuOxokFY%2FDvT01PCUZ8%2F9oHoDep7fH1SFKHeVHih8rHzuR9w8c3vjMOC8%2Bb0GOqUBezh4FK7UbdyPNjgZnhfLY%2FZFaRshzdMi2rhd1Jzl6Ar%2FrZNVX1jyEsn%2B4vLaLqyglU0xtD0686hyZmFGkk%2Fv8%2FkpaEbhOT2ZS60lzeXzuxqwinRoOTUXuFS%2BT%2FZbHvpNcfHVvtUYTaIk%2Fp1i36R6vsUxuz391odOY35Tx2HlmbkW4p2t44iRR4NmMP1FX4EP4GXSI1T2%2B6pqEqXZDCAFA7wZaUvr&X-Amz-Signature=a8bd2dee91d82c2b3decc60b70911e3c2039cf21b496107ed742a989be79ced8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STWXFFSI%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T003640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCICqhjHCuDuQUgGm8UDs2SxRUXj8brEmCH8AbNi0jEitzAiEAmLtFxwbCCMQy5sMfcLR2o49liY%2FkGYPdNce9vTRuxVoq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDBF%2FZujhV%2Bdk3FPRqCrcAy7assfLh8WmnDLQ3Mh6v5QqlUdlrBb5vaiESbdl3a5dp0a1syVkDBU4r2wdnNX0O9oiBcpk9aWL3SFbQ8%2BG2MY3Y2IEeyJ6QUKgL1Lqj4o18ZrVuYtwZdA%2Bt7c6ai9kLBmrBBJKAzoVWaFc%2BmuYPLEVIWphFTyxVJEW7wljDNVOHwFLJOojbJZnc38p98joowyOltGtqpguEoYmhhpEw8JInaIZrUlriHEzguIj3Ve5bXOjbNWSqWeKfCBlnWP8GuXUkdz4R0n5auZ%2FdZ0ZNXShkoVqlUFJMv2uY%2FX8itsKd2Uyxk42ypPvQ2rGkEtpYH2Pu4j8wix6WFgWzgJlrK%2FNKcth5AtJm%2FVNqhp3%2FVvEODreHHoy7WlfI%2FTEMxjdjKyY%2FUIK13R%2FwMBE8Kvaf7NKwVGz6ixhwbkqo1FwuPSeTtf%2F9I5CcgmBZm6Vo4H1xIdFG3WV2IGAa3iJ%2BLDgmgCxLa1VfB9FoABUp7uhedtVNy4sip0AWAl3pF3nyEJXi7WXZyRv0b0KjV9U4XPYexLUe35BUl3FlA5f%2FaRFxrB2xZO39sj1VvzR4XTF%2FLqy059qhVfaeirM14HNJTvrf6R0IaRco5MCwV7GOlkcLOh0llYROPwuI6IH2Ls6MK%2B9%2Bb0GOqUBQOVuymco8HLU4rAB8uLKiXe4wj2bWQsNYl7jvrQ1BXkfTb7iR1TOBdHVezcMVOQ34FOBbs1heCdPkGVio9WxcheddJgL7NoN%2FzBdjuDJx4cJjQtNnNh1lo6vpuo9GnPTcw6zJ8%2FNZoNx%2F5xVuqaqrtWW8Jv585MFX5%2FKVevUV6DVQXjMekr5RLYZJVqTB4leHaqoWxnsAqQY8ZzYeX9hbQRlvnjP&X-Amz-Signature=239bd7e555b4affe5c3d3db80094cf59580d6e08c9025419b3e4d457195c08e9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627LI5NLR%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T003641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQD953CWBgZXro9dZEz%2Fzq89TFl0IiG%2BF%2B4gBoslYM7aHwIhAIxsNKZDmV7bry8x57J9itW6mhhvsakirZSNrje2Gr%2BjKv8DCFEQABoMNjM3NDIzMTgzODA1IgwnuGVHz9aZhnnTMzcq3AMz9ramjU4VzS0ty63mmyTNhlJ1FgmamQa4hEtIpEB72sBW%2BBsTbosph%2Fz3Qm4%2BOPfirMlJq3%2Fi6ycGVlu0iyl3h7QIkKbFtiUfVf06r5KFhOeEQxe2HjngZfGhXtWlYKs5rftimCwKhn7tX4RyAXbTaRHC%2BGG9G8ra%2BjDlPwJvQz%2FghH45MMwerfvMXsauSQRPZujgu%2Fi9Vqgc17MHGlNLN0BjVDDYwtUDuGv6Kf2S5vbYn5v7KDNHEpNmhiUXvzyQ7nCQGVm3NzG3llQDWJqYnESJ1ZJRdKVm1wRxT%2BqBPQLPXwHIijUsGGA7KoR2kNm%2Ff%2BaHvQanCevTB68x8stClCVRmRtx24WHQPFnTHacv8TPueBFCMPnP4bx6Zzw0zBcyedmBp6qwcgv%2Fu5ELoQuuYjURA0C9BWaI%2FuWysU62XsxmJoyNsKr6Srd4RaRlAIv%2Ff1gopxq3idqtux2ZzjWIpsEcnWdEnUesqMnhP0m%2Fn%2BjBG1vOu21eYe89Sao%2FOGZKegjA7k7a9dcEPE6Ksq9d%2FrupKuUwsePU3gHuB6R7NT1Nd0bNTugbBszoWLjKFEyOUuZAN7NAMWtNz0EzXJWNscINniuV6WrlfZou%2FrMF6Ffh79LOIgm6YZ6lzDvvPm9BjqkAS%2BcTYWTf1BTwSmV%2FBjzZ6AOWJXjMnwY4vXEAUrKYqcVylRgaOEGI01qMFffZ19PTvrJp4AR8uYF%2F9auGETIChZCGQrV4Qje%2Fwh17R00wuZ81NbTPhqPAOUph6ruNw4rZH1FZR3ZOCnlz6osI1Cx03J5PfvunpdXTKeYt%2FlMRm9QJ9y364K2MrCE45sUir5eauLKrf6Nf0POaz9BxIK58eZrH2%2FW&X-Amz-Signature=5032226a672719edcf0eeba81b5f6f8af6045b23a903111ee09468f3883db40d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3GMTLPP%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T003638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQCpcm8aayDyjdx8qolxQ73YSB6p%2BE4CsUhq7seNH96hNwIgRAvHWX%2BtV5ITBj6gvS27ZkDxbOOUZ%2FhwQRsSAU7wlkUq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDMOqf4gIS%2BM5Dn08USrcA%2BMJ6zX7fS1gDIoFyj7q3eUQa1JIY8qnnJnIX2L6PQrkr1QrbWW66vgkB8W2%2FE0rxuwXnklNnH35Ul1igxLNqaEkSUP5ceM0kXP4lK6NzFT7gp9%2BIwtdIrUkph0ahFtAsjOX%2FIhAbpYfFTDjws%2FYW2DFkHHkLSYfq8sHPXB9iuALmhyI0%2FlykY8HCJTc7Oy9PH5OJB2xZORaQuB%2BtnHbXiaW4lzYEP8keXZee6AzgytYCXlbVFiROCKLy2Ey%2Bow2ngoRYLq2WfjSh%2BVFdvJV2m4YDvGJqH%2BjWS1nW9%2BR9BGs285f5SO%2Bjax5uQy7jRgA%2Fpz2IYYf7uoJx6D0OGF1pLJIILVau%2BNRAYl4PkblRc0ggpkxg6D7rvRXeroUqn%2BSUGVtUlbc%2FjNbKNXjFsNsgi3Y6OSpxzRF9xgiLyAf9QGPQEnlz%2FREICzPS3%2F97F6G0pLtiTSsNMQYolYaoOfZD%2FqYIpuxfXtF9PUvA16Iv8wMm7Dwi10QupiLVRTAoxS%2BMyokbX2%2BgyGuG5Ss0QPhGiL66%2BSLcd%2FPIWkg2BU8TwQbY3q68vW8IYwgGjVgXcuNTcS4i5mSuOxokFY%2FDvT01PCUZ8%2F9oHoDep7fH1SFKHeVHih8rHzuR9w8c3vjMOC8%2Bb0GOqUBezh4FK7UbdyPNjgZnhfLY%2FZFaRshzdMi2rhd1Jzl6Ar%2FrZNVX1jyEsn%2B4vLaLqyglU0xtD0686hyZmFGkk%2Fv8%2FkpaEbhOT2ZS60lzeXzuxqwinRoOTUXuFS%2BT%2FZbHvpNcfHVvtUYTaIk%2Fp1i36R6vsUxuz391odOY35Tx2HlmbkW4p2t44iRR4NmMP1FX4EP4GXSI1T2%2B6pqEqXZDCAFA7wZaUvr&X-Amz-Signature=b2d617656729813a031f11c2f5d8b0d400ee94921a32f92365f44200da0c4df7&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
