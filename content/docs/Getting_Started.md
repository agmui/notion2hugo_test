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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662N6NER7T%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T190955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGloQiQr4wOaAy6S%2F8jomd4McRQWoy3%2BH%2Bj8bi6yON%2BdAiEAl3DSpAnxSLFwOlhnlwCl8QH6Gn77aPot%2BZ9j9zC4zCYqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKtWR0gpqnfuCkuP9CrcA6yX43xO9k49Hb1p%2BLPzWLg946odN3VYkmkJZt8M7%2Bz65Hd6WPmY%2BGyOjb7OJJtzqesEHoFJbh6K%2FoL77oFPjZd0r2qE04TMC5FTtmdbiF4s4lQb7weYBr2swACVvRHQDaLtkNZBsn4llKB2%2FWLZWhoqsL%2BV%2FMZj5mS6C7Q%2F9PVH9eZT5FAjAihG1wcgAFTF7Tfg%2FIYNyHf2CwnbEtuE%2B1%2BDEO36STG52oGLh3kDyvW6TwJIFKfIjaaa7j9%2FIT8AtkgWnOiiuB7anD5eOwC70zobFA7AVSUmOYF9PF8Bs%2FAp0BbDcW5fuWnbRyymbZHKcHeNc3Pd20ILyhQJghqnr3pwB7Q7xRB25cuFxolc0sya1VLYV%2BoP3gHj44yjCptnU6sJHX%2BaeEbrERWWRkz8utaHREK5zUFLLNgVQH00atEBLxeewaOtpHSgR8w6iOvfYf4KS9AiquzTW0PBM13Iu5dzfQKrVxMSOLMdjA7pcv5VT4N2SX%2FLdeFVm4MpUdmXXSunFvmUJK5gaw6RSE6CdpgkX%2B9VdFi6bpn5EktGqQgQmWpL%2FneYxvE6szY4n1eWywPaSx2w%2FCf3ObLUSvJ9RuTbBL02l5Pnr2FzIkISmMMtZ2lO67lU%2BukeKcAUMMaP%2BsMGOqUBOWgR557lum8Mnaip%2BwcccS%2Bkh6ezm%2Fw9BDgQxxEXHEjl7W3x0jf6D6WX66AwJM7fKo1ToaDZxu4UKo2opipQA%2BaiA08jsB5lL4pBvJA4PRSHk40G1u1A%2F8keTrl7odj0Iiaj%2F%2FOnhrxy%2BkWSI%2B3ucPlCe34G7VaUHFLdMMMS6sYPH7vWNMvUIgOm%2FcZy7n7ozzppzPgn3EXYhUzdI%2FTKBkU9NcJU&X-Amz-Signature=c988196c406766f005e77e81a80f53b6c9a9ed711d73fcb8f417c961d0373c2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662N6NER7T%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T190955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGloQiQr4wOaAy6S%2F8jomd4McRQWoy3%2BH%2Bj8bi6yON%2BdAiEAl3DSpAnxSLFwOlhnlwCl8QH6Gn77aPot%2BZ9j9zC4zCYqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKtWR0gpqnfuCkuP9CrcA6yX43xO9k49Hb1p%2BLPzWLg946odN3VYkmkJZt8M7%2Bz65Hd6WPmY%2BGyOjb7OJJtzqesEHoFJbh6K%2FoL77oFPjZd0r2qE04TMC5FTtmdbiF4s4lQb7weYBr2swACVvRHQDaLtkNZBsn4llKB2%2FWLZWhoqsL%2BV%2FMZj5mS6C7Q%2F9PVH9eZT5FAjAihG1wcgAFTF7Tfg%2FIYNyHf2CwnbEtuE%2B1%2BDEO36STG52oGLh3kDyvW6TwJIFKfIjaaa7j9%2FIT8AtkgWnOiiuB7anD5eOwC70zobFA7AVSUmOYF9PF8Bs%2FAp0BbDcW5fuWnbRyymbZHKcHeNc3Pd20ILyhQJghqnr3pwB7Q7xRB25cuFxolc0sya1VLYV%2BoP3gHj44yjCptnU6sJHX%2BaeEbrERWWRkz8utaHREK5zUFLLNgVQH00atEBLxeewaOtpHSgR8w6iOvfYf4KS9AiquzTW0PBM13Iu5dzfQKrVxMSOLMdjA7pcv5VT4N2SX%2FLdeFVm4MpUdmXXSunFvmUJK5gaw6RSE6CdpgkX%2B9VdFi6bpn5EktGqQgQmWpL%2FneYxvE6szY4n1eWywPaSx2w%2FCf3ObLUSvJ9RuTbBL02l5Pnr2FzIkISmMMtZ2lO67lU%2BukeKcAUMMaP%2BsMGOqUBOWgR557lum8Mnaip%2BwcccS%2Bkh6ezm%2Fw9BDgQxxEXHEjl7W3x0jf6D6WX66AwJM7fKo1ToaDZxu4UKo2opipQA%2BaiA08jsB5lL4pBvJA4PRSHk40G1u1A%2F8keTrl7odj0Iiaj%2F%2FOnhrxy%2BkWSI%2B3ucPlCe34G7VaUHFLdMMMS6sYPH7vWNMvUIgOm%2FcZy7n7ozzppzPgn3EXYhUzdI%2FTKBkU9NcJU&X-Amz-Signature=df4df0e050f5d6c09e13d22e32e949ab5c30f3b954e22de02b01bbbdb93fb677&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662N6NER7T%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T190955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGloQiQr4wOaAy6S%2F8jomd4McRQWoy3%2BH%2Bj8bi6yON%2BdAiEAl3DSpAnxSLFwOlhnlwCl8QH6Gn77aPot%2BZ9j9zC4zCYqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKtWR0gpqnfuCkuP9CrcA6yX43xO9k49Hb1p%2BLPzWLg946odN3VYkmkJZt8M7%2Bz65Hd6WPmY%2BGyOjb7OJJtzqesEHoFJbh6K%2FoL77oFPjZd0r2qE04TMC5FTtmdbiF4s4lQb7weYBr2swACVvRHQDaLtkNZBsn4llKB2%2FWLZWhoqsL%2BV%2FMZj5mS6C7Q%2F9PVH9eZT5FAjAihG1wcgAFTF7Tfg%2FIYNyHf2CwnbEtuE%2B1%2BDEO36STG52oGLh3kDyvW6TwJIFKfIjaaa7j9%2FIT8AtkgWnOiiuB7anD5eOwC70zobFA7AVSUmOYF9PF8Bs%2FAp0BbDcW5fuWnbRyymbZHKcHeNc3Pd20ILyhQJghqnr3pwB7Q7xRB25cuFxolc0sya1VLYV%2BoP3gHj44yjCptnU6sJHX%2BaeEbrERWWRkz8utaHREK5zUFLLNgVQH00atEBLxeewaOtpHSgR8w6iOvfYf4KS9AiquzTW0PBM13Iu5dzfQKrVxMSOLMdjA7pcv5VT4N2SX%2FLdeFVm4MpUdmXXSunFvmUJK5gaw6RSE6CdpgkX%2B9VdFi6bpn5EktGqQgQmWpL%2FneYxvE6szY4n1eWywPaSx2w%2FCf3ObLUSvJ9RuTbBL02l5Pnr2FzIkISmMMtZ2lO67lU%2BukeKcAUMMaP%2BsMGOqUBOWgR557lum8Mnaip%2BwcccS%2Bkh6ezm%2Fw9BDgQxxEXHEjl7W3x0jf6D6WX66AwJM7fKo1ToaDZxu4UKo2opipQA%2BaiA08jsB5lL4pBvJA4PRSHk40G1u1A%2F8keTrl7odj0Iiaj%2F%2FOnhrxy%2BkWSI%2B3ucPlCe34G7VaUHFLdMMMS6sYPH7vWNMvUIgOm%2FcZy7n7ozzppzPgn3EXYhUzdI%2FTKBkU9NcJU&X-Amz-Signature=0ba1996da40c2ca402bef0cedb5a57eb4be963f76bb6a7d863983232f6dacef6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROWUHAGI%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T190958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLgsza5CkpS3TyDNiqqcXAUmzXj2SjkpmmlEkITgJpdgIhAOS9eo2BFBMY8%2FJYTd6p7RhzNoU4vmnsKyIxOYQR%2B%2BEmKogECNz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzvcXBXMF5b8oy9n9Uq3APw5WEjeJmtqtsjWiIKYiFED%2BoMQ%2BqoYTo7CN1xVjFNhdUN%2BtYEF53RlpignfEc1enK%2FWOZiCzQ7gwI7KmwinYrckHhQ%2FcWxJlfl%2BxneETHGW2Rvhue41RRgw47fbBZiZnlDmDxs%2FMoZTw6uARn7yg3uaVSVjIxhACTg8vdupMAjpSHud4OnCDlSRABmTHvlvQFeT8G0p1QSpouJWVu5C56MDaUjUElnaytDYf%2BaeKu8ybZd7itoPjG4fLC%2By3Qjq5bg3QZHGaWdHWAbZFZc0B5Lh1RMbCXKQwQx16x6MeTqrVR7IxBb8hfzLx%2BKGd2qf8HVHoEnqcdPdUvBnF898suR1fcJWWi2eDghfOB1DryM9LjzDPqxujx6%2FTgG2AS5KpRbNkhXFHXd6J95XUbLUuuSN5Fwo%2FS10Z3qHiVIJeL2HAVv0OCdrQ0HYW42q1ZuoHdBRIQSW8gcs3P9K6ekOUpaGKeAeAY9ut33Im4rcqHRSGs6xiHSEwUuDeQu2hVzSXJooTkVw7bZyBJYX30IwOzQ6PZeYpU6R92FaoGARho5hDCpk8He4jww33B8YYvkzIX7gdtYKI2%2FuxC2MYg2gOp1QKb4XdLXwRrR2u3WSZEUzBG2WLPSlIFgRjXADD5jvrDBjqkAdbSLdfkdEb5JkkyMlAiyhVGajSYpeWCCjdBBULAPuhXTsh1pwI5YgM1oJzQTLlhzWkU1kqjT04iYwh5%2F0OusyhgjQ9RORuD6F1Pq1tDhs42hkd96cF6KHixdB8SHSqKWSJ%2FHDsI3de1tmioJYHjUTFpZcKfG%2Bm7Zr5fEA8f7xp2Ay2SaEchKNX00ZtBHhUih4fIb6twrKEB%2FfWqqYXnOclUGpGS&X-Amz-Signature=4b2974ef86f9bbe3659af0db64ef2c38b725d262a51dbdb524f7775883fa2829&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IGZEX4H%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T190959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLG0XWI6JmCuIpFdN8lAH%2BXDzON%2FK7rMXbDQ6xhxRSvgIgGN6C0Azb%2B6FScoCnMT4bhp%2B94hA8sqib%2ByJoVU4DbuMqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEWdvCjDisZzTxzclCrcAzkkZ6i6N4%2BIR0TOMCpumyugBhlX8ixAttI44frmR3FvJdp%2FW2ax0Xqc8hSy13P1Ae5xh%2FoXIs9zbnP%2BcDaEGyHzXZdwVU1944Glzgb6Gx%2F8%2FLi8nQjL6DpyqhDKNOMyjvAzqCO%2FS%2Fp8xoFnqvBA24iFrA1Hf9BsvTHLzcyrJ0JsruSiHvqsU3uOxTo8DEB4JaHlzaoo7wOHvEuHXdidCC8zrSDL%2FuBYfSs60tmovBxvcpCX%2FMBpvsI60WvLQsR03mp9vaj6%2BNXkWM3zwAUvssjPL7QnMIz%2F8EZfFid3pNtL%2BdxrUamdY6NvBuInNyidsVFtZqm1bAEIn9LBFIeOr7c%2FAExV4hi8Cg6bMzdyimqYrNOLTyvu2AOaFhvGCTyOcPkZyAzIvpkck8OvdJD9Y1vLLdZyYSKgT%2Fcp26QrYSUjBQgMqSZ%2BWg87jWZ4Bo86UT%2FetCanDoOqgvPQRf%2F2enX2B4AucYZxPWq1v4fvvP4jp22lQf0%2BHPmnXMQJhL5UjI1wY%2BrJIlcLmysletpzCEjpXzqsOTh4Wso0MQKIn8%2BDtsdxly2yt14hrL5KDy1km%2BS1Ppol7s1v1bsV1dYfQfnTtIlHREmnjk30iZ%2Ftq5vqnTW%2BFzVJBhafwdRCMNyO%2BsMGOqUBuWd9fnRYN3rXJTIhKGbjDjdCRV9sxzKmlJFE1lX1uvbcX19l%2F9eP4yfxea0jhh0PhCheslJavvIZuA%2Fne1KQj2hXxoS8md%2Bo5YbiocNWTyrxJKDaxcX67tphLn2dw%2Bh%2FmQr9zw%2FjhkC9ZesrEIdRb%2FFYsOoe2k3MF1Xn3Ixj5wJYglwRWn1WNJhADHXDVeSwkiIoBnXpWP0HI5aAA2Tq5k1FxTQz&X-Amz-Signature=7b6ad6b3f7e5546b071ba0159be948e2b5cd48801469a294064b8fd46661301a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662N6NER7T%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T190955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGloQiQr4wOaAy6S%2F8jomd4McRQWoy3%2BH%2Bj8bi6yON%2BdAiEAl3DSpAnxSLFwOlhnlwCl8QH6Gn77aPot%2BZ9j9zC4zCYqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKtWR0gpqnfuCkuP9CrcA6yX43xO9k49Hb1p%2BLPzWLg946odN3VYkmkJZt8M7%2Bz65Hd6WPmY%2BGyOjb7OJJtzqesEHoFJbh6K%2FoL77oFPjZd0r2qE04TMC5FTtmdbiF4s4lQb7weYBr2swACVvRHQDaLtkNZBsn4llKB2%2FWLZWhoqsL%2BV%2FMZj5mS6C7Q%2F9PVH9eZT5FAjAihG1wcgAFTF7Tfg%2FIYNyHf2CwnbEtuE%2B1%2BDEO36STG52oGLh3kDyvW6TwJIFKfIjaaa7j9%2FIT8AtkgWnOiiuB7anD5eOwC70zobFA7AVSUmOYF9PF8Bs%2FAp0BbDcW5fuWnbRyymbZHKcHeNc3Pd20ILyhQJghqnr3pwB7Q7xRB25cuFxolc0sya1VLYV%2BoP3gHj44yjCptnU6sJHX%2BaeEbrERWWRkz8utaHREK5zUFLLNgVQH00atEBLxeewaOtpHSgR8w6iOvfYf4KS9AiquzTW0PBM13Iu5dzfQKrVxMSOLMdjA7pcv5VT4N2SX%2FLdeFVm4MpUdmXXSunFvmUJK5gaw6RSE6CdpgkX%2B9VdFi6bpn5EktGqQgQmWpL%2FneYxvE6szY4n1eWywPaSx2w%2FCf3ObLUSvJ9RuTbBL02l5Pnr2FzIkISmMMtZ2lO67lU%2BukeKcAUMMaP%2BsMGOqUBOWgR557lum8Mnaip%2BwcccS%2Bkh6ezm%2Fw9BDgQxxEXHEjl7W3x0jf6D6WX66AwJM7fKo1ToaDZxu4UKo2opipQA%2BaiA08jsB5lL4pBvJA4PRSHk40G1u1A%2F8keTrl7odj0Iiaj%2F%2FOnhrxy%2BkWSI%2B3ucPlCe34G7VaUHFLdMMMS6sYPH7vWNMvUIgOm%2FcZy7n7ozzppzPgn3EXYhUzdI%2FTKBkU9NcJU&X-Amz-Signature=6a68b602a53d0d8a8f24664da89f4df89829be57d603b9ff7aea526cc493070d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
