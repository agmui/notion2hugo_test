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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WAAKHZ7%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T140906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDi0jTW1prp4r0ijxPTi0VyAn20bA7%2FAILUKxAE0ajUOAIgd5imu6T903nOurakYschHbPp2IOWvruBKI%2BfJGuKsH8qiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHVKxaKAcfOYNbGuqCrcA0B%2FL39ssg3G9yDBKNrF9J8CilAZ0RBwfVBxD1Jfz6Le9oX6Sr8fDDyCK282ZOW7nmMJrqFyG92uDK%2FLvkFLo6QptHw%2BBgS%2FJcLYDwaCxLoZqb7J4ep18DIc%2BIL2WTvFzZeWROUb5ClY2UB4MzCKpGWY6c73vpzb4zvk%2BLMw8Dp0kt0Muc30pZdKHEvZFn5b4i7UtvR3UYXdJEdcyWXI5zvqxrwUQ09BJeE2BA2Ta2gxwsWmQ2VWmSn6ZHGaC9Tz3TV8dNYOm%2FoWNrC1LIpDJgccQhfNoVdOSMhvhZRxvw7Iutz4GwROS09ziua47F1ro5jU%2FU8cquNUvFZz8SNhD9%2Ffun9%2Foupp7QcUvqDRaqx8iavpOTnNlMFg9tnkcGZoIENFKz2IjwWNgR45BiYJnY0FKByA3DgB3t%2F6EzTRUABf6nWUfnCHXvOpJ50dd%2F42GU1A19YTD7YPiX%2BScfGP32t5%2BpI9Pk7dYMIUXcaVRz8ql4ogmFG6DiIgk%2FHmZTXVxcWSM9LxwtgKZ9aNqVfMPThtMFBrsSTMBNUylubGizCP1SQvOvhP8Xhy23vokNOz936g7jtW8glh6XP3OzKOx4CJY%2F9%2FJMOXsvmJH6A9Pkp4Epn%2BtiRQj3gDVGhVMPmdm8IGOqUBTDv9hztxvk0mcdjniknkmov9%2BhwRLp6zktpahcQbmyaBH5g0odW1AjBWYVWUghl5VHzfFEWeZMZfKMUjAdxIUNDRvlo4HEEjnSjYSEzSF8KPwzC%2Fnt7zSW4Bo1KlZ3MzdMOyd28TSTKYPxWc7SgP91vI%2Bqm9adFoLttTDC6KyrJaiMH4Q3ltulnuDr%2B1BAaMtsbIxmnxrPWch372s3006aTBrx2b&X-Amz-Signature=ba09756e70804c9ce3d0a43d1da21b3cd1bf37b1e558c1a5d8eeababa451f8f1&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WAAKHZ7%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T140906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDi0jTW1prp4r0ijxPTi0VyAn20bA7%2FAILUKxAE0ajUOAIgd5imu6T903nOurakYschHbPp2IOWvruBKI%2BfJGuKsH8qiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHVKxaKAcfOYNbGuqCrcA0B%2FL39ssg3G9yDBKNrF9J8CilAZ0RBwfVBxD1Jfz6Le9oX6Sr8fDDyCK282ZOW7nmMJrqFyG92uDK%2FLvkFLo6QptHw%2BBgS%2FJcLYDwaCxLoZqb7J4ep18DIc%2BIL2WTvFzZeWROUb5ClY2UB4MzCKpGWY6c73vpzb4zvk%2BLMw8Dp0kt0Muc30pZdKHEvZFn5b4i7UtvR3UYXdJEdcyWXI5zvqxrwUQ09BJeE2BA2Ta2gxwsWmQ2VWmSn6ZHGaC9Tz3TV8dNYOm%2FoWNrC1LIpDJgccQhfNoVdOSMhvhZRxvw7Iutz4GwROS09ziua47F1ro5jU%2FU8cquNUvFZz8SNhD9%2Ffun9%2Foupp7QcUvqDRaqx8iavpOTnNlMFg9tnkcGZoIENFKz2IjwWNgR45BiYJnY0FKByA3DgB3t%2F6EzTRUABf6nWUfnCHXvOpJ50dd%2F42GU1A19YTD7YPiX%2BScfGP32t5%2BpI9Pk7dYMIUXcaVRz8ql4ogmFG6DiIgk%2FHmZTXVxcWSM9LxwtgKZ9aNqVfMPThtMFBrsSTMBNUylubGizCP1SQvOvhP8Xhy23vokNOz936g7jtW8glh6XP3OzKOx4CJY%2F9%2FJMOXsvmJH6A9Pkp4Epn%2BtiRQj3gDVGhVMPmdm8IGOqUBTDv9hztxvk0mcdjniknkmov9%2BhwRLp6zktpahcQbmyaBH5g0odW1AjBWYVWUghl5VHzfFEWeZMZfKMUjAdxIUNDRvlo4HEEjnSjYSEzSF8KPwzC%2Fnt7zSW4Bo1KlZ3MzdMOyd28TSTKYPxWc7SgP91vI%2Bqm9adFoLttTDC6KyrJaiMH4Q3ltulnuDr%2B1BAaMtsbIxmnxrPWch372s3006aTBrx2b&X-Amz-Signature=23f11f33846243ba0b4d380744b3d3a46f913ec9d4182d5d9acff9d700f10c42&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WAAKHZ7%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T140906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDi0jTW1prp4r0ijxPTi0VyAn20bA7%2FAILUKxAE0ajUOAIgd5imu6T903nOurakYschHbPp2IOWvruBKI%2BfJGuKsH8qiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHVKxaKAcfOYNbGuqCrcA0B%2FL39ssg3G9yDBKNrF9J8CilAZ0RBwfVBxD1Jfz6Le9oX6Sr8fDDyCK282ZOW7nmMJrqFyG92uDK%2FLvkFLo6QptHw%2BBgS%2FJcLYDwaCxLoZqb7J4ep18DIc%2BIL2WTvFzZeWROUb5ClY2UB4MzCKpGWY6c73vpzb4zvk%2BLMw8Dp0kt0Muc30pZdKHEvZFn5b4i7UtvR3UYXdJEdcyWXI5zvqxrwUQ09BJeE2BA2Ta2gxwsWmQ2VWmSn6ZHGaC9Tz3TV8dNYOm%2FoWNrC1LIpDJgccQhfNoVdOSMhvhZRxvw7Iutz4GwROS09ziua47F1ro5jU%2FU8cquNUvFZz8SNhD9%2Ffun9%2Foupp7QcUvqDRaqx8iavpOTnNlMFg9tnkcGZoIENFKz2IjwWNgR45BiYJnY0FKByA3DgB3t%2F6EzTRUABf6nWUfnCHXvOpJ50dd%2F42GU1A19YTD7YPiX%2BScfGP32t5%2BpI9Pk7dYMIUXcaVRz8ql4ogmFG6DiIgk%2FHmZTXVxcWSM9LxwtgKZ9aNqVfMPThtMFBrsSTMBNUylubGizCP1SQvOvhP8Xhy23vokNOz936g7jtW8glh6XP3OzKOx4CJY%2F9%2FJMOXsvmJH6A9Pkp4Epn%2BtiRQj3gDVGhVMPmdm8IGOqUBTDv9hztxvk0mcdjniknkmov9%2BhwRLp6zktpahcQbmyaBH5g0odW1AjBWYVWUghl5VHzfFEWeZMZfKMUjAdxIUNDRvlo4HEEjnSjYSEzSF8KPwzC%2Fnt7zSW4Bo1KlZ3MzdMOyd28TSTKYPxWc7SgP91vI%2Bqm9adFoLttTDC6KyrJaiMH4Q3ltulnuDr%2B1BAaMtsbIxmnxrPWch372s3006aTBrx2b&X-Amz-Signature=94d94689800cf5cb685ba64726a7f8dc7e90de7f0a089b6a3319b4bb2968e5ac&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTOSBWMH%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T140908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHUe2Gx7uZAbBcXQ5aYD8fiPVPt1UtgwzUIrumNTWPeKAiBNqr1TyTe8YSEmxR4RVBn17u718QS7DtXXrch2pC64viqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMt6eN81LtpEutM5aeKtwD6i7XYil1rs5R1GojlKbeNZV0V%2Fvi%2BspmehbmW48rrQw6k7DCF1WYqCCT2e0j3FV09V%2Fu2ZhNPZ4KkDdxAfA6guqxXrD3azVAKbih%2B1sU4YwHtLQ6nKwATIWlvYGFkWW0xefYBlGZ5ah6ruuy2FvKA1YX5Kc9aie64dtW8vdx3PhT7EoAoIUBP8XRUT7u747R8ru9tBDydXOc%2FB056jYuluzwvifPuzSjh%2ByRafrA4s2cxjH4aGkfe6ZNUtgXycIF%2FQmPrKJgf86zrRn%2FPA14z0GQXvVAu67xiZnPwkS8bhNTkdMKDpg2%2FNnbjBwMaucjndIqnKSBXJQqz%2B%2FBgr3fV%2B8CsYm1TIlo%2F5ZoMFYFTxlFr1MFUzCNlrsXUll9Y0Pxa0g407ldLxQZrzHSazoNlOwzA3wlkqNHdXfxBuSYuWNG5ybDSK%2BPoJolBGjKCyA%2BglVZQuk94YBJ1HrOekwzCTo45rsq2W7Pf7Lmm5pZ9eJaau8R2SY5YmezSaeFht3faDSG0L%2BLZiOow%2BcDQBcgmzb07Qx%2BJr1U5T1XftJHesSYAznisjyuys77yvP4kld6wd3ab55YOh0yWyt9w1qo5fsAQXi%2BO%2B8qPwo8lhv2swJfy5PH3ofKZq7v28Qw6Z2bwgY6pgFXgNpEyBOAhNGOTqYOCugfBT6XYbZxVJYmNtnhfxoSRgQJT1iorCUzPbPw4GS1Wxl478F3qrUEWlYOrByzadu4y18aRlv8K92FSZIbhL1zvFw%2FIW%2FZrwIiTDae98mGQqn96LuTX7R2NTCQ5dBsYTtCSR9vTUWPQVQAAt%2FSF%2BFDpyF60SWquR6LERi7CUdlMv4m%2BPOMuIQr4Ts535nar0v313%2BLl5P1&X-Amz-Signature=92b9c0647fe6756bc1fece669c13692ce5fcf8c9d23dc8b7a7ae5fc0cf07d930&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665C46RYNE%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T140908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB4FTOd8uD%2FZomt9JR8pVKkfNiFkHLCafWMsucQoURj8AiBhXiJE5A3xTQkIbMND6QwgULA2GOcd6SWgf89%2Fis%2FhviqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8Ij5GnigH%2BkPmj1VKtwDzN7bnAHHgTGnW5K3NSf0GnCJUG058erRpohl1nRWZpDpazzpATe%2B%2B70JtG4JsDEXIFh6jhWQxWdFoEWoOgdDoxjIC6u%2FLMMS4uHkVmdWn0OeM1t829OCpMqO8%2BjQ6YL2qAvBlz97gl%2BlSALNOYw0bRJ6611Vbou%2F9d0UQb7zFOT%2Fm6DjpcZLnVea1SZyg3RhNm8SCRDZ3n%2BTX7qj20fbMIy9l3JMqmWWTRgz9oO9mamSY9zwW3rNTno%2BrpKd%2BfhNq9CwoXt5WFL%2BGggu5wR0cpdRK4%2F51QK0PkivD4vt%2F%2BkrvsqbwYns5emyIvAVldCvQ%2BQ8Kj%2BAWJ4ePW3rY2t%2FOx%2BBttiJjurGPmlxE904MO6ZxvNBgEZ3AXHEk8WUL4tv583pF7r9RjvTlLMItlwxD8%2ByE6VRVtfDvdB9jkyb29l6ge4gZVcIAjc4WYt2r6fJBY3LFPzYQKwR7X3Us5kl5abn%2B8rezCreAohb3wSvjwqqdtZqhVeDs0Kqb0rH7jJCzFQz3TeWe9CzBx32ae3dJQ219x932qjRcLPl7Pgj8vYHj4WINtVqNMCrYpRe8w4tbJoeSYMYAP6dhH3%2FergenV%2FeanzYKnLHpYrgJx4Jxx400QGs%2B9aQekHgHHIw8J2bwgY6pgFrg5NZBvLFm93WOsUqYSNtp86YJOfgCcRGo2RwXDjyL%2BwiG8w3W5gqtGHHoVAsrhL2SrhXrR6xGrUoLjef%2B7yoD4FqVL1q9QthdUs9ZLSF%2B5TAo5p5HWkKjIauc0A0ZTglDNu4TKWnMqyt%2BS0DYbyH%2B%2BC%2B1%2FyP2w6sXu8ojwINxFSQ6Mc6U5e17P%2BdRLAsQ8EdfhGnoCkiQ6%2FU0shSQz23jrTqAl9k&X-Amz-Signature=ecb9c54b8b45d2e561f0c2f6dc57233944606cf446d2f44212f25daca7021217&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WAAKHZ7%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T140906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDi0jTW1prp4r0ijxPTi0VyAn20bA7%2FAILUKxAE0ajUOAIgd5imu6T903nOurakYschHbPp2IOWvruBKI%2BfJGuKsH8qiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHVKxaKAcfOYNbGuqCrcA0B%2FL39ssg3G9yDBKNrF9J8CilAZ0RBwfVBxD1Jfz6Le9oX6Sr8fDDyCK282ZOW7nmMJrqFyG92uDK%2FLvkFLo6QptHw%2BBgS%2FJcLYDwaCxLoZqb7J4ep18DIc%2BIL2WTvFzZeWROUb5ClY2UB4MzCKpGWY6c73vpzb4zvk%2BLMw8Dp0kt0Muc30pZdKHEvZFn5b4i7UtvR3UYXdJEdcyWXI5zvqxrwUQ09BJeE2BA2Ta2gxwsWmQ2VWmSn6ZHGaC9Tz3TV8dNYOm%2FoWNrC1LIpDJgccQhfNoVdOSMhvhZRxvw7Iutz4GwROS09ziua47F1ro5jU%2FU8cquNUvFZz8SNhD9%2Ffun9%2Foupp7QcUvqDRaqx8iavpOTnNlMFg9tnkcGZoIENFKz2IjwWNgR45BiYJnY0FKByA3DgB3t%2F6EzTRUABf6nWUfnCHXvOpJ50dd%2F42GU1A19YTD7YPiX%2BScfGP32t5%2BpI9Pk7dYMIUXcaVRz8ql4ogmFG6DiIgk%2FHmZTXVxcWSM9LxwtgKZ9aNqVfMPThtMFBrsSTMBNUylubGizCP1SQvOvhP8Xhy23vokNOz936g7jtW8glh6XP3OzKOx4CJY%2F9%2FJMOXsvmJH6A9Pkp4Epn%2BtiRQj3gDVGhVMPmdm8IGOqUBTDv9hztxvk0mcdjniknkmov9%2BhwRLp6zktpahcQbmyaBH5g0odW1AjBWYVWUghl5VHzfFEWeZMZfKMUjAdxIUNDRvlo4HEEjnSjYSEzSF8KPwzC%2Fnt7zSW4Bo1KlZ3MzdMOyd28TSTKYPxWc7SgP91vI%2Bqm9adFoLttTDC6KyrJaiMH4Q3ltulnuDr%2B1BAaMtsbIxmnxrPWch372s3006aTBrx2b&X-Amz-Signature=660a4dc1b4af929dec1dd7faafcc0fd664bb83b59a9ecc27dd736681a0c4cfed&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
