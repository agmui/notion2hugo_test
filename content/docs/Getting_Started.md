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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEYGJOTK%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T121248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIH9w%2FeXftFoOiNjgIZNUjwjm8PU6rhb2nzWHQkYB%2F%2BBKAiEA%2BS3qsGobBecPPS2LGhOArqQ8HAPQzPYEHyww%2BIJZLd8qiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNHjsUP1jvMB5kitPSrcA06VR2qtmXHilck%2B3iMc%2BqqrjlpQ9nzvanFVjMyK%2B5CvSkk6LPqJ0rrbYI0r9Y8N%2Bddk0nWcn2Uprl6iyq0%2FL3JlSSnU0zFhmuV4xYBt0dAVS8vsnz%2B%2BGrD27IwpkMH8INgb5AxTnVcxG0qgqIcDbVt2ghTiAndr0e4Lc7IXyyihy%2BoVbkUO5bLgALvFrEPHXCTBNCJIYJnlrtCvy6JsEouxJkP5i2FcNXuT3LDgM%2BC8ZTJahkHpfb5iiXYDjsP%2BIhRgusTK3T7F4RdS7Wui6B5l%2FEKID%2FWrpk77h%2BVCFnnYk6%2BPKTZdhwLSX%2Fj%2FY1UE1GWASF2%2BrJoZXtBrgBzlaBFdKZ4A8%2BkK8T2UaRNq0KYg%2FmFPQV43iKT972PX%2BrzPU3b6H34KxQ6uC22bVfQGJKYy8p%2Bh0D06XaZ0CFzMqTWyR3Nqt4Kt%2Blc7mcE%2Bl9fqYsmu4zNxexJH6Pt1GvsW9NWUDbttfHCrogmXWZS3ZMCsZibbFfe77ZrCJeVpTqcTclETzpznVPPyD6LhVHprAFfVt17H8ETHvkUDhlRwnMa3qyoI115c6dJFdPlCKeo07D3RdSiQDC9tLkRW%2FXgIOphQt8FVJloxvPzhHCvDqMUp9StqhMtcgkS%2FGK%2BuMKHM%2F74GOqUBk4mH1E%2Fgs3FqbdNUNmz52XmemttoYq1oajUJSMUccEY8zOqyOugl6Y3iPCUsFvHE%2FN5kcOQxbg17Bx7kB4g99VOvn8IqhjuGWAW%2F%2BvzlZXCSGxktqHqU%2BrhI7v1nApNA0CNNEKF%2FpH2UD72mmZIC0Rza%2BJZGbDcRgIwuggo1uyeNz7VNIw1eDE9A6MqxXeZsWa9Kgq2nait%2FC3S%2FNZ%2Fy5EbNYr%2Ff&X-Amz-Signature=81a8ba2cdd4b0f46a3e7ab171b2e5b9f0b6281ec55d6e68eafa755c4f8a0ccf7&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEYGJOTK%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T121248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIH9w%2FeXftFoOiNjgIZNUjwjm8PU6rhb2nzWHQkYB%2F%2BBKAiEA%2BS3qsGobBecPPS2LGhOArqQ8HAPQzPYEHyww%2BIJZLd8qiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNHjsUP1jvMB5kitPSrcA06VR2qtmXHilck%2B3iMc%2BqqrjlpQ9nzvanFVjMyK%2B5CvSkk6LPqJ0rrbYI0r9Y8N%2Bddk0nWcn2Uprl6iyq0%2FL3JlSSnU0zFhmuV4xYBt0dAVS8vsnz%2B%2BGrD27IwpkMH8INgb5AxTnVcxG0qgqIcDbVt2ghTiAndr0e4Lc7IXyyihy%2BoVbkUO5bLgALvFrEPHXCTBNCJIYJnlrtCvy6JsEouxJkP5i2FcNXuT3LDgM%2BC8ZTJahkHpfb5iiXYDjsP%2BIhRgusTK3T7F4RdS7Wui6B5l%2FEKID%2FWrpk77h%2BVCFnnYk6%2BPKTZdhwLSX%2Fj%2FY1UE1GWASF2%2BrJoZXtBrgBzlaBFdKZ4A8%2BkK8T2UaRNq0KYg%2FmFPQV43iKT972PX%2BrzPU3b6H34KxQ6uC22bVfQGJKYy8p%2Bh0D06XaZ0CFzMqTWyR3Nqt4Kt%2Blc7mcE%2Bl9fqYsmu4zNxexJH6Pt1GvsW9NWUDbttfHCrogmXWZS3ZMCsZibbFfe77ZrCJeVpTqcTclETzpznVPPyD6LhVHprAFfVt17H8ETHvkUDhlRwnMa3qyoI115c6dJFdPlCKeo07D3RdSiQDC9tLkRW%2FXgIOphQt8FVJloxvPzhHCvDqMUp9StqhMtcgkS%2FGK%2BuMKHM%2F74GOqUBk4mH1E%2Fgs3FqbdNUNmz52XmemttoYq1oajUJSMUccEY8zOqyOugl6Y3iPCUsFvHE%2FN5kcOQxbg17Bx7kB4g99VOvn8IqhjuGWAW%2F%2BvzlZXCSGxktqHqU%2BrhI7v1nApNA0CNNEKF%2FpH2UD72mmZIC0Rza%2BJZGbDcRgIwuggo1uyeNz7VNIw1eDE9A6MqxXeZsWa9Kgq2nait%2FC3S%2FNZ%2Fy5EbNYr%2Ff&X-Amz-Signature=a6b930f5b8102bbc9cf1fafe91bbe619893b4a8c161ce83c0b948f1f79e9bc10&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466243J22JE%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T121249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQD0p9%2BWvCQMS6IDMYCzbmBXMG0z%2ForOtNOghwJUzqjOowIhAOEQ4DU15R9cjIOKAQ9xA0Cjq2s2P1uFiy7J%2BmJqzPJ%2BKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyDYTj0t8E%2F4mmpeNwq3ANcQz7GC2%2BbHC3x5tl3wJgswraZwRET7sXNxiNcvNlx7v1JtcfC8Rxu0ildEJQQGSXzkjMo4x1JDfN54JWa55wiR7luFpjC8zutzY0g5mCAw2HSspDXoatqoY0HZsAV9Vh2JPCsATvOzc4YjoncjWndZ1nTcHVDFAEKQFJv8430B8A%2BkDU6HhGFaE4Glw9cGxJsvykJQM%2By02EW%2FUn%2BQTjC5WgnseMrU6izdhpz8KW5tr6oAI9l36pnc0e2xnvvkIalcjd5GfLoZa3DXOWjh4HucQjg%2BrivZOR%2F2eyYaodjdTgg9EVmgAnIRmHZgkGjeHFjfk0fzsc3%2BKMigP1nneDWD6No%2FtCRhDE098STsIo8W0WAcaQHHURzzAEJb5t%2FcNl1XisjD6wKbpbDZHDJQlCqlqwlfuSTsgYOeNLORK94DykUaudN%2BnmNrC%2BqxCiqCMvKbLFA7WFynUVq%2F3PawFsIBAlsnKxE5Zmx1k%2FGDwD9y0TfQ6tgxeV9YzlHTXpYtnyo5cTuY4wOGJQj41m42C0Ny4F%2FD5BdRZKEh68KbQSSv510xLMlUvC8gty%2BRqNGweEliodVjhU69lON391V0EXnshmUCcYjzX2F7HCioUnKCSS3LNnAhIe5hW91GDCpzP%2B%2BBjqkAZyR6X3J%2FvDA%2FwMpS6lRwd4NVTL8498T3phOZJVHE2n%2FoxrPactZcTNnXgcUYGx3pyxmZVD70q0FdJEE6QFo8XLVYQHzPQqgghOfYmFtCjs6LVBzmfWd3syIJye432mzTNJVSGVuWmesqQCSZfhCbTkKhxklfefbYIbhSyeNshiSj1rQYfJL3gmGN6cHtwfx31Waw8xNALaYtmYn3q%2FmWqjPLTRg&X-Amz-Signature=2d8b4940f85da8c06dce80ced9c33066c4684725eb46021b1da6a38d21e3c3fc&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIH34ZNU%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T121249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQD4g4RJlyTgx1ls5t0xN4gQQspvTE49Snmqm4hn2q8SAQIgaOqhu6GSi6b7HC29a4ht9HeWsYbh%2B%2Bly19C5OBs%2FDxMqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF0w%2FQ%2B8O5CqiM5f%2FCrcA8htPGhi9Z069%2FCL2kL8crfpsMbylTBpdQXQVQVB5qhxlzKzY5S9Mq%2BiDh6IqJUZ7FjsYf16y1r%2BQyOSzx%2FsBkqsq8XNzSdLbbZQoeK%2Bg5vQWQuZSSSQ73sNDLtn1D9nNjUYr2IjP5sj5huRepjOq2Bc7z7WApFb766EI9%2BtZ4jeS2x%2FdJ0Sg6msdamcESOppbGlWy7FMiAs2jhw96Y056s8mQI7iVnXxdVXDfy7bR3pIQ4A%2F2Vpo4xxBCWIAXk7i3dqg1XiPFydCIFy6MiEGUCCRrcav%2BrmM7ijH2CmHRLL6IbNSM3OwEAFXah8exRe00oPrCD%2FER8WxknkuY%2B2kGaSuq5JZUyekIVMIA7xl2IVGrCxFi7Jl7KM8M3heU5cr3F%2BWg4oBsDSteWJxjPmPiOVbWLOtJ7l6pWH8qTu3a64AOXGOKjBXq6dGx6e7n8pvqrZmbIFXeHsoPxbDi%2FCMr2ibq9KZJueIZ7WnMOEgq6%2ByBu0KdmsCMn5gcCIqijVYdxSDlOX6B3bAKoML%2BdT%2Fvs4DhEDLCaAYWzWPHhy6b7zVK7BLmNKl5Z4yCQX7Ec2KP6FrfqamK0oCpcDpupz4jUa2967My2SqQvHzvwiaJqfHh76kr6hmKMnEr9mMMDj%2F74GOqUBZfNEZPZkwCvguTgvWy7skJ4x1N1tPQv%2FQcA3zf4DTBFfW%2B3mDY4kmXVau8gDgdSypuQ8M22Iso48C1sBFGAQtO%2FlaY4NJHsiXUrvom%2BbZqSDF3pEtlcixA5n29C3D%2FKxKtAbzt%2BxHvl0t0WqIiTAouLytn7x5DOVJF0HYlLybOk8OOh81vib82LK3BGw8ivCheLHVB0i6IvmuX7hy1xowwcLoU0g&X-Amz-Signature=317a8f24c866875314c432b0a889222a88581a06896e1c9c3ddabb52beb08320&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEYGJOTK%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T121248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIH9w%2FeXftFoOiNjgIZNUjwjm8PU6rhb2nzWHQkYB%2F%2BBKAiEA%2BS3qsGobBecPPS2LGhOArqQ8HAPQzPYEHyww%2BIJZLd8qiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNHjsUP1jvMB5kitPSrcA06VR2qtmXHilck%2B3iMc%2BqqrjlpQ9nzvanFVjMyK%2B5CvSkk6LPqJ0rrbYI0r9Y8N%2Bddk0nWcn2Uprl6iyq0%2FL3JlSSnU0zFhmuV4xYBt0dAVS8vsnz%2B%2BGrD27IwpkMH8INgb5AxTnVcxG0qgqIcDbVt2ghTiAndr0e4Lc7IXyyihy%2BoVbkUO5bLgALvFrEPHXCTBNCJIYJnlrtCvy6JsEouxJkP5i2FcNXuT3LDgM%2BC8ZTJahkHpfb5iiXYDjsP%2BIhRgusTK3T7F4RdS7Wui6B5l%2FEKID%2FWrpk77h%2BVCFnnYk6%2BPKTZdhwLSX%2Fj%2FY1UE1GWASF2%2BrJoZXtBrgBzlaBFdKZ4A8%2BkK8T2UaRNq0KYg%2FmFPQV43iKT972PX%2BrzPU3b6H34KxQ6uC22bVfQGJKYy8p%2Bh0D06XaZ0CFzMqTWyR3Nqt4Kt%2Blc7mcE%2Bl9fqYsmu4zNxexJH6Pt1GvsW9NWUDbttfHCrogmXWZS3ZMCsZibbFfe77ZrCJeVpTqcTclETzpznVPPyD6LhVHprAFfVt17H8ETHvkUDhlRwnMa3qyoI115c6dJFdPlCKeo07D3RdSiQDC9tLkRW%2FXgIOphQt8FVJloxvPzhHCvDqMUp9StqhMtcgkS%2FGK%2BuMKHM%2F74GOqUBk4mH1E%2Fgs3FqbdNUNmz52XmemttoYq1oajUJSMUccEY8zOqyOugl6Y3iPCUsFvHE%2FN5kcOQxbg17Bx7kB4g99VOvn8IqhjuGWAW%2F%2BvzlZXCSGxktqHqU%2BrhI7v1nApNA0CNNEKF%2FpH2UD72mmZIC0Rza%2BJZGbDcRgIwuggo1uyeNz7VNIw1eDE9A6MqxXeZsWa9Kgq2nait%2FC3S%2FNZ%2Fy5EbNYr%2Ff&X-Amz-Signature=78e682b256b2fee54f0fa6018cfb5316861a7932aaa37856e31a63926352e4a8&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
