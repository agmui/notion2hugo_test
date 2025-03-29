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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Q7XPXZE%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T003803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIDcU8VnWaAR0XHtUXDp1dFfa9Fsaoyj%2BCkLUALThjlAXAiAk5Dae9sezhX8jF5%2BKQ8x538y3NaY0iI%2FjyBmVSfB7zir%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMcMLFTppsNBDvQaM4KtwD5VDvvd3a%2FXC4AGeDrPjA%2FDMk04ulvuQtnfw3OY0K8HpKSUtnV24BeAv%2FCLllmFCMk0ATqV44h2b3L0YDQG14dkvOkb0t1qga0HbMRn1kMSNQjzs62R%2F3H978Tu6g2VtvFted4MxOEo%2FrtNCb4PYjh06m%2F1DuiXcTo7jibq%2FZTQ1x0gwGgbXzBccdSXjWjvy344w0PoGf5Cr1Q1rnBJpPIX5eobTydETb7h3Ozo%2FQAyCekLNjVuy0IeV0ZhaWHfhzdWfDvQWFOdMRo1FgS7rjqV6IkhQHINGfVow9tczwZclPYrwh8UTeV6IxobW2x6r7Owmm%2FfHL%2FU2DW%2FWmcVr75QxYk16vyiQjHb8lYF2DcUBovX3Wnz9x8GfLNMZCuix19z4YJFE8%2BpoStl2vXoOp0xUr%2FHEbaiZbcqH8lbHMgIvr1UNQgp11mnIfc7wo0tQK2aP24SAkXzmiajImP6tuCnP7HWDtsAHGIk%2BRt4cTtcy52VKTAkcJKoGBkjXelYFbY1Nxb%2FQ01X75UAgkMgVIaYVe9vnR8MeGjm1S2lt1vA28QP6Q1AFwn2W8hKdzAlGhN7lMiXhG0xc%2Fa07em8%2F4km4ti6Pmx6pXtp18T%2BtUhjnyphXwXsU3MV%2Fyg2Qw%2FuCcvwY6pgFY%2FmOdjdgwQTJ1aH8LZwpqNLZeAKMiGi3PXT1uSodsBS8VDEAwqFbrw1HX92l5LUFV5kKZr91Fsuk88M3NZByiocPmaxm1a2yVUJPgG%2FZwSxhpR1%2FBpq3vIJeVqrZ9n3pLrbnA4r4s%2BzrgkphwcYatFo6%2FtWZke7HNF%2B8tFhf%2BBMH%2BO6rWuHOQwQz70BO9uWojtY2X0GUacVJZMsxtQTEJD%2FE%2FTpoQ&X-Amz-Signature=8c946463acea5f9de0c7caea39e9067c0ecbd099485eca4aebc4e8bb8323ee64&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Q7XPXZE%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T003803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIDcU8VnWaAR0XHtUXDp1dFfa9Fsaoyj%2BCkLUALThjlAXAiAk5Dae9sezhX8jF5%2BKQ8x538y3NaY0iI%2FjyBmVSfB7zir%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMcMLFTppsNBDvQaM4KtwD5VDvvd3a%2FXC4AGeDrPjA%2FDMk04ulvuQtnfw3OY0K8HpKSUtnV24BeAv%2FCLllmFCMk0ATqV44h2b3L0YDQG14dkvOkb0t1qga0HbMRn1kMSNQjzs62R%2F3H978Tu6g2VtvFted4MxOEo%2FrtNCb4PYjh06m%2F1DuiXcTo7jibq%2FZTQ1x0gwGgbXzBccdSXjWjvy344w0PoGf5Cr1Q1rnBJpPIX5eobTydETb7h3Ozo%2FQAyCekLNjVuy0IeV0ZhaWHfhzdWfDvQWFOdMRo1FgS7rjqV6IkhQHINGfVow9tczwZclPYrwh8UTeV6IxobW2x6r7Owmm%2FfHL%2FU2DW%2FWmcVr75QxYk16vyiQjHb8lYF2DcUBovX3Wnz9x8GfLNMZCuix19z4YJFE8%2BpoStl2vXoOp0xUr%2FHEbaiZbcqH8lbHMgIvr1UNQgp11mnIfc7wo0tQK2aP24SAkXzmiajImP6tuCnP7HWDtsAHGIk%2BRt4cTtcy52VKTAkcJKoGBkjXelYFbY1Nxb%2FQ01X75UAgkMgVIaYVe9vnR8MeGjm1S2lt1vA28QP6Q1AFwn2W8hKdzAlGhN7lMiXhG0xc%2Fa07em8%2F4km4ti6Pmx6pXtp18T%2BtUhjnyphXwXsU3MV%2Fyg2Qw%2FuCcvwY6pgFY%2FmOdjdgwQTJ1aH8LZwpqNLZeAKMiGi3PXT1uSodsBS8VDEAwqFbrw1HX92l5LUFV5kKZr91Fsuk88M3NZByiocPmaxm1a2yVUJPgG%2FZwSxhpR1%2FBpq3vIJeVqrZ9n3pLrbnA4r4s%2BzrgkphwcYatFo6%2FtWZke7HNF%2B8tFhf%2BBMH%2BO6rWuHOQwQz70BO9uWojtY2X0GUacVJZMsxtQTEJD%2FE%2FTpoQ&X-Amz-Signature=d0cc50fd714623a4cc7d9ed4387159ffcd9fe76e4027a31ccd35248949c6d786&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Y5F44AZ%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T003809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQDU2PKLUTHJwWtnpMWqajS%2BKjDWG9zOKRecEjTtoQZtdgIhAOs7M65h4Dt26w0eL1msHa9cP%2FNZHwR%2ByyM71R67VtZYKv8DCGgQABoMNjM3NDIzMTgzODA1IgwekAWJDWi2ztHOJIoq3ANws0Hh9hEHTxsESwTwFdmshwWltoteimbFYXqkGljwj3B72iAAeJ3adnG77wmrIXzGJAhfRH2DxX7VdYV8VKMv5JSOfJfhiSPT5FXnjddOEfAVbzWCv4UyvwUcZRQHj0EHu4HyVKe32lpJ0IbK0DXdSFq3OzO9j5bfE1Mwfi3PdCHWY8UFqvNexX1Ur6FzUWIOV8OurgH4w45HiMVaQeS9v960vb76Rq9QDnYpPEGYEZatAhc658lvcaQqhAsT8r9Z5J0LKnAuDGindXC9%2FUsW%2FZXmskt%2FoAnmQm6qIcpUHaMh2JgR4yAywfnosYy6PXxhd0VBJVwKXAT1vwcy8tOHZ7f9Ko3g3f4qaSkCSQR0aAHb6gcWrZVxtEVGXMyvDJULVIBUQTpqMv6iYRWZDh4GO%2BJQT%2FECnwORJQ7bfp4PZLRqmyasdPAWEO%2BwFrbIQxZocj9%2BYD%2BLzlx75LmzbYxqaAaRzBMYP8dZJ4kgRLKZZAlLBG9MF3YwVdA6bfly0gx3uQS9c3bLAIZ4vaeHYDsUnIe7AVr9xPNU7qE7MGRnlCVWUTgsJDU%2BVbdVaJvTBIX%2FPya1oIDlvwNwQ1eoKm4WNYbd6YnuAm7CFCieB4Elaiz7GHjCjsn4fnaLgjCL35y%2FBjqkAWEoFWfIuIfOHBBERy2ymjkg4RQwTFNIfhjLmDX0xh0KGrtuDF1in3MwPbV4Akr%2FuZjD8GqfwlPCsflW5wsW%2FzALMHSEdK4NRidldDzSMcwaZefrgBT5F2HcQgdO2RV8L7HPPT18z%2FrkEYwisanGHAYVs%2FTL7Vbs8lJ1fe0I4FVOONGEQsmR9c9v%2FKl5mNkU%2FOdgiQVDlHekhthYrqhGm%2FbqGWZd&X-Amz-Signature=810c6b423e30244bd4f93185e2275d19d3fd261cb4cde3984ec9fac60e0e50cc&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R447YSCS%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T003809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQCXnsVO0x77kVdpkoNpjkiB7bzxvPW67GI1rwRUk6TUhQIhAOmWPUQ44OYaGvEjcOWbBnhbQch5mHfcLI%2B3wwMTnTkjKv8DCGgQABoMNjM3NDIzMTgzODA1IgwQJaM8bLwFXNbKAEsq3AMylDtfPqUNb%2BVMcS0dFYSOdV7N%2BF0h%2BLZ%2BI6hHMJkKgQ4CorCsbKrx0l8Q%2BcRmklX13h1W62RsBn61aVdgh9gaxD7I3TXE2SALom2LPMVtrl%2FcCmGmEqtR3GO3QfqvvDGaOI8xC%2Fw5h5MbAbdaQwQk8%2FxIH1y%2ByLUMQ7jY2JE0dXSmO%2BtvN6LhtGtSp%2BlBacS7s0iKYjvycNnYZ3OlODT0OOvnszXdqhKiI7MON4gan2cBaV0NpdojcEE8a3AcRuLh7DzRTWRQTO2FN5mEgGbfsVS7W5XWYFn9%2B2givPTqPDda517l%2FjsNUo%2BeqV%2BWo5fz8i936p8VZNdHgdTUZPRuDEoQOeKJC8fGbWMXZMi4M8u9eT47eOMFbFdTGFnXt1f8UTKZnyghbQaZRdKdaR7i2GxkXf3eAQW2hvl%2Fr5TL%2B7oEyMUkgY6TA7N8%2F0flYjoqEgudbdDhqqdr9JkGong8Y9xFO2Im8TyKgQVCmTsrLjoiA39JMnaMNm6QHrYmFd2IrBUzJdeUghVxPNnIAD6ChTw%2BWDNJpTdaz7Ak35oz6iMotO1k1CrL7Q7Vxhhytp64jrkScqo1d99KOFthinpvNHfYBixwvqRB6TE%2Fsrz%2BtzdYzppJkDzYXcVamjDh3py%2FBjqkAett6gZjMQMOpCCDrl6FEE2UrfUxgWpGlvvDPiry3o1Rfj%2FV%2FdaKPOAnPH8DRrN7k1pG4Q2vF%2BckVVTqfc%2BEcP8pZn%2F3UicSBdA5sD3UesRKm6vUxZw2O916WQb0kQRoVhmPSlx8Z%2B0bdgDbPLFJVPFMPZdKrAOnlnPDG%2FnzNKCwQJjSm%2F6kNCgVi3KhUdK%2BDiw0AQ%2BBhxwS%2FUyBvMXd5gCYqyLq&X-Amz-Signature=0a14d2c027e118ff4137021b6739364a7f27fc3073c0371e084a178552f8700c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Q7XPXZE%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T003803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIDcU8VnWaAR0XHtUXDp1dFfa9Fsaoyj%2BCkLUALThjlAXAiAk5Dae9sezhX8jF5%2BKQ8x538y3NaY0iI%2FjyBmVSfB7zir%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMcMLFTppsNBDvQaM4KtwD5VDvvd3a%2FXC4AGeDrPjA%2FDMk04ulvuQtnfw3OY0K8HpKSUtnV24BeAv%2FCLllmFCMk0ATqV44h2b3L0YDQG14dkvOkb0t1qga0HbMRn1kMSNQjzs62R%2F3H978Tu6g2VtvFted4MxOEo%2FrtNCb4PYjh06m%2F1DuiXcTo7jibq%2FZTQ1x0gwGgbXzBccdSXjWjvy344w0PoGf5Cr1Q1rnBJpPIX5eobTydETb7h3Ozo%2FQAyCekLNjVuy0IeV0ZhaWHfhzdWfDvQWFOdMRo1FgS7rjqV6IkhQHINGfVow9tczwZclPYrwh8UTeV6IxobW2x6r7Owmm%2FfHL%2FU2DW%2FWmcVr75QxYk16vyiQjHb8lYF2DcUBovX3Wnz9x8GfLNMZCuix19z4YJFE8%2BpoStl2vXoOp0xUr%2FHEbaiZbcqH8lbHMgIvr1UNQgp11mnIfc7wo0tQK2aP24SAkXzmiajImP6tuCnP7HWDtsAHGIk%2BRt4cTtcy52VKTAkcJKoGBkjXelYFbY1Nxb%2FQ01X75UAgkMgVIaYVe9vnR8MeGjm1S2lt1vA28QP6Q1AFwn2W8hKdzAlGhN7lMiXhG0xc%2Fa07em8%2F4km4ti6Pmx6pXtp18T%2BtUhjnyphXwXsU3MV%2Fyg2Qw%2FuCcvwY6pgFY%2FmOdjdgwQTJ1aH8LZwpqNLZeAKMiGi3PXT1uSodsBS8VDEAwqFbrw1HX92l5LUFV5kKZr91Fsuk88M3NZByiocPmaxm1a2yVUJPgG%2FZwSxhpR1%2FBpq3vIJeVqrZ9n3pLrbnA4r4s%2BzrgkphwcYatFo6%2FtWZke7HNF%2B8tFhf%2BBMH%2BO6rWuHOQwQz70BO9uWojtY2X0GUacVJZMsxtQTEJD%2FE%2FTpoQ&X-Amz-Signature=99f13321a52a902cccb31c75980dbefe54546a5f7544e56da1e8725eb0453946&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
