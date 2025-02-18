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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZGFKEJI%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T090810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCIHr%2FHqdAhU5NOhJHDyz4s5MFyo4nkn9ZWnFMInFNpCJTAiA5ufh0IFfqKqg18JViqHwgcb1RCdKCNNwuckqVCR7%2BfiqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYAuv7VaNPBMM3C3kKtwDP4lxfZjN6GsKXnewotuKqKKgvXAH4e%2B1GD86hHRM482IMKLWjadzcU8pBISqLnh40K8DQPRsZLoeq0rvpwbMnoAobeeErephuJ0iyc1gVhhxMbDvUqqenf2FKcW0JEE3v8KE%2BKPaFUu4T066sfgLl3VLuyNTo9eH%2FE%2BZiOoIjkFZstvNCQurxstwFOeY%2FcgM2sdPkAamCjzWOeO4is9wLkbGsnd7crhfnMPPInWOpDj2r%2FPRdgP0o%2BZ7MKaCAjlzo0t%2BtZz0TV7muLNXV%2BqDQ4AmJpc%2FlqMdKRCpl1FCNrqGE%2FuQZjtc1%2Fnu3LsWJ%2Br5XlyZPV%2B40n57fZhPPAZ1Ixr6kbiBYOPCYvEWx9WF%2F9yl4YRT%2F1lq9oLGK%2BvEb44bQzQT09IrG62sU3seTgSREuYmIiGlo3UgAUn2%2Fgx9Tvin9SI3Of02ju8orR9EUTTJuouWfwmsdMee0NEzcVSS9PwvSGh19Vp18plCRhTOeY%2BtKeVlGp%2BcsUabHyic3uSslSYgySG%2BeztPULG5X4BVOuET82wv2yTsowcuUBSWDYr7%2F42EjYuAYMPSWSyS9J4KaEVY7c6TY9YsKQX%2B2%2B8mz4Y54FQ7o%2BzwE3Zew6KhdjIDaDH8O27dXCTPlhkwpP7QvQY6pgHGh9L641xlo5odHJzpIHnGbOE9RfdzLN1IrXCcBdzl0zr5uQvRcSmhs%2F9wsfsjmr4zLvKkk6K1HG%2F27lzmRjZV%2FCWPazMRhnBZ01Vbu5tz6J37TX%2BGu5BceB8QQWpENnMhPRyATU37N6FeUSPgvHV5b%2BoYMXKMuhJiCfcawIqqc8m4WJ5Bj%2BmkrDfF2jLWgtB5mwEjjQO1B6N2KP186Q1ESkcDUTPX&X-Amz-Signature=9eed4301cb6f1ef8afb246960bdeb8756ea7b7c97bca95cf63c390297852cccf&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZGFKEJI%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T090810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCIHr%2FHqdAhU5NOhJHDyz4s5MFyo4nkn9ZWnFMInFNpCJTAiA5ufh0IFfqKqg18JViqHwgcb1RCdKCNNwuckqVCR7%2BfiqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYAuv7VaNPBMM3C3kKtwDP4lxfZjN6GsKXnewotuKqKKgvXAH4e%2B1GD86hHRM482IMKLWjadzcU8pBISqLnh40K8DQPRsZLoeq0rvpwbMnoAobeeErephuJ0iyc1gVhhxMbDvUqqenf2FKcW0JEE3v8KE%2BKPaFUu4T066sfgLl3VLuyNTo9eH%2FE%2BZiOoIjkFZstvNCQurxstwFOeY%2FcgM2sdPkAamCjzWOeO4is9wLkbGsnd7crhfnMPPInWOpDj2r%2FPRdgP0o%2BZ7MKaCAjlzo0t%2BtZz0TV7muLNXV%2BqDQ4AmJpc%2FlqMdKRCpl1FCNrqGE%2FuQZjtc1%2Fnu3LsWJ%2Br5XlyZPV%2B40n57fZhPPAZ1Ixr6kbiBYOPCYvEWx9WF%2F9yl4YRT%2F1lq9oLGK%2BvEb44bQzQT09IrG62sU3seTgSREuYmIiGlo3UgAUn2%2Fgx9Tvin9SI3Of02ju8orR9EUTTJuouWfwmsdMee0NEzcVSS9PwvSGh19Vp18plCRhTOeY%2BtKeVlGp%2BcsUabHyic3uSslSYgySG%2BeztPULG5X4BVOuET82wv2yTsowcuUBSWDYr7%2F42EjYuAYMPSWSyS9J4KaEVY7c6TY9YsKQX%2B2%2B8mz4Y54FQ7o%2BzwE3Zew6KhdjIDaDH8O27dXCTPlhkwpP7QvQY6pgHGh9L641xlo5odHJzpIHnGbOE9RfdzLN1IrXCcBdzl0zr5uQvRcSmhs%2F9wsfsjmr4zLvKkk6K1HG%2F27lzmRjZV%2FCWPazMRhnBZ01Vbu5tz6J37TX%2BGu5BceB8QQWpENnMhPRyATU37N6FeUSPgvHV5b%2BoYMXKMuhJiCfcawIqqc8m4WJ5Bj%2BmkrDfF2jLWgtB5mwEjjQO1B6N2KP186Q1ESkcDUTPX&X-Amz-Signature=a80ec4566b7a318b229301903ac1d26855a6bcd592ae6f66a0330a5474a61142&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BW36OJY%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T090813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIC7pfQfnXeYREwlmceTcawuIGBbe%2FrvZjgph627vxcS8AiEA8YADiJJX%2BxOoAZV8R4AXHiVunx9AMGk7WeDDjLiIH7wqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBzNlR0On7Wgmj438CrcA1Vd8qbyRc2S4Hk3DSHvds%2BrFW5KAy%2F3AqOD3ykODXFL8LsIIrmojw9NNKWKaIwQiD%2FkcWiOfqCKwGLNb8m%2Fx4OQEnhcRVxVrBUGui%2FLsICIvKQKkiAkvksjT7OdCdFRAV5x7I5F%2Bqbun9%2FOb4ZdlEJkDyR80oKbq9sxMHtsqzxlWH0sy4iY8O0y%2FobJHveKYxJ%2Bn5EQCHW1RBd5ZidhAlosM7iOB5QQFoMk8%2FNfaFNQGo3gIJA49FeQx%2FaGO9dIs1YQGwU8z%2BqXxEHoEIkIp%2FDowezAM%2F4QE0PC9nltjs5UaPY67DV0Kc%2BuspAluP4TBIedd6LryyU5SkpceeQl1HlklWTtvE3FeWKalW5Uek2Xw1LfRdDvYLYpNrC6rhDgEYIsD9pWx0zcKnKTEg4dHIK9EWMspiHvwRa%2Feh6AGrokC6%2BlRUHJIITGtQMax6j4Fv60voa5g5DzfXlf6FuNIQHdpNaZDKDeuUikAuuBS9LfKgzSom4F9aRROhwncSobPr8t80hAeHPW7hgoCbwqYk66ocZ4l7Cyi%2Fj0jyFmAJ6WOL4JLfBrsKnqmiOSDk2yq0UyBM7tkLCGPrDYbzxdqBuWg1wj%2F1lAv3aQjj01%2FXRWyIkYAp9uio3NVNGxMOf%2B0L0GOqUB7yXZNWVnHfp2dAEakciEx7YsGA8AOflta0O8DxohewlpMl4lD4pkWW74QoH4EtqRPm10jLIJuTScjbv%2B5nIMD7iGhK4TundiQgbMSerxNZefngrz7QcwzgYUNnAgFo3y%2FI9WchQ4GMfnOI%2FgPOSQaS4k0cHIe4ubFrT4oYBzRird%2BAOzp2M39GsTgdGfDt%2FPWnSVaedKIB27Mc%2FD9x3pOrSBBbbi&X-Amz-Signature=6010a217d997140ff57068311ca9e4a4589d7cea8a7ce3dc77518c9074137810&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JLMIEEK%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T090813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJIMEYCIQDTPfXADg%2FT3wWOLb440Xrvt9cSJGBKpTzNFN1I7Yfq%2FgIhAJnXM878Yo44k669AcnCReYuOnB1DBWdERAjp55g93M%2FKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzW%2B7l%2BfHP%2BH6zfil8q3AOv1A%2FrciDIXrC9B8suYJuoCe4W7ftQl5zLtfVpgMUqH2IVkrPvmaoyT03nK3WYbSM0CNkUcVTOF7zlR2HP9aXdndIeZ8O%2B7g5Bc%2FsNJ93sUUDRpF37C8xpN21B%2FGL6iFqs%2FhZ9MpCP%2B%2B%2Br0iG7SS%2FNYmsWHmMFoJZpVa5AUnfDpjKdF4iNzes6AvcyI4Nyi%2Bw1HUOjeziHHuA2HFMgcY9k4YlT3BDSMM6pl9AWK8RQ3VkMxWKkTf5BNjOozigEsu%2FnYpXNLSqgX%2Bsrv7ZYCoO2ymg%2BbWqwJKV8n4CD%2FeGMietyUiQYN%2FDUWrPmZJYN5qBohVBXH6kFXuEFifG%2B%2BeETRIKXUlt%2FpzTEoMUSNvsWuKYuW4feRA7rFob8CW2KiMCtn%2FZeTUDnyVCfQeO6c%2BqbrCeG1KR%2BOUZeHNfpAwOxL5p06MQ1HH2T25FTO0lAb2%2Fceazwy6FwnmpiNlivsPUBHPN11E7oH2JF61xpPwJS2pSYoEPSdvG43yIwvJMA8r3fkNmNZvyV%2Fnhx5qWnfCHdOyYSFrHsNlWJrVD469BqHV%2FyPuRbYWYiPnKhgBFhA1N6S9adtUkeJu5%2FwxJ480g1TioOdsIZnQLZK7b3YPFeFwJ2EADQOERBDdymPTCs%2F9C9BjqkAfqTnBQ%2FR9mejD41p%2B7DLVo9YBJh7xQGGe5AmQ5d7iWvNqErK9oAWf4VvX06vinKsmBy66BVpg%2FWfTyjluQwwPIF5%2BFA87HzPLSEMnKNHjytzBTc5m5w8Fxvq6dlaqjXYqakFGzts0MsG3%2F6t35VenB1Vp6sxIOZJFi%2B%2FZhgLyeIFgQrgLPEKX6akJLs4hSGU2tUVGq60kBQU3DZMQUTondpGTIO&X-Amz-Signature=996274ce93ea8860812d125034fd5ea286256dbab9d7fd7c26bc192a9c1132cf&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZGFKEJI%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T090810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCIHr%2FHqdAhU5NOhJHDyz4s5MFyo4nkn9ZWnFMInFNpCJTAiA5ufh0IFfqKqg18JViqHwgcb1RCdKCNNwuckqVCR7%2BfiqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYAuv7VaNPBMM3C3kKtwDP4lxfZjN6GsKXnewotuKqKKgvXAH4e%2B1GD86hHRM482IMKLWjadzcU8pBISqLnh40K8DQPRsZLoeq0rvpwbMnoAobeeErephuJ0iyc1gVhhxMbDvUqqenf2FKcW0JEE3v8KE%2BKPaFUu4T066sfgLl3VLuyNTo9eH%2FE%2BZiOoIjkFZstvNCQurxstwFOeY%2FcgM2sdPkAamCjzWOeO4is9wLkbGsnd7crhfnMPPInWOpDj2r%2FPRdgP0o%2BZ7MKaCAjlzo0t%2BtZz0TV7muLNXV%2BqDQ4AmJpc%2FlqMdKRCpl1FCNrqGE%2FuQZjtc1%2Fnu3LsWJ%2Br5XlyZPV%2B40n57fZhPPAZ1Ixr6kbiBYOPCYvEWx9WF%2F9yl4YRT%2F1lq9oLGK%2BvEb44bQzQT09IrG62sU3seTgSREuYmIiGlo3UgAUn2%2Fgx9Tvin9SI3Of02ju8orR9EUTTJuouWfwmsdMee0NEzcVSS9PwvSGh19Vp18plCRhTOeY%2BtKeVlGp%2BcsUabHyic3uSslSYgySG%2BeztPULG5X4BVOuET82wv2yTsowcuUBSWDYr7%2F42EjYuAYMPSWSyS9J4KaEVY7c6TY9YsKQX%2B2%2B8mz4Y54FQ7o%2BzwE3Zew6KhdjIDaDH8O27dXCTPlhkwpP7QvQY6pgHGh9L641xlo5odHJzpIHnGbOE9RfdzLN1IrXCcBdzl0zr5uQvRcSmhs%2F9wsfsjmr4zLvKkk6K1HG%2F27lzmRjZV%2FCWPazMRhnBZ01Vbu5tz6J37TX%2BGu5BceB8QQWpENnMhPRyATU37N6FeUSPgvHV5b%2BoYMXKMuhJiCfcawIqqc8m4WJ5Bj%2BmkrDfF2jLWgtB5mwEjjQO1B6N2KP186Q1ESkcDUTPX&X-Amz-Signature=056167f07fd743289bcc0c51f377c08d8572fcd53e8b3b40b2133a2727b9da62&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
