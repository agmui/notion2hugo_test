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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJO2RGD6%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T150654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvDWsv%2FnWe30Wg8zmWdzdrhWPzcU3VDmEAPikoYuRdHAIhAPh0vhddMYGKQ9WFdAJF75%2Bx1eNGqjn2SfjqdfB7UvGIKv8DCEcQABoMNjM3NDIzMTgzODA1IgyZHe%2F7BQaZt%2FmSIuwq3APFc9QnZ5NTx%2FwsldU3uXbCKYo0dHOzvQ9wXxdmdz7GY%2BHMWuzLDP4Q0kUmUxMZTkCp1dP3uF841O%2B4uIoZQzPa%2FTdfO7ebBG9IsfX7oQRm45%2FiWXVC1ogS9Nf1JAJmJaM%2BLmkOmOtS1Z22DEk9VCUTMt50jUon8OecF7b5xyzFpik7qlAk4tlIJ0OSD%2F%2FHHxAGMlxTpeHkfO70Yoz8gxEXocMzBiT4oMkRAeY6qJN06%2BYpQZs3gf7vY5svP3n6q5Vpn4tss1g%2B%2BhMmgIsk%2FIMTVnOG0ubLIYPPnwx8sIuANBQUG2TbCKixkwaa0XtxuqrQWMbruyfdZs2gk4JuOquvmpIi2H672NL0V9Mcr%2FclBxK7FRku6U0vu8Jx2Gck%2FQkSqVn4cDfBRuuLxyi4YDusrPuzi2m65xRlUjanwR91Vg3FSkp3EqqHSoMZYMf1NUOifggwwYpSrPqRFVhamzdGXAC2ePQGW1r8Z88uipS84ZBoeYVy68lR%2F%2FV4ex3z66pF4jitRk%2FwOJW%2Bl9P3iwvNhovDAdYnAnfIxWsuCfuGttxiBS5sRbOkjGBi65Kk9VqbQVJUx1Zcw75N7swYm0zIr4rRuxW%2FKPEIV6x%2BTfC6ij40fHFR9tNNIMGeoTCEi8q%2FBjqkAcJanqXCBkbGYYgcVjNywzzDD%2FLVqpiSIMi5kQjJ9f3Z0CqQeTXEDTNJSUBAP%2BsyfiNUsNLfcdypI9AAmvOIey3sm51ufuMZy1iURyVtDtgu3w6%2FeePo%2FVxQGs3TIz1xps%2B7pq4VJhC7KBa2XSF1qVW6OWXeOu7sTulP7PfzPYDqfAJZcGMPQ6gcXgDHlfMOwK6GcQAQNifO8edtcoPGkErjNegK&X-Amz-Signature=f38bbb2f97c4239f24aafc614719c30bbcb2129132ff90eb291406b332ae7be0&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJO2RGD6%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T150654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvDWsv%2FnWe30Wg8zmWdzdrhWPzcU3VDmEAPikoYuRdHAIhAPh0vhddMYGKQ9WFdAJF75%2Bx1eNGqjn2SfjqdfB7UvGIKv8DCEcQABoMNjM3NDIzMTgzODA1IgyZHe%2F7BQaZt%2FmSIuwq3APFc9QnZ5NTx%2FwsldU3uXbCKYo0dHOzvQ9wXxdmdz7GY%2BHMWuzLDP4Q0kUmUxMZTkCp1dP3uF841O%2B4uIoZQzPa%2FTdfO7ebBG9IsfX7oQRm45%2FiWXVC1ogS9Nf1JAJmJaM%2BLmkOmOtS1Z22DEk9VCUTMt50jUon8OecF7b5xyzFpik7qlAk4tlIJ0OSD%2F%2FHHxAGMlxTpeHkfO70Yoz8gxEXocMzBiT4oMkRAeY6qJN06%2BYpQZs3gf7vY5svP3n6q5Vpn4tss1g%2B%2BhMmgIsk%2FIMTVnOG0ubLIYPPnwx8sIuANBQUG2TbCKixkwaa0XtxuqrQWMbruyfdZs2gk4JuOquvmpIi2H672NL0V9Mcr%2FclBxK7FRku6U0vu8Jx2Gck%2FQkSqVn4cDfBRuuLxyi4YDusrPuzi2m65xRlUjanwR91Vg3FSkp3EqqHSoMZYMf1NUOifggwwYpSrPqRFVhamzdGXAC2ePQGW1r8Z88uipS84ZBoeYVy68lR%2F%2FV4ex3z66pF4jitRk%2FwOJW%2Bl9P3iwvNhovDAdYnAnfIxWsuCfuGttxiBS5sRbOkjGBi65Kk9VqbQVJUx1Zcw75N7swYm0zIr4rRuxW%2FKPEIV6x%2BTfC6ij40fHFR9tNNIMGeoTCEi8q%2FBjqkAcJanqXCBkbGYYgcVjNywzzDD%2FLVqpiSIMi5kQjJ9f3Z0CqQeTXEDTNJSUBAP%2BsyfiNUsNLfcdypI9AAmvOIey3sm51ufuMZy1iURyVtDtgu3w6%2FeePo%2FVxQGs3TIz1xps%2B7pq4VJhC7KBa2XSF1qVW6OWXeOu7sTulP7PfzPYDqfAJZcGMPQ6gcXgDHlfMOwK6GcQAQNifO8edtcoPGkErjNegK&X-Amz-Signature=bc9f5e8e3d96c95512639b14d063fd1fb848b115af70fb40ec4992d2a3c7999a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BF3HNHU%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T150656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFZ%2FyCH0HJu4bxw0JmkCUKwLfMGjylsnZBV3zfqn5VZSAiBsT67Jb8weaizKikjLc3f99Gl2%2FIGwBC4rDFhaDilTcCr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMq6MYGZjGosAgOUSPKtwDq%2BPB1%2BjzMqcHH3%2FiUN0qpAfUIMZ4Ow%2FncOeIDpHhcHqyj4cW4iKfSz9YpirAnX2Z1QX77SXZcX4Dj%2F4c1DOFI%2BHRrQQGymCic4nVb8DF2pc6VLa5leJJptZFK9H0Z97Sff6qMvXS%2Fz4mydGJZoCcP5J0kpsiAWYdC0EvpxqHJIX3K7jIhCq5XGVJbcw9C95FtcLUwTIDvgo9Ca8Ex3X9jakNbc2Ma015VwctHfnRU6NCvALwPy%2FAoNQbMgIxT%2FkiBs6x%2BdssrL%2FWoWyVBaRGefuvs2OZPxeWBfTiUAqvQXr2GrpW5koFBX3wTRyMyhNrTSz3Ii6eqbYxlIK2xdHNqj59KYNGEUof5zDPHgHk6AluPBSDLKD4Lyr6B5AfYpUtEBM97kOHJaB5KIw%2Fh4Q4nDarzr7yJ1is28t5D5m262K75h%2BiXwHxZfWoOi4KJYFjmyVlG69D4PsXzXFOvNYBNRtpgtwY0e9HlM3oylCmQuHz9Qoj4J2tiEhkLrjuXCrUNSz3aHNGO0de92HKRXnXCm42lptjrPVpaBqc0KYETdkRwGJzKaz6Vh%2FEtgo918big4eeRAUHzF%2Fs2E8GNotwkZlDtTSJPH2d4lcHNky%2BLGoKJ%2FQVyyuCjgOIroIwsJnKvwY6pgFbqHkyGjAef7oJwITXMD4Ow45VnWk%2B2D%2FnKU%2BAyGtXFXrmrB9mDOMsYKwE6oJ5%2B1CAfsJM7LCMxUlA4Qzi5EyEioDw5lR0%2BhFyeB5rc5OHxFRrUk0uCdECnGvSWmN9A2ZV3bRRX75F0vpPWWjXlRusf4wUuSdOsLKypBwkZiHvKqKLZyIh0cIvVt%2Fgl44kDAFiv1b1BKcMz%2BaotxtfiN6AJToCGNjJ&X-Amz-Signature=e04ca653971908e3a0afcad08e39e2eb3fa7e414473bf07ab1cfbcd8d6d0a79b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLNNO45T%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T150656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICLBbIw6t67JHlSSS6qoFl9yYgwfqR1ixFZhthi1epMMAiEA9jDqGHr0kN3T8bT7L7FbbwJNoC9WD3TnVL3PNi3lrYcq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDO%2FWn1KeYBnG1KJ2uSrcAyD9%2B4Ewq4blTT0UrN8lkjZMYiHP%2Bdzq2C8dfgnR82YeMRkyFYakLqBTyvF%2FgeZoZjtoaeA%2B6OG8ODoxKGd65gcW2WxQ0tpiGdetvN2OVKAf5tFrJ6iny8pWYtLGYyFNK3yxVuTKSSEafdF5U3VaevOrG9Cfo8zIDIOUEx%2B856RKD4g1%2FzbOWj7zqR9jSOmWOSto%2BtfokVZ%2FCs37Tgmlw6cDKmDaQwZWLmSisYXAag4UvtQ4VcZzEZtwNSspqNeVxx8Fhi1ooxE4OcuvW681zWbwnhzyf89ZEOgbImVmEK40BCotgBomO5Gy%2F4sAyL7TWbvHS4oZQdQ1HbnovyzMapNHb52xKB%2F45xm4K0Q5%2BUdCcgWgXkZbP1ENFtKbmXnLl7Xw1L0BsQwF8mfgPcXRrgtFpz8dCl9F4GNTSyY9rvgpTdcwrJri8FZDhtqzkDwhbUH9Ntt4igcCTeHgiMqdbQnPbiRMZ12jAq5C1h%2B73tpQ6I3%2FLetRgZYJQsblBvkLMwUQpSgpqMSFAxRk6GpLk2iDTnxFJVM7fXCYGPb4N4pVPQevDG%2F%2B2HjqRIhxJ9VQR6MNJM1pppXp%2FZKn1Q69uwfcxyVv5zNTTRrvQgcHup17AWTRtO5GV1NevKemMMqbyr8GOqUBPZmE7G4J%2BqSNPCO8zcfmEEx%2FZwkQSpN1AV8RSeWmv%2BSgn%2FMN95cOhUlwhV%2FlJ9dCU3%2BBeqnVKduIL5BzrJ72pk%2Fw%2Bv7hVHkk7BcOZx2GAML%2FKdU%2Fw0cGr4HvvjHRFDzqM9RgcC6UmweXYo5bI%2BO6wky44BEJ4b7aR5wg0OBp18PZwUYzK5TA93HjuQDEHT5mg%2Bhiz4rL9TI6zR1CCCBKJFjTkiTY&X-Amz-Signature=0b0a61058ddde35471ba89bbcaa427126d193a8e60988c46b81b699659b6d0e1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJO2RGD6%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T150654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvDWsv%2FnWe30Wg8zmWdzdrhWPzcU3VDmEAPikoYuRdHAIhAPh0vhddMYGKQ9WFdAJF75%2Bx1eNGqjn2SfjqdfB7UvGIKv8DCEcQABoMNjM3NDIzMTgzODA1IgyZHe%2F7BQaZt%2FmSIuwq3APFc9QnZ5NTx%2FwsldU3uXbCKYo0dHOzvQ9wXxdmdz7GY%2BHMWuzLDP4Q0kUmUxMZTkCp1dP3uF841O%2B4uIoZQzPa%2FTdfO7ebBG9IsfX7oQRm45%2FiWXVC1ogS9Nf1JAJmJaM%2BLmkOmOtS1Z22DEk9VCUTMt50jUon8OecF7b5xyzFpik7qlAk4tlIJ0OSD%2F%2FHHxAGMlxTpeHkfO70Yoz8gxEXocMzBiT4oMkRAeY6qJN06%2BYpQZs3gf7vY5svP3n6q5Vpn4tss1g%2B%2BhMmgIsk%2FIMTVnOG0ubLIYPPnwx8sIuANBQUG2TbCKixkwaa0XtxuqrQWMbruyfdZs2gk4JuOquvmpIi2H672NL0V9Mcr%2FclBxK7FRku6U0vu8Jx2Gck%2FQkSqVn4cDfBRuuLxyi4YDusrPuzi2m65xRlUjanwR91Vg3FSkp3EqqHSoMZYMf1NUOifggwwYpSrPqRFVhamzdGXAC2ePQGW1r8Z88uipS84ZBoeYVy68lR%2F%2FV4ex3z66pF4jitRk%2FwOJW%2Bl9P3iwvNhovDAdYnAnfIxWsuCfuGttxiBS5sRbOkjGBi65Kk9VqbQVJUx1Zcw75N7swYm0zIr4rRuxW%2FKPEIV6x%2BTfC6ij40fHFR9tNNIMGeoTCEi8q%2FBjqkAcJanqXCBkbGYYgcVjNywzzDD%2FLVqpiSIMi5kQjJ9f3Z0CqQeTXEDTNJSUBAP%2BsyfiNUsNLfcdypI9AAmvOIey3sm51ufuMZy1iURyVtDtgu3w6%2FeePo%2FVxQGs3TIz1xps%2B7pq4VJhC7KBa2XSF1qVW6OWXeOu7sTulP7PfzPYDqfAJZcGMPQ6gcXgDHlfMOwK6GcQAQNifO8edtcoPGkErjNegK&X-Amz-Signature=e83075b6c838021718b5b0d6a66278af1600f8f4754491c7e42f6bc0386472cb&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
