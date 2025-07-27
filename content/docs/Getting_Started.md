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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XQIHP2L%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T121552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIAKfzNnwSVrblIbBA1ShEVoh%2BbT%2B7wgiZZyPlvDBjSFjAiEA0GVC1Lcjne8DUCPTGEP7%2B7J%2F1xdD05dwRufIA5Ilr5Qq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDPGkLxT4t652jbkwvCrcAxVEdaSxiUyisslKleqK86WvFBMQr4QqtAbSZ15Dv8X2AXpTYHUJdxjz0A28oJQiNqBbI4I%2FE8QMbig0h%2F8y62FSZngI7QsEXWoINAq3UDdmT3bknHkWyousvk%2F59xVh9pLrjGLVCKzQIfX%2FcntS61bClzWhRufFSZ1KgfDyXD5FHaMaGHfT6R%2BVY0tVdr9sWXHlonzOWkwuj1t0LZjnZm1%2FYzML1nXLuUbrCMECsWff4gGIiKF0RNnDvLxs0FKrmNH%2BwQKg5b%2BzSqXoUkX3gMfBKhIj4pa01%2BiVLhC2%2B7uyfY7r6dIK76K2Q1dlCLxf9%2FiXubtGQQZlopPupY3QRsE75%2Bk0aQoe7EVBi7Q5vg8GJ3M6CmCOAFHesPUNovYGBdysGPHNSDgEubcvexP%2BoY02RM1x6pXxnIUyKi1iGOX%2FYm86ZwFLLjehR6RkMS811iUGHQx%2BEeKY84A2dEaetYXp%2BLXjWf29YwLd6ps3FUTC3ZZU3HQcMEnhi5tHNCTG%2FRMRqT673jsM5tkaDaUjWVtFRaPyF1CcAxvHqVc7oFWyYQnt8HI%2F57JYdqnSWSYfqkcoxQRuOtDvhj1KbfzhXHKFc8XS%2F3bAkRIlv6EN49SdfHBNssUfsonLhu2xMKbgl8QGOqUBb00WVpF46%2F1NZ7kJgMH%2FYWZTRzUU9CEEvuNn7pCERP4dVzB%2BaHmDb5CN7HenJblHMDdkS5RmCikqve2lx99j3ZrGoJy0oKrlqAs8ak%2BjuKI%2Bi154y%2FuiQCB728jshEyOlsW1roSemYi8fHobPpaIT7h%2FsFJM0Qrld4wzpVtymKj5XUHHUEJ8Kh0Zh9t5mK%2BtUTj5j3AUJq%2Fakdmo70NC25zjMTbJ&X-Amz-Signature=14041b34bd6554573232d162e39b067d10349fc4ffbff059dded8762473673a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XQIHP2L%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T121552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIAKfzNnwSVrblIbBA1ShEVoh%2BbT%2B7wgiZZyPlvDBjSFjAiEA0GVC1Lcjne8DUCPTGEP7%2B7J%2F1xdD05dwRufIA5Ilr5Qq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDPGkLxT4t652jbkwvCrcAxVEdaSxiUyisslKleqK86WvFBMQr4QqtAbSZ15Dv8X2AXpTYHUJdxjz0A28oJQiNqBbI4I%2FE8QMbig0h%2F8y62FSZngI7QsEXWoINAq3UDdmT3bknHkWyousvk%2F59xVh9pLrjGLVCKzQIfX%2FcntS61bClzWhRufFSZ1KgfDyXD5FHaMaGHfT6R%2BVY0tVdr9sWXHlonzOWkwuj1t0LZjnZm1%2FYzML1nXLuUbrCMECsWff4gGIiKF0RNnDvLxs0FKrmNH%2BwQKg5b%2BzSqXoUkX3gMfBKhIj4pa01%2BiVLhC2%2B7uyfY7r6dIK76K2Q1dlCLxf9%2FiXubtGQQZlopPupY3QRsE75%2Bk0aQoe7EVBi7Q5vg8GJ3M6CmCOAFHesPUNovYGBdysGPHNSDgEubcvexP%2BoY02RM1x6pXxnIUyKi1iGOX%2FYm86ZwFLLjehR6RkMS811iUGHQx%2BEeKY84A2dEaetYXp%2BLXjWf29YwLd6ps3FUTC3ZZU3HQcMEnhi5tHNCTG%2FRMRqT673jsM5tkaDaUjWVtFRaPyF1CcAxvHqVc7oFWyYQnt8HI%2F57JYdqnSWSYfqkcoxQRuOtDvhj1KbfzhXHKFc8XS%2F3bAkRIlv6EN49SdfHBNssUfsonLhu2xMKbgl8QGOqUBb00WVpF46%2F1NZ7kJgMH%2FYWZTRzUU9CEEvuNn7pCERP4dVzB%2BaHmDb5CN7HenJblHMDdkS5RmCikqve2lx99j3ZrGoJy0oKrlqAs8ak%2BjuKI%2Bi154y%2FuiQCB728jshEyOlsW1roSemYi8fHobPpaIT7h%2FsFJM0Qrld4wzpVtymKj5XUHHUEJ8Kh0Zh9t5mK%2BtUTj5j3AUJq%2Fakdmo70NC25zjMTbJ&X-Amz-Signature=c77d71bf0899d4b909dac9be222f55a2f51af5590f89dd9c8e6c33ecf97c3c81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XQIHP2L%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T121552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIAKfzNnwSVrblIbBA1ShEVoh%2BbT%2B7wgiZZyPlvDBjSFjAiEA0GVC1Lcjne8DUCPTGEP7%2B7J%2F1xdD05dwRufIA5Ilr5Qq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDPGkLxT4t652jbkwvCrcAxVEdaSxiUyisslKleqK86WvFBMQr4QqtAbSZ15Dv8X2AXpTYHUJdxjz0A28oJQiNqBbI4I%2FE8QMbig0h%2F8y62FSZngI7QsEXWoINAq3UDdmT3bknHkWyousvk%2F59xVh9pLrjGLVCKzQIfX%2FcntS61bClzWhRufFSZ1KgfDyXD5FHaMaGHfT6R%2BVY0tVdr9sWXHlonzOWkwuj1t0LZjnZm1%2FYzML1nXLuUbrCMECsWff4gGIiKF0RNnDvLxs0FKrmNH%2BwQKg5b%2BzSqXoUkX3gMfBKhIj4pa01%2BiVLhC2%2B7uyfY7r6dIK76K2Q1dlCLxf9%2FiXubtGQQZlopPupY3QRsE75%2Bk0aQoe7EVBi7Q5vg8GJ3M6CmCOAFHesPUNovYGBdysGPHNSDgEubcvexP%2BoY02RM1x6pXxnIUyKi1iGOX%2FYm86ZwFLLjehR6RkMS811iUGHQx%2BEeKY84A2dEaetYXp%2BLXjWf29YwLd6ps3FUTC3ZZU3HQcMEnhi5tHNCTG%2FRMRqT673jsM5tkaDaUjWVtFRaPyF1CcAxvHqVc7oFWyYQnt8HI%2F57JYdqnSWSYfqkcoxQRuOtDvhj1KbfzhXHKFc8XS%2F3bAkRIlv6EN49SdfHBNssUfsonLhu2xMKbgl8QGOqUBb00WVpF46%2F1NZ7kJgMH%2FYWZTRzUU9CEEvuNn7pCERP4dVzB%2BaHmDb5CN7HenJblHMDdkS5RmCikqve2lx99j3ZrGoJy0oKrlqAs8ak%2BjuKI%2Bi154y%2FuiQCB728jshEyOlsW1roSemYi8fHobPpaIT7h%2FsFJM0Qrld4wzpVtymKj5XUHHUEJ8Kh0Zh9t5mK%2BtUTj5j3AUJq%2Fakdmo70NC25zjMTbJ&X-Amz-Signature=566f8ece18aac780bb75c97d94c7e608d8d91a75d0d2858253d3a5dd3eb475cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHRVPVPZ%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T121554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQCurCfvbUHg3zEHKfrTftffJ0nUnJevmLdBHnvlnGhzJQIhALAA9XsFI88mKihJ18DBNAjSbNRSbqC6zIeCnUWDRM4lKv8DCHMQABoMNjM3NDIzMTgzODA1Igzuyt0gpGAw2YSr0A8q3AO92SK7JcPRjvVQl2ga%2FqvQOlPHiJiWFKxm7mXfeCxNAJ%2FJOEAAfGGoeg68BZ6IgmU67PnB3m3TngHich9lTeSnsx6GFiLrpS8nMtLQYUpxeotixMLCu0bhroa8bVir5BbUG%2B3gg2Rk68wZHZ%2BphmqPnuJaWPJHlG8rlN598MGLprSV21zEZiWYyXh%2Bl%2FtK2iNH6lXwcgTI7YsN%2BR0YEiVyJNnV8%2F%2FvL30wuXcafl9jkAzdoYbBzHxHvY9SPTy0kduBNHF%2FS%2Fvu3iD2Qhn4FxK1pv1tZ9C5cJSACH4hkSjWoqqx3PuUQ3qeMSEI8ZP4yOqvM3HGnxrydIhN3SRFzIkiTDRNQV%2FDzTGmydzj7HUccQXPwBTfoMWQd5zQLousXaUaVDUeIQ1s67CD5dcxLOaqWT2sIot%2FqMBgyE4XVRAPMaoSQ51HNGseAFj5SiQxi75eCXbD2hgbt97T1Eq6FZLw7SsX6cpDOgSSK%2BI0sPt%2B%2BEW60B6R4aXIHIivuX1GKXIXCN9VqL7pQmOyE8osMePD9QFlBSZxW8jcdDdtB57YZHUNQitViSPrZgqPpy%2BiSXIfjNAFYTlY5zGRfxtjP1PQC4C8i6MQE%2FHNlZvjZGlLvLEDzkRwmhDYrtzedTCY4ZfEBjqkAe7t%2B5%2BDent5hKM4tZT2PCqv%2BpeFDuntIb%2BcI6W4vGh5LhKsS5XjjLyew%2BpjduoxkslKDshmNUh4p%2BjV5T5ebqtMgqCI%2FbDLHvRNq%2FCNHVDK8xjzDYkdebWFTCfg7FIdNKE8Y32eRbwL1uNpXrRUAAT0WQE1eHFvMmFYfoZs1kCy%2FtNqZ6CJDOS2tGIUfSCpN4U5YJF%2B7BqkTc5IMDVHvkHE8wE%2F&X-Amz-Signature=9f33adf8b38152c42e7baea8191fa02a32a40c1f4df4b7d580df7a1adcac8541&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVORNION%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T121554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQCLoTJjK6bN0PPVKgEP89WkXBWEC40tph9H%2BzEBAp2JNwIhAMaMilm%2Bq8O4T0lAZODspydjSbeunXxPp8EjcTiN3eeDKv8DCHIQABoMNjM3NDIzMTgzODA1IgwVHHaSpXeghjRcOHUq3ANoR6NXI4kAyEic9cPKhTqGuRqsXMgY7jqYF%2FQtlwtP2sJX5V97I9wZ2HXWfRgLJzUv5e%2BTtwe%2FmMUq%2BPkiY2kwiI8vxJY9wDzXe56hTtaNp1hYTBqbCG7YBpY6K33kc1kkJ8Oyvfu9a4mec0SfzSTxKjbkTLIQpuCM4eQXfk1r0AYT4nHg57KUcsrqo0Z8po%2F1XFdGPSOqhgFGUeSmksLeaurpEeqjUq7GJdXWiCW%2BoFGNOddEh00ctH6thh%2F%2BCf82w57Hdd8nIkhxodIrcFeu2p1T%2F4fqMMiZrrsyA7jaU%2FQEbzfTpncebtDCUVSi5zAtoo7fyS%2FP219NYzH1t1KtShVO7rlQwhQ%2FFAIuHRn8z4YZFeh2suFqrta7OKafczgjuDZN8jemJYRnVHNPAoVHOJ%2B1sdEc3pVK3IAwI8fHoDYa2fI6iBBS2sLoLtu9IDVRTQHn5g7auANOtBF03WxxUFIaVLkbFZtosL%2ByFx6X8tSafygFt1I1bx1PRWdU7kGxdA73YJAQYhjhp9E6q6HKTErywCs0T0SJrmbM2EpqKVf%2BmEhcaf1ZEeD8LHYFCbWV2yelFFg4Ie6XRnpjYOQ8XUPpTFVvpVljzxxKhDO7BqkcC31t5ge4JrOSdjCD3JfEBjqkAVBhvqRG%2BEsh1ir9EM7OFCTe1uxjFFxKsdga1X%2FPwTChbeYEHjspfLI4YXS%2FoiGUzmSGC6z%2FP60SwHYKX%2Fwpkk24Gc%2F4ZRD1ij1jp26UPjItx0EaJ8SAqdZJgaq1PWnYG8lj35RO2GVDZn2pGaRLGhdRuylzcK3JicnSzAtV%2FP2%2BNtMcDkX7cXMT1CDTXv70yL3yqMcqOLys4o7lcjhLykKYT1QA&X-Amz-Signature=868336202c075a03edef5df48047d66bbc959c65411ac1dbeecb40b4ab5b2470&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XQIHP2L%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T121552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIAKfzNnwSVrblIbBA1ShEVoh%2BbT%2B7wgiZZyPlvDBjSFjAiEA0GVC1Lcjne8DUCPTGEP7%2B7J%2F1xdD05dwRufIA5Ilr5Qq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDPGkLxT4t652jbkwvCrcAxVEdaSxiUyisslKleqK86WvFBMQr4QqtAbSZ15Dv8X2AXpTYHUJdxjz0A28oJQiNqBbI4I%2FE8QMbig0h%2F8y62FSZngI7QsEXWoINAq3UDdmT3bknHkWyousvk%2F59xVh9pLrjGLVCKzQIfX%2FcntS61bClzWhRufFSZ1KgfDyXD5FHaMaGHfT6R%2BVY0tVdr9sWXHlonzOWkwuj1t0LZjnZm1%2FYzML1nXLuUbrCMECsWff4gGIiKF0RNnDvLxs0FKrmNH%2BwQKg5b%2BzSqXoUkX3gMfBKhIj4pa01%2BiVLhC2%2B7uyfY7r6dIK76K2Q1dlCLxf9%2FiXubtGQQZlopPupY3QRsE75%2Bk0aQoe7EVBi7Q5vg8GJ3M6CmCOAFHesPUNovYGBdysGPHNSDgEubcvexP%2BoY02RM1x6pXxnIUyKi1iGOX%2FYm86ZwFLLjehR6RkMS811iUGHQx%2BEeKY84A2dEaetYXp%2BLXjWf29YwLd6ps3FUTC3ZZU3HQcMEnhi5tHNCTG%2FRMRqT673jsM5tkaDaUjWVtFRaPyF1CcAxvHqVc7oFWyYQnt8HI%2F57JYdqnSWSYfqkcoxQRuOtDvhj1KbfzhXHKFc8XS%2F3bAkRIlv6EN49SdfHBNssUfsonLhu2xMKbgl8QGOqUBb00WVpF46%2F1NZ7kJgMH%2FYWZTRzUU9CEEvuNn7pCERP4dVzB%2BaHmDb5CN7HenJblHMDdkS5RmCikqve2lx99j3ZrGoJy0oKrlqAs8ak%2BjuKI%2Bi154y%2FuiQCB728jshEyOlsW1roSemYi8fHobPpaIT7h%2FsFJM0Qrld4wzpVtymKj5XUHHUEJ8Kh0Zh9t5mK%2BtUTj5j3AUJq%2Fakdmo70NC25zjMTbJ&X-Amz-Signature=9133d482b653fae8278f92babb6e75c1e5a915f05f58bd7faf26946fe24a1554&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
