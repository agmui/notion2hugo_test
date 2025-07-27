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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TP2NBYEY%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T150810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQCCuz%2FSxk5%2Fww3cFdwejbdXR68AY0z3W6nxrLnX0gMXvwIgakEs6Kzd62%2BIqpwR38YoSsjf8nEPeD3TIk%2Bl9EPx0SYq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDFP4IVkCv5Cd0wgrcircA%2F8rIxLTdqRntW6kCkun6ElmYHyFojWquCo2iIqSpxl2z4WgitmfAPpFQ0YuXJppmUfS6fR1UYWYipPPhGHHCI%2BBuIoo6VouELPvRB1HdFpTyimUi3Vs6nc4%2FqJPuwG7t2rsH27Tifl%2F4iQ2uVEKx8%2BP7WbpuXOi32n0hummxwGDSEi%2BkJaQh3YGvHSa7oqljh1YlT2%2FQsIZHiRgJyg9%2BELtT7Y%2F8PkpQKU%2BlToYL1H22dECbuRxCVbT66s1qjTV5ri1aapUwe%2FFeXfymXMd00890vy6pV8WRg6el9YBZbVzD0CAAC1ExgQ7ndhOHg8Wvt9kCXds%2BpNt%2B0VJIkCeNaVF%2FQh0Wy1tT1GeKC8L6a9%2FOTMLGOaj5o0ULyDmtpw5SJDanwhMpmkPxczpN%2BQlA%2F6dwd8JoKIw6BzOPDPWvE9ZYBNNcMVJFxOFNQP3l3iV2IR3WabF2YAteEr6Qklr4%2FPZtxiHf%2FIhd%2BlEvM39cGYbmuyFP5V1qBaYbBwx53hQDNhZCbLcwq2ARAiZcBuQofScIpd2mdZ5fdgfDqNsDipZa710L7chGE7%2F7NtCbST9jdGRJ2mKgv%2BK15TIFuXVtHXeDLNcaXxHoZX7vfQ1O%2BD%2FgJYH54FMEWD7sOysMNn%2FmMQGOqUBnaWXvnG7obOzNXzhmEny5Sz722MIwm04MnjpHoVxCB639WzQo4hkDmc0urvK7jITXTD5LMLy6NmDdvgVi7fqNYe3K%2FNIy98%2Fo3JcJr%2BKjUowZF0gze2q2hfA0Tx0K8%2FETkJvJZk%2FXkYAlKA%2FL%2BjWGiK5kWre9uOSukc3umwucIL9KcMJ0g2%2F4kI%2FTTOsqQVoDSFisDOK4NwKpFGBQlmifYtoCvlg&X-Amz-Signature=84fcce65e7e9621817b20db1ee5c3d08773641583b6a350b11c4223f6b3fecdf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TP2NBYEY%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T150810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQCCuz%2FSxk5%2Fww3cFdwejbdXR68AY0z3W6nxrLnX0gMXvwIgakEs6Kzd62%2BIqpwR38YoSsjf8nEPeD3TIk%2Bl9EPx0SYq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDFP4IVkCv5Cd0wgrcircA%2F8rIxLTdqRntW6kCkun6ElmYHyFojWquCo2iIqSpxl2z4WgitmfAPpFQ0YuXJppmUfS6fR1UYWYipPPhGHHCI%2BBuIoo6VouELPvRB1HdFpTyimUi3Vs6nc4%2FqJPuwG7t2rsH27Tifl%2F4iQ2uVEKx8%2BP7WbpuXOi32n0hummxwGDSEi%2BkJaQh3YGvHSa7oqljh1YlT2%2FQsIZHiRgJyg9%2BELtT7Y%2F8PkpQKU%2BlToYL1H22dECbuRxCVbT66s1qjTV5ri1aapUwe%2FFeXfymXMd00890vy6pV8WRg6el9YBZbVzD0CAAC1ExgQ7ndhOHg8Wvt9kCXds%2BpNt%2B0VJIkCeNaVF%2FQh0Wy1tT1GeKC8L6a9%2FOTMLGOaj5o0ULyDmtpw5SJDanwhMpmkPxczpN%2BQlA%2F6dwd8JoKIw6BzOPDPWvE9ZYBNNcMVJFxOFNQP3l3iV2IR3WabF2YAteEr6Qklr4%2FPZtxiHf%2FIhd%2BlEvM39cGYbmuyFP5V1qBaYbBwx53hQDNhZCbLcwq2ARAiZcBuQofScIpd2mdZ5fdgfDqNsDipZa710L7chGE7%2F7NtCbST9jdGRJ2mKgv%2BK15TIFuXVtHXeDLNcaXxHoZX7vfQ1O%2BD%2FgJYH54FMEWD7sOysMNn%2FmMQGOqUBnaWXvnG7obOzNXzhmEny5Sz722MIwm04MnjpHoVxCB639WzQo4hkDmc0urvK7jITXTD5LMLy6NmDdvgVi7fqNYe3K%2FNIy98%2Fo3JcJr%2BKjUowZF0gze2q2hfA0Tx0K8%2FETkJvJZk%2FXkYAlKA%2FL%2BjWGiK5kWre9uOSukc3umwucIL9KcMJ0g2%2F4kI%2FTTOsqQVoDSFisDOK4NwKpFGBQlmifYtoCvlg&X-Amz-Signature=44a09056d13010d10689e9296dc6a98ee4161d98fb8ba161af7c77a6442aa2cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TP2NBYEY%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T150810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQCCuz%2FSxk5%2Fww3cFdwejbdXR68AY0z3W6nxrLnX0gMXvwIgakEs6Kzd62%2BIqpwR38YoSsjf8nEPeD3TIk%2Bl9EPx0SYq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDFP4IVkCv5Cd0wgrcircA%2F8rIxLTdqRntW6kCkun6ElmYHyFojWquCo2iIqSpxl2z4WgitmfAPpFQ0YuXJppmUfS6fR1UYWYipPPhGHHCI%2BBuIoo6VouELPvRB1HdFpTyimUi3Vs6nc4%2FqJPuwG7t2rsH27Tifl%2F4iQ2uVEKx8%2BP7WbpuXOi32n0hummxwGDSEi%2BkJaQh3YGvHSa7oqljh1YlT2%2FQsIZHiRgJyg9%2BELtT7Y%2F8PkpQKU%2BlToYL1H22dECbuRxCVbT66s1qjTV5ri1aapUwe%2FFeXfymXMd00890vy6pV8WRg6el9YBZbVzD0CAAC1ExgQ7ndhOHg8Wvt9kCXds%2BpNt%2B0VJIkCeNaVF%2FQh0Wy1tT1GeKC8L6a9%2FOTMLGOaj5o0ULyDmtpw5SJDanwhMpmkPxczpN%2BQlA%2F6dwd8JoKIw6BzOPDPWvE9ZYBNNcMVJFxOFNQP3l3iV2IR3WabF2YAteEr6Qklr4%2FPZtxiHf%2FIhd%2BlEvM39cGYbmuyFP5V1qBaYbBwx53hQDNhZCbLcwq2ARAiZcBuQofScIpd2mdZ5fdgfDqNsDipZa710L7chGE7%2F7NtCbST9jdGRJ2mKgv%2BK15TIFuXVtHXeDLNcaXxHoZX7vfQ1O%2BD%2FgJYH54FMEWD7sOysMNn%2FmMQGOqUBnaWXvnG7obOzNXzhmEny5Sz722MIwm04MnjpHoVxCB639WzQo4hkDmc0urvK7jITXTD5LMLy6NmDdvgVi7fqNYe3K%2FNIy98%2Fo3JcJr%2BKjUowZF0gze2q2hfA0Tx0K8%2FETkJvJZk%2FXkYAlKA%2FL%2BjWGiK5kWre9uOSukc3umwucIL9KcMJ0g2%2F4kI%2FTTOsqQVoDSFisDOK4NwKpFGBQlmifYtoCvlg&X-Amz-Signature=c8d58d10d0efd1413e3a607f0d71deebd20576f1e8408a26be2ad3c92dcb8bab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLZATLKI%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T150812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIBQy4vPMBp9AeRtxZ%2BF4El1HAT%2B1LgUpqMdQ0cCed9BlAiEAsBx2BoVObX1RAoISlj992s55Xq%2F3aQXym%2FX8UBdlMlkq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDOHFthkFE9Qy1KuJEircA4Jxu8yJoXxSyV1vVdJ1mB5L5jADyqkaHjGaWWlcAbJv1KI52xPNKbnCPLRltGrlxVjxnq17LdR9wckKCF8PiJ91URkwXQgoE%2FGbfUewIBFiqqT%2B44cvU9CqpNFYiL13u%2FIeBzKAhGEuMadkDrM77VzbFxnrSoV4QELNjO4u0vquQ%2Fb%2BxPFrEWCI%2FnW1HhKh9gS4DqHwRfDTjkRrOVviB1X57W8EAYkR%2B6CIWKwxexskVavon30vfIPD1K2DS9uvs4tJkTsQB04IQDkXq3ZBYNIkfQfVpjFjIflhlB6kmZ7R4l09YTC0D2OBnRmNZCtMK1SPRner7zswwqrsgMdYgsKIRPipe0gjHe0Ii1oUk7LSsZhu%2FrMUh7%2FJmZMMaURpSaWk2N7w71OV85AqQZ3y%2Fr6pfFN6NgvHkj3WuswbelxQvbOOIpDsnkGhU12%2F7ZE75Eczxesy4QAUcD5mtLcdE4yrQUtZqh7cbUKn09X31laDxvI5ivRKsBF9eEfJg3mqgwvsXGpmaXs3lrUlnugeyGiGAljsZqpZjTK0vWiSG1Ga9lKnKMPq0v10msdvYG8yeEqW68jloOvkgIjs%2FxAwRrgOdNiKjS3zkJa8Iq29oNH8HkxXIKJ2i1cnCM8kMJ%2Fel8QGOqUBfi2GS%2BhbUHpUQZ2HN%2F%2BpUhEn%2BVm%2BD5%2BuT0QUN%2ByTM0c5Ra3AuRW5wIC5F66%2FXg23jUhGrphEakYTF7nkb6fqTdofV0aseT7ulUXDUIR2QSbRdIRacrULTJG4hZDjCb0DRoPnjM2h1ytAHq46pjzRk4x6ZZk1w%2BjRnz73iRmg4OTCL2JPEJyhPW7%2FUc1SODaD8OkHbItdcZ3E3aU9hemad%2BfJI1w1&X-Amz-Signature=bb767f15d4508f3e4191d75e323a0b80722707b3e0dac93580ad38d741884075&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBJBBVGS%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T150813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQC%2BflQ5GOt8YOIg%2BHvU9dVl2Ju5fv111ie%2BiLSdm2Y60wIhAPfDtQD9H6a4ErIq2qhLU%2F6xL03G1whibTyzs79k76DSKv8DCHgQABoMNjM3NDIzMTgzODA1IgwtsIOMgYRJjCyQx%2F4q3AM5XL2YJb%2FoQ0djQT%2B%2Fm%2FvS3RyCb7Js2yxHTFFRdV%2BUNHhlCLD83UrLUQ%2Blu1U1DODcLnXQu0ncu6p9QAuM%2BtGhNKHc5Xumj%2FmX420Yta%2BPYodt4RPwMNArCwtmv9Qk7cmJywVRPqF1uFH16hzKn0Nh%2BF%2FDIo%2FLK4tHPwgQq8YxjqXUq5dXXMlijknz2%2FLpymZSY5F1XFQa53d4ZVH1GAXuHdBh4KpoXuWG3vWFSb53mP5zxae4obx3pDkqDK75ZfF7aV9BL1j5qulTcipxuVCfNjF2fyq9A01wNwFaIPNqSN%2FFCdbRK%2BJByo2v0XBk6Mm6ihLKMksNMsEejfIzwIMDOz83S48KLL3YQIodrmoojTYrEd9HUDAhPngfHzwRX6rdKy6LjXrZjBGwJXC7LZosxbkgI8%2BBe%2FR4fqM309mhit0daWWTMb%2Bx2A9q%2FA02kCPfN7dvynkFa%2FFuFTvo%2FQmRyaXyssNdaexito7zWV%2BGLC06%2FgwgkW20%2Bs8ojvL84Nt97DXv2WV%2BPuvvB05iOnP%2Fiwft2LgC%2FbTv%2FCdK05FE6KJT8nsa%2FeySPa747A5GzodTcXVoEU3giqWhKqDQktfpCGUxzBdJaomcTlsmHuwxSM5KgqNJhC0L9EZAdDC%2B95jEBjqkAa25vAB%2BquEpJPaVwwqRvJbJOcH3RbMz%2B4KYdvvoX4fmlZe13noLty3wb2ziQW3PAaCnTVsJA0LaHEUsUYjU%2F7%2BMwx0dGJelRiOZgKQH%2BjkXx6ke6THbhmVMTV%2BI1K31%2BoUdtdABKQQBOAUU4b39QnAJUl0FS0hcXwLBX9lNeJnvRUwJBLCdX9AZptHrPh3tqiSW5MW0WrvPcxhq3qNTjBKKV4ZK&X-Amz-Signature=fb40649a758faf3381909f962d80786f980b12f4b63d1a5c6f005c3616e37ab4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TP2NBYEY%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T150810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQCCuz%2FSxk5%2Fww3cFdwejbdXR68AY0z3W6nxrLnX0gMXvwIgakEs6Kzd62%2BIqpwR38YoSsjf8nEPeD3TIk%2Bl9EPx0SYq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDFP4IVkCv5Cd0wgrcircA%2F8rIxLTdqRntW6kCkun6ElmYHyFojWquCo2iIqSpxl2z4WgitmfAPpFQ0YuXJppmUfS6fR1UYWYipPPhGHHCI%2BBuIoo6VouELPvRB1HdFpTyimUi3Vs6nc4%2FqJPuwG7t2rsH27Tifl%2F4iQ2uVEKx8%2BP7WbpuXOi32n0hummxwGDSEi%2BkJaQh3YGvHSa7oqljh1YlT2%2FQsIZHiRgJyg9%2BELtT7Y%2F8PkpQKU%2BlToYL1H22dECbuRxCVbT66s1qjTV5ri1aapUwe%2FFeXfymXMd00890vy6pV8WRg6el9YBZbVzD0CAAC1ExgQ7ndhOHg8Wvt9kCXds%2BpNt%2B0VJIkCeNaVF%2FQh0Wy1tT1GeKC8L6a9%2FOTMLGOaj5o0ULyDmtpw5SJDanwhMpmkPxczpN%2BQlA%2F6dwd8JoKIw6BzOPDPWvE9ZYBNNcMVJFxOFNQP3l3iV2IR3WabF2YAteEr6Qklr4%2FPZtxiHf%2FIhd%2BlEvM39cGYbmuyFP5V1qBaYbBwx53hQDNhZCbLcwq2ARAiZcBuQofScIpd2mdZ5fdgfDqNsDipZa710L7chGE7%2F7NtCbST9jdGRJ2mKgv%2BK15TIFuXVtHXeDLNcaXxHoZX7vfQ1O%2BD%2FgJYH54FMEWD7sOysMNn%2FmMQGOqUBnaWXvnG7obOzNXzhmEny5Sz722MIwm04MnjpHoVxCB639WzQo4hkDmc0urvK7jITXTD5LMLy6NmDdvgVi7fqNYe3K%2FNIy98%2Fo3JcJr%2BKjUowZF0gze2q2hfA0Tx0K8%2FETkJvJZk%2FXkYAlKA%2FL%2BjWGiK5kWre9uOSukc3umwucIL9KcMJ0g2%2F4kI%2FTTOsqQVoDSFisDOK4NwKpFGBQlmifYtoCvlg&X-Amz-Signature=2dcc722a17404165e7983176717bfc6a3c28c4a415f255a3d55c0eed98fbd232&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
